import { Fragment, type ReactNode } from "react";

/**
 * Minimal, safe markdown for notes and AI answers (no HTML injection):
 * "# "/"## " headings, "- " bullets, "1. " numbered items, blank-line
 * paragraphs, and inline **bold**, *italic*, ==highlight==.
 */

const INLINE = /(\*\*[^*]+\*\*|==[^=]+==|\*[^*\s][^*]*\*)/g;

function inline(text: string): ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4)
      return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
    if (part.startsWith("==") && part.endsWith("==") && part.length > 4)
      return <mark key={i} className="rounded bg-yellow-200/80 px-0.5 text-inherit">{part.slice(2, -2)}</mark>;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2)
      return <em key={i}>{part.slice(1, -1)}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

type Block =
  | { type: "h1" | "h2" | "p"; text: string }
  | { type: "ul" | "ol"; items: string[] };

function parse(src: string): Block[] {
  const blocks: Block[] = [];
  let para: string[] = [];
  const flush = () => {
    if (para.length) blocks.push({ type: "p", text: para.join(" ") });
    para = [];
  };
  for (const raw of src.split("\n")) {
    const line = raw.trimEnd();
    const bullet = line.match(/^\s*[-*•]\s+(.*)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
    const last = blocks[blocks.length - 1];
    if (!line.trim()) flush();
    else if (line.startsWith("## ")) {
      flush();
      blocks.push({ type: "h2", text: line.slice(3) });
    } else if (line.startsWith("# ")) {
      flush();
      blocks.push({ type: "h1", text: line.slice(2) });
    } else if (bullet) {
      flush();
      if (last?.type === "ul") last.items.push(bullet[1]);
      else blocks.push({ type: "ul", items: [bullet[1]] });
    } else if (numbered) {
      flush();
      if (last?.type === "ol") last.items.push(numbered[1]);
      else blocks.push({ type: "ol", items: [numbered[1]] });
    } else para.push(line.trim());
  }
  flush();
  return blocks;
}

export function Markdown({ source, className = "" }: { source: string; className?: string }) {
  return (
    <div className={`space-y-2.5 leading-relaxed ${className}`}>
      {parse(source).map((b, i) => {
        switch (b.type) {
          case "h1":
            return <h3 key={i} className="text-lg font-bold text-slate-900">{inline(b.text)}</h3>;
          case "h2":
            return <h4 key={i} className="pt-1 font-semibold text-slate-800">{inline(b.text)}</h4>;
          case "p":
            return <p key={i}>{inline(b.text)}</p>;
          case "ul":
            return (
              <ul key={i} className="ml-5 list-disc space-y-1 marker:text-slate-400">
                {b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="ml-5 list-decimal space-y-1 marker:text-slate-400">
                {b.items.map((t, j) => <li key={j}>{inline(t)}</li>)}
              </ol>
            );
        }
      })}
    </div>
  );
}
