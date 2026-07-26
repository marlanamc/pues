import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 6 — "Cuando llegues…" (days 218–224). Subjunctive chunk 2:
 * future time. Story: "La tormenta" — a Boston snowstorm, where every single
 * plan hangs on when something else happens.
 *
 * The rule, never stated as a rule: if it hasn't happened yet, the verb after
 * these five changes shape. If it already happens regularly, it doesn't.
 */
export const invWeek6FrameDays: FrameDay[] = [
  {
    day: 218,
    theme: "Cuando llegues…: Cuando pare la nieve",
    subtitle: "The storm is coming Thursday. Every plan you have now starts with 'when'.",
    frames: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        scenarios: ["when the snow stops", "when she gets home", "when they know more"],
        examples: [
          "Cuando pare la nieve, salimos a ver cómo quedó todo.",
          "Cuando llegue a casa, te mando un audio.",
          "Cuando sepan algo del colegio, nos avisan.",
        ],
        note: "*Cuando pare* — it hasn't stopped yet, so the verb shifts. *Cuando para* would mean it stops every time, as a habit. That's the whole difference.",
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        scenarios: ["as soon as it starts", "as soon as she finds out", "as soon as the shift ends"],
        examples: [
          "En cuanto empiece a nevar, cierran las escuelas.",
          "En cuanto me entere, te escribo.",
          "En cuanto termine el turno, Camila se va a casa.",
        ],
        note: "*En cuanto* is *cuando* with urgency — the very moment it happens, not sometime after.",
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        scenarios: ["until the storm passes", "until the plow comes", "until it gets light"],
        examples: [
          "No salgo hasta que pase la tormenta.",
          "Vamos a estar encerrados hasta que llegue la máquina quitanieve.",
          "Nadie maneja hasta que amanezca.",
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        scenarios: ["before it starts", "before the stores close", "before it gets dark"],
        examples: [
          "Quiero llegar a casa antes de que empiece.",
          "Hay que comprar algo antes de que cierren las tiendas.",
          "Traigan la pala antes de que oscurezca.",
        ],
        note: "*Antes de que* always shifts the verb. But *antes de* with no *que* takes a plain infinitive: *antes de salir*. One word, two grammars.",
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        scenarios: ["the moment they clear it", "the moment the sun's out", "the moment she can"],
        examples: [
          "Apenas quiten la nieve, vamos por el pan.",
          "Apenas salga el sol, esto se convierte en hielo.",
          "Apenas pueda, te llamo desde el hospital.",
        ],
        note: "*Apenas* is the colloquial Latin American twin of *en cuanto*. Same job, half the syllables, far more common out loud.",
      },
    ],
  },
  {
    day: 219,
    theme: "Cuando llegues…: En cuanto cancelen",
    subtitle: "Nobody sleeps the night before a snow day. Everything waits on one announcement.",
    frames: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        scenarios: ["when they announce it", "when the phone rings", "when it's official"],
        examples: [
          "Cuando anuncien el cierre, se acaba la incertidumbre.",
          "Cuando suene el teléfono a las cinco, ya sabemos qué es.",
          "Cuando sea oficial, aviso a las familias.",
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        scenarios: ["as soon as they cancel", "as soon as it's on the news", "as soon as she wakes up"],
        examples: [
          "En cuanto cancelen, mando el mensaje al grupo.",
          "En cuanto salga en las noticias, todo el mundo lo sabe.",
          "En cuanto me despierte, reviso el celular.",
        ],
        note: "*En cuanto cancelen* — they, impersonal. Spanish uses the third person plural where English says \"they cancel\" without naming anyone.",
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        scenarios: ["until they say something", "until five in the morning", "until it's confirmed"],
        examples: [
          "No preparo nada hasta que digan algo.",
          "No me duermo hasta que sean las cinco.",
          "Los papás no organizan nada hasta que se confirme.",
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        scenarios: ["before the announcement", "before parents ask", "before the roads get bad"],
        examples: [
          "Quiero tener listo el plan antes de que anuncien.",
          "Voy a escribirles antes de que me pregunten.",
          "Salgo temprano antes de que se pongan malas las calles.",
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        scenarios: ["the moment it's confirmed", "the moment she sees it", "the moment it's light"],
        examples: [
          "Apenas lo confirmen, te aviso.",
          "Apenas lo vea, te reenvío el mensaje.",
          "Apenas aclare, miro cuánta nieve cayó.",
        ],
      },
    ],
  },
  {
    day: 220,
    theme: "Cuando llegues…: Hasta que pase la tormenta",
    subtitle: "Snowed in. Two feet outside, and the whole day is a list of things that haven't happened yet.",
    frames: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        scenarios: ["when it stops", "when the power's back", "when she can go out"],
        examples: [
          "Cuando deje de nevar, esto va a estar precioso.",
          "Cuando vuelva la luz, pongo café.",
          "Cuando pueda salir, la primera parada es la panadería.",
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        scenarios: ["as soon as she's up", "as soon as they clear the street", "as soon as she has signal"],
        examples: [
          "En cuanto me levante, miro por la ventana.",
          "En cuanto limpien la calle, salgo a caminar.",
          "En cuanto tenga señal, te mando fotos.",
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        scenarios: ["until the storm passes", "until they say it's safe", "until Sunday"],
        examples: [
          "No me muevo de aquí hasta que pase la tormenta.",
          "Nadie maneja hasta que digan que es seguro.",
          "Vamos a estar así hasta que llegue el domingo.",
        ],
        note: "*Hasta que* + shifted verb when it hasn't happened. Say *hasta que pasó la tormenta* and you're telling a story about last winter instead.",
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        scenarios: ["before it gets dark", "before the wind picks up", "before the food runs out"],
        examples: [
          "Hay que echar sal antes de que se haga de noche.",
          "Cierren bien las ventanas antes de que suba el viento.",
          "Cocinamos algo grande antes de que se acabe la comida.",
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        scenarios: ["the moment it's over", "the moment the plow passes", "the moment she's free"],
        examples: [
          "Apenas termine, salgo con la pala.",
          "Apenas pase la máquina, movemos el carro.",
          "Apenas se desocupe Camila, hablamos.",
        ],
      },
    ],
  },
  {
    day: 221,
    theme: "Cuando llegues…: Antes de que se congelen las tuberías",
    subtitle: "Calling the landlord in Spanish, about pipes, at ten at night. Nothing about this is comfortable.",
    frames: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        scenarios: ["when he calls back", "when the temperature drops", "when someone comes"],
        examples: [
          "Cuando me devuelva la llamada, le explico todo.",
          "Cuando baje de menos diez, el riesgo es real.",
          "Cuando venga alguien, le muestro dónde gotea.",
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        scenarios: ["as soon as he answers", "as soon as she hangs up", "as soon as it's fixed"],
        examples: [
          "En cuanto conteste, le digo que es urgente.",
          "En cuanto cuelgue, te cuento cómo me fue.",
          "En cuanto lo arreglen, dejo de preocuparme.",
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        scenarios: ["until someone comes", "until she's sure", "until the water runs warm"],
        examples: [
          "No me quedo tranquila hasta que venga alguien.",
          "Voy a insistir hasta que me den una hora.",
          "Dejo el agua corriendo hasta que salga tibia.",
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        scenarios: ["before the pipes freeze", "before it's an emergency", "before the weekend"],
        examples: [
          "Llamo antes de que se congelen las tuberías.",
          "Mejor avisar antes de que sea una emergencia.",
          "Quiero resolverlo antes de que llegue el fin de semana.",
        ],
        note: "*Antes de que se congelen* is why you learn this chunk: the whole point of the sentence is that it hasn't happened yet and you'd like to keep it that way.",
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        scenarios: ["the moment she hears back", "the moment it's morning", "the moment it's fixed"],
        examples: [
          "Apenas me responda, te aviso.",
          "Apenas amanezca, vuelvo a llamar.",
          "Apenas lo revisen, mando el reporte por escrito.",
        ],
      },
    ],
  },
  {
    day: 222,
    theme: "Cuando llegues…: Apenas abran las calles",
    subtitle: "Digging out with the neighbors, and half the block speaks Spanish.",
    frames: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        scenarios: ["when they finish the street", "when the car's free", "when everyone's out"],
        examples: [
          "Cuando terminen la calle, sacamos los carros.",
          "Cuando saque el mío, te ayudo con el tuyo.",
          "Cuando salgan todos, esto parece una fiesta.",
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        scenarios: ["as soon as they open the road", "as soon as she has a shovel", "as soon as the sun's up"],
        examples: [
          "En cuanto abran la calle, voy por comida.",
          "En cuanto consiga otra pala, seguimos.",
          "En cuanto pegue el sol, se pone resbaloso.",
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        scenarios: ["until the sidewalk's clear", "until her hands are frozen", "until they finish together"],
        examples: [
          "Seguimos hasta que quede libre la banqueta.",
          "Palear hasta que se me congelen las manos, otra vez no.",
          "Nadie entra hasta que terminemos todos.",
        ],
        note: "*La banqueta* is the sidewalk in Mexico and much of Central America; *la vereda* in the Southern Cone, *el andén* in Colombia. Any of them beats guessing.",
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        scenarios: ["before it freezes over", "before it snows again", "before the neighbors leave"],
        examples: [
          "Hay que quitarla antes de que se haga hielo.",
          "Terminamos antes de que vuelva a nevar el domingo.",
          "Les doy las gracias antes de que se metan.",
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        scenarios: ["the moment the streets open", "the moment she's warm", "the moment there's coffee"],
        examples: [
          "Apenas abran las calles, manejo al colegio.",
          "Apenas entre en calor, sigo con el otro lado.",
          "Apenas haya café, invito a todos.",
        ],
      },
    ],
  },
  {
    day: 223,
    theme: "Cuando llegues…: Cuando volvamos",
    subtitle: "Three days lost. Everything at school now begins with 'when we're back'.",
    frames: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        scenarios: ["when they return", "when the students arrive", "when the schedule's fixed"],
        examples: [
          "Cuando volvamos, hay que recuperar tres días.",
          "Cuando lleguen los estudiantes, empezamos donde quedamos.",
          "Cuando arreglen el horario, les aviso a las familias.",
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        scenarios: ["as soon as she's in the building", "as soon as she sees Rocío", "as soon as there's time"],
        examples: [
          "En cuanto entre al colegio, busco a Rocío.",
          "En cuanto la vea, le cuento lo de la tormenta.",
          "En cuanto tengamos un rato, planeamos lo de marzo.",
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        scenarios: ["until everyone's back", "until they catch up", "until the calendar's official"],
        examples: [
          "No cambio nada hasta que estemos todos.",
          "Seguimos con lo mismo hasta que nos pongamos al día.",
          "No prometo fechas hasta que salga el calendario nuevo.",
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        scenarios: ["before the students ask", "before February ends", "before it snows again"],
        examples: [
          "Explico el plan antes de que me lo pregunten.",
          "Quiero cerrar la unidad antes de que se acabe febrero.",
          "Recuperamos los días antes de que caiga otra tormenta.",
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        scenarios: ["the moment class starts", "the moment she has the list", "the moment it's decided"],
        examples: [
          "Apenas empiece la clase, se les olvida la nieve.",
          "Apenas tenga la lista, te la mando.",
          "Apenas lo decidan, lo pongo en el calendario.",
        ],
      },
    ],
  },
  {
    day: 224,
    theme: "Cuando llegues…: Repaso",
    subtitle: "A week where nothing had happened yet — the best possible week for this chunk.",
    frames: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        scenarios: ["when spring comes", "when she looks back", "when it's warm again"],
        examples: [
          "Cuando llegue la primavera, me voy a acordar de esta semana.",
          "Cuando mire atrás, esto va a parecer poca cosa.",
          "Cuando haga calor otra vez, nadie se acuerda de la nieve.",
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        scenarios: ["as soon as the week's over", "as soon as she has the recording", "as soon as they meet again"],
        examples: [
          "En cuanto termine la semana, escucho todos los audios seguidos.",
          "En cuanto tenga la grabación, la comparo con la de enero.",
          "En cuanto nos veamos, quiero contarte esto en persona.",
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        scenarios: ["until it comes out automatically", "until she stops noticing", "until March"],
        examples: [
          "Voy a repetirlas hasta que me salgan solas.",
          "Practico hasta que deje de fijarme en la forma.",
          "Seguimos así hasta que llegue marzo.",
        ],
        note: "The goal named out loud: *hasta que me salgan solas* — until they come out by themselves. That's what a chunk is for.",
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        scenarios: ["before she forgets", "before the next week", "before the season ends"],
        examples: [
          "Lo escribo antes de que se me olvide.",
          "Reviso las cinco antes de que empiece la semana nueva.",
          "Quiero decirlo antes de que se acabe el invierno.",
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        scenarios: ["the moment she hears it", "the moment someone says it", "the moment she's asked"],
        examples: [
          "Apenas la oiga en la calle, la voy a reconocer.",
          "Apenas alguien diga \"cuando puedas\", ya sé qué viene después.",
          "Apenas me pregunten, contesto sin armar la frase.",
        ],
      },
    ],
  },
];
