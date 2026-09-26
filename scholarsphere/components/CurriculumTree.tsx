"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, FileText, Sparkles } from "lucide-react";
import type { GradeOutline } from "@/lib/outline";
import { usePrefs } from "@/lib/store";
import { COLOR, SubjectIcon } from "./subject-style";

const cache = new Map<string, Promise<GradeOutline>>();
function loadOutline(grade: string) {
  let p = cache.get(grade);
  if (!p) {
    p = fetch(`/outline/${grade}`).then((r) => {
      if (!r.ok) throw new Error("Failed to load");
      return r.json() as Promise<GradeOutline>;
    });
    p.catch(() => cache.delete(grade));
    cache.set(grade, p);
  }
  return p;
}

/**
 * Class → Subject → Textbook → Chapter → Topic → Subtopic.
 * Each class's outline is fetched on demand and only expanded nodes render,
 * so the page stays light even though the tree has thousands of nodes.
 */
export function CurriculumTree({ grades }: { grades: { id: string; label: string }[] }) {
  const [prefs] = usePrefs();
  const [picked, setPicked] = useState<string | null>(null);
  const grade = picked ?? prefs.grade ?? "10";
  const [outlines, setOutlines] = useState<Record<string, GradeOutline>>({});
  const [failed, setFailed] = useState(false);
  const [open, setOpen] = useState<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;
    loadOutline(grade)
      .then((o) => !cancelled && setOutlines((prev) => ({ ...prev, [grade]: o })))
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
    };
  }, [grade]);

  const toggle = (key: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });

  const outline = outlines[grade];

  return (
    <div className="mt-6">
      <div role="tablist" className="flex gap-2 overflow-x-auto pb-1">
        {grades.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={grade === g.id}
            onClick={() => {
              setFailed(false);
              setPicked(g.id);
            }}
            onMouseEnter={() => void loadOutline(g.id).catch(() => {})}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              grade === g.id ? "bg-brand-600 text-white shadow-sm" : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-4" role="tabpanel">
        {failed && !outline ? (
          <p className="text-sm text-rose-600">Couldn’t load this class. Check your connection and try again.</p>
        ) : !outline ? (
          [0, 1, 2].map((i) => <div key={i} className="h-[72px] animate-pulse rounded-2xl bg-slate-200/60" />)
        ) : (
          outline.subjects.map((s) => {
            const c = COLOR[s.color];
            const sKey = `${grade}/${s.id}`;
            const chapters = s.books.flatMap((b) => b.chapters);
            const topics = chapters.reduce((n, ch) => n + ch.topics.length, 0);
            const isOpen = open.has(sKey);
            return (
              <div key={s.id} className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200">
                <button onClick={() => toggle(sKey)} aria-expanded={isOpen} className="flex w-full items-center gap-3 p-4 text-left">
                  <span className={`grid size-10 place-items-center rounded-xl ${c.tile}`}>
                    <SubjectIcon name={s.icon} className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-slate-900">{s.name}</span>
                    <span className="block text-xs text-slate-500">
                      {s.books.length} book{s.books.length > 1 ? "s" : ""} · {chapters.length} chapters · {topics} topics
                    </span>
                  </span>
                  <ChevronRight className={`size-5 text-slate-400 transition ${isOpen ? "rotate-90" : ""}`} />
                </button>

                {isOpen && (
                  <div className="animate-fade space-y-4 border-t border-slate-100 p-4">
                    {s.books.map((b) => (
                      <div key={b.title}>
                        <h3 className={`mb-2 text-xs font-semibold uppercase tracking-wide ${c.text}`}>{b.title}</h3>
                        <ul className="space-y-1.5">
                          {b.chapters.map((ch) => {
                            const cKey = `${sKey}/${ch.id}`;
                            const chOpen = open.has(cKey);
                            const base = `/learn/${grade}/${s.id}/${ch.id}`;
                            return (
                              <li key={ch.id} className="rounded-xl bg-slate-50">
                                <button
                                  onClick={() => toggle(cKey)}
                                  aria-expanded={chOpen}
                                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-slate-100"
                                >
                                  <span className="w-7 shrink-0 text-center text-xs font-semibold text-slate-400">{ch.n}</span>
                                  <span className="flex-1 text-sm font-medium text-slate-800">{ch.title}</span>
                                  {ch.rich && (
                                    <span className="hidden items-center gap-1 rounded-full bg-fuchsia-50 px-2 py-0.5 text-[10px] font-semibold text-fuchsia-700 sm:flex">
                                      <Sparkles className="size-3" aria-hidden /> Full notes
                                    </span>
                                  )}
                                  <ChevronRight className={`size-4 text-slate-400 transition ${chOpen ? "rotate-90" : ""}`} />
                                </button>
                                {chOpen && (
                                  <div className="px-3 pb-3 pl-12">
                                    <ul className="space-y-2">
                                      {ch.topics.map((t) => (
                                        <li key={t.id}>
                                          <Link href={`${base}/${t.id}`} className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-brand-600">
                                            <FileText className="size-3.5 text-slate-400" aria-hidden />
                                            {t.title}
                                          </Link>
                                          <ul className="ml-5 mt-1 flex flex-wrap gap-1.5">
                                            {t.subs.map((st) => (
                                              <li key={st} className="rounded-md bg-white px-2 py-0.5 text-xs text-slate-500 ring-1 ring-slate-200">
                                                {st}
                                              </li>
                                            ))}
                                          </ul>
                                        </li>
                                      ))}
                                    </ul>
                                    <Link href={base} className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand-600 hover:underline">
                                      Open chapter <ChevronRight className="size-3" />
                                    </Link>
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
