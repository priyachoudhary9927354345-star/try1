"use client";

import { useRef, useState } from "react";
import { Check, FileText, Loader2, RotateCcw, Save, Wand2 } from "lucide-react";
import { generateNotes, notesToMarkdown, type AINotes as Notes, type TopicContext } from "@/lib/ai";
import { useNotes } from "@/lib/store";
import { Markdown } from "../Markdown";
import { FlipCard } from "../practice/FlipCard";

export function AINotes({ context, chapterRef }: { context: TopicContext; chapterRef: string }) {
  const { addNote } = useNotes();
  const [result, setResult] = useState<{ notes: Notes; live: boolean } | null>(null);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState<"notes" | "cards">("notes");
  const requestId = useRef(0);


  const run = async () => {
    const id = ++requestId.current;
    setLoading(true);
    setSaved(false);
    const r = await generateNotes(context);
    if (id !== requestId.current) return;
    setResult(r);
    setLoading(false);
  };

  const save = () => {
    if (!result) return;
    const title = `AI notes: ${context.topic.title}`;
    addNote({
      chapter: chapterRef,
      topic: context.topic.id,
      title,
      body: notesToMarkdown(context.topic.title, result.notes).replace(/^# .*\n/, ""),
      color: "purple",
      source: "ai",
    });
    setSaved(true);
  };

  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center justify-between gap-2">
        <h2 className="flex items-center gap-2 font-semibold text-slate-900">
          <Wand2 className="size-4 text-violet-500" aria-hidden /> AI Notes Generator
        </h2>
        {result && !loading && (
          <button onClick={run} className="flex items-center gap-1 text-xs font-medium text-violet-600 hover:underline">
            <RotateCcw className="size-3" /> Redo
          </button>
        )}
      </div>

      {!result ? (
        <>
          <p className="mt-1 text-sm text-slate-500">
            Summarise this topic into bullet points, key takeaways and flashcards in one click.
          </p>
          <button
            onClick={run}
            disabled={loading}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 disabled:opacity-70"
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : <FileText className="size-4" />}
            {loading ? "Generating…" : "Generate notes"}
          </button>
        </>
      ) : (
        <div className="mt-3 animate-fade">
          <div className="mb-3 flex rounded-lg bg-slate-100 p-1 text-xs font-semibold">
            {(["notes", "cards"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 rounded-md py-1.5 ${tab === t ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}
              >
                {t === "notes" ? "Summary" : `Flashcards (${result.notes.flashcards.length})`}
              </button>
            ))}
          </div>

          {tab === "notes" ? (
            <div className="text-sm text-slate-700">
              <Markdown
                source={[
                  "## Summary",
                  ...result.notes.summary.map((s) => `- ${s}`),
                  "## Key takeaways",
                  ...result.notes.takeaways.map((s) => `- ${s}`),
                ].join("\n")}
              />
            </div>
          ) : result.notes.flashcards.length ? (
            <div className="grid gap-2">
              {result.notes.flashcards.map((f, i) => (
                <FlipCard key={i} front={f.front} back={f.back} compact />
              ))}
            </div>
          ) : (
            <p className="text-sm text-slate-500">No flashcards for this topic.</p>
          )}

          <div className="mt-4 flex items-center justify-between gap-2">
            <span className="text-[11px] text-slate-400">{result.live ? "Live AI" : "Offline generator"}</span>
            <button
              onClick={save}
              disabled={saved}
              className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold ${
                saved ? "bg-emerald-100 text-emerald-700" : "bg-slate-900 text-white hover:bg-slate-700"
              }`}
            >
              {saved ? <Check className="size-3.5" /> : <Save className="size-3.5" />}
              {saved ? "Saved to My Notes" : "Save to My Notes"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
