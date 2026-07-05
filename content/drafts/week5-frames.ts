import type { FrameDay } from "../frames/types";

/**
 * Otoño Week 5 draft — "Además" (days 120–126).
 *
 * Append to content/frames/otono.ts after weeks 2–4 land. Same 5 stems every
 * day; each day's examples retell that installment of "La feria escolar."
 * Keep index-aligned with week5-prompts.ts, week5-readings.ts, week5-sentenceFormer.ts.
 */
export const week5FrameDays: FrameDay[] = [
  {
    day: 120,
    theme: "Además: La idea",
    subtitle: "Someone proposed a school fair — add the next detail with each connector.",
    frames: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        scenarios: ["the fair's purpose", "who proposed it", "when it's happening"],
        examples: [
          "Además, la idea es celebrar la diversidad del colegio.",
          "Además, la directora lo propuso en la reunión de ayer.",
          "Además, la feria va a ser en la primavera.",
        ],
        note: "*Además* at the start of a sentence adds a new fact without changing topic — perfect for stacking plans.",
      },
      {
        stem: "También…",
        english: "Also… / …too",
        scenarios: ["another goal", "who else is involved", "what else they'll need"],
        examples: [
          "También quieren que las familias participen.",
          "También van a invitar a los exalumnos.",
          "También necesitamos un presupuesto pequeño.",
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        scenarios: ["a separate detail", "something else on the list", "another layer of the plan"],
        examples: [
          "Aparte de eso, cada clase va a tener un puesto.",
          "Aparte de eso, hay que conseguir permisos del distrito.",
          "Aparte de eso, quieren música y comida de varios países.",
        ],
        note: "*Aparte de eso* signals you're adding something related but distinct — a natural pivot in planning talk.",
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        scenarios: ["two goals at once", "food and culture", "students and families"],
        examples: [
          "No solo van a comer, sino también van a aprender de otras culturas.",
          "No solo es una fiesta, sino también una oportunidad para la comunidad.",
          "No solo participan los estudiantes, sino también sus familias.",
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        scenarios: ["an extra bonus", "something that makes it better", "one more reason to do it"],
        examples: [
          "Encima, la directora dijo que puede conseguir fondos.",
          "Encima, el gimnasio ya está reservado.",
          "Encima, varios maestros se ofrecieron a ayudar.",
        ],
        note: "*Encima* often carries a hint of pleasant surprise — something extra on the pile.",
      },
    ],
  },
  {
    day: 121,
    theme: "Además: La comida",
    subtitle: "Food from many countries — keep adding to the menu with connectors.",
    frames: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        scenarios: ["another dish", "another country", "another family offering"],
        examples: [
          "Además, una mamá va a traer arepas de Venezuela.",
          "Además, van a servir té de Marruecos en un rincón.",
          "Además, la familia de Lin va a preparar dumplings.",
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        scenarios: ["another contribution", "labels needed", "allergies to consider"],
        examples: [
          "También van a traer empanadas colombianas.",
          "También necesitamos etiquetas con los ingredientes.",
          "También hay que pensar en las alergias.",
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        scenarios: ["setup details", "tables and chairs", "volunteers for serving"],
        examples: [
          "Aparte de eso, cada plato lleva una tarjeta con el país.",
          "Aparte de eso, necesitamos mesas largas en el patio.",
          "Aparte de eso, buscamos voluntarios para servir.",
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        scenarios: ["taste and story", "food and tradition", "eat and learn"],
        examples: [
          "No solo van a probar comida nueva, sino también van a escuchar historias.",
          "No solo hay platos mexicanos, sino también dominicanos y vietnamitas.",
          "No solo es delicioso, sino también educativo.",
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        scenarios: ["a generous offer", "extra help", "something that simplifies things"],
        examples: [
          "Encima, el restaurante de la esquina quiere donar postres.",
          "Encima, tenemos una cocina grande para calentar todo.",
          "Encima, las familias traen sus propias mesas.",
        ],
      },
    ],
  },
  {
    day: 122,
    theme: "Además: La música",
    subtitle: "Live music joins the plan — stack the details.",
    frames: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        scenarios: ["another act", "another instrument", "another time slot"],
        examples: [
          "Además, un papá va a tocar la guitarra en vivo.",
          "Además, hay un grupo de estudiantes que canta en español.",
          "Además, reservaron el escenario del auditorio.",
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        scenarios: ["a playlist", "rehearsals", "sound equipment"],
        examples: [
          "También van a poner una lista de canciones entre presentaciones.",
          "También necesitamos ensayar el viernes por la tarde.",
          "También hay que pedir prestados los altavoces.",
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        scenarios: ["dance", "costumes", "a schedule to manage"],
        examples: [
          "Aparte de eso, unas niñas quieren bailar folklore.",
          "Aparte de eso, hay que hacer un horario de presentaciones.",
          "Aparte de eso, la profesora de arte diseña el escenario.",
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        scenarios: ["music and culture", "listen and participate", "local and global"],
        examples: [
          "No solo van a escuchar música, sino también van a tocar algunos.",
          "No solo hay canciones en español, sino también en portugués y hindi.",
          "No solo es entretenimiento, sino también parte del aprendizaje.",
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        scenarios: ["an unexpected musician", "free equipment", "extra rehearsal time"],
        examples: [
          "Encima, una exalumna ofreció tocar el violín.",
          "Encima, el departamento de música presta el equipo.",
          "Encima, el auditorio tiene buen sonido.",
        ],
      },
    ],
  },
  {
    day: 123,
    theme: "Además: Los voluntarios",
    subtitle: "Teachers signing up — add who does what.",
    frames: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        scenarios: ["another volunteer", "another shift", "another task covered"],
        examples: [
          "Además, el señor Ortiz se apuntó para montar las mesas.",
          "Además, la señora Kim va a cuidar la mesa de comida coreana.",
          "Además, faltan dos personas para la limpieza.",
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        scenarios: ["your own signup", "a coworker's role", "still needed"],
        examples: [
          "También me anoté para la configuración temprano.",
          "También Priya va a ayudar en la mesa de postres.",
          "También necesitamos alguien para la entrada.",
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        scenarios: ["setup vs. teardown", "morning vs. afternoon", "extra duties"],
        examples: [
          "Aparte de eso, alguien tiene que recoger las sillas al final.",
          "Aparte de eso, hay turnos de mañana y de tarde.",
          "Aparte de eso, buscamos un traductor para las familias nuevas.",
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        scenarios: ["teachers and staff", "setup and during", "help and supervise"],
        examples: [
          "No solo montamos el evento, sino también supervisamos a los estudiantes.",
          "No solo ayudan los maestros, sino también el personal de la oficina.",
          "No solo trabajamos el sábado, sino también el viernes por la noche.",
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        scenarios: ["more signups than expected", "parents volunteering too", "full roster"],
        examples: [
          "Encima, diez familias se ofrecieron a ayudar.",
          "Encima, casi todos los maestros ya tienen un turno.",
          "Encima, la lista de voluntarios se llenó en un día.",
        ],
      },
    ],
  },
  {
    day: 124,
    theme: "Además: Los estudiantes",
    subtitle: "Students excited and busy — add what they're doing too.",
    frames: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        scenarios: ["another student project", "presentations", "decorations"],
        examples: [
          "Además, mis estudiantes están haciendo un mapa grande del mundo.",
          "Además, varios van a presentar sus países en mini charlas.",
          "Además, pintaron banderas para colgar en el pasillo.",
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        scenarios: ["posters", "practicing", "bringing items from home"],
        examples: [
          "También están diseñando pósters con frases en varios idiomas.",
          "También practican sus presentaciones en clase.",
          "También traen fotos y objetos de sus familias.",
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        scenarios: ["excitement level", "homework connected to the fair", "peer teaching"],
        examples: [
          "Aparte de eso, no paran de hablar del gran día.",
          "Aparte de eso, conectamos la feria con la tarea de geografía.",
          "Aparte de eso, se enseñan palabras nuevas unos a otros.",
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        scenarios: ["learn and create", "read and speak", "fun and work"],
        examples: [
          "No solo están emocionados, sino también muy orgullosos.",
          "No solo hacen pósters, sino también escriben los textos en español.",
          "No solo decoran, sino también explican el significado de cada imagen.",
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        scenarios: ["extra enthusiasm", "students recruiting families", "beyond expectations"],
        examples: [
          "Encima, unos estudiantes convencieron a sus papás de cocinar.",
          "Encima, la clase de quinto quiere hacer un desfile de trajes.",
          "Encima, pidieron más tiempo en el horario escolar para preparar.",
        ],
      },
    ],
  },
  {
    day: 125,
    theme: "Además: El gran día",
    subtitle: "Fair day — everything planned, plus the surprises.",
    frames: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        scenarios: ["unexpected turnout", "extra performances", "bonus moments"],
        examples: [
          "Además, vinieron más familias de las que esperábamos.",
          "Además, la alcaldesa apareció sin avisar.",
          "Además, llovió por la mañana pero el sol salió a mediodía.",
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        scenarios: ["what worked", "who showed up", "what people loved"],
        examples: [
          "También hubo una sorpresa: un grupo de baile improvisado.",
          "También se acabó la comida antes de lo previsto.",
          "También los estudiantes vendieron pulseras para una causa.",
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        scenarios: ["atmosphere", "photos and memories", "community feeling"],
        examples: [
          "Aparte de eso, el patio se sintió como un festival pequeño.",
          "Aparte de eso, sacamos cientos de fotos para el boletín.",
          "Aparte de eso, conocimos familias que casi no venían al colegio.",
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        scenarios: ["success on multiple fronts", "food and music and community", "plan and reality"],
        examples: [
          "No solo funcionó la comida, sino también la música en vivo.",
          "No solo fue divertido, sino también muy emotivo.",
          "No solo cumplimos el plan, sino también lo superamos.",
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        scenarios: ["the cherry on top", "unexpected praise", "already planning next year"],
        examples: [
          "Encima, la directora dijo que quiere repetirlo el año que viene.",
          "Encima, un papá lloró de emoción viendo el desfile.",
          "Encima, recaudamos más fondos de los que pensábamos.",
        ],
      },
    ],
  },
  {
    day: 126,
    theme: "Repaso: Además",
    subtitle: "One fair, five connectors — stack the whole story from idea to gran día.",
    frames: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        scenarios: ["the whole arc", "from idea to execution", "layering the story"],
        examples: [
          "Además, pasamos de una idea suelta a una feria llena de gente.",
          "Además, cada semana se sumó algo nuevo al plan.",
          "Además, las familias se involucraron más de lo que imaginábamos.",
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        scenarios: ["food, music, volunteers", "students and teachers", "everything that got added"],
        examples: [
          "También hubo comida de cinco continentes y música en vivo.",
          "También los estudiantes hicieron pósters y presentaciones.",
          "También casi todos los maestros trabajaron ese sábado.",
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        scenarios: ["community impact", "what lingered after", "lessons learned"],
        examples: [
          "Aparte de eso, el colegio se sintió más unido después.",
          "Aparte de eso, aprendimos a pedir ayuda a tiempo.",
          "Aparte de eso, varias familias nuevas se acercaron a la escuela.",
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        scenarios: ["the fair's double payoff", "celebration and belonging", "fun and purpose"],
        examples: [
          "No solo celebramos la diversidad, sino también la construimos juntos.",
          "No solo comimos bien, sino también escuchamos historias reales.",
          "No solo fue un sábado bonito, sino también un proyecto del colegio entero.",
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        scenarios: ["the best surprise", "the lasting win", "what's next"],
        examples: [
          "Encima, la directora ya quiere hacerlo tradición.",
          "Encima, los estudiantes preguntan cuándo es la próxima.",
          "Encima, nos sentimos orgullosas de nuestro colegio.",
        ],
        note: "Repaso day: five connectors, one story — the same toolkit you drilled all week, now covering the whole arc.",
      },
    ],
  },
];
