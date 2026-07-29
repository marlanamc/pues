/**
 * The four-season journey ("El Camino"). Seasons are calendar-based; each
 * accent is the same hue across every palette so the journey reads as one
 * product, but the lightness switches dark-set/light-set via the
 * --season-* custom properties in globals.css (same pattern as --zone-*) so
 * every temporada clears 4.5:1 in both the five dark palettes and Papel/Niebla.
 */

export type Season = {
  /** Temporada number, 1–4. */
  index: 1 | 2 | 3 | 4;
  key: "verano" | "otono" | "invierno" | "primavera";
  label: string;
  /** Theme-aware seasonal accent — resolves via --season-* in globals.css. */
  color: string;
  /** Month range label, e.g. "Jul – Sep". */
  range: string;
};

export const SEASONS: Season[] = [
  { index: 1, key: "verano", label: "Verano", color: "var(--season-verano)", range: "Jul – Sep" },
  { index: 2, key: "otono", label: "Otoño", color: "var(--season-otono)", range: "Oct – Dic" },
  { index: 3, key: "invierno", label: "Invierno", color: "var(--season-invierno)", range: "Ene – Mar" },
  { index: 4, key: "primavera", label: "Primavera", color: "var(--season-primavera)", range: "Abr – Jun" },
];

/** Which temporada a calendar date falls in. */
export function seasonForDate(d: Date = new Date()): Season {
  const m = d.getMonth(); // 0 = Jan
  if (m >= 6 && m <= 8) return SEASONS[0]; // Jul–Sep
  if (m >= 9 && m <= 11) return SEASONS[1]; // Oct–Dec
  if (m <= 2) return SEASONS[2]; // Jan–Mar
  return SEASONS[3]; // Apr–Jun
}

/** Fraction of the calendar year elapsed (0–1) — drives the "el año" track. */
export function yearFraction(d: Date = new Date()): number {
  const start = new Date(d.getFullYear(), 0, 1);
  const days = (d.getTime() - start.getTime()) / 86_400_000;
  return Math.min(1, Math.max(0, days / 365));
}
