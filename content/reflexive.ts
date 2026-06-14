/**
 * Reflexive verbs — for learners who don't yet have an English equivalent.
 * Focus: what -se does, where the pronoun goes, and verbs that only work reflexive.
 */

export type ReflexiveRule = {
  pattern: string;
  english: string;
  note: string;
};

export type ReflexiveExample = {
  spanish: string;
  english: string;
  cue: string;
  trap?: string;
};

export type ReflexiveSection = {
  id: string;
  title: string;
  headline: string;
  note: string;
  rules?: ReflexiveRule[];
  examples: ReflexiveExample[];
};

export type ReflexiveCategoryId = "basics" | "meaning" | "life" | "traps";

export const reflexiveCategories: {
  id: ReflexiveCategoryId;
  label: string;
}[] = [
  { id: "basics", label: "Basics" },
  { id: "meaning", label: "When meaning changes" },
  { id: "life", label: "In your day" },
  { id: "traps", label: "Traps" },
];

const reflexiveCategoryById: Record<string, ReflexiveCategoryId> = {
  "what-is-se": "basics",
  pronouns: "basics",
  placement: "basics",
  "not-literally-yourself": "basics",
  "meaning-pairs": "meaning",
  "daily-routine": "life",
  feelings: "life",
  "names-memory": "life",
  "common-traps": "traps",
};

export function reflexiveSectionsByCategory() {
  return reflexiveCategories.map((category) => ({
    category,
    sections: reflexiveSections.filter(
      (section) => reflexiveCategoryById[section.id] === category.id,
    ),
  }));
}

export const reflexiveSections: ReflexiveSection[] = [
  {
    id: "what-is-se",
    title: "What is -se?",
    headline: "The action bounces back to the person doing it.",
    note:
      "English sometimes adds \"myself\": *I wash myself*. Spanish builds that into the verb with *-se* and a pronoun (*me, te, se…*). You are both the doer and the receiver. That's the whole idea — everything else is details.",
    rules: [
      {
        pattern: "lavar → lavarse",
        english: "to wash → to wash oneself",
        note: "*Lavo el carro* (I wash the car). *Me lavo las manos* (I wash my hands — on myself).",
      },
      {
        pattern: "The -se is not optional",
        english: "If the verb is reflexive, you need the pronoun",
        note: "*Lavo las manos* without *me* sounds like you're washing someone else's hands.",
      },
    ],
    examples: [
      {
        spanish: "Me lavo las manos antes de comer.",
        english: "I wash my hands before eating.",
        cue: "You're doing it to yourself → *me* + *lavar*.",
        trap: "✗ Lavo las manos — whose hands? The *me* tells us they're yours.",
      },
      {
        spanish: "¿Te duchas por la mañana o por la noche?",
        english: "Do you shower in the morning or at night?",
        cue: "*Ducharse* is always reflexive — you shower yourself.",
      },
      {
        spanish: "Se viste rápido antes de salir.",
        english: "She gets dressed quickly before leaving.",
        cue: "*Se* = she to herself. Third person reflexive.",
      },
    ],
  },
  {
    id: "pronouns",
    title: "The pronouns",
    headline: "Six mirrors — one for each person.",
    note:
      "Reflexive pronouns look like object pronouns but point back at the subject. Learn this table once and you'll recognize them everywhere.",
    rules: [
      {
        pattern: "me",
        english: "myself (yo)",
        note: "*Me levanto*, *me llamo*, *me siento*.",
      },
      {
        pattern: "te",
        english: "yourself (tú)",
        note: "*¿Te acuerdas?*, *te preparas*.",
      },
      {
        pattern: "se",
        english: "himself / herself / yourself (usted) / themselves",
        note: "Covers él, ella, usted, ellos, ellas, ustedes — context tells you who.",
      },
      {
        pattern: "nos",
        english: "ourselves (nosotros/as)",
        note: "*Nos vemos mañana* — literally \"we see ourselves tomorrow\" = see you tomorrow.",
      },
    ],
    examples: [
      {
        spanish: "Me llamo Marlana.",
        english: "My name is Marlana.",
        cue: "Literally: \"I call myself Marlana.\" *Llamarse* is reflexive.",
        trap: "✗ Me llamo es Marlana — don't add *es*. The verb carries the meaning.",
      },
      {
        spanish: "Nos encontramos en el café.",
        english: "We'll meet at the café.",
        cue: "*Nos* = us/we to ourselves. Very common for making plans.",
      },
      {
        spanish: "Los niños se acuestan a las ocho.",
        english: "The kids go to bed at eight.",
        cue: "*Se* here = they (the kids) put themselves to bed.",
      },
    ],
  },
  {
    id: "placement",
    title: "Where does the pronoun go?",
    headline: "Before the conjugated verb — or attached to the end.",
    note:
      "This is the part that feels random until you see the pattern. One rule covers almost everything you'll say in daily speech.",
    rules: [
      {
        pattern: "Before a conjugated verb",
        english: "Default position",
        note: "*Me levanto*, *se siente*, *nos preparamos* — pronoun comes first.",
      },
      {
        pattern: "Attached to infinitive",
        english: "After *voy a*, *quiero*, *tengo que*",
        note: "*Voy a levantarme*, *quiero ducharme* — one word at the end.",
      },
      {
        pattern: "Attached to gerund (-ando / -iendo)",
        english: "With *estar + doing*",
        note: "*Estoy preparándome*, *se está vistiendo*.",
      },
      {
        pattern: "Attached to affirmative command",
        english: "Tell someone to do it",
        note: "*¡Siéntate!*, *¡Levántate!*, *¡Despiértate!* — stress on the command.",
      },
      {
        pattern: "Before negative command",
        english: "Don't do it",
        note: "*¡No te sientes ahí!* — pronoun stays in front.",
      },
    ],
    examples: [
      {
        spanish: "Me levanto a las seis.",
        english: "I get up at six.",
        cue: "Conjugated verb → pronoun before: *me levanto*.",
      },
      {
        spanish: "Voy a acostarme temprano.",
        english: "I'm going to go to bed early.",
        cue: "Infinitive → attach: *acostar* + *me* = *acostarme*.",
        trap: "✗ Voy a me acostar — never split an infinitive with the pronoun in the middle.",
      },
      {
        spanish: "Estoy preparándome para la clase.",
        english: "I'm getting ready for class.",
        cue: "Gerund → attach: *preparando* + *me*.",
      },
      {
        spanish: "¡Siéntate aquí!",
        english: "Sit here!",
        cue: "Affirmative command → attached: *sentar* → *siéntate*.",
      },
    ],
  },
  {
    id: "not-literally-yourself",
    title: "Not always \"yourself\"",
    headline: "Some verbs just come with -se — learn them as chunks.",
    note:
      "This is why reflexives feel confusing. *Acordarse* doesn't mean \"remember yourself.\" The *se* is baked into the verb — it's pronominal, not literally reflexive. Treat these like vocabulary, not grammar puzzles.",
    rules: [
      {
        pattern: "Llamarse",
        english: "To be called / one's name is",
        note: "Always reflexive. *¿Cómo te llamas?*",
      },
      {
        pattern: "Acordarse de",
        english: "To remember",
        note: "Always *de* after: *me acuerdo de*, *no me acuerdo de*.",
      },
      {
        pattern: "Quejarse de",
        english: "To complain about",
        note: "*Se queja de todo* — the *se* is required.",
      },
      {
        pattern: "Atreverse a",
        english: "To dare to",
        note: "*No me atrevo a preguntar*.",
      },
    ],
    examples: [
      {
        spanish: "No me acuerdo de su nombre.",
        english: "I don't remember his name.",
        cue: "Chunk: *acordarse de* — not a literal \"yourself.\"",
        trap: "✗ No me acuerdo su nombre — missing *de*.",
      },
      {
        spanish: "¿Cómo se llama tu estudiante?",
        english: "What's your student's name?",
        cue: "*Llamarse* — what's he call himself?",
      },
      {
        spanish: "Se queja del frío todo el tiempo.",
        english: "She complains about the cold all the time.",
        cue: "*Quejarse de* — the *se* doesn't mean herself; it's just the verb.",
      },
    ],
  },
  {
    id: "meaning-pairs",
    title: "Same verb, different meaning",
    headline: "Add -se and the sentence changes — sometimes a lot.",
    note:
      "These pairs are high-value. The non-reflexive version often takes a normal object. The reflexive version turns the action back — or shifts meaning entirely.",
    rules: [
      {
        pattern: "Ir → irse",
        english: "to go → to leave / go away",
        note: "*Voy al trabajo* vs *Me voy* (I'm leaving).",
      },
      {
        pattern: "Dormir → dormirse",
        english: "to sleep → to fall asleep",
        note: "*Duermo bien* vs *Me dormí en clase* (I fell asleep).",
      },
      {
        pattern: "Quedar → quedarse",
        english: "to be left / turn out → to stay",
        note: "*Quedan dos* vs *Me quedo en casa*.",
      },
      {
        pattern: "Poner → ponerse",
        english: "to put → to put on (clothes) / to become",
        note: "*Pongo la mesa* vs *Me pongo la chaqueta*, *se puso triste*.",
      },
      {
        pattern: "Llevar → llevarse",
        english: "to carry / wear → to take (away) / to get along",
        note: "*Llevo la bolsa* vs *Se llevan bien* (they get along).",
      },
    ],
    examples: [
      {
        spanish: "Me voy — ya es tarde.",
        english: "I'm leaving — it's late already.",
        cue: "*Irse* = leave, not just go somewhere.",
        trap: "✗ Me voy al trabajo can work (I'm heading off) but *voy al trabajo* is the normal commute.",
      },
      {
        spanish: "Me dormí viendo la tele.",
        english: "I fell asleep watching TV.",
        cue: "*Dormirse* = fall asleep (sudden), not sleep in general.",
      },
      {
        spanish: "Me pongo nerviosa antes de presentar.",
        english: "I get nervous before presenting.",
        cue: "*Ponerse* + adjective = become / get — very spoken.",
      },
      {
        spanish: "Se quedó en silencio.",
        english: "She went quiet / fell silent.",
        cue: "*Quedarse* = stay in a state — different from *quedar* (turn out).",
      },
    ],
  },
  {
    id: "daily-routine",
    title: "Your morning routine",
    headline: "Reflexives dominate the first hour of the day.",
    note:
      "Learn these as a set — you'll hear them constantly. All of these are actions you do to yourself.",
    rules: [
      {
        pattern: "Despertarse",
        english: "to wake up",
        note: "*Me despierto a las seis.*",
      },
      {
        pattern: "Levantarse",
        english: "to get up",
        note: "*¿A qué hora te levantas?*",
      },
      {
        pattern: "Ducharse / bañarse",
        english: "to shower / to bathe",
        note: "Regional preference — both reflexive.",
      },
      {
        pattern: "Vestirse / peinarse / maquillarse",
        english: "to get dressed / do hair / put on makeup",
        note: "The getting-ready cluster.",
      },
      {
        pattern: "Acostarse / dormirse",
        english: "to go to bed / to fall asleep",
        note: "End of day bookends.",
      },
    ],
    examples: [
      {
        spanish: "Me despierto, me ducho y me visto.",
        english: "I wake up, shower, and get dressed.",
        cue: "Three reflexives in a row — natural morning rhythm.",
      },
      {
        spanish: "¿A qué hora te acuestas normalmente?",
        english: "What time do you usually go to bed?",
        cue: "*Acostarse* — put yourself to bed.",
      },
      {
        spanish: "Se prepara el desayuno mientras yo me peino.",
        english: "He makes breakfast while I do my hair.",
        cue: "*Preparar* here is NOT reflexive (he prepares food). *Peinarse* is.",
        trap: "✗ Not every morning verb is reflexive — *preparar el desayuno* is normal.",
      },
    ],
  },
  {
    id: "feelings",
    title: "Feelings & reactions",
    headline: "How you feel is often reflexive in Spanish.",
    note:
      "English says \"I feel tired.\" Spanish often uses *sentirse*. Same with worry, boredom, getting angry — the emotion lands on you.",
    rules: [
      {
        pattern: "Sentirse + adjective",
        english: "to feel (emotion / state)",
        note: "*Me siento cansada*, *se siente mejor*.",
      },
      {
        pattern: "Preocuparse por / de",
        english: "to worry about",
        note: "*Me preocupo por mis estudiantes*.",
      },
      {
        pattern: "Aburrirse",
        english: "to get bored",
        note: "*Me aburro en las reuniones largas*.",
      },
      {
        pattern: "Enojarse / enfadarse",
        english: "to get angry",
        note: "Regional — *enojarse* (Latin Am), *enfadarse* (Spain).",
      },
      {
        pattern: "Alegrarse de",
        english: "to be glad / happy about",
        note: "*Me alegro de verte*.",
      },
    ],
    examples: [
      {
        spanish: "Me siento agradecida por este trabajo.",
        english: "I feel grateful for this job.",
        cue: "Inner feeling → *sentirse* + adjective (agrees with you).",
      },
      {
        spanish: "Me preocupo cuando no entienden.",
        english: "I worry when they don't understand.",
        cue: "*Preocuparse por* — the worry reflects onto you.",
      },
      {
        spanish: "Se aburrió en la película.",
        english: "She got bored during the movie.",
        cue: "*Aburrirse* — boredom happens to her.",
      },
    ],
  },
  {
    id: "names-memory",
    title: "Names, memory & meeting",
    headline: "Reflexives you need for introducing yourself and making plans.",
    note:
      "You'll use these in real conversation constantly — they're worth memorizing as fixed phrases.",
    rules: [
      {
        pattern: "Llamarse",
        english: "to be named",
        note: "*Me llamo…*, *¿Cómo te llamas?*",
      },
      {
        pattern: "Acordarse de",
        english: "to remember",
        note: "*¿Te acuerdas de mí?*",
      },
      {
        pattern: "Encontrarse con",
        english: "to meet / run into",
        note: "*Me encontré con una amiga*.",
      },
      {
        pattern: "Quedar en",
        english: "to agree to (plans)",
        note: "*¿Quedamos en vernos el viernes?* — see Matiz for more.",
      },
    ],
    examples: [
      {
        spanish: "Me llamo Marlana y soy maestra.",
        english: "My name is Marlana and I'm a teacher.",
        cue: "Intro pattern: *llamarse* + *ser* for job.",
      },
      {
        spanish: "¿Te acuerdas de la primera clase?",
        english: "Do you remember the first class?",
        cue: "*Acordarse de* — don't drop the *de*.",
      },
      {
        spanish: "¿Nos encontramos a las tres?",
        english: "Shall we meet at three?",
        cue: "*Encontrarse* for meeting up — reflexive, not *encontrar*.",
      },
    ],
  },
  {
    id: "common-traps",
    title: "Traps for English speakers",
    headline: "What Americans get wrong most often.",
    note:
      "If reflexives still feel fuzzy, check yourself against these. Most mistakes are missing the pronoun, wrong placement, or forgetting that some verbs require *se* even when English has nothing.",
    rules: [
      {
        pattern: "Forgetting me / te / se",
        english: "The verb sounds incomplete",
        note: "*Acuerdo de* ✗ → *Me acuerdo de* ✓",
      },
      {
        pattern: "Pronoun in the wrong place",
        english: "Splitting the infinitive wrong",
        note: "*Voy a me levantar* ✗ → *Voy a levantarme* ✓",
      },
      {
        pattern: "Using reflexive when English doesn't",
        english: "Not every verb needs -se",
        note: "*Preparo el café* — coffee isn't reflexive. *Me preparo* — I get myself ready.",
      },
      {
        pattern: "Me gusta is NOT reflexive",
        english: "Different grammar entirely",
        note: "*Me* in *me gusta* is an indirect object (to me), not reflexive. Don't lump it in.",
      },
    ],
    examples: [
      {
        spanish: "Me acuerdo de tu nombre.",
        english: "I remember your name.",
        cue: "With pronoun + *de* — the full pattern.",
        trap: "✗ Acuerdo de tu nombre — sounds like you agree with the name.",
      },
      {
        spanish: "Quiero levantarme más temprano.",
        english: "I want to get up earlier.",
        cue: "Pronoun on the infinitive after *querer*.",
        trap: "✗ Quiero me levantar más temprano.",
      },
      {
        spanish: "Hago el café y me siento en la cocina.",
        english: "I make coffee and sit down in the kitchen.",
        cue: "*Hacer* and *sentarse* (sit oneself) — only the sitting is reflexive.",
        trap: "✗ Me hago el café — you make coffee, you don't 'make yourself' coffee (usually).",
      },
    ],
  },
];

export function reflexiveAudioTexts() {
  return reflexiveSections.flatMap((section) =>
    section.examples.map((example) => example.spanish),
  );
}
