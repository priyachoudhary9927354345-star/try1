"use client";

import { useCallback } from "react";
import { useStored } from "./storage";
import type { GradeId } from "./types";

/** Path of a chapter or topic: "10/science/chapter-id[/topic-id]". */
export type Ref = string;

export function chapterRef(grade: string, subject: string, chapter: string): Ref {
  return `${grade}/${subject}/${chapter}`;
}

export function topicRef(
  grade: string,
  subject: string,
  chapter: string,
  topic: string,
): Ref {
  return `${grade}/${subject}/${chapter}/${topic}`;
}

/* ---------- Preferences ---------- */

export interface Prefs {
  grade: GradeId | null;
  subject: string | null;
  name: string;
}

const DEFAULT_PREFS: Prefs = { grade: null, subject: null, name: "" };

export function usePrefs() {
  return useStored<Prefs>("prefs", DEFAULT_PREFS);
}

/* ---------- Notes ---------- */

export type NoteColor = "yellow" | "blue" | "green" | "pink" | "purple";

export interface Note {
  id: string;
  /** Chapter ref (grade/subject/chapter). */
  chapter: Ref;
  /** Topic id within the chapter, if the note is about one topic. */
  topic?: string;
  title: string;
  /** Lightweight markdown: **bold**, *italic*, # heading, - list, ==highlight==. */
  body: string;
  color: NoteColor;
  pinned: boolean;
  source: "me" | "ai";
  createdAt: number;
  updatedAt: number;
}

const NO_NOTES: Note[] = [];

function newId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

export function useNotes() {
  const [notes, setNotes] = useStored<Note[]>("notes", NO_NOTES);

  const addNote = useCallback(
    (
      input: Pick<Note, "chapter" | "title" | "body"> &
        Partial<Pick<Note, "topic" | "color" | "source">>,
    ) => {
      const now = Date.now();
      const note: Note = {
        id: newId(),
        color: "yellow",
        source: "me",
        pinned: false,
        createdAt: now,
        updatedAt: now,
        ...input,
      };
      setNotes((prev) => [note, ...prev]);
      return note;
    },
    [setNotes],
  );

  const updateNote = useCallback(
    (id: string, patch: Partial<Omit<Note, "id" | "createdAt">>) =>
      setNotes((prev) =>
        prev.map((n) =>
          n.id === id ? { ...n, ...patch, updatedAt: Date.now() } : n,
        ),
      ),
    [setNotes],
  );

  const deleteNote = useCallback(
    (id: string) => setNotes((prev) => prev.filter((n) => n.id !== id)),
    [setNotes],
  );

  return { notes, addNote, updateNote, deleteNote };
}

/* ---------- Bookmarks ---------- */

export interface Bookmark {
  ref: Ref; // topic ref
  title: string;
  addedAt: number;
}

const NO_BOOKMARKS: Bookmark[] = [];

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useStored<Bookmark[]>(
    "bookmarks",
    NO_BOOKMARKS,
  );
  const isBookmarked = useCallback(
    (ref: Ref) => bookmarks.some((b) => b.ref === ref),
    [bookmarks],
  );
  const toggleBookmark = useCallback(
    (ref: Ref, title: string) =>
      setBookmarks((prev) =>
        prev.some((b) => b.ref === ref)
          ? prev.filter((b) => b.ref !== ref)
          : [{ ref, title, addedAt: Date.now() }, ...prev],
      ),
    [setBookmarks],
  );
  const removeBookmark = useCallback(
    (ref: Ref) => setBookmarks((prev) => prev.filter((b) => b.ref !== ref)),
    [setBookmarks],
  );
  return { bookmarks, isBookmarked, toggleBookmark, removeBookmark };
}

/* ---------- Recently studied topics ---------- */

export interface RecentItem {
  ref: Ref;
  title: string;
  at: number;
}

const NO_RECENT: RecentItem[] = [];
const MAX_RECENT = 8;

export function useRecent() {
  const [recent, setRecent] = useStored<RecentItem[]>("recent", NO_RECENT);
  const pushRecent = useCallback(
    (ref: Ref, title: string) =>
      setRecent((prev) =>
        [{ ref, title, at: Date.now() }, ...prev.filter((r) => r.ref !== ref)].slice(
          0,
          MAX_RECENT,
        ),
      ),
    [setRecent],
  );
  return { recent, pushRecent };
}

/* ---------- Topic completion ---------- */

const NO_DONE: Record<Ref, number> = {};

export function useCompleted() {
  const [done, setDone] = useStored<Record<Ref, number>>("completed", NO_DONE);
  const toggleDone = useCallback(
    (ref: Ref) =>
      setDone((prev) => {
        const next = { ...prev };
        if (next[ref]) delete next[ref];
        else next[ref] = Date.now();
        return next;
      }),
    [setDone],
  );
  return { done, toggleDone };
}

/* ---------- Quiz results ---------- */

export interface QuizResult {
  best: number;
  last: number;
  total: number;
  attempts: number;
  at: number;
}

const NO_RESULTS: Record<Ref, QuizResult> = {};

export function useQuizResults() {
  const [results, setResults] = useStored<Record<Ref, QuizResult>>(
    "quiz",
    NO_RESULTS,
  );
  const recordResult = useCallback(
    (ref: Ref, score: number, total: number) =>
      setResults((prev) => {
        const old = prev[ref];
        return {
          ...prev,
          [ref]: {
            best: Math.max(old?.best ?? 0, score),
            last: score,
            total,
            attempts: (old?.attempts ?? 0) + 1,
            at: Date.now(),
          },
        };
      }),
    [setResults],
  );
  return { results, recordResult };
}
