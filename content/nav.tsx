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

const IconSemana = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
  </svg>
);

const IconMas = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <circle cx="6" cy="12" r="2" />
    <circle cx="12" cy="12" r="2" />
    <circle cx="18" cy="12" r="2" />
  </svg>
);

/** Game routes live under /practice/* — excludes sentence-former (Más práctica). */
const gamePaths = ["/practice/games", ...games.map((g) => g.href)];
const isGamePath = (p: string) => gamePaths.some((g) => p.startsWith(g));
const isSentenceFormerPath = (p: string) => p.startsWith("/practice/sentence-former");
const isMasPracticaPath = (p: string) =>
  isSentenceFormerPath(p) || p.startsWith("/read");

const isHoyPath = (p: string) =>
  p === "/" ||
  p.startsWith("/flow") ||
  p.startsWith("/cuaderno") ||
  p.startsWith("/thoughts");

const isSemanaPath = (p: string) =>
  p.startsWith("/semana") || p.startsWith("/camino") || p.startsWith("/progress");

const isExtrasPath = (p: string) =>
  p.startsWith("/mas") ||
  p.startsWith("/guides") ||
  p.startsWith("/situations") ||
  p.startsWith("/lab") ||
  isGamePath(p) ||
  isMasPracticaPath(p);

/** Mobile bottom tabs — three zones: Ritual, Semana, Extras. */
export const navItems: NavItem[] = [
  {
    href: "/",
    label: "Hoy",
    match: isHoyPath,
    icon: IconToday,
    zone: "var(--accent)",
  },
  {
    href: "/semana",
    label: "La semana",
    match: isSemanaPath,
    icon: IconSemana,
    zone: "var(--accent)",
  },
  {
    href: "/mas",
    label: "Más",
    match: isExtrasPath,
    icon: IconMas,
    zone: "var(--zone-practica)",
  },
];
