import { Reveal } from "@/components/ui/Reveal";

const QUOTES = [
  {
    quote:
      "Noir de Santal is the rare fragrance that reads as expensive without ever announcing itself.",
    source: "Vogue",
  },
  {
    quote:
      "A house that treats restraint as a design principle, not a limitation.",
    source: "The New York Times",
  },
  {
    quote: "Vétiver Brume smells like the idea of a garden, distilled.",
    source: "Architectural Digest",
  },
];

const PRESS = ["VOGUE", "ELLE", "GQ", "AD", "WWD"];

export function Testimonials() {
  return (
    <section className="bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-5xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {QUOTES.map((item, i) => (
            <Reveal key={item.source} delay={i * 0.1}>
              <figure className="flex flex-col">
                <div className="hairline w-10" />
                <blockquote className="mt-6 font-display text-xl leading-snug text-ink italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-xs uppercase tracking-[0.2em] text-ink-faint">
                  {item.source}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {PRESS.map((name) => (
            <span
              key={name}
              className="font-display text-lg tracking-[0.15em] text-ink-faint/70"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
