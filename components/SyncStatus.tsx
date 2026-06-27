"use client";

import { useEffect, useState } from "react";
import { flushSyncQueue, hasPendingSync } from "@/lib/sync";

type State = "synced" | "offline" | "pending";

/**
 * Quiet sync indicator for the signed-in account card. Tells the user when a
 * write hasn't reached the server yet (offline or failed) and offers a manual
 * retry, so sync failures aren't silent.
 */
export function SyncStatus() {
  const [state, setState] = useState<State>("synced");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    function recompute() {
      if (typeof navigator !== "undefined" && navigator.onLine === false) {
        setState("offline");
      } else {
        setState(hasPendingSync() ? "pending" : "synced");
      }
    }

    recompute();
    const events = ["pues:sync-ok", "pues:sync-error", "online", "offline"];
    for (const e of events) window.addEventListener(e, recompute);
    return () => {
      for (const e of events) window.removeEventListener(e, recompute);
    };
  }, []);

  // Avoid an SSR/client mismatch on navigator.onLine.
  if (!mounted || state === "synced") {
    return (
      <p className="mono-cap text-ink-mute" suppressHydrationWarning>
        Sincronizado
      </p>
    );
  }

  if (state === "offline") {
    return (
      <p className="mono-cap" style={{ color: "var(--ink-soft)" }}>
        Sin conexión — se reintentará
      </p>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <p className="mono-cap" style={{ color: "var(--accent)" }}>
        No se pudo sincronizar
      </p>
      <button
        type="button"
        onClick={() => flushSyncQueue()}
        className="mono-cap rounded-full border border-rule px-2.5 py-1 text-ink-soft transition-colors hover:border-accent/60 hover:text-accent"
      >
        Reintentar
      </button>
    </div>
  );
}
