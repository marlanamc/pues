"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { frameDays } from "@/content/frames";
import { speakDays } from "@/content/prompts";
import {
  flagForPractice,
  listPracticeFlags,
  unflagForPractice,
} from "@/lib/store";

/**
 * Sin mirar — cued production, the drill for recall rather than recognition.
 *
 * Reading a stem and knowing what it means is recognition, and recognition is
 * not the thing that fails in conversation. This runs the week the other way:
 * English gloss first, say the Spanish out loud, then reveal and judge whether
 * it *arrived* or you assembled it. Assembling counts as a miss.
 *
 * Misses go into the shared practice list (see lib/store.ts) — the same one the
 * "Quiero practicarla" reflection writes to — so the two kinds of "needs work"
 * pool together and resurface here.
 *
 * Deliberately not a game: no score, no timer, no streak. The output is a list
 * of stems, not a number to beat.
 */

type Card = { promptId: string; stem: string; english: string; day: number };

const ws = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Unique stems for the week, first occurrence wins — repaso repeats aren't re-drilled. */
function cardsForWeek(dayNums: number[]): Card[] {
  const seen = new Set<string>();
  const cards: Card[] = [];
  for (const d of dayNums) {
    const frame = frameDays[d - 1];
    const speak = speakDays[d - 1];
    frame.frames.forEach((f, i) => {
      if (seen.has(f.stem)) return;
      seen.add(f.stem);
      cards.push({ promptId: speak.prompts[i].id, stem: f.stem, english: f.english, day: d });
    });
  }
  return cards;
}

/** Fisher–Yates. Order matters: going down the page lets you ride the sequence. */
function shuffle<T>(items: T[]): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function StemRecall({ dayNums }: { dayNums: number[] }) {
  const all = useMemo(() => cardsForWeek(dayNums), [dayNums]);

  const [queue, setQueue] = useState<Card[] | null>(null);
  const [pos, setPos] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [missed, setMissed] = useState<Card[]>([]);
  const [flagged, setFlagged] = useState<string[]>([]);

  // The standing list, so misses from a past pass (and "Quiero practicarla"
  // picks from the week's sentences) are visible before the drill starts.
  const syncFlags = useCallback(() => setFlagged(listPracticeFlags()), []);
  useEffect(() => {
    syncFlags();
  }, [syncFlags]);

  const standing = useMemo(() => {
    const ids = new Set(flagged);
    return all.filter((c) => ids.has(c.promptId));
  }, [all, flagged]);

  function begin(cards: Card[]) {
    setQueue(shuffle(cards));
    setPos(0);
    setRevealed(false);
    setMissed([]);
  }

  function judge(arrived: boolean) {
    const card = queue![pos];
    // Written per card rather than at the end, so quitting halfway still counts.
    if (arrived) unflagForPractice(card.promptId);
    else {
      flagForPractice(card.promptId);
      setMissed((m) => [...m, card]);
    }
    syncFlags();
    setRevealed(false);
    setPos((p) => p + 1);
  }

  const running = queue !== null && pos < queue.length;
  const finished = queue !== null && pos >= queue.length;

  /* ---------- Idle ---------- */
  if (!running && !finished) {
    return (
      <div>
        <Intro count={all.length} />
        <button type="button" onClick={() => begin(all)} className="btn-primary" style={{ marginTop: 16 }}>
          <span className="lab">Empezar</span>
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
        <div style={{ marginTop: 6 }}>
          <Gloss>Start</Gloss>
        </div>
        {standing.length > 0 && (
          <Standing cards={standing} onDrill={() => begin(standing)} />
        )}
      </div>
    );
  }

  /* ---------- Running ---------- */
  if (running) {
    const card = queue[pos];
    return (
      <div>
        <p className="mono-cap" style={{ color: "var(--ink-mute)" }}>
          {pos + 1} de {queue.length}
        </p>

        <div
          style={{
            marginTop: 10,
            padding: "28px 20px",
            minHeight: 188,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "var(--surface)",
            border: "1px solid var(--rule)",
            borderRadius: 16,
          }}
        >
          <p
            className="font-display"
            style={{ fontSize: 15, color: "var(--ink-mute)", margin: 0, lineHeight: 1.3 }}
          >
            {card.english}
          </p>

          {revealed ? (
            <>
              <p
                className="font-display text-ink"
                style={{ fontSize: 26, fontWeight: 300, margin: "12px 0 0", lineHeight: 1.2 }}
              >
                {card.stem}
              </p>
              <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap", justifyContent: "center" }}>
                <Judge label="Llegó" en="It arrived" tone="zone" onClick={() => judge(true)} />
                <Judge label="No llegó" en="I had to build it" tone="mute" onClick={() => judge(false)} />
              </div>
            </>
          ) : (
            <>
              <p
                className="font-display"
                style={{ fontStyle: "italic", fontSize: 14.5, color: "var(--ink-soft)", margin: "14px 0 0" }}
              >
                Dilo en voz alta.
              </p>
              <button
                type="button"
                onClick={() => setRevealed(true)}
                className="btn-primary btn-primary--center"
                style={{ marginTop: 18, minWidth: 150 }}
              >
                <span className="lab">Ver</span>
              </button>
            </>
          )}
        </div>

        <button
          type="button"
          onClick={() => setQueue(null)}
          className="mono-cap transition-colors hover:text-accent"
          style={{ marginTop: 14, minHeight: 44, color: "var(--ink-mute)", background: "transparent" }}
        >
          Dejarlo aquí
          <Gloss>Stop here</Gloss>
        </button>
      </div>
    );
  }

  /* ---------- Finished ---------- */
  const total = queue.length;
  const arrived = total - missed.length;
  return (
    <div>
      <p className="font-display text-ink" style={{ fontSize: 22, fontWeight: 300, margin: 0, lineHeight: 1.25 }}>
        {arrived} de {total} llegaron.
      </p>
      <Gloss>{`${arrived} of ${total} arrived on their own`}</Gloss>

      {missed.length === 0 ? (
        <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.5, color: "var(--ink-mute)" }}>
          Nada que marcar. La semana ya está en la punta de la lengua.
        </p>
      ) : (
        <>
          <p style={{ marginTop: 10, fontSize: 14, lineHeight: 1.5, color: "var(--ink-mute)" }}>
            Estos son los de esta semana. Márcalos en tu cuaderno.
          </p>
          <StemList cards={missed} />
        </>
      )}

      <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
        {missed.length > 0 && (
          <button type="button" onClick={() => begin(missed)} className="btn-primary">
            <span className="lab">Otra vuelta</span>
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden {...ws}>
              <path d="M4 12a8 8 0 1 1 2.5 5.8M4 18v-4h4" />
            </svg>
          </button>
        )}
        <button
          type="button"
          onClick={() => setQueue(null)}
          className="mono-cap transition-colors hover:text-accent"
          style={{ minHeight: 44, padding: "0 6px", color: "var(--ink-soft)", background: "transparent" }}
        >
          Listo
        </button>
      </div>
    </div>
  );
}

function Intro({ count }: { count: number }) {
  return (
    <>
      <p className="font-display text-ink" style={{ fontSize: 17, margin: 0, lineHeight: 1.3 }}>
        Del inglés al español, en voz alta, sin mirar.
      </p>
      <Gloss>From English to Spanish, out loud, without looking</Gloss>
      <p style={{ marginTop: 8, fontSize: 13.5, lineHeight: 1.5, color: "var(--ink-mute)" }}>
        Los {count} comienzos en orden aleatorio. Si tuviste que armarlo, no
        llegó — y eso es justo lo que quieres saber.
      </p>
      <Gloss>
        {`All ${count} stems, shuffled. If you had to assemble it, it didn't arrive — and that's the thing worth knowing.`}
      </Gloss>
    </>
  );
}

function Judge({
  label,
  en,
  tone,
  onClick,
}: {
  label: string;
  en: string;
  tone: "zone" | "mute";
  onClick: () => void;
}) {
  const color = tone === "zone" ? "var(--zone)" : "var(--ink-soft)";
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        minHeight: 44,
        padding: "9px 18px",
        borderRadius: 10,
        border: `1px solid color-mix(in oklab, ${color} 40%, transparent)`,
        background: "transparent",
        color,
        cursor: "pointer",
      }}
    >
      <span className="font-display" style={{ fontSize: 15 }}>
        {label}
      </span>
      <Gloss>{en}</Gloss>
    </button>
  );
}

function StemList({ cards }: { cards: Card[] }) {
  return (
    <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none" }}>
      {cards.map((c) => (
        <li
          key={c.promptId}
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 10,
            padding: "7px 0",
            borderTop: "1px solid var(--rule)",
          }}
        >
          <span className="font-display text-ink" style={{ fontSize: 15.5, flex: 1, minWidth: 0 }}>
            {c.stem}
          </span>
          <span style={{ fontSize: 12.5, color: "var(--ink-mute)", textAlign: "right" }}>
            {c.english}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Standing({ cards, onDrill }: { cards: Card[]; onDrill: () => void }) {
  return (
    <div style={{ marginTop: 26, paddingTop: 18, borderTop: "1px solid var(--rule)" }}>
      <span className="mono-cap" style={{ color: "var(--zone)" }}>
        Los que no llegaron · {cards.length}
      </span>
      <Gloss>Still on the list from this week</Gloss>
      <StemList cards={cards} />
      <button
        type="button"
        onClick={onDrill}
        className="mono-cap transition-colors hover:text-accent"
        style={{
          marginTop: 14,
          minHeight: 44,
          padding: "0 14px",
          color: "var(--zone)",
          background: "transparent",
          border: "1px solid color-mix(in oklab, var(--zone) 40%, transparent)",
          borderRadius: 9,
          cursor: "pointer",
        }}
      >
        Solo estos
        <Gloss>Just these</Gloss>
      </button>
    </div>
  );
}
