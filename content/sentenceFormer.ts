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
 * Verano batches 1–5: days 1–91 (full summer). Stems must match frames.ts for the
 * same day (enforced by content/content.test.ts).
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
  {
    day: 4,
    theme: "Likes & Dislikes",
    stems: [
      {
        stem: "Me gusta…",
        english: "I like…",
        hints: {
          que: [
            { es: "el café fuerte", en: "strong coffee" },
            { es: "caminar por el barrio", en: "walking around the neighborhood" },
            { es: "leer en la noche", en: "reading at night" },
          ],
          cuando: [
            { es: "por la mañana", en: "in the morning" },
            { es: "los sábados", en: "on Saturdays" },
            { es: "después del trabajo", en: "after work" },
          ],
        },
        completions: [
          { es: "el café fuerte por la mañana", en: "strong coffee in the morning", category: "food" },
          { es: "caminar por el barrio los sábados", en: "walking around the neighborhood on Saturdays", category: "activity" },
          { es: "leer en la noche", en: "reading at night", category: "activity" },
          { es: "cuando mis estudiantes se ríen en clase", en: "when my students laugh in class", category: "other" },
          { es: "el otoño en Nueva Inglaterra", en: "fall in New England", category: "other" },
        ],
      },
      {
        stem: "No me gusta…",
        english: "I don't like…",
        hints: {
          que: [
            { es: "el frío de Boston", en: "Boston's cold" },
            { es: "hablar cuando estoy cansada", en: "talking when I'm tired" },
            { es: "el café frío", en: "cold coffee" },
          ],
          cuando: [
            { es: "en febrero", en: "in February" },
            { es: "temprano en la mañana", en: "early in the morning" },
            { es: "con prisa", en: "when I'm in a rush" },
          ],
        },
        completions: [
          { es: "el frío de Boston en febrero", en: "Boston's cold in February", category: "other" },
          { es: "hablar mucho cuando estoy cansada", en: "talking a lot when I'm tired", category: "activity" },
          { es: "cuando el café ya está frío", en: "when the coffee is already cold", category: "food" },
          { es: "tener prisa todo el tiempo", en: "being in a rush all the time", category: "time" },
          { es: "el ruido en la mañana", en: "noise in the morning", category: "other" },
        ],
      },
      {
        stem: "Prefiero…",
        english: "I prefer…",
        hints: {
          que: [
            { es: "el verano", en: "summer" },
            { es: "leer en papel", en: "reading on paper" },
            { es: "caminar", en: "walking" },
          ],
          como: [
            { es: "con calma", en: "calmly" },
            { es: "en silencio", en: "in silence" },
            { es: "sin prisa", en: "without rushing" },
          ],
        },
        completions: [
          { es: "el verano", en: "summer", category: "other" },
          { es: "leer en papel que en la pantalla", en: "reading on paper over a screen", category: "activity" },
          { es: "caminar en lugar de tomar el metro", en: "walking instead of taking the subway", category: "activity" },
          { es: "el café solo", en: "black coffee", category: "food" },
          { es: "quedarme en casa los domingos", en: "staying home on Sundays", category: "time" },
        ],
      },
      {
        stem: "Me encanta…",
        english: "I love…",
        hints: {
          que: [
            { es: "leer", en: "reading" },
            { es: "el otoño", en: "fall" },
            { es: "cómo enseña esta colega", en: "how this colleague teaches" },
          ],
          cuando: [
            { es: "los fines de semana", en: "on weekends" },
            { es: "en otoño", en: "in fall" },
            { es: "después de una buena clase", en: "after a good class" },
          ],
        },
        completions: [
          { es: "leer", en: "reading", category: "activity" },
          { es: "el otoño en Nueva Inglaterra", en: "fall in New England", category: "other" },
          { es: "cómo enseña esta colega", en: "how this colleague teaches", category: "other" },
          { es: "cocinar los domingos", en: "cooking on Sundays", category: "food" },
          { es: "pasear por el barrio al atardecer", en: "walking around the neighborhood at dusk", category: "activity" },
        ],
      },
      {
        stem: "No soporto…",
        english: "I can't stand…",
        hints: {
          que: [
            { es: "el ruido en la mañana", en: "noise in the morning" },
            { es: "tener prisa", en: "being in a rush" },
            { es: "el frío extremo", en: "extreme cold" },
          ],
          cuando: [
            { es: "antes del café", en: "before coffee" },
            { es: "en clase", en: "in class" },
            { es: "los lunes", en: "on Mondays" },
          ],
        },
        completions: [
          { es: "el ruido en la mañana", en: "noise in the morning", category: "other" },
          { es: "cuando hablan al mismo tiempo en clase", en: "when people talk at the same time in class", category: "other" },
          { es: "tener prisa todo el tiempo", en: "being in a rush all the time", category: "time" },
          { es: "el café frío", en: "cold coffee", category: "food" },
          { es: "esperar mucho en el tráfico", en: "waiting a long time in traffic", category: "other" },
        ],
      },
    ],
  },
  {
    day: 5,
    theme: "People",
    stems: [
      {
        stem: "Mi amigo…",
        english: "My friend…",
        hints: {
          que: [
            { es: "también está aprendiendo a programar", en: "is also learning to code" },
            { es: "me recomendó un libro", en: "recommended a book to me" },
            { es: "vive cerca de mi casa", en: "lives near my house" },
          ],
          cuando: [
            { es: "viene a visitarme pronto", en: "is coming to visit me soon" },
            { es: "trabaja conmigo", en: "works with me" },
          ],
        },
        completions: [
          { es: "también está aprendiendo a programar", en: "is also learning to code", category: "activity" },
          { es: "me recomendó un libro buenísimo", en: "recommended a great book to me", category: "other" },
          { es: "de Atlanta me viene a visitar pronto", en: "from Atlanta is coming to visit me soon", category: "activity" },
          { es: "vive en otra ciudad", en: "lives in another city", category: "other" },
          { es: "y yo hablamos casi todos los días", en: "and I talk almost every day", category: "time" },
        ],
      },
      {
        stem: "Mi familia…",
        english: "My family…",
        hints: {
          que: [
            { es: "vive en Atlanta", en: "lives in Atlanta" },
            { es: "es muy unida", en: "is very close-knit" },
            { es: "me apoya mucho", en: "supports me a lot" },
          ],
          cuando: [
            { es: "cuando viajo", en: "when I travel" },
            { es: "los fines de semana", en: "on weekends" },
            { es: "en las fiestas", en: "during the holidays" },
          ],
        },
        completions: [
          { es: "vive en Atlanta", en: "lives in Atlanta", category: "other" },
          { es: "es muy unida", en: "is very close-knit", category: "other" },
          { es: "me apoya mucho en este cambio de carrera", en: "supports me a lot in this career change", category: "other" },
          { es: "y yo hablamos por teléfono cada semana", en: "and I talk on the phone every week", category: "time" },
          { es: "me hace falta cuando estoy lejos", en: "I miss them when I'm far away", category: "other" },
        ],
      },
      {
        stem: "Conozco a…",
        english: "I know (a person)…",
        hints: {
          que: [
            { es: "alguien que también enseña en Boston", en: "someone who also teaches in Boston" },
            { es: "a mi vecina", en: "my neighbor" },
            { es: "varios maestros que me inspiran", en: "several teachers who inspire me" },
          ],
          como: [
            { es: "desde hace años", en: "for years" },
            { es: "bien", en: "well" },
            { es: "de la escuela", en: "from school" },
          ],
        },
        completions: [
          { es: "alguien que también enseña en Boston", en: "someone who also teaches in Boston", category: "other" },
          { es: "a mi vecina desde hace años", en: "my neighbor for years", category: "other" },
          { es: "varios maestros que me inspiran", en: "several teachers who inspire me", category: "other" },
          { es: "a una persona muy amable del barrio", en: "a very kind person from the neighborhood", category: "other" },
          { es: "a mi colega desde el primer día", en: "my colleague since the first day", category: "time" },
        ],
      },
      {
        stem: "Admiro a…",
        english: "I admire…",
        hints: {
          que: [
            { es: "mi madre", en: "my mother" },
            { es: "los maestros con experiencia", en: "experienced teachers" },
            { es: "la gente que aprende siendo adulta", en: "people who learn as adults" },
          ],
          como: [
            { es: "mucho", en: "a lot" },
            { es: "de verdad", en: "truly" },
          ],
        },
        completions: [
          { es: "mi madre", en: "my mother", category: "other" },
          { es: "los maestros que llevan muchos años en esto", en: "teachers who've been at this for many years", category: "other" },
          { es: "la gente que aprende idiomas siendo ya adulta", en: "people who learn languages as adults", category: "other" },
          { es: "a mi colega por su paciencia", en: "my colleague for their patience", category: "other" },
          { es: "a quien no se rinde fácilmente", en: "anyone who doesn't give up easily", category: "opinion" },
        ],
      },
      {
        stem: "Paso tiempo con…",
        english: "I spend time with…",
        hints: {
          que: [
            { es: "mis amigos", en: "my friends" },
            { es: "mi familia", en: "my family" },
            { es: "mis colegas", en: "my colleagues" },
          ],
          cuando: [
            { es: "los fines de semana", en: "on weekends" },
            { es: "después del trabajo", en: "after work" },
            { es: "cuando puedo", en: "when I can" },
          ],
        },
        completions: [
          { es: "mis amigos", en: "my friends", category: "other" },
          { es: "mi familia cuando viajo a Atlanta", en: "my family when I travel to Atlanta", category: "activity" },
          { es: "mis colegas después del trabajo a veces", en: "my colleagues after work sometimes", category: "time" },
          { es: "mis estudiantes en la pausa", en: "my students during the break", category: "activity" },
          { es: "mi vecina los domingos", en: "my neighbor on Sundays", category: "time" },
        ],
      },
    ],
  },
  {
    day: 6,
    theme: "The Past",
    stems: [
      {
        stem: "Ayer…",
        english: "Yesterday…",
        hints: {
          que: [
            { es: "di una clase muy buena", en: "I taught a really good class" },
            { es: "cené con una amiga", en: "I had dinner with a friend" },
            { es: "caminé mucho", en: "I walked a lot" },
          ],
          cuando: [
            { es: "por la noche", en: "at night" },
            { es: "después del trabajo", en: "after work" },
            { es: "temprano", en: "early" },
          ],
        },
        completions: [
          { es: "di una clase muy buena", en: "I taught a really good class", category: "activity" },
          { es: "cené con una amiga", en: "I had dinner with a friend", category: "activity" },
          { es: "caminé mucho por la ciudad", en: "I walked a lot around the city", category: "activity" },
          { es: "trabajé hasta tarde", en: "I worked until late", category: "time" },
          { es: "descansé un poco", en: "I rested a little", category: "activity" },
        ],
      },
      {
        stem: "La semana pasada…",
        english: "Last week…",
        hints: {
          que: [
            { es: "terminé un proyecto de código", en: "I finished a coding project" },
            { es: "estuve cansada", en: "I was tired" },
            { es: "hablé con mi mamá", en: "I talked with my mom" },
          ],
          como: [
            { es: "casi todos los días", en: "almost every day" },
            { es: "tres veces", en: "three times" },
            { es: "con calma", en: "calmly" },
          ],
        },
        completions: [
          { es: "terminé un proyecto pequeño de código", en: "I finished a small coding project", category: "activity" },
          { es: "estuve cansada casi todos los días", en: "I was tired almost every day", category: "time" },
          { es: "hablé por teléfono con mi mamá tres veces", en: "I talked on the phone with my mom three times", category: "activity" },
          { es: "fui al médico", en: "I went to the doctor", category: "activity" },
          { es: "no tuve mucho tiempo libre", en: "I didn't have much free time", category: "time" },
        ],
      },
      {
        stem: "Recuerdo que…",
        english: "I remember that…",
        hints: {
          que: [
            { es: "estaba nerviosa", en: "I was nervous" },
            { es: "el invierno era más corto", en: "winter was shorter" },
            { es: "me gustaba leer en español", en: "I liked reading in Spanish" },
          ],
          cuando: [
            { es: "de niña", en: "as a kid" },
            { es: "en Atlanta", en: "in Atlanta" },
            { es: "el primer día de clase", en: "the first day of class" },
          ],
        },
        completions: [
          { es: "estaba nerviosa", en: "I was nervous", category: "other" },
          { es: "en Atlanta el invierno era mucho más corto", en: "in Atlanta winter was much shorter", category: "time" },
          { es: "de niña me gustaba mucho leer en español", en: "as a kid I really liked reading in Spanish", category: "activity" },
          { es: "mi mamá siempre me animaba", en: "my mom always encouraged me", category: "other" },
          { es: "fue difícil al principio", en: "it was hard at first", category: "opinion" },
        ],
      },
      {
        stem: "Cuando era niño…",
        english: "When I was a kid…",
        hints: {
          que: [
            { es: "nadaba mucho", en: "I used to swim a lot" },
            { es: "vivía cerca de mis abuelos", en: "I lived near my grandparents" },
            { es: "me encantaba leer", en: "I loved reading" },
          ],
          como: [
            { es: "en voz alta", en: "out loud" },
            { es: "todos los veranos", en: "every summer" },
            { es: "con mis primos", en: "with my cousins" },
          ],
        },
        completions: [
          { es: "nadaba mucho", en: "I used to swim a lot", category: "activity" },
          { es: "vivía cerca de mis abuelos", en: "I lived near my grandparents", category: "other" },
          { es: "me encantaba leer en voz alta", en: "I loved reading out loud", category: "activity" },
          { es: "pasaba los veranos en Atlanta", en: "I spent summers in Atlanta", category: "time" },
          { es: "tenía miedo de hablar en público", en: "I was afraid of speaking in public", category: "other" },
        ],
      },
      {
        stem: "Una vez…",
        english: "One time…",
        hints: {
          que: [
            { es: "me perdí en una ciudad nueva", en: "I got lost in a new city" },
            { es: "una estudiante me hizo llorar de risa", en: "a student made me cry laughing" },
            { es: "viajé sola por primera vez", en: "I traveled alone for the first time" },
          ],
          como: [
            { es: "por accidente", en: "by accident" },
            { es: "sin querer", en: "without meaning to" },
            { es: "de verdad", en: "for real" },
          ],
        },
        completions: [
          { es: "me perdí en una ciudad nueva", en: "I got lost in a new city", category: "activity" },
          { es: "una estudiante me hizo llorar de risa", en: "a student made me cry laughing", category: "other" },
          { es: "viajé sola por primera vez y me encantó", en: "I traveled alone for the first time and loved it", category: "activity" },
          { es: "olvidé mi laptop en el metro", en: "I forgot my laptop on the subway", category: "other" },
          { es: "conocí a alguien muy interesante en un café", en: "I met someone very interesting at a café", category: "food" },
        ],
      },
    ],
  },
  {
    day: 7,
    theme: "Learning",
    stems: [
      {
        stem: "Estoy aprendiendo…",
        english: "I'm learning…",
        hints: {
          que: [
            { es: "español otra vez", en: "Spanish again" },
            { es: "a programar en JavaScript", en: "to code in JavaScript" },
            { es: "a tener más paciencia", en: "to have more patience" },
          ],
          como: [
            { es: "poco a poco", en: "little by little" },
            { es: "con ayuda", en: "with help" },
            { es: "en mis ratos libres", en: "in my free time" },
          ],
          cuando: [
            { es: "por las noches", en: "at night" },
            { es: "cada día", en: "every day" },
            { es: "este mes", en: "this month" },
          ],
        },
        completions: [
          { es: "español otra vez", en: "Spanish again", category: "activity" },
          { es: "a programar en JavaScript", en: "to code in JavaScript", category: "activity" },
          { es: "a tener más paciencia conmigo misma", en: "to have more patience with myself", category: "other" },
          { es: "vocabulario nuevo cada semana", en: "new vocabulary every week", category: "activity" },
          { es: "a hablar más rápido", en: "to speak faster", category: "activity" },
        ],
      },
      {
        stem: "He aprendido…",
        english: "I have learned…",
        hints: {
          que: [
            { es: "mucho de mis estudiantes", en: "a lot from my students" },
            { es: "a pedir ayuda", en: "to ask for help" },
            { es: "que es mejor practicar poco y seguido", en: "that it's better to practice a little and often" },
          ],
          como: [
            { es: "con el tiempo", en: "over time" },
            { es: "a la fuerza", en: "the hard way" },
            { es: "poco a poco", en: "little by little" },
          ],
        },
        completions: [
          { es: "mucho de mis estudiantes", en: "a lot from my students", category: "other" },
          { es: "a pedir ayuda cuando la necesito", en: "to ask for help when I need it", category: "activity" },
          { es: "que es mejor practicar poco y seguido", en: "that it's better to practice a little and often", category: "opinion" },
          { es: "a explicar gramática con más claridad", en: "to explain grammar more clearly", category: "activity" },
          { es: "a no tener miedo de equivocarme", en: "not to be afraid of making mistakes", category: "opinion" },
        ],
      },
      {
        stem: "Quiero mejorar…",
        english: "I want to improve…",
        hints: {
          que: [
            { es: "mi pronunciación", en: "my pronunciation" },
            { es: "mi forma de explicar gramática", en: "the way I explain grammar" },
            { es: "mi manejo del tiempo", en: "my time management" },
          ],
          como: [
            { es: "poco a poco", en: "little by little" },
            { es: "este año", en: "this year" },
            { es: "con práctica diaria", en: "with daily practice" },
          ],
        },
        completions: [
          { es: "mi pronunciación", en: "my pronunciation", category: "activity" },
          { es: "mi forma de explicar gramática", en: "the way I explain grammar", category: "activity" },
          { es: "mi manejo del tiempo", en: "my time management", category: "other" },
          { es: "mi vocabulario en español", en: "my Spanish vocabulary", category: "activity" },
          { es: "mi confianza al hablar", en: "my confidence when speaking", category: "other" },
        ],
      },
      {
        stem: "Me cuesta…",
        english: "I struggle with… / It's hard for me to…",
        hints: {
          que: [
            { es: "hablar rápido", en: "speaking quickly" },
            { es: "entender las funciones recursivas", en: "understanding recursive functions" },
            { es: "pedir ayuda", en: "asking for help" },
          ],
          como: [
            { es: "sin pensarlo demasiado", en: "without overthinking it" },
            { es: "cuando estoy estresada", en: "when I'm stressed" },
            { es: "al principio", en: "at first" },
          ],
        },
        completions: [
          { es: "hablar rápido sin pensarlo demasiado", en: "speaking quickly without overthinking it", category: "activity" },
          { es: "entender las funciones recursivas", en: "understanding recursive functions", category: "activity" },
          { es: "pedir ayuda cuando estoy estresada", en: "asking for help when I'm stressed", category: "activity" },
          { es: "recordar el subjuntivo", en: "remembering the subjunctive", category: "activity" },
          { es: "concentrarme con mucho ruido", en: "concentrating with a lot of noise", category: "other" },
        ],
      },
      {
        stem: "Estoy practicando…",
        english: "I'm practicing…",
        hints: {
          que: [
            { es: "un poco de español cada día", en: "a little Spanish every day" },
            { es: "hablar en voz alta", en: "speaking out loud" },
            { es: "código en mi tiempo libre", en: "coding in my free time" },
          ],
          como: [
            { es: "con calma", en: "calmly" },
            { es: "en voz alta", en: "out loud" },
            { es: "sin miedo", en: "without fear" },
          ],
          cuando: [
            { es: "cada mañana", en: "every morning" },
            { es: "esta semana", en: "this week" },
            { es: "cuando estoy sola", en: "when I'm alone" },
          ],
        },
        completions: [
          { es: "un poco de español cada día", en: "a little Spanish every day", category: "activity" },
          { es: "hablar en voz alta cuando estoy sola", en: "speaking out loud when I'm alone", category: "activity" },
          { es: "código en mi tiempo libre", en: "coding in my free time", category: "activity" },
          { es: "nuevas frases antes de clase", en: "new phrases before class", category: "time" },
          { es: "mi pronunciación con audio", en: "my pronunciation with audio", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 8,
    theme: "Feelings",
    stems: [
      {
        stem: "Me siento…",
        english: "I feel…",
        hints: {
          que: [
            { es: "cansada", en: "tired" },
            { es: "agradecida hoy", en: "grateful today" },
            { es: "más confiada que el mes pasado", en: "more confident than last month" },
          ],
          como: [
            { es: "un poco mejor", en: "a little better" },
            { es: "lista para empezar", en: "ready to start" },
          ],
          cuando: [
            { es: "después de clase", en: "after class" },
            { es: "los lunes", en: "on Mondays" },
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: "cansada", en: "tired", category: "other" },
          { es: "agradecida hoy", en: "grateful today", category: "other" },
          { es: "más confiada que el mes pasado", en: "more confident than last month", category: "other" },
          { es: "lista para la semana", en: "ready for the week", category: "other" },
          { es: "un poco abrumada", en: "a little overwhelmed", category: "other" },
        ],
      },
      {
        stem: "Estoy…",
        english: "I am… (right now)",
        hints: {
          que: [
            { es: "un poco cansada hoy", en: "a little tired today" },
            { es: "emocionada por este proyecto", en: "excited about this project" },
            { es: "lista para empezar la semana", en: "ready to start the week" },
          ],
          como: [
            { es: "muy ocupada", en: "very busy" },
            { es: "tranquila", en: "calm" },
          ],
        },
        completions: [
          { es: "un poco cansada hoy", en: "a little tired today", category: "other" },
          { es: "emocionada por este proyecto", en: "excited about this project", category: "other" },
          { es: "lista para empezar la semana", en: "ready to start the week", category: "other" },
          { es: "contenta con mi progreso", en: "happy with my progress", category: "other" },
          { es: "nerviosa antes de la reunión", en: "nervous before the meeting", category: "other" },
        ],
      },
      {
        stem: "Me preocupa…",
        english: "I'm worried about…",
        hints: {
          que: [
            { es: "no tener tiempo suficiente", en: "not having enough time" },
            { es: "el cambio de carrera", en: "the career change" },
            { es: "que mis estudiantes no entiendan", en: "that my students don't understand" },
          ],
        },
        completions: [
          { es: "que mis estudiantes no entiendan", en: "that my students don't understand", category: "other" },
          { es: "no tener tiempo suficiente", en: "not having enough time", category: "time" },
          { es: "el cambio de carrera", en: "the career change", category: "other" },
          { es: "equivocarme al hablar", en: "making mistakes when I speak", category: "activity" },
          { es: "llegar tarde a clase", en: "being late to class", category: "time" },
        ],
      },
      {
        stem: "Me alegra…",
        english: "It makes me happy that…",
        hints: {
          que: [
            { es: "ver a mis estudiantes progresar", en: "seeing my students progress" },
            { es: "haber empezado a practicar español otra vez", en: "having started practicing Spanish again" },
            { es: "escuchar tu voz por teléfono", en: "hearing your voice on the phone" },
          ],
        },
        completions: [
          { es: "ver a mis estudiantes progresar", en: "seeing my students progress", category: "other" },
          { es: "haber empezado a practicar español otra vez", en: "having started practicing Spanish again", category: "activity" },
          { es: "escuchar tu voz por teléfono", en: "hearing your voice on the phone", category: "other" },
          { es: "que hayas venido", en: "that you came", category: "other" },
          { es: "tener un día tranquilo", en: "having a quiet day", category: "other" },
        ],
      },
      {
        stem: "Me emociona…",
        english: "I'm excited about…",
        hints: {
          que: [
            { es: "este proyecto", en: "this project" },
            { es: "la idea de visitar Atlanta pronto", en: "the idea of visiting Atlanta soon" },
            { es: "ver hasta dónde puedo llegar con esto", en: "seeing how far I can go with this" },
          ],
        },
        completions: [
          { es: "este proyecto", en: "this project", category: "other" },
          { es: "la idea de visitar Atlanta pronto", en: "the idea of visiting Atlanta soon", category: "activity" },
          { es: "ver hasta dónde puedo llegar con esto", en: "seeing how far I can go with this", category: "other" },
          { es: "empezar algo nuevo", en: "starting something new", category: "activity" },
          { es: "mi próximo viaje", en: "my next trip", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 9,
    theme: "Challenges",
    stems: [
      {
        stem: "Es difícil…",
        english: "It's hard to…",
        hints: {
          que: [
            { es: "hablar sin miedo a equivocarme", en: "speaking without fear of making mistakes" },
            { es: "enseñar a tantos niveles a la vez", en: "teaching so many levels at once" },
            { es: "mantener la rutina cuando estoy cansada", en: "keeping the routine when I'm tired" },
          ],
          como: [
            { es: "al principio", en: "at first" },
            { es: "sin ayuda", en: "without help" },
          ],
        },
        completions: [
          { es: "hablar sin miedo a equivocarme", en: "speaking without fear of making mistakes", category: "activity" },
          { es: "enseñar a tantos niveles a la vez", en: "teaching so many levels at once", category: "activity" },
          { es: "mantener la rutina cuando estoy cansada", en: "keeping the routine when I'm tired", category: "activity" },
          { es: "entender todo de una vez", en: "understanding everything at once", category: "activity" },
          { es: "decir lo que pienso en español", en: "saying what I think in Spanish", category: "activity" },
        ],
      },
      {
        stem: "Tengo problemas con…",
        english: "I have trouble with…",
        hints: {
          que: [
            { es: "los verbos irregulares", en: "irregular verbs" },
            { es: "esta parte del código", en: "this part of the code" },
            { es: "dormirme temprano", en: "falling asleep early" },
          ],
        },
        completions: [
          { es: "los verbos irregulares", en: "irregular verbs", category: "activity" },
          { es: "esta parte del código", en: "this part of the code", category: "activity" },
          { es: "dormirme temprano", en: "falling asleep early", category: "time" },
          { es: "la pronunciación de la erre", en: "pronouncing the rolled r", category: "activity" },
          { es: "organizar mi semana", en: "organizing my week", category: "other" },
        ],
      },
      {
        stem: "Estoy intentando…",
        english: "I'm trying to…",
        hints: {
          que: [
            { es: "hablar más", en: "speak more" },
            { es: "no compararme con otros", en: "not compare myself to others" },
            { es: "estudiar treinta minutos al día", en: "study thirty minutes a day" },
          ],
          como: [
            { es: "con paciencia", en: "with patience" },
            { es: "poco a poco", en: "little by little" },
          ],
        },
        completions: [
          { es: "hablar más", en: "speak more", category: "activity" },
          { es: "no compararme con otros", en: "not compare myself to others", category: "other" },
          { es: "estudiar treinta minutos al día", en: "study thirty minutes a day", category: "time" },
          { es: "ser más constante", en: "be more consistent", category: "other" },
          { es: "escuchar más en español", en: "listen more in Spanish", category: "activity" },
        ],
      },
      {
        stem: "Todavía no puedo…",
        english: "I still can't…",
        hints: {
          que: [
            { es: "entender películas sin subtítulos", en: "understand movies without subtitles" },
            { es: "escribir una función desde cero sin ayuda", en: "write a function from scratch without help" },
            { es: "hablar sin traducir mentalmente", en: "speak without mentally translating" },
          ],
        },
        completions: [
          { es: "entender películas sin subtítulos", en: "understand movies without subtitles", category: "activity" },
          { es: "escribir una función desde cero sin ayuda", en: "write a function from scratch without help", category: "activity" },
          { es: "hablar sin traducir mentalmente", en: "speak without mentally translating", category: "activity" },
          { es: "seguir una conversación rápida", en: "follow a fast conversation", category: "activity" },
          { es: "recordar todas las conjugaciones", en: "remember all the conjugations", category: "activity" },
        ],
      },
      {
        stem: "Necesito ayuda con…",
        english: "I need help with…",
        hints: {
          que: [
            { es: "la pronunciación de algunas palabras", en: "the pronunciation of some words" },
            { es: "un error en mi código", en: "an error in my code" },
            { es: "organizar mis materiales de clase", en: "organizing my class materials" },
          ],
        },
        completions: [
          { es: "la pronunciación de algunas palabras", en: "the pronunciation of some words", category: "activity" },
          { es: "un error en mi código", en: "an error in my code", category: "activity" },
          { es: "organizar mis materiales de clase", en: "organizing my class materials", category: "other" },
          { es: "entender esta regla gramatical", en: "understanding this grammar rule", category: "activity" },
          { es: "planificar la próxima unidad", en: "planning the next unit", category: "other" },
        ],
      },
    ],
  },
  {
    day: 10,
    theme: "The Future",
    stems: [
      {
        stem: "Espero…",
        english: "I hope…",
        hints: {
          que: [
            { es: "viajar a España", en: "to travel to Spain" },
            { es: "descansar bien este fin de semana", en: "to rest well this weekend" },
            { es: "que mis estudiantes sigan motivados", en: "that my students stay motivated" },
          ],
          cuando: [
            { es: "pronto", en: "soon" },
            { es: "este año", en: "this year" },
          ],
        },
        completions: [
          { es: "viajar a España", en: "to travel to Spain", category: "activity" },
          { es: "descansar bien este fin de semana", en: "to rest well this weekend", category: "time" },
          { es: "que mis estudiantes sigan motivados", en: "that my students stay motivated", category: "other" },
          { es: "mejorar mi español este año", en: "to improve my Spanish this year", category: "activity" },
          { es: "que todo salga bien", en: "that everything goes well", category: "other" },
        ],
      },
      {
        stem: "En el futuro…",
        english: "In the future…",
        hints: {
          que: [
            { es: "quiero trabajar como desarrolladora", en: "I want to work as a developer" },
            { es: "me gustaría vivir cerca de mi familia otra vez", en: "I'd like to live near my family again" },
            { es: "voy a hablar español con más confianza", en: "I'm going to speak Spanish with more confidence" },
          ],
        },
        completions: [
          { es: "quiero trabajar como desarrolladora", en: "I want to work as a developer", category: "activity" },
          { es: "me gustaría vivir cerca de mi familia otra vez", en: "I'd like to live near my family again", category: "other" },
          { es: "voy a hablar español con más confianza", en: "I'm going to speak Spanish with more confidence", category: "activity" },
          { es: "quiero enseñar en dos idiomas", en: "I want to teach in two languages", category: "activity" },
          { es: "me gustaría viajar más", en: "I'd like to travel more", category: "activity" },
        ],
      },
      {
        stem: "Algún día…",
        english: "Someday…",
        hints: {
          que: [
            { es: "voy a visitar América Latina por mi cuenta", en: "I'm going to visit Latin America on my own" },
            { es: "quiero escribir un libro pequeño", en: "I want to write a small book" },
            { es: "me gustaría enseñar en dos idiomas", en: "I'd like to teach in two languages" },
          ],
        },
        completions: [
          { es: "voy a visitar América Latina por mi cuenta", en: "I'm going to visit Latin America on my own", category: "activity" },
          { es: "quiero escribir un libro pequeño", en: "I want to write a small book", category: "activity" },
          { es: "me gustaría enseñar en dos idiomas", en: "I'd like to teach in two languages", category: "activity" },
          { es: "voy a hablar sin miedo", en: "I'm going to speak without fear", category: "activity" },
          { es: "me gustaría vivir cerca del mar", en: "I'd like to live near the sea", category: "other" },
        ],
      },
      {
        stem: "Mi meta es…",
        english: "My goal is…",
        hints: {
          que: [
            { es: "hablar con fluidez", en: "to speak fluently" },
            { es: "construir mi primera aplicación completa este año", en: "to build my first complete app this year" },
            { es: "practicar español cinco días a la semana", en: "to practice Spanish five days a week" },
          ],
        },
        completions: [
          { es: "hablar con fluidez", en: "to speak fluently", category: "activity" },
          { es: "construir mi primera aplicación completa este año", en: "to build my first complete app this year", category: "activity" },
          { es: "practicar español cinco días a la semana", en: "to practice Spanish five days a week", category: "time" },
          { es: "sentirme cómoda en cualquier conversación", en: "to feel comfortable in any conversation", category: "other" },
          { es: "terminar mi proyecto este verano", en: "to finish my project this summer", category: "time" },
        ],
      },
      {
        stem: "Sueño con…",
        english: "I dream of…",
        hints: {
          que: [
            { es: "vivir en una ciudad cálida algún día", en: "living in a warm city someday" },
            { es: "tener un trabajo que me deje viajar", en: "having a job that lets me travel" },
            { es: "sentirme a gusto hablando español en cualquier situación", en: "feeling at ease speaking Spanish in any situation" },
          ],
        },
        completions: [
          { es: "vivir en una ciudad cálida algún día", en: "living in a warm city someday", category: "other" },
          { es: "tener un trabajo que me deje viajar", en: "having a job that lets me travel", category: "activity" },
          { es: "sentirme a gusto hablando español en cualquier situación", en: "feeling at ease speaking Spanish in any situation", category: "activity" },
          { es: "visitar a mi familia más seguido", en: "visiting my family more often", category: "activity" },
          { es: "un verano entero sin prisa", en: "a whole summer without rushing", category: "time" },
        ],
      },
    ],
  },
  {
    day: 11,
    theme: "Work & Purpose",
    stems: [
      {
        stem: "Trabajo en…",
        english: "I work at / in…",
        hints: {
          que: [
            { es: "una escuela para adultos", en: "an adult school" },
            { es: "un programa de inglés como segunda lengua", en: "an English as a second language program" },
            { es: "boston desde hace varios años", en: "Boston for several years" },
          ],
        },
        completions: [
          { es: "una escuela para adultos", en: "an adult school", category: "other" },
          { es: "un programa de inglés como segunda lengua", en: "an English as a second language program", category: "other" },
          { es: "boston desde hace varios años", en: "Boston for several years", category: "other" },
          { es: "educación para adultos", en: "adult education", category: "other" },
          { es: "una escuela pública", en: "a public school", category: "other" },
        ],
      },
      {
        stem: "Estoy trabajando en…",
        english: "I'm working on…",
        hints: {
          que: [
            { es: "una aplicación pequeña para practicar español", en: "a small app to practice Spanish" },
            { es: "un nuevo plan de clase para mis estudiantes", en: "a new lesson plan for my students" },
            { es: "tener más paciencia conmigo misma", en: "having more patience with myself" },
          ],
        },
        completions: [
          { es: "una aplicación pequeña para practicar español", en: "a small app to practice Spanish", category: "activity" },
          { es: "un nuevo plan de clase para mis estudiantes", en: "a new lesson plan for my students", category: "other" },
          { es: "tener más paciencia conmigo misma", en: "having more patience with myself", category: "other" },
          { es: "mi portafolio de desarrollo", en: "my development portfolio", category: "activity" },
          { es: "mejorar mis materiales de clase", en: "improving my class materials", category: "other" },
        ],
      },
      {
        stem: "Quiero ayudar…",
        english: "I want to help…",
        hints: {
          que: [
            { es: "a mis estudiantes a sentirse seguros", en: "my students feel confident" },
            { es: "a otras personas que están empezando a programar", en: "other people who are starting to code" },
            { es: "a mi familia cuando pueda", en: "my family when I can" },
          ],
        },
        completions: [
          { es: "a mis estudiantes a sentirse seguros", en: "my students feel confident", category: "other" },
          { es: "a otras personas que están empezando a programar", en: "other people who are starting to code", category: "activity" },
          { es: "a mi familia cuando pueda", en: "my family when I can", category: "other" },
          { es: "a alguien que acaba de llegar", en: "someone who just arrived", category: "other" },
          { es: "a mis compañeros con la tecnología", en: "my colleagues with technology", category: "other" },
        ],
      },
      {
        stem: "Estoy construyendo…",
        english: "I'm building…",
        hints: {
          que: [
            { es: "una aplicación", en: "an app" },
            { es: "una práctica diaria de español", en: "a daily Spanish practice" },
            { es: "una vida nueva en Boston, poco a poco", en: "a new life in Boston, little by little" },
          ],
        },
        completions: [
          { es: "una aplicación", en: "an app", category: "activity" },
          { es: "una práctica diaria de español", en: "a daily Spanish practice", category: "activity" },
          { es: "una vida nueva en Boston, poco a poco", en: "a new life in Boston, little by little", category: "other" },
          { es: "un hábito de estudiar cada mañana", en: "a habit of studying every morning", category: "time" },
          { es: "algo que me importa", en: "something that matters to me", category: "other" },
        ],
      },
      {
        stem: "Mi trabajo consiste en…",
        english: "My work consists of…",
        hints: {
          que: [
            { es: "enseñar inglés a adultos", en: "teaching English to adults" },
            { es: "escuchar mucho y explicar con paciencia", en: "listening a lot and explaining with patience" },
            { es: "acompañar a la gente en su aprendizaje", en: "accompanying people in their learning" },
          ],
        },
        completions: [
          { es: "enseñar inglés a adultos", en: "teaching English to adults", category: "activity" },
          { es: "escuchar mucho y explicar con paciencia", en: "listening a lot and explaining with patience", category: "activity" },
          { es: "acompañar a la gente en su aprendizaje", en: "accompanying people in their learning", category: "activity" },
          { es: "preparar clases y corregir tareas", en: "preparing classes and grading homework", category: "activity" },
          { es: "ayudar a la gente a sentirse segura", en: "helping people feel confident", category: "other" },
        ],
      },
    ],
  },
  {
    day: 12,
    theme: "Experiences",
    stems: [
      {
        stem: "He estado…",
        english: "I have been…",
        hints: {
          que: [
            { es: "muy ocupada", en: "very busy" },
            { es: "pensando en mi cambio de carrera", en: "thinking about my career change" },
            { es: "durmiendo mejor estas últimas semanas", en: "sleeping better these last few weeks" },
          ],
          como: [
            { es: "un poco estresada", en: "a little stressed" },
            { es: "más tranquila", en: "calmer" },
          ],
        },
        completions: [
          { es: "muy ocupada", en: "very busy", category: "other" },
          { es: "pensando en mi cambio de carrera", en: "thinking about my career change", category: "other" },
          { es: "durmiendo mejor estas últimas semanas", en: "sleeping better these last few weeks", category: "time" },
          { es: "practicando español cada día", en: "practicing Spanish every day", category: "activity" },
          { es: "cansada pero contenta", en: "tired but happy", category: "other" },
        ],
      },
      {
        stem: "He visto…",
        english: "I have seen…",
        hints: {
          que: [
            { es: "muchas series últimamente", en: "a lot of shows lately" },
            { es: "a mis estudiantes mejorar muchísimo este año", en: "my students improve so much this year" },
            { es: "cómo cambia Boston con cada estación", en: "how Boston changes with each season" },
          ],
        },
        completions: [
          { es: "muchas series últimamente", en: "a lot of shows lately", category: "activity" },
          { es: "a mis estudiantes mejorar muchísimo este año", en: "my students improve so much this year", category: "other" },
          { es: "cómo cambia Boston con cada estación", en: "how Boston changes with each season", category: "other" },
          { es: "películas en español con subtítulos", en: "movies in Spanish with subtitles", category: "activity" },
          { es: "a mi familia más seguido por video", en: "my family more often on video", category: "other" },
        ],
      },
      {
        stem: "He probado…",
        english: "I have tried…",
        hints: {
          que: [
            { es: "varios cafés del barrio", en: "several neighborhood cafés" },
            { es: "diferentes métodos para estudiar español", en: "different methods for studying Spanish" },
            { es: "cocinar comida del sur en Boston", en: "cooking Southern food in Boston" },
          ],
        },
        completions: [
          { es: "varios cafés del barrio", en: "several neighborhood cafés", category: "food" },
          { es: "diferentes métodos para estudiar español", en: "different methods for studying Spanish", category: "activity" },
          { es: "cocinar comida del sur en Boston", en: "cooking Southern food in Boston", category: "food" },
          { es: "aprender con podcasts", en: "learning with podcasts", category: "activity" },
          { es: "hablar en voz alta cada mañana", en: "speaking out loud every morning", category: "time" },
        ],
      },
      {
        stem: "Nunca he…",
        english: "I have never…",
        hints: {
          que: [
            { es: "visitado Argentina", en: "visited Argentina" },
            { es: "vivido en una ciudad tan fría como Boston", en: "lived in a city as cold as Boston" },
            { es: "hablado español por más de unos minutos sin parar", en: "spoken Spanish for more than a few minutes without stopping" },
          ],
        },
        completions: [
          { es: "visitado Argentina", en: "visited Argentina", category: "activity" },
          { es: "vivido en una ciudad tan fría como Boston", en: "lived in a city as cold as Boston", category: "other" },
          { es: "hablado español por más de unos minutos sin parar", en: "spoken Spanish for more than a few minutes without stopping", category: "activity" },
          { es: "estado en España", en: "been to Spain", category: "activity" },
          { es: "programado una app completa sola", en: "coded a complete app on my own", category: "activity" },
        ],
      },
      {
        stem: "Ya he…",
        english: "I have already…",
        hints: {
          que: [
            { es: "terminado lo más difícil de la semana", en: "finished the hardest part of the week" },
            { es: "aprendido más de lo que esperaba este mes", en: "learned more than I expected this month" },
            { es: "tomado mi café", en: "had my coffee" },
          ],
        },
        completions: [
          { es: "terminado lo más difícil de la semana", en: "finished the hardest part of the week", category: "time" },
          { es: "aprendido más de lo que esperaba este mes", en: "learned more than I expected this month", category: "activity" },
          { es: "tomado mi café", en: "had my coffee", category: "food" },
          { es: "preparado la clase de mañana", en: "prepared tomorrow's class", category: "other" },
          { es: "practicado hoy", en: "practiced today", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 13,
    theme: "Possibilities",
    stems: [
      {
        stem: "Si pudiera…",
        english: "If I could…",
        hints: {
          que: [
            { es: "viajaría más", en: "I would travel more" },
            { es: "trabajaría desde un café cerca del mar", en: "I would work from a café near the sea" },
            { es: "dormiría una hora más cada mañana", en: "I would sleep an hour more every morning" },
          ],
        },
        completions: [
          { es: "viajaría más", en: "I would travel more", category: "activity" },
          { es: "trabajaría desde un café cerca del mar", en: "I would work from a café near the sea", category: "activity" },
          { es: "dormiría una hora más cada mañana", en: "I would sleep an hour more every morning", category: "time" },
          { es: "hablaría español todos los días sin miedo", en: "I would speak Spanish every day without fear", category: "activity" },
          { es: "visitaría a mi familia más seguido", en: "I would visit my family more often", category: "activity" },
        ],
      },
      {
        stem: "Si tuviera…",
        english: "If I had…",
        hints: {
          que: [
            { es: "más tiempo aprendería un tercer idioma", en: "more time I'd learn a third language" },
            { es: "más confianza hablaría sin pensarlo tanto", en: "more confidence I'd speak without overthinking" },
            { es: "un día libre lo pasaría leyendo", en: "a day off I'd spend reading" },
          ],
        },
        completions: [
          { es: "más tiempo aprendería un tercer idioma", en: "more time I'd learn a third language", category: "activity" },
          { es: "más confianza hablaría sin pensarlo tanto", en: "more confidence I'd speak without overthinking", category: "activity" },
          { es: "un día libre lo pasaría leyendo", en: "a day off I'd spend reading", category: "activity" },
          { es: "más dinero viajaría este verano", en: "more money I'd travel this summer", category: "activity" },
          { es: "menos miedo lo intentaría más", en: "less fear I'd try it more", category: "other" },
        ],
      },
      {
        stem: "Haría…",
        english: "I would do…",
        hints: {
          que: [
            { es: "las cosas un poco diferente", en: "things a little differently" },
            { es: "más viajes cortos en lugar de uno largo", en: "more short trips instead of one long one" },
            { es: "más pausas durante el día", en: "more breaks during the day" },
          ],
        },
        completions: [
          { es: "las cosas un poco diferente", en: "things a little differently", category: "other" },
          { es: "más viajes cortos en lugar de uno largo", en: "more short trips instead of one long one", category: "activity" },
          { es: "más pausas durante el día", en: "more breaks during the day", category: "time" },
          { es: "lo mismo otra vez", en: "the same thing again", category: "other" },
          { es: "más preguntas en clase", en: "more questions in class", category: "other" },
        ],
      },
      {
        stem: "Intentaría…",
        english: "I would try to…",
        hints: {
          que: [
            { es: "no preocuparme tanto", en: "not worry so much" },
            { es: "hablar con cualquier persona que quisiera practicar", en: "talk to anyone who wanted to practice" },
            { es: "disfrutar más el proceso", en: "enjoy the process more" },
          ],
        },
        completions: [
          { es: "no preocuparme tanto", en: "not worry so much", category: "other" },
          { es: "hablar con cualquier persona que quisiera practicar", en: "talk to anyone who wanted to practice", category: "activity" },
          { es: "disfrutar más el proceso", en: "enjoy the process more", category: "other" },
          { es: "ser más paciente conmigo misma", en: "be more patient with myself", category: "other" },
          { es: "escuchar más antes de responder", en: "listen more before responding", category: "activity" },
        ],
      },
      {
        stem: "Cambiaría…",
        english: "I would change…",
        hints: {
          que: [
            { es: "algunas cosas", en: "some things" },
            { es: "la forma en la que organizo mi semana", en: "the way I organize my week" },
            { es: "algunos detalles", en: "some details" },
          ],
        },
        completions: [
          { es: "algunas cosas", en: "some things", category: "other" },
          { es: "la forma en la que organizo mi semana", en: "the way I organize my week", category: "other" },
          { es: "mi horario de las mañanas", en: "my morning schedule", category: "time" },
          { es: "cómo uso mi tiempo libre", en: "how I use my free time", category: "time" },
          { es: "nada importante", en: "nothing important", category: "other" },
        ],
      },
    ],
  },
  {
    day: 14,
    theme: "Your Story",
    stems: [
      {
        stem: "Soy…",
        english: "I am…",
        hints: {
          que: [
            { es: "profesora", en: "a teacher" },
            { es: "de Atlanta, pero ahora vivo en Boston", en: "from Atlanta, but now I live in Boston" },
            { es: "alguien que está aprendiendo a hacer cosas nuevas", en: "someone learning to do new things" },
          ],
        },
        completions: [
          { es: "profesora", en: "a teacher", category: "other" },
          { es: "de Atlanta, pero ahora vivo en Boston", en: "from Atlanta, but now I live in Boston", category: "other" },
          { es: "alguien que está aprendiendo a hacer cosas nuevas", en: "someone learning to do new things", category: "other" },
          { es: "maestra y también aprendiz", en: "a teacher and also a learner", category: "other" },
          { es: "una persona curiosa", en: "a curious person", category: "other" },
        ],
      },
      {
        stem: "Antes era…",
        english: "I used to be…",
        hints: {
          que: [
            { es: "más impaciente", en: "more impatient" },
            { es: "estudiante, ahora soy maestra", en: "a student, now I'm a teacher" },
            { es: "más callada en grupos grandes", en: "quieter in large groups" },
          ],
        },
        completions: [
          { es: "más impaciente", en: "more impatient", category: "other" },
          { es: "estudiante, ahora soy maestra", en: "a student, now I'm a teacher", category: "other" },
          { es: "más callada en grupos grandes", en: "quieter in large groups", category: "other" },
          { es: "menos segura de mí misma", en: "less sure of myself", category: "other" },
          { es: "más tímida al hablar", en: "shyer when speaking", category: "other" },
        ],
      },
      {
        stem: "Ahora soy…",
        english: "Now I am…",
        hints: {
          que: [
            { es: "maestra y también aprendiz", en: "a teacher and also a learner" },
            { es: "más paciente conmigo misma", en: "more patient with myself" },
            { es: "alguien que escribe en español todos los días", en: "someone who writes in Spanish every day" },
          ],
        },
        completions: [
          { es: "maestra y también aprendiz", en: "a teacher and also a learner", category: "other" },
          { es: "más paciente conmigo misma", en: "more patient with myself", category: "other" },
          { es: "alguien que escribe en español todos los días", en: "someone who writes in Spanish every day", category: "activity" },
          { es: "más valiente al hablar", en: "braver when speaking", category: "other" },
          { es: "alguien que no se rinde", en: "someone who doesn't give up", category: "other" },
        ],
      },
      {
        stem: "Lo más importante para mí es…",
        english: "The most important thing for me is…",
        hints: {
          que: [
            { es: "seguir aprendiendo", en: "to keep learning" },
            { es: "estar cerca de mi familia, aunque sea por teléfono", en: "being close to my family, even by phone" },
            { es: "enseñar con cariño", en: "teaching with care" },
          ],
        },
        completions: [
          { es: "seguir aprendiendo", en: "to keep learning", category: "activity" },
          { es: "estar cerca de mi familia, aunque sea por teléfono", en: "being close to my family, even by phone", category: "other" },
          { es: "enseñar con cariño", en: "teaching with care", category: "activity" },
          { es: "ser honesta conmigo misma", en: "being honest with myself", category: "other" },
          { es: "no dejar de practicar", en: "not stopping practice", category: "activity" },
        ],
      },
      {
        stem: "Estoy orgullosa de…",
        english: "I'm proud of…",
        hints: {
          que: [
            { es: "mi progreso", en: "my progress" },
            { es: "no haber abandonado el español", en: "not having given up on Spanish" },
            { es: "mis estudiantes y de lo lejos que han llegado", en: "my students and how far they've come" },
          ],
        },
        completions: [
          { es: "mi progreso", en: "my progress", category: "other" },
          { es: "no haber abandonado el español", en: "not having given up on Spanish", category: "activity" },
          { es: "mis estudiantes y de lo lejos que han llegado", en: "my students and how far they've come", category: "other" },
          { es: "seguir intentándolo", en: "keeping at it", category: "other" },
          { es: "haber empezado este proyecto", en: "having started this project", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 15,
    theme: "Basic Questions",
    stems: [
      {
        stem: "¿Dónde está…?",
        english: "Where is…?",
        hints: {
          que: [
            { es: "la parada del autobús", en: "the bus stop" },
            { es: "el baño", en: "the bathroom" },
            { es: "la oficina principal", en: "the main office" },
          ],
        },
        completions: [
          { es: "la parada del autobús", en: "the bus stop", category: "other" },
          { es: "el baño", en: "the bathroom", category: "other" },
          { es: "la oficina principal", en: "the main office", category: "other" },
          { es: "la salida", en: "the exit", category: "other" },
          { es: "el ascensor", en: "the elevator", category: "other" },
        ],
      },
      {
        stem: "¿Dónde puedo…?",
        english: "Where can I…?",
        hints: {
          que: [
            { es: "imprimir estas hojas", en: "print these pages" },
            { es: "comprar un buen café por aquí", en: "buy a good coffee around here" },
            { es: "cambiar dinero", en: "exchange money" },
          ],
        },
        completions: [
          { es: "imprimir estas hojas", en: "print these pages", category: "activity" },
          { es: "comprar un buen café por aquí", en: "buy a good coffee around here", category: "food" },
          { es: "cambiar dinero", en: "exchange money", category: "activity" },
          { es: "dejar mi abrigo", en: "leave my coat", category: "other" },
          { es: "tomar el autobús", en: "catch the bus", category: "activity" },
        ],
      },
      {
        stem: "¿Cuándo es…?",
        english: "When is…?",
        hints: {
          que: [
            { es: "la reunión de maestros", en: "the teachers' meeting" },
            { es: "el próximo feriado", en: "the next holiday" },
            { es: "el concierto en el parque", en: "the concert in the park" },
          ],
          cuando: [
            { es: "exactamente", en: "exactly" },
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: "la reunión de maestros", en: "the teachers' meeting", category: "time" },
          { es: "el próximo feriado", en: "the next holiday", category: "time" },
          { es: "el concierto en el parque", en: "the concert in the park", category: "time" },
          { es: "la entrega del proyecto", en: "the project deadline", category: "time" },
          { es: "tu cumpleaños", en: "your birthday", category: "time" },
        ],
      },
      {
        stem: "¿Qué es…?",
        english: "What is…?",
        hints: {
          que: [
            { es: "esto", en: "this" },
            { es: "la sopa del día", en: "the soup of the day" },
            { es: "ese edificio de la torre verde", en: "that green tower building" },
          ],
        },
        completions: [
          { es: "esto", en: "this", category: "other" },
          { es: "la sopa del día", en: "the soup of the day", category: "food" },
          { es: "ese edificio de la torre verde", en: "that green tower building", category: "other" },
          { es: "esa palabra", en: "that word", category: "other" },
          { es: "este plato", en: "this dish", category: "food" },
        ],
      },
      {
        stem: "¿A qué hora…?",
        english: "What time…?",
        hints: {
          que: [
            { es: "abre la biblioteca", en: "does the library open" },
            { es: "empieza la clase", en: "does class start" },
            { es: "sale el último tren", en: "does the last train leave" },
          ],
        },
        completions: [
          { es: "abre la biblioteca", en: "does the library open", category: "time" },
          { es: "empieza la clase", en: "does class start", category: "time" },
          { es: "sale el último tren", en: "does the last train leave", category: "time" },
          { es: "cierra la tienda", en: "does the store close", category: "time" },
          { es: "llega el autobús", en: "does the bus arrive", category: "time" },
        ],
      },
    ],
  },
  {
    day: 16,
    theme: "Asking to Understand",
    stems: [
      {
        stem: "¿Cómo se dice…?",
        english: "How do you say…?",
        hints: {
          que: [
            { es: "'field trip' en español", en: "'field trip' in Spanish" },
            { es: "esto", en: "this" },
            { es: "cuando el tren va completamente lleno", en: "when the train is completely full" },
          ],
        },
        completions: [
          { es: "'field trip' en español", en: "'field trip' in Spanish", category: "activity" },
          { es: "esto", en: "this", category: "other" },
          { es: "cuando el tren va completamente lleno", en: "when the train is completely full", category: "other" },
          { es: "'snow day' en español", en: "'snow day' in Spanish", category: "activity" },
          { es: "tu nombre", en: "your name", category: "other" },
        ],
      },
      {
        stem: "¿Qué significa…?",
        english: "What does … mean?",
        hints: {
          que: [
            { es: "esa palabra", en: "that word" },
            { es: "'chévere'", en: "'chévere'" },
            { es: "este letrero", en: "this sign" },
          ],
        },
        completions: [
          { es: "esa palabra", en: "that word", category: "other" },
          { es: "'chévere'", en: "'chévere' (cool)", category: "other" },
          { es: "este letrero", en: "this sign", category: "other" },
          { es: "lo que acabas de decir", en: "what you just said", category: "other" },
          { es: "esa frase", en: "that phrase", category: "other" },
        ],
      },
      {
        stem: "¿Puedes repetir…?",
        english: "Can you repeat…?",
        hints: {
          que: [
            { es: "eso, por favor", en: "that, please" },
            { es: "la última parte", en: "the last part" },
            { es: "el número más despacio", en: "the number more slowly" },
          ],
        },
        completions: [
          { es: "eso, por favor", en: "that, please", category: "other" },
          { es: "la última parte", en: "the last part", category: "other" },
          { es: "el número más despacio", en: "the number more slowly", category: "other" },
          { es: "lo que dijiste", en: "what you said", category: "other" },
          { es: "tu dirección", en: "your address", category: "other" },
        ],
      },
      {
        stem: "¿Puedes hablar más despacio…?",
        english: "Can you speak more slowly…?",
        hints: {
          como: [
            { es: "un poco", en: "a little" },
            { es: "por favor", en: "please" },
          ],
        },
        completions: [
          { es: "por favor", en: "please", category: "other" },
          { es: "un poco", en: "a little", category: "other" },
          { es: "un poco más", en: "a little more", category: "other" },
          { es: "por favor, todavía estoy aprendiendo", en: "please, I'm still learning", category: "activity" },
          { es: "por favor, quiero entender todo", en: "please, I want to understand everything", category: "activity" },
        ],
      },
      {
        stem: "No entendí…",
        english: "I didn't understand…",
        hints: {
          que: [
            { es: "la última palabra", en: "the last word" },
            { es: "bien", en: "well" },
            { es: "el chiste", en: "the joke" },
          ],
        },
        completions: [
          { es: "la última palabra", en: "the last word", category: "other" },
          { es: "bien", en: "well", category: "other" },
          { es: "el chiste", en: "the joke", category: "other" },
          { es: "la pregunta", en: "the question", category: "other" },
          { es: "lo que dijiste al final", en: "what you said at the end", category: "other" },
        ],
      },
    ],
  },
  {
    day: 17,
    theme: "Getting to Know Someone",
    stems: [
      {
        stem: "¿De dónde eres…?",
        english: "Where are you from…?",
        hints: {
          que: [
            { es: "originariamente", en: "originally" },
            { es: "tú", en: "you (emphatic)" },
            { es: "de verdad", en: "really" },
          ],
        },
        completions: [
          { es: "originariamente", en: "originally", category: "other" },
          { es: "tú", en: "you (emphatic)", category: "other" },
          { es: "de verdad", en: "really", category: "other" },
          { es: "exactamente", en: "exactly", category: "other" },
          { es: "ahora", en: "now", category: "other" },
        ],
      },
      {
        stem: "¿Quién es…?",
        english: "Who is…?",
        hints: {
          que: [
            { es: "ella", en: "she / her" },
            { es: "la persona de la foto", en: "the person in the photo" },
            { es: "tu maestra favorita", en: "your favorite teacher" },
          ],
        },
        completions: [
          { es: "ella", en: "she / her", category: "other" },
          { es: "la persona de la foto", en: "the person in the photo", category: "other" },
          { es: "tu maestra favorita", en: "your favorite teacher", category: "other" },
          { es: "ese hombre", en: "that man", category: "other" },
          { es: "la mujer de la entrada", en: "the woman at the door", category: "other" },
        ],
      },
      {
        stem: "¿Con quién…?",
        english: "Who … with?",
        hints: {
          que: [
            { es: "vives", en: "do you live" },
            { es: "practicas tu inglés", en: "do you practice your English" },
            { es: "fuiste al concierto", en: "did you go to the concert" },
          ],
        },
        completions: [
          { es: "vives", en: "do you live", category: "other" },
          { es: "practicas tu inglés", en: "do you practice your English", category: "activity" },
          { es: "fuiste al concierto", en: "did you go to the concert", category: "activity" },
          { es: "trabajas", en: "do you work", category: "other" },
          { es: "saliste anoche", en: "did you go out last night", category: "activity" },
        ],
      },
      {
        stem: "¿A qué te dedicas…?",
        english: "What do you do (for a living)…?",
        hints: {
          que: [
            { es: "ahora", en: "now" },
            { es: "exactamente", en: "exactly" },
            { es: "en este momento", en: "at the moment" },
          ],
        },
        completions: [
          { es: "ahora", en: "now", category: "other" },
          { es: "exactamente", en: "exactly", category: "other" },
          { es: "en este momento", en: "at the moment", category: "other" },
          { es: "con tu tiempo libre", en: "with your free time", category: "time" },
          { es: "además de enseñar", en: "besides teaching", category: "activity" },
        ],
      },
      {
        stem: "¿Tienes…?",
        english: "Do you have…?",
        hints: {
          que: [
            { es: "hermanos", en: "siblings / brothers" },
            { es: "mascotas", en: "pets" },
            { es: "planes para el verano", en: "plans for the summer" },
          ],
        },
        completions: [
          { es: "hermanos", en: "siblings / brothers", category: "other" },
          { es: "mascotas", en: "pets", category: "other" },
          { es: "planes para el verano", en: "plans for the summer", category: "time" },
          { es: "un minuto", en: "a minute", category: "time" },
          { es: "tiempo ahora", en: "time right now", category: "time" },
        ],
      },
    ],
  },
  {
    day: 18,
    theme: "Their Likes",
    stems: [
      {
        stem: "¿Te gusta…?",
        english: "Do you like…?",
        hints: {
          que: [
            { es: "vivir en boston", en: "living in Boston" },
            { es: "la comida picante", en: "spicy food" },
            { es: "tu nuevo trabajo", en: "your new job" },
          ],
        },
        completions: [
          { es: "vivir en boston", en: "living in Boston", category: "other" },
          { es: "la comida picante", en: "spicy food", category: "food" },
          { es: "tu nuevo trabajo", en: "your new job", category: "other" },
          { es: "este barrio", en: "this neighborhood", category: "other" },
          { es: "caminar por la mañana", en: "walking in the morning", category: "activity" },
        ],
      },
      {
        stem: "¿Qué piensas de…?",
        english: "What do you think of…?",
        hints: {
          que: [
            { es: "mi idea", en: "my idea" },
            { es: "este barrio", en: "this neighborhood" },
            { es: "la nueva directora", en: "the new principal" },
          ],
        },
        completions: [
          { es: "mi idea", en: "my idea", category: "opinion" },
          { es: "este barrio", en: "this neighborhood", category: "other" },
          { es: "la nueva directora", en: "the new principal", category: "other" },
          { es: "este plan", en: "this plan", category: "opinion" },
          { es: "la clase de hoy", en: "today's class", category: "other" },
        ],
      },
      {
        stem: "¿Prefieres…?",
        english: "Do you prefer…?",
        hints: {
          que: [
            { es: "té o café", en: "tea or coffee" },
            { es: "la playa o la montaña", en: "the beach or the mountains" },
            { es: "estudiar por la mañana o por la noche", en: "studying in the morning or at night" },
          ],
        },
        completions: [
          { es: "té o café", en: "tea or coffee", category: "food" },
          { es: "la playa o la montaña", en: "the beach or the mountains", category: "activity" },
          { es: "estudiar por la mañana o por la noche", en: "studying in the morning or at night", category: "time" },
          { es: "quedarte en casa o salir", en: "staying home or going out", category: "activity" },
          { es: "llamar o mandar un mensaje", en: "calling or texting", category: "activity" },
        ],
      },
      {
        stem: "¿Qué te pareció…?",
        english: "What did you think of…? (afterwards)",
        hints: {
          que: [
            { es: "el libro", en: "the book" },
            { es: "la clase de hoy", en: "today's class" },
            { es: "el restaurante nuevo", en: "the new restaurant" },
          ],
        },
        completions: [
          { es: "el libro", en: "the book", category: "other" },
          { es: "la clase de hoy", en: "today's class", category: "other" },
          { es: "el restaurante nuevo", en: "the new restaurant", category: "food" },
          { es: "la película de anoche", en: "last night's movie", category: "activity" },
          { es: "mi español", en: "my Spanish", category: "activity" },
        ],
      },
      {
        stem: "¿Cuál es tu … favorito?",
        english: "What's your favorite …?",
        hints: {
          que: [
            { es: "canción favorita", en: "favorite song" },
            { es: "comida favorita", en: "favorite food" },
            { es: "palabra favorita en inglés", en: "favorite word in English" },
          ],
        },
        completions: [
          { es: "canción favorita", en: "favorite song", category: "activity" },
          { es: "comida favorita", en: "favorite food", category: "food" },
          { es: "palabra favorita en inglés", en: "favorite word in English", category: "other" },
          { es: "libro favorito", en: "favorite book", category: "other" },
          { es: "lugar favorito en la ciudad", en: "favorite place in the city", category: "other" },
        ],
      },
    ],
  },
  {
    day: 19,
    theme: "Permission & Possibility",
    stems: [
      {
        stem: "¿Puedo…?",
        english: "Can I…?",
        hints: {
          que: [
            { es: "pagar con tarjeta", en: "pay by card" },
            { es: "sentarme aquí", en: "sit here" },
            { es: "hacerte una pregunta", en: "ask you a question" },
          ],
        },
        completions: [
          { es: "pagar con tarjeta", en: "pay by card", category: "activity" },
          { es: "sentarme aquí", en: "sit here", category: "other" },
          { es: "hacerte una pregunta", en: "ask you a question", category: "activity" },
          { es: "usar el baño", en: "use the bathroom", category: "other" },
          { es: "probar un poco", en: "try a little", category: "food" },
        ],
      },
      {
        stem: "¿Puedes…?",
        english: "Can you…?",
        hints: {
          que: [
            { es: "ayudarme con esto", en: "help me with this" },
            { es: "mandarme la dirección", en: "send me the address" },
            { es: "esperar un momento", en: "wait a moment" },
          ],
        },
        completions: [
          { es: "ayudarme con esto", en: "help me with this", category: "activity" },
          { es: "mandarme la dirección", en: "send me the address", category: "activity" },
          { es: "esperar un momento", en: "wait a moment", category: "time" },
          { es: "repetir eso", en: "repeat that", category: "activity" },
          { es: "hablar más despacio", en: "speak more slowly", category: "activity" },
        ],
      },
      {
        stem: "¿Se puede…?",
        english: "Can one… / Is it OK to…?",
        hints: {
          que: [
            { es: "entrar con café", en: "enter with coffee" },
            { es: "pagar en efectivo", en: "pay in cash" },
            { es: "caminar hasta allá", en: "walk there" },
          ],
        },
        completions: [
          { es: "entrar con café", en: "enter with coffee", category: "other" },
          { es: "pagar en efectivo", en: "pay in cash", category: "activity" },
          { es: "caminar hasta allá", en: "walk there", category: "activity" },
          { es: "fumar aquí", en: "smoke here", category: "other" },
          { es: "aparcar en la calle", en: "park on the street", category: "other" },
        ],
      },
      {
        stem: "¿Hay…?",
        english: "Is there… / Are there…?",
        hints: {
          que: [
            { es: "wifi aquí", en: "wifi here" },
            { es: "una farmacia cerca", en: "a pharmacy nearby" },
            { es: "espacio para una más", en: "room for one more" },
          ],
        },
        completions: [
          { es: "wifi aquí", en: "wifi here", category: "other" },
          { es: "una farmacia cerca", en: "a pharmacy nearby", category: "other" },
          { es: "espacio para una más", en: "room for one more", category: "other" },
          { es: "un baño público", en: "a public bathroom", category: "other" },
          { es: "café en la cocina", en: "coffee in the kitchen", category: "food" },
        ],
      },
      {
        stem: "¿Me ayudas con…?",
        english: "Will you help me with…?",
        hints: {
          que: [
            { es: "esta caja", en: "this box" },
            { es: "la traducción", en: "the translation" },
            { es: "esto un momento", en: "this for a moment" },
          ],
        },
        completions: [
          { es: "esta caja", en: "this box", category: "other" },
          { es: "la traducción", en: "the translation", category: "activity" },
          { es: "esto un momento", en: "this for a moment", category: "time" },
          { es: "mis materiales", en: "my materials", category: "other" },
          { es: "esta palabra", en: "this word", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 20,
    theme: "Plans & Catching Up",
    stems: [
      {
        stem: "¿Qué vas a hacer…?",
        english: "What are you going to do…?",
        hints: {
          que: [
            { es: "este fin de semana", en: "this weekend" },
            { es: "después de clase", en: "after class" },
            { es: "en las vacaciones", en: "on vacation" },
          ],
          cuando: [
            { es: "mañana", en: "tomorrow" },
            { es: "esta noche", en: "tonight" },
          ],
        },
        completions: [
          { es: "este fin de semana", en: "this weekend", category: "time" },
          { es: "después de clase", en: "after class", category: "time" },
          { es: "en las vacaciones", en: "on vacation", category: "time" },
          { es: "esta noche", en: "tonight", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
        ],
      },
      {
        stem: "¿Quieres…?",
        english: "Do you want to…?",
        hints: {
          que: [
            { es: "tomar un café conmigo", en: "get coffee with me" },
            { es: "venir con nosotros", en: "come with us" },
            { es: "practicar español un rato", en: "practice Spanish for a bit" },
          ],
        },
        completions: [
          { es: "tomar un café conmigo", en: "get coffee with me", category: "food" },
          { es: "venir con nosotros", en: "come with us", category: "activity" },
          { es: "practicar español un rato", en: "practice Spanish for a bit", category: "activity" },
          { es: "almorzar juntas mañana", en: "have lunch together tomorrow", category: "food" },
          { es: "ir al mercado el sábado", en: "go to the market on Saturday", category: "activity" },
        ],
      },
      {
        stem: "¿Tienes tiempo para…?",
        english: "Do you have time for/to…?",
        hints: {
          que: [
            { es: "un café", en: "a coffee" },
            { es: "hablar cinco minutos", en: "talk for five minutes" },
            { es: "ayudarme mañana", en: "help me tomorrow" },
          ],
        },
        completions: [
          { es: "un café", en: "a coffee", category: "food" },
          { es: "hablar cinco minutos", en: "talk for five minutes", category: "time" },
          { es: "ayudarme mañana", en: "help me tomorrow", category: "time" },
          { es: "revisar esto conmigo", en: "look this over with me", category: "activity" },
          { es: "practicar un rato", en: "practice for a bit", category: "time" },
        ],
      },
      {
        stem: "¿Qué hiciste…?",
        english: "What did you do…?",
        hints: {
          que: [
            { es: "el fin de semana", en: "over the weekend" },
            { es: "ayer después del trabajo", en: "yesterday after work" },
            { es: "en tus vacaciones", en: "on your vacation" },
          ],
          cuando: [
            { es: "anoche", en: "last night" },
            { es: "el sábado", en: "on Saturday" },
          ],
        },
        completions: [
          { es: "el fin de semana", en: "over the weekend", category: "time" },
          { es: "ayer después del trabajo", en: "yesterday after work", category: "time" },
          { es: "en tus vacaciones", en: "on your vacation", category: "time" },
          { es: "anoche", en: "last night", category: "time" },
          { es: "el sábado por la tarde", en: "Saturday afternoon", category: "time" },
        ],
      },
      {
        stem: "¿Cómo estuvo…?",
        english: "How was…?",
        hints: {
          que: [
            { es: "tu día", en: "your day" },
            { es: "el viaje", en: "the trip" },
            { es: "la fiesta", en: "the party" },
          ],
        },
        completions: [
          { es: "tu día", en: "your day", category: "time" },
          { es: "el viaje", en: "the trip", category: "activity" },
          { es: "la fiesta", en: "the party", category: "activity" },
          { es: "la clase", en: "the class", category: "other" },
          { es: "el fin de semana", en: "the weekend", category: "time" },
        ],
      },
    ],
  },
  {
    day: 21,
    theme: "Repaso: Questions",
    stems: [
      {
        stem: "¿Dónde puedo…?",
        english: "Where can I…?",
        hints: {
          que: [
            { es: "tomar el autobús a cambridge", en: "catch the bus to Cambridge" },
            { es: "conseguir algo rico para el desayuno", en: "get something good for breakfast" },
            { es: "dejar mi abrigo", en: "leave my coat" },
          ],
        },
        completions: [
          { es: "tomar el autobús a cambridge", en: "catch the bus to Cambridge", category: "activity" },
          { es: "conseguir algo rico para el desayuno", en: "get something good for breakfast", category: "food" },
          { es: "dejar mi abrigo", en: "leave my coat", category: "other" },
          { es: "imprimir esto", en: "print this", category: "activity" },
          { es: "comprar flores", en: "buy flowers", category: "activity" },
        ],
      },
      {
        stem: "¿Cómo se dice…?",
        english: "How do you say…?",
        hints: {
          que: [
            { es: "'snow day' en español", en: "'snow day' in Spanish" },
            { es: "tu nombre", en: "your name" },
            { es: "esto en tu país", en: "this in your country" },
          ],
        },
        completions: [
          { es: "'snow day' en español", en: "'snow day' in Spanish", category: "activity" },
          { es: "tu nombre", en: "your name", category: "other" },
          { es: "esto en tu país", en: "this in your country", category: "other" },
          { es: "'homework' en español", en: "'homework' in Spanish", category: "activity" },
          { es: "cuando algo sale mal", en: "when something goes wrong", category: "other" },
        ],
      },
      {
        stem: "¿Tienes…?",
        english: "Do you have…?",
        hints: {
          que: [
            { es: "un minuto", en: "a minute" },
            { es: "fotos de tu viaje", en: "photos from your trip" },
            { es: "ganas de salir hoy", en: "feel like going out today" },
          ],
        },
        completions: [
          { es: "un minuto", en: "a minute", category: "time" },
          { es: "fotos de tu viaje", en: "photos from your trip", category: "activity" },
          { es: "ganas de salir hoy", en: "feel like going out today", category: "activity" },
          { es: "planes para esta noche", en: "plans for tonight", category: "time" },
          { es: "tiempo ahora", en: "time right now", category: "time" },
        ],
      },
      {
        stem: "¿Qué te pareció…?",
        english: "What did you think of…?",
        hints: {
          que: [
            { es: "la película de anoche", en: "last night's movie" },
            { es: "mi español", en: "my Spanish" },
            { es: "el examen", en: "the exam" },
          ],
        },
        completions: [
          { es: "la película de anoche", en: "last night's movie", category: "activity" },
          { es: "mi español", en: "my Spanish", category: "activity" },
          { es: "el examen", en: "the exam", category: "other" },
          { es: "la presentación", en: "the presentation", category: "other" },
          { es: "el restaurante", en: "the restaurant", category: "food" },
        ],
      },
      {
        stem: "¿Quieres…?",
        english: "Do you want to…?",
        hints: {
          que: [
            { es: "almorzar juntas mañana", en: "have lunch together tomorrow" },
            { es: "ir al mercado el sábado", en: "go to the market on Saturday" },
            { es: "probar un poco", en: "try a little" },
          ],
        },
        completions: [
          { es: "almorzar juntas mañana", en: "have lunch together tomorrow", category: "food" },
          { es: "ir al mercado el sábado", en: "go to the market on Saturday", category: "activity" },
          { es: "probar un poco", en: "try a little", category: "food" },
          { es: "tomar un café", en: "get a coffee", category: "food" },
          { es: "practicar un rato", en: "practice for a bit", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 22,
    theme: "At the Café",
    stems: [
      {
        stem: "Me da…, por favor",
        english: "I'll have…, please",
        hints: {
          que: [
            { es: "un café con leche", en: "a coffee with milk" },
            { es: "un té y un pan dulce", en: "a tea and a sweet bread" },
            { es: "lo mismo de ayer", en: "the same as yesterday" },
          ],
        },
        completions: [
          { es: "un café con leche", en: "a coffee with milk", category: "food" },
          { es: "un té y un pan dulce", en: "a tea and a sweet bread", category: "food" },
          { es: "lo mismo de ayer", en: "the same as yesterday", category: "food" },
          { es: "un capuchino mediano", en: "a medium cappuccino", category: "food" },
          { es: "un vaso de agua", en: "a glass of water", category: "food" },
        ],
      },
      {
        stem: "Quisiera…",
        english: "I would like… (extra polite)",
        hints: {
          que: [
            { es: "un capuchino mediano", en: "a medium cappuccino" },
            { es: "algo sin azúcar", en: "something without sugar" },
            { es: "probar el café de temporada", en: "to try the seasonal coffee" },
          ],
        },
        completions: [
          { es: "un capuchino mediano", en: "a medium cappuccino", category: "food" },
          { es: "algo sin azúcar", en: "something without sugar", category: "food" },
          { es: "probar el café de temporada", en: "to try the seasonal coffee", category: "food" },
          { es: "un té caliente", en: "a hot tea", category: "food" },
          { es: "sentarme cerca de la ventana", en: "to sit near the window", category: "other" },
        ],
      },
      {
        stem: "Para mí…",
        english: "For me…",
        hints: {
          que: [
            { es: "un café negro", en: "a black coffee" },
            { es: "lo de siempre", en: "the usual" },
            { es: "el desayuno número dos", en: "breakfast number two" },
          ],
        },
        completions: [
          { es: "un café negro", en: "a black coffee", category: "food" },
          { es: "lo de siempre", en: "the usual", category: "food" },
          { es: "el desayuno número dos", en: "breakfast number two", category: "food" },
          { es: "el mismo de la última vez", en: "the same as last time", category: "food" },
          { es: "algo ligero", en: "something light", category: "food" },
        ],
      },
      {
        stem: "¿Me trae…?",
        english: "Could you bring me…?",
        hints: {
          que: [
            { es: "un vaso de agua, por favor", en: "a glass of water, please" },
            { es: "una servilleta", en: "a napkin" },
            { es: "otro café cuando pueda", en: "another coffee when you can" },
          ],
        },
        completions: [
          { es: "un vaso de agua, por favor", en: "a glass of water, please", category: "food" },
          { es: "una servilleta", en: "a napkin", category: "other" },
          { es: "otro café cuando pueda", en: "another coffee when you can", category: "food" },
          { es: "la cuenta", en: "the check", category: "other" },
          { es: "más azúcar", en: "more sugar", category: "food" },
        ],
      },
      {
        stem: "¿Cuánto cuesta…?",
        english: "How much does … cost?",
        hints: {
          que: [
            { es: "el café grande", en: "the large coffee" },
            { es: "este pastel", en: "this pastry" },
            { es: "los sándwiches", en: "the sandwiches" },
          ],
        },
        completions: [
          { es: "el café grande", en: "the large coffee", category: "food" },
          { es: "este pastel", en: "this pastry", category: "food" },
          { es: "los sándwiches", en: "the sandwiches", category: "food" },
          { es: "el menú del día", en: "the daily special", category: "food" },
          { es: "todo esto", en: "all of this", category: "other" },
        ],
      },
    ],
  },
  {
    day: 23,
    theme: "At the Shop",
    stems: [
      {
        stem: "Estoy buscando…",
        english: "I'm looking for…",
        hints: {
          que: [
            { es: "un regalo para mi mamá", en: "a gift for my mom" },
            { es: "algo para el frío", en: "something for the cold" },
            { es: "el pasillo de los cuadernos", en: "the notebook aisle" },
          ],
        },
        completions: [
          { es: "un regalo para mi mamá", en: "a gift for my mom", category: "other" },
          { es: "algo para el frío", en: "something for the cold", category: "other" },
          { es: "el pasillo de los cuadernos", en: "the notebook aisle", category: "other" },
          { es: "pilas", en: "batteries", category: "other" },
          { es: "algo más barato", en: "something cheaper", category: "other" },
        ],
      },
      {
        stem: "¿Tienen…?",
        english: "Do you have…? (to a shop)",
        hints: {
          que: [
            { es: "esto en otro color", en: "this in another color" },
            { es: "pilas", en: "batteries" },
            { es: "algo más barato", en: "something cheaper" },
          ],
        },
        completions: [
          { es: "esto en otro color", en: "this in another color", category: "other" },
          { es: "pilas", en: "batteries", category: "other" },
          { es: "algo más barato", en: "something cheaper", category: "other" },
          { es: "otra talla", en: "another size", category: "other" },
          { es: "esto en azul", en: "this in blue", category: "other" },
        ],
      },
      {
        stem: "¿Dónde encuentro…?",
        english: "Where do I find…?",
        hints: {
          que: [
            { es: "la leche", en: "the milk" },
            { es: "el papel de regalo", en: "the wrapping paper" },
            { es: "la salsa picante", en: "the hot sauce" },
          ],
        },
        completions: [
          { es: "la leche", en: "the milk", category: "food" },
          { es: "el papel de regalo", en: "the wrapping paper", category: "other" },
          { es: "la salsa picante", en: "the hot sauce", category: "food" },
          { es: "los cuadernos", en: "the notebooks", category: "other" },
          { es: "el pan", en: "the bread", category: "food" },
        ],
      },
      {
        stem: "¿Me puede mostrar…?",
        english: "Can you show me…? (usted)",
        hints: {
          que: [
            { es: "ese anillo", en: "that ring" },
            { es: "cómo funciona", en: "how it works" },
            { es: "otra talla", en: "another size" },
          ],
        },
        completions: [
          { es: "ese anillo", en: "that ring", category: "other" },
          { es: "cómo funciona", en: "how it works", category: "other" },
          { es: "otra talla", en: "another size", category: "other" },
          { es: "ese modelo en rojo", en: "that model in red", category: "other" },
          { es: "la diferencia entre estos dos", en: "the difference between these two", category: "other" },
        ],
      },
      {
        stem: "Me llevo…",
        english: "I'll take…",
        hints: {
          que: [
            { es: "este", en: "this one" },
            { es: "los dos", en: "both" },
            { es: "el azul, gracias", en: "the blue one, thanks" },
          ],
        },
        completions: [
          { es: "este", en: "this one", category: "other" },
          { es: "los dos", en: "both", category: "other" },
          { es: "el azul, gracias", en: "the blue one, thanks", category: "other" },
          { es: "el más barato", en: "the cheaper one", category: "other" },
          { es: "estos tres", en: "these three", category: "other" },
        ],
      },
    ],
  },
  {
    day: 24,
    theme: "Getting Around",
    stems: [
      {
        stem: "¿Cómo llego a…?",
        english: "How do I get to…?",
        hints: {
          que: [
            { es: "la estación de tren", en: "the train station" },
            { es: "el aeropuerto desde aquí", en: "the airport from here" },
            { es: "la terminal de autobuses", en: "the bus terminal" },
          ],
        },
        completions: [
          { es: "la estación de tren", en: "the train station", category: "other" },
          { es: "el aeropuerto desde aquí", en: "the airport from here", category: "activity" },
          { es: "la terminal de autobuses", en: "the bus terminal", category: "other" },
          { es: "el centro", en: "downtown", category: "other" },
          { es: "cambridge", en: "Cambridge", category: "other" },
        ],
      },
      {
        stem: "¿Este tren va a…?",
        english: "Does this train go to…?",
        hints: {
          que: [
            { es: "el centro", en: "downtown" },
            { es: "cambridge o tengo que cambiar", en: "Cambridge or do I need to transfer" },
            { es: "hacia el norte", en: "northbound" },
          ],
        },
        completions: [
          { es: "el centro", en: "downtown", category: "other" },
          { es: "cambridge o tengo que cambiar", en: "Cambridge or do I need to transfer", category: "activity" },
          { es: "hacia el norte", en: "northbound", category: "other" },
          { es: "south station", en: "South Station", category: "other" },
          { es: "la última parada", en: "the last stop", category: "other" },
        ],
      },
      {
        stem: "Necesito llegar a…",
        english: "I need to get to…",
        hints: {
          que: [
            { es: "la escuela antes de las ocho", en: "school before eight" },
            { es: "el aeropuerto a las seis", en: "the airport at six" },
            { es: "temprano mañana", en: "early tomorrow" },
          ],
          cuando: [
            { es: "a tiempo", en: "on time" },
            { es: "antes de las ocho", en: "before eight" },
          ],
        },
        completions: [
          { es: "la escuela antes de las ocho", en: "school before eight", category: "time" },
          { es: "el aeropuerto a las seis", en: "the airport at six", category: "time" },
          { es: "temprano mañana", en: "early tomorrow", category: "time" },
          { es: "la reunión a las cuatro", en: "the meeting at four", category: "time" },
          { es: "mi clase sin retrasarme", en: "my class without being late", category: "time" },
        ],
      },
      {
        stem: "Queda…",
        english: "It's (located)…",
        hints: {
          que: [
            { es: "cerca del parque", en: "near the park" },
            { es: "a dos cuadras de aquí", en: "two blocks from here" },
            { es: "lejos, mejor toma el metro", en: "far — better take the subway" },
          ],
        },
        completions: [
          { es: "cerca del parque", en: "near the park", category: "other" },
          { es: "a dos cuadras de aquí", en: "two blocks from here", category: "other" },
          { es: "lejos, mejor toma el metro", en: "far — better take the subway", category: "other" },
          { es: "al final de esta calle", en: "at the end of this street", category: "other" },
          { es: "en la esquina", en: "on the corner", category: "other" },
        ],
      },
      {
        stem: "Está a … de…",
        english: "It's … (away) from…",
        hints: {
          que: [
            { es: "diez minutos de mi casa", en: "ten minutes from my house" },
            { es: "tres paradas de aquí", en: "three stops from here" },
            { es: "una hora de boston en tren", en: "an hour from Boston by train" },
          ],
        },
        completions: [
          { es: "diez minutos de mi casa", en: "ten minutes from my house", category: "time" },
          { es: "tres paradas de aquí", en: "three stops from here", category: "other" },
          { es: "una hora de boston en tren", en: "an hour from Boston by train", category: "time" },
          { es: "cinco minutos caminando", en: "five minutes on foot", category: "time" },
          { es: "dos cuadras de la escuela", en: "two blocks from the school", category: "other" },
        ],
      },
    ],
  },
  {
    day: 25,
    theme: "With Families (usted)",
    stems: [
      {
        stem: "¿Me puede firmar…?",
        english: "Could you sign … for me? (usted)",
        hints: {
          que: [
            { es: "este formulario, por favor", en: "this form, please" },
            { es: "el permiso para la excursión", en: "the permission slip for the field trip" },
            { es: "aquí, cuando tenga un momento", en: "here, when you have a moment" },
          ],
        },
        completions: [
          { es: "este formulario, por favor", en: "this form, please", category: "other" },
          { es: "el permiso para la excursión", en: "the permission slip for the field trip", category: "other" },
          { es: "aquí, cuando tenga un momento", en: "here, when you have a moment", category: "time" },
          { es: "esta hoja", en: "this sheet", category: "other" },
          { es: "el documento de autorización", en: "the authorization document", category: "other" },
        ],
      },
      {
        stem: "Su hijo/a necesita…",
        english: "Your son/daughter needs… (usted)",
        hints: {
          que: [
            { es: "practicar la lectura en casa", en: "to practice reading at home" },
            { es: "traer el cuaderno mañana", en: "to bring the notebook tomorrow" },
            { es: "más apoyo con la escritura", en: "more support with writing" },
          ],
        },
        completions: [
          { es: "practicar la lectura en casa", en: "to practice reading at home", category: "activity" },
          { es: "traer el cuaderno mañana", en: "to bring the notebook tomorrow", category: "other" },
          { es: "más apoyo con la escritura", en: "more support with writing", category: "activity" },
          { es: "llegar un poco más temprano", en: "to arrive a little earlier", category: "time" },
          { es: "más práctica con las matemáticas", en: "more practice with math", category: "activity" },
        ],
      },
      {
        stem: "La reunión es…",
        english: "The meeting is…",
        hints: {
          que: [
            { es: "el jueves a las cuatro", en: "on Thursday at four" },
            { es: "en el salón doce", en: "in room twelve" },
            { es: "corta, media hora nada más", en: "short, just half an hour" },
          ],
          cuando: [
            { es: "el jueves", en: "on Thursday" },
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "el jueves a las cuatro", en: "on Thursday at four", category: "time" },
          { es: "en el salón doce", en: "in room twelve", category: "other" },
          { es: "corta, media hora nada más", en: "short, just half an hour", category: "time" },
          { es: "por la tarde", en: "in the afternoon", category: "time" },
          { es: "mañana a las tres", en: "tomorrow at three", category: "time" },
        ],
      },
      {
        stem: "¿Puede venir…?",
        english: "Can you come…? (usted)",
        hints: {
          que: [
            { es: "el martes por la tarde", en: "Tuesday afternoon" },
            { es: "unos minutos antes", en: "a few minutes early" },
            { es: "a la presentación de los estudiantes", en: "to the students' presentation" },
          ],
          cuando: [
            { es: "el martes", en: "on Tuesday" },
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: "el martes por la tarde", en: "Tuesday afternoon", category: "time" },
          { es: "unos minutos antes", en: "a few minutes early", category: "time" },
          { es: "a la presentación de los estudiantes", en: "to the students' presentation", category: "other" },
          { es: "a la conferencia", en: "to the conference", category: "other" },
          { es: "el viernes por la mañana", en: "Friday morning", category: "time" },
        ],
      },
      {
        stem: "Le voy a mandar…",
        english: "I'm going to send you… (usted)",
        hints: {
          que: [
            { es: "un mensaje con la fecha", en: "a message with the date" },
            { es: "la información por correo", en: "the information by email" },
            { es: "fotos del proyecto de su hija", en: "photos of your daughter's project" },
          ],
        },
        completions: [
          { es: "un mensaje con la fecha", en: "a message with the date", category: "other" },
          { es: "la información por correo", en: "the information by email", category: "other" },
          { es: "fotos del proyecto de su hija", en: "photos of your daughter's project", category: "other" },
          { es: "los materiales esta tarde", en: "the materials this afternoon", category: "other" },
          { es: "un recordatorio mañana", en: "a reminder tomorrow", category: "time" },
        ],
      },
    ],
  },
  {
    day: 26,
    theme: "Favors",
    stems: [
      {
        stem: "¿Me haces un favor…?",
        english: "Will you do me a favor…?",
        hints: {
          que: [
            { es: "es cortito", en: "it's quick" },
            { es: "cuando tengas tiempo", en: "when you have time" },
          ],
        },
        completions: [
          { es: "es cortito", en: "it's quick", category: "other" },
          { es: "cuando tengas tiempo", en: "when you have time", category: "time" },
          { es: "un momentito", en: "for a sec", category: "time" },
          { es: "con esto", en: "with this", category: "other" },
          { es: "rápido", en: "real quick", category: "time" },
        ],
      },
      {
        stem: "¿Me prestas…?",
        english: "Will you lend me…?",
        hints: {
          que: [
            { es: "un bolígrafo", en: "a pen" },
            { es: "tu cargador un momento", en: "your charger for a moment" },
            { es: "ese libro cuando lo termines", en: "that book when you finish it" },
          ],
        },
        completions: [
          { es: "un bolígrafo", en: "a pen", category: "other" },
          { es: "tu cargador un momento", en: "your charger for a moment", category: "other" },
          { es: "ese libro cuando lo termines", en: "that book when you finish it", category: "other" },
          { es: "cinco dólares", en: "five dollars", category: "other" },
          { es: "tu paraguas", en: "your umbrella", category: "other" },
        ],
      },
      {
        stem: "¿Me acompañas a…?",
        english: "Will you come with me to…?",
        hints: {
          que: [
            { es: "la farmacia", en: "the pharmacy" },
            { es: "comprar el regalo", en: "buy the gift" },
            { es: "el mercado el sábado", en: "the market on Saturday" },
          ],
        },
        completions: [
          { es: "la farmacia", en: "the pharmacy", category: "other" },
          { es: "comprar el regalo", en: "buy the gift", category: "activity" },
          { es: "el mercado el sábado", en: "the market on Saturday", category: "activity" },
          { es: "la tienda", en: "the store", category: "other" },
          { es: "caminar un rato", en: "walk for a bit", category: "activity" },
        ],
      },
      {
        stem: "¿Te importa si…?",
        english: "Do you mind if…?",
        hints: {
          que: [
            { es: "abro la ventana", en: "I open the window" },
            { es: "llegamos un poco tarde", en: "we arrive a little late" },
            { es: "invito a mi vecina", en: "I invite my neighbor" },
          ],
        },
        completions: [
          { es: "abro la ventana", en: "I open the window", category: "other" },
          { es: "llegamos un poco tarde", en: "we arrive a little late", category: "time" },
          { es: "invito a mi vecina", en: "I invite my neighbor", category: "other" },
          { es: "me siento aquí", en: "I sit here", category: "other" },
          { es: "cambiamos de mesa", en: "we change tables", category: "other" },
        ],
      },
      {
        stem: "Te agradezco…",
        english: "I'm grateful (to you) for…",
        hints: {
          que: [
            { es: "la ayuda", en: "the help" },
            { es: "mucho el consejo", en: "so much for the advice" },
            { es: "la paciencia conmigo", en: "your patience with me" },
          ],
        },
        completions: [
          { es: "la ayuda", en: "the help", category: "other" },
          { es: "mucho el consejo", en: "so much for the advice", category: "other" },
          { es: "la paciencia conmigo", en: "your patience with me", category: "other" },
          { es: "que hayas venido", en: "that you came", category: "other" },
          { es: "tu tiempo", en: "your time", category: "time" },
        ],
      },
    ],
  },
  {
    day: 27,
    theme: "Eating Out",
    stems: [
      {
        stem: "Una mesa para…",
        english: "A table for…",
        hints: {
          que: [
            { es: "dos, por favor", en: "two, please" },
            { es: "cuatro, cerca de la ventana si se puede", en: "four, by the window if possible" },
            { es: "una — sí, solo yo", en: "one — yes, just me" },
          ],
        },
        completions: [
          { es: "dos, por favor", en: "two, please", category: "other" },
          { es: "cuatro, cerca de la ventana si se puede", en: "four, by the window if possible", category: "other" },
          { es: "una — sí, solo yo", en: "one — yes, just me", category: "other" },
          { es: "tres", en: "three", category: "other" },
          { es: "dos, en la terraza", en: "two, on the patio", category: "other" },
        ],
      },
      {
        stem: "¿Qué me recomienda…?",
        english: "What do you recommend…? (usted)",
        hints: {
          que: [
            { es: "de postre", en: "for dessert" },
            { es: "si me gusta lo picante", en: "if I like spicy food" },
          ],
        },
        completions: [
          { es: "de postre", en: "for dessert", category: "food" },
          { es: "si me gusta lo picante", en: "if I like spicy food", category: "food" },
          { es: "para empezar", en: "to start with", category: "food" },
          { es: "de la carta", en: "from the menu", category: "food" },
          { es: "para alguien vegetariano", en: "for someone vegetarian", category: "food" },
        ],
      },
      {
        stem: "Sin…, por favor",
        english: "Without…, please",
        hints: {
          que: [
            { es: "cebolla", en: "onion" },
            { es: "hielo", en: "ice" },
            { es: "cilantro", en: "cilantro" },
          ],
        },
        completions: [
          { es: "cebolla", en: "onion", category: "food" },
          { es: "hielo", en: "ice", category: "food" },
          { es: "cilantro", en: "cilantro", category: "food" },
          { es: "queso", en: "cheese", category: "food" },
          { es: "picante", en: "spice / heat", category: "food" },
        ],
      },
      {
        stem: "¿Está incluido…?",
        english: "Is … included?",
        hints: {
          que: [
            { es: "la propina", en: "the tip" },
            { es: "el postre en el menú del día", en: "dessert in the daily special" },
            { es: "el desayuno", en: "breakfast" },
          ],
        },
        completions: [
          { es: "la propina", en: "the tip", category: "other" },
          { es: "el postre en el menú del día", en: "dessert in the daily special", category: "food" },
          { es: "el desayuno", en: "breakfast", category: "food" },
          { es: "el servicio", en: "the service charge", category: "other" },
          { es: "el pan", en: "the bread", category: "food" },
        ],
      },
      {
        stem: "¿Nos trae…?",
        english: "Could you bring us…?",
        hints: {
          que: [
            { es: "la cuenta, por favor", en: "the check, please" },
            { es: "más pan, por favor", en: "more bread, please" },
            { es: "la cuenta cuando pueda", en: "the check when you can" },
          ],
        },
        completions: [
          { es: "la cuenta, por favor", en: "the check, please", category: "other" },
          { es: "más pan, por favor", en: "more bread, please", category: "food" },
          { es: "la cuenta cuando pueda", en: "the check when you can", category: "other" },
          { es: "agua para la mesa", en: "water for the table", category: "food" },
          { es: "dos cucharas más", en: "two more spoons", category: "other" },
        ],
      },
    ],
  },
  {
    day: 28,
    theme: "Repaso: Asking",
    stems: [
      {
        stem: "Me da…, por favor",
        english: "I'll have…, please",
        hints: {
          que: [
            { es: "dos empanadas", en: "two empanadas" },
            { es: "un boleto para las tres", en: "a ticket for three o'clock" },
            { es: "una bolsa", en: "a bag" },
          ],
        },
        completions: [
          { es: "dos empanadas", en: "two empanadas", category: "food" },
          { es: "un boleto para las tres", en: "a ticket for three o'clock", category: "other" },
          { es: "una bolsa", en: "a bag", category: "other" },
          { es: "uno de cada", en: "one of each", category: "food" },
          { es: "tres tamales", en: "three tamales", category: "food" },
        ],
      },
      {
        stem: "Estoy buscando…",
        english: "I'm looking for…",
        hints: {
          que: [
            { es: "la sección de niños", en: "the children's section" },
            { es: "un vestido para una boda", en: "a dress for a wedding" },
            { es: "un lugar tranquilo para leer", en: "a quiet place to read" },
          ],
        },
        completions: [
          { es: "la sección de niños", en: "the children's section", category: "other" },
          { es: "un vestido para una boda", en: "a dress for a wedding", category: "other" },
          { es: "un lugar tranquilo para leer", en: "a quiet place to read", category: "other" },
          { es: "la salida", en: "the exit", category: "other" },
          { es: "algo para regalar", en: "something to give as a gift", category: "other" },
        ],
      },
      {
        stem: "¿Cómo llego a…?",
        english: "How do I get to…?",
        hints: {
          que: [
            { es: "la playa desde aquí", en: "the beach from here" },
            { es: "el hotel si no hay taxis", en: "the hotel if there are no taxis" },
            { es: "el mercado central", en: "the central market" },
          ],
        },
        completions: [
          { es: "la playa desde aquí", en: "the beach from here", category: "activity" },
          { es: "el hotel si no hay taxis", en: "the hotel if there are no taxis", category: "activity" },
          { es: "el mercado central", en: "the central market", category: "other" },
          { es: "la estación más cercana", en: "the nearest station", category: "other" },
          { es: "el museo", en: "the museum", category: "other" },
        ],
      },
      {
        stem: "¿Me prestas…?",
        english: "Will you lend me…?",
        hints: {
          que: [
            { es: "tu paraguas", en: "your umbrella" },
            { es: "cinco dólares", en: "five dollars" },
            { es: "tus apuntes de la reunión", en: "your notes from the meeting" },
          ],
        },
        completions: [
          { es: "tu paraguas", en: "your umbrella", category: "other" },
          { es: "cinco dólares", en: "five dollars", category: "other" },
          { es: "tus apuntes de la reunión", en: "your notes from the meeting", category: "other" },
          { es: "tu cargador", en: "your charger", category: "other" },
          { es: "un bolígrafo", en: "a pen", category: "other" },
        ],
      },
      {
        stem: "¿Qué me recomienda…?",
        english: "What do you recommend…? (usted)",
        hints: {
          que: [
            { es: "para llevar a casa", en: "to take home" },
            { es: "de la región", en: "from the region" },
            { es: "para alguien que apenas está aprendiendo español", en: "for someone just learning Spanish" },
          ],
        },
        completions: [
          { es: "para llevar a casa", en: "to take home", category: "food" },
          { es: "de la región", en: "from the region", category: "food" },
          { es: "para alguien que apenas está aprendiendo español", en: "for someone just learning Spanish", category: "food" },
          { es: "de postre", en: "for dessert", category: "food" },
          { es: "si no como carne", en: "if I don't eat meat", category: "food" },
        ],
      },
    ],
  },
  {
    day: 29,
    theme: "Good News",
    stems: [
      {
        stem: "¡Qué bueno que…!",
        english: "I'm so glad that…!",
        hints: {
          que: [
            { es: "viniste", en: "you came" },
            { es: "pasaste el examen", en: "you passed the exam" },
            { es: "ya te sientes mejor", en: "you're feeling better now" },
          ],
        },
        completions: [
          { es: "viniste", en: "you came", category: "other" },
          { es: "pasaste el examen", en: "you passed the exam", category: "other" },
          { es: "ya te sientes mejor", en: "you're feeling better now", category: "other" },
          { es: "llegaste bien", en: "you arrived safely", category: "other" },
          { es: "encontraste apartamento", en: "you found an apartment", category: "other" },
        ],
      },
      {
        stem: "¡Felicidades por…!",
        english: "Congratulations on…!",
        hints: {
          que: [
            { es: "el trabajo nuevo", en: "the new job" },
            { es: "tu graduación", en: "your graduation" },
            { es: "el bebé", en: "the baby" },
          ],
        },
        completions: [
          { es: "el trabajo nuevo", en: "the new job", category: "other" },
          { es: "tu graduación", en: "your graduation", category: "other" },
          { es: "el bebé", en: "the baby", category: "other" },
          { es: "el ascenso", en: "the promotion", category: "other" },
          { es: "tu proyecto", en: "your project", category: "other" },
        ],
      },
      {
        stem: "Me alegro por…",
        english: "I'm happy for…",
        hints: {
          que: [
            { es: "ti", en: "you" },
            { es: "ustedes dos", en: "you two" },
            { es: "tu familia", en: "your family" },
          ],
        },
        completions: [
          { es: "ti", en: "you", category: "other" },
          { es: "ustedes dos", en: "you two", category: "other" },
          { es: "tu familia", en: "your family", category: "other" },
          { es: "todos", en: "everyone", category: "other" },
          { es: "el equipo", en: "the team", category: "other" },
        ],
      },
      {
        stem: "¡No me digas! Cuéntame…",
        english: "No way! Tell me…",
        hints: {
          que: [
            { es: "todo", en: "everything" },
            { es: "cómo pasó", en: "how it happened" },
            { es: "más", en: "more" },
          ],
        },
        completions: [
          { es: "todo", en: "everything", category: "other" },
          { es: "cómo pasó", en: "how it happened", category: "other" },
          { es: "más", en: "more", category: "other" },
          { es: "los detalles", en: "the details", category: "other" },
          { es: "cómo te fue", en: "how it went for you", category: "other" },
        ],
      },
      {
        stem: "Qué emoción…",
        english: "How exciting…",
        hints: {
          que: [
            { es: "ya quiero verlo", en: "I can't wait to see it" },
            { es: "lo de tu viaje", en: "your trip news" },
          ],
          cuando: [
            { es: "¿cuándo empiezas?", en: "when do you start?" },
          ],
        },
        completions: [
          { es: "ya quiero verlo", en: "I can't wait to see it", category: "other" },
          { es: "lo de tu viaje", en: "your trip news", category: "activity" },
          { es: "me muero por saber más", en: "I'm dying to know more", category: "other" },
          { es: "no veo la hora", en: "I can't wait", category: "other" },
          { es: "qué buena noticia", en: "what great news", category: "other" },
        ],
      },
    ],
  },
  {
    day: 30,
    theme: "Hard News",
    stems: [
      {
        stem: "Lo siento mucho por…",
        english: "I'm so sorry about…",
        hints: {
          que: [
            { es: "tu pérdida", en: "your loss" },
            { es: "lo que pasó", en: "what happened" },
            { es: "las malas noticias", en: "the bad news" },
          ],
        },
        completions: [
          { es: "tu pérdida", en: "your loss", category: "other" },
          { es: "lo que pasó", en: "what happened", category: "other" },
          { es: "las malas noticias", en: "the bad news", category: "other" },
          { es: "esa semana tan dura", en: "that hard week", category: "other" },
          { es: "todo esto", en: "all of this", category: "other" },
        ],
      },
      {
        stem: "Qué difícil…",
        english: "How hard…",
        hints: {
          que: [
            { es: "no sé qué decir", en: "I don't know what to say" },
            { es: "lo que estás pasando", en: "what you're going through" },
            { es: "para toda la familia", en: "for the whole family" },
          ],
        },
        completions: [
          { es: "no sé qué decir", en: "I don't know what to say", category: "other" },
          { es: "lo que estás pasando", en: "what you're going through", category: "other" },
          { es: "para toda la familia", en: "for the whole family", category: "other" },
          { es: "esa decisión", en: "that decision", category: "other" },
          { es: "cuando pasa todo a la vez", en: "when everything happens at once", category: "other" },
        ],
      },
      {
        stem: "Espero que se mejore…",
        english: "I hope they get better…",
        hints: {
          que: [
            { es: "pronto", en: "soon" },
            { es: "tu mamá", en: "your mom" },
            { es: "todo en casa", en: "everything at home" },
          ],
          cuando: [
            { es: "rápido", en: "quickly" },
          ],
        },
        completions: [
          { es: "pronto", en: "soon", category: "other" },
          { es: "tu mamá", en: "your mom", category: "other" },
          { es: "todo en casa", en: "everything at home", category: "other" },
          { es: "tu situación", en: "your situation", category: "other" },
          { es: "en poco tiempo", en: "in a little while", category: "time" },
        ],
      },
      {
        stem: "Cuenta conmigo para…",
        english: "Count on me for…",
        hints: {
          que: [
            { es: "lo que necesites", en: "whatever you need" },
            { es: "cuidar a los niños", en: "watching the kids" },
            { es: "lo que sea", en: "anything" },
          ],
        },
        completions: [
          { es: "lo que necesites", en: "whatever you need", category: "other" },
          { es: "cuidar a los niños", en: "watching the kids", category: "activity" },
          { es: "lo que sea", en: "anything", category: "other" },
          { es: "ayudarte mañana", en: "helping you tomorrow", category: "activity" },
          { es: "escuchar", en: "listening", category: "other" },
        ],
      },
      {
        stem: "Si necesitas algo…",
        english: "If you need anything…",
        hints: {
          que: [
            { es: "me avisas", en: "let me know" },
            { es: "aquí estoy", en: "I'm here" },
            { es: "llámame a cualquier hora", en: "call me anytime" },
          ],
        },
        completions: [
          { es: "me avisas", en: "let me know", category: "other" },
          { es: "aquí estoy", en: "I'm here", category: "other" },
          { es: "llámame a cualquier hora", en: "call me anytime", category: "other" },
          { es: "escríbeme", en: "write me", category: "other" },
          { es: "dímelo", en: "tell me", category: "other" },
        ],
      },
    ],
  },
  {
    day: 31,
    theme: "Agreeing",
    stems: [
      {
        stem: "Estoy de acuerdo con…",
        english: "I agree with…",
        hints: {
          que: [
            { es: "ti", en: "you" },
            { es: "esa idea", en: "that idea" },
            { es: "casi todo lo que dijiste", en: "almost everything you said" },
          ],
        },
        completions: [
          { es: "ti", en: "you", category: "opinion" },
          { es: "esa idea", en: "that idea", category: "opinion" },
          { es: "casi todo lo que dijiste", en: "almost everything you said", category: "opinion" },
          { es: "tu plan", en: "your plan", category: "opinion" },
          { es: "lo que propones", en: "what you're proposing", category: "opinion" },
        ],
      },
      {
        stem: "Tienes razón en…",
        english: "You're right about…",
        hints: {
          que: [
            { es: "eso", en: "that" },
            { es: "lo del horario", en: "the schedule thing" },
            { es: "no lo había pensado así", en: "I hadn't thought of it that way" },
          ],
        },
        completions: [
          { es: "eso", en: "that", category: "opinion" },
          { es: "lo del horario", en: "the schedule thing", category: "opinion" },
          { es: "no lo había pensado así", en: "I hadn't thought of it that way", category: "opinion" },
          { es: "lo del precio", en: "the price thing", category: "opinion" },
          { es: "todo eso", en: "all of that", category: "opinion" },
        ],
      },
      {
        stem: "Claro que…",
        english: "Of course…",
        hints: {
          que: [
            { es: "sí", en: "yes" },
            { es: "vale la pena", en: "it's worth it" },
            { es: "puedes", en: "you can" },
          ],
        },
        completions: [
          { es: "sí", en: "yes", category: "opinion" },
          { es: "vale la pena", en: "it's worth it", category: "opinion" },
          { es: "puedes", en: "you can", category: "other" },
          { es: "cuenta conmigo", en: "count on me", category: "other" },
          { es: "lo intentaremos", en: "we'll try", category: "activity" },
        ],
      },
      {
        stem: "Yo también…",
        english: "Me too / I also…",
        hints: {
          que: [
            { es: "lo creo", en: "I believe it too" },
            { es: "estoy cansada hoy", en: "I'm tired today too" },
            { es: "quiero ir", en: "I want to go too" },
          ],
        },
        completions: [
          { es: "lo creo", en: "I believe it too", category: "opinion" },
          { es: "estoy cansada hoy", en: "I'm tired today too", category: "other" },
          { es: "quiero ir", en: "I want to go too", category: "activity" },
          { es: "pensé lo mismo", en: "I thought the same thing", category: "opinion" },
          { es: "necesito un descanso", en: "I need a break too", category: "other" },
        ],
      },
      {
        stem: "A mí también…",
        english: "Me too (with gustar-verbs)",
        hints: {
          que: [
            { es: "me gusta", en: "I like it too" },
            { es: "me encanta ese lugar", en: "I love that place too" },
            { es: "me gusta el café", en: "I like coffee too" },
          ],
        },
        completions: [
          { es: "me gusta", en: "I like it too", category: "opinion" },
          { es: "me encanta ese lugar", en: "I love that place too", category: "opinion" },
          { es: "me gusta caminar por la mañana", en: "I like walking in the morning too", category: "activity" },
          { es: "me parece bien", en: "it seems fine to me too", category: "opinion" },
          { es: "me interesa", en: "I'm interested too", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 32,
    theme: "Disagreeing Softly",
    stems: [
      {
        stem: "Sí, pero…",
        english: "Yes, but…",
        hints: {
          que: [
            { es: "no es tan fácil", en: "it's not that easy" },
            { es: "hay otra manera de verlo", en: "there's another way to see it" },
            { es: "primero tengo que terminar esto", en: "first I have to finish this" },
          ],
        },
        completions: [
          { es: "no es tan fácil", en: "it's not that easy", category: "opinion" },
          { es: "hay otra manera de verlo", en: "there's another way to see it", category: "opinion" },
          { es: "primero tengo que terminar esto", en: "first I have to finish this", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "opinion" },
          { es: "necesito pensarlo más", en: "I need to think about it more", category: "opinion" },
        ],
      },
      {
        stem: "Depende de…",
        english: "It depends on…",
        hints: {
          que: [
            { es: "cómo lo mires", en: "how you look at it" },
            { es: "la situación", en: "the situation" },
            { es: "el horario", en: "the schedule" },
          ],
        },
        completions: [
          { es: "cómo lo mires", en: "how you look at it", category: "opinion" },
          { es: "la situación", en: "the situation", category: "other" },
          { es: "el horario", en: "the schedule", category: "time" },
          { es: "cuánto tiempo tengas", en: "how much time you have", category: "time" },
          { es: "los detalles", en: "the details", category: "other" },
        ],
      },
      {
        stem: "No estoy tan segura de…",
        english: "I'm not so sure about…",
        hints: {
          que: [
            { es: "eso", en: "that" },
            { es: "que sea buena idea", en: "that it's a good idea" },
            { es: "el plan", en: "the plan" },
          ],
        },
        completions: [
          { es: "eso", en: "that", category: "opinion" },
          { es: "que sea buena idea", en: "that it's a good idea", category: "opinion" },
          { es: "el plan", en: "the plan", category: "opinion" },
          { es: "que funcione así", en: "that it works that way", category: "opinion" },
          { es: "tener razón ahí", en: "being right about that", category: "opinion" },
        ],
      },
      {
        stem: "No sé, creo que…",
        english: "I don't know, I think…",
        hints: {
          que: [
            { es: "es más complicado", en: "it's more complicated" },
            { es: "hay mejores opciones", en: "there are better options" },
            { es: "yo lo haría diferente", en: "I'd do it differently" },
          ],
        },
        completions: [
          { es: "es más complicado", en: "it's more complicated", category: "opinion" },
          { es: "hay mejores opciones", en: "there are better options", category: "opinion" },
          { es: "yo lo haría diferente", en: "I'd do it differently", category: "opinion" },
          { es: "necesitamos más tiempo", en: "we need more time", category: "time" },
          { es: "podemos esperar", en: "we can wait", category: "opinion" },
        ],
      },
      {
        stem: "En mi caso…",
        english: "In my case…",
        hints: {
          que: [
            { es: "fue al revés", en: "it was the opposite" },
            { es: "funciona mejor por la mañana", en: "it works better in the morning" },
            { es: "el café es obligatorio", en: "coffee is mandatory" },
          ],
        },
        completions: [
          { es: "fue al revés", en: "it was the opposite", category: "other" },
          { es: "funciona mejor por la mañana", en: "it works better in the morning", category: "time" },
          { es: "el café es obligatorio", en: "coffee is mandatory", category: "food" },
          { es: "prefiero ir despacio", en: "I prefer to go slowly", category: "opinion" },
          { es: "me ayuda practicar en voz alta", en: "practicing out loud helps me", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 33,
    theme: "Showing Interest",
    stems: [
      {
        stem: "¿En serio?",
        english: "Really?",
        hints: {
          que: [
            { es: "no lo puedo creer", en: "I can't believe it" },
            { es: "¿y qué dijiste?", en: "and what did you say?" },
            { es: "¿cuándo pasó eso?", en: "when did that happen?" },
          ],
        },
        completions: [
          { es: "no lo puedo creer", en: "I can't believe it", category: "other" },
          { es: "¿y qué dijiste?", en: "and what did you say?", category: "other" },
          { es: "¿cuándo pasó eso?", en: "when did that happen?", category: "time" },
          { es: "cuéntame más", en: "tell me more", category: "other" },
          { es: "qué locura", en: "how crazy", category: "other" },
        ],
      },
      {
        stem: "¿Y luego qué pasó con…?",
        english: "And then what happened with…?",
        hints: {
          que: [
            { es: "tu vecino", en: "your neighbor" },
            { es: "la entrevista", en: "the interview" },
            { es: "el proyecto", en: "the project" },
          ],
        },
        completions: [
          { es: "tu vecino", en: "your neighbor", category: "other" },
          { es: "la entrevista", en: "the interview", category: "other" },
          { es: "el proyecto", en: "the project", category: "other" },
          { es: "la mudanza", en: "the move", category: "other" },
          { es: "el examen", en: "the exam", category: "other" },
        ],
      },
      {
        stem: "Cuéntame más de…",
        english: "Tell me more about…",
        hints: {
          que: [
            { es: "tu viaje", en: "your trip" },
            { es: "esa amiga", en: "that friend" },
            { es: "tu nuevo trabajo", en: "your new job" },
          ],
        },
        completions: [
          { es: "tu viaje", en: "your trip", category: "activity" },
          { es: "esa amiga", en: "that friend", category: "other" },
          { es: "tu nuevo trabajo", en: "your new job", category: "other" },
          { es: "tu familia", en: "your family", category: "other" },
          { es: "cómo te sientes", en: "how you're feeling", category: "other" },
        ],
      },
      {
        stem: "¿Cómo te fue con…?",
        english: "How did it go with…?",
        hints: {
          que: [
            { es: "el doctor", en: "the doctor" },
            { es: "el examen", en: "the exam" },
            { es: "la mudanza", en: "the move" },
          ],
        },
        completions: [
          { es: "el doctor", en: "the doctor", category: "other" },
          { es: "el examen", en: "the exam", category: "other" },
          { es: "la mudanza", en: "the move", category: "other" },
          { es: "la presentación", en: "the presentation", category: "other" },
          { es: "tu mamá el domingo", en: "your mom on Sunday", category: "other" },
        ],
      },
      {
        stem: "Suena…",
        english: "That sounds…",
        hints: {
          que: [
            { es: "increíble", en: "incredible" },
            { es: "complicado", en: "complicated" },
            { es: "a que necesitas unas vacaciones", en: "like you need a vacation" },
          ],
        },
        completions: [
          { es: "increíble", en: "incredible", category: "other" },
          { es: "complicado", en: "complicated", category: "other" },
          { es: "a que necesitas unas vacaciones", en: "like you need a vacation", category: "other" },
          { es: "emocionante", en: "exciting", category: "other" },
          { es: "difícil", en: "hard", category: "other" },
        ],
      },
    ],
  },
  {
    day: 34,
    theme: "Encouraging",
    stems: [
      {
        stem: "Lo estás haciendo…",
        english: "You're doing it…",
        hints: {
          que: [
            { es: "muy bien", en: "very well" },
            { es: "mejor de lo que crees", en: "better than you think" },
            { es: "con mucho cuidado", en: "with a lot of care" },
          ],
          como: [
            { es: "muy bien", en: "very well" },
            { es: "con calma", en: "calmly" },
          ],
        },
        completions: [
          { es: "muy bien", en: "very well", category: "other" },
          { es: "mejor de lo que crees", en: "better than you think", category: "other" },
          { es: "con mucho cuidado", en: "with a lot of care", category: "other" },
          { es: "genial", en: "great", category: "other" },
          { es: "mejor cada día", en: "better every day", category: "other" },
        ],
      },
      {
        stem: "Vas muy bien con…",
        english: "You're doing great with…",
        hints: {
          que: [
            { es: "la lectura", en: "reading" },
            { es: "el inglés", en: "English" },
            { es: "los verbos", en: "verbs" },
          ],
        },
        completions: [
          { es: "la lectura", en: "reading", category: "activity" },
          { es: "el inglés", en: "English", category: "activity" },
          { es: "los verbos", en: "verbs", category: "activity" },
          { es: "la pronunciación", en: "pronunciation", category: "activity" },
          { es: "las conversaciones", en: "conversations", category: "activity" },
        ],
      },
      {
        stem: "No te preocupes por…",
        english: "Don't worry about…",
        hints: {
          que: [
            { es: "los errores", en: "mistakes" },
            { es: "el examen", en: "the exam" },
            { es: "eso ahora", en: "that right now" },
          ],
        },
        completions: [
          { es: "los errores", en: "mistakes", category: "other" },
          { es: "el examen", en: "the exam", category: "other" },
          { es: "eso ahora", en: "that right now", category: "other" },
          { es: "equivocarte", en: "making mistakes", category: "other" },
          { es: "lo que piensen los demás", en: "what others think", category: "other" },
        ],
      },
      {
        stem: "Sigue practicando…",
        english: "Keep practicing…",
        hints: {
          que: [
            { es: "todos los días", en: "every day" },
            { es: "en voz alta", en: "out loud" },
          ],
          como: [
            { es: "poco a poco", en: "little by little" },
            { es: "con calma", en: "calmly" },
          ],
        },
        completions: [
          { es: "todos los días", en: "every day", category: "time" },
          { es: "en voz alta", en: "out loud", category: "activity" },
          { es: "un poco cada mañana", en: "a little each morning", category: "time" },
          { es: "sin miedo", en: "without fear", category: "other" },
          { es: "vas a llegar", en: "you'll get there", category: "other" },
        ],
      },
      {
        stem: "Cada día… mejor",
        english: "Every day… better",
        hints: {
          que: [
            { es: "hablas", en: "you speak" },
            { es: "entiendes más", en: "you understand more" },
            { es: "un poco", en: "a little" },
          ],
        },
        completions: [
          { es: "hablas", en: "you speak", category: "activity" },
          { es: "entiendes más", en: "you understand more", category: "activity" },
          { es: "un poco", en: "a little", category: "other" },
          { es: "suena más natural", en: "it sounds more natural", category: "activity" },
          { es: "te sientes más segura", en: "you feel more confident", category: "other" },
        ],
      },
    ],
  },
  {
    day: 35,
    theme: "Repaso: Reacting",
    stems: [
      {
        stem: "¡Qué bueno que…!",
        english: "I'm so glad that…!",
        hints: {
          que: [
            { es: "encontraste apartamento", en: "you found an apartment" },
            { es: "te dieron el puesto", en: "you got the job" },
            { es: "llegaste bien", en: "you arrived safely" },
          ],
        },
        completions: [
          { es: "encontraste apartamento", en: "you found an apartment", category: "other" },
          { es: "te dieron el puesto", en: "you got the job", category: "other" },
          { es: "llegaste bien", en: "you arrived safely", category: "other" },
          { es: "pasaste la entrevista", en: "you passed the interview", category: "other" },
          { es: "todo salió bien", en: "everything went well", category: "other" },
        ],
      },
      {
        stem: "Qué difícil…",
        english: "How hard…",
        hints: {
          que: [
            { es: "esa semana, de verdad", en: "that week, really" },
            { es: "decisión", en: "decision" },
            { es: "cuando pasa todo a la vez", en: "when everything happens at once" },
          ],
        },
        completions: [
          { es: "esa semana, de verdad", en: "that week, really", category: "other" },
          { es: "decisión", en: "decision", category: "other" },
          { es: "cuando pasa todo a la vez", en: "when everything happens at once", category: "other" },
          { es: "lo que te pasó", en: "what happened to you", category: "other" },
          { es: "para ti", en: "for you", category: "other" },
        ],
      },
      {
        stem: "Yo también…",
        english: "Me too / I also…",
        hints: {
          que: [
            { es: "tuve una semana así", en: "I had a week like that" },
            { es: "necesito un descanso", en: "I need a break" },
            { es: "pensé lo mismo", en: "I thought the same thing" },
          ],
        },
        completions: [
          { es: "tuve una semana así", en: "I had a week like that", category: "other" },
          { es: "necesito un descanso", en: "I need a break", category: "other" },
          { es: "pensé lo mismo", en: "I thought the same thing", category: "opinion" },
          { es: "estoy agotada", en: "I'm exhausted", category: "other" },
          { es: "me sentí así", en: "I felt that way", category: "other" },
        ],
      },
      {
        stem: "¿Cómo te fue con…?",
        english: "How did it go with…?",
        hints: {
          que: [
            { es: "la presentación al final", en: "the presentation in the end" },
            { es: "tu mamá el domingo", en: "your mom on Sunday" },
            { es: "el resto de la semana", en: "the rest of the week" },
          ],
        },
        completions: [
          { es: "la presentación al final", en: "the presentation in the end", category: "other" },
          { es: "tu mamá el domingo", en: "your mom on Sunday", category: "other" },
          { es: "el resto de la semana", en: "the rest of the week", category: "time" },
          { es: "el médico", en: "the doctor", category: "other" },
          { es: "la conversación difícil", en: "the hard conversation", category: "other" },
        ],
      },
      {
        stem: "No te preocupes por…",
        english: "Don't worry about…",
        hints: {
          que: [
            { es: "contestarme rápido", en: "replying quickly" },
            { es: "la cena, yo llevo algo", en: "dinner — I'll bring something" },
            { es: "lo que piensen los demás", en: "what others think" },
          ],
        },
        completions: [
          { es: "contestarme rápido", en: "replying quickly", category: "other" },
          { es: "la cena, yo llevo algo", en: "dinner — I'll bring something", category: "food" },
          { es: "lo que piensen los demás", en: "what others think", category: "other" },
          { es: "los errores", en: "mistakes", category: "other" },
          { es: "eso ahora", en: "that right now", category: "other" },
        ],
      },
    ],
  },
  {
    day: 36,
    theme: "Step by Step",
    stems: [
      {
        stem: "Primero…",
        english: "First…",
        hints: {
          que: [
            { es: "fui al mercado", en: "went to the market" },
            { es: "desayuné con calma", en: "had a calm breakfast" },
            { es: "revisé mis mensajes", en: "checked my messages" },
          ],
        },
        completions: [
          { es: "fui al mercado", en: "went to the market", category: "other" },
          { es: "desayuné con calma", en: "had a calm breakfast", category: "food" },
          { es: "revisé mis mensajes", en: "checked my messages", category: "other" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
        ],
      },
      {
        stem: "Después…",
        english: "After that…",
        hints: {
          que: [
            { es: "caminé hasta el río", en: "walked to the river" },
            { es: "llamé a una amiga", en: "called a friend" },
            { es: "preparé la cena", en: "made dinner" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "caminé hasta el río", en: "walked to the river", category: "other" },
          { es: "llamé a una amiga", en: "called a friend", category: "other" },
          { es: "preparé la cena", en: "made dinner", category: "food" },
          { es: "un rato después", en: "a little while later", category: "time" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
        ],
      },
      {
        stem: "Luego…",
        english: "Then…",
        hints: {
          que: [
            { es: "vimos una película", en: "watched a movie" },
            { es: "salimos a caminar un rato", en: "went out for a walk" },
            { es: "me puse a leer", en: "settled in to read" },
          ],
        },
        completions: [
          { es: "vimos una película", en: "watched a movie", category: "other" },
          { es: "salimos a caminar un rato", en: "went out for a walk", category: "activity" },
          { es: "me puse a leer", en: "settled in to read", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        hints: {
          que: [
            { es: "todo salió bien", en: "everything turned out fine" },
            { es: "decidimos quedarnos en casa", en: "we decided to stay home" },
            { es: "llegué a tiempo", en: "I made it on time" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "todo salió bien", en: "everything turned out fine", category: "other" },
          { es: "decidimos quedarnos en casa", en: "we decided to stay home", category: "other" },
          { es: "llegué a tiempo", en: "I made it on time", category: "other" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
        ],
      },
      {
        stem: "De repente…",
        english: "Suddenly…",
        hints: {
          que: [
            { es: "empezó a llover", en: "it started to rain" },
            { es: "se fue la luz", en: "the power went out" },
            { es: "todos empezaron a aplaudir", en: "everyone started clapping" },
          ],
        },
        completions: [
          { es: "empezó a llover", en: "it started to rain", category: "other" },
          { es: "se fue la luz", en: "the power went out", category: "other" },
          { es: "todos empezaron a aplaudir", en: "everyone started clapping", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
        ],
      },
    ],
  },
  {
    day: 37,
    theme: "Setting the Scene",
    stems: [
      {
        stem: "Era…",
        english: "It was… (description)",
        hints: {
          que: [
            { es: "un día precioso", en: "a beautiful day" },
            { es: "tarde y no había nadie en la calle", en: "late" },
            { es: "mi primer verano en Boston", en: "my first summer in Boston" },
          ],
          cuando: [
            { es: "un día precioso", en: "a beautiful day" },
            { es: "tarde y no había nadie en la calle", en: "late" },
          ],
        },
        completions: [
          { es: "un día precioso", en: "a beautiful day", category: "time" },
          { es: "tarde y no había nadie en la calle", en: "late", category: "time" },
          { es: "mi primer verano en Boston", en: "my first summer in Boston", category: "time" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
        ],
      },
      {
        stem: "Estaba…",
        english: "I was / it was… (state)",
        hints: {
          que: [
            { es: "nerviosa pero contenta", en: "nervous but happy" },
            { es: "lloviendo y no tenía paraguas", en: "raining and I had no umbrella" },
            { es: "en casa de mi abuela", en: "grandma's house" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "nerviosa pero contenta", en: "nervous but happy", category: "other" },
          { es: "lloviendo y no tenía paraguas", en: "raining and I had no umbrella", category: "other" },
          { es: "en casa de mi abuela", en: "grandma's house", category: "other" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
        ],
      },
      {
        stem: "Había…",
        english: "There was / there were…",
        hints: {
          que: [
            { es: "mucha gente en la plaza", en: "a lot of people in the plaza" },
            { es: "una fila larguísima", en: "a long line" },
            { es: "música por todas partes", en: "music everywhere" },
          ],
        },
        completions: [
          { es: "mucha gente en la plaza", en: "a lot of people in the plaza", category: "other" },
          { es: "una fila larguísima", en: "a long line", category: "other" },
          { es: "música por todas partes", en: "music everywhere", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
        ],
      },
      {
        stem: "Hacía…",
        english: "The weather was… / It had been…",
        hints: {
          que: [
            { es: "muchísimo calor", en: "very hot" },
            { es: "un frío tremendo esa noche", en: "freezing cold" },
            { es: "años que no visitaba Atlanta", en: "it had been years since I'd visited Atlanta" },
          ],
          cuando: [
            { es: "un frío tremendo esa noche", en: "freezing cold" },
          ],
        },
        completions: [
          { es: "muchísimo calor", en: "very hot", category: "other" },
          { es: "un frío tremendo esa noche", en: "freezing cold", category: "time" },
          { es: "años que no visitaba Atlanta", en: "it had been years since I'd visited Atlanta", category: "other" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
        ],
      },
      {
        stem: "Todos los días…",
        english: "Every day… (used to)",
        hints: {
          que: [
            { es: "nadábamos en el lago", en: "we swam in the lake every day" },
            { es: "tomaba el mismo tren", en: "I took the same train every day" },
            { es: "mi abuela hacía café a las seis", en: "my grandmother made coffee at six" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "nadábamos en el lago", en: "we swam in the lake every day", category: "other" },
          { es: "tomaba el mismo tren", en: "I took the same train every day", category: "other" },
          { es: "mi abuela hacía café a las seis", en: "my grandmother made coffee at six", category: "food" },
          { es: "un rato después", en: "a little while later", category: "time" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
        ],
      },
    ],
  },
  {
    day: 38,
    theme: "What Happened",
    stems: [
      {
        stem: "Fui a…",
        english: "I went to…",
        hints: {
          que: [
            { es: "un concierto en el parque", en: "a concert in the park" },
            { es: "visitar a una amiga en Providence", en: "a visit" },
            { es: "l médico por fin", en: "finally went to the doctor" },
          ],
        },
        completions: [
          { es: "un concierto en el parque", en: "a concert in the park", category: "other" },
          { es: "visitar a una amiga en Providence", en: "a visit", category: "other" },
          { es: "l médico por fin", en: "finally went to the doctor", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
        ],
      },
      {
        stem: "Vi…",
        english: "I saw…",
        hints: {
          que: [
            { es: "una ballena desde el barco", en: "a whale from the boat" },
            { es: "a mi vecina en el mercado", en: "ran into my neighbor at the market" },
            { es: "un documental buenísimo anoche", en: "watched a great documentary last night" },
          ],
          cuando: [
            { es: "un documental buenísimo anoche", en: "watched a great documentary last night" },
          ],
        },
        completions: [
          { es: "una ballena desde el barco", en: "a whale from the boat", category: "other" },
          { es: "a mi vecina en el mercado", en: "ran into my neighbor at the market", category: "other" },
          { es: "un documental buenísimo anoche", en: "watched a great documentary last night", category: "time" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
        ],
      },
      {
        stem: "Conocí a…",
        english: "I met…",
        hints: {
          que: [
            { es: "los padres de mi estudiante", en: "my student's parents" },
            { es: "una desarrolladora de Medellín", en: "met a developer from Medellín" },
            { es: "mi vecino nuevo por fin", en: "ran into my neighbor at the market" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "los padres de mi estudiante", en: "my student's parents", category: "other" },
          { es: "una desarrolladora de Medellín", en: "met a developer from Medellín", category: "other" },
          { es: "mi vecino nuevo por fin", en: "ran into my neighbor at the market", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
        ],
      },
      {
        stem: "Me pasó algo…",
        english: "Something … happened to me",
        hints: {
          que: [
            { es: "chistoso en el tren", en: "funny happened to me on the train" },
            { es: "raro esta mañana", en: "something weird happened this morning" },
            { es: "increíble y tengo que contártelo", en: "something incredible — I have to tell you" },
          ],
          cuando: [
            { es: "raro esta mañana", en: "something weird happened this morning" },
          ],
        },
        completions: [
          { es: "chistoso en el tren", en: "funny happened to me on the train", category: "other" },
          { es: "raro esta mañana", en: "something weird happened this morning", category: "time" },
          { es: "increíble y tengo que contártelo", en: "something incredible — I have to tell you", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that…",
        hints: {
          que: [
            { es: "éramos vecinas", en: "it turns out we were neighbors" },
            { es: "el examen era hoy", en: "the exam" },
            { es: "su mamá también es maestra", en: "small world" },
          ],
          cuando: [
            { es: "el examen era hoy", en: "the exam" },
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "éramos vecinas", en: "it turns out we were neighbors", category: "other" },
          { es: "el examen era hoy", en: "the exam", category: "time" },
          { es: "su mamá también es maestra", en: "small world", category: "other" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
        ],
      },
    ],
  },
  {
    day: 39,
    theme: "Scene Meets Event",
    stems: [
      {
        stem: "Estaba… cuando…",
        english: "I was … when…",
        hints: {
          que: [
            { es: "estaba haciendo café cuando sonó el teléfono", en: "making coffee when the phone rang" },
            { es: "estaba caminando al trabajo cuando empezó a nevar", en: "walking" },
            { es: "estaba a punto de salir cuando llegó el paquete", en: "about to leave" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "estaba haciendo café cuando sonó el teléfono", en: "making coffee when the phone rang", category: "food" },
          { es: "estaba caminando al trabajo cuando empezó a nevar", en: "walking", category: "other" },
          { es: "estaba a punto de salir cuando llegó el paquete", en: "about to leave", category: "activity" },
          { es: "un rato después", en: "a little while later", category: "time" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
        ],
      },
      {
        stem: "Mientras…",
        english: "While…",
        hints: {
          que: [
            { es: "cocinaba, escuchaba las noticias", en: "cooking" },
            { es: "esperaba el tren, leí un capítulo entero", en: "waited for the train, I read a whole chapter" },
            { es: "todos dormían, terminé mi proyecto", en: "everyone asleep" },
          ],
        },
        completions: [
          { es: "cocinaba, escuchaba las noticias", en: "cooking", category: "other" },
          { es: "esperaba el tren, leí un capítulo entero", en: "waited for the train, I read a whole chapter", category: "other" },
          { es: "todos dormían, terminé mi proyecto", en: "everyone asleep", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
        ],
      },
      {
        stem: "Justo cuando…",
        english: "Just when…",
        hints: {
          que: [
            { es: "llegué, empezó la lluvia", en: "arriving" },
            { es: "iba a hablar, se cortó la llamada", en: "was about to speak, the call dropped" },
            { es: "encontré asiento, anunciaron mi parada", en: "a seat" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "llegué, empezó la lluvia", en: "arriving", category: "other" },
          { es: "iba a hablar, se cortó la llamada", en: "was about to speak, the call dropped", category: "activity" },
          { es: "encontré asiento, anunciaron mi parada", en: "a seat", category: "other" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
        ],
      },
      {
        stem: "En ese momento…",
        english: "At that moment…",
        hints: {
          que: [
            { es: "entendí todo", en: "understanding" },
            { es: "supe que era el lugar correcto", en: "knew it was the right place" },
            { es: "nadie dijo nada", en: "silence" },
          ],
        },
        completions: [
          { es: "entendí todo", en: "understanding", category: "other" },
          { es: "supe que era el lugar correcto", en: "knew it was the right place", category: "other" },
          { es: "nadie dijo nada", en: "silence", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
        ],
      },
      {
        stem: "Y entonces…",
        english: "And then…",
        hints: {
          que: [
            { es: "todo cambió", en: "everything changed" },
            { es: "ella empezó a reírse", en: "she started laughing" },
            { es: "llegó la sorpresa", en: "the surprise" },
          ],
        },
        completions: [
          { es: "todo cambió", en: "everything changed", category: "other" },
          { es: "ella empezó a reírse", en: "she started laughing", category: "other" },
          { es: "llegó la sorpresa", en: "the surprise", category: "other" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
        ],
      },
    ],
  },
  {
    day: 40,
    theme: "Inside the Story",
    stems: [
      {
        stem: "Pensé que…",
        english: "I thought that…",
        hints: {
          que: [
            { es: "era una broma", en: "it was a joke" },
            { es: "iba a llegar tarde", en: "being late" },
            { es: "ya lo sabías", en: "you knew" },
          ],
          cuando: [
            { es: "iba a llegar tarde", en: "being late" },
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "era una broma", en: "it was a joke", category: "other" },
          { es: "iba a llegar tarde", en: "being late", category: "time" },
          { es: "ya lo sabías", en: "you knew", category: "other" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
        ],
      },
      {
        stem: "No sabía que…",
        english: "I didn't know that…",
        hints: {
          que: [
            { es: "hablabas español", en: "didn't know you spoke Spanish" },
            { es: "era tan fácil", en: "how easy" },
            { es: "vivían tan cerca", en: "how close" },
          ],
        },
        completions: [
          { es: "hablabas español", en: "didn't know you spoke Spanish", category: "other" },
          { es: "era tan fácil", en: "how easy", category: "other" },
          { es: "vivían tan cerca", en: "how close", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
        ],
      },
      {
        stem: "Me di cuenta de que…",
        english: "I realized that…",
        hints: {
          que: [
            { es: "entendí casi todo", en: "realized I understood almost everything" },
            { es: "era la última", en: "the last one" },
            { es: "no estaba sola", en: "not alone" },
          ],
        },
        completions: [
          { es: "entendí casi todo", en: "realized I understood almost everything", category: "other" },
          { es: "era la última", en: "the last one", category: "other" },
          { es: "no estaba sola", en: "not alone", category: "other" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
        ],
      },
      {
        stem: "Casi…",
        english: "I almost…",
        hints: {
          que: [
            { es: "me caigo en el hielo", en: "almost fell on the ice" },
            { es: "pierdo el tren", en: "the train" },
            { es: "lloro de la risa", en: "laughing" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "me caigo en el hielo", en: "almost fell on the ice", category: "other" },
          { es: "pierdo el tren", en: "the train", category: "other" },
          { es: "lloro de la risa", en: "laughing", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
        ],
      },
      {
        stem: "Por suerte…",
        english: "Luckily…",
        hints: {
          que: [
            { es: "llevaba paraguas", en: "an umbrella" },
            { es: "alguien me ayudó", en: "luckily, someone helped me" },
            { es: "tenía tiempo de sobra", en: "spare time" },
          ],
        },
        completions: [
          { es: "llevaba paraguas", en: "an umbrella", category: "other" },
          { es: "alguien me ayudó", en: "luckily, someone helped me", category: "other" },
          { es: "tenía tiempo de sobra", en: "spare time", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
        ],
      },
    ],
  },
  {
    day: 41,
    theme: "Telling It to Someone",
    stems: [
      {
        stem: "¿Sabes qué?",
        english: "You know what?",
        hints: {
          que: [
            { es: "hoy hablé español sin miedo", en: "you know what? Today I spoke Spanish without fear" },
            { es: "tenías razón", en: "an admission" },
            { es: "mejor te lo cuento en persona", en: "in person" },
          ],
          cuando: [
            { es: "hoy hablé español sin miedo", en: "you know what? Today I spoke Spanish without fear" },
          ],
        },
        completions: [
          { es: "hoy hablé español sin miedo", en: "you know what? Today I spoke Spanish without fear", category: "time" },
          { es: "tenías razón", en: "an admission", category: "other" },
          { es: "mejor te lo cuento en persona", en: "in person", category: "opinion" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
        ],
      },
      {
        stem: "Te cuento que…",
        english: "So, I have to tell you…",
        hints: {
          que: [
            { es: "ya terminé el curso", en: "a finish line" },
            { es: "mi estudiante leyó su primer libro en inglés", en: "so — my student read her first book in English" },
            { es: "hay novedades en casa", en: "news" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "ya terminé el curso", en: "a finish line", category: "other" },
          { es: "mi estudiante leyó su primer libro en inglés", en: "so — my student read her first book in English", category: "other" },
          { es: "hay novedades en casa", en: "news", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
        ],
      },
      {
        stem: "Adivina qué…",
        english: "Guess what…",
        hints: {
          que: [
            { es: "pasó en la clase de hoy", en: "happened in class today" },
            { es: "encontré en el mercado", en: "a find" },
            { es: "me dijeron hoy", en: "what they said" },
          ],
          cuando: [
            { es: "pasó en la clase de hoy", en: "happened in class today" },
            { es: "me dijeron hoy", en: "what they said" },
          ],
        },
        completions: [
          { es: "pasó en la clase de hoy", en: "happened in class today", category: "time" },
          { es: "encontré en el mercado", en: "a find", category: "other" },
          { es: "me dijeron hoy", en: "what they said", category: "time" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
        ],
      },
      {
        stem: "Lo mejor fue…",
        english: "The best part was…",
        hints: {
          que: [
            { es: "la cara que puso", en: "the look on his face" },
            { es: "el final", en: "the ending" },
            { es: "que nadie lo esperaba", en: "the surprise" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "la cara que puso", en: "the look on his face", category: "other" },
          { es: "el final", en: "the ending", category: "other" },
          { es: "que nadie lo esperaba", en: "the surprise", category: "other" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
        ],
      },
      {
        stem: "Total, que…",
        english: "Long story short…",
        hints: {
          que: [
            { es: "llegamos tardísimo", en: "very late" },
            { es: "ahora tenemos gato", en: "long story short — now we have a cat" },
            { es: "todo era un malentendido", en: "a misunderstanding" },
          ],
          cuando: [
            { es: "ahora tenemos gato", en: "long story short — now we have a cat" },
          ],
        },
        completions: [
          { es: "llegamos tardísimo", en: "very late", category: "other" },
          { es: "ahora tenemos gato", en: "long story short — now we have a cat", category: "time" },
          { es: "todo era un malentendido", en: "a misunderstanding", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
        ],
      },
    ],
  },
  {
    day: 42,
    theme: "Repaso: One Whole Story",
    stems: [
      {
        stem: "Estaba… cuando…",
        english: "I was … when…",
        hints: {
          que: [
            { es: "estaba comprando fruta cuando la señora me habló en español", en: "buying fruit when the woman spoke to me in Spanish" },
            { es: "estaba por irme cuando empezó la música", en: "music everywhere" },
            { es: "estaba revisando exámenes cuando llegó el correo", en: "grading" },
          ],
        },
        completions: [
          { es: "estaba comprando fruta cuando la señora me habló en español", en: "buying fruit when the woman spoke to me in Spanish", category: "other" },
          { es: "estaba por irme cuando empezó la música", en: "music everywhere", category: "other" },
          { es: "estaba revisando exámenes cuando llegó el correo", en: "grading", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that…",
        hints: {
          que: [
            { es: "su hija está en mi clase", en: "it turns out her daughter is in my class" },
            { es: "crecimos en la misma ciudad", en: "same hometown" },
            { es: "el autobús no pasaba por ahí", en: "the bus" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "su hija está en mi clase", en: "it turns out her daughter is in my class", category: "other" },
          { es: "crecimos en la misma ciudad", en: "same hometown", category: "other" },
          { es: "el autobús no pasaba por ahí", en: "the bus", category: "other" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
        ],
      },
      {
        stem: "Y entonces…",
        english: "And then…",
        hints: {
          que: [
            { es: "seguimos hablando un buen rato", en: "we kept talking for a good while" },
            { es: "alguien gritó mi nombre", en: "a shout" },
            { es: "encontré la respuesta", en: "the answer" },
          ],
        },
        completions: [
          { es: "seguimos hablando un buen rato", en: "we kept talking for a good while", category: "other" },
          { es: "alguien gritó mi nombre", en: "a shout", category: "other" },
          { es: "encontré la respuesta", en: "the answer", category: "other" },
          { es: "como siempre", en: "like always", category: "other" },
          { es: "un rato después", en: "a little while later", category: "time" },
        ],
      },
      {
        stem: "Me di cuenta de que…",
        english: "I realized that…",
        hints: {
          que: [
            { es: "no estaba traduciendo en mi cabeza", en: "realized I wasn't translating in my head" },
            { es: "ya no tenía miedo", en: "no fear" },
            { es: "eso era exactamente la meta", en: "the goal" },
          ],
        },
        completions: [
          { es: "no estaba traduciendo en mi cabeza", en: "realized I wasn't translating in my head", category: "other" },
          { es: "ya no tenía miedo", en: "no fear", category: "other" },
          { es: "eso era exactamente la meta", en: "the goal", category: "other" },
          { es: "sin pensarlo mucho", en: "without overthinking it", category: "other" },
          { es: "justo cuando menos lo esperaba", en: "just when I least expected it", category: "other" },
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        hints: {
          que: [
            { es: "me despedí en español, como si nada", en: "said goodbye in Spanish, like it was nothing" },
            { es: "quedamos en tomar un café", en: "a coffee date" },
            { es: "la historia terminó mejor de lo que empezó", en: "a better ending" },
          ],
          cuando: [
            { es: "más tarde ese día", en: "later that day" },
          ],
        },
        completions: [
          { es: "me despedí en español, como si nada", en: "said goodbye in Spanish, like it was nothing", category: "other" },
          { es: "quedamos en tomar un café", en: "a coffee date", category: "food" },
          { es: "la historia terminó mejor de lo que empezó", en: "a better ending", category: "opinion" },
          { es: "un rato después", en: "a little while later", category: "time" },
          { es: "más tarde ese día", en: "later that day", category: "time" },
        ],
      },
    ],
  },
  {
    day: 43,
    theme: "Describing a Place",
    stems: [
      {
        stem: "Mi barrio es…",
        english: "My neighborhood is…",
        hints: {
          que: [
            { es: "tranquilo y tiene de todo", en: "my neighborhood is quiet and has everything" },
            { es: "más bonito en otoño", en: "its best season" },
            { es: "pequeño, pero nunca me aburro", en: "its size" },
          ],
        },
        completions: [
          { es: "tranquilo y tiene de todo", en: "my neighborhood is quiet and has everything", category: "other" },
          { es: "más bonito en otoño", en: "its best season", category: "other" },
          { es: "pequeño, pero nunca me aburro", en: "its size", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
        ],
      },
      {
        stem: "Es un lugar…",
        english: "It's a place…",
        hints: {
          que: [
            { es: "perfecto para leer", en: "for reading" },
            { es: "con mucha historia", en: "with history" },
            { es: "donde todos se conocen", en: "a place where everyone knows each other" },
          ],
        },
        completions: [
          { es: "perfecto para leer", en: "for reading", category: "other" },
          { es: "con mucha historia", en: "with history", category: "other" },
          { es: "donde todos se conocen", en: "a place where everyone knows each other", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
        ],
      },
      {
        stem: "Tiene…",
        english: "It has…",
        hints: {
          que: [
            { es: "un parque enorme en el centro", en: "a park" },
            { es: "cafés en cada esquina", en: "cafés" },
            { es: "una vista increíble del río", en: "it has an amazing view of the river" },
          ],
        },
        completions: [
          { es: "un parque enorme en el centro", en: "a park", category: "other" },
          { es: "cafés en cada esquina", en: "cafés", category: "food" },
          { es: "una vista increíble del río", en: "it has an amazing view of the river", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
        ],
      },
      {
        stem: "Se siente…",
        english: "It feels…",
        hints: {
          que: [
            { es: "como un pueblo dentro de la ciudad", en: "it feels like a small town inside the city" },
            { es: "seguro a cualquier hora", en: "safe" },
            { es: "diferente en cada estación", en: "seasonal" },
          ],
          cuando: [
            { es: "seguro a cualquier hora", en: "safe" },
          ],
        },
        completions: [
          { es: "como un pueblo dentro de la ciudad", en: "it feels like a small town inside the city", category: "other" },
          { es: "seguro a cualquier hora", en: "safe", category: "time" },
          { es: "diferente en cada estación", en: "seasonal", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
        ],
      },
      {
        stem: "Está lleno de…",
        english: "It's full of…",
        hints: {
          que: [
            { es: "estudiantes durante el año escolar", en: "students" },
            { es: "árboles viejos y casas de ladrillo", en: "full of old trees and brick houses" },
            { es: "vida los fines de semana", en: "life" },
          ],
          cuando: [
            { es: "vida los fines de semana", en: "life" },
          ],
        },
        completions: [
          { es: "estudiantes durante el año escolar", en: "students", category: "other" },
          { es: "árboles viejos y casas de ladrillo", en: "full of old trees and brick houses", category: "other" },
          { es: "vida los fines de semana", en: "life", category: "time" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
        ],
      },
    ],
  },
  {
    day: 44,
    theme: "Describing a Person",
    stems: [
      {
        stem: "Es una persona…",
        english: "He/She is a … person",
        hints: {
          que: [
            { es: "muy generosa", en: "generous" },
            { es: "que escucha de verdad", en: "she's a person who really listens" },
            { es: "difícil de olvidar", en: "unforgettable" },
          ],
        },
        completions: [
          { es: "muy generosa", en: "generous", category: "other" },
          { es: "que escucha de verdad", en: "she's a person who really listens", category: "other" },
          { es: "difícil de olvidar", en: "unforgettable", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
        ],
      },
      {
        stem: "Se parece a…",
        english: "He/She looks like / is like…",
        hints: {
          que: [
            { es: "su mamá cuando sonríe", en: "she looks like her mom when she smiles" },
            { es: "un profesor de película", en: "a movie character" },
            { es: "se parece mucho a como era yo a su edad", en: "your younger self" },
          ],
        },
        completions: [
          { es: "su mamá cuando sonríe", en: "she looks like her mom when she smiles", category: "other" },
          { es: "un profesor de película", en: "a movie character", category: "other" },
          { es: "se parece mucho a como era yo a su edad", en: "your younger self", category: "opinion" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
        ],
      },
      {
        stem: "Siempre…",
        english: "He/She always…",
        hints: {
          que: [
            { es: "llega con una historia nueva", en: "stories" },
            { es: "sabe qué decir", en: "the right words" },
            { es: "me hace reír", en: "he always makes me laugh" },
          ],
        },
        completions: [
          { es: "llega con una historia nueva", en: "stories", category: "other" },
          { es: "sabe qué decir", en: "the right words", category: "other" },
          { es: "me hace reír", en: "he always makes me laugh", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
        ],
      },
      {
        stem: "Lo que me gusta de… es…",
        english: "What I like about … is…",
        hints: {
          que: [
            { es: "lo que me gusta de ella es su paciencia", en: "what I like about her is her patience" },
            { es: "lo que me gusta de él es que nunca se rinde", en: "persistence" },
            { es: "lo que me gusta de mi clase es la energía", en: "energy" },
          ],
        },
        completions: [
          { es: "lo que me gusta de ella es su paciencia", en: "what I like about her is her patience", category: "other" },
          { es: "lo que me gusta de él es que nunca se rinde", en: "persistence", category: "other" },
          { es: "lo que me gusta de mi clase es la energía", en: "energy", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
        ],
      },
      {
        stem: "Es de esas personas que…",
        english: "He/She is one of those people who…",
        hints: {
          que: [
            { es: "te hacen sentir en casa", en: "she's one of those people who make you feel at home" },
            { es: "recuerdan tu cumpleaños", en: "remember birthdays" },
            { es: "hablan con todos", en: "talk to everyone" },
          ],
        },
        completions: [
          { es: "te hacen sentir en casa", en: "she's one of those people who make you feel at home", category: "other" },
          { es: "recuerdan tu cumpleaños", en: "remember birthdays", category: "other" },
          { es: "hablan con todos", en: "talk to everyone", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
        ],
      },
    ],
  },
  {
    day: 45,
    theme: "Comparing",
    stems: [
      {
        stem: "Es más… que…",
        english: "… is more … than…",
        hints: {
          que: [
            { es: "el verano en Atlanta es más húmedo que aquí", en: "summer in Atlanta is more humid than here" },
            { es: "hablar es más difícil que leer, por ahora", en: "two skills" },
            { es: "el tren es más rápido que el autobús a esta hora", en: "two routes" },
          ],
          cuando: [
            { es: "el verano en Atlanta es más húmedo que aquí", en: "summer in Atlanta is more humid than here" },
            { es: "hablar es más difícil que leer, por ahora", en: "two skills" },
          ],
        },
        completions: [
          { es: "el verano en Atlanta es más húmedo que aquí", en: "summer in Atlanta is more humid than here", category: "time" },
          { es: "hablar es más difícil que leer, por ahora", en: "two skills", category: "time" },
          { es: "el tren es más rápido que el autobús a esta hora", en: "two routes", category: "time" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
        ],
      },
      {
        stem: "Es menos… que…",
        english: "… is less … than…",
        hints: {
          que: [
            { es: "boston es menos ruidoso de lo que esperaba", en: "noise" },
            { es: "este barrio es menos caro que el centro", en: "this neighborhood is less expensive than downtown" },
            { es: "la gramática es menos misteriosa que antes", en: "fear" },
          ],
        },
        completions: [
          { es: "boston es menos ruidoso de lo que esperaba", en: "noise", category: "other" },
          { es: "este barrio es menos caro que el centro", en: "this neighborhood is less expensive than downtown", category: "other" },
          { es: "la gramática es menos misteriosa que antes", en: "fear", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
        ],
      },
      {
        stem: "Es tan… como…",
        english: "… is as … as…",
        hints: {
          que: [
            { es: "escuchar es tan importante como hablar", en: "listening is as important as speaking" },
            { es: "el otoño aquí es tan bonito como dicen", en: "seasons" },
            { es: "cocinar en casa es tan rico como salir", en: "home cooking" },
          ],
        },
        completions: [
          { es: "escuchar es tan importante como hablar", en: "listening is as important as speaking", category: "opinion" },
          { es: "el otoño aquí es tan bonito como dicen", en: "seasons", category: "other" },
          { es: "cocinar en casa es tan rico como salir", en: "home cooking", category: "activity" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
        ],
      },
      {
        stem: "No es tan… como…",
        english: "… isn't as … as…",
        hints: {
          que: [
            { es: "no es tan complicado como parece", en: "complexity" },
            { es: "el invierno no es tan terrible como me advirtieron", en: "winter isn't as terrible as they warned me" },
            { es: "hablar no es tan aterrador como era antes", en: "fear" },
          ],
          cuando: [
            { es: "el invierno no es tan terrible como me advirtieron", en: "winter isn't as terrible as they warned me" },
          ],
        },
        completions: [
          { es: "no es tan complicado como parece", en: "complexity", category: "opinion" },
          { es: "el invierno no es tan terrible como me advirtieron", en: "winter isn't as terrible as they warned me", category: "time" },
          { es: "hablar no es tan aterrador como era antes", en: "fear", category: "activity" },
          { es: "lleno de gente", en: "full of people", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
        ],
      },
      {
        stem: "Es el/la más… de…",
        english: "It's the most … in…",
        hints: {
          que: [
            { es: "es la mejor panadería del barrio", en: "the best bakery in the neighborhood" },
            { es: "es el mes más bonito del año", en: "a month" },
            { es: "es la parte más difícil del idioma, dicen", en: "the language" },
          ],
        },
        completions: [
          { es: "es la mejor panadería del barrio", en: "the best bakery in the neighborhood", category: "opinion" },
          { es: "es el mes más bonito del año", en: "a month", category: "other" },
          { es: "es la parte más difícil del idioma, dicen", en: "the language", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
        ],
      },
    ],
  },
  {
    day: 46,
    theme: "How It Works",
    stems: [
      {
        stem: "Sirve para…",
        english: "It's for… / It's used to…",
        hints: {
          que: [
            { es: "practicar español todos los días", en: "practice" },
            { es: "guardar tus frases favoritas", en: "for saving your favorite sentences" },
            { es: "no perderte en la ciudad", en: "navigation" },
          ],
          cuando: [
            { es: "practicar español todos los días", en: "practice" },
          ],
        },
        completions: [
          { es: "practicar español todos los días", en: "practice", category: "time" },
          { es: "guardar tus frases favoritas", en: "for saving your favorite sentences", category: "other" },
          { es: "no perderte en la ciudad", en: "navigation", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
        ],
      },
      {
        stem: "Se usa para…",
        english: "You use it to…",
        hints: {
          que: [
            { es: "pagar en el metro", en: "you use it to pay on the subway" },
            { es: "traducir palabras rápido", en: "translation" },
            { es: "hacer café sin electricidad", en: "coffee" },
          ],
        },
        completions: [
          { es: "pagar en el metro", en: "you use it to pay on the subway", category: "other" },
          { es: "traducir palabras rápido", en: "translation", category: "other" },
          { es: "hacer café sin electricidad", en: "coffee", category: "food" },
          { es: "lleno de gente", en: "full of people", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
        ],
      },
      {
        stem: "Funciona con…",
        english: "It works with/on…",
        hints: {
          que: [
            { es: "el teléfono", en: "a phone" },
            { es: "monedas nada más", en: "it works with coins only" },
            { es: "paciencia, más que nada", en: "patience" },
          ],
        },
        completions: [
          { es: "el teléfono", en: "a phone", category: "other" },
          { es: "monedas nada más", en: "it works with coins only", category: "other" },
          { es: "paciencia, más que nada", en: "patience", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
        ],
      },
      {
        stem: "Primero tienes que…",
        english: "First you have to…",
        hints: {
          que: [
            { es: "crear una cuenta", en: "an account" },
            { es: "apretar este botón", en: "you have to press this button" },
            { es: "dejar que se caliente", en: "waiting" },
          ],
        },
        completions: [
          { es: "crear una cuenta", en: "an account", category: "other" },
          { es: "apretar este botón", en: "you have to press this button", category: "other" },
          { es: "dejar que se caliente", en: "waiting", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
        ],
      },
      {
        stem: "Es fácil de…",
        english: "It's easy to…",
        hints: {
          que: [
            { es: "usar", en: "using" },
            { es: "aprender si practicas un poco", en: "easy to learn if you practice a little" },
            { es: "encontrar, está al lado de la estación", en: "finding" },
          ],
        },
        completions: [
          { es: "usar", en: "using", category: "other" },
          { es: "aprender si practicas un poco", en: "easy to learn if you practice a little", category: "activity" },
          { es: "encontrar, está al lado de la estación", en: "finding", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
        ],
      },
    ],
  },
  {
    day: 47,
    theme: "It's Like…",
    stems: [
      {
        stem: "Es como…",
        english: "It's like…",
        hints: {
          que: [
            { es: "un museo, pero al aire libre", en: "a museum" },
            { es: "el cilantro: o lo amas o lo odias", en: "like cilantro: you either love it or hate it" },
            { es: "un rompecabezas que por fin tiene sentido", en: "a puzzle" },
          ],
        },
        completions: [
          { es: "un museo, pero al aire libre", en: "a museum", category: "other" },
          { es: "el cilantro: o lo amas o lo odias", en: "like cilantro: you either love it or hate it", category: "other" },
          { es: "un rompecabezas que por fin tiene sentido", en: "a puzzle", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
        ],
      },
      {
        stem: "Es parecido a…",
        english: "It's similar to…",
        hints: {
          que: [
            { es: "un crepe, pero más grueso", en: "similar to a crepe, but thicker" },
            { es: "l inglés en esta parte", en: "english" },
            { es: "lo que hacemos en clase", en: "class" },
          ],
        },
        completions: [
          { es: "un crepe, pero más grueso", en: "similar to a crepe, but thicker", category: "other" },
          { es: "l inglés en esta parte", en: "english", category: "other" },
          { es: "lo que hacemos en clase", en: "class", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
        ],
      },
      {
        stem: "Es un tipo de…",
        english: "It's a kind of…",
        hints: {
          que: [
            { es: "pan dulce", en: "a kind of sweet bread" },
            { es: "juego de palabras", en: "wordplay" },
            { es: "baile del Caribe", en: "dance" },
          ],
        },
        completions: [
          { es: "pan dulce", en: "a kind of sweet bread", category: "other" },
          { es: "juego de palabras", en: "wordplay", category: "other" },
          { es: "baile del Caribe", en: "dance", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
        ],
      },
      {
        stem: "Imagínate…",
        english: "Imagine…",
        hints: {
          que: [
            { es: "una biblioteca, pero de herramientas", en: "imagine a library, but for tools" },
            { es: "el otoño perfecto: eso es octubre aquí", en: "perfect fall" },
            { es: "explicar chistes en otro idioma", en: "jokes abroad" },
          ],
        },
        completions: [
          { es: "una biblioteca, pero de herramientas", en: "imagine a library, but for tools", category: "other" },
          { es: "el otoño perfecto: eso es octubre aquí", en: "perfect fall", category: "other" },
          { es: "explicar chistes en otro idioma", en: "jokes abroad", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
        ],
      },
      {
        stem: "Es la versión … de…",
        english: "It's the … version of…",
        hints: {
          que: [
            { es: "es la versión dulce del pan de maíz", en: "cornbread" },
            { es: "es la versión pequeña de un festival", en: "a festival" },
            { es: "es la versión en español de mi rutina de siempre", en: "the Spanish version of my usual routine" },
          ],
        },
        completions: [
          { es: "es la versión dulce del pan de maíz", en: "cornbread", category: "other" },
          { es: "es la versión pequeña de un festival", en: "a festival", category: "other" },
          { es: "es la versión en español de mi rutina de siempre", en: "the Spanish version of my usual routine", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
        ],
      },
    ],
  },
  {
    day: 48,
    theme: "Explaining Why",
    stems: [
      {
        stem: "Porque…",
        english: "Because…",
        hints: {
          que: [
            { es: "quiero pensar en español, no traducir", en: "because I want to think in Spanish, not translate" },
            { es: "me hace bien caminar un rato", en: "a walk" },
            { es: "los sábados son para eso", en: "saturdays" },
          ],
          cuando: [
            { es: "los sábados son para eso", en: "saturdays" },
          ],
        },
        completions: [
          { es: "quiero pensar en español, no traducir", en: "because I want to think in Spanish, not translate", category: "other" },
          { es: "me hace bien caminar un rato", en: "a walk", category: "activity" },
          { es: "los sábados son para eso", en: "saturdays", category: "time" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
        ],
      },
      {
        stem: "Por eso…",
        english: "That's why…",
        hints: {
          que: [
            { es: "practico un poco cada día", en: "that's why I practice a little every day" },
            { es: "llegué temprano hoy", en: "arriving early" },
            { es: "me gusta tanto este barrio", en: "the barrio" },
          ],
          cuando: [
            { es: "practico un poco cada día", en: "that's why I practice a little every day" },
            { es: "llegué temprano hoy", en: "arriving early" },
          ],
        },
        completions: [
          { es: "practico un poco cada día", en: "that's why I practice a little every day", category: "time" },
          { es: "llegué temprano hoy", en: "arriving early", category: "time" },
          { es: "me gusta tanto este barrio", en: "the barrio", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
        ],
      },
      {
        stem: "Es que…",
        english: "The thing is…",
        hints: {
          que: [
            { es: "no dormí bien anoche", en: "bad sleep" },
            { es: "el tren venía lleno", en: "a full train" },
            { es: "soy del sur: el frío no es lo mío", en: "the thing is, I'm from the South — cold isn't my thing" },
          ],
          cuando: [
            { es: "no dormí bien anoche", en: "bad sleep" },
          ],
        },
        completions: [
          { es: "no dormí bien anoche", en: "bad sleep", category: "time" },
          { es: "el tren venía lleno", en: "a full train", category: "other" },
          { es: "soy del sur: el frío no es lo mío", en: "the thing is, I'm from the South — cold isn't my thing", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
        ],
      },
      {
        stem: "La razón es que…",
        english: "The reason is that…",
        hints: {
          que: [
            { es: "quiero hablar con mis estudiantes", en: "the reason is I want to talk with my students" },
            { es: "me queda cerca del trabajo", en: "location" },
            { es: "el otro estaba agotado", en: "the old one" },
          ],
        },
        completions: [
          { es: "quiero hablar con mis estudiantes", en: "the reason is I want to talk with my students", category: "activity" },
          { es: "me queda cerca del trabajo", en: "location", category: "other" },
          { es: "el otro estaba agotado", en: "the old one", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
        ],
      },
      {
        stem: "Como…",
        english: "Since…",
        hints: {
          que: [
            { es: "no tenía planes, dije que sí", en: "since I didn't have plans, I said yes" },
            { es: "llueve, mejor nos quedamos", en: "rain" },
            { es: "ya era tarde, lo dejamos para mañana", en: "late" },
          ],
          cuando: [
            { es: "ya era tarde, lo dejamos para mañana", en: "late" },
          ],
        },
        completions: [
          { es: "no tenía planes, dije que sí", en: "since I didn't have plans, I said yes", category: "other" },
          { es: "llueve, mejor nos quedamos", en: "rain", category: "opinion" },
          { es: "ya era tarde, lo dejamos para mañana", en: "late", category: "time" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
        ],
      },
    ],
  },
  {
    day: 49,
    theme: "Repaso: Explaining",
    stems: [
      {
        stem: "Se siente…",
        english: "It feels…",
        hints: {
          que: [
            { es: "raro hablar sin miedo, pero me gusta", en: "something weird happened this morning" },
            { es: "como el primer día de vacaciones", en: "vacation" },
            { es: "más fácil cada semana", en: "it feels easier every week" },
          ],
          cuando: [
            { es: "como el primer día de vacaciones", en: "vacation" },
            { es: "más fácil cada semana", en: "it feels easier every week" },
          ],
        },
        completions: [
          { es: "raro hablar sin miedo, pero me gusta", en: "something weird happened this morning", category: "activity" },
          { es: "como el primer día de vacaciones", en: "vacation", category: "time" },
          { es: "más fácil cada semana", en: "it feels easier every week", category: "time" },
          { es: "lleno de gente", en: "full of people", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
        ],
      },
      {
        stem: "Siempre…",
        english: "Always…",
        hints: {
          que: [
            { es: "encuentro una palabra nueva en este mercado", en: "new words" },
            { es: "termino comprando pan de más", en: "always end up buying extra bread" },
            { es: "me pasa lo mismo con las películas tristes", en: "sad movies" },
          ],
        },
        completions: [
          { es: "encuentro una palabra nueva en este mercado", en: "new words", category: "other" },
          { es: "termino comprando pan de más", en: "always end up buying extra bread", category: "other" },
          { es: "me pasa lo mismo con las películas tristes", en: "sad movies", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
        ],
      },
      {
        stem: "No es tan… como…",
        english: "It isn't as … as…",
        hints: {
          que: [
            { es: "no es tan caro como pensaba", en: "price" },
            { es: "no es tan lejos como parece en el mapa", en: "not as far as it looks on the map" },
            { es: "no es tan serio como suena", en: "seriousness" },
          ],
        },
        completions: [
          { es: "no es tan caro como pensaba", en: "price", category: "other" },
          { es: "no es tan lejos como parece en el mapa", en: "not as far as it looks on the map", category: "opinion" },
          { es: "no es tan serio como suena", en: "seriousness", category: "other" },
          { es: "un lugar tranquilo", en: "a quiet place", category: "other" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
        ],
      },
      {
        stem: "Es como…",
        english: "It's like…",
        hints: {
          que: [
            { es: "tener dos vidas en una ciudad", en: "two lives" },
            { es: "un juego que por fin entiendo", en: "a game" },
            { es: "volver a casa por un camino nuevo", en: "like coming home by a new road" },
          ],
        },
        completions: [
          { es: "tener dos vidas en una ciudad", en: "two lives", category: "other" },
          { es: "un juego que por fin entiendo", en: "a game", category: "other" },
          { es: "volver a casa por un camino nuevo", en: "like coming home by a new road", category: "other" },
          { es: "más pequeño de lo que pensaba", en: "smaller than I thought", category: "other" },
          { es: "lleno de gente", en: "full of people", category: "other" },
        ],
      },
      {
        stem: "Es que…",
        english: "The thing is…",
        hints: {
          que: [
            { es: "me encanta esa hora de la tarde", en: "golden hour" },
            { es: "las palabras nuevas me emocionan", en: "the thing is, new words excite me" },
            { es: "hoy amanecí con energía", en: "energy" },
          ],
          cuando: [
            { es: "me encanta esa hora de la tarde", en: "golden hour" },
            { es: "hoy amanecí con energía", en: "energy" },
          ],
        },
        completions: [
          { es: "me encanta esa hora de la tarde", en: "golden hour", category: "time" },
          { es: "las palabras nuevas me emocionan", en: "the thing is, new words excite me", category: "other" },
          { es: "hoy amanecí con energía", en: "energy", category: "time" },
          { es: "muy diferente de Atlanta", en: "very different from Atlanta", category: "other" },
          { es: "exactamente lo que necesitaba", en: "exactly what I needed", category: "other" },
        ],
      },
    ],
  },
  {
    day: 50,
    theme: "You Should…",
    stems: [
      {
        stem: "Deberías…",
        english: "You should…",
        hints: {
          que: [
            { es: "descansar un poco", en: "you should rest a little" },
            { es: "probar la clase de baile", en: "a class" },
            { es: "preguntarle directamente", en: "directness" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "descansar un poco", en: "you should rest a little", category: "other" },
          { es: "probar la clase de baile", en: "a class", category: "other" },
          { es: "preguntarle directamente", en: "directness", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
          { es: "cuando puedas", en: "when you can", category: "time" },
        ],
      },
      {
        stem: "No deberías…",
        english: "You shouldn't…",
        hints: {
          que: [
            { es: "ser tan dura contigo misma", en: "you shouldn't be so hard on yourself" },
            { es: "trabajar hasta tan tarde", en: "overwork" },
            { es: "decidir eso hoy", en: "big decisions" },
          ],
          cuando: [
            { es: "trabajar hasta tan tarde", en: "overwork" },
            { es: "decidir eso hoy", en: "big decisions" },
          ],
        },
        completions: [
          { es: "ser tan dura contigo misma", en: "you shouldn't be so hard on yourself", category: "other" },
          { es: "trabajar hasta tan tarde", en: "overwork", category: "time" },
          { es: "decidir eso hoy", en: "big decisions", category: "time" },
          { es: "con calma", en: "calmly", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
        ],
      },
      {
        stem: "Podrías…",
        english: "You could…",
        hints: {
          que: [
            { es: "intentarlo primero y decidir después", en: "try first" },
            { es: "preguntarle a la directora", en: "you could ask the principal" },
            { es: "venir con nosotras el sábado", en: "join us" },
          ],
          cuando: [
            { es: "venir con nosotras el sábado", en: "join us" },
          ],
        },
        completions: [
          { es: "intentarlo primero y decidir después", en: "try first", category: "other" },
          { es: "preguntarle a la directora", en: "you could ask the principal", category: "other" },
          { es: "venir con nosotras el sábado", en: "join us", category: "time" },
          { es: "cuando puedas", en: "when you can", category: "time" },
          { es: "sin presión", en: "without pressure", category: "other" },
        ],
      },
      {
        stem: "Sería bueno…",
        english: "It would be good…",
        hints: {
          que: [
            { es: "hablarlo en persona", en: "it would be good to talk it over in person" },
            { es: "empezar poco a poco", en: "gradually" },
            { es: "pedir una segunda opinión", en: "a second opinion" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "hablarlo en persona", en: "it would be good to talk it over in person", category: "other" },
          { es: "empezar poco a poco", en: "gradually", category: "other" },
          { es: "pedir una segunda opinión", en: "a second opinion", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
        ],
      },
      {
        stem: "Te haría bien…",
        english: "It would do you good…",
        hints: {
          que: [
            { es: "salir un rato", en: "it would do you good to get out for a while" },
            { es: "un fin de semana sin planes", en: "an empty weekend" },
            { es: "hablar con alguien de esto", en: "talking" },
          ],
          cuando: [
            { es: "un fin de semana sin planes", en: "an empty weekend" },
          ],
        },
        completions: [
          { es: "salir un rato", en: "it would do you good to get out for a while", category: "activity" },
          { es: "un fin de semana sin planes", en: "an empty weekend", category: "time" },
          { es: "hablar con alguien de esto", en: "talking", category: "activity" },
          { es: "sin presión", en: "without pressure", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
        ],
      },
    ],
  },
  {
    day: 51,
    theme: "Why Don't You…?",
    stems: [
      {
        stem: "¿Por qué no…?",
        english: "Why don't you / we…?",
        hints: {
          que: [
            { es: "¿Por qué no lo intentas otra vez?", en: "why don't you try it again?" },
            { es: "¿Por qué no vamos juntas?", en: "together" },
            { es: "¿Por qué no le preguntas y ya?", en: "just ask" },
          ],
        },
        completions: [
          { es: "¿Por qué no lo intentas otra vez?", en: "why don't you try it again?", category: "other" },
          { es: "¿Por qué no vamos juntas?", en: "together", category: "other" },
          { es: "¿Por qué no le preguntas y ya?", en: "just ask", category: "other" },
          { es: "cuando puedas", en: "when you can", category: "time" },
          { es: "sin presión", en: "without pressure", category: "other" },
        ],
      },
      {
        stem: "¿Has probado…?",
        english: "Have you tried…?",
        hints: {
          que: [
            { es: "¿Has probado estudiar con música?", en: "music everywhere" },
            { es: "¿Has probado el café de la esquina?", en: "food" },
            { es: "¿Has probado hablar en voz alta cuando estás sola?", en: "have you tried speaking out loud when you're alone?" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "¿Has probado estudiar con música?", en: "music everywhere", category: "activity" },
          { es: "¿Has probado el café de la esquina?", en: "food", category: "food" },
          { es: "¿Has probado hablar en voz alta cuando estás sola?", en: "have you tried speaking out loud when you're alone?", category: "activity" },
          { es: "paso a paso", en: "step by step", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
        ],
      },
      {
        stem: "¿Qué tal si…?",
        english: "What if…?",
        hints: {
          que: [
            { es: "¿Qué tal si empezamos con algo pequeño?", en: "what if we start with something small?" },
            { es: "¿Qué tal si lo dejamos para el viernes?", en: "friday" },
            { es: "¿Qué tal si invitamos a más gente?", en: "more people" },
          ],
        },
        completions: [
          { es: "¿Qué tal si empezamos con algo pequeño?", en: "what if we start with something small?", category: "other" },
          { es: "¿Qué tal si lo dejamos para el viernes?", en: "friday", category: "other" },
          { es: "¿Qué tal si invitamos a más gente?", en: "more people", category: "other" },
          { es: "sin presión", en: "without pressure", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
        ],
      },
      {
        stem: "¿Y si…?",
        english: "And what if…?",
        hints: {
          que: [
            { es: "¿Y si tomamos el tren en vez de manejar?", en: "the train" },
            { es: "¿Y si le escribes primero?", en: "writing first" },
            { es: "¿Y si resulta mejor de lo que crees?", en: "and what if it turns out better than you think?" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "¿Y si tomamos el tren en vez de manejar?", en: "the train", category: "other" },
          { es: "¿Y si le escribes primero?", en: "writing first", category: "other" },
          { es: "¿Y si resulta mejor de lo que crees?", en: "and what if it turns out better than you think?", category: "opinion" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
          { es: "cuando puedas", en: "when you can", category: "time" },
        ],
      },
      {
        stem: "A lo mejor puedes…",
        english: "Maybe you can…",
        hints: {
          que: [
            { es: "cambiar el horario", en: "the schedule" },
            { es: "practicar con tu vecina", en: "ran into my neighbor at the market" },
            { es: "hacer las dos cosas", en: "maybe you can do both" },
          ],
          cuando: [
            { es: "cambiar el horario", en: "the schedule" },
          ],
        },
        completions: [
          { es: "cambiar el horario", en: "the schedule", category: "time" },
          { es: "practicar con tu vecina", en: "ran into my neighbor at the market", category: "activity" },
          { es: "hacer las dos cosas", en: "maybe you can do both", category: "activity" },
          { es: "con calma", en: "calmly", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
        ],
      },
    ],
  },
  {
    day: 52,
    theme: "I Recommend…",
    stems: [
      {
        stem: "Te recomiendo…",
        english: "I recommend (to you)…",
        hints: {
          que: [
            { es: "el mercado de los sábados", en: "a market" },
            { es: "empezar por los audios", en: "audio first" },
            { es: "ir temprano, se llena rápido", en: "recommend going early — it fills up fast" },
          ],
          cuando: [
            { es: "el mercado de los sábados", en: "a market" },
          ],
        },
        completions: [
          { es: "el mercado de los sábados", en: "a market", category: "time" },
          { es: "empezar por los audios", en: "audio first", category: "other" },
          { es: "ir temprano, se llena rápido", en: "recommend going early — it fills up fast", category: "activity" },
          { es: "sin presión", en: "without pressure", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
        ],
      },
      {
        stem: "Te va a encantar…",
        english: "You're going to love…",
        hints: {
          que: [
            { es: "este libro", en: "a book" },
            { es: "cómo suena en español", en: "you're going to love how it sounds in Spanish" },
            { es: "el final, no digo más", en: "the ending" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "este libro", en: "a book", category: "other" },
          { es: "cómo suena en español", en: "you're going to love how it sounds in Spanish", category: "other" },
          { es: "el final, no digo más", en: "the ending", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
          { es: "cuando puedas", en: "when you can", category: "time" },
        ],
      },
      {
        stem: "No te pierdas…",
        english: "Don't miss…",
        hints: {
          que: [
            { es: "el atardecer desde el puente", en: "don't miss the sunset from the bridge" },
            { es: "la exposición nueva", en: "an exhibit" },
            { es: "los tacos del camión rojo", en: "tacos" },
          ],
          cuando: [
            { es: "el atardecer desde el puente", en: "don't miss the sunset from the bridge" },
          ],
        },
        completions: [
          { es: "el atardecer desde el puente", en: "don't miss the sunset from the bridge", category: "time" },
          { es: "la exposición nueva", en: "an exhibit", category: "other" },
          { es: "los tacos del camión rojo", en: "tacos", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
        ],
      },
      {
        stem: "Tienes que probar…",
        english: "You have to try…",
        hints: {
          que: [
            { es: "el pan de aquí", en: "you have to try the bread here" },
            { es: "la clase de salsa", en: "a dance class" },
            { es: "esto antes de irte", en: "before leaving" },
          ],
        },
        completions: [
          { es: "el pan de aquí", en: "you have to try the bread here", category: "other" },
          { es: "la clase de salsa", en: "a dance class", category: "other" },
          { es: "esto antes de irte", en: "before leaving", category: "other" },
          { es: "cuando puedas", en: "when you can", category: "time" },
          { es: "sin presión", en: "without pressure", category: "other" },
        ],
      },
      {
        stem: "Mi favorito es…",
        english: "My favorite is…",
        hints: {
          que: [
            { es: "el de chocolate, sin duda", en: "my favorite is the chocolate one, no question" },
            { es: "mi favorita es la librería que está cerca del parque", en: "a bookstore" },
            { es: "el otoño, con todo y lluvia", en: "a season" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "el de chocolate, sin duda", en: "my favorite is the chocolate one, no question", category: "other" },
          { es: "mi favorita es la librería que está cerca del parque", en: "a bookstore", category: "other" },
          { es: "el otoño, con todo y lluvia", en: "a season", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
        ],
      },
    ],
  },
  {
    day: 53,
    theme: "If I Were You…",
    stems: [
      {
        stem: "Si yo fuera tú…",
        english: "If I were you…",
        hints: {
          que: [
            { es: ", aceptaría", en: "accepting" },
            { es: ", no me preocuparía tanto", en: "worrying less" },
            { es: ", se lo diría hoy mismo", en: "if I were you, I'd tell him today" },
          ],
          cuando: [
            { es: ", se lo diría hoy mismo", en: "if I were you, I'd tell him today" },
          ],
        },
        completions: [
          { es: ", aceptaría", en: "accepting", category: "other" },
          { es: ", no me preocuparía tanto", en: "worrying less", category: "other" },
          { es: ", se lo diría hoy mismo", en: "if I were you, I'd tell him today", category: "time" },
          { es: "con calma", en: "calmly", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
        ],
      },
      {
        stem: "Yo en tu lugar…",
        english: "In your place, I…",
        hints: {
          que: [
            { es: "descansaría primero", en: "resting" },
            { es: "pediría más tiempo", en: "in your place, I'd ask for more time" },
            { es: "haría la llamada", en: "the call" },
          ],
        },
        completions: [
          { es: "descansaría primero", en: "resting", category: "other" },
          { es: "pediría más tiempo", en: "in your place, I'd ask for more time", category: "other" },
          { es: "haría la llamada", en: "the call", category: "other" },
          { es: "cuando puedas", en: "when you can", category: "time" },
          { es: "sin presión", en: "without pressure", category: "other" },
        ],
      },
      {
        stem: "Yo que tú…",
        english: "If I were you (colloquial)…",
        hints: {
          que: [
            { es: ", iría", en: "going" },
            { es: ", no esperaría más", en: "if I were you, I wouldn't wait any longer" },
            { es: ", lo celebraría en grande", en: "celebrating" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: ", iría", en: "going", category: "activity" },
          { es: ", no esperaría más", en: "if I were you, I wouldn't wait any longer", category: "other" },
          { es: ", lo celebraría en grande", en: "celebrating", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
        ],
      },
      {
        stem: "Lo que yo haría es…",
        english: "What I would do is…",
        hints: {
          que: [
            { es: "preguntar primero", en: "asking first" },
            { es: "dividirlo en pasos pequeños", en: "what I'd do is break it into small steps" },
            { es: "dormir y decidir mañana", en: "sleeping on it" },
          ],
          cuando: [
            { es: "dormir y decidir mañana", en: "sleeping on it" },
          ],
        },
        completions: [
          { es: "preguntar primero", en: "asking first", category: "other" },
          { es: "dividirlo en pasos pequeños", en: "what I'd do is break it into small steps", category: "other" },
          { es: "dormir y decidir mañana", en: "sleeping on it", category: "time" },
          { es: "sin presión", en: "without pressure", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
        ],
      },
      {
        stem: "Yo empezaría por…",
        english: "I would start with…",
        hints: {
          que: [
            { es: "lo más fácil", en: "i'd start with the easiest part" },
            { es: "hacer una lista", en: "a list" },
            { es: "hablar con ella", en: "a conversation" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "lo más fácil", en: "i'd start with the easiest part", category: "other" },
          { es: "hacer una lista", en: "a list", category: "activity" },
          { es: "hablar con ella", en: "a conversation", category: "activity" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
          { es: "cuando puedas", en: "when you can", category: "time" },
        ],
      },
    ],
  },
  {
    day: 54,
    theme: "One Must…",
    stems: [
      {
        stem: "Hay que…",
        english: "You have to / one must…",
        hints: {
          que: [
            { es: "practicar todos los días, aunque sea poquito", en: "you have to practice every day, even a tiny bit" },
            { es: "llegar temprano para encontrar mesa", en: "arriving early" },
            { es: "probarlo para entenderlo", en: "trying it" },
          ],
          cuando: [
            { es: "practicar todos los días, aunque sea poquito", en: "you have to practice every day, even a tiny bit" },
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "practicar todos los días, aunque sea poquito", en: "you have to practice every day, even a tiny bit", category: "time" },
          { es: "llegar temprano para encontrar mesa", en: "arriving early", category: "food" },
          { es: "probarlo para entenderlo", en: "trying it", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
        ],
      },
      {
        stem: "No hay que…",
        english: "One shouldn't / no need to…",
        hints: {
          que: [
            { es: "hacerlo perfecto, hay que hacerlo", en: "it doesn't have to be perfect — it has to get done" },
            { es: "traer nada, solo ganas", en: "bring nothing" },
            { es: "tomárselo tan en serio", en: "lighten up" },
          ],
        },
        completions: [
          { es: "hacerlo perfecto, hay que hacerlo", en: "it doesn't have to be perfect — it has to get done", category: "other" },
          { es: "traer nada, solo ganas", en: "bring nothing", category: "other" },
          { es: "tomárselo tan en serio", en: "lighten up", category: "other" },
          { es: "sin presión", en: "without pressure", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
        ],
      },
      {
        stem: "Lo importante es…",
        english: "The important thing is…",
        hints: {
          que: [
            { es: "no parar", en: "not stopping" },
            { es: "entenderse, no la gramática perfecta", en: "the important thing is understanding each other, not perfect grammar" },
            { es: "que lo intentaste", en: "trying" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "no parar", en: "not stopping", category: "other" },
          { es: "entenderse, no la gramática perfecta", en: "the important thing is understanding each other, not perfect grammar", category: "other" },
          { es: "que lo intentaste", en: "trying", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
          { es: "cuando puedas", en: "when you can", category: "time" },
        ],
      },
      {
        stem: "No hace falta…",
        english: "There's no need to…",
        hints: {
          que: [
            { es: "reservar", en: "reservations" },
            { es: "decir mucho, con estar ahí basta", en: "many words" },
            { es: "ser perfecta para empezar", en: "you don't have to be perfect to start" },
          ],
        },
        completions: [
          { es: "reservar", en: "reservations", category: "other" },
          { es: "decir mucho, con estar ahí basta", en: "many words", category: "other" },
          { es: "ser perfecta para empezar", en: "you don't have to be perfect to start", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
        ],
      },
      {
        stem: "Con el tiempo…",
        english: "With time…",
        hints: {
          que: [
            { es: "se vuelve natural", en: "with time it becomes natural" },
            { es: "todo pesa menos", en: "lighter loads" },
            { es: "vas a extrañar hasta el invierno", en: "even winter" },
          ],
          cuando: [
            { es: "vas a extrañar hasta el invierno", en: "even winter" },
          ],
        },
        completions: [
          { es: "se vuelve natural", en: "with time it becomes natural", category: "other" },
          { es: "todo pesa menos", en: "lighter loads", category: "other" },
          { es: "vas a extrañar hasta el invierno", en: "even winter", category: "time" },
          { es: "cuando puedas", en: "when you can", category: "time" },
          { es: "sin presión", en: "without pressure", category: "other" },
        ],
      },
    ],
  },
  {
    day: 55,
    theme: "Teacher's Advice",
    stems: [
      {
        stem: "Intenta…",
        english: "Try…",
        hints: {
          que: [
            { es: "leerlo en voz alta primero", en: "try reading it out loud first" },
            { es: "otra vez, sin prisa", en: "again" },
            { es: "explicármelo con tus palabras", en: "your own words" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "leerlo en voz alta primero", en: "try reading it out loud first", category: "other" },
          { es: "otra vez, sin prisa", en: "again", category: "other" },
          { es: "explicármelo con tus palabras", en: "your own words", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
          { es: "cuando puedas", en: "when you can", category: "time" },
        ],
      },
      {
        stem: "No tengas miedo de…",
        english: "Don't be afraid to…",
        hints: {
          que: [
            { es: "equivocarte", en: "don't be afraid of making mistakes" },
            { es: "preguntar", en: "questions" },
            { es: "sonar rara al principio", en: "sounding strange" },
          ],
        },
        completions: [
          { es: "equivocarte", en: "don't be afraid of making mistakes", category: "other" },
          { es: "preguntar", en: "questions", category: "other" },
          { es: "sonar rara al principio", en: "sounding strange", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
        ],
      },
      {
        stem: "Recuerda que…",
        english: "Remember that…",
        hints: {
          que: [
            { es: "ya sabes más que ayer", en: "remember that you already know more than yesterday" },
            { es: "todos empezamos desde cero", en: "everyone starts" },
            { es: "entender también cuenta", en: "listening counts" },
          ],
          cuando: [
            { es: "ya sabes más que ayer", en: "remember that you already know more than yesterday" },
          ],
        },
        completions: [
          { es: "ya sabes más que ayer", en: "remember that you already know more than yesterday", category: "time" },
          { es: "todos empezamos desde cero", en: "everyone starts", category: "other" },
          { es: "entender también cuenta", en: "listening counts", category: "other" },
          { es: "cuando puedas", en: "when you can", category: "time" },
          { es: "sin presión", en: "without pressure", category: "other" },
        ],
      },
      {
        stem: "Poco a poco…",
        english: "Little by little…",
        hints: {
          que: [
            { es: "se llega lejos", en: "far" },
            { es: ", pero sin parar", en: "little by little, but without stopping" },
            { es: "el oído se acostumbra", en: "the ear" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "se llega lejos", en: "far", category: "other" },
          { es: ", pero sin parar", en: "little by little, but without stopping", category: "other" },
          { es: "el oído se acostumbra", en: "the ear", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
        ],
      },
      {
        stem: "Confía en…",
        english: "Trust…",
        hints: {
          que: [
            { es: "tu oído", en: "trust your ear" },
            { es: "el proceso, aunque no lo veas", en: "the process" },
            { es: "lo que ya has practicado", en: "your practice" },
          ],
        },
        completions: [
          { es: "tu oído", en: "trust your ear", category: "other" },
          { es: "el proceso, aunque no lo veas", en: "the process", category: "other" },
          { es: "lo que ya has practicado", en: "your practice", category: "other" },
          { es: "sin presión", en: "without pressure", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
        ],
      },
    ],
  },
  {
    day: 56,
    theme: "Repaso: Advice",
    stems: [
      {
        stem: "Deberías…",
        english: "You should…",
        hints: {
          que: [
            { es: "escucharte hablando ahora — has mejorado muchísimo", en: "you should hear yourself speaking now — you've improved so much" },
            { es: "tomarte el viernes libre", en: "a day off" },
            { es: "enseñarle esa canción a tu clase", en: "a song" },
          ],
          cuando: [
            { es: "escucharte hablando ahora — has mejorado muchísimo", en: "you should hear yourself speaking now — you've improved so much" },
          ],
        },
        completions: [
          { es: "escucharte hablando ahora — has mejorado muchísimo", en: "you should hear yourself speaking now — you've improved so much", category: "time" },
          { es: "tomarte el viernes libre", en: "a day off", category: "other" },
          { es: "enseñarle esa canción a tu clase", en: "a song", category: "other" },
          { es: "cuando puedas", en: "when you can", category: "time" },
          { es: "sin presión", en: "without pressure", category: "other" },
        ],
      },
      {
        stem: "¿Has probado…?",
        english: "Have you tried…?",
        hints: {
          que: [
            { es: "¿Has probado pensar en español mientras caminas?", en: "have you tried thinking in Spanish while you walk?" },
            { es: "¿Has probado la sopa del lugar nuevo?", en: "new soup" },
            { es: "¿Has probado escribirlo primero y decirlo después?", en: "write then say" },
          ],
          cuando: [
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: "¿Has probado pensar en español mientras caminas?", en: "have you tried thinking in Spanish while you walk?", category: "other" },
          { es: "¿Has probado la sopa del lugar nuevo?", en: "new soup", category: "other" },
          { es: "¿Has probado escribirlo primero y decirlo después?", en: "write then say", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
        ],
      },
      {
        stem: "Tienes que probar…",
        english: "You have to try…",
        hints: {
          que: [
            { es: "el mango con chile", en: "you have to try mango with chile" },
            { es: "la ruta por el río", en: "the river route" },
            { es: "esto: cinco minutos y ya", en: "five minutes" },
          ],
          cuando: [
            { es: "esto: cinco minutos y ya", en: "five minutes" },
          ],
        },
        completions: [
          { es: "el mango con chile", en: "you have to try mango with chile", category: "other" },
          { es: "la ruta por el río", en: "the river route", category: "other" },
          { es: "esto: cinco minutos y ya", en: "five minutes", category: "time" },
          { es: "sin presión", en: "without pressure", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
        ],
      },
      {
        stem: "Yo que tú…",
        english: "If I were you…",
        hints: {
          que: [
            { es: ", guardaría esa frase en el cuaderno", en: "if I were you, I'd save that sentence in the notebook" },
            { es: ", llegaría media hora antes", en: "arrive early" },
            { es: ", diría que sí sin pensarlo", en: "say yes" },
          ],
          cuando: [
            { es: ", llegaría media hora antes", en: "arrive early" },
            { es: "un poco cada día", en: "a little each day" },
          ],
        },
        completions: [
          { es: ", guardaría esa frase en el cuaderno", en: "if I were you, I'd save that sentence in the notebook", category: "other" },
          { es: ", llegaría media hora antes", en: "arrive early", category: "time" },
          { es: ", diría que sí sin pensarlo", en: "say yes", category: "other" },
          { es: "un poco cada día", en: "a little each day", category: "time" },
          { es: "cuando puedas", en: "when you can", category: "time" },
        ],
      },
      {
        stem: "No tengas miedo de…",
        english: "Don't be afraid to…",
        hints: {
          que: [
            { es: "hablar primero", en: "speaking first" },
            { es: "pedir que te repitan", en: "asking again" },
            { es: "sonar como principiante: eso pasa", en: "don't be afraid to sound like a beginner — that passes" },
          ],
        },
        completions: [
          { es: "hablar primero", en: "speaking first", category: "activity" },
          { es: "pedir que te repitan", en: "asking again", category: "other" },
          { es: "sonar como principiante: eso pasa", en: "don't be afraid to sound like a beginner — that passes", category: "other" },
          { es: "con calma", en: "calmly", category: "other" },
          { es: "paso a paso", en: "step by step", category: "other" },
        ],
      },
    ],
  },
  {
    day: 57,
    theme: "Proposing",
    stems: [
      {
        stem: "¿Te parece si…?",
        english: "How about if…?",
        hints: {
          que: [
            { es: "¿Te parece si nos vemos el jueves?", en: "how about we meet Thursday?" },
            { es: "¿Te parece si lo hablamos con un café?", en: "over coffee" },
            { es: "¿Te parece si empezamos a las diez?", en: "ten o'clock" },
          ],
        },
        completions: [
          { es: "¿Te parece si nos vemos el jueves?", en: "how about we meet Thursday?", category: "opinion" },
          { es: "¿Te parece si lo hablamos con un café?", en: "over coffee", category: "food" },
          { es: "¿Te parece si empezamos a las diez?", en: "ten o'clock", category: "opinion" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
        ],
      },
      {
        stem: "¿Qué te parece…?",
        english: "What do you think of…?",
        hints: {
          que: [
            { es: "¿Qué te parece el sábado por la mañana?", en: "a morning" },
            { es: "¿Qué te parece el plan?", en: "the plan" },
            { es: "¿Qué te parece un picnic en el parque?", en: "what do you think of a picnic in the park?" },
          ],
          cuando: [
            { es: "¿Qué te parece el sábado por la mañana?", en: "a morning" },
            { es: "el sábado por la mañana", en: "Saturday morning" },
          ],
        },
        completions: [
          { es: "¿Qué te parece el sábado por la mañana?", en: "a morning", category: "time" },
          { es: "¿Qué te parece el plan?", en: "the plan", category: "opinion" },
          { es: "¿Qué te parece un picnic en el parque?", en: "what do you think of a picnic in the park?", category: "opinion" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
        ],
      },
      {
        stem: "Podemos…",
        english: "We can…",
        hints: {
          que: [
            { es: "vernos después del trabajo", en: "we can meet after work" },
            { es: "llevar algo de comer", en: "bring food" },
            { es: "decidir sobre la marcha", en: "improvise" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: "vernos después del trabajo", en: "we can meet after work", category: "other" },
          { es: "llevar algo de comer", en: "bring food", category: "food" },
          { es: "decidir sobre la marcha", en: "improvise", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
        ],
      },
      {
        stem: "¿Hacemos…?",
        english: "Shall we…?",
        hints: {
          que: [
            { es: "¿Hacemos algo este fin de semana?", en: "shall we do something this weekend?" },
            { es: "¿Hacemos una lista antes de ir?", en: "a list" },
            { es: "¿Hacemos la mitad hoy y la mitad mañana?", en: "half and half" },
          ],
          cuando: [
            { es: "¿Hacemos algo este fin de semana?", en: "shall we do something this weekend?" },
            { es: "¿Hacemos la mitad hoy y la mitad mañana?", en: "half and half" },
          ],
        },
        completions: [
          { es: "¿Hacemos algo este fin de semana?", en: "shall we do something this weekend?", category: "time" },
          { es: "¿Hacemos una lista antes de ir?", en: "a list", category: "activity" },
          { es: "¿Hacemos la mitad hoy y la mitad mañana?", en: "half and half", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
        ],
      },
      {
        stem: "Tengo una idea:…",
        english: "I have an idea:…",
        hints: {
          que: [
            { es: "desayuno y después el mercado", en: "had a calm breakfast" },
            { es: "clase de cocina juntas", en: "a class" },
            { es: "te enseño inglés y me enseñas español", en: "have an idea: I teach you English and you teach me Spanish" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
            { es: "el sábado por la mañana", en: "Saturday morning" },
          ],
        },
        completions: [
          { es: "desayuno y después el mercado", en: "had a calm breakfast", category: "food" },
          { es: "clase de cocina juntas", en: "a class", category: "other" },
          { es: "te enseño inglés y me enseñas español", en: "have an idea: I teach you English and you teach me Spanish", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
        ],
      },
    ],
  },
  {
    day: 58,
    theme: "When & Where",
    stems: [
      {
        stem: "Quedamos a las…",
        english: "Let's meet at (time)…",
        hints: {
          que: [
            { es: "seis en la entrada", en: "let's meet at six at the entrance" },
            { es: "nueve, ¿te parece?", en: "nine" },
            { es: "quedamos a la una para almorzar", en: "lunch" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: "seis en la entrada", en: "let's meet at six at the entrance", category: "other" },
          { es: "nueve, ¿te parece?", en: "nine", category: "opinion" },
          { es: "quedamos a la una para almorzar", en: "lunch", category: "food" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
        ],
      },
      {
        stem: "Nos vemos en…",
        english: "See you at (place)…",
        hints: {
          que: [
            { es: "la estación", en: "the station" },
            { es: "el café de siempre", en: "see you at the usual café" },
            { es: "la puerta del cine", en: "the movies" },
          ],
        },
        completions: [
          { es: "la estación", en: "the station", category: "other" },
          { es: "el café de siempre", en: "see you at the usual café", category: "food" },
          { es: "la puerta del cine", en: "the movies", category: "other" },
          { es: "después del trabajo", en: "after work", category: "time" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
        ],
      },
      {
        stem: "¿Te queda bien…?",
        english: "Does … work for you?",
        hints: {
          que: [
            { es: "¿Te queda bien el martes?", en: "does Tuesday work for you?" },
            { es: "¿Te queda bien a las cinco?", en: "five o'clock" },
            { es: "¿Te queda bien por mi barrio?", en: "my neighborhood" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
            { es: "el sábado por la mañana", en: "Saturday morning" },
          ],
        },
        completions: [
          { es: "¿Te queda bien el martes?", en: "does Tuesday work for you?", category: "other" },
          { es: "¿Te queda bien a las cinco?", en: "five o'clock", category: "other" },
          { es: "¿Te queda bien por mi barrio?", en: "my neighborhood", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
        ],
      },
      {
        stem: "Mejor el…",
        english: "Better on (day)…",
        hints: {
          que: [
            { es: "domingo, sin prisa", en: "sunday" },
            { es: "jueves; el miércoles tengo clase", en: "better Thursday — Wednesday I have class" },
            { es: "que te quede más fácil", en: "whatever's easy" },
          ],
        },
        completions: [
          { es: "domingo, sin prisa", en: "sunday", category: "other" },
          { es: "jueves; el miércoles tengo clase", en: "better Thursday — Wednesday I have class", category: "other" },
          { es: "que te quede más fácil", en: "whatever's easy", category: "other" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
        ],
      },
      {
        stem: "¿A qué hora te viene bien?",
        english: "What time works for you?",
        hints: {
          que: [
            { es: "¿a qué hora te viene bien?", en: "open question" },
            { es: "¿A qué hora te viene bien empezar?", en: "starting" },
            { es: "yo estoy libre toda la tarde", en: "what time works for you? I'm free all afternoon" },
          ],
          cuando: [
            { es: "¿a qué hora te viene bien?", en: "open question" },
            { es: "¿A qué hora te viene bien empezar?", en: "starting" },
          ],
        },
        completions: [
          { es: "¿a qué hora te viene bien?", en: "open question", category: "time" },
          { es: "¿A qué hora te viene bien empezar?", en: "starting", category: "time" },
          { es: "yo estoy libre toda la tarde", en: "what time works for you? I'm free all afternoon", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
        ],
      },
    ],
  },
  {
    day: 59,
    theme: "Availability",
    stems: [
      {
        stem: "Me viene bien…",
        english: "… works for me",
        hints: {
          que: [
            { es: "el sábado", en: "saturday works for me" },
            { es: "más tarde, como a las siete", en: "later" },
            { es: "cualquier día menos el lunes", en: "almost any day" },
          ],
          cuando: [
            { es: "el sábado", en: "saturday works for me" },
            { es: "más tarde, como a las siete", en: "later" },
          ],
        },
        completions: [
          { es: "el sábado", en: "saturday works for me", category: "time" },
          { es: "más tarde, como a las siete", en: "later", category: "time" },
          { es: "cualquier día menos el lunes", en: "almost any day", category: "time" },
          { es: "esta semana", en: "this week", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
        ],
      },
      {
        stem: "No me viene bien…",
        english: "… doesn't work for me",
        hints: {
          que: [
            { es: "esta semana, ¿la próxima?", en: "this week doesn't work for me — next week?" },
            { es: "tan temprano", en: "so early" },
            { es: "el centro, mejor por acá", en: "downtown" },
          ],
          cuando: [
            { es: "esta semana, ¿la próxima?", en: "this week doesn't work for me — next week?" },
          ],
        },
        completions: [
          { es: "esta semana, ¿la próxima?", en: "this week doesn't work for me — next week?", category: "time" },
          { es: "tan temprano", en: "so early", category: "other" },
          { es: "el centro, mejor por acá", en: "downtown", category: "opinion" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
        ],
      },
      {
        stem: "Estoy libre…",
        english: "I'm free…",
        hints: {
          que: [
            { es: "el viernes por la tarde", en: "friday" },
            { es: "después de las cuatro", en: "after four" },
            { es: "todo el fin de semana, milagrosamente", en: "i'm free all weekend, miraculously" },
          ],
          cuando: [
            { es: "el viernes por la tarde", en: "friday" },
            { es: "todo el fin de semana, milagrosamente", en: "i'm free all weekend, miraculously" },
          ],
        },
        completions: [
          { es: "el viernes por la tarde", en: "friday", category: "time" },
          { es: "después de las cuatro", en: "after four", category: "other" },
          { es: "todo el fin de semana, milagrosamente", en: "i'm free all weekend, miraculously", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
        ],
      },
      {
        stem: "Tengo un compromiso…",
        english: "I have a commitment…",
        hints: {
          que: [
            { es: "el jueves, pero el viernes sí puedo", en: "have a commitment Thursday, but Friday I can" },
            { es: "familiar ese día", en: "family" },
            { es: "que no puedo mover", en: "unmovable" },
          ],
          cuando: [
            { es: "familiar ese día", en: "family" },
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: "el jueves, pero el viernes sí puedo", en: "have a commitment Thursday, but Friday I can", category: "other" },
          { es: "familiar ese día", en: "family", category: "time" },
          { es: "que no puedo mover", en: "unmovable", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
        ],
      },
      {
        stem: "Puedo a partir de…",
        english: "I can from … on",
        hints: {
          que: [
            { es: "las cinco", en: "can from five on" },
            { es: "l miércoles", en: "wednesday" },
            { es: "la próxima semana", en: "next week" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "las cinco", en: "can from five on", category: "other" },
          { es: "l miércoles", en: "wednesday", category: "other" },
          { es: "la próxima semana", en: "next week", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
        ],
      },
    ],
  },
  {
    day: 60,
    theme: "Inviting",
    stems: [
      {
        stem: "¿Vienes a…?",
        english: "Are you coming to…?",
        hints: {
          que: [
            { es: "¿Vienes a la cena del viernes?", en: "are you coming to Friday's dinner?" },
            { es: "¿Vienes a caminar con nosotras?", en: "a walk" },
            { es: "¿Vienes a la escuela para el festival?", en: "the festival" },
          ],
          cuando: [
            { es: "el sábado por la mañana", en: "Saturday morning" },
          ],
        },
        completions: [
          { es: "¿Vienes a la cena del viernes?", en: "are you coming to Friday's dinner?", category: "food" },
          { es: "¿Vienes a caminar con nosotras?", en: "a walk", category: "activity" },
          { es: "¿Vienes a la escuela para el festival?", en: "the festival", category: "other" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
        ],
      },
      {
        stem: "Te invito a…",
        english: "Let me treat you to…",
        hints: {
          que: [
            { es: "un café", en: "let me treat you to a coffee" },
            { es: "cenar a la casa", en: "dinner at home" },
            { es: "l concierto, tengo dos boletos", en: "went to a concert in the park" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: "un café", en: "let me treat you to a coffee", category: "food" },
          { es: "cenar a la casa", en: "dinner at home", category: "food" },
          { es: "l concierto, tengo dos boletos", en: "went to a concert in the park", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
        ],
      },
      {
        stem: "Va a haber…",
        english: "There's going to be…",
        hints: {
          que: [
            { es: "comida de sobra", en: "there's going to be more than enough food" },
            { es: "música en vivo", en: "music everywhere" },
            { es: "gente muy querida", en: "good people" },
          ],
        },
        completions: [
          { es: "comida de sobra", en: "there's going to be more than enough food", category: "food" },
          { es: "música en vivo", en: "music everywhere", category: "other" },
          { es: "gente muy querida", en: "good people", category: "other" },
          { es: "después del trabajo", en: "after work", category: "time" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
        ],
      },
      {
        stem: "Trae a…",
        english: "Bring (someone)…",
        hints: {
          que: [
            { es: "tu hermana si quiere venir", en: "bring your sister if she wants to come" },
            { es: "quien quieras", en: "anyone" },
            { es: "tu perro, es bienvenido", en: "the dog" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
            { es: "el sábado por la mañana", en: "Saturday morning" },
          ],
        },
        completions: [
          { es: "tu hermana si quiere venir", en: "bring your sister if she wants to come", category: "activity" },
          { es: "quien quieras", en: "anyone", category: "other" },
          { es: "tu perro, es bienvenido", en: "the dog", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
        ],
      },
      {
        stem: "Avísame si…",
        english: "Let me know if…",
        hints: {
          que: [
            { es: "puedes venir", en: "let me know if you can come" },
            { es: "cambias de opinión", en: "you change your mind" },
            { es: "necesitas la dirección", en: "you need directions" },
          ],
        },
        completions: [
          { es: "puedes venir", en: "let me know if you can come", category: "activity" },
          { es: "cambias de opinión", en: "you change your mind", category: "other" },
          { es: "necesitas la dirección", en: "you need directions", category: "other" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
        ],
      },
    ],
  },
  {
    day: 61,
    theme: "Changing Plans",
    stems: [
      {
        stem: "¿Podemos dejarlo para…?",
        english: "Can we leave it for…?",
        hints: {
          que: [
            { es: "¿Podemos dejarlo para el domingo?", en: "can we leave it for Sunday?" },
            { es: "¿Podemos dejarlo para la próxima semana?", en: "next week" },
            { es: "¿Podemos dejarlo para cuando estés menos ocupada?", en: "a calmer time" },
          ],
          cuando: [
            { es: "¿Podemos dejarlo para la próxima semana?", en: "next week" },
          ],
        },
        completions: [
          { es: "¿Podemos dejarlo para el domingo?", en: "can we leave it for Sunday?", category: "other" },
          { es: "¿Podemos dejarlo para la próxima semana?", en: "next week", category: "time" },
          { es: "¿Podemos dejarlo para cuando estés menos ocupada?", en: "a calmer time", category: "food" },
          { es: "después del trabajo", en: "after work", category: "time" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
        ],
      },
      {
        stem: "Se me complicó…",
        english: "Things got complicated for me…",
        hints: {
          que: [
            { es: "el día, perdón", en: "my day got complicated — sorry" },
            { es: "con el trabajo", en: "work" },
            { es: "la tarde: ¿lo movemos?", en: "the afternoon" },
          ],
          cuando: [
            { es: "el día, perdón", en: "my day got complicated — sorry" },
            { es: "la tarde: ¿lo movemos?", en: "the afternoon" },
          ],
        },
        completions: [
          { es: "el día, perdón", en: "my day got complicated — sorry", category: "time" },
          { es: "con el trabajo", en: "work", category: "other" },
          { es: "la tarde: ¿lo movemos?", en: "the afternoon", category: "time" },
          { es: "esta semana", en: "this week", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
        ],
      },
      {
        stem: "¿Lo movemos a…?",
        english: "Shall we move it to…?",
        hints: {
          que: [
            { es: "¿Lo movemos a las siete?", en: "shall we move it to seven?" },
            { es: "¿Lo movemos al martes?", en: "tuesday" },
            { es: "¿Lo movemos a tu barrio esta vez?", en: "your side of town" },
          ],
        },
        completions: [
          { es: "¿Lo movemos a las siete?", en: "shall we move it to seven?", category: "other" },
          { es: "¿Lo movemos al martes?", en: "tuesday", category: "other" },
          { es: "¿Lo movemos a tu barrio esta vez?", en: "your side of town", category: "other" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
        ],
      },
      {
        stem: "Perdón por avisar tarde…",
        english: "Sorry for the late notice…",
        hints: {
          que: [
            { es: ", no voy a llegar", en: "not making it" },
            { es: ", ¿sigue en pie el plan?", en: "sorry for the late notice — is the plan still on?" },
            { es: ": hoy no puedo", en: "canceling" },
          ],
          cuando: [
            { es: ": hoy no puedo", en: "canceling" },
            { es: "el sábado por la mañana", en: "Saturday morning" },
          ],
        },
        completions: [
          { es: ", no voy a llegar", en: "not making it", category: "other" },
          { es: ", ¿sigue en pie el plan?", en: "sorry for the late notice — is the plan still on?", category: "other" },
          { es: ": hoy no puedo", en: "canceling", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
        ],
      },
      {
        stem: "Otro día sin falta…",
        english: "Another day, without fail…",
        hints: {
          que: [
            { es: ", te lo prometo", en: "a promise" },
            { es: ", y yo invito", en: "your treat" },
            { es: ": elige tú la fecha", en: "another day for sure — you pick the date" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: ", te lo prometo", en: "a promise", category: "other" },
          { es: ", y yo invito", en: "your treat", category: "other" },
          { es: ": elige tú la fecha", en: "another day for sure — you pick the date", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
        ],
      },
    ],
  },
  {
    day: 62,
    theme: "Confirming",
    stems: [
      {
        stem: "Entonces quedamos así:…",
        english: "So it's settled:…",
        hints: {
          que: [
            { es: "el sábado a las diez", en: "so it's settled: Saturday at ten" },
            { es: "tú traes el postre", en: "who brings what" },
            { es: "entonces quedamos así, ¿va?", en: "final" },
          ],
          cuando: [
            { es: "el sábado a las diez", en: "so it's settled: Saturday at ten" },
          ],
        },
        completions: [
          { es: "el sábado a las diez", en: "so it's settled: Saturday at ten", category: "time" },
          { es: "tú traes el postre", en: "who brings what", category: "other" },
          { es: "entonces quedamos así, ¿va?", en: "final", category: "other" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
        ],
      },
      {
        stem: "Confirmado…",
        english: "Confirmed…",
        hints: {
          que: [
            { es: ", ahí nos vemos", en: "see you there" },
            { es: ": reservé para cuatro", en: "reservation" },
            { es: ", ya compré los boletos", en: "confirmed — I already bought the tickets" },
          ],
          cuando: [
            { es: "el sábado por la mañana", en: "Saturday morning" },
          ],
        },
        completions: [
          { es: ", ahí nos vemos", en: "see you there", category: "other" },
          { es: ": reservé para cuatro", en: "reservation", category: "other" },
          { es: ", ya compré los boletos", en: "confirmed — I already bought the tickets", category: "other" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
        ],
      },
      {
        stem: "Ahí estaré…",
        english: "I'll be there…",
        hints: {
          que: [
            { es: ", puntual como siempre", en: "punctual" },
            { es: "a las ocho", en: "at eight" },
            { es: ", no empiecen sin mí", en: "i'll be there — don't start without me" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: ", puntual como siempre", en: "punctual", category: "other" },
          { es: "a las ocho", en: "at eight", category: "other" },
          { es: ", no empiecen sin mí", en: "i'll be there — don't start without me", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
        ],
      },
      {
        stem: "Nos vemos el…",
        english: "See you on…",
        hints: {
          que: [
            { es: "jueves entonces", en: "see you Thursday, then" },
            { es: "quince en la mañana", en: "the fifteenth" },
            { es: "día del festival", en: "festival day" },
          ],
          cuando: [
            { es: "quince en la mañana", en: "the fifteenth" },
            { es: "día del festival", en: "festival day" },
          ],
        },
        completions: [
          { es: "jueves entonces", en: "see you Thursday, then", category: "other" },
          { es: "quince en la mañana", en: "the fifteenth", category: "time" },
          { es: "día del festival", en: "festival day", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "If anything comes up, text me…",
        hints: {
          que: [
            { es: "cualquier cosa, me escribes", en: "the basic" },
            { es: "y lo resolvemos", en: "if anything comes up, text me and we'll figure it out" },
            { es: "; contesto rápido", en: "fast replies" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
            { es: "el sábado por la mañana", en: "Saturday morning" },
          ],
        },
        completions: [
          { es: "cualquier cosa, me escribes", en: "the basic", category: "other" },
          { es: "y lo resolvemos", en: "if anything comes up, text me and we'll figure it out", category: "other" },
          { es: "; contesto rápido", en: "fast replies", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
        ],
      },
    ],
  },
  {
    day: 63,
    theme: "Repaso: Plans",
    stems: [
      {
        stem: "Tengo una idea:…",
        english: "I have an idea:…",
        hints: {
          que: [
            { es: "mercado primero, café después", en: "market + café" },
            { es: "cine en español con subtítulos", en: "have an idea: a movie in Spanish, with subtitles" },
            { es: "cocinamos en vez de salir", en: "cooking in" },
          ],
          cuando: [
            { es: "esta semana", en: "this week" },
          ],
        },
        completions: [
          { es: "mercado primero, café después", en: "market + café", category: "food" },
          { es: "cine en español con subtítulos", en: "have an idea: a movie in Spanish, with subtitles", category: "other" },
          { es: "cocinamos en vez de salir", en: "cooking in", category: "activity" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
          { es: "esta semana", en: "this week", category: "time" },
        ],
      },
      {
        stem: "Quedamos a las…",
        english: "Let's meet at (time)…",
        hints: {
          que: [
            { es: "once, que es domingo", en: "sunday-late" },
            { es: "cuatro en el parque de siempre", en: "let's meet at four in the usual park" },
            { es: "ocho; llego directo del trabajo", en: "straight from work" },
          ],
        },
        completions: [
          { es: "once, que es domingo", en: "sunday-late", category: "other" },
          { es: "cuatro en el parque de siempre", en: "let's meet at four in the usual park", category: "other" },
          { es: "ocho; llego directo del trabajo", en: "straight from work", category: "other" },
          { es: "después del trabajo", en: "after work", category: "time" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
        ],
      },
      {
        stem: "No me viene bien…",
        english: "… doesn't work for me",
        hints: {
          que: [
            { es: "hoy, de verdad lo siento", en: "today doesn't work for me — I'm really sorry" },
            { es: "tan tarde entre semana", en: "weeknights" },
            { es: "ese café; ¿el otro?", en: "that café" },
          ],
          cuando: [
            { es: "hoy, de verdad lo siento", en: "today doesn't work for me — I'm really sorry" },
            { es: "tan tarde entre semana", en: "weeknights" },
          ],
        },
        completions: [
          { es: "hoy, de verdad lo siento", en: "today doesn't work for me — I'm really sorry", category: "time" },
          { es: "tan tarde entre semana", en: "weeknights", category: "time" },
          { es: "ese café; ¿el otro?", en: "that café", category: "food" },
          { es: "esta semana", en: "this week", category: "time" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
        ],
      },
      {
        stem: "¿Vienes a…?",
        english: "Are you coming to…?",
        hints: {
          que: [
            { es: "¿Vienes a la lectura de poesía el jueves?", en: "are you coming to the poetry reading on Thursday?" },
            { es: "¿Vienes a conocer a mis amigos?", en: "meeting friends" },
            { es: "¿Vienes a la feria del barrio conmigo?", en: "the fair" },
          ],
        },
        completions: [
          { es: "¿Vienes a la lectura de poesía el jueves?", en: "are you coming to the poetry reading on Thursday?", category: "other" },
          { es: "¿Vienes a conocer a mis amigos?", en: "meeting friends", category: "other" },
          { es: "¿Vienes a la feria del barrio conmigo?", en: "the fair", category: "other" },
          { es: "si te queda bien", en: "if it works for you", category: "other" },
          { es: "cerca del centro", en: "near downtown", category: "other" },
        ],
      },
      {
        stem: "Entonces quedamos así:…",
        english: "So it's settled:…",
        hints: {
          que: [
            { es: "yo llevo el café, tú los cuentos", en: "so it's settled: I bring the coffee, you bring the stories" },
            { es: "nos escribimos el viernes", en: "check in Friday" },
            { es: "entonces quedamos así y no se cambia más", en: "no more changes" },
          ],
          cuando: [
            { es: "el sábado por la mañana", en: "Saturday morning" },
          ],
        },
        completions: [
          { es: "yo llevo el café, tú los cuentos", en: "so it's settled: I bring the coffee, you bring the stories", category: "food" },
          { es: "nos escribimos el viernes", en: "check in Friday", category: "other" },
          { es: "entonces quedamos así y no se cambia más", en: "no more changes", category: "other" },
          { es: "el sábado por la mañana", en: "Saturday morning", category: "time" },
          { es: "después del trabajo", en: "after work", category: "time" },
        ],
      },
    ],
  },
  {
    day: 64,
    theme: "Both Sides",
    stems: [
      {
        stem: "Por un lado…",
        english: "On one hand…",
        hints: {
          que: [
            { es: ", extraño Atlanta", en: "on one hand, I miss Atlanta" },
            { es: ", el plan suena perfecto", en: "liking a plan" },
            { es: ", me encanta la idea", en: "an idea" },
          ],
        },
        completions: [
          { es: ", extraño Atlanta", en: "on one hand, I miss Atlanta", category: "other" },
          { es: ", el plan suena perfecto", en: "liking a plan", category: "other" },
          { es: ", me encanta la idea", en: "an idea", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
        ],
      },
      {
        stem: "Por otro lado…",
        english: "On the other hand…",
        hints: {
          que: [
            { es: ", mi vida está aquí ahora", en: "on the other hand, my life is here now" },
            { es: ", no tenemos mucho tiempo", en: "time limits" },
            { es: ", nunca lo hemos intentado", en: "never tried" },
          ],
          cuando: [
            { es: ", mi vida está aquí ahora", en: "on the other hand, my life is here now" },
          ],
        },
        completions: [
          { es: ", mi vida está aquí ahora", en: "on the other hand, my life is here now", category: "time" },
          { es: ", no tenemos mucho tiempo", en: "time limits", category: "other" },
          { es: ", nunca lo hemos intentado", en: "never tried", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
        ],
      },
      {
        stem: "Lo bueno es que…",
        english: "The good thing is…",
        hints: {
          que: [
            { es: "se puede cambiar la fecha", en: "flexible dates" },
            { es: "queda cerca", en: "close by" },
            { es: "aprendí algo, hasta del error", en: "the good thing is I learned something, even from the mistake" },
          ],
          cuando: [
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "se puede cambiar la fecha", en: "flexible dates", category: "other" },
          { es: "queda cerca", en: "close by", category: "other" },
          { es: "aprendí algo, hasta del error", en: "the good thing is I learned something, even from the mistake", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
        ],
      },
      {
        stem: "Lo malo es que…",
        english: "The bad thing is…",
        hints: {
          que: [
            { es: "cierra temprano", en: "early closing" },
            { es: "hay que reservar con meses", en: "reservations" },
            { es: "el verano se acaba", en: "the bad thing is summer is ending" },
          ],
          cuando: [
            { es: "el verano se acaba", en: "the bad thing is summer is ending" },
          ],
        },
        completions: [
          { es: "cierra temprano", en: "early closing", category: "other" },
          { es: "hay que reservar con meses", en: "reservations", category: "other" },
          { es: "el verano se acaba", en: "the bad thing is summer is ending", category: "time" },
          { es: "no siempre", en: "not always", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
        ],
      },
      {
        stem: "Al mismo tiempo…",
        english: "At the same time…",
        hints: {
          que: [
            { es: ", entiendo su punto", en: "their point" },
            { es: ", no quiero apurarme", en: "no rush" },
            { es: ", las dos cosas son ciertas", en: "at the same time, both things are true" },
          ],
          cuando: [
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: ", entiendo su punto", en: "their point", category: "other" },
          { es: ", no quiero apurarme", en: "no rush", category: "other" },
          { es: ", las dos cosas son ciertas", en: "at the same time, both things are true", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
        ],
      },
    ],
  },
  {
    day: 65,
    theme: "Maybe",
    stems: [
      {
        stem: "Puede ser que…",
        english: "It may be that…",
        hints: {
          que: [
            { es: "tengas razón", en: "you may be right" },
            { es: "llueva más tarde", en: "rain" },
            { es: "sea demasiado pronto para saber", en: "too soon" },
          ],
          cuando: [
            { es: "llueva más tarde", en: "rain" },
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "tengas razón", en: "you may be right", category: "other" },
          { es: "llueva más tarde", en: "rain", category: "time" },
          { es: "sea demasiado pronto para saber", en: "too soon", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
        ],
      },
      {
        stem: "Quizás…",
        english: "Perhaps…",
        hints: {
          que: [
            { es: "me animo y pregunto", en: "maybe I'll work up the nerve and ask" },
            { es: "es cuestión de tiempo", en: "time" },
            { es: "necesito escucharlo otra vez", en: "a re-listen" },
          ],
        },
        completions: [
          { es: "me animo y pregunto", en: "maybe I'll work up the nerve and ask", category: "other" },
          { es: "es cuestión de tiempo", en: "time", category: "other" },
          { es: "necesito escucharlo otra vez", en: "a re-listen", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
        ],
      },
      {
        stem: "Tal vez…",
        english: "Maybe…",
        hints: {
          que: [
            { es: "el año que viene", en: "next year" },
            { es: "sí, tal vez no — todavía no sé", en: "maybe yes, maybe no — I don't know yet" },
            { es: "necesito caminar y pensarlo", en: "a re-listen" },
          ],
          cuando: [
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "el año que viene", en: "next year", category: "other" },
          { es: "sí, tal vez no — todavía no sé", en: "maybe yes, maybe no — I don't know yet", category: "other" },
          { es: "necesito caminar y pensarlo", en: "a re-listen", category: "activity" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
        ],
      },
      {
        stem: "Es posible que…",
        english: "It's possible that…",
        hints: {
          que: [
            { es: "cambie de opinión", en: "changing minds" },
            { es: "haya otra manera", en: "another way" },
            { es: "me quede un año más", en: "possible I'll stay one more year" },
          ],
        },
        completions: [
          { es: "cambie de opinión", en: "changing minds", category: "other" },
          { es: "haya otra manera", en: "another way", category: "other" },
          { es: "me quede un año más", en: "possible I'll stay one more year", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
        ],
      },
      {
        stem: "Seguramente…",
        english: "Surely / most likely…",
        hints: {
          que: [
            { es: "hay una explicación", en: "surely there's an explanation" },
            { es: "se le olvidó, no es nada personal", en: "forgetfulness" },
            { es: "va a salir bien", en: "good endings" },
          ],
        },
        completions: [
          { es: "hay una explicación", en: "surely there's an explanation", category: "other" },
          { es: "se le olvidó, no es nada personal", en: "forgetfulness", category: "other" },
          { es: "va a salir bien", en: "good endings", category: "activity" },
          { es: "más o menos", en: "more or less", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
        ],
      },
    ],
  },
  {
    day: 66,
    theme: "I Don't Think So",
    stems: [
      {
        stem: "No creo que…",
        english: "I don't think that…",
        hints: {
          que: [
            { es: "sea tan grave", en: "don't think it's that serious" },
            { es: "llegue a tiempo", en: "I made it on time" },
            { es: "haga falta reservar", en: "reservations" },
          ],
          cuando: [
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "sea tan grave", en: "don't think it's that serious", category: "other" },
          { es: "llegue a tiempo", en: "I made it on time", category: "other" },
          { es: "haga falta reservar", en: "reservations", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
        ],
      },
      {
        stem: "Dudo que…",
        english: "I doubt that…",
        hints: {
          que: [
            { es: "abran tan temprano", en: "opening hours" },
            { es: "sea coincidencia", en: "doubt it's a coincidence" },
            { es: "lo hayan hecho a propósito", en: "intent" },
          ],
        },
        completions: [
          { es: "abran tan temprano", en: "opening hours", category: "other" },
          { es: "sea coincidencia", en: "doubt it's a coincidence", category: "other" },
          { es: "lo hayan hecho a propósito", en: "intent", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
        ],
      },
      {
        stem: "No me parece que…",
        english: "It doesn't seem to me that…",
        hints: {
          que: [
            { es: "sea justo", en: "it doesn't seem fair to me" },
            { es: "esté listo todavía", en: "readiness" },
            { es: "valga la pena discutir", en: "arguing" },
          ],
        },
        completions: [
          { es: "sea justo", en: "it doesn't seem fair to me", category: "other" },
          { es: "esté listo todavía", en: "readiness", category: "food" },
          { es: "valga la pena discutir", en: "arguing", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that…",
        hints: {
          que: [
            { es: "no quiera, es que no puedo", en: "not that I don't want to — it's that I can't" },
            { es: "sea difícil, es que es nuevo", en: "difficulty" },
            { es: "me moleste, pero pregunto", en: "bothering" },
          ],
          cuando: [
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "no quiera, es que no puedo", en: "not that I don't want to — it's that I can't", category: "other" },
          { es: "sea difícil, es que es nuevo", en: "difficulty", category: "other" },
          { es: "me moleste, pero pregunto", en: "bothering", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
        ],
      },
      {
        stem: "No estoy convencida de que…",
        english: "I'm not convinced that…",
        hints: {
          que: [
            { es: "sea la mejor opción", en: "i'm not convinced it's the best option" },
            { es: "funcione así", en: "how it works" },
            { es: "haya que decidir ya", en: "deciding now" },
          ],
        },
        completions: [
          { es: "sea la mejor opción", en: "i'm not convinced it's the best option", category: "opinion" },
          { es: "funcione así", en: "how it works", category: "other" },
          { es: "haya que decidir ya", en: "deciding now", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
        ],
      },
    ],
  },
  {
    day: 67,
    theme: "Nuancing",
    stems: [
      {
        stem: "Hasta cierto punto…",
        english: "Up to a point…",
        hints: {
          que: [
            { es: ", estoy de acuerdo", en: "up to a point, I agree" },
            { es: ", es verdad", en: "truth" },
            { es: ", todos tenemos la culpa", en: "shared blame" },
          ],
        },
        completions: [
          { es: ", estoy de acuerdo", en: "up to a point, I agree", category: "other" },
          { es: ", es verdad", en: "truth", category: "other" },
          { es: ", todos tenemos la culpa", en: "shared blame", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
        ],
      },
      {
        stem: "En general…, pero…",
        english: "In general…, but…",
        hints: {
          que: [
            { es: "en general me gusta, pero hoy no", en: "moods" },
            { es: "en general es tranquilo, pero los viernes no tanto", en: "the neighborhood" },
            { es: "en general sí, pero depende del día", en: "in general yes, but it depends on the day" },
          ],
          cuando: [
            { es: "en general me gusta, pero hoy no", en: "moods" },
            { es: "en general sí, pero depende del día", en: "in general yes, but it depends on the day" },
          ],
        },
        completions: [
          { es: "en general me gusta, pero hoy no", en: "moods", category: "time" },
          { es: "en general es tranquilo, pero los viernes no tanto", en: "the neighborhood", category: "other" },
          { es: "en general sí, pero depende del día", en: "in general yes, but it depends on the day", category: "time" },
          { es: "en mi caso", en: "in my case", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
        ],
      },
      {
        stem: "Más bien…",
        english: "Rather / more like…",
        hints: {
          que: [
            { es: "fue un malentendido", en: "more like a misunderstanding" },
            { es: "es cuestión de costumbre", en: "habit" },
            { es: "diría que fue suerte", en: "luck" },
          ],
        },
        completions: [
          { es: "fue un malentendido", en: "more like a misunderstanding", category: "other" },
          { es: "es cuestión de costumbre", en: "habit", category: "other" },
          { es: "diría que fue suerte", en: "luck", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
        ],
      },
      {
        stem: "No tanto… sino…",
        english: "Not so much… but rather…",
        hints: {
          que: [
            { es: "no tanto por el dinero, sino por el tiempo", en: "money vs time" },
            { es: "no tanto la gramática, sino la confianza", en: "not so much the grammar — more the confidence" },
            { es: "no tanto el frío, sino el viento", en: "freezing cold" },
          ],
          cuando: [
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "no tanto por el dinero, sino por el tiempo", en: "money vs time", category: "other" },
          { es: "no tanto la gramática, sino la confianza", en: "not so much the grammar — more the confidence", category: "other" },
          { es: "no tanto el frío, sino el viento", en: "freezing cold", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
        ],
      },
      {
        stem: "Digamos que…",
        english: "Let's say…",
        hints: {
          que: [
            { es: "no fue mi mejor día", en: "a rough day" },
            { es: "quedamos en empate", en: "a tie" },
            { es: "el pastel no sobrevivió al viaje", en: "let's say the cake didn't survive the trip" },
          ],
          cuando: [
            { es: "no fue mi mejor día", en: "a rough day" },
          ],
        },
        completions: [
          { es: "no fue mi mejor día", en: "a rough day", category: "time" },
          { es: "quedamos en empate", en: "a tie", category: "other" },
          { es: "el pastel no sobrevivió al viaje", en: "let's say the cake didn't survive the trip", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
        ],
      },
    ],
  },
  {
    day: 68,
    theme: "According To…",
    stems: [
      {
        stem: "Según…",
        english: "According to…",
        hints: {
          que: [
            { es: "mi vecina, el mejor pan sale a las ocho", en: "according to my neighbor, the best bread comes out at eight" },
            { es: "las noticias, va a hacer calor toda la semana", en: "very hot" },
            { es: "mi mamá, siempre hay tiempo para llamar", en: "your mom" },
          ],
          cuando: [
            { es: "las noticias, va a hacer calor toda la semana", en: "very hot" },
          ],
        },
        completions: [
          { es: "mi vecina, el mejor pan sale a las ocho", en: "according to my neighbor, the best bread comes out at eight", category: "opinion" },
          { es: "las noticias, va a hacer calor toda la semana", en: "very hot", category: "time" },
          { es: "mi mamá, siempre hay tiempo para llamar", en: "your mom", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
        ],
      },
      {
        stem: "Dicen que…",
        english: "They say that…",
        hints: {
          que: [
            { es: "el otoño llega temprano este año", en: "the seasons" },
            { es: "ese restaurante es buenísimo", en: "a restaurant" },
            { es: "hablar solo es señal de buen estudiante", en: "they say talking to yourself is the sign of a good student" },
          ],
          cuando: [
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "el otoño llega temprano este año", en: "the seasons", category: "other" },
          { es: "ese restaurante es buenísimo", en: "a restaurant", category: "food" },
          { es: "hablar solo es señal de buen estudiante", en: "they say talking to yourself is the sign of a good student", category: "activity" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
        ],
      },
      {
        stem: "He leído que…",
        english: "I've read that…",
        hints: {
          que: [
            { es: "dormir bien ayuda con los idiomas", en: "i've read that sleeping well helps with languages" },
            { es: "la ciudad va a arreglar el parque", en: "city news" },
            { es: "el libro es mejor que la película", en: "book vs movie" },
          ],
        },
        completions: [
          { es: "dormir bien ayuda con los idiomas", en: "i've read that sleeping well helps with languages", category: "other" },
          { es: "la ciudad va a arreglar el parque", en: "city news", category: "other" },
          { es: "el libro es mejor que la película", en: "book vs movie", category: "opinion" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
        ],
      },
      {
        stem: "Por lo que entiendo…",
        english: "From what I understand…",
        hints: {
          que: [
            { es: ", el cambio es en septiembre", en: "a date" },
            { es: ", no hace falta inscribirse", en: "sign-ups" },
            { es: ", todavía no hay nada decidido", en: "from what I understand, nothing's decided yet" },
          ],
        },
        completions: [
          { es: ", el cambio es en septiembre", en: "a date", category: "other" },
          { es: ", no hace falta inscribirse", en: "sign-ups", category: "other" },
          { es: ", todavía no hay nada decidido", en: "from what I understand, nothing's decided yet", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
        ],
      },
      {
        stem: "En mi experiencia…",
        english: "In my experience…",
        hints: {
          que: [
            { es: ", los estudiantes aprenden más riéndose", en: "in my experience, students learn more when they're laughing" },
            { es: ", quince minutos diarios ganan", en: "daily practice" },
            { es: ", la gente quiere ayudar", en: "kind strangers" },
          ],
          cuando: [
            { es: ", quince minutos diarios ganan", en: "daily practice" },
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: ", los estudiantes aprenden más riéndose", en: "in my experience, students learn more when they're laughing", category: "other" },
          { es: ", quince minutos diarios ganan", en: "daily practice", category: "time" },
          { es: ", la gente quiere ayudar", en: "kind strangers", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
        ],
      },
    ],
  },
  {
    day: 69,
    theme: "Your Take, Calmly",
    stems: [
      {
        stem: "Desde mi punto de vista…",
        english: "From my point of view…",
        hints: {
          que: [
            { es: ", vale la pena intentarlo", en: "from my point of view, it's worth trying" },
            { es: ", el problema es otro", en: "the real problem" },
            { es: ", vamos bien", en: "on track" },
          ],
        },
        completions: [
          { es: ", vale la pena intentarlo", en: "from my point of view, it's worth trying", category: "other" },
          { es: ", el problema es otro", en: "the real problem", category: "other" },
          { es: ", vamos bien", en: "on track", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
        ],
      },
      {
        stem: "Siendo honesta…",
        english: "Being honest…",
        hints: {
          que: [
            { es: ", no me convence", en: "unconvinced" },
            { es: ", me da un poco de miedo", en: "being honest, it scares me a little" },
            { es: ", prefiero quedarme en casa hoy", en: "staying in" },
          ],
          cuando: [
            { es: ", prefiero quedarme en casa hoy", en: "staying in" },
          ],
        },
        completions: [
          { es: ", no me convence", en: "unconvinced", category: "other" },
          { es: ", me da un poco de miedo", en: "being honest, it scares me a little", category: "other" },
          { es: ", prefiero quedarme en casa hoy", en: "staying in", category: "time" },
          { es: "más o menos", en: "more or less", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
        ],
      },
      {
        stem: "Lo veo así:…",
        english: "The way I see it:…",
        hints: {
          que: [
            { es: "es una oportunidad, no una amenaza", en: "opportunity" },
            { es: "si no pregunto, nunca voy a saber", en: "the way I see it: if I don't ask, I'll never know" },
            { es: "cada frase cuenta", en: "every sentence" },
          ],
          cuando: [
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "es una oportunidad, no una amenaza", en: "opportunity", category: "other" },
          { es: "si no pregunto, nunca voy a saber", en: "the way I see it: if I don't ask, I'll never know", category: "other" },
          { es: "cada frase cuenta", en: "every sentence", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
        ],
      },
      {
        stem: "Al final de cuentas…",
        english: "At the end of the day…",
        hints: {
          que: [
            { es: ", es mi decisión", en: "at the end of the day, it's my decision" },
            { es: ", lo que importa es la gente", en: "what matters" },
            { es: ", nadie lo hace perfecto", en: "nobody's perfect" },
          ],
        },
        completions: [
          { es: ", es mi decisión", en: "at the end of the day, it's my decision", category: "other" },
          { es: ", lo que importa es la gente", en: "what matters", category: "other" },
          { es: ", nadie lo hace perfecto", en: "nobody's perfect", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
        ],
      },
      {
        stem: "Puede que sí, pero…",
        english: "Maybe so, but…",
        hints: {
          que: [
            { es: "quiero verlo primero", en: "seeing first" },
            { es: "no hoy", en: "not today" },
            { es: "me gustaría otra opinión", en: "maybe so, but I'd like a second opinion" },
          ],
          cuando: [
            { es: "no hoy", en: "not today" },
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "quiero verlo primero", en: "seeing first", category: "other" },
          { es: "no hoy", en: "not today", category: "time" },
          { es: "me gustaría otra opinión", en: "maybe so, but I'd like a second opinion", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
        ],
      },
    ],
  },
  {
    day: 70,
    theme: "Repaso: Nuance",
    stems: [
      {
        stem: "Lo bueno es que…",
        english: "The good thing is…",
        hints: {
          que: [
            { es: "mañana es viernes", en: "friday" },
            { es: "ya sé pedir ayuda en español", en: "the good thing is I already know how to ask for help in Spanish" },
            { es: "el error se arregla fácil", en: "fixable" },
          ],
          cuando: [
            { es: "mañana es viernes", en: "friday" },
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "mañana es viernes", en: "friday", category: "time" },
          { es: "ya sé pedir ayuda en español", en: "the good thing is I already know how to ask for help in Spanish", category: "other" },
          { es: "el error se arregla fácil", en: "fixable", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
        ],
      },
      {
        stem: "Tal vez…",
        english: "Maybe…",
        hints: {
          que: [
            { es: "es hora de un cambio pequeño", en: "small changes" },
            { es: "la respuesta llega caminando", en: "maybe the answer shows up while walking" },
            { es: "exagero, pero mejor preguntar", en: "overthinking" },
          ],
          cuando: [
            { es: "es hora de un cambio pequeño", en: "small changes" },
          ],
        },
        completions: [
          { es: "es hora de un cambio pequeño", en: "small changes", category: "time" },
          { es: "la respuesta llega caminando", en: "maybe the answer shows up while walking", category: "other" },
          { es: "exagero, pero mejor preguntar", en: "overthinking", category: "opinion" },
          { es: "no siempre", en: "not always", category: "other" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that…",
        hints: {
          que: [
            { es: "no me guste, es que no es mi estilo", en: "style" },
            { es: "tenga prisa, es que quiero llegar con calma", en: "not that I'm in a hurry — I just want to arrive calm" },
            { es: "sea tarde, es que empezamos temprano", en: "early starts" },
          ],
          cuando: [
            { es: "sea tarde, es que empezamos temprano", en: "early starts" },
            { es: "depende del día", en: "it depends on the day" },
          ],
        },
        completions: [
          { es: "no me guste, es que no es mi estilo", en: "style", category: "other" },
          { es: "tenga prisa, es que quiero llegar con calma", en: "not that I'm in a hurry — I just want to arrive calm", category: "other" },
          { es: "sea tarde, es que empezamos temprano", en: "early starts", category: "time" },
          { es: "depende del día", en: "it depends on the day", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
        ],
      },
      {
        stem: "Digamos que…",
        english: "Let's say…",
        hints: {
          que: [
            { es: "la reunión pudo ser un correo", en: "let's say the meeting could have been an email" },
            { es: "mi primer intento no salió como en el video", en: "first attempts" },
            { es: "ya casi es fin de semana", en: "almost Friday" },
          ],
          cuando: [
            { es: "ya casi es fin de semana", en: "almost Friday" },
          ],
        },
        completions: [
          { es: "la reunión pudo ser un correo", en: "let's say the meeting could have been an email", category: "other" },
          { es: "mi primer intento no salió como en el video", en: "first attempts", category: "other" },
          { es: "ya casi es fin de semana", en: "almost Friday", category: "time" },
          { es: "a veces sí, a veces no", en: "sometimes yes, sometimes no", category: "other" },
          { es: "en mi caso", en: "in my case", category: "other" },
        ],
      },
      {
        stem: "Según…",
        english: "According to…",
        hints: {
          que: [
            { es: "mis estudiantes, mi español va mejorando", en: "according to my students, my Spanish is getting better" },
            { es: "el pronóstico, mañana sí sale el sol", en: "the forecast" },
            { es: "yo, ya estamos listas", en: "yourself" },
          ],
          cuando: [
            { es: "el pronóstico, mañana sí sale el sol", en: "the forecast" },
          ],
        },
        completions: [
          { es: "mis estudiantes, mi español va mejorando", en: "according to my students, my Spanish is getting better", category: "opinion" },
          { es: "el pronóstico, mañana sí sale el sol", en: "the forecast", category: "time" },
          { es: "yo, ya estamos listas", en: "yourself", category: "other" },
          { es: "más o menos", en: "more or less", category: "other" },
          { es: "no siempre", en: "not always", category: "other" },
        ],
      },
    ],
  },
  {
    day: 71,
    theme: "Something's Broken",
    stems: [
      {
        stem: "No funciona…",
        english: "… isn't working",
        hints: {
          que: [
            { es: "el wifi otra vez", en: "wifi" },
            { es: "el botón de guardar", en: "the save button isn't working" },
            { es: "como debería", en: "as it should" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "el wifi otra vez", en: "wifi", category: "other" },
          { es: "el botón de guardar", en: "the save button isn't working", category: "other" },
          { es: "como debería", en: "as it should", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
          { es: "sin avisar", en: "without warning", category: "other" },
        ],
      },
      {
        stem: "Está roto/a…",
        english: "… is broken",
        hints: {
          que: [
            { es: "está rota la impresora de la escuela", en: "the school printer is broken" },
            { es: "está roto el cierre de mi mochila", en: "a zipper" },
            { es: "está rota la máquina de café — emergencia real", en: "the coffee machine" },
          ],
        },
        completions: [
          { es: "está rota la impresora de la escuela", en: "the school printer is broken", category: "other" },
          { es: "está roto el cierre de mi mochila", en: "a zipper", category: "other" },
          { es: "está rota la máquina de café — emergencia real", en: "the coffee machine", category: "food" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
        ],
      },
      {
        stem: "No prende…",
        english: "… won't turn on",
        hints: {
          que: [
            { es: "la computadora", en: "the computer" },
            { es: "la luz del pasillo", en: "a light" },
            { es: "y ya revisé el cable", en: "it won't turn on, and I already checked the cable" },
          ],
        },
        completions: [
          { es: "la computadora", en: "the computer", category: "other" },
          { es: "la luz del pasillo", en: "a light", category: "other" },
          { es: "y ya revisé el cable", en: "it won't turn on, and I already checked the cable", category: "other" },
          { es: "sin avisar", en: "without warning", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
        ],
      },
      {
        stem: "Se descompuso…",
        english: "… broke down",
        hints: {
          que: [
            { es: "el lavaplatos", en: "the dishwasher" },
            { es: "el tren y llegué tarde", en: "the train broke down and I got there late" },
            { es: "justo cuando más lo necesitaba", en: "worst timing" },
          ],
          cuando: [
            { es: "el tren y llegué tarde", en: "the train broke down and I got there late" },
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "el lavaplatos", en: "the dishwasher", category: "other" },
          { es: "el tren y llegué tarde", en: "the train broke down and I got there late", category: "time" },
          { es: "justo cuando más lo necesitaba", en: "worst timing", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
        ],
      },
      {
        stem: "Deja de funcionar cuando…",
        english: "It stops working when…",
        hints: {
          que: [
            { es: "abro muchas pestañas", en: "too many tabs" },
            { es: "hace mucho calor", en: "very hot" },
            { es: "lo conecto al proyector", en: "it stops working when I connect it to the projector" },
          ],
        },
        completions: [
          { es: "abro muchas pestañas", en: "too many tabs", category: "other" },
          { es: "hace mucho calor", en: "very hot", category: "other" },
          { es: "lo conecto al proyector", en: "it stops working when I connect it to the projector", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
        ],
      },
    ],
  },
  {
    day: 72,
    theme: "Polite Complaints (usted)",
    stems: [
      {
        stem: "Disculpe, …",
        english: "Excuse me, … (usted)",
        hints: {
          que: [
            { es: "creo que hay un error en la cuenta", en: "excuse me, I think there's a mistake on the bill" },
            { es: "pedí esto hace media hora", en: "a wait" },
            { es: "¿me puede atender cuando pueda?", en: "getting attention" },
          ],
          cuando: [
            { es: "pedí esto hace media hora", en: "a wait" },
          ],
        },
        completions: [
          { es: "creo que hay un error en la cuenta", en: "excuse me, I think there's a mistake on the bill", category: "opinion" },
          { es: "pedí esto hace media hora", en: "a wait", category: "time" },
          { es: "¿me puede atender cuando pueda?", en: "getting attention", category: "other" },
          { es: "sin avisar", en: "without warning", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
        ],
      },
      {
        stem: "Hubo un problema con…",
        english: "There was a problem with…",
        hints: {
          que: [
            { es: "mi reserva", en: "a problem with my reservation" },
            { es: "el pago", en: "a payment" },
            { es: "la entrega", en: "a delivery" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "mi reserva", en: "a problem with my reservation", category: "other" },
          { es: "el pago", en: "a payment", category: "other" },
          { es: "la entrega", en: "a delivery", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
        ],
      },
      {
        stem: "Creo que hay un error en…",
        english: "I think there's a mistake in…",
        hints: {
          que: [
            { es: "la factura", en: "an invoice" },
            { es: "mi pedido", en: "an order" },
            { es: "la fecha", en: "think there's a mistake in the date" },
          ],
        },
        completions: [
          { es: "la factura", en: "an invoice", category: "other" },
          { es: "mi pedido", en: "an order", category: "other" },
          { es: "la fecha", en: "think there's a mistake in the date", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
        ],
      },
      {
        stem: "Pedí… pero…",
        english: "I ordered… but…",
        hints: {
          que: [
            { es: "pedí un café descafeinado, pero creo que este no lo es", en: "decaf" },
            { es: "pedí la talla mediana, pero me llegó la grande", en: "sizes" },
            { es: "pedí dos, pero solo llegó uno", en: "ordered two, but only one came" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "pedí un café descafeinado, pero creo que este no lo es", en: "decaf", category: "food" },
          { es: "pedí la talla mediana, pero me llegó la grande", en: "sizes", category: "other" },
          { es: "pedí dos, pero solo llegó uno", en: "ordered two, but only one came", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
          { es: "sin avisar", en: "without warning", category: "other" },
        ],
      },
      {
        stem: "¿Me puede ayudar con…?",
        english: "Can you help me with…? (usted)",
        hints: {
          que: [
            { es: "¿Me puede ayudar con esto, por favor?", en: "this" },
            { es: "¿Me puede ayudar con un cambio de asiento?", en: "a seat change" },
            { es: "¿Me puede ayudar con el formulario? No entiendo esta parte", en: "can you help me with the form? I don't understand this part" },
          ],
        },
        completions: [
          { es: "¿Me puede ayudar con esto, por favor?", en: "this", category: "other" },
          { es: "¿Me puede ayudar con un cambio de asiento?", en: "a seat change", category: "other" },
          { es: "¿Me puede ayudar con el formulario? No entiendo esta parte", en: "can you help me with the form? I don't understand this part", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
        ],
      },
    ],
  },
  {
    day: 73,
    theme: "Misunderstandings",
    stems: [
      {
        stem: "Creo que nos entendimos mal…",
        english: "I think we misunderstood each other…",
        hints: {
          que: [
            { es: "con la hora", en: "think we misunderstood each other about the time" },
            { es: ", yo hablaba de otra cosa", en: "the topic" },
            { es: "y no pasa nada", en: "no harm done" },
          ],
          cuando: [
            { es: "con la hora", en: "think we misunderstood each other about the time" },
          ],
        },
        completions: [
          { es: "con la hora", en: "think we misunderstood each other about the time", category: "time" },
          { es: ", yo hablaba de otra cosa", en: "the topic", category: "other" },
          { es: "y no pasa nada", en: "no harm done", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
        ],
      },
      {
        stem: "No quise decir eso…",
        english: "I didn't mean that…",
        hints: {
          que: [
            { es: ", perdón", en: "didn't mean that — sorry" },
            { es: "; me salió mal la frase", en: "a bad phrasing" },
            { es: "para nada", en: "emphatically" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: ", perdón", en: "didn't mean that — sorry", category: "other" },
          { es: "; me salió mal la frase", en: "a bad phrasing", category: "other" },
          { es: "para nada", en: "emphatically", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
          { es: "sin avisar", en: "without warning", category: "other" },
        ],
      },
      {
        stem: "Lo que quería decir es…",
        english: "What I meant was…",
        hints: {
          que: [
            { es: "que me encanta la idea", en: "a compliment" },
            { es: "otra cosa", en: "something else" },
            { es: "que sí, pero más tarde", en: "what I meant was: yes, but later" },
          ],
          cuando: [
            { es: "que sí, pero más tarde", en: "what I meant was: yes, but later" },
          ],
        },
        completions: [
          { es: "que me encanta la idea", en: "a compliment", category: "other" },
          { es: "otra cosa", en: "something else", category: "other" },
          { es: "que sí, pero más tarde", en: "what I meant was: yes, but later", category: "time" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
        ],
      },
      {
        stem: "Pensé que habías dicho…",
        english: "I thought you'd said…",
        hints: {
          que: [
            { es: "el martes", en: "you'd said Tuesday" },
            { es: "que venías", en: "coming" },
            { es: "lo contrario", en: "the opposite" },
          ],
        },
        completions: [
          { es: "el martes", en: "you'd said Tuesday", category: "other" },
          { es: "que venías", en: "coming", category: "other" },
          { es: "lo contrario", en: "the opposite", category: "other" },
          { es: "sin avisar", en: "without warning", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
        ],
      },
      {
        stem: "Empecemos de nuevo…",
        english: "Let's start over…",
        hints: {
          que: [
            { es: ", ¿te parece?", en: "let's start over — sound good?" },
            { es: ": yo decía una cosa y tú otra", en: "both sides" },
            { es: "desde el principio", en: "from the top" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: ", ¿te parece?", en: "let's start over — sound good?", category: "opinion" },
          { es: ": yo decía una cosa y tú otra", en: "both sides", category: "other" },
          { es: "desde el principio", en: "from the top", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
        ],
      },
    ],
  },
  {
    day: 74,
    theme: "Lost Things",
    stems: [
      {
        stem: "Perdí…",
        english: "I lost…",
        hints: {
          que: [
            { es: "mi tarjeta del metro", en: "a transit card" },
            { es: "el hilo de la conversación", en: "lost the thread of the conversation" },
            { es: "la cuenta de cuántas veces lo intenté", en: "count" },
          ],
        },
        completions: [
          { es: "mi tarjeta del metro", en: "a transit card", category: "other" },
          { es: "el hilo de la conversación", en: "lost the thread of the conversation", category: "other" },
          { es: "la cuenta de cuántas veces lo intenté", en: "count", category: "food" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
        ],
      },
      {
        stem: "Se me perdió…",
        english: "… got lost on me",
        hints: {
          que: [
            { es: "el paraguas otra vez", en: "an umbrella" },
            { es: "se me perdieron las llaves", en: "my keys got lost on me" },
            { es: "un guante, como siempre", en: "a glove" },
          ],
        },
        completions: [
          { es: "el paraguas otra vez", en: "an umbrella", category: "other" },
          { es: "se me perdieron las llaves", en: "my keys got lost on me", category: "other" },
          { es: "un guante, como siempre", en: "a glove", category: "other" },
          { es: "sin avisar", en: "without warning", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
        ],
      },
      {
        stem: "Dejé … en…",
        english: "I left … in/at…",
        hints: {
          que: [
            { es: "dejé mi abrigo en el restaurante", en: "left my coat at the restaurant" },
            { es: "dejé los exámenes en la escuela", en: "the exams" },
            { es: "dejé el teléfono en casa y sobreviví", en: "the phone" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "dejé mi abrigo en el restaurante", en: "left my coat at the restaurant", category: "food" },
          { es: "dejé los exámenes en la escuela", en: "the exams", category: "other" },
          { es: "dejé el teléfono en casa y sobreviví", en: "the phone", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
        ],
      },
      {
        stem: "¿Alguien ha visto…?",
        english: "Has anyone seen…?",
        hints: {
          que: [
            { es: "¿Alguien ha visto mis lentes?", en: "glasses" },
            { es: "¿Alguien ha visto un cuaderno rojo?", en: "has anyone seen a red notebook?" },
            { es: "¿Alguien ha visto al gato?", en: "the cat" },
          ],
        },
        completions: [
          { es: "¿Alguien ha visto mis lentes?", en: "glasses", category: "other" },
          { es: "¿Alguien ha visto un cuaderno rojo?", en: "has anyone seen a red notebook?", category: "other" },
          { es: "¿Alguien ha visto al gato?", en: "the cat", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
        ],
      },
      {
        stem: "La última vez que lo vi…",
        english: "The last time I saw it…",
        hints: {
          que: [
            { es: "fue en la cocina", en: "the kitchen" },
            { es: "lo tenías tú", en: "someone had it" },
            { es: "estaba en mi bolsa", en: "the last time I saw it, it was in my bag" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "fue en la cocina", en: "the kitchen", category: "other" },
          { es: "lo tenías tú", en: "someone had it", category: "other" },
          { es: "estaba en mi bolsa", en: "the last time I saw it, it was in my bag", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
          { es: "sin avisar", en: "without warning", category: "other" },
        ],
      },
    ],
  },
  {
    day: 75,
    theme: "Asking for Fixes (usted)",
    stems: [
      {
        stem: "¿Me lo puede cambiar…?",
        english: "Can you exchange it for me…?",
        hints: {
          que: [
            { es: "¿Me lo puede cambiar por otra talla?", en: "can you exchange it for another size?" },
            { es: "¿Me lo puede cambiar? Este vino roto", en: "it came broken" },
            { es: "¿Me lo puede cambiar aunque no tenga el recibo?", en: "no receipt" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "¿Me lo puede cambiar por otra talla?", en: "can you exchange it for another size?", category: "other" },
          { es: "¿Me lo puede cambiar? Este vino roto", en: "it came broken", category: "other" },
          { es: "¿Me lo puede cambiar aunque no tenga el recibo?", en: "no receipt", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
        ],
      },
      {
        stem: "¿Me pueden devolver…?",
        english: "Can you (all) refund…?",
        hints: {
          que: [
            { es: "¿Me pueden devolver el dinero?", en: "can you refund my money?" },
            { es: "¿Me pueden devolver el depósito?", en: "a deposit" },
            { es: "¿Me pueden devolver el cobro extra?", en: "an extra charge" },
          ],
        },
        completions: [
          { es: "¿Me pueden devolver el dinero?", en: "can you refund my money?", category: "other" },
          { es: "¿Me pueden devolver el depósito?", en: "a deposit", category: "other" },
          { es: "¿Me pueden devolver el cobro extra?", en: "an extra charge", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
        ],
      },
      {
        stem: "¿Hay alguna manera de…?",
        english: "Is there any way to…?",
        hints: {
          que: [
            { es: "¿Hay alguna manera de cambiar el vuelo?", en: "is there any way to change the flight?" },
            { es: "¿Hay alguna manera de recuperarlo?", en: "recovery" },
            { es: "¿Hay alguna manera de resolverlo hoy?", en: "today" },
          ],
          cuando: [
            { es: "¿Hay alguna manera de resolverlo hoy?", en: "today" },
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "¿Hay alguna manera de cambiar el vuelo?", en: "is there any way to change the flight?", category: "other" },
          { es: "¿Hay alguna manera de recuperarlo?", en: "recovery", category: "other" },
          { es: "¿Hay alguna manera de resolverlo hoy?", en: "today", category: "time" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
          { es: "sin avisar", en: "without warning", category: "other" },
        ],
      },
      {
        stem: "¿Qué me sugiere?",
        english: "What do you suggest? (usted)",
        hints: {
          que: [
            { es: "¿Qué me sugiere en este caso?", en: "what do you suggest in this case?" },
            { es: "necesito una solución pronto", en: "urgency" },
            { es: "¿Qué me sugiere para que no vuelva a pasar?", en: "prevention" },
          ],
        },
        completions: [
          { es: "¿Qué me sugiere en este caso?", en: "what do you suggest in this case?", category: "other" },
          { es: "necesito una solución pronto", en: "urgency", category: "other" },
          { es: "¿Qué me sugiere para que no vuelva a pasar?", en: "prevention", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
        ],
      },
      {
        stem: "Necesito resolver esto…",
        english: "I need to get this resolved…",
        hints: {
          que: [
            { es: "hoy mismo", en: "today" },
            { es: "antes del viernes", en: "by Friday" },
            { es: ", ¿con quién puedo hablar?", en: "need to get this resolved — who can I talk to?" },
          ],
          cuando: [
            { es: "hoy mismo", en: "today" },
          ],
        },
        completions: [
          { es: "hoy mismo", en: "today", category: "time" },
          { es: "antes del viernes", en: "by Friday", category: "other" },
          { es: ", ¿con quién puedo hablar?", en: "need to get this resolved — who can I talk to?", category: "activity" },
          { es: "sin avisar", en: "without warning", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
        ],
      },
    ],
  },
  {
    day: 76,
    theme: "Apologizing",
    stems: [
      {
        stem: "Perdón por…",
        english: "Sorry for…",
        hints: {
          que: [
            { es: "el desorden", en: "the mess" },
            { es: "no contestar antes", en: "sorry for not answering sooner" },
            { es: "la confusión de ayer", en: "confusion" },
          ],
          cuando: [
            { es: "la confusión de ayer", en: "confusion" },
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "el desorden", en: "the mess", category: "other" },
          { es: "no contestar antes", en: "sorry for not answering sooner", category: "other" },
          { es: "la confusión de ayer", en: "confusion", category: "time" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
          { es: "sin avisar", en: "without warning", category: "other" },
        ],
      },
      {
        stem: "Fue mi culpa…",
        english: "It was my fault…",
        hints: {
          que: [
            { es: ", yo anoté mal la hora", en: "my fault — I wrote down the wrong time" },
            { es: "por no preguntar", en: "not asking" },
            { es: ", y lo siento de verdad", en: "sincerely" },
          ],
        },
        completions: [
          { es: ", yo anoté mal la hora", en: "my fault — I wrote down the wrong time", category: "food" },
          { es: "por no preguntar", en: "not asking", category: "other" },
          { es: ", y lo siento de verdad", en: "sincerely", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
        ],
      },
      {
        stem: "No me di cuenta de que…",
        english: "I didn't realize that…",
        hints: {
          que: [
            { es: "era tan tarde", en: "the hour" },
            { es: "estabas esperando", en: "didn't realize you were waiting" },
            { es: "el mensaje no se envió", en: "an unsent message" },
          ],
          cuando: [
            { es: "era tan tarde", en: "the hour" },
          ],
        },
        completions: [
          { es: "era tan tarde", en: "the hour", category: "time" },
          { es: "estabas esperando", en: "didn't realize you were waiting", category: "other" },
          { es: "el mensaje no se envió", en: "an unsent message", category: "other" },
          { es: "sin avisar", en: "without warning", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
        ],
      },
      {
        stem: "¿Cómo lo arreglo?",
        english: "How do I fix it?",
        hints: {
          que: [
            { es: "dime y lo hago", en: "how do I fix it? Tell me and I'll do it" },
            { es: "¿Cómo lo arreglo sin empeorarlo?", en: "carefully" },
            { es: "¿Cómo lo arreglo contigo?", en: "with you" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "dime y lo hago", en: "how do I fix it? Tell me and I'll do it", category: "other" },
          { es: "¿Cómo lo arreglo sin empeorarlo?", en: "carefully", category: "opinion" },
          { es: "¿Cómo lo arreglo contigo?", en: "with you", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
        ],
      },
      {
        stem: "No va a volver a pasar…",
        english: "It won't happen again…",
        hints: {
          que: [
            { es: ", te lo prometo", en: "a promise" },
            { es: "; ya puse una alarma", en: "it won't happen again — I already set an alarm" },
            { es: ", aprendí la lección", en: "lesson learned" },
          ],
        },
        completions: [
          { es: ", te lo prometo", en: "a promise", category: "other" },
          { es: "; ya puse una alarma", en: "it won't happen again — I already set an alarm", category: "other" },
          { es: ", aprendí la lección", en: "lesson learned", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
        ],
      },
    ],
  },
  {
    day: 77,
    theme: "Repaso: Problems",
    stems: [
      {
        stem: "No funciona…",
        english: "… isn't working",
        hints: {
          que: [
            { es: "el ascensor, vamos por la escalera", en: "the elevator" },
            { es: "mi plan de siempre, necesito otro", en: "your usual plan" },
            { es: "el micrófono, ¿me escuchan?", en: "the microphone isn't working — can you hear me?" },
          ],
        },
        completions: [
          { es: "el ascensor, vamos por la escalera", en: "the elevator", category: "other" },
          { es: "mi plan de siempre, necesito otro", en: "your usual plan", category: "other" },
          { es: "el micrófono, ¿me escuchan?", en: "the microphone isn't working — can you hear me?", category: "other" },
          { es: "sin avisar", en: "without warning", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
        ],
      },
      {
        stem: "Hubo un problema con…",
        english: "There was a problem with…",
        hints: {
          que: [
            { es: "el horario, pero ya está resuelto", en: "a problem with the schedule, but it's already solved" },
            { es: "la aplicación esta mañana", en: "the app" },
            { es: "el pedido de los libros", en: "a book order" },
          ],
          cuando: [
            { es: "el horario, pero ya está resuelto", en: "a problem with the schedule, but it's already solved" },
            { es: "la aplicación esta mañana", en: "the app" },
          ],
        },
        completions: [
          { es: "el horario, pero ya está resuelto", en: "a problem with the schedule, but it's already solved", category: "time" },
          { es: "la aplicación esta mañana", en: "the app", category: "time" },
          { es: "el pedido de los libros", en: "a book order", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
        ],
      },
      {
        stem: "Se me perdió…",
        english: "… got lost on me",
        hints: {
          que: [
            { es: "el boleto, qué pena", en: "a ticket" },
            { es: "la mitad del audio, ¿lo repites?", en: "lost half the audio — can you repeat it?" },
            { es: "la costumbre, hay que retomarla", en: "the habit" },
          ],
        },
        completions: [
          { es: "el boleto, qué pena", en: "a ticket", category: "other" },
          { es: "la mitad del audio, ¿lo repites?", en: "lost half the audio — can you repeat it?", category: "other" },
          { es: "la costumbre, hay que retomarla", en: "the habit", category: "other" },
          { es: "en la escuela", en: "at school", category: "other" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
        ],
      },
      {
        stem: "¿Hay alguna manera de…?",
        english: "Is there any way to…?",
        hints: {
          que: [
            { es: "¿Hay alguna manera de llegar antes de las tres?", en: "arriving early" },
            { es: "¿Hay alguna manera de practicar esto en la vida real?", en: "is there any way to practice this in real life?" },
            { es: "¿Hay alguna manera de pagar en línea?", en: "paying online" },
          ],
          cuando: [
            { es: "desde ayer", en: "since yesterday" },
          ],
        },
        completions: [
          { es: "¿Hay alguna manera de llegar antes de las tres?", en: "arriving early", category: "other" },
          { es: "¿Hay alguna manera de practicar esto en la vida real?", en: "is there any way to practice this in real life?", category: "activity" },
          { es: "¿Hay alguna manera de pagar en línea?", en: "paying online", category: "other" },
          { es: "desde ayer", en: "since yesterday", category: "time" },
          { es: "sin avisar", en: "without warning", category: "other" },
        ],
      },
      {
        stem: "Perdón por…",
        english: "Sorry for…",
        hints: {
          que: [
            { es: "el ruido de anoche", en: "noise" },
            { es: "cambiar los planes otra vez", en: "changed plans" },
            { es: "hablar tanto de mi aplicación", en: "sorry for talking so much about my app" },
          ],
          cuando: [
            { es: "el ruido de anoche", en: "noise" },
          ],
        },
        completions: [
          { es: "el ruido de anoche", en: "noise", category: "time" },
          { es: "cambiar los planes otra vez", en: "changed plans", category: "other" },
          { es: "hablar tanto de mi aplicación", en: "sorry for talking so much about my app", category: "activity" },
          { es: "con la cuenta", en: "with the bill", category: "other" },
          { es: "otra vez", en: "again", category: "other" },
        ],
      },
    ],
  },
  {
    day: 78,
    theme: "What You Love Most",
    stems: [
      {
        stem: "Lo que más me gusta de… es…",
        english: "What I like most about… is…",
        hints: {
          que: [
            { es: "lo que más me gusta de enseñar es ver el clic", en: "what I like most about teaching is seeing the click" },
            { es: "lo que más me gusta de Boston es el otoño", en: "boston" },
            { es: "lo que más me gusta del español es cómo suena", en: "spanish" },
          ],
        },
        completions: [
          { es: "lo que más me gusta de enseñar es ver el clic", en: "what I like most about teaching is seeing the click", category: "other" },
          { es: "lo que más me gusta de Boston es el otoño", en: "boston", category: "other" },
          { es: "lo que más me gusta del español es cómo suena", en: "spanish", category: "other" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
          { es: "contigo", en: "with you", category: "other" },
        ],
      },
      {
        stem: "Lo que menos me gusta de… es…",
        english: "What I like least about… is…",
        hints: {
          que: [
            { es: "lo que menos me gusta del invierno es la oscuridad", en: "what I like least about winter is the darkness" },
            { es: "lo que menos me gusta es madrugar, no lo niego", en: "early mornings" },
            { es: "lo que menos me gusta de la ciudad es el tráfico", en: "traffic" },
          ],
          cuando: [
            { es: "lo que menos me gusta del invierno es la oscuridad", en: "what I like least about winter is the darkness" },
          ],
        },
        completions: [
          { es: "lo que menos me gusta del invierno es la oscuridad", en: "what I like least about winter is the darkness", category: "time" },
          { es: "lo que menos me gusta es madrugar, no lo niego", en: "early mornings", category: "other" },
          { es: "lo que menos me gusta de la ciudad es el tráfico", en: "traffic", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
        ],
      },
      {
        stem: "Me llena de…",
        english: "It fills me with…",
        hints: {
          que: [
            { es: "orgullo ver a mis estudiantes hablar", en: "it fills me with pride to see my students speak" },
            { es: "energía caminar por la mañana", en: "energy" },
            { es: "paz leer antes de dormir", en: "peace" },
          ],
          cuando: [
            { es: "energía caminar por la mañana", en: "energy" },
          ],
        },
        completions: [
          { es: "orgullo ver a mis estudiantes hablar", en: "it fills me with pride to see my students speak", category: "activity" },
          { es: "energía caminar por la mañana", en: "energy", category: "time" },
          { es: "paz leer antes de dormir", en: "peace", category: "other" },
          { es: "contigo", en: "with you", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
        ],
      },
      {
        stem: "Disfruto mucho…",
        english: "I really enjoy…",
        hints: {
          que: [
            { es: "las mañanas lentas", en: "really enjoy slow mornings" },
            { es: "cocinar sin prisa", en: "cooking" },
            { es: "estas conversaciones conmigo misma", en: "self-talk" },
          ],
          cuando: [
            { es: "las mañanas lentas", en: "really enjoy slow mornings" },
          ],
        },
        completions: [
          { es: "las mañanas lentas", en: "really enjoy slow mornings", category: "time" },
          { es: "cocinar sin prisa", en: "cooking", category: "other" },
          { es: "estas conversaciones conmigo misma", en: "self-talk", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
        ],
      },
      {
        stem: "Me hace feliz…",
        english: "It makes me happy…",
        hints: {
          que: [
            { es: "el olor a café", en: "coffee smell" },
            { es: "entender un chiste en español", en: "understanding a joke in Spanish makes me happy" },
            { es: "que estés aquí", en: "company" },
          ],
        },
        completions: [
          { es: "el olor a café", en: "coffee smell", category: "food" },
          { es: "entender un chiste en español", en: "understanding a joke in Spanish makes me happy", category: "other" },
          { es: "que estés aquí", en: "company", category: "food" },
          { es: "de verdad", en: "for real", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
        ],
      },
    ],
  },
  {
    day: 79,
    theme: "Missing",
    stems: [
      {
        stem: "Extraño…",
        english: "I miss…",
        hints: {
          que: [
            { es: "los veranos largos de Atlanta", en: "long summers" },
            { es: "la comida de mi mamá", en: "mom's cooking" },
            { es: "tener a mi familia cerca", en: "miss having my family close" },
          ],
          cuando: [
            { es: "los veranos largos de Atlanta", en: "long summers" },
          ],
        },
        completions: [
          { es: "los veranos largos de Atlanta", en: "long summers", category: "time" },
          { es: "la comida de mi mamá", en: "mom's cooking", category: "food" },
          { es: "tener a mi familia cerca", en: "miss having my family close", category: "other" },
          { es: "contigo", en: "with you", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
        ],
      },
      {
        stem: "Echo de menos…",
        english: "I miss… (Spain's version)",
        hints: {
          que: [
            { es: "las tardes en el porche", en: "porch evenings" },
            { es: "a mis amigas de la universidad", en: "college friends" },
            { es: "cantar en el carro a todo volumen", en: "miss singing in the car at full volume" },
          ],
          cuando: [
            { es: "las tardes en el porche", en: "porch evenings" },
          ],
        },
        completions: [
          { es: "las tardes en el porche", en: "porch evenings", category: "time" },
          { es: "a mis amigas de la universidad", en: "college friends", category: "other" },
          { es: "cantar en el carro a todo volumen", en: "miss singing in the car at full volume", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
        ],
      },
      {
        stem: "Me acuerdo mucho de…",
        english: "I think a lot about…",
        hints: {
          que: [
            { es: "mi abuela en esta época", en: "think about my grandmother a lot this time of year" },
            { es: "esos desayunos de domingo", en: "had a calm breakfast" },
            { es: "mi primera clase", en: "your first class" },
          ],
        },
        completions: [
          { es: "mi abuela en esta época", en: "think about my grandmother a lot this time of year", category: "other" },
          { es: "esos desayunos de domingo", en: "had a calm breakfast", category: "food" },
          { es: "mi primera clase", en: "your first class", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        hints: {
          que: [
            { es: "estar en dos lugares a la vez", en: "two places" },
            { es: "verlos más seguido", en: "wish I could see them more often" },
            { es: "quedarme un rato más", en: "staying longer" },
          ],
        },
        completions: [
          { es: "estar en dos lugares a la vez", en: "two places", category: "other" },
          { es: "verlos más seguido", en: "wish I could see them more often", category: "other" },
          { es: "quedarme un rato más", en: "staying longer", category: "other" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
          { es: "contigo", en: "with you", category: "other" },
        ],
      },
      {
        stem: "Cuando pienso en…, siento…",
        english: "When I think of…, I feel…",
        hints: {
          que: [
            { es: "cuando pienso en casa, siento calorcito", en: "when I think of home, I feel warmth" },
            { es: "cuando pienso en ese viaje, siento gratitud", en: "a trip" },
            { es: "cuando pienso en el futuro, siento curiosidad", en: "the future" },
          ],
        },
        completions: [
          { es: "cuando pienso en casa, siento calorcito", en: "when I think of home, I feel warmth", category: "opinion" },
          { es: "cuando pienso en ese viaje, siento gratitud", en: "a trip", category: "opinion" },
          { es: "cuando pienso en el futuro, siento curiosidad", en: "the future", category: "opinion" },
          { es: "mucho", en: "a lot", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
        ],
      },
    ],
  },
  {
    day: 80,
    theme: "Gratitude",
    stems: [
      {
        stem: "Estoy agradecida por…",
        english: "I'm grateful for…",
        hints: {
          que: [
            { es: "esta etapa de mi vida", en: "i'm grateful for this chapter of my life" },
            { es: "la gente que me rodea", en: "your people" },
            { es: "poder empezar de nuevo", en: "fresh starts" },
          ],
        },
        completions: [
          { es: "esta etapa de mi vida", en: "i'm grateful for this chapter of my life", category: "other" },
          { es: "la gente que me rodea", en: "your people", category: "other" },
          { es: "poder empezar de nuevo", en: "fresh starts", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
        ],
      },
      {
        stem: "Gracias a…, yo…",
        english: "Thanks to…, I…",
        hints: {
          que: [
            { es: "gracias a mis estudiantes, yo también aprendo", en: "thanks to my students, I learn too" },
            { es: "gracias a mi mamá, sé trabajar duro", en: "mom" },
            { es: "gracias a este verano, hablo con menos miedo", en: "this summer" },
          ],
          cuando: [
            { es: "gracias a este verano, hablo con menos miedo", en: "this summer" },
          ],
        },
        completions: [
          { es: "gracias a mis estudiantes, yo también aprendo", en: "thanks to my students, I learn too", category: "other" },
          { es: "gracias a mi mamá, sé trabajar duro", en: "mom", category: "activity" },
          { es: "gracias a este verano, hablo con menos miedo", en: "this summer", category: "time" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
          { es: "contigo", en: "with you", category: "other" },
        ],
      },
      {
        stem: "No sé qué haría sin…",
        english: "I don't know what I'd do without…",
        hints: {
          que: [
            { es: "mi café de la mañana", en: "morning coffee" },
            { es: "mis amigas", en: "don't know what I'd do without my friends" },
            { es: "listas", en: "lists" },
          ],
        },
        completions: [
          { es: "mi café de la mañana", en: "morning coffee", category: "food" },
          { es: "mis amigas", en: "don't know what I'd do without my friends", category: "other" },
          { es: "listas", en: "lists", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
        ],
      },
      {
        stem: "Significa mucho para mí…",
        english: "It means a lot to me…",
        hints: {
          que: [
            { es: "que preguntes", en: "being asked" },
            { es: "este cuaderno de frases", en: "this notebook" },
            { es: "poder decir esto en español", en: "being able to say this in Spanish means a lot to me" },
          ],
        },
        completions: [
          { es: "que preguntes", en: "being asked", category: "other" },
          { es: "este cuaderno de frases", en: "this notebook", category: "other" },
          { es: "poder decir esto en español", en: "being able to say this in Spanish means a lot to me", category: "other" },
          { es: "contigo", en: "with you", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
        ],
      },
      {
        stem: "Nunca te he dicho que…",
        english: "I've never told you that…",
        hints: {
          que: [
            { es: "admiro tu paciencia", en: "i've never told you that I admire your patience" },
            { es: "aprendí mucho de ti", en: "learning from them" },
            { es: "tu apoyo me cambió el año", en: "their support" },
          ],
        },
        completions: [
          { es: "admiro tu paciencia", en: "i've never told you that I admire your patience", category: "other" },
          { es: "aprendí mucho de ti", en: "learning from them", category: "other" },
          { es: "tu apoyo me cambió el año", en: "their support", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
        ],
      },
    ],
  },
  {
    day: 81,
    theme: "Worries Out Loud",
    stems: [
      {
        stem: "Últimamente me preocupa…",
        english: "Lately I've been worried about…",
        hints: {
          que: [
            { es: "el tiempo que paso en pantallas", en: "screen time" },
            { es: "una estudiante en particular", en: "lately I've been worried about one student in particular" },
            { es: "no descansar lo suficiente", en: "rest" },
          ],
        },
        completions: [
          { es: "el tiempo que paso en pantallas", en: "screen time", category: "other" },
          { es: "una estudiante en particular", en: "lately I've been worried about one student in particular", category: "other" },
          { es: "no descansar lo suficiente", en: "rest", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
        ],
      },
      {
        stem: "No dejo de pensar en…",
        english: "I can't stop thinking about…",
        hints: {
          que: [
            { es: "esa conversación", en: "a conversation" },
            { es: "el cambio de carrera", en: "the career change" },
            { es: "lo rápido que pasa el año", en: "can't stop thinking about how fast the year is going" },
          ],
        },
        completions: [
          { es: "esa conversación", en: "a conversation", category: "other" },
          { es: "el cambio de carrera", en: "the career change", category: "other" },
          { es: "lo rápido que pasa el año", en: "can't stop thinking about how fast the year is going", category: "other" },
          { es: "contigo", en: "with you", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
        ],
      },
      {
        stem: "Me da miedo…",
        english: "I'm afraid of…",
        hints: {
          que: [
            { es: "estancarme", en: "plateauing" },
            { es: "pedir demasiado", en: "asking too much" },
            { es: "que se me olvide lo aprendido", en: "i'm afraid of forgetting what I've learned" },
          ],
        },
        completions: [
          { es: "estancarme", en: "plateauing", category: "other" },
          { es: "pedir demasiado", en: "asking too much", category: "other" },
          { es: "que se me olvide lo aprendido", en: "i'm afraid of forgetting what I've learned", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
        ],
      },
      {
        stem: "A veces siento que…",
        english: "Sometimes I feel like…",
        hints: {
          que: [
            { es: "voy tarde a todo", en: "running late on life" },
            { es: "no es suficiente", en: "not enough" },
            { es: "sí puedo — y ese día gano", en: "sometimes I feel like I can — and that day I win" },
          ],
          cuando: [
            { es: "voy tarde a todo", en: "running late on life" },
            { es: "sí puedo — y ese día gano", en: "sometimes I feel like I can — and that day I win" },
          ],
        },
        completions: [
          { es: "voy tarde a todo", en: "running late on life", category: "time" },
          { es: "no es suficiente", en: "not enough", category: "other" },
          { es: "sí puedo — y ese día gano", en: "sometimes I feel like I can — and that day I win", category: "time" },
          { es: "de verdad", en: "for real", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
        ],
      },
      {
        stem: "Necesito hablar de…",
        english: "I need to talk about…",
        hints: {
          que: [
            { es: "algo que me tiene inquieta", en: "need to talk about something that's been on my mind" },
            { es: "cómo organizamos las clases", en: "class logistics" },
            { es: "esto con alguien de confianza", en: "with someone safe" },
          ],
        },
        completions: [
          { es: "algo que me tiene inquieta", en: "need to talk about something that's been on my mind", category: "other" },
          { es: "cómo organizamos las clases", en: "class logistics", category: "other" },
          { es: "esto con alguien de confianza", en: "with someone safe", category: "other" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
          { es: "contigo", en: "with you", category: "other" },
        ],
      },
    ],
  },
  {
    day: 82,
    theme: "Hopes",
    stems: [
      {
        stem: "Me hace ilusión…",
        english: "I'm looking forward to…",
        hints: {
          que: [
            { es: "mi primera conversación larga en español", en: "i'm looking forward to my first long conversation in Spanish" },
            { es: "empezar el año escolar", en: "the school year" },
            { es: "pensar en dónde estaré en un año", en: "a year from now" },
          ],
        },
        completions: [
          { es: "mi primera conversación larga en español", en: "i'm looking forward to my first long conversation in Spanish", category: "other" },
          { es: "empezar el año escolar", en: "the school year", category: "other" },
          { es: "pensar en dónde estaré en un año", en: "a year from now", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
        ],
      },
      {
        stem: "Estoy contando los días para…",
        english: "I'm counting the days until…",
        hints: {
          que: [
            { es: "las vacaciones", en: "vacation" },
            { es: "ver a mi familia", en: "i'm counting the days until I see my family" },
            { es: "el concierto", en: "went to a concert in the park" },
          ],
        },
        completions: [
          { es: "las vacaciones", en: "vacation", category: "other" },
          { es: "ver a mi familia", en: "i'm counting the days until I see my family", category: "other" },
          { es: "el concierto", en: "went to a concert in the park", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
        ],
      },
      {
        stem: "Lo que más espero de… es…",
        english: "What I most hope for from… is…",
        hints: {
          que: [
            { es: "lo que más espero del otoño es tiempo para leer", en: "what I most hope for from fall is time to read" },
            { es: "lo que más espero de este año es confianza", en: "this year" },
            { es: "lo que más espero del viaje es desconectarme", en: "a trip" },
          ],
        },
        completions: [
          { es: "lo que más espero del otoño es tiempo para leer", en: "what I most hope for from fall is time to read", category: "other" },
          { es: "lo que más espero de este año es confianza", en: "this year", category: "other" },
          { es: "lo que más espero del viaje es desconectarme", en: "a trip", category: "other" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
          { es: "contigo", en: "with you", category: "other" },
        ],
      },
      {
        stem: "Sería un sueño…",
        english: "It would be a dream…",
        hints: {
          que: [
            { es: "enseñar en dos idiomas", en: "it would be a dream to teach in two languages" },
            { es: "pasar un mes en América Latina", en: "a month away" },
            { es: "no necesitar subtítulos", en: "no subtitles" },
          ],
        },
        completions: [
          { es: "enseñar en dos idiomas", en: "it would be a dream to teach in two languages", category: "other" },
          { es: "pasar un mes en América Latina", en: "a month away", category: "other" },
          { es: "no necesitar subtítulos", en: "no subtitles", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
        ],
      },
      {
        stem: "Ya quiero…",
        english: "I can't wait to…",
        hints: {
          que: [
            { es: "que sea viernes", en: "friday" },
            { es: "contarle a todos", en: "telling everyone" },
            { es: "ver cómo termina esta historia", en: "can't wait to see how this story ends" },
          ],
        },
        completions: [
          { es: "que sea viernes", en: "friday", category: "other" },
          { es: "contarle a todos", en: "telling everyone", category: "other" },
          { es: "ver cómo termina esta historia", en: "can't wait to see how this story ends", category: "other" },
          { es: "contigo", en: "with you", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
        ],
      },
    ],
  },
  {
    day: 83,
    theme: "Saying It to Someone",
    stems: [
      {
        stem: "Quiero que sepas que…",
        english: "I want you to know that…",
        hints: {
          que: [
            { es: "cuento contigo", en: "want you to know that I count on you" },
            { es: "esto me importa", en: "it matters" },
            { es: "lo noté", en: "you noticed" },
          ],
        },
        completions: [
          { es: "cuento contigo", en: "want you to know that I count on you", category: "other" },
          { es: "esto me importa", en: "it matters", category: "other" },
          { es: "lo noté", en: "you noticed", category: "food" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
          { es: "contigo", en: "with you", category: "other" },
        ],
      },
      {
        stem: "Eres muy importante para mí…",
        english: "You're very important to me…",
        hints: {
          que: [
            { es: ", aunque no lo diga mucho", en: "you're very important to me, even if I don't say it much" },
            { es: "y para esta familia", en: "family" },
            { es: "desde hace años", en: "for years" },
          ],
        },
        completions: [
          { es: ", aunque no lo diga mucho", en: "you're very important to me, even if I don't say it much", category: "other" },
          { es: "y para esta familia", en: "family", category: "other" },
          { es: "desde hace años", en: "for years", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
        ],
      },
      {
        stem: "Admiro cómo…",
        english: "I admire how…",
        hints: {
          que: [
            { es: "manejas las cosas difíciles", en: "hard things" },
            { es: "haces que todos se sientan vistos", en: "admire how you make everyone feel seen" },
            { es: "sigues aprendiendo siempre", en: "always learning" },
          ],
        },
        completions: [
          { es: "manejas las cosas difíciles", en: "hard things", category: "other" },
          { es: "haces que todos se sientan vistos", en: "admire how you make everyone feel seen", category: "other" },
          { es: "sigues aprendiendo siempre", en: "always learning", category: "other" },
          { es: "contigo", en: "with you", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
        ],
      },
      {
        stem: "Gracias por estar…",
        english: "Thank you for being there…",
        hints: {
          que: [
            { es: "en las buenas y en las malas", en: "good and bad" },
            { es: "pendiente de mí", en: "checking in" },
            { es: ", así, sin más", en: "thank you for being there — just like that, no reason needed" },
          ],
        },
        completions: [
          { es: "en las buenas y en las malas", en: "good and bad", category: "other" },
          { es: "pendiente de mí", en: "checking in", category: "other" },
          { es: ", así, sin más", en: "thank you for being there — just like that, no reason needed", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
        ],
      },
      {
        stem: "Contigo puedo…",
        english: "With you I can…",
        hints: {
          que: [
            { es: "ser yo misma", en: "being yourself" },
            { es: "hablar de cualquier cosa", en: "any topic" },
            { es: "equivocarme sin miedo", en: "with you I can make mistakes without fear" },
          ],
        },
        completions: [
          { es: "ser yo misma", en: "being yourself", category: "other" },
          { es: "hablar de cualquier cosa", en: "any topic", category: "activity" },
          { es: "equivocarme sin miedo", en: "with you I can make mistakes without fear", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
        ],
      },
    ],
  },
  {
    day: 84,
    theme: "Repaso: Feelings",
    stems: [
      {
        stem: "Me llena de…",
        english: "It fills me with…",
        hints: {
          que: [
            { es: "ternura ver mis primeras frases del cuaderno", en: "old sentences" },
            { es: "ganas de seguir cada pequeño avance", en: "small wins" },
            { es: "calma este ritual de cinco minutos", en: "this five-minute ritual fills me with calm" },
          ],
          cuando: [
            { es: "calma este ritual de cinco minutos", en: "this five-minute ritual fills me with calm" },
          ],
        },
        completions: [
          { es: "ternura ver mis primeras frases del cuaderno", en: "old sentences", category: "other" },
          { es: "ganas de seguir cada pequeño avance", en: "small wins", category: "other" },
          { es: "calma este ritual de cinco minutos", en: "this five-minute ritual fills me with calm", category: "time" },
          { es: "contigo", en: "with you", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
        ],
      },
      {
        stem: "Extraño…",
        english: "I miss…",
        hints: {
          que: [
            { es: "el ruido de las cigarras en verano", en: "cicadas" },
            { es: "los precios de hace unos años, como todos", en: "old prices" },
            { es: "a mi gente, pero aquí estoy construyendo la mía", en: "miss my people, but here I'm building my own" },
          ],
          cuando: [
            { es: "el ruido de las cigarras en verano", en: "cicadas" },
          ],
        },
        completions: [
          { es: "el ruido de las cigarras en verano", en: "cicadas", category: "time" },
          { es: "los precios de hace unos años, como todos", en: "old prices", category: "other" },
          { es: "a mi gente, pero aquí estoy construyendo la mía", en: "miss my people, but here I'm building my own", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
        ],
      },
      {
        stem: "Estoy agradecida por…",
        english: "I'm grateful for…",
        hints: {
          que: [
            { es: "las vecinas que me saludan en español", en: "i'm grateful for the neighbors who greet me in Spanish" },
            { es: "un verano que no me pidió prisa", en: "an unhurried summer" },
            { es: "cada palabra nueva", en: "new words" },
          ],
          cuando: [
            { es: "un verano que no me pidió prisa", en: "an unhurried summer" },
          ],
        },
        completions: [
          { es: "las vecinas que me saludan en español", en: "i'm grateful for the neighbors who greet me in Spanish", category: "other" },
          { es: "un verano que no me pidió prisa", en: "an unhurried summer", category: "time" },
          { es: "cada palabra nueva", en: "new words", category: "other" },
          { es: "de verdad", en: "for real", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
        ],
      },
      {
        stem: "A veces siento que…",
        english: "Sometimes I feel like…",
        hints: {
          que: [
            { es: "el español ya vive en mí", en: "sometimes I feel like Spanish already lives in me" },
            { es: "las palabras llegan solas", en: "words arriving" },
            { es: "esto apenas empieza", en: "just beginning" },
          ],
        },
        completions: [
          { es: "el español ya vive en mí", en: "sometimes I feel like Spanish already lives in me", category: "other" },
          { es: "las palabras llegan solas", en: "words arriving", category: "other" },
          { es: "esto apenas empieza", en: "just beginning", category: "other" },
          { es: "desde que llegué a Boston", en: "since I got to Boston", category: "time" },
          { es: "contigo", en: "with you", category: "other" },
        ],
      },
      {
        stem: "Ya quiero…",
        english: "I can't wait to…",
        hints: {
          que: [
            { es: "leer mi cuaderno dentro de un año", en: "can't wait to read my notebook a year from now" },
            { es: "tener esa conversación sin pensar", en: "effortless talk" },
            { es: "ver el otoño desde este nuevo idioma", en: "fall in Spanish" },
          ],
        },
        completions: [
          { es: "leer mi cuaderno dentro de un año", en: "can't wait to read my notebook a year from now", category: "other" },
          { es: "tener esa conversación sin pensar", en: "effortless talk", category: "other" },
          { es: "ver el otoño desde este nuevo idioma", en: "fall in Spanish", category: "other" },
          { es: "mucho", en: "a lot", category: "other" },
          { es: "últimamente", en: "lately", category: "time" },
        ],
      },
    ],
  },
  {
    day: 85,
    theme: "Openings",
    stems: [
      {
        stem: "¡Hola! ¿Qué tal…?",
        english: "Hi! How's…?",
        hints: {
          que: [
            { es: "¡Hola! ¿Qué tal tu día?", en: "hi! How's your day going?" },
            { es: "¡Hola! ¿Qué tal todo?", en: "everything" },
            { es: "¡Hola! ¿Qué tal el regreso a clases?", en: "back to school" },
          ],
          cuando: [
            { es: "¡Hola! ¿Qué tal tu día?", en: "hi! How's your day going?" },
          ],
        },
        completions: [
          { es: "¡Hola! ¿Qué tal tu día?", en: "hi! How's your day going?", category: "time" },
          { es: "¡Hola! ¿Qué tal todo?", en: "everything", category: "other" },
          { es: "¡Hola! ¿Qué tal el regreso a clases?", en: "back to school", category: "other" },
          { es: "la verdad", en: "honestly", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
        ],
      },
      {
        stem: "¿Cómo has estado?",
        english: "How have you been?",
        hints: {
          que: [
            { es: "hace mucho que no hablamos", en: "how have you been? It's been a while since we talked" },
            { es: "te vi muy ocupada", en: "busy season" },
            { es: "¿Cómo has estado desde el viaje?", en: "since the trip" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "hace mucho que no hablamos", en: "how have you been? It's been a while since we talked", category: "other" },
          { es: "te vi muy ocupada", en: "busy season", category: "other" },
          { es: "¿Cómo has estado desde el viaje?", en: "since the trip", category: "other" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
          { es: "la próxima semana", en: "next week", category: "time" },
        ],
      },
      {
        stem: "¡Tanto tiempo!",
        english: "It's been so long!",
        hints: {
          que: [
            { es: "¿Cómo estás?", en: "surprise meeting" },
            { es: "¡Tanto tiempo sin verte!", en: "seeing them" },
            { es: "tenemos que ponernos al día", en: "been so long! We have to catch up" },
          ],
          cuando: [
            { es: "tenemos que ponernos al día", en: "been so long! We have to catch up" },
          ],
        },
        completions: [
          { es: "¿Cómo estás?", en: "surprise meeting", category: "other" },
          { es: "¡Tanto tiempo sin verte!", en: "seeing them", category: "other" },
          { es: "tenemos que ponernos al día", en: "been so long! We have to catch up", category: "time" },
          { es: "por cierto", en: "by the way", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
        ],
      },
      {
        stem: "¿Cómo va todo con…?",
        english: "How's everything going with…?",
        hints: {
          que: [
            { es: "¿Cómo va todo con el trabajo nuevo?", en: "how's everything going with the new job?" },
            { es: "¿Cómo va todo con la familia?", en: "family" },
            { es: "¿Cómo va todo con la mudanza?", en: "a move" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "¿Cómo va todo con el trabajo nuevo?", en: "how's everything going with the new job?", category: "other" },
          { es: "¿Cómo va todo con la familia?", en: "family", category: "other" },
          { es: "¿Cómo va todo con la mudanza?", en: "a move", category: "other" },
          { es: "la próxima semana", en: "next week", category: "time" },
          { es: "la verdad", en: "honestly", category: "other" },
        ],
      },
      {
        stem: "Qué gusto verte…",
        english: "So good to see you…",
        hints: {
          que: [
            { es: "por aquí", en: "around here" },
            { es: "tan bien", en: "looking well" },
            { es: ", de verdad", en: "so good to see you — really" },
          ],
        },
        completions: [
          { es: "por aquí", en: "around here", category: "other" },
          { es: "tan bien", en: "looking well", category: "other" },
          { es: ", de verdad", en: "so good to see you — really", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
        ],
      },
    ],
  },
  {
    day: 86,
    theme: "Small Talk",
    stems: [
      {
        stem: "¿Qué me cuentas de…?",
        english: "What's new with…?",
        hints: {
          que: [
            { es: "¿Qué me cuentas de tu verano?", en: "what's new with your summer?" },
            { es: "¿Qué me cuentas de la familia?", en: "family" },
            { es: "¿Qué me cuentas de nuevo?", en: "anything" },
          ],
          cuando: [
            { es: "¿Qué me cuentas de tu verano?", en: "what's new with your summer?" },
          ],
        },
        completions: [
          { es: "¿Qué me cuentas de tu verano?", en: "what's new with your summer?", category: "time" },
          { es: "¿Qué me cuentas de la familia?", en: "family", category: "other" },
          { es: "¿Qué me cuentas de nuevo?", en: "anything", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
        ],
      },
      {
        stem: "Por aquí todo…",
        english: "Around here everything's…",
        hints: {
          que: [
            { es: "bien, gracias a Dios", en: "fine" },
            { es: "tranquilo, como siempre", en: "around here everything's calm, same as always" },
            { es: "igual, trabajando mucho", en: "the same" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "bien, gracias a Dios", en: "fine", category: "other" },
          { es: "tranquilo, como siempre", en: "around here everything's calm, same as always", category: "other" },
          { es: "igual, trabajando mucho", en: "the same", category: "other" },
          { es: "la próxima semana", en: "next week", category: "time" },
          { es: "la verdad", en: "honestly", category: "other" },
        ],
      },
      {
        stem: "Últimamente…",
        english: "Lately…",
        hints: {
          que: [
            { es: "he caminado mucho por el río", en: "river walks" },
            { es: "ando ocupada, pero contenta", en: "lately I've been busy, but happy" },
            { es: "hace un calor tremendo, ¿verdad?", en: "very hot" },
          ],
        },
        completions: [
          { es: "he caminado mucho por el río", en: "river walks", category: "other" },
          { es: "ando ocupada, pero contenta", en: "lately I've been busy, but happy", category: "other" },
          { es: "hace un calor tremendo, ¿verdad?", en: "very hot", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
        ],
      },
      {
        stem: "¿Sigues…?",
        english: "Are you still…?",
        hints: {
          que: [
            { es: "¿Sigues en la misma escuela?", en: "are you still at the same school?" },
            { es: "¿Sigues corriendo por las mañanas?", en: "morning runs" },
            { es: "¿Sigues con las clases de baile?", en: "dance class" },
          ],
          cuando: [
            { es: "¿Sigues corriendo por las mañanas?", en: "morning runs" },
          ],
        },
        completions: [
          { es: "¿Sigues en la misma escuela?", en: "are you still at the same school?", category: "other" },
          { es: "¿Sigues corriendo por las mañanas?", en: "morning runs", category: "time" },
          { es: "¿Sigues con las clases de baile?", en: "dance class", category: "other" },
          { es: "la verdad", en: "honestly", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
        ],
      },
      {
        stem: "El clima está…",
        english: "The weather is…",
        hints: {
          que: [
            { es: "perfecto para caminar", en: "perfect" },
            { es: "loco esta semana", en: "the weather's crazy this week" },
            { es: "mejor que la semana pasada, al menos", en: "improving" },
          ],
          cuando: [
            { es: "loco esta semana", en: "the weather's crazy this week" },
            { es: "mejor que la semana pasada, al menos", en: "improving" },
          ],
        },
        completions: [
          { es: "perfecto para caminar", en: "perfect", category: "activity" },
          { es: "loco esta semana", en: "the weather's crazy this week", category: "time" },
          { es: "mejor que la semana pasada, al menos", en: "improving", category: "time" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
          { es: "la próxima semana", en: "next week", category: "time" },
        ],
      },
    ],
  },
  {
    day: 87,
    theme: "Transitions",
    stems: [
      {
        stem: "Bueno, …",
        english: "Well, …",
        hints: {
          que: [
            { es: "cambiando de tema…", en: "shifting gears" },
            { es: "tú dirás", en: "your turn" },
            { es: "la cosa es así", en: "well, the thing goes like this" },
          ],
        },
        completions: [
          { es: "cambiando de tema…", en: "shifting gears", category: "other" },
          { es: "tú dirás", en: "your turn", category: "other" },
          { es: "la cosa es así", en: "well, the thing goes like this", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
        ],
      },
      {
        stem: "Pues…",
        english: "Well / so…",
        hints: {
          que: [
            { es: "resulta que sí", en: "well, it turns out yes" },
            { es: "yo lo veo diferente", en: "your view" },
            { es: "nada, así quedó la cosa", en: "wrapping up" },
          ],
        },
        completions: [
          { es: "resulta que sí", en: "well, it turns out yes", category: "other" },
          { es: "yo lo veo diferente", en: "your view", category: "other" },
          { es: "nada, así quedó la cosa", en: "wrapping up", category: "other" },
          { es: "la verdad", en: "honestly", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
        ],
      },
      {
        stem: "Oye, …",
        english: "Hey, …",
        hints: {
          que: [
            { es: "¿y tú qué piensas?", en: "their opinion" },
            { es: "antes de que se me olvide…", en: "hey, before I forget…" },
            { es: "qué bonito lo que dijiste", en: "a compliment" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "¿y tú qué piensas?", en: "their opinion", category: "other" },
          { es: "antes de que se me olvide…", en: "hey, before I forget…", category: "other" },
          { es: "qué bonito lo que dijiste", en: "a compliment", category: "other" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
          { es: "la próxima semana", en: "next week", category: "time" },
        ],
      },
      {
        stem: "Hablando de…",
        english: "Speaking of…",
        hints: {
          que: [
            { es: "comida, ¿ya almorzaste?", en: "speaking of food — did you have lunch yet?" },
            { es: "viajes, ¿cómo estuvo el tuyo?", en: "trips" },
            { es: "eso, tengo una historia", en: "a story" },
          ],
        },
        completions: [
          { es: "comida, ¿ya almorzaste?", en: "speaking of food — did you have lunch yet?", category: "food" },
          { es: "viajes, ¿cómo estuvo el tuyo?", en: "trips", category: "other" },
          { es: "eso, tengo una historia", en: "a story", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
        ],
      },
      {
        stem: "Cambiando de tema…",
        english: "Changing the subject…",
        hints: {
          que: [
            { es: ", ¿viste las noticias?", en: "the news" },
            { es: ", necesito tu consejo", en: "changing the subject — I need your advice" },
            { es: ", ¿qué planes tienes?", en: "plans" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: ", ¿viste las noticias?", en: "the news", category: "other" },
          { es: ", necesito tu consejo", en: "changing the subject — I need your advice", category: "other" },
          { es: ", ¿qué planes tienes?", en: "plans", category: "other" },
          { es: "la próxima semana", en: "next week", category: "time" },
          { es: "la verdad", en: "honestly", category: "other" },
        ],
      },
    ],
  },
  {
    day: 88,
    theme: "Holding Your Turn",
    stems: [
      {
        stem: "Espera, déjame pensar…",
        english: "Wait, let me think…",
        hints: {
          que: [
            { es: "cómo decirlo", en: "wait, let me think how to say it" },
            { es: "un segundo", en: "a second" },
            { es: "en un ejemplo", en: "an example" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "cómo decirlo", en: "wait, let me think how to say it", category: "other" },
          { es: "un segundo", en: "a second", category: "other" },
          { es: "en un ejemplo", en: "an example", category: "other" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
          { es: "la próxima semana", en: "next week", category: "time" },
        ],
      },
      {
        stem: "¿Cómo te explico?",
        english: "How do I explain…?",
        hints: {
          que: [
            { es: "es complicado y simple a la vez", en: "complex feelings" },
            { es: "¿Cómo te explico sin hacer un dibujo?", en: "no drawing" },
            { es: "es difícil de traducir, pero fácil de sentir", en: "how do I explain it? It's hard to translate, but easy to feel" },
          ],
        },
        completions: [
          { es: "es complicado y simple a la vez", en: "complex feelings", category: "other" },
          { es: "¿Cómo te explico sin hacer un dibujo?", en: "no drawing", category: "activity" },
          { es: "es difícil de traducir, pero fácil de sentir", en: "how do I explain it? It's hard to translate, but easy to feel", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
        ],
      },
      {
        stem: "Es decir…",
        english: "That is to say…",
        hints: {
          que: [
            { es: ", sí, pero con condiciones", en: "that is: yes, but with conditions" },
            { es: ", lo contrario de lo que pensaba", en: "the opposite" },
            { es: ", que empezamos de cero otra vez", en: "starting over" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: ", sí, pero con condiciones", en: "that is: yes, but with conditions", category: "other" },
          { es: ", lo contrario de lo que pensaba", en: "the opposite", category: "other" },
          { es: ", que empezamos de cero otra vez", en: "starting over", category: "other" },
          { es: "la próxima semana", en: "next week", category: "time" },
          { es: "la verdad", en: "honestly", category: "other" },
        ],
      },
      {
        stem: "O sea…",
        english: "I mean…",
        hints: {
          que: [
            { es: ", no es tan grave, pero tampoco es nada", en: "calibrating" },
            { es: ", me encantó, punto", en: "emphasis" },
            { es: ", que sí vienes, ¿verdad?", en: "mean — you are coming, right?" },
          ],
        },
        completions: [
          { es: ", no es tan grave, pero tampoco es nada", en: "calibrating", category: "other" },
          { es: ", me encantó, punto", en: "emphasis", category: "other" },
          { es: ", que sí vienes, ¿verdad?", en: "mean — you are coming, right?", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "The thing is…",
        hints: {
          que: [
            { es: "no me atrevía a decirlo", en: "the thing is, I didn't dare say it" },
            { es: "el horario cambió", en: "schedule changes" },
            { es: "quiero hacerlo bien", en: "high standards" },
          ],
          cuando: [
            { es: "el horario cambió", en: "schedule changes" },
          ],
        },
        completions: [
          { es: "no me atrevía a decirlo", en: "the thing is, I didn't dare say it", category: "other" },
          { es: "el horario cambió", en: "schedule changes", category: "time" },
          { es: "quiero hacerlo bien", en: "high standards", category: "other" },
          { es: "la verdad", en: "honestly", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
        ],
      },
    ],
  },
  {
    day: 89,
    theme: "Graceful Exits",
    stems: [
      {
        stem: "Bueno, me tengo que ir…",
        english: "Well, I have to go…",
        hints: {
          que: [
            { es: ", pero seguimos", en: "well, I have to go, but we'll continue" },
            { es: "o pierdo el tren", en: "the train" },
            { es: "; mañana madrugamos", en: "early morning" },
          ],
          cuando: [
            { es: "; mañana madrugamos", en: "early morning" },
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: ", pero seguimos", en: "well, I have to go, but we'll continue", category: "other" },
          { es: "o pierdo el tren", en: "the train", category: "other" },
          { es: "; mañana madrugamos", en: "early morning", category: "time" },
          { es: "la próxima semana", en: "next week", category: "time" },
          { es: "la verdad", en: "honestly", category: "other" },
        ],
      },
      {
        stem: "Fue un gusto…",
        english: "It was a pleasure…",
        hints: {
          que: [
            { es: "verte", en: "seeing them" },
            { es: "conocerte por fin", en: "finally meeting" },
            { es: "hablar contigo en español", en: "a pleasure talking with you in Spanish" },
          ],
        },
        completions: [
          { es: "verte", en: "seeing them", category: "other" },
          { es: "conocerte por fin", en: "finally meeting", category: "other" },
          { es: "hablar contigo en español", en: "a pleasure talking with you in Spanish", category: "activity" },
          { es: "un ratito", en: "for a little while", category: "time" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
        ],
      },
      {
        stem: "Te dejo, pero…",
        english: "I'll let you go, but…",
        hints: {
          que: [
            { es: "hablamos pronto", en: "talk soon" },
            { es: "me debes un café", en: "i'll let you go, but you owe me a coffee" },
            { es: "cuéntame cómo te va", en: "updates" },
          ],
        },
        completions: [
          { es: "hablamos pronto", en: "talk soon", category: "other" },
          { es: "me debes un café", en: "i'll let you go, but you owe me a coffee", category: "food" },
          { es: "cuéntame cómo te va", en: "updates", category: "other" },
          { es: "la verdad", en: "honestly", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
        ],
      },
      {
        stem: "Seguimos hablando…",
        english: "We'll keep talking…",
        hints: {
          que: [
            { es: "en la semana", en: "we'll keep talking this week" },
            { es: ", que esto se puso bueno", en: "it got good" },
            { es: "por mensaje", en: "by message" },
          ],
          cuando: [
            { es: "en la semana", en: "we'll keep talking this week" },
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "en la semana", en: "we'll keep talking this week", category: "time" },
          { es: ", que esto se puso bueno", en: "it got good", category: "other" },
          { es: "por mensaje", en: "by message", category: "other" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
          { es: "la próxima semana", en: "next week", category: "time" },
        ],
      },
      {
        stem: "Saludos a…",
        english: "Say hi to…",
        hints: {
          que: [
            { es: "tu familia", en: "family" },
            { es: "todos por allá", en: "everyone" },
            { es: "tu mamá de mi parte", en: "say hi to your mom for me" },
          ],
        },
        completions: [
          { es: "tu familia", en: "family", category: "other" },
          { es: "todos por allá", en: "everyone", category: "other" },
          { es: "tu mamá de mi parte", en: "say hi to your mom for me", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
        ],
      },
    ],
  },
  {
    day: 90,
    theme: "Your Season",
    stems: [
      {
        stem: "Hace tres meses…",
        english: "Three months ago…",
        hints: {
          que: [
            { es: "no me atrevía a hablar", en: "three months ago I didn't dare to speak" },
            { es: "empezó este cuaderno", en: "day one" },
            { es: "esto era solo una idea", en: "just an idea" },
          ],
        },
        completions: [
          { es: "no me atrevía a hablar", en: "three months ago I didn't dare to speak", category: "activity" },
          { es: "empezó este cuaderno", en: "day one", category: "other" },
          { es: "esto era solo una idea", en: "just an idea", category: "other" },
          { es: "la verdad", en: "honestly", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        hints: {
          que: [
            { es: "pedir, preguntar y contar historias", en: "the skills" },
            { es: "hablar sin traducir cada palabra", en: "no translating" },
            { es: "tener una conversación simple, sin pánico", en: "now I can have a simple conversation, without panic" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "pedir, preguntar y contar historias", en: "the skills", category: "other" },
          { es: "hablar sin traducir cada palabra", en: "no translating", category: "activity" },
          { es: "tener una conversación simple, sin pánico", en: "now I can have a simple conversation, without panic", category: "other" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
          { es: "la próxima semana", en: "next week", category: "time" },
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        hints: {
          que: [
            { es: "empezar", en: "the hardest part was starting" },
            { es: "hablar en voz alta la primera vez", en: "the first time" },
            { es: "no rendirme en las semanas flojas", en: "the slow weeks" },
          ],
          cuando: [
            { es: "no rendirme en las semanas flojas", en: "the slow weeks" },
          ],
        },
        completions: [
          { es: "empezar", en: "the hardest part was starting", category: "other" },
          { es: "hablar en voz alta la primera vez", en: "the first time", category: "activity" },
          { es: "no rendirme en las semanas flojas", en: "the slow weeks", category: "time" },
          { es: "por cierto", en: "by the way", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        hints: {
          que: [
            { es: "cuánto entiendo ya", en: "what surprised me most was how much I already understand" },
            { es: "lo amable que es la gente", en: "kind people" },
            { es: "disfrutarlo tanto", en: "enjoying it" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "cuánto entiendo ya", en: "what surprised me most was how much I already understand", category: "other" },
          { es: "lo amable que es la gente", en: "kind people", category: "other" },
          { es: "disfrutarlo tanto", en: "enjoying it", category: "other" },
          { es: "la próxima semana", en: "next week", category: "time" },
          { es: "la verdad", en: "honestly", category: "other" },
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        hints: {
          que: [
            { es: "seguir el hilo en otoño", en: "the next step is following the thread in fall" },
            { es: "hablar un minuto sin parar", en: "a full minute" },
            { es: "buscar más conversaciones reales", en: "real conversations" },
          ],
          cuando: [
            { es: "hablar un minuto sin parar", en: "a full minute" },
          ],
        },
        completions: [
          { es: "seguir el hilo en otoño", en: "the next step is following the thread in fall", category: "other" },
          { es: "hablar un minuto sin parar", en: "a full minute", category: "time" },
          { es: "buscar más conversaciones reales", en: "real conversations", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
        ],
      },
    ],
  },
  {
    day: 91,
    theme: "Repaso: The Whole Conversation",
    stems: [
      {
        stem: "¡Tanto tiempo!",
        english: "It's been so long!",
        hints: {
          que: [
            { es: "pensé en ti el otro día", en: "been so long! I thought about you the other day" },
            { es: "¿Sigues por el barrio?", en: "the neighborhood" },
            { es: "casi no te reconozco con el sombrero", en: "playfully" },
          ],
          cuando: [
            { es: "pensé en ti el otro día", en: "been so long! I thought about you the other day" },
          ],
        },
        completions: [
          { es: "pensé en ti el otro día", en: "been so long! I thought about you the other day", category: "time" },
          { es: "¿Sigues por el barrio?", en: "the neighborhood", category: "other" },
          { es: "casi no te reconozco con el sombrero", en: "playfully", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
          { es: "un ratito", en: "for a little while", category: "time" },
        ],
      },
      {
        stem: "¿Qué me cuentas de…?",
        english: "What's new with…?",
        hints: {
          que: [
            { es: "¿Qué me cuentas de tus clases de español?", en: "what's new with your Spanish classes?" },
            { es: "¿Qué me cuentas de la vida?", en: "life" },
            { es: "¿Qué me cuentas de aquel proyecto que tenías?", en: "that old project" },
          ],
          cuando: [
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: "¿Qué me cuentas de tus clases de español?", en: "what's new with your Spanish classes?", category: "other" },
          { es: "¿Qué me cuentas de la vida?", en: "life", category: "other" },
          { es: "¿Qué me cuentas de aquel proyecto que tenías?", en: "that old project", category: "other" },
          { es: "la próxima semana", en: "next week", category: "time" },
          { es: "la verdad", en: "honestly", category: "other" },
        ],
      },
      {
        stem: "Hablando de…",
        english: "Speaking of…",
        hints: {
          que: [
            { es: "proyectos, terminé mi temporada de verano", en: "speaking of projects — I finished my summer season" },
            { es: "café, conozco un lugar nuevo", en: "coffee" },
            { es: "tiempo, ¿ya viste qué tarde es?", en: "the time" },
          ],
          cuando: [
            { es: "proyectos, terminé mi temporada de verano", en: "speaking of projects — I finished my summer season" },
            { es: "tiempo, ¿ya viste qué tarde es?", en: "the time" },
          ],
        },
        completions: [
          { es: "proyectos, terminé mi temporada de verano", en: "speaking of projects — I finished my summer season", category: "time" },
          { es: "café, conozco un lugar nuevo", en: "coffee", category: "food" },
          { es: "tiempo, ¿ya viste qué tarde es?", en: "the time", category: "time" },
          { es: "un ratito", en: "for a little while", category: "time" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "The thing is…",
        hints: {
          que: [
            { es: "llevo noventa días practicando", en: "the thing is, I've been practicing for ninety days" },
            { es: "ahora pienso en dos idiomas", en: "two languages" },
            { es: "me enamoré de este idioma", en: "love" },
          ],
          cuando: [
            { es: "llevo noventa días practicando", en: "the thing is, I've been practicing for ninety days" },
            { es: "ahora pienso en dos idiomas", en: "two languages" },
          ],
        },
        completions: [
          { es: "llevo noventa días practicando", en: "the thing is, I've been practicing for ninety days", category: "time" },
          { es: "ahora pienso en dos idiomas", en: "two languages", category: "time" },
          { es: "me enamoré de este idioma", en: "love", category: "other" },
          { es: "la verdad", en: "honestly", category: "other" },
          { es: "por cierto", en: "by the way", category: "other" },
        ],
      },
      {
        stem: "Bueno, me tengo que ir…",
        english: "Well, I have to go…",
        hints: {
          que: [
            { es: ", pero esto merece un café pronto", en: "a coffee soon" },
            { es: "; mañana empieza otra temporada", en: "well, I have to go — tomorrow another season begins" },
            { es: "— fue un gusto, de verdad", en: "sincerely" },
          ],
          cuando: [
            { es: "; mañana empieza otra temporada", en: "well, I have to go — tomorrow another season begins" },
            { es: "la próxima semana", en: "next week" },
          ],
        },
        completions: [
          { es: ", pero esto merece un café pronto", en: "a coffee soon", category: "food" },
          { es: "; mañana empieza otra temporada", en: "well, I have to go — tomorrow another season begins", category: "time" },
          { es: "— fue un gusto, de verdad", en: "sincerely", category: "other" },
          { es: "cuando quieras", en: "whenever you want", category: "time" },
          { es: "la próxima semana", en: "next week", category: "time" },
        ],
      },
    ],
  },
];

export function sentenceFormerDayByNumber(day: number): SentenceFormerDay | undefined {
  return sentenceFormerDays.find((d) => d.day === day);
}
