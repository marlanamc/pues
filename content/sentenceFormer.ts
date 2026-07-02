/**
 * Sentence Former — a quick-fire completion drill for Práctica.
 *
 * The learner sees a stem from content/frames.ts (e.g. "Quiero…") and has to
 * finish it fast, either aloud (Hablar) or typed (Escribir). This file only
 * supplies the completion banks used for the hint reveal and for picking a
 * random target completion — it doesn't grade anything, since there's no
 * completion-checking yet. Stems here must match a Frame.stem from the same
 * day in frames.ts, but this file isn't part of the frames/prompts coupling
 * enforced by content/content.test.ts.
 *
 * v1 covers days 1–3 only, matching how far the daily content is authored.
 */

export type SentenceFormerCompletion = {
  /** The Spanish completion, lowercase, appended after the stem. */
  es: string;
  /** English gloss, shown in the hint reveal. */
  en: string;
  category: "food" | "time" | "activity" | "opinion" | "other";
};

export type SentenceFormerHint = {
  es: string;
  en: string;
};

/**
 * Hints grouped by the question they answer. Not every stem takes all three —
 * e.g. an opinion stem like "Creo que…" rarely has a natural "cómo" (how)
 * answer, so that group is just omitted rather than forced.
 */
export type SentenceFormerHints = {
  /** ¿Qué? — what (a thing, activity, or idea). */
  que?: SentenceFormerHint[];
  /** ¿Cómo? — how (manner). */
  como?: SentenceFormerHint[];
  /** ¿Cuándo? — when (time). */
  cuando?: SentenceFormerHint[];
};

export type SentenceFormerStem = {
  /** Must match a Frame.stem in frames.ts for the same day. */
  stem: string;
  english: string;
  /** Optional — powers the ¿Qué? / ¿Cómo? / ¿Cuándo? hint chips. */
  hints?: SentenceFormerHints;
  completions: SentenceFormerCompletion[];
};

export type SentenceFormerDay = {
  day: number;
  theme: string;
  stems: SentenceFormerStem[];
};

export const sentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 1,
    theme: "Wants & Plans",
    stems: [
      {
        stem: "Quiero…",
        english: "I want…",
        hints: {
          que: [
            { es: "comer", en: "to eat" },
            { es: "un café", en: "a coffee" },
            { es: "descansar", en: "to rest" },
          ],
          cuando: [
            { es: "esta noche", en: "tonight" },
            { es: "mañana", en: "tomorrow" },
            { es: "este fin de semana", en: "this weekend" },
          ],
        },
        completions: [
          { es: "comer", en: "to eat", category: "activity" },
          { es: "un café", en: "a coffee", category: "food" },
          { es: "descansar", en: "to rest", category: "activity" },
          { es: "aprender más español", en: "to learn more Spanish", category: "activity" },
          { es: "dormir temprano", en: "to sleep early", category: "time" },
        ],
      },
      {
        stem: "Necesito…",
        english: "I need…",
        hints: {
          que: [
            { es: "más tiempo", en: "more time" },
            { es: "un café fuerte", en: "a strong coffee" },
            { es: "tomar agua", en: "to drink water" },
          ],
          cuando: [
            { es: "antes de clase", en: "before class" },
            { es: "para mañana", en: "for tomorrow" },
            { es: "ahora mismo", en: "right now" },
          ],
        },
        completions: [
          { es: "tomar agua", en: "to drink water", category: "activity" },
          { es: "más tiempo", en: "more time", category: "other" },
          { es: "un café fuerte", en: "a strong coffee", category: "food" },
          { es: "descansar un poco", en: "to rest a little", category: "activity" },
          { es: "terminar esto hoy", en: "to finish this today", category: "time" },
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        hints: {
          que: [
            { es: "cocinar", en: "cook" },
            { es: "llamar a mi mamá", en: "call my mom" },
            { es: "estudiar", en: "study" },
          ],
          como: [
            { es: "rápido", en: "quickly" },
            { es: "con calma", en: "calmly" },
            { es: "con cuidado", en: "carefully" },
          ],
          cuando: [
            { es: "esta noche", en: "tonight" },
            { es: "mañana", en: "tomorrow" },
            { es: "este fin de semana", en: "this weekend" },
          ],
        },
        completions: [
          { es: "cocinar esta noche", en: "cook tonight", category: "time" },
          { es: "llamar a mi mamá", en: "call my mom", category: "activity" },
          { es: "estudiar mañana", en: "study tomorrow", category: "time" },
          { es: "comer algo rápido", en: "eat something quick", category: "food" },
          { es: "caminar un rato", en: "walk for a while", category: "activity" },
        ],
      },
      {
        stem: "Me gustaría…",
        english: "I would like…",
        hints: {
          que: [
            { es: "viajar más", en: "to travel more" },
            { es: "un té caliente", en: "a hot tea" },
            { es: "aprender a cocinar", en: "to learn to cook" },
          ],
          cuando: [
            { es: "algún día", en: "someday" },
            { es: "este fin de semana", en: "this weekend" },
            { es: "pronto", en: "soon" },
          ],
        },
        completions: [
          { es: "viajar más", en: "to travel more", category: "activity" },
          { es: "un té caliente", en: "a hot tea", category: "food" },
          { es: "aprender a cocinar", en: "to learn to cook", category: "activity" },
          { es: "descansar este fin de semana", en: "to rest this weekend", category: "time" },
          { es: "visitar a mi familia", en: "to visit my family", category: "activity" },
        ],
      },
      {
        stem: "Tengo ganas de…",
        english: "I feel like… / I'm in the mood for…",
        hints: {
          que: [
            { es: "salir a caminar", en: "going for a walk" },
            { es: "algo dulce", en: "something sweet" },
            { es: "ver una película", en: "watching a movie" },
          ],
          cuando: [
            { es: "esta tarde", en: "this afternoon" },
            { es: "después del trabajo", en: "after work" },
            { es: "el viernes", en: "on Friday" },
          ],
        },
        completions: [
          { es: "salir a caminar", en: "going for a walk", category: "activity" },
          { es: "algo dulce", en: "something sweet", category: "food" },
          { es: "ver una película", en: "watching a movie", category: "activity" },
          { es: "descansar esta tarde", en: "resting this afternoon", category: "time" },
          { es: "un café helado", en: "an iced coffee", category: "food" },
        ],
      },
    ],
  },
  {
    day: 2,
    theme: "Daily Life",
    stems: [
      {
        stem: "Tengo…",
        english: "I have…",
        hints: {
          que: [
            { es: "mucho trabajo", en: "a lot of work" },
            { es: "hambre", en: "hunger / I'm hungry" },
            { es: "mi laptop conmigo", en: "my laptop with me" },
          ],
          cuando: [
            { es: "hoy", en: "today" },
            { es: "a las tres", en: "at three" },
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: "mucho trabajo", en: "a lot of work", category: "other" },
          { es: "una reunión a las tres", en: "a meeting at three", category: "time" },
          { es: "hambre", en: "hunger / I'm hungry", category: "food" },
          { es: "tiempo esta tarde", en: "time this afternoon", category: "time" },
          { es: "mi laptop conmigo", en: "my laptop with me", category: "other" },
        ],
      },
      {
        stem: "No tengo…",
        english: "I don't have…",
        hints: {
          que: [
            { es: "tiempo libre", en: "free time" },
            { es: "planes", en: "plans" },
            { es: "mi cartera", en: "my wallet" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
            { es: "esta noche", en: "tonight" },
            { es: "ahora", en: "right now" },
          ],
        },
        completions: [
          { es: "mucho tiempo libre", en: "much free time", category: "time" },
          { es: "planes esta noche", en: "plans tonight", category: "time" },
          { es: "hambre todavía", en: "hunger yet / I'm not hungry yet", category: "food" },
          { es: "mi cartera", en: "my wallet", category: "other" },
          { es: "ganas de salir", en: "the urge to go out", category: "activity" },
        ],
      },
      {
        stem: "Hay…",
        english: "There is / there are…",
        hints: {
          que: [
            { es: "mucho tráfico", en: "a lot of traffic" },
            { es: "una panadería cerca", en: "a bakery nearby" },
            { es: "veinticinco estudiantes", en: "twenty-five students" },
          ],
          cuando: [
            { es: "hoy", en: "today" },
            { es: "todavía", en: "still" },
          ],
        },
        completions: [
          { es: "mucho tráfico", en: "a lot of traffic", category: "other" },
          { es: "una panadería cerca", en: "a bakery nearby", category: "food" },
          { es: "veinticinco estudiantes", en: "twenty-five students", category: "other" },
          { es: "café en la cocina", en: "coffee in the kitchen", category: "food" },
          { es: "tiempo todavía", en: "still time", category: "time" },
        ],
      },
      {
        stem: "Uso…",
        english: "I use…",
        hints: {
          que: [
            { es: "mi laptop", en: "my laptop" },
            { es: "una app para estudiar", en: "an app to study" },
            { es: "el metro", en: "the subway" },
          ],
          como: [
            { es: "con facilidad", en: "with ease" },
            { es: "bien", en: "well" },
            { es: "sin problema", en: "without a problem" },
          ],
          cuando: [
            { es: "todos los días", en: "every day" },
            { es: "todo el día", en: "all day" },
          ],
        },
        completions: [
          { es: "mi laptop para todo", en: "my laptop for everything", category: "other" },
          { es: "una app para estudiar", en: "an app to study", category: "activity" },
          { es: "el metro para el trabajo", en: "the subway for work", category: "other" },
          { es: "un cuaderno en clase", en: "a notebook in class", category: "activity" },
          { es: "mi celular todo el día", en: "my phone all day", category: "time" },
        ],
      },
      {
        stem: "Paso mucho tiempo…",
        english: "I spend a lot of time…",
        hints: {
          que: [
            { es: "en mi computadora", en: "on my computer" },
            { es: "con mis estudiantes", en: "with my students" },
            { es: "leyendo", en: "reading" },
          ],
          como: [
            { es: "tranquilo", en: "calmly / at ease" },
            { es: "distraído", en: "distracted" },
            { es: "feliz", en: "happily" },
          ],
          cuando: [
            { es: "en la noche", en: "at night" },
            { es: "los domingos", en: "on Sundays" },
            { es: "por la tarde", en: "in the afternoon" },
          ],
        },
        completions: [
          { es: "en mi computadora", en: "on my computer", category: "other" },
          { es: "con mis estudiantes", en: "with my students", category: "activity" },
          { es: "leyendo en la noche", en: "reading at night", category: "time" },
          { es: "cocinando los domingos", en: "cooking on Sundays", category: "food" },
          { es: "caminando por el barrio", en: "walking around the neighborhood", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 3,
    theme: "Beliefs & Thoughts",
    stems: [
      {
        stem: "Creo que…",
        english: "I think / I believe…",
        hints: {
          que: [
            { es: "es una buena idea", en: "it's a good idea" },
            { es: "tienes razón", en: "you're right" },
            { es: "va a llover", en: "it's going to rain" },
            { es: "necesito un café", en: "I need a coffee" },
          ],
        },
        completions: [
          { es: "es una buena idea", en: "it's a good idea", category: "opinion" },
          { es: "va a llover", en: "it's going to rain", category: "time" },
          { es: "mis estudiantes están aprendiendo mucho", en: "my students are learning a lot", category: "opinion" },
          { es: "tienes razón", en: "you're right", category: "opinion" },
          { es: "necesito un café", en: "I need a coffee", category: "food" },
        ],
      },
      {
        stem: "Pienso que…",
        english: "I think that…",
        hints: {
          que: [
            { es: "hoy fue un buen día", en: "today was a good day" },
            { es: "ella tiene razón", en: "she's right" },
            { es: "es mejor descansar", en: "it's better to rest" },
            { es: "esto va a funcionar", en: "this is going to work" },
          ],
        },
        completions: [
          { es: "hoy fue un buen día", en: "today was a good day", category: "time" },
          { es: "ella tiene razón", en: "she's right", category: "opinion" },
          { es: "es mejor descansar", en: "it's better to rest", category: "opinion" },
          { es: "vamos a llegar tarde", en: "we're going to be late", category: "time" },
          { es: "esto va a funcionar", en: "this is going to work", category: "opinion" },
        ],
      },
      {
        stem: "Me parece que…",
        english: "It seems to me that…",
        hints: {
          que: [
            { es: "va a nevar otra vez", en: "it's going to snow again" },
            { es: "el plan está funcionando", en: "the plan is working" },
            { es: "mi estudiante está progresando", en: "my student is progressing" },
            { es: "necesitamos más tiempo", en: "we need more time" },
          ],
        },
        completions: [
          { es: "va a nevar otra vez", en: "it's going to snow again", category: "time" },
          { es: "el plan está funcionando", en: "the plan is working", category: "opinion" },
          { es: "mi estudiante está progresando", en: "my student is progressing", category: "opinion" },
          { es: "hoy va a ser difícil", en: "today is going to be hard", category: "time" },
          { es: "necesitamos más tiempo", en: "we need more time", category: "other" },
        ],
      },
      {
        stem: "Supongo que…",
        english: "I suppose / I guess…",
        hints: {
          que: [
            { es: "tienes razón", en: "you're right" },
            { es: "vale la pena intentarlo", en: "it's worth trying" },
            { es: "está bien así", en: "it's fine like this" },
          ],
          cuando: [
            { es: "va a llegar tarde", en: "they're going to arrive late" },
            { es: "puedo esperar un poco", en: "I can wait a little" },
          ],
        },
        completions: [
          { es: "tienes razón", en: "you're right", category: "opinion" },
          { es: "va a llegar tarde", en: "they're going to arrive late", category: "time" },
          { es: "vale la pena intentarlo", en: "it's worth trying", category: "opinion" },
          { es: "puedo esperar un poco", en: "I can wait a little", category: "time" },
          { es: "está bien así", en: "it's fine like this", category: "opinion" },
        ],
      },
      {
        stem: "No sé si…",
        english: "I don't know if…",
        hints: {
          que: [
            { es: "esto está bien", en: "this is right" },
            { es: "debo llamar ahora", en: "I should call now" },
            { es: "hay suficiente comida", en: "there's enough food" },
          ],
          cuando: [
            { es: "tengo tiempo hoy", en: "I have time today" },
            { es: "voy a poder ir mañana", en: "I'll be able to go tomorrow" },
          ],
        },
        completions: [
          { es: "tengo tiempo hoy", en: "I have time today", category: "time" },
          { es: "voy a poder ir mañana", en: "I'll be able to go tomorrow", category: "time" },
          { es: "esto está bien", en: "this is right", category: "opinion" },
          { es: "debo llamar ahora", en: "I should call now", category: "activity" },
          { es: "hay suficiente comida", en: "there's enough food", category: "food" },
        ],
      },
    ],
  },
];

export function sentenceFormerDayByNumber(day: number): SentenceFormerDay | undefined {
  return sentenceFormerDays.find((d) => d.day === day);
}
