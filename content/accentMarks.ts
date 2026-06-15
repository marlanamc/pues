/**
 * Written accent marks (tildes) — when to use á é í ó ú and why it matters.
 * Practical guide for American speakers; complements the pronunciation Acento page.
 */

export type MarkPattern = {
  pattern: string;
  english: string;
  when: string;
};

export type MarkExample = {
  spanish: string;
  english: string;
  cue: string;
  trap?: string;
};

export type MarkSection = {
  id: string;
  title: string;
  headline: string;
  note: string;
  patterns?: MarkPattern[];
  examples: MarkExample[];
};

export type MarkCategoryId = "basics" | "rules" | "traps" | "practice";

export const markCategories: {
  id: MarkCategoryId;
  label: string;
}[] = [
  { id: "basics", label: "What they do" },
  { id: "rules", label: "The rules" },
  { id: "traps", label: "Same letters, new word" },
  { id: "practice", label: "Words you'll see" },
];

const markCategoryById: Record<string, MarkCategoryId> = {
  "what-the-mark-does": "basics",
  "stress-in-speech": "basics",
  "three-word-types": "rules",
  "when-to-write-it": "rules",
  "question-words": "traps",
  "pronouns-and-more": "traps",
  "porque-por-que": "traps",
  "meaning-changers": "traps",
  "common-words": "practice",
  "verbs-you-write": "practice",
};

export function markSectionsByCategory() {
  return markCategories.map((category) => ({
    category,
    sections: markSections.filter(
      (section) => markCategoryById[section.id] === category.id,
    ),
  }));
}

export const markSections: MarkSection[] = [
  {
    id: "what-the-mark-does",
    title: "What the mark does",
    headline: "The tilde shows which syllable gets the stress.",
    note:
      "Spanish doesn't always sound out every syllable equally — one syllable carries the beat. When that beat lands somewhere unexpected, Spanish writes it with an accent: café, teléfono, inglés. The mark isn't decoration — it tells you how to say the word.",
    examples: [
      {
        spanish: "café",
        english: "coffee",
        cue: "Stress on the last syllable: ca-FÉ. The é shows you where the beat lands.",
      },
      {
        spanish: "casa",
        english: "house",
        cue: "Stress on the second-to-last: CA-sa. No mark needed — stress follows the default.",
      },
      {
        spanish: "teléfono",
        english: "telephone",
        cue: "Stress on the third-from-last: te-LE-fono. The é marks the stressed syllable.",
      },
    ],
  },
  {
    id: "stress-in-speech",
    title: "Stress in speech",
    headline: "Say the stressed syllable slightly louder and longer.",
    note:
      "You don't need to shout it — just let that syllable carry a little more weight. Getting the stress right is often what makes you sound Spanish instead of English. The written mark is your cheat sheet.",
    examples: [
      {
        spanish: "Estoy en la estación.",
        english: "I'm at the station.",
        cue: "es-ta-CIÓN — stress on -ción. Listen for the beat on the last syllable.",
      },
      {
        spanish: "Es muy fácil.",
        english: "It's very easy.",
        cue: "FÁ-cil — stress on the first syllable. Without the accent you'd guess fa-CIL.",
      },
      {
        spanish: "Hablo inglés.",
        english: "I speak English.",
        cue: "in-GLÉS — adjective stress on the last syllable.",
      },
    ],
  },
  {
    id: "three-word-types",
    title: "Three word types",
    headline: "Spanish has a default stress pattern. Break it → write the mark.",
    note:
      "You don't need to memorize every word. Learn the defaults, then notice when a word breaks the pattern — that's when the accent appears in writing.",
    patterns: [
      {
        pattern: "Aguda",
        english: "Stress on the last syllable",
        when:
          "Default when the word ends in a consonant (except n or s): pa-pel, co-mer. If it ends in n, s, or a vowel but stress is still on the last syllable → write it: ca-fé, ca-mión, es-tá.",
      },
      {
        pattern: "Grave (llana)",
        english: "Stress on the second-to-last syllable",
        when:
          "Default when the word ends in a vowel, n, or s: CA-sa, ha-BLAN, cami-NAN. If stress moves to the last syllable instead → write it: ár-bol, fá-cil.",
      },
      {
        pattern: "Esdrújula",
        english: "Stress on the third-from-last syllable",
        when:
          "Always gets a written accent: TEL-é-fo-no, PÁ-gi-na, MIÉR-co-les. No exceptions.",
      },
    ],
    examples: [
      {
        spanish: "camión",
        english: "truck",
        cue: "Ends in n, but stress is on the last syllable (ca-MIÓN) → accent required.",
      },
      {
        spanish: "árbol",
        english: "tree",
        cue: "Ends in a vowel, but stress is on the last syllable (ÁR-bol) → accent required.",
      },
      {
        spanish: "página",
        english: "page",
        cue: "Esdrújula — stress three syllables from the end. Always marked.",
      },
    ],
  },
  {
    id: "when-to-write-it",
    title: "When to write it",
    headline: "If stress breaks the default, the accent is required — not optional.",
    note:
      "In texts and messages, native speakers sometimes drop accents. For learning and clarity, write them — especially on question words and words that change meaning without the mark.",
    patterns: [
      {
        pattern: "No mark needed",
        english: "Stress follows the default pattern",
        when: "casa, papel, hablan, estudiante — the beat lands where Spanish expects.",
      },
      {
        pattern: "Mark required",
        english: "Stress breaks the pattern",
        when: "café, fácil, teléfono, miércoles — the beat lands somewhere else.",
      },
      {
        pattern: "Always mark",
        english: "Question words & esdrújulas",
        when: "qué, cómo, dónde, cuándo, por qué — plus every esdrújula.",
      },
    ],
    examples: [
      {
        spanish: "Necesito más tiempo.",
        english: "I need more time.",
        cue: "más — accent distinguishes 'more' from mas (but).",
        trap: "✗ Necesito mas tiempo — reads like 'I need but time'.",
      },
      {
        spanish: "Es el lunes.",
        english: "It's Monday.",
        cue: "lunes — no accent; stress follows the default for words ending in -s.",
      },
      {
        spanish: "Mi número es el cinco.",
        english: "My number is five.",
        cue: "número — esdrújula, accent on the ú.",
      },
    ],
  },
  {
    id: "question-words",
    title: "Question words",
    headline: "Qué, cómo, dónde… always carry a mark when they're question words.",
    note:
      "This overlaps with Preguntas — but for writing, the accent is non-negotiable. The mark is how you tell a question word from a lookalike.",
    patterns: [
      {
        pattern: "qué",
        english: "what",
        when: "¿Qué quieres? — not *que* (that/because).",
      },
      {
        pattern: "cómo",
        english: "how",
        when: "¿Cómo estás? — not *como* (like/as).",
      },
      {
        pattern: "dónde",
        english: "where",
        when: "¿Dónde está? — not *donde* (where, in relative clauses).",
      },
      {
        pattern: "cuándo",
        english: "when",
        when: "¿Cuándo llegas? — not *cuando* (when, as conjunction).",
      },
      {
        pattern: "cuánto / cuánta / cuántos / cuántas",
        english: "how much / how many",
        when: "Accent on the a — always, in questions.",
      },
    ],
    examples: [
      {
        spanish: "¿Qué quieres hacer?",
        english: "What do you want to do?",
        cue: "qué with accent — question word.",
        trap: "✗ Que quieres hacer — reads like 'That you want to do…'",
      },
      {
        spanish: "Me gusta como suena.",
        english: "I like how it sounds.",
        cue: "como without accent — 'how' in a statement (like/as).",
      },
      {
        spanish: "¿Cuánto cuesta?",
        english: "How much does it cost?",
        cue: "cuánto — accent required in questions.",
      },
    ],
  },
  {
    id: "pronouns-and-more",
    title: "Pronouns & tiny words",
    headline: "One letter, no accent → different grammar role.",
    note:
      "These pairs look almost identical. The accent is the whole difference between a pronoun and a possessive, or yes and if.",
    patterns: [
      {
        pattern: "tú / tu",
        english: "you / your",
        when: "*Tú eres* (you are) vs *tu casa* (your house).",
      },
      {
        pattern: "él / el",
        english: "he / the",
        when: "*Él habla* (he speaks) vs *el libro* (the book).",
      },
      {
        pattern: "mí / mi",
        english: "me (after preposition) / my",
        when: "*para mí* (for me) vs *mi clase* (my class).",
      },
      {
        pattern: "sí / si",
        english: "yes / if",
        when: "*Sí, claro* (yes, of course) vs *si quieres* (if you want).",
      },
    ],
    examples: [
      {
        spanish: "¿Tú hablas español?",
        english: "Do you speak Spanish?",
        cue: "tú — subject pronoun, accent on ú.",
      },
      {
        spanish: "Tu español mejora mucho.",
        english: "Your Spanish is improving a lot.",
        cue: "tu — possessive, no accent.",
        trap: "✗ Tu hablas español — grammar breaks; you need *tú* as the subject.",
      },
      {
        spanish: "Sí, me encanta.",
        english: "Yes, I love it.",
        cue: "sí — yes, with accent.",
      },
      {
        spanish: "Si tienes tiempo, avísame.",
        english: "If you have time, let me know.",
        cue: "si — if, no accent.",
      },
    ],
  },
  {
    id: "porque-por-que",
    title: "Porque vs por qué",
    headline: "Why (question), because (answer), and the two-word reason.",
    note:
      "Four related forms — the spaces and accents matter. This one trips up writers more than speakers.",
    patterns: [
      {
        pattern: "¿por qué?",
        english: "why? (question)",
        when: "Two words, accent on qué: *¿Por qué no viniste?*",
      },
      {
        pattern: "porque",
        english: "because (one word, no accent)",
        when: "*No vine porque estaba cansada.*",
      },
      {
        pattern: "por qué",
        english: "why (noun clause — no question mark)",
        when: "*No sé por qué pasó.* — I don't know why it happened.",
      },
      {
        pattern: "porque…",
        english: "not the same as por qué",
        when: "One word = because. Two words with accent on qué = why.",
      },
    ],
    examples: [
      {
        spanish: "¿Por qué llegaste tarde?",
        english: "Why did you arrive late?",
        cue: "Question — two words, accent on qué.",
      },
      {
        spanish: "Llegué tarde porque había tráfico.",
        english: "I arrived late because there was traffic.",
        cue: "Answer — one word, no accent: porque.",
        trap: "✗ Llegué tarde por que había tráfico — wrong form for 'because'.",
      },
      {
        spanish: "No entiendo por qué es difícil.",
        english: "I don't understand why it's difficult.",
        cue: "Embedded why — still two words with accent, but not a direct question.",
      },
    ],
  },
  {
    id: "meaning-changers",
    title: "Meaning changers",
    headline: "Same spelling minus the accent → different word entirely.",
    note:
      "You might be understood from context, but writing the wrong form slows reading and can change meaning. These are worth memorizing as pairs.",
    examples: [
      {
        spanish: "Solo quiero practicar.",
        english: "I only want to practice.",
        cue: "solo — only (also written sólo in older texts; both common now).",
      },
      {
        spanish: "Estoy sola en casa.",
        english: "I'm alone at home.",
        cue: "sola — alone. Different word, no accent needed.",
      },
      {
        spanish: "Tengo más paciencia ahora.",
        english: "I have more patience now.",
        cue: "más — more.",
        trap: "✗ Tengo mas paciencia — mas can mean 'but'.",
      },
      {
        spanish: "Aun no sé la respuesta.",
        english: "I still don't know the answer.",
        cue: "aun — still/even (can also be aún with accent in some uses).",
      },
      {
        spanish: "También quiero aprender.",
        english: "I also want to learn.",
        cue: "también — also. Always written with é.",
      },
    ],
  },
  {
    id: "common-words",
    title: "Common words you'll see",
    headline: "High-frequency words that almost always have a mark.",
    note:
      "You don't need to derive the rule every time — let these become visual anchors. You'll see them in menus, schedules, classrooms, and texts.",
    patterns: [
      {
        pattern: "Days & time",
        english: "miércoles, sábado, después, también",
        when: "Schedule words — accents show up constantly.",
      },
      {
        pattern: "Places & things",
        english: "café, teléfono, estación, dirección, página",
        when: "Everyday nouns — stress breaks the default.",
      },
      {
        pattern: "Descriptions",
        english: "fácil, difícil, inglés, español, último",
        when: "Adjectives you'll use in class and daily life.",
      },
    ],
    examples: [
      {
        spanish: "La clase es los miércoles.",
        english: "Class is on Wednesdays.",
        cue: "miércoles — esdrújula, accent on the é.",
      },
      {
        spanish: "¿Cuál es tu dirección?",
        english: "What's your address?",
        cue: "dirección — stress on -ción.",
      },
      {
        spanish: "Es la última página.",
        english: "It's the last page.",
        cue: "última — esdrújula, ú marks the stress.",
      },
      {
        spanish: "Después de la reunión.",
        english: "After the meeting.",
        cue: "después — aguda ending in s but stress on last syllable.",
      },
    ],
  },
  {
    id: "verbs-you-write",
    title: "Verbs you'll write",
    headline: "Some verb forms only make sense with the accent.",
    note:
      "Present-tense yo forms and third-person singular often look alike without context — the accent tells you who did it.",
    patterns: [
      {
        pattern: "él / ella / usted vs yo",
        english: "Same letters, different person",
        when: "*habló* (he spoke) vs *hablo* (I speak) — accent on the ó.",
      },
      {
        pattern: "Past tense signals",
        english: "Preterite third person often has an accent",
        when: "*comió*, *salió*, *estudió* — stress on the last syllable.",
      },
    ],
    examples: [
      {
        spanish: "Ella habló con la directora.",
        english: "She spoke with the director.",
        cue: "habló — past, she spoke. Accent on ó.",
      },
      {
        spanish: "Yo hablo con mis estudiantes.",
        english: "I speak with my students.",
        cue: "hablo — present, I speak. No accent.",
        trap: "✗ Ella hablo con la directora — reads as 'she I speak…'",
      },
      {
        spanish: "¿Qué estudiaste ayer?",
        english: "What did you study yesterday?",
        cue: "estudiaste — no accent on past tú form here; compare estudio (I study).",
      },
      {
        spanish: "Él estudio mucho cada noche.",
        english: "He studies a lot every night.",
        cue: "estudio — he studies (él form). Stress pattern matches present él/yo spelling — context tells you.",
      },
    ],
  },
];

export function accentMarkAudioTexts() {
  return markSections.flatMap((section) =>
    section.examples.map((example) => example.spanish),
  );
}
