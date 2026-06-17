"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { readingForIndex } from "@/content/readings";
import { totalDays } from "@/content/frames";
import { useStats } from "@/hooks/useStats";
import { markReadingDone, readingDoneToday } from "@/lib/store";

export default function ReadPage() {
  const { stats } = useStats();
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDone(readingDoneToday());
  }, []);

  const day = readingForIndex(stats.currentDayIndex);
  const dayNum = String(stats.currentDayIndex + 1).padStart(2, "0");

  function toggleLine(i: number) {
    setRevealed((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  function handleDone() {
    markReadingDone();
    setDone(true);
  }

  return (
    <div className="fade-rise" style={{ maxWidth: 640, margin: "0 auto" }}>
      <header className="flex items-center justify-between" style={{ marginBottom: 32 }}>
        <Link
          href="/"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Hoy
        </Link>
        <p className="text-caption text-ink-mute">La lectura</p>
        <span className="w-16" aria-hidden />
      </header>

      <PageHeader
        title={<Wordmark>La lectura</Wordmark>}
        meta={
          <span className="mono-cap text-ink-soft">
            Día {dayNum} · {totalDays} días
          </span>
        }
      />

      <p
        className="font-display"
        style={{
          fontStyle: "italic",
          fontSize: 15,
          color: "var(--ink-soft)",
          marginTop: 4,
          marginBottom: 32,
        }}
      >
        {day.themeEs}
      </p>

      {/* ── Vocabulario ── */}
      <section style={{ marginBottom: 36 }}>
        <p className="mono-cap" style={{ marginBottom: 14 }}>
          Vocabulario
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 10,
          }}
        >
          {day.vocab.map((w) => (
            <div
              key={w.es}
              style={{
                background: "var(--surface)",
                border: "1px solid var(--rule)",
                borderRadius: 12,
                padding: "14px 16px",
              }}
            >
              <p
                className="font-display"
                style={{ fontSize: 20, lineHeight: 1.1, color: "var(--ink)" }}
              >
                {w.es}
              </p>
              <p
                className="mono-cap"
                style={{ color: "var(--ink-mute)", marginTop: 4 }}
              >
                {w.en}
              </p>
              <p
                className="font-display"
                style={{
                  fontStyle: "italic",
                  fontSize: 13,
                  lineHeight: 1.4,
                  color: "var(--ink-soft)",
                  marginTop: 8,
                }}
              >
                {w.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      <span className="hairline" aria-hidden />

      {/* ── Diálogo ── */}
      <section style={{ marginTop: 32, marginBottom: 48 }}>
        <p className="mono-cap" style={{ marginBottom: 4 }}>
          Diálogo
        </p>
        <p
          className="font-display"
          style={{
            fontStyle: "italic",
            fontSize: 14,
            color: "var(--ink-mute)",
            marginBottom: 24,
          }}
        >
          {day.dialogue.situation}
        </p>

        <h2
          className="font-display"
          style={{ fontSize: 22, lineHeight: 1.2, color: "var(--ink)", marginBottom: 28 }}
        >
          {day.dialogue.title}
        </h2>

        <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 20 }}>
          {day.dialogue.lines.map((line, i) => {
            const isRevealed = revealed.has(i);
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => toggleLine(i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                  }}
                  aria-expanded={isRevealed}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                    <span
                      className="mono-cap"
                      style={{
                        flexShrink: 0,
                        color: line.speaker === "A" ? "var(--accent)" : "var(--ink-mute)",
                        minWidth: 14,
                      }}
                    >
                      {line.speaker}
                    </span>
                    <p
                      className="font-display"
                      style={{ fontSize: 18, lineHeight: 1.4, color: "var(--ink)" }}
                    >
                      {line.es}
                    </p>
                  </div>
                  {isRevealed && (
                    <p
                      className="font-display"
                      style={{
                        fontStyle: "italic",
                        fontSize: 14,
                        lineHeight: 1.4,
                        color: "var(--ink-soft)",
                        paddingLeft: 24,
                      }}
                    >
                      {line.en}
                    </p>
                  )}
                </button>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ── Done button ── */}
      <div style={{ marginBottom: 64 }}>
        {done ? (
          <p
            className="mono-cap"
            style={{ color: "var(--accent)", textAlign: "center", padding: "14px 0" }}
          >
            Leído esta noche · ✓
          </p>
        ) : (
          <button
            type="button"
            onClick={handleDone}
            className="btn-primary"
            style={{ width: "100%" }}
          >
            <span className="lab">Leído esta noche</span>
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12.5 10 17l9-10" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
