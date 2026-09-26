/** Compact search entry (short keys keep the static index small). */
export interface SearchEntry {
  k: "subject" | "chapter" | "topic" | "subtopic";
  t: string; // title
  c: string; // context line
  h: string; // href
  g: string; // grade id
}

const KIND_RANK = { subject: 0, chapter: 1, topic: 2, subtopic: 3 };

export function searchIn(
  entries: SearchEntry[],
  query: string,
  grade?: string | null,
  limit = 10,
): SearchEntry[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const terms = q.split(/\s+/);
  const hits = entries.filter((e) => {
    const hay = e.t.toLowerCase();
    return terms.every((term) => hay.includes(term));
  });
  // Prefer the student's own class, then prefix matches, broader kinds, shorter titles.
  hits.sort(
    (a, b) =>
      Number(b.g === grade) - Number(a.g === grade) ||
      Number(b.t.toLowerCase().includes(q)) - Number(a.t.toLowerCase().includes(q)) ||
      KIND_RANK[a.k] - KIND_RANK[b.k] ||
      a.t.length - b.t.length,
  );
  // Subtopics share their topic's href; keep one hit per destination.
  const seen = new Set<string>();
  return hits.filter((h) => (seen.has(h.h) ? false : (seen.add(h.h), true))).slice(0, limit);
}
