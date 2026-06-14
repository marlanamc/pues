/**
 * Asking questions in Spanish — practical patterns for American speakers.
 * Focus: question words, intonation, and templates you can swap into real life.
 */

export type QuestionPattern = {
  pattern: string;
  english: string;
  when: string;
};

export type QuestionExample = {
  spanish: string;
  english: string;
  cue: string;
  trap?: string;
};

export type QuestionSection = {
  id: string;
  title: string;
  headline: string;
  note: string;
  patterns?: QuestionPattern[];
  examples: QuestionExample[];
};

export type QuestionCategoryId =
  | "basics"
  | "words"
  | "patterns"
  | "life";

export const questionCategories: {
  id: QuestionCategoryId;
  label: string;
}[] = [
  { id: "basics", label: "How they work" },
  { id: "words", label: "Question words" },
  { id: "patterns", label: "Useful shapes" },
  { id: "life", label: "In your life" },
];

const questionCategoryById: Record<string, QuestionCategoryId> = {
  "how-they-work": "basics",
  "question-marks": "basics",
  "yes-no": "basics",
  "question-words": "words",
  "que-vs-cual": "words",
  "cuanto-cuando": "words",
  "polite-asks": "patterns",
  "question-templates": "patterns",
  "getting-to-know": "life",
  "classroom-work": "life",
  "everyday-hooks": "life",
};

export function questionSectionsByCategory() {
  return questionCategories.map((category) => ({
    category,
    sections: questionSections.filter(
      (section) => questionCategoryById[section.id] === category.id,
    ),
  }));
}

export const questionSections: QuestionSection[] = [
  {
    id: "how-they-work",
    title: "How questions work",
    headline: "Often the same words as a statement — your voice goes up.",
    note:
      "English flips word order: *Are you tired?* Spanish usually keeps statement order and raises your tone at the end: *¿Estás cansada?* Same words, different melody. That's the biggest shift.",
    patterns: [
      {
        pattern: "Statement → question",
        english: "Word order stays; intonation rises",
        when: "*Tienes tiempo* (statement) → *¿Tienes tiempo?* (question)",
      },
      {
        pattern: "Question word first",
        english: "When you use qué, cómo, dónde…",
        when: "The question word leads, then normal order: *¿Qué quieres?* · *¿Dónde está?*",
      },
    ],
    examples: [
      {
        spanish: "¿Estás lista?",
        english: "Are you ready?",
        cue: "Same words as *estás lista* — voice rises at the end.",
        trap: "✗ Don't reach for English-style *¿Estás tú lista?* — the pronoun is already in the verb.",
      },
      {
        spanish: "¿Vas a venir mañana?",
        english: "Are you going to come tomorrow?",
        cue: "Natural yes/no — no extra words needed.",
      },
      {
        spanish: "¿Qué quieres hacer?",
        english: "What do you want to do?",
        cue: "Question word + verb + rest. Very common shape.",
      },
    ],
  },
  {
    id: "question-marks",
    title: "The ¿ and ?",
    headline: "Spanish warns you a question is coming — then closes it.",
    note:
      "Written Spanish uses an upside-down ¿ at the start so you know to read with question intonation before you get to the end. In speech you only hear the rise — but when you write, use both marks.",
    examples: [
      {
        spanish: "¿Cómo te llamas?",
        english: "What's your name?",
        cue: "¿ opens · ? closes. Both in writing.",
      },
      {
        spanish: "¿A qué hora empieza la clase?",
        english: "What time does class start?",
        cue: "Long question — the opening ¿ still matters for reading aloud.",
      },
      {
        spanish: "No sé. ¿Tú sabes?",
        english: "I don't know. Do you?",
        cue: "Even short follow-ups get both marks.",
      },
    ],
  },
  {
    id: "yes-no",
    title: "Yes / no questions",
    headline: "No do-you / are-you flip. Just rise your voice.",
    note:
      "If there's no question word (qué, cómo, dónde…), it's usually yes/no. Keep the same word order you'd use in a statement and let your pitch climb at the end.",
    examples: [
      {
        spanish: "¿Hablas español?",
        english: "Do you speak Spanish?",
        cue: "*Hablas español* + rising tone. That's the whole trick.",
        trap: "✗ *¿Haces tú hablar español?* — overthinking it with English grammar.",
      },
      {
        spanish: "¿Te gusta el café?",
        english: "Do you like coffee?",
        cue: "Reflexive-style verbs work the same — rise at the end.",
      },
      {
        spanish: "¿Está abierto?",
        english: "Is it open?",
        cue: "Third person: *¿Está…?* · *¿Están…?* — one shape for lots of situations.",
      },
      {
        spanish: "¿Verdad?",
        english: "Right? / isn't it?",
        cue: "Tag question — tack *¿verdad?* or *¿no?* onto a statement.",
      },
    ],
  },
  {
    id: "question-words",
    title: "The question words",
    headline: "Eight words cover almost everything you'll ask.",
    note:
      "Learn what each one hunts for. Most questions are one of these + a verb you already know.",
    patterns: [
      {
        pattern: "qué",
        english: "what",
        when: "Things, actions, definitions — *¿Qué es esto?* · *¿Qué haces?*",
      },
      {
        pattern: "cómo",
        english: "how",
        when: "Manner, condition, name — *¿Cómo estás?* · *¿Cómo te llamas?*",
      },
      {
        pattern: "dónde",
        english: "where",
        when: "Location — *¿Dónde está?* · *¿Dónde vives?*",
      },
      {
        pattern: "cuándo",
        english: "when",
        when: "Time — *¿Cuándo llegas?* · *¿Cuándo es la reunión?*",
      },
      {
        pattern: "quién / quiénes",
        english: "who",
        when: "People — *¿Quién es?* · *¿Quiénes vienen?*",
      },
      {
        pattern: "por qué",
        english: "why",
        when: "Reason — two words, accent on qué: *¿Por qué no?*",
      },
      {
        pattern: "cuánto / cuánta / cuántos / cuántas",
        english: "how much / how many",
        when: "Amount — matches the noun's gender/number.",
      },
      {
        pattern: "cuál / cuáles",
        english: "which (one)",
        when: "Choosing from options — see next section.",
      },
    ],
    examples: [
      {
        spanish: "¿Qué necesitas?",
        english: "What do you need?",
        cue: "*Qué* + verb — your go-to for 'what'.",
      },
      {
        spanish: "¿Cómo se dice esto en español?",
        english: "How do you say this in Spanish?",
        cue: "*Cómo* for method or way — essential for learners.",
      },
      {
        spanish: "¿Dónde está el baño?",
        english: "Where's the bathroom?",
        cue: "*Dónde* + *estar* for location right now.",
      },
      {
        spanish: "¿Por qué no viniste?",
        english: "Why didn't you come?",
        cue: "*Por qué* = why. Don't confuse with *porque* (because).",
        trap: "✗ *¿Porque no viniste?* — that's 'because', not 'why'.",
      },
    ],
  },
  {
    id: "que-vs-cual",
    title: "Qué vs cuál",
    headline: "Qué = what in general. Cuál = which one from a set.",
    note:
      "Americans say 'what' for both. Spanish splits them. If you're picking from options (this one or that one), reach for *cuál*. If you're asking for a definition or open answer, use *qué*.",
    patterns: [
      {
        pattern: "¿Qué es…?",
        english: "What is…? (definition)",
        when: "*¿Qué es esto?* — what's this thing?",
      },
      {
        pattern: "¿Cuál es…?",
        english: "Which is…? (from choices)",
        when: "*¿Cuál es tu favorito?* — which one, from the list?",
      },
      {
        pattern: "¿Qué + noun?",
        english: "What + noun",
        when: "*¿Qué libro lees?* — open question about the book.",
      },
      {
        pattern: "¿Cuál + noun?",
        english: "Which + noun",
        when: "*¿Cuál libro prefieres?* — picking between specific books.",
      },
    ],
    examples: [
      {
        spanish: "¿Qué es tu trabajo?",
        english: "What is your job? (what do you do?)",
        cue: "Open — you're not choosing from a menu of jobs.",
      },
      {
        spanish: "¿Cuál es tu número favorito?",
        english: "What's your favorite number?",
        cue: "Picking one — *cuál* fits even in English 'which'.",
        trap: "✗ *¿Qué es tu número favorito?* — sounds like you're asking for a definition of 'favorite number'.",
      },
      {
        spanish: "¿Cuál prefieres, el té o el café?",
        english: "Which do you prefer, tea or coffee?",
        cue: "Two options on the table → *cuál*.",
      },
    ],
  },
  {
    id: "cuanto-cuando",
    title: "Cuánto & cuándo",
    headline: "How much, how many, and when — match the form to the noun.",
    note:
      "*Cuánto* changes shape to agree: *cuánto* (masc. sing.), *cuánta*, *cuántos*, *cuántas*. *Cuándo* is always the same — it's only about time.",
    examples: [
      {
        spanish: "¿Cuánto cuesta?",
        english: "How much does it cost?",
        cue: "Default price ask — *cuánto* before a verb, no noun needed.",
      },
      {
        spanish: "¿Cuántos estudiantes tienes?",
        english: "How many students do you have?",
        cue: "*Estudiantes* is masculine plural → *cuántos*.",
      },
      {
        spanish: "¿Cuántas horas trabajas?",
        english: "How many hours do you work?",
        cue: "*Horas* is feminine plural → *cuántas*.",
      },
      {
        spanish: "¿Cuándo es la reunión?",
        english: "When is the meeting?",
        cue: "*Cuándo* for any time question — accent on the á.",
      },
      {
        spanish: "¿A qué hora empieza?",
        english: "What time does it start?",
        cue: "Clock time → *¿A qué hora…?* not *¿Cuándo…?* for a specific hour.",
        trap: "✗ *¿Cuándo hora empieza?* — mix the patterns: *cuándo* for day, *a qué hora* for clock.",
      },
    ],
  },
  {
    id: "polite-asks",
    title: "Polite asks",
    headline: "Soft openers when you're asking for a favor.",
    note:
      "Direct questions are fine in Spanish — but *¿Puedes…?*, *¿Podrías…?*, and *¿Te importa si…?* smooth the edges, same as English 'could you' and 'would you mind'.",
    examples: [
      {
        spanish: "¿Puedes ayudarme un momento?",
        english: "Can you help me for a moment?",
        cue: "*¿Puedes* + infinitive — direct but polite enough.",
      },
      {
        spanish: "¿Podrías repetir eso?",
        english: "Could you repeat that?",
        cue: "Conditional *podrías* = softer. Great in class and shops.",
      },
      {
        spanish: "¿Te importa si abro la ventana?",
        english: "Do you mind if I open the window?",
        cue: "*¿Te importa si…?* — classic 'would you mind'.",
      },
      {
        spanish: "¿Me puedes decir cómo se dice…?",
        english: "Can you tell me how you say…?",
        cue: "Object pronoun *me* can climb before *puedes*: *¿Me puedes…?*",
      },
    ],
  },
  {
    id: "question-templates",
    title: "Templates to steal",
    headline: "Swap one word and you've got a new question.",
    note:
      "These shapes repeat everywhere. Learn the skeleton, plug in your noun or verb.",
    patterns: [
      {
        pattern: "¿Qué + verb?",
        english: "What do you…?",
        when: "*¿Qué haces?* · *¿Qué quieres?* · *¿Qué necesitas?*",
      },
      {
        pattern: "¿Cómo + verb?",
        english: "How do you…?",
        when: "*¿Cómo se dice?* · *¿Cómo funciona?*",
      },
      {
        pattern: "¿Dónde + estar?",
        english: "Where is…?",
        when: "*¿Dónde está el baño?* · *¿Dónde están las llaves?*",
      },
      {
        pattern: "¿Hay…?",
        english: "Is there…? / Are there…?",
        when: "*¿Hay wifi?* · *¿Hay tiempo?* — impersonal, very spoken.",
      },
      {
        pattern: "¿Tienes…?",
        english: "Do you have…?",
        when: "*¿Tienes tiempo?* · *¿Tienes la lista?*",
      },
    ],
    examples: [
      {
        spanish: "¿Hay un problema?",
        english: "Is there a problem?",
        cue: "*¿Hay…?* — one of the most useful three-word asks.",
      },
      {
        spanish: "¿Tienes un minuto?",
        english: "Do you have a minute?",
        cue: "*¿Tienes…?* — possession or availability.",
      },
      {
        spanish: "¿Sabes dónde está…?",
        english: "Do you know where… is?",
        cue: "Embed a question inside: *¿Sabes + question?*",
      },
      {
        spanish: "¿Qué te parece?",
        english: "What do you think? / how does that sound?",
        cue: "Opinion ask — softer than a direct *¿Qué piensas?*",
      },
    ],
  },
  {
    id: "getting-to-know",
    title: "Getting to know someone",
    headline: "First-conversation questions you'll actually use.",
    note:
      "These come up fast when you're meeting someone new — at school, in a class, or over coffee.",
    examples: [
      {
        spanish: "¿Cómo te llamas?",
        english: "What's your name?",
        cue: "Reflexive *llamarse* — always this shape for names.",
      },
      {
        spanish: "¿De dónde eres?",
        english: "Where are you from?",
        cue: "*Ser* for origin — where you're from as identity.",
      },
      {
        spanish: "¿A qué te dedicas?",
        english: "What do you do for work?",
        cue: "More natural than a literal 'what is your job' in many regions.",
      },
      {
        spanish: "¿Hace cuánto que vives aquí?",
        english: "How long have you lived here?",
        cue: "*¿Hace cuánto que…?* + present tense = how long have you been…",
      },
      {
        spanish: "¿Tienes hijos?",
        english: "Do you have kids?",
        cue: "Simple yes/no — *¿Tienes…?* pattern.",
      },
    ],
  },
  {
    id: "classroom-work",
    title: "In the classroom",
    headline: "Questions you'll ask students and colleagues.",
    note:
      "You're an ESOL teacher — these are the asks that show up in your actual work day.",
    examples: [
      {
        spanish: "¿Entiendes?",
        english: "Do you understand?",
        cue: "Quick check-in — rise on the last syllable.",
      },
      {
        spanish: "¿Puedes repetir eso, por favor?",
        english: "Can you repeat that, please?",
        cue: "Classroom staple — *repetir* + *por favor*.",
      },
      {
        spanish: "¿Cómo se dice esto en inglés?",
        english: "How do you say this in English?",
        cue: "Flip it when you're the student: *¿Cómo se dice… en español?*",
      },
      {
        spanish: "¿Tienes alguna pregunta?",
        english: "Do you have any questions?",
        cue: "*Alguna* = any (feminine, before *pregunta*).",
      },
      {
        spanish: "¿Necesitas más tiempo?",
        english: "Do you need more time?",
        cue: "*¿Necesitas…?* — checking in during an activity.",
      },
      {
        spanish: "¿Qué parte fue difícil?",
        english: "What part was difficult?",
        cue: "Open reflection — *qué parte* narrows it down.",
      },
    ],
  },
  {
    id: "everyday-hooks",
    title: "Everyday hooks",
    headline: "Short questions you'll hear and say all week.",
    note:
      "Not full grammar lessons — just the phrases that keep conversation moving.",
    examples: [
      {
        spanish: "¿Qué pasa?",
        english: "What's up? / what's going on?",
        cue: "Casual check-in. Can be friendly or concerned — tone matters.",
      },
      {
        spanish: "¿Cómo te va?",
        english: "How's it going?",
        cue: "Softer than *¿Cómo estás?* — good for acquaintances.",
      },
      {
        spanish: "¿Qué tal?",
        english: "How's it going? / how was it?",
        cue: "Ultra-short. Works alone or before a noun: *¿Qué tal el café?*",
      },
      {
        spanish: "¿A qué hora nos vemos?",
        english: "What time should we meet?",
        cue: "*¿A qué hora…?* for scheduling — very spoken.",
      },
      {
        spanish: "¿Quedamos el viernes?",
        english: "Shall we meet up Friday?",
        cue: "*¿Quedamos…?* — making plans. See Matiz for *quedar* nuance.",
      },
      {
        spanish: "¿Todo bien?",
        english: "Everything okay?",
        cue: "Quick pulse-check — statement word order, rising tone.",
      },
    ],
  },
];

export function questionAudioTexts() {
  return questionSections.flatMap((section) =>
    section.examples.map((example) => example.spanish),
  );
}
