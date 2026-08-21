"use client";

import Link from "next/link";
import { useMemo } from "react";
import type { CSSProperties, ReactNode } from "react";
import { Gloss } from "@/components/Gloss";
import { gameCount } from "@/content/games";
import { masPracticaItems, type MasPracticaItem } from "@/content/masPractica";
import { openTurnReviewDayIndex, speakDayForIndex } from "@/content/prompts";
import { useStats } from "@/hooks/useStats";

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconArrow = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...stroke}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const IconSentenceFormer = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...stroke}>
    <path d="M4 7h16" />
    <path d="M4 11h4.5" />
    <circle cx="11" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="14" cy="11" r="1" fill="currentColor" stroke="none" />
    <circle cx="17" cy="11" r="1" fill="currentColor" stroke="none" />
    <path d="M4 15h12" />
  </svg>
);

const IconBook = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...stroke}>
    <path d="M4 5.5h5.5a2.5 2.5 0 0 1 2.5 2.5v10a2 2 0 0 0-2-2H4Z" />
    <path d="M20 5.5h-5.5A2.5 2.5 0 0 0 12 8v10a2 2 0 0 1 2-2h6Z" />
  </svg>
);

const IconWords = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...stroke}>
    <path d="M4 6.5h9" />
    <path d="M4 11h13" />
    <path d="M4 15.5h6" />
    <circle cx="17.5" cy="16.5" r="3.5" />
    <path d="M20 19l1.5 1.5" />
  </svg>
);

const IconDice = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...stroke}>
    <rect x="4" y="4" width="16" height="16" rx="4" />
    <circle cx="9" cy="9" r="1" />
    <circle cx="15" cy="15" r="1" />
    <circle cx="15" cy="9" r="1" />
    <circle cx="9" cy="15" r="1" />
  </svg>
);

const IconPin = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...stroke}>
    <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.3" />
  </svg>
);

const IconEar = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...stroke}>
    <path d="M8 15a5 5 0 0 1 5-8 5.5 5.5 0 0 1 5.5 5.5c0 3-2 3.8-2 6a2.5 2.5 0 0 1-5 0" />
    <path d="M8 15a3 3 0 0 0 3 3" />
  </svg>
);

const IconGuide = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...stroke}>
    <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H19v16.5a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 18Z" />
    <path d="M4 18a2.5 2.5 0 0 1 2.5-2.5H19" />
  </svg>
);

/**
 * Motif and tint per Más práctica row. Keyed by iconId rather than array
 * position, which is what the shelf used to do — adding a third row there
 * silently gave it La lectura's icon and hue.
 */
const masPracticaMotifs: Record<
  MasPracticaItem["iconId"],
  { icon: ReactNode; tint: string }
> = {
  "sentence-former": { icon: IconSentenceFormer, tint: "var(--zone-lab)" },
  book: { icon: IconBook, tint: "var(--zone-guias)" },
  words: { icon: IconWords, tint: "var(--zone-practica)" },
};

const Chevron = (
  <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden {...stroke} strokeWidth={1.7}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export default function MasPage() {
  const { stats } = useStats();
  const openTurnIndex = useMemo(
    () => openTurnReviewDayIndex(stats.currentDayIndex, stats.daysDone),
    [stats.currentDayIndex, stats.daysDone],
  );
  const openTurnDay = openTurnIndex !== null ? speakDayForIndex(openTurnIndex) : null;

  return (
    <div
      className="mas-page fade-rise"
      style={{ "--zone": "var(--zone-practica)" } as CSSProperties}
    >
      <section className="mas-section mas-section--first">
        <p className="text-caption" style={{ marginBottom: 4 }}>Más práctica</p>
        <Gloss>More practice</Gloss>
        <p
          className="font-display text-ink-soft"
          style={{ fontSize: 15, lineHeight: 1.45, margin: "10px 0 0" }}
        >
          Repaso del día — frases y lectura, sin contar como juego.
        </p>
        <Gloss>Review the day — sentences and reading, not a game.</Gloss>

        <div className="mas-card">
          {masPracticaItems.map((item) => (
            <MasRow
              key={item.href}
              href={item.href}
              icon={masPracticaMotifs[item.iconId].icon}
              tint={masPracticaMotifs[item.iconId].tint}
              title={item.label}
              titleEn={item.descriptionEn}
              meta={item.meta ?? ""}
              metaEn={item.metaEn ?? ""}
            />
          ))}
          {openTurnIndex !== null && openTurnDay && (
            <MasRow
              href={`/flow/abierto?i=${openTurnIndex}`}
              icon={IconArrow}
              tint="var(--accent)"
              title="Sin guion"
              titleEn="Answer one line cold — no English, no script"
              meta={`Día ${String(openTurnDay.day).padStart(2, "0")}`}
              metaEn={`Day ${String(openTurnDay.day).padStart(2, "0")}`}
            />
          )}
        </div>
      </section>

      <section className="mas-section">
        <p className="text-caption" style={{ marginBottom: 4 }}>Extras</p>
        <Gloss>Optional companions</Gloss>
        <p
          className="font-display text-ink-soft"
          style={{ fontSize: 15, lineHeight: 1.45, margin: "10px 0 0" }}
        >
          Compañeros opcionales — nunca un segundo curso.
        </p>
        <Gloss>Optional companions — never a second course.</Gloss>

        <div className="mas-card">
          <MasRow
            href="/practice/games"
            icon={IconDice}
            tint="var(--zone-lugares)"
            title="Juegos"
            titleEn="Games"
            meta={`${gameCount} juegos`}
            metaEn={`${gameCount} games`}
          />
          <MasRow
            href="/situations"
            icon={IconPin}
            tint="var(--accent)"
            title="Lugares"
            titleEn="Places"
            meta="escenas reales"
            metaEn="real-life scenes"
          />
          <MasRow
            href="/lab"
            icon={IconEar}
            tint="var(--zone-lab)"
            title="El oído"
            titleEn="The ear"
            meta="pronunciación"
            metaEn="pronunciation"
          />
          <MasRow
            href="/guides"
            icon={IconGuide}
            tint="var(--zone-guias)"
            title="Guías · Referencia"
            titleEn="Guides · Reference"
            meta="buscar un patrón"
            metaEn="look up a pattern"
          />
        </div>
      </section>
    </div>
  );
}

function MasRow({
  href,
  icon,
  tint,
  title,
  titleEn,
  meta,
  metaEn,
}: {
  href: string;
  icon: ReactNode;
  tint: string;
  title: string;
  titleEn: string;
  meta: string;
  metaEn: string;
}) {
  return (
    <Link href={href} className="mas-row" style={{ "--tint": tint } as CSSProperties}>
      <span className="mas-row-icon">{icon}</span>
      <span className="mas-row-text">
        <span className="mas-row-title">{title}</span>
        <Gloss>{titleEn}</Gloss>
      </span>
      {meta && (
        <span className="mas-row-meta flex flex-col items-end" style={{ flexShrink: 0 }}>
          <span className="text-caption">{meta}</span>
          {metaEn && <Gloss>{metaEn}</Gloss>}
        </span>
      )}
      <span className="mas-row-chevron">{Chevron}</span>
    </Link>
  );
}
