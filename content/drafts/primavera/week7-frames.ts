import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 7 — "Cambiar de registro" (days 316–322).
 * Story: "La misma frase, dos formas" — parent conference at school; Marlana
 * practices the same message in usted with families, then in tú with Camila
 * after. The year's third intentional usted week (after Verano day 25 and
 * Invierno day 198).
 *
 * Stems use the tú form in `stem`; usted variants appear in examples where
 * the story needs them. Days 316–318 lean usted; 319–320 practice the switch.
 */
export const priWeek7FrameDays: FrameDay[] = [
  {
    day: 316,
    theme: "Cambiar de registro: Ensayando con Rocío",
    subtitle: "Parent conferences tomorrow — Rocío makes her say it in usted until it stops sounding like a costume.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        scenarios: ["opening with a parent", "before the hard part", "at the classroom door"],
        examples: [
          "Disculpe, ¿tendría un momento antes de que empiece la fila?",
          "Disculpe, señora, ¿tendría un momento para sentarnos?",
          "Disculpe, ¿tendría un momentito? No le quito mucho tiempo.",
        ],
        note: "With usted: **Disculpe** instead of *Oye*, and **¿tendría?** instead of *¿tienes?* — the conditional softens the ask, the way *would you* does in English.",
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        scenarios: ["leading with good news", "something positive first", "before the concern"],
        examples: [
          "Le quería comentar que Yusuf ha mejorado mucho en participar.",
          "Le quería comentar que su hija es de las que ayudan sin que se lo pidan.",
          "Le quería comentar que me gusta cómo pregunta en clase.",
        ],
        note: "*Te quería* becomes **Le quería** with usted — the indirect object shifts. The rest of the sentence stays the same.",
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        scenarios: ["asking permission to go on", "before a delicate topic", "checking she's following"],
        examples: [
          "¿Me permite explicarle por qué cambiamos el horario?",
          "¿Me permite explicarle? Es un poco largo.",
          "¿Me permite explicarle cómo leemos en esta clase?",
        ],
        note: "*¿Me dejas?* → **¿Me permite?** Same idea — you're asking permission — but the verb switches to usted form.",
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        scenarios: ["closing a conference", "after a long talk", "when the parent has to go"],
        examples: [
          "Muchas gracias por su tiempo, señora Martínez.",
          "Muchas gracias por su tiempo y por venir hoy.",
          "Muchas gracias por su tiempo — sé que trabaja hasta tarde.",
        ],
        note: "*Tu tiempo* → **su tiempo**. One syllable, whole register.",
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        scenarios: ["interrupting gently", "correcting yourself", "stepping into a conversation"],
        examples: [
          "Con permiso… ¿tendría un momento?",
          "Con permiso, señora — no quise interrumpir.",
          "Disculpe, me equivoqué de nombre hace un momento.",
        ],
        note: "*Oye, perdona* with a friend; **Con permiso** or **Disculpe** with a parent. Different door, same job.",
      },
    ],
  },
  {
    day: 317,
    theme: "Cambiar de registro: La primera madre",
    subtitle: "The first parent sits down — and Marlana doesn't switch to English when it gets hard.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        scenarios: ["parent at the door", "between conferences", "when the room is loud"],
        examples: [
          "Disculpe, ¿tendría un momento? La mesa está por aquí.",
          "Disculpe, señora López, ¿tendría un momento ahora?",
          "Disculpe — ¿tendría un momentito? Le explico en dos minutos.",
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        scenarios: ["starting with strength", "before the concern", "something she noticed"],
        examples: [
          "Le quería comentar que Mateo lee en voz alta sin miedo ahora.",
          "Le quería comentar que participa más que en septiembre.",
          "Le quería comentar que me escribe cosas interesantes en el cuaderno.",
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        scenarios: ["the reading scores", "how the class works", "before showing the folder"],
        examples: [
          "¿Me permite explicarle cómo leemos aquí? No es como en su país.",
          "¿Me permite explicarle la tarea de esta semana?",
          "¿Me permite explicarle por qué no hay nota todavía?",
        ],
        note: "*¿Me permite explicarle?* — the *le* is usted. With Camila it would be *explicarte*.",
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        scenarios: ["parent checking her watch", "end of a twenty-minute slot", "she stayed longer"],
        examples: [
          "Muchas gracias por su tiempo — sé que tiene otro hijo en tercero.",
          "Muchas gracias por su tiempo y por las preguntas.",
          "Muchas gracias por su tiempo, de verdad.",
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        scenarios: ["mispronouncing a name", "knocking over a chair", "finding the right folder"],
        examples: [
          "Disculpe, ¿cómo se pronuncia su apellido?",
          "Con permiso — busco la carpeta de Mateo.",
          "Disculpe, me equivoqué — quería decir lectura, no matemáticas.",
        ],
      },
    ],
  },
  {
    day: 318,
    theme: "Cambiar de registro: Un momento difícil",
    subtitle: "A parent asks why her son is failing — usted all the way through, even when Marlana's throat tightens.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        scenarios: ["parent arrived late", "needs more time", "the hallway is emptying"],
        examples: [
          "Disculpe, ¿tendría un momento más? No hemos terminado.",
          "Disculpe, señora — ¿tendría cinco minutos más?",
          "Disculpe, ¿tendría un momento? Preferiría que nos sentáramos.",
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        scenarios: ["before the hard numbers", "something true and kind", "what the son does well"],
        examples: [
          "Le quería comentar que su hijo no es vago — le cuesta la lectura en inglés.",
          "Le quería comentar que entrega la tarea, aunque tarde.",
          "Le quería comentar que me pide ayuda después de clase.",
        ],
        note: "Same stem, harder content. *Le quería comentar que* works for good news and for news that's hard to hear.",
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        scenarios: ["the grading system", "what support exists", "why the score looks that way"],
        examples: [
          "¿Me permite explicarle cómo calculamos la nota?",
          "¿Me permite explicarle qué puede hacer en casa?",
          "¿Me permite explicarle? No es que no quiera aprender.",
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        scenarios: ["after tears", "after a long silence", "parent standing to leave"],
        examples: [
          "Muchas gracias por su tiempo — entiendo que esto no es fácil.",
          "Muchas gracias por su tiempo y por escucharme.",
          "Muchas gracias por su tiempo. La llamo la semana que viene.",
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        scenarios: ["pausing for a tissue", "choosing the wrong word", "starting over"],
        examples: [
          "Disculpe, déjeme decirlo de otra forma.",
          "Con permiso — ¿prefiere que hablemos con un intérprete?",
          "Disculpe, no quise sonar fría. Le explico mejor.",
        ],
      },
    ],
  },
  {
    day: 319,
    theme: "Cambiar de registro: La misma frase, en tú",
    subtitle: "Conference over — Marlana tells Camila the same conversation, and every stem comes back in tú.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        scenarios: ["debrief at the café", "same openers, different person", "what she said to the parent vs now"],
        examples: [
          "Oye, ¿tienes un momento? Necesito contarte la conferencia.",
          "Oye, ¿tienes un momento? Con la mamá dije *disculpe, ¿tendría?*",
          "Oye, ¿tienes un momento? Te cuento lo mismo en tú.",
        ],
        note: "Same message, two doors. With the parent: *Disculpe, ¿tendría?* With Camila: *Oye, ¿tienes?* — the content after can be identical.",
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        scenarios: ["retelling what she told the mother", "practicing the switch", "same sentence both ways"],
        examples: [
          "Te quería comentar que casi lloro con la tercera madre.",
          "Con ella dije *le quería comentar* — contigo digo *te quería comentar*.",
          "Te quería comentar que funcionó. De usted, todo el rato.",
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        scenarios: ["explaining the grading to Camila", "what she asked the parent", "side by side"],
        examples: [
          "¿Me dejas explicarte lo que le dije sobre las notas?",
          "Con la mamá: *¿me permite explicarle?* Contigo: *¿me dejas explicarte?*",
          "¿Me dejas explicarte por qué me costó tanto?",
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        scenarios: ["thanking Camila for listening", "what she said twelve times today", "tu vs su"],
        examples: [
          "Muchas gracias por tu tiempo — me escuchaste media hora.",
          "A las mamás: *muchas gracias por su tiempo.* A ti: *por tu tiempo.*",
          "Muchas gracias por tu tiempo. Necesitaba desahogarme.",
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        scenarios: ["interrupting Camila's coffee", "laughing at herself", "the register shift"],
        examples: [
          "Oye, perdona — casi le digo *con permiso* al mesero.",
          "Oye, perdona, ¿te cuento la parte difícil?",
          "Con permiso con las mamás; *oye, perdona* contigo.",
        ],
      },
    ],
  },
  {
    day: 320,
    theme: "Cambiar de registro: Cambiando en seco",
    subtitle: "The mother walks out, Camila walks in, same hallway, thirty seconds apart.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a minute? (tú) — usted: *Disculpe, ¿tendría un momento?*",
        scenarios: ["catching Camila in the hallway", "coming out of a hard meeting", "back to tú"],
        examples: [
          "Oye, ¿tienes un momento? Acabo de salir de una difícil.",
          "Oye, ¿tienes un momento? Dame dos minutos antes de la próxima.",
          "Oye, ¿tienes un momento? Necesito hablar como persona un rato.",
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to mention that… (tú) — usted: *Le quería comentar que…*",
        scenarios: ["the slip she almost made", "telling a friend", "the register bleeding over"],
        examples: [
          "Te quería comentar que le hablé de usted a una mamá y casi te lo hago a ti.",
          "Te quería comentar que llevo cuatro horas sin decir una sola palabra en inglés.",
          "Te quería comentar que la de las tres me hizo llorar un poquito.",
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain? (tú) — usted: *¿Me permite explicarle?*",
        scenarios: ["it sounded worse than it was", "asking for room", "with a friend"],
        examples: [
          "¿Me dejas explicarte? Porque suena peor de lo que fue.",
          "¿Me dejas explicarte antes de que opines?",
          "¿Me dejas explicarte lo que le dije de la nota?",
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thanks so much for your time (tú) — usted: *…por su tiempo*",
        scenarios: ["meaning it differently", "the same words, different weight", "to a friend"],
        examples: [
          "Muchas gracias por tu tiempo, y te lo digo distinto que allá adentro.",
          "Muchas gracias por tu tiempo, en serio, no tenías que venir.",
          "Muchas gracias por tu tiempo — llevo diciendo esa frase todo el día.",
        ],
        note: "The identical phrase in *tú* and in *usted* does not mean the same thing. Say both today and listen to the difference.",
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… (tú) — usted: *Con permiso…* / *Disculpe…*",
        scenarios: ["the voice that won't switch off", "apologizing for the register", "hallway small talk"],
        examples: [
          "Oye, perdona, todavía tengo la voz de la conferencia puesta.",
          "Oye, perdona, casi te digo señora.",
          "Oye, perdona, dame un segundo y ya soy yo otra vez.",
        ],
      },
    ],
  },
  {
    day: 321,
    theme: "Cambiar de registro: La conferencia entera",
    subtitle: "Six hours, eleven families, usted all day. Four o'clock, and Camila brought coffee.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a minute? (tú) — usted: *Disculpe, ¿tendría un momento?*",
        scenarios: ["at the end of the day", "standing since one", "back to tú with a friend"],
        examples: [
          "Oye, ¿tienes un momento? Llevo de pie desde la una.",
          "Oye, ¿tienes un momento? Siéntate conmigo antes de que llegue la última.",
          "Oye, ¿tienes un momento? Necesito no hablar de notas cinco minutos.",
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to mention that… (tú) — usted: *Le quería comentar que…*",
        scenarios: ["the day's real number", "what she noticed", "telling a friend"],
        examples: [
          "Te quería comentar que hoy no me cambié al inglés ni una vez.",
          "Te quería comentar que la mamá de Mateo me trajo pan.",
          "Te quería comentar que la última familia llegó cuarenta minutos tarde.",
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain? (tú) — usted: *¿Me permite explicarle?*",
        scenarios: ["the father who kept asking", "the same question three times", "what happened at four"],
        examples: [
          "¿Me dejas explicarte? El último papá me hizo la misma pregunta tres veces.",
          "¿Me dejas explicarte cómo terminó lo de la nota de Mateo?",
          "¿Me dejas explicarte por qué me quedé una hora más?",
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thanks so much for your time (tú) — usted: *…por su tiempo*",
        scenarios: ["to Camila, at the end", "meaning it", "the phrase she said all day"],
        examples: [
          "Muchas gracias por tu tiempo, Camila. Me ayudaste a ensayar.",
          "Muchas gracias por tu tiempo, y por el café, y por venir hasta acá.",
          "Muchas gracias por tu tiempo — a ti sí te lo digo de verdad.",
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… (tú) — usted: *Con permiso…* / *Disculpe…*",
        scenarios: ["the wrong folder", "correcting yourself mid-sentence", "small recoveries"],
        examples: [
          "Oye, perdona, agarré la carpeta equivocada y seguí como si nada.",
          "Oye, perdona, se me fue el nombre de la mamá de Yusuf a mitad de frase.",
          "Oye, perdona, hoy contesto todo con \"claro que sí, señora\".",
        ],
      },
    ],
  },
  {
    day: 322,
    theme: "Cambiar de registro: La farmacia",
    subtitle: "Usted with the pharmacist about a changed dose, then tú with Camila who came along and waited.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a minute? (tú) — usted: *Disculpe, ¿tendría un momento?*",
        scenarios: ["opening with the pharmacist", "usted with a stranger", "getting attention politely"],
        examples: [
          "Disculpe, ¿tendría un momento? Es por una receta de la semana pasada.",
          "Disculpe, ¿tendría un momento? Ya sé que hay fila, pero es rápido.",
          "Oye, ¿tienes un momento? Ya casi salimos, te lo prometo.",
        ],
        note: "Two registers in one room. The pharmacist gets *usted*; Camila, three feet away, gets *tú*.",
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to mention that… (tú) — usted: *Le quería comentar que…*",
        scenarios: ["the dose changed", "raising a problem without accusing", "the formal version"],
        examples: [
          "Le quería comentar que el doctor cambió la dosis y no está en la etiqueta.",
          "Le quería comentar que me dieron el frasco de treinta y debían ser noventa.",
          "Te quería comentar que esto me pasó la última vez también.",
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain? (tú) — usted: *¿Me permite explicarle?*",
        scenarios: ["the message on her phone", "asking for a second", "formal request to be heard"],
        examples: [
          "¿Me permite explicarle? Tengo el mensaje de la clínica en el teléfono.",
          "¿Me permite explicarle un momento antes de que llame al doctor?",
          "¿Me dejas explicarte por qué no me fui sin preguntar?",
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thanks so much for your time (tú) — usted: *…por su tiempo*",
        scenarios: ["closing with the pharmacist", "genuine gratitude in usted", "she saved you a trip"],
        examples: [
          "Muchas gracias por su tiempo, me ahorró un viaje.",
          "Muchas gracias por su tiempo, ya sé que estaba sola en el mostrador.",
          "Muchas gracias por tu tiempo, y por esperarme veinte minutos.",
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… (tú) — usted: *Con permiso…* / *Disculpe…*",
        scenarios: ["back to tú at the door", "apologizing to a friend", "the switch on the way out"],
        examples: [
          "Oye, perdona, te tuve veinte minutos esperando por una caja de pastillas.",
          "Oye, perdona, ahora sí nos vamos.",
          "Con permiso, señora, es que ya nos íbamos.",
        ],
      },
    ],
  },
];
