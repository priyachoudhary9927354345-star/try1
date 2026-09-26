import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PracticeSession } from "@/components/practice/PracticeSession";
import {
  chapterFlashcards,
  chapterHref,
  chapterQuiz,
  getChapter,
  grades,
  subjectChapters,
  subjectHref,
} from "@/lib/curriculum";

export function generateStaticParams() {
  return grades.flatMap((g) =>
    g.subjects.flatMap((s) =>
      subjectChapters(s).map((c) => ({ grade: g.id, subject: s.id, chapter: c.id })),
    ),
  );
}

export const dynamicParams = false;

type Props = PageProps<"/learn/[grade]/[subject]/[chapter]/practice">;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { grade, subject, chapter } = await props.params;
  const found = getChapter(grade, subject, chapter);
  return { title: found ? `Practice: ${found.chapter.title}` : "Practice" };
}

export default async function PracticePage(props: Props) {
  const { grade, subject, chapter } = await props.params;
  const found = getChapter(grade, subject, chapter);
  if (!found) notFound();
  const { subject: s, chapter: ch } = found;

  return (
    <div className="mx-auto max-w-3xl">
      <Breadcrumbs
        items={[
          { label: `Class ${grade}`, href: "/explore" },
          { label: s.name, href: subjectHref(grade, s.id) },
          { label: `Ch ${ch.number}. ${ch.title}`, href: chapterHref(grade, s.id, ch.id) },
          { label: "Practice" },
        ]}
      />
      <h1 className="font-display text-3xl font-semibold text-slate-900">Practice: {ch.title}</h1>
      <p className="mt-1 text-slate-500">Test yourself with a quick quiz, then lock it in with flashcards.</p>
      <PracticeSession
        chapterRef={`${grade}/${s.id}/${ch.id}`}
        chapterHref={chapterHref(grade, s.id, ch.id)}
        quiz={chapterQuiz(ch)}
        cards={chapterFlashcards(ch)}
      />
    </div>
  );
}
