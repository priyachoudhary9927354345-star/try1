/**
 * Curriculum hierarchy: Grade → Subject → Textbook → Chapter → Topic → Subtopic.
 *
 * Every level has a URL-safe `id` that is unique among its siblings, so a
 * topic is addressed by the path grade/subject/chapter/topic. Textbook ids are
 * not part of URLs (a chapter id is unique within its subject).
 *
 * A Topic with `content` renders a full reading view. A Topic without it is an
 * outline entry: its title and subtopics are mapped, and the reading view shows
 * the outline plus the AI tools.
 */

export type GradeId = "8" | "9" | "10" | "11" | "12";

export type SubjectColor =
  | "indigo"
  | "emerald"
  | "amber"
  | "sky"
  | "rose"
  | "violet"
  | "teal"
  | "orange";

export interface Grade {
  id: GradeId;
  label: string; // "Class 10"
  subjects: Subject[];
}

export interface Subject {
  id: string; // "science"
  name: string; // "Science"
  /** Name of a lucide-react icon, resolved by components/SubjectIcon. */
  icon: SubjectIconName;
  color: SubjectColor;
  textbooks: Textbook[];
}

export type SubjectIconName =
  | "calculator"
  | "flask"
  | "globe"
  | "atom"
  | "beaker"
  | "leaf"
  | "trending"
  | "landmark"
  | "book";

export interface Textbook {
  id: string;
  title: string; // "Science — Textbook for Class X"
  chapters: Chapter[];
}

export interface Chapter {
  id: string; // "chemical-reactions-and-equations"
  number: number;
  title: string;
  /** One or two sentences shown on chapter cards. */
  summary?: string;
  topics: Topic[];
  /** Chapter-level practice questions. Empty/absent = generated from topics. */
  quiz?: QuizQuestion[];
}

export interface Topic {
  id: string;
  title: string;
  subtopics: Subtopic[];
  content?: TopicContent;
}

export interface Subtopic {
  id: string;
  title: string;
}

export interface TopicContent {
  /** 2–4 sentence plain-language opener. */
  intro: string;
  /** Simplified explanation, one section per subtopic where it makes sense. */
  sections: { heading: string; body: string }[];
  definitions: { term: string; meaning: string }[];
  formulas?: { label: string; expression: string; note?: string }[];
  dates?: { date: string; event: string }[];
  keyPoints: string[];
  /** Hand-written responses for the AI Explainer's preset prompts. */
  explainers: {
    eli10: string;
    realWorld: string;
    mnemonic: string;
  };
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[]; // exactly 4
  answer: number; // index into options
  explanation: string;
}
