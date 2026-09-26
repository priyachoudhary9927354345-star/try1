"use client";

import { Children, useState, type ReactNode } from "react";
import { usePrefs } from "@/lib/store";

/** Tabs over server-rendered panels (one child per grade, same order). */
export function GradeTabs({
  grades,
  children,
}: {
  grades: { id: string; label: string }[];
  children: ReactNode;
}) {
  const [prefs] = usePrefs();
  const [picked, setPicked] = useState<string | null>(null);
  const current = picked ?? prefs.grade ?? grades[2]?.id ?? grades[0].id;
  const panels = Children.toArray(children);

  return (
    <div className="mt-6">
      <div role="tablist" className="flex gap-2 overflow-x-auto pb-1">
        {grades.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={current === g.id}
            onClick={() => setPicked(g.id)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
              current === g.id
                ? "bg-brand-600 text-white shadow-sm"
                : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>
      {panels.map((panel, i) => (
        <div key={grades[i].id} role="tabpanel" hidden={grades[i].id !== current} className="mt-5">
          {panel}
        </div>
      ))}
    </div>
  );
}
