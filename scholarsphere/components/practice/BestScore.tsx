"use client";

import { Trophy } from "lucide-react";
import { useQuizResults } from "@/lib/store";

export function BestScore({ chapterRef, dark = true }: { chapterRef: string; dark?: boolean }) {
  const { results } = useQuizResults();
  const r = results[chapterRef];
  if (!r) return null;
  return (
    <p className={`mt-2 flex items-center gap-1.5 text-xs font-medium ${dark ? "text-white/90" : "text-slate-600"}`}>
      <Trophy className="size-3.5" aria-hidden />
      Best {r.best}/{r.total} · {r.attempts} attempt{r.attempts > 1 ? "s" : ""}
    </p>
  );
}
