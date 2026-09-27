"use client";

import { useEffect } from "react";
import { Bookmark, CheckCircle2, Circle, Sparkles } from "lucide-react";
import { useBookmarks, useCompleted, useRecent } from "@/lib/store";

export function TopicToolbar({ topicRef, title }: { topicRef: string; title: string }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { done, toggleDone } = useCompleted();
  const { pushRecent } = useRecent();

  // Opening a topic puts it at the top of "Continue learning".
  useEffect(() => {
    pushRecent(topicRef, title);
  }, [topicRef, title, pushRecent]);

  const marked = isBookmarked(topicRef);
  const isDone = !!done[topicRef];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <button
        onClick={() => toggleDone(topicRef)}
        aria-pressed={isDone}
        className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
          isDone ? "bg-emerald-500 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-emerald-300"
        }`}
      >
        {isDone ? <CheckCircle2 className="size-4" /> : <Circle className="size-4" />}
        {isDone ? "Completed" : "Mark complete"}
      </button>
      <button
        onClick={() => toggleBookmark(topicRef, title)}
        aria-pressed={marked}
        className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
          marked ? "bg-rose-500 text-white" : "bg-white text-slate-700 ring-1 ring-slate-200 hover:ring-rose-300"
        }`}
      >
        <Bookmark className={`size-4 ${marked ? "fill-current" : ""}`} />
        {marked ? "Bookmarked" : "Bookmark"}
      </button>
      <a
        href="#ai-tools"
        className="flex items-center gap-1.5 rounded-full bg-fuchsia-50 px-3.5 py-1.5 text-sm font-semibold text-fuchsia-700 ring-1 ring-fuchsia-200 lg:hidden"
      >
        <Sparkles className="size-4" /> AI tools
      </a>
    </div>
  );
}
