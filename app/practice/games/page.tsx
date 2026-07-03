"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { games, gameCount, type GameItem } from "@/content/games";
import { useStats } from "@/hooks/useStats";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/**
 * Each game's motif is a small drawing of its mechanic — word tiles mid-drag,
 * a timeline of tenses, a tipping balance — so the shelf reads as five
 * different games, not five copies of one row. La Línea's dots use the tense
 * colors (past/present/future); that palette is the game's own grammar.
 */
function Motif({ id, size }: { id: GameItem["iconId"]; size: number }) {
  switch (id) {
    case "build":
      return (
        <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden {...stroke}>
          <rect x="6" y="30" width="15" height="11" rx="3" style={{ color: "var(--ink-mute)" }} />
          <rect x="25" y="30" width="15" height="11" rx="3" style={{ color: "var(--ink-mute)" }} />
          <g transform="rotate(-12 24 14)">
            <rect x="16" y="9" width="16" height="11" rx="3" style={{ color: "var(--accent)" }} />
          </g>
          <path d="M24 23v3" style={{ color: "var(--accent)" }} />
        </svg>
      );
    case "timeline":
      return (
        <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden {...stroke}>
          <path d="M4 24h40" style={{ color: "var(--ink-mute)" }} />
          <circle cx="12" cy="24" r="3.5" fill="var(--past)" stroke="none" />
          <circle cx="24" cy="24" r="4.5" fill="var(--present)" stroke="none" />
          <circle cx="36" cy="24" r="3.5" fill="var(--future)" stroke="none" />
        </svg>
      );
    case "markers":
      return (
        <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden {...stroke}>
          <path d="M18 8v32" style={{ color: "var(--ink-mute)" }} />
          <path d="M18 10h20l-5 6 5 6H18" style={{ color: "var(--accent)" }} />
          <path d="M5 18h7M8 24h4" style={{ color: "var(--ink-mute)" }} />
        </svg>
      );
    case "scales":
      return (
        <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden {...stroke}>
          <path d="M24 14v24M15 40h18" style={{ color: "var(--ink-mute)" }} />
          <path d="M8 17 40 12" style={{ color: "var(--ink-mute)" }} />
          <path d="M8 17v8" style={{ color: "var(--accent)" }} />
          <path d="M2 25a6 6 0 0 0 12 0" style={{ color: "var(--accent)" }} />
          <path d="M40 12v7" style={{ color: "var(--ink-mute)" }} />
          <path d="M34 19a6 6 0 0 0 12 0" style={{ color: "var(--ink-mute)" }} />
        </svg>
      );
    case "flash":
      return (
        <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden {...stroke}>
          <path d="M27 5 15 26h8l-3 17 13-22h-8l2-16Z" style={{ color: "var(--accent)" }} />
          <path d="M33 6a21 21 0 0 1 10 18" style={{ color: "var(--ink-mute)", strokeDasharray: "3 5" }} />
        </svg>
      );
  }
}

export default function GamesShelfPage() {
  const { stats } = useStats();

  // The lead slot rotates with the day — quiet freshness, no streaks attached.
  const todayIdx = stats.currentDayIndex % games.length;
  const today = games[todayIdx];
  const rest = games.filter((_, i) => i !== todayIdx);

  return (
    <div
      className="fade-rise"
      style={{ paddingBottom: 96, "--zone": "var(--zone-lugares)" } as CSSProperties}
    >
      <PageHeader
        title={<Wordmark>Juegos</Wordmark>}
        meta={<span className="mono-cap">{gameCount} juegos</span>}
      />

      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <div style={{ marginTop: 24 }}>
          <h1 className="text-display-2xl text-ink">
            La sala de juegos.
            <Gloss>The game room.</Gloss>
          </h1>
          <p className="text-display-italic text-[1.0625rem]" style={{ margin: "10px 0 0", maxWidth: "36ch" }}>
            Cinco maneras de pensar en español sin darte cuenta.
            <Gloss>Five ways to think in Spanish without noticing.</Gloss>
          </p>
        </div>

        {/* ===== Juego de hoy — the lead tile ===== */}
        <Link
          href={today.href}
          className="flex items-center transition-colors active:bg-surface-sunk"
          style={{
            gap: 20,
            marginTop: 26,
            padding: "22px 24px",
            background: "var(--surface)",
            border: "1px solid color-mix(in oklab, var(--accent) 32%, var(--rule))",
            borderRadius: 18,
          }}
        >
          <span className="flex flex-col" style={{ flex: 1, minWidth: 0 }}>
            <span className="mono-cap" style={{ color: "var(--accent)" }}>Juego de hoy</span>
            <Gloss>Today&apos;s game</Gloss>
            <span className="font-display text-ink" style={{ fontWeight: 300, fontSize: 26, lineHeight: 1.15, marginTop: 8 }}>
              {today.label}
            </span>
            <span className="font-display text-ink-soft" style={{ fontSize: 16, lineHeight: 1.4, marginTop: 6 }}>
              {today.description}
            </span>
            <Gloss>{today.descriptionEn}</Gloss>
            <span className="mono-cap" style={{ marginTop: 12 }}>{today.group} · {today.level}</span>
          </span>
          <span aria-hidden className="flex-shrink-0">
            <Motif id={today.iconId} size={72} />
          </span>
        </Link>

        {/* ===== The rest of the shelf ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 12, marginTop: 12 }}>
          {rest.map((game) => (
            <Link
              key={game.href}
              href={game.href}
              className="flex flex-col transition-colors active:bg-surface-sunk"
              style={{
                padding: "18px 18px 16px",
                background: "var(--surface)",
                border: "1px solid var(--rule)",
                borderRadius: 16,
              }}
            >
              <span aria-hidden>
                <Motif id={game.iconId} size={44} />
              </span>
              <span className="font-display text-ink" style={{ fontWeight: 300, fontSize: 20, lineHeight: 1.15, marginTop: 12 }}>
                {game.label}
              </span>
              <span className="font-display text-ink-soft" style={{ fontSize: 14.5, lineHeight: 1.4, marginTop: 5 }}>
                {game.description}
              </span>
              <Gloss>{game.descriptionEn}</Gloss>
              <span className="mono-cap" style={{ marginTop: "auto", paddingTop: 12 }}>{game.group} · {game.level}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
