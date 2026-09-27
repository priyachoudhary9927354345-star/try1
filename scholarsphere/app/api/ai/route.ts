import Anthropic from "@anthropic-ai/sdk";
import type { AINotes, AIRequest, AIResponse, ExplainAction } from "@/lib/ai";

/**
 * Optional live AI. Set ANTHROPIC_API_KEY to enable; without it this route
 * answers { ok: false, reason: "not-configured" } and the client uses the
 * offline explanations built from the curriculum data.
 */

const MODEL = "claude-opus-5";
const MAX_CONTEXT_CHARS = 20_000;

const SYSTEM = `You are ScholarSphere, a friendly tutor for Indian CBSE students in Classes 8–12.
Ground every answer in the topic material provided and in the NCERT syllabus for that class. Keep answers accurate, short and encouraging.
Write plain text. You may use **bold** for key terms and "- " bullet lines. No headings, no tables.`;

const PROMPTS: Record<ExplainAction, string> = {
  eli10:
    "Explain this topic like I'm 10 years old: 4–6 short sentences, everyday words, one vivid comparison.",
  realWorld:
    "Give one concrete real-world example of this topic from everyday life in India, and connect it clearly back to the concept in 4–6 sentences.",
  mnemonic:
    "Give one memorable mnemonic or memory trick for the most exam-relevant facts in this topic, then say in one line what each part stands for.",
};

const NOTES_SCHEMA = {
  type: "object",
  properties: {
    summary: { type: "array", items: { type: "string" } },
    takeaways: { type: "array", items: { type: "string" } },
    flashcards: {
      type: "array",
      items: {
        type: "object",
        properties: { front: { type: "string" }, back: { type: "string" } },
        required: ["front", "back"],
        additionalProperties: false,
      },
    },
  },
  required: ["summary", "takeaways", "flashcards"],
  additionalProperties: false,
};

function json(body: AIResponse, status = 200) {
  return Response.json(body, { status });
}

function isRequest(value: unknown): value is AIRequest {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;
  if (typeof v.context !== "string") return false;
  if (v.kind === "notes") return true;
  return v.kind === "explain" && typeof v.action === "string" && v.action in PROMPTS;
}

export async function POST(request: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return json({ ok: false, reason: "not-configured" });
  }

  const body: unknown = await request.json().catch(() => null);
  if (!isRequest(body)) {
    return json({ ok: false, reason: "error", message: "Bad request" }, 400);
  }
  const context = body.context.slice(0, MAX_CONTEXT_CHARS);
  const client = new Anthropic();

  try {
    const response = await client.beta.messages.create({
      model: MODEL,
      max_tokens: 4000,
      // Short study aids: low effort keeps answers quick.
      output_config: {
        effort: "low",
        ...(body.kind === "notes"
          ? { format: { type: "json_schema" as const, schema: NOTES_SCHEMA } }
          : {}),
      },
      // If the model declines, the API retries on a fallback model.
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: SYSTEM,
      messages: [
        {
          role: "user",
          content:
            body.kind === "notes"
              ? `Topic material:\n\n${context}\n\nMake revision notes: 4–6 summary bullets, 3–5 key takeaways, and 4–8 flashcards (front: a term or question, back: a one-line answer).`
              : `Topic material:\n\n${context}\n\n${PROMPTS[body.action]}`,
        },
      ],
    });

    if (response.stop_reason === "refusal") {
      return json({ ok: false, reason: "error", message: "The model declined this request." });
    }
    const text = response.content
      .map((b) => (b.type === "text" ? b.text : ""))
      .join("")
      .trim();

    if (body.kind === "notes") {
      return json({ ok: true, notes: JSON.parse(text) as AINotes });
    }
    return json({ ok: true, text });
  } catch (error) {
    const message =
      error instanceof Anthropic.APIError
        ? `API error ${error.status ?? ""}`.trim()
        : "Could not reach the AI service";
    return json({ ok: false, reason: "error", message }, 502);
  }
}
