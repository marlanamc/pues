"use client";

/**
 * Single source of truth for persistence.
 * Today: localStorage. Tomorrow: swap implementation for Supabase
 * without touching call sites.
 */

import { calendarDateKey } from "@/lib/calendarDate";
import { DAYS_PER_WEEK, daysInWeek, weekFromDay } from "@/lib/planDay";

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
  /**
   * Global curriculum weeks (1-based, `lib/planDay.ts`) whose momentum session
   * has been completed — the weekend hour where the week ahead gets read,
   * listened to, and warmed up. Drives the "Semanas" count.
   */
  primedWeeks: number[];
  /**
   * Curriculum day numbers (1-based) that have been worked through, in any
   * order. A week is a queue you pull from at whatever pace, so this is a set
   * rather than a high-water mark — completing day 3 before day 2 must not
   * silently swallow day 2.
   */
  daysDone: number[];
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
  /** The curriculum day (SessionStats.currentDayIndex) this session belongs to. */
  dayIndex: number;
  /** How many of this day's prompts have been completed (0..N). */
  index: number;
};

export type AudioSpeed = "normal" | "slow";

/** UI text scale — affects rem-based typography across the app. */
export type TextSize = "default" | "comfortable" | "large";

/** The seven named theme palettes. Order = the order shown in Settings. */
export type ThemeName =
  | "Almagre"
  | "Pizarra"
  | "Ciruela"
  | "Bosque"
  | "Medianoche"
  | "Papel"
  | "Niebla";

export type ThemePalette = {
  name: ThemeName;
  /** Spanish display label (== name, kept explicit for future i18n). */
  label: string;
  mode: "dark" | "light";
  /** Swatch preview colors (the palette's own tokens). */
  bg: string;
  surface: string;
  accent: string;
  ink: string;
};

/** Drives the Settings swatches; values mirror the palette blocks in globals.css. */
export const THEME_PALETTES: ThemePalette[] = [
  { name: "Almagre", label: "Almagre", mode: "dark", bg: "#1b1712", surface: "#251f18", accent: "#dd6a43", ink: "#efe5d2" },
  { name: "Pizarra", label: "Pizarra", mode: "dark", bg: "#15191b", surface: "#1d2427", accent: "#4cb6a4", ink: "#e8efee" },
  { name: "Ciruela", label: "Ciruela", mode: "dark", bg: "#1a1419", surface: "#241b24", accent: "#d77a9a", ink: "#f0e6ec" },
  { name: "Bosque", label: "Bosque", mode: "dark", bg: "#13180f", surface: "#1d2416", accent: "#9bb24a", ink: "#ebefdf" },
  { name: "Medianoche", label: "Medianoche", mode: "dark", bg: "#14151f", surface: "#1d1f2e", accent: "#8a9cf0", ink: "#e7e8f2" },
  { name: "Papel", label: "Papel", mode: "light", bg: "#f1e7d4", surface: "#fbf4e6", accent: "#bb4a2a", ink: "#28231b" },
  { name: "Niebla", label: "Niebla", mode: "light", bg: "#e8edec", surface: "#f4f8f7", accent: "#2f8f7f", ink: "#1c2625" },
];

export const THEME_NAMES = THEME_PALETTES.map((p) => p.name);
const LIGHT_THEMES = new Set<ThemeName>(["Papel", "Niebla"]);

export function isLightTheme(name: ThemeName): boolean {
  return LIGHT_THEMES.has(name);
}

const K_THOUGHTS = "pues:thoughts";
const K_STATS = "pues:stats";
const K_SCHEMA_VERSION = "pues:schema-version";
const K_DRAFT = "pues:draft";
const K_SESSION = "pues:session";
const K_PRACTICE = "pues:practice";
const K_SB_PROGRESS = "pues:sb-progress";
const K_AUDIO_SPEED = "pues:audio-speed";
const K_THEME_MODE = "pues:theme-mode";
const K_PHRASE_ENGLISH_VISIBLE = "pues:phrase-english-visible";
const K_TEXT_SIZE = "pues:text-size";

function todayKey(): string {
  return calendarDateKey(new Date());
}

const EMPTY_STATS: SessionStats = {
  daysPracticed: 0,
  sentencesCreated: 0,
  framesExplored: [],
  lastSessionDate: null,
  currentDayIndex: 0,
  primedWeeks: [],
  daysDone: [],
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

function writeRaw<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota / privacy mode — ignore */
  }
}

function write<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  writeRaw(key, value);
  // Let the cloud sync layer (lib/sync.ts) mirror this write upstream.
  window.dispatchEvent(new CustomEvent("pues:mutate", { detail: { key } }));
}

export type ClearProgressOptions = {
  /** When true, skip `pues:mutate` events (used while applying a remote reset). */
  silent?: boolean;
};

/** Wipe all learning progress keys in localStorage. Shared by reset UI and cloud sync. */
export function clearAllProgressLocal(options?: ClearProgressOptions): void {
  const set = options?.silent ? writeRaw : write;
  set(K_THOUGHTS, []);
  set(K_STATS, EMPTY_STATS);
  set(K_DRAFT, {});
  set(K_SESSION, { dayIndex: 0, index: 0 });
  set(K_PRACTICE, []);
  set(K_SB_PROGRESS, {});
  set(K_READING_LOG, []);
  set(K_SENTENCE_FORMER_SAVED, []);
  set(K_WEEK_COPY, {});
  set(K_VOCAB, {});
}

/**
 * A stable id for a saved record. Exported because handwriting needs the id
 * *before* the entry is written — the strokes are keyed by it in IndexedDB.
 */
export function newId(prefix: string): string {
  return isBrowser() && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

/* ---------- Runtime validation ---------- */
// Persisted JSON can drift (manual edits, old schema, partial writes). These
// guards keep malformed data from propagating — callers fall back to defaults.

function isObject(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

const REFLECTIONS = new Set<Reflection>(["yes", "maybe", "not_really"]);

export function isThought(v: unknown): v is Thought {
  return (
    isObject(v) &&
    typeof v.id === "string" &&
    typeof v.sentence === "string" &&
    typeof v.createdAt === "string" &&
    typeof v.frameStem === "string" &&
    REFLECTIONS.has(v.reflection as Reflection)
  );
}

function isStatsLike(v: unknown): v is SessionStats {
  return (
    isObject(v) &&
    typeof v.daysPracticed === "number" &&
    typeof v.sentencesCreated === "number" &&
    Array.isArray(v.framesExplored)
  );
}

/* ---------- Schema versioning ---------- */

const SCHEMA_VERSION = 1;

/**
 * Run once on client load (see SupabaseBootstrap). Brings persisted localStorage
 * up to the current schema so old data keeps working after shape changes.
 */
export function runMigrations(): void {
  if (!isBrowser()) return;
  const stored = read<number>(K_SCHEMA_VERSION, 0);
  if (stored >= SCHEMA_VERSION) return;

  // v0 → v1: normalize legacy theme-mode ("dark"/"light") to palette names.
  if (stored < 1) {
    const theme = read<string>(K_THEME_MODE, "");
    if (theme === "dark") write(K_THEME_MODE, "Almagre");
    else if (theme === "light") write(K_THEME_MODE, "Papel");
  }

  write(K_SCHEMA_VERSION, SCHEMA_VERSION);
}

/* ---------- Thoughts ---------- */

export function listThoughts(): Thought[] {
  const raw = read<unknown>(K_THOUGHTS, []);
  const list = Array.isArray(raw) ? raw.filter(isThought) : [];
  return list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function saveThought(input: Omit<Thought, "id" | "createdAt">): Thought {
  const thought: Thought = {
    ...input,
    id: newId("t"),
    createdAt: new Date().toISOString(),
  };
  const next = [thought, ...read<Thought[]>(K_THOUGHTS, [])];
  write(K_THOUGHTS, next);
  bumpStats(thought);
  return thought;
}

/* ---------- Stats ---------- */

function numberList(v: unknown): number[] | null {
  if (!Array.isArray(v)) return null;
  return v.filter((n): n is number => typeof n === "number" && Number.isFinite(n));
}

export function getStats(): SessionStats {
  const raw = read<unknown>(K_STATS, EMPTY_STATS);
  if (!isStatsLike(raw)) return EMPTY_STATS;

  const currentDayIndex =
    typeof raw.currentDayIndex === "number" ? raw.currentDayIndex : raw.daysPracticed;

  // Stats written before the weekly rework have neither field. Under the old
  // strictly-sequential model the cursor only ever advanced on completion, so
  // every day before it was finished — that reconstructs `daysDone` exactly.
  // `primedWeeks` genuinely starts empty: no week has been primed yet.
  const daysDone =
    numberList(raw.daysDone) ??
    Array.from({ length: Math.max(0, currentDayIndex) }, (_, i) => i + 1);

  return {
    ...raw,
    currentDayIndex,
    primedWeeks: numberList(raw.primedWeeks) ?? [],
    daysDone,
  };
}

/**
 * Where the cursor lands after finishing a day. The week is a queue: take the
 * next unfinished day *within the current week* before moving on, so days done
 * out of order never leave a gap behind. Only once the week is exhausted does
 * the cursor roll into the next one.
 */
function nextDayIndex(fromIndex: number, daysDone: number[], totalDays: number): number {
  const week = weekFromDay((fromIndex % totalDays) + 1);
  const done = new Set(daysDone);
  const remaining = daysInWeek(week).filter((d) => d <= totalDays && !done.has(d));
  if (remaining.length > 0) return remaining[0] - 1;
  // Week finished — roll to the first day of the next one, wrapping at the end
  // of the authored curriculum the way the old sequential cursor did.
  return (week * DAYS_PER_WEEK) % totalDays;
}

export function completeCurrentDay(totalDays: number): SessionStats {
  const prev = getStats();
  const finished = (prev.currentDayIndex % totalDays) + 1;
  const daysDone = prev.daysDone.includes(finished)
    ? prev.daysDone
    : [...prev.daysDone, finished].sort((a, b) => a - b);
  const next: SessionStats = {
    ...prev,
    daysDone,
    currentDayIndex: nextDayIndex(prev.currentDayIndex, daysDone, totalDays),
  };
  write(K_STATS, next);
  if (isBrowser()) {
    window.dispatchEvent(new Event("pues:stats-change"));
  }
  return next;
}

/* ---------- The week (el impulso) ---------- */
// The week, not the day, is the unit of rhythm: one unhurried session reads the
// week ahead and lights it, then its 7 days are a queue pulled at any pace.
// Nothing here ever gates the daily flow — an unprimed week is a quiet note.

/** The global curriculum week the cursor is currently sitting in. */
export function currentWeek(stats: SessionStats = getStats()): number {
  return weekFromDay(stats.currentDayIndex + 1);
}

/** Whether this week's momentum session has been completed. */
export function isWeekPrimed(weekNum: number, stats: SessionStats = getStats()): boolean {
  return stats.primedWeeks.includes(weekNum);
}

/** The days of `weekNum` already worked through — drives the "N de 7" meter. */
export function weekDaysDone(weekNum: number, stats: SessionStats = getStats()): number[] {
  const done = new Set(stats.daysDone);
  return daysInWeek(weekNum).filter((d) => done.has(d));
}

/**
 * Close the momentum session for a week: mark it primed and load its queue by
 * putting the cursor on its first unfinished day. Idempotent — re-reading a
 * week you already prepared costs nothing and doesn't double-count.
 */
export function primeWeek(weekNum: number, totalDays: number): SessionStats {
  const prev = getStats();
  const primedWeeks = prev.primedWeeks.includes(weekNum)
    ? prev.primedWeeks
    : [...prev.primedWeeks, weekNum].sort((a, b) => a - b);
  const done = new Set(prev.daysDone);
  const firstOpen = daysInWeek(weekNum).find((d) => d <= totalDays && !done.has(d));
  const next: SessionStats = {
    ...prev,
    primedWeeks,
    currentDayIndex: firstOpen ? firstOpen - 1 : prev.currentDayIndex,
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
  const today = calendarDateKey(new Date(thought.createdAt));
  const isNewDay = prev.lastSessionDate !== today;
  const framesExplored = prev.framesExplored.includes(thought.frameStem)
    ? prev.framesExplored
    : [...prev.framesExplored, thought.frameStem];
  const next: SessionStats = {
    ...prev,
    daysPracticed: prev.daysPracticed + (isNewDay ? 1 : 0),
    sentencesCreated: prev.sentencesCreated + 1,
    framesExplored,
    lastSessionDate: today,
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

/* ---------- Daily session (which of the current day's N prompts is active) ---------- */
// Keyed by curriculum day (currentDayIndex), not calendar date, so a learner
// who finishes one day's prompts can immediately roll into the next day's
// prompts in the same sitting instead of waiting for a new calendar day.

export function getSession(): Session {
  const dayIndex = getStats().currentDayIndex;
  const raw = read<Session>(K_SESSION, { dayIndex, index: 0 });
  // Reset the counter whenever the curriculum day has moved on.
  if (raw.dayIndex !== dayIndex) return { dayIndex, index: 0 };
  return raw;
}

/** How many of the current day's prompts have been completed. */
export function getSessionIndex(): number {
  return getSession().index;
}

/** Record one completed prompt; returns the new index (capped at `perDay`). */
export function advanceSession(perDay: number): number {
  const dayIndex = getStats().currentDayIndex;
  const prev = getSession();
  const index = Math.min(prev.index + 1, perDay);
  write(K_SESSION, { dayIndex, index });
  if (isBrowser()) {
    window.dispatchEvent(new Event("pues:stats-change"));
  }
  return index;
}

/* ---------- Practice list ("Quiero practicarla" + "no llegó" resurfacing) ---------- */
// Two things write here: the reflection step after a spoken sentence, and the
// Sin mirar stem drill. Both mean the same thing — this one still needs work —
// so they share a list, keyed by prompt id (stems map 1:1 onto the day's
// prompts, enforced by content/content.test.ts).

export function flagForPractice(promptId: string): void {
  const list = read<string[]>(K_PRACTICE, []);
  if (!list.includes(promptId)) write(K_PRACTICE, [...list, promptId]);
}

/** Clear one flag — the stem arrived this time, so stop resurfacing it. */
export function unflagForPractice(promptId: string): void {
  const list = read<string[]>(K_PRACTICE, []);
  if (!list.includes(promptId)) return;
  write(
    K_PRACTICE,
    list.filter((id) => id !== promptId),
  );
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

/* ---------- Sentence Former (typed completions saved for review) ---------- */

const K_SENTENCE_FORMER_SAVED = "pues:sentence-former-saved";
const K_INK_INPUT = "pues:ink-input";
const K_WEEK_COPY = "pues:week-copy";

export type SentenceFormerEntry = {
  id: string;
  day: number;
  stem: string;
  /** The typed completion, or "" when the frase was written by hand. */
  text: string;
  /** IndexedDB key for the handwritten strokes (`lib/inkStore.ts`), if any. */
  inkId?: string;
  createdAt: string;
};

function isSentenceFormerEntry(v: unknown): v is SentenceFormerEntry {
  return (
    isObject(v) &&
    typeof v.id === "string" &&
    typeof v.day === "number" &&
    typeof v.stem === "string" &&
    typeof v.text === "string" &&
    (v.inkId === undefined || typeof v.inkId === "string") &&
    typeof v.createdAt === "string"
  );
}

export function listSentenceFormerEntries(): SentenceFormerEntry[] {
  const raw = read<unknown>(K_SENTENCE_FORMER_SAVED, []);
  const list = Array.isArray(raw) ? raw.filter(isSentenceFormerEntry) : [];
  return list.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export function saveSentenceFormerEntry(
  input: Omit<SentenceFormerEntry, "id" | "createdAt">,
): SentenceFormerEntry {
  const entry: SentenceFormerEntry = {
    ...input,
    id: newId("sf"),
    createdAt: new Date().toISOString(),
  };
  const next = [entry, ...read<SentenceFormerEntry[]>(K_SENTENCE_FORMER_SAVED, [])];
  write(K_SENTENCE_FORMER_SAVED, next);
  if (isBrowser()) window.dispatchEvent(new Event("pues:stats-change"));
  return entry;
}

export function deleteSentenceFormerEntry(id: string): void {
  const next = read<SentenceFormerEntry[]>(K_SENTENCE_FORMER_SAVED, []).filter(
    (e) => e.id !== id,
  );
  write(K_SENTENCE_FORMER_SAVED, next);
  if (isBrowser()) window.dispatchEvent(new Event("pues:stats-change"));
}

/* ---------- Vocabulario — Las palabras (per-word status, local-only) ---------- */
/**
 * A word is `unseen` until the sweep touches it — absence from the map is the
 * third state, so an untouched 625-word list costs nothing to store.
 *
 * "No la sé" in the sweep makes a word `learning`; it returns to `known` after
 * two consecutive arrivals in the drill. Two rather than one because the
 * answer you just revealed is still in the room — one arrival proves less than
 * it feels like. Not three, because a theme should be closable in a sitting.
 *
 * Deliberately not an SRS: no intervals, no due dates, no ease factors. Same
 * reasoning as the practice list above — the output is a list of words, never
 * a score.
 */

const K_VOCAB = "pues:vocab";

export type VocabStatus = "known" | "learning";

export type VocabWordState = {
  status: VocabStatus;
  /** Consecutive arrivals since the last miss. A miss resets it to 0. */
  streak: number;
  /** ISO timestamp of the last sweep or judgement. */
  seenAt: string;
};

export type VocabProgress = Record<string, VocabWordState>;

/** Consecutive arrivals that send a word back to `known`. */
export const VOCAB_GRADUATE_STREAK = 2;

function isVocabState(v: unknown): v is VocabWordState {
  if (typeof v !== "object" || v === null) return false;
  const s = v as Partial<VocabWordState>;
  return (
    (s.status === "known" || s.status === "learning") &&
    typeof s.streak === "number" &&
    Number.isFinite(s.streak)
  );
}

/**
 * Reads the map, dropping anything malformed. A hand-edited or half-written
 * blob degrades to "those words are unseen" rather than crashing the drill.
 */
export function getVocabProgress(): VocabProgress {
  const raw = read<unknown>(K_VOCAB, {});
  if (typeof raw !== "object" || raw === null || Array.isArray(raw)) return {};
  const out: VocabProgress = {};
  for (const [id, state] of Object.entries(raw)) {
    if (isVocabState(state)) out[id] = state;
  }
  return out;
}

export function getVocabState(id: string): VocabWordState | null {
  return getVocabProgress()[id] ?? null;
}

function writeVocab(next: VocabProgress): VocabProgress {
  write(K_VOCAB, next);
  if (isBrowser()) window.dispatchEvent(new Event("pues:stats-change"));
  return next;
}

function setVocabStatus(id: string, status: VocabStatus, streak: number): VocabProgress {
  const prev = getVocabProgress();
  return writeVocab({
    ...prev,
    [id]: { status, streak, seenAt: new Date().toISOString() },
  });
}

/** The sweep's "Ya la sé". */
export function markVocabKnown(id: string): VocabProgress {
  return setVocabStatus(id, "known", VOCAB_GRADUATE_STREAK);
}

/** The sweep's "No la sé" — this is what fills the drill deck. */
export function markVocabLearning(id: string): VocabProgress {
  return setVocabStatus(id, "learning", 0);
}

/**
 * The drill's judgement. `arrived` is "Llegó"; false is "Lo armé", which
 * counts as a miss and keeps the word on the list.
 *
 * A miss on a word that reads `known` demotes it. The deck only ever holds
 * `learning` words so that shouldn't arise, but it means no stored state can
 * produce a word that is permanently stuck.
 */
export function recordVocabRecall(id: string, arrived: boolean): VocabWordState {
  const prev = getVocabProgress()[id];
  const streak = arrived ? (prev?.streak ?? 0) + 1 : 0;
  const status: VocabStatus = streak >= VOCAB_GRADUATE_STREAK ? "known" : "learning";
  return setVocabStatus(id, status, streak)[id];
}

/** Forget one theme so its sweep can be run again from scratch. */
export function resetVocabTheme(ids: string[]): VocabProgress {
  const drop = new Set(ids);
  const next: VocabProgress = {};
  for (const [id, state] of Object.entries(getVocabProgress())) {
    if (!drop.has(id)) next[id] = state;
  }
  return writeVocab(next);
}

/**
 * Partitions a set of ids for the index and theme meters. Takes ids rather
 * than reading content, so lib/store stays free of content imports and this
 * stays trivially testable.
 */
export function vocabCounts(ids: string[]): {
  total: number;
  known: number;
  learning: number;
  unseen: number;
} {
  const progress = getVocabProgress();
  let known = 0;
  let learning = 0;
  for (const id of ids) {
    const state = progress[id];
    if (!state) continue;
    if (state.status === "known") known += 1;
    else learning += 1;
  }
  return { total: ids.length, known, learning, unseen: ids.length - known - learning };
}

/** The drill deck: still-unlearned ids, in the order given. */
export function learningVocabIds(ids: string[]): string[] {
  const progress = getVocabProgress();
  return ids.filter((id) => progress[id]?.status === "learning");
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

/**
 * The persisted theme palette name. Stored under the legacy `pues:theme-mode`
 * key (and the matching `user_preferences.theme_mode` column) so cloud sync
 * keeps working without a migration — we just store a palette name now.
 * Old `"dark"`/`"light"` values migrate to Almagre/Papel on read.
 */
export function getTheme(): ThemeName {
  const raw = read<string>(K_THEME_MODE, "Almagre");
  if ((THEME_NAMES as string[]).includes(raw)) return raw as ThemeName;
  return raw === "light" ? "Papel" : "Almagre";
}

export function setTheme(name: ThemeName): ThemeName {
  write(K_THEME_MODE, name);
  return name;
}

/* ---------- Situation phrase English glosses ---------- */

export function getPhraseEnglishVisible(): boolean {
  return read<boolean>(K_PHRASE_ENGLISH_VISIBLE, true);
}

export function setPhraseEnglishVisible(visible: boolean): boolean {
  write(K_PHRASE_ENGLISH_VISIBLE, visible);
  return visible;
}

/* ---------- Copia los tallos — the week's handwriting sheet ---------- */
// A map from "<week>:<promptId>" to the IndexedDB key holding that line's
// strokes (see `lib/inkStore.ts`). The stem's promptId is stable across
// rebuilds, so a copied line survives content edits elsewhere in the week.

export type WeekCopyMap = Record<string, string>;

export function weekCopyKey(week: number, promptId: string): string {
  return `${week}:${promptId}`;
}

export function getWeekCopy(): WeekCopyMap {
  const raw = read<unknown>(K_WEEK_COPY, {});
  if (!isObject(raw)) return {};
  const out: WeekCopyMap = {};
  for (const [k, v] of Object.entries(raw)) if (typeof v === "string") out[k] = v;
  return out;
}

export function setWeekCopyInk(week: number, promptId: string, inkId: string): void {
  const next = { ...getWeekCopy(), [weekCopyKey(week, promptId)]: inkId };
  write(K_WEEK_COPY, next);
}

export function clearWeekCopyInk(week: number, promptId: string): void {
  const next = getWeekCopy();
  delete next[weekCopyKey(week, promptId)];
  write(K_WEEK_COPY, next);
}

/* ---------- Handwriting input (Formar la frase) ---------- */
// Which input the Escribir mode opens with. "auto" means the surface decides
// from the viewport — a tablet has room for a pencil, a phone does not.

export type InkInput = "auto" | "ink" | "type";

export function getInkInput(): InkInput {
  const value = read<string>(K_INK_INPUT, "auto");
  return value === "ink" || value === "type" ? value : "auto";
}

export function setInkInput(value: InkInput): InkInput {
  write(K_INK_INPUT, value);
  return value;
}

/* ---------- Text size ---------- */

const TEXT_SIZES: TextSize[] = ["default", "comfortable", "large"];

export function getTextSize(): TextSize {
  const size = read<string>(K_TEXT_SIZE, "default");
  return TEXT_SIZES.includes(size as TextSize) ? (size as TextSize) : "default";
}

export function setTextSize(size: TextSize): TextSize {
  write(K_TEXT_SIZE, size);
  return size;
}

/* ---------- Reset progress ---------- */

/** Wipe learning progress while keeping appearance and account preferences. */
export function resetProgress(): void {
  clearAllProgressLocal();
  if (isBrowser()) {
    window.dispatchEvent(new Event("pues:stats-change"));
  }
}
