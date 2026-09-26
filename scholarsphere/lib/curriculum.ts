import { class8 } from "./data/class8";
import { class9 } from "./data/class9";
import { class10 } from "./data/class10";
import { class11 } from "./data/class11";
import { class12 } from "./data/class12";
import type { CompactIndex } from "./search";
import type {
  Chapter,
  Grade,
  GradeId,
  QuizQuestion,
  Subject,
  Textbook,
  Topic,
} from "./types";

export const grades: Grade[] = [class8, class9, class10, class11, class12];

export const GRADE_IDS: GradeId[] = grades.map((g) => g.id);

export function isGradeId(value: string): value is GradeId {
  return (GRADE_IDS as string[]).includes(value);
}

export function getGrade(grade: string): Grade | undefined {
  return grades.find((g) => g.id === grade);
}

export function getSubject(grade: string, subject: string): Subject | undefined {
  return getGrade(grade)?.subjects.find((s) => s.id === subject);
}

export interface ChapterLookup {
  grade: Grade;
  subject: Subject;
  textbook: Textbook;
  chapter: Chapter;
}

export function getChapter(
  grade: string,
  subject: string,
  chapter: string,
): ChapterLookup | undefined {
  const g = getGrade(grade);
  const s = g?.subjects.find((x) => x.id === subject);
  if (!g || !s) return undefined;
  for (const textbook of s.textbooks) {
    const c = textbook.chapters.find((x) => x.id === chapter);
    if (c) return { grade: g, subject: s, textbook, chapter: c };
  }
  return undefined;
}

export interface TopicLookup extends ChapterLookup {
  topic: Topic;
  index: number;
  prev?: Topic;
  next?: Topic;
}

export function getTopic(
  grade: string,
  subject: string,
  chapter: string,
  topic: string,
): TopicLookup | undefined {
  const found = getChapter(grade, subject, chapter);
  if (!found) return undefined;
  const topics = found.chapter.topics;
  const index = topics.findIndex((t) => t.id === topic);
  if (index < 0) return undefined;
  return {
    ...found,
    topic: topics[index],
    index,
    prev: topics[index - 1],
    next: topics[index + 1],
  };
}

/** Resolve a stored ref ("grade/subject/chapter[/topic]") back to data. */
export function resolveRef(ref: string) {
  const [grade, subject, chapter, topic] = ref.split("/");
  if (topic) return getTopic(grade, subject, chapter, topic);
  return getChapter(grade, subject, chapter);
}

/* ---------- URLs ---------- */

export const subjectHref = (grade: string, subject: string) =>
  `/learn/${grade}/${subject}`;

export const chapterHref = (grade: string, subject: string, chapter: string) =>
  `/learn/${grade}/${subject}/${chapter}`;

export const topicHref = (
  grade: string,
  subject: string,
  chapter: string,
  topic: string,
) => `/learn/${grade}/${subject}/${chapter}/${topic}`;

export const practiceHref = (grade: string, subject: string, chapter: string) =>
  `/learn/${grade}/${subject}/${chapter}/practice`;

export function refHref(ref: string) {
  return `/learn/${ref}`;
}

/* ---------- Iteration & stats ---------- */

export function subjectChapters(subject: Subject): Chapter[] {
  return subject.textbooks.flatMap((t) => t.chapters);
}

export function hasRichContent(chapter: Chapter) {
  return chapter.topics.some((t) => t.content);
}

export function countSubject(subject: Subject) {
  const chapters = subjectChapters(subject);
  const topics = chapters.flatMap((c) => c.topics);
  return {
    textbooks: subject.textbooks.length,
    chapters: chapters.length,
    topics: topics.length,
    subtopics: topics.reduce((n, t) => n + t.subtopics.length, 0),
    rich: topics.filter((t) => t.content).length,
  };
}

export function countAll() {
  let subjects = 0;
  let chapters = 0;
  let topics = 0;
  let subtopics = 0;
  for (const g of grades) {
    for (const s of g.subjects) {
      subjects++;
      const c = countSubject(s);
      chapters += c.chapters;
      topics += c.topics;
      subtopics += c.subtopics;
    }
  }
  return { grades: grades.length, subjects, chapters, topics, subtopics };
}

/* ---------- Search ---------- */

/**
 * Compact search index served statically at /search-index.json. Entries share
 * context/href prefixes through `groups` to keep the payload small.
 */
export function searchIndex(): CompactIndex {
  const groups: CompactIndex["groups"] = [];
  const entries: CompactIndex["entries"] = [];
  const group = (c: string, h: string, g: string) => groups.push([c, h, g]) - 1;
  for (const g of grades) {
    const gi = group(g.label, `/learn/${g.id}`, g.id);
    for (const s of g.subjects) {
      entries.push([0, s.name, gi, `/${s.id}`]);
      for (const tb of s.textbooks) {
        const bi = group(`${g.label} · ${s.name} · ${tb.title}`, subjectHref(g.id, s.id), g.id);
        for (const c of tb.chapters) {
          entries.push([1, `Ch ${c.number}. ${c.title}`, bi, `/${c.id}`]);
          const ci = group(`${g.label} · ${s.name} · ${c.title}`, chapterHref(g.id, s.id, c.id), g.id);
          for (const t of c.topics) {
            entries.push([2, t.title, ci, `/${t.id}`]);
            for (const st of t.subtopics) entries.push([3, st.title, ci, `/${t.id}`]);
          }
        }
      }
    }
  }
  return { groups, entries };
}

/* ---------- Practice question generation ---------- */

/**
 * Chapter quiz: the hand-written questions if present, otherwise questions
 * generated from the chapter's definitions (match term ↔ meaning).
 */
export function chapterQuiz(chapter: Chapter): QuizQuestion[] {
  if (chapter.quiz && chapter.quiz.length > 0) return chapter.quiz;
  const defs = chapter.topics.flatMap((t) => t.content?.definitions ?? []);
  if (defs.length < 4) return [];
  return defs.map((d, i) => {
    // The next three definitions (wrapping) are distinct because defs.length >= 4.
    const options = [1, 2, 3].map((k) => defs[(i + k) % defs.length].term);
    const answer = i % 4;
    options.splice(answer, 0, d.term);
    return {
      id: `gen-${i}`,
      question: `Which term matches this definition? “${d.meaning}”`,
      options,
      answer,
      explanation: `${d.term}: ${d.meaning}`,
    };
  });
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  kind: "definition" | "formula" | "date" | "key point";
  topic: string;
}

export function topicFlashcards(topic: Topic): Flashcard[] {
  const c = topic.content;
  if (!c) return [];
  return [
    ...c.definitions.map((d, i) => ({
      id: `${topic.id}-d${i}`,
      front: d.term,
      back: d.meaning,
      kind: "definition" as const,
      topic: topic.title,
    })),
    ...(c.formulas ?? []).map((f, i) => ({
      id: `${topic.id}-f${i}`,
      front: f.label,
      back: f.note ? `${f.expression}\n\n${f.note}` : f.expression,
      kind: "formula" as const,
      topic: topic.title,
    })),
    ...(c.dates ?? []).map((d, i) => ({
      id: `${topic.id}-t${i}`,
      front: `What happened in ${d.date}?`,
      back: d.event,
      kind: "date" as const,
      topic: topic.title,
    })),
  ];
}

export function chapterFlashcards(chapter: Chapter): Flashcard[] {
  return chapter.topics.flatMap(topicFlashcards);
}
