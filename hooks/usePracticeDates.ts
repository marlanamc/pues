"use client";

import { useEffect, useState } from "react";
import {
  getReadingLog,
  getSbProgress,
  listSentenceFormerEntries,
  listThoughts,
} from "@/lib/store";
import { collectPracticeDates } from "@/lib/streak";

const EVENTS = ["pues:stats-change", "pues:sync-change"] as const;

/**
 * The set of YYYY-MM-DD days with any recorded practice — spoken thoughts,
 * La lectura, Sentence Former, or a finished Sentence Builder level — so the
 * streak reflects whichever ritual was done that day, not just the speak flow.
 */
export function usePracticeDates() {
  const [practiced, setPracticed] = useState<Set<string>>(() => new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    function refresh() {
      setPracticed(
        collectPracticeDates({
          thoughts: listThoughts(),
          dayKeys: getReadingLog(),
          timestamps: [
            ...listSentenceFormerEntries().map((e) => e.createdAt),
            ...Object.values(getSbProgress())
              .map((r) => r.lastPlayed)
              .filter((v): v is string => typeof v === "string"),
          ],
        })
      );
    }

    refresh();
    setHydrated(true);

    for (const event of EVENTS) window.addEventListener(event, refresh);
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      for (const event of EVENTS) window.removeEventListener(event, refresh);
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  return { practiced, hydrated };
}
