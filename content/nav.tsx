import type { ReactNode } from "react";

export type NavItem = {
  href: string;
  label: string;
  match: (path: string) => boolean;
  icon: ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const IconToday = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M4 11.5 12 5l8 6.5" />
    <path d="M5.5 10.5V19h13v-8.5" />
    <path d="M10 19v-5h4v5" />
  </svg>
);

const IconPractice = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2Z" />
    <path d="M9 8h6M9 12h6" />
  </svg>
);

const IconSituations = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </svg>
);

const IconGuides = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <circle cx="8" cy="8" r="3.5" />
    <circle cx="16" cy="16" r="3.5" />
    <path d="M12.5 7.5h6M15.5 4.5v6M5 14h6M5 17.5h4" />
  </svg>
);

const IconLab = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M2 12h2M6 8h2M6 16h2M10 5h2M10 19h2M14 8h2M14 16h2M18 12h2" />
  </svg>
);

export const navItems: NavItem[] = [
  { href: "/", label: "Hoy", match: (p) => p === "/", icon: IconToday },
  {
    href: "/practice",
    label: "Práctica",
    match: (p) =>
      p.startsWith("/practice") || p.startsWith("/thoughts"),
    icon: IconPractice,
  },
  {
    href: "/situations",
    label: "Lugares",
    match: (p) => p.startsWith("/situations"),
    icon: IconSituations,
  },
  {
    href: "/guides",
    label: "Guías",
    match: (p) => p.startsWith("/guides"),
    icon: IconGuides,
  },
  {
    href: "/lab",
    label: "Lab",
    match: (p) => p.startsWith("/lab"),
    icon: IconLab,
  },
];
