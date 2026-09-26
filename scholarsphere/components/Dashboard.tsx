"use client";

import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  Brain,
  CheckCircle2,
  Clock,
  NotebookPen,
  Rocket,
  Sparkles,
} from "lucide-react";
import {
  useBookmarks,
  useCompleted,
  useNotes,
  usePrefs,
  useQuizResults,
  useRecent,
} from "@/lib/store";
import { useHydrated } from "@/lib/storage";
import type { GradeId, SubjectColor, SubjectIconName } from "@/lib/types";
import { COLOR, SubjectIcon } from "./subject-style";

export interface GradeSummary {
  id: GradeId;
  label: string;
  subjects: {
    id: string;
    name: string;
    icon: SubjectIconName;
    color: SubjectColor;
    chapters: number;
    topics: number;
    books: string[];
  }[];
}

function greeting() {
  const h = new Date().getHours();
  return h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
}

export function Dashboard({
  grades,
  totals,
}: {
  grades: GradeSummary[];
  totals: { chapters: number; topics: number; subtopics: number };
}) {
  const hydrated = useHydrated();
  const [prefs, setPrefs] = usePrefs();
  const { recent } = useRecent();
  const { bookmarks } = useBookmarks();
  const { notes } = useNotes();
  const { done } = useCompleted();
  const { results } = useQuizResults();

  const grade = grades.find((g) => g.id === prefs.grade);
  const doneRefs = Object.keys(done);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-violet-600 to-fuchsia-500 px-6 py-8 text-white shadow-lg sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute -right-10 -top-10 size-56 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-16 right-24 size-40 rounded-full bg-white/10" />
        <p className="text-sm font-medium text-white/80">
          {hydrated ? greeting() : "Hello"}
          {prefs.name ? `, ${prefs.name}` : ""} 👋
        </p>
        <h1 className="mt-1 max-w-xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
          What would you like to learn today?
        </h1>
        <p className="mt-3 max-w-xl text-white/85">
          Every CBSE chapter from Class 8 to 12, explained simply. No sign-up — your notes and
          progress stay right here in your browser.
        </p>
        <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
          <span className="rounded-full bg-white/15 px-3 py-1">{totals.chapters} chapters</span>
          <span className="rounded-full bg-white/15 px-3 py-1">{totals.topics} topics</span>
          <span className="rounded-full bg-white/15 px-3 py-1">{totals.subtopics} subtopics</span>
        </div>
      </section>

      {/* Class picker */}
      <section id="pick-class" className="scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-semibold text-slate-900">Your class</h2>
            <p className="text-sm text-slate-500">We’ll show your subjects and remember your choice.</p>
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-500">
            Your name
            <input
              value={prefs.name}
              onChange={(e) => setPrefs((p) => ({ ...p, name: e.target.value.slice(0, 30) }))}
              placeholder="optional"
              className="w-32 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-slate-900 outline-none focus:border-brand-500"
            />
          </label>
        </div>
        <div className="mt-4 grid grid-cols-5 gap-2 sm:gap-3">
          {grades.map((g) => {
            const selected = prefs.grade === g.id;
            return (
              <button
                key={g.id}
                onClick={() => setPrefs((p) => ({ ...p, grade: g.id }))}
                aria-pressed={selected}
                className={`rounded-2xl border-2 px-2 py-3 text-center transition sm:py-4 ${
                  selected
                    ? "border-brand-600 bg-brand-600 text-white shadow-md"
                    : "border-slate-200 bg-white text-slate-700 hover:border-brand-300 hover:bg-brand-50"
                }`}
              >
                <span className="block text-[11px] font-medium uppercase tracking-wide opacity-75">Class</span>
                <span className="block font-display text-2xl font-semibold sm:text-3xl">{g.id}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Subjects */}
      {grade ? (
        <section className="animate-fade">
          <h2 className="font-display text-2xl font-semibold text-slate-900">{grade.label} subjects</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {grade.subjects.map((s) => {
              const c = COLOR[s.color];
              const prefix = `${grade.id}/${s.id}/`;
              const completed = doneRefs.filter((r) => r.startsWith(prefix)).length;
              const pct = s.topics ? Math.round((completed / s.topics) * 100) : 0;
              return (
                <Link
                  key={s.id}
                  href={`/learn/${grade.id}/${s.id}`}
                  onClick={() => setPrefs((p) => ({ ...p, subject: s.id }))}
                  className={`group rounded-2xl bg-white p-5 shadow-sm ring-1 transition hover:-translate-y-0.5 hover:shadow-md ${c.ring}`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`grid size-12 shrink-0 place-items-center rounded-xl ${c.tile}`}>
                      <SubjectIcon name={s.icon} className="size-6" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-slate-900">{s.name}</h3>
                      <p className="truncate text-xs text-slate-500">{s.books.join(" · ")}</p>
                    </div>
                    <ArrowRight className="size-5 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-slate-500" />
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                    <span>
                      {s.chapters} chapters · {s.topics} topics
                    </span>
                    <span className="font-medium text-slate-700">{pct}%</span>
                  </div>
                  <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                    <div className={`h-full rounded-full ${c.bar}`} style={{ width: `${pct}%` }} />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ) : (
        hydrated && (
          <section className="rounded-2xl border-2 border-dashed border-brand-200 bg-brand-50/60 p-6 text-center">
            <Rocket className="mx-auto size-8 text-brand-500" aria-hidden />
            <p className="mt-2 font-medium text-slate-800">Pick your class above to see your subjects.</p>
            <p className="mt-1 text-sm text-slate-500">
              Or jump straight into a sample:{" "}
              <Link
                href="/learn/10/science/chemical-reactions-and-equations"
                className="font-medium text-brand-600 underline-offset-2 hover:underline"
              >
                Class 10 · Chemical Reactions and Equations
              </Link>
            </p>
          </section>
        )
      )}

      {/* Stats */}
      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Stat icon={CheckCircle2} label="Topics completed" value={hydrated ? doneRefs.length : "–"} tint="text-emerald-600 bg-emerald-50" />
        <Stat icon={NotebookPen} label="Notes written" value={hydrated ? notes.length : "–"} tint="text-amber-600 bg-amber-50" href="/notes" />
        <Stat icon={Bookmark} label="Bookmarks" value={hydrated ? bookmarks.length : "–"} tint="text-rose-600 bg-rose-50" href="/notes?tab=bookmarks" />
        <Stat icon={Brain} label="Quizzes taken" value={hydrated ? Object.keys(results).length : "–"} tint="text-violet-600 bg-violet-50" href="/practice" />
      </section>

      {/* Continue + bookmarks */}
      <section className="grid gap-6 lg:grid-cols-2">
        <Panel title="Continue learning" icon={Clock} empty="Topics you open will show up here.">
          {recent.map((r) => (
            <RefLink key={r.ref} href={`/learn/${r.ref}`} title={r.title} sub={labelFromRef(r.ref)} />
          ))}
        </Panel>
        <Panel title="Bookmarked topics" icon={Bookmark} empty="Tap the bookmark on any topic to save it here.">
          {bookmarks.slice(0, 6).map((b) => (
            <RefLink key={b.ref} href={`/learn/${b.ref}`} title={b.title} sub={labelFromRef(b.ref)} />
          ))}
        </Panel>
      </section>

      <section className="flex flex-col items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:flex-row sm:items-center">
        <span className="grid size-12 place-items-center rounded-xl bg-fuchsia-100 text-fuchsia-600">
          <Sparkles className="size-6" aria-hidden />
        </span>
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">Stuck on something?</h3>
          <p className="text-sm text-slate-500">
            Open any topic and tap <b>Explain like I’m 10</b>, <b>Real-world example</b> or{" "}
            <b>Mnemonic trick</b>. Then make one-click AI notes and save them to My Notes.
          </p>
        </div>
        <Link
          href="/explore"
          className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700"
        >
          Explore curriculum
        </Link>
      </section>
    </div>
  );
}

function labelFromRef(ref: string) {
  const [grade, subject] = ref.split("/");
  return `Class ${grade} · ${subject.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())}`;
}

function Stat({
  icon: Icon,
  label,
  value,
  tint,
  href,
}: {
  icon: typeof Clock;
  label: string;
  value: number | string;
  tint: string;
  href?: string;
}) {
  const body = (
    <>
      <span className={`grid size-10 place-items-center rounded-xl ${tint}`}>
        <Icon className="size-5" aria-hidden />
      </span>
      <span>
        <span className="block text-2xl font-bold text-slate-900">{value}</span>
        <span className="block text-xs text-slate-500">{label}</span>
      </span>
    </>
  );
  const cls = "flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200";
  return href ? (
    <Link href={href} className={`${cls} transition hover:ring-slate-300`}>
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}

function Panel({
  title,
  icon: Icon,
  empty,
  children,
}: {
  title: string;
  icon: typeof Clock;
  empty: string;
  children: React.ReactNode[];
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <h2 className="flex items-center gap-2 font-semibold text-slate-900">
        <Icon className="size-4 text-slate-400" aria-hidden />
        {title}
      </h2>
      {children.length ? (
        <ul className="mt-3 divide-y divide-slate-100">{children}</ul>
      ) : (
        <p className="mt-3 text-sm text-slate-500">{empty}</p>
      )}
    </div>
  );
}

function RefLink({ href, title, sub }: { href: string; title: string; sub: string }) {
  return (
    <li>
      <Link href={href} className="group flex items-center gap-3 py-2.5">
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-medium text-slate-800 group-hover:text-brand-700">
            {title}
          </span>
          <span className="block text-xs text-slate-500">{sub}</span>
        </span>
        <ArrowRight className="size-4 text-slate-300 group-hover:text-brand-500" />
      </Link>
    </li>
  );
}
