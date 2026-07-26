"use client";

import { useState } from "react";
import { Gloss } from "@/components/Gloss";
import { getRecording } from "@/lib/audioStore";
import { downloadTextFile } from "@/lib/copyText";
import {
  getReadingLog,
  getSbProgress,
  getStats,
  listPracticeFlags,
  listSentenceFormerEntries,
  listThoughts,
} from "@/lib/store";

/**
 * A way out of the notebook.
 *
 * Everything Pues knows lives in localStorage and IndexedDB on this device;
 * clearing site data — or tapping Reiniciar progreso below — takes every
 * sentence and every recording with it. This writes the whole lot to one JSON
 * file, audio included, so the notebook is a thing you can keep.
 *
 * Read through the accessors in lib/store.ts rather than the raw keys: that
 * module is the persistence seam and already filters malformed rows.
 */

const EXPORT_VERSION = 1;

type ExportedRecording = { id: string; mime: string; base64: string };

/** Blob → bare base64 (the data: prefix is redundant once `mime` is alongside). */
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read failed"));
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      resolve(result.slice(result.indexOf(",") + 1));
    };
    reader.readAsDataURL(blob);
  });
}

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

function todayStamp(): string {
  const d = new Date();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function ExportCuadernoCard() {
  const [exporting, setExporting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  async function handleExport() {
    setExporting(true);
    setError(null);
    setDone(null);
    try {
      const thoughts = listThoughts();

      // Recordings are keyed by the audioId already on each thought, so the
      // thought list is the index — no extra IndexedDB enumeration needed.
      // A missing blob is ordinary (mic denied, private mode, another device
      // that never synced down), so skip it the way the audio layer does.
      const recordings: ExportedRecording[] = [];
      for (const t of thoughts) {
        if (!t.audioId) continue;
        const blob = await getRecording(t.audioId);
        if (!blob || blob.size === 0) continue;
        recordings.push({
          id: t.audioId,
          mime: blob.type || "audio/webm",
          base64: await blobToBase64(blob),
        });
      }

      const payload = {
        app: "pues",
        version: EXPORT_VERSION,
        exportedAt: new Date().toISOString(),
        thoughts,
        stats: getStats(),
        practiceFlags: listPracticeFlags(),
        readingLog: getReadingLog(),
        sentenceFormer: listSentenceFormerEntries(),
        sbProgress: getSbProgress(),
        recordings,
      };

      const text = JSON.stringify(payload, null, 2);
      downloadTextFile(
        text,
        `pues-cuaderno-${todayStamp()}.json`,
        "application/json;charset=utf-8",
      );

      const frases = thoughts.length === 1 ? "1 frase" : `${thoughts.length} frases`;
      const audio =
        recordings.length === 1 ? "1 grabación" : `${recordings.length} grabaciones`;
      setDone(
        `Listo — ${frases}, ${audio} · ${formatBytes(new Blob([text]).size)}`,
      );
    } catch {
      setError("No se pudo exportar. Inténtalo de nuevo.");
    } finally {
      setExporting(false);
    }
  }

  return (
    <>
      <div className="space-y-1">
        <p className="font-display text-[1.0625rem] text-ink leading-tight">
          Exportar el cuaderno
        </p>
        <p className="text-sm text-ink-mute leading-relaxed">
          Un archivo con todas tus frases, tus grabaciones y tu día en el plan.
          Guárdalo donde quieras — es tuyo.
        </p>
        <Gloss>
          Export your notebook — one file with every sentence, every recording,
          and your place in the plan.
        </Gloss>
      </div>
      {error && (
        <p className="text-sm text-accent leading-relaxed" role="alert">
          {error}
        </p>
      )}
      {done && !error && (
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--correct)" }}
          role="status"
          aria-live="polite"
        >
          {done}
        </p>
      )}
      <button
        type="button"
        onClick={() => void handleExport()}
        disabled={exporting}
        className="inline-flex min-h-[44px] items-center rounded-full border border-rule px-5 text-sm text-ink-mute transition-colors hover:border-accent/60 hover:text-accent disabled:opacity-50"
      >
        {exporting ? "Exportando…" : "Exportar el cuaderno"}
      </button>
    </>
  );
}
