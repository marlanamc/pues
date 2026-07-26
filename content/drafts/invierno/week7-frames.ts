import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 7 — "Ojalá" (days 225–231). Subjunctive chunk 3: wishes as set
 * phrases. Story: "La abuela de Camila" — Camila's grandmother in Bogotá gets
 * sick, and Marlana spends a week saying the things you say when you can't do
 * anything.
 *
 * These five are pure formulas. Nothing here is built from a rule; they're
 * said whole, the way *bless you* is said whole.
 */
export const invWeek7FrameDays: FrameDay[] = [
  {
    day: 225,
    theme: "Ojalá: La llamada de Camila",
    subtitle: "Bad news at eleven at night, and you don't know what people say in Spanish.",
    frames: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        scenarios: ["hoping it's nothing", "hoping for news", "hoping she's not alone"],
        examples: [
          "Ojalá no sea nada grave.",
          "Ojalá te llamen pronto del hospital.",
          "Ojalá tu mamá esté con ella.",
        ],
        note: "*Ojalá* came into Spanish from Arabic — *law šā' Allāh*, if God wills. It never takes a subject, and it always shifts the verb after it.",
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        scenarios: ["hoping she sleeps", "hoping for the test results", "hoping she'll call"],
        examples: [
          "Espero que puedas dormir algo esta noche.",
          "Espero que los resultados salgan bien.",
          "Espero que me llames a cualquier hora.",
        ],
        note: "*Espero que* is the same wish with a subject attached. Slightly more personal than *ojalá*, and just as automatic.",
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        scenarios: ["ending a hard call", "before her shift", "as she goes"],
        examples: [
          "Que te vaya bien esta noche en el turno.",
          "Que te vaya bien y me cuentas mañana.",
          "Que te vaya bien con la familia.",
        ],
        note: "A complete goodbye on its own. Nobody parses it — it just gets said, the way \"take care\" does.",
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        scenarios: ["saying goodnight", "before a long day", "when there's nothing else to say"],
        examples: [
          "Que descanses, aunque sea un rato.",
          "Que descanses y mañana hablamos.",
          "Que descanses, yo aquí estoy.",
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        scenarios: ["wishing she could do something", "wishing she had the words", "wishing she were there"],
        examples: [
          "Ojalá pudiera hacer algo más que escribirte.",
          "Ojalá supiera qué decir en estos casos.",
          "Ojalá estuviera cerca para acompañarte.",
        ],
        note: "*Ojalá* + this older verb form means it isn't going to happen. *Ojalá pueda* is still possible; *ojalá pudiera* is a wish you already know won't come true.",
      },
    ],
  },
  {
    day: 226,
    theme: "Ojalá: Espero que no sea grave",
    subtitle: "Two days of waiting for results, in a language where waiting has its own phrases.",
    frames: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        scenarios: ["hoping the results come today", "hoping the doctors are good", "hoping there's news by night"],
        examples: [
          "Ojalá salgan hoy los resultados.",
          "Ojalá le toque un buen médico.",
          "Ojalá haya noticias antes de la noche.",
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        scenarios: ["hoping it isn't serious", "hoping her mother's holding up", "hoping they explain clearly"],
        examples: [
          "Espero que no sea nada de cuidado.",
          "Espero que tu mamá esté aguantando bien.",
          "Espero que les expliquen todo con calma.",
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        scenarios: ["before the doctor's call", "on the way to work", "before she sleeps"],
        examples: [
          "Que te vaya bien en la llamada con el doctor.",
          "Que te vaya bien hoy, con todo encima.",
          "Que te vaya bien y avísame lo que sea.",
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        scenarios: ["after a double shift", "even a couple of hours", "no need to reply"],
        examples: [
          "Que descanses después de dos turnos seguidos.",
          "Que descanses aunque sean dos horas.",
          "Que descanses y no me contestes hoy.",
        ],
        note: "*No me contestes hoy* is its own kindness. Giving someone permission not to reply is a thing worth being able to say.",
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        scenarios: ["wishing she could wait with her", "wishing she could take a shift", "wishing distance were shorter"],
        examples: [
          "Ojalá pudiera esperar contigo esos resultados.",
          "Ojalá pudiera cubrirte un turno.",
          "Ojalá Bogotá quedara más cerca.",
        ],
      },
    ],
  },
  {
    day: 227,
    theme: "Ojalá: Que te vaya bien",
    subtitle: "She's flying to Bogotá on Friday. Everything you say now is a goodbye.",
    frames: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        scenarios: ["hoping she finds a flight", "hoping the hospital lets her in", "hoping she arrives in time"],
        examples: [
          "Ojalá encuentres vuelo para el viernes.",
          "Ojalá te dejen entrar a verla.",
          "Ojalá llegues a tiempo.",
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        scenarios: ["hoping the trip's smooth", "hoping her family's at the airport", "hoping she rests on the plane"],
        examples: [
          "Espero que el viaje sea tranquilo.",
          "Espero que te reciban en el aeropuerto.",
          "Espero que duermas algo en el avión.",
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        scenarios: ["at the airport", "wishing her a good trip", "getting there safely"],
        examples: [
          "Que te vaya bien, Camila. De verdad.",
          "Que tengas buen viaje y me escribes al aterrizar.",
          "Que llegues con bien y abraces a tu abuela por mí.",
        ],
        note: "*Que llegues con bien* — that you arrive safely. Older, warmer, and heard all over Latin America at airports and bus stations.",
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        scenarios: ["the night before flying", "on the plane", "when she gets there"],
        examples: [
          "Que descanses esta noche antes de volar.",
          "Que descanses en el vuelo, son seis horas.",
          "Que descanses al llegar, no hagas nada más.",
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        scenarios: ["wishing she could go too", "wishing she could drive her", "wishing she could help from here"],
        examples: [
          "Ojalá pudiera ir contigo.",
          "Ojalá pudiera llevarte al aeropuerto el viernes.",
          "Ojalá tuviera cómo ayudarte desde aquí.",
        ],
      },
    ],
  },
  {
    day: 228,
    theme: "Ojalá: Ojalá pudiera ir contigo",
    subtitle: "The wish you can't act on — and saying it anyway, because that's the point.",
    frames: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        scenarios: ["hoping she's arrived", "hoping the news is better", "hoping she eats something"],
        examples: [
          "Ojalá ya hayas llegado.",
          "Ojalá las noticias mejoren esta semana.",
          "Ojalá comas algo hoy, en serio.",
        ],
        note: "*Ojalá ya hayas llegado* — hopefully you've already arrived. A wish about something that may already be true.",
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        scenarios: ["hoping she's not alone", "hoping the family shares the load", "hoping she asks for help"],
        examples: [
          "Espero que no estés sola en el hospital.",
          "Espero que se turnen entre todos.",
          "Espero que pidas ayuda si la necesitas.",
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        scenarios: ["before the doctors' meeting", "each morning", "in everything"],
        examples: [
          "Que te vaya bien con los médicos hoy.",
          "Que te vaya bien cada día de esta semana.",
          "Que te vaya bien en todo, Camila.",
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        scenarios: ["seven hours behind", "in the hospital chair", "whenever she can"],
        examples: [
          "Que descanses, aunque allá ya sea de madrugada.",
          "Que descanses aunque sea en la silla del hospital.",
          "Que descanses cuando puedas, no cuando debas.",
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        scenarios: ["wishing she could be there", "wishing she could take the worry", "wishing she spoke better"],
        examples: [
          "Ojalá pudiera estar ahí contigo esta semana.",
          "Ojalá pudiera quitarte un poco de la preocupación.",
          "Ojalá hablara lo bastante bien para decirte esto mejor.",
        ],
        note: "The last one is honest and it's also wrong — the Spanish is enough. Notice that she said the hardest thing without switching languages.",
      },
    ],
  },
  {
    day: 229,
    theme: "Ojalá: Que descanses",
    subtitle: "Messages across seven time zones. Yours arrive while she's asleep.",
    frames: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        scenarios: ["hoping she's sleeping", "hoping tomorrow's calmer", "hoping the messages help"],
        examples: [
          "Ojalá estés durmiendo cuando te llegue esto.",
          "Ojalá mañana sea un día más tranquilo.",
          "Ojalá te sirva de algo leerme.",
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        scenarios: ["hoping she doesn't reply out of duty", "hoping she's eating", "hoping the family's kind to her"],
        examples: [
          "Espero que no me contestes por compromiso.",
          "Espero que estés comiendo aunque sea mal.",
          "Espero que tu familia te cuide a ti también.",
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        scenarios: ["the daily message", "before the visit", "and nothing else"],
        examples: [
          "Que te vaya bien hoy y ya, no digo más.",
          "Que te vaya bien en la visita de la tarde.",
          "Que te vaya bien, y no tienes que responder.",
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        scenarios: ["goodnight seven hours early", "the same words every night", "the one thing she can send"],
        examples: [
          "Que descanses, allá ya son las once.",
          "Que descanses, te lo voy a decir todas las noches.",
          "Que descanses, es lo único que puedo mandarte desde aquí.",
        ],
        note: "The same four words every night for a week. That's not poverty of vocabulary — that's what these phrases are for.",
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        scenarios: ["wishing she could call at any hour", "wishing time zones away", "wishing she could sit with her"],
        examples: [
          "Ojalá pudiera llamarte a cualquier hora sin despertarte.",
          "Ojalá no hubiera siete horas de diferencia.",
          "Ojalá pudiera sentarme un rato contigo, sin hablar.",
        ],
      },
    ],
  },
  {
    day: 230,
    theme: "Ojalá: Ojalá la hubieras conocido",
    subtitle: "Better news. And Camila finally tells you who her grandmother is.",
    frames: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        scenarios: ["hoping she keeps improving", "hoping she goes home", "hoping Camila gets to stay"],
        examples: [
          "Ojalá siga mejorando así de rápido.",
          "Ojalá le den de alta la semana que viene.",
          "Ojalá te dejen quedarte unos días más.",
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        scenarios: ["hoping she rests now", "hoping the relief lands", "hoping she takes a real day"],
        examples: [
          "Espero que ahora sí duermas ocho horas.",
          "Espero que te caiga el alivio de golpe.",
          "Espero que te tomes un día entero para ti.",
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        scenarios: ["the last days there", "the flight back", "with her family"],
        examples: [
          "Que te vaya bien en estos últimos días allá.",
          "Que te vaya bien de regreso y me avisas.",
          "Que te vaya bien con toda tu familia junta.",
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        scenarios: ["the first real night", "no alarm", "for once"],
        examples: [
          "Que descanses hoy de verdad, no a medias.",
          "Que descanses sin alarma por primera vez.",
          "Que descanses por fin, te lo debes.",
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        scenarios: ["wishing she'd met her", "wishing she could hear her stories", "wishing for a visit someday"],
        examples: [
          "Ojalá la hubiera conocido.",
          "Ojalá pudiera oírle contar todo eso ella misma.",
          "Ojalá algún día pueda ir a Bogotá a saludarla.",
        ],
        note: "*Ojalá la hubiera conocido* — I wish I'd met her. Same past-wish shape as week 5's *hubieras estado*, and by now it needs no assembling.",
      },
    ],
  },
  {
    day: 231,
    theme: "Ojalá: Repaso",
    subtitle: "A week of saying the only things there were to say — and having them ready.",
    frames: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        scenarios: ["hoping the good news holds", "hoping to see her Thursday", "hoping never to need these again"],
        examples: [
          "Ojalá esta semana termine tan bien como va.",
          "Ojalá nos veamos el jueves como siempre.",
          "Ojalá no tenga que usar estas frases muy seguido.",
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        scenarios: ["hoping she felt accompanied", "hoping the messages weren't a burden", "hoping to do it again if needed"],
        examples: [
          "Espero que te hayas sentido acompañada.",
          "Espero que mis mensajes no te hayan pesado.",
          "Espero que sepas que puedo repetirlo cuando haga falta.",
        ],
        note: "*Espero que te hayas sentido* — a wish about how something already went. The past keeps sliding into these phrases without changing them.",
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        scenarios: ["said a dozen times", "and meaning it each time", "closing the week"],
        examples: [
          "Que te vaya bien: lo dije doce veces esta semana.",
          "Que te vaya bien, y cada vez lo sentí igual.",
          "Que te vaya bien con lo que venga ahora.",
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        scenarios: ["the phrase of the week", "four words, every night", "and it was enough"],
        examples: [
          "Que descanses fue mi frase de la semana.",
          "Que descanses: cuatro palabras, siete noches.",
          "Que descanses, y resultó que alcanzaba.",
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        scenarios: ["wishing she'd had these sooner", "wishing for her students", "wishing not to have learned them this way"],
        examples: [
          "Ojalá hubiera tenido estas frases hace diez años.",
          "Ojalá mis estudiantes las aprendieran antes que la gramática.",
          "Ojalá no las hubiera aprendido en una semana así.",
        ],
        note: "The most useful Spanish she learned all winter, learned in the worst possible week. That's usually how it goes.",
      },
    ],
  },
];
