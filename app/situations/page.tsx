"use client";

import { useState } from "react";
import Link from "next/link";
import {
  type SituationCategory,
  categoryLabels,
  situationsByCategory,
} from "@/content/situations";

type Tab = "topics" | "mine";

const categoryIcon: Record<SituationCategory, React.ReactNode> = {
  work: <CategoryIcon path="M4 8h16v11H4zM9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />,
  family: <CategoryIcon path="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.7-5 6-5s6 2 6 5M15 15c2.5 0 6 1.5 6 5" />,
  "daily-life": <CategoryIcon path="M4 5h16v14H4zM4 9h16M8 5v4M16 5v4" />,
  learning: <CategoryIcon path="M4 5h12a4 4 0 0 1 4 4v10a3 3 0 0 0-3-3H4z" />,
  travel: <CategoryIcon path="M3 15l8-9 3 1-3 5 5-1 3 1-9 6-2-1-1-1Z" />,
  feelings: <CategoryIcon path="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />,
  food: <CategoryIcon path="M6 5v14M10 5v6a2 2 0 0 1-4 0M16 5c2 0 3 2 3 5s-1 5-3 5v4" />,
  "current-events": <CategoryIcon path="M4 6h13v13H4zM17 9h3v8a2 2 0 0 1-2 2h-1M7 10h7M7 14h7" />,
  dreams: <CategoryIcon path="M21 13a8 8 0 1 1-9-9 7 7 0 0 0 9 9Z" />,
  "future-plans": <CategoryIcon path="M5 5h14v14H5zM5 10h14M9 5V3M15 5V3M9 14h2M14 14h2" />,
};

function CategoryIcon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={path} />
    </svg>
  );
}

export default function SituationsLibraryPage() {
  const [tab, setTab] = useState<Tab>("topics");
  const grouped = situationsByCategory();
  const ordered = Object.keys(categoryLabels) as SituationCategory[];

  return (
    <div className="space-y-7">
      <header className="flex items-center justify-between">
        <span className="w-3" aria-hidden />
        <p className="text-caption text-ink-mute">Situations</p>
        <span className="w-3" aria-hidden />
      </header>

      <div className="rounded-full border border-rule bg-surface p-1 flex">
        {(
          [
            { key: "topics", label: "Topics" },
            { key: "mine", label: "My Situations" },
          ] as { key: Tab; label: string }[]
        ).map((t) => {
          const active = tab === t.key;
          return (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className="flex-1 rounded-full py-2 text-sm font-medium transition-colors"
              style={{
                background: active ? "var(--accent)" : "transparent",
                color: active ? "var(--bg)" : "var(--ink-mute)",
              }}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tab === "topics" ? (
        <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
          {ordered.map((cat) => {
            const list = grouped[cat];
            if (!list.length) return null;
            const first = list[0];
            return (
              <li key={cat}>
                <Link
                  href={`/situations/${first.slug}`}
                  className="flex items-center gap-4 px-5 py-4 active:bg-surface-sunk transition-colors"
                >
                  <span style={{ color: "var(--accent)" }}>
                    {categoryIcon[cat]}
                  </span>
                  <span className="flex-1 text-ink">{categoryLabels[cat]}</span>
                  <span className="text-caption text-ink-mute">
                    {list.length}
                  </span>
                  <span className="text-ink-mute" aria-hidden>›</span>
                </Link>
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="rounded-lg border border-rule bg-surface p-8 text-center">
          <p className="text-gloss">Your saved situations will appear here.</p>
        </div>
      )}
    </div>
  );
}
