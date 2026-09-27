"use client";

import { useEffect, useState } from "react";

/** Reveals `text` progressively (~1s total) for a chat-like feel. */
export function useTypewriter(text: string) {
  const [state, setState] = useState({ text, count: text.length });

  // Reset synchronously when the text changes (render-phase update pattern).
  if (state.text !== text) setState({ text, count: 0 });

  const count = state.text === text ? state.count : 0;
  useEffect(() => {
    if (count >= text.length) return;
    const step = Math.max(3, Math.ceil(text.length / 60));
    const id = setTimeout(() => setState((s) => ({ ...s, count: Math.min(text.length, s.count + step) })), 16);
    return () => clearTimeout(id);
  }, [count, text]);

  return text.slice(0, count);
}
