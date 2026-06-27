/* Pues — symmetry study. Faithful "El Cuaderno" recreation (paper mode)
   plus a color-coded zone proposal. Components shared by both rows so the
   only honest difference is the system, not the fidelity. */

const sStroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

/* ---- icon primitives ---- */
const Svg = ({ children, s = 20 }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} aria-hidden {...sStroke}>
    {children}
  </svg>
);

const IcoJournal = (p) => <Svg {...p}><path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2Z" /><path d="M9 8h6M9 12h6" /></Svg>;
const IcoGame = (p) => <Svg {...p}><rect x="4" y="8" width="16" height="10" rx="2" /><path d="M8 13h2M9 12v2M15.5 12.5v2M16.5 11.5v2" /></Svg>;
const IcoSliders = (p) => <Svg {...p}><path d="M4 8h10M18 8h2M4 16h2M10 16h10" /><circle cx="16" cy="8" r="2" /><circle cx="8" cy="16" r="2" /></Svg>;
const IcoChevron = ({ s = 18, rot = 0 }) => (
  <svg viewBox="0 0 24 24" width={s} height={s} aria-hidden {...sStroke} style={{ transform: `rotate(${rot}deg)` }}><path d="M9 6l6 6-6 6" /></svg>
);

/* category + guide + lab glyphs (subset, enough to read the pattern) */
const IcoWork = (p) => <Svg {...p}><path d="M4 8h16v11H4zM9 8V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /></Svg>;
const IcoFamily = (p) => <Svg {...p}><path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.7-5 6-5s6 2 6 5M15 15c2.5 0 6 1.5 6 5" /></Svg>;
const IcoDaily = (p) => <Svg {...p}><path d="M4 5h16v14H4zM4 9h16M8 5v4M16 5v4" /></Svg>;
const IcoLearn = (p) => <Svg {...p}><path d="M4 5h12a4 4 0 0 1 4 4v10a3 3 0 0 0-3-3H4z" /></Svg>;
const IcoTravel = (p) => <Svg {...p}><path d="M3 15l8-9 3 1-3 5 5-1 3 1-9 6-2-1-1-1Z" /></Svg>;

const IcoCognates = (p) => <Svg {...p}><path d="M4 20V8a2 2 0 0 1 2-2h6v16H6a2 2 0 0 1-2-2Z" /><path d="M20 20V8a2 2 0 0 0-2-2h-6v16h6a2 2 0 0 0 2-2Z" /><path d="M10 10H8M16 10h2" /></Svg>;
const IcoPron = (p) => <Svg {...p}><path d="M6 14v-2a6 6 0 0 1 12 0v2" /><path d="M5 14h3v5H6a1 1 0 0 1-1-1zM16 14h3v4a1 1 0 0 1-1 1h-2z" /></Svg>;
const IcoLink = (p) => <Svg {...p}><path d="M10 14a3.5 3.5 0 0 0 5 0l2-2a3.5 3.5 0 0 0-5-5l-1 1" /><path d="M14 10a3.5 3.5 0 0 0-5 0l-2 2a3.5 3.5 0 0 0 5 5l1-1" /></Svg>;
const IcoQ = (p) => <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M9.5 9a3.5 3.5 0 1 1 5.8 2.6c-.9.7-1.3 1.2-1.3 2.4v.4" /><circle cx="12" cy="18.3" r="0.9" fill="currentColor" stroke="none" /></Svg>;
const IcoVerbs = (p) => <Svg {...p}><path d="M5 7h8M5 12h14M5 17h10" /><path d="M17 7v10M14 10h6M14 14h6" /></Svg>;

const IcoVocal = (p) => <Svg {...p}><path d="M12 4C8.5 4 6 6.5 6 10c0 2.5 1.5 4.5 3.5 5.5L12 20l2.5-4.5C16.5 14.5 18 12.5 18 10c0-3.5-2.5-6-6-6z" /><circle cx="12" cy="10" r="1.1" fill="currentColor" stroke="none" /></Svg>;
const IcoRr = (p) => <Svg {...p}><path d="M4 12c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5-1.5 3.5-4 3.5" /><path d="M12 12c0-2 1.5-3.5 4-3.5s4 1.5 4 3.5-1.5 3.5-4 3.5" /></Svg>;
const IcoAcento = (p) => <Svg {...p}><path d="M12 4v16M8 8l4-4 4 4" /><path d="M7 16h10" /></Svg>;
const IcoReal = (p) => <Svg {...p}><circle cx="12" cy="12" r="7.5" /><path d="M3 12h2.5M18.5 12H21M12 3v2.5M12 18.5V21" /><path d="M8.5 12a3.5 3.5 0 0 1 7 0" /></Svg>;

/* nav glyphs */
const NavPractica = (p) => <Svg {...p}><path d="M5 4h11a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2Z" /><path d="M9 8h6M9 12h6" /></Svg>;
const NavLugares = (p) => <Svg {...p}><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></Svg>;
const NavGuias = (p) => <Svg {...p}><circle cx="8" cy="8" r="3.5" /><circle cx="16" cy="16" r="3.5" /><path d="M12.5 7.5h6M15.5 4.5v6M5 14h6M5 17.5h4" /></Svg>;
const NavLab = (p) => <Svg {...p}><path d="M2 12h2M6 8h2M6 16h2M10 5h2M10 19h2M14 8h2M14 16h2M18 12h2" /></Svg>;

const ZONES = {
  practica: { key: "practica", accent: "#bb4a2a", label: "PRÁCTICA" },
  lugares: { key: "lugares", accent: "oklch(0.5 0.085 152)", label: "LUGARES" },
  guias: { key: "guias", accent: "oklch(0.5 0.082 248)", label: "GUÍAS" },
  lab: { key: "lab", accent: "oklch(0.52 0.105 332)", label: "LAB" },
};

/* ============ shared shell ============ */
function TopBar({ wordmark }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 2 }}>
      <span className="font-display" style={{ fontStyle: "italic", fontSize: 16, color: "var(--ink-soft)" }}>{wordmark}</span>
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 999, border: "1px solid var(--rule)", background: "var(--surface)", color: "var(--ink)" }}>
        <IcoSliders s={17} />
      </span>
    </div>
  );
}

function BottomNav({ active, colored }) {
  const items = [
    { k: "practica", label: "PRÁCTICA", Ico: NavPractica },
    { k: "lugares", label: "LUGARES", Ico: NavLugares },
    { k: "guias", label: "GUÍAS", Ico: NavGuias },
    { k: "lab", label: "LAB", Ico: NavLab },
  ];
  return (
    <div style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 4, paddingTop: 12, borderTop: "1px solid var(--rule)" }}>
      <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, borderRadius: 999, background: "#241f18", color: "#efe5d2", fontFamily: "var(--font-display)", fontSize: 16, flexShrink: 0 }}>N</span>
      <div style={{ display: "flex", flex: 1, justifyContent: "space-around" }}>
        {items.map(({ k, label, Ico }) => {
          const on = k === active;
          const col = on ? (colored ? ZONES[k].accent : "var(--accent)") : "var(--ink-mute)";
          return (
            <span key={k} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: col }}>
              <Ico s={19} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.06em" }}>{label}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
}

function Screen({ children, active, colored, wordmark }) {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", padding: "18px 20px 14px", background: "var(--bg)", fontFamily: "var(--font-body)" }}>
      <TopBar wordmark={wordmark} />
      <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 18, flex: 1 }}>{children}</div>
      <BottomNav active={active} colored={colored} />
    </div>
  );
}

/* ledger primitives */
const Ledger = ({ children }) => (
  <ul style={{ listStyle: "none", margin: 0, padding: 0, border: "1px solid var(--rule)", borderRadius: 14, background: "var(--surface)", overflow: "hidden" }}>{children}</ul>
);
const Row = ({ children, first }) => (
  <li style={{ borderTop: first ? "none" : "1px solid var(--rule)" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 18px" }}>{children}</div>
  </li>
);

/* === plain accent icon (today) === */
const AccentIco = ({ Ico }) => <span style={{ color: "var(--accent)", display: "flex", flexShrink: 0 }}><Ico /></span>;
/* === tinted chip (proposed) === */
const Chip = ({ Ico, zone, s = 38 }) => (
  <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: s, height: s, borderRadius: 11, flexShrink: 0, background: `color-mix(in oklab, ${zone.accent} 13%, var(--surface))`, color: zone.accent }}>
    <Ico s={s > 34 ? 20 : 18} />
  </span>
);

const Title = ({ children, sz = 18 }) => <span className="font-display" style={{ fontFamily: "var(--font-display)", fontSize: sz, lineHeight: 1.15, color: "var(--ink)", display: "block" }}>{children}</span>;
const Desc = ({ children }) => <span style={{ fontSize: 13.5, lineHeight: 1.4, color: "var(--ink-mute)", display: "block", marginTop: 2 }}>{children}</span>;
const Meta = ({ children, color = "var(--ink-mute)" }) => <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color }}>{children}</span>;
const Chev = () => <span style={{ color: "var(--ink-mute)", display: "flex", flexShrink: 0 }}><IcoChevron /></span>;

/* =====================================================================
   ROW 1 — TODAY (faithful recreation, all red, four different intros)
   ===================================================================== */

function TodayPractica() {
  return (
    <Screen active="practica" wordmark="Práctica">
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ alignSelf: "flex-start", border: "1px solid color-mix(in oklab, var(--accent) 45%, transparent)", color: "var(--accent)", borderRadius: 999, padding: "5px 13px", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase" }}>Do the work</span>
        <h1 className="font-display" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 27, lineHeight: 1.15, letterSpacing: "-0.01em", color: "var(--ink)", margin: 0 }}>Speak, save, play.</h1>
      </div>
      <Ledger>
        <Row first><AccentIco Ico={IcoJournal} /><span style={{ flex: 1 }}><Title>Diario</Title><Desc>Every sentence you've spoken out loud.</Desc></span><Chev /></Row>
        <Row><AccentIco Ico={IcoGame} /><span style={{ flex: 1 }}><Title>La Línea</Title><Desc>Spanish tenses, drawn on a timeline.</Desc></span><Meta>Juego</Meta><Chev /></Row>
        <Row><AccentIco Ico={IcoGame} /><span style={{ flex: 1 }}><Title>Marcadores</Title><Desc>Time words and the tense they call for.</Desc></span><Meta>Juego</Meta><Chev /></Row>
        <Row><AccentIco Ico={IcoGame} /><span style={{ flex: 1 }}><Title>Ser vs Estar</Title><Desc>Sort sentences into ser or estar.</Desc></span><Meta>Juego</Meta><Chev /></Row>
      </Ledger>
    </Screen>
  );
}

function Toggle({ a, b, zone }) {
  return (
    <div style={{ display: "flex", border: "1px solid var(--rule)", background: "var(--surface)", borderRadius: 999, padding: 4 }}>
      <span style={{ flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 999, background: zone ? zone.accent : "var(--accent)", color: "var(--bg)", fontSize: 14, fontWeight: 500 }}>{a}</span>
      <span style={{ flex: 1, textAlign: "center", padding: "8px 0", color: "var(--ink-mute)", fontSize: 14, fontWeight: 500 }}>{b}</span>
    </div>
  );
}

function TodayLugares() {
  const cats = [
    [IcoWork, "Work", "7", "3 with phrasebanks ready to practice."],
    [IcoFamily, "Family & Friends", "6", "2 with phrasebanks ready to practice."],
    [IcoDaily, "Daily Life", "7", "4 with phrasebanks ready to practice."],
    [IcoLearn, "Learning", "5", "1 with phrasebank ready to practice."],
  ];
  return (
    <Screen active="lugares" wordmark="Lugares">
      <Toggle a="Topics" b="My Situations" />
      <Ledger>
        {cats.map(([Ico, name, n, desc], i) => (
          <Row key={name} first={i === 0}>
            <AccentIco Ico={Ico} />
            <span style={{ flex: 1 }}>
              <span style={{ display: "flex", alignItems: "baseline", gap: 10 }}><Title sz={19}>{name}</Title><Meta>{n} temas</Meta></span>
              <Desc>{desc}</Desc>
            </span>
            <span style={{ color: "var(--ink-mute)", display: "flex" }}><IcoChevron rot={90} /></span>
          </Row>
        ))}
      </Ledger>
    </Screen>
  );
}

function TodayGuias() {
  const rows = [
    [IcoCognates, "Cognados", null],
    [IcoPron, "Pronunciación", "2 guides"],
    [IcoLink, "Enlace", null],
    [IcoQ, "Preguntas", null],
    [IcoVerbs, "Verbos", "5 guides"],
  ];
  return (
    <Screen active="guias" wordmark="Guías">
      <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-soft)", margin: 0 }}>Reference pages when you need the pattern.</p>
      <Ledger>
        {rows.map(([Ico, name, meta], i) => (
          <Row key={name} first={i === 0}>
            <AccentIco Ico={Ico} />
            <span style={{ flex: 1 }}><Title>{name}</Title></span>
            {meta && <Meta>{meta}</Meta>}
            <Chev />
          </Row>
        ))}
      </Ledger>
    </Screen>
  );
}

function TodayLab() {
  const cards = [
    [IcoVocal, "Vocales", "Train your ear on A, E, I, O, U — the five sounds everything is built on.", false],
    [IcoRr, "R y RR", 'The difference between "but" and "dog" is a single letter. Hear it.', false],
    [IcoAcento, "Acento", "One accent mark shifts the stress — and changes the word.", false],
    [IcoReal, "Español Real", "How people actually talk. Side by side with the textbook.", true],
  ];
  return (
    <Screen active="lab" wordmark="Lab de Pronunciación">
      <p className="font-display" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 17, color: "var(--ink-soft)", margin: 0 }}>Train your ear.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
        {cards.map(([Ico, name, desc, flag]) => (
          <div key={name} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 16px", borderRadius: 14, border: `1px solid ${flag ? "color-mix(in oklab, var(--accent) 40%, var(--rule))" : "var(--rule)"}`, background: flag ? "color-mix(in oklab, var(--accent) 6%, var(--surface))" : "var(--surface)" }}>
            <AccentIco Ico={Ico} />
            <span style={{ flex: 1 }}><Title>{name}</Title><Desc>{desc}</Desc></span>
            <Chev />
          </div>
        ))}
      </div>
    </Screen>
  );
}

/* =====================================================================
   ROW 2 — PROPOSED (one chassis, color-coded zones)
   intro = mono kicker + one display line w/ a zone-colored word
   list  = ONE ledger model everywhere; tinted icon chips carry the hue
   ===================================================================== */

function Kicker({ zone, role }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
      <span style={{ width: 16, height: 1.5, background: zone.accent, borderRadius: 2 }} />
      <Meta color={zone.accent}>{zone.label} · {role}</Meta>
    </span>
  );
}
function Intro({ zone, role, children }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
      <Kicker zone={zone} role={role} />
      <h1 className="font-display" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 27, lineHeight: 1.14, letterSpacing: "-0.01em", color: "var(--ink)", margin: 0 }}>{children}</h1>
    </div>
  );
}
const Hue = ({ zone, children }) => <em style={{ fontStyle: "italic", color: zone.accent }}>{children}</em>;

function ZRow({ Ico, zone, title, desc, meta, first, sz = 18 }) {
  return (
    <Row first={first}>
      <Chip Ico={Ico} zone={zone} />
      <span style={{ flex: 1 }}><Title sz={sz}>{title}</Title>{desc && <Desc>{desc}</Desc>}</span>
      {meta && <Meta color={zone.accent}>{meta}</Meta>}
      <Chev />
    </Row>
  );
}

function NewPractica() {
  const z = ZONES.practica;
  return (
    <Screen active="practica" colored wordmark="Práctica">
      <Intro zone={z} role="Haz el trabajo">Speak, save, <Hue zone={z}>play</Hue>.</Intro>
      <Ledger>
        <ZRow first Ico={IcoJournal} zone={z} title="Diario" desc="Every sentence you've spoken out loud." />
        <ZRow Ico={IcoGame} zone={z} title="La Línea" desc="Spanish tenses, drawn on a timeline." meta="Juego" />
        <ZRow Ico={IcoGame} zone={z} title="Marcadores" desc="Time words and the tense they call for." meta="Juego" />
        <ZRow Ico={IcoGame} zone={z} title="Ser vs Estar" desc="Sort sentences into ser or estar." meta="Juego" />
      </Ledger>
    </Screen>
  );
}

function NewLugares() {
  const z = ZONES.lugares;
  const cats = [
    [IcoWork, "Work", "7 temas"],
    [IcoFamily, "Family & Friends", "6 temas"],
    [IcoDaily, "Daily Life", "7 temas"],
    [IcoTravel, "Travel", "5 temas"],
  ];
  return (
    <Screen active="lugares" colored wordmark="Lugares">
      <Intro zone={z} role="Biblioteca">Where you'll <Hue zone={z}>actually</Hue> use it.</Intro>
      <Toggle a="Topics" b="My Situations" zone={z} />
      <Ledger>
        {cats.map(([Ico, name, meta], i) => (
          <ZRow key={name} first={i === 0} Ico={Ico} zone={z} title={name} meta={meta} sz={18} />
        ))}
      </Ledger>
    </Screen>
  );
}

function NewGuias() {
  const z = ZONES.guias;
  const rows = [
    [IcoCognates, "Cognados", null],
    [IcoPron, "Pronunciación", "2"],
    [IcoLink, "Enlace", null],
    [IcoQ, "Preguntas", null],
    [IcoVerbs, "Verbos", "5"],
  ];
  return (
    <Screen active="guias" colored wordmark="Guías">
      <Intro zone={z} role="Referencia">The pattern, <Hue zone={z}>when you need it</Hue>.</Intro>
      <Ledger>
        {rows.map(([Ico, name, meta], i) => (
          <li key={name} style={{ borderTop: i === 0 ? "none" : "1px solid var(--rule)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 13, padding: "13px 18px" }}>
              <Chip Ico={Ico} zone={z} s={32} />
              <span style={{ flex: 1 }}><Title sz={17}>{name}</Title></span>
              {meta && <Meta color={z.accent}>{meta} guías</Meta>}
              <Chev />
            </div>
          </li>
        ))}
      </Ledger>
    </Screen>
  );
}

function NewLab() {
  const z = ZONES.lab;
  return (
    <Screen active="lab" colored wordmark="Lab de Pronunciación">
      <Intro zone={z} role="El oído">Train your <Hue zone={z}>ear</Hue>.</Intro>
      <Ledger>
        <ZRow first Ico={IcoVocal} zone={z} title="Vocales" desc="A, E, I, O, U — the five core sounds." />
        <ZRow Ico={IcoRr} zone={z} title="R y RR" desc='"But" vs "dog" — one letter apart.' />
        <ZRow Ico={IcoAcento} zone={z} title="Acento" desc="One mark shifts the whole word." />
      </Ledger>
      {/* shared "featured" device — the one tinted row any zone may use */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "15px 18px", borderRadius: 14, border: `1px solid color-mix(in oklab, ${z.accent} 45%, var(--rule))`, background: `color-mix(in oklab, ${z.accent} 8%, var(--surface))` }}>
        <Chip Ico={IcoReal} zone={z} />
        <span style={{ flex: 1 }}><Title>Español Real</Title><Desc>How people actually talk vs the textbook.</Desc></span>
        <Meta color={z.accent}>Destacado</Meta>
        <Chev />
      </div>
    </Screen>
  );
}

Object.assign(window, {
  TodayPractica, TodayLugares, TodayGuias, TodayLab,
  NewPractica, NewLugares, NewGuias, NewLab,
  // shared primitives for the home study
  ZONES, Chip, Title, Desc, Meta, Ledger, Row, IcoChevron, Svg,
  IcoJournal, IcoGame, IcoSliders,
  NavPractica, NavLugares, NavGuias, NavLab,
});
