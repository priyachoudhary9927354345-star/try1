import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChapterProgress } from "@/components/progress";
import { COLOR, SubjectIcon } from "@/components/subject-style";
import {
  chapterHref,
  countSubject,
  getSubject,
  grades,
  hasRichContent,
} from "@/lib/curriculum";

export function generateStaticParams() {
  return grades.flatMap((g) => g.subjects.map((s) => ({ grade: g.id, subject: s.id })));
}

export const dynamicParams = false;

export async function generateMetadata(
  props: PageProps<"/learn/[grade]/[subject]">,
): Promise<Metadata> {
  const { grade, subject } = await props.params;
  const s = getSubject(grade, subject);
  return { title: s ? `Class ${grade} ${s.name}` : "Subject" };
}

export default async function SubjectPage(props: PageProps<"/learn/[grade]/[subject]">) {
  const { grade, subject } = await props.params;
  const s = getSubject(grade, subject);
  if (!s) notFound();
  const c = COLOR[s.color];
  const n = countSubject(s);

  return (
    <div>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: `Class ${grade}`, href: "/explore" }, { label: s.name }]} />

      <header className={`flex flex-col gap-4 rounded-3xl bg-gradient-to-br p-6 text-white shadow-md sm:flex-row sm:items-center sm:p-8 ${c.gradient}`}>
        <span className="grid size-14 place-items-center rounded-2xl bg-white/20">
          <SubjectIcon name={s.icon} className="size-7" />
        </span>
        <div>
          <p className="text-sm font-medium text-white/80">Class {grade}</p>
          <h1 className="font-display text-3xl font-semibold">{s.name}</h1>
          <p className="mt-1 text-sm text-white/85">
            {n.textbooks} textbook{n.textbooks > 1 ? "s" : ""} · {n.chapters} chapters · {n.topics} topics · {n.subtopics} subtopics
          </p>
        </div>
      </header>

      <div className="mt-8 space-y-10">
        {s.textbooks.map((tb) => (
          <section key={tb.id}>
            <h2 className="font-display text-xl font-semibold text-slate-900">{tb.title}</h2>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {tb.chapters.map((ch) => (
                <Link
                  key={ch.id}
                  href={chapterHref(grade, s.id, ch.id)}
                  className={`group flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 transition hover:-translate-y-0.5 hover:shadow-md ${c.ring}`}
                >
                  <span className={`grid size-11 shrink-0 place-items-center rounded-xl text-lg font-bold ${c.soft}`}>
                    {ch.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-2">
                      <span className="font-semibold text-slate-900 group-hover:text-brand-700">{ch.title}</span>
                      {hasRichContent(ch) && <Sparkles className="size-3.5 shrink-0 text-fuchsia-500" aria-label="Full notes available" />}
                    </span>
                    {ch.summary && <span className="mt-0.5 line-clamp-2 block text-sm text-slate-500">{ch.summary}</span>}
                    <ChapterProgress chapterRef={`${grade}/${s.id}/${ch.id}`} topics={ch.topics.length} barClass={c.bar} />
                  </span>
                  <ArrowRight className="size-4 shrink-0 self-center text-slate-300 group-hover:text-slate-500" />
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
