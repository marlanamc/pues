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
  resetProgress,
  getReadingLog,
  listSentenceFormerEntries,
  listPracticeFlags,
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
  it("advances within a curriculum day and resets once that day advances", () => {
    advanceSession(3);
    advanceSession(3);
    expect(getSession().index).toBe(2);

    // Finishing a day (currentDayIndex bumps) resets the session immediately —
    // no need to wait for a new calendar day — so a learner can chain
    // multiple curriculum days in one sitting.
    completeCurrentDay(7);
    expect(getSession().index).toBe(0);
  });

  it("caps the index at the per-day limit", () => {
    advanceSession(2);
    advanceSession(2);
    advanceSession(2);
    expect(getSession().index).toBe(2);
  });

  it("allows finishing several curriculum days back to back in the same sitting", () => {
    advanceSession(3);
    advanceSession(3);
    advanceSession(3);
    expect(getSession().index).toBe(3);
    completeCurrentDay(7);

    expect(getSession().index).toBe(0);
    advanceSession(3);
    advanceSession(3);
    advanceSession(3);
    expect(getSession().index).toBe(3);
    completeCurrentDay(7);

    expect(getStats().currentDayIndex).toBe(2);
    expect(getSession().index).toBe(0);
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

describe("resetProgress", () => {
  it("clears journal, stats, session, and other progress keys", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-20T10:00:00Z"));

    saveThought(newThought());
    setCurrentDayIndex(12);
    advanceSession(3);
    recordSbLevelResult("L1", 5, 5);
    localStorage.setItem("pues:practice", JSON.stringify(["d1-prompt"]));
    localStorage.setItem("pues:reading-log", JSON.stringify(["2026-06-20"]));
    localStorage.setItem(
      "pues:sentence-former-saved",
      JSON.stringify([
        {
          id: "sf1",
          day: 1,
          stem: "Quiero…",
          text: "aprender",
          createdAt: "2026-06-20T10:00:00Z",
        },
      ]),
    );

    resetProgress();

    expect(listThoughts()).toEqual([]);
    expect(getStats()).toEqual({
      daysPracticed: 0,
      sentencesCreated: 0,
      framesExplored: [],
      lastSessionDate: null,
      currentDayIndex: 0,
    });
    expect(getSession()).toEqual({ dayIndex: 0, index: 0 });
    expect(listPracticeFlags()).toEqual([]);
    expect(getReadingLog()).toEqual([]);
    expect(listSentenceFormerEntries()).toEqual([]);
    expect(JSON.parse(localStorage.getItem("pues:sb-progress") ?? "{}")).toEqual({});
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
