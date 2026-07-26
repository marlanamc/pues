export type WordHint = {
  /** Lowercase English lookup key, e.g. "worksheets" */
  en: string;
  /** Spanish gloss shown on tap, e.g. "las hojas" */
  es: string;
};

export type SpeakPrompt = {
  id: string;
  frameStem: string;
  /** The English thought the user must say out loud in Spanish. */
  english: string;
  /** One natural model answer in Spanish. */
  spanish: string;
  /** A short Spanish situation label, e.g. "En el café". */
  situationLabel: string;
  /** A soft note on why; *asterisks* mark words to italicize. */
  why: string;
  /** Optional per-prompt word hints for the English prompt. */
  wordHints?: WordHint[];
};

/**
 * The unscripted turn at the end of a day — "Una más, sin guion."
 *
 * Everything else in the app hands you the thought in English and asks you to
 * carry it into Spanish. This does not. You hear one line, cold, and you answer
 * it. There is no right answer and nothing is scored; the only thing measured
 * is how long the silence before you start lasts, and that shrinking over
 * months is the real progress metric.
 *
 * The stimulus is deliberately not always a question — it matches whatever the
 * week is training. A reactions week gives you something to react to; a
 * digging week gives you one flat sentence to interrogate.
 */
export type OpenTurn = {
  /** The stimulus. Heard, not read — this is played, not shown, by default. */
  es: string;
  /** English gloss, revealed only on tap and only if she asks for it. */
  en: string;
  /** Who says it. Picks the voice and sets the register (Yesenia uses usted). */
  speaker: "camila" | "rocio" | "yesenia" | "mama" | "tia" | "directora";
  /** A nudge toward the week's tools. Never a script, never a sentence to say. */
  hint?: string;
  /**
   * What the other person says NEXT — revealed after she records, written to
   * work against any reasonable answer. Deliberately not a model answer: the
   * moment this becomes "the right response," the translation loop is back.
   */
  sigue: string;
  sigueEn: string;
};

export type SpeakDay = {
  day: number;
  /** Spanish theme label for the day cap, e.g. "La vida diaria". */
  themeEs: string;
  /** English translation of the theme label. */
  themeEn: string;
  /**
   * Short imperative that tells the user exactly what to talk about today,
   * e.g. "Habla sobre lo que te gusta." Shown on Hoy + Práctica. Falls back
   * to `line` when absent.
   */
  missionEs?: string;
  /** Plain-English translation of `missionEs`, shown under it so the task is always understood. */
  missionEn?: string;
  /** One warm Spanish sentence shown on Home. */
  line: string;
  /** English translation of the motivational line. */
  lineEn: string;
  prompts: SpeakPrompt[];
  /**
   * Optional sixth beat, after the five: one line to answer cold, no English.
   * Optional on purpose — days without it behave exactly as before, so this
   * can be authored a week at a time. Piloted on Primavera week 1.
   */
  openTurn?: OpenTurn;
};
