"use client";

import { useEffect, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { clearAllRecordings } from "@/lib/audioStore";
import { resetProgress } from "@/lib/store";
import { resetCloudProgress } from "@/lib/sync";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export function ResetProgressCard() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [resetting, setResetting] = useState(false);
  const [resetError, setResetError] = useState<string | null>(null);

  async function handleResetProgress() {
    setResetting(true);
    setResetError(null);
    try {
      await clearAllRecordings();
      resetProgress();
      if (isSupabaseConfigured()) {
        await resetCloudProgress();
      }
      setConfirmOpen(false);
    } catch {
      setResetError("No se pudo reiniciar. Inténtalo de nuevo.");
    } finally {
      setResetting(false);
    }
  }

  return (
    <>
      <div className="space-y-1">
        <p className="font-display text-[1.0625rem] text-ink leading-tight">
          Reiniciar progreso
        </p>
        <p className="text-sm text-ink-mute leading-relaxed">
          Borra tu diario, racha, día del plan y todo el historial de práctica.
          Tus preferencias de apariencia y audio se quedan igual.
        </p>
        <Gloss>
          Reset progress — erases your diary, streak, plan day, and practice
          history. Appearance and audio settings stay.
        </Gloss>
      </div>
      {resetError && (
        <p className="text-sm text-accent leading-relaxed" role="alert">
          {resetError}
        </p>
      )}
      <button
        type="button"
        onClick={() => {
          setResetError(null);
          setConfirmOpen(true);
        }}
        className="inline-flex min-h-[44px] items-center rounded-full border border-rule px-5 text-sm text-ink-mute transition-colors hover:border-accent/60 hover:text-accent"
      >
        Reiniciar progreso
      </button>

      {confirmOpen && (
        <ResetProgressDialog
          resetting={resetting}
          onCancel={() => {
            if (!resetting) setConfirmOpen(false);
          }}
          onConfirm={() => void handleResetProgress()}
        />
      )}
    </>
  );
}

function ResetProgressDialog({
  resetting,
  onCancel,
  onConfirm,
}: {
  resetting: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !resetting) onCancel();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onCancel, resetting]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
      role="presentation"
      onClick={() => {
        if (!resetting) onCancel();
      }}
    >
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-sm" aria-hidden />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="reset-progress-title"
        className="relative w-full max-w-md rounded-lg border border-rule bg-surface p-6 shadow-soft space-y-4"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="space-y-2">
          <h2
            id="reset-progress-title"
            className="font-display text-[1.25rem] text-ink leading-tight"
          >
            ¿Reiniciar progreso?
          </h2>
          <p className="text-sm text-ink-mute leading-relaxed">
            Esto borra tu diario, racha, día del plan y todo el historial de
            práctica. No se puede deshacer.
          </p>
          <Gloss>
            This erases your diary, streak, plan day, and practice history. It
            cannot be undone.
          </Gloss>
        </div>
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            disabled={resetting}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-rule px-5 text-sm text-ink transition-colors hover:border-accent/60 disabled:opacity-50 sm:flex-none"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={resetting}
            className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-full border border-accent bg-accent px-5 text-sm text-accent-ink transition-opacity disabled:opacity-50 sm:flex-none"
          >
            {resetting ? "Reiniciando…" : "Sí, reiniciar"}
          </button>
        </div>
      </div>
    </div>
  );
}
