import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 4 — "Notas de voz" (days 204–210).
 * Story: "Un audio de dos minutos" — Camila's shifts get worse, so the exchange
 * moves to voice notes, and Marlana discovers that talking alone into a phone is
 * easier than conversing. Mirrors the app's own Graba step.
 *
 * Two of the week's stems carry a subjunctive already (*cuando puedas*), taught
 * here as a ready-made chunk. Week 6 comes back and names it.
 */
export const invWeek4FrameDays: FrameDay[] = [
  {
    day: 204,
    theme: "Notas de voz: El primer audio",
    subtitle: "Your first voice note — recorded four times, deleted four times.",
    frames: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        scenarios: ["typing takes too long", "practicing out loud", "no time to call"],
        examples: [
          "Te mando un audio porque escribirlo me toma media hora.",
          "Te mando un audio porque quiero practicar hablando sola.",
          "Te mando un audio porque hoy no alcancé a llamarte.",
        ],
        note: "*Un audio* is what a voice note is called — not *un mensaje de voz* and definitely not *un mensaje de texto*.",
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        scenarios: ["the real reason", "how many takes", "an admission"],
        examples: [
          "Era para decirte que ya grabé el primero.",
          "Era para decirte que lo borré cuatro veces.",
          "Era para decirte que me da más miedo esto que la llamada.",
        ],
        note: "The imperfect *era* softens everything: I *was* going to say — as if the message were already half-abandoned. Very spoken.",
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        scenarios: ["what happened when she hit record", "how far she got", "the fourth take"],
        examples: [
          "Te cuento rapidito: apreté grabar y me quedé muda.",
          "Te cuento rapidito: dos frases y ya no supe seguir.",
          "Te cuento rapidito: la cuarta versión quedó igual que la primera.",
        ],
        note: "*Rapidito* — the diminutive makes it friendlier and shorter-sounding than *rápido*. Pure spoken Latin American.",
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        scenarios: ["asking for feedback", "no rush", "offering another"],
        examples: [
          "Avísame cuando puedas si se entiende algo.",
          "Avísame cuando puedas, sin apuro.",
          "Avísame cuando puedas y te mando otro.",
        ],
        note: "*Cuando puedas* is already a subjunctive, learned here as one piece. Week 6 comes back and takes it apart.",
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        scenarios: ["signing off", "which channel", "tomorrow works too"],
        examples: [
          "Cualquier cosa, me escribes y lo repito.",
          "Cualquier cosa, me escribes por el chat.",
          "Cualquier cosa, me escribes y hablamos mañana.",
        ],
        note: "The go-to sign-off. Note the present tense *me escribes* doing the work of a command — gentler than *escríbeme*.",
      },
    ],
  },
  {
    day: 205,
    theme: "Notas de voz: Sin borrar",
    subtitle: "Send the first take, mistakes included. Deleting was the thing slowing you down.",
    frames: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        scenarios: ["she didn't delete it", "preferring the first take", "no editing today"],
        examples: [
          "Te mando un audio porque esta vez no lo borré.",
          "Te mando un audio porque prefiero la primera toma.",
          "Te mando un audio porque hoy decidí no editarme.",
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        scenarios: ["errors included", "she got stuck and continued", "what deleting was costing her"],
        examples: [
          "Era para decirte que este tiene errores y lo mandé igual.",
          "Era para decirte que me trabé dos veces y seguí.",
          "Era para decirte que borrar me estaba frenando.",
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        scenarios: ["one take only", "a dog in the background", "the same old gender slip"],
        examples: [
          "Te cuento rapidito: grabé una sola vez y ya.",
          "Te cuento rapidito: se oye un perro ladrando al fondo.",
          "Te cuento rapidito: me equivoqué en el género otra vez.",
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        scenarios: ["does it sound natural", "which version", "even a short reply"],
        examples: [
          "Avísame cuando puedas si suena natural así.",
          "Avísame cuando puedas cuál versión prefieres.",
          "Avísame cuando puedas, aunque sea con un audio corto.",
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        scenarios: ["she won't take offense", "corrections welcome", "happy to re-record"],
        examples: [
          "Cualquier cosa, me escribes y no me ofendo.",
          "Cualquier cosa, me escribes las correcciones.",
          "Cualquier cosa, me escribes y lo grabo de nuevo.",
        ],
      },
    ],
  },
  {
    day: 206,
    theme: "Notas de voz: Dos minutos seguidos",
    subtitle: "Two minutes without stopping — and by the end you had more to say, not less.",
    frames: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        scenarios: ["two straight minutes", "a long story", "it wouldn't fit in text"],
        examples: [
          "Te mando un audio porque hoy me salieron dos minutos seguidos.",
          "Te mando un audio porque tengo una historia larga.",
          "Te mando un audio porque en texto no cabía.",
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        scenarios: ["not one stop", "the fear left halfway", "two minutes feels shorter now"],
        examples: [
          "Era para decirte que no paré ni una vez.",
          "Era para decirte que se me fue el miedo a mitad del audio.",
          "Era para decirte que dos minutos ya no me parecen tanto.",
        ],
        note: "Two uninterrupted minutes is Otoño's whole goal, reached alone, into a phone. Worth noticing.",
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        scenarios: ["started without an ending", "all ten fillers", "she ran out of time, not material"],
        examples: [
          "Te cuento rapidito: empecé sin saber cómo terminar.",
          "Te cuento rapidito: usé las diez muletillas en dos minutos.",
          "Te cuento rapidito: al final me sobraba qué decir.",
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        scenarios: ["is two minutes too long", "how far she listened", "going for three"],
        examples: [
          "Avísame cuando puedas si dos minutos es mucho.",
          "Avísame cuando puedas hasta dónde llegaste escuchando.",
          "Avísame cuando puedas y subo a tres.",
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        scenarios: ["did she ramble", "which part was unclear", "she'll split it in two"],
        examples: [
          "Cualquier cosa, me escribes si me fui por las ramas.",
          "Cualquier cosa, me escribes qué parte no se entendió.",
          "Cualquier cosa, me escribes y lo corto en dos.",
        ],
        note: "*Irse por las ramas* — to go off on tangents, literally \"to go off into the branches\".",
      },
    ],
  },
  {
    day: 207,
    theme: "Notas de voz: Escucharme a mí misma",
    subtitle: "You played it back. That's your voice, in Spanish, and it's not what you feared.",
    frames: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        scenarios: ["she just listened back", "she found something odd", "is that voice hers"],
        examples: [
          "Te mando un audio porque acabo de escucharme y quiero contarte.",
          "Te mando un audio porque descubrí algo raro.",
          "Te mando un audio porque no sé si esa voz es mía.",
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        scenarios: ["first time hearing herself", "slower than she thought", "calmer too"],
        examples: [
          "Era para decirte que me escuché por primera vez en español.",
          "Era para decirte que sueno más lenta de lo que creía.",
          "Era para decirte que también sueno más tranquila.",
        ],
        note: "Almost everyone sounds slower and calmer than they feel. The panic is on the inside only.",
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        scenarios: ["her accent", "the pauses", "counting her o seas"],
        examples: [
          "Te cuento rapidito: mi acento no es tan malo como pensaba.",
          "Te cuento rapidito: las pausas casi no se notan.",
          "Te cuento rapidito: dije \"o sea\" nueve veces.",
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        scenarios: ["what sounds odd to her", "does Camila do this too", "a lot to think about"],
        examples: [
          "Avísame cuando puedas qué te suena raro a ti.",
          "Avísame cuando puedas si tú también te escuchas.",
          "Avísame cuando puedas, esto me dio mucho en qué pensar.",
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        scenarios: ["she's keeping the recording", "asking for honesty", "comparing voices"],
        examples: [
          "Cualquier cosa, me escribes y guardo el audio.",
          "Cualquier cosa, me escribes tu opinión sincera.",
          "Cualquier cosa, me escribes y comparamos las voces.",
        ],
      },
    ],
  },
  {
    day: 208,
    theme: "Notas de voz: Audios del colegio",
    subtitle: "You sent one to Rocío at work. Now there's Spanish in the building.",
    frames: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        scenarios: ["she sent one to a colleague", "three minutes between classes", "walking to the train"],
        examples: [
          "Te mando un audio porque hoy le mandé uno a una compañera del colegio.",
          "Te mando un audio porque tengo tres minutos entre clases.",
          "Te mando un audio porque voy caminando al metro.",
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        scenarios: ["not only to Camila now", "Rocío replied in kind", "it works at work too"],
        examples: [
          "Era para decirte que ya no solo te mando audios a ti.",
          "Era para decirte que Rocío me contestó con otro audio.",
          "Era para decirte que en el trabajo también funciona.",
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        scenarios: ["who Rocío is", "eight years of never speaking Spanish", "the new habit"],
        examples: [
          "Te cuento rapidito: Rocío es de Guatemala y lleva ocho años aquí.",
          "Te cuento rapidito: nunca habíamos hablado en español en el colegio.",
          "Te cuento rapidito: ahora nos mandamos audios entre clases.",
        ],
        note: "The Spanish speaker two doors down had always been there. What changed was Marlana opening her mouth.",
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        scenarios: ["does that count as practice", "she knows Camila's on shift", "introducing them"],
        examples: [
          "Avísame cuando puedas si eso cuenta como práctica.",
          "Avísame cuando puedas, sé que estás de turno.",
          "Avísame cuando puedas y te presento a Rocío.",
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        scenarios: ["after her shift", "even one line", "the rest can wait"],
        examples: [
          "Cualquier cosa, me escribes cuando salgas del hospital.",
          "Cualquier cosa, me escribes aunque sea de una línea.",
          "Cualquier cosa, me escribes y te cuento el resto.",
        ],
      },
    ],
  },
  {
    day: 209,
    theme: "Notas de voz: Ya no escribo, mando audio",
    subtitle: "The habit stuck. Typing in Spanish now feels like the harder option.",
    frames: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        scenarios: ["faster than typing", "text made her overthink", "no self-editing"],
        examples: [
          "Te mando un audio porque ya me sale más rápido que escribir.",
          "Te mando un audio porque el texto me hacía pensar demasiado.",
          "Te mando un audio porque así no me corrijo tres veces.",
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        scenarios: ["the habit changed itself", "six days running", "no more rehearsing"],
        examples: [
          "Era para decirte que cambié el hábito sin darme cuenta.",
          "Era para decirte que llevo seis días mandando audios.",
          "Era para decirte que ya no preparo lo que voy a decir.",
        ],
        note: "*Sin darme cuenta* — without realizing. The best kind of habit change is the one you notice afterward.",
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        scenarios: ["recording while cooking", "four sends, zero retakes", "writing is harder now"],
        examples: [
          "Te cuento rapidito: hoy grabé mientras cocinaba.",
          "Te cuento rapidito: mandé cuatro audios y ninguno lo repetí.",
          "Te cuento rapidito: escribir en español ahora me parece más difícil.",
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        scenarios: ["can she hear the difference", "keeping this going", "genuinely no hurry"],
        examples: [
          "Avísame cuando puedas si notas la diferencia.",
          "Avísame cuando puedas y seguimos así.",
          "Avísame cuando puedas, no hay prisa ninguna.",
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        scenarios: ["text or audio, her choice", "we'll sort it Thursday", "that's what chat is for"],
        examples: [
          "Cualquier cosa, me escribes o me mandas audio, como quieras.",
          "Cualquier cosa, me escribes y lo vemos el jueves.",
          "Cualquier cosa, me escribes, que para eso está el chat.",
        ],
      },
    ],
  },
  {
    day: 210,
    theme: "Notas de voz: Repaso",
    subtitle: "Eighteen recordings in seven days. The first lasted eleven seconds.",
    frames: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        scenarios: ["the week's recap", "closing it by speaking", "her default now"],
        examples: [
          "Te mando un audio porque es el resumen de la semana.",
          "Te mando un audio porque quiero cerrarla hablando.",
          "Te mando un audio porque ya es mi forma normal de contestar.",
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        scenarios: ["eighteen in seven days", "the first one", "the last one"],
        examples: [
          "Era para decirte que grabé dieciocho audios en siete días.",
          "Era para decirte que el primero duró once segundos.",
          "Era para decirte que el último duró tres minutos.",
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        scenarios: ["what actually changed", "alone was easier than together", "the microphone doesn't judge"],
        examples: [
          "Te cuento rapidito: lo que cambió fue no borrar.",
          "Te cuento rapidito: hablar sola resultó más fácil que conversar.",
          "Te cuento rapidito: el micrófono no juzga a nadie.",
        ],
        note: "The whole point of the *Graba* step, said out loud: nothing on the other end is keeping score.",
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        scenarios: ["what's next", "back to the café", "one last recording"],
        examples: [
          "Avísame cuando puedas qué semana viene ahora.",
          "Avísame cuando puedas si vuelves al café el jueves.",
          "Avísame cuando puedas y te mando el último de la semana.",
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        scenarios: ["starting the next stretch", "no embarrassment left", "she answers in audio now"],
        examples: [
          "Cualquier cosa, me escribes y arrancamos con lo que sigue.",
          "Cualquier cosa, me escribes, que ya perdí la vergüenza.",
          "Cualquier cosa, me escribes: ahora contesto en audio.",
        ],
      },
    ],
  },
];
