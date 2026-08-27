import { SectionHeading } from "@/components/ui/SectionHeading";

const STATS = [
  { value: "18+", label: "Years of Discretion" },
  { value: "$4.2B", label: "In Closed Transactions" },
  { value: "27", label: "Countries Represented" },
  { value: "140", label: "Private Estates Sold" },
];

export function Philosophy() {
  return (
    <section id="about" className="relative bg-charcoal-950 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          eyebrow="Our Philosophy"
          title="A Home Is the Last Great Luxury."
          description="We represent fewer than sixty properties at any given time. Each is chosen not for its price, but for its architectural integrity, provenance, and the story it tells. Our role is quiet, precise, and entirely in service of that story."
        />
        <div className="grid grid-cols-2 gap-8 sm:gap-10">
          {STATS.map((stat) => (
            <div key={stat.label} className="border-l border-gold-400/30 pl-5">
              <p className="font-display text-4xl text-gold-gradient">{stat.value}</p>
              <p className="mt-2 text-sm text-charcoal-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
