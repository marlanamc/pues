import Link from "next/link";
import type { CSSProperties } from "react";
import { PageHeader, Wordmark } from "@/components/PageHeader";
import {
  FeaturedRow,
  Hue,
  Ledger,
  ZoneIntro,
  ZoneRow,
} from "@/components/ZoneList";

type LabSection = {
  href: string;
  label: string;
  gloss: string;
  icon: React.ReactNode;
  flagship?: boolean;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const sections: LabSection[] = [
  {
    href: "/lab/vocales",
    label: "Vocales",
    gloss: "Train your ear on A, E, I, O, U — the five sounds everything else is built on.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
        <path d="M12 4C8.5 4 6 6.5 6 10c0 2.5 1.5 4.5 3.5 5.5L12 20l2.5-4.5C16.5 14.5 18 12.5 18 10c0-3.5-2.5-6-6-6z" />
        <path d="M12 10v.01" strokeWidth={2.5} strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/lab/r-rr",
    label: "R y RR",
    gloss: 'The difference between "but" and "dog" is a single letter. Hear it.',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
        <path d="M4 12c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5-1.5 3.5-4 3.5" />
        <path d="M12 12c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5-1.5 3.5-4 3.5" />
        <path d="M4 12h4M12 12h4" />
      </svg>
    ),
  },
  {
    href: "/lab/acento",
    label: "Acento",
    gloss: "One accent mark shifts the stress — and changes the word completely.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
        <path d="M12 4v16M8 8l4-4 4 4" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
  {
    href: "/lab/j-g",
    label: "J y G",
    gloss: "Two letters, one sound — and it's not the sound you expect.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
        <path d="M6 8h6M9 8v8M15 8c2.5 0 4 1.5 4 4s-1.5 4-4 4h-1v-8" />
      </svg>
    ),
  },
  {
    href: "/lab/ll-y",
    label: "LL y Y",
    gloss: "Regional sounds that surprise every learner. Hear how they vary.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
        <path d="M5 5l7 8v7M19 5l-7 8" />
      </svg>
    ),
  },
  {
    href: "/lab/rapido",
    label: "Español Rápido",
    gloss: "Why natives sound fast — and what they're actually saying.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
        <path d="M13 4L6 13h6l-1 7 7-9h-6l1-7z" />
      </svg>
    ),
  },
  {
    href: "/lab/real",
    label: "Español Real",
    gloss: "How people actually talk. Side by side with the textbook version.",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
        <circle cx="12" cy="12" r="8" />
        <path d="M2 12h3M19 12h3M12 2v3M12 19v3" />
        <path d="M8 12a4 4 0 0 1 8 0" />
      </svg>
    ),
    flagship: true,
  },
];

export default function LabHubPage() {
  const ledgerSections = sections.filter((section) => !section.flagship);
  const flagship = sections.find((section) => section.flagship);

  return (
    <div
      className="space-y-6 pb-28 lg:pb-8"
      style={{ "--zone": "var(--zone-lab)" } as CSSProperties}
    >
      <PageHeader title={<Wordmark>Lab de Pronunciación</Wordmark>} />

      <ZoneIntro zoneLabel="Lab" role="El oído">
        Train your <Hue>ear</Hue>.
      </ZoneIntro>

      <Ledger>
        {ledgerSections.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className="block transition-colors active:bg-surface-sunk"
            >
              <ZoneRow
                icon={section.icon}
                title={section.label}
                description={section.gloss}
              />
            </Link>
          </li>
        ))}
      </Ledger>

      {flagship && (
        <Link href={flagship.href} className="block">
          <FeaturedRow
            icon={flagship.icon}
            title={flagship.label}
            description={flagship.gloss}
          />
        </Link>
      )}
    </div>
  );
}
