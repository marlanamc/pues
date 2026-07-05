/**
 * Pues — La Lectura: a daily reading before bed.
 *
 * Each day has 4–5 vocab words pulled from the dialogue itself, then a short
 * natural conversation (6–8 lines) in Latin American Spanish.
 *
 * Verano: purely receptive, low-energy evening extra, standalone per day.
 * Otoño+: the input backbone — each week serializes one mini-story across
 * its 6 new days (`storyTitle` + `part`/`partsTotal`), with a fresh recap
 * dialogue on the week's repaso day (`isRecap`). The day's speak prompts
 * retell/react to that day's installment.
 */

export type VocabWord = {
  es: string;
  en: string;
  example: string;
};

export type DialogueLine = {
  speaker: "A" | "B";
  es: string;
  en: string;
};

export type ReadingDay = {
  day: number;
  themeEs: string;
  vocab: VocabWord[];
  dialogue: {
    title: string;
    situation: string;
    lines: DialogueLine[];
  };
  /** Which serialized weekly story this installment belongs to, e.g. "Naty se muda". */
  storyTitle?: string;
  /** 1-based installment number within the story's arc. Absent on recap days. */
  part?: number;
  /** Total installments in the story's arc, paired with `part`. */
  partsTotal?: number;
  /** True for a week's repaso-day reading: a fresh recap, not a numbered installment. */
  isRecap?: boolean;
};
