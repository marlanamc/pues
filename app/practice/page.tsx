"use client";

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { Hue, Ledger, ZoneIntro, ZoneRow } from "@/components/ZoneList";
import { games } from "@/content/games";
import { speakDays } from "@/content/prompts";
import { practiceHubItems } from "@/content/practice";
import { useStats } from "@/hooks/useStats";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const practiceIcons: Record<string, ReactNode> = {
  plan: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
      <path d="M8 13h2v2H8zM11 13h2v2h-2zM14 13h2v2h-2z" />
    </svg>
  ),
};

const gameIcons: Record<string, ReactNode> = {
  build: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <rect x="3" y="6" width="8" height="5" rx="1.5" />
      <rect x="13" y="6" width="8" height="5" rx="1.5" />
      <rect x="3" y="14" width="13" height="5" rx="1.5" />
    </svg>
  ),
  timeline: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <path d="M3 12h18" />
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M7 9V6M17 15v3" />
    </svg>
  ),
  markers: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <path d="M5 4v16M5 5h11l-2 3 2 3H5" />
    </svg>
  ),
  scales: (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
      <path d="M12 4v16M7 20h10" />
      <path d="M4 8h16M4 8l-2 5h4ZM20 8l-2 5h4Z" />
    </svg>
  ),
};

export default function PracticeHubPage() {
  const { stats, hydrated: statsHydrated } = useStats();
  const totalDays = speakDays.length;
  const items = practiceHubItems(
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
          </li>
        ))}
      </ul>

      <div className="space-y-2.5">
        <p className="mono-cap">Juegos</p>
        <Ledger>
          {games.map((game) => (
            <li key={game.href}>
              <Link
                href={game.href}
                className="block transition-colors active:bg-surface-sunk"
              >
                <ZoneRow
                  icon={gameIcons[game.iconId]}
                  title={game.label}
                  description={game.description}
                  meta={game.level}
                />
              </Link>
            </li>
          ))}
        </Ledger>
      </div>
    </div>
  );
}
