// linea-directions.jsx — 3 layout directions for the main "Leer la línea"
// screen + the Spanish stamp-set reference plate.

const {
  Cap, Serif, IconArrow, IconCheck, IconClose,
  Phone, ProgressPills, TimelineDiagram, StampGlyph, zoneColor,
  STAMPS, STAMP_GUIDE,
} = window;

// one shared sample question for the three directions
const SAMPLE = {
  marks: [{ kind: "line", zone: "past", pos: 0.42 }, { kind: "dot", zone: "past", pos: 0.6 }],
  pre: "Mientras ", verb: "(cenar)", post: ", alguien llamó a la puerta.",
  options: [
    { v: "cenaba", t: "Imperfecto" },
    { v: "cené", t: "Pretérito" },
    { v: "ceno", t: "Presente" },
  ],
  answer: "cenaba",
};

function PlayHead({ idx = 1, total = 5 }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16 }}>
      <span style={{ display: "flex", alignItems: "center", gap: 5, color: "var(--ink-faint)", fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase" }}>
        <IconClose s={13} /> Salir
      </span>
      <ProgressPills total={total} index={idx} />
    </div>
  );
}

/* ===== A · Diagrama arriba — calm, diagram leads ===== */
function DirDiagram() {
  return (
    <Phone showTabs={false}>
      <PlayHead idx={1} />
      <Cap style={{ margin: "20px 0 10px" }}>Lee la línea</Cap>
      <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14, padding: "14px 12px 8px" }}>
        <TimelineDiagram marks={SAMPLE.marks} />
      </div>
      <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 21, lineHeight: 1.3, margin: "18px 0 14px" }}>
        {SAMPLE.pre}<Serif it style={{ color: "var(--accent)" }}>{SAMPLE.verb}</Serif>{SAMPLE.post}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {SAMPLE.options.map((o, i) => (
          <button key={o.v} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: 11, background: "var(--surface)", border: `1px solid ${i === 1 ? "var(--accent)" : "var(--rule)"}`, color: "var(--ink)" }}>
            <Serif it style={{ fontSize: 16 }}>{o.v}</Serif>
            {i === 1 && <span style={{ width: 14, height: 14, borderRadius: 99, background: "var(--accent)" }} />}
          </button>
        ))}
      </div>
      <div style={{ flex: 1 }} />
    </Phone>
  );
}

/* ===== B · La frase primero — editorial, sentence is hero ===== */
function DirSentence() {
  return (
    <Phone showTabs={false}>
      <PlayHead idx={1} />
      <Cap style={{ margin: "26px 0 14px" }}>Elige la forma</Cap>
      <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 27, lineHeight: 1.26, letterSpacing: "-0.01em", margin: "0 0 22px" }}>
        {SAMPLE.pre}<Serif it style={{ color: "var(--accent)", borderBottom: "2px solid var(--accent)" }}>{SAMPLE.verb}</Serif>{SAMPLE.post}
      </p>
      <Cap style={{ marginBottom: 6 }}>La línea</Cap>
      <TimelineDiagram marks={SAMPLE.marks} height={70} />
      <div style={{ flex: 1 }} />
      <div style={{ display: "flex", gap: 8, paddingBottom: 6 }}>
        {SAMPLE.options.map((o, i) => (
          <button key={o.v} style={{ flex: 1, padding: "13px 6px", borderRadius: 12, background: i === 0 ? "color-mix(in oklab, var(--accent) 11%, var(--surface))" : "var(--surface)", border: `1px solid ${i === 0 ? "var(--accent)" : "var(--rule)"}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <Serif it style={{ fontSize: 15.5 }}>{o.v}</Serif>
            <span style={{ fontFamily: "var(--mono)", fontSize: 7.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-faint)" }}>{o.t}</span>
          </button>
        ))}
      </div>
    </Phone>
  );
}

/* ===== C · Cuaderno / ledger — annotation in the margin ===== */
function DirLedger() {
  return (
    <Phone showTabs={false}>
      <PlayHead idx={1} />
      <Cap style={{ margin: "20px 0 12px" }}>Lee la línea</Cap>
      {/* sentence with a small annotated timeline to the side */}
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
        <div style={{ width: 3, alignSelf: "stretch", background: "var(--accent)", borderRadius: 2, flex: "0 0 auto", opacity: 0.7 }} />
        <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 20, lineHeight: 1.32, margin: 0 }}>
          {SAMPLE.pre}<Serif it style={{ color: "var(--accent)" }}>{SAMPLE.verb}</Serif>{SAMPLE.post}
        </p>
      </div>
      <div style={{ margin: "18px 0 6px", paddingTop: 14, borderTop: "1px solid var(--rule)" }}>
        <TimelineDiagram marks={SAMPLE.marks} height={68} />
      </div>
      <Cap style={{ margin: "14px 0 8px" }}>Tu respuesta</Cap>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {SAMPLE.options.map((o, i) => (
          <button key={o.v} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", textAlign: "left", padding: "13px 4px", background: "none", border: "none", borderBottom: "1px solid var(--rule)", color: "var(--ink)" }}>
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: i === 0 ? "var(--accent)" : "var(--ink-faint)" }}>{String.fromCharCode(65 + i)}</span>
              <Serif it style={{ fontSize: 17, color: i === 0 ? "var(--accent)" : "var(--ink)" }}>{o.v}</Serif>
            </span>
            <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-faint)" }}>{o.t}</span>
          </button>
        ))}
      </div>
      <div style={{ flex: 1 }} />
    </Phone>
  );
}

/* ===== Stamp-set reference plate (wide, dark Cuaderno) ===== */
function StampLegend() {
  const sampleZone = { dot: "past", line: "past", dots: "now", arc: "past", wave: "future", diamond: "future" };
  return (
    <div className="cuaderno paper" style={{ width: 760, background: "var(--bg)", color: "var(--ink)", fontFamily: "var(--sans)", padding: "30px 34px 34px", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
        <Serif it style={{ fontSize: 22, color: "var(--ink-soft)" }}>Los sellos</Serif>
        <Cap>Stamp set · español</Cap>
      </div>
      <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 26, lineHeight: 1.2, letterSpacing: "-0.01em", margin: "0 0 4px" }}>
        Seis marcas dibujan todo el sistema verbal.
      </p>
      <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: "0 0 22px", maxWidth: "52ch", lineHeight: 1.5 }}>
        La forma dice <Serif it>qué tipo</Serif> de acción es; el color dice <Serif it>cuándo</Serif>. El almagre se reserva para lo que tocas.
      </p>

      {/* zone color key */}
      <div style={{ display: "flex", gap: 10, marginBottom: 22 }}>
        {[["past", "Antes"], ["present", "Ahora"], ["future", "Después"]].map(([z, l]) => (
          <div key={z} style={{ display: "flex", alignItems: "center", gap: 7, padding: "5px 11px", border: "1px solid var(--rule)", borderRadius: 999 }}>
            <span style={{ width: 10, height: 10, borderRadius: 99, background: `var(--${z})` }} />
            <span style={{ fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-soft)" }}>{l}</span>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {STAMPS.map((s) => (
          <div key={s.kind} style={{ background: "var(--surface)", border: `1px solid ${s.isNew ? "var(--accent)" : "var(--rule)"}`, borderRadius: 14, padding: "16px 16px 14px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--bg)", border: "1px solid var(--rule)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <StampGlyph kind={s.kind} size={34} color={`var(--${sampleZone[s.kind]})`} />
              </div>
              {s.isNew && <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-ink)", background: "var(--accent)", padding: "3px 7px", borderRadius: 999 }}>Nuevo</span>}
            </div>
            <p style={{ fontFamily: "var(--serif)", fontSize: 19, margin: "0 0 1px" }}>{s.name}</p>
            <p style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 8px" }}>{s.es}</p>
            <p style={{ fontSize: 12, color: "var(--ink-soft)", lineHeight: 1.45, margin: "0 0 10px" }}>{s.note}</p>
            <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13.5, color: "var(--accent)", margin: 0 }}>{s.tense}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { DirDiagram, DirSentence, DirLedger, StampLegend, StampGuide });

/* ===== Full stamp guide (zone → form reference) ===== */
function ZoneCell({ kind, zone, label, form, ex, faint }) {
  return (
    <div style={{ flex: 1, opacity: faint ? 0.5 : 1 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 6 }}>
        <span style={{ width: 26, height: 26, borderRadius: 7, background: "var(--bg)", border: "1px solid var(--rule)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <StampGlyph kind={kind} size={20} color={`var(--${zone})`} />
        </span>
        <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: `var(--${zone})` }}>{label}</span>
      </div>
      <p style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)", margin: "0 0 1px" }}>{form}</p>
      <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 12.5, color: "var(--ink-soft)", margin: 0 }}>{ex}</p>
    </div>
  );
}
function GuideNote({ label, text }) {
  return (
    <div style={{ display: "flex", gap: 9, alignItems: "baseline", marginTop: 13, paddingTop: 12, borderTop: "1px solid var(--rule)" }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", flex: "0 0 auto" }}>{label}</span>
      <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-soft)", margin: 0 }}>{text}</p>
    </div>
  );
}
function GuideEntry({ s, n }) {
  const repZone = { dot: "past", line: "present", dots: "present", arc: "present", wave: "future", diamond: "future" }[s.kind];
  return (
    <div style={{ background: "var(--surface)", border: `1px solid ${s.isNew ? "var(--accent)" : "var(--rule)"}`, borderRadius: 16, padding: "20px 22px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
        <span style={{ width: 50, height: 50, borderRadius: 12, background: "var(--bg)", border: "1px solid var(--rule)", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
          <StampGlyph kind={s.kind} size={38} color={`var(--${repZone})`} />
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "var(--ink-faint)" }}>{String(n).padStart(2, "0")}</span>
            <h3 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 22, margin: 0 }}>{s.name}</h3>
            <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-faint)" }}>· {s.role}</span>
            {s.isNew && <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-ink)", background: "var(--accent)", padding: "3px 7px", borderRadius: 999, marginLeft: "auto" }}>Nuevo</span>}
          </div>
          <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: "4px 0 0" }}>{s.def}</p>
        </div>
      </div>

      {s.zones && (
        <div style={{ display: "flex", gap: 14 }}>
          <ZoneCell kind={s.kind} zone="past" label="Antes" {...s.zones.past} />
          <ZoneCell kind={s.kind} zone="present" label="Ahora" {...s.zones.present} />
          <ZoneCell kind={s.kind} zone="future" label="Después" {...s.zones.future} />
        </div>
      )}
      {s.patterns && (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {s.patterns.map((p) => (
            <div key={p.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 26, height: 26, borderRadius: 7, background: "var(--bg)", border: "1px solid var(--rule)", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}>
                <StampGlyph kind={s.kind} size={20} color={`var(--${p.zone})`} />
              </span>
              <span style={{ fontFamily: "var(--mono)", fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: `var(--${p.zone})`, flex: "0 0 138px" }}>{p.label}</span>
              <span style={{ fontSize: 12.5, fontWeight: 600, flex: "0 0 132px" }}>{p.form}</span>
              <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13, color: "var(--ink-soft)" }}>{p.ex}</span>
            </div>
          ))}
        </div>
      )}
      {s.examples && (
        <div style={{ display: "flex", gap: 12 }}>
          {s.examples.map((e) => (
            <div key={e.form} style={{ flex: 1, background: "var(--bg)", border: "1px solid var(--rule)", borderRadius: 10, padding: "10px 12px" }}>
              <p style={{ fontFamily: "var(--mono)", fontSize: 8.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-faint)", margin: "0 0 4px" }}>{e.form}</p>
              <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, color: "var(--ink)", margin: 0 }}>{e.ex}</p>
            </div>
          ))}
        </div>
      )}

      {s.note && <GuideNote {...s.note} />}
      {s.tip && <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 12.5, color: "var(--ink-faint)", margin: "10px 0 0" }}>{s.tip}</p>}
    </div>
  );
}
function StampGuide() {
  return (
    <div className="cuaderno paper" style={{ width: 820, background: "var(--bg)", color: "var(--ink)", fontFamily: "var(--sans)", padding: "32px 36px 36px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
        <Serif it style={{ fontSize: 22, color: "var(--ink-soft)" }}>Guía de sellos</Serif>
        <Cap>El sistema completo · 6 sellos</Cap>
      </div>
      <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 27, lineHeight: 1.18, letterSpacing: "-0.01em", margin: "0 0 6px" }}>
        Qué forma, qué color, qué tiempo.
      </p>
      <p style={{ fontSize: 13, color: "var(--ink-soft)", margin: "0 0 24px", maxWidth: "62ch", lineHeight: 1.5 }}>
        Cada sello con sus formas por zona, ejemplos y la regla que evita confusiones. El color es <Serif it>cuándo</Serif>; la forma es <Serif it>qué tipo</Serif> de acción.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {STAMP_GUIDE.map((s, i) => <GuideEntry key={s.kind} s={s} n={i + 1} />)}
      </div>
    </div>
  );
}
