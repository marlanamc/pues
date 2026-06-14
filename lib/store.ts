"use client";

/**
 * Single source of truth for persistence.
 * Today: localStorage. Tomorrow: swap implementation for Supabase
 * without touching call sites.
 */

export type Reflection = "yes" | "maybe" | "not_really";

export type Thought = {
  id: string;
  frameStem: string;
  situationSlug: string;
  situationLabel: string;
  sentence: string;
  reflection: Reflection;
  createdAt: string;
};

export type SessionStats = {
  daysPracticed: number;
  sentencesCreated: number;
  framesExplored: string[];
  lastSessionDate: string | null;
  currentDayIndex: number;
};

export type Draft = Partial<{
  frameStem: string;
  situationSlug: string;
  situationLabel: string;
  sentence: string;
  reflection: Reflection;
}>;

const K_THOUGHTS = "pues:thoughts";
const K_STATS = "pues:stats";
const K_DRAFT = "pues:draft";

const EMPTY_STATS: SessionStats = {
  daysPracticed: 0,
  sentencesCreated: 0,
  framesExplored: [],
  lastSessionDate: null,
  currentDayIndex: 0,
};

function isBrowser() {
  return typeof window !== "undefined";
}

function read<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (raw === null) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function write<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota / privacy mode — ignore */
  }
}

/* ---------- Thoughts ---------- */

export function listThoughts(): Thought[] {
  return read<Thought[]>(K_THOUGHTS, []).sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );
}

export function saveThought(input: Omit<Thought, "id" | "createdAt">): Thought {
  const thought: Thought = {
    ...input,
    id:
      isBrowser() && "randomUUID" in crypto
        ? crypto.randomUUID()
        : `t_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
  const next = [thought, ...read<Thought[]>(K_THOUGHTS, [])];
  write(K_THOUGHTS, next);
  bumpStats(thought);
  return thought;
}

/* ---------- Stats ---------- */

export function getStats(): SessionStats {
  const raw = read<SessionStats>(K_STATS, EMPTY_STATS);
  if (typeof raw.currentDayIndex !== "number") {
    return { ...raw, currentDayIndex: raw.daysPracticed };
  }
  return raw;
}

export function completeCurrentDay(totalDays: number): SessionStats {
  const prev = getStats();
  const next: SessionStats = {
    ...prev,
    currentDayIndex: (prev.currentDayIndex + 1) % totalDays,
  };
  write(K_STATS, next);
  return next;
}

function bumpStats(thought: Thought) {
  const prev = getStats();
  const today = thought.createdAt.slice(0, 10);
  const isNewDay = prev.lastSessionDate !== today;
  const framesExplored = prev.framesExplored.includes(thought.frameStem)
    ? prev.framesExplored
    : [...prev.framesExplored, thought.frameStem];
  const next: SessionStats = {
    daysPracticed: prev.daysPracticed + (isNewDay ? 1 : 0),
    sentencesCreated: prev.sentencesCreated + 1,
    framesExplored,
    lastSessionDate: today,
    currentDayIndex: prev.currentDayIndex,
  };
  write(K_STATS, next);
}

/* ---------- Draft (the in-progress sentence across flow screens) ---------- */

export function getDraft(): Draft {
  return read<Draft>(K_DRAFT, {});
}

export function setDraft(patch: Draft): Draft {
  const next = { ...getDraft(), ...patch };
  write(K_DRAFT, next);
  return next;
}

export function clearDraft(): void {
  write(K_DRAFT, {});
}
