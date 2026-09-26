"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, FileText, Hash, Layers, Search, X } from "lucide-react";
import { searchIn, type SearchEntry } from "@/lib/search";

let indexPromise: Promise<SearchEntry[]> | null = null;
function loadIndex() {
  indexPromise ??= fetch("/search-index.json")
    .then((r) => r.json() as Promise<SearchEntry[]>)
    .catch(() => {
      indexPromise = null;
      return [];
    });
  return indexPromise;
}

const KIND_ICON = { subject: Layers, chapter: BookOpen, topic: FileText, subtopic: Hash };

export function SearchBox({ grade }: { grade: string | null }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState<SearchEntry[] | null>(null);
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = index ? searchIn(index, query, grade) : [];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !isTyping(e))) {
        e.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    let cancelled = false;
    loadIndex().then((entries) => !cancelled && setIndex(entries));
    return () => {
      cancelled = true;
    };
  }, [open]);

  const close = () => {
    setOpen(false);
    setQuery("");
    setActive(0);
  };

  const go = (hit: SearchEntry) => {
    close();
    router.push(hit.h);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        onMouseEnter={loadIndex}
        className="flex h-10 w-full max-w-xs items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-500 transition hover:border-slate-300 hover:bg-white"
      >
        <Search className="size-4 shrink-0" aria-hidden />
        <span className="truncate">Search chapters & topics</span>
        <kbd className="ml-auto hidden rounded border border-slate-200 bg-white px-1.5 text-[10px] font-medium text-slate-400 lg:block">
          /
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-slate-900/40 p-4 pt-[10vh] backdrop-blur-sm"
          onMouseDown={(e) => e.target === e.currentTarget && close()}
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="w-full max-w-xl animate-pop overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-slate-200">
            <div className="flex items-center gap-3 border-b border-slate-100 px-4">
              <Search className="size-5 text-slate-400" aria-hidden />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Escape") close();
                  else if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActive((a) => Math.min(a + 1, results.length - 1));
                  } else if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActive((a) => Math.max(a - 1, 0));
                  } else if (e.key === "Enter" && results[active]) go(results[active]);
                }}
                placeholder="Try “balancing equations” or “Coulomb”"
                className="h-14 flex-1 bg-transparent text-base outline-none placeholder:text-slate-400"
              />
              <button onClick={close} className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100" aria-label="Close search">
                <X className="size-5" />
              </button>
            </div>
            <ul className="max-h-[55vh] overflow-y-auto p-2" role="listbox">
              {query.trim().length < 2 ? (
                <li className="px-3 py-6 text-center text-sm text-slate-500">
                  Search across every class, subject, chapter and topic.
                </li>
              ) : !index ? (
                <li className="px-3 py-6 text-center text-sm text-slate-500">Loading…</li>
              ) : results.length === 0 ? (
                <li className="px-3 py-6 text-center text-sm text-slate-500">No matches for “{query}”.</li>
              ) : (
                results.map((hit, i) => {
                  const Icon = KIND_ICON[hit.k];
                  return (
                    <li key={hit.h + hit.t} role="option" aria-selected={i === active}>
                      <button
                        onMouseEnter={() => setActive(i)}
                        onClick={() => go(hit)}
                        className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left ${
                          i === active ? "bg-brand-50" : ""
                        }`}
                      >
                        <Icon className="mt-0.5 size-4 shrink-0 text-brand-500" aria-hidden />
                        <span className="min-w-0">
                          <span className="block truncate font-medium text-slate-900">{hit.t}</span>
                          <span className="block truncate text-xs text-slate-500">{hit.c}</span>
                        </span>
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

function isTyping(e: KeyboardEvent) {
  const el = e.target as HTMLElement | null;
  return !!el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
}
