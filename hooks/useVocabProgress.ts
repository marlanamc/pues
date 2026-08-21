"use client";

import { useCallback, useSyncExternalStore } from "react";
import { getVocabProgress, type VocabProgress } from "@/lib/store";

/**
 * Live view of `pues:vocab`.
 *
 * The store dispatches `pues:stats-change` on every vocab write, which is what
 * moves the counts on the theme screen the moment a drill ends, with no
 * reload. `storage` covers a second tab.
 *
 * Snapshot is cached at module scope because getVocabProgress() parses JSON and
 * returns a fresh object each call — useSyncExternalStore compares snapshots by
 * identity, so returning a new one every time would re-render forever. The
 * cache is dropped whenever a subscribed event fires, so the next read is fresh.
 */

const EMPTY: VocabProgress = {};

let cache: VocabProgress | null = null;

function subscribe(callback: () => void) {
  function onChange() {
    cache = null;
    callback();
  }
  window.addEventListener("pues:stats-change", onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener("pues:stats-change", onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): VocabProgress {
  if (cache === null) cache = getVocabProgress();
  return cache;
}

export function useVocabProgress() {
  const progress = useSyncExternalStore(subscribe, getSnapshot, () => EMPTY);

  /**
   * Force a re-read. Writes already emit `pues:stats-change`, so this is only
   * for callers that want to be explicit about it after finishing a run.
   */
  const refresh = useCallback(() => {
    cache = null;
    window.dispatchEvent(new Event("pues:stats-change"));
  }, []);

  return { progress, refresh };
}
