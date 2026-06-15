import Link from "next/link";
import { PageHeader, Wordmark } from "@/components/PageHeader";

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
  return (
    <div className="space-y-6 pb-28 lg:pb-8">
      <PageHeader title={<Wordmark>Lab de Pronunciación</Wordmark>} />

      <section className="space-y-2">
        <p className="text-display-italic text-[1.0625rem]">
          Train your ear.
        </p>
        <p className="text-gloss">
          Most learners think native speakers talk too fast. Often the real
          issue is simpler: they haven't learned what to listen for. The Lab
          teaches you to hear Spanish — not just read it.
        </p>
      </section>

      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.href}>
            <Link
              href={section.href}
              className="flex items-center gap-4 rounded-[14px] border px-5 py-4 transition-colors"
              style={{
                borderColor: section.flagship
                  ? "color-mix(in oklab, var(--accent) 40%, var(--rule))"
                  : "var(--rule)",
                background: section.flagship
                  ? "color-mix(in oklab, var(--accent) 6%, var(--surface))"
                  : "var(--surface)",
              }}
            >
              <span style={{ color: "var(--accent)", flexShrink: 0 }}>
                {section.icon}
              </span>
              <span className="flex-1 min-w-0">
                <span
                  className="font-display block leading-tight"
                  style={{ fontSize: "1.125rem", color: "var(--ink)" }}
                >
                  {section.label}
                </span>
                <span
                  className="block mt-0.5 text-sm leading-snug"
                  style={{ color: "var(--ink-mute)" }}
                >
                  {section.gloss}
                </span>
              </span>
              <span style={{ color: "var(--ink-mute)", flexShrink: 0 }} aria-hidden>
                ›
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
