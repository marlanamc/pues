// linea-content.jsx — Spanish tense system + re-authored question banks.

/* ---------- the six stamps, re-authored for Spanish ---------- */
const STAMPS = [
  { kind: "dot", name: "Punto", es: "Momento puntual", tense: "Pretérito · Futuro", note: "Una acción terminada o un punto exacto." },
  { kind: "line", name: "Línea", es: "En desarrollo", tense: "Imperfecto · estar + -ndo", note: "Acción en proceso, sin un final marcado." },
  { kind: "dots", name: "Repetición", es: "Hábito", tense: "Presente · Imperfecto habitual", note: "Algo que se repite: rutina o costumbre." },
  { kind: "arc", name: "Arco", es: "Conexión", tense: "Perfecto (he / había / habré)", note: "Une un momento con otro punto de la línea." },
  { kind: "wave", name: "Onda", es: "Irrealis", tense: "Subjuntivo", note: "No es tiempo, es modo: deseo, duda, emoción. Flota fuera de la línea.", isNew: true },
  { kind: "diamond", name: "Rombo", es: "Hipótesis", tense: "Condicional", note: "Un «would»: algo posible pero no real.", isNew: true },
];

/* ---------- tense scope chips (mode select) ---------- */
const TENSE_SCOPES = [
  { id: "all", label: "Todo" },
  { id: "basico", label: "Presente · Pasado · Futuro" },
  { id: "pasado", label: "Pretérito vs Imperfecto" },
  { id: "perfecto", label: "Perfectos" },
  { id: "modo", label: "Subjuntivo · Condicional" },
];

/* ============================================================
   MODE 1 — Leer la línea (read the timeline → choose the verb)
   ============================================================ */
const READ = [
  {
    marks: [{ kind: "dot", zone: "past", pos: 0.45, accent: true }],
    pre: "Ayer ", verb: "(comer)", post: " paella con mi familia.",
    options: ["comí", "comía", "como"], answer: "comí",
    tense: "Pretérito", why: "El punto marca una acción terminada en un momento exacto del pasado." },
  {
    marks: [{ kind: "line", zone: "past", pos: 0.45, accent: true }],
    pre: "De niña, ", verb: "(vivir)", post: " cerca del mar.",
    options: ["viví", "vivía", "he vivido"], answer: "vivía",
    tense: "Imperfecto", why: "La línea es una situación que dura en el pasado, sin final marcado." },
  {
    marks: [{ kind: "dots", zone: "now", accent: true }],
    pre: "Todos los días ", verb: "(tomar)", post: " café a las ocho.",
    options: ["tomé", "tomo", "tomaba"], answer: "tomo",
    tense: "Presente", why: "Los puntos repetidos sobre AHORA son un hábito: presente." },
  {
    marks: [{ kind: "arc", zone: "past", pos: 0.3, to: 0.5, toZone: "now", accent: true }],
    pre: "Nunca ", verb: "(estar)", post: " en México.",
    options: ["estuve", "he estado", "estaba"], answer: "he estado",
    tense: "Pretérito perfecto", why: "El arco conecta el pasado con AHORA: experiencia hasta el presente." },
  {
    marks: [{ kind: "dot", zone: "future", pos: 0.5, accent: true }],
    pre: "El año que viene ", verb: "(viajar)", post: " a Sevilla.",
    options: ["viajé", "viajaré", "viajaba"], answer: "viajaré",
    tense: "Futuro", why: "El punto a la derecha de AHORA es un momento futuro." },
  {
    marks: [{ kind: "wave", zone: "future", pos: 0.42, accent: true }],
    pre: "Ojalá ", verb: "(llover)", post: " mañana.",
    options: ["llueve", "llueva", "llovería"], answer: "llueva",
    tense: "Subjuntivo", why: "La onda flota fuera de la línea: deseo, no un hecho. «Ojalá» pide subjuntivo." },
  {
    marks: [{ kind: "diamond", zone: "future", pos: 0.4, accent: true }],
    pre: "Yo ", verb: "(ir)", post: " contigo, pero trabajo.",
    options: ["fui", "iría", "iré"], answer: "iría",
    tense: "Condicional", why: "El rombo es una hipótesis: posible, pero no real. «would go» → iría." },
];

/* ============================================================
   MODE 2 — Construir la línea (read sentence → place stamps)
   ============================================================ */
const BUILD = [
  {
    sentence: "Cuando era niño, jugaba al fútbol todos los días.",
    bold: "jugaba",
    need: [{ kind: "dots", zone: "past" }],
    tense: "Imperfecto habitual",
    why: "Una costumbre del pasado: repetición sobre el lado ANTES." },
  {
    sentence: "Me llamó justo cuando salía de casa.",
    bold: "llamó · salía",
    need: [{ kind: "line", zone: "past" }, { kind: "dot", zone: "past" }],
    tense: "Imperfecto + Pretérito",
    why: "Una acción en desarrollo (línea) interrumpida por un momento puntual (punto)." },
  {
    sentence: "He terminado el libro esta mañana.",
    bold: "He terminado",
    need: [{ kind: "arc", zone: "past" }],
    tense: "Pretérito perfecto",
    why: "Un arco que conecta el pasado reciente con AHORA." },
  {
    sentence: "Mañana estaré estudiando a esta hora.",
    bold: "estaré estudiando",
    need: [{ kind: "line", zone: "future" }],
    tense: "Futuro continuo",
    why: "Una acción en desarrollo, pero en el futuro: línea a la derecha." },
];

/* ============================================================
   MODE 3 — Pretérito vs Imperfecto (pick the matching timeline)
   ============================================================ */
const SPOT = [
  {
    sentence: "Mientras cocinaba, sonó el teléfono.",
    clue: "cocinaba · sonó",
    A: { marks: [{ kind: "line", zone: "past", pos: 0.4 }, { kind: "dot", zone: "past", pos: 0.55 }], label: "Línea + punto" },
    B: { marks: [{ kind: "dot", zone: "past", pos: 0.35 }, { kind: "dot", zone: "past", pos: 0.65 }], label: "Dos puntos" },
    answer: "A",
    why: "El fondo en desarrollo («cocinaba», imperfecto = línea) lo corta un momento puntual («sonó», pretérito = punto)." },
  {
    sentence: "Fui al médico y luego volví a casa.",
    clue: "fui · volví",
    A: { marks: [{ kind: "line", zone: "past", pos: 0.5 }], label: "Una línea" },
    B: { marks: [{ kind: "dot", zone: "past", pos: 0.38 }, { kind: "dot", zone: "past", pos: 0.66 }], label: "Dos puntos" },
    answer: "B",
    why: "Dos acciones terminadas, una tras otra: pretérito = dos puntos en secuencia." },
  {
    sentence: "Hacía sol y los niños reían en el parque.",
    clue: "hacía · reían",
    A: { marks: [{ kind: "dot", zone: "past", pos: 0.4 }, { kind: "dot", zone: "past", pos: 0.6 }], label: "Dos puntos" },
    B: { marks: [{ kind: "line", zone: "past", pos: 0.38 }, { kind: "line", zone: "past", pos: 0.64 }], label: "Dos líneas" },
    answer: "B",
    why: "Descripción y acciones en desarrollo a la vez: imperfecto = líneas, no puntos." },
];

/* ============================================================
   MODE 4 — Señales de tiempo (clue word → tense)
   ============================================================ */
const SIGNALS = [
  { clue: "ayer", options: ["Pretérito", "Presente", "Futuro"], answer: "Pretérito", why: "«Ayer» señala un momento terminado del pasado." },
  { clue: "todos los días", options: ["Pretérito", "Presente", "Condicional"], answer: "Presente", why: "Una rutina actual: presente (hábito)." },
  { clue: "mañana", options: ["Imperfecto", "Futuro", "Pretérito"], answer: "Futuro", why: "«Mañana» apunta a un momento que aún no ocurre." },
  { clue: "ya / alguna vez", options: ["Pretérito perfecto", "Futuro", "Presente"], answer: "Pretérito perfecto", why: "Experiencia conectada con ahora: he/has + participio." },
  { clue: "ojalá", options: ["Indicativo", "Subjuntivo", "Condicional"], answer: "Subjuntivo", why: "Deseo: dispara el subjuntivo (la onda)." },
  { clue: "si pudiera…", options: ["Futuro", "Condicional", "Pretérito"], answer: "Condicional", why: "Hipótesis: «would» → condicional (el rombo)." },
];

const MODES = [
  { id: "read", title: "Leer la línea", sub: "Mira el dibujo, elige el verbo", n: READ.length },
  { id: "build", title: "Construir la línea", sub: "Lee la frase, coloca los sellos", n: BUILD.length },
  { id: "spot", title: "Pretérito vs Imperfecto", sub: "¿Qué línea encaja?", n: SPOT.length },
  { id: "signals", title: "Señales de tiempo", sub: "Empareja la pista con el tiempo", n: SIGNALS.length },
];

/* ============================================================
   STAMP GUIDE — the full reference (zone → form mappings)
   layout per entry: zones | patterns | examples
   ============================================================ */
const STAMP_GUIDE = [
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

Object.assign(window, { STAMPS, STAMP_GUIDE, TENSE_SCOPES, READ, BUILD, SPOT, SIGNALS, MODES });
