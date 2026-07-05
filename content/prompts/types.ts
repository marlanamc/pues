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
};
