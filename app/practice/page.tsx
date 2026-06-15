"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { Chip, Hue, ZoneIntro, ZoneRow } from "@/components/ZoneList";
import { speakDays } from "@/content/prompts";
import { practiceHubItems } from "@/content/practice";
import { useStats } from "@/hooks/useStats";
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
  plan: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
      <path d="M8 13h2v2H8zM11 13h2v2h-2zM14 13h2v2h-2z" />
    </svg>
  ),
};

export default function PracticeHubPage() {
  const { thoughts, hydrated } = useThoughts();
  const { stats, hydrated: statsHydrated } = useStats();
  const totalDays = speakDays.length;
  const items = practiceHubItems(
    hydrated ? thoughts.length : undefined,
    statsHydrated
      ? {
          current: (stats.currentDayIndex % totalDays) + 1,
          total: totalDays,
        }
      : undefined,
  );

  return (
    <div
      className="space-y-6"
      style={{ "--zone": "var(--zone-practica)" } as CSSProperties}
    >
      <PageHeader title={<Wordmark>Práctica</Wordmark>} />

      <ZoneIntro zoneLabel="Práctica" role="Haz el trabajo">
        Speak, save, <Hue>play</Hue>.
      </ZoneIntro>

      <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
        {items.map((item) => (
          <li key={item.label}>
            {item.disabled ? (
              <div
                className="flex items-center gap-3.5 px-[18px] py-[15px] opacity-60"
                aria-disabled
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    flexShrink: 0,
                    background: "var(--surface-sunk)",
                    color: "var(--ink-mute)",
                  }}
                >
                  {practiceIcons[item.iconId]}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="font-display text-[1.125rem] text-ink leading-tight block">
                    {item.label}
                  </span>
                  <span className="text-sm text-ink-mute leading-snug block mt-0.5">
                    {item.description}
                  </span>
                </span>
                {item.meta && <span className="mono-cap">{item.meta}</span>}
              </div>
            ) : (
              <Link
                href={item.href}
                className="block transition-colors active:bg-surface-sunk"
              >
                <ZoneRow
                  icon={practiceIcons[item.iconId]}
                  title={item.label}
                  description={item.description}
                  meta={item.meta}
                />
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
