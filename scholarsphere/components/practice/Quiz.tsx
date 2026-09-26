"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, PartyPopper, RotateCcw, XCircle } from "lucide-react";
import type { QuizQuestion } from "@/lib/types";
import { useQuizResults } from "@/lib/store";

function shuffled<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function Quiz({ questions, chapterRef }: { questions: QuizQuestion[]; chapterRef: string }) {
  const { results, recordResult } = useQuizResults();
  // First run keeps the authored order (deterministic for SSR); retries shuffle.
  const [order, setOrder] = useState(questions);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<{ q: QuizQuestion; picked: number }[]>([]);
  const [finished, setFinished] = useState(false);

  const q = order[index];
  const score = answers.filter((a) => a.picked === a.q.answer).length;

  const choose = (i: number) => {
    if (picked !== null) return;
    setPicked(i);
    setAnswers((prev) => [...prev, { q, picked: i }]);
  };

  const next = () => {
    if (index + 1 < order.length) {
      setIndex(index + 1);
      setPicked(null);
    } else {
      recordResult(chapterRef, score, order.length);
      setFinished(true);
    }
  };

  const restart = (subset?: QuizQuestion[]) => {
    setOrder(shuffled(subset ?? questions));
    setIndex(0);
    setPicked(null);
    setAnswers([]);
    setFinished(false);
  };

  if (finished) {
    const wrong = answers.filter((a) => a.picked !== a.q.answer);
    const pct = Math.round((score / order.length) * 100);
    const best = results[chapterRef]?.best;
    return (
      <div className="animate-pop rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
        <div className="text-center">
          <PartyPopper className="mx-auto size-10 text-amber-500" aria-hidden />
          <p className="mt-3 font-display text-4xl font-semibold text-slate-900">
            {score}/{order.length}
          </p>
          <p className="mt-1 text-slate-600">
            {pct === 100 ? "Perfect score! 🎉" : pct >= 70 ? "Great work — almost there!" : "Good start. Review the ones you missed and try again."}
          </p>
          {best !== undefined && order.length === questions.length && (
            <p className="mt-1 text-xs text-slate-400">Your best: {best}/{questions.length}</p>
          )}
        </div>

        {wrong.length > 0 && (
          <div className="mt-6 space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Review</h3>
            {wrong.map(({ q, picked }) => (
              <div key={q.id} className="rounded-xl bg-rose-50 p-4 text-sm ring-1 ring-rose-200">
                <p className="font-medium text-slate-900">{q.question}</p>
                <p className="mt-1 text-rose-700">Your answer: {q.options[picked]}</p>
                <p className="text-emerald-700">Correct: {q.options[q.answer]}</p>
                <p className="mt-1 text-slate-600">{q.explanation}</p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => restart()} className="flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-700">
            <RotateCcw className="size-4" /> Retry all
          </button>
          {wrong.length > 0 && (
            <button
              onClick={() => restart(wrong.map((w) => w.q))}
              className="rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
            >
              Retry mistakes ({wrong.length})
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
      <div className="flex items-center justify-between text-xs font-medium text-slate-500">
        <span>
          Question {index + 1} of {order.length}
        </span>
        <span>Score {score}</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${((index + (picked !== null ? 1 : 0)) / order.length) * 100}%` }} />
      </div>

      <h2 key={q.id} className="mt-6 animate-fade text-lg font-semibold leading-snug text-slate-900 sm:text-xl">{q.question}</h2>

      <div className="mt-5 grid gap-2.5">
        {q.options.map((opt, i) => {
          const isAnswer = i === q.answer;
          const isPicked = i === picked;
          const state =
            picked === null
              ? "bg-white ring-slate-200 hover:bg-brand-50 hover:ring-brand-300"
              : isAnswer
                ? "bg-emerald-50 ring-emerald-400"
                : isPicked
                  ? "bg-rose-50 ring-rose-400"
                  : "bg-white ring-slate-200 opacity-60";
          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={picked !== null}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-800 ring-1 transition sm:text-base ${state}`}
            >
              <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-slate-100 text-xs font-bold text-slate-600">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{opt}</span>
              {picked !== null && isAnswer && <CheckCircle2 className="size-5 text-emerald-600" aria-label="Correct answer" />}
              {picked !== null && isPicked && !isAnswer && <XCircle className="size-5 text-rose-600" aria-label="Your answer" />}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="mt-5 animate-fade">
          <div className={`rounded-xl p-4 text-sm ${picked === q.answer ? "bg-emerald-50 text-emerald-900" : "bg-amber-50 text-amber-900"}`}>
            <p className="font-semibold">{picked === q.answer ? "Correct! ✅" : "Not quite."}</p>
            <p className="mt-1">{q.explanation}</p>
          </div>
          <button
            onClick={next}
            autoFocus
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700 sm:w-auto"
          >
            {index + 1 < order.length ? "Next question" : "See results"} <ArrowRight className="size-4" />
          </button>
        </div>
      )}
    </div>
  );
}
