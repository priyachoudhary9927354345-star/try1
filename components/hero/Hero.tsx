import { ScentArt } from "@/components/ui/ScentArt";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-cream">
      <ScentArt accent="#B89B5E" className="absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/40 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-xl animate-fade-up opacity-0" style={{ animationDelay: "0.15s" }}>
          <p className="flex items-center gap-3 text-xs tracking-[0.35em] uppercase text-gold-700">
            <span className="h-px w-8 bg-gold-400" />
            Maison Élan
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
            Scent, distilled
            <br />
            into memory.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft">
            Small-batch fragrances composed from rare, sustainably sourced
            ingredients. Each bottle is a single, considered gesture.
          </p>
          <div className="mt-10">
            <a
              href="#collection"
              className="group inline-flex items-center gap-3 border-b border-ink pb-1 text-sm uppercase tracking-[0.2em] text-ink transition-colors hover:border-gold-500 hover:text-gold-700"
            >
              Explore the Collection
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ink-faint sm:flex">
        <span>Scroll</span>
        <span className="h-10 w-px bg-ink-faint/40" />
      </div>
    </section>
  );
}
