import type { Notes } from "@/lib/products";

const TIERS: { key: keyof Notes; label: string }[] = [
  { key: "top", label: "Top" },
  { key: "heart", label: "Heart" },
  { key: "base", label: "Base" },
];

export function NotesPyramid({ notes }: { notes: Notes }) {
  return (
    <div className="space-y-6">
      {TIERS.map(({ key, label }) => (
        <div key={key} className="flex gap-6 border-b border-ink/10 pb-6 last:border-0">
          <div className="w-16 flex-shrink-0 pt-1">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-700">{label}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {notes[key].map((note) => (
              <span
                key={note}
                className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink-soft"
              >
                {note}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.15em] text-ink-faint">
        <span>{label}</span>
        <span>{value}/5</span>
      </div>
      <div className="mt-2 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={`h-1 flex-1 rounded-full ${i < value ? "bg-gold-400" : "bg-ink/10"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function IntensityMeters({
  longevity,
  sillage,
}: {
  longevity: number;
  sillage: number;
}) {
  return (
    <div className="grid grid-cols-2 gap-8">
      <Meter label="Longevity" value={longevity} />
      <Meter label="Sillage" value={sillage} />
    </div>
  );
}
