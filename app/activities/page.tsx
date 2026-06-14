"use client";

import Link from "next/link";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { useThoughts } from "@/hooks/useThoughts";

type ActivityRow = {
  href: string;
  label: string;
  meta?: string;
  icon: React.ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconJournal = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2Z" />
    <path d="M9 8h6M9 12h6" />
  </svg>
);

const IconCognates = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M4 20V8a2 2 0 0 1 2-2h6v16H6a2 2 0 0 1-2-2Z" />
    <path d="M20 20V8a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 0 2-2Z" />
    <path d="M10 10H8M10 14H8M16 10h2M16 14h2" />
  </svg>
);

const IconAccent = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M9 18v-4a7 7 0 0 1 14 0v4" />
    <path d="M7 18h4v5H7zM21 18h4v5h-4z" />
    <path d="M13 25c1.5 1 4.5 1 6 0" />
  </svg>
);

const IconLinking = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M13 19a4 4 0 0 1 0-6l3-3a4 4 0 0 1 6 6l-1.5 1.5" />
    <path d="M19 13a4 4 0 0 1 0 6l-3 3a4 4 0 0 1-6-6l1.5-1.5" />
  </svg>
);

const IconConfusions = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M8 6h8M8 12h5M8 18h8" />
    <circle cx="17" cy="12" r="2.5" />
    <path d="M17 9.5v1M17 13.5v1" />
  </svg>
);

export default function ActivitiesHubPage() {
  const { thoughts, hydrated } = useThoughts();

  const rows: ActivityRow[] = [
    {
      href: "/thoughts",
      label: "Diario",
      meta:
        hydrated && thoughts.length > 0
          ? `${thoughts.length} ${thoughts.length === 1 ? "frase" : "frases"}`
          : undefined,
      icon: IconJournal,
    },
    {
      href: "/activities/cognates",
      label: "Cognados",
      icon: IconCognates,
    },
    {
      href: "/activities/accent",
      label: "Acento",
      icon: IconAccent,
    },
    {
      href: "/activities/linking",
      label: "Enlace",
      icon: IconLinking,
    },
    {
      href: "/activities/confusions",
      label: "Matiz",
      icon: IconConfusions,
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader title={<Wordmark>Práctica</Wordmark>} />

      <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:divide-y-0 lg:border-0 lg:bg-transparent lg:overflow-visible">
        {rows.map((row) => (
          <li key={row.href}>
            <Link
              href={row.href}
              className="flex items-center gap-4 px-5 py-4 transition-colors active:bg-surface-sunk lg:rounded-lg lg:border lg:border-rule lg:bg-surface lg:py-5 lg:hover:border-accent/50"
            >
              <span style={{ color: "var(--accent)" }}>{row.icon}</span>
              <span className="flex-1 font-display text-[1.125rem] text-ink leading-tight">
                {row.label}
              </span>
              {row.meta && (
                <span className="text-caption text-ink-mute">{row.meta}</span>
              )}
              <span className="text-ink-mute" aria-hidden>
                ›
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
