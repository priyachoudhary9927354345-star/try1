"use client";

import { Check } from "lucide-react";
import { useCompleted } from "@/lib/store";

export function ChapterProgress({
  chapterRef,
  topics,
  barClass,
}: {
  chapterRef: string;
  topics: number;
  barClass: string;
}) {
  const { done } = useCompleted();
  const prefix = chapterRef + "/";
  const completed = Object.keys(done).filter((r) => r.startsWith(prefix)).length;
  const pct = topics ? Math.round((completed / topics) * 100) : 0;
  return (
    <span className="mt-2.5 flex items-center gap-2 text-[11px] text-slate-500">
      <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
        <span className={`block h-full rounded-full ${barClass}`} style={{ width: `${pct}%` }} />
      </span>
      {completed}/{topics} topics
    </span>
  );
}

export function DoneToggle({ topicRef, label }: { topicRef: string; label: string }) {
  const { done, toggleDone } = useCompleted();
  const isDone = !!done[topicRef];
  return (
    <button
      onClick={() => toggleDone(topicRef)}
      aria-pressed={isDone}
      aria-label={isDone ? `Mark “${label}” as not done` : `Mark “${label}” as done`}
      className={`grid size-7 shrink-0 place-items-center rounded-full border-2 transition ${
        isDone ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 text-transparent hover:border-emerald-400"
      }`}
    >
      <Check className="size-4" strokeWidth={3} />
    </button>
  );
}
