import { describe, it, expect } from "vitest";
import { frameDays, totalDays } from "@/content/frames";
import { speakDays, PROMPTS_PER_DAY } from "@/content/prompts";
import { sentenceFormerDays } from "@/content/sentenceFormer";
import { readingDays as laLecturaDays } from "@/content/readings";

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

describe("sentenceFormer.ts / frames.ts coupling", () => {
  it("has no duplicate SentenceFormerDay numbers", () => {
    const days = sentenceFormerDays.map((d) => d.day);
    expect(new Set(days).size).toBe(days.length);
  });

  it("every SentenceFormerDay exists in frames and stems match", () => {
    sentenceFormerDays.forEach((sfd) => {
      const fd = frameDays.find((f) => f.day === sfd.day);
      expect(fd, `sentenceFormer day ${sfd.day}: no matching frameDay`).toBeDefined();

      expect(sfd.stems, `day ${sfd.day} stems`).toHaveLength(PROMPTS_PER_DAY);
      sfd.stems.forEach((stem) => {
        const frame = fd!.frames.find((f) => f.stem === stem.stem);
        expect(frame, `day ${sfd.day}: no frame with stem "${stem.stem}"`).toBeDefined();
      });
    });
  });

  it("every completion es string starts lowercase (appended after the stem)", () => {
    sentenceFormerDays.forEach((sfd) => {
      sfd.stems.forEach((stem) => {
        stem.completions.forEach((c) => {
          expect(
            c.es.charAt(0),
            `day ${sfd.day} "${stem.stem}" completion "${c.es}"`
          ).toBe(c.es.charAt(0).toLowerCase());
        });
      });
    });
  });

  it("every SentenceFormerDay has five stems with at least one completion each", () => {
    sentenceFormerDays.forEach((sfd) => {
      sfd.stems.forEach((stem) => {
        expect(stem.completions.length, `day ${sfd.day} "${stem.stem}"`).toBeGreaterThan(0);
      });
    });
  });
});

describe("readings.ts / speak plan alignment", () => {
  it("has one reading per speak day", () => {
    expect(laLecturaDays.length).toBe(speakDays.length);
  });

  it("numbers days 1..N sequentially and themeEs matches speakDays", () => {
    laLecturaDays.forEach((rd, i) => {
      expect(rd.day).toBe(i + 1);
      expect(rd.themeEs).toBe(speakDays[i].themeEs);
    });
  });

  it("every reading has vocab and a dialogue with at least six lines", () => {
    laLecturaDays.forEach((rd) => {
      expect(rd.vocab.length, `day ${rd.day} vocab`).toBeGreaterThanOrEqual(4);
      expect(rd.dialogue.lines.length, `day ${rd.day} lines`).toBeGreaterThanOrEqual(6);
    });
  });
});

describe("readings.ts serialization (Otoño+ story backbone)", () => {
  it("recap days carry no part/partsTotal; installment days carry storyTitle + partsTotal", () => {
    laLecturaDays.forEach((rd) => {
      if (rd.isRecap) {
        expect(rd.part, `day ${rd.day} recap should not have part`).toBeUndefined();
        expect(rd.partsTotal, `day ${rd.day} recap should not have partsTotal`).toBeUndefined();
      } else if (rd.part !== undefined) {
        expect(rd.storyTitle, `day ${rd.day} installment missing storyTitle`).toBeDefined();
        expect(rd.partsTotal, `day ${rd.day} installment missing partsTotal`).toBeDefined();
      }
    });
  });

  it("installment part numbers stay within [1, partsTotal]", () => {
    laLecturaDays.forEach((rd) => {
      if (rd.part === undefined) return;
      expect(rd.part, `day ${rd.day} part`).toBeGreaterThanOrEqual(1);
      expect(rd.part, `day ${rd.day} part`).toBeLessThanOrEqual(rd.partsTotal!);
    });
  });

  it("each story's installments are gap-free and duplicate-free", () => {
    const byStory = new Map<string, typeof laLecturaDays>();
    laLecturaDays.forEach((rd) => {
      if (!rd.storyTitle || rd.part === undefined) return;
      byStory.set(rd.storyTitle, [...(byStory.get(rd.storyTitle) ?? []), rd]);
    });
    byStory.forEach((days, storyTitle) => {
      const parts = days.map((d) => d.part!).sort((a, b) => a - b);
      const expected = Array.from({ length: days[0].partsTotal! }, (_, i) => i + 1);
      expect(parts, `story "${storyTitle}" parts`).toEqual(expected);
    });
  });
});
