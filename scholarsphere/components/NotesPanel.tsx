"use client";

import { useState } from "react";
import { NotebookPen, Plus } from "lucide-react";
import { useNotes } from "@/lib/store";
import { useHydrated } from "@/lib/storage";
import { NoteCard } from "./NoteCard";
import { NoteEditor } from "./NoteEditor";

/** Personal notes attached to a chapter (and optionally one topic in it). */
export function NotesPanel({
  chapterRef,
  topicId,
  heading = "My notes",
}: {
  chapterRef: string;
  topicId?: string;
  heading?: string;
}) {
  const hydrated = useHydrated();
  const { notes, addNote } = useNotes();
  const [adding, setAdding] = useState(false);

  const mine = notes
    .filter((n) => n.chapter === chapterRef && (topicId ? n.topic === topicId : true))
    .sort((a, b) => Number(b.pinned) - Number(a.pinned) || b.updatedAt - a.updatedAt);

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 font-semibold text-slate-900">
          <NotebookPen className="size-4 text-amber-500" aria-hidden />
          {heading}
          {hydrated && mine.length > 0 && (
            <span className="rounded-full bg-slate-100 px-2 text-xs font-medium text-slate-600">{mine.length}</span>
          )}
        </h2>
        {!adding && (
          <button
            onClick={() => setAdding(true)}
            className="flex items-center gap-1 rounded-lg bg-amber-100 px-2.5 py-1.5 text-xs font-semibold text-amber-800 hover:bg-amber-200"
          >
            <Plus className="size-3.5" /> New note
          </button>
        )}
      </div>

      <div className="mt-3 space-y-3">
        {adding && (
          <NoteEditor
            onCancel={() => setAdding(false)}
            onSave={(d) => {
              addNote({ ...d, chapter: chapterRef, topic: topicId });
              setAdding(false);
            }}
          />
        )}
        {hydrated && mine.map((n) => <NoteCard key={n.id} note={n} />)}
        {hydrated && !adding && mine.length === 0 && (
          <p className="text-sm text-slate-500">
            Jot down doubts, shortcuts or anything your teacher said. Saved in this browser.
          </p>
        )}
      </div>
    </section>
  );
}
