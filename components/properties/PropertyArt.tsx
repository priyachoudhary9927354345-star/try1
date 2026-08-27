import { Property } from "@/lib/properties";

const SILHOUETTES = [
  "M40 190 L40 120 L140 120 L140 90 L230 90 L230 190 Z M140 120 L140 190 M80 120 L80 90 L200 90",
  "M30 190 L30 140 L90 140 L90 100 L170 100 L170 70 L240 70 L240 190 Z M170 100 L170 190 M90 140 L90 190",
  "M50 190 L50 110 L120 70 L190 110 L190 190 Z M50 110 L190 110 M120 70 L120 190",
];

export function PropertyArt({
  property,
  index,
}: {
  property: Property;
  index: number;
}) {
  const [from, to] = property.gradient;
  const silhouette = SILHOUETTES[index % SILHOUETTES.length];

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0 1px, transparent 1px 3px), repeating-linear-gradient(90deg, #fff 0 1px, transparent 1px 3px)",
        }}
      />
      <svg
        viewBox="0 0 280 200"
        className="absolute inset-x-0 bottom-0 h-2/3 w-full opacity-70"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          d={silhouette}
          fill="none"
          stroke={property.accent}
          strokeWidth={1.25}
          strokeLinejoin="round"
        />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
