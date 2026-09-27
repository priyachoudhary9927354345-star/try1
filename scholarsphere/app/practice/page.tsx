import type { Metadata } from "next";
import Link from "next/link";
import { Brain, Layers } from "lucide-react";
import { GradeTabs } from "@/components/GradeTabs";
import { BestScore } from "@/components/practice/BestScore";
import { COLOR, SubjectIcon } from "@/components/subject-style";
import { chapterFlashcards, chapterQuiz, grades, practiceHref } from "@/lib/curriculum";

export const metadata: Metadata = { title: "Practice & revision" };

export default function PracticeHubPage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-slate-900">Practice & revision</h1>
      <p className="mt-1 text-slate-500">Quick quizzes and flashcards, chapter by chapter. Your best scores are saved.</p>

      <GradeTabs grades={grades.map((g) => ({ id: g.id, label: g.label }))}>
        {grades.map((g) => {
          const items = g.subjects.flatMap((s) =>
            s.textbooks.flatMap((tb) =>
              tb.chapters
                .map((c) => ({ s, c, quiz: chapterQuiz(c).length, cards: chapterFlashcards(c).length }))
                .filter((x) => x.quiz + x.cards > 0),
            ),
          );
          return items.length === 0 ? (
            <p key={g.id} className="text-slate-500">Practice sets for {g.label} are coming soon.</p>
          ) : (
            <div key={g.id} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {items.map(({ s, c, quiz, cards }) => (
                <Link
                  key={`${s.id}/${c.id}`}
                  href={practiceHref(g.id, s.id, c.id)}
                  className={`group rounded-2xl bg-white p-5 shadow-sm ring-1 transition hover:-translate-y-0.5 hover:shadow-md ${COLOR[s.color].ring}`}
                >
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${COLOR[s.color].soft}`}>
                    <SubjectIcon name={s.icon} className="size-3.5" /> {s.name}
                  </span>
                  <h2 className="mt-3 font-semibold text-slate-900 group-hover:text-brand-700">
                    Ch {c.number}. {c.title}
                  </h2>
                  <p className="mt-2 flex gap-4 text-xs text-slate-500">
                    {quiz > 0 && (
                      <span className="flex items-center gap-1">
                        <Brain className="size-3.5" aria-hidden /> {quiz} questions
                      </span>
                    )}
                    {cards > 0 && (
                      <span className="flex items-center gap-1">
                        <Layers className="size-3.5" aria-hidden /> {cards} cards
                      </span>
                    )}
                  </p>
                  <BestScore chapterRef={`${g.id}/${s.id}/${c.id}`} dark={false} />
                </Link>
              ))}
            </div>
          );
        })}
      </GradeTabs>
    </div>
  );
}
