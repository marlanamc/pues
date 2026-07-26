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
    subtitle: "Parent leaves, Camila texts — Marlana switches mid-hallway without thinking.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        scenarios: ["last parent of the block", "Camila at the door", "two registers in one minute"],
        examples: [
          "Disculpe, ¿tendría un momento? — ah, Camila, ¿tienes un momento?",
          "Oye, ¿tienes un momento? La última mamá acaba de salir.",
          "Disculpe, señora — gracias. Oye, Camila, ¿tienes un momento?",
        ],
        note: "The switch isn't a pause to think — it's *disculpe* to the parent walking away, *oye* to the friend arriving. Same hallway.",
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        scenarios: ["same content, two people", "what just happened", "practicing out loud"],
        examples: [
          "Le quería comentar que su hija progresa — te quería comentar que casi me da un infarto.",
          "Te quería comentar que la misma frase suena distinta en usted.",
          "Te quería comentar que ya no me cuesta tanto el *le quería*.",
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        scenarios: ["Camila asks what happened", "retelling the hard conference", "side-by-side practice"],
        examples: [
          "¿Me dejas explicarte lo de la nota de Mateo?",
          "¿Me permite explicarle? con la mamá. ¿Me dejas explicarte? contigo.",
          "¿Me dejas explicarte por qué me tembló la voz?",
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        scenarios: ["thanking the last parent", "thanking Camila", "counting how many times today"],
        examples: [
          "Muchas gracias por su tiempo — y a ti, muchas gracias por tu tiempo.",
          "Dije *su tiempo* ocho veces hoy. *Tu tiempo* una, contigo.",
          "Muchas gracias por tu tiempo. Sin ti no habría ensayado.",
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        scenarios: ["almost using wrong register", "catching herself", "Rocío laughing"],
        examples: [
          "Oye, perdona — casi le digo *oye* a la directora.",
          "Con permiso en la puerta; oye, perdona en el café.",
          "Oye, perdona, ¿practicamos otra vez la de *¿me permite?*",
        ],
      },
    ],
  },
  {
    day: 321,
    theme: "Cambiar de registro: La conferencia entera",
    subtitle: "Six hours, eleven families — usted with every parent, tú with Camila at four o'clock.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        scenarios: ["opening every conference", "the line in the hall", "closing with Camila"],
        examples: [
          "Disculpe, ¿tendría un momento? — la abrió once veces hoy.",
          "Oye, ¿tienes un momento? Son las cuatro y sigo en usted en la cabeza.",
          "Disculpe, ¿tendría un momentito? Funcionó con todas.",
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        scenarios: ["good news first, every time", "the stem of the day", "retelling to Camila"],
        examples: [
          "Le quería comentar que… — así empecé las once conferencias.",
          "Te quería comentar que hoy no cambié al inglés ni una vez.",
          "Le quería comentar que su hijo me hace reír — se lo dije en serio.",
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        scenarios: ["before every hard topic", "the phrase that bought time", "explaining to Camila"],
        examples: [
          "¿Me permite explicarle? — la usé cuando no sabía qué decir.",
          "¿Me dejas explicarte por qué esa frase me salvó?",
          "¿Me permite explicarle el horario — otra vez, otra familia.",
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        scenarios: ["every goodbye today", "the parent's face relaxing", "thanking Camila after"],
        examples: [
          "Muchas gracias por su tiempo — la cerré once veces.",
          "Muchas gracias por tu tiempo, Camila. Me ayudaste a ensayar.",
          "Muchas gracias por su tiempo — y la mamá sonrió al final.",
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        scenarios: ["recovering from a mistake", "stepping aside for the next parent", "debrief with Camila"],
        examples: [
          "Disculpe, me equivoqué de carpeta — me corregí y seguí.",
          "Oye, perdona — ¿te cuento la de las dos y media?",
          "Con permiso — la fila seguía y yo seguía en usted.",
        ],
      },
    ],
  },
  {
    day: 322,
    theme: "Cambiar de registro: Repaso",
    subtitle: "Five stems, two registers — the same message, two forms, and both are yours now.",
    frames: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        scenarios: ["week recap", "tú vs usted opener", "ready for either"],
        examples: [
          "Oye, ¿tienes un momento? — contigo. Disculpe, ¿tendría? — con una mamá.",
          "Disculpe, ¿tendría un momento? La practiqué doce veces esta semana.",
          "Oye, ¿tienes un momento? Ya no suena a disfraz.",
        ],
        note: "Stem 1: *Oye / ¿tienes?* ↔ **Disculpe / ¿tendría?** — opener and verb both shift.",
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        scenarios: ["the week's workhorse", "te vs le", "same clause after"],
        examples: [
          "Te quería comentar que aprendí a cambiar sin pensar.",
          "Le quería comentar que… — *le* con usted, *te* contigo.",
          "Te quería comentar que la misma frase en dos formas me cambió la semana.",
        ],
        note: "*Te quería* → **Le quería**. The rest of the sentence doesn't care which register you picked.",
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        scenarios: ["permission in both registers", "dejas vs permite", "te vs le"],
        examples: [
          "¿Me dejas explicarte? Contigo. ¿Me permite explicarle? Con una familia.",
          "¿Me permite explicarle? — me compró tiempo once veces.",
          "¿Me dejas explicarte por qué *permite* suena tan formal?",
        ],
        note: "*¿Me dejas explicarte?* ↔ **¿Me permite explicarle?** — verb and pronoun, same permission.",
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        scenarios: ["closing both kinds of talk", "tu vs su", "the phrase that ends well"],
        examples: [
          "Muchas gracias por tu tiempo — Camila. Muchas gracias por su tiempo — señora.",
          "Muchas gracias por su tiempo: lo dije al cerrar cada conferencia.",
          "Muchas gracias por tu tiempo por escucharme repasar.",
        ],
        note: "*Tu* → **su**. One word, and the listener knows which world they're in.",
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        scenarios: ["soft interruption both ways", "con permiso vs oye", "week's close"],
        examples: [
          "Oye, perdona — contigo. Con permiso — con un padre en el pasillo.",
          "Con permiso… ¿tendría un momento? — abre en usted. Oye, perdona — abre en tú.",
          "Oye, perdona, ¿repasamos los cinco otra vez?",
        ],
        note: "Five stems, two registers each. La misma frase, dos formas — and neither one is a translation from English.",
      },
    ],
  },
];
