/**
 * Sentence Builder — a tap-to-build game for Práctica.
 *
 * The learner reads an English prompt, taps Spanish word tiles in order, and
 * checks the answer. Each card is self-contained: the correct word sequence,
 * the bank of tappable tiles (with a few distractors), and the teaching note.
 *
 * Matching is order-sensitive but case- and accent-tolerant on the comparison
 * side, so a tile that reads "Tengo" (capitalised at the start of the answer)
 * still matches the lowercase target "tengo". Distractor tiles are simply any
 * `availableTiles` entry that never appears in `targetSpanish`.
 */

export type SentenceCard = {
  id: string;
  mode: "sentence_builder";
  /** The English sentence to translate. */
  promptEnglish: string;
  /** Correct Spanish word order, lowercase. The source of truth for checking. */
  targetSpanish: string[];
  /** Tiles shown in the bank — the target words shuffled in with distractors. */
  availableTiles: string[];
  /** The finished sentence, properly cased and punctuated, for the reveal. */
  displayAnswer: string;
  /** The grammar pattern this card teaches, e.g. "Tengo que + infinitive". */
  pattern: string;
  /** One-line teaching note shown under the bank and in the Pista popover. */
  hint: string;
  /** The "why" shown on a correct answer. */
  explanation: string;
  /** Three quick echoes of the pattern, shown under the teaching note. */
  examples: string;
  /** Gentle nudge shown on a wrong answer. */
  almost: string;
  /** Level label for the mini progress card. */
  level: string;
};

/** Lowercase + strip accents so "Tengo" and "tengo" compare equal. */
export function normalizeWord(word: string): string {
  return word
    .toLocaleLowerCase("es")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim();
}

/** Spanish strings to pre-generate audio for (consumed by scripts/generate-audio.ts). */
export function sentenceBuilderAudioTexts(): string[] {
  return sentenceBuilderCards.map((c) => c.displayAnswer);
}

export const sentenceBuilderCards: SentenceCard[] = [
  {
    id: "tengo_que_llamar_mama_001",
    mode: "sentence_builder",
    promptEnglish: "I have to call my mom.",
    targetSpanish: ["tengo", "que", "llamar", "a", "mi", "mamá"],
    availableTiles: ["mamá", "mi", "a", "que", "tengo", "llamo", "llamar", "yo", "la"],
    displayAnswer: "Tengo que llamar a mi mamá.",
    pattern: "Tengo que + infinitive",
    hint: "Después de “tengo que”, el verbo siempre va en infinitivo.",
    explanation: "Después de “tengo que”, usamos el infinitivo: llamar.",
    examples: "Tengo que llamar, tengo que estudiar, tengo que trabajar…",
    almost: "Casi. Revisa el verbo después de “tengo que”.",
    level: "Principiante 1",
  },
  {
    id: "voy_a_estudiar_noche_002",
    mode: "sentence_builder",
    promptEnglish: "I'm going to study tonight.",
    targetSpanish: ["voy", "a", "estudiar", "esta", "noche"],
    availableTiles: ["noche", "estudio", "voy", "esta", "a", "mañana", "estudiar", "soy"],
    displayAnswer: "Voy a estudiar esta noche.",
    pattern: "Voy a + infinitive",
    hint: "“Voy a” + infinitivo expresa una acción futura.",
    explanation: "Después de “voy a”, usamos el infinitivo: estudiar.",
    examples: "Voy a comer, voy a salir, voy a dormir…",
    almost: "Casi. Después de “voy a” va el infinitivo.",
    level: "Principiante 1",
  },
  {
    id: "quiero_tomar_cafe_003",
    mode: "sentence_builder",
    promptEnglish: "I want to drink coffee.",
    targetSpanish: ["quiero", "tomar", "café"],
    availableTiles: ["té", "quiero", "tomo", "café", "bebo", "tomar"],
    displayAnswer: "Quiero tomar café.",
    pattern: "Querer + infinitive",
    hint: "Después de “quiero”, el segundo verbo va en infinitivo.",
    explanation: "Quiero + infinitivo: quiero tomar.",
    examples: "Quiero comer, quiero ir, quiero descansar…",
    almost: "Casi. Después de “quiero” va el infinitivo.",
    level: "Principiante 1",
  },
  {
    id: "me_gusta_leer_libros_004",
    mode: "sentence_builder",
    promptEnglish: "I like to read books.",
    targetSpanish: ["me", "gusta", "leer", "libros"],
    availableTiles: ["libros", "leo", "gusta", "me", "casa", "leer", "gusto"],
    displayAnswer: "Me gusta leer libros.",
    pattern: "Me gusta + infinitive",
    hint: "Para hablar de gustos, usa “me gusta” + infinitivo.",
    explanation: "Me gusta + infinitivo: me gusta leer.",
    examples: "Me gusta cantar, me gusta cocinar, me gusta caminar…",
    almost: "Casi. Después de “me gusta” va el infinitivo.",
    level: "Principiante 1",
  },
  {
    id: "necesito_trabajar_manana_005",
    mode: "sentence_builder",
    promptEnglish: "I need to work tomorrow.",
    targetSpanish: ["necesito", "trabajar", "mañana"],
    availableTiles: ["trabajo", "mañana", "necesito", "hoy", "trabajar", "necesita"],
    displayAnswer: "Necesito trabajar mañana.",
    pattern: "Necesitar + infinitive",
    hint: "Después de “necesito”, el verbo va en infinitivo.",
    explanation: "Necesito + infinitivo: necesito trabajar.",
    examples: "Necesito dormir, necesito comer, necesito salir…",
    almost: "Casi. Después de “necesito” va el infinitivo.",
    level: "Principiante 1",
  },
  {
    id: "puedo_hablar_espanol_006",
    mode: "sentence_builder",
    promptEnglish: "I can speak Spanish.",
    targetSpanish: ["puedo", "hablar", "español"],
    availableTiles: ["español", "hablo", "puedo", "inglés", "hablar", "puede"],
    displayAnswer: "Puedo hablar español.",
    pattern: "Poder + infinitive",
    hint: "Después de “puedo”, el verbo va en infinitivo.",
    explanation: "Puedo + infinitivo: puedo hablar.",
    examples: "Puedo ir, puedo ayudar, puedo manejar…",
    almost: "Casi. Después de “puedo” va el infinitivo.",
    level: "Principiante 1",
  },
  {
    id: "tenemos_que_limpiar_casa_007",
    mode: "sentence_builder",
    promptEnglish: "We have to clean the house.",
    targetSpanish: ["tenemos", "que", "limpiar", "la", "casa"],
    availableTiles: ["casa", "limpiamos", "que", "tenemos", "la", "el", "limpiar", "tengo"],
    displayAnswer: "Tenemos que limpiar la casa.",
    pattern: "Tener que + infinitive",
    hint: "Después de “tenemos que”, el verbo va en infinitivo.",
    explanation: "Tener que + infinitivo: tenemos que limpiar.",
    examples: "Tenemos que estudiar, tenemos que salir, tenemos que esperar…",
    almost: "Casi. Revisa el verbo después de “tenemos que”.",
    level: "Principiante 1",
  },
  {
    id: "ella_quiere_bailar_008",
    mode: "sentence_builder",
    promptEnglish: "She wants to dance.",
    targetSpanish: ["ella", "quiere", "bailar"],
    availableTiles: ["bailar", "baila", "ella", "quiere", "él", "quieren"],
    displayAnswer: "Ella quiere bailar.",
    pattern: "Querer + infinitive",
    hint: "Después de “quiere”, el verbo va en infinitivo.",
    explanation: "Quiere + infinitivo: quiere bailar.",
    examples: "Quiere comer, quiere salir, quiere descansar…",
    almost: "Casi. Después de “quiere” va el infinitivo.",
    level: "Principiante 1",
  },

  /* ── Principiante 2 · El presente del día a día ──────────────────────── */
  {
    id: "trabajo_en_el_centro_101",
    mode: "sentence_builder",
    promptEnglish: "I work downtown.",
    targetSpanish: ["trabajo", "en", "el", "centro"],
    availableTiles: ["centro", "el", "en", "trabajo", "trabaja", "la", "casa"],
    displayAnswer: "Trabajo en el centro.",
    pattern: "Presente · yo (-ar)",
    hint: "Para “yo”, los verbos en -ar terminan en -o: trabajo.",
    explanation: "Yo trabajo: la terminación -o marca la primera persona.",
    examples: "Trabajo, hablo, estudio, cocino…",
    almost: "Casi. Para “yo”, el verbo termina en -o.",
    level: "Principiante 2",
  },
  {
    id: "ella_come_en_casa_102",
    mode: "sentence_builder",
    promptEnglish: "She eats at home.",
    targetSpanish: ["ella", "come", "en", "casa"],
    availableTiles: ["casa", "en", "come", "ella", "como", "comen", "el"],
    displayAnswer: "Ella come en casa.",
    pattern: "Presente · ella (-er)",
    hint: "Para “él/ella”, los verbos en -er terminan en -e: come.",
    explanation: "Ella come: la terminación -e marca la tercera persona.",
    examples: "Come, bebe, lee, corre…",
    almost: "Casi. Para “ella”, el verbo en -er termina en -e.",
    level: "Principiante 2",
  },
  {
    id: "vivimos_cerca_escuela_103",
    mode: "sentence_builder",
    promptEnglish: "We live near the school.",
    targetSpanish: ["vivimos", "cerca", "de", "la", "escuela"],
    availableTiles: ["escuela", "la", "de", "cerca", "vivimos", "viven", "el", "vivo"],
    displayAnswer: "Vivimos cerca de la escuela.",
    pattern: "Presente · nosotros (-ir)",
    hint: "Para “nosotros”, los verbos en -ir terminan en -imos: vivimos.",
    explanation: "Nosotros vivimos: -imos marca la primera persona del plural.",
    examples: "Vivimos, escribimos, abrimos, salimos…",
    almost: "Casi. Para “nosotros”, el verbo en -ir termina en -imos.",
    level: "Principiante 2",
  },
  {
    id: "hablas_ingles_muy_bien_104",
    mode: "sentence_builder",
    promptEnglish: "You speak English very well.",
    targetSpanish: ["hablas", "inglés", "muy", "bien"],
    availableTiles: ["bien", "muy", "inglés", "hablas", "hablo", "habla", "mal"],
    displayAnswer: "Hablas inglés muy bien.",
    pattern: "Presente · tú (-ar)",
    hint: "Para “tú”, los verbos en -ar terminan en -as: hablas.",
    explanation: "Tú hablas: la terminación -as marca la segunda persona.",
    examples: "Hablas, trabajas, estudias, cantas…",
    almost: "Casi. Para “tú”, el verbo en -ar termina en -as.",
    level: "Principiante 2",
  },
  {
    id: "bebo_agua_todos_los_dias_105",
    mode: "sentence_builder",
    promptEnglish: "I drink water every day.",
    targetSpanish: ["bebo", "agua", "todos", "los", "días"],
    availableTiles: ["días", "los", "todos", "agua", "bebo", "bebe", "las", "día"],
    displayAnswer: "Bebo agua todos los días.",
    pattern: "Presente · yo (-er)",
    hint: "Para “yo”, los verbos en -er también terminan en -o: bebo.",
    explanation: "Yo bebo: la terminación -o sirve para -ar y -er en la primera persona.",
    examples: "Bebo, como, leo, corro…",
    almost: "Casi. Para “yo”, el verbo en -er termina en -o.",
    level: "Principiante 2",
  },
  {
    id: "el_escribe_una_carta_106",
    mode: "sentence_builder",
    promptEnglish: "He writes a letter.",
    targetSpanish: ["él", "escribe", "una", "carta"],
    availableTiles: ["carta", "una", "escribe", "él", "escribo", "un", "escriben"],
    displayAnswer: "Él escribe una carta.",
    pattern: "Presente · él (-ir)",
    hint: "Para “él/ella”, los verbos en -ir terminan en -e: escribe.",
    explanation: "Él escribe: -er y -ir comparten la terminación -e en tercera persona.",
    examples: "Escribe, vive, abre, recibe…",
    almost: "Casi. Para “él”, el verbo en -ir termina en -e.",
    level: "Principiante 2",
  },
  {
    id: "estudio_espanol_por_la_noche_107",
    mode: "sentence_builder",
    promptEnglish: "I study Spanish at night.",
    targetSpanish: ["estudio", "español", "por", "la", "noche"],
    availableTiles: ["noche", "la", "por", "español", "estudio", "estudia", "el", "mañana"],
    displayAnswer: "Estudio español por la noche.",
    pattern: "Presente · yo + “por la noche”",
    hint: "“Por la noche” dice cuándo haces algo, sin hora exacta.",
    explanation: "Estudio (yo) + por la noche: la rutina del día.",
    examples: "Por la mañana, por la tarde, por la noche…",
    almost: "Casi. Revisa el orden: verbo, luego “por la noche”.",
    level: "Principiante 2",
  },
  {
    id: "ella_lee_el_periodico_108",
    mode: "sentence_builder",
    promptEnglish: "She reads the newspaper.",
    targetSpanish: ["ella", "lee", "el", "periódico"],
    availableTiles: ["periódico", "el", "lee", "ella", "leo", "la", "leen"],
    displayAnswer: "Ella lee el periódico.",
    pattern: "Presente · ella (-er)",
    hint: "“El periódico” es masculino: lleva el artículo “el”.",
    explanation: "Ella lee: tercera persona; “el periódico” es masculino.",
    examples: "Lee, come, bebe, aprende…",
    almost: "Casi. Para “ella”, el verbo en -er termina en -e.",
    level: "Principiante 2",
  },
  {
    id: "abrimos_la_tienda_a_las_nueve_109",
    mode: "sentence_builder",
    promptEnglish: "We open the store at nine.",
    targetSpanish: ["abrimos", "la", "tienda", "a", "las", "nueve"],
    availableTiles: ["nueve", "las", "a", "tienda", "la", "abrimos", "abren", "el", "abro"],
    displayAnswer: "Abrimos la tienda a las nueve.",
    pattern: "Presente · nosotros + hora",
    hint: "Para decir la hora usamos “a las…”: a las nueve.",
    explanation: "Nosotros abrimos (-ir) + “a las nueve” para la hora.",
    examples: "A las ocho, a las nueve, a las diez…",
    almost: "Casi. La hora va con “a las”.",
    level: "Principiante 2",
  },
  {
    id: "viven_en_la_ciudad_110",
    mode: "sentence_builder",
    promptEnglish: "They live in the city.",
    targetSpanish: ["viven", "en", "la", "ciudad"],
    availableTiles: ["ciudad", "la", "en", "viven", "vive", "vivimos", "el"],
    displayAnswer: "Viven en la ciudad.",
    pattern: "Presente · ellos (-ir)",
    hint: "Para “ellos/ellas”, los verbos en -ir terminan en -en: viven.",
    explanation: "Ellos viven: -en marca la tercera persona del plural.",
    examples: "Viven, escriben, abren, salen…",
    almost: "Casi. Para “ellos”, el verbo en -ir termina en -en.",
    level: "Principiante 2",
  },

  /* ── Principiante 3 · Preguntas ──────────────────────────────────────── */
  {
    id: "donde_vives_201",
    mode: "sentence_builder",
    promptEnglish: "Where do you live?",
    targetSpanish: ["dónde", "vives"],
    availableTiles: ["vives", "dónde", "vivo", "cómo", "vive"],
    displayAnswer: "¿Dónde vives?",
    pattern: "Pregunta · ¿Dónde…?",
    hint: "“¿Dónde…?” pregunta por el lugar; el verbo va justo después.",
    explanation: "¿Dónde vives?: la palabra de pregunta abre la frase.",
    examples: "¿Dónde vives?, ¿dónde trabajas?, ¿dónde comes?…",
    almost: "Casi. Empieza con la palabra de pregunta: “¿Dónde…?”.",
    level: "Principiante 3",
  },
  {
    id: "a_que_hora_es_la_clase_202",
    mode: "sentence_builder",
    promptEnglish: "What time is the class?",
    targetSpanish: ["a", "qué", "hora", "es", "la", "clase"],
    availableTiles: ["clase", "la", "es", "hora", "qué", "a", "el", "cuándo"],
    displayAnswer: "¿A qué hora es la clase?",
    pattern: "Pregunta · ¿A qué hora…?",
    hint: "Para preguntar la hora exacta usamos “¿A qué hora…?”.",
    explanation: "¿A qué hora es…?: pregunta el momento exacto de algo.",
    examples: "¿A qué hora es la clase?, ¿a qué hora abres?…",
    almost: "Casi. Empieza con “¿A qué hora…?”.",
    level: "Principiante 3",
  },
  {
    id: "quieres_cafe_203",
    mode: "sentence_builder",
    promptEnglish: "Do you want coffee?",
    targetSpanish: ["quieres", "café"],
    availableTiles: ["café", "quieres", "quiero", "té", "quiere"],
    displayAnswer: "¿Quieres café?",
    pattern: "Pregunta · sí / no",
    hint: "En preguntas de sí o no, el verbo va primero: ¿Quieres…?",
    explanation: "¿Quieres café?: sin palabra de pregunta, empieza el verbo.",
    examples: "¿Quieres café?, ¿quieres agua?, ¿quieres salir?…",
    almost: "Casi. Para “tú”, el verbo es “quieres”.",
    level: "Principiante 3",
  },
  {
    id: "como_te_llamas_204",
    mode: "sentence_builder",
    promptEnglish: "What's your name?",
    targetSpanish: ["cómo", "te", "llamas"],
    availableTiles: ["llamas", "te", "cómo", "qué", "me", "llamo"],
    displayAnswer: "¿Cómo te llamas?",
    pattern: "Pregunta · ¿Cómo…?",
    hint: "“¿Cómo te llamas?” es la forma natural de pedir el nombre.",
    explanation: "Literalmente “¿cómo te llamas?” = “¿how do you call yourself?”.",
    examples: "¿Cómo te llamas?, ¿cómo estás?, ¿cómo se dice…?",
    almost: "Casi. El orden es “¿Cómo te llamas?”.",
    level: "Principiante 3",
  },
  {
    id: "donde_esta_el_bano_205",
    mode: "sentence_builder",
    promptEnglish: "Where is the bathroom?",
    targetSpanish: ["dónde", "está", "el", "baño"],
    availableTiles: ["baño", "el", "está", "dónde", "la", "es", "están"],
    displayAnswer: "¿Dónde está el baño?",
    pattern: "Pregunta · ¿Dónde está…?",
    hint: "Para ubicar algo usamos “estar”: ¿Dónde está…?",
    explanation: "Para lugares usamos “estar”, no “ser”: ¿Dónde está el baño?",
    examples: "¿Dónde está el baño?, ¿dónde está la salida?…",
    almost: "Casi. Para ubicación usamos “está”, no “es”.",
    level: "Principiante 3",
  },
  {
    id: "cuanto_cuesta_206",
    mode: "sentence_builder",
    promptEnglish: "How much does it cost?",
    targetSpanish: ["cuánto", "cuesta"],
    availableTiles: ["cuesta", "cuánto", "cuántos", "cuestan", "cómo"],
    displayAnswer: "¿Cuánto cuesta?",
    pattern: "Pregunta · ¿Cuánto…?",
    hint: "“¿Cuánto cuesta?” pregunta el precio de una cosa.",
    explanation: "¿Cuánto cuesta? para una cosa; ¿cuánto cuestan? para varias.",
    examples: "¿Cuánto cuesta?, ¿cuánto es?, ¿cuánto cuestan?…",
    almost: "Casi. Para una sola cosa: “¿Cuánto cuesta?”.",
    level: "Principiante 3",
  },
  {
    id: "que_haces_207",
    mode: "sentence_builder",
    promptEnglish: "What do you do?",
    targetSpanish: ["qué", "haces"],
    availableTiles: ["haces", "qué", "hago", "dónde", "hace"],
    displayAnswer: "¿Qué haces?",
    pattern: "Pregunta · ¿Qué…?",
    hint: "“¿Qué haces?” pregunta por la acción; “hacer” para “tú” es “haces”.",
    explanation: "¿Qué haces?: la palabra de pregunta abre y el verbo sigue.",
    examples: "¿Qué haces?, ¿qué quieres?, ¿qué comes?…",
    almost: "Casi. Para “tú”, el verbo es “haces”.",
    level: "Principiante 3",
  },
  {
    id: "hablas_ingles_208",
    mode: "sentence_builder",
    promptEnglish: "Do you speak English?",
    targetSpanish: ["hablas", "inglés"],
    availableTiles: ["inglés", "hablas", "hablo", "español", "habla"],
    displayAnswer: "¿Hablas inglés?",
    pattern: "Pregunta · sí / no",
    hint: "En preguntas de sí o no, empieza el verbo: ¿Hablas…?",
    explanation: "¿Hablas inglés?: sin palabra de pregunta, el verbo va primero.",
    examples: "¿Hablas inglés?, ¿hablas español?, ¿trabajas hoy?…",
    almost: "Casi. Para “tú”, el verbo es “hablas”.",
    level: "Principiante 3",
  },
  {
    id: "cuando_empezamos_209",
    mode: "sentence_builder",
    promptEnglish: "When do we start?",
    targetSpanish: ["cuándo", "empezamos"],
    availableTiles: ["empezamos", "cuándo", "empiezo", "dónde", "empiezan"],
    displayAnswer: "¿Cuándo empezamos?",
    pattern: "Pregunta · ¿Cuándo…?",
    hint: "“¿Cuándo…?” pregunta por el momento; el verbo va después.",
    explanation: "¿Cuándo empezamos?: nosotros → la terminación -amos.",
    examples: "¿Cuándo empezamos?, ¿cuándo sales?, ¿cuándo llega?…",
    almost: "Casi. Para “nosotros”, el verbo es “empezamos”.",
    level: "Principiante 3",
  },
  {
    id: "por_que_estudias_espanol_210",
    mode: "sentence_builder",
    promptEnglish: "Why do you study Spanish?",
    targetSpanish: ["por", "qué", "estudias", "español"],
    availableTiles: ["español", "estudias", "qué", "por", "estudio", "porque", "inglés"],
    displayAnswer: "¿Por qué estudias español?",
    pattern: "Pregunta · ¿Por qué…?",
    hint: "“¿Por qué…?” (dos palabras) pregunta la razón; “porque” (una) la responde.",
    explanation: "Pregunta con “por qué” separado; se responde con “porque” junto.",
    examples: "¿Por qué estudias?, ¿por qué trabajas?, ¿por qué vienes?…",
    almost: "Casi. La pregunta usa “por qué” en dos palabras.",
    level: "Principiante 3",
  },
];

/* ── Home-screen copy ─────────────────────────────────────────────────── */

export const sentenceBuilderOverview = {
  pill: "Juego",
  title: "Construye la frase.",
  gloss:
    "Read an English sentence, then tap the Spanish words into the right order. A calm way to feel how Spanish sentences fit together — one tile at a time.",
};

/** The three-step "how to play", kept as data so the home screen stays simple. */
export const sentenceBuilderHowTo = [
  {
    title: "Lee la frase",
    body: "Arriba ves la frase en inglés: eso es lo que vas a decir en español.",
  },
  {
    title: "Toca las palabras",
    body: "Tócalas en orden. ¿Te equivocaste? Toca una palabra de tu frase para devolverla al banco.",
  },
  {
    title: "Comprueba",
    body: "Pulsa Comprobar. Si aciertas, escuchas la frase y pasas a la siguiente.",
  },
];

/* ── Levels ───────────────────────────────────────────────────────────── */

export type SentenceLevelStatus = "available" | "soon";

export type SentenceLevel = {
  /** Matches `SentenceCard.level` for available levels. */
  name: string;
  /** Short theme, e.g. "Verbo + infinitivo". */
  tagline: string;
  /** One calm line describing what you practise. */
  blurb: string;
  /** A few example patterns this level covers. */
  patterns: string[];
  status: SentenceLevelStatus;
};

export const sentenceBuilderLevels: SentenceLevel[] = [
  {
    name: "Principiante 1",
    tagline: "Verbo + infinitivo",
    blurb: "Combina un verbo común con un infinitivo para hablar de planes, deseos y obligaciones.",
    patterns: ["Tengo que + infinitivo", "Voy a + infinitivo", "Quiero / Me gusta + infinitivo"],
    status: "available",
  },
  {
    name: "Principiante 2",
    tagline: "El presente del día a día",
    blurb: "Frases cortas en presente: lo que haces cada día, en casa y en el trabajo.",
    patterns: ["Verbos -ar / -er / -ir", "Yo, tú, él y ella"],
    status: "available",
  },
  {
    name: "Principiante 3",
    tagline: "Preguntas",
    blurb: "Arma preguntas naturales para conversar y pedir lo que necesitas.",
    patterns: ["¿Qué…? ¿Dónde…? ¿A qué hora…?", "El orden de la pregunta"],
    status: "available",
  },
];

/** The cards that belong to a given level, in authored order. */
export function cardsForLevel(levelName: string): SentenceCard[] {
  return sentenceBuilderCards.filter((c) => c.level === levelName);
}

/** How many cards live in a given level — drives the count shown on the home screen. */
export function levelCardCount(levelName: string): number {
  return cardsForLevel(levelName).length;
}
