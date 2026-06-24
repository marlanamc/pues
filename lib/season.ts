/**
 * The four-season journey ("El Camino"). Seasons are calendar-based and their
 * accent colors are fixed (theme-independent) so every palette reads as the
 * same product — see design_handoff_pues/README.md §"Seasonal accent colors".
 */

export type Season = {
  /** Temporada number, 1–4. */
  index: 1 | 2 | 3 | 4;
  key: "verano" | "otono" | "invierno" | "primavera";
  label: string;
  /** Fixed seasonal accent (do NOT tokenize). */
  color: string;
  /** Month range label, e.g. "Jun – Ago". */
  range: string;
};

export const SEASONS: Season[] = [
  { index: 1, key: "verano", label: "Verano", color: "oklch(0.77 0.105 66)", range: "Jun – Ago" },
  { index: 2, key: "otono", label: "Otoño", color: "oklch(0.70 0.12 48)", range: "Sep – Nov" },
  { index: 3, key: "invierno", label: "Invierno", color: "oklch(0.62 0.125 28)", range: "Dic – Feb" },
  { index: 4, key: "primavera", label: "Primavera", color: "oklch(0.55 0.105 12)", range: "Mar – May" },
];

/** Which temporada a calendar date falls in. */
export function seasonForDate(d: Date = new Date()): Season {
  const m = d.getMonth(); // 0 = Jan
  if (m >= 5 && m <= 7) return SEASONS[0]; // Jun–Aug
  if (m >= 8 && m <= 10) return SEASONS[1]; // Sep–Nov
  if (m === 11 || m <= 1) return SEASONS[2]; // Dec–Feb
  return SEASONS[3]; // Mar–May
}

/** Fraction of the calendar year elapsed (0–1) — drives the "el año" track. */
export function yearFraction(d: Date = new Date()): number {
  const start = new Date(d.getFullYear(), 0, 1);
  const days = (d.getTime() - start.getTime()) / 86_400_000;
  return Math.min(1, Math.max(0, days / 365));
}
