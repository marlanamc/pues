import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 11 — "Conversación larga I" (days 344–350).
 * Story: "Cuarenta minutos seguidos" — Marlana and Camila's first intentional
 * long Thursday session: bridges and callbacks that hold one talk together
 * without a script.
 *
 * The five stems are the architecture of a long conversation — not topic
 * changers but thread-keepers. Week 12 adds re-energizing lulls; this week
 * is structure.
 */
export const priWeek11FrameDays: FrameDay[] = [
  {
    day: 344,
    theme: "Conversación larga I: Cuarenta minutos",
    subtitle: "Camila sets a timer — no phone, no English, forty minutes straight.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said… / Returning to what you said…",
        scenarios: ["callback to minute five", "picking up Camila's point", "closing a loop"],
        examples: [
          "Volviendo a lo que dijiste del hospital, ¿sigue igual de caótico?",
          "Volviendo a lo que dijiste antes del café, tenías razón sobre el silencio.",
          "Volviendo a lo que dijiste de Yesenia, creo que ya sé qué responderle.",
        ],
        note: "*Volviendo a lo que dijiste* is a bridge, not a topic change — you're picking up their thread, not starting yours.",
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["resuming after interruption", "after the waiter", "after a tangent"],
        examples: [
          "Como te contaba, la reunión empezó bien y terminó raro.",
          "Como te contaba, Yesenia volvió el jueves y no dijo nada.",
          "Como te contaba, iba a contarte lo del chico con la app.",
        ],
        note: "*Como te contaba* assumes the other person remembers — and in a long talk, they usually do.",
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["gentle tangent", "connecting two stories", "something parallel"],
        examples: [
          "Eso me recuerda lo que pasó con la mamá de Diego.",
          "Eso me recuerda un jueves de invierno, cuando apagué los subtítulos.",
          "Eso me recuerda por qué empecé a venir aquí los jueves.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["urgent aside", "something small but important", "before the hour ends"],
        examples: [
          "Antes de que se me olvide, Rocío te manda saludos.",
          "Antes de que se me olvide, el viernes no hay café, cierro temprano.",
          "Antes de que se me olvide, quería decirte que sueno distinta.",
        ],
        note: "*Antes de que se me olvide* is how small things survive a long conversation — you flag them before they vanish.",
      },
      {
        stem: "Donde íbamos…",
        english: "Where we were… / Getting back to where we were…",
        scenarios: ["after a tangent", "returning to the main thread", "Camila keeping time"],
        examples: [
          "Donde íbamos, tú decías que el silencio también es conversación.",
          "Donde íbamos, yo contaba lo de la junta de padres.",
          "Donde íbamos, hablábamos de por qué cuarenta minutos asustan.",
        ],
        note: "*Donde íbamos* is the gentlest way to end a tangent — no apology, just a hand on the shoulder of the talk.",
      },
    ],
  },
  {
    day: 345,
    theme: "Conversación larga I: Volviendo a lo que dijiste",
    subtitle: "Minute twenty-three — and you finally answer something she said at minute eight.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said… / Returning to what you said…",
        scenarios: ["the delayed answer", "Camila's line about tired nurses", "closing the loop"],
        examples: [
          "Volviendo a lo que dijiste de las enfermeras cansadas, eso pasa en la escuela también.",
          "Volviendo a lo que dijiste hace un rato, no creo que el silencio sea miedo.",
          "Volviendo a lo que dijiste del turno de noche, ahora entiendo por qué llegas tarde.",
        ],
        note: "Answering something from fifteen minutes ago proves you were listening the whole time — that's what makes a long talk feel like one thing.",
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["school parallel", "the hallway story", "before the callback"],
        examples: [
          "Como te contaba, ayer una maestra me pidió ayuda y no supe decir que no.",
          "Como te contaba, en el pasillo había tres conversaciones a la vez.",
          "Como te contaba, Rocío dice que ya no suena a traducción.",
        ],
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["Camila's tired nurse → Marlana's tired teacher", "parallel exhaustion"],
        examples: [
          "Eso me recuerda un martes en marzo, cuando casi no hablé en todo el día.",
          "Eso me recuerda lo que dijiste de traducir cuando estás cansada.",
          "Eso me recuerda por qué cuarenta minutos hoy se sienten distintos.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["small detail from school", "a name", "something for next week"],
        examples: [
          "Antes de que se me olvide, la maestra se llama Patricia, no Patricio.",
          "Antes de que se me olvide, Yesenia trae pasteles los viernes.",
          "Antes de que se me olvide, anoté tu idea del silencio en el cuaderno.",
        ],
      },
      {
        stem: "Donde íbamos…",
        english: "Where we were… / Getting back to where we were…",
        scenarios: ["Camila redirects gently", "the nurses thread", "keeping the forty minutes"],
        examples: [
          "Donde íbamos, comparábamos el hospital y la escuela.",
          "Donde íbamos, tú decías que el cansancio cambia cómo hablas.",
          "Donde íbamos, yo no había respondido lo de las enfermeras.",
        ],
      },
    ],
  },
  {
    day: 346,
    theme: "Conversación larga I: Como te contaba",
    subtitle: "The waiter passes — and you pick up exactly where you left off.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said… / Returning to what you said…",
        scenarios: ["after the interruption", "Camila's question before the waiter", "the refill"],
        examples: [
          "Volviendo a lo que dijiste antes de que viniera el mesero, sí, me pasa igual.",
          "Volviendo a lo que dijiste del silencio incómodo, ya no me asusta tanto.",
          "Volviendo a lo que dijiste de tu supervisor, qué mala onda.",
        ],
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["the parent conference story", "mid-sentence resume", "the interrupted thread"],
        examples: [
          "Como te contaba, la madre se sentó y yo tenía dos versiones en la cabeza.",
          "Como te contaba, iba a decirte lo de Yusuf y me interrumpió el teléfono.",
          "Como te contaba, dije \"le quería comentar\" y no \"te quería comentar.\"",
        ],
        note: "*Como te contaba* after an interruption is a fluency test — if you can resume, the talk never broke.",
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["register switch story", "week 7 callback", "parent conference echo"],
        examples: [
          "Eso me recuerda la semana de usted, cuando ensayaba con Rocío.",
          "Eso me recuerda lo de cambiar de registro sin avisar.",
          "Eso me recuerda que a veces el usted me salva y a veces me traba.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["the mother's name", "a detail from the story", "something Camila asked"],
        examples: [
          "Antes de que se me olvide, la madre dijo \"gracias por su tiempo\" dos veces.",
          "Antes de que se me olvide, Yusuf sonrió cuando lo mencioné.",
          "Antes de que se me olvide, quiero probar lo del silencio el lunes.",
        ],
      },
      {
        stem: "Donde íbamos…",
        english: "Where we were… / Getting back to where we were…",
        scenarios: ["after the tangent about usted", "the conference story", "Camila counting minutes"],
        examples: [
          "Donde íbamos, yo contaba la reunión con la madre de Yusuf.",
          "Donde íbamos, hablábamos de interrupciones y cómo volver.",
          "Donde íbamos, llevábamos veinticinco minutos sin mirar el reloj.",
        ],
      },
    ],
  },
  {
    day: 347,
    theme: "Conversación larga I: Eso me recuerda",
    subtitle: "A tangent earns its keep — Camila's story opens a door you didn't plan.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said… / Returning to what you said…",
        scenarios: ["after the tangent", "Camila's patient story", "tying back"],
        examples: [
          "Volviendo a lo que dijiste de la señora que traducía para su mamá, eso es Diego otra vez.",
          "Volviendo a lo que dijiste del niño de ocho años, lo vi en mi salón ayer.",
          "Volviendo a lo que dijiste antes del recuerdo, sí, los tangentes sirven.",
        ],
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["Diego's story resumed", "the language week callback", "connecting threads"],
        examples: [
          "Como te contaba, la mamá de Diego quería solo inglés en casa.",
          "Como te contaba, en el café dijimos que quitar el español no acelera nada.",
          "Como te contaba, eso fue la semana de los temas grandes.",
        ],
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["Camila's hospital story", "the eight-year-old translator", "primavera arc"],
        examples: [
          "Eso me recuerda lo de la mamá de Diego y la reunión que no terminé.",
          "Eso me recuerda cuando dijiste que los tangentes no son fallos.",
          "Eso me recuerda un jueves de febrero, cuando no supe qué decir.",
        ],
        note: "*Eso me recuerda* is permission to leave the main road — if you come back with *donde íbamos*, the tangent was worth it.",
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["Diego's mom update", "something for Camila", "a promise"],
        examples: [
          "Antes de que se me olvide, Diego leyó en los dos idiomas este fin de semana.",
          "Antes de que se me olvide, quiero contarle a Yesenia lo del niño traductor.",
          "Antes de que se me olvide, anoté llamar a la mamá el martes.",
        ],
      },
      {
        stem: "Donde íbamos…",
        english: "Where we were… / Getting back to where we were…",
        scenarios: ["after Diego tangent", "the forty-minute thread", "Camila smiling"],
        examples: [
          "Donde íbamos, tú contabas lo del hospital y yo conecté con la escuela.",
          "Donde íbamos, hablábamos de por qué los recuerdos no interrumpen, enlazan.",
          "Donde íbamos, faltaban diez minutos y no se sentía.",
        ],
      },
    ],
  },
  {
    day: 348,
    theme: "Conversación larga I: Tres cosas que casi se pierden",
    subtitle: "Minute thirty-one. Three threads left open, and the stems that go back and get them.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["her brother's ticket", "the thread from ten minutes ago", "picking it back up"],
        examples: [
          "Volviendo a lo que dijiste de tu hermano, ¿ya compró el pasaje?",
          "Volviendo a lo que dijiste del turno, ¿te lo cambiaron o no?",
          "Volviendo a lo que dijiste hace un rato, no me contestaste eso.",
        ],
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["resuming your own thread", "Rocío and the parent", "after the interruption"],
        examples: [
          "Como te contaba, Rocío me oyó hablar con un papá y no se metió.",
          "Como te contaba, la mamá llegó con el hermanito y no había silla.",
          "Como te contaba, yo pensaba que iba a corregirme delante de él.",
        ],
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["the tangent worth taking", "Diego's mom", "one thing leads to another"],
        examples: [
          "Eso me recuerda que la mamá de Diego preguntó por ti.",
          "Eso me recuerda lo que me dijo Yesenia el jueves.",
          "Eso me recuerda que nunca te devolví el libro.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["the practical thing", "an address", "rescuing what would be lost"],
        examples: [
          "Antes de que se me olvide, necesito tu dirección para una cosa.",
          "Antes de que se me olvide, el sábado no puedo a las nueve.",
          "Antes de que se me olvide, tu hermano puede quedarse en mi sofá.",
        ],
        note: "*Antes de que* always takes the subjunctive — *se me olvide* — and the phrase exists precisely because conversations lose things.",
      },
      {
        stem: "Donde íbamos…",
        english: "Where were we… / So, where were we…",
        scenarios: ["after a detour", "getting back on track", "handing the thread back"],
        examples: [
          "Donde íbamos, me estabas contando por qué no se metió.",
          "Donde íbamos, tú ibas por la parte del papá.",
          "Donde íbamos, algo del hospital y una enfermera nueva.",
        ],
      },
    ],
  },
  {
    day: 349,
    theme: "Conversación larga I: Cuando se acaba el café",
    subtitle: "The cups are empty and neither of them has stood up. Four bridges and one loose end.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["her brother, again", "the practical question", "the thing you skipped"],
        examples: [
          "Volviendo a lo que dijiste de tu hermano, ¿dónde va a dormir?",
          "Volviendo a lo que dijiste del apartamento, ¿cabe una cama más?",
          "Volviendo a lo que dijiste al principio, sigo sin entender lo del visado.",
        ],
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["the Saturday group", "the thing she hasn't answered", "her own open decision"],
        examples: [
          "Como te contaba, Rocío me quiere en el grupo del sábado y no le he contestado.",
          "Como te contaba, le dije un sábado al mes y ella oyó todos.",
          "Como te contaba, no es que no quiera, es que no me alcanza el mes.",
        ],
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["tomorrow at seven", "the practical intrusion", "one thing recalls another"],
        examples: [
          "Eso me recuerda que mañana tengo que estar en el colegio a las siete.",
          "Eso me recuerda que no he cargado el teléfono en todo el día.",
          "Eso me recuerda que Rocío me escribió y no le contesté.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["thanking her", "the small true thing", "before standing up"],
        examples: [
          "Antes de que se me olvide, gracias por no mirar el teléfono ni una vez.",
          "Antes de que se me olvide, la próxima invito yo.",
          "Antes de que se me olvide, dile a tu hermano que yo le presto la cafetera.",
        ],
      },
      {
        stem: "Donde íbamos…",
        english: "Where were we… / So, where were we…",
        scenarios: ["the unfinished part", "her mother", "one last return"],
        examples: [
          "Donde íbamos, no habías terminado lo de tu mamá.",
          "Donde íbamos, faltaba la parte de por qué se enteró tarde.",
          "Donde íbamos, algo de agosto y de las maletas.",
        ],
      },
    ],
  },
  {
    day: 350,
    theme: "Conversación larga I: Una hora con mamá",
    subtitle: "Sunday night, Atlanta on the phone, and the call passes an hour without either of them noticing.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        scenarios: ["the aunt's trip", "pinning down a date", "the thing that got dropped"],
        examples: [
          "Volviendo a lo que dijiste de la tía, ¿al final viene en marzo o no?",
          "Volviendo a lo que dijiste del vuelo, ¿ya lo compraron?",
          "Volviendo a lo que dijiste hace media hora, no me dijiste quién más viene.",
        ],
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["the news from school", "the class that survived", "resuming her own"],
        examples: [
          "Como te contaba, al final no cortan la clase.",
          "Como te contaba, fuimos a la junta y sí movieron la hora.",
          "Como te contaba, Rocío habló primero y yo después.",
        ],
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["the appointment", "what her mother never told her", "turning it back on her"],
        examples: [
          "Eso me recuerda que nunca me contaste cómo te fue en la cita.",
          "Eso me recuerda que la vecina te iba a llevar y no te llevó.",
          "Eso me recuerda que tengo una foto tuya de esa cocina.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["Kevin's birthday", "the thing you'd regret losing", "asking for a reminder"],
        examples: [
          "Antes de que se me olvide, el cumpleaños de Kevin es el jueves, no me dejes olvidarlo.",
          "Antes de que se me olvide, mándame la receta del arroz.",
          "Antes de que se me olvide, no le digas a la tía lo que te conté.",
        ],
      },
      {
        stem: "Donde íbamos…",
        english: "Where were we… / So, where were we…",
        scenarios: ["after the interruption", "the neighbor and the tree", "the thread from before"],
        examples: [
          "Donde íbamos, me estabas contando lo de la vecina y el árbol.",
          "Donde íbamos, algo del carro de Kevin.",
          "Donde íbamos, tú ibas por la parte de la lluvia.",
        ],
        note: "A repaso is the same five bridges on a phone, in your mother's Spanish, with nobody timing anything. That's the version that counts.",
      },
    ],
  },
];
