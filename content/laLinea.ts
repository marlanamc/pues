/**
 * La Línea — Spanish tense system drawn on a timeline.
 * Six "sellos" (stamps): shape = what kind of action, color = when (zone),
 * almagre (accent) = what you tap. Ported from the design handoff.
 */

export type Zone = "past" | "now" | "future";

export type StampKind = "dot" | "line" | "dots" | "arc" | "wave" | "diamond";

/** A single mark drawn on the timeline. */
export type Mark = {
  kind: StampKind;
  zone: Zone;
  /** 0..1 within the zone (default 0.5). */
  pos?: number;
  /** Bar length for `line` (default 56). */
  span?: number;
  /** Arc endpoint position (0..1). */
  to?: number;
  /** Arc endpoint zone. */
  toZone?: Zone;
  dashed?: boolean;
  accent?: boolean;
};

export type ModeId = "read" | "build" | "spot" | "signals";

export const laLineaOverview = {
  pill: "Juego",
  title: "La Línea.",
  gloss: "Spanish tenses, drawn on a timeline. Pick how you want to practice.",
};

/* ---------- the six stamps ---------- */
export type Stamp = {
  kind: StampKind;
  name: string;
  es: string;
  tense: string;
  note: string;
  isNew?: boolean;
};

export const STAMPS: Stamp[] = [
  { kind: "dot", name: "Punto", es: "Momento puntual", tense: "Pretérito · Futuro", note: "Una acción terminada o un punto exacto." },
  { kind: "line", name: "Línea", es: "En desarrollo", tense: "Imperfecto · estar + -ndo", note: "Acción en proceso, sin un final marcado." },
  { kind: "dots", name: "Repetición", es: "Hábito", tense: "Presente · Imperfecto habitual", note: "Algo que se repite: rutina o costumbre." },
  { kind: "arc", name: "Arco", es: "Conexión", tense: "Perfecto (he / había / habré)", note: "Une un momento con otro punto de la línea." },
  { kind: "wave", name: "Onda", es: "Irrealis", tense: "Subjuntivo", note: "No es tiempo, es modo: deseo, duda, emoción. Flota fuera de la línea.", isNew: true },
  { kind: "diamond", name: "Rombo", es: "Hipótesis", tense: "Condicional", note: "Un «would»: algo posible pero no real.", isNew: true },
];

/* ---------- tense scope chips (mode select) ---------- */
export type TenseScope = { id: string; label: string };

export const TENSE_SCOPES: TenseScope[] = [
  { id: "all", label: "Todo" },
  { id: "basico", label: "Presente · Pasado · Futuro" },
  { id: "pasado", label: "Pretérito vs Imperfecto" },
  { id: "perfecto", label: "Perfectos" },
  { id: "modo", label: "Subjuntivo · Condicional" },
];

/* ============================================================
   MODE 1 — Leer la línea (read the timeline → choose the verb)
   ============================================================ */
export type ReadQuestion = {
  marks: Mark[];
  pre: string;
  verb: string;
  post: string;
  options: string[];
  answer: string;
  tense: string;
  why: string;
};

export const READ: ReadQuestion[] = [
  {
    marks: [{ kind: "dot", zone: "past", pos: 0.45, accent: true }],
    pre: "Ayer ", verb: "(comer)", post: " paella con mi familia.",
    options: ["comí", "comía", "como"], answer: "comí",
    tense: "Pretérito", why: "The dot marks a finished action at one exact moment in the past." },
  {
    marks: [{ kind: "line", zone: "past", pos: 0.45, accent: true }],
    pre: "De niña, ", verb: "(vivir)", post: " cerca del mar.",
    options: ["viví", "vivía", "he vivido"], answer: "vivía",
    tense: "Imperfecto", why: "The line is an ongoing situation in the past, with no marked end." },
  {
    marks: [{ kind: "dots", zone: "now", accent: true }],
    pre: "Todos los días ", verb: "(tomar)", post: " café a las ocho.",
    options: ["tomé", "tomo", "tomaba"], answer: "tomo",
    tense: "Presente", why: "Repeated dots over NOW mean a habit — present tense." },
  {
    marks: [{ kind: "arc", zone: "past", pos: 0.3, to: 0.5, toZone: "now", accent: true }],
    pre: "Nunca ", verb: "(estar)", post: " en México.",
    options: ["estuve", "he estado", "estaba"], answer: "he estado",
    tense: "Pretérito perfecto", why: "The arc links the past to NOW: experience up to the present." },
  {
    marks: [{ kind: "dot", zone: "future", pos: 0.5, accent: true }],
    pre: "El año que viene ", verb: "(viajar)", post: " a Sevilla.",
    options: ["viajé", "viajaré", "viajaba"], answer: "viajaré",
    tense: "Futuro", why: "The dot to the right of NOW is a moment in the future." },
  {
    marks: [{ kind: "wave", zone: "future", pos: 0.42, accent: true }],
    pre: "Ojalá ", verb: "(llover)", post: " mañana.",
    options: ["llueve", "llueva", "llovería"], answer: "llueva",
    tense: "Subjuntivo", why: "The wave floats off the line: a wish, not a fact. «Ojalá» triggers subjunctive." },
  {
    marks: [{ kind: "diamond", zone: "future", pos: 0.4, accent: true }],
    pre: "Yo ", verb: "(ir)", post: " contigo, pero trabajo.",
    options: ["fui", "iría", "iré"], answer: "iría",
    tense: "Condicional", why: "The diamond is a hypothesis: possible, but not real. «would go» → iría." },
];

/* ============================================================
   MODE 2 — Construir la línea (read sentence → place stamps)
   ============================================================ */
export type BuildQuestion = {
  sentence: string;
  bold: string;
  need: Pick<Mark, "kind" | "zone">[];
  tense: string;
  why: string;
};

export const BUILD: BuildQuestion[] = [
  {
    sentence: "Cuando era niño, jugaba al fútbol todos los días.",
    bold: "jugaba",
    need: [{ kind: "dots", zone: "past" }],
    tense: "Imperfecto habitual",
    why: "A past habit: repetition on the BEFORE side." },
  {
    sentence: "Me llamó justo cuando salía de casa.",
    bold: "llamó · salía",
    need: [{ kind: "line", zone: "past" }, { kind: "dot", zone: "past" }],
    tense: "Imperfecto + Pretérito",
    why: "An action in progress (line) interrupted by a finished moment (dot)." },
  {
    sentence: "He terminado el libro esta mañana.",
    bold: "He terminado",
    need: [{ kind: "arc", zone: "past" }],
    tense: "Pretérito perfecto",
    why: "An arc connecting recent past to NOW." },
  {
    sentence: "Mañana estaré estudiando a esta hora.",
    bold: "estaré estudiando",
    need: [{ kind: "line", zone: "future" }],
    tense: "Futuro continuo",
    why: "An action in progress, but in the future: line on the right." },
];

/* ============================================================
   MODE 3 — Pretérito vs Imperfecto (pick the matching timeline)
   ============================================================ */
export type SpotOption = { marks: Mark[]; label: string };
export type SpotQuestion = {
  sentence: string;
  clue: string;
  A: SpotOption;
  B: SpotOption;
  answer: "A" | "B";
  why: string;
};

export const SPOT: SpotQuestion[] = [
  {
    sentence: "Mientras cocinaba, sonó el teléfono.",
    clue: "cocinaba · sonó",
    A: { marks: [{ kind: "line", zone: "past", pos: 0.4 }, { kind: "dot", zone: "past", pos: 0.55 }], label: "Línea + punto" },
    B: { marks: [{ kind: "dot", zone: "past", pos: 0.35 }, { kind: "dot", zone: "past", pos: 0.65 }], label: "Dos puntos" },
    answer: "A",
    why: "Background in progress (cocinaba, imperfect = line) cut short by a finished moment (sonó, preterite = dot)." },
  {
    sentence: "Fui al médico y luego volví a casa.",
    clue: "fui · volví",
    A: { marks: [{ kind: "line", zone: "past", pos: 0.5 }], label: "Una línea" },
    B: { marks: [{ kind: "dot", zone: "past", pos: 0.38 }, { kind: "dot", zone: "past", pos: 0.66 }], label: "Dos puntos" },
    answer: "B",
    why: "Two finished actions, one after another: preterite = two dots in sequence." },
  {
    sentence: "Hacía sol y los niños reían en el parque.",
    clue: "hacía · reían",
    A: { marks: [{ kind: "dot", zone: "past", pos: 0.4 }, { kind: "dot", zone: "past", pos: 0.6 }], label: "Dos puntos" },
    B: { marks: [{ kind: "line", zone: "past", pos: 0.38 }, { kind: "line", zone: "past", pos: 0.64 }], label: "Dos líneas" },
    answer: "B",
    why: "Description and ongoing actions at once: imperfect = lines, not dots." },
];

/* ============================================================
   MODE 4 — Señales de tiempo (clue word → tense)
   ============================================================ */
export type SignalsQuestion = {
  clue: string;
  options: string[];
  answer: string;
  why: string;
};

export const SIGNALS: SignalsQuestion[] = [
  { clue: "ayer", options: ["Pretérito", "Presente", "Futuro"], answer: "Pretérito", why: "«Ayer» points to a finished moment in the past." },
  { clue: "todos los días", options: ["Pretérito", "Presente", "Condicional"], answer: "Presente", why: "A current routine: present (habit)." },
  { clue: "mañana", options: ["Imperfecto", "Futuro", "Pretérito"], answer: "Futuro", why: "«Mañana» points to a moment that hasn't happened yet." },
  { clue: "ya / alguna vez", options: ["Pretérito perfecto", "Futuro", "Presente"], answer: "Pretérito perfecto", why: "Experience linked to now: he/has + past participle." },
  { clue: "ojalá", options: ["Indicativo", "Subjuntivo", "Condicional"], answer: "Subjuntivo", why: "A wish: triggers subjunctive (the wave)." },
  { clue: "si pudiera…", options: ["Futuro", "Condicional", "Pretérito"], answer: "Condicional", why: "A hypothesis: «would» → conditional (the diamond)." },
];

export type Mode = { id: ModeId; title: string; sub: string; n: number };

export const MODES: Mode[] = [
  { id: "read", title: "Leer la línea", sub: "Mira el dibujo, elige el verbo", n: READ.length },
  { id: "build", title: "Construir la línea", sub: "Lee la frase, coloca los sellos", n: BUILD.length },
  { id: "spot", title: "Pretérito vs Imperfecto", sub: "¿Qué línea encaja?", n: SPOT.length },
  { id: "signals", title: "Señales de tiempo", sub: "Empareja la pista con el tiempo", n: SIGNALS.length },
];

/* ============================================================
   STAMP GUIDE — the full reference (zone → form mappings)
   layout per entry: zones | patterns | examples
   ============================================================ */
export type GuideZoneForm = { form: string; ex: string; faint?: boolean };
export type GuidePattern = { label: string; zone: "past" | "present" | "future"; form: string; ex: string };
export type GuideExample = { form: string; ex: string };
export type GuideNoteData = { label: string; text: string };

export type GuideEntry = {
  kind: StampKind;
  name: string;
  role: string;
  def: string;
  isNew?: boolean;
  zones?: { past: GuideZoneForm; present: GuideZoneForm; future: GuideZoneForm };
  patterns?: GuidePattern[];
  examples?: GuideExample[];
  note?: GuideNoteData;
  tip?: string;
};

export const STAMP_GUIDE: GuideEntry[] = [
  {
    kind: "dot", name: "Punto", role: "Momento puntual",
    def: "One finished moment, or a single point on the line.",
    zones: {
      past: { form: "Pretérito", ex: "ayer comí" },
      present: { form: "Raro · presente súbito", ex: "¡ay, me caigo!", faint: true },
      future: { form: "Futuro simple", ex: "mañana comeré" },
    },
    note: { label: "No", text: "imperfecto · progresivo · hábito · subjuntivo · condicional." },
    tip: "Tu sello «foto»: el español de los puntos de pasado/futuro simple.",
  },
  {
    kind: "line", name: "Línea", role: "En curso",
    def: "Action open, no marked end — background or in progress.",
    zones: {
      past: { form: "Imperfecto descriptivo", ex: "llovía, vivía en Madrid" },
      present: { form: "Estar + gerundio", ex: "estoy estudiando" },
      future: { form: "Futuro progresivo", ex: "estaré trabajando" },
    },
    note: { label: "Clave", text: "línea = mientras, en ese momento. No es hábito repetido (eso es Repetición)." },
  },
  {
    kind: "dots", name: "Repetición", role: "Hábito / rutina",
    def: "Same action, many times — the contrast Spanish learners need most.",
    zones: {
      past: { form: "Imperfecto habitual", ex: "siempre íbamos, todos los veranos" },
      present: { form: "Presente habitual", ex: "todos los días, normalmente" },
      future: { form: "Futuro habitual", ex: "los lunes iré" },
    },
    note: { label: "El corte", text: "Mientras cocinaba → Línea · Siempre cocinaba los domingos → Repetición." },
    tip: "En AHORA es el sello por defecto; el presente también cubre verdades y estados (vivo en Boston).",
  },
  {
    kind: "arc", name: "Arco", role: "Conexión · tiempos compuestos",
    def: "Links one moment to another reference point.",
    patterns: [
      { label: "Arco → AHORA", zone: "present", form: "Pretérito perfecto", ex: "he comido, ha llegado" },
      { label: "Arco → punto en ANTES", zone: "past", form: "Pluscuamperfecto", ex: "había salido cuando…" },
      { label: "Arco → punto en DESPUÉS", zone: "future", form: "Futuro perfecto", ex: "habré terminado" },
    ],
    note: { label: "Nota", text: "Condicional compuesto (habría hecho) = Rombo + Arco, no un sello nuevo." },
  },
  {
    kind: "wave", name: "Onda", role: "Subjuntivo · irrealis", isNew: true,
    def: "A mood, not a time — floats off the line.",
    examples: [
      { form: "Deseo", ex: "Quiero que vengas" },
      { form: "Posibilidad", ex: "Es posible que llueva" },
      { form: "Deseo irreal", ex: "Ojalá tuviera tiempo" },
    ],
    note: { label: "Comportamiento", text: "Atada a la cláusula principal (normalmente AHORA o un punto en ANTES). El color muestra el disparador; la forma dice «irrealis»." },
  },
  {
    kind: "diamond", name: "Rombo", role: "Condicional · hipótesis", isNew: true,
    def: "Possible, not actual — the «would» family.",
    examples: [
      { form: "Condicional simple", ex: "compraría, me gustaría" },
      { form: "Presente irreal", ex: "Si tuviera dinero, viajaría" },
      { form: "Petición suave", ex: "¿Podrías…?" },
    ],
    note: { label: "Distinto de", text: "el Punto en DESPUÉS (futuro real) y de la Línea (en curso). Este sello no se mezcla con ningún otro." },
  },
];
