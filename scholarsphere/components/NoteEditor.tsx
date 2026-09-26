"use client";

import { useRef, useState } from "react";
import { Bold, Eye, Heading, Highlighter, Italic, List, ListOrdered, PencilLine } from "lucide-react";
import type { Note, NoteColor } from "@/lib/store";
import { Markdown } from "./Markdown";

export const NOTE_COLORS: Record<NoteColor, { card: string; dot: string }> = {
  yellow: { card: "bg-amber-50 ring-amber-200", dot: "bg-amber-300" },
  blue: { card: "bg-sky-50 ring-sky-200", dot: "bg-sky-300" },
  green: { card: "bg-emerald-50 ring-emerald-200", dot: "bg-emerald-300" },
  pink: { card: "bg-rose-50 ring-rose-200", dot: "bg-rose-300" },
  purple: { card: "bg-violet-50 ring-violet-200", dot: "bg-violet-300" },
};

type ToolId = "bold" | "italic" | "highlight" | "heading" | "bullets" | "numbers";

const TOOLS: { id: ToolId; icon: typeof Bold; label: string }[] = [
  { id: "bold", icon: Bold, label: "Bold" },
  { id: "italic", icon: Italic, label: "Italic" },
  { id: "highlight", icon: Highlighter, label: "Highlight" },
  { id: "heading", icon: Heading, label: "Heading" },
  { id: "bullets", icon: List, label: "Bullet list" },
  { id: "numbers", icon: ListOrdered, label: "Numbered list" },
];

export interface NoteDraft {
  title: string;
  body: string;
  color: NoteColor;
}

export function NoteEditor({
  initial,
  onSave,
  onCancel,
  saveLabel = "Save note",
}: {
  initial?: Partial<Pick<Note, "title" | "body" | "color">>;
  onSave: (draft: NoteDraft) => void;
  onCancel: () => void;
  saveLabel?: string;
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [body, setBody] = useState(initial?.body ?? "");
  const [color, setColor] = useState<NoteColor>(initial?.color ?? "yellow");
  const [preview, setPreview] = useState(false);
  const ta = useRef<HTMLTextAreaElement>(null);

  /** Wrap the selection (or insert a placeholder) with markdown markers. */
  const wrap = (before: string, after = before, placeholder = "text") => {
    const el = ta.current;
    if (!el) return;
    const { selectionStart: s, selectionEnd: e } = el;
    const selected = body.slice(s, e) || placeholder;
    const next = body.slice(0, s) + before + selected + after + body.slice(e);
    setBody(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(s + before.length, s + before.length + selected.length);
    });
  };

  /** Prefix each selected line (or the current line). */
  const prefixLines = (prefix: (i: number) => string) => {
    const el = ta.current;
    if (!el) return;
    const start = body.lastIndexOf("\n", el.selectionStart - 1) + 1;
    const endIdx = body.indexOf("\n", el.selectionEnd);
    const end = endIdx === -1 ? body.length : endIdx;
    const lines = body.slice(start, end).split("\n").map((l, i) => prefix(i) + l);
    const replaced = lines.join("\n");
    setBody(body.slice(0, start) + replaced + body.slice(end));
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + replaced.length, start + replaced.length);
    });
  };

  const apply = (tool: ToolId) => {
    if (tool === "bold") wrap("**");
    else if (tool === "italic") wrap("*");
    else if (tool === "highlight") wrap("==");
    else if (tool === "heading") prefixLines(() => "## ");
    else if (tool === "bullets") prefixLines(() => "- ");
    else prefixLines((i) => `${i + 1}. `);
  };

  const canSave = title.trim() || body.trim();

  return (
    <form
      className={`animate-pop rounded-2xl p-4 ring-1 ${NOTE_COLORS[color].card}`}
      onSubmit={(e) => {
        e.preventDefault();
        if (canSave) onSave({ title: title.trim() || "Untitled note", body, color });
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note title"
        autoFocus
        className="w-full bg-transparent text-base font-semibold text-slate-900 outline-none placeholder:text-slate-400"
      />
      <div className="mt-2 flex flex-wrap items-center gap-1 border-y border-black/5 py-1.5">
        {TOOLS.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => apply(id)}
            disabled={preview}
            title={label}
            aria-label={label}
            className="rounded-md p-1.5 text-slate-600 hover:bg-black/5 disabled:opacity-40"
          >
            <Icon className="size-4" />
          </button>
        ))}
        <button
          type="button"
          onClick={() => setPreview((p) => !p)}
          className="ml-auto flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-slate-600 hover:bg-black/5"
        >
          {preview ? <PencilLine className="size-3.5" /> : <Eye className="size-3.5" />}
          {preview ? "Write" : "Preview"}
        </button>
      </div>
      {preview ? (
        <div className="min-h-32 py-3 text-sm text-slate-700">
          {body.trim() ? <Markdown source={body} /> : <p className="text-slate-400">Nothing to preview yet.</p>}
        </div>
      ) : (
        <textarea
          ref={ta}
          value={body}
          onChange={(e) => setBody(e.target.value)}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === "b") {
              e.preventDefault();
              wrap("**");
            } else if ((e.metaKey || e.ctrlKey) && e.key === "i") {
              e.preventDefault();
              wrap("*");
            } else if ((e.metaKey || e.ctrlKey) && e.key === "Enter" && canSave) {
              e.preventDefault();
              onSave({ title: title.trim() || "Untitled note", body, color });
            }
          }}
          placeholder={"Write in your own words…\n\n- Use the toolbar for **bold**, *italics*, ==highlights== and lists"}
          rows={7}
          className="mt-2 w-full resize-y bg-transparent text-sm leading-relaxed text-slate-800 outline-none placeholder:text-slate-400"
        />
      )}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <div className="flex gap-1.5" role="radiogroup" aria-label="Note colour">
          {(Object.keys(NOTE_COLORS) as NoteColor[]).map((c) => (
            <button
              key={c}
              type="button"
              role="radio"
              aria-checked={color === c}
              aria-label={c}
              onClick={() => setColor(c)}
              className={`size-5 rounded-full ${NOTE_COLORS[c].dot} ${color === c ? "ring-2 ring-slate-700 ring-offset-2" : ""}`}
            />
          ))}
        </div>
        <div className="ml-auto flex gap-2">
          <button type="button" onClick={onCancel} className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-black/5">
            Cancel
          </button>
          <button
            type="submit"
            disabled={!canSave}
            className="rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-semibold text-white hover:bg-slate-700 disabled:opacity-40"
          >
            {saveLabel}
          </button>
        </div>
      </div>
    </form>
  );
}
