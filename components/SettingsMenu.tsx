"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";
import { AudioSpeedToggle } from "@/components/AudioSpeedToggle";

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

export function SettingsMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

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
    <div className="fixed inset-x-0 top-0 z-30 pointer-events-none">
      <div className="mx-auto flex w-full max-w-[520px] justify-end px-6 pt-3">
        <div ref={wrapRef} className="pointer-events-auto relative">
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
              className="absolute right-0 mt-2 w-64 rounded-lg border border-rule bg-surface p-4 shadow-soft space-y-4"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="text-caption text-ink-mute">Theme</span>
                <ThemeModeToggle />
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-caption text-ink-mute">Audio</span>
                <AudioSpeedToggle />
              </div>
              <div className="border-t border-rule pt-3">
                <Link
                  href="/settings"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between text-sm text-ink-soft transition-colors hover:text-accent"
                >
                  <span>All settings</span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
