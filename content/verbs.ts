/**
 * Verb overview — how Spanish verbs are shaped, conjugated, and combined.
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

export type VerbCategoryId =
  | "shape"
  | "must-know"
  | "patterns"
  | "beyond";

export const verbCategories: { id: VerbCategoryId; label: string }[] = [
  { id: "shape", label: "Shape" },
  { id: "must-know", label: "Must-know verbs" },
  { id: "patterns", label: "Patterns" },
  { id: "beyond", label: "Beyond present" },
];

const verbCategoryById: Record<string, VerbCategoryId> = {
  "three-endings": "shape",
  "how-conjugation-works": "shape",
  "present-regular": "shape",
  "stem-changers": "must-know",
  "irregular-essentials": "must-know",
  "verb-plus-infinitive": "patterns",
  gerund: "patterns",
  "gustar-family": "patterns",
  "reflexive-pointer": "patterns",
  "past-preview": "beyond",
  traps: "beyond",
};

export function verbSectionsByCategory() {
  return verbCategories.map((category) => ({
    category,
    sections: verbSections.filter(
      (section) => verbCategoryById[section.id] === category.id,
    ),
  }));
}

export const verbSections: VerbSection[] = [
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
        cue: "*Vivir* (-ir) conjugated: *vivo*.",
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
        trap: "✗ Yo trabajo is fine for emphasis, but *trabajo* alone is natural.",
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
    id: "present-regular",
    title: "Present tense — regular",
    headline: "One pattern per ending. Learn the template, plug in verbs.",
    note:
      "Present tense covers *I do*, *I am doing*, and sometimes *I will* — it's the tense you'll use most in conversation. These three templates are your foundation.",
    rules: [
      {
        pattern: "hablar → hablo, hablas, habla, hablamos, hablan",
        english: "-ar template",
        note: "Drop -ar, add: -o, -as, -a, -amos, -áis, -an.",
      },
      {
        pattern: "comer → como, comes, come, comemos, comen",
        english: "-er template",
        note: "Drop -er, add: -o, -es, -e, -emos, -éis, -en.",
      },
      {
        pattern: "vivir → vivo, vives, vive, vivimos, viven",
        english: "-ir template",
        note: "Drop -ir, add: -o, -es, -e, -imos, -ís, -en. (Same as -er except nosotros: -imos.)",
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
      "Don't memorize a giant list — start here. These verbs are irregular because they're ancient and high-frequency. Learn them as shapes you'll see constantly.",
    rules: [
      {
        pattern: "ser",
        english: "to be (identity)",
        note: "*Soy, eres, es, somos, son* — who/what something is.",
      },
      {
        pattern: "estar",
        english: "to be (state / location)",
        note: "*Estoy, estás, está, estamos, están* — how/where right now.",
      },
      {
        pattern: "tener",
        english: "to have",
        note: "*Tengo, tienes, tiene, tenemos, tienen* — also in *tengo que*, *tengo hambre*.",
      },
      {
        pattern: "ir",
        english: "to go",
        note: "*Voy, vas, va, vamos, van* — also in *voy a + infinitive*.",
      },
      {
        pattern: "hacer",
        english: "to do / make",
        note: "*Hago, haces, hace, hacemos, hacen* — weather: *hace frío*.",
      },
      {
        pattern: "poder / querer",
        english: "can / want",
        note: "*Puedo, quiero* — modal verbs you'll pair with infinitives.",
      },
    ],
    examples: [
      {
        spanish: "Soy maestra y estoy cansada hoy.",
        english: "I'm a teacher and I'm tired today.",
        cue: "*Soy* = identity. *Estoy* = state right now. Same sentence, two verbs.",
      },
      {
        spanish: "Tengo una reunión y voy a preparar las hojas.",
        english: "I have a meeting and I'm going to prepare the worksheets.",
        cue: "*Tengo* + *voy a preparar* — two essential patterns in one line.",
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
      "Called \"boot verbs\" because if you draw the conjugation table, the changed forms make a boot shape. The nosotros form is usually normal. You'll feel these before you memorize them.",
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
      {
        pattern: "Same stem change in gerund",
        english: "dormir → durmiendo, pedir → pidiendo",
        note: "The change often carries into *-ando / -iendo* too.",
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
        cue: "*Querer* → *quieres* — stem change + essential verb.",
      },
    ],
  },
  {
    id: "verb-plus-infinitive",
    title: "Verb + infinitive",
    headline: "Two verbs in a row — only the first one conjugates.",
    note:
      "This is how Spanish handles \"want to,\" \"need to,\" \"going to,\" \"can.\" The second verb stays in infinitive form (*-ar / -er / -ir*). Master this pattern and you can say almost anything.",
    rules: [
      {
        pattern: "Querer + infinitive",
        english: "to want to",
        note: "*Quiero aprender*, *quieres salir*.",
      },
      {
        pattern: "Necesitar + infinitive",
        english: "to need to",
        note: "*Necesito terminar*, *necesitamos hablar*.",
      },
      {
        pattern: "Tener que + infinitive",
        english: "to have to",
        note: "*Tengo que irme*, *tienes que ver esto*.",
      },
      {
        pattern: "Ir a + infinitive",
        english: "going to (near future)",
        note: "*Voy a cocinar*, *va a llover*.",
      },
      {
        pattern: "Poder + infinitive",
        english: "can / to be able to",
        note: "*Puedo ayudarte*, *¿puedes repetir?*",
      },
      {
        pattern: "Deber + infinitive",
        english: "should / ought to",
        note: "*Deberías descansar* — advice, softer than *tener que*.",
      },
    ],
    examples: [
      {
        spanish: "Necesito imprimir las hojas para mi clase.",
        english: "I need to print the worksheets for my class.",
        cue: "*Necesitar* + infinitive — from your Day 1 frames.",
      },
      {
        spanish: "Voy a llamar a mi mamá este fin de semana.",
        english: "I'm going to call my mom this weekend.",
        cue: "*Ir a* + infinitive — everyday near-future.",
      },
      {
        spanish: "Tengo que terminar esto antes de las cinco.",
        english: "I have to finish this before five.",
        cue: "*Tener que* — obligation on you specifically.",
        trap: "✗ Tengo que is not the same as *hay que* (impersonal) — see Matiz.",
      },
    ],
  },
  {
    id: "gerund",
    title: "-ando / -iendo",
    headline: "The \"-ing\" form — for actions in progress.",
    note:
      "Form: -ar → -ando (*hablando*), -er/-ir → -iendo (*comiendo*, *viviendo*). Paired with *estar* for *I am doing*: *estoy trabajando*. Also used after *seguir*, *llevar* (duration), and progressive structures.",
    rules: [
      {
        pattern: "estar + gerund",
        english: "to be doing (right now)",
        note: "*Estoy cocinando*, *está hablando*, *estamos esperando*.",
      },
      {
        pattern: "Irregular gerunds",
        english: "leer → leyendo, dormir → durmiendo, pedir → pidiendo",
        note: "Stem-changing verbs often change in the gerund too.",
      },
      {
        pattern: "Gerund is not a noun",
        english: "Different from English",
        note: "*Swimming is fun* → *Nadar es divertido* (infinitive), not *nadando*.",
      },
    ],
    examples: [
      {
        spanish: "Estoy preparando la clase.",
        english: "I'm preparing the class.",
        cue: "*Preparar* → *preparando* + *estoy*.",
      },
      {
        spanish: "Sigue lloviendo.",
        english: "It keeps raining.",
        cue: "*Seguir* + gerund — action continues.",
      },
      {
        spanish: "Llevo dos años estudiando español.",
        english: "I've been studying Spanish for two years.",
        cue: "*Llevar* + time + gerund — duration. Very spoken.",
      },
    ],
  },
  {
    id: "gustar-family",
    title: "Gustar & friends",
    headline: "The verb agrees with the thing — not with you.",
    note:
      "This flips English logic. *Me gusta el café* = coffee pleases me. The subject is *el café* (singular → *gusta*). If the thing is plural: *me gustan los tacos*. Same pattern for *encantar*, *interesar*, *importar*, *molestar*.",
    rules: [
      {
        pattern: "me / te / le / nos / les",
        english: "to me / you / him/her / us / them",
        note: "Indirect object pronoun — who receives the liking.",
      },
      {
        pattern: "gusta + singular noun / infinitive",
        english: "pleases me (one thing)",
        note: "*Me gusta el café*, *me gusta leer*.",
      },
      {
        pattern: "gustan + plural noun",
        english: "please me (many things)",
        note: "*Me gustan las mañanas tranquilas*.",
      },
      {
        pattern: "Encantar / interesar / importar",
        english: "love / interest / matter",
        note: "Same flip: *me encanta*, *me interesa*, *no me importa*.",
      },
    ],
    examples: [
      {
        spanish: "Me gusta el café fuerte.",
        english: "I like strong coffee.",
        cue: "*Café* is singular → *gusta*. Not *gusto*.",
        trap: "✗ Me gusto el café — that means you like yourself.",
      },
      {
        spanish: "Me gustan los viernes tranquilos.",
        english: "I like quiet Fridays.",
        cue: "*Viernes* plural → *gustan*.",
      },
      {
        spanish: "Me interesa aprender a programar.",
        english: "I'm interested in learning to code.",
        cue: "*Interesar* — same flipped grammar as *gustar*.",
      },
    ],
  },
  {
    id: "reflexive-pointer",
    title: "Reflexive verbs",
    headline: "Same conjugation — plus me / te / se.",
    note:
      "Reflexive verbs conjugate like any other verb. The extra piece is the pronoun (*me lavo*, *se viste*). Some verbs only exist with -se (*llamarse*, *acordarse de*). Full guide → Reflexivos activity.",
    rules: [
      {
        pattern: "Conjugated: pronoun before",
        english: "me levanto, se siente",
        note: "Default position in present tense.",
      },
      {
        pattern: "Infinitive: pronoun attached",
        english: "voy a levantarme",
        note: "Same as other verb + infinitive patterns.",
      },
      {
        pattern: "Learn chunks",
        english: "llamarse, acordarse de, quejarse",
        note: "Not always literally \"yourself\" — treat as vocabulary.",
      },
    ],
    examples: [
      {
        spanish: "Me llamo Marlana.",
        english: "My name is Marlana.",
        cue: "Reflexive chunk — see Reflexivos for the full picture.",
      },
      {
        spanish: "Me levanto a las seis.",
        english: "I get up at six.",
        cue: "Regular -ar conjugation + *me*.",
      },
      {
        spanish: "Voy a acostarme temprano.",
        english: "I'm going to go to bed early.",
        cue: "*Ir a* + reflexive infinitive — both patterns at once.",
      },
    ],
  },
  {
    id: "past-preview",
    title: "Past tense — a preview",
    headline: "Two past tenses — you'll meet both. Start with preterite.",
    note:
      "Don't let this overwhelm you. For now, know they exist. *Preterite* = completed events (*ayer hablé*). *Imperfect* = ongoing or habitual past (*cuando era niña*, *siempre hablaba*). Your present-tense foundation comes first.",
    rules: [
      {
        pattern: "Preterite (completed)",
        english: "hablé, comí, viví / habló, comió, vivió",
        note: "*Ayer trabajé mucho* — one finished event.",
      },
      {
        pattern: "Imperfect (ongoing / habitual)",
        english: "hablaba, comía, vivía",
        note: "*Cuando era niña, vivía en…* — background, used to.",
      },
      {
        pattern: "Irregular preterites to know early",
        english: "fui, fue, dijo, hizo, tuvo",
        note: "*Ser* and *ir* share *fui* in first person — context tells you which.",
      },
    ],
    examples: [
      {
        spanish: "Ayer di tres clases.",
        english: "Yesterday I taught three classes.",
        cue: "Preterite — finished yesterday.",
      },
      {
        spanish: "Cuando era niña, hablaba inglés en casa.",
        english: "When I was a girl, I spoke English at home.",
        cue: "Imperfect — background state (*era*, *hablaba*).",
      },
      {
        spanish: "Fui a la tienda y compré café.",
        english: "I went to the store and bought coffee.",
        cue: "Preterite *fui* (ir) + *compré* — completed sequence.",
      },
    ],
  },
  {
    id: "traps",
    title: "Traps for English speakers",
    headline: "What to watch for when you're building sentences.",
    note:
      "Americans often apply English logic to Spanish verbs. These catches will save you from the most common sounding-wrong moments.",
    rules: [
      {
        pattern: "Don't conjugate two verbs",
        english: "Only the first verb changes",
        note: "✗ *Quiero aprendo* → ✓ *Quiero aprender*.",
      },
      {
        pattern: "Gustar agrees with the thing",
        english: "Not with the person",
        note: "✗ *Me gusta los tacos* → ✓ *Me gustan los tacos*.",
      },
      {
        pattern: "Ser vs estar — pick the right \"to be\"",
        note: "Job/identity → *ser*. Location/mood now → *estar*. See Matiz.",
        english: "Permanent vs right now",
      },
      {
        pattern: "Memorize chunks, not rules first",
        english: "Phrases before paradigms",
        note: "*Voy a…*, *tengo que…*, *me gusta…* — learn these as units, then unpack grammar.",
      },
    ],
    examples: [
      {
        spanish: "Quiero aprender más, no quiero estudio más.",
        english: "I want to learn more (correct pattern).",
        cue: "*Quiero* + infinitive. Never conjugate the second verb.",
        trap: "✗ Quiero estudio más — double conjugation.",
      },
      {
        spanish: "Estoy aprendiendo poco a poco.",
        english: "I'm learning little by little.",
        cue: "Gerund for in-progress — natural, spoken.",
      },
      {
        spanish: "Me gusta practicar todos los días.",
        english: "I like to practice every day.",
        cue: "*Gustar* + infinitive — the thing you like is *practicar* (singular verb form → *gusta*).",
      },
    ],
  },
];

export function verbAudioTexts() {
  return verbSections.flatMap((section) =>
    section.examples.map((example) => example.spanish),
  );
}
