"use client";

import { useCallback, useEffect, useState } from "react";
import { type Thought, listThoughts, saveThought } from "@/lib/store";

const THOUGHTS_EVENTS = ["pues:stats-change", "pues:sync-change"] as const;

export function useThoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [hydrated, setHydrated] = useState(false);

  const refresh = useCallback(() => {
    setThoughts(listThoughts());
  }, []);

  useEffect(() => {
    refresh();
    setHydrated(true);

    function sync() {
      refresh();
    }

    for (const event of THOUGHTS_EVENTS) {
      window.addEventListener(event, sync);
    }
    window.addEventListener("focus", sync);
    window.addEventListener("storage", sync);
    return () => {
      for (const event of THOUGHTS_EVENTS) {
        window.removeEventListener(event, sync);
      }
      window.removeEventListener("focus", sync);
      window.removeEventListener("storage", sync);
    };
  }, [refresh]);

  const add = useCallback(
    (input: Omit<Thought, "id" | "createdAt">) => {
      const t = saveThought(input);
      refresh();
      return t;
    },
    [refresh]
  );

  return { thoughts, add, refresh, hydrated };
}
