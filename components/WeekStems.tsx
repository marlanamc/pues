"use client";

import { useMemo, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { frameDays } from "@/content/frames";
import { speakDays } from "@/content/prompts";
import { copyText } from "@/lib/copyText";

/**
 * Los comienzos — the week's stems, flat, on one screen.
 *
 * This exists to be copied into a paper notebook. The stem is the reusable
 * part of a week (the example sentences are disposable illustrations), so it
 * gets a plain list with nothing between it and the pen: no audio, no example
 * sentences, no expanding rows. WeekDayList above is for reading the week;
 * this is for writing it down.
 *
 * `frameDays` and `speakDays` are index-aligned five-for-five (enforced by
 * content/content.test.ts), so the Spanish stem and its English gloss can be
 * read straight off the frame.
 */

type StemRow = {
  stem: string;
  english: string;
  /** Set when this stem already appeared earlier in the week — don't re-copy it. */
  firstSeenOn: number | null;
};

type DayRows = { day: number; themeEs: string; themeEn: string; rows: StemRow[] };

function buildRows(dayNums: number[]): DayRows[] {
  // Repaso days deliberately reuse stems from earlier in the week. Marking the
  // repeat rather than hiding it keeps the day's shape honest while telling you
  // there's nothing new to write on that line.
  const seen = new Map<string, number>();
  return dayNums.map((d) => {
    const frame = frameDays[d - 1];
    const speak = speakDays[d - 1];
    const rows: StemRow[] = frame.frames.map((f) => {
      const firstSeenOn = seen.get(f.stem) ?? null;
      if (firstSeenOn === null) seen.set(f.stem, d);
      return { stem: f.stem, english: f.english, firstSeenOn };
    });
    return { day: d, themeEs: speak.themeEs, themeEn: speak.themeEn, rows };
  });
}

export function WeekStems({ dayNums }: { dayNums: number[] }) {
  const [copied, setCopied] = useState(false);

  const days = useMemo(() => buildRows(dayNums), [dayNums]);
  const uniqueCount = useMemo(
    () => days.reduce((n, d) => n + d.rows.filter((r) => r.firstSeenOn === null).length, 0),
    [days],
  );

  async function handleCopy() {
    const text = days
      .map((d) => {
        const head = `Día ${String(d.day).padStart(2, "0")} · ${d.themeEs}`;
        const lines = d.rows.map(
          (r) =>
            `  ${r.stem}  —  ${r.english}` +
            (r.firstSeenOn ? `  (día ${String(r.firstSeenOn).padStart(2, "0")})` : ""),
        );
        return [head, ...lines].join("\n");
      })
      .join("\n\n");
    const ok = await copyText(text);
    if (!ok) return;
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2400);
  }

  return (
    <div className="week-stems">
      <div
        className="flex items-baseline justify-between"
        style={{ gap: 16, marginBottom: 14 }}
      >
        <span className="flex flex-col" style={{ minWidth: 0 }}>
          <span className="font-display text-ink" style={{ fontSize: 17, lineHeight: 1.2 }}>
            Los {uniqueCount} comienzos
          </span>
          <Gloss>{`The week's ${uniqueCount} stems — the part worth writing down`}</Gloss>
        </span>
        <button
          type="button"
          onClick={() => void handleCopy()}
          className="week-stems__copy mono-cap transition-colors hover:text-accent"
          style={{
            flexShrink: 0,
            minHeight: 44,
            padding: "0 4px",
            color: copied ? "var(--zone)" : "var(--ink-soft)",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>

      <dl style={{ margin: 0 }}>
        {days.map((d) => (
          <div key={d.day} style={{ borderTop: "1px solid var(--rule)", padding: "14px 0 4px" }}>
            <dt className="mono-cap" style={{ color: "var(--zone)", marginBottom: 8 }}>
              Día {String(d.day).padStart(2, "0")} · {d.themeEs}
              <Gloss>{d.themeEn}</Gloss>
            </dt>
            {d.rows.map((r, i) => (
              <dd
                key={`${r.stem}-${i}`}
                className="week-stems__row"
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 10,
                  margin: 0,
                  padding: "5px 0",
                  opacity: r.firstSeenOn ? 0.5 : 1,
                }}
              >
                <span
                  className="font-display text-ink"
                  style={{ fontSize: 16, lineHeight: 1.35, flexShrink: 0 }}
                >
                  {r.stem}
                </span>
                <span
                  aria-hidden
                  style={{
                    flex: 1,
                    minWidth: 12,
                    borderBottom: "1px dotted var(--rule)",
                    transform: "translateY(-3px)",
                  }}
                />
                <span
                  style={{
                    fontSize: 13,
                    lineHeight: 1.35,
                    color: "var(--ink-mute)",
                    textAlign: "right",
                  }}
                >
                  {r.english}
                  {r.firstSeenOn && (
                    <span className="mono-cap" style={{ marginLeft: 8 }}>
                      día {String(r.firstSeenOn).padStart(2, "0")}
                    </span>
                  )}
                </span>
              </dd>
            ))}
          </div>
        ))}
      </dl>
    </div>
  );
}
