import type { FrameDay } from "../frames/types";

/**
 * Otoño Week 12 draft — "El minuto entero" (days 169–175).
 *
 * Append to content/frames/otono.ts. Same 5 stems every day; each day's
 * examples scaffold that installment of "Mi semana de práctica."
 * Keep index-aligned with week12-prompts.ts, week12-readings.ts, week12-sentenceFormer.ts.
 */
export const week12FrameDays: FrameDay[] = [
  {
    day: 169,
    theme: "El minuto entero: El plan",
    subtitle: "A structured week starts with naming your topic and three things.",
    frames: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        scenarios: ["your plan", "the week ahead", "your goals"],
        examples: [
          "Hoy quiero hablar de mi plan para practicar español.",
          "Hoy quiero hablar de las tres metas que anoté.",
          "Hoy quiero hablar de ser más intencional esta semana.",
        ],
        note: "*Hoy quiero hablar de* opens a monologue the way a presentation starts — name the topic first.",
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        scenarios: ["you want to do", "matter this week", "you committed to"],
        examples: [
          "Hay tres cosas que quiero hacer: leer, escuchar y hablar.",
          "Hay tres cosas que anoté en mi cuaderno.",
          "Hay tres cosas que me comprometí a cumplir.",
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        scenarios: ["deciding when", "reading nightly", "starting today"],
        examples: [
          "Lo primero es decidir cuándo practico cada día.",
          "Lo primero es leer en voz alta antes de dormir.",
          "Lo primero es empezar hoy, no el lunes que viene.",
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        scenarios: ["listening", "speaking", "not skipping"],
        examples: [
          "Lo segundo es escuchar un podcast en el carro.",
          "Lo segundo es hablar en voz alta aunque dé vergüenza.",
          "Lo segundo es no saltarme un solo día.",
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        scenarios: ["reporting back", "the commitment", "Friday check-in"],
        examples: [
          "Para terminar, te cuento el viernes cómo me fue.",
          "Para terminar, me comprometo contigo esta semana.",
          "Para terminar, anoto todo en mi cuaderno.",
        ],
      },
    ],
  },
  {
    day: 170,
    theme: "El minuto entero: La lectura",
    subtitle: "Night one of reading out loud — scaffold the retell.",
    frames: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        scenarios: ["last night's reading", "reading out loud", "the article"],
        examples: [
          "Hoy quiero hablar de leer en voz alta anoche.",
          "Hoy quiero hablar de mi primera meta cumplida.",
          "Hoy quiero hablar de lo que aprendí leyendo.",
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        scenarios: ["helped", "you noticed", "you underlined"],
        examples: [
          "Hay tres cosas que subrayé en el artículo.",
          "Hay tres cosas que me ayudaron a no parar.",
          "Hay tres cosas que quiero repetir mañana.",
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        scenarios: ["starting", "choosing a paragraph", "reading before bed"],
        examples: [
          "Lo primero es empezar — ya lo hice.",
          "Lo primero es elegir un párrafo corto.",
          "Lo primero es leer antes de dormir, sin excusas.",
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        scenarios: ["not skipping tomorrow", "underlining words", "reading aloud"],
        examples: [
          "Lo segundo es no saltarme la lectura mañana.",
          "Lo segundo es subrayar palabras nuevas.",
          "Lo segundo es leer en voz alta aunque suene raro.",
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        scenarios: ["how you felt", "what's next", "the habit forming"],
        examples: [
          "Para terminar, diré que me sentí mejor al final.",
          "Para terminar, mañana leo otra parte del artículo.",
          "Para terminar, ya tengo un hábito empezando.",
        ],
      },
    ],
  },
  {
    day: 171,
    theme: "El minuto entero: Escuchar",
    subtitle: "Podcast day — structure what you caught and what you'll repeat.",
    frames: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        scenarios: ["listening", "the podcast", "learning by ear"],
        examples: [
          "Hoy quiero hablar de escuchar en el carro.",
          "Hoy quiero hablar del podcast de esta mañana.",
          "Hoy quiero hablar de aprender con el oído.",
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        scenarios: ["help with listening", "you caught", "you repeated"],
        examples: [
          "Hay tres cosas que ayudan: escuchar, repetir y no rendirse.",
          "Hay tres cosas que capté del episodio.",
          "Hay tres cosas que repetí en voz baja.",
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        scenarios: ["listen without translating", "normal speed", "short episodes"],
        examples: [
          "Lo primero es escuchar sin traducir.",
          "Lo primero es ponerlo a velocidad normal.",
          "Lo primero es elegir episodios cortos.",
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        scenarios: ["repeat phrases", "don't give up", "come back tomorrow"],
        examples: [
          "Lo segundo es repetir aunque suene raro.",
          "Lo segundo es no rendirse si no entiendo todo.",
          "Lo segundo es anotar una frase que capté.",
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        scenarios: ["come back tomorrow", "what you understood", "the habit"],
        examples: [
          "Para terminar, volver mañana aunque no entienda todo.",
          "Para terminar, diré que capté más de lo que pensaba.",
          "Para terminar, escucho otro episodio el jueves.",
        ],
      },
    ],
  },
  {
    day: 172,
    theme: "El minuto entero: Hablar sola",
    subtitle: "Mirror practice — structure the stumble and the keep-going.",
    frames: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        scenarios: ["talking alone", "the mirror", "not stopping"],
        examples: [
          "Hoy quiero hablar de practicar frente al espejo.",
          "Hoy quiero hablar de no parar cuando tropiezo.",
          "Hoy quiero hablar de los cuarenta y cinco segundos.",
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        scenarios: ["help you sustain", "happened last night", "you learned"],
        examples: [
          "Hay tres cosas que me ayudaron anoche.",
          "Hay tres cosas que aprendí frente al espejo.",
          "Hay tres cosas que quiero repetir esta noche.",
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        scenarios: ["don't stop when you stumble", "use a timer", "talk about something known"],
        examples: [
          "Lo primero es no parar cuando tropiezo.",
          "Lo primero es poner un cronómetro de un minuto.",
          "Lo primero es hablar de algo que ya conozco.",
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        scenarios: ["Diego's story", "known content", "keep going"],
        examples: [
          "Lo segundo es contar la historia de Diego.",
          "Lo segundo es usar stems que ya practiqué.",
          "Lo segundo es seguir adelante sin corregirme.",
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        scenarios: ["try again tonight", "almost a minute", "the progress"],
        examples: [
          "Para terminar, lo intento otra vez esta noche.",
          "Para terminar, llegué a cuarenta y cinco segundos.",
          "Para terminar, mañana escribo tres frases.",
        ],
      },
    ],
  },
  {
    day: 173,
    theme: "El minuto entero: Escribir",
    subtitle: "Friday wrap — three things learned, one sentence kept.",
    frames: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        scenarios: ["the whole week", "three things learned", "writing sentences"],
        examples: [
          "Hoy quiero hablar de mi semana de práctica.",
          "Hoy quiero hablar de las tres cosas que aprendí.",
          "Hoy quiero hablar de escribir frases con stems.",
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        scenarios: ["you want to tell Priya", "you accomplished", "you wrote"],
        examples: [
          "Hay tres cosas que quiero contarte de esta semana.",
          "Hay tres cosas que cumplí casi todos los días.",
          "Hay tres cosas que escribí en mi cuaderno.",
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        scenarios: ["reading three nights", "reading out loud", "the habit"],
        examples: [
          "Lo primero es que leí en voz alta tres noches seguidas.",
          "Lo primero es que la lectura antes de dormir funciona.",
          "Lo primero es que empecé y no paré.",
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        scenarios: ["forty-five seconds", "speaking alone", "the mirror"],
        examples: [
          "Lo segundo es que hablé cuarenta y cinco segundos sin parar.",
          "Lo segundo es que el espejo no muerde.",
          "Lo segundo es que conté la historia de Diego sola.",
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        scenarios: ["favorite sentence", "what you keep", "Saturday balance"],
        examples: [
          "Para terminar, me quedo con esta frase del cuaderno.",
          "Para terminar, escribí tres frases con stems de otoño.",
          "Para terminar, mañana hago el balance.",
        ],
      },
    ],
  },
  {
    day: 174,
    theme: "El minuto entero: El balance",
    subtitle: "Saturday assessment — what worked, what to adjust, what's next.",
    frames: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        scenarios: ["the balance", "what worked", "adjusting the plan"],
        examples: [
          "Hoy quiero hablar del balance de mi semana.",
          "Hoy quiero hablar de lo que funcionó y lo que faltó.",
          "Hoy quiero hablar de ajustar el plan.",
        ],
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        scenarios: ["worked", "you'll continue", "need adjustment"],
        examples: [
          "Hay tres cosas que funcionaron esta semana.",
          "Hay tres cosas que voy a seguir haciendo.",
          "Hay tres cosas que necesito ajustar.",
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        scenarios: ["reading before bed", "what worked best", "the habit"],
        examples: [
          "Lo primero es leer antes de dormir — eso sí lo cumplí.",
          "Lo primero es que la estructura me ayuda a no parar.",
          "Lo primero es que empecé y terminé la semana.",
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        scenarios: ["talking alone works", "embarrassment but progress", "forty-five seconds"],
        examples: [
          "Lo segundo es hablar sola — da vergüenza, pero funciona.",
          "Lo segundo es que llegué casi al minuto.",
          "Lo segundo es no rendirme cuando tropiezo.",
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        scenarios: ["what was missing", "continue next week", "the full minute goal"],
        examples: [
          "Para terminar, diré lo que faltó: el minuto completo.",
          "Para terminar, voy a seguir la próxima semana.",
          "Para terminar, ajusto el plan y sigo.",
        ],
      },
    ],
  },
  {
    day: 175,
    theme: "Repaso: El minuto entero",
    subtitle: "One practice week, five monologue stems — deliver the full minute.",
    frames: [
      {
        stem: "Hoy quiero hablar de…",
        english: "Today I want to talk about…",
        scenarios: ["the whole week", "the practice arc", "the repaso"],
        examples: [
          "Hoy quiero hablar de mi semana de práctica — el repaso entero.",
          "Hoy quiero hablar de lo que aprendí en siete días.",
          "Hoy quiero hablar de cómo llegué a cuarenta y cinco segundos.",
        ],
        note: "Repaso day: five monologue stems, one minute — the scaffold you drilled all week.",
      },
      {
        stem: "Hay tres cosas que…",
        english: "There are three things that…",
        scenarios: ["you learned", "the week's pillars", "the toolkit"],
        examples: [
          "Hay tres cosas que aprendí: leer, escuchar y hablar.",
          "Hay tres cosas que funcionaron: el cuaderno, el espejo y la estructura.",
          "Hay tres cosas que voy a seguir haciendo.",
        ],
      },
      {
        stem: "Lo primero es…",
        english: "The first thing is…",
        scenarios: ["reading works", "structure helps", "starting matters"],
        examples: [
          "Lo primero es que la lectura antes de dormir funciona.",
          "Lo primero es que la estructura me salva cuando tropiezo.",
          "Lo primero es empezar — el resto sigue.",
        ],
      },
      {
        stem: "Lo segundo es…",
        english: "The second thing is…",
        scenarios: ["mirror doesn't bite", "keep going", "forty-five seconds"],
        examples: [
          "Lo segundo es que el espejo no muerde.",
          "Lo segundo es no parar cuando tropiezo.",
          "Lo segundo es que cuarenta y cinco segundos no es poco.",
        ],
      },
      {
        stem: "Para terminar…",
        english: "To finish… / To wrap up…",
        scenarios: ["full minute goal", "continue", "season capstone prep"],
        examples: [
          "Para terminar, voy a seguir hasta el minuto entero.",
          "Para terminar, llegué a cuarenta y cinco segundos — y sigo.",
          "Para terminar, esta semana me preparó para el cierre de otoño.",
        ],
      },
    ],
  },
];
