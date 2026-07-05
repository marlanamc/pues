import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 12 draft — "El minuto entero" (days 169–175).
 *
 * Append to content/sentenceFormer/otono.ts. Stems must match week12-frames.ts.
 */
export const week12SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 169,
    theme: "El plan",
    stems: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        hints: {
          que: [
            { es: "mi plan de práctica", en: "my practice plan" },
            { es: "mis metas de la semana", en: "my goals for the week" },
          ],
        },
        completions: [
          { es: "mi plan para practicar español", en: "my plan to practice Spanish", category: "activity" },
          { es: "las tres metas que anoté", en: "the three goals I wrote down", category: "other" },
          { es: "ser más intencional esta semana", en: "being more intentional this week", category: "opinion" },
          { es: "cómo voy a practicar cada día", en: "how I'm going to practice each day", category: "activity" },
          { es: "mi compromiso contigo", en: "my commitment to you", category: "other" },
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        completions: [
          { es: "quiero hacer: leer, escuchar y hablar", en: "I want to do: read, listen, and speak", category: "activity" },
          { es: "anoté en mi cuaderno", en: "I wrote in my notebook", category: "other" },
          { es: "me comprometí a cumplir", en: "I committed to accomplishing", category: "activity" },
          { es: "van a ayudarme esta semana", en: "are going to help me this week", category: "other" },
          { es: "necesito practicar", en: "I need to practice", category: "activity" },
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        completions: [
          { es: "decidir cuándo practico cada día", en: "deciding when I practice each day", category: "activity" },
          { es: "leer en voz alta antes de dormir", en: "reading out loud before bed", category: "activity" },
          { es: "empezar hoy, no el lunes", en: "starting today, not Monday", category: "time" },
          { es: "anotar las metas en el cuaderno", en: "writing the goals in the notebook", category: "activity" },
          { es: "comprometerse con alguien", en: "committing to someone", category: "other" },
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        completions: [
          { es: "escuchar un podcast en el carro", en: "listening to a podcast in the car", category: "activity" },
          { es: "hablar en voz alta aunque dé vergüenza", en: "speaking out loud even if it's embarrassing", category: "activity" },
          { es: "no saltarme un solo día", en: "not skipping a single day", category: "activity" },
          { es: "practicar frente al espejo", en: "practicing in front of the mirror", category: "activity" },
          { es: "escribir tres frases cada noche", en: "writing three sentences each night", category: "activity" },
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        completions: [
          { es: "te cuento el viernes cómo me fue", en: "I'll tell you Friday how it went", category: "other" },
          { es: "me comprometo contigo esta semana", en: "I commit to you this week", category: "other" },
          { es: "anoto todo en mi cuaderno", en: "I write everything in my notebook", category: "activity" },
          { es: "empiezo esta noche con la lectura", en: "I start tonight with reading", category: "time" },
          { es: "diré cuál es mi meta principal", en: "I'll say what my main goal is", category: "other" },
        ],
      },
    ],
  },
  {
    day: 170,
    theme: "La lectura",
    stems: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        completions: [
          { es: "leer en voz alta anoche", en: "reading out loud last night", category: "activity" },
          { es: "mi primera meta cumplida", en: "my first goal accomplished", category: "other" },
          { es: "lo que aprendí leyendo", en: "what I learned by reading", category: "other" },
          { es: "cómo me sentí leyendo", en: "how I felt while reading", category: "opinion" },
          { es: "el artículo de educación bilingüe", en: "the bilingual education article", category: "other" },
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        completions: [
          { es: "subrayé en el artículo", en: "I underlined in the article", category: "activity" },
          { es: "me ayudaron a no parar", en: "helped me not stop", category: "other" },
          { es: "quiero repetir mañana", en: "I want to repeat tomorrow", category: "activity" },
          { es: "aprendí del párrafo", en: "I learned from the paragraph", category: "other" },
          { es: "no entendí del todo", en: "I didn't fully understand", category: "opinion" },
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        completions: [
          { es: "empezar — ya lo hice", en: "starting — I already did it", category: "activity" },
          { es: "elegir un párrafo corto", en: "choosing a short paragraph", category: "activity" },
          { es: "leer antes de dormir, sin excusas", en: "reading before bed, no excuses", category: "activity" },
          { es: "no tener miedo de tropezar", en: "not being afraid to stumble", category: "opinion" },
          { es: "leer en voz alta aunque suene raro", en: "reading out loud even if it sounds weird", category: "activity" },
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        completions: [
          { es: "no saltarme la lectura mañana", en: "not skipping reading tomorrow", category: "activity" },
          { es: "subrayar palabras nuevas", en: "underlining new words", category: "activity" },
          { es: "fijarme en las frases que practiqué", en: "paying attention to sentences I practiced", category: "activity" },
          { es: "leer un poco más cada noche", en: "reading a little more each night", category: "activity" },
          { es: "no traducir mientras leo", en: "not translating while I read", category: "activity" },
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        completions: [
          { es: "diré que me sentí mejor al final", en: "I'll say I felt better at the end", category: "opinion" },
          { es: "mañana leo otra parte del artículo", en: "tomorrow I read another part of the article", category: "activity" },
          { es: "ya tengo un hábito empezando", en: "I already have a habit starting", category: "other" },
          { es: "anoto las palabras nuevas", en: "I write down the new words", category: "activity" },
          { es: "prometo leer otra noche", en: "I promise to read another night", category: "other" },
        ],
      },
    ],
  },
  {
    day: 171,
    theme: "Escuchar",
    stems: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        completions: [
          { es: "escuchar en el carro", en: "listening in the car", category: "activity" },
          { es: "el podcast de esta mañana", en: "this morning's podcast", category: "other" },
          { es: "aprender con el oído", en: "learning with my ear", category: "activity" },
          { es: "captar más de lo que pensaba", en: "catching more than I thought", category: "opinion" },
          { es: "escuchar a velocidad normal", en: "listening at normal speed", category: "activity" },
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        completions: [
          { es: "ayudan: escuchar, repetir y no rendirse", en: "help: listen, repeat, and don't give up", category: "activity" },
          { es: "capté del episodio", en: "I caught from the episode", category: "other" },
          { es: "repetí en voz baja", en: "I repeated quietly", category: "activity" },
          { es: "no entendí del todo", en: "I didn't fully understand", category: "opinion" },
          { es: "quiero practicar mañana", en: "I want to practice tomorrow", category: "activity" },
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        completions: [
          { es: "escuchar sin traducir", en: "listening without translating", category: "activity" },
          { es: "ponerlo a velocidad normal", en: "playing it at normal speed", category: "activity" },
          { es: "elegir episodios cortos", en: "choosing short episodes", category: "activity" },
          { es: "concentrarme en el sonido", en: "focusing on the sound", category: "activity" },
          { es: "no rendirme si no entiendo todo", en: "not giving up if I don't understand everything", category: "opinion" },
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        completions: [
          { es: "repetir aunque suene raro", en: "repeating even if it sounds weird", category: "activity" },
          { es: "no rendirse si no entiendo todo", en: "not giving up if I don't understand everything", category: "opinion" },
          { es: "anotar una frase que capté", en: "writing down a phrase I caught", category: "activity" },
          { es: "escuchar dos veces el mismo episodio", en: "listening to the same episode twice", category: "activity" },
          { es: "imitar la pronunciación", en: "imitating the pronunciation", category: "activity" },
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        completions: [
          { es: "volver mañana aunque no entienda todo", en: "come back tomorrow even if I don't understand everything", category: "activity" },
          { es: "diré que capté más de lo pensado", en: "I'll say I caught more than I thought", category: "opinion" },
          { es: "escucho otro episodio el jueves", en: "I listen to another episode Thursday", category: "time" },
          { es: "repito las frases otra vez", en: "I repeat the phrases again", category: "activity" },
          { es: "pruebo un podcast diferente", en: "I try a different podcast", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 172,
    theme: "Hablar sola",
    stems: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        completions: [
          { es: "practicar frente al espejo", en: "practicing in front of the mirror", category: "activity" },
          { es: "no parar cuando tropiezo", en: "not stopping when I stumble", category: "activity" },
          { es: "los cuarenta y cinco segundos", en: "the forty-five seconds", category: "time" },
          { es: "hablar sola sin vergüenza", en: "talking alone without embarrassment", category: "opinion" },
          { es: "el cronómetro de un minuto", en: "the one-minute timer", category: "other" },
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        completions: [
          { es: "me ayudaron anoche", en: "helped me last night", category: "other" },
          { es: "aprendí frente al espejo", en: "I learned in front of the mirror", category: "other" },
          { es: "quiero repetir esta noche", en: "I want to repeat tonight", category: "activity" },
          { es: "me dieron vergüenza", en: "embarrassed me", category: "opinion" },
          { es: "funcionaron para sostener", en: "worked for sustaining", category: "other" },
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        completions: [
          { es: "no parar cuando tropiezo", en: "not stopping when I stumble", category: "activity" },
          { es: "poner un cronómetro de un minuto", en: "setting a one-minute timer", category: "activity" },
          { es: "hablar de algo que ya conozco", en: "talking about something I already know", category: "activity" },
          { es: "elegir un tema fácil", en: "choosing an easy topic", category: "activity" },
          { es: "respirar antes de empezar", en: "breathing before starting", category: "activity" },
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        completions: [
          { es: "contar la historia de diego", en: "telling Diego's story", category: "activity" },
          { es: "usar stems que ya practiqué", en: "using stems I already practiced", category: "activity" },
          { es: "seguir adelante sin corregirme", en: "keeping going without correcting myself", category: "activity" },
          { es: "no mirar el cronómetro", en: "not looking at the timer", category: "activity" },
          { es: "hablar más despacio", en: "speaking more slowly", category: "activity" },
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        completions: [
          { es: "lo intento otra vez esta noche", en: "I'll try again tonight", category: "activity" },
          { es: "llegué a cuarenta y cinco segundos", en: "I got to forty-five seconds", category: "time" },
          { es: "mañana escribo tres frases", en: "tomorrow I write three sentences", category: "activity" },
          { es: "diré que el espejo no muerde", en: "I'll say the mirror doesn't bite", category: "opinion" },
          { es: "prometo intentar el minuto completo", en: "I promise to try for the full minute", category: "other" },
        ],
      },
    ],
  },
  {
    day: 173,
    theme: "Escribir",
    stems: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        completions: [
          { es: "mi semana de práctica", en: "my practice week", category: "other" },
          { es: "las tres cosas que aprendí", en: "the three things I learned", category: "other" },
          { es: "escribir frases con stems", en: "writing sentences with stems", category: "activity" },
          { es: "mi mejor frase del cuaderno", en: "my best sentence from the notebook", category: "other" },
          { es: "cómo me fue esta semana", en: "how my week went", category: "other" },
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        completions: [
          { es: "quiero contarte de esta semana", en: "I want to tell you about this week", category: "other" },
          { es: "cumplí casi todos los días", en: "I accomplished almost every day", category: "activity" },
          { es: "escribí en mi cuaderno", en: "I wrote in my notebook", category: "activity" },
          { es: "funcionaron bien", en: "worked well", category: "opinion" },
          { es: "aprendí esta semana", en: "I learned this week", category: "other" },
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        completions: [
          { es: "que leí en voz alta tres noches seguidas", en: "that I read out loud three nights in a row", category: "activity" },
          { es: "que la lectura antes de dormir funciona", en: "that reading before bed works", category: "opinion" },
          { es: "que empecé y no paré", en: "that I started and didn't stop", category: "activity" },
          { es: "que subrayé palabras nuevas", en: "that I underlined new words", category: "activity" },
          { es: "que cumplí la meta de lectura", en: "that I met the reading goal", category: "other" },
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        completions: [
          { es: "que hablé cuarenta y cinco segundos sin parar", en: "that I spoke forty-five seconds without stopping", category: "activity" },
          { es: "que el espejo no muerde", en: "that the mirror doesn't bite", category: "opinion" },
          { es: "que conté la historia de diego sola", en: "that I told Diego's story alone", category: "activity" },
          { es: "que escuché un podcast entero", en: "that I listened to a whole podcast", category: "activity" },
          { es: "que no me rendí", en: "that I didn't give up", category: "opinion" },
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        completions: [
          { es: "me quedo con esta frase del cuaderno", en: "I'm keeping this sentence from the notebook", category: "other" },
          { es: "escribí tres frases con stems de otoño", en: "I wrote three sentences with fall stems", category: "activity" },
          { es: "mañana hago el balance", en: "tomorrow I do the assessment", category: "time" },
          { es: "diré que valió la pena", en: "I'll say it was worth it", category: "opinion" },
          { es: "prometo seguir la próxima semana", en: "I promise to continue next week", category: "other" },
        ],
      },
    ],
  },
  {
    day: 174,
    theme: "El balance",
    stems: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        completions: [
          { es: "el balance de mi semana", en: "the balance of my week", category: "other" },
          { es: "lo que funcionó y lo que faltó", en: "what worked and what was missing", category: "other" },
          { es: "ajustar el plan", en: "adjusting the plan", category: "activity" },
          { es: "mis logros del sábado", en: "my Saturday accomplishments", category: "other" },
          { es: "cómo voy a seguir", en: "how I'm going to continue", category: "activity" },
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        completions: [
          { es: "funcionaron esta semana", en: "worked this week", category: "other" },
          { es: "voy a seguir haciendo", en: "I'm going to keep doing", category: "activity" },
          { es: "necesito ajustar", en: "I need to adjust", category: "activity" },
          { es: "me sorprendieron", en: "surprised me", category: "opinion" },
          { es: "aprendí del balance", en: "I learned from the assessment", category: "other" },
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        completions: [
          { es: "leer antes de dormir — eso sí lo cumplí", en: "reading before bed — I did accomplish that", category: "activity" },
          { es: "que la estructura me ayuda a no parar", en: "that structure helps me not stop", category: "other" },
          { es: "que empecé y terminé la semana", en: "that I started and finished the week", category: "activity" },
          { es: "que la lectura funciona", en: "that reading works", category: "opinion" },
          { es: "que anotar metas ayuda", en: "that writing goals helps", category: "opinion" },
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        completions: [
          { es: "hablar sola — da vergüenza, pero funciona", en: "talking alone — embarrassing, but it works", category: "activity" },
          { es: "que llegué casi al minuto", en: "that I almost reached a minute", category: "time" },
          { es: "no rendirme cuando tropiezo", en: "not giving up when I stumble", category: "opinion" },
          { es: "que el podcast ayudó", en: "that the podcast helped", category: "opinion" },
          { es: "escribir frases cada noche", en: "writing sentences each night", category: "activity" },
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        completions: [
          { es: "diré lo que faltó: el minuto completo", en: "I'll say what was missing: the full minute", category: "other" },
          { es: "voy a seguir la próxima semana", en: "I'm going to continue next week", category: "activity" },
          { es: "ajusto el plan y sigo", en: "I adjust the plan and continue", category: "activity" },
          { es: "prometo intentar el minuto entero", en: "I promise to try for the full minute", category: "other" },
          { es: "diré que valió la pena", en: "I'll say it was worth it", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 175,
    theme: "Repaso: el minuto entero",
    stems: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        completions: [
          { es: "mi semana de práctica — el repaso entero", en: "my practice week — the whole review", category: "other" },
          { es: "lo que aprendí en siete días", en: "what I learned in seven days", category: "other" },
          { es: "cómo llegué a cuarenta y cinco segundos", en: "how I got to forty-five seconds", category: "time" },
          { es: "el monólogo estructurado", en: "the structured monologue", category: "other" },
          { es: "mi progreso de sostener", en: "my sustain progress", category: "other" },
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        completions: [
          { es: "aprendí: leer, escuchar y hablar", en: "I learned: read, listen, and speak", category: "activity" },
          { es: "funcionaron: cuaderno, espejo y estructura", en: "worked: notebook, mirror, and structure", category: "other" },
          { es: "voy a seguir haciendo", en: "I'm going to keep doing", category: "activity" },
          { es: "me ayudaron a sostener", en: "helped me sustain", category: "other" },
          { es: "cambiaron mi práctica", en: "changed my practice", category: "opinion" },
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        completions: [
          { es: "que la lectura antes de dormir funciona", en: "that reading before bed works", category: "opinion" },
          { es: "que la estructura me salva cuando tropiezo", en: "that structure saves me when I stumble", category: "other" },
          { es: "empezar — el resto sigue", en: "starting — the rest follows", category: "activity" },
          { es: "que los stems de monólogo ayudan", en: "that monologue stems help", category: "opinion" },
          { es: "que cumplí casi todo", en: "that I accomplished almost everything", category: "other" },
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        completions: [
          { es: "que el espejo no muerde", en: "that the mirror doesn't bite", category: "opinion" },
          { es: "no parar cuando tropiezo", en: "not stopping when I stumble", category: "activity" },
          { es: "que cuarenta y cinco segundos no es poco", en: "that forty-five seconds is not nothing", category: "opinion" },
          { es: "que hablar sola funciona", en: "that talking alone works", category: "opinion" },
          { es: "escuchar sin traducir", en: "listening without translating", category: "activity" },
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        completions: [
          { es: "voy a seguir hasta el minuto entero", en: "I'm going to continue until the full minute", category: "activity" },
          { es: "llegué a cuarenta y cinco segundos — y sigo", en: "I got to forty-five seconds — and I continue", category: "time" },
          { es: "esta semana me preparó para el cierre de otoño", en: "this week prepared me for fall's close", category: "other" },
          { es: "prometo el minuto completo pronto", en: "I promise the full minute soon", category: "other" },
          { es: "diré que valió cada día", en: "I'll say each day was worth it", category: "opinion" },
        ],
      },
    ],
  },
];
