"use client";

import { useEffect } from "react";
import "./globals.css";

/**
 * Last-resort boundary. Catches errors thrown in the root layout itself, so it
 * must render its own <html>/<body> and re-apply the saved theme (the normal
 * layout's theme script never runs when this is active).
 */
const themeModeScript = `
try {
  var names = ["Almagre","Pizarra","Ciruela","Bosque","Medianoche","Papel","Niebla"];
  var t = JSON.parse(localStorage.getItem("pues:theme-mode") || 'null');
  if (names.indexOf(t) < 0) t = (t === "light") ? "Papel" : "Almagre";
  var root = document.documentElement;
  root.dataset.theme = t;
  root.classList.toggle("light", t === "Papel" || t === "Niebla");
} catch {}
`;

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[pues] global error:", error);
  }, [error]);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-bg text-ink antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeModeScript }} />
        <div className="flex min-h-dvh flex-col items-center justify-center gap-6 px-6 text-center">
          <div className="flex flex-col gap-2">
            <p className="mono-cap text-ink-mute">Algo salió mal</p>
            <h1 className="font-display text-2xl text-ink">
              La aplicación tropezó.
            </h1>
            <p className="max-w-[28ch] text-ink-soft">
              Tu trabajo está guardado en este dispositivo. Vuelve a cargar para
              continuar.
            </p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="mono-cap inline-flex items-center justify-center rounded-full bg-accent px-5 py-2 text-accent-ink transition-opacity hover:opacity-90"
          >
            Recargar
          </button>
        </div>
      </body>
    </html>
  );
}
