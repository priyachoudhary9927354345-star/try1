"use client";

import { useState } from "react";
import { RotateCw } from "lucide-react";

export function FlipCard({
  front,
  back,
  label,
  compact = false,
  flipped: controlled,
  onFlip,
}: {
  front: string;
  back: string;
  label?: string;
  compact?: boolean;
  flipped?: boolean;
  onFlip?: () => void;
}) {
  const [own, setOwn] = useState(false);
  const flipped = controlled ?? own;
  const flip = onFlip ?? (() => setOwn((f) => !f));
  const height = compact ? "min-h-24" : "min-h-64 sm:min-h-72";

  return (
    <button
      type="button"
      onClick={flip}
      data-flipped={flipped}
      aria-label={flipped ? `Answer: ${back}. Tap to see the question.` : `${front}. Tap to reveal the answer.`}
      className={`flip-card block w-full text-left ${height}`}
    >
      <span className={`flip-inner relative grid ${height}`}>
        <span
          className={`flip-face col-start-1 row-start-1 flex flex-col justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 ${
            compact ? "p-3" : "p-6 text-center"
          }`}
        >
          {label && <span className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-violet-500">{label}</span>}
          <span className={`font-semibold text-slate-900 ${compact ? "text-sm" : "text-xl sm:text-2xl"}`}>{front}</span>
          <span className={`mt-2 flex items-center gap-1 text-[11px] text-slate-400 ${compact ? "" : "justify-center"}`}>
            <RotateCw className="size-3" /> tap to flip
          </span>
        </span>
        <span
          className={`flip-face flip-back col-start-1 row-start-1 flex flex-col justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-brand-600 text-white shadow-sm ${
            compact ? "p-3 text-sm" : "p-6 text-center text-lg"
          }`}
        >
          <span className="whitespace-pre-line">{back}</span>
        </span>
      </span>
    </button>
  );
}
