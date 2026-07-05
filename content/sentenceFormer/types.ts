/**
 * Sentence Former — a quick-fire completion drill for Práctica.
 *
 * The learner sees a stem from content/frames.ts (e.g. "Quiero…") and has to
 * finish it fast, either aloud (Hablar) or typed (Escribir). This file only
 * supplies the completion banks used for the hint reveal and for picking a
 * random target completion — it doesn't grade anything, since there's no
 * completion-checking yet. Stems here must match a Frame.stem from the same
 * day in frames.ts, but this file isn't part of the frames/prompts coupling
 * enforced by content/content.test.ts.
 *
 * Verano batches 1–5: days 1–91 (full summer). Stems must match frames.ts for the
 * same day (enforced by content/content.test.ts).
 */

export type SentenceFormerCompletion = {
  /** The Spanish completion, lowercase, appended after the stem. */
  es: string;
  /** English gloss, shown in the hint reveal. */
  en: string;
  category: "food" | "time" | "activity" | "opinion" | "other";
};

export type SentenceFormerHint = {
  es: string;
  en: string;
};

/**
 * Hints grouped by the question they answer. Not every stem takes all three —
 * e.g. an opinion stem like "Creo que…" rarely has a natural "cómo" (how)
 * answer, so that group is just omitted rather than forced.
 */
export type SentenceFormerHints = {
  /** ¿Qué? — what (a thing, activity, or idea). */
  que?: SentenceFormerHint[];
  /** ¿Cómo? — how (manner). */
  como?: SentenceFormerHint[];
  /** ¿Cuándo? — when (time). */
  cuando?: SentenceFormerHint[];
};

export type SentenceFormerStem = {
  /** Must match a Frame.stem in frames.ts for the same day. */
  stem: string;
  english: string;
  /** Optional — powers the ¿Qué? / ¿Cómo? / ¿Cuándo? hint chips. */
  hints?: SentenceFormerHints;
  completions: SentenceFormerCompletion[];
};

export type SentenceFormerDay = {
  day: number;
  theme: string;
  stems: SentenceFormerStem[];
};
