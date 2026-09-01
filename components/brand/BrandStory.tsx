import { ScentArt } from "@/components/ui/ScentArt";
import { Reveal } from "@/components/ui/Reveal";

export function BrandStory() {
  return (
    <section id="story" className="bg-cream py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <Reveal className="order-2 lg:order-1">
          <ScentArt accent="#B89B5E" variant="glow" className="aspect-[4/5] rounded-sm" />
        </Reveal>

        <Reveal delay={0.15} className="order-1 flex flex-col justify-center lg:order-2">
          <p className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold-700">
            <span className="h-px w-8 bg-gold-400" />
            The House
          </p>
          <h2 className="mt-6 font-display text-4xl leading-[1.15] text-ink sm:text-5xl">
            Craft, before commerce.
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              Maison Élan began as a single formula, mixed by hand in a
              borrowed studio. That formula is still in the collection today,
              unchanged.
            </p>
            <p>
              We work with growers who measure harvest by the hour, not the
              season — Mysore sandalwood aged in cedar, Isparta rose cut at
              dawn, Haitian vetiver washed by hand. Every batch is small
              enough to taste like a decision, not a product line.
            </p>
            <p>
              Nothing here is synthesized to save a season. If an ingredient
              is scarce, the bottle waits.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            <div>
              <p className="font-display text-3xl text-ink">04</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink-faint">
                Fragrances
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-ink">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink-faint">
                Small batch
              </p>
            </div>
            <div>
              <p className="font-display text-3xl text-ink">12</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink-faint">
                Source origins
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
