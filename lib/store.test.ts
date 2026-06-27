import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  saveThought,
  getStats,
  completeCurrentDay,
  setCurrentDayIndex,
  getSession,
  advanceSession,
  recordSbLevelResult,
  isSbLevelUnlocked,
  listThoughts,
  runMigrations,
  getTheme,
} from "@/lib/store";

function newThought(frameStem = "yo") {
  return {
    frameStem,
    situationSlug: "s",
    situationLabel: "S",
    sentence: "hola",
    reflection: "yes" as const,
  };
}

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("stats via saveThought", () => {
  it("counts one practiced day and accumulates sentences/frames within a day", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-20T10:00:00Z"));

    saveThought(newThought("yo"));
    saveThought(newThought("yo")); // same frame, same day
    saveThought(newThought("tu"));

    const stats = getStats();
    expect(stats.daysPracticed).toBe(1);
    expect(stats.sentencesCreated).toBe(3);
    expect([...stats.framesExplored].sort()).toEqual(["tu", "yo"]);
    expect(stats.lastSessionDate).toBe("2026-06-20");
  });

  it("increments daysPracticed when a new calendar day starts", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-20T10:00:00Z"));
    saveThought(newThought());

    vi.setSystemTime(new Date("2026-06-21T10:00:00Z"));
    saveThought(newThought());

    expect(getStats().daysPracticed).toBe(2);
  });
});

describe("currentDayIndex", () => {
  it("backfills a missing index from daysPracticed", () => {
    localStorage.setItem(
      "pues:stats",
      JSON.stringify({
        daysPracticed: 4,
        sentencesCreated: 9,
        framesExplored: [],
        lastSessionDate: "2026-06-20",
      })
    );
    expect(getStats().currentDayIndex).toBe(4);
  });

  it("wraps with completeCurrentDay and sets explicitly", () => {
    setCurrentDayIndex(6);
    expect(getStats().currentDayIndex).toBe(6);
    completeCurrentDay(7); // (6 + 1) % 7 === 0
    expect(getStats().currentDayIndex).toBe(0);
  });
});

describe("daily session", () => {
  it("advances within a day and resets on a new calendar day", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-20T10:00:00Z"));

    advanceSession(3);
    advanceSession(3);
    expect(getSession().index).toBe(2);

    vi.setSystemTime(new Date("2026-06-21T08:00:00Z"));
    expect(getSession().index).toBe(0);
  });

  it("caps the index at the per-day limit", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-20T10:00:00Z"));
    advanceSession(2);
    advanceSession(2);
    advanceSession(2);
    expect(getSession().index).toBe(2);
  });
});

describe("validation of corrupted persisted data", () => {
  it("drops malformed thoughts instead of returning them", () => {
    localStorage.setItem(
      "pues:thoughts",
      JSON.stringify([
        { id: "ok", sentence: "hola", createdAt: "2026-06-20T10:00:00Z", frameStem: "yo", reflection: "yes" },
        { id: "bad", sentence: 123 }, // wrong shape
        "not-an-object",
      ])
    );
    const list = listThoughts();
    expect(list).toHaveLength(1);
    expect(list[0].id).toBe("ok");
  });

  it("falls back to empty stats when the blob is the wrong shape", () => {
    localStorage.setItem("pues:stats", JSON.stringify("garbage"));
    expect(getStats().daysPracticed).toBe(0);
  });
});

describe("schema migrations", () => {
  it("normalizes a legacy theme value and stamps the schema version", () => {
    localStorage.setItem("pues:theme-mode", JSON.stringify("dark"));
    runMigrations();
    expect(getTheme()).toBe("Almagre");
    expect(JSON.parse(localStorage.getItem("pues:schema-version") ?? "0")).toBe(1);
  });

  it("is a no-op once already migrated", () => {
    localStorage.setItem("pues:schema-version", JSON.stringify(1));
    localStorage.setItem("pues:theme-mode", JSON.stringify("light"));
    runMigrations();
    // Legacy value left untouched because the version is already current.
    expect(JSON.parse(localStorage.getItem("pues:theme-mode") ?? '""')).toBe("light");
  });
});

describe("sentence-builder unlock", () => {
  const order = ["L1", "L2", "L3"];

  it("unlocks the first level and gates the rest until the prior is complete", () => {
    expect(isSbLevelUnlocked("L1", order)).toBe(true);
    expect(isSbLevelUnlocked("L2", order)).toBe(false);

    recordSbLevelResult("L1", 5, 5);
    expect(isSbLevelUnlocked("L2", order)).toBe(true);
    expect(isSbLevelUnlocked("L3", order)).toBe(false);
  });

  it("keeps the best first-try score across plays", () => {
    recordSbLevelResult("L1", 3, 5);
    recordSbLevelResult("L1", 5, 5);
    recordSbLevelResult("L1", 2, 5);
    // best should remain 5 — tolerate either property name in the stored result.
    const stored = JSON.parse(localStorage.getItem("pues:sb-progress") ?? "{}");
    expect(stored.L1.bestSolved).toBe(5);
  });
});
