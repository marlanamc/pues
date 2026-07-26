import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 3 — "Exagerar con gracia" (days 288–294).
 * Stems must match content/drafts/primavera/week3-frames.ts for the same day.
 */
export const priWeek3SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 288,
    theme: "Mil años en el metro",
    stems: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        completions: [
          { es: "sueño cuando bajo en park street", en: "sleep when i get off at park street", category: "other" },
          { es: "calor en el vagón lleno", en: "heat in the packed car", category: "other" },
          { es: "ganas de llegar y sentarme", en: "wanting to arrive and sit down", category: "activity" },
          { es: "hambre y ni desayuné", en: "hunger and i didn't even have breakfast", category: "other" },
          { es: "curiosidad por lo que vas a decir", en: "curiosity about what you're going to say", category: "other" },
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        completions: [
          { es: "en llegar al colegio hoy", en: "to get to school today", category: "time" },
          { es: "solo en la línea roja", en: "just on the red line", category: "time" },
          { es: "y ni siquiera desayuné", en: "and i didn't even have breakfast", category: "other" },
          { es: "desde que salí de casa", en: "since i left home", category: "time" },
          { es: "y todavía me falta una parada", en: "and i still have one stop left", category: "time" },
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        completions: [
          { es: "un asiento vacío", en: "an empty seat", category: "other" },
          { es: "cuando el tren llega justo al abrir la puerta", en: "when the train arrives right as the doors open", category: "time" },
          { es: "que hoy no llovió", en: "that it didn't rain today", category: "other" },
          { es: "que alguien te guarde un lugar", en: "when someone saves you a spot", category: "other" },
          { es: "el silencio cuando por fin hay asiento", en: "the quiet when there's finally a seat", category: "other" },
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        completions: [
          { es: "esperar en el andén mojado", en: "waiting on the wet platform", category: "other" },
          { es: "cuando cierran la estación sin avisar", en: "when they close the station without warning", category: "other" },
          { es: "perder el tren por dos segundos", en: "missing the train by two seconds", category: "time" },
          { es: "subir apretada con la mochila", en: "getting on packed in with my backpack", category: "activity" },
          { es: "oír \"demora menor\" y saber que miente", en: "hearing \"minor delay\" and knowing it's a lie", category: "opinion" },
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        completions: [
          { es: "lo que cuesta la tarjeta del mes", en: "what the monthly pass costs", category: "other" },
          { es: "ir apretada así a las siete de la mañana", en: "being packed in like this at seven in the morning", category: "time" },
          { es: "que el tren pase cada veinte minutos", en: "that the train comes every twenty minutes", category: "time" },
          { es: "contar el viaje solo con números", en: "describing the commute only with numbers", category: "activity" },
          { es: "lo que uno aguanta por llegar a tiempo", en: "what you put up with to get there on time", category: "other" },
        ],
      },
    ],
  },
  {
    day: 289,
    theme: "Me muero de…",
    stems: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        completions: [
          { es: "hambre y todavía me faltan dos paradas", en: "hunger and i still have two stops left", category: "other" },
          { es: "sueño, camila, en serio", en: "sleep, camila, seriously", category: "other" },
          { es: "calor, el aire acondicionado no sirve", en: "heat — the air conditioning doesn't work", category: "other" },
          { es: "ganas de un café grande", en: "wanting a big coffee", category: "activity" },
          { es: "impaciencia en este andén", en: "impatience on this platform", category: "other" },
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        completions: [
          { es: "porque me quedé dormida cinco minutos más", en: "because i stayed asleep five more minutes", category: "time" },
          { es: "desde davis hasta jamaica plain", en: "from davis to jamaica plain", category: "other" },
          { es: "y llegué sin almorzar", en: "and i arrived without lunch", category: "other" },
          { es: "porque el tren no venía", en: "because the train wasn't coming", category: "time" },
          { es: "y ni siquiera era lunes", en: "and it wasn't even monday", category: "time" },
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        completions: [
          { es: "el olor del café en la estación", en: "the smell of coffee at the station", category: "other" },
          { es: "cuando alguien te cede el asiento", en: "when someone gives you their seat", category: "activity" },
          { es: "que me escribiste antes de subir", en: "that you texted me before getting on", category: "other" },
          { es: "encontrar asiento antes de la segunda parada", en: "finding a seat before the second stop", category: "activity" },
          { es: "que hoy el tren no huela a lluvia", en: "that today the train doesn't smell like rain", category: "other" },
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        completions: [
          { es: "ir de pie todo el trayecto", en: "standing the whole ride", category: "activity" },
          { es: "oler a lluvia mojada en enero", en: "smelling like wet rain in january", category: "other" },
          { es: "cuando el tren se queda parado en el túnel", en: "when the train stops in the tunnel", category: "other" },
          { es: "llegar sin desayuno ni café", en: "arriving with no breakfast and no coffee", category: "other" },
          { es: "escuchar a alguien comer en el vagón", en: "hearing someone eat in the car", category: "other" },
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        completions: [
          { es: "pagar tanto por un café tan chico", en: "paying so much for such a small coffee", category: "other" },
          { es: "la cantidad de gente a esta hora", en: "how many people there are at this hour", category: "time" },
          { es: "levantarse tan temprano en invierno", en: "getting up this early in winter", category: "time" },
          { es: "que el café cueste más que el pasaje", en: "that coffee costs more than the fare", category: "opinion" },
          { es: "tener que elegir entre café y desayuno", en: "having to choose between coffee and breakfast", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 290,
    theme: "Tardé mil años",
    stems: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        completions: [
          { es: "aburrimiento en este andén", en: "boredom on this platform", category: "other" },
          { es: "impaciencia, ¿dónde está el tren?", en: "impatience — where's the train?", category: "other" },
          { es: "frío esperando afuera", en: "cold waiting outside", category: "other" },
          { es: "ganas de que suene la campana", en: "wanting the bell to ring", category: "activity" },
          { es: "curiosidad por el anuncio que no se entiende", en: "curiosity about the announcement you can't understand", category: "other" },
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        completions: [
          { es: "porque nos mandaron en bus de reemplazo", en: "because they sent us on a shuttle bus", category: "other" },
          { es: "con dos transbordos y una escalera rota", en: "with two transfers and a broken escalator", category: "other" },
          { es: "por un problema de señal en la línea roja", en: "because of a signal problem on the red line", category: "other" },
          { es: "y el bus iba más lento que caminando", en: "and the bus was slower than walking", category: "opinion" },
          { es: "desde que vi el primer anuncio", en: "since i saw the first announcement", category: "time" },
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        completions: [
          { es: "ver llegar el tren", en: "seeing the train arrive", category: "activity" },
          { es: "cuando por fin suena la campana", en: "when the bell finally rings", category: "time" },
          { es: "llegar y que la clase no haya empezado", en: "arriving and class hasn't started yet", category: "time" },
          { es: "que el bus de reemplazo tenga asiento", en: "that the shuttle bus has seats", category: "other" },
          { es: "salir del túnel a la luz", en: "coming out of the tunnel into the light", category: "other" },
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        completions: [
          { es: "perder la conexión en park street", en: "missing the connection at park street", category: "other" },
          { es: "subir al tren en dirección contraria", en: "getting on the train going the wrong way", category: "activity" },
          { es: "cuando cierran las puertas en tu cara", en: "when the doors close in your face", category: "other" },
          { es: "leer \"demora indefinida\" en la pantalla", en: "reading \"indefinite delay\" on the screen", category: "other" },
          { es: "esperar sin saber cuánto falta", en: "waiting without knowing how long is left", category: "time" },
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        completions: [
          { es: "que digan \"demora menor\" y sean veinte minutos", en: "when they say \"minor delay\" and it's twenty minutes", category: "time" },
          { es: "el anuncio que no se entiende", en: "the announcement you can't understand", category: "other" },
          { es: "quedarse parada sin saber por qué", en: "standing there without knowing why", category: "other" },
          { es: "mandar un bus por un tren sin avisar bien", en: "sending a bus for a train without a clear warning", category: "other" },
          { es: "perder media hora por \"demora menor\"", en: "losing half an hour for a \"minor delay\"", category: "time" },
        ],
      },
    ],
  },
  {
    day: 291,
    theme: "Es lo mejor del mundo",
    stems: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        completions: [
          { es: "risa con tus exageraciones", en: "laughter at your exaggerations", category: "other" },
          { es: "alivio porque hoy sí hubo asiento", en: "relief because today there was a seat", category: "other" },
          { es: "ganas de contarte lo que pasó", en: "wanting to tell you what happened", category: "activity" },
          { es: "curiosidad por tu turno de anoche", en: "curiosity about your shift last night", category: "other" },
          { es: "sueño, pero menos que ayer", en: "sleep, but less than yesterday", category: "other" },
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        completions: [
          { es: "pero llegué antes que ayer", en: "but i got here before yesterday", category: "time" },
          { es: "caminando, y fue más rápido que el tren", en: "walking, and it was faster than the train", category: "activity" },
          { es: "y valió la pena por el panorama", en: "and it was worth it for the view", category: "opinion" },
          { es: "pero el transbordo salió perfecto", en: "but the transfer worked out perfectly", category: "other" },
          { es: "y aun así llegué al café primero", en: "and i still got to the café first", category: "time" },
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        completions: [
          { es: "encontrarte en el café", en: "finding you at the café", category: "other" },
          { es: "el sol en el andén a las ocho", en: "the sun on the platform at eight", category: "time" },
          { es: "cuando el transbordo sale perfecto", en: "when the transfer works out perfectly", category: "other" },
          { es: "exagerar sin que nadie te corrija", en: "exaggerating without anyone correcting you", category: "activity" },
          { es: "que hoy no tuve que correr", en: "that today i didn't have to run", category: "activity" },
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        completions: [
          { es: "ayer, hoy no", en: "yesterday — not today", category: "time" },
          { es: "cuando casi arruinan un buen día", en: "when they almost ruin a good day", category: "other" },
          { es: "comparar mi suerte con la de ayer", en: "comparing my luck with yesterday's", category: "activity" },
          { es: "minimizarlo por educación", en: "downplaying it to be polite", category: "activity" },
          { es: "contarlo sin color otra vez", en: "telling it without color again", category: "activity" },
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        completions: [
          { es: "lo bien que me sentí por un asiento", en: "how good i felt over one seat", category: "opinion" },
          { es: "que me emocione tanto por tan poco", en: "that i got so excited over so little", category: "opinion" },
          { es: "que eso me haga tan feliz", en: "that that makes me so happy", category: "opinion" },
          { es: "lo mucho que cambia un buen transbordo", en: "how much a good transfer changes everything", category: "opinion" },
          { es: "celebrar un asiento como si ganara un premio", en: "celebrating a seat like i won a prize", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 292,
    theme: "Es lo peor del mundo",
    stems: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        completions: [
          { es: "vergüenza, llegué tarde otra vez", en: "embarrassment — i was late again", category: "other" },
          { es: "estrés, llevaba media hora en el túnel", en: "stress — i'd been in the tunnel half an hour", category: "time" },
          { es: "rabia, pero no puedo gritar en el tren", en: "anger, but i can't yell on the train", category: "other" },
          { es: "miedo cuando sonó demora indefinida", en: "fear when they announced indefinite delay", category: "other" },
          { es: "ganas de contarte el desastre", en: "wanting to tell you about the disaster", category: "activity" },
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        completions: [
          { es: "y la directora ya estaba en la puerta", en: "and the principal was already at the door", category: "time" },
          { es: "en un túnel sin señal de celular", en: "in a tunnel with no cell signal", category: "other" },
          { es: "desde que salí de casa hasta que entré al salón", en: "from when i left home until i walked into the classroom", category: "time" },
          { es: "y perdí la clase de bienvenida", en: "and i missed the welcome activity", category: "activity" },
          { es: "por una demora que no avisaron bien", en: "because of a delay they didn't announce clearly", category: "other" },
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        completions: [
          { es: "que tú me escuchas", en: "that you listen to me", category: "other" },
          { es: "tener a alguien que no me diga \"no exageres\"", en: "having someone who doesn't tell me \"don't exaggerate\"", category: "other" },
          { es: "este mensaje tuyo a mitad del desastre", en: "this message from you in the middle of the disaster", category: "other" },
          { es: "salir del túnel aunque llegara tarde", en: "getting out of the tunnel even though i was late", category: "activity" },
          { es: "que la directora sonriera igual", en: "that the principal smiled anyway", category: "other" },
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        completions: [
          { es: "quedarse parada en el túnel", en: "getting stuck in the tunnel", category: "other" },
          { es: "cuando suena \"demora indefinida\"", en: "when they announce \"indefinite delay\"", category: "other" },
          { es: "llegar empapada y sin excusa creíble", en: "arriving soaked with no believable excuse", category: "other" },
          { es: "ver la puerta del salón cerrarse", en: "watching the classroom door close", category: "activity" },
          { es: "no saber cuánto falta en el túnel", en: "not knowing how much longer in the tunnel", category: "time" },
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        completions: [
          { es: "lo que pasó esta mañana", en: "what happened this morning", category: "time" },
          { es: "que esto pase cada semana", en: "that this happens every week", category: "time" },
          { es: "y mañana lo vuelvo a intentar", en: "and tomorrow i'll try again anyway", category: "activity" },
          { es: "quedarme sin señal y sin explicación", en: "being without signal and without an explanation", category: "other" },
          { es: "llegar tarde por algo que no controlé", en: "being late for something i couldn't control", category: "other" },
        ],
      },
    ],
  },
  {
    day: 293,
    theme: "Es una barbaridad",
    stems: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        completions: [
          { es: "risa escuchándolas a las dos", en: "laughter listening to both of you", category: "other" },
          { es: "curiosidad por el trayecto de rocío", en: "curiosity about rocío's commute", category: "other" },
          { es: "cansancio, pero valió la pena venir", en: "tiredness, but it was worth coming", category: "opinion" },
          { es: "ganas de comparar sufrimientos", en: "wanting to compare suffering", category: "activity" },
          { es: "envidia del asiento de rocío hoy", en: "envy of rocío's seat today", category: "opinion" },
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        completions: [
          { es: "en el bus 39, dice rocío", en: "on the 39 bus, rocío says", category: "other" },
          { es: "pero rocío tardó mil años y media", en: "but rocío took a thousand and a half years", category: "other" },
          { es: "y camila dice que eso es turismo", en: "and camila says that's tourism", category: "opinion" },
          { es: "desde jamaica plain hasta aquí", en: "from jamaica plain to here", category: "other" },
          { es: "y rocío dice que eso es un paseo", en: "and rocío says that's a stroll", category: "opinion" },
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        completions: [
          { es: "este café los jueves", en: "this café on thursdays", category: "time" },
          { es: "que las tres entendamos esto", en: "that all three of us get this", category: "other" },
          { es: "quejarse sin que nadie corrija", en: "complaining without anyone correcting you", category: "activity" },
          { es: "tener competencia de trayectos", en: "having a commute competition", category: "activity" },
          { es: "escuchar a rocío decir barbaridad", en: "hearing rocío say \"outrageous\"", category: "activity" },
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        completions: [
          { es: "el bus de rocío, dice ella", en: "rocío's bus, she says", category: "other" },
          { es: "salir del hospital a las siete", en: "leaving the hospital at seven", category: "time" },
          { es: "pero no sabemos cuál ganó", en: "but we don't know which one won", category: "other" },
          { es: "el turno de noche de camila", en: "camila's night shift", category: "time" },
          { es: "comparar sufrimientos en serio", en: "comparing suffering seriously", category: "activity" },
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        completions: [
          { es: "lo que pagamos por vivir aquí", en: "what we pay to live here", category: "other" },
          { es: "y aun así nos quedamos", en: "and we stay anyway", category: "activity" },
          { es: "comparar sufrimientos en voz alta", en: "comparing suffering out loud", category: "activity" },
          { es: "lo que aguanta uno por este café", en: "what you put up with for this café", category: "opinion" },
          { es: "que las tres tengamos historias así", en: "that all three of us have stories like this", category: "other" },
        ],
      },
    ],
  },
  {
    day: 294,
    theme: "Repaso: Exagerar con gracia",
    stems: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        completions: [
          { es: "ganas de usar esto en la vida real", en: "wanting to use this in real life", category: "activity" },
          { es: "risa cuando lo digo en voz alta", en: "laughter when i say it out loud", category: "activity" },
          { es: "sueño, sí, pero ahora suena a mí", en: "sleep, yes, but now it sounds like me", category: "other" },
          { es: "curiosidad por la próxima semana", en: "curiosity about next week", category: "other" },
          { es: "orgullo cuando lo digo sin pensar", en: "pride when i say it without thinking", category: "opinion" },
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        completions: [
          { es: "se convirtió en mi forma de contar el tiempo", en: "became my way of telling time", category: "activity" },
          { es: "y nadie me pidió el reloj", en: "and nobody asked for my watch", category: "other" },
          { es: "la frase más útil del metro", en: "the most useful subway phrase", category: "opinion" },
          { es: "reemplazó a cuarenta y tres minutos", en: "replaced forty-three minutes", category: "other" },
          { es: "y suena mejor que cualquier número", en: "and it sounds better than any number", category: "opinion" },
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        completions: [
          { es: "exagerar sin mentir", en: "exaggerating without lying", category: "activity" },
          { es: "que camila me enseñara esto", en: "that camila taught me this", category: "other" },
          { es: "que suene a conversación, no a reporte", en: "that it sounds like conversation, not a report", category: "opinion" },
          { es: "tener color en español", en: "having color in spanish", category: "other" },
          { es: "que rocío lo diga también", en: "that rocío says it too", category: "other" },
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        completions: [
          { es: "y está bien decirlo así", en: "and it's okay to say it that way", category: "opinion" },
          { es: "cuando lo minimizas por educación", en: "when you downplay it to be polite", category: "activity" },
          { es: "pero suena humano", en: "but it sounds human", category: "opinion" },
          { es: "contarlo solo con minutos otra vez", en: "telling it only in minutes again", category: "activity" },
          { es: "volver al reporte del reloj", en: "going back to the clock report", category: "activity" },
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        completions: [
          { es: "lo mucho que cambió mi forma de quejarme", en: "how much my way of complaining changed", category: "opinion" },
          { es: "dijo rocío, y tenía razón", en: "rocío said, and she was right", category: "other" },
          { es: "y por eso me gusta", en: "and that's why i like it", category: "opinion" },
          { es: "seis días de color en una semana", en: "six days of color in one week", category: "time" },
          { es: "que esto no lo enseñen en los libros", en: "that they don't teach this in textbooks", category: "opinion" },
        ],
      },
    ],
  },
];
