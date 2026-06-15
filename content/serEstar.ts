/**
 * Ser vs Estar — a sort-the-sentence game for Práctica.
 *
 * Each item is a sentence with a blank (`___`). The learner taps SER or ESTAR.
 * Because the choice depends on context — not the word — every card carries a
 * short cue (the "why" in one or two words) and a fuller explanation shown when
 * the guess is wrong. Conjugated forms fill the blank on a correct answer.
 */

export type SerEstar = "ser" | "estar";

export type SerEstarItem = {
  /** Sentence with a `___` where ser/estar belongs. */
  prompt: string;
  answer: SerEstar;
  /** The conjugated form that fills the blank, e.g. "es", "está". */
  conjugated: string;
  english: string;
  /** Short cue — the rule in a word or two (shown on the answer chip). */
  tag: string;
  /** Why this answer is right — shown when the guess is wrong. */
  explanation: string;
};

export type SerEstarRound = {
  round: number;
  label: string;
  items: SerEstarItem[];
};

export const serEstarOverview = {
  pill: "Juego",
  title: "Ser o estar.",
  gloss:
    "Read the sentence, then tap the verb that fits. Ser is for what something is; estar is for how or where it is right now.",
};

export const serEstarRules = [
  { verb: "Ser", cue: "Identity, origin, traits, time", example: "Soy de México." },
  { verb: "Estar", cue: "Location, feelings, conditions", example: "Estoy cansada." },
];

export const serEstarRounds: SerEstarRound[] = [
  {
    round: 1,
    label: "Lo básico",
    items: [
      {
        prompt: "Yo ___ de México.",
        answer: "ser",
        conjugated: "soy",
        english: "I'm from Mexico.",
        tag: "Origin",
        explanation: "Where someone is from is a fixed identity, so use ser.",
      },
      {
        prompt: "El libro ___ en la mesa.",
        answer: "estar",
        conjugated: "está",
        english: "The book is on the table.",
        tag: "Location",
        explanation: "Where a thing is located uses estar.",
      },
      {
        prompt: "Ella ___ cansada hoy.",
        answer: "estar",
        conjugated: "está",
        english: "She's tired today.",
        tag: "Condition",
        explanation: "Tired is a passing state, not a permanent trait, so use estar.",
      },
      {
        prompt: "Nosotros ___ estudiantes.",
        answer: "ser",
        conjugated: "somos",
        english: "We are students.",
        tag: "Identity",
        explanation: "What you are — your role or job — uses ser.",
      },
      {
        prompt: "Hoy ___ lunes.",
        answer: "ser",
        conjugated: "es",
        english: "Today is Monday.",
        tag: "Time",
        explanation: "Days, dates, and the time always use ser.",
      },
      {
        prompt: "Los niños ___ en la escuela.",
        answer: "estar",
        conjugated: "están",
        english: "The kids are at school.",
        tag: "Location",
        explanation: "Where people are located uses estar.",
      },
      {
        prompt: "Mi casa ___ grande.",
        answer: "ser",
        conjugated: "es",
        english: "My house is big.",
        tag: "Trait",
        explanation: "A lasting characteristic like size uses ser.",
      },
      {
        prompt: "¿Cómo ___ tú?",
        answer: "estar",
        conjugated: "estás",
        english: "How are you?",
        tag: "Feeling",
        explanation: "Asking how someone is doing or feeling uses estar.",
      },
    ],
  },
  {
    round: 2,
    label: "Rasgos y estados",
    items: [
      {
        prompt: "Mi hermano ___ alto.",
        answer: "ser",
        conjugated: "es",
        english: "My brother is tall.",
        tag: "Description",
        explanation: "Physical description is a stable trait, so use ser.",
      },
      {
        prompt: "La sopa ___ caliente.",
        answer: "estar",
        conjugated: "está",
        english: "The soup is hot.",
        tag: "Condition",
        explanation: "Hot right now is a temporary condition, so use estar.",
      },
      {
        prompt: "Ellos ___ simpáticos.",
        answer: "ser",
        conjugated: "son",
        english: "They are nice.",
        tag: "Personality",
        explanation: "Personality is who someone is, so use ser.",
      },
      {
        prompt: "La tienda ___ cerrada.",
        answer: "estar",
        conjugated: "está",
        english: "The store is closed.",
        tag: "State",
        explanation: "Open or closed is a current state, so use estar.",
      },
      {
        prompt: "La fiesta ___ en mi casa.",
        answer: "ser",
        conjugated: "es",
        english: "The party is at my house.",
        tag: "Event",
        explanation: "An event takes place — for where events happen, use ser (not estar).",
      },
      {
        prompt: "Mi abuela ___ enferma.",
        answer: "estar",
        conjugated: "está",
        english: "My grandma is sick.",
        tag: "Health",
        explanation: "Being sick is a temporary condition, so use estar.",
      },
      {
        prompt: "El café ___ muy rico hoy.",
        answer: "estar",
        conjugated: "está",
        english: "The coffee tastes great today.",
        tag: "Right now",
        explanation: "How something tastes in the moment uses estar.",
      },
      {
        prompt: "Las flores ___ rojas.",
        answer: "ser",
        conjugated: "son",
        english: "The flowers are red.",
        tag: "Trait",
        explanation: "The natural color of something is a trait, so use ser.",
      },
    ],
  },
  {
    round: 3,
    label: "Las trampas",
    items: [
      {
        prompt: "El examen ___ aburrido.",
        answer: "ser",
        conjugated: "es",
        english: "The exam is boring.",
        tag: "Trait",
        explanation: "Ser aburrido means boring (a quality). Estar aburrido means bored.",
      },
      {
        prompt: "Yo ___ aburrido en clase.",
        answer: "estar",
        conjugated: "estoy",
        english: "I'm bored in class.",
        tag: "Feeling",
        explanation: "Estar aburrido means bored. Ser aburrido would mean you are boring.",
      },
      {
        prompt: "Mi novio ___ guapo.",
        answer: "ser",
        conjugated: "es",
        english: "My boyfriend is handsome.",
        tag: "Description",
        explanation: "Ser guapo describes how someone looks in general — a trait.",
      },
      {
        prompt: "¡Tú ___ muy guapo hoy!",
        answer: "estar",
        conjugated: "estás",
        english: "You look great today!",
        tag: "Right now",
        explanation: "Estar guapo means looking good right now, not always.",
      },
      {
        prompt: "Nosotros ___ listos.",
        answer: "estar",
        conjugated: "estamos",
        english: "We're ready.",
        tag: "State",
        explanation: "Estar listo means ready. Ser listo means clever.",
      },
      {
        prompt: "¿Qué hora ___?",
        answer: "ser",
        conjugated: "es",
        english: "What time is it?",
        tag: "Time",
        explanation: "Telling time always uses ser.",
      },
      {
        prompt: "Las llaves ___ aquí.",
        answer: "estar",
        conjugated: "están",
        english: "The keys are here.",
        tag: "Location",
        explanation: "Where something is located uses estar.",
      },
      {
        prompt: "El agua ___ fría.",
        answer: "estar",
        conjugated: "está",
        english: "The water is cold.",
        tag: "Condition",
        explanation: "Cold right now is a passing condition, so use estar.",
      },
    ],
  },
];

export function totalSerEstarItems(): number {
  return serEstarRounds.reduce((sum, round) => sum + round.items.length, 0);
}

/** Stable shuffle so a given seed always produces the same order (no hydration mismatch). */
export function shuffleWithSeed<T>(arr: T[], seed: number): T[] {
  const shuffled = [...arr];
  let value = seed >>> 0;
  const random = () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 0x100000000;
  };
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j]!, shuffled[i]!];
  }
  return shuffled;
}
