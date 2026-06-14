/**
 * Top 20 high-frequency Spanish verbs — present tense conjugations.
 * Expandable list; more verbs can be added later.
 */

export type ConjugationRow = {
  pronoun: string;
  form: string;
};

export type FrequentVerb = {
  id: string;
  infinitive: string;
  english: string;
  /** Short note for irregulars or usage. */
  note?: string;
  present: ConjugationRow[];
};

export const frequentVerbs: FrequentVerb[] = [
  {
    id: "ser",
    infinitive: "ser",
    english: "to be (identity)",
    note: "Who/what something is — not how it feels right now.",
    present: [
      { pronoun: "yo", form: "soy" },
      { pronoun: "tú", form: "eres" },
      { pronoun: "él / ella / usted", form: "es" },
      { pronoun: "nosotros / as", form: "somos" },
      { pronoun: "ellos / ellas / ustedes", form: "son" },
    ],
  },
  {
    id: "estar",
    infinitive: "estar",
    english: "to be (state / location)",
    note: "How or where — right now. *Estoy cansada*, *está en casa*.",
    present: [
      { pronoun: "yo", form: "estoy" },
      { pronoun: "tú", form: "estás" },
      { pronoun: "él / ella / usted", form: "está" },
      { pronoun: "nosotros / as", form: "estamos" },
      { pronoun: "ellos / ellas / ustedes", form: "están" },
    ],
  },
  {
    id: "haber",
    infinitive: "haber",
    english: "to have (auxiliary) / there is",
    note: "Impersonal *hay*. Otherwise auxiliary for perfect tenses: *he hablado*.",
    present: [
      { pronoun: "yo", form: "he" },
      { pronoun: "tú", form: "has" },
      { pronoun: "él / ella / usted", form: "ha" },
      { pronoun: "nosotros / as", form: "hemos" },
      { pronoun: "ellos / ellas / ustedes", form: "han" },
    ],
  },
  {
    id: "tener",
    infinitive: "tener",
    english: "to have",
    note: "Also in *tengo que*, *tengo hambre*, *tengo ganas de*.",
    present: [
      { pronoun: "yo", form: "tengo" },
      { pronoun: "tú", form: "tienes" },
      { pronoun: "él / ella / usted", form: "tiene" },
      { pronoun: "nosotros / as", form: "tenemos" },
      { pronoun: "ellos / ellas / ustedes", form: "tienen" },
    ],
  },
  {
    id: "hacer",
    infinitive: "hacer",
    english: "to do / make",
    note: "Weather: *hace frío*. Do/make: *hago la tarea*.",
    present: [
      { pronoun: "yo", form: "hago" },
      { pronoun: "tú", form: "haces" },
      { pronoun: "él / ella / usted", form: "hace" },
      { pronoun: "nosotros / as", form: "hacemos" },
      { pronoun: "ellos / ellas / ustedes", form: "hacen" },
    ],
  },
  {
    id: "poder",
    infinitive: "poder",
    english: "can / to be able to",
    note: "Stem change o→ue. Pairs with infinitive: *puedo ayudarte*.",
    present: [
      { pronoun: "yo", form: "puedo" },
      { pronoun: "tú", form: "puedes" },
      { pronoun: "él / ella / usted", form: "puede" },
      { pronoun: "nosotros / as", form: "podemos" },
      { pronoun: "ellos / ellas / ustedes", form: "pueden" },
    ],
  },
  {
    id: "decir",
    infinitive: "decir",
    english: "to say / tell",
    note: "Irregular yo: *digo*. For stories, *contar* is often better.",
    present: [
      { pronoun: "yo", form: "digo" },
      { pronoun: "tú", form: "dices" },
      { pronoun: "él / ella / usted", form: "dice" },
      { pronoun: "nosotros / as", form: "decimos" },
      { pronoun: "ellos / ellas / ustedes", form: "dicen" },
    ],
  },
  {
    id: "ir",
    infinitive: "ir",
    english: "to go",
    note: "Near future: *voy a + infinitive*. Leave: *me voy*.",
    present: [
      { pronoun: "yo", form: "voy" },
      { pronoun: "tú", form: "vas" },
      { pronoun: "él / ella / usted", form: "va" },
      { pronoun: "nosotros / as", form: "vamos" },
      { pronoun: "ellos / ellas / ustedes", form: "van" },
    ],
  },
  {
    id: "ver",
    infinitive: "ver",
    english: "to see / watch",
    note: "Irregular yo: *veo*. *Ver una película*, not always *mirar*.",
    present: [
      { pronoun: "yo", form: "veo" },
      { pronoun: "tú", form: "ves" },
      { pronoun: "él / ella / usted", form: "ve" },
      { pronoun: "nosotros / as", form: "vemos" },
      { pronoun: "ellos / ellas / ustedes", form: "ven" },
    ],
  },
  {
    id: "dar",
    infinitive: "dar",
    english: "to give",
    note: "Irregular yo: *doy*.",
    present: [
      { pronoun: "yo", form: "doy" },
      { pronoun: "tú", form: "das" },
      { pronoun: "él / ella / usted", form: "da" },
      { pronoun: "nosotros / as", form: "damos" },
      { pronoun: "ellos / ellas / ustedes", form: "dan" },
    ],
  },
  {
    id: "saber",
    infinitive: "saber",
    english: "to know (facts / how to)",
    note: "Facts and skills — not people or places (*conocer*).",
    present: [
      { pronoun: "yo", form: "sé" },
      { pronoun: "tú", form: "sabes" },
      { pronoun: "él / ella / usted", form: "sabe" },
      { pronoun: "nosotros / as", form: "sabemos" },
      { pronoun: "ellos / ellas / ustedes", form: "saben" },
    ],
  },
  {
    id: "querer",
    infinitive: "querer",
    english: "to want / love",
    note: "Stem change e→ie. Softer wish → *me gustaría*.",
    present: [
      { pronoun: "yo", form: "quiero" },
      { pronoun: "tú", form: "quieres" },
      { pronoun: "él / ella / usted", form: "quiere" },
      { pronoun: "nosotros / as", form: "queremos" },
      { pronoun: "ellos / ellas / ustedes", form: "quieren" },
    ],
  },
  {
    id: "llegar",
    infinitive: "llegar",
    english: "to arrive",
    present: [
      { pronoun: "yo", form: "llego" },
      { pronoun: "tú", form: "llegas" },
      { pronoun: "él / ella / usted", form: "llega" },
      { pronoun: "nosotros / as", form: "llegamos" },
      { pronoun: "ellos / ellas / ustedes", form: "llegan" },
    ],
  },
  {
    id: "pasar",
    infinitive: "pasar",
    english: "to pass / happen / spend time",
    note: "*¿Qué pasa?* · *pasar tiempo*.",
    present: [
      { pronoun: "yo", form: "paso" },
      { pronoun: "tú", form: "pasas" },
      { pronoun: "él / ella / usted", form: "pasa" },
      { pronoun: "nosotros / as", form: "pasamos" },
      { pronoun: "ellos / ellas / ustedes", form: "pasan" },
    ],
  },
  {
    id: "deber",
    infinitive: "deber",
    english: "should / must / owe",
    note: "Softer than *tener que*: *deberías descansar*.",
    present: [
      { pronoun: "yo", form: "debo" },
      { pronoun: "tú", form: "debes" },
      { pronoun: "él / ella / usted", form: "debe" },
      { pronoun: "nosotros / as", form: "debemos" },
      { pronoun: "ellos / ellas / ustedes", form: "deben" },
    ],
  },
  {
    id: "poner",
    infinitive: "poner",
    english: "to put / place",
    note: "Become: *ponerse nerviosa*. Put on: *ponerse la chaqueta*.",
    present: [
      { pronoun: "yo", form: "pongo" },
      { pronoun: "tú", form: "pones" },
      { pronoun: "él / ella / usted", form: "pone" },
      { pronoun: "nosotros / as", form: "ponemos" },
      { pronoun: "ellos / ellas / ustedes", form: "ponen" },
    ],
  },
  {
    id: "parecer",
    infinitive: "parecer",
    english: "to seem / look like",
    note: "Impersonal: *parece que…* · *¿Qué te parece?*",
    present: [
      { pronoun: "yo", form: "parezco" },
      { pronoun: "tú", form: "pareces" },
      { pronoun: "él / ella / usted", form: "parece" },
      { pronoun: "nosotros / as", form: "parecemos" },
      { pronoun: "ellos / ellas / ustedes", form: "parecen" },
    ],
  },
  {
    id: "quedar",
    infinitive: "quedar",
    english: "to stay / be left / turn out",
    note: "Plans: *¿quedamos el viernes?* · Stay: *me quedo*.",
    present: [
      { pronoun: "yo", form: "quedo" },
      { pronoun: "tú", form: "quedas" },
      { pronoun: "él / ella / usted", form: "queda" },
      { pronoun: "nosotros / as", form: "quedamos" },
      { pronoun: "ellos / ellas / ustedes", form: "quedan" },
    ],
  },
  {
    id: "creer",
    infinitive: "creer",
    english: "to believe / think",
    note: "*Creo que…* — everyday \"I think so.\"",
    present: [
      { pronoun: "yo", form: "creo" },
      { pronoun: "tú", form: "crees" },
      { pronoun: "él / ella / usted", form: "cree" },
      { pronoun: "nosotros / as", form: "creemos" },
      { pronoun: "ellos / ellas / ustedes", form: "creen" },
    ],
  },
  {
    id: "hablar",
    infinitive: "hablar",
    english: "to speak / talk",
    note: "Regular -ar — a good template verb to learn patterns from.",
    present: [
      { pronoun: "yo", form: "hablo" },
      { pronoun: "tú", form: "hablas" },
      { pronoun: "él / ella / usted", form: "habla" },
      { pronoun: "nosotros / as", form: "hablamos" },
      { pronoun: "ellos / ellas / ustedes", form: "hablan" },
    ],
  },
];

export function frequentVerbAudioTexts() {
  return frequentVerbs.flatMap((verb) => [
    verb.infinitive,
    ...verb.present.map((row) => row.form),
  ]);
}
