import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 10 — "El turno" (days 246–252). Holding and passing the floor.
 * Story: "La conversación de tres" — Camila is back from Bogotá, and she,
 * Marlana and Rocío start meeting as a three. Two people alternate; three
 * people have to claim.
 *
 * The fifth stem is where CURRICULUM's old week 2.5 ("Estoy contigo") lands:
 * listener signals get their own frame here, after being introduced as a story
 * beat on day 195.
 */
export const invWeek10FrameDays: FrameDay[] = [
  {
    day: 246,
    theme: "El turno: Tres al mismo tiempo",
    subtitle: "Two people take turns by default. Three people is a different sport.",
    frames: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["handing over deliberately", "bringing in the quiet one", "after saying her piece"],
        examples: [
          "¿Y tú qué opinas, Rocío?",
          "¿Y tú qué opinas? Llevas rato callada.",
          "¿Y tú qué opinas de todo esto?",
        ],
        note: "The most generous four words in a three-way conversation. Someone always gets left out, and this is how you fix it.",
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        scenarios: ["holding the floor", "one more sentence", "not losing the point"],
        examples: [
          "Déjame terminar y ya te la paso.",
          "Déjame terminar la idea, me falta poquito.",
          "Déjame terminar, que si no se me va.",
        ],
        note: "*Que si no se me va* — because otherwise I'll lose it. The honest reason, and it works better than insisting.",
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        scenarios: ["someone jumped ahead", "the answer is coming", "asking for patience"],
        examples: [
          "A eso voy, dame un segundo.",
          "A eso voy, pero primero el contexto.",
          "A eso voy, es justo lo que iba a decir.",
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        scenarios: ["resuming after an interruption", "picking the thread back up", "no hard feelings"],
        examples: [
          "Como te decía, las familias quieren más temprano.",
          "Como te decía antes de la interrupción, faltan sillas.",
          "Como te decía, yo me encargo de las llamadas.",
        ],
        note: "Zero resentment in this phrase. It just picks the sentence up where it fell and keeps going.",
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        scenarios: ["being audibly present", "while someone else talks", "signalling you're with them"],
        examples: [
          "Ajá, claro, te sigo.",
          "Ajá, claro, y entonces qué hiciste.",
          "Ajá, exacto, eso mismo pensé yo.",
        ],
        note: "The whole family: *ajá · claro · ya · exacto · entiendo · sí, sí*. In Spanish the listener makes noise. Silence reads as absence, not respect.",
      },
    ],
  },
  {
    day: 247,
    theme: "El turno: Déjame terminar",
    subtitle: "Someone jumps in halfway. You're allowed to finish the sentence.",
    frames: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["after finishing properly", "checking she agrees", "giving it back"],
        examples: [
          "Ya dije lo mío. ¿Y tú qué opinas?",
          "¿Y tú qué opinas? Puede que esté equivocada.",
          "¿Y tú qué opinas, Camila, desde el hospital lo ves distinto?",
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        scenarios: ["with a friend", "two sentences left", "without getting annoyed"],
        examples: [
          "Déjame terminar, son dos frases más.",
          "Déjame terminar esta parte y opinas.",
          "Déjame terminar, no te enojes, es que se me va.",
        ],
        note: "You can say this without any edge at all. Tone does all the work; the words are neutral.",
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        scenarios: ["they asked the question you were answering", "context first", "trust me"],
        examples: [
          "A eso voy, espérame tantito.",
          "A eso voy, pero necesitas saber lo de antes.",
          "A eso voy, confía en mí.",
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        scenarios: ["back to the point", "after the tangent", "third attempt"],
        examples: [
          "Como te decía, el problema es el horario.",
          "Como te decía, y ahora sí termino.",
          "Como te decía por tercera vez.",
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        scenarios: ["while Rocío explains", "showing you're following", "encouraging her to go on"],
        examples: [
          "Ajá, claro, sigue.",
          "Ajá, ya, ya veo por dónde vas.",
          "Ajá, entiendo, y eso lo cambia todo.",
        ],
      },
    ],
  },
  {
    day: 248,
    theme: "El turno: A eso voy",
    subtitle: "They rush you toward the point. You need three more sentences first.",
    frames: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["once she's landed it", "genuinely curious", "opening it up"],
        examples: [
          "Ahora sí llegué al punto. ¿Y tú qué opinas?",
          "¿Y tú qué opinas? De verdad quiero saber.",
          "¿Y tú qué opinas? A lo mejor lo estoy viendo mal.",
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        scenarios: ["the context matters", "one more piece", "then it'll make sense"],
        examples: [
          "Déjame terminar el contexto y se entiende solo.",
          "Déjame terminar con esta parte, es la importante.",
          "Déjame terminar y verás que sí tiene sentido.",
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        scenarios: ["the long way round", "asking for thirty seconds", "the point is coming"],
        examples: [
          "A eso voy, voy dando la vuelta pero llego.",
          "A eso voy, dame treinta segundos.",
          "A eso voy, la conclusión es lo que preguntas.",
        ],
        note: "Buys you the rest of your story without conceding the floor. Say it once and most people wait.",
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        scenarios: ["returning to the middle", "after the third interruption", "keeping the shape"],
        examples: [
          "Como te decía, todo empezó el martes.",
          "Como te decía, y ahora sí sin que me interrumpan.",
          "Como te decía, hay tres partes y vamos en la primera.",
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        scenarios: ["giving someone else the room", "brief noises only", "not stealing the turn"],
        examples: [
          "Ajá, claro, dale.",
          "Ajá, sí, sí, te escucho.",
          "Ajá, claro, no te interrumpo más.",
        ],
      },
    ],
  },
  {
    day: 249,
    theme: "El turno: ¿Y tú qué opinas?",
    subtitle: "Giving the floor away on purpose. Nobody does it, and it changes the room.",
    frames: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["to the quietest person", "after dominating", "when she genuinely doesn't know"],
        examples: [
          "¿Y tú qué opinas? No has dicho nada en veinte minutos.",
          "¿Y tú qué opinas? Yo llevo hablando demasiado.",
          "¿Y tú qué opinas? Yo la verdad no sé.",
        ],
        note: "Handing over deliberately is a skill nobody teaches. In a three-way conversation it's the difference between two people talking and three.",
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        scenarios: ["one short thing first", "before handing over", "closing her own point"],
        examples: [
          "Déjame terminar esta frase y te escucho.",
          "Déjame terminar y después opinan ustedes dos.",
          "Déjame terminar rapidito, es corto.",
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        scenarios: ["yes, the question is coming", "she'll ask them in a second", "almost there"],
        examples: [
          "A eso voy, ahorita les pregunto a ustedes.",
          "A eso voy, ya casi.",
          "A eso voy, y ahí sí quiero oírlas.",
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        scenarios: ["setting up the handover", "the last piece", "then it's yours"],
        examples: [
          "Como te decía, esa es mi parte, ahora la tuya.",
          "Como te decía, yo lo veo así, pero puedo estar mal.",
          "Como te decía, ya terminé, adelante.",
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        scenarios: ["while she answers", "encouraging a long answer", "not filling the pause"],
        examples: [
          "Ajá, claro, cuéntame más.",
          "Ajá, ya, sigue, no te apures.",
          "Ajá, exacto, en eso no había pensado.",
        ],
        note: "When you've handed over the floor, these are the only sounds you make. They keep the other person going without taking it back.",
      },
    ],
  },
  {
    day: 250,
    theme: "El turno: Como te decía",
    subtitle: "Interrupted three times in one story. You got back in three times.",
    frames: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["after finally finishing", "asking both of them", "genuinely open"],
        examples: [
          "Ya, por fin terminé. ¿Y tú qué opinas?",
          "¿Y tú qué opinas ahora que ya oíste todo?",
          "¿Y tú qué opinas? Ahora sí puedo escuchar.",
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        scenarios: ["third time asking", "still friendly", "almost done"],
        examples: [
          "Déjame terminar, por tercera vez.",
          "Déjame terminar, ya casi, lo prometo.",
          "Déjame terminar y luego se ríen de mí.",
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        scenarios: ["they guessed the ending", "not yet", "the detour matters"],
        examples: [
          "A eso voy, no me adelantes el final.",
          "A eso voy, todavía no.",
          "A eso voy, el rodeo tiene sentido, ya verás.",
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        scenarios: ["after the first interruption", "after the second", "after the third"],
        examples: [
          "Como te decía, llegué a la junta con tres puntos.",
          "Como te decía, el segundo era el del transporte.",
          "Como te decía, y el tercero no lo dije nunca.",
        ],
        note: "Three uses in one story and none of them sound annoyed. That's the phrase doing its job.",
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        scenarios: ["giving them their turn back", "listening properly", "and meaning it"],
        examples: [
          "Ajá, claro, ahora sí las escucho a ustedes.",
          "Ajá, sí, tienes razón en eso.",
          "Ajá, ya entendí por dónde ibas.",
        ],
      },
    ],
  },
  {
    day: 251,
    theme: "El turno: Ajá, claro",
    subtitle: "Camila talks for ten minutes and you're audibly there the whole way.",
    frames: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["at the end of her story", "asking for the real answer", "turning it to Rocío"],
        examples: [
          "Después de todo eso, ¿y tú qué opinas?",
          "¿Y tú qué opinas de verdad, no lo educado?",
          "¿Y tú qué opinas, Rocío? Somos tres aquí.",
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        scenarios: ["only when it's needed", "not this time", "letting it go"],
        examples: [
          "Hoy no me hizo falta decir \"déjame terminar\".",
          "Déjame terminar solo cuando de verdad importa.",
          "Déjame terminar esta y ya no digo más en toda la noche.",
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        scenarios: ["not needed either", "she wasn't rushed", "she had the room"],
        examples: [
          "Hoy nadie me apuró, así que no dije \"a eso voy\".",
          "A eso voy es para cuando te empujan, y hoy no.",
          "A eso voy lo usé una vez y bastó.",
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        scenarios: ["once, gently", "the story stayed whole", "no repairs needed"],
        examples: [
          "Como te decía, y esta vez sí llegué al final.",
          "Como te decía, no me interrumpieron ni una vez.",
          "Como te decía, la historia salió entera.",
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        scenarios: ["ten minutes of listening", "the payoff of week 2", "she never went silent"],
        examples: [
          "Ajá, claro, y tu abuela qué dijo.",
          "Ajá, ya, ya, cuéntame esa parte otra vez.",
          "Ajá, exacto, eso es lo que yo pensaba.",
        ],
        note: "Day 195 taught this as a problem. Ten weeks later it's a habit, and Camila never once had to ask if you were still there.",
      },
    ],
  },
  {
    day: 252,
    theme: "El turno: Repaso",
    subtitle: "A conversation among three, and all three of you talked.",
    frames: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["the one she uses most", "and means", "the generous one"],
        examples: [
          "¿Y tú qué opinas? es la que más digo ahora.",
          "¿Y tú qué opinas? cambia una conversación entera.",
          "¿Y tú qué opinas? nadie la usa y debería.",
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        scenarios: ["the hardest to say without edge", "getting easier", "worth it"],
        examples: [
          "Déjame terminar me costó decirlo sin sonar molesta.",
          "Déjame terminar ya me sale tranquilo.",
          "Déjame terminar sirve más de lo que pensaba.",
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        scenarios: ["the one that buys time", "three words", "and they wait"],
        examples: [
          "A eso voy me compró la historia entera.",
          "A eso voy son tres palabras y la gente espera.",
          "A eso voy es mi favorita para las historias largas.",
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        scenarios: ["never sounds resentful", "picks up the thread", "used four times"],
        examples: [
          "Como te decía nunca suena a reproche.",
          "Como te decía recoge la frase donde se cayó.",
          "Como te decía lo usé cuatro veces sin darme cuenta.",
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        scenarios: ["the one that took longest to feel natural", "and now is automatic", "the other half of talking"],
        examples: [
          "Ajá, claro fue la que más tardé en sentir natural.",
          "Ajá, claro ya lo hago sin pensarlo.",
          "Ajá, claro resultó ser la otra mitad de conversar.",
        ],
        note: "Five phrases and the whole shape of a conversation changes. None of them is new vocabulary — all of them are timing.",
      },
    ],
  },
];
