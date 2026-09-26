"use client";

import { useState } from "react";
import Link from "next/link";
import { Brain, Layers } from "lucide-react";
import type { Flashcard } from "@/lib/curriculum";
import type { QuizQuestion } from "@/lib/types";
import { FlashcardDeck } from "./FlashcardDeck";
import { Quiz } from "./Quiz";

export function PracticeSession({
  chapterRef,
  chapterHref,
  quiz,
  cards,
}: {
  chapterRef: string;
  chapterHref: string;
  quiz: QuizQuestion[];
  cards: Flashcard[];
}) {
  const [tab, setTab] = useState<"quiz" | "cards">(quiz.length ? "quiz" : "cards");

  if (!quiz.length && !cards.length) {
    return (
      <div className="mt-8 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
        <Brain className="mx-auto size-8 text-slate-300" aria-hidden />
        <p className="mt-2 font-medium text-slate-800">Practice questions for this chapter are on the way.</p>
        <p className="mt-1 text-sm text-slate-500">
          Meanwhile, open a topic and use <b>AI Notes → Flashcards</b> to revise.
        </p>
        <Link href={chapterHref} className="mt-4 inline-block rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white">
          Back to chapter
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="inline-flex rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-200" role="tablist">
        {quiz.length > 0 && (
          <TabBtn active={tab === "quiz"} onClick={() => setTab("quiz")} icon={Brain}>
            Quick quiz · {quiz.length}
          </TabBtn>
        )}
        {cards.length > 0 && (
          <TabBtn active={tab === "cards"} onClick={() => setTab("cards")} icon={Layers}>
            Flashcards · {cards.length}
          </TabBtn>
        )}
      </div>
      <div className="mt-6">
        {tab === "quiz" ? <Quiz questions={quiz} chapterRef={chapterRef} /> : <FlashcardDeck cards={cards} />}
      </div>
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  icon: Icon,
  children,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Brain;
  children: React.ReactNode;
}) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition ${
        active ? "bg-brand-600 text-white shadow-sm" : "text-slate-600 hover:bg-slate-50"
      }`}
    >
      <Icon className="size-4" aria-hidden />
      {children}
    </button>
  );
}
