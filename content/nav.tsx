import type { ReactNode } from "react";
import { games } from "./games";

export type NavItem = {
  href: string;
  label: string;
  match: (path: string) => boolean;
  icon: ReactNode;
  /** Color of the tab when active — its own zone hue (Hoy = brand accent). */
  zone: string;
};

export type NavSection = {
  items: NavItem[];
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

const IconFormer = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />
  </svg>
);

const IconRead = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3 7 7 0 1 0 21 14.5Z" />
  </svg>
);

const IconCamino = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="6" r="2.5" />
    <path d="M8.5 16.5 15.5 8.5" />
  </svg>
);

const IconCuaderno = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4z" />
    <path d="M8 8h8M8 12h6" />
  </svg>
);

const IconJuegos = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <rect x="4.5" y="4.5" width="15" height="15" rx="3.5" />
    <circle cx="9" cy="9" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    <circle cx="15" cy="15" r="1.3" fill="currentColor" stroke="none" />
  </svg>
);

const IconGuias = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M12 6.5C10 5 6.8 4.8 4 5.6V19c2.8-.8 6-.6 8 .9" />
    <path d="M12 6.5C14 5 17.2 4.8 20 5.6V19c-2.8-.8-6-.6-8 .9" />
    <path d="M12 6.5v13.4" />
  </svg>
);

/**
 * Game routes live under /practice/* but belong to the Juegos tab, so the
 * Práctica match must exclude them — each tab's match runs independently and
 * two tabs must never light at once.
 */
const gamePaths = ["/practice/games", ...games.map((g) => g.href)];
const isGamePath = (p: string) => gamePaths.some((g) => p.startsWith(g));
const isSentenceFormerPath = (p: string) => p.startsWith("/practice/sentence-former");

const isPracticeHubPath = (p: string) =>
  (p.startsWith("/practice") && !isGamePath(p) && !isSentenceFormerPath(p)) ||
  p.startsWith("/situations") ||
  p.startsWith("/lab");

/** Mobile bottom tabs — four doors, unchanged. */
export const navItems: NavItem[] = [
  {
    href: "/",
    label: "Hoy",
    // Camino and Cuaderno aren't tabs on mobile; keep Hoy lit when you're there.
    match: (p) =>
      p === "/" ||
      p.startsWith("/flow") ||
      p.startsWith("/camino") ||
      p.startsWith("/progress") ||
      p.startsWith("/cuaderno") ||
      p.startsWith("/thoughts"),
    icon: IconToday,
    zone: "var(--accent)",
  },
  {
    href: "/practice",
    label: "Práctica",
    match: (p) =>
      isPracticeHubPath(p) ||
      p.startsWith("/read"),
    icon: IconPractice,
    zone: "var(--zone-practica)",
  },
  {
    href: "/practice/games",
    label: "Juegos",
    match: isGamePath,
    icon: IconJuegos,
    zone: "var(--zone-lugares)",
  },
  {
    href: "/guides",
    label: "Guías",
    match: (p) => p.startsWith("/guides"),
    icon: IconGuias,
    zone: "var(--zone-guias)",
  },
];

/** Desktop left rail — every main page gets its own door. */
export const sidebarSections: NavSection[] = [
  {
    items: [
      {
        href: "/",
        label: "Hoy",
        match: (p) => p === "/" || p.startsWith("/flow"),
        icon: IconToday,
        zone: "var(--accent)",
      },
      {
        href: "/practice",
        label: "Práctica",
        match: isPracticeHubPath,
        icon: IconPractice,
        zone: "var(--zone-practica)",
      },
      {
        href: "/practice/sentence-former",
        label: "Formar la frase",
        match: isSentenceFormerPath,
        icon: IconFormer,
        zone: "var(--zone-lugares)",
      },
      {
        href: "/read",
        label: "La lectura",
        match: (p) => p.startsWith("/read"),
        icon: IconRead,
        zone: "var(--accent)",
      },
    ],
  },
  {
    items: [
      {
        href: "/camino",
        label: "Camino",
        match: (p) => p.startsWith("/camino") || p.startsWith("/progress"),
        icon: IconCamino,
        zone: "var(--accent)",
      },
      {
        href: "/cuaderno",
        label: "Cuaderno",
        match: (p) => p.startsWith("/cuaderno") || p.startsWith("/thoughts"),
        icon: IconCuaderno,
        zone: "var(--zone-guias)",
      },
    ],
  },
  {
    items: [
      {
        href: "/practice/games",
        label: "Juegos",
        match: isGamePath,
        icon: IconJuegos,
        zone: "var(--zone-lugares)",
      },
      {
        href: "/guides",
        label: "Guías",
        match: (p) => p.startsWith("/guides"),
        icon: IconGuias,
        zone: "var(--zone-guias)",
      },
    ],
  },
];

export const sidebarNavItems = sidebarSections.flatMap((s) => s.items);
