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
 *
 * Durability:
 *  - Merges are last-write-wins by *timestamp* for preferences and questionnaire
 *    fields. Additive stats (counters, curriculum day) take the max from each
 *    side so a stale device cannot roll back progress.
 *  - Voice recordings (IndexedDB) round-trip through the `recordings` bucket so
 *    they appear on every device, not just where they were captured.
 *  - Failed pushes are queued in localStorage and retried when the connection
 *    returns; the UI is notified via `pues:sync-ok` / `pues:sync-error`.
 */

import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { getRecording, putRecording, recordingExists } from "@/lib/audioStore";
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
  statsUpdated: "pues:stats-updated",
  questionnaireUpdated: "pues:questionnaire-updated",
  // Keys whose last push failed and need retrying when we're back online.
  syncQueue: "pues:sync-queue",
  // Recording ids already uploaded to storage (skip re-upload).
  audioUploaded: "pues:audio-uploaded",
} as const;

// Keys that never leave the device (in-progress drafts, today's prompt cursor,
// sentence-builder level progress — no cloud table yet).
const LOCAL_ONLY = new Set<string>([
  "pues:draft",
  "pues:session",
  "pues:sb-progress",
]);

const RECORDINGS_BUCKET = "recordings";

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
// Keys mutated while the first pull is in flight — flushed once it settles so a
// write during auth/hydration is never clobbered by incoming remote state.
const pendingDuringHydration = new Set<string>();

function isBrowser() {
  return typeof window !== "undefined";
}

function isOnline() {
  return !isBrowser() || navigator.onLine !== false;
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

function applyTheme(value: unknown) {
  if (!isBrowser()) return;
  const names = ["Almagre", "Pizarra", "Ciruela", "Bosque", "Medianoche", "Papel", "Niebla"];
  let name = typeof value === "string" && names.includes(value) ? value : null;
  if (!name) name = value === "light" ? "Papel" : "Almagre"; // migrate legacy
  const root = document.documentElement;
  root.dataset.theme = name;
  root.classList.toggle("light", name === "Papel" || name === "Niebla");
}

/* ---------- Retry queue (failed pushes) ---------- */

function readQueue(): Set<string> {
  return new Set(readLocal<string[]>(K.syncQueue, []));
}

function writeQueue(queue: Set<string>) {
  writeLocalRaw(K.syncQueue, [...queue]);
}

function enqueue(key: string) {
  const q = readQueue();
  q.add(key);
  writeQueue(q);
}

function dequeue(key: string) {
  const q = readQueue();
  if (q.delete(key)) writeQueue(q);
}

/* ---------- Thoughts (union by id, with recording round-trip) ---------- */

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
    // audio_path is filled in by pushThoughts after the blob is uploaded.
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
    // The recording id is the last path segment of audio_path; preserving it
    // lets this device download the blob into its own IndexedDB.
    audioId: r.audio_path ? r.audio_path.split("/").pop() || undefined : undefined,
    promptId: r.prompt_id ?? undefined,
    createdAt: r.created_at,
  };
}

/**
 * Union local + remote thoughts by id. A local recording reference (audioId)
 * always wins so we never drop the pointer to a blob held only on this device.
 * Pure — exported for unit testing.
 */
export function mergeThoughts(local: Thought[], remote: Thought[]): Thought[] {
  const byId = new Map<string, Thought>();
  for (const t of remote) byId.set(t.id, t);
  for (const t of local) {
    const existing = byId.get(t.id);
    byId.set(t.id, existing ? { ...existing, audioId: t.audioId ?? existing.audioId } : t);
  }
  return [...byId.values()].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/** Pull blobs for any thought whose recording isn't on this device yet. */
async function downloadMissingRecordings(supabase: Supabase, thoughts: Thought[]) {
  if (!userId) return;
  for (const t of thoughts) {
    if (!t.audioId) continue;
    if (await recordingExists(t.audioId)) continue;
    try {
      const { data, error } = await supabase.storage
        .from(RECORDINGS_BUCKET)
        .download(`${userId}/${t.audioId}`);
      if (!error && data) await putRecording(t.audioId, data);
    } catch {
      /* offline / missing object — leave the thought without local audio */
    }
  }
}

function isThoughtRow(r: unknown): r is ThoughtRow {
  return (
    typeof r === "object" &&
    r !== null &&
    typeof (r as ThoughtRow).id === "string" &&
    typeof (r as ThoughtRow).created_at === "string" &&
    typeof (r as ThoughtRow).sentence === "string"
  );
}

async function pullThoughts(supabase: Supabase) {
  const { data, error } = await supabase.from("thoughts").select("*");
  if (error || !data) return;
  // Drop any malformed rows before they reach local state.
  const remote = (data as unknown[]).filter(isThoughtRow).map(rowToThought);
  const local = readLocal<Thought[]>(K.thoughts, []);
  const merged = mergeThoughts(local, remote);
  writeLocalRaw(K.thoughts, merged);
  await downloadMissingRecordings(supabase, merged);
}

/** Upload a recording once; remember it so later pushes don't re-upload. */
async function uploadRecording(supabase: Supabase, audioId: string): Promise<string | null> {
  if (!userId) return null;
  const path = `${userId}/${audioId}`;
  const uploaded = new Set(readLocal<string[]>(K.audioUploaded, []));
  if (uploaded.has(audioId)) return path;
  const blob = await getRecording(audioId);
  if (!blob) return null;
  const { error } = await supabase.storage.from(RECORDINGS_BUCKET).upload(path, blob, {
    upsert: true,
    contentType: blob.type || "audio/webm",
  });
  if (error) return null;
  uploaded.add(audioId);
  writeLocalRaw(K.audioUploaded, [...uploaded]);
  return path;
}

async function pushThoughts(supabase: Supabase) {
  if (!userId) return;
  const local = readLocal<Thought[]>(K.thoughts, []);
  if (local.length === 0) return;
  const rows = await Promise.all(
    local.map(async (t) => {
      const row = thoughtToRow(t, userId!);
      if (t.audioId) row.audio_path = await uploadRecording(supabase, t.audioId);
      return row;
    })
  );
  const { error } = await supabase.from("thoughts").upsert(rows, { onConflict: "id" });
  if (error) throw error;
}

/* ---------- Session stats (counters union, newest write wins index) ---------- */

type StatsRow = {
  days_practiced: number;
  sentences_created: number;
  frames_explored: string[];
  last_session_date: string | null;
  current_day_index: number;
  updated_at?: string | null;
};

/**
 * Merge stats. Additive counters take the max from each side. Curriculum day
 * (`currentDayIndex`) and `lastSessionDate` also take the max so a stale device
 * that syncs later cannot roll back progress made on another device.
 */
export function mergeStats(
  local: SessionStats,
  remote: StatsRow,
  _localUpdated: string,
  _remoteUpdated: string
): SessionStats {
  const remoteIndex = remote.current_day_index ?? 0;
  const localIndex = local.currentDayIndex ?? 0;
  return {
    daysPracticed: Math.max(local.daysPracticed, remote.days_practiced ?? 0),
    sentencesCreated: Math.max(local.sentencesCreated, remote.sentences_created ?? 0),
    framesExplored: Array.from(
      new Set([...(local.framesExplored ?? []), ...(remote.frames_explored ?? [])])
    ),
    lastSessionDate: laterSessionDate(local.lastSessionDate, remote.last_session_date),
    currentDayIndex: Math.max(localIndex, remoteIndex),
  };
}

function laterSessionDate(
  local: string | null | undefined,
  remote: string | null | undefined
): string | null {
  if (!local) return remote ?? null;
  if (!remote) return local;
  return local > remote ? local : remote;
}

async function pullStats(supabase: Supabase) {
  const { data } = await supabase
    .from("session_stats")
    .select("*")
    .maybeSingle();
  if (!data || typeof (data as StatsRow).days_practiced !== "number") return;
  const remote = data as StatsRow;
  const local = readLocal<SessionStats>(K.stats, EMPTY_STATS);
  const localUpdated = readLocal<string>(K.statsUpdated, "");
  const remoteUpdated = remote.updated_at ?? "";
  writeLocalRaw(K.stats, mergeStats(local, remote, localUpdated, remoteUpdated));
  if (remoteUpdated > localUpdated) writeLocalRaw(K.statsUpdated, remoteUpdated);
}

async function pushStats(supabase: Supabase) {
  if (!userId) return;
  const local = readLocal<SessionStats>(K.stats, EMPTY_STATS);
  const localUpdated = readLocal<string>(K.statsUpdated, "");
  const { data } = await supabase.from("session_stats").select("*").maybeSingle();
  const merged =
    data && typeof (data as StatsRow).days_practiced === "number"
      ? mergeStats(local, data as StatsRow, localUpdated, (data as StatsRow).updated_at ?? "")
      : local;
  writeLocalRaw(K.stats, merged);

  const now = new Date().toISOString();
  const { error } = await supabase.from("session_stats").upsert(
    {
      user_id: userId,
      days_practiced: merged.daysPracticed,
      sentences_created: merged.sentencesCreated,
      frames_explored: merged.framesExplored,
      last_session_date: merged.lastSessionDate,
      current_day_index: merged.currentDayIndex,
      updated_at: now,
    },
    { onConflict: "user_id" }
  );
  if (error) throw error;
  writeLocalRaw(K.statsUpdated, now);
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
  const { error } = await supabase.from("practice_flags").upsert(rows, {
    onConflict: "user_id,prompt_id",
  });
  if (error) throw error;
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
  const { error } = await supabase.from("user_preferences").upsert(
    {
      user_id: userId,
      audio_speed: readLocal<string>(K.audioSpeed, "normal"),
      theme_mode: readLocal<string>(K.themeMode, "Almagre"),
      sidebar_visible: readLocal<boolean>(K.sidebar, true),
      phrase_english_visible: readLocal<boolean>(K.phraseEnglish, false),
      updated_at: now,
    },
    { onConflict: "user_id" }
  );
  if (error) throw error;
  writeLocalRaw(K.prefsUpdated, now);
}

/* ---------- Questionnaire answers (field-level merge) ---------- */

type QuestionnaireAnswers = Record<string, unknown>;

/**
 * Merge questionnaire answers per field rather than replacing the whole blob, so
 * answering different questions on different devices never wipes the other's
 * work. On a conflicting key, the newer side wins. Pure — exported for testing.
 */
export function mergeQuestionnaire(
  local: QuestionnaireAnswers,
  remote: QuestionnaireAnswers,
  localUpdated: string,
  remoteUpdated: string
): QuestionnaireAnswers {
  const remoteNewer = (remoteUpdated ?? "") > (localUpdated ?? "");
  return remoteNewer ? { ...local, ...remote } : { ...remote, ...local };
}

async function pullQuestionnaire(supabase: Supabase) {
  const { data } = await supabase
    .from("questionnaire_answers")
    .select("*")
    .maybeSingle();
  if (!data) return;
  const remote = data as { answers: QuestionnaireAnswers; updated_at: string };
  const local = readLocal<QuestionnaireAnswers>(K.questionnaire, {});
  const localUpdated = readLocal<string>(K.questionnaireUpdated, "");
  const remoteUpdated = remote.updated_at ?? "";
  const merged = mergeQuestionnaire(local, remote.answers ?? {}, localUpdated, remoteUpdated);
  writeLocalRaw(K.questionnaire, merged);
  if (remoteUpdated > localUpdated) writeLocalRaw(K.questionnaireUpdated, remoteUpdated);
}

async function pushQuestionnaire(supabase: Supabase) {
  if (!userId) return;
  const now = new Date().toISOString();
  const { error } = await supabase.from("questionnaire_answers").upsert(
    {
      user_id: userId,
      answers: readLocal<QuestionnaireAnswers>(K.questionnaire, {}),
      updated_at: now,
    },
    { onConflict: "user_id" }
  );
  if (error) throw error;
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
    emit("pues:sync-error");
  } finally {
    hydrating = false;
  }
  // Replay anything the user changed while the pull was in flight.
  flushPending();
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
    emit("pues:sync-ok");
  } catch (error) {
    console.warn("[pues] sync push failed:", error);
    emit("pues:sync-error");
  }
}

async function runPush(supabase: Supabase, key: string) {
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
}

async function pushKey(key: string) {
  if (!userId) return;
  // Offline: don't even try — park it for the next `online` event.
  if (!isOnline()) {
    enqueue(key);
    emit("pues:sync-error");
    return;
  }
  const supabase = createClient();
  try {
    await runPush(supabase, key);
    dequeue(key);
    emit("pues:sync-ok");
  } catch (error) {
    console.warn("[pues] sync push failed:", key, error);
    enqueue(key);
    emit("pues:sync-error");
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

/** Replay keys captured while a pull was hydrating local state. */
function flushPending() {
  if (pendingDuringHydration.size === 0) return;
  const keys = [...pendingDuringHydration];
  pendingDuringHydration.clear();
  for (const key of keys) schedulePush(key);
}

/** Retry every key parked while offline / after a failed push. */
export function flushSyncQueue() {
  if (!userId || !isOnline()) return;
  const queue = readQueue();
  for (const key of queue) void pushKey(key);
}

/** Whether any writes are still waiting to reach the server. */
export function hasPendingSync(): boolean {
  return readQueue().size > 0;
}

function onMutate(event: Event) {
  const key = (event as CustomEvent<{ key?: string }>).detail?.key;
  if (!key) return;
  // While the first/any pull is settling, hold writes so remote state doesn't
  // overwrite them; replay once it finishes (flushPending).
  if (hydrating) {
    if (!LOCAL_ONLY.has(key)) pendingDuringHydration.add(key);
    return;
  }
  schedulePush(key);
}

async function maybePull() {
  if (!userId || Date.now() - lastPull < 5000) return;
  lastPull = Date.now();
  await pullAll(createClient());
}

function onFocus() {
  void maybePull();
  flushSyncQueue();
}

function onVisible() {
  if (document.visibilityState === "visible") {
    void maybePull();
    flushSyncQueue();
  }
}

function onOnline() {
  flushSyncQueue();
  void maybePull();
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

  // Guard writes from the moment we commit to syncing through the first pull, so
  // a mutation during auth/hydration is captured (pendingDuringHydration) rather
  // than clobbered by incoming remote state.
  hydrating = true;
  let user;
  try {
    ({
      data: { user },
    } = await supabase.auth.getUser());
  } catch {
    user = null;
  }
  if (!user) {
    hydrating = false;
    return;
  }
  if (started && userId === user.id) {
    await pullAll(supabase);
    return;
  }

  userId = user.id;
  lastPull = 0;

  if (!started) {
    window.addEventListener("pues:mutate", onMutate as EventListener);
    window.addEventListener("focus", onFocus);
    window.addEventListener("online", onOnline);
    document.addEventListener("visibilitychange", onVisible);
    started = true;
  }

  await pullAll(supabase); // clears hydrating + flushes pending in its finally
  await pushAll(supabase);
  flushSyncQueue();
  subscribeRealtime(supabase);
  emit("pues:sync-change");
}

/** Tear down sync listeners and clear the active user (e.g. on sign-out). */
export function stopSync() {
  if (!isBrowser()) return;
  for (const timer of pushTimers.values()) clearTimeout(timer);
  pushTimers.clear();
  pendingDuringHydration.clear();
  if (realtimeChannel) {
    const supabase = createClient();
    void supabase.removeChannel(realtimeChannel);
    realtimeChannel = null;
  }
  if (started) {
    window.removeEventListener("pues:mutate", onMutate as EventListener);
    window.removeEventListener("focus", onFocus);
    window.removeEventListener("online", onOnline);
    document.removeEventListener("visibilitychange", onVisible);
    started = false;
  }
  userId = null;
  lastPull = 0;
  hydrating = false;
}
