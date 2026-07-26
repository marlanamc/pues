import { frameDays } from "@/content/frames";
import { speakDays } from "@/content/prompts";

export type WeekStem = {
  promptId: string;
  stem: string;
  english: string;
  day: number;
};

/** Unique stems for the week, first occurrence wins — repaso repeats aren't replayed. */
export function stemsForWeek(dayNums: number[]): WeekStem[] {
  const seen = new Set<string>();
  const stems: WeekStem[] = [];
  for (const d of dayNums) {
    const frame = frameDays[d - 1];
    const speak = speakDays[d - 1];
    frame.frames.forEach((f, i) => {
      if (seen.has(f.stem)) return;
      seen.add(f.stem);
      stems.push({
        promptId: speak.prompts[i].id,
        stem: f.stem,
        english: f.english,
        day: d,
      });
    });
  }
  return stems;
}
