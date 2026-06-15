"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { practiceHubItems, practiceOverview } from "@/content/practice";
import { useThoughts } from "@/hooks/useThoughts";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const practiceIcons: Record<string, ReactNode> = {
  journal: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2Z" />
      <path d="M9 8h6M9 12h6" />
    </svg>
  ),
  games: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <rect x="4" y="8" width="16" height="10" rx="2" />
      <path d="M8 13h2M9 12v2M15.5 12.5v2M16.5 11.5v2" />
    </svg>
  ),
};

export default function PracticeHubPage() {
  const { thoughts, hydrated } = useThoughts();
  const items = practiceHubItems(hydrated ? thoughts.length : undefined);

  return (
    <div className="space-y-6">
      <PageHeader title={<Wordmark>Práctica</Wordmark>} />

      <section className="space-y-3">
        <p className="day-pill">{practiceOverview.pill}</p>
        <h1 className="text-display-lg text-ink">{practiceOverview.title}</h1>
        <p className="text-gloss">{practiceOverview.gloss}</p>
      </section>

      <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
        {items.map((item) => (
          <li key={item.label}>
            {item.disabled ? (
              <div
                className="flex items-center gap-4 px-5 py-4 opacity-60"
                aria-disabled
              >
                <span style={{ color: "var(--ink-mute)" }}>
                  {practiceIcons[item.iconId]}
                </span>
                <span className="flex-1">
                  <span className="font-display text-[1.125rem] text-ink leading-tight block">
                    {item.label}
                  </span>
                  <span className="text-sm text-ink-mute leading-snug block mt-0.5">
                    {item.description}
                  </span>
                </span>
                {item.meta && (
                  <span className="text-caption text-ink-mute">{item.meta}</span>
                )}
              </div>
            ) : (
              <Link
                href={item.href}
                className="flex items-center gap-4 px-5 py-4 transition-colors active:bg-surface-sunk"
              >
                <span style={{ color: "var(--accent)" }}>
                  {practiceIcons[item.iconId]}
                </span>
                <span className="flex-1">
                  <span className="font-display text-[1.125rem] text-ink leading-tight block">
                    {item.label}
                  </span>
                  <span className="text-sm text-ink-mute leading-snug block mt-0.5">
                    {item.description}
                  </span>
                </span>
                {item.meta && (
                  <span className="text-caption text-ink-mute">{item.meta}</span>
                )}
                <span className="text-ink-mute" aria-hidden>
                  ›
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
