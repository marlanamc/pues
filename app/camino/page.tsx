"use client";

import Link from "next/link";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { useStats } from "@/hooks/useStats";
import { totalDays } from "@/content/frames";
import { speakDayForIndex } from "@/content/prompts";

const WEEK = [
  { key: "lun", label: "Lunes", hint: "Podcast", zone: "var(--zone-practica)" },
  { key: "mar", label: "Martes", hint: "Leer", zone: "var(--accent)" },
  { key: "mie", label: "Miércoles", hint: "Habla", zone: "var(--zone-lugares)" },
  { key: "jue", label: "Jueves", hint: "Sombra", zone: "var(--zone-guias)" },
  { key: "vie", label: "Viernes", hint: "Vida real", zone: "var(--zone-lab)" },
  { key: "sab", label: "Sábado", hint: "Leer", zone: "var(--zone-practica)" },
  { key: "dom", label: "Domingo", hint: "Reset", zone: "var(--ink-soft)" },
];

export default function CaminoPage() {
  const { stats } = useStats();
  const day = speakDayForIndex(stats.currentDayIndex);
  const dayNum = String(stats.currentDayIndex + 1).padStart(2, "0");
  const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{
          zIndex: 0,
          background:
            "linear-gradient(160deg," +
            " color-mix(in oklab, var(--zone-lugares) 18%, transparent) 0%," +
            " color-mix(in oklab, var(--zone-practica) 14%, transparent) 100%)",
        }}
      />
      <div className="fade-rise relative" style={{ zIndex: 1 }}>
        <PageHeader
          title={<Wordmark>Camino</Wordmark>}
          meta={
            <span className="mono-cap">
              Día {dayNum} · {totalDays}
            </span>
          }
        />

        <div style={{ marginTop: 28, maxWidth: 460 }}>
          <p className="mono-cap" style={{ marginBottom: 10 }}>
            Semana actual · {day.themeEs}
          </p>
          <h1 className="text-display-xl text-ink">{day.line}</h1>

          <p
            className="mono-cap"
            style={{ marginTop: 28, marginBottom: 12 }}
          >
            Tu semana
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {WEEK.map((d, i) => {
              const isToday = i === todayIdx;
              return (
                <li key={d.key}>
                  <Link
                    href="/"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "12px 14px",
                      borderRadius: 12,
                      background: "var(--surface)",
                      border: `1px solid ${
                        isToday
                          ? "color-mix(in oklab, var(--accent) 38%, transparent)"
                          : "var(--rule)"
                      }`,
                      textDecoration: "none",
                    }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: d.zone,
                        flexShrink: 0,
                      }}
                      aria-hidden
                    />
                    <span
                      className="font-display"
                      style={{
                        flex: 1,
                        fontSize: 16,
                        color: "var(--ink)",
                      }}
                    >
                      {d.label}
                    </span>
                    <span
                      className="mono-cap"
                      style={{
                        color: isToday ? "var(--accent)" : "var(--ink-mute)",
                      }}
                    >
                      {d.hint}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
