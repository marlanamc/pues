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
  label?: string;
  labelEn?: string;
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

const IconFormer = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M13 2 4 14h7l-1 8 10-14h-7l0-6Z" />
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
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
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

const IconLugares = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" />
    <circle cx="12" cy="11" r="2.5" />
  </svg>
);

const IconOido = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M6 8.5a6 6 0 1 1 12 0v4.5a3.5 3.5 0 0 1-7 0" />
    <path d="M9 18a3 3 0 0 0 6 0" />
  </svg>
);

const IconGuias = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M12 6.5C10 5 6.8 4.8 4 5.6V19c2.8-.8 6-.6 8 .9" />
    <path d="M12 6.5C14 5 17.2 4.8 20 5.6V19c-2.8-.8-6-.6-8 .9" />
    <path d="M12 6.5v13.4" />
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

/** Desktop left rail — three labeled sections. */
export const sidebarSections: NavSection[] = [
  {
    label: "Ritual",
    labelEn: "Daily ritual",
    items: [
      {
        href: "/",
        label: "Hoy",
        match: (p) => p === "/" || p.startsWith("/flow"),
        icon: IconToday,
        zone: "var(--accent)",
      },
      {
        href: "/practice/sentence-former",
        label: "Formar la frase",
        match: isSentenceFormerPath,
        icon: IconFormer,
        zone: "var(--zone-lugares)",
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
    label: "La semana",
    labelEn: "The week",
    items: [
      {
        href: "/semana",
        label: "La semana",
        match: (p) => p.startsWith("/semana"),
        icon: IconSemana,
        zone: "var(--accent)",
      },
      {
        href: "/camino",
        label: "Camino",
        match: (p) => p.startsWith("/camino") || p.startsWith("/progress"),
        icon: IconCamino,
        zone: "var(--accent)",
      },
    ],
  },
  {
    label: "Extras",
    labelEn: "Optional companions",
    items: [
      {
        href: "/practice/games",
        label: "Juegos",
        match: isGamePath,
        icon: IconJuegos,
        zone: "var(--zone-lugares)",
      },
      {
        href: "/situations",
        label: "Lugares",
        match: (p) => p.startsWith("/situations"),
        icon: IconLugares,
        zone: "var(--zone-lugares)",
      },
      {
        href: "/lab",
        label: "El oído",
        match: (p) => p.startsWith("/lab"),
        icon: IconOido,
        zone: "var(--zone-lab)",
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
