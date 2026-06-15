"use client";

import { useState } from "react";
import Link from "next/link";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { useThoughts } from "@/hooks/useThoughts";
import {
  type SituationCategory,
  categoryLabels,
  situationBySlug,
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
  const [expandedCategories, setExpandedCategories] = useState<
    Set<SituationCategory>
  >(new Set());
  const { thoughts, hydrated } = useThoughts();
  const grouped = situationsByCategory();
  const ordered = Object.keys(categoryLabels) as SituationCategory[];
  const recentSituations = thoughts.reduce<
    {
      slug: string;
      label: string;
      count: number;
      lastPracticed: string;
      category?: SituationCategory;
    }[]
  >((acc, thought) => {
    const situation = situationBySlug(thought.situationSlug);
    if (!situation) return acc;
    const existing = acc.find((item) => item.slug === situation.slug);
    if (existing) {
      existing.count += 1;
      if (thought.createdAt > existing.lastPracticed) {
        existing.lastPracticed = thought.createdAt;
      }
      return acc;
    }
    acc.push({
      slug: situation.slug,
      label: situation.label,
      count: 1,
      lastPracticed: thought.createdAt,
      category: situation.category,
    });
    return acc;
  }, []);

  function formatRecentDate(value: string) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Recently";
    return date.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  }

  function toggleCategory(cat: SituationCategory) {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }

  return (
    <div className="space-y-7">
      <PageHeader title={<Wordmark>Lugares</Wordmark>} />

      <div className="rounded-full border border-rule bg-surface p-1 flex lg:max-w-sm">
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
        <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:divide-y-0 lg:border-0 lg:bg-transparent lg:overflow-visible xl:grid-cols-3">
          {ordered.map((cat) => {
            const list = grouped[cat];
            if (!list.length) return null;
            const deepCount = list.filter(
              (s) => s.phrases?.length || s.practiceItems?.length
            ).length;
            const isOpen = expandedCategories.has(cat);

            return (
              <li
                key={cat}
                className="px-5 py-4 lg:rounded-lg lg:border lg:border-rule lg:bg-surface lg:p-5"
              >
                <button
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-4 text-left transition-colors hover:opacity-80"
                >
                  <span className="mt-0.5" style={{ color: "var(--accent)" }}>
                    {categoryIcon[cat]}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-3">
                      <span className="font-display text-[1.25rem] leading-tight text-ink">
                        {categoryLabels[cat]}
                      </span>
                      <span className="text-caption text-ink-mute">
                        {list.length} temas
                      </span>
                    </span>
                    <span className="mt-1 block text-gloss">
                      {deepCount > 0
                        ? `${deepCount} with phrasebanks ready to practice.`
                        : "Open practice topics for your own words."}
                    </span>
                  </span>
                  <span
                    className="mt-1 shrink-0 text-ink-mute transition-transform"
                    style={{
                      transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
                    }}
                    aria-hidden
                  >
                    ›
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 space-y-2">
                    {list.map((situation) => (
                      <Link
                        key={situation.slug}
                        href={`/situations/${situation.slug}`}
                        className="group flex items-center gap-3 rounded-md border border-transparent py-2 pl-9 pr-2 transition-colors hover:border-rule hover:bg-surface-2"
                      >
                        <span className="min-w-0 flex-1 text-sm leading-snug text-ink-soft group-hover:text-ink">
                          {situation.label}
                        </span>
                        {(situation.phrases?.length ||
                          situation.practiceItems?.length) && (
                          <span className="text-caption text-accent">Listo</span>
                        )}
                        <span className="text-ink-mute" aria-hidden>
                          ›
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>
          {!hydrated ? (
            <div className="rounded-lg border border-rule bg-surface p-8 text-center">
              <p className="text-gloss">Loading your recent Lugares…</p>
            </div>
          ) : recentSituations.length > 0 ? (
            <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:divide-y-0 lg:border-0 lg:bg-transparent lg:overflow-visible">
              {recentSituations.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/situations/${item.slug}`}
                    className="flex items-center gap-4 px-5 py-4 transition-colors active:bg-surface-sunk lg:rounded-lg lg:border lg:border-rule lg:bg-surface lg:hover:border-accent/50"
                  >
                    <span style={{ color: "var(--accent)" }}>
                      {item.category ? categoryIcon[item.category] : categoryIcon.work}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[1.125rem] leading-tight text-ink">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-caption text-ink-mute">
                        {item.count} {item.count === 1 ? "vez" : "veces"} ·{" "}
                        {formatRecentDate(item.lastPracticed)}
                      </span>
                    </span>
                    <span className="text-ink-mute" aria-hidden>
                      ›
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="rounded-lg border border-rule bg-surface p-8 text-center">
              <p className="font-display text-display-lg text-ink">
                Elige un lugar para practicar.
              </p>
              <p className="text-gloss mt-2">
                After you practice from a topic, it will appear here with your
                recent sessions.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
