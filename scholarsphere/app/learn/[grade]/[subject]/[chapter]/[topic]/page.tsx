import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookMarked,
  CalendarDays,
  Info,
  Lightbulb,
  ListChecks,
  Sigma,
  Sparkles,
} from "lucide-react";
import { AIExplainer } from "@/components/ai/AIExplainer";
import { AINotes } from "@/components/ai/AINotes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Markdown } from "@/components/Markdown";
import { NotesPanel } from "@/components/NotesPanel";
import { COLOR } from "@/components/subject-style";
import { TopicToolbar } from "@/components/TopicToolbar";
import {
  chapterHref,
  getTopic,
  grades,
  subjectChapters,
  subjectHref,
  topicHref,
} from "@/lib/curriculum";

export function generateStaticParams() {
  return grades.flatMap((g) =>
    g.subjects.flatMap((s) =>
      subjectChapters(s).flatMap((c) =>
        c.topics.map((t) => ({ grade: g.id, subject: s.id, chapter: c.id, topic: t.id })),
      ),
    ),
  );
}

export const dynamicParams = false;

type Props = PageProps<"/learn/[grade]/[subject]/[chapter]/[topic]">;

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { grade, subject, chapter, topic } = await props.params;
  const found = getTopic(grade, subject, chapter, topic);
  return {
    title: found ? `${found.topic.title} — ${found.chapter.title}` : "Topic",
    description: found?.topic.content?.intro,
  };
}

export default async function TopicPage(props: Props) {
  const { grade, subject, chapter, topic } = await props.params;
  const found = getTopic(grade, subject, chapter, topic);
  if (!found) notFound();
  const { grade: g, subject: s, chapter: ch, topic: t, index, prev, next } = found;
  const c = COLOR[s.color];
  const content = t.content;
  const ref = `${grade}/${s.id}/${ch.id}/${t.id}`;
  const aiContext = { classLabel: g.label, subject: s.name, chapter: ch.title, topic: t };

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: `Class ${grade}`, href: "/explore" },
          { label: s.name, href: subjectHref(grade, s.id) },
          { label: `Ch ${ch.number}. ${ch.title}`, href: chapterHref(grade, s.id, ch.id) },
          { label: t.title },
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
        <article className="min-w-0">
          <header>
            <p className={`text-sm font-semibold ${c.text}`}>
              Topic {ch.number}.{index + 1} · {s.name}
            </p>
            <h1 className="mt-1 font-display text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              {t.title}
            </h1>
            <TopicToolbar topicRef={ref} title={t.title} />
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Subtopics">
              {t.subtopics.map((st) => (
                <li key={st.id} className={`rounded-full px-3 py-1 text-xs font-medium ${c.soft}`}>
                  {st.title}
                </li>
              ))}
            </ul>
          </header>

          {content ? (
            <div className="mt-8 space-y-8 text-[15.5px] leading-relaxed text-slate-700">
              <p className="rounded-2xl bg-white p-5 text-base text-slate-800 shadow-sm ring-1 ring-slate-200">
                {content.intro}
              </p>

              {content.sections.map((sec, i) => (
                <section key={i}>
                  <h2 className="mb-2 font-display text-xl font-semibold text-slate-900">{sec.heading}</h2>
                  <Markdown source={sec.body} />
                </section>
              ))}

              {content.definitions.length > 0 && (
                <section>
                  <SectionTitle icon={BookMarked} title="Key definitions" />
                  <dl className="grid gap-3 sm:grid-cols-2">
                    {content.definitions.map((d) => (
                      <div key={d.term} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                        <dt className="font-semibold text-slate-900">{d.term}</dt>
                        <dd className="mt-1 text-sm text-slate-600">{d.meaning}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              )}

              {content.formulas && content.formulas.length > 0 && (
                <section>
                  <SectionTitle icon={Sigma} title="Important formulas" />
                  <div className="divide-y divide-slate-800 overflow-hidden rounded-2xl bg-slate-900 text-slate-100">
                    {content.formulas.map((f) => (
                      <div key={f.label} className="flex flex-col gap-1 p-4 sm:flex-row sm:items-center sm:gap-6">
                        <span className="text-sm text-slate-400 sm:w-48 sm:shrink-0">{f.label}</span>
                        <span className="font-mono text-lg text-white">{f.expression}</span>
                        {f.note && <span className="text-xs text-slate-400 sm:ml-auto sm:max-w-56">{f.note}</span>}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {content.dates && content.dates.length > 0 && (
                <section>
                  <SectionTitle icon={CalendarDays} title="Important dates" />
                  <ol className="relative ml-3 space-y-4 border-l-2 border-amber-200 pl-6">
                    {content.dates.map((d) => (
                      <li key={d.date + d.event} className="relative">
                        <span className="absolute -left-[33px] top-1 size-4 rounded-full border-4 border-white bg-amber-400 shadow" />
                        <span className="font-mono text-sm font-bold text-amber-700">{d.date}</span>
                        <p className="text-sm text-slate-700">{d.event}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              )}

              <section className="rounded-2xl bg-emerald-50 p-5 ring-1 ring-emerald-200">
                <SectionTitle icon={ListChecks} title="Remember for the exam" />
                <ul className="space-y-2">
                  {content.keyPoints.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-emerald-950">
                      <Lightbulb className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          ) : (
            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Info className="size-4 text-sky-500" aria-hidden /> Topic outline
              </p>
              <p className="mt-1 text-sm text-slate-500">
                This topic is mapped in the curriculum, but its full reading notes haven’t been added to this demo yet.
                Use the AI tools to get started, and read the NCERT section alongside.
              </p>
              <ol className="mt-4 space-y-2">
                {t.subtopics.map((st, i) => (
                  <li key={st.id} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800">
                    <span className={`grid size-6 place-items-center rounded-full text-xs font-bold ${c.soft}`}>{i + 1}</span>
                    {st.title}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <nav className="mt-10 grid gap-3 sm:grid-cols-2" aria-label="Topic navigation">
            {prev ? (
              <Link href={topicHref(grade, s.id, ch.id, prev.id)} className="group rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 hover:ring-brand-300">
                <span className="flex items-center gap-1 text-xs text-slate-500"><ArrowLeft className="size-3" /> Previous</span>
                <span className="font-semibold text-slate-800 group-hover:text-brand-700">{prev.title}</span>
              </Link>
            ) : <span />}
            {next ? (
              <Link href={topicHref(grade, s.id, ch.id, next.id)} className="group rounded-2xl bg-white p-4 text-right shadow-sm ring-1 ring-slate-200 hover:ring-brand-300">
                <span className="flex items-center justify-end gap-1 text-xs text-slate-500">Next <ArrowRight className="size-3" /></span>
                <span className="font-semibold text-slate-800 group-hover:text-brand-700">{next.title}</span>
              </Link>
            ) : (
              <Link href={`${chapterHref(grade, s.id, ch.id)}/practice`} className="group rounded-2xl bg-brand-600 p-4 text-right text-white shadow-sm hover:bg-brand-700">
                <span className="flex items-center justify-end gap-1 text-xs text-white/80">Chapter done? <Sparkles className="size-3" /></span>
                <span className="font-semibold">Practice this chapter →</span>
              </Link>
            )}
          </nav>
        </article>

        <aside id="ai-tools" className="space-y-6 lg:sticky lg:top-24 lg:max-h-[calc(100dvh-7rem)] lg:self-start lg:overflow-y-auto lg:pb-4">
          {/* Keyed by topic so moving to another topic starts fresh. */}
          <AIExplainer key={ref} context={aiContext} />
          <AINotes key={ref} context={aiContext} chapterRef={`${grade}/${s.id}/${ch.id}`} />
          <NotesPanel chapterRef={`${grade}/${s.id}/${ch.id}`} topicId={t.id} heading="My notes on this topic" />
        </aside>
      </div>
    </div>
  );
}

function SectionTitle({ icon: Icon, title }: { icon: typeof Sigma; title: string }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 font-display text-xl font-semibold text-slate-900">
      <Icon className="size-5 text-slate-400" aria-hidden />
      {title}
    </h2>
  );
}
