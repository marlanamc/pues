"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ThoughtCard } from "@/components/ThoughtCard";
import { useThoughts } from "@/hooks/useThoughts";
import type { Thought } from "@/lib/store";

type Filter = "all" | "favorites" | "topics";

function groupByDate(thoughts: Thought[]) {
  const groups = new Map<string, Thought[]>();
  for (const t of thoughts) {
    const key = t.createdAt.slice(0, 10);
    const arr = groups.get(key) ?? [];
    arr.push(t);
    groups.set(key, arr);
  }
  return Array.from(groups.entries());
}

function formatDateHeader(yyyyMmDd: string) {
  const today = new Date().toISOString().slice(0, 10);
  const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (yyyyMmDd === today) return "TODAY";
  if (yyyyMmDd === yest) return "YESTERDAY";
  const d = new Date(yyyyMmDd + "T12:00:00");
  return d
    .toLocaleDateString(undefined, { month: "long", day: "numeric" })
    .toUpperCase();
}

export default function MyThoughtsPage() {
  const { thoughts, hydrated } = useThoughts();
  const [filter, setFilter] = useState<Filter>("all");
  const grouped = useMemo(() => groupByDate(thoughts), [thoughts]);

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <Link
          href="/activities"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Activities
        </Link>
        <p className="text-caption text-ink-mute">My Thoughts</p>
        <button type="button" aria-label="Filter" className="text-ink-mute">
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            aria-hidden
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M4 6h16M7 12h10M10 18h4" />
          </svg>
        </button>
      </header>

      <div className="rounded-full border border-rule bg-surface p-1 flex">
        {(["all", "favorites", "topics"] as Filter[]).map((f) => {
          const active = filter === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="flex-1 rounded-full py-2 text-sm font-medium capitalize transition-colors"
              style={{
                background: active ? "var(--accent)" : "transparent",
                color: active ? "var(--bg)" : "var(--ink-mute)",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {hydrated && thoughts.length === 0 && (
        <div className="rounded-lg border border-rule bg-surface p-8 text-center space-y-4">
          <p className="text-gloss">No thoughts yet.</p>
          <Link
            href="/flow/frame"
            className="inline-block rounded-lg bg-accent px-5 py-3 text-bg font-medium transition-colors active:bg-accent-soft"
          >
            Start today
          </Link>
        </div>
      )}

      {grouped.map(([date, list]) => (
        <section key={date} className="space-y-3">
          <p className="text-caption text-ink-mute">{formatDateHeader(date)}</p>
          <ul className="space-y-3">
            {list.map((t) => (
              <li key={t.id}>
                <ThoughtCard thought={t} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
