"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Castle,
  Gem,
  Home,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Condition,
  PropertyType,
  ValuationInput,
  estimateValuation,
  formatCurrency,
} from "@/lib/valuation";

const STEPS = ["Location", "Details", "Condition", "Estimate"] as const;

const PROPERTY_TYPES: { value: PropertyType; label: string; icon: typeof Home }[] = [
  { value: "villa", label: "Villa", icon: Home },
  { value: "penthouse", label: "Penthouse", icon: Building2 },
  { value: "estate", label: "Estate", icon: Castle },
  { value: "townhouse", label: "Townhouse", icon: Gem },
];

const CONDITIONS: { value: Condition; label: string; hint: string }[] = [
  { value: "needs-renovation", label: "Needs Renovation", hint: "Original condition" },
  { value: "good", label: "Good", hint: "Well maintained" },
  { value: "excellent", label: "Excellent", hint: "Recently updated" },
  { value: "new-build", label: "New Build", hint: "Move-in ready" },
];

const FEATURES: { value: string; label: string }[] = [
  { value: "pool", label: "Pool" },
  { value: "sea-view", label: "Sea / Water View" },
  { value: "smart-home", label: "Smart Home System" },
  { value: "wine-cellar", label: "Wine Cellar" },
  { value: "guest-house", label: "Guest House" },
  { value: "private-dock", label: "Private Dock" },
];

const DEFAULT_INPUT: ValuationInput = {
  address: "",
  city: "",
  propertyType: "villa",
  bedrooms: 4,
  bathrooms: 3,
  sqft: 4500,
  condition: "excellent",
  features: [],
};

function StepShell({
  children,
  direction,
  stepKey,
}: {
  children: React.ReactNode;
  direction: number;
  stepKey: string;
}) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={stepKey}
        custom={direction}
        initial={{ opacity: 0, x: direction > 0 ? 24 : -24 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: direction > 0 ? -24 : 24 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export function ValuationCalculator() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<ValuationInput>(DEFAULT_INPUT);

  const canContinue = useMemo(() => {
    if (step === 0) return data.address.trim().length > 2 && data.city.trim().length > 1;
    return true;
  }, [step, data]);

  function goTo(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  function toggleFeature(value: string) {
    setData((d) => ({
      ...d,
      features: d.features.includes(value)
        ? d.features.filter((f) => f !== value)
        : [...d.features, value],
    }));
  }

  const result = useMemo(() => estimateValuation(data), [data]);

  return (
    <section id="valuation" className="relative bg-charcoal-900 py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          align="center"
          eyebrow="Instant Estimate"
          title="What Is Your Home Worth?"
          description="Answer a few questions and our valuation model — trained on comparable luxury sales — will estimate your property's current market value."
        />

        <div className="mt-14 rounded-3xl border border-charcoal-700 bg-charcoal-950/60 p-6 sm:p-10 glass-panel">
          {/* progress */}
          <div className="mb-10 flex items-center gap-3">
            {STEPS.map((label, i) => (
              <div key={label} className="flex flex-1 items-center gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs transition-colors ${
                    i <= step
                      ? "border-gold-400 bg-gold-400 text-charcoal-950"
                      : "border-charcoal-600 text-charcoal-400"
                  }`}
                >
                  {i + 1}
                </div>
                <span
                  className={`hidden text-xs uppercase tracking-widest sm:block ${
                    i <= step ? "text-gold-300" : "text-charcoal-500"
                  }`}
                >
                  {label}
                </span>
                {i < STEPS.length - 1 && (
                  <div className="hairline flex-1 opacity-40" />
                )}
              </div>
            ))}
          </div>

          <StepShell direction={direction} stepKey={String(step)}>
            {step === 0 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal-300 mb-2">
                    Street Address
                  </label>
                  <input
                    value={data.address}
                    onChange={(e) => setData((d) => ({ ...d, address: e.target.value }))}
                    placeholder="1200 Cielo Drive"
                    className="w-full rounded-xl border border-charcoal-600 bg-charcoal-900 px-4 py-3.5 text-ivory-100 placeholder:text-charcoal-500 outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal-300 mb-2">
                    City / Region
                  </label>
                  <input
                    value={data.city}
                    onChange={(e) => setData((d) => ({ ...d, city: e.target.value }))}
                    placeholder="Bel Air, California"
                    className="w-full rounded-xl border border-charcoal-600 bg-charcoal-900 px-4 py-3.5 text-ivory-100 placeholder:text-charcoal-500 outline-none focus:border-gold-400 transition-colors"
                  />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal-300 mb-3">
                    Property Type
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {PROPERTY_TYPES.map(({ value, label, icon: Icon }) => (
                      <button
                        key={value}
                        onClick={() => setData((d) => ({ ...d, propertyType: value }))}
                        className={`flex flex-col items-center gap-2 rounded-xl border px-3 py-4 text-sm transition-colors cursor-pointer ${
                          data.propertyType === value
                            ? "border-gold-400 bg-gold-400/10 text-gold-300"
                            : "border-charcoal-600 text-charcoal-300 hover:border-charcoal-500"
                        }`}
                      >
                        <Icon size={20} />
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <NumberField
                    label="Bedrooms"
                    value={data.bedrooms}
                    min={1}
                    max={12}
                    onChange={(v) => setData((d) => ({ ...d, bedrooms: v }))}
                  />
                  <NumberField
                    label="Bathrooms"
                    value={data.bathrooms}
                    min={1}
                    max={12}
                    onChange={(v) => setData((d) => ({ ...d, bathrooms: v }))}
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs uppercase tracking-widest text-charcoal-300 mb-2">
                    <span>Living Area</span>
                    <span className="text-gold-300">{data.sqft.toLocaleString()} sqft</span>
                  </div>
                  <input
                    type="range"
                    min={800}
                    max={25000}
                    step={100}
                    value={data.sqft}
                    onChange={(e) => setData((d) => ({ ...d, sqft: Number(e.target.value) }))}
                    className="w-full accent-[#d4af6a]"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal-300 mb-3">
                    Property Condition
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {CONDITIONS.map(({ value, label, hint }) => (
                      <button
                        key={value}
                        onClick={() => setData((d) => ({ ...d, condition: value }))}
                        className={`rounded-xl border px-4 py-3.5 text-left transition-colors cursor-pointer ${
                          data.condition === value
                            ? "border-gold-400 bg-gold-400/10"
                            : "border-charcoal-600 hover:border-charcoal-500"
                        }`}
                      >
                        <span
                          className={`block text-sm ${
                            data.condition === value ? "text-gold-300" : "text-ivory-100"
                          }`}
                        >
                          {label}
                        </span>
                        <span className="block text-xs text-charcoal-400 mt-0.5">{hint}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-charcoal-300 mb-3">
                    Notable Features
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {FEATURES.map(({ value, label }) => (
                      <button
                        key={value}
                        onClick={() => toggleFeature(value)}
                        className={`rounded-xl border px-3 py-3 text-sm transition-colors cursor-pointer ${
                          data.features.includes(value)
                            ? "border-gold-400 bg-gold-400/10 text-gold-300"
                            : "border-charcoal-600 text-charcoal-300 hover:border-charcoal-500"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="text-center py-4">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/10 border border-gold-400/40">
                  <Sparkles className="text-gold-400" size={22} />
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-gold-400">
                  Estimated Market Value
                </p>
                <p className="mt-3 font-display text-4xl sm:text-5xl text-ivory-100">
                  {formatCurrency(result.low)}
                  <span className="text-charcoal-400 mx-2">&ndash;</span>
                  {formatCurrency(result.high)}
                </p>
                <p className="mt-4 text-sm text-charcoal-300">
                  Approximately{" "}
                  <span className="text-gold-300">{formatCurrency(result.pricePerSqft)}</span>{" "}
                  per square foot for {data.address || "this property"}
                  {data.city ? `, ${data.city}` : ""}.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button withArrow>Speak to an Advisor</Button>
                  <Button variant="ghost" onClick={() => goTo(0)}>
                    Start Over
                  </Button>
                </div>
                <p className="mt-6 text-xs text-charcoal-500">
                  This estimate is generated instantly from comparable market data and is not a
                  formal appraisal.
                </p>
              </div>
            )}
          </StepShell>

          {step < 3 && (
            <div className="mt-10 flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => goTo(Math.max(0, step - 1))}
                className={step === 0 ? "invisible" : ""}
              >
                <ArrowLeft size={16} /> Back
              </Button>
              <Button
                disabled={!canContinue}
                onClick={() => goTo(Math.min(3, step + 1))}
                className={!canContinue ? "opacity-40 pointer-events-none" : ""}
              >
                {step === 2 ? "Get Estimate" : "Continue"}
                <ArrowRight size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function NumberField({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-charcoal-300 mb-2">
        {label}
      </label>
      <div className="flex items-center justify-between rounded-xl border border-charcoal-600 bg-charcoal-900 px-2 py-1.5">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-9 w-9 rounded-lg text-lg text-charcoal-300 hover:bg-charcoal-800 hover:text-gold-300 cursor-pointer"
        >
          &minus;
        </button>
        <span className="text-lg text-ivory-100">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          className="h-9 w-9 rounded-lg text-lg text-charcoal-300 hover:bg-charcoal-800 hover:text-gold-300 cursor-pointer"
        >
          +
        </button>
      </div>
    </div>
  );
}
