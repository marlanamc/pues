export type {
  SentenceFormerCompletion,
  SentenceFormerHint,
  SentenceFormerHints,
  SentenceFormerStem,
  SentenceFormerDay,
} from "./sentenceFormer/types";
import type { SentenceFormerDay } from "./sentenceFormer/types";
import { veranoSentenceFormerDays } from "./sentenceFormer/verano";
import { otonoSentenceFormerDays } from "./sentenceFormer/otono";

/**
 * Sentence Former — quick-fire completion drill banks, barrel. Concatenates
 * each season's day-aligned banks (see content/CURRICULUM.md convention 7).
 * Stems must match a Frame.stem from the same day in content/frames.ts.
 */
export const sentenceFormerDays: SentenceFormerDay[] = [
  ...veranoSentenceFormerDays,
  ...otonoSentenceFormerDays,
];

export function sentenceFormerDayByNumber(day: number): SentenceFormerDay | undefined {
  return sentenceFormerDays.find((d) => d.day === day);
}
