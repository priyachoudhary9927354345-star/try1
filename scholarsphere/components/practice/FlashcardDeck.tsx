"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw, Shuffle, X } from "lucide-react";
import type { Flashcard } from "@/lib/curriculum";
import { FlipCard } from "./FlipCard";

export function FlashcardDeck({ cards }: { cards: Flashcard[] }) {
  const [deck, setDeck] = useState(cards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<string>>(new Set());
  const [learning, setLearning] = useState<Set<string>>(new Set());

  const done = index >= deck.length;
  const card = deck[index];

  const go = (delta: number) => {
    setFlipped(false);
    setIndex((i) => Math.max(0, Math.min(deck.length, i + delta)));
  };

  const mark = (isKnown: boolean) => {
    const id = card.id;
    setKnown((s) => toggleIn(s, id, isKnown));
    setLearning((s) => toggleIn(s, id, !isKnown));
    go(1);
  };

  const restart = (subset: Flashcard[]) => {
    setDeck(subset);
    setIndex(0);
    setFlipped(false);
    setKnown(new Set());
    setLearning(new Set());
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === "INPUT") return;
      if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === " " && !done) {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  if (done) {
    const again = deck.filter((c) => learning.has(c.id));
    return (
      <div className="animate-pop rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
        <p className="font-display text-3xl font-semibold text-slate-900">Deck complete!</p>
        <p className="mt-2 text-slate-600">
          <span className="font-semibold text-emerald-600">{known.size} known</span> ·{" "}
          <span className="font-semibold text-amber-600">{learning.size} still learning</span>
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {again.length > 0 && (
            <button onClick={() => restart(again)} className="rounded-xl bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-amber-600">
              Review {again.length} tricky card{again.length > 1 ? "s" : ""}
            </button>
          )}
          <button
            onClick={() => restart(cards)}
            className="flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
          >
            <RotateCcw className="size-4" /> Start over
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between text-xs font-medium text-slate-500">
        <span>
          Card {index + 1} of {deck.length} · <span className="text-slate-400">{card.topic}</span>
        </span>
        <button onClick={() => restart(shuffle(cards))} className="flex items-center gap-1 rounded-lg px-2 py-1 hover:bg-white">
          <Shuffle className="size-3.5" /> Shuffle
        </button>
      </div>

      <FlipCard key={card.id} front={card.front} back={card.back} label={card.kind} flipped={flipped} onFlip={() => setFlipped((f) => !f)} />

      <div className="mt-5 flex items-center justify-between gap-2">
        <button onClick={() => go(-1)} disabled={index === 0} className="rounded-xl p-3 text-slate-500 ring-1 ring-slate-200 hover:bg-white disabled:opacity-30" aria-label="Previous card">
          <ArrowLeft className="size-5" />
        </button>
        <div className="flex gap-2">
          <button onClick={() => mark(false)} className="flex items-center gap-1.5 rounded-xl bg-amber-100 px-4 py-2.5 text-sm font-semibold text-amber-800 hover:bg-amber-200">
            <X className="size-4" /> Still learning
          </button>
          <button onClick={() => mark(true)} className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600">
            <Check className="size-4" /> Got it
          </button>
        </div>
        <button onClick={() => go(1)} className="rounded-xl p-3 text-slate-500 ring-1 ring-slate-200 hover:bg-white" aria-label="Next card">
          <ArrowRight className="size-5" />
        </button>
      </div>
      <p className="mt-3 hidden text-center text-xs text-slate-400 sm:block">Space to flip · ← → to move</p>
    </div>
  );
}

function toggleIn(set: Set<string>, id: string, include: boolean) {
  const next = new Set(set);
  if (include) next.add(id);
  else next.delete(id);
  return next;
}

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
