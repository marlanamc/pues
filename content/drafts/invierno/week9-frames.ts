import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 9 — "Interrumpir" (days 239–245). The real-time phase opens.
 * Story: "La junta del comité" — a community planning meeting held entirely in
 * Spanish, five people talking at once, and Marlana with three things to say
 * and no way in.
 *
 * Understanding was never the problem here. Timing is.
 */
export const invWeek9FrameDays: FrameDay[] = [
  {
    day: 239,
    theme: "Interrumpir: No logro entrar",
    subtitle: "Ninety minutes, five speakers, and you didn't say one word. You understood all of it.",
    frames: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["the first attempt", "cutting in politely", "with something short"],
        examples: [
          "Perdona que te interrumpa, pero es rapidísimo.",
          "Perdona que te interrumpa, solo quiero agregar algo.",
          "Perdona que te interrumpa, ¿puedo decir una cosa?",
        ],
        note: "The full formula buys you the floor by apologizing for taking it. Say it fast — the whole point is that it's short.",
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        scenarios: ["someone's going too fast", "losing the thread", "backing up one step"],
        examples: [
          "Espera, espera, ¿de qué fecha estamos hablando?",
          "Espera, espera, me perdí en la parte del presupuesto.",
          "Espera, espera, regresemos un paso.",
        ],
        note: "Doubling the word is the point. *Espera* alone sounds like a request; *espera, espera* actually stops the room.",
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["grabbing a slot", "the thing she's been holding", "a detail nobody mentioned"],
        examples: [
          "Antes de que se me olvide, faltan las familias del turno de noche.",
          "Antes de que se me olvide, ya tenemos el salón confirmado.",
          "Antes de que se me olvide, Rocío no puede el jueves.",
        ],
        note: "The most socially bulletproof interruption there is. Nobody refuses someone who's about to forget something.",
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        scenarios: ["the smallest opener", "a tiny question", "half a sentence"],
        examples: [
          "Una cosa: ¿quién manda la invitación?",
          "Una cosa rápida y sigo escuchando.",
          "Una cosa nada más, y ya me callo.",
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        scenarios: ["agreeing to get in", "redirecting", "adding the missing half"],
        examples: [
          "Sí, sí, pero eso ya lo intentamos el año pasado.",
          "Sí, sí, pero falta pensar en quién traduce.",
          "Sí, sí, pero primero hay que saber cuántos vienen.",
        ],
        note: "Agree first, then turn. Two *síes* signal you were listening, which is what earns you the *pero*.",
      },
    ],
  },
  {
    day: 240,
    theme: "Interrumpir: Perdona que te interrumpa",
    subtitle: "You tried it once and the room stopped. That's all it took.",
    frames: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["it actually worked", "using it a second time", "with the principal"],
        examples: [
          "Perdona que te interrumpa, pero creo que nos falta un dato.",
          "Perdona que te interrumpa otra vez, es sobre lo mismo.",
          "Perdone que la interrumpa, directora, es un minuto.",
        ],
        note: "The last one is usted — same formula, one letter, for the person who runs the meeting. Register control, not new grammar.",
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        scenarios: ["two people at once", "asking who's speaking", "slowing a decision"],
        examples: [
          "Espera, espera, están hablando dos a la vez.",
          "Espera, espera, ¿quién dijo eso?",
          "Espera, espera, no decidamos eso hoy.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["the number she came with", "a date change", "someone who should be invited"],
        examples: [
          "Antes de que se me olvide, son cuarenta familias, no veinte.",
          "Antes de que se me olvide, cambiaron la fecha del salón.",
          "Antes de que se me olvide, hay que invitar a Yesenia.",
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        scenarios: ["a practical question", "checking who does what", "clearing something small"],
        examples: [
          "Una cosa: ¿la comida la ponemos nosotros?",
          "Una cosa, ¿eso lo hace el comité o el colegio?",
          "Una cosa chiquita y ya no molesto.",
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        scenarios: ["agreeing with the plan, not the timing", "the cost", "who's actually free"],
        examples: [
          "Sí, sí, pero en marzo nadie va a tener tiempo.",
          "Sí, sí, pero eso sale caro para el comité.",
          "Sí, sí, pero preguntemos primero quién puede.",
        ],
      },
    ],
  },
  {
    day: 241,
    theme: "Interrumpir: Espera, espera",
    subtitle: "Stopping someone mid-flight isn't rude. Nodding along while lost is worse.",
    frames: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["to ask for a repeat", "because she lost a word", "to check she followed"],
        examples: [
          "Perdona que te interrumpa, ¿me repites la última parte?",
          "Perdona que te interrumpa, ¿qué significa \"convocatoria\"?",
          "Perdona que te interrumpa, ¿entendí bien que es el once?",
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        scenarios: ["too fast", "three things at once", "one at a time"],
        examples: [
          "Espera, espera, vas rapidísimo.",
          "Espera, espera, dijiste tres cosas juntas.",
          "Espera, espera, vamos una por una.",
        ],
        note: "*Vas rapidísimo* is not a complaint about them — it's information. Give it early and people slow down without minding.",
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["something from the last meeting", "a promise she made", "a name"],
        examples: [
          "Antes de que se me olvide, quedó pendiente lo de los volantes.",
          "Antes de que se me olvide, prometí llamar a dos familias.",
          "Antes de que se me olvide, el contacto se llama Delia.",
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        scenarios: ["a word she didn't catch", "confirming a number", "asking who's writing this down"],
        examples: [
          "Una cosa: no capté esa palabra, ¿cómo era?",
          "Una cosa, ¿dijiste quince o cincuenta?",
          "Una cosa, ¿alguien está anotando esto?",
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        scenarios: ["agreeing in principle", "one detail is off", "not for the families we have"],
        examples: [
          "Sí, sí, pero en teoría, porque en la práctica no da tiempo.",
          "Sí, sí, pero ese día chocan las dos actividades.",
          "Sí, sí, pero nuestras familias trabajan de noche.",
        ],
      },
    ],
  },
  {
    day: 242,
    theme: "Interrumpir: Antes de que se me olvide",
    subtitle: "You held a point for forty minutes. There was a way to put it down sooner.",
    frames: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["before the topic passes", "adding to what was said", "a correction"],
        examples: [
          "Perdona que te interrumpa, es sobre eso mismo.",
          "Perdona que te interrumpa, quiero sumar a lo que dijiste.",
          "Perdona que te interrumpa, creo que ese dato cambió.",
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        scenarios: ["before the topic moves", "not done with this one", "keeping the thread"],
        examples: [
          "Espera, espera, no cerremos ese punto todavía.",
          "Espera, espera, me quedé con una duda de eso.",
          "Espera, espera, volvamos a lo de las traducciones.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["the point she's been holding", "what the families asked for", "the thing nobody raised"],
        examples: [
          "Antes de que se me olvide, las familias pidieron que fuera más temprano.",
          "Antes de que se me olvide, nadie ha hablado del transporte.",
          "Antes de que se me olvide, tengo la lista de quién confirmó.",
        ],
        note: "Forty minutes of holding a sentence in your head is forty minutes of not listening. Put it down early and you get the meeting back.",
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        scenarios: ["marking a topic for later", "asking for two minutes", "flagging a gap"],
        examples: [
          "Una cosa que quiero decir al final, si hay tiempo.",
          "Una cosa: ¿me dan dos minutos ahorita?",
          "Una cosa que nadie ha mencionado: el transporte.",
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        scenarios: ["agreeing then adding", "the families' side", "what got skipped"],
        examples: [
          "Sí, sí, pero eso lo decidimos sin preguntarles a ellas.",
          "Sí, sí, pero nos saltamos la parte del horario.",
          "Sí, sí, pero yo hablé con seis familias y dicen otra cosa.",
        ],
      },
    ],
  },
  {
    day: 243,
    theme: "Interrumpir: Una cosa",
    subtitle: "Two words. The smallest opener works better than the polite one.",
    frames: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["when the room is formal", "with someone she doesn't know", "in a big group"],
        examples: [
          "Perdona que te interrumpa, no nos conocemos, soy Marlana.",
          "Perdona que te interrumpa, sé que hay poco tiempo.",
          "Perdona que te interrumpa, es lo último que digo.",
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        scenarios: ["with people she knows", "quick correction", "before a vote"],
        examples: [
          "Espera, espera, Rocío, eso no fue lo que quedamos.",
          "Espera, espera, antes de votar léelo otra vez.",
          "Espera, espera, ¿todos oyeron lo que dijo Delia?",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["thanking someone", "a small logistic", "the next date"],
        examples: [
          "Antes de que se me olvide, gracias por traer el café.",
          "Antes de que se me olvide, dejo las llaves en la oficina.",
          "Antes de que se me olvide, ¿la próxima es el día ocho?",
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        scenarios: ["the shortest way in", "in a fast conversation", "when nobody's pausing"],
        examples: [
          "Una cosa: yo puedo encargarme de eso.",
          "Una cosa y me callo: falta decidir la hora.",
          "Una cosa, y perdón por meterme.",
        ],
        note: "Two words and a colon. In a fast Spanish conversation this gets you in more reliably than the polite formula does.",
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        scenarios: ["keeping a point alive", "when they've agreed too fast", "pushing back gently"],
        examples: [
          "Sí, sí, pero no nos convenzamos tan rápido.",
          "Sí, sí, pero eso deja fuera a la mitad.",
          "Sí, sí, pero déjenme terminar la idea.",
        ],
      },
    ],
  },
  {
    day: 244,
    theme: "Interrumpir: Sí, sí, pero",
    subtitle: "The trick isn't disagreeing. It's agreeing loudly enough to earn the turn.",
    frames: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["to agree out loud", "to back someone up", "to say she's right"],
        examples: [
          "Perdona que te interrumpa, pero eso que dices es clave.",
          "Perdona que te interrumpa, quiero apoyar lo de Delia.",
          "Perdona que te interrumpa, solo para decir que estoy de acuerdo.",
        ],
        note: "Interrupting to agree is the friendliest use of all of these — and it makes the next interruption easier.",
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        scenarios: ["something good just got skipped", "going back to a good idea", "before it's lost"],
        examples: [
          "Espera, espera, esa idea sí me gustó.",
          "Espera, espera, no pasemos por encima de eso.",
          "Espera, espera, repítelo para que quede anotado.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["crediting someone", "a promise to keep", "next steps"],
        examples: [
          "Antes de que se me olvide, la idea fue de Rocío, no mía.",
          "Antes de que se me olvide, yo me comprometo a llamar a diez.",
          "Antes de que se me olvide, mando el resumen esta noche.",
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        scenarios: ["one last practical point", "who's responsible", "confirming"],
        examples: [
          "Una cosa: que quede claro quién llama a quién.",
          "Una cosa, ¿lo dejamos por escrito hoy mismo?",
          "Una cosa más y cerramos.",
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        scenarios: ["agreeing and adding", "the practical objection", "the missing half"],
        examples: [
          "Sí, sí, pero la parte difícil es sostenerlo cada mes.",
          "Sí, sí, pero necesitamos a alguien que traduzca en vivo.",
          "Sí, sí, pero eso funciona si la gente puede llegar.",
        ],
        note: "*Sí, sí, pero* is not disagreement. It's the sound of a conversation being built by more than one person.",
      },
    ],
  },
  {
    day: 245,
    theme: "Interrumpir: Repaso",
    subtitle: "Second meeting: you spoke nine times. Somebody counted, and it was you.",
    frames: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["the phrase that opened the door", "used four times", "no longer scary"],
        examples: [
          "Perdona que te interrumpa fue mi puerta de entrada.",
          "Perdona que te interrumpa lo usé cuatro veces el martes.",
          "Perdona que te interrumpa ya no me cuesta nada.",
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        scenarios: ["stopping the room", "used when genuinely lost", "and nobody minded"],
        examples: [
          "Espera, espera funcionó mejor de lo que pensaba.",
          "Espera, espera lo dije dos veces y nadie se molestó.",
          "Espera, espera me salvó de asentir sin entender.",
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        scenarios: ["the safest entrance", "no one ever refuses it", "she said it three times"],
        examples: [
          "Antes de que se me olvide resultó la más fácil de todas.",
          "Antes de que se me olvide nadie te la niega nunca.",
          "Antes de que se me olvide la usé tres veces sin pensar.",
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        scenarios: ["the smallest and the best", "two words", "what she'll keep"],
        examples: [
          "Una cosa resultó ser la mejor de las cinco.",
          "Una cosa: dos palabras y ya estás dentro.",
          "Una cosa es la que me llevo de esta semana.",
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        scenarios: ["the hardest one", "sounds rude and isn't", "she'll use it more"],
        examples: [
          "Sí, sí, pero fue la que más me costó decir.",
          "Sí, sí, pero suena grosera y no lo es.",
          "Sí, sí, pero la voy a usar más de ahora en adelante.",
        ],
        note: "Understanding was never the problem in that room. Timing was, and timing is five phrases you can now say without thinking.",
      },
    ],
  },
];
