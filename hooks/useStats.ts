"use client";

import { useCallback, useEffect, useState } from "react";
import { type SessionStats, getStats } from "@/lib/store";

const EMPTY: SessionStats = {
  daysPracticed: 0,
  sentencesCreated: 0,
  framesExplored: [],
  lastSessionDate: null,
  currentDayIndex: 0,
};

const STATS_EVENTS = ["pues:stats-change", "pues:sync-change"] as const;

export function useStats() {
  const [stats, setStats] = useState<SessionStats>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  const refresh = useCallback(() => {
    setStats(getStats());
  }, []);

  useEffect(() => {
    refresh();
    setHydrated(true);

    function sync() {
      refresh();
    }

    for (const event of STATS_EVENTS) {
      window.addEventListener(event, sync);
    }
    window.addEventListener("focus", sync);
    window.addEventListener("storage", sync);
    return () => {
      for (const event of STATS_EVENTS) {
        window.removeEventListener(event, sync);
      }
      window.removeEventListener("focus", sync);
      window.removeEventListener("storage", sync);
    };
  }, [refresh]);

  return { stats, hydrated, refresh };
}
