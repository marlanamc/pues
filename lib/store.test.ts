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
  flagForPractice,
  unflagForPractice,
  primeWeek,
  currentWeek,
  isWeekPrimed,
  weekDaysDone,
  getVocabProgress,
  getVocabState,
  markVocabKnown,
  markVocabLearning,
  recordVocabRecall,
  resetVocabTheme,
  vocabCounts,
  learningVocabIds,
  VOCAB_GRADUATE_STREAK,
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

describe("the week as a queue", () => {
  // A 14-day curriculum: week 1 = days 1–7, week 2 = days 8–14.
  const TOTAL = 14;

  it("walks the current week before rolling into the next", () => {
    for (let i = 0; i < 7; i += 1) completeCurrentDay(TOTAL);

    expect(getStats().daysDone).toEqual([1, 2, 3, 4, 5, 6, 7]);
    // Week 1 exhausted — the cursor rolls to day 8, not back into week 1.
    expect(getStats().currentDayIndex).toBe(7);
    expect(currentWeek()).toBe(2);
  });

  it("fills the gap left by an out-of-order day instead of skipping it", () => {
    // Jump to day 3 and finish it, leaving days 1 and 2 open behind.
    setCurrentDayIndex(2);
    completeCurrentDay(TOTAL);

    expect(getStats().daysDone).toEqual([3]);
    // Back to day 1 — the earlier days are genuinely unfinished, not "missed".
    expect(getStats().currentDayIndex).toBe(0);

    completeCurrentDay(TOTAL); // day 1
    completeCurrentDay(TOTAL); // day 2
    expect(getStats().daysDone).toEqual([1, 2, 3]);
    // Day 3 is already done, so the queue skips past it to day 4.
    expect(getStats().currentDayIndex).toBe(3);
  });

  it("never double-counts a day repeated on purpose", () => {
    setCurrentDayIndex(4);
    completeCurrentDay(TOTAL);
    setCurrentDayIndex(4);
    completeCurrentDay(TOTAL);

    expect(getStats().daysDone).toEqual([5]);
  });

  it("wraps at the end of the curriculum", () => {
    setCurrentDayIndex(13); // day 14, last day of week 2
    completeCurrentDay(TOTAL);
    // Week 2 still has days 8–13 open, so it stays in week 2.
    expect(getStats().currentDayIndex).toBe(7);

    for (let i = 0; i < 6; i += 1) completeCurrentDay(TOTAL);
    expect(getStats().daysDone).toHaveLength(7);
    expect(getStats().currentDayIndex).toBe(0);
  });
});

describe("priming a week", () => {
  const TOTAL = 14;

  it("marks the week and puts the cursor on its first open day", () => {
    primeWeek(2, TOTAL);

    expect(isWeekPrimed(2)).toBe(true);
    expect(getStats().primedWeeks).toEqual([2]);
    expect(getStats().currentDayIndex).toBe(7); // day 8
    expect(currentWeek()).toBe(2);
  });

  it("is idempotent and skips days already finished", () => {
    setCurrentDayIndex(7);
    completeCurrentDay(TOTAL); // day 8 done

    primeWeek(2, TOTAL);
    primeWeek(2, TOTAL);

    expect(getStats().primedWeeks).toEqual([2]);
    expect(getStats().currentDayIndex).toBe(8); // day 9, not the finished day 8
    expect(weekDaysDone(2)).toEqual([8]);
  });

  it("leaves the cursor alone when the whole week is already done", () => {
    for (let i = 0; i < 7; i += 1) completeCurrentDay(TOTAL);
    const before = getStats().currentDayIndex;

    primeWeek(1, TOTAL);
    expect(getStats().currentDayIndex).toBe(before);
    expect(isWeekPrimed(1)).toBe(true);
  });
});

describe("stats written before the weekly rework", () => {
  it("reconstructs the queue from the old sequential cursor", () => {
    localStorage.setItem(
      "pues:stats",
      JSON.stringify({
        daysPracticed: 9,
        sentencesCreated: 30,
        framesExplored: ["yo"],
        lastSessionDate: "2026-06-20",
        currentDayIndex: 9,
      }),
    );

    const stats = getStats();
    // The old model only advanced on completion, so days 1–9 are finished.
    expect(stats.daysDone).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(stats.primedWeeks).toEqual([]);
    expect(currentWeek(stats)).toBe(2);
    expect(weekDaysDone(2, stats)).toEqual([8, 9]);
  });

  it("does not resurrect a queue that is legitimately empty", () => {
    localStorage.setItem(
      "pues:stats",
      JSON.stringify({
        daysPracticed: 0,
        sentencesCreated: 0,
        framesExplored: [],
        lastSessionDate: null,
        currentDayIndex: 4,
        daysDone: [],
        primedWeeks: [2],
      }),
    );

    expect(getStats().daysDone).toEqual([]);
    expect(getStats().primedWeeks).toEqual([2]);
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
    markVocabLearning("v-comida-sal");
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
      primedWeeks: [],
      daysDone: [],
    });
    expect(getSession()).toEqual({ dayIndex: 0, index: 0 });
    expect(listPracticeFlags()).toEqual([]);
    expect(getReadingLog()).toEqual([]);
    expect(listSentenceFormerEntries()).toEqual([]);
    expect(JSON.parse(localStorage.getItem("pues:sb-progress") ?? "{}")).toEqual({});
    expect(getVocabProgress()).toEqual({});
  });
});

describe("vocabulario", () => {
  const ids = ["v-comida-sal", "v-comida-pan", "v-comida-taza"];

  it("treats an untouched word as unseen", () => {
    expect(getVocabState("v-comida-sal")).toBeNull();
    expect(vocabCounts(ids)).toEqual({ total: 3, known: 0, learning: 0, unseen: 3 });
  });

  it("records the sweep's two verdicts", () => {
    markVocabKnown("v-comida-sal");
    markVocabLearning("v-comida-pan");

    expect(getVocabState("v-comida-sal")?.status).toBe("known");
    expect(getVocabState("v-comida-pan")?.status).toBe("learning");
    expect(getVocabState("v-comida-sal")?.seenAt).toBeTruthy();
    expect(vocabCounts(ids)).toEqual({ total: 3, known: 1, learning: 1, unseen: 1 });
  });

  it("graduates a word after two consecutive arrivals, not one", () => {
    markVocabLearning("v-comida-pan");

    const first = recordVocabRecall("v-comida-pan", true);
    expect(first.status).toBe("learning");
    expect(first.streak).toBe(1);

    const second = recordVocabRecall("v-comida-pan", true);
    expect(second.status).toBe("known");
    expect(second.streak).toBe(VOCAB_GRADUATE_STREAK);
  });

  it("resets the streak on a miss so an arrival then a miss does not graduate", () => {
    markVocabLearning("v-comida-pan");
    recordVocabRecall("v-comida-pan", true);
    const missed = recordVocabRecall("v-comida-pan", false);

    expect(missed.status).toBe("learning");
    expect(missed.streak).toBe(0);
  });

  it("demotes a known word that is missed", () => {
    markVocabKnown("v-comida-sal");
    const missed = recordVocabRecall("v-comida-sal", false);

    expect(missed.status).toBe("learning");
    expect(missed.streak).toBe(0);
  });

  it("lists only learning words, in the order given", () => {
    markVocabLearning("v-comida-taza");
    markVocabKnown("v-comida-sal");
    markVocabLearning("v-comida-pan");

    expect(learningVocabIds(ids)).toEqual(["v-comida-pan", "v-comida-taza"]);
  });

  it("partitions exactly — known + learning + unseen is always the total", () => {
    markVocabKnown("v-comida-sal");
    markVocabLearning("v-comida-pan");

    const c = vocabCounts(ids);
    expect(c.known + c.learning + c.unseen).toBe(c.total);
  });

  it("forgets one theme without touching the others", () => {
    markVocabKnown("v-comida-sal");
    markVocabLearning("v-verbos-colgar");

    resetVocabTheme(["v-comida-sal"]);

    expect(getVocabState("v-comida-sal")).toBeNull();
    expect(getVocabState("v-verbos-colgar")?.status).toBe("learning");
  });

  it("reads a corrupt blob as unseen rather than throwing", () => {
    localStorage.setItem("pues:vocab", JSON.stringify("garbage"));
    expect(getVocabProgress()).toEqual({});

    localStorage.setItem("pues:vocab", JSON.stringify(["not", "a", "map"]));
    expect(getVocabProgress()).toEqual({});

    localStorage.setItem(
      "pues:vocab",
      JSON.stringify({
        "v-comida-sal": { status: "nope", streak: 1, seenAt: "x" },
        "v-comida-pan": { status: "learning", streak: "two", seenAt: "x" },
        "v-comida-taza": { status: "known", streak: 2, seenAt: "x" },
      }),
    );
    expect(Object.keys(getVocabProgress())).toEqual(["v-comida-taza"]);
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

describe("practice flags", () => {
  beforeEach(() => localStorage.clear());

  it("flags once and is idempotent", () => {
    flagForPractice("d1-quiero");
    flagForPractice("d1-quiero");
    expect(listPracticeFlags()).toEqual(["d1-quiero"]);
  });

  it("unflags one id and leaves the rest", () => {
    flagForPractice("d1-quiero");
    flagForPractice("d1-necesito");
    unflagForPractice("d1-quiero");
    expect(listPracticeFlags()).toEqual(["d1-necesito"]);
  });

  it("unflagging something not flagged is a no-op", () => {
    flagForPractice("d1-quiero");
    unflagForPractice("d2-tengo");
    expect(listPracticeFlags()).toEqual(["d1-quiero"]);
  });

  it("can empty the list completely", () => {
    flagForPractice("d1-quiero");
    unflagForPractice("d1-quiero");
    expect(listPracticeFlags()).toEqual([]);
  });
});
