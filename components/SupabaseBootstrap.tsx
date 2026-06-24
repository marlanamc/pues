"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { startSync, stopSync } from "@/lib/sync";
import { runMigrations } from "@/lib/store";

async function ensureSessionAndSync() {
  const supabase = createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    const { error } = await supabase.auth.signInAnonymously();
    if (error) {
      // Anonymous auth is optional — password sign-in still enables cross-device sync.
      const disabled =
        error.message.includes("Anonymous sign-ins are disabled") ||
        (error as { code?: string }).code === "anonymous_provider_disabled";
      if (!disabled) {
        console.warn("[pues] Supabase anonymous sign-in:", error.message);
      }
      return;
    }
  }

  await startSync();
}

/**
 * Ensures a Supabase session exists, then starts local-first cloud sync.
 * Anonymous sign-in is a per-device fallback; cross-device sync requires the
 * same email + password account on each device (Settings → Sign in).
 */
export function SupabaseBootstrap() {
  useEffect(() => {
    // Bring persisted localStorage up to the current schema before anything
    // reads it — runs whether or not cloud sync is configured.
    runMigrations();

    if (!isSupabaseConfigured()) return;

    const supabase = createClient();
    let cancelled = false;

    void (async () => {
      await ensureSessionAndSync();
      if (cancelled) stopSync();
    })();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") void startSync();
      if (event === "SIGNED_OUT") {
        stopSync();
        void ensureSessionAndSync();
      }
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
