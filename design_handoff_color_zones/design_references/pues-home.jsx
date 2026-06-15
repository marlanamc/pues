/* Pues — home (Hoy) color study. The home is the one screen that belongs to
   all four zones at once, so it's where the whole palette can live.
   Three intensities, calm -> bold. Reuses the proposed-system primitives. */

const { ZONES, Chip, Title, Desc, Meta, Svg, IcoChevron,
        NavPractica, NavLugares, NavGuias, NavLab } = window;

const hStroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
const HIco = ({ children, s = 20 }) => <svg viewBox="0 0 24 24" width={s} height={s} aria-hidden {...hStroke}>{children}</svg>;
const IcoHome = (p) => <HIco {...p}><path d="M4 11.5 12 5l8 6.5" /><path d="M5.5 10.5V19h13v-8.5" /><path d="M10 19v-5h4v5" /></HIco>;
const IcoArrow = ({ s = 19 }) => <svg viewBox="0 0 24 24" width={s} height={s} aria-hidden {...hStroke}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
const IcoFlame = ({ s = 18, c = "var(--accent)" }) => <svg viewBox="0 0 24 24" width={s} height={s} aria-hidden fill="none" stroke={c} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c1 3 4 5 4 9a4 4 0 1 1-8 0c0-2 1-3 2-4-1 5 2 5 2 5s0-3 0-10Z" /></svg>;
const IcoSliders2 = (p) => <HIco {...p}><path d="M4 8h10M18 8h2M4 16h2M10 16h10" /><circle cx="16" cy="8" r="2" /><circle cx="8" cy="16" r="2" /></HIco>;

const ZK = [ZONES.practica, ZONES.lugares, ZONES.guias, ZONES.lab];

function HomeTopBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 2 }}>
      <span className="font-display" style={{ fontStyle: "italic", fontSize: 16, color: "var(--ink-soft)" }}>Pues</span>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Meta>Racha · 1</Meta>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 999, border: "1px solid var(--rule)", background: "var(--surface)", color: "var(--ink)" }}><IcoSliders2 s={17} /></span>
      </div>
    </div>
  );
}

function HomeNav() {
  const items = [
    { label: "HOY", Ico: IcoHome, on: true },
    { label: "PRÁCTICA", Ico: NavPractica },
    { label: "LUGARES", Ico: NavLugares },
    { label: "GUÍAS", Ico: NavGuias },
    { label: "LAB", Ico: NavLab },
  ];
  return (
    <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-around", paddingTop: 12, borderTop: "1px solid var(--rule)" }}>
      {items.map(({ label, Ico, on }) => (
        <span key={label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: on ? "var(--accent)" : "var(--ink-mute)" }}>
          <Ico s={19} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: "0.06em" }}>{label}</span>
        </span>
      ))}
    </div>
  );
}

function HomeShell({ children, wash }) {
  return (
    <div style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", padding: "18px 20px 14px", background: "var(--bg)", fontFamily: "var(--font-body)", overflow: "hidden" }}>
      {wash}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
        <HomeTopBar />
        <div style={{ display: "flex", flexDirection: "column", flex: 1, marginTop: 24 }}>{children}</div>
        <HomeNav />
      </div>
    </div>
  );
}

/* shared hero (greeting + kicker + line + Empezar) */
function Hero() {
  return (
    <div>
      <p className="font-display" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 14, color: "var(--ink-soft)", margin: "0 0 3px" }}>Buenos días,</p>
      <h1 className="font-display" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 40, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--ink)", margin: 0 }}>Marlana</h1>
      <div style={{ height: 1, background: "var(--rule)", margin: "22px 0 20px" }} />
      <Meta>Día 01 · Deseos y planes</Meta>
      <p className="font-display" style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: 23, lineHeight: 1.22, letterSpacing: "-0.01em", color: "var(--ink)", margin: "11px 0 0" }}>Cinco minutos son una conversación entera.</p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 22, background: "var(--accent)", color: "var(--accent-ink)", borderRadius: 14, padding: "15px 18px" }}>
        <span className="font-display" style={{ fontFamily: "var(--font-display)", fontSize: 19 }}>Empezar</span>
        <IcoArrow />
      </div>
    </div>
  );
}

/* Cuaderno streak card. weekColors -> tint each weekday dot per zone (B/C). */
function CuadernoCard({ weekColors }) {
  const days = ["M", "M", "J", "V", "S", "D", "L"];
  const practiced = [false, false, false, false, false, true, false];
  return (
    <div style={{ border: "1px solid var(--rule)", borderRadius: 14, background: "var(--surface)", padding: "18px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Meta>Tu cuaderno</Meta><Meta>Ver más</Meta>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 14 }}>
        <IcoFlame />
        <span className="font-display" style={{ fontFamily: "var(--font-display)", fontSize: 30, lineHeight: 1, color: "var(--accent)" }}>1</span>
      </div>
      <Meta>Día de racha</Meta>
      <div style={{ display: "flex", gap: 6, marginTop: 14 }}>
        {days.map((d, i) => {
          const hue = weekColors ? ZK[i % 4].accent : "var(--accent)";
          const isToday = i === 5;
          const fill = isToday;
          return (
            <span key={i} style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <span style={{ width: 28, height: 28, borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500,
                background: fill ? hue : "transparent",
                color: fill ? "var(--bg)" : (weekColors ? hue : "var(--ink-mute)"),
                border: `1px solid ${fill ? hue : (weekColors ? `color-mix(in oklab, ${hue} 55%, var(--rule))` : "var(--rule)")}` }}>{d}</span>
            </span>
          );
        })}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16 }}><Meta>Hoy</Meta><Meta color="var(--ink-soft)">0 de 5</Meta></div>
      <div style={{ height: 4, borderRadius: 999, background: "var(--surface-sunk)", marginTop: 8 }} />
    </div>
  );
}

/* Four-zone quick map. variant: 'tint' (calm) | 'solid' (bold) */
const ZONE_TILES = [
  { z: ZONES.practica, Ico: NavPractica, label: "Práctica", meta: "Sigue" },
  { z: ZONES.lugares, Ico: NavLugares, label: "Lugares", meta: "12 temas" },
  { z: ZONES.guias, Ico: NavGuias, label: "Guías", meta: "Patrones" },
  { z: ZONES.lab, Ico: NavLab, label: "Lab", meta: "El oído" },
];

function ZoneMap({ variant = "tint" }) {
  const solid = variant === "solid";
  const open = variant === "open";
  if (open) {
    return (
      <div>
        <Meta>Cuatro caminos</Meta>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 18, rowGap: 20, marginTop: 14 }}>
          {ZONE_TILES.map(({ z, Ico, label, meta }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: 11, flexShrink: 0, background: `color-mix(in oklab, ${z.accent} 15%, var(--surface))`, color: z.accent }}><Ico s={19} /></span>
              <div style={{ minWidth: 0 }}>
                <span className="font-display" style={{ fontFamily: "var(--font-display)", fontSize: 17, color: "var(--ink)", display: "block", lineHeight: 1.1 }}>{label}</span>
                <span style={{ marginTop: 2, display: "block", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: z.accent }}>{meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Meta>Cuatro caminos</Meta>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
        {ZONE_TILES.map(({ z, Ico, label, meta }) => (
          <div key={label} style={{ display: "flex", flexDirection: "column", gap: 14, padding: "14px 14px 13px", borderRadius: 13,
            border: `1px solid ${solid ? `color-mix(in oklab, ${z.accent} 32%, var(--rule))` : "var(--rule)"}`,
            background: solid ? `color-mix(in oklab, ${z.accent} 10%, var(--surface))` : "var(--surface)" }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: 10, background: `color-mix(in oklab, ${z.accent} ${solid ? 18 : 13}%, var(--surface))`, color: z.accent }}><Ico s={18} /></span>
            <div>
              <span className="font-display" style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ink)", display: "block", lineHeight: 1.1 }}>{label}</span>
              <span style={{ marginTop: 3, display: "block", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.1em", textTransform: "uppercase", color: z.accent }}>{meta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============ A · Brújula — color only on the four-path map ============ */
function HomeBrujula() {
  return (
    <HomeShell>
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
        <Hero />
        <ZoneMap variant="tint" />
      </div>
    </HomeShell>
  );
}

/* ============ B · Racha viva — color also in the streak data ============ */
function HomeRachaViva() {
  return (
    <HomeShell>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Hero />
        <CuadernoCard weekColors />
        <ZoneMap variant="tint" />
      </div>
    </HomeShell>
  );
}

/* ============ C · Espectro — soft multi-hue wash + solid color tiles ====== */
function HomeEspectro() {
  const wash = (
    <div aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
      background: `linear-gradient(103deg,
        color-mix(in oklab, ${ZONES.practica.accent} 20%, transparent) 0%,
        color-mix(in oklab, ${ZONES.lugares.accent} 16%, transparent) 34%,
        color-mix(in oklab, ${ZONES.guias.accent} 16%, transparent) 66%,
        color-mix(in oklab, ${ZONES.lab.accent} 20%, transparent) 100%)`,
      maskImage: "linear-gradient(180deg, black 0%, black 18%, transparent 46%)",
      WebkitMaskImage: "linear-gradient(180deg, black 0%, black 18%, transparent 46%)" }} />
  );
  return (
    <HomeShell wash={wash}>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <Hero />
        <ZoneMap variant="open" />
        <CuadernoCard weekColors />
      </div>
    </HomeShell>
  );
}

Object.assign(window, { HomeBrujula, HomeRachaViva, HomeEspectro });
