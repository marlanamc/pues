"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { Hue, ZoneIntro, ZoneRow } from "@/components/ZoneList";

type GuideRow = {
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

const IconCognates = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M4 20V8a2 2 0 0 1 2-2h6v16H6a2 2 0 0 1-2-2Z" />
    <path d="M20 20V8a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 0 2-2Z" />
    <path d="M10 10H8M10 14H8M16 10h2M16 14h2" />
  </svg>
);

const IconPronunciation = (
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

const IconQuestions = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M9.5 9a3.5 3.5 0 1 1 5.8 2.6c-.9.7-1.3 1.2-1.3 2.4v.5" />
    <circle cx="12" cy="18.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="9" />
  </svg>
);

const IconConfusions = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M8 6h8M8 12h5M8 18h8" />
    <circle cx="17" cy="12" r="2.5" />
    <path d="M17 9.5v1M17 13.5v1" />
  </svg>
);

const IconVerbs = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M5 7h8M5 12h14M5 17h10" />
    <path d="M17 7v10" />
    <path d="M14 10h6M14 14h6" />
  </svg>
);

const IconSellos = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M3 12h18" />
    <circle cx="8" cy="12" r="2.1" fill="currentColor" stroke="none" />
    <path d="M14 9v6" />
  </svg>
);

export default function GuidesHubPage() {
  const rows: GuideRow[] = [
    {
      href: "/guides/cognates",
      label: "Cognados",
      icon: IconCognates,
    },
    {
      href: "/guides/pronunciation",
      label: "Pronunciación",
      meta: "2 guías",
      icon: IconPronunciation,
    },
    {
      href: "/guides/linking",
      label: "Enlace",
      icon: IconLinking,
    },
    {
      href: "/guides/questions",
      label: "Preguntas",
      icon: IconQuestions,
    },
    {
      href: "/guides/verbs",
      label: "Verbos",
      meta: "5 guías",
      icon: IconVerbs,
    },
    {
      href: "/guides/confusions",
      label: "Matiz",
      icon: IconConfusions,
    },
    {
      href: "/guides/sellos",
      label: "Sellos",
      icon: IconSellos,
    },
  ];

  return (
    <div
      className="space-y-6"
      style={{ "--zone": "var(--zone-guias)" } as CSSProperties}
    >
      <PageHeader title={<Wordmark>Guías</Wordmark>} />

      <ZoneIntro zoneLabel="Guías" role="Referencia">
        The pattern, <Hue>when you need it</Hue>.
      </ZoneIntro>

      <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:divide-y-0 lg:border-0 lg:bg-transparent lg:overflow-visible">
        {rows.map((row) => (
          <li key={row.href}>
            <Link
              href={row.href}
              className="block transition-colors active:bg-surface-sunk lg:rounded-lg lg:border lg:border-rule lg:bg-surface lg:hover:border-[color-mix(in_oklab,var(--zone)_50%,transparent)]"
            >
              <ZoneRow
                compact
                icon={row.icon}
                title={row.label}
                meta={row.meta}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
