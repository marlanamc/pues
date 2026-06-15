import type { ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement } from "react";

/**
 * Zone chassis — the shared "El Cuaderno" hub primitives.
 *
 * Every hub renders the same skeleton (intro · ledger · row anatomy) and
 * differs only on a single axis: a signature hue. Each component reads
 * `var(--zone)` from its nearest ancestor, so a hub sets its color once on its
 * root wrapper (`style={{ "--zone": "var(--zone-lugares)" }}`) and everything
 * inside follows. No per-component color props.
 */

const chevron = (
  <span style={{ color: "var(--ink-mute)", display: "flex", flexShrink: 0 }} aria-hidden>
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 6l6 6-6 6" />
    </svg>
  </span>
);

/** The one zone-colored, italicized word inside a display line. */
export function Hue({ children }: { children: ReactNode }) {
  return (
    <em style={{ fontStyle: "italic", color: "var(--zone)" }}>{children}</em>
  );
}

/**
 * Intro block: a kicker (colored bar + `{ZONE} · {ROLE}` mono-cap) over a
 * single display line. Replaces the four different per-hub intro treatments.
 */
export function ZoneIntro({
  zoneLabel,
  role,
  children,
}: {
  zoneLabel: string;
  role: string;
  children: ReactNode;
}) {
  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 11 }}>
      <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
        <span
          aria-hidden
          style={{
            width: 16,
            height: 1.5,
            borderRadius: 2,
            background: "var(--zone)",
          }}
        />
        <span className="mono-cap" style={{ color: "var(--zone)" }}>
          {zoneLabel} · {role}
        </span>
      </span>
      <h1
        className="font-display"
        style={{
          fontWeight: 300,
          fontSize: 27,
          lineHeight: 1.14,
          letterSpacing: "-0.01em",
          color: "var(--ink)",
          margin: 0,
        }}
      >
        {children}
      </h1>
    </section>
  );
}

/** A tinted icon chip carrying the zone hue. */
export function Chip({
  icon,
  size = 38,
}: {
  icon: ReactNode;
  size?: number;
}) {
  const iconSize = size > 34 ? 20 : 18;
  const sized =
    isValidElement(icon)
      ? cloneElement(icon as ReactElement<{ width?: number; height?: number }>, {
          width: iconSize,
          height: iconSize,
        })
      : icon;
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: 11,
        flexShrink: 0,
        background: "color-mix(in oklab, var(--zone) 13%, var(--surface))",
        color: "var(--zone)",
      }}
    >
      {sized}
    </span>
  );
}

/** The ledger — a single bordered, hairline-divided list container. */
export function Ledger({ children }: { children: ReactNode }) {
  return (
    <ul className="rounded-lg border border-rule bg-surface divide-y divide-rule overflow-hidden">
      {children}
    </ul>
  );
}

/**
 * One ledger row: `[chip] · [title (+ description)] · [meta?] · [chevron]`.
 * `compact` is the one-line reference tier (smaller chip, tighter padding).
 */
export function ZoneRow({
  icon,
  title,
  description,
  meta,
  compact = false,
}: {
  icon: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  compact?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: compact ? "13px 18px" : "15px 18px",
      }}
    >
      <Chip icon={icon} size={compact ? 32 : 38} />
      <span style={{ flex: 1, minWidth: 0 }}>
        <span
          className="font-display"
          style={{
            display: "block",
            fontSize: compact ? 17 : 18,
            lineHeight: 1.15,
            color: "var(--ink)",
          }}
        >
          {title}
        </span>
        {description && (
          <span
            style={{
              display: "block",
              marginTop: 2,
              fontSize: 13.5,
              lineHeight: 1.4,
              color: "var(--ink-mute)",
            }}
          >
            {description}
          </span>
        )}
      </span>
      {meta && (
        <span className="mono-cap" style={{ color: "var(--zone)" }}>
          {meta}
        </span>
      )}
      {chevron}
    </div>
  );
}

/**
 * The shared "featured" device — one standout item pulled out of the ledger as
 * its own block. Use at most one per screen.
 */
export function FeaturedRow({
  icon,
  title,
  description,
  meta = "Destacado",
}: {
  icon: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "15px 18px",
        borderRadius: 14,
        border: "1px solid color-mix(in oklab, var(--zone) 45%, var(--rule))",
        background: "color-mix(in oklab, var(--zone) 8%, var(--surface))",
      }}
    >
      <Chip icon={icon} />
      <span style={{ flex: 1, minWidth: 0 }}>
        <span
          className="font-display"
          style={{
            display: "block",
            fontSize: 18,
            lineHeight: 1.15,
            color: "var(--ink)",
          }}
        >
          {title}
        </span>
        {description && (
          <span
            style={{
              display: "block",
              marginTop: 2,
              fontSize: 13.5,
              lineHeight: 1.4,
              color: "var(--ink-mute)",
            }}
          >
            {description}
          </span>
        )}
      </span>
      {meta && (
        <span className="mono-cap" style={{ color: "var(--zone)" }}>
          {meta}
        </span>
      )}
      {chevron}
    </div>
  );
}
