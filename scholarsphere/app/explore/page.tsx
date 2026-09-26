import type { Metadata } from "next";
import { CurriculumTree } from "@/components/CurriculumTree";
import { grades } from "@/lib/curriculum";

export const metadata: Metadata = { title: "Explore the curriculum" };

export default function ExplorePage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-slate-900">Curriculum explorer</h1>
      <p className="mt-1 text-slate-500">
        Class → Subject → Textbook → Chapter → Topic → Subtopic. Tap to expand; tap a topic to study it.
      </p>
      <CurriculumTree grades={grades.map((g) => ({ id: g.id, label: g.label }))} />
    </div>
  );
}
