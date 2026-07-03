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
 * v1 covers days 1–7, matching the first week of Verano content.
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
];

export function sentenceFormerDayByNumber(day: number): SentenceFormerDay | undefined {
  return sentenceFormerDays.find((d) => d.day === day);
}
