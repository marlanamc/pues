/**
 * Cognates — free vocabulary you (almost) already know.
 *
 * Three pieces:
 *   1. Patterns: English→Spanish transformations that unlock dozens of words at a time.
 *   2. True cognates: themed bundles of word-for-word matches.
 *   3. False friends: words that look like English but mean something else.
 */

/* ─── Patterns ──────────────────────────────────────────── */

export type CognatePattern = {
  id: string;
  rule: string;
  ruleEn: string;
  description: string;
  pairs: { en: string; es: string }[];
  caution?: string;
};

export const cognatePatterns: CognatePattern[] = [
  {
    id: "tion-cion",
    rule: "-tion → -ción",
    ruleEn: "Most English words ending in -tion become -ción.",
    description:
      "One of the highest-leverage patterns in Spanish. Hundreds of words follow it. The -ción ending is always feminine (la información).",
    pairs: [
      { en: "information", es: "información" },
      { en: "conversation", es: "conversación" },
      { en: "situation", es: "situación" },
      { en: "education", es: "educación" },
      { en: "nation", es: "nación" },
      { en: "tradition", es: "tradición" },
      { en: "intention", es: "intención" },
      { en: "decision", es: "decisión" },
    ],
  },
  {
    id: "ty-dad",
    rule: "-ty → -dad",
    ruleEn: "English words ending in -ty often become -dad.",
    description:
      "Another massive pattern. Words ending in -dad are feminine (la universidad).",
    pairs: [
      { en: "university", es: "universidad" },
      { en: "community", es: "comunidad" },
      { en: "reality", es: "realidad" },
      { en: "opportunity", es: "oportunidad" },
      { en: "possibility", es: "posibilidad" },
      { en: "responsibility", es: "responsabilidad" },
      { en: "ability", es: "habilidad" },
      { en: "curiosity", es: "curiosidad" },
    ],
  },
  {
    id: "ly-mente",
    rule: "-ly → -mente",
    ruleEn: "Most English adverbs ending in -ly map to -mente in Spanish.",
    description:
      "Built from the feminine form of the adjective + mente. Probable → probablemente. Final → finalmente.",
    pairs: [
      { en: "finally", es: "finalmente" },
      { en: "probably", es: "probablemente" },
      { en: "exactly", es: "exactamente" },
      { en: "totally", es: "totalmente" },
      { en: "completely", es: "completamente" },
      { en: "naturally", es: "naturalmente" },
      { en: "perfectly", es: "perfectamente" },
      { en: "frequently", es: "frecuentemente" },
    ],
  },
  {
    id: "ous-oso",
    rule: "-ous → -oso / -osa",
    ruleEn: "English adjectives ending in -ous become -oso (masculine) or -osa (feminine).",
    description:
      "These describe people and things. The form changes to match what's being described — un día famoso, una persona famosa.",
    pairs: [
      { en: "famous", es: "famoso / famosa" },
      { en: "nervous", es: "nervioso / nerviosa" },
      { en: "generous", es: "generoso / generosa" },
      { en: "delicious", es: "delicioso / deliciosa" },
      { en: "curious", es: "curioso / curiosa" },
      { en: "religious", es: "religioso / religiosa" },
      { en: "mysterious", es: "misterioso / misteriosa" },
      { en: "ambitious", es: "ambicioso / ambiciosa" },
    ],
  },
  {
    id: "ic-ico",
    rule: "-ic → -ico / -ica",
    ruleEn: "English adjectives ending in -ic map to -ico / -ica.",
    description:
      "Spanish stresses these on the third-to-last syllable, which is why they take a written accent (romántico, eléctrico).",
    pairs: [
      { en: "romantic", es: "romántico / romántica" },
      { en: "electric", es: "eléctrico / eléctrica" },
      { en: "tragic", es: "trágico / trágica" },
      { en: "automatic", es: "automático / automática" },
      { en: "fantastic", es: "fantástico / fantástica" },
      { en: "academic", es: "académico / académica" },
      { en: "domestic", es: "doméstico / doméstica" },
      { en: "specific", es: "específico / específica" },
    ],
  },
  {
    id: "al-al",
    rule: "-al → -al",
    ruleEn: "Many English -al adjectives are identical in Spanish (same spelling).",
    description:
      "One of the easiest patterns — the word doesn't change at all, only the pronunciation. These adjectives don't change for gender either.",
    pairs: [
      { en: "natural", es: "natural" },
      { en: "general", es: "general" },
      { en: "personal", es: "personal" },
      { en: "social", es: "social" },
      { en: "cultural", es: "cultural" },
      { en: "original", es: "original" },
      { en: "formal", es: "formal" },
      { en: "regional", es: "regional" },
    ],
  },
  {
    id: "ant-ante",
    rule: "-ant / -ent → -ante / -ente",
    ruleEn: "English adjectives ending in -ant or -ent often become -ante or -ente.",
    description:
      "These don't change for gender — un momento importante, una idea importante.",
    pairs: [
      { en: "important", es: "importante" },
      { en: "elegant", es: "elegante" },
      { en: "constant", es: "constante" },
      { en: "different", es: "diferente" },
      { en: "evident", es: "evidente" },
      { en: "intelligent", es: "inteligente" },
      { en: "excellent", es: "excelente" },
      { en: "interesting", es: "interesante" },
    ],
  },
];

/* ─── True cognates by theme ────────────────────────────── */

export type CognateTheme = {
  id: string;
  title: string;
  description: string;
  words: { es: string; en: string; note?: string }[];
};

export const cognateThemes: CognateTheme[] = [
  {
    id: "describing-things",
    title: "Describing things",
    description: "Adjectives you can drop into almost any sentence.",
    words: [
      { es: "importante", en: "important" },
      { es: "posible", en: "possible" },
      { es: "imposible", en: "impossible" },
      { es: "necesario", en: "necessary" },
      { es: "diferente", en: "different" },
      { es: "interesante", en: "interesting" },
      { es: "fantástico", en: "fantastic" },
      { es: "terrible", en: "terrible" },
      { es: "perfecto", en: "perfect" },
      { es: "horrible", en: "horrible" },
      { es: "ridículo", en: "ridiculous" },
      { es: "natural", en: "natural" },
      { es: "normal", en: "normal" },
      { es: "especial", en: "special" },
      { es: "popular", en: "popular" },
      { es: "famoso", en: "famous" },
    ],
  },
  {
    id: "work-and-ideas",
    title: "Work & ideas",
    description: "Concepts you reach for at work or when thinking out loud.",
    words: [
      { es: "problema", en: "problem", note: "Masculine despite the -a ending: el problema." },
      { es: "idea", en: "idea" },
      { es: "proyecto", en: "project" },
      { es: "oficina", en: "office" },
      { es: "reunión", en: "meeting" },
      { es: "decisión", en: "decision" },
      { es: "oportunidad", en: "opportunity" },
      { es: "experiencia", en: "experience" },
      { es: "información", en: "information" },
      { es: "documento", en: "document" },
      { es: "computadora", en: "computer", note: "Spain uses ordenador, Latin America uses computadora." },
      { es: "tecnología", en: "technology" },
      { es: "profesional", en: "professional" },
      { es: "responsabilidad", en: "responsibility" },
    ],
  },
  {
    id: "places-and-travel",
    title: "Places & travel",
    description: "Useful when describing where you've been or where you're going.",
    words: [
      { es: "hotel", en: "hotel" },
      { es: "restaurante", en: "restaurant" },
      { es: "aeropuerto", en: "airport" },
      { es: "taxi", en: "taxi" },
      { es: "hospital", en: "hospital" },
      { es: "universidad", en: "university" },
      { es: "plaza", en: "plaza / square" },
      { es: "museo", en: "museum" },
      { es: "parque", en: "park" },
      { es: "centro", en: "center / downtown" },
      { es: "estación", en: "station" },
      { es: "supermercado", en: "supermarket" },
      { es: "farmacia", en: "pharmacy" },
      { es: "banco", en: "bank", note: "Also means 'bench' depending on context." },
    ],
  },
  {
    id: "feelings-and-states",
    title: "Feelings & states",
    description: "Quick adjectives for how you or someone else is doing.",
    words: [
      { es: "contento", en: "content / happy", note: "contenta if female" },
      { es: "nervioso", en: "nervous" },
      { es: "tranquilo", en: "calm / tranquil" },
      { es: "frustrado", en: "frustrated" },
      { es: "curioso", en: "curious" },
      { es: "honesto", en: "honest" },
      { es: "sincero", en: "sincere" },
      { es: "paciente", en: "patient" },
      { es: "impaciente", en: "impatient" },
      { es: "responsable", en: "responsible" },
      { es: "romántico", en: "romantic" },
      { es: "introvertido", en: "introverted" },
      { es: "optimista", en: "optimistic", note: "Doesn't change form for gender." },
      { es: "pesimista", en: "pessimistic" },
    ],
  },
];

/* ─── False friends ─────────────────────────────────────── */

export type FalseFriend = {
  spanish: string;
  looksLike: string;
  actuallyMeans: string;
  realTranslation: string;
  example: string;
};

export const falseFriends: FalseFriend[] = [
  {
    spanish: "embarazada",
    looksLike: "embarrassed",
    actuallyMeans: "pregnant",
    realTranslation: "Embarrassed = avergonzada / apenada.",
    example: "Mi amiga está embarazada — va a tener un bebé en marzo.",
  },
  {
    spanish: "éxito",
    looksLike: "exit",
    actuallyMeans: "success",
    realTranslation: "Exit = salida.",
    example: "Tuvo mucho éxito en su nuevo trabajo.",
  },
  {
    spanish: "actual",
    looksLike: "actual",
    actuallyMeans: "current / present-day",
    realTranslation: "Actual (as in 'real') = verdadero / real.",
    example: "El presidente actual ganó las elecciones hace dos años.",
  },
  {
    spanish: "actualmente",
    looksLike: "actually",
    actuallyMeans: "currently / nowadays",
    realTranslation: "Actually = en realidad / de hecho.",
    example: "Actualmente vivo en Boston, pero soy de Atlanta.",
  },
  {
    spanish: "asistir",
    looksLike: "to assist",
    actuallyMeans: "to attend (an event)",
    realTranslation: "To assist (help) = ayudar.",
    example: "Voy a asistir a la reunión de maestros mañana.",
  },
  {
    spanish: "molestar",
    looksLike: "to molest",
    actuallyMeans: "to bother / annoy",
    realTranslation: "Just 'to bother.' Totally innocent in Spanish.",
    example: "Perdón por molestarte, ¿tienes un minuto?",
  },
  {
    spanish: "introducir",
    looksLike: "to introduce (a person)",
    actuallyMeans: "to insert / put in",
    realTranslation: "To introduce someone = presentar.",
    example: "Te quiero presentar a mi amiga (not introducir).",
  },
  {
    spanish: "constipado",
    looksLike: "constipated",
    actuallyMeans: "having a cold / congested",
    realTranslation: "Constipated = estreñido.",
    example: "Estoy constipada, tengo la nariz tapada.",
  },
  {
    spanish: "carpeta",
    looksLike: "carpet",
    actuallyMeans: "folder",
    realTranslation: "Carpet = alfombra.",
    example: "Guardé los documentos en una carpeta azul.",
  },
  {
    spanish: "ropa",
    looksLike: "rope",
    actuallyMeans: "clothes",
    realTranslation: "Rope = cuerda / soga.",
    example: "Necesito comprar ropa nueva para el invierno.",
  },
  {
    spanish: "librería",
    looksLike: "library",
    actuallyMeans: "bookstore",
    realTranslation: "Library = biblioteca.",
    example: "Compré este libro en una librería pequeña del barrio.",
  },
  {
    spanish: "sensible",
    looksLike: "sensible",
    actuallyMeans: "sensitive",
    realTranslation: "Sensible (level-headed) = sensato / razonable.",
    example: "Es una persona muy sensible — todo la conmueve.",
  },
  {
    spanish: "éxito vs. salida",
    looksLike: "exit signs in airports",
    actuallyMeans: "Salida = exit, éxito = success.",
    realTranslation: "Two completely different words.",
    example: "La salida está al fondo del pasillo.",
  },
];

/* ─── Frame → cognate hints (for /flow/build) ──────────── */

/**
 * Maps a frame stem to a few cognates that fit naturally as completions.
 * Used by the CognateHint button in the build flow.
 */
export const frameCognateHints: Record<string, string[]> = {
  "Quiero…": ["aprender", "practicar", "explorar", "organizar"],
  "Necesito…": ["organizar", "concentrarme", "estudiar", "descansar"],
  "Voy a…": ["practicar", "estudiar", "preparar", "visitar"],
  "Me gustaría…": ["visitar", "explorar", "estudiar", "viajar"],
  "Tengo ganas de…": ["explorar", "descansar", "conversar", "estudiar"],
  "Creo que…": ["importante", "posible", "necesario", "interesante", "diferente"],
  "Pienso que…": ["importante", "interesante", "fantástico", "ridículo"],
  "Me parece que…": ["importante", "diferente", "perfecto", "natural"],
  "Supongo que…": ["posible", "probable", "normal"],
  "No sé si…": ["posible", "necesario", "razonable"],
  "Me gusta…": ["romántico", "tranquilo", "natural", "auténtico"],
  "No me gusta…": ["artificial", "agresivo", "constante", "monótono"],
  "Prefiero…": ["tradicional", "moderno", "simple", "natural"],
  "Me encanta…": ["fantástico", "increíble", "auténtico", "delicioso"],
  "Me siento…": ["nervioso", "tranquilo", "contento", "frustrado", "curioso"],
  "Estoy…": ["nervioso", "contento", "ocupado", "concentrado", "agotado"],
  "Me preocupa…": ["la situación", "el futuro", "la decisión", "la responsabilidad"],
  "Me emociona…": ["el proyecto", "la oportunidad", "la experiencia", "la idea"],
  "Es difícil…": ["concentrarme", "organizarme", "expresarme"],
  "Estoy intentando…": ["organizar", "practicar", "concentrarme", "mejorar"],
  "Espero…": ["progresar", "viajar", "mejorar", "continuar"],
  "Mi meta es…": ["progresar", "completar", "mejorar", "construir"],
  "Sueño con…": ["viajar", "explorar", "aprender", "construir"],
  "Trabajo en…": ["educación", "tecnología", "una oficina", "un proyecto"],
  "Estoy construyendo…": ["una aplicación", "un proyecto", "una rutina", "una habilidad"],
  "He estado…": ["ocupada", "concentrada", "estudiando", "explorando"],
  "Si pudiera…": ["viajar", "explorar", "estudiar", "cambiar"],
  "Soy…": ["profesora", "estudiante", "curiosa", "ambiciosa"],
};

export function hintsForFrame(stem: string): string[] {
  return frameCognateHints[stem] ?? [];
}
