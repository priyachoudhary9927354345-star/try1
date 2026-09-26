import { getGrade, grades, hasRichContent } from "@/lib/curriculum";
import type { GradeOutline } from "@/lib/outline";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return grades.map((g) => ({ grade: g.id }));
}

/** Titles-only curriculum tree for one class, loaded by the explorer on demand. */
export async function GET(_req: Request, ctx: RouteContext<"/outline/[grade]">) {
  const { grade } = await ctx.params;
  const g = getGrade(grade);
  if (!g) return new Response("Not found", { status: 404 });
  const outline: GradeOutline = {
    id: g.id,
    subjects: g.subjects.map((s) => ({
      id: s.id,
      name: s.name,
      icon: s.icon,
      color: s.color,
      books: s.textbooks.map((tb) => ({
        title: tb.title,
        chapters: tb.chapters.map((c) => ({
          id: c.id,
          n: c.number,
          title: c.title,
          rich: hasRichContent(c),
          topics: c.topics.map((t) => ({ id: t.id, title: t.title, subs: t.subtopics.map((st) => st.title) })),
        })),
      })),
    })),
  };
  return Response.json(outline);
}
