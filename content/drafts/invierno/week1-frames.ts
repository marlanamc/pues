import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 1 — "Muletillas I" (days 183–189). The app's namesake week.
 * Story: "El intercambio" — Marlana starts a Thursday language exchange with
 * Camila and learns to fill silence with a word instead of an apology.
 *
 * The five stems (Pues / Bueno / O sea / Es que / A ver) repeat all week; the
 * examples move with the story. Day 189 is the repaso.
 */
export const invWeek1FrameDays: FrameDay[] = [
  {
    day: 183,
    theme: "Muletillas I: El primer intercambio",
    subtitle: "First café meetup with Camila — the silences feel enormous. Fill them with a word, not an apology.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["opening an answer", "the first question", "buying a second"],
        examples: [
          "Pues, la verdad es que nunca había hecho un intercambio.",
          "Pues, soy maestra de inglés aquí en Boston.",
          "Pues, me pone nerviosa empezar, pero quiero intentarlo.",
        ],
        note: "*Pues* is this app's name for a reason: it costs nothing, means almost nothing, and buys you a full second before the sentence has to exist.",
      },
      {
        stem: "Bueno…",
        english: "Okay… / Well…",
        scenarios: ["agreeing to start", "settling in", "moving things along"],
        examples: [
          "Bueno, empecemos por algo fácil.",
          "Bueno, te cuento un poco de mí.",
          "Bueno, primero pedimos algo y después arrancamos.",
        ],
        note: "*Bueno* moves a conversation forward gently — less abrupt than jumping straight into the question.",
      },
      {
        stem: "O sea…",
        english: "I mean… / In other words…",
        scenarios: ["clarifying what she does", "restating", "narrowing it down"],
        examples: [
          "O sea, doy clases a adultos, no a niños.",
          "O sea, no soy principiante, pero tampoco hablo suelto.",
          "O sea, entiendo bastante, pero me cuesta responder rápido.",
        ],
        note: "*O sea* is the second try at a sentence you already started — the most common repair move in spoken Spanish.",
      },
      {
        stem: "Es que…",
        english: "It's just that… / The thing is…",
        scenarios: ["explaining the nerves", "why she signed up", "a small confession"],
        examples: [
          "Es que entiendo todo y luego me quedo callada.",
          "Es que llevo años estudiando sola, sin hablar con nadie.",
          "Es que quiero llegar a una conversación de verdad, no a un ejercicio.",
        ],
        note: "*Es que* introduces the reason behind something — warmer and far more spoken than *porque* at the start of a sentence.",
      },
      {
        stem: "A ver…",
        english: "Let's see… / Let me think…",
        scenarios: ["taking a beat", "picking where to start", "thinking out loud"],
        examples: [
          "A ver, ¿por dónde empiezo?",
          "A ver, déjame pensar cómo lo digo.",
          "A ver, creo que lo más difícil es el ritmo.",
        ],
        note: "*A ver* is thinking out loud with the door open — it tells the other person you're working on it, not lost.",
      },
    ],
  },
  {
    day: 184,
    theme: "Muletillas I: Ganar tiempo",
    subtitle: "Camila asks a real question — buy yourself a second instead of freezing.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["a question with no short answer", "this week specifically", "hedging honestly"],
        examples: [
          "Pues, depende del día, la verdad.",
          "Pues, ahora mismo estoy con un proyecto de código.",
          "Pues, mira, esta semana fue larga.",
        ],
        note: "*Pues, mira…* is a pair you'll hear constantly — two stalls back to back, and nobody notices.",
      },
      {
        stem: "Bueno…",
        english: "Okay… / Well…",
        scenarios: ["warning it's a long answer", "asking for a beat", "organizing out loud"],
        examples: [
          "Bueno, te lo cuento por partes.",
          "Bueno, es una historia un poco larga.",
          "Bueno, déjame pensarlo un segundo.",
        ],
      },
      {
        stem: "O sea…",
        english: "I mean… / In other words…",
        scenarios: ["naming the real problem", "how her brain works", "correcting an impression"],
        examples: [
          "O sea, la palabra la sé, pero no me sale rápido.",
          "O sea, primero pienso en inglés y después traduzco.",
          "O sea, el problema no es entender, es contestar.",
        ],
      },
      {
        stem: "Es que…",
        english: "It's just that… / The thing is…",
        scenarios: ["the sentence is ready inside", "rushing backfires", "years of reading"],
        examples: [
          "Es que en mi cabeza la frase ya está lista.",
          "Es que si me apuro, se me olvida todo.",
          "Es que estoy acostumbrada a leer, no a hablar.",
        ],
      },
      {
        stem: "A ver…",
        english: "Let's see… / Let me think…",
        scenarios: ["asking for a second out loud", "planning the sentence", "the short version"],
        examples: [
          "A ver, dame un segundo y te contesto.",
          "A ver, cómo lo explico sin enredarme.",
          "A ver, la respuesta corta es que sí.",
        ],
        note: "*A ver, dame un segundo* is a complete, polite answer on its own — it holds your turn while you build the rest.",
      },
    ],
  },
  {
    day: 185,
    theme: "Muletillas I: No encuentro la palabra",
    subtitle: "The word for 'stapler' isn't there — talk around it instead of stopping.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["the word vanished", "offering a description", "pointing at it"],
        examples: [
          "Pues, se me fue la palabra.",
          "Pues, no sé cómo se llama, pero te la describo.",
          "Pues, es esa cosa del escritorio.",
        ],
        note: "*Se me fue la palabra* — the word left, all by itself. Spanish blames the word, not you.",
      },
      {
        stem: "Bueno…",
        english: "Okay… / Well…",
        scenarios: ["deciding to talk around it", "knowing the use not the name", "settling for close enough"],
        examples: [
          "Bueno, si no me sale la palabra, la rodeo.",
          "Bueno, olvidé el nombre, pero sé para qué sirve.",
          "Bueno, digamos que es una herramienta de oficina.",
        ],
      },
      {
        stem: "O sea…",
        english: "I mean… / In other words…",
        scenarios: ["describing what it does", "the sound it makes", "ruling out the wrong word"],
        examples: [
          "O sea, es lo que usas para unir hojas.",
          "O sea, hace un ruido seco y ya quedan juntas.",
          "O sea, no es una grapa, es lo que pone las grapas.",
        ],
        note: "Describing an object you can't name is a real skill, not a failure — *o sea* is how you signal the description is coming.",
      },
      {
        stem: "Es que…",
        english: "It's just that… / The thing is…",
        scenarios: ["automatic in English", "never looked it up", "uses it daily"],
        examples: [
          "Es que en inglés la digo sin pensar.",
          "Es que nunca la busqué en español.",
          "Es que la uso todos los días y no sé su nombre.",
        ],
      },
      {
        stem: "A ver…",
        english: "Let's see… / Let me think…",
        scenarios: ["asking outright", "circling closer", "offering to draw it"],
        examples: [
          "A ver, ¿cómo se dice stapler en español?",
          "A ver, algo así como una máquina pequeña de metal.",
          "A ver, te la dibujo si quieres.",
        ],
        note: "Dropping the English word inside a Spanish question is what real bilinguals do — ask, get the word, keep going.",
      },
    ],
  },
  {
    day: 186,
    theme: "Muletillas I: Explicarlo de otra manera",
    subtitle: "Camila doesn't get why you teach ESOL — say it again, differently.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["trying again", "who her students are", "the symmetry"],
        examples: [
          "Pues, lo intento explicar de otra forma.",
          "Pues, mis estudiantes son adultos que acaban de llegar.",
          "Pues, enseño inglés, pero aprendo español por lo mismo.",
        ],
      },
      {
        stem: "Bueno…",
        english: "Okay… / Well…",
        scenarios: ["switching to an example", "asking her to imagine it", "owning the bad explanation"],
        examples: [
          "Bueno, lo digo con un ejemplo.",
          "Bueno, imagínate llegar a un país sin el idioma.",
          "Bueno, no me expliqué bien, lo repito.",
        ],
        note: "*No me expliqué bien* puts the work on you, not on the listener — the gracious version of \"you didn't get it\".",
      },
      {
        stem: "O sea…",
        english: "I mean… / In other words…",
        scenarios: ["what the job really is", "the parallel to this café", "the same class, other side"],
        examples: [
          "O sea, no enseño gramática, enseño a sobrevivir el día.",
          "O sea, lo que hago se parece mucho a esto que estamos haciendo.",
          "O sea, yo estoy del otro lado de la misma clase.",
        ],
      },
      {
        stem: "Es que…",
        english: "It's just that… / The thing is…",
        scenarios: ["she goes quiet too", "why she understands them", "teaching and learning"],
        examples: [
          "Es que yo también me quedo callada en otro idioma.",
          "Es que por eso entiendo a mis estudiantes.",
          "Es que enseñar y aprender son la misma cosa vista al revés.",
        ],
      },
      {
        stem: "A ver…",
        english: "Let's see… / Let me think…",
        scenarios: ["simplifying", "checking she landed it", "one more angle"],
        examples: [
          "A ver, lo pongo más simple.",
          "A ver, ¿me entiendes si lo digo así?",
          "A ver, otra manera de decirlo.",
        ],
      },
    ],
  },
  {
    day: 187,
    theme: "Muletillas I: Cuando me trabo",
    subtitle: "The sentence tangles halfway — restart in Spanish instead of switching to English.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["restarting", "admitting it came out odd", "continuing anyway"],
        examples: [
          "Pues, me enredé, empiezo otra vez.",
          "Pues, esa frase me quedó rara.",
          "Pues, sigo, aunque no salga perfecto.",
        ],
      },
      {
        stem: "Bueno…",
        english: "Okay… / Well…",
        scenarios: ["wiping the slate", "it landed backwards", "losing the thread"],
        examples: [
          "Bueno, borrón y cuenta nueva.",
          "Bueno, lo dije al revés, pero se entiende.",
          "Bueno, ya perdí el hilo.",
        ],
        note: "*Ya perdí el hilo* — I lost the thread. Say it out loud and the other person helps you find it.",
      },
      {
        stem: "O sea…",
        english: "I mean… / In other words…",
        scenarios: ["that wasn't it", "the opposite, actually", "asking to fix it"],
        examples: [
          "O sea, quise decir otra cosa.",
          "O sea, no era eso, era lo contrario.",
          "O sea, déjame arreglarlo.",
        ],
      },
      {
        stem: "Es que…",
        english: "It's just that… / The thing is…",
        scenarios: ["started without an ending", "nerves speed her up", "stuck at the key part"],
        examples: [
          "Es que empecé la frase sin saber cómo terminarla.",
          "Es que cuando me pongo nerviosa, hablo más rápido.",
          "Es que me trabo justo en la parte importante.",
        ],
      },
      {
        stem: "A ver…",
        english: "Let's see… / Let me think…",
        scenarios: ["clean restart", "slowing down", "no rushing this time"],
        examples: [
          "A ver, déjame empezar de nuevo.",
          "A ver, lo digo más despacio.",
          "A ver, esta vez sin correr.",
        ],
        note: "Restarting in Spanish is the whole win. *A ver, déjame empezar de nuevo* keeps you inside the language.",
      },
    ],
  },
  {
    day: 188,
    theme: "Muletillas I: Ya no pido perdón",
    subtitle: "Camila noticed: not one 'perdón' today. You didn't get faster — you stopped stopping.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["noticing the change", "how it sounded", "less shame"],
        examples: [
          "Pues, hoy no me disculpé ni una vez.",
          "Pues, creo que sonó más natural.",
          "Pues, ya no me da tanta pena equivocarme.",
        ],
      },
      {
        stem: "Bueno…",
        english: "Okay… / Well…",
        scenarios: ["progress, not perfection", "a whole half hour", "letting it be imperfect"],
        examples: [
          "Bueno, todavía me falta, pero avancé.",
          "Bueno, media hora entera en español.",
          "Bueno, no fue perfecto y no importa.",
        ],
      },
      {
        stem: "O sea…",
        english: "I mean… / In other words…",
        scenarios: ["naming what actually changed", "silence stopped scaring her", "filling the pause"],
        examples: [
          "O sea, no hablo mejor, hablo sin frenar.",
          "O sea, el silencio ya no me asusta.",
          "O sea, aprendí a llenar la pausa.",
        ],
      },
      {
        stem: "Es que…",
        english: "It's just that… / The thing is…",
        scenarios: ["apologies cut the sentence", "each sorry pulled her out", "nobody was correcting her"],
        examples: [
          "Es que pedir perdón me cortaba la frase.",
          "Es que cada disculpa me sacaba del español.",
          "Es que nadie me estaba corrigiendo, solo yo.",
        ],
        note: "The only person keeping score was you. Notice that, and half the difficulty goes away.",
      },
      {
        stem: "A ver…",
        english: "Let's see… / Let me think…",
        scenarios: ["next Thursday", "how far she gets", "raising the target"],
        examples: [
          "A ver, la semana que viene otra vez.",
          "A ver hasta dónde llego el jueves.",
          "A ver si el próximo jueves hablo cuarenta minutos.",
        ],
        note: "*A ver si…* points at something you hope for without promising it — the softest way to set a goal out loud.",
      },
    ],
  },
  {
    day: 189,
    theme: "Muletillas I: Repaso",
    subtitle: "Five words that buy you time — all of them, in one wrap-up chat with Camila.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["what helped most", "automatic now", "the simple trick"],
        examples: [
          "Pues, lo que más me sirvió fue no callarme.",
          "Pues, ahora las uso sin pensarlo.",
          "Pues, resulta que el truco era muy simple.",
        ],
      },
      {
        stem: "Bueno…",
        english: "Okay… / Well…",
        scenarios: ["starting the recap", "five words, big change", "picking a favorite"],
        examples: [
          "Bueno, hagamos el resumen de la semana.",
          "Bueno, cinco palabras y ya cambia todo.",
          "Bueno, me quedo con una en particular.",
        ],
      },
      {
        stem: "O sea…",
        english: "I mean… / In other words…",
        scenarios: ["time, not vocabulary", "what sounding natural is", "where fluency starts"],
        examples: [
          "O sea, no gané vocabulario, gané tiempo.",
          "O sea, sonar natural es no dejar huecos.",
          "O sea, la fluidez empieza por no parar.",
        ],
      },
      {
        stem: "Es que…",
        english: "It's just that… / The thing is…",
        scenarios: ["small words, big job", "she had them all along", "hearing them everywhere"],
        examples: [
          "Es que estas palabritas no significan nada y sirven para todo.",
          "Es que las tenía en la cabeza sin usarlas.",
          "Es que ahora las oigo en todas partes.",
        ],
      },
      {
        stem: "A ver…",
        english: "Let's see… / Let me think…",
        scenarios: ["what still needs work", "running through them", "next week's level"],
        examples: [
          "A ver, ¿cuál me falta practicar más?",
          "A ver, las repito una por una.",
          "A ver, la próxima semana subo el nivel.",
        ],
      },
    ],
  },
];
