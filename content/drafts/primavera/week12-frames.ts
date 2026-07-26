import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 12 — "Conversación larga II" (days 351–357).
 * Re-energizing a lull. Story: "Cuando se enfría" — a long Sunday call runs
 * out of steam; Marlana learns the relaunch stems that keep a talk alive.
 */
export const priWeek12FrameDays: FrameDay[] = [
  {
    day: 351,
    theme: "Conversación larga II: El silencio",
    subtitle: "Forty minutes in, the thread runs out — and neither of you knows who should fill it.",
    frames: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        scenarios: ["after a pause", "reopening the talk", "when the list is done"],
        examples: [
          "Bueno, ¿y qué más? ¿Qué más te pasó esta semana?",
          "Bueno, ¿y qué más? Cuéntame, que se me acabaron las preguntas.",
          "Bueno, ¿y qué más? No me dejes colgada con ese silencio.",
        ],
        note: "*¿Y qué más?* sounds lazy in a textbook and generous in a kitchen. It means: I still want to hear you — I just don't know what to ask.",
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        scenarios: ["something from Tuesday", "a detail that returns", "reopening with news"],
        examples: [
          "Se me olvidaba contarte lo de la mamá de Diego.",
          "Se me olvidaba contarte que Rocío me preguntó por ti.",
          "Se me olvidaba contarte — casi cuelgo sin decirte.",
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        scenarios: ["when a thread is dead", "a deliberate pivot", "new air in the call"],
        examples: [
          "Oye, y cambiando de tema, ¿cómo va lo del turno nuevo?",
          "Oye, y cambiando de tema, ¿viste lo de la directora?",
          "Oye, y cambiando de tema — necesito aire fresco en esta llamada.",
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        scenarios: ["something tangential", "a sidebar that opens doors", "soft relaunch"],
        examples: [
          "Por cierto, vi a tu vecina en la panadería.",
          "Por cierto, me acordé de ti cuando pasé por el colegio.",
          "Por cierto, ¿tú dijiste que ibas al médico el martes?",
        ],
        note: "*Por cierto* is the gentlest relaunch — you're not announcing a topic change, you're letting one arrive.",
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        scenarios: ["before hanging up", "the stack at the end", "one thing leads to another"],
        examples: [
          "Ah, y otra cosa — no cuelgues todavía.",
          "Ah, y otra cosa que me acordé ahora mismo.",
          "Ah, y otra cosa: el jueves tengo libre por la tarde.",
        ],
      },
    ],
  },
  {
    day: 352,
    theme: "Conversación larga II: Bueno, ¿y qué más?",
    subtitle: "The question that sounds empty and isn't — an open door when you don't know what's next.",
    frames: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        scenarios: ["Camila's lesson", "after Marlana panics in silence", "the invitation"],
        examples: [
          "Bueno, ¿y qué más? No tiene que ser importante.",
          "Bueno, ¿y qué más te ronda la cabeza?",
          "Bueno, ¿y qué más? A veces sale lo mejor ahí.",
        ],
        note: "You're not asking for a report — you're saying the floor is still theirs. The *bueno* buys a breath.",
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        scenarios: ["Camila's answer to the lull", "what she held back", "small news"],
        examples: [
          "Se me olvidaba contarte que anoche hubo un susto en el hospital.",
          "Se me olvidaba contarte — me lo dijo Rocío el viernes.",
          "Se me olvidaba contarte lo del ascensor, te vas a reír.",
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        scenarios: ["when ¿y qué más? doesn't land", "Camila pivots", "fresh angle"],
        examples: [
          "Oye, y cambiando de tema, ¿tú sigues yendo al café los jueves?",
          "Oye, y cambiando de tema, ¿qué tal Yesenia esta semana?",
          "Oye, y cambiando de tema — hace meses que no hablamos de tu hermana.",
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        scenarios: ["Camila's version", "something she saw", "connecting threads"],
        examples: [
          "Por cierto, tu alumna me escribió anoche.",
          "Por cierto, encontré la receta que me pediste.",
          "Por cierto, ¿sabías que cierran la panadería los lunes?",
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        scenarios: ["stacking after the relaunch", "the call continues", "no rush to hang up"],
        examples: [
          "Ah, y otra cosa — mañana llámame temprano.",
          "Ah, y otra cosa que quería tu opinión.",
          "Ah, y otra cosa: traje pan de bono, pásate.",
        ],
      },
    ],
  },
  {
    day: 353,
    theme: "Conversación larga II: Se me olvidaba contarte",
    subtitle: "The thing you almost didn't say — and how remembering it saves the call.",
    frames: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        scenarios: ["after Marlana's story", "keeping the ball rolling", "follow-up"],
        examples: [
          "Bueno, ¿y qué más pasó con la mamá de Diego?",
          "Bueno, ¿y qué más te dijo la directora?",
          "Bueno, ¿y qué más? No te quedes solo con eso.",
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        scenarios: ["Marlana's relaunch", "something from school", "the almost-missed detail"],
        examples: [
          "Se me olvidaba contarte que Yesenia volvió el jueves.",
          "Se me olvidaba contarte lo que me dijo la mamá al final.",
          "Se me olvidaba contarte — casi lo enterré con el silencio.",
        ],
        note: "*Se me olvidaba* — the imperfect — means it was slipping away while you talked about other things. Perfect for mid-conversation rescue.",
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        scenarios: ["when the school story ends", "pivot to Camila's world", "balance the call"],
        examples: [
          "Oye, y cambiando de tema, ¿cómo amaneció tu turno?",
          "Oye, y cambiando de tema, cuéntame lo del compañero nuevo.",
          "Oye, y cambiando de tema — ya hablé mucho de mi semana.",
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        scenarios: ["linking Diego's mom to something else", "a connection appears", "soft bridge"],
        examples: [
          "Por cierto, la mamá de Diego trabaja cerca del hospital.",
          "Por cierto, me sonó a lo que te pasó en enero.",
          "Por cierto, ¿tú conoces a alguien que traduzca formularios?",
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        scenarios: ["school detail returns", "scheduling", "one more thread"],
        examples: [
          "Ah, y otra cosa — el jueves tengo reunión de padres.",
          "Ah, y otra cosa sobre Yesenia, ahora que lo pienso.",
          "Ah, y otra cosa: ¿tú puedes el sábado?",
        ],
      },
    ],
  },
  {
    day: 354,
    theme: "Conversación larga II: Cambiando de tema",
    subtitle: "When a thread is dead, you don't revive it — you leave it and open another door.",
    frames: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        scenarios: ["testing if a topic has life", "one last try", "then pivot"],
        examples: [
          "Bueno, ¿y qué más sobre el turno? ¿O ya fue todo?",
          "Bueno, ¿y qué más? Si no, cambiamos.",
          "Bueno, ¿y qué más te preocupa de eso?",
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        scenarios: ["after the pivot", "new thread from memory", "hospital story"],
        examples: [
          "Se me olvidaba contarte lo que pasó con el ascensor.",
          "Se me olvidaba contarte la cara de la enfermera nueva.",
          "Se me olvidaba contarte — iba justo con lo del turno.",
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        scenarios: ["deliberate pivot", "Marlana tries it", "permission to move on"],
        examples: [
          "Oye, y cambiando de tema, ¿viste la serie que me recomendaste?",
          "Oye, y cambiando de tema — ya sé demasiado de mi semana.",
          "Oye, y cambiando de tema, ¿qué tal tu sobrina?",
        ],
        note: "*Cambiando de tema* announces the move without apologizing. You're not failing the conversation — you're steering it.",
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        scenarios: ["lighter pivot", "something from the week", "Rocío"],
        examples: [
          "Por cierto, Rocío preguntó si vienes al cumpleaños.",
          "Por cierto, vi tu foto en el grupo del colegio.",
          "Por cierto, ¿tú fuiste a la feria del barrio?",
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        scenarios: ["new topic spawns another", "the stack begins", "no end in sight"],
        examples: [
          "Ah, y otra cosa sobre la serie — no me spoilees.",
          "Ah, y otra cosa: el cumpleaños es en español, ¿verdad?",
          "Ah, y otra cosa que me acordé con lo de Rocío.",
        ],
      },
    ],
  },
  {
    day: 355,
    theme: "Conversación larga II: Por cierto",
    subtitle: "The sidebar that wasn't on the agenda — and turns out to be the best part.",
    frames: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        scenarios: ["after por cierto opens a door", "digging into the sidebar", "follow the tangent"],
        examples: [
          "Bueno, ¿y qué más pasó con la vecina?",
          "Bueno, ¿y qué más? Eso suena a historia larga.",
          "Bueno, ¿y qué más te dijo en la panadería?",
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        scenarios: ["sidebar triggers memory", "connected detail", "the web of talk"],
        examples: [
          "Se me olvidaba contarte que la vecina es de Medellín.",
          "Se me olvidaba contarte — por eso me acordé de tu tía.",
          "Se me olvidaba contarte lo del precio del pan.",
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        scenarios: ["when the sidebar runs dry", "back to bigger topics", "Marlana practices"],
        examples: [
          "Oye, y cambiando de tema, ¿cómo va lo del permiso?",
          "Oye, y cambiando de tema — llevamos una hora en la panadería.",
          "Oye, y cambiando de tema, ¿tú qué harías con Yesenia?",
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        scenarios: ["Marlana's turn", "something she noticed", "the gentlest relaunch"],
        examples: [
          "Por cierto, oí a alguien decir \"pa' que\" en la tienda.",
          "Por cierto, me acordé de lo de la panadería en enero.",
          "Por cierto, ¿tú conoces a doña Marta?",
        ],
        note: "*Por cierto* doesn't demand attention — it offers it. The other person can pick it up or let it pass. Low pressure, high reward.",
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        scenarios: ["sidebar spawns more", "scheduling from tangent", "call gets longer"],
        examples: [
          "Ah, y otra cosa — el sábado voy a la panadería temprano.",
          "Ah, y otra cosa sobre doña Marta, te vas a morir.",
          "Ah, y otra cosa: ¿vamos juntas?",
        ],
      },
    ],
  },
  {
    day: 356,
    theme: "Conversación larga II: Ah, y otra cosa",
    subtitle: "You said you'd hang up twenty minutes ago — and the stack keeps growing.",
    frames: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        scenarios: ["after the stack", "checking if they're done", "they're not"],
        examples: [
          "Bueno, ¿y qué más? Todavía no cuelgo si tú no.",
          "Bueno, ¿y qué más falta? Llevamos hora y media.",
          "Bueno, ¿y qué más? Dijiste \"ah, y otra cosa\" tres veces.",
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        scenarios: ["one more from the stack", "almost hung up without it", "the save"],
        examples: [
          "Se me olvidaba contarte lo del regalo de Rocío.",
          "Se me olvidaba contarte — iba a colgar sin decirte.",
          "Se me olvidaba contarte que el sábado cambiaron el horario.",
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        scenarios: ["final pivot before goodbye", "next week preview", "primavera closing in"],
        examples: [
          "Oye, y cambiando de tema, ¿ya pensaste en lo del capstone?",
          "Oye, y cambiando de tema — falta poco para mayo.",
          "Oye, y cambiando de tema, ¿tú crees que aguanto una hora entera?",
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        scenarios: ["last sidebar", "scheduling next call", "warm close"],
        examples: [
          "Por cierto, el domingo que viene igual, ¿sí?",
          "Por cierto, guarda mi audio de hoy — suena distinta.",
          "Por cierto, Rocío dice que te extraña.",
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        scenarios: ["the classic stack", "Camila does it too", "conversation revived"],
        examples: [
          "Ah, y otra cosa — no cuelgues, falta lo mejor.",
          "Ah, y otra cosa: hoy aprendí a relanzar una conversación.",
          "Ah, y otra cosa, y otra, y otra — así se enfría y así se calienta.",
        ],
        note: "The stack at the end is not rudeness — it's warmth. *Ah, y otra cosa* means: I'm not ready to let you go yet.",
      },
    ],
  },
  {
    day: 357,
    theme: "Conversación larga II: Repaso",
    subtitle: "Five relaunch stems — when the thread dies, you don't panic, you pivot.",
    frames: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        scenarios: ["week recap", "the open door", "practice stem"],
        examples: [
          "Bueno, ¿y qué más? — el stem más simple y el más útil.",
          "Bueno, ¿y qué más? No es pereza, es invitación.",
          "Bueno, ¿y qué más te quedó de la llamada de ayer?",
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        scenarios: ["memory relaunch", "imperfect for slipping details", "week tool"],
        examples: [
          "Se me olvidaba contarte — rescata lo que casi se pierde.",
          "Se me olvidaba contarte lo de Yesenia y salvó el silencio.",
          "Se me olvidaba contarte: el imperfecto avisa que iba a olvidarse.",
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        scenarios: ["deliberate pivot", "dead thread", "steering"],
        examples: [
          "Oye, y cambiando de tema — no revivas lo muerto, abre otro.",
          "Oye, y cambiando de tema cuando el hospital ya no da más.",
          "Oye, y cambiando de tema: permiso sin disculpa.",
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        scenarios: ["gentle sidebar", "low pressure", "best tangent"],
        examples: [
          "Por cierto — el relanzamiento más suave de los cinco.",
          "Por cierto, doña Marta abrió veinte minutos de charla.",
          "Por cierto no exige respuesta; la invita.",
        ],
        note: "Five stems for a lull: *bueno, ¿y qué más?* · *se me olvidaba contarte* · *oye, y cambiando de tema* · *por cierto* · *ah, y otra cosa*. Week 11 gave you bridges; week 12 gives you relaunches.",
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        scenarios: ["the stack", "warmth before goodbye", "call continues"],
        examples: [
          "Ah, y otra cosa — dijiste que colgabas y llevamos noventa minutos.",
          "Ah, y otra cosa: así se calienta cuando se enfría.",
          "Ah, y otra cosa antes del capstone — ya casi.",
        ],
      },
    ],
  },
];
