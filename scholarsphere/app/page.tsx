import { Dashboard, type GradeSummary } from "@/components/Dashboard";
import { countAll, countSubject, grades } from "@/lib/curriculum";

export default function HomePage() {
  const summaries: GradeSummary[] = grades.map((g) => ({
    id: g.id,
    label: g.label,
    subjects: g.subjects.map((s) => {
      const c = countSubject(s);
      return {
        id: s.id,
        name: s.name,
        icon: s.icon,
        color: s.color,
        chapters: c.chapters,
        topics: c.topics,
        books: s.textbooks.map((t) => t.title),
      };
    }),
  }));

  return <Dashboard grades={summaries} totals={countAll()} />;
}
