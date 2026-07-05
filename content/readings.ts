export type { VocabWord, DialogueLine, ReadingDay } from "./readings/types";
import type { ReadingDay } from "./readings/types";
import { veranoReadingDays } from "./readings/verano";
import { otonoReadingDays } from "./readings/otono";

/**
 * La Lectura barrel. Concatenates each season's day-aligned ReadingDay
 * arrays (see content/CURRICULUM.md convention 7). Verano is a standalone
 * bedtime extra; from Otoño on, readings are the season's input backbone —
 * serialized weekly mini-stories coupled to that day's speak prompts.
 */
export const readingDays: ReadingDay[] = [...veranoReadingDays, ...otonoReadingDays];

export function readingForIndex(i: number): ReadingDay {
  return readingDays[i % readingDays.length];
}

/** Looks up a reading by its 1-indexed curriculum day number. */
export function readingForDay(day: number): ReadingDay {
  const idx = (((day - 1) % readingDays.length) + readingDays.length) % readingDays.length;
  return readingDays[idx];
}
