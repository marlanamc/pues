// pues-ui.jsx — shared chrome, icons, and phone shell for the Pues redesign.
// All components export to window for use across babel script scopes.

const { useState } = React;

/* ---------- icons (1.6 stroke, currentColor) ---------- */
const sIcon = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const IconToday = (p) => (
  <svg viewBox="0 0 24 24" width={p.s || 20} height={p.s || 20} {...sIcon}>
    <path d="M4 11.5 12 5l8 6.5" />
    <path d="M5.5 10.5V19h13v-8.5" />
    <path d="M10 19v-5h4v5" />
  </svg>
);
const IconActivities = (p) => (
  <svg viewBox="0 0 24 24" width={p.s || 20} height={p.s || 20} {...sIcon}>
    <circle cx="8" cy="8" r="3.5" />
    <circle cx="16" cy="16" r="3.5" />
    <path d="M12.5 7.5h6M15.5 4.5v6M5 14h6M5 17.5h4" />
  </svg>
);
const IconSituations = (p) => (
  <svg viewBox="0 0 24 24" width={p.s || 20} height={p.s || 20} {...sIcon}>
    <rect x="4" y="4" width="7" height="7" rx="1.5" />
    <rect x="13" y="4" width="7" height="7" rx="1.5" />
    <rect x="4" y="13" width="7" height="7" rx="1.5" />
    <rect x="13" y="13" width="7" height="7" rx="1.5" />
  </svg>
);
const IconProgress = (p) => (
  <svg viewBox="0 0 24 24" width={p.s || 20} height={p.s || 20} {...sIcon}>
    <path d="M5 20V10" />
    <path d="M12 20V4" />
    <path d="M19 20v-7" />
  </svg>
);
const IconPlay = (p) => (
  <svg viewBox="0 0 16 16" width={p.s || 13} height={p.s || 13} fill="currentColor">
    <path d="M5 3.3v9.4l7-4.7z" />
  </svg>
);
const IconMic = (p) => (
  <svg viewBox="0 0 24 24" width={p.s || 26} height={p.s || 26} {...sIcon} strokeWidth={p.w || 1.6}>
    <rect x="9" y="3" width="6" height="11" rx="3" />
    <path d="M6 11a6 6 0 0 0 12 0M12 17v3" />
  </svg>
);
const IconArrow = (p) => (
  <svg viewBox="0 0 24 24" width={p.s || 18} height={p.s || 18} {...sIcon}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
const IconFlame = (p) => (
  <svg viewBox="0 0 24 24" width={p.s || 14} height={p.s || 14} {...sIcon}>
    <path d="M12 3c1 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 2-4-1 5 2 5 2 5s0-3 0-10Z" />
  </svg>
);

/* ---------- phone status bar ---------- */
function StatusBar() {
  return (
    <div style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "12px 22px 2px", fontSize: 12.5, fontWeight: 600,
      color: "var(--ink)", letterSpacing: "0.01em", flex: "0 0 auto",
    }}>
      <span>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 5, opacity: 0.85 }}>
        <svg viewBox="0 0 18 12" width="17" height="11" fill="currentColor"><rect x="0" y="7" width="3" height="5" rx="1"/><rect x="5" y="4" width="3" height="8" rx="1"/><rect x="10" y="1.5" width="3" height="10.5" rx="1" opacity="0.4"/><rect x="15" y="0" width="3" height="12" rx="1" opacity="0.4"/></svg>
        <svg viewBox="0 0 24 12" width="22" height="11" fill="none" stroke="currentColor" strokeWidth="1"><rect x="1" y="1" width="20" height="10" rx="2.5"/><rect x="2.5" y="2.5" width="13" height="7" rx="1" fill="currentColor" stroke="none"/><rect x="22" y="4" width="1.5" height="4" rx="0.75" fill="currentColor" stroke="none"/></svg>
      </div>
    </div>
  );
}

/* ---------- bottom tab bar ---------- */
function TabBar({ active = "today" }) {
  const tabs = [
    ["today", "Today", IconToday],
    ["activities", "Activities", IconActivities],
    ["situations", "Situations", IconSituations],
    ["progress", "Progress", IconProgress],
  ];
  return (
    <div style={{
      display: "flex", justifyContent: "space-around", alignItems: "stretch",
      borderTop: "1px solid var(--rule)", padding: "9px 4px 16px",
      background: "color-mix(in oklab, var(--bg) 88%, transparent)", flex: "0 0 auto",
    }}>
      {tabs.map(([key, label, Ic]) => {
        const on = key === active;
        return (
          <div key={key} style={{
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            flex: 1, color: on ? "var(--accent)" : "var(--ink-mute)",
          }}>
            <Ic s={20} />
            <span style={{ fontSize: 9.5, fontWeight: 500, letterSpacing: "0.02em" }}>{label}</span>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- phone shell ----------
   Fixed 300×640 screen. mode sets the token class. Renders status bar +
   children (the screen body) + optional tab bar. */
function Phone({ mode = "dark", tab = "today", showTabs = true, pad = true, children }) {
  return (
    <div className={`pues pues-${mode}`} style={{
      width: 300, height: 640, background: "var(--bg)", backgroundImage: "var(--paper-wash)",
      color: "var(--ink)", fontFamily: "var(--font-body)", display: "flex",
      flexDirection: "column", overflow: "hidden", position: "relative",
      borderRadius: 30,
    }}>
      <StatusBar />
      <div style={{
        flex: "1 1 auto", display: "flex", flexDirection: "column", minHeight: 0,
        padding: pad ? "0 22px" : 0, overflow: "hidden",
      }}>
        {children}
      </div>
      {showTabs && <TabBar active={tab} />}
    </div>
  );
}

/* small caps label */
function Cap({ children, style }) {
  return (
    <p style={{
      fontSize: 10.5, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase",
      color: "var(--ink-mute)", margin: 0, ...style,
    }}>{children}</p>
  );
}

Object.assign(window, {
  IconToday, IconActivities, IconSituations, IconProgress,
  IconPlay, IconMic, IconArrow, IconFlame,
  StatusBar, TabBar, Phone, Cap,
});
