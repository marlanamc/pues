import { describe, it, expect } from "vitest";
import { mergeStats, mergeThoughts, mergeQuestionnaire } from "@/lib/sync";
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

  it("keeps local day progress when the local write is newer (same calendar day)", () => {
    const local = { ...baseStats, currentDayIndex: 3, lastSessionDate: "2026-06-23" };
    const remote = {
      days_practiced: 0,
      sentences_created: 0,
      frames_explored: [],
      last_session_date: "2026-06-23",
      current_day_index: 5,
    };
    // Local written at 10:05, remote at 10:00 — local is newer.
    const merged = mergeStats(local, remote, "2026-06-23T10:05:00Z", "2026-06-23T10:00:00Z");
    expect(merged.currentDayIndex).toBe(3);
    expect(merged.lastSessionDate).toBe("2026-06-23");
  });

  it("adopts remote day progress when the remote write is newer", () => {
    const local = { ...baseStats, currentDayIndex: 3, lastSessionDate: "2026-06-23" };
    const remote = {
      days_practiced: 0,
      sentences_created: 0,
      frames_explored: [],
      last_session_date: "2026-06-23",
      current_day_index: 5,
    };
    const merged = mergeStats(local, remote, "2026-06-23T10:00:00Z", "2026-06-23T10:05:00Z");
    expect(merged.currentDayIndex).toBe(5);
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
