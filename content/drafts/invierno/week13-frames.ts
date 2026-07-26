import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 13 — "Ida y vuelta" (days 267–273). The season capstone.
 * Story: "El invierno entero" — the last Thursday of winter, Marlana plays her
 * January recording next to her March one, Yesenia comes to the café, and the
 * whole season gets used at once in one long conversation.
 *
 * The five stems are one from each movement of the season rather than one
 * week's set: *Pues…* (wk 1), *Quiero que…* (wk 5), *Perdona que te
 * interrumpa…* (wk 9), *¿Y tú qué opinas?* (wk 10), *Más o menos entendí que…*
 * (wk 11). Every example is new — convention 8 still holds.
 *
 * Day 271 follows the day-42 variant: its five prompts are the beats of a
 * single conversation rather than five separate situations.
 */
export const invWeek13FrameDays: FrameDay[] = [
  {
    day: 267,
    theme: "Ida y vuelta: La última semana",
    subtitle: "Ninety-one days ago you couldn't fill a silence. This is the last week of them.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["noticing the season is ending", "counting back", "the first thing that comes out"],
        examples: [
          "Pues, se acaba el invierno y ni lo sentí pasar.",
          "Pues, empecé esto en enero sin creérmelo.",
          "Pues, mira dónde terminé.",
        ],
        note: "Ninety-one days ago this word was a lifeline. Now it's just how you start a sentence, which is exactly what was supposed to happen.",
      },
      {
        stem: "Quiero que…",
        english: "I want … to …",
        scenarios: ["what she wants from the last week", "for Camila", "for herself"],
        examples: [
          "Quiero que esta semana no se me pase por encima.",
          "Quiero que Camila oiga lo de enero conmigo.",
          "Quiero que quede grabado en algún lado.",
        ],
      },
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["cutting in without thinking", "because it matters", "and nobody minds"],
        examples: [
          "Perdona que te interrumpa, pero esto no puede esperar al jueves.",
          "Perdona que te interrumpa, es de lo del invierno.",
          "Perdona que te interrumpa, y ya sé que lo hago todo el tiempo.",
        ],
      },
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["asking about the season", "genuinely wanting the answer", "handing it over"],
        examples: [
          "¿Y tú qué opinas de cómo salió el invierno?",
          "¿Y tú qué opinas? Tú me oíste desde el principio.",
          "¿Y tú qué opinas que debería hacer en primavera?",
        ],
      },
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        scenarios: ["what the season was about", "and it wasn't grammar", "the shape of it"],
        examples: [
          "Más o menos entendí que el invierno no era de gramática.",
          "Más o menos entendí que era de dejar de frenar.",
          "Más o menos entendí que ya no vuelvo atrás.",
        ],
      },
    ],
  },
  {
    day: 268,
    theme: "Ida y vuelta: El audio de enero",
    subtitle: "Eleven seconds, recorded on day 204. You've been keeping it for this.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["pressing play", "hearing herself", "the first reaction"],
        examples: [
          "Pues, aquí está: once segundos y tres pausas.",
          "Pues, no me lo esperaba tan corto.",
          "Pues, esa era yo hace dos meses.",
        ],
      },
      {
        stem: "Quiero que…",
        english: "I want … to …",
        scenarios: ["wanting her to hear it", "both of them", "without warning her"],
        examples: [
          "Quiero que lo oigas sin que te diga nada antes.",
          "Quiero que me digas qué oyes tú, no lo que yo creo oír.",
          "Quiero que lo comparemos ahora mismo, los dos seguidos.",
        ],
      },
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["stopping the playback", "she can't listen to all of it", "one thing first"],
        examples: [
          "Perdona que te interrumpa, para el audio un segundo.",
          "Perdona que te interrumpa, no puedo oírme más.",
          "Perdona que te interrumpa, ¿de verdad sonaba así?",
        ],
      },
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["after both recordings", "wanting the honest version", "no humoring"],
        examples: [
          "¿Y tú qué opinas de los dos juntos?",
          "¿Y tú qué opinas, sin consentirme?",
          "¿Y tú qué opinas que cambió más, el ritmo o la cara?",
        ],
      },
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        scenarios: ["what the January recording says", "about the person in it", "and about now"],
        examples: [
          "Más o menos entendí que la de enero estaba pidiendo permiso.",
          "Más o menos entendí que se disculpaba dos veces en once segundos.",
          "Más o menos entendí que ya no me suena a mí.",
        ],
        note: "Two recordings, two months apart, and no argument possible. This is why week 4 said keep the first one.",
      },
    ],
  },
  {
    day: 269,
    theme: "Ida y vuelta: Lo que cambió",
    subtitle: "Name it precisely, because 'I got better' explains nothing.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["starting the honest inventory", "not the flattering version", "the real answer"],
        examples: [
          "Pues, lo que cambió no fue el vocabulario.",
          "Pues, sé casi las mismas palabras de enero.",
          "Pues, lo que se fue fue el miedo a la pausa.",
        ],
        note: "\"I got better\" explains nothing and can't be repeated. Naming the specific thing is what lets you do it again in spring.",
      },
      {
        stem: "Quiero que…",
        english: "I want … to …",
        scenarios: ["wanting it written down", "for her students", "for the next person"],
        examples: [
          "Quiero que lo escribamos antes de que se me olvide cómo pasó.",
          "Quiero que mis estudiantes tengan esto sin esperar diez años.",
          "Quiero que Yesenia lo oiga de alguien que empezó igual.",
        ],
      },
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["correcting a compliment", "it wasn't that", "getting it right"],
        examples: [
          "Perdona que te interrumpa, pero no fue talento.",
          "Perdona que te interrumpa: fueron noventa y un días seguidos.",
          "Perdona que te interrumpa, quiero decirlo bien.",
        ],
      },
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["asking the person who watched it", "from outside", "what she saw change"],
        examples: [
          "¿Y tú qué opinas desde afuera?",
          "¿Y tú qué opinas que fue lo primero que cambió?",
          "¿Y tú qué opinas: se nota más al hablar o al escuchar?",
        ],
      },
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        scenarios: ["the mechanism", "why it worked", "what to keep doing"],
        examples: [
          "Más o menos entendí que lo que sirve es hablar todos los días, poquito.",
          "Más o menos entendí que las tablas nunca hicieron nada.",
          "Más o menos entendí que hay que seguir aunque salga mal.",
        ],
      },
    ],
  },
  {
    day: 270,
    theme: "Ida y vuelta: Yesenia en el café",
    subtitle: "You brought your student to the café. In January you were the student.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["introducing everyone", "explaining how it started", "the whole chain"],
        examples: [
          "Pues, Yesenia, esta es Camila, la culpable de todo.",
          "Pues, así empezó todo: un intercambio los jueves.",
          "Pues, ahora somos cuatro en esta mesa.",
        ],
      },
      {
        stem: "Quiero que…",
        english: "I want … to …",
        scenarios: ["wanting Yesenia to hear it", "from Camila not from her", "the honest version"],
        examples: [
          "Quiero que Camila te cuente cómo hablaba yo en enero.",
          "Quiero que sepas que yo también me disculpaba once veces por hora.",
          "Quiero que vengas todos los jueves, si te sirve.",
        ],
        note: "Week 8 gave the advice; this is the advice arriving with the person attached, which is the version that works.",
      },
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["cutting in to correct the story", "modestly", "or to add a detail"],
        examples: [
          "Perdona que te interrumpa, exageras, no era tan malo.",
          "Perdona que te interrumpa: sí era tan malo.",
          "Perdona que te interrumpa, esa parte cuéntasela tú.",
        ],
      },
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["bringing Yesenia in", "the newest person at the table", "on purpose"],
        examples: [
          "¿Y tú qué opinas, Yesenia? Llevas media hora oyéndonos.",
          "¿Y tú qué opinas de todo esto que te contamos?",
          "¿Y tú qué opinas? Aquí opinan todos, esa es la regla.",
        ],
      },
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        scenarios: ["what Yesenia is feeling", "recognizing it", "from the inside"],
        examples: [
          "Más o menos entendí lo que sientes porque yo lo sentí igual.",
          "Más o menos entendí que no te preocupa el inglés, te preocupa la pena.",
          "Más o menos entendí que necesitas que alguien te dé permiso.",
        ],
      },
    ],
  },
  {
    day: 271,
    theme: "Ida y vuelta: Una charla de ida y vuelta",
    subtitle: "Two hours, four people, one language. The five prompts today are one conversation.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["how the evening opens", "someone asks a real question", "and she answers"],
        examples: [
          "Pues, te cuento cómo fue de verdad.",
          "Pues, mira, empezó fatal y terminó bien.",
          "Pues, la parte difícil no fue la que yo pensaba.",
        ],
        note: "Today's five prompts are the beats of one conversation, in order — the day-42 variant. Say them as a single stretch, not five exercises.",
      },
      {
        stem: "Quiero que…",
        english: "I want … to …",
        scenarios: ["asking for something mid-story", "wanting them to wait", "or to weigh in"],
        examples: [
          "Quiero que me dejen llegar al final antes de opinar.",
          "Quiero que se queden con una cosa de todo esto.",
          "Quiero que alguien me pare si me voy por las ramas.",
        ],
      },
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["someone else has the floor", "she has to come in", "and she does"],
        examples: [
          "Perdona que te interrumpa, pero eso lo viví distinto.",
          "Perdona que te interrumpa, falta la mitad de esa historia.",
          "Perdona que te interrumpa, y perdón también por la de antes.",
        ],
      },
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["giving the floor back", "after two hours", "to each of them"],
        examples: [
          "¿Y tú qué opinas? Llevo hablando media hora.",
          "¿Y tú qué opinas, ahora que oíste todo el invierno de golpe?",
          "¿Y tú qué opinas? Ahora sí me callo y escucho.",
        ],
      },
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        scenarios: ["catching what they said back", "checking it", "closing the loop"],
        examples: [
          "Más o menos entendí que ustedes lo vieron venir antes que yo.",
          "Más o menos entendí que lo difícil viene ahora, no antes.",
          "Más o menos entendí que esto no se acaba en marzo.",
        ],
      },
    ],
  },
  {
    day: 272,
    theme: "Ida y vuelta: Lo que viene",
    subtitle: "Winter did what it said it would. Spring wants something harder.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["looking forward", "what's left", "the honest gap"],
        examples: [
          "Pues, ya sueno natural, pero todavía no soy yo del todo.",
          "Pues, me falta el humor. En inglés soy graciosa.",
          "Pues, en primavera quiero discutir sin ponerme nerviosa.",
        ],
        note: "The gap the spring season is for, named from inside winter: you sound natural, but you don't yet sound like *you*.",
      },
      {
        stem: "Quiero que…",
        english: "I want … to …",
        scenarios: ["what she wants next", "from the practice", "from herself"],
        examples: [
          "Quiero que la primavera sea de personalidad, no de técnica.",
          "Quiero que me salga una broma sin planearla.",
          "Quiero que sigamos con los jueves aunque cambie la temporada.",
        ],
      },
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["before the plans get too big", "keeping it small", "one thing at a time"],
        examples: [
          "Perdona que te interrumpa, no hagamos un plan enorme.",
          "Perdona que te interrumpa, lo pequeño es lo que funcionó.",
          "Perdona que te interrumpa: cinco frases al día, nada más.",
        ],
      },
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["what she should work on", "asking all three", "and meaning it"],
        examples: [
          "¿Y tú qué opinas que me falta de verdad?",
          "¿Y tú qué opinas: sigo igual o cambio algo?",
          "¿Y tú qué opinas del año entero, no solo del invierno?",
        ],
      },
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        scenarios: ["what spring is", "why it's harder", "and why she wants it"],
        examples: [
          "Más o menos entendí que lo que viene es más difícil de medir.",
          "Más o menos entendí que sonar natural y sonar como yo no es lo mismo.",
          "Más o menos entendí que esa es justo la parte que quiero.",
        ],
      },
    ],
  },
  {
    day: 273,
    theme: "Ida y vuelta: El invierno entero",
    subtitle: "Ninety-one days. The last one. Say the whole thing out loud, once.",
    frames: [
      {
        stem: "Pues…",
        english: "Well… / So…",
        scenarios: ["the last day", "the word that started it", "and still starts everything"],
        examples: [
          "Pues, día noventa y uno, y sigo aquí.",
          "Pues, la palabra con la que empecé sigue siendo la primera que digo.",
          "Pues, resulta que era eso todo el tiempo.",
        ],
        note: "The app's name, the season's first frame, and the last sentence of the last day. *Pues* was never filler; it was permission to keep going.",
      },
      {
        stem: "Quiero que…",
        english: "I want … to …",
        scenarios: ["the closing wish", "for the people in it", "for what comes next"],
        examples: [
          "Quiero que este invierno no se quede solo en mi cabeza.",
          "Quiero que Camila sepa lo que hizo sin proponérselo.",
          "Quiero que el año siga igual de sencillo: hablar todos los días.",
        ],
      },
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        scenarios: ["one last time", "on purpose", "because now she can"],
        examples: [
          "Perdona que te interrumpa una última vez este invierno.",
          "Perdona que te interrumpa, pero esto lo digo yo.",
          "Perdona que te interrumpa: gracias, y ya está.",
        ],
      },
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        scenarios: ["the last handover", "to everyone at the table", "and then listening"],
        examples: [
          "¿Y tú qué opinas? Última pregunta del invierno.",
          "¿Y tú qué opinas de dónde estamos las cuatro?",
          "¿Y tú qué opinas? Y ahora sí, escucho.",
        ],
      },
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        scenarios: ["the season in one sentence", "what it was actually about", "and what's next"],
        examples: [
          "Más o menos entendí que hablar es un hábito, no un talento.",
          "Más o menos entendí que noventa y un días cambian a una persona.",
          "Más o menos entendí que la primavera empieza mañana.",
        ],
        note: "Day 273. The season's goals were \"watch something without subtitles\" and \"a back-and-forth conversation\". Both happened, on ordinary days, without ceremony.",
      },
    ],
  },
];
