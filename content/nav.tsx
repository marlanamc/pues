import type { ReactNode } from "react";

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

const IconCamino = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M5 19c3 0 3-5 7-5s4 5 7 5" />
    <path d="M5 9c3 0 3-4 7-4s4 4 7 4" />
    <circle cx="8" cy="14" r="0.9" fill="currentColor" stroke="none" />
    <circle cx="16" cy="10" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

const IconPractice = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2Z" />
    <path d="M9 8h6M9 12h6" />
  </svg>
);

const IconCuaderno = (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden {...stroke}>
    <rect x="5" y="4" width="13" height="16" rx="1.5" />
    <path d="M8 4v16" />
    <path d="M11 9h4" />
    <path d="M11 13h4" />
  </svg>
);

export const navItems: NavItem[] = [
  {
    href: "/",
    label: "Hoy",
    match: (p) => p === "/",
    icon: IconToday,
    zone: "var(--accent)",
  },
  {
    href: "/camino",
    label: "Camino",
    match: (p) => p.startsWith("/camino") || p.startsWith("/progress"),
    icon: IconCamino,
    zone: "var(--zone-lugares)",
  },
  {
    href: "/practice",
    label: "Práctica",
    match: (p) =>
      p.startsWith("/practice") || p.startsWith("/situations"),
    icon: IconPractice,
    zone: "var(--zone-practica)",
  },
  {
    href: "/cuaderno",
    label: "Cuaderno",
    match: (p) =>
      p.startsWith("/cuaderno") ||
      p.startsWith("/thoughts") ||
      p.startsWith("/guides"),
    icon: IconCuaderno,
    zone: "var(--zone-guias)",
  },
];
