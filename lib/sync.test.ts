import { describe, it, expect } from "vitest";
import {
  isRemoteResetNewer,
  mergeStats,
  mergeThoughts,
  mergeQuestionnaire,
  preserveProgressResetAt,
} from "@/lib/sync";
import { clearAllProgressLocal } from "@/lib/store";
import type { SessionStats, Thought } from "@/lib/store";

function thought(partial: Partial<Thought> & Pick<Thought, "id" | "createdAt">): Thought {
  return {
    frameStem: "yo",
    situationSlug: "s",
    situationLabel: "S",
    sentence: "hola",
    reflection: "yes",
    ...partial,
  };
}

const baseStats: SessionStats = {
  daysPracticed: 0,
  sentencesCreated: 0,
  framesExplored: [],
  lastSessionDate: null,
  currentDayIndex: 0,
};

describe("mergeStats", () => {
  it("unions additive counters from both devices", () => {
    const local = { ...baseStats, daysPracticed: 3, sentencesCreated: 10, framesExplored: ["yo"] };
    const remote = {
      days_practiced: 5,
      sentences_created: 8,
      frames_explored: ["tu", "yo"],
      last_session_date: "2026-06-20",
      current_day_index: 2,
    };
    const merged = mergeStats(local, remote, "2026-06-20T09:00:00Z", "2026-06-20T08:00:00Z");
    expect(merged.daysPracticed).toBe(5);
    expect(merged.sentencesCreated).toBe(10);
    expect([...merged.framesExplored].sort()).toEqual(["tu", "yo"]);
  });

  it("keeps the furthest curriculum day when devices disagree", () => {
    const local = { ...baseStats, currentDayIndex: 3, lastSessionDate: "2026-06-23" };
    const remote = {
      days_practiced: 0,
      sentences_created: 0,
      frames_explored: [],
      last_session_date: "2026-06-23",
      current_day_index: 5,
    };
    const merged = mergeStats(local, remote, "2026-06-23T10:05:00Z", "2026-06-23T10:00:00Z");
    expect(merged.currentDayIndex).toBe(5);
    expect(merged.lastSessionDate).toBe("2026-06-23");
  });

  it("does not roll back day progress when the remote write is newer but lower", () => {
    const local = { ...baseStats, currentDayIndex: 3, lastSessionDate: "2026-06-23" };
    const remote = {
      days_practiced: 0,
      sentences_created: 0,
      frames_explored: [],
      last_session_date: "2026-06-22",
      current_day_index: 0,
    };
    const merged = mergeStats(local, remote, "2026-06-23T10:00:00Z", "2026-06-23T10:05:00Z");
    expect(merged.currentDayIndex).toBe(3);
    expect(merged.lastSessionDate).toBe("2026-06-23");
  });

  it("honors a cloud progress reset newer than the local stats write", () => {
    const local = {
      ...baseStats,
      daysPracticed: 3,
      sentencesCreated: 8,
      framesExplored: ["yo"],
      currentDayIndex: 3,
      lastSessionDate: "2026-07-08",
    };
    const remote = {
      days_practiced: 0,
      sentences_created: 0,
      frames_explored: [],
      last_session_date: null,
      current_day_index: 0,
      progress_reset_at: "2026-07-09T15:00:00Z",
    };
    const merged = mergeStats(local, remote, "2026-07-08T12:00:00Z", "2026-07-09T15:00:00Z");
    expect(merged).toEqual({
      daysPracticed: 0,
      sentencesCreated: 0,
      framesExplored: [],
      lastSessionDate: null,
      currentDayIndex: 0,
    });
  });

  it("keeps local progress made after a cloud reset tombstone", () => {
    const local = {
      ...baseStats,
      daysPracticed: 1,
      sentencesCreated: 2,
      currentDayIndex: 1,
      lastSessionDate: "2026-07-09",
    };
    const remote = {
      days_practiced: 0,
      sentences_created: 0,
      frames_explored: [],
      last_session_date: null,
      current_day_index: 0,
      progress_reset_at: "2026-07-09T12:00:00Z",
    };
    // Local stats were written after the reset — max-merge as usual.
    const merged = mergeStats(local, remote, "2026-07-09T13:00:00Z", "2026-07-09T12:00:00Z");
    expect(merged.currentDayIndex).toBe(1);
    expect(merged.sentencesCreated).toBe(2);
  });
});

describe("mergeThoughts", () => {
  it("unions by id and sorts newest-first", () => {
    const local = [thought({ id: "a", createdAt: "2026-06-20T10:00:00Z" })];
    const remote = [thought({ id: "b", createdAt: "2026-06-21T10:00:00Z" })];
    const merged = mergeThoughts(local, remote);
    expect(merged.map((t) => t.id)).toEqual(["b", "a"]);
  });

  it("preserves a local recording reference even when remote lacks one", () => {
    const local = [thought({ id: "a", createdAt: "2026-06-20T10:00:00Z", audioId: "rec-1" })];
    const remote = [thought({ id: "a", createdAt: "2026-06-20T10:00:00Z", audioId: undefined })];
    const merged = mergeThoughts(local, remote);
    expect(merged).toHaveLength(1);
    expect(merged[0].audioId).toBe("rec-1");
  });

  it("takes the remote recording reference when local has none", () => {
    const local = [thought({ id: "a", createdAt: "2026-06-20T10:00:00Z", audioId: undefined })];
    const remote = [thought({ id: "a", createdAt: "2026-06-20T10:00:00Z", audioId: "rec-remote" })];
    const merged = mergeThoughts(local, remote);
    expect(merged[0].audioId).toBe("rec-remote");
  });
});

describe("mergeQuestionnaire", () => {
  it("unions answers from different devices without dropping either", () => {
    const local = { name: "Ada", city: "Bristol" };
    const remote = { job: "teacher" };
    const merged = mergeQuestionnaire(local, remote, "2026-06-23T10:00:00Z", "2026-06-23T09:00:00Z");
    expect(merged).toEqual({ name: "Ada", city: "Bristol", job: "teacher" });
  });

  it("lets the newer side win on a conflicting key", () => {
    const local = { city: "Bristol" };
    const remote = { city: "London" };
    expect(
      mergeQuestionnaire(local, remote, "2026-06-23T10:00:00Z", "2026-06-23T11:00:00Z").city
    ).toBe("London");
    expect(
      mergeQuestionnaire(local, remote, "2026-06-23T11:00:00Z", "2026-06-23T10:00:00Z").city
    ).toBe("Bristol");
  });
});

describe("progress reset tombstone", () => {
  it("detects when a remote reset is newer than the local watermark", () => {
    expect(isRemoteResetNewer("2026-07-06T12:00:00Z", "2026-07-06T11:00:00Z")).toBe(true);
    expect(isRemoteResetNewer("2026-07-06T11:00:00Z", "2026-07-06T11:00:00Z")).toBe(false);
    expect(isRemoteResetNewer(null, "")).toBe(false);
    expect(isRemoteResetNewer(undefined, "2026-07-06T11:00:00Z")).toBe(false);
  });

  it("preserves progress_reset_at on normal stats upserts", () => {
    expect(preserveProgressResetAt("2026-07-06T12:00:00Z")).toEqual({
      progress_reset_at: "2026-07-06T12:00:00Z",
    });
    expect(preserveProgressResetAt(null)).toEqual({});
    expect(preserveProgressResetAt(undefined)).toEqual({});
  });

  it("clears all progress keys when applying a remote reset locally", () => {
    localStorage.setItem("pues:thoughts", JSON.stringify([{ id: "t1" }]));
    localStorage.setItem(
      "pues:stats",
      JSON.stringify({
        daysPracticed: 5,
        sentencesCreated: 10,
        framesExplored: ["yo"],
        lastSessionDate: "2026-06-23",
        currentDayIndex: 3,
      }),
    );
    localStorage.setItem("pues:practice", JSON.stringify(["p1"]));
    localStorage.setItem("pues:sb-progress", JSON.stringify({ L1: { stars: 3 } }));
    localStorage.setItem("pues:reading-log", JSON.stringify(["2026-06-20"]));
    localStorage.setItem("pues:sentence-former-saved", JSON.stringify([{ id: "sf1" }]));

    clearAllProgressLocal({ silent: true });

    expect(JSON.parse(localStorage.getItem("pues:thoughts") ?? "[]")).toEqual([]);
    expect(JSON.parse(localStorage.getItem("pues:stats") ?? "{}")).toEqual(baseStats);
    expect(JSON.parse(localStorage.getItem("pues:practice") ?? "[]")).toEqual([]);
    expect(JSON.parse(localStorage.getItem("pues:sb-progress") ?? "{}")).toEqual({});
    expect(JSON.parse(localStorage.getItem("pues:reading-log") ?? "[]")).toEqual([]);
    expect(JSON.parse(localStorage.getItem("pues:sentence-former-saved") ?? "[]")).toEqual([]);
  });
});
