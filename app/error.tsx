"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * Route-level error boundary. Catches render/runtime errors in any page or
 * component below it so a single throw degrades to a calm recovery card
 * instead of a blank screen.
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[pues] route error:", error);
  }, [error]);

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
      <div className="flex flex-col gap-2">
        <p className="mono-cap text-ink-mute">Algo salió mal</p>
        <h1 className="font-display text-2xl text-ink">
          Esta página tropezó.
        </h1>
        <p className="max-w-[28ch] text-ink-soft">
          Tu trabajo está guardado. Puedes reintentar o volver al inicio.
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={reset}
          className="mono-cap inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-accent-ink transition-opacity hover:opacity-90"
        >
          Reintentar
        </button>
        <Link
          href="/"
          className="mono-cap inline-flex items-center justify-center rounded-full border border-rule px-5 py-2 text-ink-soft transition-colors hover:border-accent/60 hover:text-accent"
        >
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}
