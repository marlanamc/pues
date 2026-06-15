// linea-shared.jsx — El Cuaderno (Ink) shell + the Spanish timeline engine.
// Self-contained: own tokens, own phone shell, own tab bar (Spanish chrome).
// Exports everything to window for the other babel scripts.

const { useState, useRef } = React;

/* ---------- inject El Cuaderno (Ink) tokens, scoped to .cuaderno ---------- */
if (typeof document !== "undefined" && !document.getElementById("cuaderno-tokens")) {
  const s = document.createElement("style");
  s.id = "cuaderno-tokens";
  s.textContent = `
  .cuaderno {
    --serif: "Newsreader", Georgia, ui-serif, serif;
    --sans: "Hanken Grotesk", system-ui, -apple-system, sans-serif;
    --mono: "Spline Sans Mono", ui-monospace, Menlo, monospace;
  }
  .cuaderno.paper {
    --bg:#f1e7d4; --surface:#fbf4e6; --surface-2:#f6ecd8;
    --ink:#28231b; --ink-soft:#5b5343; --ink-faint:#978a73;
    --rule:#ddccae; --accent:#bb4a2a; --accent-ink:#fbf4e6;
    /* tense semantics — darker for contrast on bone paper */
    --past: oklch(0.56 0.13 64);
    --present: oklch(0.50 0.11 158);
    --future: oklch(0.50 0.10 252);
    --grain-op:0.5; --grain-blend:multiply;
  }
  .cuaderno.ink {
    --bg:#1b1712; --surface:#251f18; --surface-2:#2c251c;
    --ink:#efe5d2; --ink-soft:#b4a98f; --ink-faint:#7d7259;
    --rule:#3a3127; --accent:#dd6a43; --accent-ink:#1b1712;
    --past: oklch(0.76 0.115 72);
    --present: oklch(0.74 0.095 158);
    --future: oklch(0.73 0.085 245);
    --grain-op:0.35; --grain-blend:screen;
  }
  .cuaderno *{ box-sizing:border-box; }
  .cuaderno ::selection{ background:var(--accent); color:#fff; }
  .cuaderno button{ font-family:var(--sans); cursor:pointer; }
  .cuaderno .grain::after{
    content:""; position:absolute; inset:0; pointer-events:none; z-index:5;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    opacity:var(--grain-op,0.4); mix-blend-mode:var(--grain-blend,screen);
  }
  @media (prefers-reduced-motion: no-preference){
    .cdn-rise{ opacity:0; transform:translateY(8px); animation:cdnRise .5s cubic-bezier(.2,.7,.2,1) forwards; }
    @keyframes cdnRise{ to{ opacity:1; transform:none; } }
  }`;
  document.head.appendChild(s);
}

/* ---------- type helpers ---------- */
const Cap = ({ children, style }) => (
  <p style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--ink-faint)", margin: 0, ...style }}>{children}</p>
);
const Serif = ({ children, style, it }) => (
  <span style={{ fontFamily: "var(--serif)", fontStyle: it ? "italic" : "normal", color: "var(--ink)", ...style }}>{children}</span>
);

/* ---------- icons (1.6 stroke) ---------- */
const ic = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
const IconArrow = (p) => (<svg viewBox="0 0 24 24" width={p.s || 18} height={p.s || 18} {...ic}><path d="M5 12h14M13 6l6 6-6 6" /></svg>);
const IconBack = (p) => (<svg viewBox="0 0 24 24" width={p.s || 18} height={p.s || 18} {...ic}><path d="M19 12H5M11 6l-6 6 6 6" /></svg>);
const IconCheck = (p) => (<svg viewBox="0 0 24 24" width={p.s || 18} height={p.s || 18} {...ic}><path d="M4 12.5l5 5L20 6" /></svg>);
const IconClose = (p) => (<svg viewBox="0 0 24 24" width={p.s || 18} height={p.s || 18} {...ic}><path d="M6 6l12 12M18 6 6 18" /></svg>);

/* ---------- tab bar (Spanish chrome — matches the app's bottom nav) ---------- */
const TABS = [
  ["hoy", "Hoy", (<><path d="M4 11.5 12 5l8 6.5" /><path d="M5.5 10.5V19h13v-8.5" /><path d="M10 19v-5h4v5" /></>)],
  ["practica", "Práctica", (<><rect x="6.5" y="4" width="11" height="16" rx="2" /><path d="M10.2 4V2.7a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 .6.6V4" /><path d="M9.6 9.5h4.8M9.6 13h4.8" /></>)],
  ["lugares", "Lugares", (<><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></>)],
  ["guias", "Guías", (<><circle cx="8" cy="8" r="3.3" /><circle cx="16" cy="16" r="3.3" /><path d="M12.5 7.5h6M15.5 4.5v6" /></>)],
];
function TabBar({ active = "practica" }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", borderTop: "1px solid var(--rule)", padding: "10px 0 16px", flex: "0 0 auto" }}>
      {TABS.map(([k, l, p]) => (
        <div key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, color: k === active ? "var(--accent)" : "var(--ink-faint)" }}>
          <svg viewBox="0 0 24 24" width="20" height="20" {...ic}>{p}</svg>
          <span style={{ fontSize: 9, fontFamily: "var(--sans)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{l}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- status bar ---------- */
function StatusBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "13px 22px 0", fontSize: 12.5, fontWeight: 600, color: "var(--ink)", flex: "0 0 auto" }}>
      <span>9:41</span>
      <div style={{ display: "flex", gap: 5, opacity: 0.85 }}>
        <svg viewBox="0 0 18 12" width="16" height="11" fill="currentColor"><rect x="0" y="7" width="3" height="5" rx="1" /><rect x="5" y="4" width="3" height="8" rx="1" /><rect x="10" y="1.5" width="3" height="10.5" rx="1" opacity="0.4" /><rect x="15" y="0" width="3" height="12" rx="1" opacity="0.4" /></svg>
        <svg viewBox="0 0 24 12" width="21" height="11" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1" y="1" width="20" height="10" rx="2.5" /><rect x="2.5" y="2.5" width="12" height="7" rx="1" fill="currentColor" stroke="none" /></svg>
      </div>
    </div>
  );
}

/* ---------- phone shell (300×640, Ink) ---------- */
function Phone({ tab = "practica", showTabs = true, pad = true, mode = "paper", children }) {
  return (
    <div className={`cuaderno grain ${mode}`} style={{
      width: 300, height: 640, background: "var(--bg)", color: "var(--ink)", fontFamily: "var(--sans)",
      display: "flex", flexDirection: "column", overflow: "hidden", position: "relative", borderRadius: 30,
    }}>
      <StatusBar />
      <div style={{ flex: "1 1 auto", display: "flex", flexDirection: "column", minHeight: 0, padding: pad ? "0 22px" : 0, position: "relative", zIndex: 1 }}>
        {children}
      </div>
      {showTabs && <TabBar active={tab} />}
    </div>
  );
}

/* ---------- progress pills (used during a round) ---------- */
function ProgressPills({ total, index }) {
  return (
    <div style={{ display: "flex", gap: 5 }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{ width: i === index ? 16 : 6, height: 6, borderRadius: 99, background: i <= index ? "var(--accent)" : "var(--rule)" }} />
      ))}
    </div>
  );
}

/* ============================================================
   TIMELINE ENGINE — draws axis + Spanish stamps from a spec.
   spec.marks: [{ kind, zone, pos?, span?, accent?, to? }]
     kind: 'dot' | 'line' | 'dots' | 'arc' | 'wave' | 'diamond'
     zone: 'past' | 'now' | 'future'
     pos : 0..1 within the zone (default .5)
   ============================================================ */
const TL = { w: 300, h: 76, axisY: 50, nowX: 150, padPastL: 26, padPastR: 124, futL: 176, futR: 274 };
function zoneX(zone, pos = 0.5) {
  if (zone === "now") return TL.nowX;
  if (zone === "future") return TL.futL + pos * (TL.futR - TL.futL);
  return TL.padPastL + pos * (TL.padPastR - TL.padPastL); // past
}

const zoneColor = (zone) => zone === "now" ? "var(--present)" : zone === "future" ? "var(--future)" : "var(--past)";
function Mark({ m }) {
  const strong = zoneColor(m.zone);
  const col = strong;
  const x = zoneX(m.zone, m.pos);
  const y = TL.axisY;
  if (m.kind === "dot") {
    return <circle cx={x} cy={y} r="5.5" fill={strong} />;
  }
  if (m.kind === "line") {
    const span = m.span || 56;
    return <line x1={x - span / 2} y1={y} x2={x + span / 2} y2={y} stroke={strong} strokeWidth="7" strokeLinecap="round" />;
  }
  if (m.kind === "dots") {
    const gap = 15;
    return <g fill={strong}>{[-1, 0, 1].map((d) => <circle key={d} cx={x + d * gap} cy={y} r="3.6" />)}</g>;
  }
  if (m.kind === "arc") {
    const toX = m.to != null ? zoneX(m.toZone || (m.zone === "future" ? "future" : "now"), m.to) : TL.nowX;
    const midX = (x + toX) / 2;
    return (
      <g>
        <circle cx={x} cy={y} r="4.5" fill={strong} />
        <path d={`M ${x} ${y} Q ${midX} ${y - 26} ${toX} ${y}`} fill="none" stroke={strong} strokeWidth="2.4" strokeDasharray={m.dashed ? "5 4" : "0"} />
        <circle cx={toX} cy={y} r="4.5" fill={strong} />
      </g>
    );
  }
  if (m.kind === "wave") {
    // subjunctive: dashed wave floating ABOVE the line + a faint tether
    const wy = y - 24, wsp = 46;
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
    const dy = y - 22, r = 7;
    return (
      <g>
        <line x1={x} y1={y} x2={x} y2={dy + r} stroke={col} strokeWidth="1.2" strokeDasharray="2 3" opacity="0.7" />
        <path d={`M ${x} ${dy - r} L ${x + r} ${dy} L ${x} ${dy + r} L ${x - r} ${dy} Z`} fill="none" stroke={strong} strokeWidth="2.2" />
      </g>
    );
  }
  return null;
}

function TimelineDiagram({ marks = [], labels = true, height = TL.h, showNow = true }) {
  return (
    <svg viewBox={`0 0 ${TL.w} ${height}`} width="100%" style={{ display: "block", overflow: "visible" }}>
      {/* tense-colored axis segments — the core learning cue */}
      <line x1="20" y1={TL.axisY} x2="138" y2={TL.axisY} stroke="var(--past)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <line x1="162" y1={TL.axisY} x2="280" y2={TL.axisY} stroke="var(--future)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      {showNow && <line x1={TL.nowX} y1={TL.axisY - 11} x2={TL.nowX} y2={TL.axisY + 11} stroke="var(--present)" strokeWidth="2.6" strokeLinecap="round" />}
      {marks.map((m, i) => <Mark key={i} m={m} />)}
      {labels && (
        <g fontFamily="var(--mono)" fontSize="8.5" letterSpacing="1.3" style={{ textTransform: "uppercase" }}>
          <text x="26" y={TL.axisY + 22} fill="var(--past)">ANTES</text>
          <text x={TL.nowX} y={TL.axisY + 22} textAnchor="middle" fill="var(--present)">AHORA</text>
          <text x="274" y={TL.axisY + 22} textAnchor="end" fill="var(--future)">DESPUÉS</text>
        </g>
      )}
    </svg>
  );
}

/* ---------- small inline stamp glyph (for legend / palette / chips) ---------- */
function StampGlyph({ kind, size = 30, accent, color }) {
  const col = color || (accent ? "var(--accent)" : "var(--ink)");
  const cx = size / 2, cy = size / 2;
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} style={{ display: "block" }}>
      {kind === "dot" && <circle cx={cx} cy={cy} r={size * 0.18} fill={col} />}
      {kind === "line" && <line x1={size * 0.18} y1={cy} x2={size * 0.82} y2={cy} stroke={col} strokeWidth={size * 0.16} strokeLinecap="round" />}
      {kind === "dots" && <g fill={col}>{[-1, 0, 1].map((d) => <circle key={d} cx={cx + d * size * 0.24} cy={cy} r={size * 0.1} />)}</g>}
      {kind === "arc" && <g><circle cx={size * 0.22} cy={cy + size * 0.18} r={size * 0.1} fill={col} /><path d={`M ${size * 0.22} ${cy + size * 0.18} Q ${cx} ${cy - size * 0.34} ${size * 0.78} ${cy + size * 0.18}`} fill="none" stroke={col} strokeWidth={size * 0.07} /><circle cx={size * 0.78} cy={cy + size * 0.18} r={size * 0.1} fill={col} /></g>}
      {kind === "wave" && <path d={`M ${size * 0.16} ${cy} q ${size * 0.17} -${size * 0.26} ${size * 0.34} 0 q ${size * 0.17} ${size * 0.26} ${size * 0.34} 0`} fill="none" stroke={col} strokeWidth={size * 0.09} strokeLinecap="round" />}
      {kind === "diamond" && <path d={`M ${cx} ${cy - size * 0.24} L ${cx + size * 0.24} ${cy} L ${cx} ${cy + size * 0.24} L ${cx - size * 0.24} ${cy} Z`} fill="none" stroke={col} strokeWidth={size * 0.08} />}
    </svg>
  );
}

Object.assign(window, {
  Cap, Serif, IconArrow, IconBack, IconCheck, IconClose,
  TabBar, StatusBar, Phone, ProgressPills,
  TimelineDiagram, StampGlyph, zoneX, zoneColor, TL,
});
