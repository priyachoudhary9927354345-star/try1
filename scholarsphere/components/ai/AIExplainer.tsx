"use client";

import { useRef, useState } from "react";
import { Baby, Globe2, Lightbulb, Loader2, RotateCcw, Sparkles } from "lucide-react";
import { EXPLAIN_ACTIONS, explain, type ExplainAction, type TopicContext } from "@/lib/ai";
import { Markdown } from "../Markdown";
import { useTypewriter } from "./useTypewriter";

const ICONS: Record<ExplainAction, typeof Baby> = {
  eli10: Baby,
  realWorld: Globe2,
  mnemonic: Lightbulb,
};

export function AIExplainer({ context }: { context: TopicContext }) {
  const [enabled, setEnabled] = useState(true);
  const [action, setAction] = useState<ExplainAction | null>(null);
  const [answer, setAnswer] = useState<{ text: string; live: boolean } | null>(null);
  const [loading, setLoading] = useState(false);
  const requestId = useRef(0);
  const shown = useTypewriter(answer?.text ?? "");


  const run = async (a: ExplainAction) => {
    const id = ++requestId.current;
    setAction(a);
    setLoading(true);
    setAnswer(null);
    const result = await explain(a, context);
    if (id !== requestId.current) return; // a newer request superseded this one
    setAnswer(result);
    setLoading(false);
  };

  return (
    <section className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-fuchsia-200">
      <div className="flex items-center gap-3 bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-3 text-white">
        <Sparkles className="size-5" aria-hidden />
        <h2 className="flex-1 font-semibold">AI Explainer</h2>
        <label className="flex cursor-pointer items-center gap-2 text-xs font-medium">
          {enabled ? "On" : "Off"}
          <input
            type="checkbox"
            role="switch"
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
            className="peer sr-only"
          />
          <span className="relative h-5 w-9 rounded-full bg-white/30 transition after:absolute after:left-0.5 after:top-0.5 after:size-4 after:rounded-full after:bg-white after:transition peer-checked:bg-white/50 peer-checked:after:translate-x-4 peer-focus-visible:ring-2 peer-focus-visible:ring-white" />
        </label>
      </div>

      {enabled && (
        <div className="p-4">
          <div className="grid gap-2">
            {EXPLAIN_ACTIONS.map(({ id, label, hint }) => {
              const Icon = ICONS[id];
              const active = action === id;
              return (
                <button
                  key={id}
                  onClick={() => run(id)}
                  disabled={loading && active}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                    active ? "bg-fuchsia-50 ring-2 ring-fuchsia-400" : "bg-slate-50 ring-1 ring-slate-200 hover:bg-fuchsia-50 hover:ring-fuchsia-300"
                  }`}
                >
                  <span className="grid size-8 place-items-center rounded-lg bg-white text-fuchsia-600 shadow-sm">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-slate-900">{label}</span>
                    <span className="block text-xs text-slate-500">{hint}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {(loading || answer) && (
            <div className="mt-4 animate-fade rounded-xl bg-gradient-to-br from-fuchsia-50 to-violet-50 p-4 text-sm text-slate-700" aria-live="polite">
              {loading ? (
                <p className="flex items-center gap-2 text-fuchsia-700">
                  <Loader2 className="size-4 animate-spin" aria-hidden /> Thinking…
                </p>
              ) : (
                answer && (
                  <>
                    <Markdown source={shown} />
                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{answer.live ? "Live AI answer — double-check with your textbook" : "Offline explainer"}</span>
                      {action && (
                        <button onClick={() => run(action)} className="flex items-center gap-1 font-medium text-fuchsia-600 hover:underline">
                          <RotateCcw className="size-3" /> Again
                        </button>
                      )}
                    </div>
                  </>
                )
              )}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
