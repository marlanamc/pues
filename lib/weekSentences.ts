import { speakDays } from "@/content/prompts";

export type WeekSentence = {
  promptId: string;
  spanish: string;
  english: string;
  caption: string;
};

/** Every model sentence in the week, in day order. */
export function sentencesForWeek(dayNums: number[]): WeekSentence[] {
  const sentences: WeekSentence[] = [];
  for (const d of dayNums) {
    const speak = speakDays[d - 1];
    speak.prompts.forEach((p) => {
      sentences.push({
        promptId: p.id,
        spanish: p.spanish,
        english: p.english,
        caption: `Día ${String(d).padStart(2, "0")} · ${speak.themeEs}`,
      });
    });
  }
  return sentences;
}
