// pues-homes.jsx — three directions for the "Today" home screen.
// Each cuts copy hard and answers "calm overview of where I am" differently.

/* ============================================================
   Direction A — "Solo": radical calm. One greeting, one action.
   The 5-frame list (the old density culprit) is gone — you just begin.
   ============================================================ */
function HomeSolo() {
  return (
    <Phone mode="dark" tab="today">
      {/* top row: wordmark + whisper of streak */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14 }}>
        <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 17, color: "var(--ink-soft)" }}>Pues</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--accent)", fontSize: 12.5, fontWeight: 500 }}>
          <IconFlame s={13} /> 12
        </span>
      </div>

      {/* the breathing room is the point */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 26 }}>
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 15, color: "var(--ink-mute)", margin: "0 0 6px" }}>Buenos días,</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 44, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--ink)", margin: 0 }}>Marlana</h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 22, height: 1, background: "var(--accent)" }} />
          <Cap style={{ color: "var(--ink-soft)" }}>Day 03 · Daily Life</Cap>
        </div>
      </div>

      {/* one calm action */}
      <button style={{
        border: "none", textAlign: "left", cursor: "pointer", marginBottom: 18,
        background: "var(--accent)", color: "var(--bg)", borderRadius: 16, padding: "18px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 19, display: "block", lineHeight: 1.1 }}>Begin today</span>
          <span style={{ fontSize: 12.5, opacity: 0.8 }}>5 thoughts · about 10 min</span>
        </span>
        <IconArrow s={20} />
      </button>
    </Phone>
  );
}

/* ============================================================
   Direction B — "Camino": your path. A quiet vertical ribbon of
   days — done behind you, today glowing, what's ahead faint.
   Literally "where I am" at a glance.
   ============================================================ */
function CaminoNode({ state, day, theme }) {
  const done = state === "done", now = state === "now";
  const dot = done
    ? { background: "var(--accent)", border: "1px solid var(--accent)", w: 11, h: 11 }
    : now
    ? { background: "var(--accent)", border: "3px solid color-mix(in oklab, var(--accent) 28%, transparent)", w: 16, h: 16 }
    : { background: "transparent", border: "1px solid var(--ink-mute)", w: 11, h: 11 };
  return (
    <div style={{ display: "flex", gap: 16, alignItems: now ? "flex-start" : "center" }}>
      <div style={{ width: 16, display: "flex", justifyContent: "center", flex: "0 0 auto", paddingTop: now ? 4 : 0 }}>
        <span style={{ width: dot.w, height: dot.h, borderRadius: 999, background: dot.background, border: dot.border, boxSizing: "border-box" }} />
      </div>
      {now ? (
        <div style={{ flex: 1, background: "var(--surface)", border: "1px solid color-mix(in oklab, var(--accent) 32%, var(--rule))", borderRadius: 14, padding: "13px 15px" }}>
          <Cap style={{ color: "var(--accent)", marginBottom: 6 }}>Day {day} · Today</Cap>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "var(--ink)", margin: "0 0 11px", lineHeight: 1.1 }}>{theme}</p>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "var(--accent)", fontSize: 13.5, fontWeight: 500 }}>
            Begin <IconArrow s={15} />
          </span>
        </div>
      ) : (
        <div style={{ flex: 1, display: "flex", justifyContent: "space-between", alignItems: "baseline", opacity: done ? 0.62 : 0.38, paddingBottom: 2 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 15.5, color: "var(--ink)" }}>{theme}</span>
          <span style={{ fontSize: 10.5, letterSpacing: "0.08em", color: "var(--ink-mute)" }}>{String(day).padStart(2, "0")}</span>
        </div>
      )}
    </div>
  );
}
function HomeCamino() {
  return (
    <Phone mode="dark" tab="today">
      <div style={{ paddingTop: 16, marginBottom: 18 }}>
        <Cap style={{ marginBottom: 10 }}>Your camino</Cap>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 27, lineHeight: 1.1, letterSpacing: "-0.015em", color: "var(--ink)", margin: 0 }}>
          47 thoughts spoken,<br />and counting.
        </h1>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 16, paddingTop: 4 }}>
        <CaminoNode state="done" day={1} theme="Wants & Plans" />
        <CaminoNode state="done" day={2} theme="Around the City" />
        <CaminoNode state="now" day={3} theme="Daily Life" />
        <CaminoNode state="next" day={4} theme="Feelings" />
        <CaminoNode state="next" day={5} theme="The Past" />
      </div>
    </Phone>
  );
}

/* ============================================================
   Direction C — "Diario": warm paper, journal-forward. Centers
   YOUR words. Today is a gentle prompt; below, reread what you've
   said. Encouraging, few borders — dividers & space, not boxes.
   ============================================================ */
function DiarioEntry({ es, label }) {
  return (
    <div style={{ padding: "14px 0", borderTop: "1px solid var(--rule)" }}>
      <p style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 400, fontSize: 18, lineHeight: 1.3, color: "var(--ink)", margin: "0 0 6px" }}>“{es}”</p>
      <Cap style={{ color: "var(--ink-mute)" }}>{label}</Cap>
    </div>
  );
}
function HomeDiario() {
  return (
    <Phone mode="light" tab="today">
      <div style={{ paddingTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
          <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 16, color: "var(--ink-soft)" }}>Pues</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: "var(--accent)", fontSize: 12.5, fontWeight: 500 }}>
            <IconFlame s={13} /> 12
          </span>
        </div>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 30, lineHeight: 1.1, letterSpacing: "-0.015em", color: "var(--ink)", margin: "0 0 6px" }}>Hola, Marlana.</h1>
        <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 14.5, color: "var(--ink-mute)", margin: 0 }}>Five minutes is a whole conversation.</p>
      </div>

      {/* gentle today prompt — not a heavy card */}
      <button style={{
        width: "100%", textAlign: "left", cursor: "pointer", margin: "20px 0 8px",
        background: "var(--accent)", color: "#fff", border: "none", borderRadius: 15,
        padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <span>
          <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.85, display: "block", marginBottom: 3 }}>Day 03 · Daily Life</span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 18 }}>Begin today's five</span>
        </span>
        <IconArrow s={19} />
      </button>

      {/* reread your own words */}
      <div style={{ flex: 1, marginTop: 16, overflow: "hidden" }}>
        <Cap style={{ marginBottom: 4 }}>Lately you've said</Cap>
        <DiarioEntry es="Quiero aprender más, poco a poco." label="Wants & Plans" />
        <DiarioEntry es="Hoy tengo mucho trabajo, pero estoy bien." label="Daily Life" />
        <DiarioEntry es="Me gustaría visitar a mi familia." label="Wants & Plans" />
      </div>
    </Phone>
  );
}

Object.assign(window, { HomeSolo, HomeCamino, HomeDiario });
