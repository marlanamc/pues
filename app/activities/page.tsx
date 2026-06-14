"use client";

import Link from "next/link";
import { useThoughts } from "@/hooks/useThoughts";

type ActivityCard = {
  href: string;
  title: string;
  subtitle: string;
  description: string;
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
  <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden {...stroke}>
    <path d="M7 5h15a3 3 0 0 1 3 3v19l-4-3-4 3-4-3-4 3V8a3 3 0 0 1 3-3Z" />
    <path d="M11 11h10M11 15h10M11 19h6" />
  </svg>
);

const IconCognates = (
  <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden {...stroke}>
    <path d="M5 22V10a2 2 0 0 1 2-2h7v18H7a2 2 0 0 1-2-2Z" />
    <path d="M27 22V10a2 2 0 0 0-2-2h-7v18h7a2 2 0 0 0 2-2Z" />
    <path d="M14 14h-3M14 18h-3M21 14h3M21 18h3" />
  </svg>
);

const IconAccent = (
  <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden {...stroke}>
    <path d="M9 18v-4a7 7 0 0 1 14 0v4" />
    <path d="M7 18h4v5H7zM21 18h4v5h-4z" />
    <path d="M13 25c1.5 1 4.5 1 6 0M16 5v3M22 7l-2 2M10 7l2 2" />
  </svg>
);

export default function ActivitiesHubPage() {
  const { thoughts, hydrated } = useThoughts();

  const cards: ActivityCard[] = [
    {
      href: "/activities/thoughts",
      title: "My Thoughts",
      subtitle: "Your sentence journal",
      description:
        "Everything you've written, kept in one place. Becomes more valuable over time.",
      meta: hydrated
        ? `${thoughts.length} ${thoughts.length === 1 ? "thought" : "thoughts"} saved`
        : "",
      icon: IconJournal,
    },
    {
      href: "/activities/cognates",
      title: "Cognates",
      subtitle: "Free vocabulary",
      description:
        "Patterns that unlock hundreds of words you almost already know — plus a few that look familiar but mean something else.",
      icon: IconCognates,
    },
    {
      href: "/activities/accent",
      title: "Accent",
      subtitle: "Latin American pronunciation",
      description:
        "Short listening and shadowing drills for cleaner vowels, c/z/s, r sounds, soft d, and ll/y.",
      icon: IconAccent,
    },
  ];

  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <span className="w-3" aria-hidden />
        <p className="text-caption text-ink-mute">Activities</p>
        <span className="w-3" aria-hidden />
      </header>

      <div className="space-y-2">
        <h1 className="text-display-lg text-ink">Pick something to do.</h1>
        <p className="text-gloss">
          Different ways to keep practicing between sessions.
        </p>
      </div>

      <ul className="space-y-4">
        {cards.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="block rounded-lg border border-rule bg-surface p-6 transition-colors active:bg-surface-sunk active:border-accent/60"
            >
              <div className="flex items-start gap-4">
                <span
                  className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-full border border-rule"
                  style={{ color: "var(--accent)" }}
                >
                  {c.icon}
                </span>
                <div className="flex-1 min-w-0 space-y-1.5">
                  <p className="font-display text-[1.375rem] text-ink leading-tight">
                    {c.title}
                  </p>
                  <p className="text-caption text-ink-mute">{c.subtitle}</p>
                  <p className="text-sm text-ink-soft leading-relaxed pt-1">
                    {c.description}
                  </p>
                  {c.meta && (
                    <p className="text-caption text-accent pt-2">{c.meta}</p>
                  )}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <div className="rounded-lg border border-dashed border-rule p-6 text-center">
        <p className="text-caption text-ink-mute">More activities coming.</p>
      </div>
    </div>
  );
}
