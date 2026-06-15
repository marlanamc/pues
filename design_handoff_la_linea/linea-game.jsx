// linea-game.jsx — the clickable La Línea flow inside the Pues phone.
// Práctica hub → mode select → play (4 modes, inline feedback) → results.

const { useState: useStateG } = React;
const {
  Cap, Serif, IconArrow, IconBack, IconCheck, IconClose,
  Phone, ProgressPills, TimelineDiagram, StampGlyph,
  STAMPS, TENSE_SCOPES, READ, BUILD, SPOT, SIGNALS, MODES,
} = window;

const sig = (arr) => arr.map((m) => `${m.kind}:${m.zone}`).sort().join("|");

/* ---------- shared option row ---------- */
function OptRow({ children, state, onClick }) {
  // state: 'idle' | 'selected' | 'correct' | 'wrong' | 'muted'
  const bg = state === "correct" ? "color-mix(in oklab, var(--accent) 13%, var(--surface))"
    : state === "selected" ? "color-mix(in oklab, var(--accent) 11%, var(--surface))"
    : "var(--surface)";
  const border = (state === "correct" || state === "selected") ? "var(--accent)" : "var(--rule)";
  const opacity = state === "muted" ? 0.45 : 1;
  return (
    <button onClick={onClick} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
      width: "100%", textAlign: "left", padding: "12px 14px", borderRadius: 11,
      background: bg, border: `1px solid ${border}`, color: "var(--ink)", opacity,
      fontFamily: "var(--sans)", fontSize: 14.5,
    }}>{children}</button>
  );
}

/* ---------- play header ---------- */
function PlayHeader({ onExit, total, index }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16 }}>
      <button onClick={onExit} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "var(--ink-faint)", padding: 0, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase" }}>
        <IconClose s={13} /> Salir
      </button>
      <ProgressPills total={total} index={index} />
    </div>
  );
}

/* ---------- shared feedback footer ---------- */
function Feedback({ correct, tense, why, onNext, last }) {
  return (
    <div className="cdn-rise" style={{ borderTop: `2px solid ${correct ? "var(--accent)" : "var(--ink-faint)"}`, paddingTop: 13, marginTop: 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{ color: correct ? "var(--accent)" : "var(--ink-soft)", display: "flex" }}>{correct ? <IconCheck s={16} /> : <IconClose s={16} />}</span>
        <Cap style={{ color: correct ? "var(--accent)" : "var(--ink-soft)" }}>{correct ? "Bien dicho" : "Casi"} · {tense}</Cap>
      </div>
      <p style={{ fontSize: 13, lineHeight: 1.5, color: "var(--ink-soft)", margin: "0 0 12px" }}>{why}</p>
      <button onClick={onNext} style={{ width: "100%", background: "var(--accent)", color: "var(--accent-ink)", border: "none", borderRadius: 12, padding: "13px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Serif style={{ fontSize: 17, color: "var(--accent-ink)" }}>{last ? "Ver resultados" : "Siguiente"}</Serif>
        <IconArrow s={17} />
      </button>
    </div>
  );
}

/* ---------- MODE 1: Leer la línea ---------- */
function ReadQuestion({ q, onAnswer }) {
  const [pick, setPick] = useStateG(null);
  const done = pick !== null;
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <Cap style={{ margin: "20px 0 10px" }}>Lee la línea</Cap>
      <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14, padding: "14px 12px 8px" }}>
        <TimelineDiagram marks={q.marks} />
      </div>
      <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 21, lineHeight: 1.3, margin: "18px 0 14px" }}>
        {q.pre}<Serif it style={{ color: "var(--accent)" }}>{done ? q.answer : q.verb}</Serif>{q.post}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {q.options.map((o) => {
          let st = "idle";
          if (done) st = o === q.answer ? "correct" : (o === pick ? "wrong" : "muted");
          return (
            <OptRow key={o} state={st === "wrong" ? "selected" : st} onClick={() => !done && setPick(o)}>
              <Serif it style={{ fontSize: 16 }}>{o}</Serif>
              {done && o === q.answer && <span style={{ color: "var(--accent)", display: "flex" }}><IconCheck s={15} /></span>}
            </OptRow>
          );
        })}
      </div>
      <div style={{ flex: 1 }} />
      {done && <Feedback correct={pick === q.answer} tense={q.tense} why={q.why} onNext={() => onAnswer(pick === q.answer)} last={q.last} />}
    </div>
  );
}

/* ---------- MODE 2: Construir la línea ---------- */
function BuildQuestion({ q, onAnswer }) {
  const [placed, setPlaced] = useStateG([]);
  const [sel, setSel] = useStateG(null);
  const [checked, setChecked] = useStateG(false);
  const palette = ["dot", "line", "dots", "arc"];
  const stampName = (k) => STAMPS.find((s) => s.kind === k).name;
  const addZone = (zone) => {
    if (sel == null || checked) return;
    const inZone = placed.filter((m) => m.zone === zone).length;
    setPlaced([...placed, { kind: sel, zone, pos: 0.34 + inZone * 0.22, accent: true }]);
  };
  const correct = checked && sig(placed) === sig(q.need);
  const zones = [["past", "Antes"], ["now", "Ahora"], ["future", "Después"]];
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <Cap style={{ margin: "20px 0 10px" }}>Construye la línea</Cap>
      <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 19, lineHeight: 1.3, margin: "0 0 14px" }}>
        {q.sentence.split(new RegExp(`(${q.bold.split(" · ").join("|")})`)).map((part, i) =>
          q.bold.split(" · ").includes(part) ? <Serif key={i} it style={{ color: "var(--accent)" }}>{part}</Serif> : part)}
      </p>
      <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14, padding: "12px 10px 6px", position: "relative" }}>
        <TimelineDiagram marks={placed} />
        {!checked && (
          <div style={{ position: "absolute", inset: "12px 10px 24px", display: "flex" }}>
            {zones.map(([z, lab]) => (
              <button key={z} onClick={() => addZone(z)} style={{ flex: 1, background: sel ? "color-mix(in oklab, var(--accent) 6%, transparent)" : "transparent", border: "none", borderRight: z !== "future" ? "1px dashed var(--rule)" : "none", color: "transparent" }}>{lab}</button>
            ))}
          </div>
        )}
      </div>
      {!checked && (
        <>
          <Cap style={{ margin: "14px 0 8px" }}>{sel ? `Toca una zona para colocar «${stampName(sel)}»` : "Elige un sello"}</Cap>
          <div style={{ display: "flex", gap: 8 }}>
            {palette.map((k) => (
              <button key={k} onClick={() => setSel(k)} style={{ flex: 1, padding: "10px 0", borderRadius: 10, background: sel === k ? "color-mix(in oklab, var(--accent) 12%, var(--surface))" : "var(--surface)", border: `1px solid ${sel === k ? "var(--accent)" : "var(--rule)"}`, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                <StampGlyph kind={k} size={26} accent={sel === k} />
                <span style={{ fontFamily: "var(--mono)", fontSize: 7.5, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-faint)" }}>{stampName(k)}</span>
              </button>
            ))}
          </div>
        </>
      )}
      <div style={{ flex: 1 }} />
      {!checked ? (
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <button onClick={() => setPlaced([])} disabled={!placed.length} style={{ flex: "0 0 auto", padding: "13px 16px", borderRadius: 12, background: "transparent", border: "1px solid var(--rule)", color: "var(--ink-soft)", opacity: placed.length ? 1 : 0.4, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>Limpiar</button>
          <button onClick={() => placed.length && setChecked(true)} style={{ flex: 1, background: placed.length ? "var(--accent)" : "var(--surface)", color: placed.length ? "var(--accent-ink)" : "var(--ink-faint)", border: placed.length ? "none" : "1px solid var(--rule)", borderRadius: 12, padding: "13px 16px" }}>
            <Serif style={{ fontSize: 17, color: placed.length ? "var(--accent-ink)" : "var(--ink-faint)" }}>Comprobar</Serif>
          </button>
        </div>
      ) : (
        <Feedback correct={correct} tense={q.tense} why={q.why} onNext={() => onAnswer(correct)} last={q.last} />
      )}
    </div>
  );
}

/* ---------- MODE 3: Pretérito vs Imperfecto ---------- */
function SpotQuestion({ q, onAnswer }) {
  const [pick, setPick] = useStateG(null);
  const done = pick !== null;
  const Card = ({ id, data }) => {
    let border = "var(--rule)";
    if (done) border = id === q.answer ? "var(--accent)" : (id === pick ? "var(--ink-faint)" : "var(--rule)");
    else if (pick === id) border = "var(--accent)";
    return (
      <button onClick={() => !done && setPick(id)} style={{ width: "100%", textAlign: "left", background: "var(--surface)", border: `1px solid ${border}`, borderRadius: 12, padding: "8px 10px 4px", opacity: done && id !== q.answer && id !== pick ? 0.5 : 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 2px 4px" }}>
          <Cap>{id}</Cap>
          <span style={{ fontFamily: "var(--mono)", fontSize: 8.5, color: done && id === q.answer ? "var(--accent)" : "var(--ink-faint)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{data.label}</span>
        </div>
        <TimelineDiagram marks={data.marks.map((m) => ({ ...m, accent: done && id === q.answer }))} height={64} />
      </button>
    );
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <Cap style={{ margin: "20px 0 10px" }}>¿Qué línea encaja?</Cap>
      <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 20, lineHeight: 1.3, margin: "0 0 14px" }}>{q.sentence}</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Card id="A" data={q.A} />
        <Card id="B" data={q.B} />
      </div>
      <div style={{ flex: 1 }} />
      {done && <Feedback correct={pick === q.answer} tense="Pretérito vs Imperfecto" why={q.why} onNext={() => onAnswer(pick === q.answer)} last={q.last} />}
    </div>
  );
}

/* ---------- MODE 4: Señales de tiempo ---------- */
function SignalsQuestion({ q, onAnswer }) {
  const [pick, setPick] = useStateG(null);
  const done = pick !== null;
  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <Cap style={{ margin: "20px 0 12px" }}>¿Qué tiempo pide esta señal?</Cap>
      <div style={{ display: "flex", justifyContent: "center", padding: "22px 0 26px" }}>
        <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, fontSize: 38, color: "var(--accent)", letterSpacing: "-0.01em" }}>«{q.clue}»</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {q.options.map((o) => {
          let st = "idle";
          if (done) st = o === q.answer ? "correct" : (o === pick ? "selected" : "muted");
          return (
            <OptRow key={o} state={st} onClick={() => !done && setPick(o)}>
              <span style={{ fontFamily: "var(--sans)", fontSize: 14.5 }}>{o}</span>
              {done && o === q.answer && <span style={{ color: "var(--accent)", display: "flex" }}><IconCheck s={15} /></span>}
            </OptRow>
          );
        })}
      </div>
      <div style={{ flex: 1 }} />
      {done && <Feedback correct={pick === q.answer} tense={q.answer} why={q.why} onNext={() => onAnswer(pick === q.answer)} last={q.last} />}
    </div>
  );
}

/* ---------- Práctica hub (matches the real app screen) ---------- */
function HubRow({ icon, title, desc, tag, onClick, live, last }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left", background: live ? "color-mix(in oklab, var(--accent) 6%, var(--surface))" : "none", border: "none", borderBottom: last ? "none" : "1px solid var(--rule)", padding: "14px 14px" }}>
      <span style={{ flex: "0 0 auto", color: "var(--accent)", display: "flex" }}>{icon}</span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontFamily: "var(--serif)", fontSize: 19, margin: 0 }}>{title}</p>
        <p style={{ fontSize: 12.5, lineHeight: 1.4, color: "var(--ink-soft)", margin: "2px 0 0" }}>{desc}</p>
      </span>
      <span style={{ flex: "0 0 auto", display: "flex", alignItems: "center", gap: 6, color: live ? "var(--accent)" : "var(--ink-faint)" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{tag}</span>
        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
      </span>
    </button>
  );
}
const icStroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };
function PracticaHub({ onOpen }) {
  return (
    <Phone tab="practica">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16 }}>
        <Serif it style={{ fontSize: 17, color: "var(--ink-soft)" }}>Práctica</Serif>
        <span style={{ width: 34, height: 34, borderRadius: 99, border: "1px solid var(--rule)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink)" }}>
          <svg viewBox="0 0 24 24" width="17" height="17" {...icStroke}><path d="M4 8h9M17 8h3M4 16h3M11 16h9" /><circle cx="15" cy="8" r="2.1" /><circle cx="9" cy="16" r="2.1" /></svg>
        </span>
      </div>

      <div style={{ display: "inline-flex", alignSelf: "flex-start", border: "1px solid var(--accent)", borderRadius: 999, padding: "5px 13px", margin: "24px 0 14px" }}>
        <span style={{ fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase", color: "var(--accent)", whiteSpace: "nowrap" }}>Do the work</span>
      </div>
      <h1 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 33, lineHeight: 1.04, letterSpacing: "-0.02em", margin: "0 0 14px" }}>Speak, save, play.</h1>
      <p style={{ fontSize: 13.5, lineHeight: 1.55, color: "var(--ink-soft)", margin: "0 0 24px" }}>Práctica is where you use Spanish — not just read about it. Open your journal and try the games as they land.</p>

      <div style={{ background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 14, overflow: "hidden" }}>
        <HubRow
          icon={<svg viewBox="0 0 24 24" width="22" height="22" {...icStroke}><rect x="6" y="3.5" width="12" height="17" rx="1.6" /><path d="M6 3.5v17" /><path d="M9.5 8.5h5.5M9.5 12h5.5" /></svg>}
          title="Diario" desc="Every sentence you've spoken out loud." tag="1 frase" />
        <HubRow live onClick={onOpen}
          icon={<svg viewBox="0 0 24 24" width="22" height="22" {...icStroke}><path d="M3 12h18" /><circle cx="8" cy="12" r="2.1" fill="currentColor" stroke="none" /><path d="M14 9v6" /></svg>}
          title="La Línea" desc="Spanish tenses, drawn on a timeline." tag="Juego" />
        <HubRow last
          icon={<svg viewBox="0 0 24 24" width="22" height="22" {...icStroke}><rect x="3" y="8" width="18" height="9" rx="4.5" /><path d="M7.5 12.5h2.4M8.7 11.3v2.4" /><circle cx="15.5" cy="12" r="0.9" fill="currentColor" stroke="none" /><circle cx="17.4" cy="13.4" r="0.9" fill="currentColor" stroke="none" /></svg>}
          title="Ser vs Estar" desc="Sort sentences into ser or estar." tag="Juego" />
      </div>
      <div style={{ flex: 1 }} />
    </Phone>
  );
}

/* ---------- mode select ---------- */
function ModeSelect({ onBack, onStart }) {
  const [scope, setScope] = useStateG("all");
  return (
    <Phone tab="practica">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16 }}>
        <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 5, background: "none", border: "none", color: "var(--ink-faint)", padding: 0, fontFamily: "var(--mono)", fontSize: 10, letterSpacing: "0.13em", textTransform: "uppercase" }}>
          <IconBack s={13} /> Práctica
        </button>
        <Cap>La Línea</Cap>
      </div>
      <h1 style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 30, lineHeight: 1.05, letterSpacing: "-0.02em", margin: "20px 0 14px" }}>¿Cómo quieres practicar?</h1>

      <Cap style={{ marginBottom: 8 }}>Tiempos</Cap>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
        {TENSE_SCOPES.map((s) => (
          <button key={s.id} onClick={() => setScope(s.id)} style={{ padding: "6px 11px", borderRadius: 999, background: scope === s.id ? "var(--accent)" : "transparent", color: scope === s.id ? "var(--accent-ink)" : "var(--ink-soft)", border: `1px solid ${scope === s.id ? "var(--accent)" : "var(--rule)"}`, fontFamily: "var(--mono)", fontSize: 9.5, letterSpacing: "0.06em", textTransform: "uppercase" }}>{s.label}</button>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, overflowY: "auto", minHeight: 0 }}>
        {MODES.map((m) => (
          <button key={m.id} onClick={() => onStart(m.id)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, textAlign: "left", background: "var(--surface)", border: "1px solid var(--rule)", borderRadius: 12, padding: "13px 14px" }}>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontFamily: "var(--serif)", fontSize: 17, lineHeight: 1.14, margin: 0 }}>{m.title}</p>
              <p style={{ fontSize: 11.5, color: "var(--ink-faint)", margin: "3px 0 0" }}>{m.sub}</p>
            </div>
            <span style={{ flex: "0 0 auto", display: "flex" }}><IconArrow s={16} /></span>
          </button>
        ))}
      </div>
      <div style={{ flex: 1 }} />
    </Phone>
  );
}

/* ---------- results ---------- */
function Results({ mode, score, total, onAgain, onModes }) {
  const m = MODES.find((x) => x.id === mode);
  return (
    <Phone tab="practica" showTabs={false}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16 }}>
        <Cap>{m.title}</Cap>
        <ProgressPills total={total} index={total} />
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ width: 58, height: 58, borderRadius: 99, background: "color-mix(in oklab, var(--accent) 14%, var(--surface))", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 18 }}>
          <IconCheck s={26} />
        </div>
        <Cap style={{ marginBottom: 10 }}>Ronda terminada</Cap>
        <p style={{ fontFamily: "var(--serif)", fontWeight: 300, fontSize: 44, lineHeight: 1, margin: 0 }}>{score} <span style={{ color: "var(--ink-faint)", fontSize: 26 }}>/ {total}</span></p>
        <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 15, color: "var(--ink-soft)", margin: "14px 0 0", maxWidth: "22ch" }}>
          {score === total ? "Impecable. La línea ya es tuya." : score >= total / 2 ? "Vas viendo la forma de cada tiempo." : "Sin prisa — vuelve a mirar la línea."}
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, paddingBottom: 18 }}>
        <button onClick={onAgain} style={{ width: "100%", background: "var(--accent)", color: "var(--accent-ink)", border: "none", borderRadius: 12, padding: "14px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Serif style={{ fontSize: 17, color: "var(--accent-ink)" }}>Otra ronda</Serif><IconArrow s={17} />
        </button>
        <button onClick={onModes} style={{ width: "100%", background: "transparent", color: "var(--ink-soft)", border: "none", padding: "4px", fontFamily: "var(--serif)", fontSize: 15.5 }}>Elegir otro modo</button>
      </div>
    </Phone>
  );
}

/* ---------- orchestrator ---------- */
function LineaGame() {
  const [screen, setScreen] = useStateG("practica"); // practica | modes | play | results
  const [mode, setMode] = useStateG(null);
  const [idx, setIdx] = useStateG(0);
  const [score, setScore] = useStateG(0);

  const banks = { read: READ, build: BUILD, spot: SPOT, signals: SIGNALS };
  const bank = mode ? banks[mode] : [];
  const total = bank.length;

  const start = (m) => { setMode(m); setIdx(0); setScore(0); setScreen("play"); };
  const answer = (correct) => {
    const ns = score + (correct ? 1 : 0);
    if (idx + 1 >= total) { setScore(ns); setScreen("results"); }
    else { setScore(ns); setIdx(idx + 1); }
  };

  if (screen === "practica") return <PracticaHub onOpen={() => setScreen("modes")} />;
  if (screen === "modes") return <ModeSelect onBack={() => setScreen("practica")} onStart={start} />;
  if (screen === "results") return <Results mode={mode} score={score} total={total} onAgain={() => start(mode)} onModes={() => setScreen("modes")} />;

  // play
  const q = { ...bank[idx], last: idx + 1 >= total };
  const Q = { read: ReadQuestion, build: BuildQuestion, spot: SpotQuestion, signals: SignalsQuestion }[mode];
  return (
    <Phone showTabs={false}>
      <PlayHeader onExit={() => setScreen("modes")} total={total} index={idx} />
      <Q key={idx} q={q} onAnswer={answer} />
    </Phone>
  );
}

Object.assign(window, { LineaGame, ReadQuestion, BuildQuestion, SpotQuestion, SignalsQuestion, OptRow });
