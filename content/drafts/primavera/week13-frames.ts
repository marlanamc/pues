import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 13 — "El año entero" (days 358–364). The year capstone.
 * Story: "El año entero" — the last week of Pues, Marlana plays her June
 * recording next to today's, the whole table meets one last Thursday, and the
 * five movements of primavera meet the four seasons in one long conversation.
 *
 * The five stems are one from each movement of the season rather than one
 * week's set: *Soy de las que…* (wk 1), *Te estoy tomando el pelo* (wk 2),
 * *Entiendo tu punto, pero…* (wk 5), *Lo primero que se me ocurre es…* (wk 10),
 * *Volviendo a lo que dijiste…* (wk 11). Every example is new — convention 8
 * still holds.
 *
 * Day 363 follows the day-42 variant: its five prompts are the beats of a
 * single final conversation rather than five separate situations.
 */
export const priWeek13FrameDays: FrameDay[] = [
  {
    day: 358,
    theme: "El año entero: La última semana",
    subtitle: "Three hundred and sixty-four days in, and the year has one week left.",
    frames: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        scenarios: ["counting back", "who she is now", "not who she was in June"],
        examples: [
          "Soy de las que llevan un año hablando todos los días.",
          "Soy de las que ya no cuentan los días con miedo.",
          "Soy de las que se dan cuenta tarde de lo lejos que llegaron.",
        ],
        note: "Three hundred and sixty-four days ago *soy de las que…* would have been a grammar exercise. Now it's a self-portrait — which is what week 1 was for.",
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["lightening the last week", "before it gets sentimental", "Camila bracing"],
        examples: [
          "Te estoy tomando el pelo, no llores todavía.",
          "Te estoy tomando el pelo, Camila, falta una semana entera.",
          "Te estoy tomando el pelo — bueno, tal vez no del todo.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        scenarios: ["pushing back on rushing the end", "the year deserves more than a sprint", "disagreeing gently"],
        examples: [
          "Entiendo tu punto, pero no quiero que esta semana se me pase volando.",
          "Entiendo tu punto, pero el jueves no se adelanta.",
          "Entiendo tu punto, pero primero quiero oír el audio de junio.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["when asked about the year", "no prep", "honest and immediate"],
        examples: [
          "Lo primero que se me ocurre es que empecé sin creérmelo.",
          "Lo primero que se me ocurre es el primer jueves en el café.",
          "Lo primero que se me ocurre es que ya no traduzco en la cabeza.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["callback to invierno's promise", "spring's first Thursday", "the thread that held"],
        examples: [
          "Volviendo a lo que dijiste en marzo: sonar natural no era el final.",
          "Volviendo a lo que dijiste el primer jueves de primavera, lo recuerdo.",
          "Volviendo a lo que dijiste sobre los jueves — eso sigue siendo verdad.",
        ],
      },
    ],
  },
  {
    day: 359,
    theme: "El año entero: Hace un año",
    subtitle: "Day one, recorded in June. You kept it for this.",
    frames: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        scenarios: ["hearing June Marlana", "who she was", "who she isn't anymore"],
        examples: [
          "Soy de las que ya no reconocen su voz de junio.",
          "Soy de las que en junio pedían permiso para cada frase.",
          "Soy de las que guardaron el primer audio por si acaso.",
        ],
        note: "*Hace un año no podía…* is the sentence this day is built around. Listen first, then name what changed.",
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["after the recording plays", "softening the sting", "Camila's reaction"],
        examples: [
          "Te estoy tomando el pelo, no era tan horrible.",
          "Te estoy tomando el pelo — bueno, sí era tan horrible.",
          "Te estoy tomando el pelo, Camila, no mires así.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        scenarios: ["pushing back on cruelty", "it wasn't that bad", "or it was and that's the point"],
        examples: [
          "Entiendo tu punto, pero no me compadezcas.",
          "Entiendo tu punto, pero esa persona tenía valor también.",
          "Entiendo tu punto, pero hace un año no podía pedir un café.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["reacting to day one", "zero prep", "what June sounds like"],
        examples: [
          "Lo primero que se me ocurre es que tenía miedo de la pausa.",
          "Lo primero que se me ocurre es que decía \"perdón\" dos veces por frase.",
          "Lo primero que se me ocurre es que ya no hablo así.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["Camila's note from week 4", "keep the first recording", "she was right"],
        examples: [
          "Volviendo a lo que dijiste en invierno: guarda el primero.",
          "Volviendo a lo que dijiste, tenías razón en guardarlo.",
          "Volviendo a lo que dijiste sobre la pausa — ahí estaba todo.",
        ],
      },
    ],
  },
  {
    day: 360,
    theme: "El año entero: Lo que cambió",
    subtitle: "Name it precisely, because \"I got better\" explains nothing.",
    frames: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        scenarios: ["four seasons in one portrait", "habit not talent", "the repeatable version"],
        examples: [
          "Soy de las que hablan todos los días, poquito, un año entero.",
          "Soy de las que no llaman don a lo que fue constancia.",
          "Soy de las que pueden nombrar qué cambió sin decir \"mejoré\".",
        ],
        note: "\"I got better\" explains nothing and can't be repeated. Four seasons, one mechanism: show up, say five sentences, keep the Thursday.",
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["when Camila calls it talent", "interrupting the compliment", "with love"],
        examples: [
          "Te estoy tomando el pelo — bueno, no, no fue talento.",
          "Te estoy tomando el pelo si crees que fue el acento.",
          "Te estoy tomando el pelo, Rocío, no fue magia.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        scenarios: ["each season had a job", "verano vs invierno vs primavera", "correcting the summary"],
        examples: [
          "Entiendo tu punto, pero verano no fue vocabulario, fue supervivencia.",
          "Entiendo tu punto, pero invierno no fue gramática, fue dejar de frenar.",
          "Entiendo tu punto, pero primavera fue personalidad, no perfección.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["each season's gift", "cold answer", "no essay"],
        examples: [
          "Lo primero que se me ocurre es que el miedo a la pausa se fue.",
          "Lo primero que se me ocurre es que ahora interrumpo sin disculparme tanto.",
          "Lo primero que se me ocurre es que hablo de mí con color.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["Camila naming what she saw", "from outside", "the first change"],
        examples: [
          "Volviendo a lo que dijiste en otoño: empezó con las preguntas.",
          "Volviendo a lo que dijiste en enero: dejó de pedir permiso.",
          "Volviendo a lo que dijiste la semana pasada: ya suena a ti.",
        ],
      },
    ],
  },
  {
    day: 361,
    theme: "El año entero: La mesa entera",
    subtitle: "Four people, one language, one year — everyone who was there.",
    frames: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        scenarios: ["introducing the table", "who built this", "who stayed"],
        examples: [
          "Soy de las que trajeron a alguien nuevo al café cada temporada.",
          "Soy de las que ya no son la única en la mesa.",
          "Soy de las que tienen un jueves fijo desde junio.",
        ],
        note: "Yesenia arrived in invierno. Rocío was always there. Camila started it. Marlana was the one who kept showing up — which is the whole year.",
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["Yesenia's disbelief", "lightening the origin story", "the humble version"],
        examples: [
          "Te estoy tomando el pelo, Yesenia, no planifiqué ninguno de estos jueves.",
          "Te estoy tomando el pelo — bueno, el café sí lo planifiqué.",
          "Te estoy tomando el pelo, mamá, no llores en el grupo.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        scenarios: ["Yesenia says it looks easy", "pushing back", "the honest version"],
        examples: [
          "Entiendo tu punto, pero hace un año yo tampoco creía que fuera posible.",
          "Entiendo tu punto, pero no fue un año de estudiar, fue un año de hablar.",
          "Entiendo tu punto, pero la mesa importa tanto como la app.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["Yesenia asks how to start", "no script", "what actually worked"],
        examples: [
          "Lo primero que se me ocurre es: cinco frases al día, nada más.",
          "Lo primero que se me ocurre es que alguien al otro lado hace falta.",
          "Lo primero que se me ocurre es que empieces feo y sigas.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["Yesenia's fear", "recognizing it", "from January"],
        examples: [
          "Volviendo a lo que dijiste: no te preocupa el inglés, te preocupa la pena.",
          "Volviendo a lo que dijiste en enero — lo recuerdo porque lo sentí igual.",
          "Volviendo a lo que dijiste sobre empezar sola — no funcionó, ¿verdad?",
        ],
      },
    ],
  },
  {
    day: 362,
    theme: "El año entero: Lo que me llevo",
    subtitle: "Four seasons, four sentences — and one thing that runs through all of them.",
    frames: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        scenarios: ["year-end portrait", "identity not level", "who she is now"],
        examples: [
          "Soy de las que pueden tener una conversación larga sin prepararla.",
          "Soy de las que bromean en español aunque a veces no caiga.",
          "Soy de las que ya no se esconden detrás del cargo.",
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["before the sentimental part", "Camila expecting tears", "deflecting"],
        examples: [
          "Te estoy tomando el pelo, no voy a llorar — bueno, tal vez un poco.",
          "Te estoy tomando el pelo, Camila, no es un discurso.",
          "Te estoy tomando el pelo, ya no me da miedo decirlo en serio.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        scenarios: ["what the year didn't fix", "honest gap", "still shrinking sometimes"],
        examples: [
          "Entiendo tu punto, pero todavía me encojo cuando me contradicen fuerte.",
          "Entiendo tu punto, pero no todo está resuelto — y está bien.",
          "Entiendo tu punto, pero el año no acaba en perfecto.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["each season's word", "verano otoño invierno primavera", "cold and true"],
        examples: [
          "Lo primero que se me ocurre de verano es: sobreviví.",
          "Lo primero que se me ocurre de invierno es: dejé de frenar.",
          "Lo primero que se me ocurre de primavera es: sueno como yo.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["the year's through-line", "Thursdays", "what Camila said in March"],
        examples: [
          "Volviendo a lo que dijiste: hablar es un hábito, no un talento.",
          "Volviendo a lo que dijiste el último jueves de invierno — lo firmo.",
          "Volviendo a lo que dijiste sobre seguir igual: eso es lo que me llevo.",
        ],
      },
    ],
  },
  {
    day: 363,
    theme: "El año entero: Una conversación entera",
    subtitle: "Two hours, four people, one language. The five prompts today are one conversation.",
    frames: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        scenarios: ["how the evening opens", "the year in one breath", "starting the last long talk"],
        examples: [
          "Soy de las que cuentan el año en jueves, no en meses.",
          "Soy de las que empiezan la historia por el final si quieren.",
          "Soy de las que ya no necesitan permiso para hablar dos horas.",
        ],
        note: "Today's five prompts are the beats of one conversation, in order — the day-42 variant. Say them as a single stretch, not five exercises.",
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["mid-story lightness", "keeping it from getting heavy", "the room laughing"],
        examples: [
          "Te estoy tomando el pelo, Camila, no fuiste la profesora — fuiste la mesa.",
          "Te estoy tomando el pelo, Rocío, tú también exageras.",
          "Te estoy tomando el pelo — bueno, la parte del casero sí pasó.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        scenarios: ["someone else's version", "correcting gently", "holding the floor"],
        examples: [
          "Entiendo tu punto, pero falta la mitad de esa historia.",
          "Entiendo tu punto, pero yo lo viví distinto en otoño.",
          "Entiendo tu punto, pero déjame llegar al jueves de marzo.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["cold prompt mid-conversation", "no prep", "the honest answer"],
        examples: [
          "Lo primero que se me ocurre es la llamada al casero — diez minutos, cinco cortes.",
          "Lo primero que se me ocurre es que nunca pensé que aguantaría un año.",
          "Lo primero que se me ocurre es que quiero que siga.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["callback across the year", "closing the loop", "handing it back"],
        examples: [
          "Volviendo a lo que dijiste hace diez minutos: lo difícil viene después.",
          "Volviendo a lo que dijiste de Yesenia — ella ya está en la mesa.",
          "Volviendo a lo que dijiste al principio: esto no se acaba mañana.",
        ],
      },
    ],
  },
  {
    day: 364,
    theme: "El año entero: Repaso",
    subtitle: "Three hundred and sixty-four days. The last one. Say the whole year out loud, once.",
    frames: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        scenarios: ["the last day", "year-end self-portrait", "who she became"],
        examples: [
          "Soy de las que empezaron sin creer y terminaron sin parar.",
          "Soy de las que ya no cuentan cuántas frases faltan.",
          "Soy de las que pueden decir un año entero en cinco frases.",
        ],
        note: "*Hace un año no podía…* opens the retrospective; *soy de las que…* closes it as identity. The arc of primavera in one stem.",
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["one last tease", "before thank you", "because she can"],
        examples: [
          "Te estoy tomando el pelo una última vez este año.",
          "Te estoy tomando el pelo, Camila — bueno, gracias, y ya está.",
          "Te estoy tomando el pelo, y tú ya sabes que es cariño.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        scenarios: ["Camila says she did nothing", "pushing back one last time", "with credit"],
        examples: [
          "Entiendo tu punto, pero viniste a tomar café los jueves y cambiaste un año.",
          "Entiendo tu punto, pero alguien al otro lado hace falta, y fuiste tú.",
          "Entiendo tu punto, pero esto no se queda solo en mi cabeza.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["the year in one cold answer", "no prep", "last prompt"],
        examples: [
          "Lo primero que se me ocurre es gracias.",
          "Lo primero que se me ocurre es que hablar es un hábito.",
          "Lo primero que se me ocurre es que quiero seguir mañana.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["the last handover", "final question", "listening at the end"],
        examples: [
          "Volviendo a lo que dijiste el primer jueves: aquí seguimos.",
          "Volviendo a lo que dijiste — última pregunta del año.",
          "Volviendo a lo que dijiste, y ahora sí, escucho.",
        ],
        note: "Day 364. The year's goal was a real conversation as yourself. It happened, on ordinary Thursdays, without ceremony.",
      },
    ],
  },
];
