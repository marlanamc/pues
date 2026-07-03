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
 * Verano batches 1–2: days 1–21 (weeks 1–3). Stems must match frames.ts for the
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
];

export function sentenceFormerDayByNumber(day: number): SentenceFormerDay | undefined {
  return sentenceFormerDays.find((d) => d.day === day);
}
