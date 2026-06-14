"use client";

import { useState } from "react";

export default function MorePage() {
  const [goal, setGoal] = useState(5);
  const [reminders, setReminders] = useState(true);
  const [dark, setDark] = useState(true);
  const [fontLarge, setFontLarge] = useState(false);

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <p className="text-caption text-ink-mute">Pues</p>
        <h1 className="text-display-lg text-ink">Settings.</h1>
      </header>

      <Group title="Daily Goal">
        <Row label="Sentences per day">
          <Stepper value={goal} onChange={setGoal} min={1} max={20} />
        </Row>
        <Row label="Reminders">
          <Toggle on={reminders} onChange={setReminders} />
        </Row>
      </Group>

      <Group title="Display">
        <Row label="Dark Mode">
          <Toggle on={dark} onChange={setDark} />
        </Row>
        <Row label="Font Size">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setFontLarge(false)}
              className="text-ink-mute font-display"
              style={{ color: !fontLarge ? "var(--accent)" : undefined }}
              aria-pressed={!fontLarge}
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setFontLarge(true)}
              className="text-ink-mute font-display text-xl"
              style={{ color: fontLarge ? "var(--accent)" : undefined }}
              aria-pressed={fontLarge}
            >
              Aa
            </button>
          </div>
        </Row>
      </Group>

      <Group title="About">
        <LinkRow label="How it works" />
        <LinkRow label="Give feedback" />
      </Group>
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <p className="text-caption text-ink-mute">{title}</p>
      <div className="rounded-lg border border-rule bg-surface divide-y divide-rule">
        {children}
      </div>
    </section>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <span className="text-ink">{label}</span>
      <div>{children}</div>
    </div>
  );
}

function LinkRow({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between px-5 py-4 text-left active:bg-surface-sunk"
    >
      <span className="text-ink">{label}</span>
      <span className="text-ink-mute" aria-hidden>›</span>
    </button>
  );
}

function Stepper({
  value,
  onChange,
  min,
  max,
}: {
  value: number;
  onChange: (n: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div className="inline-flex items-center gap-3">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="h-7 w-7 rounded-full border border-rule text-ink-soft active:bg-surface-sunk"
        aria-label="Decrease"
      >
        −
      </button>
      <span className="font-display text-lg text-ink min-w-4 text-center">{value}</span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="h-7 w-7 rounded-full border border-rule text-ink-soft active:bg-surface-sunk"
        aria-label="Increase"
      >
        +
      </button>
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: (b: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      onClick={() => onChange(!on)}
      className="relative h-6 w-11 rounded-full transition-colors"
      style={{ background: on ? "var(--accent)" : "var(--surface-sunk)" }}
    >
      <span
        className="absolute top-0.5 h-5 w-5 rounded-full bg-bg transition-all"
        style={{ left: on ? "calc(100% - 1.375rem)" : "0.125rem" }}
        aria-hidden
      />
    </button>
  );
}
