import { TEMPORADAS, type Temporada } from "@/content/temporadas";

export const DAYS_PER_SEASON = 91;
export const DAYS_PER_WEEK = 7;

export type PlanContext = {
  seasonIdx: number;
  dayInSeason: number;
  weekNum: number;
  temporada: Temporada;
};

/** Curriculum day (1-based) → temporada, week, and week theme. */
export function planContextFromDay(dayNum: number): PlanContext {
  const seasonIdx = Math.floor((dayNum - 1) / DAYS_PER_SEASON) % TEMPORADAS.length;
  const dayInSeason = ((dayNum - 1) % DAYS_PER_SEASON) + 1;
  const weekNum = Math.min(13, Math.ceil(dayInSeason / 7));
  return {
    seasonIdx,
    dayInSeason,
    weekNum,
    temporada: TEMPORADAS[seasonIdx],
  };
}

/**
 * Global curriculum week (1-based) for a 1-based curriculum day.
 *
 * Unlike `planContextFromDay().weekNum` — which is the week *within* a season
 * and caps at 13 — this keeps counting across season boundaries, so it can be
 * used as a stable key for "which week has been primed".
 */
export function weekFromDay(dayNum: number): number {
  return Math.ceil(dayNum / DAYS_PER_WEEK);
}

/** The 7 curriculum day numbers (1-based) belonging to a global week. */
export function daysInWeek(weekNum: number): number[] {
  const first = (weekNum - 1) * DAYS_PER_WEEK + 1;
  return Array.from({ length: DAYS_PER_WEEK }, (_, i) => first + i);
}
