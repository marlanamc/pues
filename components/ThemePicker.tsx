"use client";

import { useTheme } from "@/hooks/useTheme";
import { THEME_PALETTES, type ThemeName, type ThemePalette } from "@/lib/store";

const IconCheck = (
  <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5 10 17l9-10" />
  </svg>
);

function Swatch({
  palette,
  active,
  compact,
  onSelect,
}: {
  palette: ThemePalette;
  active: boolean;
  compact: boolean;
  onSelect: (name: ThemeName) => void;
}) {
  const dim = compact ? 30 : 44;
  return (
    <button
      type="button"
      onClick={() => onSelect(palette.name)}
      aria-pressed={active}
      aria-label={palette.label}
      title={palette.label}
      className="group flex flex-col items-center gap-1.5 rounded-lg p-1 transition-colors"
    >
      <span
        className="relative flex items-center justify-center rounded-full transition-transform group-hover:scale-105"
        style={{
          width: dim,
          height: dim,
          background: palette.bg,
          border: `1px solid ${active ? palette.accent : "var(--rule)"}`,
          boxShadow: active
            ? `0 0 0 2px var(--bg), 0 0 0 3px ${palette.accent}`
            : "none",
        }}
      >
        {/* accent dot + ink dot, previewing the palette's voice */}
        <span
          style={{
            width: compact ? 11 : 15,
            height: compact ? 11 : 15,
            borderRadius: "50%",
            background: palette.accent,
          }}
        />
        <span
          aria-hidden
          style={{
            position: "absolute",
            right: compact ? 5 : 7,
            bottom: compact ? 5 : 7,
            width: compact ? 4 : 5,
            height: compact ? 4 : 5,
            borderRadius: "50%",
            background: palette.ink,
            opacity: 0.7,
          }}
        />
        {active && (
          <span
            aria-hidden
            style={{
              position: "absolute",
              top: compact ? -4 : -5,
              right: compact ? -4 : -5,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: compact ? 15 : 18,
              height: compact ? 15 : 18,
              borderRadius: "50%",
              background: palette.accent,
              color: palette.bg,
              border: "1.5px solid var(--bg)",
            }}
          >
            {IconCheck}
          </span>
        )}
      </span>
      {!compact && (
        <span
          className="mono-cap"
          style={{
            fontSize: 8.5,
            color: active ? "var(--accent)" : "var(--ink-mute)",
          }}
        >
          {palette.label}
        </span>
      )}
    </button>
  );
}

export function ThemePicker({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme } = useTheme();

  const dark = THEME_PALETTES.filter((p) => p.mode === "dark");
  const light = THEME_PALETTES.filter((p) => p.mode === "light");

  const renderGroup = (label: string, palettes: ThemePalette[]) => (
    <div className="space-y-2">
      <p className="mono-cap" style={{ fontSize: 8.5 }}>
        {label}
      </p>
      <div
        className="flex flex-wrap"
        style={{ gap: compact ? 8 : 12 }}
      >
        {palettes.map((p) => (
          <Swatch
            key={p.name}
            palette={p}
            active={theme === p.name}
            compact={compact}
            onSelect={setTheme}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div className={compact ? "space-y-3" : "space-y-4"} role="group" aria-label="Tema">
      {renderGroup("Oscuro", dark)}
      {renderGroup("Claro", light)}
    </div>
  );
}
