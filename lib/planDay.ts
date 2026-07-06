import { TEMPORADAS, type Temporada } from "@/content/temporadas";

export const DAYS_PER_SEASON = 91;

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
