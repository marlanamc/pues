import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 8 — "Temas grandes" (days 323–329).
 * Story: "Lo que se pierde" — the district cuts the evening ESOL class, and
 * the big topics (why school, what a test measures, whose language counts)
 * arrive attached to people with names.
 *
 * Five stems for arguing about something that matters, out loud: name the
 * irritation, explain the real situation, correct the framing, cite what you
 * actually see, hand it back. Every one is spoken — no essay connectors.
 */
export const priWeek8FrameDays: FrameDay[] = [
  {
    day: 323,
    theme: "Temas grandes: La pregunta de Yesenia",
    subtitle: "A student asks why she needs English for a kitchen job — and the brochure answer comes out.",
    frames: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is… / What gets to me is…",
        scenarios: ["the answer she gave", "the answer she wanted to give", "what the question cost her"],
        examples: [
          "A mí lo que me molesta es que le di la respuesta de folleto.",
          "A mí lo que me molesta es que la pregunta era buena y yo no.",
          "A mí lo que me molesta es que se me ocurrió la respuesta buena en el carro.",
        ],
        note: "*A mí lo que me molesta es…* puts the feeling first and the argument second — which is the order people actually talk in.",
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        scenarios: ["what Yesenia is really asking", "her four hours", "the math she's doing"],
        examples: [
          "Lo que pasa es que no pregunta por el inglés, pregunta si vale las cuatro horas.",
          "Lo que pasa es que ella sale de la cocina a las seis y la clase es a las siete.",
          "Lo que pasa es que nadie le ha dicho para qué le sirve a ella, no a la escuela.",
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive) — used to correct the wrong version first",
        scenarios: ["what people assume about her", "why she asked", "the real reason"],
        examples: [
          "No es que no quiera aprender, es que está agotada y está haciendo cuentas.",
          "No es que la clase le aburra, es que le cuesta llegar.",
          "No es que dude del inglés, es que duda de que le alcance el tiempo.",
        ],
        note: "*No es que* takes the subjunctive because you're waving off a version that isn't true — then *es que* + indicative lands the one that is.",
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        scenarios: ["Yesenia's day", "who actually shows up", "the evidence in the room"],
        examples: [
          "Yo lo que veo es una mujer que limpia oficinas todo el día y aun así llega a las siete.",
          "Yo lo que veo es que los que más faltan son los que más lejos viven.",
          "Yo lo que veo es una clase llena de gente que ya trabajó ocho horas.",
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do? / What would you have done?",
        scenarios: ["handing it to Camila", "asking instead of concluding", "no good answer yet"],
        examples: [
          "¿Tú qué harías? Porque \"oportunidades\" no le va a alcanzar.",
          "¿Tú qué harías si te lo preguntara un paciente?",
          "¿Tú qué harías con cuatro horas menos de sueño?",
        ],
        note: "A big topic stops being a speech the second you hand it over. *¿Tú qué harías?* is the handoff.",
      },
    ],
  },
  {
    day: 324,
    theme: "Temas grandes: La tarea que no escribió",
    subtitle: "A perfect paragraph from a kid who never finishes a sentence out loud.",
    frames: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is… / What gets to me is…",
        scenarios: ["not the app", "being underestimated", "the part that stings"],
        examples: [
          "A mí lo que me molesta no es la app, es que pensó que yo no me iba a dar cuenta.",
          "A mí lo que me molesta es que escribe mejor la máquina que yo a su edad.",
          "A mí lo que me molesta es tener que jugar al detective en vez de enseñar.",
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        scenarios: ["what he can do", "what he can't", "the gap between the two"],
        examples: [
          "Lo que pasa es que él sí puede hablar del libro, lo que no puede es escribirlo.",
          "Lo que pasa es que en voz alta se explica bien y en la hoja se congela.",
          "Lo que pasa es que le pedí un párrafo y nunca le enseñé a empezar uno.",
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive) — used to correct the wrong version first",
        scenarios: ["cheating vs never being taught", "what the rule misses", "why he did it"],
        examples: [
          "No es que haya hecho trampa, es que nadie le enseñó cómo se ve un primer borrador.",
          "No es que sea flojo, es que le da pánico entregar algo a medias.",
          "No es que la app piense por él, es que él no sabe empezar sin ella.",
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        scenarios: ["the kid behind the paragraph", "what fear looks like", "Monday's plan"],
        examples: [
          "Yo lo que veo es un chico con miedo de entregar algo feo.",
          "Yo lo que veo es que nunca me ha entregado nada tachado.",
          "Yo lo que veo es que el problema empieza antes de la primera frase.",
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do? / What would you have done?",
        scenarios: ["Monday morning", "not failing him", "asking Camila"],
        examples: [
          "¿Tú qué harías el lunes? Porque yo no lo voy a reprobar por eso.",
          "¿Tú qué harías si en el hospital alguien copiara un informe?",
          "¿Tú qué harías: hablar con él o hablar con la mamá?",
        ],
      },
    ],
  },
  {
    day: 325,
    theme: "Temas grandes: Solo inglés en casa",
    subtitle: "Diego's mom asks for English-only at home — and it isn't really about Spanish.",
    frames: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is… / What gets to me is…",
        scenarios: ["who told her that", "the advice she got before", "where the idea came from"],
        examples: [
          "A mí lo que me molesta es que alguien le dijo que el español era el problema.",
          "A mí lo que me molesta es que llegó pidiendo permiso para su propio idioma.",
          "A mí lo que me molesta es que esa idea salió de una escuela, no de ella.",
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        scenarios: ["what she's really asking for", "the fear under it", "what she can't say"],
        examples: [
          "Lo que pasa es que no me pide quitar el español, me pide arreglar a su hijo.",
          "Lo que pasa es que ella no entiende las cartas que le manda la escuela.",
          "Lo que pasa es que quiere ayudarlo y no sabe por dónde.",
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive) — used to correct the wrong version first",
        scenarios: ["shame vs exhaustion", "what she actually feels", "correcting the easy read"],
        examples: [
          "No es que le dé pena el idioma, es que está cansada de no entender a la escuela.",
          "No es que odie el español, es que odia quedarse afuera de la conversación.",
          "No es que quiera perder algo, es que le dijeron que así se gana.",
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        scenarios: ["kids translating", "the eight-year-old", "what the house actually looks like"],
        examples: [
          "Yo lo que veo es una niña de ocho años traduciendo una cita médica.",
          "Yo lo que veo es que Diego lee mejor cuando le dejan leer en los dos.",
          "Yo lo que veo es que en esa casa el español es la abuela, no una materia.",
        ],
        note: "*Yo lo que veo es…* grounds an opinion in something you actually witnessed. It's the antidote to sounding like a study.",
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do? / What would you have done?",
        scenarios: ["Camila's side of it", "advice vs lecture", "what to say next time"],
        examples: [
          "¿Tú qué harías? Tú has estado del lado de ella en esa conversación.",
          "¿Tú qué harías si te lo pidiera una mamá en el hospital?",
          "¿Tú qué harías para decírselo sin sonar a sermón?",
        ],
      },
    ],
  },
  {
    day: 326,
    theme: "Temas grandes: Cortan la clase de la noche",
    subtitle: "The district cuts the 7pm ESOL section and calls it low enrollment. Yesenia is in that section.",
    frames: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is… / What gets to me is…",
        scenarios: ["the wording", "finding out by email", "who wasn't asked"],
        examples: [
          "A mí lo que me molesta es que cortaron la clase de la noche y lo llamaron \"poca inscripción\".",
          "A mí lo que me molesta es que me enteré por un correo de dos líneas.",
          "A mí lo que me molesta es que nadie le preguntó a nadie de esa clase.",
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        scenarios: ["the four o'clock section", "why people can't come", "the real numbers"],
        examples: [
          "Lo que pasa es que once personas no pueden venir a las cuatro de la tarde porque están trabajando.",
          "Lo que pasa es que la clase de la noche es la única que les queda.",
          "Lo que pasa es que contaron las sillas en enero y no en marzo.",
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive) — used to correct the wrong version first",
        scenarios: ["money vs priority", "the official reason", "what's actually true"],
        examples: [
          "No es que no haya dinero, es que somos la línea más fácil de cortar.",
          "No es que la clase esté vacía, es que la contaron el día de la nieve.",
          "No es que a nadie le importe, es que nadie de esa clase vota aquí.",
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        scenarios: ["who fills the room", "the waiting list", "the contradiction"],
        examples: [
          "Yo lo que veo es que la clase que se llena es la que están cerrando.",
          "Yo lo que veo es gente que llega con el uniforme puesto.",
          "Yo lo que veo es una lista de espera de catorce personas.",
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do? / What would you have done?",
        scenarios: ["write or show up", "asking Camila for a read", "what actually moves them"],
        examples: [
          "¿Tú qué harías? ¿Escribirles o presentarte en la reunión?",
          "¿Tú qué harías primero: hablar con la directora o con las familias?",
          "¿Tú qué harías si fuera tu turno el que quitan?",
        ],
      },
    ],
  },
  {
    day: 327,
    theme: "Temas grandes: El examen del estado",
    subtitle: "They test the kids in English on things the kids already know in Spanish.",
    frames: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is… / What gets to me is…",
        scenarios: ["what the test measures", "what gets reported", "the week it eats"],
        examples: [
          "A mí lo que me molesta es que los evalúan en inglés sobre cosas que ya saben en español.",
          "A mí lo que me molesta es perder dos semanas de clase en preparar un examen.",
          "A mí lo que me molesta es que el número sale en el periódico y el niño no.",
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        scenarios: ["what the score is", "how it gets read", "the swap nobody names"],
        examples: [
          "Lo que pasa es que la nota mide el inglés, y después la leen como si midiera al niño.",
          "Lo que pasa es que el examen es de lectura y ellos fallan en el enunciado, no en las matemáticas.",
          "Lo que pasa es que a mí me califican con esa nota también.",
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive) — used to correct the wrong version first",
        scenarios: ["not anti-testing", "what this one tells her", "the honest objection"],
        examples: [
          "No es que yo esté en contra de los exámenes, es que este no me dice nada que no supiera en octubre.",
          "No es que no quiera datos, es que quiero datos de lo que sí enseñé.",
          "No es que el examen mienta, es que contesta otra pregunta.",
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        scenarios: ["Diego and the fractions", "the gap between the two", "what she watches happen"],
        examples: [
          "Yo lo que veo es a Diego explicando fracciones perfecto y sacando un dos.",
          "Yo lo que veo es que se rinden en la página tres, no en la pregunta.",
          "Yo lo que veo es que los mismos chicos sacan la misma nota cada año.",
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do? / What would you have done?",
        scenarios: ["turning it on Camila", "the hospital parallel", "no clean answer"],
        examples: [
          "¿Tú qué harías si calificaran tu turno con un examen en un idioma que todavía estás aprendiendo?",
          "¿Tú qué harías con esa nota en la mano y la mamá enfrente?",
          "¿Tú qué harías: preparar el examen o enseñar el año?",
        ],
      },
    ],
  },
  {
    day: 328,
    theme: "Temas grandes: Lo que voy a decir el martes",
    subtitle: "Three minutes at the school board meeting. Camila is the practice audience.",
    frames: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is… / What gets to me is…",
        scenarios: ["the three-minute limit", "her own draft", "wasting the opening"],
        examples: [
          "A mí lo que me molesta es que tengo tres minutos y ya gasté dos en mi cargo.",
          "A mí lo que me molesta es que suena a queja y quiero que suene a propuesta.",
          "A mí lo que me molesta es tener que pedir por favor algo que ya existía.",
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        scenarios: ["numbers vs people", "what they'll answer", "the trap in her draft"],
        examples: [
          "Lo que pasa es que si yo digo números, ellos me contestan con números.",
          "Lo que pasa es que ya tienen la hoja de cálculo y yo no la voy a ganar.",
          "Lo que pasa es que tengo un solo ejemplo bueno y lo puse al final.",
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive) — used to correct the wrong version first",
        scenarios: ["the actual ask", "not wanting a fight", "naming the outcome"],
        examples: [
          "No es que quiera que se sientan mal, es que quiero que muevan la clase a las siete.",
          "No es que pida dinero nuevo, es que pido el mismo salón dos horas más tarde.",
          "No es que vaya a discutir, es que voy a llegar con una fecha.",
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        scenarios: ["what will actually land", "bring a person not a chart", "reading the room"],
        examples: [
          "Yo lo que veo es que me van a escuchar si llevo a Yesenia y no una gráfica.",
          "Yo lo que veo es que la sala se despierta cuando habla alguien de afuera.",
          "Yo lo que veo es que tres minutos alcanzan para una historia y una petición.",
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do? / What would you have done?",
        scenarios: ["asking Camila to cut it", "rehearsing out loud", "the last edit"],
        examples: [
          "¿Tú qué harías? Párame si empiezo a sonar a informe.",
          "¿Tú qué harías con el final: la petición o la historia?",
          "¿Tú qué harías si te dan tres minutos y te tiembla la voz?",
        ],
        note: "Rehearsing out loud with one friend is the whole reason this week's stems are spoken ones — you can't read a board meeting off a page.",
      },
    ],
  },
  {
    day: 329,
    theme: "Temas grandes: En el pasillo con Rocío",
    subtitle: "Monday, 7:40am, by the copier. Rocío has done this before.",
    frames: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is… / What gets to me is…",
        scenarios: ["how Rocío found out", "the newsletter", "being last to know"],
        examples: [
          "A mí lo que me molesta es que te enteraste por el boletín y no por ellos.",
          "A mí lo que me molesta es que lo pusieron en la página cuatro.",
          "A mí lo que me molesta es que ya lo habían decidido en febrero.",
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        scenarios: ["the meeting hour", "who can't attend", "the same problem again"],
        examples: [
          "Lo que pasa es que nadie de la clase de la noche va a estar libre a esa hora tampoco.",
          "Lo que pasa es que la reunión es el martes a las cinco y ellos entran a las cuatro.",
          "Lo que pasa es que hasta la reunión sobre la clase de la noche es de día.",
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive) — used to correct the wrong version first",
        scenarios: ["going alone", "why she wants company", "what one voice sounds like"],
        examples: [
          "No es que no quiera ir sola, es que sola soy una maestra quejándose.",
          "No es que me dé miedo hablar, es que me da miedo hablar por gente que no está.",
          "No es que necesite ayuda, es que necesito que seamos dos.",
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        scenarios: ["Rocío has done this", "who to talk to first", "the copier conversation"],
        examples: [
          "Yo lo que veo es que tú ya hiciste esto antes y sabes con quién hablar primero.",
          "Yo lo que veo es que a ti te contestan los correos el mismo día.",
          "Yo lo que veo es que en este pasillo se decide más que en esa sala.",
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do? / What would you have done?",
        scenarios: ["Tuesday or the vote", "the copier is warming up", "she has four minutes"],
        examples: [
          "¿Tú qué harías? ¿Ir el martes o esperar la votación?",
          "¿Tú qué harías en mi lugar, con cuatro minutos antes del timbre?",
          "¿Tú qué harías si te dijeran que ya está decidido?",
        ],
        note: "A repaso is the same five tools in a new room. Same problem, different listener, four minutes instead of a whole café.",
      },
    ],
  },
];
