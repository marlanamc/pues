"use client";

import { useEffect, useState } from "react";
import { type SessionStats, getStats } from "@/lib/store";

const EMPTY: SessionStats = {
  daysPracticed: 0,
  sentencesCreated: 0,
  framesExplored: [],
  lastSessionDate: null,
  currentDayIndex: 0,
};

export function useStats() {
  const [stats, setStats] = useState<SessionStats>(EMPTY);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setStats(getStats());
    setHydrated(true);
  }, []);

  return { stats, hydrated };
}
