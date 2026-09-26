import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, FileText, Sparkles } from "lucide-react";
import { GradeTabs } from "@/components/GradeTabs";
import { COLOR, SubjectIcon } from "@/components/subject-style";
import {
  chapterHref,
  countSubject,
  grades,
  hasRichContent,
  topicHref,
} from "@/lib/curriculum";

export const metadata: Metadata = { title: "Explore the curriculum" };

/**
 * Full hierarchy, server-rendered with native <details> so expanding and
 * collapsing needs no JavaScript: Class → Subject → Textbook → Chapter → Topic → Subtopic.
 */
export default function ExplorePage() {
  return (
    <div>
      <h1 className="font-display text-3xl font-semibold text-slate-900">Curriculum explorer</h1>
      <p className="mt-1 text-slate-500">
        Class → Subject → Textbook → Chapter → Topic → Subtopic. Tap to expand; tap a topic to study it.
      </p>

      <GradeTabs grades={grades.map((g) => ({ id: g.id, label: g.label }))}>
        {grades.map((g) => (
          <div key={g.id} className="space-y-4">
            {g.subjects.map((s) => {
              const c = COLOR[s.color];
              const n = countSubject(s);
              return (
                <details key={s.id} className="group/s rounded-2xl bg-white shadow-sm ring-1 ring-slate-200" open={g.subjects.length <= 3}>
                  <summary className="flex cursor-pointer list-none items-center gap-3 p-4 [&::-webkit-details-marker]:hidden">
                    <span className={`grid size-10 place-items-center rounded-xl ${c.tile}`}>
                      <SubjectIcon name={s.icon} className="size-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-semibold text-slate-900">{s.name}</span>
                      <span className="block text-xs text-slate-500">
                        {n.textbooks} book{n.textbooks > 1 ? "s" : ""} · {n.chapters} chapters · {n.topics} topics · {n.subtopics} subtopics
                      </span>
                    </span>
                    <ChevronRight className="size-5 text-slate-400 transition group-open/s:rotate-90" />
                  </summary>

                  <div className="space-y-4 border-t border-slate-100 p-4">
                    {s.textbooks.map((tb) => (
                      <div key={tb.id}>
                        <h3 className={`mb-2 text-xs font-semibold uppercase tracking-wide ${c.text}`}>{tb.title}</h3>
                        <ul className="space-y-1.5">
                          {tb.chapters.map((ch) => (
                            <li key={ch.id}>
                              <details className="group/c rounded-xl bg-slate-50">
                                <summary className="flex cursor-pointer list-none items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-slate-100 [&::-webkit-details-marker]:hidden">
                                  <span className="w-7 shrink-0 text-center text-xs font-semibold text-slate-400">{ch.number}</span>
                                  <span className="flex-1 text-sm font-medium text-slate-800">{ch.title}</span>
                                  {hasRichContent(ch) && (
                                    <span className="hidden items-center gap-1 rounded-full bg-fuchsia-50 px-2 py-0.5 text-[10px] font-semibold text-fuchsia-700 sm:flex">
                                      <Sparkles className="size-3" aria-hidden /> Full notes
                                    </span>
                                  )}
                                  <ChevronRight className="size-4 text-slate-400 transition group-open/c:rotate-90" />
                                </summary>
                                <div className="px-3 pb-3 pl-12">
                                  <ul className="space-y-2">
                                    {ch.topics.map((t) => (
                                      <li key={t.id}>
                                        <Link
                                          href={topicHref(g.id, s.id, ch.id, t.id)}
                                          className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-brand-600"
                                        >
                                          <FileText className="size-3.5 text-slate-400" aria-hidden />
                                          {t.title}
                                        </Link>
                                        <ul className="ml-5 mt-1 flex flex-wrap gap-1.5">
                                          {t.subtopics.map((st) => (
                                            <li key={st.id} className="rounded-md bg-white px-2 py-0.5 text-xs text-slate-500 ring-1 ring-slate-200">
                                              {st.title}
                                            </li>
                                          ))}
                                        </ul>
                                      </li>
                                    ))}
                                  </ul>
                                  <Link
                                    href={chapterHref(g.id, s.id, ch.id)}
                                    className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:underline"
                                  >
                                    Open chapter <ChevronRight className="size-3" />
                                  </Link>
                                </div>
                              </details>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        ))}
      </GradeTabs>
    </div>
  );
}
