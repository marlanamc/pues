/**
 * Latin American Spanish vs. Peninsular Spanish — grammar and usage
 * Pues targets LA Spanish; this guide explains where Spain diverges, especially
 * pretérito perfecto compuesto (he/has + participle) vs. simple preterite.
 */

export type LatinAmericaRule = {
  pattern: string;
  english: string;
  note: string;
};

export type LatinAmericaExample = {
  spanish: string;
  english: string;
  cue: string;
  /** Spain-leaning alternative, or what English speakers reach for wrong. */
  trap?: string;
};

export type LatinAmericaSection = {
  id: string;
  title: string;
  headline: string;
  note: string;
  rules?: LatinAmericaRule[];
  examples: LatinAmericaExample[];
};

export type LatinAmericaCategoryId =
  | "perfect"
  | "choose"
  | "pues"
  | "more";

export const latinAmericaCategories: {
  id: LatinAmericaCategoryId;
  label: string;
}[] = [
  { id: "perfect", label: "Present perfect" },
  { id: "choose", label: "Which past?" },
  { id: "pues", label: "In Pues" },
  { id: "more", label: "More differences" },
];

const latinAmericaCategoryById: Record<string, LatinAmericaCategoryId> = {
  "what-is-present-perfect": "perfect",
  "recent-past-split": "perfect",
  "greetings-small-talk": "perfect",
  "life-experience": "choose",
  "today-and-still": "choose",
  "pues-choices": "pues",
  "vocabulary-register": "more",
  "grammar-flags": "more",
};

export function latinAmericaSectionsByCategory() {
  return latinAmericaCategories.map((category) => ({
    category,
    sections: latinAmericaSections.filter(
      (section) => latinAmericaCategoryById[section.id] === category.id,
    ),
  }));
}

export const latinAmericaSections: LatinAmericaSection[] = [
  {
    id: "what-is-present-perfect",
    title: "What is the present perfect?",
    headline: "He/has + participle — a past that still touches now.",
    note:
      "Form: *haber* in the present (*he, has, ha, hemos, han*) + past participle (*visto, dicho, comido*). English often maps this to \"have seen,\" \"have said.\" Grammatically, both Spain and Latin America use it — the difference is *when* each region reaches for it in casual speech.",
    rules: [
      {
        pattern: "he + participle",
        english: "I have … (done something)",
        note: "*He visto* = I have seen. The helping verb *haber* never means \"to have\" possession — that's *tener*.",
      },
      {
        pattern: "Irregular participles",
        english: "visto · dicho · hecho · escrito · puesto",
        note: "Memorize the common irregulars early — they show up in both regions.",
      },
    ],
    examples: [
      {
        spanish: "He trabajado mucho esta semana.",
        english: "I've worked a lot this week.",
        cue: "Still feels connected to now — natural in most of Latin America too.",
      },
      {
        spanish: "¿Has comido?",
        english: "Have you eaten?",
        cue: "Recent relevance — fine everywhere when the result matters now.",
      },
    ],
  },
  {
    id: "recent-past-split",
    title: "Recent events — the big split",
    headline:
      "In Latin America, yesterday's lost notebook is often *¿Alguien vio…?* — not *¿Alguien ha visto…?*",
    note:
      "Spain uses the present perfect more for things that just happened — even when English would say \"Did anyone see…?\" In Mexico, Colombia, Argentina, and much of the Caribbean, casual speech often prefers the simple preterite (*vi, vio, dijo*) for those finished moments. Both are grammatically correct; preterite just sounds local.",
    rules: [
      {
        pattern: "Latin America (casual)",
        english: "Simple preterite for a finished recent event",
        note: "*¿Alguien vio mis lentes?* · *¿Qué pasó?* · *No vi tu mensaje.*",
      },
      {
        pattern: "Spain (casual)",
        english: "Present perfect for the same idea",
        note: "*¿Alguien ha visto mis gafas?* · *¿Qué ha pasado?* · *No he visto tu mensaje.*",
      },
      {
        pattern: "Your ear",
        english: "If it feels like a closed episode, try preterite first",
        note: "Lost item, broken thing, \"what happened yesterday\" — preterite is the safe LA default.",
      },
    ],
    examples: [
      {
        spanish: "¿Alguien vio un cuaderno rojo?",
        english: "Did anyone see a red notebook?",
        cue: "Pues uses this shape — sounds natural in a teachers' lounge.",
        trap: "Spain: *¿Alguien ha visto un cuaderno rojo?* — correct, but textbook-Spain in LA.",
      },
      {
        spanish: "Perdí mis lentes ayer en el metro.",
        english: "I lost my glasses on the subway yesterday.",
        cue: "Finished event → preterite (*perdí*), not *he perdido*.",
      },
      {
        spanish: "¿Viste el correo que te mandé?",
        english: "Did you see the email I sent you?",
        cue: "Recent, done, no ongoing connection → *¿Viste…?* in LA.",
        trap: "✗ ¿Has visto el correo…? — understandable, but leans Peninsular for this ask.",
      },
    ],
  },
  {
    id: "greetings-small-talk",
    title: "Greetings & small talk",
    headline:
      "After *¡Tanto tiempo!*, Latin America often jumps to *¿Cómo estás?* — not *¿Cómo has estado?*",
    note:
      "*¿Cómo has estado?* is perfect English calque territory (\"How have you been?\"). You'll hear it in some places — Central America, formal settings — but in much of Mexico and casual LA chat, *¿Cómo estás?* or *¿Qué tal?* after a long gap is the natural move. Present state, not a grammar review.",
    rules: [
      {
        pattern: "¡Tanto tiempo! → ¿Cómo estás?",
        english: "Long time no see → How are you?",
        note: "Simple present of *estar* — where you are right now.",
      },
      {
        pattern: "¿Cómo has estado?",
        english: "How have you been? (life since we last talked)",
        note: "Valid Spanish; more common in Spain or when you want a longer catch-up arc.",
      },
    ],
    examples: [
      {
        spanish: "¡Tanto tiempo! ¿Cómo estás?",
        english: "It's been so long! How are you?",
        cue: "Pues dialogue uses this pairing after a gap.",
      },
      {
        spanish: "Bien, un poco cansada. ¿Y tú?",
        english: "Good, a little tired. And you?",
        cue: "Answer the present question in the present — no need for *he estado*.",
      },
    ],
  },
  {
    id: "life-experience",
    title: "Life experience — both regions agree",
    headline:
      "For *ever / never until now*, keep the present perfect.",
    note:
      "When the time frame is your whole life up to today — *alguna vez*, *nunca*, *jamás* — present perfect stays standard in Latin America. Don't swap these for preterite.",
    rules: [
      {
        pattern: "¿Alguna vez has…?",
        english: "Have you ever…?",
        note: "Experience question — present perfect on both sides of the Atlantic.",
      },
      {
        pattern: "Nunca he… / Nunca he ido a…",
        english: "I've never…",
        note: "*Nunca fui a París* changes the meaning toward one specific past attempt.",
      },
    ],
    examples: [
      {
        spanish: "¿Alguna vez has probado arepas?",
        english: "Have you ever tried arepas?",
        cue: "Keep *has probado* — this is not the \"lost notebook\" case.",
      },
      {
        spanish: "Nunca he estado en Colombia.",
        english: "I've never been to Colombia.",
        cue: "Life experience → present perfect everywhere.",
      },
      {
        spanish: "Nunca te dije que te admiro.",
        english: "I never told you that I admire you.",
        cue: "One specific unsaid moment in the past → preterite (*dije*) is natural in LA.",
        trap: "*Nunca te he dicho…* — also correct; slightly more literary or emphatic.",
      },
    ],
  },
  {
    id: "today-and-still",
    title: "Today & still open",
    headline:
      "*Hoy*, *esta mañana*, *ya* — present perfect still works in Latin America.",
    note:
      "The LA shift is strongest for isolated finished events (*ayer perdí*, *¿quién vio?*). When the time anchor is *today* or the action clearly links to now (*ya*, *todavía no*), present perfect remains common — and matches what you'll see with time markers like *ya* and *todavía* in Sellos.",
    rules: [
      {
        pattern: "Hoy / esta mañana + he…",
        english: "Today I've…",
        note: "*Hoy he trabajado desde temprano* — natural in much of LA.",
      },
      {
        pattern: "Ya + he… / Todavía no + he…",
        english: "Already / not yet",
        note: "These markers expect present perfect — see the Marcadores game.",
      },
    ],
    examples: [
      {
        spanish: "Hoy he corregido veinte exámenes.",
        english: "Today I've graded twenty exams.",
        cue: "Day still in progress → present perfect fits.",
      },
      {
        spanish: "Todavía no he terminado el informe.",
        english: "I haven't finished the report yet.",
        cue: "*Todavía no* almost always wants *he + participle*.",
      },
      {
        spanish: "Ya revisé los mensajes.",
        english: "I already checked my messages.",
        cue: "With *ya*, LA often uses preterite too — both heard: *Ya he revisado* / *Ya revisé*.",
      },
    ],
  },
  {
    id: "pues-choices",
    title: "What Pues teaches",
    headline: "Latin American defaults baked into the daily stems.",
    note:
      "Pues targets pan-Hispanic Latin American Spanish. Where Spain and LA diverge on grammar, the app leans LA in examples — especially present perfect vs. preterite in casual speech.",
    rules: [
      {
        pattern: "¿Alguien vio…?",
        english: "Did anyone see…?",
        note: "Day 74 — lost-and-found at school.",
      },
      {
        pattern: "¿Cómo estás?",
        english: "How are you? (after a long gap)",
        note: "Readings after *¡Tanto tiempo!* — not *¿Cómo has estado?*",
      },
      {
        pattern: "Se trata de…",
        english: "It's about… (summarizing)",
        note: "Otoño Week 1 — topic framing, not the imperative *trata de* (\"try to\").",
      },
    ],
    examples: [
      {
        spanish: "¿Alguien vio mis lentes?",
        english: "Did anyone see my glasses?",
        cue: "Stem on day 74 — preterite for a recent lost item.",
      },
      {
        spanish: "Extraño a los míos.",
        english: "I miss my people.",
        cue: "LA default; day 79 also teaches *echo de menos* as Spain's version.",
      },
      {
        spanish: "He trabajado mucho esta semana.",
        english: "I've worked a lot this week.",
        cue: "Present perfect stays when the week isn't over yet.",
      },
    ],
  },
  {
    id: "vocabulary-register",
    title: "Words that differ",
    headline: "Same grammar, different nouns — quick flags.",
    note:
      "Not grammar, but these show up in the same conversations. Pues uses the Latin American word in examples; Spain alternatives are fine to recognize, not to default to.",
    rules: [
      {
        pattern: "carro / auto",
        english: "car",
        note: "Spain: *coche*. Mexico & much of Central America: *carro*. Southern Cone: often *auto*.",
      },
      {
        pattern: "computadora",
        english: "computer",
        note: "Spain: *ordenador*. *Laptop* is understood but *computadora* is pan-Hispanic.",
      },
      {
        pattern: "estacionar / parquear",
        english: "to park (a car)",
        note: "Spain: *aparcar*.",
      },
      {
        pattern: "extraño",
        english: "I miss (someone)",
        note: "Spain often: *echo de menos*. Both correct; *extraño* is LA-first.",
      },
    ],
    examples: [
      {
        spanish: "Se me descompuso el carro en la autopista.",
        english: "My car broke down on the highway.",
        cue: "Otoño Week 7 — *carro*, not *coche*; *se descompuso*, not *se paró*.",
      },
      {
        spanish: "¿Me trae la cuenta, por favor?",
        english: "Could you bring us the check, please?",
        cue: "*Cuenta* for a restaurant bill — *factura* is more invoice/receipt.",
      },
    ],
  },
  {
    id: "grammar-flags",
    title: "Other grammar flags",
    headline: "Patterns Spain uses more — you can recognize them without adopting them.",
    note:
      "Short list of structures that aren't wrong in Latin America but sound imported or formal when overused.",
    rules: [
      {
        pattern: "vosotros / os",
        english: "you all (informal, Spain)",
        note: "Latin America uses *ustedes* for both formal and informal plural. You'll never need *vosotros* in Pues.",
      },
      {
        pattern: "En fin… / Resumiendo…",
        english: "long story short",
        note: "Spain colloquial: *Total, que…*. Pues uses *En fin…* for pan-Hispanic casual.",
      },
      {
        pattern: "Debido a / Sin embargo",
        english: "due to / however",
        note: "Fine in writing or presentations; in gossip, *por eso* and *pero* sound more spoken.",
      },
    ],
    examples: [
      {
        spanish: "En fin, llegamos tardísimo.",
        english: "Long story short, we got there super late.",
        cue: "Verano day 41 stem — LA-friendly wrap-up.",
        trap: "Spain casual: *Total, que llegamos tardísimo.*",
      },
      {
        spanish: "Perdón, ¿me puede ayudar?",
        english: "Excuse me, can you help me?",
        cue: "*Disculpe* + usted for service — standard in LA too, not Spain-only.",
      },
    ],
  },
];

export const latinAmericaPracticeSteps = [
  "Pick one \"recent event\" sentence. Say it twice: preterite first, then present perfect. Notice which feels like your teachers' lounge.",
  "After *¡Tanto tiempo!*, practice *¿Cómo estás?* without translating \"How have you been?\"",
  "When you see *ya*, *nunca*, or *hoy*, keep present perfect. When you see *ayer* or *¿quién vio?*, try preterite.",
];
