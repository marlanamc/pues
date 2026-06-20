"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { NotebookAside } from "@/components/NotebookAside";
import { speakDayForIndex } from "@/content/prompts";
import { totalDays } from "@/content/frames";
import { clearDraft, readingDoneToday } from "@/lib/store";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import { currentStreak, practiceDatesFromThoughts } from "@/lib/streak";

const NAME = "Marlana";

const DIAS_LONG = [
  "DOMINGO",
  "LUNES",
  "MARTES",
  "MIÉRCOLES",
  "JUEVES",
  "VIERNES",
  "SÁBADO",
];

const ws = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};
const IconMic = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...ws}>
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);
const IconBook = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...ws}>
    <path d="M3 5c3 0 6 1 9 3 3-2 6-3 9-3v14c-3 0-6 1-9 3-3-2-6-3-9-3V5z" />
  </svg>
);
const IconChat = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...ws}>
    <path d="M4 5h16v11H8l-4 4V5z" />
  </svg>
);
const IconWave = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...ws} strokeWidth={1.8}>
    <path d="M4 12h2M8 7v10M12 4v16M16 8v8M20 12h0" />
  </svg>
);
const IconSpark = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...ws}>
    <path d="M12 3l2 5 5 .5-4 3.5 1.5 5L12 14l-4.5 3 1.5-5-4-3.5L10 8z" />
  </svg>
);
const IconReset = (
  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden {...ws}>
    <path d="M20 12a8 8 0 1 1-3-6.2" />
    <path d="M20 4v5h-5" />
  </svg>
);

const WEEK_PLAN = [
  { idx: 1, label: "Lunes", hint: "Podcast", icon: IconMic },
  { idx: 2, label: "Martes", hint: "Leer", icon: IconBook },
  { idx: 3, label: "Miércoles", hint: "Habla", icon: IconChat },
  { idx: 4, label: "Jueves", hint: "Sombra", icon: IconWave },
  { idx: 5, label: "Viernes", hint: "Vida real", icon: IconSpark },
  { idx: 6, label: "Sábado", hint: "Leer", icon: IconBook },
  { idx: 0, label: "Domingo", hint: "Reset", icon: IconReset },
];

export default function HomePage() {
  const { stats } = useStats();
  const { thoughts } = useThoughts();
  const [greeting, setGreeting] = useState("Buenos días");
  const [todayDow, setTodayDow] = useState(2);

  useEffect(() => {
    const now = new Date();
    const h = now.getHours();
    if (h < 12) setGreeting("Buenos días");
    else if (h < 19) setGreeting("Buenas tardes");
    else setGreeting("Buenas noches");
    setTodayDow(now.getDay());
  }, []);

  const day = speakDayForIndex(stats.currentDayIndex);
  const dayNum = day.day.toString().padStart(2, "0");
  const semana = Math.floor(stats.currentDayIndex / 7) + 1;
  const todayEs = DIAS_LONG[todayDow];

  const today = new Date().toISOString().slice(0, 10);
  const practicedToday = stats.lastSessionDate === today;
  const flaggedCount = thoughts.filter((t) => t.practiceFlag === true).length;
  const [readDoneToday, setReadDoneToday] = useState(false);
  useEffect(() => {
    setReadDoneToday(readingDoneToday());
    function onStats() {
      setReadDoneToday(readingDoneToday());
    }
    window.addEventListener("pues:stats-change", onStats);
    return () => window.removeEventListener("pues:stats-change", onStats);
  }, []);

  const minimo = useMemo(
    () => [
      {
        key: "frases",
        title: "3 frases útiles",
        sub: "Guárdalas y dilo en voz alta",
        href: "/flow/speak",
        state: practicedToday ? ("done" as const) : ("active" as const),
        onClick: practicedToday ? undefined : () => clearDraft(),
      },
      {
        key: "verbos",
        title: "2 verbos",
        sub: "leer · entender",
        href: "/practice/games",
        state:
          flaggedCount > 0 ? ("active" as const) : ("pending" as const),
      },
      {
        key: "salida",
        title: "1 salida corta",
        sub: "Resume el artículo en una frase",
        href: "/read",
        state: readDoneToday ? ("done" as const) : ("pending" as const),
      },
    ],
    [practicedToday, flaggedCount, readDoneToday],
  );

  const streak = useMemo(
    () => currentStreak(practiceDatesFromThoughts(thoughts)),
    [thoughts],
  );

  return (
    <div
      className="fade-rise relative"
      style={{ paddingBottom: 96 }}
    >
        <PageHeader
          title={<Wordmark>Pues</Wordmark>}
          meta={<span className="mono-cap">Racha · {streak}</span>}
        />

        <div className="md:mt-6 lg:mt-12 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-12">
          <div
            className="flex flex-col mx-auto md:mx-0 w-full"
            style={{ maxWidth: 560 }}
          >
            {/* Greeting — slim for mini phones. */}
            <div style={{ marginTop: 22 }} className="lg:mt-0">
              <p
                className="font-display"
                style={{
                  fontStyle: "italic",
                  fontSize: 14,
                  color: "var(--ink-soft)",
                  margin: "0 0 2px",
                }}
              >
                {greeting},
              </p>
              <h1 className="text-display-xl text-ink">{NAME}</h1>
            </div>

            <span
              className="hairline"
              style={{ margin: "16px 0 14px" }}
              aria-hidden
            />

            {/* Hero — today's call to action. */}
            <p className="mono-cap" style={{ marginBottom: 8 }}>
              {todayEs} · Semana {semana}
            </p>
            <p
              className="font-display text-ink md:text-[28px] lg:text-[32px]"
              style={{
                fontSize: 22,
                lineHeight: 1.2,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              Hoy lees, guardas y dices una cosa en español.
            </p>

            <Link
              href="/flow/speak"
              onClick={() => clearDraft()}
              className="btn-primary btn-primary--zones active:brightness-90"
              style={{
                marginTop: 18,
                background:
                  "linear-gradient(90deg, var(--zone-practica) 0%, var(--zone-lugares) 25%, var(--zone-guias) 50%, var(--zone-lab) 100%)",
              }}
            >
              <span
                className="lab"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  fontSize: "1.0625rem",
                  letterSpacing: "0.01em",
                }}
              >
                Empezar
              </span>
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                aria-hidden
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            <p
              className="mono-cap"
              style={{ marginTop: 10, color: "var(--ink-mute)" }}
            >
              Día {dayNum} · {totalDays} días
            </p>
          </div>

          <div className="hidden lg:block">
            <NotebookAside />
          </div>
        </div>

        {/* Full-width sections below the hero. */}
        <div className="mt-0 lg:mt-10">
            {/* Tu mínimo de hoy — 3 stacked cards. */}
            <section
              aria-label="Tu mínimo de hoy"
              style={{ marginTop: 26 }}
            >
              <p className="mono-cap" style={{ marginBottom: 10 }}>
                Tu mínimo de hoy
              </p>
              <ul
                className="flex flex-col gap-2 md:grid md:grid-cols-3 md:gap-2.5"
                style={{ listStyle: "none", padding: 0, margin: 0 }}
              >
                {minimo.map((m, i) => (
                  <MinimoCard
                    key={m.key}
                    index={i + 1}
                    title={m.title}
                    sub={m.sub}
                    href={m.href}
                    state={m.state}
                    onClick={m.onClick}
                  />
                ))}
              </ul>
            </section>

            {/* Ancla de hoy — featured single card. */}
            <section aria-label="Ancla de hoy" style={{ marginTop: 26 }}>
              <p className="mono-cap" style={{ marginBottom: 10 }}>
                Ancla de hoy
              </p>
              <Link
                href="/read"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                  padding: "18px 20px",
                  borderRadius: 18,
                  background: "var(--surface)",
                  border: "1px solid var(--rule)",
                  textDecoration: "none",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    flexShrink: 0,
                    background:
                      "color-mix(in oklab, var(--zone-lugares) 18%, var(--surface))",
                    color: "var(--zone-lugares)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.6}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 5c3 0 6 1 9 3 3-2 6-3 9-3v14c-3 0-6 1-9 3-3-2-6-3-9-3V5z" />
                    <path d="M12 8v14" />
                  </svg>
                </span>
                <span style={{ minWidth: 0, flex: 1 }}>
                  <span
                    className="mono-cap"
                    style={{ color: "var(--accent)" }}
                  >
                    {todayEs} · Leer
                  </span>
                  <span
                    className="font-display block text-ink"
                    style={{
                      fontSize: 17,
                      lineHeight: 1.2,
                      marginTop: 4,
                    }}
                  >
                    Lee un artículo corto
                  </span>
                  <span
                    className="block"
                    style={{
                      marginTop: 6,
                      fontSize: 12,
                      lineHeight: 1.4,
                      color: "var(--ink-soft)",
                    }}
                  >
                    5–10 min · Guarda 3 palabras · Di: “El artículo habla
                    de…”
                  </span>
                </span>
                <span
                  aria-hidden
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    border: "1px solid var(--rule)",
                    flexShrink: 0,
                    color: "var(--ink-soft)",
                    alignSelf: "center",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            </section>

            {/* Camino semanal — 7-column grid; today gets a tinted accent card. */}
            <section
              aria-label="Camino semanal"
              style={{ marginTop: 26 }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <p className="mono-cap">Camino semanal</p>
                <Link
                  href="/camino"
                  className="mono-cap"
                  style={{ color: "var(--ink-mute)" }}
                >
                  Ver
                </Link>
              </div>

              <div
                className="grid grid-cols-7"
                style={{ gap: 6 }}
              >
                {WEEK_PLAN.map((d) => {
                  const isToday = d.idx === todayDow;
                  return (
                    <Link
                      key={d.label}
                      href="/camino"
                      style={{
                        padding: "12px 8px",
                        borderRadius: 14,
                        background: isToday
                          ? "color-mix(in oklab, var(--accent) 6%, var(--surface))"
                          : "var(--surface)",
                        border: `1px solid ${
                          isToday
                            ? "color-mix(in oklab, var(--accent) 45%, transparent)"
                            : "var(--rule)"
                        }`,
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 6,
                        textAlign: "center",
                        minWidth: 0,
                      }}
                    >
                      <span
                        className="mono-cap"
                        style={{
                          color: isToday
                            ? "var(--accent)"
                            : "var(--ink-mute)",
                          fontSize: 9,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "100%",
                        }}
                      >
                        {d.label}
                      </span>
                      <span
                        aria-hidden
                        style={{
                          color: isToday ? "var(--accent)" : "var(--ink-soft)",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: 18,
                        }}
                      >
                        {d.icon}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 12.5,
                          fontWeight: isToday ? 500 : 400,
                          lineHeight: 1.1,
                          color: isToday ? "var(--accent)" : "var(--ink)",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          maxWidth: "100%",
                        }}
                      >
                        {d.hint}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Shortcut row — icon-tile + label, divided by a hairline above. */}
            <section
              aria-label="Atajos"
              style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid var(--rule)" }}
            >
              <div
                className="grid grid-cols-2 md:grid-cols-4"
                style={{ columnGap: 14, rowGap: 14 }}
              >
                <Shortcut
                  zone="var(--zone-practica)"
                  zoneLabel="Práctica"
                  title="Repite"
                  href="/practice"
                  icon={
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3h9l4 4v14H6z" />
                      <path d="M9 12h7M9 16h5" />
                    </svg>
                  }
                />
                <Shortcut
                  zone="var(--zone-guias)"
                  zoneLabel="Cuaderno"
                  title="Guardado"
                  href="/cuaderno"
                  icon={
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z" />
                    </svg>
                  }
                />
                <Shortcut
                  zone="var(--zone-lugares)"
                  zoneLabel="Guías"
                  title="Patrones"
                  href="/guides"
                  icon={
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth={1.6}>
                      <circle cx="7" cy="7" r="3" />
                      <circle cx="17" cy="7" r="3" />
                      <circle cx="7" cy="17" r="3" />
                      <circle cx="17" cy="17" r="3" />
                    </svg>
                  }
                />
                <Shortcut
                  zone="var(--zone-lab)"
                  zoneLabel="Lab"
                  title="El oído"
                  href="/lab"
                  icon={
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 10a6 6 0 1 1 12 0v4a4 4 0 0 1-4 4h-1v-7" />
                    </svg>
                  }
                />
              </div>
            </section>
        </div>
    </div>
  );
}

function MinimoCard({
  index,
  title,
  sub,
  href,
  state,
  onClick,
}: {
  index: number;
  title: string;
  sub: string;
  href: string;
  state: "done" | "active" | "pending";
  onClick?: () => void;
}) {
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          padding: "12px 14px",
          borderRadius: 14,
          background:
            state === "done"
              ? "color-mix(in oklab, var(--accent) 8%, var(--surface))"
              : "var(--surface)",
          border: `1px solid ${
            state === "done"
              ? "color-mix(in oklab, var(--accent) 30%, transparent)"
              : "var(--rule)"
          }`,
          opacity: state === "pending" ? 0.7 : 1,
          textDecoration: "none",
        }}
      >
        <span
          aria-hidden
          className="font-display"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 28,
            height: 28,
            borderRadius: "50%",
            flexShrink: 0,
            background:
              state === "pending"
                ? "transparent"
                : "color-mix(in oklab, var(--accent) 16%, transparent)",
            border:
              state === "pending"
                ? "1px solid var(--rule)"
                : "none",
            color:
              state === "pending" ? "var(--ink-mute)" : "var(--accent)",
            fontSize: 14,
            lineHeight: 1,
            fontStyle: "italic",
          }}
        >
          {index}
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span
            className="font-display block"
            style={{
              fontSize: 15,
              lineHeight: 1.15,
              color: state === "pending" ? "var(--ink-soft)" : "var(--ink)",
            }}
          >
            {title}
          </span>
          <span
            className="block"
            style={{
              marginTop: 4,
              color: "var(--ink-soft)",
              fontSize: 12,
              lineHeight: 1.4,
            }}
          >
            {sub}
          </span>
        </span>
      </Link>
    </li>
  );
}

function Shortcut({
  zone,
  zoneLabel,
  title,
  href,
  icon,
}: {
  zone: string;
  zoneLabel: string;
  title: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "4px 2px",
        textDecoration: "none",
      }}
    >
      <span
        aria-hidden
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: 9,
          flexShrink: 0,
          background: `color-mix(in oklab, ${zone} 14%, transparent)`,
          color: zone,
        }}
      >
        {icon}
      </span>
      <span style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
        <span
          className="font-display"
          style={{ fontSize: 14, lineHeight: 1.1, color: zone }}
        >
          {zoneLabel}
        </span>
        <span
          style={{ fontSize: 11, lineHeight: 1.2, color: "var(--ink-soft)", marginTop: 2 }}
        >
          {title}
        </span>
      </span>
    </Link>
  );
}
