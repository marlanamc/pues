"use client";

/**
 * Cloud sync layer (local-first).
 *
 * localStorage stays the synchronous source of truth the UI reads from
 * (instant, offline-capable). This module mirrors those writes up to Supabase
 * and pulls remote state back down — merging both directions — so a signed-in
 * user sees the same journal, stats, and preferences on every device.
 *
 * IMPORTANT: cross-device sync only works when each device authenticates as the
 * SAME user. Anonymous sign-in creates a distinct user per device, so real
 * cross-device sync begins once email login (or linking the anon account to an
 * email) is in place. Until then this still keeps a single device's data backed
 * up and ready to merge.
 *
 * The store modules (lib/store.ts, lib/questionnaireStore.ts) stay pure
 * localStorage and simply dispatch a `pues:mutate` event on every write. This
 * module listens for that, debounces, and pushes the changed key upstream.
 */

import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { SessionStats, Thought } from "@/lib/store";

const K = {
  thoughts: "pues:thoughts",
  stats: "pues:stats",
  practice: "pues:practice",
  audioSpeed: "pues:audio-speed",
  themeMode: "pues:theme-mode",
  sidebar: "pues:sidebar-visible",
  phraseEnglish: "pues:phrase-english-visible",
  questionnaire: "pues:questionnaire-answers",
  // Local bookkeeping for last-write-wins on blob-style records.
  prefsUpdated: "pues:prefs-updated",
  questionnaireUpdated: "pues:questionnaire-updated",
} as const;

// Keys that never leave the device (in-progress drafts, today's prompt cursor,
// sentence-builder level progress — no cloud table yet).
const LOCAL_ONLY = new Set<string>([
  "pues:draft",
  "pues:session",
  "pues:sb-progress",
]);

const EMPTY_STATS: SessionStats = {
  daysPracticed: 0,
  sentencesCreated: 0,
  framesExplored: [],
  lastSessionDate: null,
  currentDayIndex: 0,
};

type Supabase = ReturnType<typeof createClient>;

let userId: string | null = null;
let started = false;
let hydrating = false;
let lastPull = 0;
let realtimeChannel: ReturnType<Supabase["channel"]> | null = null;
const pushTimers = new Map<string, ReturnType<typeof setTimeout>>();

function isBrowser() {
  return typeof window !== "undefined";
}

function readLocal<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : (JSON.parse(raw) as T);
  } catch {
    return fallback;
  }
}

/** Write to localStorage WITHOUT triggering a push (used while hydrating). */
function writeLocalRaw(key: string, value: unknown) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota / private mode */
  }
}

function emit(event: string) {
  if (isBrowser()) window.dispatchEvent(new Event(event));
}

/** Nudge any mounted UI to re-read from localStorage after a pull. */
function notifyUi() {
  emit("pues:stats-change");
  emit("pues:questionnaire-change");
  emit("pues:sync-change");
}

function applyTheme(mode: unknown) {
  if (!isBrowser()) return;
  document.documentElement.classList.toggle("light", mode === "light");
}

/* ---------- Thoughts (union by id) ---------- */

type ThoughtRow = {
  id: string;
  user_id: string;
  frame_stem: string;
  situation_slug: string;
  situation_label: string;
  sentence: string;
  english: string | null;
  reflection: Thought["reflection"];
  practice_flag: boolean;
  audio_path: string | null;
  prompt_id: string | null;
  created_at: string;
};

function thoughtToRow(t: Thought, uid: string): ThoughtRow {
  return {
    id: t.id,
    user_id: uid,
    frame_stem: t.frameStem,
    situation_slug: t.situationSlug,
    situation_label: t.situationLabel,
    sentence: t.sentence,
    english: t.english ?? null,
    reflection: t.reflection,
    practice_flag: t.practiceFlag ?? false,
    audio_path: null,
    prompt_id: t.promptId ?? null,
    created_at: t.createdAt,
  };
}

function rowToThought(r: ThoughtRow): Thought {
  return {
    id: r.id,
    frameStem: r.frame_stem,
    situationSlug: r.situation_slug,
    situationLabel: r.situation_label,
    sentence: r.sentence,
    english: r.english ?? undefined,
    reflection: r.reflection,
    practiceFlag: r.practice_flag,
    promptId: r.prompt_id ?? undefined,
    createdAt: r.created_at,
  };
}

async function pullThoughts(supabase: Supabase) {
  const { data, error } = await supabase.from("thoughts").select("*");
  if (error || !data) return;
  const remote = (data as ThoughtRow[]).map(rowToThought);
  const local = readLocal<Thought[]>(K.thoughts, []);

  const byId = new Map<string, Thought>();
  for (const t of remote) byId.set(t.id, t);
  for (const t of local) {
    const existing = byId.get(t.id);
    // The recording lives in IndexedDB on this device only — never lose its ref.
    byId.set(t.id, existing ? { ...existing, audioId: t.audioId ?? existing.audioId } : t);
  }

  const merged = [...byId.values()].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt)
  );
  writeLocalRaw(K.thoughts, merged);
}

async function pushThoughts(supabase: Supabase) {
  if (!userId) return;
  const local = readLocal<Thought[]>(K.thoughts, []);
  if (local.length === 0) return;
  const rows = local.map((t) => thoughtToRow(t, userId!));
  await supabase.from("thoughts").upsert(rows, { onConflict: "id" });
}

/* ---------- Session stats (merge counters, newest day wins index) ---------- */

type StatsRow = {
  days_practiced: number;
  sentences_created: number;
  frames_explored: string[];
  last_session_date: string | null;
  current_day_index: number;
};

async function pullStats(supabase: Supabase) {
  const { data } = await supabase
    .from("session_stats")
    .select("*")
    .maybeSingle();
  if (!data) return;
  const remote = data as StatsRow;
  const local = readLocal<SessionStats>(K.stats, EMPTY_STATS);

  const localNewer = (local.lastSessionDate ?? "") >= (remote.last_session_date ?? "");
  const merged: SessionStats = {
    daysPracticed: Math.max(local.daysPracticed, remote.days_practiced ?? 0),
    sentencesCreated: Math.max(local.sentencesCreated, remote.sentences_created ?? 0),
    framesExplored: Array.from(
      new Set([...(local.framesExplored ?? []), ...(remote.frames_explored ?? [])])
    ),
    lastSessionDate:
      (local.lastSessionDate ?? "") >= (remote.last_session_date ?? "")
        ? local.lastSessionDate
        : remote.last_session_date,
    currentDayIndex: localNewer
      ? local.currentDayIndex
      : remote.current_day_index ?? local.currentDayIndex,
  };
  writeLocalRaw(K.stats, merged);
}

async function pushStats(supabase: Supabase) {
  if (!userId) return;
  const s = readLocal<SessionStats>(K.stats, EMPTY_STATS);
  await supabase.from("session_stats").upsert(
    {
      user_id: userId,
      days_practiced: s.daysPracticed,
      sentences_created: s.sentencesCreated,
      frames_explored: s.framesExplored,
      last_session_date: s.lastSessionDate,
      current_day_index: s.currentDayIndex,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
}

/* ---------- Practice flags (union of prompt ids) ---------- */

async function pullPractice(supabase: Supabase) {
  const { data } = await supabase.from("practice_flags").select("prompt_id");
  if (!data) return;
  const remote = (data as { prompt_id: string }[]).map((r) => r.prompt_id);
  const local = readLocal<string[]>(K.practice, []);
  writeLocalRaw(K.practice, Array.from(new Set([...local, ...remote])));
}

async function pushPractice(supabase: Supabase) {
  if (!userId) return;
  const local = readLocal<string[]>(K.practice, []);
  if (local.length === 0) return;
  const rows = local.map((prompt_id) => ({ user_id: userId!, prompt_id }));
  await supabase.from("practice_flags").upsert(rows, {
    onConflict: "user_id,prompt_id",
  });
}

/* ---------- Preferences (last-write-wins by timestamp) ---------- */

type PrefsRow = {
  audio_speed: string;
  theme_mode: string;
  sidebar_visible: boolean;
  phrase_english_visible: boolean;
  updated_at: string;
};

async function pullPrefs(supabase: Supabase) {
  const { data } = await supabase
    .from("user_preferences")
    .select("*")
    .maybeSingle();
  if (!data) return;
  const remote = data as PrefsRow;
  const localUpdated = readLocal<string>(K.prefsUpdated, "");
  // Only adopt remote prefs if they're newer than our last local change.
  if ((remote.updated_at ?? "") <= localUpdated) return;

  writeLocalRaw(K.audioSpeed, remote.audio_speed);
  writeLocalRaw(K.themeMode, remote.theme_mode);
  writeLocalRaw(K.sidebar, remote.sidebar_visible);
  writeLocalRaw(K.phraseEnglish, remote.phrase_english_visible);
  writeLocalRaw(K.prefsUpdated, remote.updated_at);
  applyTheme(remote.theme_mode);
}

async function pushPrefs(supabase: Supabase) {
  if (!userId) return;
  const now = new Date().toISOString();
  await supabase.from("user_preferences").upsert(
    {
      user_id: userId,
      audio_speed: readLocal<string>(K.audioSpeed, "normal"),
      theme_mode: readLocal<string>(K.themeMode, "dark"),
      sidebar_visible: readLocal<boolean>(K.sidebar, true),
      phrase_english_visible: readLocal<boolean>(K.phraseEnglish, false),
      updated_at: now,
    },
    { onConflict: "user_id" }
  );
  writeLocalRaw(K.prefsUpdated, now);
}

/* ---------- Questionnaire answers (last-write-wins by timestamp) ---------- */

async function pullQuestionnaire(supabase: Supabase) {
  const { data } = await supabase
    .from("questionnaire_answers")
    .select("*")
    .maybeSingle();
  if (!data) return;
  const remote = data as { answers: Record<string, unknown>; updated_at: string };
  const localUpdated = readLocal<string>(K.questionnaireUpdated, "");
  if ((remote.updated_at ?? "") <= localUpdated) return;

  writeLocalRaw(K.questionnaire, remote.answers ?? {});
  writeLocalRaw(K.questionnaireUpdated, remote.updated_at);
}

async function pushQuestionnaire(supabase: Supabase) {
  if (!userId) return;
  const now = new Date().toISOString();
  await supabase.from("questionnaire_answers").upsert(
    {
      user_id: userId,
      answers: readLocal<Record<string, unknown>>(K.questionnaire, {}),
      updated_at: now,
    },
    { onConflict: "user_id" }
  );
  writeLocalRaw(K.questionnaireUpdated, now);
}

/* ---------- Orchestration ---------- */

async function pullAll(supabase: Supabase) {
  hydrating = true;
  try {
    await Promise.all([
      pullThoughts(supabase),
      pullStats(supabase),
      pullPractice(supabase),
      pullPrefs(supabase),
      pullQuestionnaire(supabase),
    ]);
  } catch (error) {
    console.warn("[pues] sync pull failed:", error);
  } finally {
    hydrating = false;
  }
  notifyUi();
}

async function pushAll(supabase: Supabase) {
  try {
    await Promise.all([
      pushThoughts(supabase),
      pushStats(supabase),
      pushPractice(supabase),
      pushPrefs(supabase),
      pushQuestionnaire(supabase),
    ]);
  } catch (error) {
    console.warn("[pues] sync push failed:", error);
  }
}

async function pushKey(key: string) {
  const supabase = createClient();
  try {
    switch (key) {
      case K.thoughts:
        await pushThoughts(supabase);
        break;
      case K.stats:
        await pushStats(supabase);
        break;
      case K.practice:
        await pushPractice(supabase);
        break;
      case K.audioSpeed:
      case K.themeMode:
      case K.sidebar:
      case K.phraseEnglish:
        await pushPrefs(supabase);
        break;
      case K.questionnaire:
        await pushQuestionnaire(supabase);
        break;
    }
  } catch (error) {
    console.warn("[pues] sync push failed:", key, error);
  }
}

function schedulePush(key: string) {
  if (!userId || LOCAL_ONLY.has(key)) return;
  const existing = pushTimers.get(key);
  if (existing) clearTimeout(existing);
  pushTimers.set(
    key,
    setTimeout(() => {
      pushTimers.delete(key);
      void pushKey(key);
    }, 600)
  );
}

function onMutate(event: Event) {
  if (hydrating) return;
  const key = (event as CustomEvent<{ key?: string }>).detail?.key;
  if (key) schedulePush(key);
}

async function maybePull() {
  if (!userId || Date.now() - lastPull < 5000) return;
  lastPull = Date.now();
  await pullAll(createClient());
}

function onFocus() {
  void maybePull();
}

function onVisible() {
  if (document.visibilityState === "visible") void maybePull();
}

function subscribeRealtime(supabase: Supabase) {
  if (realtimeChannel) void supabase.removeChannel(realtimeChannel);
  realtimeChannel = supabase
    .channel("pues-sync")
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "thoughts", filter: `user_id=eq.${userId}` },
      () => void maybePull()
    )
    .on(
      "postgres_changes",
      { event: "*", schema: "public", table: "session_stats", filter: `user_id=eq.${userId}` },
      () => void maybePull()
    )
    .subscribe();
}

/**
 * Begin (or re-target) cloud sync for the current user. Safe to call repeatedly;
 * it no-ops if already syncing the same user, and re-pulls if the user changed
 * (e.g. anonymous → email login).
 */
export async function startSync() {
  if (!isBrowser() || !isSupabaseConfigured()) return;
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;
  if (started && userId === user.id) return;

  userId = user.id;
  lastPull = 0;

  if (!started) {
    window.addEventListener("pues:mutate", onMutate as EventListener);
    window.addEventListener("focus", onFocus);
    document.addEventListener("visibilitychange", onVisible);
    started = true;
  }

  await pullAll(supabase);
  await pushAll(supabase);
  subscribeRealtime(supabase);
  emit("pues:sync-change");
}

/** Tear down sync listeners and clear the active user (e.g. on sign-out). */
export function stopSync() {
  if (!isBrowser()) return;
  for (const timer of pushTimers.values()) clearTimeout(timer);
  pushTimers.clear();
  if (realtimeChannel) {
    const supabase = createClient();
    void supabase.removeChannel(realtimeChannel);
    realtimeChannel = null;
  }
  if (started) {
    window.removeEventListener("pues:mutate", onMutate as EventListener);
    window.removeEventListener("focus", onFocus);
    document.removeEventListener("visibilitychange", onVisible);
    started = false;
  }
  userId = null;
  lastPull = 0;
  hydrating = false;
}
