"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Bookmark, Download, NotebookPen, Plus, Search, Trash2 } from "lucide-react";
import { useBookmarks, useNotes, usePrefs } from "@/lib/store";
import { useHydrated } from "@/lib/storage";
import { NoteCard } from "./NoteCard";
import { NoteEditor } from "./NoteEditor";

export interface ChapterOption {
  ref: string;
  grade: string;
  group: string; // "Class 10 · Science"
  label: string; // "Ch 1. Chemical Reactions…"
  href: string;
  topics: Record<string, string>;
}

export function NotesHub({
  chapters,
  initialTab,
}: {
  chapters: ChapterOption[];
  initialTab: "notes" | "bookmarks";
}) {
  const hydrated = useHydrated();
  const [prefs] = usePrefs();
  const { notes, addNote } = useNotes();
  const { bookmarks, removeBookmark } = useBookmarks();
  const [tab, setTab] = useState(initialTab);
  const [query, setQuery] = useState("");
  const [grade, setGrade] = useState<string>("all");
  const [adding, setAdding] = useState(false);
  const [newChapter, setNewChapter] = useState("");

  const byRef = useMemo(() => new Map(chapters.map((c) => [c.ref, c])), [chapters]);

  const filtered = notes
    .filter((n) => grade === "all" || n.chapter.startsWith(grade + "/"))
    .filter((n) => {
      const q = query.trim().toLowerCase();
      if (!q) return true;
      const ch = byRef.get(n.chapter);
      return [n.title, n.body, ch?.label ?? ""].some((s) => s.toLowerCase().includes(q));
    })
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.updatedAt - a.updatedAt);

  const pickable = chapters.filter((c) => !prefs.grade || c.grade === prefs.grade);
  const groups = [...new Set(pickable.map((c) => c.group))];

  const exportNotes = () => {
    const blob = new Blob([JSON.stringify({ notes, bookmarks }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `scholarsphere-notes-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-semibold text-slate-900">My Notes</h1>
          <p className="mt-1 text-slate-500">Everything is saved in this browser — no account needed.</p>
        </div>
        {hydrated && notes.length > 0 && (
          <button onClick={exportNotes} className="flex items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-sm font-medium text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50">
            <Download className="size-4" /> Export backup
          </button>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <div className="inline-flex rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-200" role="tablist">
          {(["notes", "bookmarks"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-semibold ${
                tab === t ? "bg-brand-600 text-white" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              {t === "notes" ? <NotebookPen className="size-4" /> : <Bookmark className="size-4" />}
              {t === "notes" ? "Notes" : "Bookmarks"}
              {hydrated && (
                <span className={`rounded-full px-1.5 text-xs ${tab === t ? "bg-white/20" : "bg-slate-100"}`}>
                  {t === "notes" ? notes.length : bookmarks.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {tab === "notes" && (
          <>
            <label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-xl bg-white px-3 ring-1 ring-slate-200 focus-within:ring-brand-400 sm:max-w-xs">
              <Search className="size-4 text-slate-400" aria-hidden />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search notes" className="min-w-0 flex-1 bg-transparent text-sm outline-none" />
            </label>
            <select value={grade} onChange={(e) => setGrade(e.target.value)} className="h-10 rounded-xl bg-white px-3 text-sm ring-1 ring-slate-200" aria-label="Filter by class">
              <option value="all">All classes</option>
              {["8", "9", "10", "11", "12"].map((g) => (
                <option key={g} value={g}>Class {g}</option>
              ))}
            </select>
            {!adding && (
              <button onClick={() => setAdding(true)} className="ml-auto flex h-10 items-center gap-1.5 rounded-xl bg-amber-400 px-4 text-sm font-semibold text-amber-950 hover:bg-amber-300">
                <Plus className="size-4" /> New note
              </button>
            )}
          </>
        )}
      </div>

      {tab === "notes" ? (
        <div className="mt-6">
          {adding && (
            <div className="mb-6 max-w-2xl space-y-2">
              <select
                value={newChapter}
                onChange={(e) => setNewChapter(e.target.value)}
                className="h-10 w-full rounded-xl bg-white px-3 text-sm ring-1 ring-slate-200"
                aria-label="Chapter for this note"
              >
                <option value="">Choose a chapter…</option>
                {groups.map((g) => (
                  <optgroup key={g} label={g}>
                    {pickable.filter((c) => c.group === g).map((c) => (
                      <option key={c.ref} value={c.ref}>{c.label}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              {newChapter ? (
                <NoteEditor
                  onCancel={() => setAdding(false)}
                  onSave={(d) => {
                    addNote({ ...d, chapter: newChapter });
                    setAdding(false);
                    setNewChapter("");
                  }}
                />
              ) : (
                <button onClick={() => setAdding(false)} className="text-sm text-slate-500 hover:underline">Cancel</button>
              )}
            </div>
          )}

          {!hydrated ? null : filtered.length === 0 ? (
            <EmptyState
              title={notes.length ? "No notes match your search." : "No notes yet"}
              body={notes.length ? "Try a different word or class." : "Open any topic and add a note, or save AI-generated notes with one click."}
            />
          ) : (
            <div className="columns-1 gap-4 md:columns-2 xl:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
              {filtered.map((n) => {
                const ch = byRef.get(n.chapter);
                const topicTitle = n.topic ? ch?.topics[n.topic] : undefined;
                return (
                  <NoteCard
                    key={n.id}
                    note={n}
                    context={
                      ch
                        ? {
                            label: `${ch.group.replace("Class ", "C")} · ${topicTitle ?? ch.label}`,
                            href: n.topic && topicTitle ? `${ch.href}/${n.topic}` : ch.href,
                          }
                        : undefined
                    }
                  />
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-6">
          {!hydrated ? null : bookmarks.length === 0 ? (
            <EmptyState title="No bookmarks yet" body="Tap “Bookmark” on any topic to find it here quickly." />
          ) : (
            <ul className="grid gap-3 sm:grid-cols-2">
              {bookmarks.map((b) => {
                const [g, s] = b.ref.split("/");
                const ch = byRef.get(b.ref.split("/").slice(0, 3).join("/"));
                return (
                  <li key={b.ref} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                    <Bookmark className="size-5 shrink-0 fill-rose-500 text-rose-500" aria-hidden />
                    <Link href={`/learn/${b.ref}`} className="min-w-0 flex-1">
                      <span className="block truncate font-semibold text-slate-900 hover:text-brand-700">{b.title}</span>
                      <span className="block truncate text-xs text-slate-500">
                        {ch ? `${ch.group} · ${ch.label}` : `Class ${g} · ${s}`}
                      </span>
                    </Link>
                    <button onClick={() => removeBookmark(b.ref)} className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-rose-600" aria-label={`Remove bookmark ${b.title}`}>
                      <Trash2 className="size-4" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-slate-200 p-10 text-center">
      <NotebookPen className="mx-auto size-8 text-slate-300" aria-hidden />
      <p className="mt-2 font-semibold text-slate-800">{title}</p>
      <p className="mt-1 text-sm text-slate-500">{body}</p>
      <Link href="/explore" className="mt-4 inline-block text-sm font-semibold text-brand-600 hover:underline">
        Explore topics →
      </Link>
    </div>
  );
}
