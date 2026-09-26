import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Brain, Layers, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { NotesPanel } from "@/components/NotesPanel";
import { BestScore } from "@/components/practice/BestScore";
import { DoneToggle } from "@/components/progress";
import { COLOR } from "@/components/subject-style";
import {
  chapterFlashcards,
  chapterQuiz,
  getChapter,
  grades,
  practiceHref,
  subjectChapters,
  subjectHref,
  topicHref,
} from "@/lib/curriculum";

export function generateStaticParams() {
  return grades.flatMap((g) =>
    g.subjects.flatMap((s) =>
      subjectChapters(s).map((c) => ({ grade: g.id, subject: s.id, chapter: c.id })),
    ),
  );
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/learn/[grade]/[subject]/[chapter]">,
): Promise<Metadata> {
  const { grade, subject, chapter } = await props.params;
  const found = getChapter(grade, subject, chapter);
  return { title: found ? `${found.chapter.title} — Class ${grade} ${found.subject.name}` : "Chapter" };
}

export default async function ChapterPage(props: PageProps<"/learn/[grade]/[subject]/[chapter]">) {
  const { grade, subject, chapter } = await props.params;
  const found = getChapter(grade, subject, chapter);
  if (!found) notFound();
  const { subject: s, textbook, chapter: ch } = found;
  const c = COLOR[s.color];
  const quizCount = chapterQuiz(ch).length;
  const cardCount = chapterFlashcards(ch).length;
  const ref = `${grade}/${s.id}/${ch.id}`;

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: `Class ${grade}`, href: "/explore" },
          { label: s.name, href: subjectHref(grade, s.id) },
          { label: `Ch ${ch.number}` },
        ]}
      />

      <header>
        <p className={`text-sm font-semibold ${c.text}`}>
          {textbook.title} · Chapter {ch.number}
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold text-slate-900 sm:text-4xl">{ch.title}</h1>
        {ch.summary && <p className="mt-2 max-w-3xl text-slate-600">{ch.summary}</p>}
      </header>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
            Topics & subtopics
          </h2>
          <ol className="space-y-3">
            {ch.topics.map((t, i) => (
              <li key={t.id} className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <DoneToggle topicRef={`${ref}/${t.id}`} label={t.title} />
                <div className="min-w-0 flex-1">
                  <Link href={topicHref(grade, s.id, ch.id, t.id)} className="group flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-400">{ch.number}.{i + 1}</span>
                    <span className="font-semibold text-slate-900 group-hover:text-brand-700">{t.title}</span>
                    {t.content && (
                      <span className="flex items-center gap-1 rounded-full bg-fuchsia-50 px-2 py-0.5 text-[10px] font-semibold text-fuchsia-700">
                        <Sparkles className="size-3" aria-hidden /> Full notes
                      </span>
                    )}
                    <ArrowRight className="ml-auto size-4 shrink-0 text-slate-300 group-hover:text-brand-500" />
                  </Link>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {t.subtopics.map((st) => (
                      <li key={st.id} className="rounded-md bg-slate-50 px-2 py-0.5 text-xs text-slate-600 ring-1 ring-slate-200">
                        {st.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-brand-600 p-5 text-white shadow-md">
            <h2 className="flex items-center gap-2 font-semibold">
              <Brain className="size-5" aria-hidden /> Practice this chapter
            </h2>
            <p className="mt-1 text-sm text-white/80">
              {quizCount > 0 ? `${quizCount} quiz questions` : "Quick quiz coming soon"}
              {cardCount > 0 ? ` · ${cardCount} flashcards` : ""}
            </p>
            <BestScore chapterRef={ref} />
            {quizCount + cardCount > 0 ? (
              <Link
                href={practiceHref(grade, s.id, ch.id)}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-50"
              >
                <Layers className="size-4" aria-hidden /> Start practice
              </Link>
            ) : (
              <p className="mt-3 rounded-xl bg-white/10 px-3 py-2 text-xs text-white/85">
                Open a topic and use <b>AI Notes</b> to make flashcards for this chapter.
              </p>
            )}
          </div>

          <NotesPanel chapterRef={ref} heading="Chapter notes" />
        </aside>
      </div>
    </div>
  );
}
