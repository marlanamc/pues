// pues-flow.jsx — the SPEAK-FIRST flow (the new mechanic) + the growth map.

/* ============================================================
   SPEAK-FIRST FLOW
   Old flow: read frame → pick situation → WRITE sentence → reflect → save.
   New mechanic: you SPEAK out loud before any Spanish is shown. The answer
   is revealed only after you've tried. Three beats: Speak → Reveal → Saved.
   ============================================================ */

function FlowHeader({ step }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 14, marginBottom: 8 }}>
      <span style={{ fontSize: 12.5, color: "var(--ink-mute)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Exit</span>
      <div style={{ display: "flex", gap: 6 }}>
        {[1, 2, 3].map((n) => (
          <span key={n} style={{ width: n === step ? 18 : 6, height: 6, borderRadius: 999, background: n <= step ? "var(--accent)" : "var(--rule)", transition: "all .2s" }} />
        ))}
      </div>
    </div>
  );
}

/* Beat 1 — SPEAK. English thought + situation. No Spanish anywhere.
   A big mic. The reveal is visibly locked until you've spoken. */
function FlowSpeak() {
  return (
    <Phone mode="dark" showTabs={false}>
      <FlowHeader step={1} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 7, border: "1px solid var(--rule)", borderRadius: 999, padding: "5px 12px", marginTop: 14 }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--accent)" }} />
          <span style={{ fontSize: 12, color: "var(--ink-soft)" }}>At the café</span>
        </div>

        <Cap style={{ margin: "30px 0 12px" }}>Say this in Spanish</Cap>
        <p style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 27, lineHeight: 1.25, letterSpacing: "-0.01em", color: "var(--ink)", margin: 0 }}>
          “I'd like a coffee with oat milk, please.”
        </p>

        <div style={{ flex: 1 }} />

        {/* the mic — speak first */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginBottom: 8 }}>
          <button style={{
            width: 88, height: 88, borderRadius: 999, cursor: "pointer",
            background: "var(--accent)", color: "var(--bg)", border: "none",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 0 10px color-mix(in oklab, var(--accent) 14%, transparent)",
          }}>
            <IconMic s={34} w={1.8} />
          </button>
          <p style={{ fontSize: 13.5, color: "var(--ink-soft)", margin: 0 }}>Tap, then say it out loud</p>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "16px 0 18px", color: "var(--ink-mute)", fontSize: 12.5 }}>
          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>
          Reveal the answer after you speak
        </div>
      </div>
    </Phone>
  );
}

/* Beat 2 — REVEAL. Now the Spanish appears, with audio to compare against.
   Reflect is reframed warm: how did yours feel? */
function FlowReveal() {
  const opts = ["Said it smoothly", "Close — almost", "Want to practice this"];
  return (
    <Phone mode="dark" showTabs={false}>
      <FlowHeader step={2} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Cap style={{ margin: "20px 0 12px" }}>One natural way to say it</Cap>

        <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 16, padding: "20px 18px" }}>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 22, lineHeight: 1.3, color: "var(--ink)", margin: "0 0 14px" }}>
            Quería un café con leche de avena, por favor.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 34, height: 34, borderRadius: 999, border: "1px solid var(--rule)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
              <IconPlay s={13} />
            </span>
            <span style={{ fontSize: 12.5, color: "var(--ink-mute)" }}>Listen · slow / normal</span>
          </div>
        </div>

        <p style={{ fontSize: 13, color: "var(--ink-mute)", lineHeight: 1.5, margin: "14px 2px 0" }}>
          <span style={{ color: "var(--ink-soft)" }}>Quería</span> (“I wanted”) sounds softer and more polite than <span style={{ fontStyle: "italic" }}>quiero</span> here.
        </p>

        <div style={{ flex: 1 }} />

        <p style={{ fontSize: 14, color: "var(--ink-soft)", margin: "0 0 12px" }}>How did yours feel?</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 16 }}>
          {opts.map((o, i) => (
            <button key={o} style={{
              textAlign: "left", cursor: "pointer", display: "flex", alignItems: "center", gap: 11,
              background: i === 0 ? "color-mix(in oklab, var(--accent) 12%, var(--surface))" : "var(--surface)",
              border: `1px solid ${i === 0 ? "var(--accent)" : "var(--rule)"}`, borderRadius: 12, padding: "13px 15px",
              color: "var(--ink)", fontSize: 14.5,
            }}>
              <span style={{ width: 17, height: 17, borderRadius: 999, border: `1px solid ${i === 0 ? "var(--accent)" : "var(--ink-mute)"}`, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                {i === 0 && <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--accent)" }} />}
              </span>
              {o}
            </button>
          ))}
        </div>
      </div>
    </Phone>
  );
}

/* Beat 3 — SAVED. Warm confirmation, saved to journal, calm close. */
function FlowSaved() {
  return (
    <Phone mode="dark" showTabs={false}>
      <FlowHeader step={3} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 8 }}>
        <span style={{ width: 56, height: 56, borderRadius: 999, background: "color-mix(in oklab, var(--accent) 20%, transparent)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 8 }}>
          <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.5 10 17l9-10" /></svg>
        </span>
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 30, color: "var(--ink)", margin: 0 }}>¡Bien dicho!</h1>
        <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: 14.5, color: "var(--ink-mute)", margin: "0 0 6px" }}>That's 4 of 5 today.</p>

        <div style={{ width: "100%", background: "var(--surface-2)", border: "1px solid var(--rule)", borderRadius: 14, padding: "16px 16px", marginTop: 6 }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 17, lineHeight: 1.3, color: "var(--ink)", margin: 0 }}>
            “Quería un café con leche de avena, por favor.”
          </p>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingBottom: 18 }}>
        <button style={{ background: "var(--accent)", color: "var(--bg)", border: "none", borderRadius: 14, padding: "15px", fontSize: 15, fontWeight: 500, cursor: "pointer" }}>Next thought</button>
        <button style={{ background: "none", color: "var(--ink-soft)", border: "none", padding: "6px", fontSize: 14, cursor: "pointer" }}>Save &amp; finish for today</button>
      </div>
    </Phone>
  );
}

/* ============================================================
   GROWTH MAP — planning room to grow. Placeholder tiles with
   monospace annotations, in the Pues dark aesthetic.
   ============================================================ */
function GrowthTile({ tag, title, note, span = 1, soon }) {
  return (
    <div style={{
      gridColumn: `span ${span}`, border: "1px dashed var(--rule)", borderRadius: 14,
      padding: "18px 18px", background: "color-mix(in oklab, var(--surface) 50%, transparent)",
      display: "flex", flexDirection: "column", gap: 8, minHeight: 132,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 10.5, letterSpacing: "0.06em", color: "var(--accent)", textTransform: "uppercase" }}>{tag}</span>
        {soon && <span style={{ fontFamily: "ui-monospace, Menlo, monospace", fontSize: 9.5, color: "var(--ink-mute)", border: "1px solid var(--rule)", borderRadius: 999, padding: "2px 8px" }}>{soon}</span>}
      </div>
      <p style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontSize: 21, color: "var(--ink)", margin: 0, lineHeight: 1.1 }}>{title}</p>
      <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-soft)", margin: 0 }}>{note}</p>
    </div>
  );
}
function GrowthMap() {
  return (
    <div className="pues pues-dark" style={{
      width: 760, background: "var(--bg)", backgroundImage: "var(--paper-wash)", color: "var(--ink)",
      fontFamily: "var(--font-body)", borderRadius: 20, padding: "34px 34px 38px",
    }}>
      <div style={{ marginBottom: 24, maxWidth: 460 }}>
        <Cap style={{ marginBottom: 10 }}>Room to grow</Cap>
        <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 30, lineHeight: 1.15, letterSpacing: "-0.015em", margin: "0 0 8px" }}>Built to expand without losing the calm.</h2>
        <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-soft)", margin: 0 }}>
          Everything below reuses the same tokens, phone shell, and speak-first loop. Each is opt-in — Pues stays quiet until you reach for more.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
        <GrowthTile tag="01 · Platform" title="Desktop" span={2} soon="next" note="The journal as a wide reading view; speak-first with prompt and reveal side-by-side. Same tokens, more room." />
        <GrowthTile tag="02 · Play" title="Games" soon="later" note="Rapid-fire speak rounds, listening matches — light, low-stakes reps." />
        <GrowthTile tag="03 · Words" title="Vocab bank" soon="later" note="Cognates expanded into a personal word bank, pulled from sentences you actually said." />
        <GrowthTile tag="04 · Structure" title="Gentle grammar" soon="someday" note="Just-in-time tips inside the flow — a note when you reveal, never a drill. Opt-in, confidence-first." />
        <GrowthTile tag="05 · Voice" title="Record & replay" soon="explore" note="Save your own audio next to the model; hear your progress over weeks." />
      </div>
    </div>
  );
}

Object.assign(window, { FlowSpeak, FlowReveal, FlowSaved, GrowthMap });
