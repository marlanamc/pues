"use client";

/**
 * La Línea timeline engine — draws the axis (ANTES → AHORA → DESPUÉS) and the
 * Spanish stamps from a spec. Geometry ported verbatim from the design handoff.
 * Color = WHEN (zone): var(--past) / var(--present) / var(--future).
 */

import type { Mark, StampKind, Zone } from "@/content/laLinea";

export const TL = {
  w: 300,
  h: 76,
  axisY: 50,
  nowX: 150,
  padPastL: 26,
  padPastR: 124,
  futL: 176,
  futR: 274,
} as const;

export function zoneX(zone: Zone, pos = 0.5): number {
  if (zone === "now") return TL.nowX;
  if (zone === "future") return TL.futL + pos * (TL.futR - TL.futL);
  return TL.padPastL + pos * (TL.padPastR - TL.padPastL); // past
}

export function zoneColor(zone: Zone): string {
  return zone === "now"
    ? "var(--present)"
    : zone === "future"
      ? "var(--future)"
      : "var(--past)";
}

function MarkShape({ m }: { m: Mark }) {
  const strong = zoneColor(m.zone);
  const col = strong;
  const x = zoneX(m.zone, m.pos);
  const y = TL.axisY;

  if (m.kind === "dot") {
    return <circle cx={x} cy={y} r="5.5" fill={strong} />;
  }
  if (m.kind === "line") {
    const span = m.span || 56;
    return (
      <line
        x1={x - span / 2}
        y1={y}
        x2={x + span / 2}
        y2={y}
        stroke={strong}
        strokeWidth="7"
        strokeLinecap="round"
      />
    );
  }
  if (m.kind === "dots") {
    const gap = 15;
    return (
      <g fill={strong}>
        {[-1, 0, 1].map((d) => (
          <circle key={d} cx={x + d * gap} cy={y} r="3.6" />
        ))}
      </g>
    );
  }
  if (m.kind === "arc") {
    const toX =
      m.to != null
        ? zoneX(m.toZone || (m.zone === "future" ? "future" : "now"), m.to)
        : TL.nowX;
    const midX = (x + toX) / 2;
    return (
      <g>
        <circle cx={x} cy={y} r="4.5" fill={strong} />
        <path
          d={`M ${x} ${y} Q ${midX} ${y - 26} ${toX} ${y}`}
          fill="none"
          stroke={strong}
          strokeWidth="2.4"
          strokeDasharray={m.dashed ? "5 4" : "0"}
        />
        <circle cx={toX} cy={y} r="4.5" fill={strong} />
      </g>
    );
  }
  if (m.kind === "wave") {
    // subjunctive: dashed wave floating ABOVE the line + a faint tether
    const wy = y - 24;
    const wsp = 46;
    const x0 = x - wsp / 2;
    const d = `M ${x0} ${wy} q ${wsp / 4} -9 ${wsp / 2} 0 q ${wsp / 4} 9 ${wsp / 2} 0`;
    return (
      <g>
        <line x1={x} y1={y} x2={x} y2={wy + 4} stroke={col} strokeWidth="1.2" strokeDasharray="2 3" opacity="0.7" />
        <path d={d} fill="none" stroke={strong} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="1 0" />
      </g>
    );
  }
  if (m.kind === "diamond") {
    // conditional: hollow diamond floating, dotted tether to axis
    const dy = y - 22;
    const r = 7;
    return (
      <g>
        <line x1={x} y1={y} x2={x} y2={dy + r} stroke={col} strokeWidth="1.2" strokeDasharray="2 3" opacity="0.7" />
        <path d={`M ${x} ${dy - r} L ${x + r} ${dy} L ${x} ${dy + r} L ${x - r} ${dy} Z`} fill="none" stroke={strong} strokeWidth="2.2" />
      </g>
    );
  }
  return null;
}

export function TimelineDiagram({
  marks = [],
  labels = true,
  height = TL.h,
  showNow = true,
}: {
  marks?: Mark[];
  labels?: boolean;
  height?: number;
  showNow?: boolean;
}) {
  return (
    <svg
      viewBox={`0 0 ${TL.w} ${height}`}
      width="100%"
      style={{ display: "block", overflow: "visible" }}
    >
      {/* tense-colored axis segments — the core learning cue */}
      <line x1="20" y1={TL.axisY} x2="138" y2={TL.axisY} stroke="var(--past)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="162" y1={TL.axisY} x2="280" y2={TL.axisY} stroke="var(--future)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {showNow && (
        <line x1={TL.nowX} y1={TL.axisY - 11} x2={TL.nowX} y2={TL.axisY + 11} stroke="var(--present)" strokeWidth="2.6" strokeLinecap="round" />
      )}
      {marks.map((m, i) => (
        <MarkShape key={i} m={m} />
      ))}
      {labels && (
        <g fontFamily="var(--font-mono)" fontSize="8.5" letterSpacing="1.3" style={{ textTransform: "uppercase" }}>
          <text x="26" y={TL.axisY + 22} fill="var(--past)">ANTES</text>
          <text x={TL.nowX} y={TL.axisY + 22} textAnchor="middle" fill="var(--present)">AHORA</text>
          <text x="274" y={TL.axisY + 22} textAnchor="end" fill="var(--future)">DESPUÉS</text>
        </g>
      )}
    </svg>
  );
}

/* ---------- small inline stamp glyph (for legend / palette / chips) ---------- */
export function StampGlyph({
  kind,
  size = 30,
  accent,
  color,
}: {
  kind: StampKind;
  size?: number;
  accent?: boolean;
  color?: string;
}) {
  const col = color || (accent ? "var(--accent)" : "var(--ink)");
  const cx = size / 2;
  const cy = size / 2;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ display: "block" }}>
      {kind === "dot" && <circle cx={cx} cy={cy} r={size * 0.18} fill={col} />}
      {kind === "line" && (
        <line x1={size * 0.18} y1={cy} x2={size * 0.82} y2={cy} stroke={col} strokeWidth={size * 0.16} strokeLinecap="round" />
      )}
      {kind === "dots" && (
        <g fill={col}>
          {[-1, 0, 1].map((d) => (
            <circle key={d} cx={cx + d * size * 0.24} cy={cy} r={size * 0.1} />
          ))}
        </g>
      )}
      {kind === "arc" && (
        <g>
          <circle cx={size * 0.22} cy={cy + size * 0.18} r={size * 0.1} fill={col} />
          <path d={`M ${size * 0.22} ${cy + size * 0.18} Q ${cx} ${cy - size * 0.34} ${size * 0.78} ${cy + size * 0.18}`} fill="none" stroke={col} strokeWidth={size * 0.07} />
          <circle cx={size * 0.78} cy={cy + size * 0.18} r={size * 0.1} fill={col} />
        </g>
      )}
      {kind === "wave" && (
        <path d={`M ${size * 0.16} ${cy} q ${size * 0.17} -${size * 0.26} ${size * 0.34} 0 q ${size * 0.17} ${size * 0.26} ${size * 0.34} 0`} fill="none" stroke={col} strokeWidth={size * 0.09} strokeLinecap="round" />
      )}
      {kind === "diamond" && (
        <path d={`M ${cx} ${cy - size * 0.24} L ${cx + size * 0.24} ${cy} L ${cx} ${cy + size * 0.24} L ${cx - size * 0.24} ${cy} Z`} fill="none" stroke={col} strokeWidth={size * 0.08} />
      )}
    </svg>
  );
}
