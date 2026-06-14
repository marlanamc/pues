"use client";

import { useCallback, useEffect, useState } from "react";
import {
  type Draft,
  clearDraft as clearDraftStore,
  getDraft,
  setDraft as setDraftStore,
} from "@/lib/store";

export function useFlowDraft() {
  const [draft, setDraft] = useState<Draft>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setDraft(getDraft());
    setHydrated(true);
  }, []);

  const patch = useCallback((p: Draft) => {
    setDraft(setDraftStore(p));
  }, []);

  const clear = useCallback(() => {
    clearDraftStore();
    setDraft({});
  }, []);

  return { draft, patch, clear, hydrated };
}
