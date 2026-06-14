/**
 * Verb guides — overview plus tense-focused pages.
 * Reference for speakers, not a conjugation drill app.
 */

export type VerbRule = {
  pattern: string;
  english: string;
  note: string;
};

export type VerbExample = {
  spanish: string;
  english: string;
  cue: string;
  trap?: string;
};

export type VerbSection = {
  id: string;
  title: string;
  headline: string;
  note: string;
  rules?: VerbRule[];
  examples: VerbExample[];
};

export type VerbQuickMapItem = {
  label: string;
  spanish: string;
  hint: string;
};

export type VerbTenseGuide = {
  slug: string;
  label: string;
  pill: string;
  title: string;
  gloss: string;
  quickMap: VerbQuickMapItem[];
  practiceSteps: string[];
  sections: VerbSection[];
  categories: { id: string; label: string }[];
  categoryById: Record<string, string>;
};

export function sectionsByCategory(guide: VerbTenseGuide) {
  return guide.categories.map((category) => ({
    category,
    sections: guide.sections.filter(
      (section) => guide.categoryById[section.id] === category.id,
    ),
  }));
}

/* ─── Overview (shape & navigation) ───────────────────── */

export const verbOverviewGuide: VerbTenseGuide = {
  slug: "",
  label: "Verbos",
  pill: "How verbs work",
  title: "The shape of Spanish.",
  gloss:
    "Start here for how verbs are built. Open a guide below — present, past, future, or reflexive — when you're ready to go deeper.",
  quickMap: [
    {
      label: "Dictionary form",
      spanish: "hablar · comer · vivir",
      hint: "— -ar / -er / -ir",
    },
    {
      label: "Who does it",
      spanish: "hablo · hablas · habla",
      hint: "— ending changes",
    },
    {
      label: "Tenses",
      spanish: "hablo · hablé · voy a hablar",
      hint: "— present · past · future",
    },
    {
      label: "Two verbs",
      spanish: "Quiero aprender",
      hint: "— only first conjugates",
    },
  ],
  practiceSteps: [
    "Learn the three endings (-ar / -er / -ir) before any tense tables.",
    "Pick one tense page and read one section. Say two examples out loud.",
    "When something breaks the pattern, check Reflexivos or Matiz.",
  ],
  categories: [
    { id: "shape", label: "Shape" },
    { id: "nav", label: "Tenses" },
  ],
  categoryById: {
    "three-endings": "shape",
    "how-conjugation-works": "shape",
    "tense-roadmap": "nav",
    "cross-cutting": "nav",
  },
  sections: [
    {
      id: "three-endings",
      title: "Three endings",
      headline: "Every Spanish verb lands in -ar, -er, or -ir.",
      note:
        "The infinitive is the dictionary form — the unchanged verb. *Hablar*, *comer*, *vivir*. The ending tells you which conjugation pattern to follow. Most new verbs you'll meet are -ar.",
      rules: [
        {
          pattern: "-ar",
          english: "hablar, trabajar, estudiar, cocinar",
          note: "The biggest group. *Hablar* = to speak.",
        },
        {
          pattern: "-er",
          english: "comer, beber, aprender, tener*",
          note: "*Tener* looks like -er but conjugates irregularly — learn it as its own verb.",
        },
        {
          pattern: "-ir",
          english: "vivir, escribir, abrir, dormir*",
          note: "Some -ir verbs change the stem (*dormir* → *duermo*). Pattern still starts from -ir.",
        },
      ],
      examples: [
        {
          spanish: "Quiero aprender más español.",
          english: "I want to learn more Spanish.",
          cue: "*Aprender* (-er) after *querer* — infinitive stays whole.",
        },
        {
          spanish: "Voy a cocinar esta noche.",
          english: "I'm going to cook tonight.",
          cue: "*Cocinar* (-ar) — the most common ending you'll use daily.",
        },
        {
          spanish: "Vivo cerca de la escuela.",
          english: "I live near the school.",
          cue: "*Vivir* (-ir) conjugated in the present: *vivo*.",
        },
      ],
    },
    {
      id: "how-conjugation-works",
      title: "How conjugation works",
      headline: "The verb ending changes to match who's doing it.",
      note:
        "English: *I speak, she speaks* — only the pronoun changes. Spanish moves the change onto the verb: *hablo, hablas, habla*. You can often drop the pronoun because the verb already tells you who.",
      rules: [
        {
          pattern: "yo → -o",
          english: "I",
          note: "*Hablo*, *como*, *vivo* — first person singular usually ends in -o.",
        },
        {
          pattern: "tú → -as / -es",
          english: "you (informal)",
          note: "*Hablas* (-ar), *comes* (-er), *vives* (-ir).",
        },
        {
          pattern: "él / ella / usted → -a / -e",
          english: "he / she / you (formal)",
          note: "*Habla*, *come*, *vive*.",
        },
        {
          pattern: "nosotros/as → -amos / -emos / -imos",
          english: "we",
          note: "*Hablamos*, *comemos*, *vivimos*.",
        },
        {
          pattern: "ellos / ellas / ustedes → -an / -en",
          english: "they / you all",
          note: "*Hablan*, *comen*, *viven*. Latin America uses *ustedes* for \"you all.\"",
        },
      ],
      examples: [
        {
          spanish: "Trabajo en una escuela.",
          english: "I work at a school.",
          cue: "*Trabajo* — the -o says *yo*. No need for *yo* unless emphasizing.",
        },
        {
          spanish: "¿Hablas español en casa?",
          english: "Do you speak Spanish at home?",
          cue: "*Hablas* — the -as tells you *tú*.",
        },
        {
          spanish: "Mis estudiantes escriben en sus cuadernos.",
          english: "My students write in their notebooks.",
          cue: "*Escriben* — -en = ellos/ellas.",
        },
      ],
    },
    {
      id: "tense-roadmap",
      title: "Three time frames",
      headline: "Present, past, future — each has its own page.",
      note:
        "You don't need all tenses at once. Present is where you live daily. Past adds storytelling. Future in spoken Spanish is often just *voy a* + infinitive.",
      rules: [
        {
          pattern: "Presente",
          english: "hablo, como, vivo",
          note: "Now, habits, general truths. Your home base — start here.",
        },
        {
          pattern: "Pasado",
          english: "hablé · hablaba",
          note: "Two past tenses: completed (*hablé*) vs ongoing/used-to (*hablaba*).",
        },
        {
          pattern: "Futuro",
          english: "voy a hablar · hablaré",
          note: "Near future (*voy a*) is what you'll hear most. Simple future (*hablaré*) for plans farther out.",
        },
      ],
      examples: [
        {
          spanish: "Trabajo aquí. Ayer trabajé mucho. Mañana voy a trabajar desde casa.",
          english: "I work here. Yesterday I worked a lot. Tomorrow I'm going to work from home.",
          cue: "One verb, three time frames — present · preterite · ir a.",
        },
      ],
    },
    {
      id: "cross-cutting",
      title: "Patterns that cross tenses",
      headline: "Some grammar rides on top of any tense.",
      note:
        "These show up on the Presente page in detail, but they're worth knowing exist before you pick a tense.",
      rules: [
        {
          pattern: "Verb + infinitive",
          english: "quiero aprender, tengo que ir",
          note: "Only the first verb conjugates — works in any tense.",
        },
        {
          pattern: "Gustar & friends",
          english: "me gusta, me interesa",
          note: "The thing you like is the subject — not you.",
        },
        {
          pattern: "Reflexive -se",
          english: "me lavo, me llamo",
          note: "Same idea in every tense. Full guide → Reflexivos.",
        },
      ],
      examples: [
        {
          spanish: "Me gusta practicar todos los días.",
          english: "I like to practice every day.",
          cue: "Cross-tense pattern — present *gusta* + infinitive *practicar*.",
        },
      ],
    },
  ],
};

/* ─── Present ───────────────────────────────────────────── */

export const verbPresentGuide: VerbTenseGuide = {
  slug: "present",
  label: "Presente",
  pill: "Now & usually",
  title: "What you do — and do now.",
  gloss:
    "Present tense covers *I work*, *I am working*, and sometimes *I will*. This is the tense you'll use most in conversation.",
  quickMap: [
    {
      label: "Regular",
      spanish: "hablo · como · vivo",
      hint: "— -ar / -er / -ir templates",
    },
    {
      label: "Must-know",
      spanish: "soy · estoy · tengo · voy",
      hint: "— learn as shapes",
    },
    {
      label: "Stem change",
      spanish: "pienso · duermo · quiero",
      hint: "— vowel shifts in the boot",
    },
    {
      label: "Right now",
      spanish: "estoy trabajando",
      hint: "— estar + -ando/-iendo",
    },
  ],
  practiceSteps: [
    "Pick one regular verb you use daily. Say yo / tú / nosotros forms.",
    "Add *voy a* or *tengo que* + that verb in an infinitive — say it out loud.",
    "Listen for stem-changers in sentences you already practice.",
  ],
  categories: [
    { id: "regular", label: "Regular" },
    { id: "irregular", label: "Irregular" },
    { id: "patterns", label: "Patterns" },
    { id: "traps", label: "Traps" },
  ],
  categoryById: {
    "present-regular": "regular",
    "irregular-essentials": "irregular",
    "stem-changers": "irregular",
    "verb-plus-infinitive": "patterns",
    gerund: "patterns",
    "gustar-family": "patterns",
    "reflexive-pointer": "patterns",
    "present-traps": "traps",
  },
  sections: [
    {
      id: "present-regular",
      title: "Regular present",
      headline: "One pattern per ending. Learn the template, plug in verbs.",
      note:
        "These three templates are your foundation. Most verbs follow one of them.",
      rules: [
        {
          pattern: "hablar → hablo, hablas, habla, hablamos, hablan",
          english: "-ar template",
          note: "Drop -ar, add: -o, -as, -a, -amos, -an.",
        },
        {
          pattern: "comer → como, comes, come, comemos, comen",
          english: "-er template",
          note: "Drop -er, add: -o, -es, -e, -emos, -en.",
        },
        {
          pattern: "vivir → vivo, vives, vive, vivimos, viven",
          english: "-ir template",
          note: "Drop -ir, add: -o, -es, -e, -imos, -en.",
        },
      ],
      examples: [
        {
          spanish: "Estudio español todos los días.",
          english: "I study Spanish every day.",
          cue: "*Estudiar* → *estudio* — regular -ar.",
        },
        {
          spanish: "Comemos juntos los viernes.",
          english: "We eat together on Fridays.",
          cue: "*Comer* → *comemos* — regular -er.",
        },
        {
          spanish: "Escribo notas en mi teléfono.",
          english: "I write notes on my phone.",
          cue: "*Escribir* → *escribo* — regular -ir.",
        },
      ],
    },
    {
      id: "irregular-essentials",
      title: "The verbs you need first",
      headline: "Six irregulars show up in almost every conversation.",
      note:
        "Don't memorize a giant list — start here. Learn them as shapes you'll see constantly.",
      rules: [
        {
          pattern: "ser",
          english: "to be (identity)",
          note: "*Soy, eres, es, somos, son*.",
        },
        {
          pattern: "estar",
          english: "to be (state / location)",
          note: "*Estoy, estás, está, estamos, están*.",
        },
        {
          pattern: "tener",
          english: "to have",
          note: "*Tengo, tienes, tiene, tenemos, tienen*.",
        },
        {
          pattern: "ir",
          english: "to go",
          note: "*Voy, vas, va, vamos, van*.",
        },
        {
          pattern: "hacer",
          english: "to do / make",
          note: "*Hago, haces, hace, hacemos, hacen*.",
        },
        {
          pattern: "poder / querer",
          english: "can / want",
          note: "*Puedo, quiero* — pair with infinitives.",
        },
      ],
      examples: [
        {
          spanish: "Soy maestra y estoy cansada hoy.",
          english: "I'm a teacher and I'm tired today.",
          cue: "*Soy* = identity. *Estoy* = state right now.",
        },
        {
          spanish: "Tengo una reunión y voy a preparar las hojas.",
          english: "I have a meeting and I'm going to prepare the worksheets.",
          cue: "*Tengo* + *voy a preparar* — two essentials in one line.",
        },
        {
          spanish: "¿Puedes ayudarme después de clase?",
          english: "Can you help me after class?",
          cue: "*Poder* → *puedes* — stem change + irregular.",
        },
      ],
    },
    {
      id: "stem-changers",
      title: "Stem-changing verbs",
      headline: "The vowel in the middle shifts — but only in some forms.",
      note:
        "Called \"boot verbs\" — the changed forms make a boot shape in the table. *Nosotros* is usually normal.",
      rules: [
        {
          pattern: "e → ie",
          english: "pensar, querer, empezar, perder",
          note: "*Pienso, quiero, empiezo* — but *pensamos* (normal).",
        },
        {
          pattern: "o → ue",
          english: "poder, dormir, volver, encontrar",
          note: "*Puedo, duermo, vuelvo* — but *dormimos* (normal).",
        },
        {
          pattern: "e → i",
          english: "pedir, servir, repetir",
          note: "*Pido, sirvo, repito* — mostly -ir verbs.",
        },
      ],
      examples: [
        {
          spanish: "Pienso que es buena idea.",
          english: "I think it's a good idea.",
          cue: "*Pensar* → *pienso* (e→ie). Not *penso*.",
          trap: "✗ Penso — missing the stem change.",
        },
        {
          spanish: "Duermo muy tarde los fines de semana.",
          english: "I sleep very late on weekends.",
          cue: "*Dormir* → *duermo* (o→ue).",
        },
        {
          spanish: "¿Qué quieres hacer este fin de semana?",
          english: "What do you want to do this weekend?",
          cue: "*Querer* → *quieres*.",
        },
      ],
    },
    {
      id: "verb-plus-infinitive",
      title: "Verb + infinitive",
      headline: "Two verbs in a row — only the first one conjugates.",
      note:
        "How Spanish handles *want to*, *need to*, *going to*, *can*. Master this and you can say almost anything in the present.",
      rules: [
        {
          pattern: "Querer + infinitive",
          english: "to want to",
          note: "*Quiero aprender*, *quieres salir*.",
        },
        {
          pattern: "Necesitar / tener que + infinitive",
          english: "to need to / have to",
          note: "*Necesito terminar*, *tengo que irme*.",
        },
        {
          pattern: "Ir a + infinitive",
          english: "going to (near future)",
          note: "*Voy a cocinar* — very spoken.",
        },
        {
          pattern: "Poder / deber + infinitive",
          english: "can / should",
          note: "*Puedo ayudarte*, *deberías descansar*.",
        },
      ],
      examples: [
        {
          spanish: "Necesito imprimir las hojas para mi clase.",
          english: "I need to print the worksheets for my class.",
          cue: "From your Day 1 frames.",
        },
        {
          spanish: "Voy a llamar a mi mamá este fin de semana.",
          english: "I'm going to call my mom this weekend.",
          cue: "*Ir a* + infinitive.",
        },
        {
          spanish: "Tengo que terminar esto antes de las cinco.",
          english: "I have to finish this before five.",
          cue: "*Tener que* — your personal obligation.",
        },
      ],
    },
    {
      id: "gerund",
      title: "-ando / -iendo",
      headline: "The \"-ing\" form — for actions in progress.",
      note:
        "-ar → -ando (*hablando*), -er/-ir → -iendo (*comiendo*). With *estar*: *estoy trabajando*.",
      rules: [
        {
          pattern: "estar + gerund",
          english: "to be doing (right now)",
          note: "*Estoy cocinando*, *está hablando*.",
        },
        {
          pattern: "Irregular gerunds",
          english: "leer → leyendo, dormir → durmiendo",
          note: "Stem-changers often change in the gerund too.",
        },
        {
          pattern: "Gerund is not a noun",
          english: "Different from English",
          note: "*Swimming is fun* → *Nadar es divertido*, not *nadando*.",
        },
      ],
      examples: [
        {
          spanish: "Estoy preparando la clase.",
          english: "I'm preparing the class.",
          cue: "*Preparar* → *preparando* + *estoy*.",
        },
        {
          spanish: "Llevo dos años estudiando español.",
          english: "I've been studying Spanish for two years.",
          cue: "*Llevar* + time + gerund — duration.",
        },
      ],
    },
    {
      id: "gustar-family",
      title: "Gustar & friends",
      headline: "The verb agrees with the thing — not with you.",
      note:
        "*Me gusta el café* = coffee pleases me. Same flip for *encantar*, *interesar*, *importar*.",
      rules: [
        {
          pattern: "me / te / le / nos / les",
          english: "to me / you / him/her / us / them",
          note: "Indirect object — who receives the liking.",
        },
        {
          pattern: "gusta vs gustan",
          english: "singular vs plural thing",
          note: "*Me gusta el café* · *Me gustan los tacos*.",
        },
      ],
      examples: [
        {
          spanish: "Me gusta el café fuerte.",
          english: "I like strong coffee.",
          cue: "*Café* singular → *gusta*.",
          trap: "✗ Me gusto el café — you like yourself.",
        },
        {
          spanish: "Me interesa aprender a programar.",
          english: "I'm interested in learning to code.",
          cue: "*Interesar* — same flipped grammar.",
        },
      ],
    },
    {
      id: "reflexive-pointer",
      title: "Reflexive verbs",
      headline: "Same present conjugation — plus me / te / se.",
        note: "Full guide → Reflexivos (in this verb group).",
      rules: [
        {
          pattern: "me levanto · se viste",
          english: "pronoun before conjugated verb",
          note: "Default in present tense.",
        },
        {
          pattern: "voy a levantarme",
          english: "pronoun on infinitive",
          note: "After *ir a*, *querer*, etc.",
        },
      ],
      examples: [
        {
          spanish: "Me levanto a las seis.",
          english: "I get up at six.",
          cue: "Regular -ar + *me*.",
        },
        {
          spanish: "Me llamo Marlana.",
          english: "My name is Marlana.",
          cue: "*Llamarse* — learn as a chunk.",
        },
      ],
    },
    {
      id: "present-traps",
      title: "Present traps",
      headline: "What Americans get wrong most in the present.",
      note: "Quick catches before they become habits.",
      rules: [
        {
          pattern: "Don't conjugate two verbs",
          english: "Only the first changes",
          note: "✗ *Quiero aprendo* → ✓ *Quiero aprender*.",
        },
        {
          pattern: "Gustar agrees with the thing",
          english: "Not with you",
          note: "✗ *Me gusta los tacos* → ✓ *Me gustan los tacos*.",
        },
      ],
      examples: [
        {
          spanish: "Quiero aprender más.",
          english: "I want to learn more.",
          cue: "*Quiero* + infinitive only.",
          trap: "✗ Quiero aprendo más.",
        },
        {
          spanish: "Estoy aprendiendo poco a poco.",
          english: "I'm learning little by little.",
          cue: "Progressive present — very natural.",
        },
      ],
    },
  ],
};

/* ─── Past ──────────────────────────────────────────────── */

export const verbPastGuide: VerbTenseGuide = {
  slug: "past",
  label: "Pasado",
  pill: "Already happened",
  title: "Two past tenses — two jobs.",
  gloss:
    "Spanish splits the past into completed events (*hablé*) and background or habitual past (*hablaba*). You need both for stories.",
  quickMap: [
    {
      label: "Completed",
      spanish: "hablé · comí · viví",
      hint: "— preterite",
    },
    {
      label: "Used to / was",
      spanish: "hablaba · comía · vivía",
      hint: "— imperfect",
    },
    {
      label: "Was / were",
      spanish: "fui · era · estaba",
      hint: "— key irregulars",
    },
    {
      label: "Pick one",
      spanish: "Ayer trabajé",
      hint: "— finished event → preterite",
    },
  ],
  practiceSteps: [
    "For yesterday's finished actions, try preterite: *Ayer [verb]-é*.",
    "For *when I was a kid* or *I used to*, reach for imperfect: *Cuando era…*",
    "Listen to one example from each tense. Notice the different endings.",
  ],
  categories: [
    { id: "choice", label: "Which past?" },
    { id: "preterite", label: "Preterite" },
    { id: "imperfect", label: "Imperfect" },
    { id: "irregular", label: "Irregulars" },
  ],
  categoryById: {
    "preterite-vs-imperfect": "choice",
    "preterite-regular": "preterite",
    "imperfect-regular": "imperfect",
    "preterite-irregulars": "irregular",
    "imperfect-essentials": "irregular",
    "past-in-story": "choice",
  },
  sections: [
    {
      id: "preterite-vs-imperfect",
      title: "Which past do I use?",
      headline: "Completed snapshot vs background scene.",
      note:
        "Rough rule: preterite = done, pointed, one-time. Imperfect = ongoing, habitual, or setting the scene. Both can appear in one story.",
      rules: [
        {
          pattern: "Preterite",
          english: "completed / specific event",
          note: "*Ayer hablé*, *de repente llovió*, *compré café* — it happened and ended.",
        },
        {
          pattern: "Imperfect",
          english: "habitual / ongoing / background",
          note: "*Siempre hablaba*, *cuando era niña*, *mientras cocinaba* — scene-setting.",
        },
        {
          pattern: "Both in one story",
          english: "background + event",
          note: "*Llovía* (imperfect) when *salí* (preterite) — was raining when I left.",
        },
      ],
      examples: [
        {
          spanish: "Ayer di tres clases.",
          english: "Yesterday I taught three classes.",
          cue: "Finished yesterday → preterite.",
        },
        {
          spanish: "Cuando era niña, hablaba inglés en casa.",
          english: "When I was a girl, I spoke English at home.",
          cue: "Background childhood → imperfect (*era*, *hablaba*).",
        },
        {
          spanish: "Llovía cuando salí de la escuela.",
          english: "It was raining when I left school.",
          cue: "Imperfect scene + preterite event — classic pair.",
        },
      ],
    },
    {
      id: "preterite-regular",
      title: "Preterite — regular",
      headline: "The completed-past templates.",
      note: "Stress falls on the ending syllable in all three groups.",
      rules: [
        {
          pattern: "hablar → hablé, hablaste, habló, hablamos, hablaron",
          english: "-ar preterite",
          note: "Drop -ar, add: -é, -aste, -ó, -amos, -aron.",
        },
        {
          pattern: "comer → comí, comiste, comió, comimos, comieron",
          english: "-er / -ir preterite",
          note: "Drop -er/-ir, add: -í, -iste, -ió, -imos, -ieron. Same pattern for both.",
        },
      ],
      examples: [
        {
          spanish: "Trabajé mucho ayer.",
          english: "I worked a lot yesterday.",
          cue: "*Trabajar* → *trabajé* — regular -ar preterite.",
        },
        {
          spanish: "Comimos juntos el viernes pasado.",
          english: "We ate together last Friday.",
          cue: "*Comer* → *comimos* — -er preterite.",
        },
        {
          spanish: "Escribí la lista anoche.",
          english: "I wrote the list last night.",
          cue: "*Escribir* → *escribí* — -ir preterite.",
        },
      ],
    },
    {
      id: "imperfect-regular",
      title: "Imperfect — regular",
      headline: "The background-past templates.",
      note: "Only two patterns — -ar and -er/-ir (which share the same imperfect endings).",
      rules: [
        {
          pattern: "hablar → hablaba, hablabas, hablaba, hablábamos, hablaban",
          english: "-ar imperfect",
          note: "Drop -ar, add: -aba, -abas, -aba, -ábamos, -aban.",
        },
        {
          pattern: "comer / vivir → comía, comías, comía, comíamos, comían",
          english: "-er / -ir imperfect",
          note: "Drop -er/-ir, add: -ía, -ías, -ía, -íamos, -ían.",
        },
      ],
      examples: [
        {
          spanish: "Siempre trabajaba los lunes.",
          english: "I always used to work on Mondays.",
          cue: "Habitual past → imperfect.",
        },
        {
          spanish: "De niña, comía cereal cada mañana.",
          english: "As a kid, I ate cereal every morning.",
          cue: "Used to → imperfect.",
        },
        {
          spanish: "Mientras escribía, sonó el teléfono.",
          english: "While I was writing, the phone rang.",
          cue: "*Escribía* (ongoing) + *sonó* (sudden event).",
        },
      ],
    },
    {
      id: "preterite-irregulars",
      title: "Preterite irregulars",
      headline: "High-frequency verbs that don't follow the template.",
      note: "Learn these as chunks — they dominate everyday past-tense speech.",
      rules: [
        {
          pattern: "ser / ir",
          english: "fui, fuiste, fue, fuimos, fueron",
          note: "Same form for both — context tells you went vs was.",
        },
        {
          pattern: "hacer",
          english: "hice, hiciste, hizo, hicimos, hicieron",
          note: "*Hizo* is extremely common.",
        },
        {
          pattern: "tener / estar",
          english: "tuve / estuve",
          note: "*Tuve un día difícil*, *estuve enferma*.",
        },
        {
          pattern: "decir / traer",
          english: "dije, dijo / traje",
          note: "Storytelling verbs — *dijo que…*, *traje el libro*.",
        },
      ],
      examples: [
        {
          spanish: "Fui a la tienda y compré café.",
          english: "I went to the store and bought coffee.",
          cue: "*Fui* (ir) + *compré* — both irregular preterites.",
        },
        {
          spanish: "Fue un día largo.",
          english: "It was a long day.",
          cue: "*Fue* could be *ser* or *ir* — here it's *ser* (was).",
        },
        {
          spanish: "Dijo que llegaría tarde.",
          english: "He said he'd arrive late.",
          cue: "*Dijo* (decir) — preterite for reported speech.",
        },
      ],
    },
    {
      id: "imperfect-essentials",
      title: "Imperfect essentials",
      headline: "The irregulars you'll see in background scenes.",
      note: "These three are the main ones that break the regular imperfect pattern.",
      rules: [
        {
          pattern: "ser → era",
          english: "was (identity / time / age in the past)",
          note: "*Cuando era niña*, *era las tres*.",
        },
        {
          pattern: "ir → iba",
          english: "was going / used to go",
          note: "*Iba a la escuela todos los días*.",
        },
        {
          pattern: "ver → veía",
          english: "was seeing / used to see",
          note: "*Veía mucha tele de niña*.",
        },
      ],
      examples: [
        {
          spanish: "Cuando era maestra nueva, trabajaba mucho.",
          english: "When I was a new teacher, I used to work a lot.",
          cue: "*Era* (ser) + *trabajaba* (regular imperfect).",
        },
        {
          spanish: "Íbamos al parque cada domingo.",
          english: "We used to go to the park every Sunday.",
          cue: "*Ir* → *íbamos* — imperfect irregular.",
        },
      ],
    },
    {
      id: "past-in-story",
      title: "Past in a story",
      headline: "How the two tenses work together.",
      note: "Real narration mixes both. Imperfect sets the scene; preterite moves the plot.",
      rules: [
        {
          pattern: "Scene → event",
          english: "imperfect, then preterite",
          note: "What was happening when something happened.",
        },
        {
          pattern: "Sequence of events",
          english: "preterite chain",
          note: "*Entré, vi, hablé, salí* — one thing after another.",
        },
      ],
      examples: [
        {
          spanish: "Eran las tres. Terminé la clase y fui a casa.",
          english: "It was three o'clock. I finished class and went home.",
          cue: "*Eran* (scene) → *terminé*, *fui* (events).",
        },
        {
          spanish: "Mientras preparaba la cena, mi mamá llamó.",
          english: "While I was making dinner, my mom called.",
          cue: "*Preparaba* (imperfect) + *llamó* (preterite).",
        },
      ],
    },
  ],
};

/* ─── Future ────────────────────────────────────────────── */

export const verbFutureGuide: VerbTenseGuide = {
  slug: "future",
  label: "Futuro",
  pill: "Not yet",
  title: "What's ahead.",
  gloss:
    "In spoken Spanish, *voy a + infinitive* is your everyday future. The simple future (*hablaré*) and conditional (*hablaría*) add range — wishes, predictions, politeness.",
  quickMap: [
    {
      label: "Spoken default",
      spanish: "voy a hablar",
      hint: "— near future",
    },
    {
      label: "Simple future",
      spanish: "hablaré · comeré",
      hint: "— will / shall",
    },
    {
      label: "Soft / would",
      spanish: "me gustaría · hablaría",
      hint: "— conditional",
    },
    {
      label: "Plan",
      spanish: "Mañana voy a…",
      hint: "— start here",
    },
  ],
  practiceSteps: [
    "Say three plans for this week with *voy a + infinitive*.",
    "Notice *me gustaría* in your frames — that's conditional, not present.",
    "Simple future (*hablaré*) can wait — understand it when you read it.",
  ],
  categories: [
    { id: "near", label: "Near future" },
    { id: "simple", label: "Simple future" },
    { id: "conditional", label: "Conditional" },
    { id: "traps", label: "Traps" },
  ],
  categoryById: {
    "near-future": "near",
    "simple-future": "simple",
    "future-irregulars": "simple",
    conditional: "conditional",
    "future-traps": "traps",
  },
  sections: [
    {
      id: "near-future",
      title: "Voy a + infinitive",
      headline: "The future you'll actually speak.",
      note:
        "Present tense *ir* + *a* + infinitive. This is how Spanish handles \"going to\" and near-future plans. You already use this in your daily frames.",
      rules: [
        {
          pattern: "voy / vas / va / vamos / van + a + infinitive",
          english: "going to / will",
          note: "*Voy a cocinar*, *vamos a vernos*, *va a llover*.",
        },
        {
          pattern: "Reflexive infinitive",
          english: "pronoun attached",
          note: "*Voy a levantarme temprano* — *me* on the infinitive.",
        },
        {
          pattern: "Same as English \"going to\"",
          english: "Plans you're already making",
          note: "More common than *hablaré* in conversation.",
        },
      ],
      examples: [
        {
          spanish: "Voy a llamar a mi mamá este fin de semana.",
          english: "I'm going to call my mom this weekend.",
          cue: "Your Day 1 frame — near future.",
        },
        {
          spanish: "¿Vas a venir a la reunión?",
          english: "Are you going to come to the meeting?",
          cue: "*Ir a* in questions — very natural.",
        },
        {
          spanish: "Vamos a empezar.",
          english: "We're going to start.",
          cue: "*Vamos a* — classroom and meeting Spanish.",
        },
      ],
    },
    {
      id: "simple-future",
      title: "Simple future",
      headline: "Add endings to the infinitive — the whole infinitive.",
      note:
        "Unlike other tenses, you don't drop -ar/-er/-ir. *Hablar* → *hablaré*, *comer* → *comeré*, *vivir* → *viviré*. Used for predictions, promises, and farther-off plans.",
      rules: [
        {
          pattern: "infinitive + é, ás, á, emos, án",
          english: "-ar / -er / -ir share endings",
          note: "*Hablaré, hablarás, hablará, hablaremos, hablarán*.",
        },
        {
          pattern: "When you'll hear it",
          english: "predictions, formal promises",
          note: "*Lloverá mañana*, *te ayudaré* — slightly more formal than *voy a*.",
        },
      ],
      examples: [
        {
          spanish: "Mañana trabajaré desde casa.",
          english: "Tomorrow I'll work from home.",
          cue: "Simple future — one word, no *voy a*.",
        },
        {
          spanish: "¿Quién vendrá a la fiesta?",
          english: "Who will come to the party?",
          cue: "*Vendrá* — *venir* is irregular (see below).",
        },
      ],
    },
    {
      id: "future-irregulars",
      title: "Future irregulars",
      headline: "Same irregular stems you know — plus future endings.",
      note:
        "Many irregular futures drop -e or -d from the infinitive before adding endings: *tener* → *tendré*, *hacer* → *haré*, *decir* → *diré*.",
      rules: [
        {
          pattern: "tener → tendré",
          english: "will have",
          note: "Also *podré*, *querré*, *sabré*.",
        },
        {
          pattern: "hacer → haré",
          english: "will do / make",
          note: "Drops -c- from infinitive.",
        },
        {
          pattern: "decir → diré",
          english: "will say",
          note: "*Diré la verdad*.",
        },
        {
          pattern: "venir → vendré",
          english: "will come",
          note: "Short stem change.",
        },
      ],
      examples: [
        {
          spanish: "Tendré más tiempo el próximo mes.",
          english: "I'll have more time next month.",
          cue: "*Tener* → *tendré* — future stem change.",
        },
        {
          spanish: "Lo haré mañana sin falta.",
          english: "I'll do it tomorrow for sure.",
          cue: "*Hacer* → *haré*.",
        },
      ],
    },
    {
      id: "conditional",
      title: "Conditional — would",
      headline: "The tense behind *me gustaría*.",
      note:
        "Same stems as simple future, different endings: -ía, -ías, -ía, -íamos, -ían. *Hablaría*, *comería*. Used for politeness, hypotheticals, and soft requests — not for concrete plans.",
      rules: [
        {
          pattern: "infinitive + ía endings",
          english: "would",
          note: "*Hablaría, comería, viviría* — regular pattern.",
        },
        {
          pattern: "Me gustaría",
          english: "I would like",
          note: "Your frames use this — softer than *quiero*. See Matiz.",
        },
        {
          pattern: "Si + imperfect subjunctive…",
          english: "hypotheticals (later)",
          note: "*Si tuviera tiempo, viajaría* — advanced, but you'll meet it.",
        },
      ],
      examples: [
        {
          spanish: "Me gustaría viajar más algún día.",
          english: "I would like to travel more someday.",
          cue: "Conditional of *gustar* — wish, not immediate want.",
          trap: "✗ Confusing with *quiero viajar* (firmer intention).",
        },
        {
          spanish: "¿Podrías ayudarme un momento?",
          english: "Could you help me for a moment?",
          cue: "Conditional of *poder* — polite request.",
        },
        {
          spanish: "Sería buena idea empezar temprano.",
          english: "It would be a good idea to start early.",
          cue: "Conditional of *ser* — soft suggestion.",
        },
      ],
    },
    {
      id: "future-traps",
      title: "Future traps",
      headline: "Which future form fits?",
      note: "Americans often reach for *hablaré* when *voy a hablar* is what people actually say.",
      rules: [
        {
          pattern: "Concrete plan → voy a",
          english: "near future",
          note: "*Voy a cocinar esta noche* — you're already planning it.",
        },
        {
          pattern: "Wish / polite → conditional",
          english: "me gustaría, podrías",
          note: "Not happening right now — softer.",
        },
        {
          pattern: "Direct want now → quiero",
          english: "present",
          note: "*Quiero un café* — not *me gustaría* at the counter.",
        },
      ],
      examples: [
        {
          spanish: "Voy a estudiar después de cena.",
          english: "I'm going to study after dinner.",
          cue: "Plan → *voy a*, not *estudiaré*.",
        },
        {
          spanish: "Me gustaría aprender a tocar la guitarra.",
          english: "I would like to learn guitar.",
          cue: "Someday wish → conditional.",
        },
      ],
    },
  ],
};

export const verbTenseGuides = [
  verbPresentGuide,
  verbPastGuide,
  verbFutureGuide,
] as const;

export type VerbHubLink = {
  href: string;
  label: string;
  title: string;
};

export const verbHubLinks: VerbHubLink[] = [
  {
    href: "/activities/verbs/frequent",
    label: "Frecuentes",
    title: "Top 20 verbs — tap to conjugate.",
  },
  ...verbTenseGuides.map((guide) => ({
    href: `/activities/verbs/${guide.slug}`,
    label: guide.label,
    title: guide.title,
  })),
  {
    href: "/activities/reflexive",
    label: "Reflexivos",
    title: "The action comes back to you.",
  },
];

export function verbAudioTexts() {
  const all = [
    ...verbOverviewGuide.sections,
    ...verbPresentGuide.sections,
    ...verbPastGuide.sections,
    ...verbFutureGuide.sections,
  ];
  return all.flatMap((section) =>
    section.examples.map((example) => example.spanish),
  );
}
