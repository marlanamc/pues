export type { WordHint, SpeakPrompt, SpeakDay, OpenTurn } from "./prompts/types";
import type { SpeakDay, SpeakPrompt, OpenTurn } from "./prompts/types";
import { veranoSpeakDays } from "./prompts/verano";
import { otonoSpeakDays } from "./prompts/otono";
import { inviernoSpeakDays } from "./prompts/invierno";
import { primaveraSpeakDays } from "./prompts/primavera";
import { totalDays } from "./frames";

/**
 * Pues — Speak-First prompts barrel ("El Cuaderno"). Concatenates each
 * season's day-aligned SpeakDay arrays (see content/CURRICULUM.md
 * convention 7). Index-aligned with content/frames.ts.
 */
export const speakDays: SpeakDay[] = [
  ...veranoSpeakDays,
  ...otonoSpeakDays,
  ...inviernoSpeakDays,
  ...primaveraSpeakDays,
];

/** Prompts per day (the daily session size). */
export const PROMPTS_PER_DAY = 5;

/** Primavera week 1 pilot — Sin guion authored for days 274–280 only. */
export const OPEN_TURN_PILOT_FIRST_DAY = 274;
export const OPEN_TURN_PILOT_LAST_DAY = 280;

/** Returns the unscripted turn when this day is in the week-1 pilot; otherwise undefined. */
export function openTurnForDayIndex(dayIndex: number): OpenTurn | undefined {
  const day = speakDayForIndex(dayIndex);
  if (day.day < OPEN_TURN_PILOT_FIRST_DAY || day.day > OPEN_TURN_PILOT_LAST_DAY) {
    return undefined;
  }
  return day.openTurn;
}

/** Best day index to offer Sin guion review: cursor day, or the latest finished pilot day. */
export function openTurnReviewDayIndex(
  currentDayIndex: number,
  daysDone: number[],
): number | null {
  if (openTurnForDayIndex(currentDayIndex)) return currentDayIndex;
  const done = new Set(daysDone);
  for (let i = currentDayIndex - 1; i >= 0; i--) {
    const day = speakDayForIndex(i);
    if (day.day < OPEN_TURN_PILOT_FIRST_DAY) break;
    if (done.has(day.day) && openTurnForDayIndex(i)) return i;
  }
  return null;
}

/** The SpeakDay for a given (already day-indexed) position, wrapping by total days. */
export function speakDayForIndex(currentDayIndex: number): SpeakDay {
  return speakDays[currentDayIndex % totalDays];
}

/** A single prompt within today's session. */
export function promptForSession(
  currentDayIndex: number,
  sessionIndex: number
): SpeakPrompt {
  const day = speakDayForIndex(currentDayIndex);
  return day.prompts[sessionIndex % day.prompts.length];
}

/** Parse a `why` note: returns segments, marking *asterisk* spans for italics. */
export function parseWhy(why: string): { text: string; italic: boolean }[] {
  const segments: { text: string; italic: boolean }[] = [];
  const re = /\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(why)) !== null) {
    if (m.index > last) {
      segments.push({ text: why.slice(last, m.index), italic: false });
    }
    segments.push({ text: m[1], italic: true });
    last = re.lastIndex;
  }
  if (last < why.length) {
    segments.push({ text: why.slice(last), italic: false });
  }
  return segments;
}
