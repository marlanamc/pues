import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 3 — "Exagerar con gracia" (days 288–294).
 * Story: "Mil años en el metro" — Marlana's Boston commute becomes the canvas
 * for hyperbole with color: not lying, just giving the feeling its due.
 *
 * Cast: Marlana, Camila (Colombian, night nurse), Rocío (Guatemalan colleague).
 * Register: Latin American Spanish, tú throughout — exaggeration is intimate talk.
 */
export const priWeek3FrameDays: FrameDay[] = [
  {
    day: 288,
    theme: "Exagerar con gracia: Mil años en el metro",
    subtitle: "Camila hears you describe the T like a spreadsheet — time to add color.",
    frames: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        scenarios: ["after the commute", "describing the feeling", "not literally"],
        examples: [
          "Me muero de sueño cuando bajo en Park Street.",
          "Me muero de calor en el vagón lleno.",
          "Me muero de ganas de llegar y sentarme.",
        ],
        note: "*Me muero de…* is theater, not a medical report. You're selling the feeling, not filing a claim.",
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        scenarios: ["the whole trip", "one transfer", "waiting on the platform"],
        examples: [
          "Tardé mil años en llegar al colegio hoy.",
          "Tardé mil años solo en la línea roja.",
          "Tardé mil años y ni siquiera desayuné.",
        ],
        note: "*Mil años* turns clock time into story time. The number is wrong on purpose — that's the point.",
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        scenarios: ["a small mercy", "ironic praise", "something tiny that saved you"],
        examples: [
          "Un asiento vacío es lo mejor del mundo.",
          "Es lo mejor del mundo cuando el tren llega justo al abrir la puerta.",
          "Es lo mejor del mundo que hoy no llovió.",
        ],
        note: "Hyperbole works both ways. The smaller the thing, the bigger the phrase — that's the joke.",
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        scenarios: ["a delay", "the heat", "missing your stop"],
        examples: [
          "Esperar en el andén mojado es lo peor del mundo.",
          "Es lo peor del mundo cuando cierran la estación sin avisar.",
          "Es lo peor del mundo perder el tren por dos segundos.",
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        scenarios: ["the fare", "the crowding", "the whole system"],
        examples: [
          "Es una barbaridad lo que cuesta la tarjeta del mes.",
          "Es una barbaridad ir apretada así a las siete de la mañana.",
          "Es una barbaridad que el tren pase cada veinte minutos.",
        ],
        note: "*Una barbaridad* is outrage with a smile — you're complaining, but you're also performing.",
      },
    ],
  },
  {
    day: 289,
    theme: "Exagerar con gracia: Me muero de…",
    subtitle: "Your body on the T — say how it feels, not how long the trip took.",
    frames: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        scenarios: ["hunger", "sleep", "heat on the train"],
        examples: [
          "Me muero de hambre y todavía me faltan dos paradas.",
          "Me muero de sueño, Camila, en serio.",
          "Me muero de calor, el aire acondicionado no sirve.",
        ],
        note: "Three different endings, same stem. Pick the one that matches your face, not your watch.",
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        scenarios: ["because you stopped for coffee", "because you overslept", "because of a delay"],
        examples: [
          "Tardé mil años porque me quedé dormida cinco minutos más.",
          "Tardé mil años desde Davis hasta Jamaica Plain.",
          "Tardé mil años y llegué sin almorzar.",
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        scenarios: ["the coffee cart", "a breeze", "Camila texting back"],
        examples: [
          "El olor del café en la estación es lo mejor del mundo.",
          "Es lo mejor del mundo cuando alguien te cede el asiento.",
          "Es lo mejor del mundo que me escribiste antes de subir.",
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        scenarios: ["no breakfast", "the smell", "standing the whole way"],
        examples: [
          "Ir de pie todo el trayecto es lo peor del mundo.",
          "Es lo peor del mundo oler a lluvia mojada en enero.",
          "Es lo peor del mundo cuando el tren se queda parado en el túnel.",
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        scenarios: ["the price of coffee", "the crowd", "starting work this early"],
        examples: [
          "Es una barbaridad pagar tanto por un café tan chico.",
          "Es una barbaridad la cantidad de gente a esta hora.",
          "Es una barbaridad levantarse tan temprano en invierno.",
        ],
      },
    ],
  },
  {
    day: 290,
    theme: "Exagerar con gracia: Tardé mil años",
    subtitle: "Delays, transfers, shuttle buses — turn clock time into story time.",
    frames: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        scenarios: ["waiting on the platform", "patience running out", "boredom"],
        examples: [
          "Me muero de aburrimiento en este andén.",
          "Me muero de impaciencia, ¿dónde está el tren?",
          "Me muero de frío esperando afuera.",
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        scenarios: ["a shuttle bus", "two transfers", "signal problems"],
        examples: [
          "Tardé mil años porque nos mandaron en bus de reemplazo.",
          "Tardé mil años con dos transbordos y una escalera rota.",
          "Tardé mil años por un problema de señal en la línea roja.",
        ],
        note: "*Bus de reemplazo* — shuttle bus. Boston vocabulary, Latin American sentence.",
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        scenarios: ["the train finally arriving", "getting a seat at last", "making it on time anyway"],
        examples: [
          "Ver llegar el tren es lo mejor del mundo.",
          "Es lo mejor del mundo cuando por fin suena la campana.",
          "Es lo mejor del mundo llegar y que la clase no haya empezado.",
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        scenarios: ["missing the connection", "wrong direction", "doors closing"],
        examples: [
          "Perder la conexión en Park Street es lo peor del mundo.",
          "Es lo peor del mundo subir al tren en dirección contraria.",
          "Es lo peor del mundo cuando cierran las puertas en tu cara.",
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        scenarios: ["the delay announcement", "twenty minutes", "no explanation"],
        examples: [
          "Es una barbaridad que digan \"demora menor\" y sean veinte minutos.",
          "Es una barbaridad el anuncio que no se entiende.",
          "Es una barbaridad quedarse parada sin saber por qué.",
        ],
      },
    ],
  },
  {
    day: 291,
    theme: "Exagerar con gracia: Es lo mejor del mundo",
    subtitle: "The tiny mercy that saves the whole commute — praise it like it saved your life.",
    frames: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        scenarios: ["relief", "laughter", "telling Camila the good part"],
        examples: [
          "Me muero de risa con tus exageraciones.",
          "Me muero de alivio porque hoy sí hubo asiento.",
          "Me muero de ganas de contarte lo que pasó.",
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        scenarios: ["but it was worth it", "compared to yesterday", "the long way that worked"],
        examples: [
          "Tardé mil años, pero llegué antes que ayer.",
          "Tardé mil años caminando, y fue más rápido que el tren.",
          "Tardé mil años y valió la pena por el panorama.",
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        scenarios: ["Camila waiting at the café", "sun on the platform", "a perfect transfer"],
        examples: [
          "Encontrarte en el café es lo mejor del mundo.",
          "Es lo mejor del mundo el sol en el andén a las ocho.",
          "Es lo mejor del mundo cuando el transbordo sale perfecto.",
        ],
        note: "Sincere hyperbole is still hyperbole. You're allowed to mean it *and* oversell it.",
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        scenarios: ["contrast with the good", "almost ruining it", "yesterday by comparison"],
        examples: [
          "Ayer fue lo peor del mundo, hoy no.",
          "Es lo peor del mundo cuando casi arruinan un buen día.",
          "Es lo peor del mundo comparar mi suerte con la de ayer.",
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        scenarios: ["how good it felt", "Camila's reaction", "Rocío's commute envy"],
        examples: [
          "Es una barbaridad lo bien que me sentí por un asiento.",
          "Es una barbaridad que me emocione tanto por tan poco.",
          "Es una barbaridad que eso me haga tan feliz.",
        ],
      },
    ],
  },
  {
    day: 292,
    theme: "Exagerar con gracia: Es lo peor del mundo",
    subtitle: "The day everything broke — say it like the tragedy it felt like.",
    frames: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        scenarios: ["stress", "embarrassment", "telling the disaster story"],
        examples: [
          "Me muero de vergüenza, llegué tarde otra vez.",
          "Me muero de estrés, llevaba media hora en el túnel.",
          "Me muero de rabia, pero no puedo gritar en el tren.",
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        scenarios: ["the worst delay yet", "arriving after class started", "the whole morning lost"],
        examples: [
          "Tardé mil años y la directora ya estaba en la puerta.",
          "Tardé mil años en un túnel sin señal de celular.",
          "Tardé mil años desde que salí de casa hasta que entré al salón.",
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        scenarios: ["ironic", "the one good thing in a bad day", "Camila's text"],
        examples: [
          "Lo único bueno: es lo mejor del mundo que tú me escuchas.",
          "Es lo mejor del mundo tener a alguien que no me diga \"no exageres\".",
          "Es lo mejor del mundo este mensaje tuyo a mitad del desastre.",
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        scenarios: ["the announcement", "the tunnel stop", "arriving soaked"],
        examples: [
          "Quedarse parada en el túnel es lo peor del mundo.",
          "Es lo peor del mundo cuando suena \"demora indefinida\".",
          "Es lo peor del mundo llegar empapada y sin excusa creíble.",
        ],
        note: "*Demora indefinida* — indefinite delay. The phrase every Boston commuter learns to dread.",
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        scenarios: ["the whole morning", "the system's apology", "doing it all again tomorrow"],
        examples: [
          "Es una barbaridad lo que pasó esta mañana.",
          "Es una barbaridad que esto pase cada semana.",
          "Es una barbaridad y mañana lo vuelvo a intentar.",
        ],
      },
    ],
  },
  {
    day: 293,
    theme: "Exagerar con gracia: Es una barbaridad",
    subtitle: "Rocío joins the café — three commuters, three versions of the same outrage.",
    frames: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… / I'm so… (hyperbolic)",
        scenarios: ["Rocío's version", "comparing complaints", "laughing together"],
        examples: [
          "Me muero de risa escuchándolas a las dos.",
          "Me muero de curiosidad por el trayecto de Rocío.",
          "Me muero de cansancio, pero valió la pena venir.",
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / A thousand years",
        scenarios: ["Rocío's bus", "Camila's night route", "who had it worst"],
        examples: [
          "Rocío dice que tardó mil años en el bus 39.",
          "Tardé mil años, pero Rocío tardó mil años y media.",
          "Tardé mil años y Camila dice que eso es turismo.",
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        scenarios: ["this table", "complaining together", "being understood"],
        examples: [
          "Este café los jueves es lo mejor del mundo.",
          "Es lo mejor del mundo que las tres entendamos esto.",
          "Es lo mejor del mundo quejarse sin que nadie corrija.",
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        scenarios: ["Rocío's transfer", "Camila after night shift", "picking the winner"],
        examples: [
          "El bus de Rocío es lo peor del mundo, dice ella.",
          "Es lo peor del mundo salir del hospital a las siete.",
          "Es lo peor del mundo, pero no sabemos cuál ganó.",
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / It's absurd",
        scenarios: ["all three commutes", "the city", "loving Boston anyway"],
        examples: [
          "Es una barbaridad lo que pagamos por vivir aquí.",
          "Es una barbaridad, y aun así nos quedamos.",
          "Es una barbaridad comparar sufrimientos en voz alta.",
        ],
        note: "*Es una barbaridad* at full volume is a group sport. Rocío says it like she invented it.",
      },
    ],
  },
  {
    day: 294,
    theme: "Exagerar con gracia: El supermercado el domingo",
    subtitle: "One register open, a line to the back wall, and the price of tomatoes.",
    frames: [
      {
        stem: "Me muero de…",
        english: "I'm dying of… (hunger, thirst, boredom, laughter)",
        scenarios: ["the line", "what your body is doing while you wait", "Sunday"],
        examples: [
          "Me muero de sed y hay una sola caja abierta.",
          "Me muero de calor con el abrigo puesto adentro.",
          "Me muero de hambre y todavía no llego a la caja.",
        ],
      },
      {
        stem: "Tardé mil años",
        english: "It took me forever / It took me a thousand years",
        scenarios: ["finding one item", "the aisles", "time measured in drama"],
        examples: [
          "Tardé mil años solo en encontrar el arroz.",
          "Tardé mil años porque cambiaron todo de lugar.",
          "Tardé mil años en la fila y salí con tres cosas.",
        ],
      },
      {
        stem: "Es lo mejor del mundo",
        english: "It's the best thing in the world",
        scenarios: ["a small unexpected win", "mangoes in March", "the second register opening"],
        examples: [
          "Encontrar mangos en marzo es lo mejor del mundo.",
          "Que abran la segunda caja es lo mejor del mundo.",
          "El pan caliente a las nueve de la mañana es lo mejor del mundo.",
        ],
      },
      {
        stem: "Es lo peor del mundo",
        english: "It's the worst thing in the world",
        scenarios: ["self-checkout", "the cart with the bad wheel", "small Sunday miseries"],
        examples: [
          "La caja automática que te grita es lo peor del mundo.",
          "El carrito con la rueda mala es lo peor del mundo.",
          "Olvidar una cosa y tener que volver es lo peor del mundo.",
        ],
      },
      {
        stem: "Es una barbaridad",
        english: "It's outrageous / That's absurd",
        scenarios: ["prices", "the honest complaint", "what things cost now"],
        examples: [
          "Es una barbaridad lo que cobran por una libra de tomates.",
          "Es una barbaridad que el café cueste más que la carne.",
          "Es una barbaridad, y aun así lo compré.",
        ],
        note: "A repaso is the same five exaggerations somewhere new. The subway had its week — this is a Sunday with a shopping cart.",
      },
    ],
  },
];
