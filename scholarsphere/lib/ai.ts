/**
 * AI layer shared by the client and the /api/ai route.
 *
 * The app always works offline: `mockRespond` builds answers from the topic's
 * curated content. When ANTHROPIC_API_KEY is set on the server, the client asks
 * /api/ai first and falls back to the mock if the route is unavailable.
 */

import type { Topic } from "./types";

export type ExplainAction = "eli10" | "realWorld" | "mnemonic";

export const EXPLAIN_ACTIONS: {
  id: ExplainAction;
  label: string;
  hint: string;
}[] = [
  { id: "eli10", label: "Explain like I'm 10", hint: "Simple words, zero jargon" },
  { id: "realWorld", label: "Real-world example", hint: "Where you see it in daily life" },
  { id: "mnemonic", label: "Mnemonic trick", hint: "A memory hook for exams" },
];

export interface AINotes {
  summary: string[];
  takeaways: string[];
  flashcards: { front: string; back: string }[];
}

export interface TopicContext {
  classLabel: string;
  subject: string;
  chapter: string;
  topic: Topic;
}

/** Plain-text rendering of a topic, sent to the LLM as grounding. */
export function contextToText({ classLabel, subject, chapter, topic }: TopicContext) {
  const lines = [
    `CBSE ${classLabel} · ${subject} · Chapter: ${chapter}`,
    `Topic: ${topic.title}`,
    `Subtopics: ${topic.subtopics.map((s) => s.title).join("; ")}`,
  ];
  const c = topic.content;
  if (c) {
    lines.push("", c.intro);
    for (const s of c.sections) lines.push("", `## ${s.heading}`, s.body);
    if (c.definitions.length)
      lines.push("", "Definitions:", ...c.definitions.map((d) => `- ${d.term}: ${d.meaning}`));
    if (c.formulas?.length)
      lines.push("", "Formulas:", ...c.formulas.map((f) => `- ${f.label}: ${f.expression}`));
    if (c.dates?.length)
      lines.push("", "Dates:", ...c.dates.map((d) => `- ${d.date}: ${d.event}`));
  }
  return lines.join("\n");
}

const firstSentence = (text: string) => {
  const clean = text.replace(/\*\*/g, "");
  const m = clean.match(/^.*?[.!?](\s|$)/);
  return (m ? m[0] : clean).trim();
};

/* ---------- Offline (mock) responses ---------- */

export function mockExplain(action: ExplainAction, ctx: TopicContext): string {
  const { topic } = ctx;
  if (topic.content) return topic.content.explainers[action];

  const subs = topic.subtopics.map((s) => s.title);
  const list = subs.join(", ");
  switch (action) {
    case "eli10":
      return `“${topic.title}” is one of the ideas in the chapter ${ctx.chapter}. Think of it as a small puzzle with ${subs.length} pieces: ${list}. Learn one piece at a time, and try saying each piece out loud in your own words — if you can explain it to a friend, you’ve got it!`;
    case "realWorld":
      return `Look for “${topic.title}” around you: in the news, at home, or in the market. Pick one of these — ${list} — and write down one place you've seen it in daily life. Linking a topic to something real makes it much easier to recall in the exam.`;
    case "mnemonic": {
      const initials = subs.map((s) => s.replace(/^(the|a|an)\s+/i, "")[0]?.toUpperCase()).join("");
      return `Remember the subtopics in order with the letters **${initials}** — ${subs
        .map((s) => `**${s[0]}**${s.slice(1)}`)
        .join(" → ")}. Make up a silly sentence using words that start with ${initials.split("").join(", ")} and you'll never forget the order.`;
    }
  }
}

export function mockNotes(ctx: TopicContext): AINotes {
  const c = ctx.topic.content;
  if (!c) {
    return {
      summary: [
        `${ctx.topic.title} is part of “${ctx.chapter}” (${ctx.classLabel} ${ctx.subject}).`,
        ...ctx.topic.subtopics.map((s) => `Study: ${s.title}`),
      ],
      takeaways: [
        "Read the NCERT section for this topic once, fully, before making notes.",
        "Write one line in your own words for each subtopic.",
      ],
      flashcards: ctx.topic.subtopics.map((s) => ({
        front: s.title,
        back: `Explain “${s.title}” in one line (check with your NCERT textbook).`,
      })),
    };
  }
  return {
    summary: [firstSentence(c.intro), ...c.sections.map((s) => `${s.heading}: ${firstSentence(s.body)}`)],
    takeaways: c.keyPoints,
    flashcards: [
      ...c.definitions.map((d) => ({ front: d.term, back: d.meaning })),
      ...(c.formulas ?? []).map((f) => ({ front: f.label, back: f.expression })),
      ...(c.dates ?? []).map((d) => ({ front: d.date, back: d.event })),
    ],
  };
}

export function notesToMarkdown(title: string, notes: AINotes) {
  return [
    `# ${title}`,
    "## Summary",
    ...notes.summary.map((s) => `- ${s}`),
    "## Key takeaways",
    ...notes.takeaways.map((s) => `- ${s}`),
    "## Flashcards",
    ...notes.flashcards.map((f) => `- **${f.front}** — ${f.back}`),
  ].join("\n");
}

/* ---------- Client helpers ---------- */

export type AIRequest =
  | { kind: "explain"; action: ExplainAction; context: string }
  | { kind: "notes"; context: string };

export type AIResponse =
  | { ok: true; text: string }
  | { ok: true; notes: AINotes }
  | { ok: false; reason: "not-configured" | "error"; message?: string };

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Once the server says no key is configured, stop asking for this page load.
let liveUnavailable = false;

/** Try the live model; returns null when the app should use the offline answer. */
async function callLive(body: AIRequest): Promise<AIResponse | null> {
  if (liveUnavailable) return null;
  try {
    const res = await fetch("/api/ai", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = (await res.json()) as AIResponse;
    if (!data.ok && data.reason === "not-configured") liveUnavailable = true;
    return data.ok ? data : null;
  } catch {
    return null;
  }
}

export async function explain(
  action: ExplainAction,
  ctx: TopicContext,
): Promise<{ text: string; live: boolean }> {
  const live = await callLive({ kind: "explain", action, context: contextToText(ctx) });
  if (live && "text" in live) return { text: live.text, live: true };
  await delay(350); // brief "thinking" beat so the UI transition reads naturally
  return { text: mockExplain(action, ctx), live: false };
}

export async function generateNotes(
  ctx: TopicContext,
): Promise<{ notes: AINotes; live: boolean }> {
  const live = await callLive({ kind: "notes", context: contextToText(ctx) });
  if (live && "notes" in live) return { notes: live.notes, live: true };
  await delay(450);
  return { notes: mockNotes(ctx), live: false };
}
