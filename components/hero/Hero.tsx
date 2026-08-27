"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroFallback } from "@/components/hero/HeroFallback";
import { useLowPowerMode } from "@/hooks/useMediaQuery";

const HeroScene = dynamic(() => import("@/components/hero/HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});

export function Hero() {
  const lowPower = useLowPowerMode();

  return (
    <section id="top" className="relative h-svh min-h-[640px] w-full overflow-hidden bg-charcoal-950">
      <div className="absolute inset-0">
        {lowPower ? <HeroFallback /> : <HeroScene />}
      </div>

      {/* readability gradient so text stays crisp over the 3D scene */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/10 to-charcoal-950/40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-charcoal-950/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 text-xs tracking-[0.35em] uppercase text-gold-400"
        >
          <span className="h-px w-10 bg-gold-400/70" />
          Aura Estates &mdash; Est. Private Collection
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
        >
          Redefining
          <br />
          <span className="text-gold-gradient italic">Luxury Living</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-base sm:text-lg text-ivory-200/80 leading-relaxed"
        >
          A curated portfolio of the world&apos;s most extraordinary
          residences &mdash; architectural masterpieces, private estates, and
          sky-borne penthouses, presented to a discerning few.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            withArrow
            onClick={() =>
              document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Explore Properties
          </Button>
          <Button
            variant="ghost"
            onClick={() =>
              document.getElementById("valuation")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Value My Property
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-charcoal-300"
      >
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}
