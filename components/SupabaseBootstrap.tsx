"use client";

import { useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { startSync } from "@/lib/sync";

/**
 * Ensures a Supabase session exists, then starts local-first cloud sync.
 * Uses anonymous auth until email login is wired up — RLS still applies per
 * user. Note: anonymous accounts are per-device, so true cross-device sync
 * begins once the same email account signs in on each device.
 */
export function SupabaseBootstrap() {
  useEffect(() => {
    if (!isSupabaseConfigured()) return;

    const supabase = createClient();
    let cancelled = false;

    void (async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        const { error } = await supabase.auth.signInAnonymously();
        if (error) {
          console.warn("[pues] Supabase anonymous sign-in:", error.message);
          return;
        }
      }

      if (!cancelled) void startSync();
    })();

    // Re-sync when the user signs in (e.g. anonymous → email login).
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") void startSync();
    });

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, []);

  return null;
}
