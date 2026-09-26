"use client";

import { useState } from "react";
import Link from "next/link";
import { Pencil, Pin, PinOff, Sparkles, Trash2 } from "lucide-react";
import type { Note } from "@/lib/store";
import { useNotes } from "@/lib/store";
import { Markdown } from "./Markdown";
import { NOTE_COLORS, NoteEditor } from "./NoteEditor";

const dateFmt = new Intl.DateTimeFormat("en-IN", { day: "numeric", month: "short" });

export function NoteCard({
  note,
  context,
  collapsed = true,
}: {
  note: Note;
  /** Optional link shown under the title (e.g. chapter name on the notes hub). */
  context?: { label: string; href: string };
  collapsed?: boolean;
}) {
  const { updateNote, deleteNote } = useNotes();
  const [editing, setEditing] = useState(false);
  const [expanded, setExpanded] = useState(!collapsed);
  const [confirming, setConfirming] = useState(false);

  if (editing) {
    return (
      <NoteEditor
        initial={note}
        saveLabel="Update"
        onCancel={() => setEditing(false)}
        onSave={(d) => {
          updateNote(note.id, d);
          setEditing(false);
        }}
      />
    );
  }

  const long = note.body.length > 280 || note.body.split("\n").length > 8;

  return (
    <article className={`group rounded-2xl p-4 ring-1 ${NOTE_COLORS[note.color].card}`}>
      <header className="flex items-start gap-2">
        <div className="min-w-0 flex-1">
          <h3 className="flex items-center gap-1.5 font-semibold text-slate-900">
            {note.pinned && <Pin className="size-3.5 shrink-0 fill-current text-slate-500" aria-label="Pinned" />}
            {note.source === "ai" && <Sparkles className="size-3.5 shrink-0 text-fuchsia-500" aria-label="AI generated" />}
            <span className="truncate">{note.title}</span>
          </h3>
          <p className="text-xs text-slate-500">
            {context && (
              <>
                <Link href={context.href} className="font-medium hover:text-brand-600 hover:underline">
                  {context.label}
                </Link>{" "}
                ·{" "}
              </>
            )}
            {dateFmt.format(note.updatedAt)}
          </p>
        </div>
        <div className="flex shrink-0 gap-0.5 opacity-70 transition group-hover:opacity-100">
          <IconBtn label={note.pinned ? "Unpin" : "Pin"} onClick={() => updateNote(note.id, { pinned: !note.pinned })}>
            {note.pinned ? <PinOff className="size-4" /> : <Pin className="size-4" />}
          </IconBtn>
          <IconBtn label="Edit" onClick={() => setEditing(true)}>
            <Pencil className="size-4" />
          </IconBtn>
          {confirming ? (
            <button
              onClick={() => deleteNote(note.id)}
              onBlur={() => setConfirming(false)}
              autoFocus
              className="rounded-md bg-rose-600 px-2 text-xs font-semibold text-white"
            >
              Delete?
            </button>
          ) : (
            <IconBtn label="Delete" onClick={() => setConfirming(true)}>
              <Trash2 className="size-4" />
            </IconBtn>
          )}
        </div>
      </header>
      {note.body.trim() && (
        <div className={`relative mt-2 text-sm text-slate-700 ${long && !expanded ? "max-h-40 overflow-hidden" : ""}`}>
          <Markdown source={note.body} />
          {long && !expanded && (
            <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white/90 to-transparent" />
          )}
        </div>
      )}
      {long && (
        <button onClick={() => setExpanded((e) => !e)} className="mt-1 text-xs font-semibold text-brand-600 hover:underline">
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </article>
  );
}

function IconBtn({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} title={label} aria-label={label} className="rounded-md p-1.5 text-slate-500 hover:bg-black/5 hover:text-slate-800">
      {children}
    </button>
  );
}
