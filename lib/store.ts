"use client";

/**
 * Single source of truth for persistence.
 * Today: localStorage. Tomorrow: swap implementation for Supabase
 * without touching call sites.
 */

// Self-assessment from the Reveal screen (warm check-in, not a grade):
//   yes        → "Lo dije con soltura"
//   maybe      → "Casi — por poco"
//   not_really → "Quiero practicarla"  (flags the prompt to resurface)
export type Reflection = "yes" | "maybe" | "not_really";

export type Thought = {
  id: string;
  frameStem: string;
  situationSlug: string;
  situationLabel: string;
  /** The model Spanish answer the user practiced. */
  sentence: string;
  /** The English thought they were asked to say. */
  english?: string;
  reflection: Reflection;
  /** True when self-assessment was "Quiero practicarla". */
  practiceFlag?: boolean;
  /** IndexedDB key for the user's own recording, if captured. */
  audioId?: string;
  /** The source prompt id (content/prompts.ts). */
  promptId?: string;
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
  source: "daily" | "situation";
  promptId: string;
  frameStem: string;
  situationSlug: string;
  situationLabel: string;
  /** The English thought shown on the Speak screen. */
  englishPrompt: string;
  /** The model Spanish answer revealed on the Reveal screen. */
  spanishAnswer: string;
  /** The soft note about the answer (raw, with *asterisk* markers). */
  whyNote: string;
  wordHints: { en: string; es: string }[];
  /** Set once the user has made a speak attempt — gates the Reveal screen. */
  spoke: boolean;
  /** IndexedDB key for the recording captured on the Speak screen. */
  recordingId: string;
  sentence: string;
  reflection: Reflection;
}>;

export type Session = {
  /** Calendar date this session belongs to (YYYY-MM-DD). */
  date: string;
  /** How many of today's prompts have been completed (0..N). */
  index: number;
};

export type AudioSpeed = "normal" | "slow";
export type ThemeMode = "dark" | "light";

const K_THOUGHTS = "pues:thoughts";
const K_STATS = "pues:stats";
const K_DRAFT = "pues:draft";
const K_SESSION = "pues:session";
const K_PRACTICE = "pues:practice";
const K_SB_PROGRESS = "pues:sb-progress";
const K_AUDIO_SPEED = "pues:audio-speed";
const K_THEME_MODE = "pues:theme-mode";
const K_SIDEBAR_VISIBLE = "pues:sidebar-visible";
const K_PHRASE_ENGLISH_VISIBLE = "pues:phrase-english-visible";

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

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
    // Let the cloud sync layer (lib/sync.ts) mirror this write upstream.
    window.dispatchEvent(new CustomEvent("pues:mutate", { detail: { key } }));
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
  if (isBrowser()) {
    window.dispatchEvent(new Event("pues:stats-change"));
  }
  return next;
}

export function setCurrentDayIndex(index: number): SessionStats {
  const prev = getStats();
  const next: SessionStats = { ...prev, currentDayIndex: index };
  write(K_STATS, next);
  if (isBrowser()) {
    window.dispatchEvent(new Event("pues:stats-change"));
  }
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
  if (isBrowser()) {
    window.dispatchEvent(new Event("pues:stats-change"));
  }
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

/* ---------- Daily session (which of today's N prompts is active) ---------- */

export function getSession(): Session {
  const today = todayKey();
  const raw = read<Session>(K_SESSION, { date: today, index: 0 });
  // Reset the counter at the start of a new calendar day.
  if (raw.date !== today) return { date: today, index: 0 };
  return raw;
}

/** How many of today's prompts have been completed. */
export function getSessionIndex(): number {
  return getSession().index;
}

/** Record one completed prompt; returns the new index (capped at `perDay`). */
export function advanceSession(perDay: number): number {
  const today = todayKey();
  const prev = getSession();
  const index = Math.min(prev.index + 1, perDay);
  write(K_SESSION, { date: today, index });
  if (isBrowser()) {
    window.dispatchEvent(new Event("pues:stats-change"));
  }
  return index;
}

/* ---------- Practice list ("Quiero practicarla" resurfacing) ---------- */

export function flagForPractice(promptId: string): void {
  const list = read<string[]>(K_PRACTICE, []);
  if (!list.includes(promptId)) write(K_PRACTICE, [...list, promptId]);
}

export function listPracticeFlags(): string[] {
  return read<string[]>(K_PRACTICE, []);
}

/* ---------- Sentence Builder progress (per level, local-only) ---------- */

export type SbLevelResult = {
  completed: boolean;
  /** Best first-try count across plays. */
  bestSolved: number;
  /** Cards in the level when last recorded. */
  total: number;
  /** ISO timestamp of the most recent completion. */
  lastPlayed: string;
};

export type SbProgress = Record<string, SbLevelResult>;

export function getSbProgress(): SbProgress {
  return read<SbProgress>(K_SB_PROGRESS, {});
}

/** Record a finished level run, keeping the best first-try score. */
export function recordSbLevelResult(
  levelName: string,
  solved: number,
  total: number
): SbProgress {
  const prev = getSbProgress();
  const existing = prev[levelName];
  const next: SbProgress = {
    ...prev,
    [levelName]: {
      completed: true,
      bestSolved: Math.max(existing?.bestSolved ?? 0, solved),
      total,
      lastPlayed: new Date().toISOString(),
    },
  };
  write(K_SB_PROGRESS, next);
  if (isBrowser()) {
    window.dispatchEvent(new Event("pues:stats-change"));
  }
  return next;
}

/**
 * A level is unlocked when it's the first in order, or the level before it has
 * been completed. `orderedLevelNames` is the level sequence from content.
 */
export function isSbLevelUnlocked(
  levelName: string,
  orderedLevelNames: string[]
): boolean {
  const idx = orderedLevelNames.indexOf(levelName);
  if (idx <= 0) return true;
  const prevName = orderedLevelNames[idx - 1];
  return getSbProgress()[prevName]?.completed === true;
}

/* ---------- Reading log ("La lectura" completion) ---------- */

const K_READING_LOG = "pues:reading-log";

/** Returns the list of YYYY-MM-DD dates the user marked a reading as done. */
export function getReadingLog(): string[] {
  return read<string[]>(K_READING_LOG, []);
}

/** Marks today's reading as done; returns the updated log. */
export function markReadingDone(): string[] {
  const today = todayKey();
  const log = getReadingLog();
  if (log.includes(today)) return log;
  const next = [...log, today];
  write(K_READING_LOG, next);
  if (isBrowser()) window.dispatchEvent(new Event("pues:stats-change"));
  return next;
}

export function readingDoneToday(): boolean {
  return getReadingLog().includes(todayKey());
}

/* ---------- Audio ---------- */

export function getAudioSpeed(): AudioSpeed {
  const speed = read<string>(K_AUDIO_SPEED, "normal");
  return speed === "slow" ? "slow" : "normal";
}

export function setAudioSpeed(speed: AudioSpeed): AudioSpeed {
  write(K_AUDIO_SPEED, speed);
  return speed;
}

/* ---------- Theme ---------- */

export function getThemeMode(): ThemeMode {
  const mode = read<string>(K_THEME_MODE, "dark");
  return mode === "light" ? "light" : "dark";
}

export function setThemeMode(mode: ThemeMode): ThemeMode {
  write(K_THEME_MODE, mode);
  return mode;
}

/* ---------- Desktop sidebar (expanded vs icon-collapsed) ---------- */

export function getSidebarVisible(): boolean {
  return read<boolean>(K_SIDEBAR_VISIBLE, true);
}

export function setSidebarVisible(visible: boolean): boolean {
  write(K_SIDEBAR_VISIBLE, visible);
  return visible;
}

/* ---------- Situation phrase English glosses ---------- */

export function getPhraseEnglishVisible(): boolean {
  return read<boolean>(K_PHRASE_ENGLISH_VISIBLE, false);
}

export function setPhraseEnglishVisible(visible: boolean): boolean {
  write(K_PHRASE_ENGLISH_VISIBLE, visible);
  return visible;
}
