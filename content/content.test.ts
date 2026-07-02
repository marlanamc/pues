import { describe, it, expect } from "vitest";
import { frameDays, totalDays } from "@/content/frames";
import { speakDays, PROMPTS_PER_DAY } from "@/content/prompts";

/**
 * Shape guard for the coupled content files. frames.ts and prompts.ts are
 * index-aligned: the same currentDayIndex reads both (app/progress vs. the
 * daily flow), and prompt.spanish must be a verbatim frame example so the
 * pre-generated audio pipeline covers prompt playback.
 */

describe("frames.ts / prompts.ts coupling", () => {
  it("has the same number of days in both files", () => {
    expect(speakDays.length).toBe(frameDays.length);
    expect(totalDays).toBe(frameDays.length);
  });

  it("numbers days 1..N sequentially and identically at each index", () => {
    frameDays.forEach((fd, i) => {
      expect(fd.day).toBe(i + 1);
      expect(speakDays[i].day).toBe(i + 1);
    });
  });

  it("has 5 frames and 5 prompts per day", () => {
    frameDays.forEach((fd) => {
      expect(fd.frames, `day ${fd.day} frames`).toHaveLength(PROMPTS_PER_DAY);
    });
    speakDays.forEach((sd) => {
      expect(sd.prompts, `day ${sd.day} prompts`).toHaveLength(PROMPTS_PER_DAY);
    });
  });

  it("every prompt.spanish is a verbatim example of its day's matching frame", () => {
    speakDays.forEach((sd, i) => {
      const fd = frameDays[i];
      sd.prompts.forEach((p) => {
        const frame = fd.frames.find((f) => f.stem === p.frameStem);
        expect(frame, `day ${sd.day} ${p.id}: no frame with stem "${p.frameStem}"`).toBeDefined();
        expect(
          frame!.examples,
          `day ${sd.day} ${p.id}: spanish not found in frame examples`
        ).toContain(p.spanish);
      });
    });
  });
});

describe("prompt integrity", () => {
  it("has globally unique prompt ids", () => {
    const ids = speakDays.flatMap((sd) => sd.prompts.map((p) => p.id));
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("word hint en-keys are lowercase and unique within each prompt", () => {
    speakDays.forEach((sd) => {
      sd.prompts.forEach((p) => {
        if (!p.wordHints) return;
        const keys = p.wordHints.map((h) => h.en);
        expect(new Set(keys).size, `day ${sd.day} ${p.id}: duplicate hint keys`).toBe(keys.length);
        keys.forEach((k) => {
          expect(k, `day ${sd.day} ${p.id}: hint key "${k}" must be lowercase`).toBe(
            k.toLowerCase()
          );
        });
      });
    });
  });
});

describe("frame integrity", () => {
  it("every frame has at least one scenario and one example", () => {
    frameDays.forEach((fd) => {
      fd.frames.forEach((f) => {
        expect(f.scenarios.length, `day ${fd.day} "${f.stem}" scenarios`).toBeGreaterThan(0);
        expect(f.examples.length, `day ${fd.day} "${f.stem}" examples`).toBeGreaterThan(0);
      });
    });
  });
});
