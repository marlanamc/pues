"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ThemePicker } from "@/components/ThemePicker";
import { AudioSpeedToggle } from "@/components/AudioSpeedToggle";
import { EnglishGlossToggle } from "@/components/EnglishGlossToggle";
import { TextSizeToggle } from "@/components/TextSizeToggle";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/env";

const IconSettings = (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    aria-hidden
    fill="none"
    stroke="currentColor"
    strokeWidth={1.6}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 7h9M19 7h1" />
    <circle cx="16" cy="7" r="2.5" />
    <path d="M4 17h2M11 17h9" />
    <circle cx="8" cy="17" r="2.5" />
  </svg>
);

type Placement = "down-right" | "up-left";

const menuPositionClass: Record<Placement, string> = {
  "down-right": "right-0 mt-2",
  "up-left": "left-0 bottom-full mb-2",
};

export function SettingsMenuButton({
  placement = "down-right",
}: {
  placement?: Placement;
}) {
  const [open, setOpen] = useState(false);
  const [signedInEmail, setSignedInEmail] = useState<string | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isSupabaseConfigured()) return;

    const supabase = createClient();

    const apply = (user: { email?: string; is_anonymous?: boolean } | null) => {
      setSignedInEmail(user && !user.is_anonymous ? user.email ?? null : null);
    };

    void supabase.auth.getUser().then(({ data }) => apply(data.user));

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      apply(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signOut() {
    setOpen(false);
    if (!isSupabaseConfigured()) return;
    const supabase = createClient();
    await supabase.auth.signOut();
  }

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Settings"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rule bg-bg/90 text-ink-mute shadow-soft backdrop-blur-md transition-colors hover:text-accent hover:border-accent/60"
      >
        {IconSettings}
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Settings"
          className={`absolute z-50 w-72 rounded-lg border border-rule bg-surface p-4 shadow-soft space-y-4 ${menuPositionClass[placement]}`}
        >
          <div className="space-y-2">
            <span className="text-caption text-ink-mute">Tema</span>
            <ThemePicker compact />
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-caption text-ink-mute shrink-0">Texto</span>
            <TextSizeToggle />
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-caption text-ink-mute shrink-0">English</span>
            <EnglishGlossToggle />
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-caption text-ink-mute shrink-0">Audio</span>
            <AudioSpeedToggle />
          </div>
          <div className="border-t border-rule pt-3 space-y-3">
            <Link
              href="/progress"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-sm text-ink-soft transition-colors hover:text-accent"
            >
              <span>Progreso</span>
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/settings"
              onClick={() => setOpen(false)}
              className="flex items-center justify-between text-sm text-ink-soft transition-colors hover:text-accent"
            >
              <span>All settings</span>
              <span aria-hidden>→</span>
            </Link>
          </div>

          {signedInEmail && (
            <div className="border-t border-rule pt-3 space-y-2">
              <p className="text-caption text-ink-mute break-all">
                {signedInEmail}
              </p>
              <button
                type="button"
                onClick={signOut}
                className="flex w-full items-center justify-between text-sm text-ink-soft transition-colors hover:text-accent"
              >
                <span>Sign out</span>
                <span aria-hidden>→</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
