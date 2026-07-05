"use client";

import Link from "next/link";
import { useMemo } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { useStats } from "@/hooks/useStats";
import { useThoughts } from "@/hooks/useThoughts";
import type { Thought } from "@/lib/store";
import { currentStreak, practiceDatesFromThoughts } from "@/lib/streak";
import { SEASONS, seasonForDate } from "@/lib/season";

const DIA_SHORT = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];

function startOfWeek(d: Date): Date {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  const dow = x.getDay();
  x.setDate(x.getDate() - (dow === 0 ? 6 : dow - 1)); // back to Monday
  return x;
}

function weekLabel(createdAt: string, now: Date): string {
  const d = new Date(createdAt);
  if (Number.isNaN(d.getTime())) return "Antes";
  const thisMon = startOfWeek(now).getTime();
  const lastMon = thisMon - 7 * 86_400_000;
  const t = d.getTime();
  if (t >= thisMon) return "Esta semana";
  if (t >= lastMon) return "La semana pasada";
  return d.toLocaleDateString("es", { month: "long" });
}

function dayTag(createdAt: string): string {
  const d = new Date(createdAt);
  return Number.isNaN(d.getTime()) ? "" : DIA_SHORT[d.getDay()];
}

export default function CuadernoPage() {
  const { stats, hydrated } = useStats();
  const { thoughts } = useThoughts();

  const now = useMemo(() => new Date(), []);
  const said = hydrated ? stats.sentencesCreated : thoughts.length;
  // Hold counts at an em dash until the store has hydrated, so they don't flash
  // 0 → real value on first paint.
  const saidLabel = hydrated ? String(said) : "—";
  const streak = useMemo(
    () => currentStreak(practiceDatesFromThoughts(thoughts)),
    [thoughts],
  );

  // Group (already sorted newest-first) into ordered week buckets.
  const groups = useMemo(() => {
    const map = new Map<string, Thought[]>();
    for (const t of thoughts) {
      const label = weekLabel(t.createdAt, now);
      (map.get(label) ?? map.set(label, []).get(label)!).push(t);
    }
    return Array.from(map.entries());
  }, [thoughts, now]);

  // Frases per temporada (calendar season of each entry).
  const perSeason = useMemo(() => {
    const counts = new Map<number, number>();
    for (const t of thoughts) {
      const d = new Date(t.createdAt);
      if (Number.isNaN(d.getTime())) continue;
      const idx = seasonForDate(d).index;
      counts.set(idx, (counts.get(idx) ?? 0) + 1);
    }
    return counts;
  }, [thoughts]);

  const currentSeasonIndex = seasonForDate(now).index;

  return (
    <div className="fade-rise relative" style={{ paddingBottom: 96 }}>
      <PageHeader
        title={<Wordmark>Cuaderno</Wordmark>}
        meta={<span className="mono-cap">{saidLabel} frases</span>}
      />

      <div className="lg:mt-8 lg:grid lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-12">
        {/* ===== MAIN — everything you said ===== */}
        <div style={{ marginTop: 22 }}>
          <p className="mono-cap">
            Tu cuaderno · {saidLabel} frases
            <Gloss>{`Your notebook · ${saidLabel} sentences`}</Gloss>
          </p>
          <h1 className="text-display-2xl text-ink" style={{ marginTop: 8 }}>
            Todo lo que dijiste.
            <Gloss>{"Everything you said."}</Gloss>
          </h1>
          <p className="text-display-italic text-[1.0625rem]" style={{ margin: "12px 0 0" }}>
            En voz alta, sin que se borre. Crece contigo.
            <Gloss>{"Out loud, without erasing. It grows with you."}</Gloss>
          </p>

          {!hydrated ? (
            <div aria-hidden style={{ marginTop: 34, maxWidth: 680 }}>
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="skeleton-line"
                  style={{ height: 20, margin: "20px 0" }}
                />
              ))}
            </div>
          ) : thoughts.length === 0 ? (
            <div style={{ marginTop: 34, paddingTop: 18, borderTop: "1px solid var(--rule)" }}>
              <p className="font-display text-ink-mute" style={{ fontStyle: "italic", fontSize: 16 }}>
                Aún no hay frases. Di la primera hoy.
                <Gloss>{"No sentences yet. Say the first one today."}</Gloss>
              </p>
              <Link href="/flow/speak" className="btn-primary" style={{ marginTop: 18, maxWidth: 260 }}>
                <span className="lab">Empezar<Gloss>{"Get started"}</Gloss></span>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          ) : (
            <div style={{ marginTop: 34, maxWidth: 680 }}>
              {groups.map(([label, list]) => (
                <div key={label} style={{ marginBottom: 34 }}>
                  <span className="mono-cap" style={{ color: "var(--accent)" }}>{label}</span>
                  <div style={{ marginTop: 8 }}>
                    {list.map((t) => (
                      <div key={t.id} className="flex items-start" style={{ gap: 16, padding: "16px 0", borderTop: "1px solid var(--rule)" }}>
                        <span className="mono-cap" style={{ fontSize: 8.5, paddingTop: 6, width: 34, flexShrink: 0 }}>{dayTag(t.createdAt)}</span>
                        <span className="font-display text-ink" style={{ fontSize: 20, lineHeight: 1.4, flex: 1 }}>{t.sentence}</span>
                        {t.situationLabel ? (
                          <span className="mono-cap" style={{ fontSize: 8, paddingTop: 8, flexShrink: 0 }}>{t.situationLabel}</span>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Mobile-reachable door to the full journal (the aside is desktop-only). */}
          <Link href="/thoughts" className="mono-cap transition-colors hover:text-accent lg:hidden" style={{ display: "inline-block", marginTop: 34 }}>
            ver el diario completo →
          </Link>
        </div>

        {/* ===== ASIDE — el recuento ===== */}
        <aside className="hidden lg:flex lg:flex-col" style={{ paddingLeft: 40, borderLeft: "1px solid var(--rule)" }}>
          <h2 className="font-display text-ink" style={{ fontWeight: 300, fontSize: 24 }}>
            El recuento
            <Gloss>{"The count"}</Gloss>
          </h2>

          <div className="flex" style={{ gap: 14, marginTop: 24 }}>
            <div style={{ flex: 1, padding: 18, background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14 }}>
              <span className="font-display" style={{ fontWeight: 300, fontSize: 34, color: "var(--accent)" }}>{saidLabel}</span>
              <p className="mono-cap" style={{ margin: "6px 0 0" }}>
                frases dichas
                <Gloss>{"sentences said"}</Gloss>
              </p>
            </div>
            <div style={{ flex: 1, padding: 18, background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14 }}>
              <span className="font-display text-ink" style={{ fontWeight: 300, fontSize: 34 }}>{hydrated ? streak : "—"}</span>
              <p className="mono-cap" style={{ margin: "6px 0 0" }}>
                días de racha
                <Gloss>{"days streak"}</Gloss>
              </p>
            </div>
          </div>

          <div style={{ marginTop: 26 }}>
            <span className="mono-cap">
              Por temporada
              <Gloss>{"By season"}</Gloss>
            </span>
            {SEASONS.map((s) => {
              const count = perSeason.get(s.index) ?? 0;
              const reached = s.index <= currentSeasonIndex || count > 0;
              return (
                <div key={s.index} className="flex items-center" style={{ gap: 12, padding: "14px 0", borderTop: "1px solid var(--rule)", marginTop: s.index === SEASONS[0].index ? 10 : 0 }}>
                  <span style={{ width: 9, height: 9, borderRadius: "50%", background: reached ? s.color : "transparent", border: reached ? "none" : "1.5px solid var(--rule)", flexShrink: 0 }} aria-hidden />
                  <span className="font-display" style={{ fontSize: 16, color: reached ? "var(--ink-soft)" : "var(--ink-mute)", flex: 1 }}>{s.label}</span>
                  <span className="font-mono" style={{ fontSize: 11, color: count > 0 ? "var(--ink)" : "var(--ink-mute)" }}>{count > 0 ? count : "—"}</span>
                </div>
              );
            })}
          </div>

          <p className="font-display text-ink-mute" style={{ fontStyle: "italic", fontSize: 15, lineHeight: 1.5, margin: "26px 0 0" }}>
            Cada frase aquí la dijiste tú. Nadie te la tradujo.
            <Gloss>{"Every sentence here, you said it. Nobody translated it for you."}</Gloss>
          </p>

          <Link href="/thoughts" className="mono-cap transition-colors hover:text-accent" style={{ marginTop: 18 }}>
            ver el diario completo →
          </Link>
        </aside>
      </div>
    </div>
  );
}
