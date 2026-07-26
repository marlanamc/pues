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
    theme: "Conversación larga I: Antes de que se me olvide",
    subtitle: "Three things you almost lost — and the stem that saves them.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said… / Returning to what you said…",
        scenarios: ["Camila's compliment", "something from minute ten", "late acknowledgment"],
        examples: [
          "Volviendo a lo que dijiste de que sueno distinta, creo que ya sé por qué.",
          "Volviendo a lo que dijiste del reloj, tienes razón, no lo miré en media hora.",
          "Volviendo a lo que dijiste de Rocío, ella también notó el cambio.",
        ],
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["the Rocío thread", "school update", "before the aside"],
        examples: [
          "Como te contaba, Rocío me escuchó hablar con una madre y no intervino.",
          "Como te contaba, eso nunca pasaba en otoño.",
          "Como te contaba, ahora me deja terminar las frases largas.",
        ],
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["Rocío not interrupting", "progress marker", "invierno callback"],
        examples: [
          "Eso me recuerda cuando me parabas a mitad de frase para corregir.",
          "Eso me recuerda el invierno, cuando contaba huecos.",
          "Eso me recuerda que el cambio fue lento y yo no lo veía.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["the three asides", "Rocío's message", "Camila's favor", "the real point"],
        examples: [
          "Antes de que se me olvide, quería decirte que esto — cuarenta minutos — es lo mejor del jueves.",
          "Antes de que se me olvide, Rocío pregunta si el jueves que viene hay sitio para una más.",
          "Antes de que se me olvide, guardé la servilleta donde anotaste los cinco stems.",
        ],
        note: "In a long talk, the small things die first — names, favors, compliments. *Antes de que se me olvide* is their life raft.",
      },
      {
        stem: "Donde íbamos…",
        english: "Where we were… / Getting back to where we were…",
        scenarios: ["after three asides", "the sound-different thread", "Camila checking time"],
        examples: [
          "Donde íbamos, hablábamos de por qué sueno distinta.",
          "Donde íbamos, tú decías que ya no traduzco antes de hablar.",
          "Donde íbamos, faltaban cinco minutos y yo no quería que acabara.",
        ],
      },
    ],
  },
  {
    day: 349,
    theme: "Conversación larga I: Donde íbamos",
    subtitle: "The timer goes off — and you ask for two more minutes to land the plane.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said… / Returning to what you said…",
        scenarios: ["the opening challenge", "minute one", "closing the arc"],
        examples: [
          "Volviendo a lo que dijiste al empezar, cuarenta minutos no asustan ya.",
          "Volviendo a lo que dijiste de los puentes, usé los cinco sin contarlos.",
          "Volviendo a lo que dijiste del silencio, hubo tres y ninguno fue incómodo.",
        ],
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["the year's arc", "primavera summary", "one last thread"],
        examples: [
          "Como te contaba al principio del año, quería sonar como yo.",
          "Como te contaba en invierno, el miedo era contar huecos.",
          "Como te contaba hoy, esto se sintió como una conversación de verdad.",
        ],
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["first Thursday", "the arc", "what's next"],
        examples: [
          "Eso me recuerda el primer jueves de primavera, cuando me reí de \"soy de las que.\"",
          "Eso me recuerda que hace un año no podía aguantar diez minutos.",
          "Eso me recuerda por qué pusimos conversación larga en las metas.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["next Thursday", "Rocío joining", "the servilleta"],
        examples: [
          "Antes de que se me olvide, el jueves que viene probamos cuarenta y cinco.",
          "Antes de que se me olvide, leí en voz alta lo de la servilleta y casi lloro.",
          "Antes de que se me olvide, gracias por no mirar el teléfono tampoco.",
        ],
      },
      {
        stem: "Donde íbamos…",
        english: "Where we were… / Getting back to where we were…",
        scenarios: ["landing the talk", "the timer beeped", "two more minutes"],
        examples: [
          "Donde íbamos, estábamos a punto de terminar y yo quería más.",
          "Donde íbamos, faltaba decir que esto era la meta de primavera.",
          "Donde íbamos, hablábamos de cuarenta minutos seguidos — y los cumplimos.",
        ],
        note: "*Donde íbamos* at the end of a long talk is how you land — one last thread, tied off.",
      },
    ],
  },
  {
    day: 350,
    theme: "Conversación larga I: Repaso",
    subtitle: "Five bridges, one forty-minute talk — the architecture of staying in one conversation.",
    frames: [
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said… / Returning to what you said…",
        scenarios: ["week recap", "delayed answers", "listening proof"],
        examples: [
          "Volviendo a lo que dijiste el lunes, los callbacks son la prueba de escucha.",
          "Volviendo a lo que dijiste toda la semana, cuarenta minutos es entrenamiento, no suerte.",
          "Volviendo a lo que dijiste en marzo, la conversación larga empezó con tres temas sueltos.",
        ],
      },
      {
        stem: "Como te contaba…",
        english: "As I was telling you… / Like I was saying…",
        scenarios: ["resume practice", "interruption recovery", "thread continuity"],
        examples: [
          "Como te contaba, esta semana aprendí a volver después del mesero.",
          "Como te contaba, *como te contaba* asume que la otra persona sigue ahí.",
          "Como te contaba, retomar es más difícil que empezar — y más útil.",
        ],
      },
      {
        stem: "Eso me recuerda…",
        english: "That reminds me…",
        scenarios: ["tangents that connect", "primavera callbacks", "permission to wander"],
        examples: [
          "Eso me recuerda que un tangente bien cerrado no rompe la charla.",
          "Eso me recuerda Diego, Yesenia, el hospital — todo en una mesa.",
          "Eso me recuerda que el hilo es tuyo si sabes volver.",
        ],
        note: "Five stems for long talk I: *volviendo a lo que dijiste* · *como te contaba* · *eso me recuerda* · *antes de que se me olvide* · *donde íbamos*. Cuarenta minutos seguidos used all five.",
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["small things saved", "week takeaway", "next week tease"],
        examples: [
          "Antes de que se me olvide, la semana que viene toca reactivar cuando se enfría.",
          "Antes de que se me olvide, guardé los cinco stems en el cuaderno.",
          "Antes de que se me olvide, cuarenta minutos seguidos fue la meta — y llegó.",
        ],
      },
      {
        stem: "Donde íbamos…",
        english: "Where we were… / Getting back to where we were…",
        scenarios: ["closing the week", "architecture summary", "primavera phase"],
        examples: [
          "Donde íbamos, primavera es personalidad y longitud — y hoy hubo las dos.",
          "Donde íbamos, faltaban dos semanas para el cierre del año.",
          "Donde íbamos, hablábamos de puentes — y cruzamos cuarenta minutos.",
        ],
      },
    ],
  },
];
