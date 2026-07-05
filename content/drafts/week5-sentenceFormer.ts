import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 5 draft — "Además" (days 120–126).
 *
 * Append to content/sentenceFormer/otono.ts. Stems must match week5-frames.ts.
 */
export const week5SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 120,
    theme: "La idea",
    stems: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        hints: {
          que: [
            { es: "la feria va a ser en primavera", en: "the fair will be in spring" },
            { es: "quieren comida y música", en: "they want food and music" },
          ],
        },
        completions: [
          { es: "la idea es celebrar la diversidad", en: "the idea is to celebrate diversity", category: "other" },
          { es: "la directora lo propuso ayer", en: "the principal proposed it yesterday", category: "other" },
          { es: "van a invitar a los exalumnos", en: "they're going to invite alumni", category: "activity" },
          { es: "necesitamos un presupuesto pequeño", en: "we need a small budget", category: "other" },
          { es: "cada clase va a tener un puesto", en: "each class will have a booth", category: "other" },
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        completions: [
          { es: "quieren que las familias participen", en: "they want families to participate", category: "activity" },
          { es: "van a invitar a los exalumnos", en: "they're going to invite alumni", category: "activity" },
          { es: "necesitamos permisos del distrito", en: "we need district permits", category: "other" },
          { es: "hay que reservar el gimnasio", en: "we have to reserve the gym", category: "activity" },
          { es: "varios maestros se ofrecieron", en: "several teachers volunteered", category: "other" },
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        completions: [
          { es: "cada clase va a tener un puesto", en: "each class will have a booth", category: "other" },
          { es: "hay que conseguir permisos", en: "we have to get permits", category: "activity" },
          { es: "quieren música y comida internacional", en: "they want music and international food", category: "food" },
          { es: "falta definir la fecha exacta", en: "the exact date still needs to be set", category: "time" },
          { es: "la directora puede conseguir fondos", en: "the principal can get funding", category: "other" },
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        completions: [
          { es: "van a comer, sino también aprender", en: "they'll eat, but also learn", category: "activity" },
          { es: "es una fiesta, sino también educativa", en: "it's a party, but also educational", category: "opinion" },
          { es: "participan estudiantes, sino también familias", en: "students participate, but families too", category: "other" },
          { es: "celebran la diversidad, sino también la muestran", en: "they celebrate diversity, but also show it", category: "activity" },
          { es: "es divertido, sino también significativo", en: "it's fun, but also meaningful", category: "opinion" },
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        completions: [
          { es: "la directora puede conseguir fondos", en: "the principal can get funding", category: "other" },
          { es: "el gimnasio ya está reservado", en: "the gym is already reserved", category: "other" },
          { es: "varios maestros se ofrecieron a ayudar", en: "several teachers offered to help", category: "other" },
          { es: "las familias ya están entusiasmadas", en: "families are already excited", category: "opinion" },
          { es: "tenemos apoyo del distrito", en: "we have support from the district", category: "other" },
        ],
      },
    ],
  },
  {
    day: 121,
    theme: "La comida",
    stems: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        hints: {
          que: [
            { es: "van arepas de venezuela", en: "arepas from Venezuela are coming" },
            { es: "hay té de marruecos", en: "there's Moroccan tea" },
          ],
        },
        completions: [
          { es: "una mamá trae arepas de venezuela", en: "a mom is bringing arepas from Venezuela", category: "food" },
          { es: "van a servir té de marruecos", en: "they're going to serve Moroccan tea", category: "food" },
          { es: "la familia de lin prepara dumplings", en: "Lin's family is making dumplings", category: "food" },
          { es: "hay familias de seis países", en: "there are families from six countries", category: "other" },
          { es: "falta confirmar dos platos más", en: "two more dishes still need confirming", category: "food" },
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        completions: [
          { es: "van empanadas colombianas", en: "Colombian empanadas are coming", category: "food" },
          { es: "necesitamos etiquetas con ingredientes", en: "we need labels with ingredients", category: "other" },
          { es: "hay que pensar en las alergias", en: "we have to think about allergies", category: "other" },
          { es: "buscamos voluntarios para servir", en: "we're looking for volunteers to serve", category: "activity" },
          { es: "van postres de varios países", en: "desserts from several countries are coming", category: "food" },
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        completions: [
          { es: "cada plato lleva una tarjeta con el país", en: "each dish gets a card with its country", category: "other" },
          { es: "necesitamos mesas largas en el patio", en: "we need long tables in the courtyard", category: "other" },
          { es: "buscamos voluntarios para servir", en: "we're looking for volunteers to serve", category: "activity" },
          { es: "hay que calentar algunos platos", en: "some dishes need reheating", category: "food" },
          { es: "falta contar cuántas porciones hay", en: "we still need to count portions", category: "other" },
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        completions: [
          { es: "prueban comida nueva, sino también escuchan historias", en: "they try new food, but also hear stories", category: "activity" },
          { es: "hay platos mexicanos, sino también vietnamitas", en: "there's Mexican food, but also Vietnamese", category: "food" },
          { es: "es delicioso, sino también educativo", en: "it's delicious, but also educational", category: "opinion" },
          { es: "comen bien, sino también aprenden", en: "they eat well, but also learn", category: "activity" },
          { es: "las familias cocinan, sino también explican", en: "families cook, but also explain", category: "activity" },
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        completions: [
          { es: "el restaurante de la esquina dona postres", en: "the corner restaurant is donating desserts", category: "food" },
          { es: "tenemos una cocina grande para calentar", en: "we have a big kitchen for reheating", category: "other" },
          { es: "las familias traen sus propias mesas", en: "families bring their own tables", category: "other" },
          { es: "sobra comida para los voluntarios", en: "there's extra food for volunteers", category: "food" },
          { es: "el menú superó nuestras expectativas", en: "the menu exceeded our expectations", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 122,
    theme: "La música",
    stems: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        completions: [
          { es: "un papá toca la guitarra en vivo", en: "a dad plays guitar live", category: "activity" },
          { es: "hay un grupo que canta en español", en: "there's a group that sings in Spanish", category: "activity" },
          { es: "reservaron el escenario del auditorio", en: "they reserved the auditorium stage", category: "other" },
          { es: "van a ensayar el viernes", en: "they're going to rehearse on Friday", category: "time" },
          { es: "falta confirmar el horario", en: "the schedule still needs confirming", category: "time" },
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        completions: [
          { es: "van a poner una lista de canciones", en: "they're going to play a playlist", category: "activity" },
          { es: "necesitamos ensayar el viernes", en: "we need to rehearse on Friday", category: "time" },
          { es: "hay que pedir prestados los altavoces", en: "we have to borrow speakers", category: "other" },
          { es: "hay baile de folklore", en: "there's folk dancing", category: "activity" },
          { es: "un exalumno toca el violín", en: "a former student plays violin", category: "activity" },
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        completions: [
          { es: "unas niñas quieren bailar folklore", en: "some girls want to dance folk dances", category: "activity" },
          { es: "hay que hacer un horario de presentaciones", en: "we have to make a performance schedule", category: "time" },
          { es: "la profesora de arte diseña el escenario", en: "the art teacher designs the stage", category: "activity" },
          { es: "necesitamos un técnico de sonido", en: "we need a sound technician", category: "other" },
          { es: "faltan dos números por confirmar", en: "two acts still need confirming", category: "other" },
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        completions: [
          { es: "escuchan música, sino también tocan", en: "they listen to music, but also play", category: "activity" },
          { es: "hay canciones en español, sino también en hindi", en: "there are songs in Spanish, but also in Hindi", category: "activity" },
          { es: "es entretenimiento, sino también aprendizaje", en: "it's entertainment, but also learning", category: "opinion" },
          { es: "los padres tocan, sino también los estudiantes", en: "parents play, but students too", category: "activity" },
          { es: "es bonito, sino también emocionante", en: "it's nice, but also exciting", category: "opinion" },
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        completions: [
          { es: "una exalumna ofreció tocar el violín", en: "a former student offered to play violin", category: "activity" },
          { es: "el departamento de música presta el equipo", en: "the music department lends equipment", category: "other" },
          { es: "el auditorio tiene buen sonido", en: "the auditorium has good sound", category: "opinion" },
          { es: "el programa quedó más largo de lo previsto", en: "the program ended up longer than planned", category: "time" },
          { es: "sobra talento en este colegio", en: "there's extra talent at this school", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 123,
    theme: "Los voluntarios",
    stems: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        completions: [
          { es: "el señor ortiz monta las mesas", en: "Mr. Ortiz sets up the tables", category: "activity" },
          { es: "la señora kim cuida la mesa coreana", en: "Ms. Kim runs the Korean food table", category: "activity" },
          { es: "faltan dos personas para la limpieza", en: "two people are still needed for cleanup", category: "other" },
          { es: "priya ayuda en la mesa de postres", en: "Priya helps at the dessert table", category: "activity" },
          { es: "hay turnos de mañana y tarde", en: "there are morning and afternoon shifts", category: "time" },
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        completions: [
          { es: "me anoté para la configuración temprano", en: "I signed up for early setup", category: "activity" },
          { es: "priya ayuda en la mesa de postres", en: "Priya helps at the dessert table", category: "activity" },
          { es: "necesitamos alguien para la entrada", en: "we need someone for the entrance", category: "other" },
          { es: "el personal de oficina se apuntó", en: "office staff signed up", category: "other" },
          { es: "falta alguien para recoger sillas", en: "someone is still needed to pick up chairs", category: "activity" },
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        completions: [
          { es: "alguien recoge las sillas al final", en: "someone picks up the chairs at the end", category: "activity" },
          { es: "hay turnos de mañana y tarde", en: "there are morning and afternoon shifts", category: "time" },
          { es: "buscamos un traductor para familias nuevas", en: "we're looking for a translator for new families", category: "other" },
          { es: "trabajamos el viernes por la noche", en: "we work Friday night", category: "time" },
          { es: "falta cubrir la última hora", en: "the last hour still needs covering", category: "time" },
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        completions: [
          { es: "montamos el evento, sino también supervisamos", en: "we set up the event, but also supervise", category: "activity" },
          { es: "ayudan maestros, sino también la oficina", en: "teachers help, but office staff too", category: "other" },
          { es: "trabajamos el sábado, sino también el viernes", en: "we work Saturday, but also Friday", category: "time" },
          { es: "servimos comida, sino también traducimos", en: "we serve food, but also translate", category: "activity" },
          { es: "organizamos, sino también animamos", en: "we organize, but also cheer people on", category: "activity" },
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        completions: [
          { es: "diez familias se ofrecieron a ayudar", en: "ten families offered to help", category: "other" },
          { es: "casi todos los maestros tienen turno", en: "almost all teachers have a shift", category: "other" },
          { es: "la lista se llenó en un día", en: "the list filled up in one day", category: "time" },
          { es: "sobra gente para la limpieza", en: "there are extra people for cleanup", category: "other" },
          { es: "nadie se quejó del horario", en: "no one complained about the schedule", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 124,
    theme: "Los estudiantes",
    stems: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        completions: [
          { es: "hacen un mapa grande del mundo", en: "they're making a big world map", category: "activity" },
          { es: "van a presentar sus países", en: "they're going to present their countries", category: "activity" },
          { es: "pintaron banderas para el pasillo", en: "they painted flags for the hallway", category: "activity" },
          { es: "practican mini charlas en clase", en: "they practice mini talks in class", category: "activity" },
          { es: "traen fotos de sus familias", en: "they bring photos from their families", category: "other" },
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        completions: [
          { es: "diseñan pósters en varios idiomas", en: "they design posters in several languages", category: "activity" },
          { es: "practican sus presentaciones", en: "they practice their presentations", category: "activity" },
          { es: "traen objetos de sus familias", en: "they bring objects from their families", category: "other" },
          { es: "escriben los textos en español", en: "they write the text in Spanish", category: "activity" },
          { es: "piden más tiempo para preparar", en: "they ask for more time to prepare", category: "time" },
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        completions: [
          { es: "no paran de hablar del gran día", en: "they won't stop talking about the big day", category: "opinion" },
          { es: "conectamos la feria con geografía", en: "we connect the fair to geography class", category: "activity" },
          { es: "se enseñan palabras nuevas", en: "they teach each other new words", category: "activity" },
          { es: "decoran todo el pasillo", en: "they decorate the whole hallway", category: "activity" },
          { es: "invitan a sus familias personalmente", en: "they personally invite their families", category: "activity" },
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        completions: [
          { es: "están emocionados, sino también orgullosos", en: "they're excited, but also proud", category: "opinion" },
          { es: "hacen pósters, sino también escriben textos", en: "they make posters, but also write text", category: "activity" },
          { es: "decoran, sino también explican cada imagen", en: "they decorate, but also explain each image", category: "activity" },
          { es: "aprenden, sino también enseñan", en: "they learn, but also teach", category: "activity" },
          { es: "trabajan duro, sino también se divierten", en: "they work hard, but also have fun", category: "opinion" },
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        completions: [
          { es: "unos convencieron a sus papás de cocinar", en: "some convinced their parents to cook", category: "activity" },
          { es: "quinto quiere hacer un desfile de trajes", en: "fifth grade wants a costume parade", category: "activity" },
          { es: "pidieron más tiempo en clase", en: "they asked for more class time", category: "time" },
          { es: "los más tímidos también participan", en: "even the shyest ones are participating", category: "opinion" },
          { es: "llenaron el pasillo de color", en: "they filled the hallway with color", category: "other" },
        ],
      },
    ],
  },
  {
    day: 125,
    theme: "El gran día",
    stems: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        completions: [
          { es: "vinieron más familias de las esperadas", en: "more families came than expected", category: "other" },
          { es: "apareció la alcaldesa sin avisar", en: "the mayor showed up unannounced", category: "other" },
          { es: "llovió por la mañana pero salió el sol", en: "it rained in the morning but the sun came out", category: "time" },
          { es: "hubo una actuación sorpresa", en: "there was a surprise performance", category: "activity" },
          { es: "se acabó la comida temprano", en: "the food ran out early", category: "food" },
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        completions: [
          { es: "hubo un grupo de baile improvisado", en: "there was an improvised dance group", category: "activity" },
          { es: "se acabó la comida antes de lo previsto", en: "the food ran out sooner than planned", category: "food" },
          { es: "vendieron pulseras para una causa", en: "they sold bracelets for a cause", category: "activity" },
          { es: "sacamos cientos de fotos", en: "we took hundreds of photos", category: "activity" },
          { es: "conocimos familias nuevas", en: "we met new families", category: "other" },
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        completions: [
          { es: "el patio se sintió como un festival", en: "the courtyard felt like a festival", category: "opinion" },
          { es: "sacamos fotos para el boletín", en: "we took photos for the newsletter", category: "activity" },
          { es: "conocimos familias que casi no venían", en: "we met families who hardly ever came", category: "other" },
          { es: "el ambiente fue muy cálido", en: "the atmosphere was very warm", category: "opinion" },
          { es: "todos sonrieron todo el día", en: "everyone smiled all day", category: "opinion" },
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        completions: [
          { es: "funcionó la comida, sino también la música", en: "the food worked, but the music too", category: "activity" },
          { es: "fue divertido, sino también emotivo", en: "it was fun, but also moving", category: "opinion" },
          { es: "cumplimos el plan, sino también lo superamos", en: "we met the plan, but also exceeded it", category: "opinion" },
          { es: "comieron bien, sino también bailaron", en: "they ate well, but also danced", category: "activity" },
          { es: "celebramos, sino también conectamos", en: "we celebrated, but also connected", category: "activity" },
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        completions: [
          { es: "la directora quiere repetirlo el año que viene", en: "the principal wants to repeat it next year", category: "time" },
          { es: "un papá lloró de emoción", en: "a dad cried from emotion", category: "opinion" },
          { es: "recaudamos más fondos de los pensados", en: "we raised more funds than we thought", category: "other" },
          { es: "los estudiantes no querían que terminara", en: "the students didn't want it to end", category: "opinion" },
          { es: "fue el mejor sábado del colegio", en: "it was the school's best Saturday", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 126,
    theme: "Repaso: además",
    stems: [
      {
        stem: "Además…",
        english: "What's more… / Additionally…",
        completions: [
          { es: "pasamos de una idea a una feria llena", en: "we went from an idea to a packed fair", category: "other" },
          { es: "cada semana se sumó algo nuevo", en: "each week something new was added", category: "time" },
          { es: "las familias se involucraron más", en: "families got more involved", category: "other" },
          { es: "el colegio entero participó", en: "the whole school participated", category: "other" },
          { es: "aprendimos a pedir ayuda a tiempo", en: "we learned to ask for help in time", category: "other" },
        ],
      },
      {
        stem: "También…",
        english: "Also… / …too",
        completions: [
          { es: "hubo comida de cinco continentes", en: "there was food from five continents", category: "food" },
          { es: "los estudiantes hicieron pósters", en: "the students made posters", category: "activity" },
          { es: "casi todos los maestros trabajaron", en: "almost all teachers worked", category: "other" },
          { es: "hubo música en vivo todo el día", en: "there was live music all day", category: "activity" },
          { es: "recaudamos fondos para el colegio", en: "we raised funds for the school", category: "other" },
        ],
      },
      {
        stem: "Aparte de eso…",
        english: "On top of that… / Besides that…",
        completions: [
          { es: "el colegio se sintió más unido", en: "the school felt more united", category: "opinion" },
          { es: "aprendimos a pedir ayuda a tiempo", en: "we learned to ask for help in time", category: "other" },
          { es: "familias nuevas se acercaron a la escuela", en: "new families approached the school", category: "other" },
          { es: "los estudiantes ganaron confianza", en: "the students gained confidence", category: "opinion" },
          { es: "quedaron fotos para recordar", en: "photos remain to remember", category: "other" },
        ],
      },
      {
        stem: "No solo… sino también…",
        english: "Not only… but also…",
        completions: [
          { es: "celebramos la diversidad, sino también la construimos", en: "we celebrated diversity, but also built it", category: "activity" },
          { es: "comimos bien, sino también escuchamos historias", en: "we ate well, but also heard stories", category: "activity" },
          { es: "fue un sábado bonito, sino también un proyecto entero", en: "it was a nice Saturday, but also a whole project", category: "opinion" },
          { es: "divertimos, sino también educamos", en: "we entertained, but also educated", category: "activity" },
          { es: "planeamos, sino también improvisamos", en: "we planned, but also improvised", category: "activity" },
        ],
      },
      {
        stem: "Encima…",
        english: "On top of that… / And as if that weren't enough…",
        completions: [
          { es: "la directora quiere hacerlo tradición", en: "the principal wants to make it a tradition", category: "other" },
          { es: "los estudiantes preguntan cuándo es la próxima", en: "students ask when the next one is", category: "time" },
          { es: "nos sentimos orgullosas del colegio", en: "we feel proud of our school", category: "opinion" },
          { es: "el distrito quiere destacarlo", en: "the district wants to highlight it", category: "other" },
          { es: "ya estamos hablando del año que viene", en: "we're already talking about next year", category: "time" },
        ],
      },
    ],
  },
];
