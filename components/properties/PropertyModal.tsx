"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  BedDouble,
  Bath,
  Ruler,
  MapPin,
  Check,
  Move3d,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Property, formatPrice } from "@/lib/properties";
import { PropertyArt } from "@/components/properties/PropertyArt";

const FloorPlan3D = dynamic(() => import("@/components/properties/FloorPlan3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center text-xs uppercase tracking-widest text-charcoal-400">
      Loading floor plan&hellip;
    </div>
  ),
});

function GalleryImage({ property }: { property: Property }) {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="relative h-72 sm:h-96 w-full">
      <PropertyArt property={property} index={activeImage} />
      <button
        onClick={() => setActiveImage((v) => (v + 2) % 3)}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-charcoal-950/60 p-2 text-ivory-100 hover:text-gold-300 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setActiveImage((v) => (v + 1) % 3)}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-charcoal-950/60 p-2 text-ivory-100 hover:text-gold-300 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            onClick={() => setActiveImage(i)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              activeImage === i ? "w-6 bg-gold-400" : "w-1.5 bg-ivory-100/40"
            }`}
            aria-label={`Show image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function PropertyModal({
  property,
  onClose,
}: {
  property: Property | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!property) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [property, onClose]);

  return (
    <AnimatePresence>
      {property && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-charcoal-950/85 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-charcoal-700 bg-charcoal-900 shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-20 rounded-full bg-charcoal-950/70 p-2 text-ivory-100 backdrop-blur-sm transition-colors hover:text-gold-300 cursor-pointer"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Gallery */}
            <GalleryImage key={property.id} property={property} />

            <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <div className="flex items-center gap-1.5 text-sm text-charcoal-300">
                  <MapPin size={14} className="text-gold-400" />
                  {property.location}
                </div>
                <h3 className="mt-2 font-display text-3xl sm:text-4xl text-ivory-100">
                  {property.name}
                </h3>
                <p className="mt-1 text-xl text-gold-300">{formatPrice(property.price)}</p>

                <div className="mt-6 flex flex-wrap gap-6 border-y border-charcoal-700 py-5 text-sm text-charcoal-300">
                  <span className="flex items-center gap-2">
                    <BedDouble size={17} className="text-gold-400" /> {property.beds} Bedrooms
                  </span>
                  <span className="flex items-center gap-2">
                    <Bath size={17} className="text-gold-400" /> {property.baths} Baths
                  </span>
                  <span className="flex items-center gap-2">
                    <Ruler size={17} className="text-gold-400" />
                    {property.sqft.toLocaleString()} sqft
                  </span>
                </div>

                <p className="mt-6 text-sm sm:text-base leading-relaxed text-charcoal-300">
                  {property.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-ivory-200/90"
                    >
                      <Check size={15} className="shrink-0 text-gold-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-400">
                  <Move3d size={14} />
                  Interactive Floor Plan
                </div>
                <div className="mt-4 h-72 sm:h-80 lg:h-[26rem] overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-950">
                  <FloorPlan3D rooms={property.rooms} accent={property.accent} />
                </div>
                <p className="mt-3 text-center text-xs text-charcoal-400">
                  Drag to rotate &bull; Scroll to zoom
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
