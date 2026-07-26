import { describe, expect, it } from "vitest";
import { daysInWeek } from "@/lib/planDay";
import { stemsForWeek } from "@/lib/weekStems";

describe("stemsForWeek", () => {
  it("returns unique stems for a week (repaso repeats deduped)", () => {
    const dayNums = daysInWeek(1);
    const stems = stemsForWeek(dayNums);
    const texts = stems.map((s) => s.stem);
    expect(stems.length).toBeGreaterThan(0);
    expect(texts.length).toBe(new Set(texts).size);
    expect(stems.length).toBeLessThanOrEqual(dayNums.length * 5);
  });

  it("pairs each stem with english and a prompt id", () => {
    const stems = stemsForWeek(daysInWeek(1));
    for (const s of stems) {
      expect(s.promptId).toBeTruthy();
      expect(s.stem.trim()).not.toBe("");
      expect(s.english.trim()).not.toBe("");
    }
  });
});
