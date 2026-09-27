import type { Metadata } from "next";
import { NotesHub, type ChapterOption } from "@/components/NotesHub";
import { chapterHref, grades } from "@/lib/curriculum";

export const metadata: Metadata = { title: "My Notes" };

export default async function NotesPage(props: PageProps<"/notes">) {
  const { tab } = await props.searchParams;
  const chapters: ChapterOption[] = grades.flatMap((g) =>
    g.subjects.flatMap((s) =>
      s.textbooks.flatMap((tb) =>
        tb.chapters.map((c) => ({
          ref: `${g.id}/${s.id}/${c.id}`,
          grade: g.id,
          group: `${g.label} · ${s.name}`,
          label: `Ch ${c.number}. ${c.title}`,
          href: chapterHref(g.id, s.id, c.id),
          topics: Object.fromEntries(c.topics.map((t) => [t.id, t.title])),
        })),
      ),
    ),
  );

  return <NotesHub chapters={chapters} initialTab={tab === "bookmarks" ? "bookmarks" : "notes"} />;
}
