export type { WordHint, SpeakPrompt, SpeakDay } from "./prompts/types";
import type { SpeakDay, SpeakPrompt } from "./prompts/types";
import { veranoSpeakDays } from "./prompts/verano";
import { otonoSpeakDays } from "./prompts/otono";
import { totalDays } from "./frames";

/**
 * Pues — Speak-First prompts barrel ("El Cuaderno"). Concatenates each
 * season's day-aligned SpeakDay arrays (see content/CURRICULUM.md
 * convention 7). Index-aligned with content/frames.ts.
 */
export const speakDays: SpeakDay[] = [...veranoSpeakDays, ...otonoSpeakDays];

/** Prompts per day (the daily session size). */
export const PROMPTS_PER_DAY = 5;

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
