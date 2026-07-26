import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 13 — "La última clase" (days 358–364). The year capstone.
 * Story: the end-of-year potluck for the evening ESOL class — the one the
 * district tried to cut in week 8 and the board moved to seven instead.
 * Yesenia comes with a pot, Camila meets the class, Diego's mom shows up, and
 * the last thing that happens all year is turning off the lights with Rocío.
 *
 * The five stems are one from each movement of the season rather than one
 * week's set: *La verdad es que…* (wk 1), *Te estoy tomando el pelo* (wk 2),
 * *Entiendo tu punto, pero…* (wk 5), *Lo primero que se me ocurre es…* (wk 10),
 * *Volviendo a lo que dijiste…* (wk 11).
 *
 * The year is the subtext of this week and never its topic. Not one sentence
 * here is about having practiced — the whole point is that by now you just
 * talk.
 */
export const priWeek13FrameDays: FrameDay[] = [
  {
    day: 358,
    theme: "La última clase: El salón a las seis",
    subtitle: "An hour before anyone arrives. Two teachers, forty chairs, and no idea how many are coming.",
    frames: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        scenarios: ["admitting she's never done this", "the honest state of the plan", "before anyone sees"],
        examples: [
          "La verdad es que nunca he hecho una de estas y no sé cuánta gente viene.",
          "La verdad es que compré comida para veinte por si acaso.",
          "La verdad es que llevo tres días pensando en esta noche.",
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["the tablecloth", "keeping it light while setting up", "Rocío takes it seriously"],
        examples: [
          "Te estoy tomando el pelo, el mantel se ve bien.",
          "Te estoy tomando el pelo, nadie va a medir las servilletas.",
          "Te estoy tomando el pelo, sí puedes poner la música.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but… / I hear you, but…",
        scenarios: ["how to arrange the chairs", "a real disagreement about the room", "gentle pushback"],
        examples: [
          "Entiendo tu punto, pero si ponemos las sillas en filas nadie va a hablar.",
          "Entiendo tu punto, pero prefiero que no haya una mesa al frente.",
          "Entiendo tu punto, pero esta noche no doy ningún discurso.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["solving it on the spot", "no plan, just an idea", "letting them organize themselves"],
        examples: [
          "Lo primero que se me ocurre es poner la comida en el centro y que ellos se organicen.",
          "Lo primero que se me ocurre es dejar la puerta abierta y ver quién entra.",
          "Lo primero que se me ocurre es empezar sin esperar a nadie.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["picking up a thread from weeks ago", "the coordinator", "the thing left unresolved"],
        examples: [
          "Volviendo a lo que dijiste de la coordinadora, ¿al final te contestó?",
          "Volviendo a lo que dijiste el lunes, sí llamaron a las familias.",
          "Volviendo a lo que dijiste en abril, esto pasó porque fuimos dos.",
        ],
        note: "*Volviendo a lo que dijiste…* works across weeks, not just across minutes. It's how you show someone you kept their sentence.",
      },
    ],
  },
  {
    day: 359,
    theme: "La última clase: Yesenia llega con la olla",
    subtitle: "Forty minutes early, with food for everyone, and a question from March that never got answered.",
    frames: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        scenarios: ["she didn't expect anyone to bring food", "being caught off guard", "the honest reaction"],
        examples: [
          "La verdad es que no pensé que alguien fuera a traer algo.",
          "La verdad es que esto huele mejor que todo lo que compré yo.",
          "La verdad es que me da pena que hayas cocinado después del turno.",
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["the pot doesn't fit", "teasing a student who's become a friend", "warmth"],
        examples: [
          "Te estoy tomando el pelo, Yesenia, claro que cabe la olla.",
          "Te estoy tomando el pelo, no te vamos a cobrar la entrada.",
          "Te estoy tomando el pelo, tú siempre llegas primero.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but… / I hear you, but…",
        scenarios: ["she wants to serve everyone", "insisting she sit down", "arguing with someone kind"],
        examples: [
          "Entiendo tu punto, pero esta noche no vas a servir tú sola a todos.",
          "Entiendo tu punto, pero hoy te sientas como los demás.",
          "Entiendo tu punto, pero yo también sé usar una cuchara.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["turning the question around", "what she'd tell a beginner", "asking instead of telling"],
        examples: [
          "Lo primero que se me ocurre es preguntarte qué le dirías a alguien que empieza en septiembre.",
          "Lo primero que se me ocurre es que tú expliques mejor que yo por qué vale la pena.",
          "Lo primero que se me ocurre es sentarnos antes de que llegue todo el mundo.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["the question from March", "finally having an answer", "closing a loop"],
        examples: [
          "Volviendo a lo que me preguntaste en marzo, lo del inglés para qué sirve, ¿te puedo contestar ahora?",
          "Volviendo a lo que dijiste de las cuatro horas, tenías razón en preguntar.",
          "Volviendo a lo que dijiste ese jueves, la respuesta corta era mala y lo sabía.",
        ],
        note: "The question that opened week 8 gets its answer here — two months later, in person, out loud. That's what the bridge stems are for.",
      },
    ],
  },
  {
    day: 360,
    theme: "La última clase: Camila conoce a la clase",
    subtitle: "The Thursday café and the Tuesday classroom finally end up in the same room.",
    frames: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        scenarios: ["nervous about the worlds meeting", "admitting it to Camila", "why it mattered"],
        examples: [
          "La verdad es que me daba nervios que ustedes dos se conocieran.",
          "La verdad es que hablo de esta clase contigo desde hace meses.",
          "La verdad es que quería que vieras el salón, no solo oírlo.",
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["in front of the students", "the joke that lands in a group", "no longer nervous about humor"],
        examples: [
          "Te estoy tomando el pelo, aquí nadie cree que yo fuera mala para esto.",
          "Te estoy tomando el pelo, no eres la invitada de honor, eres la que trajo el pan.",
          "Te estoy tomando el pelo, siéntate antes de que te den un examen.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but… / I hear you, but…",
        scenarios: ["not that story", "protecting the room", "disagreeing in front of others"],
        examples: [
          "Entiendo tu punto, pero no les cuentes todavía lo del ascensor.",
          "Entiendo tu punto, pero aquí yo no soy la que hace las preguntas.",
          "Entiendo tu punto, pero deja que ellos hablen primero.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["watching them meet", "the obvious prediction", "on the spot"],
        examples: [
          "Lo primero que se me ocurre es que ustedes dos se van a llevar demasiado bien.",
          "Lo primero que se me ocurre es presentarte a Yesenia antes que a nadie.",
          "Lo primero que se me ocurre es que ya nadie me necesita para traducir.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["at the door", "confirming what she guessed", "the room is the room"],
        examples: [
          "Volviendo a lo que dijiste en la puerta, sí, este es el salón.",
          "Volviendo a lo que dijiste en el café, así suena cuando hablan todos a la vez.",
          "Volviendo a lo que dijiste del hospital, aquí llega la misma gente cansada.",
        ],
      },
    ],
  },
  {
    day: 361,
    theme: "La última clase: La mamá de Diego",
    subtitle: "She came. Usted all the way through, and a conversation from the fall that finally gets finished.",
    frames: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        scenarios: ["not expecting her", "honest in usted", "saying it plainly"],
        examples: [
          "La verdad es que no esperaba que usted viniera.",
          "La verdad es que me alegró mucho verla en la puerta.",
          "La verdad es que Diego habló de esto toda la semana.",
        ],
        note: "**Usted day.** Diego's mother gets *usted* throughout, the way week 7 practiced. Everyone else in the room stays *tú* — the switch is the skill.",
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["the usted transform", "gentle humor with a parent", "Diego predicted it"],
        examples: [
          "Le estoy tomando el pelo, Diego me dijo que usted iba a decir exactamente eso.",
          "Le estoy tomando el pelo, la comida de usted se acabó primero.",
          "Le estoy tomando el pelo, no le voy a poner tarea a usted también.",
        ],
        note: "*Te* → *le*. The phrase survives the register change intact; only the pronoun moves. That's the whole lesson of week 7 in one word.",
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but… / I hear you, but… (usted: *su*)",
        scenarios: ["the English-only question, resolved", "disagreeing respectfully", "with evidence this time"],
        examples: [
          "Entiendo su punto, pero Diego lee mejor en los dos idiomas.",
          "Entiendo su punto, pero el español de la casa no le quita nada al inglés.",
          "Entiendo su punto, pero yo lo he visto explicar en español lo que leyó en inglés.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["one concrete suggestion", "not a lecture", "something for tonight"],
        examples: [
          "Lo primero que se me ocurre es que esta noche le pida que le lea en español.",
          "Lo primero que se me ocurre es que usted le cuente algo y él lo escriba en inglés.",
          "Lo primero que se me ocurre es que vengan los dos el año que viene.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said… (usted: *dijo*)",
        scenarios: ["the fall meeting", "what she was really afraid of", "answering it months later"],
        examples: [
          "Volviendo a lo que dijo en el otoño, que tenía miedo de quedarse afuera. Usted no está afuera.",
          "Volviendo a lo que dijo en la reunión, nadie le va a pedir que cambie su casa.",
          "Volviendo a lo que dijo ese día, tenía razón en preocuparse. Y ya no hace falta.",
        ],
      },
    ],
  },
  {
    day: 362,
    theme: "La última clase: Los que no vuelven",
    subtitle: "Three of them aren't coming back in September, and she already knows which three.",
    frames: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        scenarios: ["the hard part of the night", "saying the number out loud", "no consolation offered"],
        examples: [
          "La verdad es que tres no vuelven y yo ya sé cuáles tres.",
          "La verdad es que llevo dos semanas sin preguntarles para no oírlo.",
          "La verdad es que esto es lo que menos me gusta de junio.",
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["the one who is coming back", "humor in a heavy moment", "reassurance sideways"],
        examples: [
          "Te estoy tomando el pelo, de mí no te libras tan fácil.",
          "Te estoy tomando el pelo, ya te aparté la silla de septiembre.",
          "Te estoy tomando el pelo, tú vuelves aunque cambien el horario.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but… / I hear you, but…",
        scenarios: ["Camila calling it a loss", "reframing what leaving means", "holding a position"],
        examples: [
          "Entiendo tu punto, pero irse no es lo mismo que fracasar.",
          "Entiendo tu punto, pero un año de clase no se borra porque no venga el segundo.",
          "Entiendo tu punto, pero yo no cuento las sillas, cuento las conversaciones.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["what to actually do about it", "a small concrete gesture", "meaning it"],
        examples: [
          "Lo primero que se me ocurre es darles mi número y decirlo en serio.",
          "Lo primero que se me ocurre es escribirles en septiembre aunque no contesten.",
          "Lo primero que se me ocurre es preguntarles a qué hora sí podrían.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["the night shift", "why they can't come", "correcting the easy story"],
        examples: [
          "Volviendo a lo que dijiste del turno de noche, por eso no pueden venir, no porque no quieran.",
          "Volviendo a lo que dijiste de las once personas, siguen siendo once.",
          "Volviendo a lo que dijiste hace un rato, no todos los que se van se rinden.",
        ],
      },
    ],
  },
  {
    day: 363,
    theme: "La última clase: Una conversación entera",
    subtitle: "8:40pm. Most people have gone. Four of you, one table, the leftovers, and one continuous conversation in five beats.",
    frames: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        scenarios: ["beat one — nobody wants to be the one to end it", "the honest opening", "late in the night"],
        examples: [
          "La verdad es que no quiero ser yo la que termine esto.",
          "La verdad es que podríamos quedarnos otra hora y nadie diría nada.",
          "La verdad es que el conserje ya pasó dos veces.",
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["beat two — the leftovers", "Rocío and the containers", "the joke that buys five minutes"],
        examples: [
          "Te estoy tomando el pelo, Rocío, llévate las sobras, todas.",
          "Te estoy tomando el pelo, esa olla se va contigo o conmigo.",
          "Te estoy tomando el pelo, nadie va a lavar nada esta noche.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but… / I hear you, but…",
        scenarios: ["beat three — deciding about September", "not deciding tonight", "a real disagreement at 8:40"],
        examples: [
          "Entiendo tu punto, pero septiembre está a cinco meses y prefiero decidir en agosto.",
          "Entiendo tu punto, pero no quiero prometer nada esta noche y arrepentirme.",
          "Entiendo tu punto, pero si lo decidimos hoy lo decidimos cansadas.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["beat four — the shape of next year", "unplanned, out loud", "the idea nobody had ten minutes ago"],
        examples: [
          "Lo primero que se me ocurre es el mismo salón, la misma hora, y les preguntamos a ellos qué quieren.",
          "Lo primero que se me ocurre es que Yesenia dé la primera clase de septiembre.",
          "Lo primero que se me ocurre es no cambiar nada y ver qué pasa.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["beat five — the answer, an hour later", "closing the loop of the night", "yes"],
        examples: [
          "Volviendo a lo que dijiste hace una hora, sí. Hagámoslo otra vez.",
          "Volviendo a lo que dijiste cuando llegaste, tenías razón, este salón se llena solo.",
          "Volviendo a lo que dijiste de las conversaciones, hoy conté cuatro que valieron el año.",
        ],
        note: "Day 42's variant, one last time: the five prompts are the five beats of a single conversation, in order. Say them back to back and it should sound like one night, not five sentences.",
      },
    ],
  },
  {
    day: 364,
    theme: "La última clase: Cerrar el salón",
    subtitle: "Nine o'clock. Chairs stacked, lights off, and the last thing said all year is said in a hallway.",
    frames: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        scenarios: ["too wired to sleep", "the honest state of her", "no summary offered"],
        examples: [
          "La verdad es que esta noche no voy a poder dormir.",
          "La verdad es que se me hizo corta.",
          "La verdad es que mañana a esta hora voy a extrañar el ruido.",
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        scenarios: ["dividing up the cleanup", "the last joke of the year", "ordinary"],
        examples: [
          "Te estoy tomando el pelo, tú llevas las sillas y yo saco la basura.",
          "Te estoy tomando el pelo, la llave la tienes tú desde marzo.",
          "Te estoy tomando el pelo, mañana no vengo ni por un incendio.",
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but… / I hear you, but…",
        scenarios: ["the pot", "a small last disagreement", "still arguing at nine at night"],
        examples: [
          "Entiendo tu punto, pero no voy a dejar la olla aquí hasta el lunes.",
          "Entiendo tu punto, pero esas sillas no caben en ese armario.",
          "Entiendo tu punto, pero yo apago las luces y tú cierras.",
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        scenarios: ["the thing she'll forget", "writing it down now", "practical, not sentimental"],
        examples: [
          "Lo primero que se me ocurre es que tengo que apuntar el nombre de la mamá de Yesenia antes de que se me olvide.",
          "Lo primero que se me ocurre es mandarle un mensaje a Camila para que llegue bien.",
          "Lo primero que se me ocurre es que la lista de espera todavía existe.",
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["the copier, in April", "she was right", "the last sentence of the year"],
        examples: [
          "Volviendo a lo que dijiste junto a la copiadora en abril, tenías razón. Con dos alcanzaba.",
          "Volviendo a lo que dijiste ese lunes, fuimos las dos y por eso movieron la hora.",
          "Volviendo a lo que dijiste hace meses, el pasillo decidió más que la sala.",
        ],
        note: "The last thing said in three hundred and sixty-four days is *you were right, two of us was enough* — said to a colleague, in a dark hallway, about something that actually happened.",
      },
    ],
  },
];
