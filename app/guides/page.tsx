"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { Gloss } from "@/components/Gloss";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import { Hue, ZoneIntro, ZoneRow } from "@/components/ZoneList";

type GuideRow = {
  href: string;
  label: string;
  /** Plain-language promise — the evocative label explains nothing on its own. */
  description: string;
  descriptionEn: string;
  meta?: string;
  icon: React.ReactNode;
};

type GuideGroup = {
  label: string;
  labelEn: string;
  rows: GuideRow[];
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

const IconReflexive = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M20 12a8 8 0 1 1-2.9-6.2" />
    <path d="M20 4v4h-4" />
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
  const groups: GuideGroup[] = [
    {
      label: "Armar la frase",
      labelEn: "Building the sentence",
      rows: [
        {
          href: "/guides/verbs",
          label: "Verbos",
          description: "Presente, pasado y futuro — y los verbos de siempre.",
          descriptionEn: "Present, past, future — and the verbs you always need.",
          meta: "5 guías",
          icon: IconVerbs,
        },
        {
          href: "/guides/sellos",
          label: "Sellos",
          description: "La firma de cada tiempo, de un vistazo.",
          descriptionEn: "Each tense's signature, at a glance.",
          icon: IconSellos,
        },
        {
          href: "/guides/reflexive",
          label: "Reflexivos",
          description: "Me despierto, te vas: la acción vuelve a ti.",
          descriptionEn: "Me despierto, te vas — the action comes back to you.",
          icon: IconReflexive,
        },
        {
          href: "/guides/questions",
          label: "Preguntas",
          description: "¿Qué, cuál, cómo? Preguntar lo que sea.",
          descriptionEn: "Qué, cuál, cómo — how to ask anything.",
          icon: IconQuestions,
        },
      ],
    },
    {
      label: "La palabra justa",
      labelEn: "The right word",
      rows: [
        {
          href: "/guides/cognates",
          label: "Cognados",
          description: "Vocabulario gratis: palabras que ya conoces del inglés.",
          descriptionEn: "Free vocabulary — words you already know from English.",
          icon: IconCognates,
        },
        {
          href: "/guides/confusions",
          label: "Matiz",
          description: "¿Ser o estar? ¿Por o para? Los pares que confunden.",
          descriptionEn: "Ser or estar? Por or para? The pairs that trip you up.",
          icon: IconConfusions,
        },
      ],
    },
    {
      label: "Sonar natural",
      labelEn: "Sounding natural",
      rows: [
        {
          href: "/guides/pronunciation",
          label: "Pronunciación",
          description: "Dónde cae el golpe, y qué hace la tilde.",
          descriptionEn: "Where the stress lands, and what the tilde does.",
          meta: "2 guías",
          icon: IconPronunciation,
        },
        {
          href: "/guides/linking",
          label: "Enlace",
          description: "Por qué el español suena como una sola palabra larga.",
          descriptionEn: "Why spoken Spanish sounds like one long word.",
          icon: IconLinking,
        },
      ],
    },
  ];

  return (
    <div
      className="space-y-6"
      style={{ "--zone": "var(--zone-guias)" } as CSSProperties}
    >
      <PageHeader title={<Wordmark>Guías</Wordmark>} />

      <ZoneIntro zoneLabel="Guías" role="Referencia">
        El patrón, <Hue>justo cuando lo necesitas</Hue>.
        <Gloss>The pattern, right when you need it.</Gloss>
      </ZoneIntro>

      {groups.map((group) => (
        <section key={group.label} style={{ marginTop: 26 }}>
          <p className="mono-cap" style={{ marginBottom: 2 }}>{group.label}</p>
          <div style={{ marginBottom: 10 }}><Gloss>{group.labelEn}</Gloss></div>
          <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4 lg:divide-y-0 lg:border-0 lg:bg-transparent lg:overflow-visible">
            {group.rows.map((row) => (
              <li key={row.href}>
                <Link
                  href={row.href}
                  className="block h-full transition-colors active:bg-surface-sunk lg:rounded-lg lg:border lg:border-rule lg:bg-surface lg:hover:border-[color-mix(in_oklab,var(--zone)_50%,transparent)]"
                >
                  <ZoneRow
                    icon={row.icon}
                    title={row.label}
                    description={
                      <>
                        {row.description}
                        <Gloss>{row.descriptionEn}</Gloss>
                      </>
                    }
                    meta={row.meta}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
