"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { BedDouble, Bath, Ruler, MapPin } from "lucide-react";
import { Property, formatPrice } from "@/lib/properties";
import { PropertyArt } from "@/components/properties/PropertyArt";

export function PropertyCard({
  property,
  index,
  onSelect,
}: {
  property: Property;
  index: number;
  onSelect: (property: Property) => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 250,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 250,
    damping: 22,
  });
  const glowX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(y, [-0.5, 0.5], [0, 100]);
  const glowBackground = useMotionTemplate`radial-gradient(320px circle at ${glowX}% ${glowY}%, ${property.accent}22, transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      onClick={() => onSelect(property)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", transformPerspective: 900 }}
      className="group relative w-full overflow-hidden rounded-2xl border border-charcoal-700 bg-charcoal-900 text-left shadow-xl shadow-black/30 cursor-pointer"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glowBackground }}
      />

      <div className="relative h-64 w-full">
        <PropertyArt property={property} index={index} />
        <div className="absolute top-4 right-4 z-10 rounded-full bg-charcoal-950/70 px-3 py-1.5 text-sm font-medium text-gold-300 backdrop-blur-sm">
          {formatPrice(property.price)}
        </div>
        <div className="absolute bottom-4 left-4 z-10 flex items-center gap-1.5 text-xs text-ivory-200/80">
          <MapPin size={13} className="text-gold-400" />
          {property.location}
        </div>
      </div>

      <div className="relative z-10 p-6" style={{ transform: "translateZ(30px)" }}>
        <h3 className="font-display text-2xl text-ivory-100 group-hover:text-gold-300 transition-colors">
          {property.name}
        </h3>
        <p className="mt-2 text-sm text-charcoal-300 leading-relaxed line-clamp-2">
          {property.tagline}
        </p>

        <div className="mt-5 flex items-center gap-5 border-t border-charcoal-700 pt-4 text-sm text-charcoal-300">
          <span className="flex items-center gap-1.5">
            <BedDouble size={16} className="text-gold-400" /> {property.beds}
          </span>
          <span className="flex items-center gap-1.5">
            <Bath size={16} className="text-gold-400" /> {property.baths}
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler size={16} className="text-gold-400" />
            {property.sqft.toLocaleString()} sqft
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 translate-y-full bg-gold-400 py-2.5 text-center text-xs font-medium uppercase tracking-widest text-charcoal-950 transition-transform duration-300 group-hover:translate-y-0">
        View Details
      </div>
    </motion.button>
  );
}
