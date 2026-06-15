"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ThoughtCard } from "@/components/ThoughtCard";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { useThoughts } from "@/hooks/useThoughts";
import type { Thought } from "@/lib/store";

function groupByDate(thoughts: Thought[]) {
  const groups = new Map<string, Thought[]>();
  for (const t of thoughts) {
    const key = t.createdAt.slice(0, 10);
    const arr = groups.get(key) ?? [];
    arr.push(t);
    groups.set(key, arr);
  }
  return Array.from(groups.entries());
}

function formatDateHeader(yyyyMmDd: string) {
  const today = new Date().toISOString().slice(0, 10);
  const yest = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (yyyyMmDd === today) return "Hoy";
  if (yyyyMmDd === yest) return "Ayer";
  const d = new Date(yyyyMmDd + "T12:00:00");
  return d.toLocaleDateString("es", { month: "long", day: "numeric" });
}

export default function DiarioPage() {
  const { thoughts, hydrated } = useThoughts();
  const grouped = useMemo(() => groupByDate(thoughts), [thoughts]);

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <Link
          href="/practice"
          className="text-caption text-ink-mute hover:text-accent transition-colors min-h-[40px] inline-flex items-center"
        >
          ← Práctica
        </Link>
        <PageHeader
          title={<Wordmark>Diario</Wordmark>}
          meta={
            hydrated && thoughts.length > 0 ? (
              <span className="mono-cap">{thoughts.length} frases</span>
            ) : undefined
          }
        />
        <span className="hairline" aria-hidden />
      </div>

      {hydrated && thoughts.length === 0 && (
        <div
          className="border border-rule bg-surface p-8 text-center space-y-5"
          style={{ borderRadius: 14 }}
        >
          <p className="text-gloss">Aún no hay frases. Di tu primera.</p>
          <Link href="/flow/speak" className="btn-primary" style={{ maxWidth: 220, margin: "0 auto" }}>
            <span className="lab">Empezar</span>
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
        </div>
      )}

      {grouped.map(([date, list]) => (
        <section key={date} className="space-y-3">
          <p className="mono-cap">{formatDateHeader(date)}</p>
          <ul className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-3 lg:space-y-0 xl:grid-cols-3">
            {list.map((t) => (
              <li key={t.id}>
                <ThoughtCard thought={t} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
