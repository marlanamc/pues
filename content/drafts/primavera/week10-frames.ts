import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 10 — "Sin preparación" (days 337–343).
 * Story: "La pregunta sin aviso" — Camila asks unexpected questions at Thursday
 * café; Marlana answers without prep, using whatever comes first.
 *
 * Cold-prompt stems for zero-prep conversation: say the first thing, improvise,
 * admit ignorance, hedge, and answer hypotheticals on the spot.
 */
export const priWeek10FrameDays: FrameDay[] = [
  {
    day: 337,
    theme: "Sin preparación: El juego de Camila",
    subtitle: "No warning, no notes — Camila asks and Marlana says the first thing that comes.",
    frames: [
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["opening cold", "no filter yet", "honest first take"],
        examples: [
          "Lo primero que se me ocurre es que me quedé sin respuesta.",
          "Lo primero que se me ocurre es Atlanta, no Boston.",
          "Lo primero que se me ocurre es que no he pensado en eso en años.",
        ],
        note: "*Lo primero que se me ocurre* buys you a real answer without pretending you had one ready — the stem is the prep.",
      },
      {
        stem: "A ver qué sale…",
        english: "Let's see what comes out… / Let's see what happens…",
        scenarios: ["starting to talk blind", "no plan", "trusting the mouth"],
        examples: [
          "A ver qué sale si empiezo sin orden.",
          "A ver qué sale — no me juzgues todavía.",
          "A ver qué sale cuando no tengo guion.",
        ],
        note: "*A ver qué sale* is permission to be messy. You say it and then you talk.",
      },
      {
        stem: "Ni idea, pero…",
        english: "No idea, but…",
        scenarios: ["honest blank", "then a guess", "staying in the game"],
        examples: [
          "Ni idea, pero suena a algo de mi infancia.",
          "Ni idea, pero creo que diría que sí.",
          "Ni idea, pero me da curiosidad pensarlo.",
        ],
      },
      {
        stem: "Depende, creo que…",
        english: "It depends, I think…",
        scenarios: ["refusing the binary", "two versions", "context first"],
        examples: [
          "Depende, creo que en clase digo una cosa y en el café otra.",
          "Depende, creo que el lunes y el viernes no soy la misma.",
          "Depende, creo que con mi familia es distinto que con mis estudiantes.",
        ],
      },
      {
        stem: "Creo que diría que…",
        english: "I think I'd say that…",
        scenarios: ["hypothetical answer", "what you'd tell someone", "rehearsing out loud"],
        examples: [
          "Creo que diría que no hay una respuesta perfecta.",
          "Creo que diría que pruebe y vea qué pasa.",
          "Creo que diría que el miedo es normal y sigue igual.",
        ],
      },
    ],
  },
  {
    day: 338,
    theme: "Sin preparación: A ver qué sale",
    subtitle: "Second question, no time to think — start talking and find the point on the way.",
    frames: [
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["quick association", "before the smart answer", "gut response"],
        examples: [
          "Lo primero que se me ocurre es mi abuela en la cocina.",
          "Lo primero que se me ocurre es que suena a pregunta de entrevista.",
          "Lo primero que se me ocurre es el olor del pasillo de la escuela.",
        ],
      },
      {
        stem: "A ver qué sale…",
        english: "Let's see what comes out… / Let's see what happens…",
        scenarios: ["improvising live", "Camila waiting", "no exit"],
        examples: [
          "A ver qué sale — empiezo y tú me paras si me pierdo.",
          "A ver qué sale de hablar de esto sin preparación.",
          "A ver qué sale si digo la verdad incompleta.",
        ],
        note: "The whole week in one phrase: you don't need the polished version to stay in Spanish.",
      },
      {
        stem: "Ni idea, pero…",
        english: "No idea, but…",
        scenarios: ["partial memory", "honest gap", "still playing"],
        examples: [
          "Ni idea, pero me acuerdo del color de la pared.",
          "Ni idea, pero no me suena a mentira.",
          "Ni idea, pero quiero intentar una respuesta.",
        ],
      },
      {
        stem: "Depende, creo que…",
        english: "It depends, I think…",
        scenarios: ["which Marlana", "morning vs night", "school vs café"],
        examples: [
          "Depende, creo que de día soy más cuidadosa que de noche.",
          "Depende, creo que si me preguntas en inglés pienso distinto.",
          "Depende, creo que la respuesta cambia si estoy cansada.",
        ],
      },
      {
        stem: "Creo que diría que…",
        english: "I think I'd say that…",
        scenarios: ["imagining the conversation", "what she'd tell Rocío", "scriptless advice"],
        examples: [
          "Creo que diría que empiece por lo que le da miedo.",
          "Creo que diría que no tiene que sonar bien la primera vez.",
          "Creo que diría que el español aguanta dudas.",
        ],
      },
    ],
  },
  {
    day: 339,
    theme: "Sin preparación: Ni idea, pero",
    subtitle: "A question Marlana truly can't answer — and saying so is the answer.",
    frames: [
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["after a pause", "surprise at the blank", "still something"],
        examples: [
          "Lo primero que se me ocurre es que no sé nada de eso.",
          "Lo primero que se me ocurre es quedarme callada, pero no.",
          "Lo primero que se me ocurre es pedirte un ejemplo.",
        ],
      },
      {
        stem: "A ver qué sale…",
        english: "Let's see what comes out… / Let's see what happens…",
        scenarios: ["trying anyway", "thinking out loud", "finding a corner"],
        examples: [
          "A ver qué sale si lo miro desde mi trabajo.",
          "A ver qué sale — capaz conecto algo tarde.",
          "A ver qué sale aunque suene a conjetura.",
        ],
      },
      {
        stem: "Ni idea, pero…",
        english: "No idea, but…",
        scenarios: ["full honesty", "the brave answer", "staying present"],
        examples: [
          "Ni idea, pero me importa lo que piensas tú.",
          "Ni idea, pero nunca me habían preguntado eso.",
          "Ni idea, pero quiero saber por qué lo preguntas.",
        ],
        note: "*Ni idea, pero…* keeps you in the conversation when *no sé* would shut it down.",
      },
      {
        stem: "Depende, creo que…",
        english: "It depends, I think…",
        scenarios: ["when ignorance has layers", "two kinds of not knowing", "context again"],
        examples: [
          "Depende, creo que no sé los datos pero sí cómo me siento.",
          "Depende, creo que en teoría sí y en la vida no.",
          "Depende, creo que tú sabes más de esto que yo.",
        ],
      },
      {
        stem: "Creo que diría que…",
        english: "I think I'd say that…",
        scenarios: ["deflecting with care", "honest referral", "what she'd admit to a student"],
        examples: [
          "Creo que diría que no lo sé y que buscamos juntos.",
          "Creo que diría que esa pregunta merece más de un minuto.",
          "Creo que diría que a veces no hay respuesta y sigue la clase.",
        ],
      },
    ],
  },
  {
    day: 340,
    theme: "Sin preparación: Depende, creo que",
    subtitle: "Camila refuses yes-or-no — Marlana answers in shades, not binaries.",
    frames: [
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["before the hedge", "instinct then nuance", "first take"],
        examples: [
          "Lo primero que se me ocurre es que sí, pero no del todo.",
          "Lo primero que se me ocurre es que depende del día.",
          "Lo primero que se me ocurre es una respuesta fácil que no uso.",
        ],
      },
      {
        stem: "A ver qué sale…",
        english: "Let's see what comes out… / Let's see what happens…",
        scenarios: ["unpacking the depends", "talking through it", "live reasoning"],
        examples: [
          "A ver qué sale si lo parto en dos escenarios.",
          "A ver qué sale — la versión corta y la larga.",
          "A ver qué sale cuando no elijo un bando.",
        ],
      },
      {
        stem: "Ni idea, pero…",
        english: "No idea, but…",
        scenarios: ["one side clear", "other side foggy", "partial certainty"],
        examples: [
          "Ni idea, pero en mi salón funciona de una forma.",
          "Ni idea, pero contigo siempre aprendo algo.",
          "Ni idea, pero suena distinto en Bogotá que aquí.",
        ],
      },
      {
        stem: "Depende, creo que…",
        english: "It depends, I think…",
        scenarios: ["adults vs kids", "Boston vs Atlanta", "work vs family"],
        examples: [
          "Depende, creo que enseñar adultos es más lento y más profundo.",
          "Depende, creo que el código me enseña paciencia y la escuela me enseña gente.",
          "Depende, creo que en primavera digo más cosas en español que en invierno.",
        ],
        note: "*Depende, creo que…* is how adults actually answer — not evasive, just honest about context.",
      },
      {
        stem: "Creo que diría que…",
        english: "I think I'd say that…",
        scenarios: ["both sides at once", "advice with conditions", "hypothetical nuance"],
        examples: [
          "Creo que diría que sí, si tiene apoyo, y no, si está sola.",
          "Creo que diría que las dos cosas pueden ser verdad.",
          "Creo que diría que depende de lo que llame éxito.",
        ],
      },
    ],
  },
  {
    day: 341,
    theme: "Sin preparación: Creo que diría que",
    subtitle: "What would you tell Yesenia? What would you tell yourself? Answer without a script.",
    frames: [
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["before the careful answer", "gut then edit", "heart first"],
        examples: [
          "Lo primero que se me ocurre es que le diría que vuelva el jueves.",
          "Lo primero que se me ocurre es que el folleto no le sirve.",
          "Lo primero que se me ocurre es mi propia duda de hace un año.",
        ],
      },
      {
        stem: "A ver qué sale…",
        english: "Let's see what comes out… / Let's see what happens…",
        scenarios: ["practicing the speech", "out loud to Camila", "finding the words"],
        examples: [
          "A ver qué sale si se lo digo como a una amiga.",
          "A ver qué sale — versión profesora, versión persona.",
          "A ver qué sale cuando imagino su cara.",
        ],
      },
      {
        stem: "Ni idea, pero…",
        english: "No idea, but…",
        scenarios: ["not sure it would land", "honest limits", "still trying"],
        examples: [
          "Ni idea, pero creo que necesita oír que no está sola.",
          "Ni idea, pero quitarle el folleto ya sería algo.",
          "Ni idea, pero tal vez basta con escucharla de verdad.",
        ],
      },
      {
        stem: "Depende, creo que…",
        english: "It depends, I think…",
        scenarios: ["which day she asks", "how tired Yesenia is", "what she really needs"],
        examples: [
          "Depende, creo que a veces necesita información y a veces compañía.",
          "Depende, creo que si viene después del turno es otra conversación.",
          "Depende, creo que la respuesta honesta asusta menos que la perfecta.",
        ],
      },
      {
        stem: "Creo que diría que…",
        english: "I think I'd say that…",
        scenarios: ["Yesenia again", "past Marlana", "a student who wants to quit"],
        examples: [
          "Creo que diría que el inglés no es el premio, es la herramienta.",
          "Creo que diría que hace un año yo tampoco tenía respuesta.",
          "Creo que diría que puede irse y volver cuando quiera.",
        ],
        note: "*Creo que diría que…* lets you rehearse kindness without claiming you've mastered it.",
      },
    ],
  },
  {
    day: 342,
    theme: "Sin preparación: Sin aviso otra vez",
    subtitle: "Rapid fire — five questions, five stems, no time to switch to English.",
    frames: [
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["question one", "fast", "no filter"],
        examples: [
          "Lo primero que se me ocurre es que extraño el calor de Atlanta.",
          "Lo primero que se me ocurre es que no cambiaría mi salón.",
          "Lo primero que se me ocurre es demasiado personal, pero lo digo.",
        ],
      },
      {
        stem: "A ver qué sale…",
        english: "Let's see what comes out… / Let's see what happens…",
        scenarios: ["question two", "improv", "mid-stream"],
        examples: [
          "A ver qué sale — nunca hablé de esto en español.",
          "A ver qué sale si suelto la primera mitad sin pensar.",
          "A ver qué sale, Camila, tú preguntaste.",
        ],
      },
      {
        stem: "Ni idea, pero…",
        english: "No idea, but…",
        scenarios: ["question three", "blank then bridge", "still in the game"],
        examples: [
          "Ni idea, pero me reí antes de pensar.",
          "Ni idea, pero suena a algo que Rocío sabría.",
          "Ni idea, pero gracias por preguntarlo.",
        ],
      },
      {
        stem: "Depende, creo que…",
        english: "It depends, I think…",
        scenarios: ["question four", "hedging live", "two truths"],
        examples: [
          "Depende, creo que los jueves soy más valiente que los lunes.",
          "Depende, creo que hablo mejor cuando estoy un poco nerviosa.",
          "Depende, creo que contigo puedo decir la respuesta fea.",
        ],
      },
      {
        stem: "Creo que diría que…",
        english: "I think I'd say that…",
        scenarios: ["question five", "hypothetical close", "the last one"],
        examples: [
          "Creo que diría que el español me cambió la forma de escuchar.",
          "Creo que diría que todavía me falta, y que eso está bien.",
          "Creo que diría que volvería a empezar mañana.",
        ],
        note: "Five questions, five stems — and not once did you ask for a minute to think in English.",
      },
    ],
  },
  {
    day: 343,
    theme: "Sin preparación: La directora en el pasillo",
    subtitle: "No warning, no notes: the principal asks whether she'll take the summer program.",
    frames: [
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["the honest first thought", "she already said no once", "buying a second"],
        examples: [
          "Lo primero que se me ocurre es que ya dije que no a esto en enero.",
          "Lo primero que se me ocurre es preguntar quién más va a estar.",
          "Lo primero que se me ocurre es que en julio yo no estoy aquí.",
        ],
      },
      {
        stem: "A ver qué sale…",
        english: "Let's see what comes out…",
        scenarios: ["answering without a plan", "asking to be asked again", "thinking out loud"],
        examples: [
          "A ver qué sale, pregúnteme otra vez y contesto sin pensar.",
          "A ver qué sale si lo digo en voz alta ahora mismo.",
          "A ver qué sale — deme diez segundos.",
        ],
      },
      {
        stem: "Ni idea, pero…",
        english: "No idea, but…",
        scenarios: ["admitting you don't know", "what you'd need first", "honest and still useful"],
        examples: [
          "Ni idea, pero necesitaría saber cuántas semanas son primero.",
          "Ni idea, pero no digo que no de entrada.",
          "Ni idea, pero seguro que ya tiene a alguien en mente.",
        ],
      },
      {
        stem: "Depende, creo que…",
        english: "It depends, I think…",
        scenarios: ["the real condition", "mornings only", "a conditional yes"],
        examples: [
          "Depende, creo que si es solo por la mañana sí podría.",
          "Depende, creo que con dos grupos sí y con cuatro no.",
          "Depende, creo que de junio sí, de julio no.",
        ],
      },
      {
        stem: "Creo que diría que…",
        english: "I think I'd say that…",
        scenarios: ["the answer she'll give", "asking for time", "closing without deciding"],
        examples: [
          "Creo que diría que me dé hasta el viernes.",
          "Creo que diría que sí, pero quiero verlo por escrito.",
          "Creo que diría que hable primero con Rocío y después conmigo.",
        ],
        note: "A repaso is the same five stalling moves with someone you can't stall forever. The principal is waiting and the bell is in two minutes.",
      },
    ],
  },
];
