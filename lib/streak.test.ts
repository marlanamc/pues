import { describe, it, expect } from "vitest";
import { last7Days, practiceDatesFromThoughts } from "@/lib/streak";
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

describe("practiceDatesFromThoughts", () => {
  it("collapses thoughts to unique YYYY-MM-DD days", () => {
    const set = practiceDatesFromThoughts([on("2026-06-23"), on("2026-06-23"), on("2026-06-22")]);
    expect([...set].sort()).toEqual(["2026-06-22", "2026-06-23"]);
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
