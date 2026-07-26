import { describe, expect, it } from "vitest";
import { daysInWeek } from "@/lib/planDay";
import { sentencesForWeek } from "@/lib/weekSentences";

describe("sentencesForWeek", () => {
  it("returns every prompt in the week", () => {
    const dayNums = daysInWeek(1);
    const sentences = sentencesForWeek(dayNums);
    expect(sentences.length).toBe(dayNums.length * 5);
  });

  it("pairs each sentence with a prompt id and caption", () => {
    const sentences = sentencesForWeek(daysInWeek(1));
    for (const s of sentences) {
      expect(s.promptId).toBeTruthy();
      expect(s.spanish.trim()).not.toBe("");
      expect(s.english.trim()).not.toBe("");
      expect(s.caption).toMatch(/^Día \d+/);
    }
  });
});
