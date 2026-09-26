import {
  Atom,
  BookOpen,
  Calculator,
  FlaskConical,
  Globe2,
  Landmark,
  Leaf,
  TestTubes,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { SubjectColor, SubjectIconName } from "@/lib/types";

const ICONS: Record<SubjectIconName, LucideIcon> = {
  calculator: Calculator,
  flask: FlaskConical,
  globe: Globe2,
  atom: Atom,
  beaker: TestTubes,
  leaf: Leaf,
  trending: TrendingUp,
  landmark: Landmark,
  book: BookOpen,
};

export function SubjectIcon({
  name,
  className,
}: {
  name: SubjectIconName;
  className?: string;
}) {
  const Icon = ICONS[name] ?? BookOpen;
  return <Icon className={className} aria-hidden />;
}

/** Full class strings per colour so Tailwind can see them statically. */
export const COLOR: Record<
  SubjectColor,
  { tile: string; soft: string; text: string; ring: string; bar: string; gradient: string }
> = {
  indigo: {
    tile: "bg-indigo-500 text-white",
    soft: "bg-indigo-50 text-indigo-700",
    text: "text-indigo-600",
    ring: "ring-indigo-200 hover:ring-indigo-400",
    bar: "bg-indigo-500",
    gradient: "from-indigo-500 to-violet-500",
  },
  emerald: {
    tile: "bg-emerald-500 text-white",
    soft: "bg-emerald-50 text-emerald-700",
    text: "text-emerald-600",
    ring: "ring-emerald-200 hover:ring-emerald-400",
    bar: "bg-emerald-500",
    gradient: "from-emerald-500 to-teal-500",
  },
  amber: {
    tile: "bg-amber-500 text-white",
    soft: "bg-amber-50 text-amber-800",
    text: "text-amber-600",
    ring: "ring-amber-200 hover:ring-amber-400",
    bar: "bg-amber-500",
    gradient: "from-amber-500 to-orange-500",
  },
  sky: {
    tile: "bg-sky-500 text-white",
    soft: "bg-sky-50 text-sky-700",
    text: "text-sky-600",
    ring: "ring-sky-200 hover:ring-sky-400",
    bar: "bg-sky-500",
    gradient: "from-sky-500 to-cyan-500",
  },
  rose: {
    tile: "bg-rose-500 text-white",
    soft: "bg-rose-50 text-rose-700",
    text: "text-rose-600",
    ring: "ring-rose-200 hover:ring-rose-400",
    bar: "bg-rose-500",
    gradient: "from-rose-500 to-pink-500",
  },
  violet: {
    tile: "bg-violet-500 text-white",
    soft: "bg-violet-50 text-violet-700",
    text: "text-violet-600",
    ring: "ring-violet-200 hover:ring-violet-400",
    bar: "bg-violet-500",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  teal: {
    tile: "bg-teal-500 text-white",
    soft: "bg-teal-50 text-teal-700",
    text: "text-teal-600",
    ring: "ring-teal-200 hover:ring-teal-400",
    bar: "bg-teal-500",
    gradient: "from-teal-500 to-emerald-500",
  },
  orange: {
    tile: "bg-orange-500 text-white",
    soft: "bg-orange-50 text-orange-700",
    text: "text-orange-600",
    ring: "ring-orange-200 hover:ring-orange-400",
    bar: "bg-orange-500",
    gradient: "from-orange-500 to-amber-500",
  },
};
