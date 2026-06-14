"use client";

import { useCallback, useEffect, useState } from "react";
import { type Thought, listThoughts, saveThought } from "@/lib/store";

export function useThoughts() {
  const [thoughts, setThoughts] = useState<Thought[]>([]);
  const [hydrated, setHydrated] = useState(false);

  const refresh = useCallback(() => {
    setThoughts(listThoughts());
  }, []);

  useEffect(() => {
    refresh();
    setHydrated(true);
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
