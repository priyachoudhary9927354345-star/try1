import type { SubjectColor, SubjectIconName } from "./types";

/** Titles-only view of one class's curriculum (served at /outline/[grade]). */
export interface GradeOutline {
  id: string;
  subjects: {
    id: string;
    name: string;
    icon: SubjectIconName;
    color: SubjectColor;
    books: {
      title: string;
      chapters: {
        id: string;
        n: number;
        title: string;
        rich: boolean;
        topics: { id: string; title: string; subs: string[] }[];
      }[];
    }[];
  }[];
}
