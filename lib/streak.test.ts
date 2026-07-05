import { describe, it, expect, afterEach } from "vitest";
import {
  currentStreak,
  last7Days,
  practiceDatesFromThoughts,
} from "@/lib/streak";
import type { Thought } from "@/lib/store";

const now = new Date("2026-06-23T12:00:00Z");

function on(date: string, time = "10:00:00Z"): Thought {
  return {
    id: date,
    frameStem: "yo",
    situationSlug: "s",
    situationLabel: "S",
    sentence: "hola",
    reflection: "yes",
    createdAt: `${date}T${time}`,
  };
}

const originalTz = process.env.TZ;

afterEach(() => {
  if (originalTz === undefined) delete process.env.TZ;
  else process.env.TZ = originalTz;
});

describe("practiceDatesFromThoughts", () => {
  it("collapses thoughts to unique YYYY-MM-DD days", () => {
    const set = practiceDatesFromThoughts([on("2026-06-23"), on("2026-06-23"), on("2026-06-22")]);
    expect([...set].sort()).toEqual(["2026-06-22", "2026-06-23"]);
  });
});

describe("currentStreak", () => {
  it("counts consecutive days ending today", () => {
    const set = new Set(["2026-06-23", "2026-06-22", "2026-06-21"]);
    expect(currentStreak(set, now)).toBe(3);
  });

  it("still counts the streak when today is not yet practiced", () => {
    const set = new Set(["2026-06-22", "2026-06-21"]);
    expect(currentStreak(set, now)).toBe(2);
  });

  it("breaks on a gap", () => {
    const set = new Set(["2026-06-23", "2026-06-21"]);
    expect(currentStreak(set, now)).toBe(1);
  });

  it("is zero with no practice", () => {
    expect(currentStreak(new Set(), now)).toBe(0);
  });

  it("counts yesterday evening practice in US Eastern time", () => {
    process.env.TZ = "America/New_York";
    const practiced = practiceDatesFromThoughts([
      on("2026-07-02", "23:00:00.000Z"),
    ]);
    expect(currentStreak(practiced, new Date("2026-07-03T23:00:00.000Z"))).toBe(1);
  });
});

describe("last7Days", () => {
  it("returns 7 days ending today, flagging practiced ones", () => {
    const days = last7Days(new Set(["2026-06-23", "2026-06-20"]), now);
    expect(days).toHaveLength(7);
    expect(days[6].isToday).toBe(true);
    expect(days[6].practiced).toBe(true);
    expect(days.find((d) => d.date === "2026-06-20")?.practiced).toBe(true);
    expect(days.find((d) => d.date === "2026-06-21")?.practiced).toBe(false);
  });
});
