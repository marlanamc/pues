import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 8 — "Temas grandes" (days 323–329).
 * Stems must match content/drafts/primavera/week8-frames.ts for the same day.
 */
export const priWeek8SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 323,
    theme: "La pregunta de Yesenia",
    stems: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is…",
        completions: [
          { es: "que le di la respuesta fácil", en: "that i gave her the easy answer", category: "opinion" },
          { es: "que la pregunta era buena y yo no", en: "that the question was good and i wasn't", category: "opinion" },
          { es: "no tener nada concreto que ofrecerle", en: "having nothing concrete to offer her", category: "other" },
          { es: "que se me ocurrió la respuesta en el carro", en: "that i thought of the answer in the car", category: "time" },
          { es: "que nadie me preparó para esa pregunta", en: "that nobody prepared me for that question", category: "other" },
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        completions: [
          { es: "ella sale de la cocina a las seis", en: "she gets out of the kitchen at six", category: "time" },
          { es: "no pregunta por el inglés, pregunta por el tiempo", en: "she's not asking about english, she's asking about time", category: "other" },
          { es: "la clase le queda lejos de la casa", en: "the class is far from her house", category: "other" },
          { es: "nadie le explicó para qué le sirve a ella", en: "nobody explained what it's for, for her", category: "other" },
          { es: "yo tampoco tenía la respuesta", en: "i didn't have the answer either", category: "opinion" },
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive)",
        completions: [
          { es: "no quiera aprender, es que está agotada", en: "she doesn't want to learn — she's exhausted", category: "opinion" },
          { es: "le aburra la clase, es que le cuesta llegar", en: "the class bores her — it's hard for her to get there", category: "opinion" },
          { es: "dude del inglés, es que duda del tiempo", en: "she doubts english — she doubts the time", category: "other" },
          { es: "sea floja, es que trabaja doble turno", en: "she's lazy — she works a double shift", category: "activity" },
          { es: "me falte respuesta, es que la buena tarda", en: "i have no answer — the good one takes a while", category: "other" },
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        completions: [
          { es: "una mujer que llega después de ocho horas", en: "a woman who arrives after eight hours", category: "activity" },
          { es: "que los que más faltan viven más lejos", en: "that the ones who miss most live farthest", category: "other" },
          { es: "una clase llena de gente cansada y despierta", en: "a class full of people who are tired and awake", category: "other" },
          { es: "que vuelven cada jueves sin que nadie los obligue", en: "that they come back every thursday with nobody making them", category: "time" },
          { es: "que la pregunta se la hacen todos y solo ella la dijo", en: "that they all ask it and only she said it out loud", category: "opinion" },
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do?",
        completions: [
          { es: "porque \"oportunidades\" no le alcanza", en: "because \"opportunities\" isn't enough for her", category: "other" },
          { es: "si te lo preguntara un paciente", en: "if a patient asked you that", category: "other" },
          { es: "con cuatro horas menos de sueño", en: "on four hours less sleep", category: "time" },
          { es: "en mi lugar, el jueves que viene", en: "in my place, next thursday", category: "time" },
          { es: "para contestarle sin mentirle", en: "to answer her without lying to her", category: "other" },
        ],
      },
    ],
  },
  {
    day: 324,
    theme: "La tarea que no escribió",
    stems: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is…",
        completions: [
          { es: "que pensó que yo no me iba a dar cuenta", en: "that he thought i wouldn't notice", category: "opinion" },
          { es: "tener que jugar al detective", en: "having to play detective", category: "activity" },
          { es: "que la app escribe mejor que yo a su edad", en: "that the app writes better than i did at his age", category: "opinion" },
          { es: "que nadie me dice cuál es la regla", en: "that nobody tells me what the rule is", category: "other" },
          { es: "perder la clase entera en esto", en: "losing the whole class over this", category: "time" },
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        completions: [
          { es: "él sí puede hablar del libro", en: "he can talk about the book", category: "other" },
          { es: "en voz alta se explica y en la hoja se congela", en: "out loud he explains himself and on the page he freezes", category: "activity" },
          { es: "le pedí un párrafo y nunca le enseñé a empezarlo", en: "i asked for a paragraph and never taught him to start one", category: "other" },
          { es: "la app no le da miedo y yo sí", en: "the app doesn't scare him and i do", category: "opinion" },
          { es: "el problema empieza antes de la primera frase", en: "the problem starts before the first sentence", category: "other" },
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive)",
        completions: [
          { es: "haya hecho trampa, es que nadie le enseñó", en: "he cheated — nobody taught him", category: "opinion" },
          { es: "sea flojo, es que le da pánico entregar algo a medias", en: "he's lazy — he panics handing in something half-done", category: "opinion" },
          { es: "la app piense por él, es que él no sabe empezar", en: "the app thinks for him — he doesn't know how to start", category: "other" },
          { es: "yo esté enojada, es que estoy preocupada", en: "i'm angry — i'm worried", category: "opinion" },
          { es: "quiera castigarlo, es que quiero entenderlo", en: "i want to punish him — i want to understand him", category: "other" },
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        completions: [
          { es: "un chico con miedo de entregar algo feo", en: "a kid afraid to hand in something ugly", category: "opinion" },
          { es: "que nunca me ha entregado nada tachado", en: "that he's never handed me anything crossed out", category: "other" },
          { es: "que habla mejor de lo que escribe", en: "that he talks better than he writes", category: "activity" },
          { es: "que copió del miedo, no de la flojera", en: "that he copied out of fear, not laziness", category: "opinion" },
          { es: "que se le nota en la cara cuando le pregunto", en: "that it shows on his face when i ask him", category: "other" },
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do?",
        completions: [
          { es: "el lunes, con él enfrente", en: "on monday, with him in front of you", category: "time" },
          { es: "si en el hospital alguien copiara un informe", en: "if someone at the hospital copied a report", category: "other" },
          { es: "hablar con él o hablar con la mamá", en: "talk to him or talk to the mom", category: "other" },
          { es: "sin humillarlo delante de nadie", en: "without humiliating him in front of anyone", category: "other" },
          { es: "porque reprobarlo no le enseña nada", en: "because failing him teaches him nothing", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 325,
    theme: "Solo inglés en casa",
    stems: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is…",
        completions: [
          { es: "que alguien le dijo que el español era el problema", en: "that somebody told her spanish was the problem", category: "opinion" },
          { es: "que llegó pidiendo permiso para su propio idioma", en: "that she came asking permission for her own language", category: "other" },
          { es: "que esa idea salió de una escuela", en: "that the idea came from a school", category: "other" },
          { es: "que se lo dijeron con toda confianza", en: "that they told her that with total confidence", category: "other" },
          { es: "no haberle contestado en el momento", en: "not having answered her right then", category: "time" },
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        completions: [
          { es: "no me pide quitar el español, me pide ayuda", en: "she's not asking me to remove spanish, she's asking for help", category: "other" },
          { es: "ella no entiende las cartas de la escuela", en: "she doesn't understand the letters from school", category: "other" },
          { es: "quiere ayudarlo y no sabe por dónde", en: "she wants to help him and doesn't know where to start", category: "opinion" },
          { es: "en la casa el español es la abuela", en: "at home spanish is the grandmother", category: "other" },
          { es: "nadie le ha explicado cómo funciona el bilingüismo", en: "nobody has explained to her how bilingualism works", category: "other" },
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive)",
        completions: [
          { es: "le dé pena el idioma, es que está cansada", en: "she's ashamed of the language — she's tired", category: "opinion" },
          { es: "odie el español, es que odia quedarse afuera", en: "she hates spanish — she hates being left out", category: "opinion" },
          { es: "quiera perder algo, es que le dijeron que así se gana", en: "she wants to lose something — they told her that's how you win", category: "other" },
          { es: "no confíe en mí, es que confía más en el miedo", en: "she doesn't trust me — she trusts the fear more", category: "opinion" },
          { es: "sea una mala idea suya, es que es de otro", en: "it's a bad idea of hers — it's someone else's", category: "other" },
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        completions: [
          { es: "una niña de ocho años traduciendo en el consultorio", en: "an eight-year-old translating at the doctor's office", category: "other" },
          { es: "que Diego lee mejor cuando lee en los dos", en: "that diego reads better when he reads in both", category: "activity" },
          { es: "que el español en esa casa es cariño, no materia", en: "that spanish in that house is affection, not a subject", category: "opinion" },
          { es: "que la mamá se calla en las reuniones", en: "that the mom goes quiet in meetings", category: "other" },
          { es: "que el niño traduce y nadie se lo agradece", en: "that the kid translates and nobody thanks him", category: "other" },
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do?",
        completions: [
          { es: "tú has estado del lado de ella", en: "you've been on her side", category: "other" },
          { es: "si te lo pidiera una mamá en el hospital", en: "if a mom at the hospital asked you that", category: "other" },
          { es: "para decírselo sin sonar a sermón", en: "to tell her without sounding like a lecture", category: "other" },
          { es: "con diez minutos y una traductora al lado", en: "with ten minutes and an interpreter beside you", category: "time" },
          { es: "en la próxima reunión de padres", en: "at the next parent meeting", category: "time" },
        ],
      },
    ],
  },
  {
    day: 326,
    theme: "Cortan la clase de la noche",
    stems: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is…",
        completions: [
          { es: "que lo llamaron \"poca inscripción\"", en: "that they called it \"low enrollment\"", category: "other" },
          { es: "que me enteré por un correo de dos líneas", en: "that i found out from a two-line email", category: "other" },
          { es: "que nadie le preguntó a nadie de esa clase", en: "that nobody asked anyone in that class", category: "opinion" },
          { es: "que lo decidieron en febrero y lo dijeron ayer", en: "that they decided in february and said so yesterday", category: "time" },
          { es: "tener que explicárselo yo a Yesenia", en: "having to be the one to explain it to yesenia", category: "activity" },
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        completions: [
          { es: "a las cuatro de la tarde todos están trabajando", en: "at four in the afternoon everyone is working", category: "time" },
          { es: "la clase de la noche es la única que les queda", en: "the night class is the only one left for them", category: "other" },
          { es: "contaron las sillas en enero y no en marzo", en: "they counted the seats in january, not march", category: "time" },
          { es: "once personas no pueden cambiar de turno", en: "eleven people can't switch shifts", category: "other" },
          { es: "el horario nuevo no existe para ellos", en: "the new schedule doesn't exist for them", category: "other" },
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive)",
        completions: [
          { es: "no haya dinero, es que somos lo más fácil de cortar", en: "there's no money — we're the easiest thing to cut", category: "other" },
          { es: "la clase esté vacía, es que la contaron mal", en: "the class is empty — they counted it wrong", category: "other" },
          { es: "a nadie le importe, es que nadie de esa clase vota aquí", en: "nobody cares — nobody in that class votes here", category: "opinion" },
          { es: "sea una decisión nueva, es que ya estaba tomada", en: "it's a new decision — it was already made", category: "time" },
          { es: "quiera pelear, es que quiero que la muevan", en: "i want to fight — i want them to move it", category: "other" },
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        completions: [
          { es: "que la clase que se llena es la que cierran", en: "that the class that fills up is the one they're closing", category: "other" },
          { es: "gente que llega con el uniforme puesto", en: "people who arrive still in uniform", category: "other" },
          { es: "una lista de espera de catorce personas", en: "a waiting list of fourteen people", category: "other" },
          { es: "que la sala de las siete nunca tiene sillas libres", en: "that the seven o'clock room never has empty chairs", category: "time" },
          { es: "que cortaron la única que funcionaba", en: "that they cut the only one that worked", category: "opinion" },
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do?",
        completions: [
          { es: "escribirles o presentarte en la reunión", en: "write to them or show up at the meeting", category: "other" },
          { es: "hablar con la directora o con las familias", en: "talk to the principal or to the families", category: "other" },
          { es: "si fuera tu turno el que quitan", en: "if it were your shift they were taking away", category: "other" },
          { es: "con una semana antes de la votación", en: "with one week before the vote", category: "time" },
          { es: "en mi lugar, sin sonar a queja", en: "in my place, without sounding like a complaint", category: "other" },
        ],
      },
    ],
  },
  {
    day: 327,
    theme: "El examen del estado",
    stems: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is…",
        completions: [
          { es: "que los evalúan en inglés sobre lo que ya saben", en: "that they test them in english on what they already know", category: "other" },
          { es: "perder dos semanas preparando un examen", en: "losing two weeks prepping for a test", category: "time" },
          { es: "que el número sale en el periódico y el niño no", en: "that the number makes the paper and the kid doesn't", category: "opinion" },
          { es: "que a mí me califican con esa nota también", en: "that they grade me with that score too", category: "other" },
          { es: "no poder explicarle la nota a la mamá", en: "not being able to explain the score to the mom", category: "activity" },
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        completions: [
          { es: "la nota mide el inglés y la leen como si midiera al niño", en: "the score measures english and they read it as if it measured the kid", category: "other" },
          { es: "fallan en el enunciado, no en las matemáticas", en: "they fail on the wording, not the math", category: "other" },
          { es: "el examen es de lectura disfrazado de todo lo demás", en: "the test is a reading test dressed up as everything else", category: "opinion" },
          { es: "se rinden en la página tres", en: "they give up on page three", category: "other" },
          { es: "nadie mira la nota del año pasado", en: "nobody looks at last year's score", category: "time" },
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive)",
        completions: [
          { es: "esté en contra de los exámenes, es que este no dice nada", en: "i'm against tests — this one says nothing", category: "opinion" },
          { es: "no quiera datos, es que quiero datos de lo que enseñé", en: "i don't want data — i want data on what i taught", category: "other" },
          { es: "el examen mienta, es que contesta otra pregunta", en: "the test lies — it answers a different question", category: "opinion" },
          { es: "los chicos no sepan, es que no lo saben en inglés todavía", en: "the kids don't know — they don't know it in english yet", category: "other" },
          { es: "sea injusto conmigo, es que es injusto con ellos", en: "it's unfair to me — it's unfair to them", category: "opinion" },
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        completions: [
          { es: "a Diego explicando fracciones y sacando un dos", en: "diego explaining fractions and scoring a two", category: "other" },
          { es: "que los mismos chicos sacan la misma nota cada año", en: "that the same kids get the same score every year", category: "time" },
          { es: "que en octubre ya sabía este resultado", en: "that i already knew this result in october", category: "time" },
          { es: "que la nota sube cuando sube el inglés, nada más", en: "that the score goes up when the english goes up, nothing else", category: "other" },
          { es: "que se rinden antes de llegar a lo que saben", en: "that they give up before reaching what they know", category: "other" },
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do?",
        completions: [
          { es: "si calificaran tu turno en otro idioma", en: "if they graded your shift in another language", category: "other" },
          { es: "con esa nota en la mano y la mamá enfrente", en: "with that score in hand and the mom in front of you", category: "other" },
          { es: "preparar el examen o enseñar el año", en: "prep for the test or teach the year", category: "time" },
          { es: "para que el número no sea la historia entera", en: "so the number isn't the whole story", category: "other" },
          { es: "el día que llegan los resultados", en: "the day the results come in", category: "time" },
        ],
      },
    ],
  },
  {
    day: 328,
    theme: "Lo que voy a decir el martes",
    stems: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is…",
        completions: [
          { es: "que tengo tres minutos y gasté dos en mi cargo", en: "that i have three minutes and spent two on my job title", category: "time" },
          { es: "que suena a queja y quiero que suene a propuesta", en: "that it sounds like a complaint and i want a proposal", category: "opinion" },
          { es: "tener que pedir algo que ya existía", en: "having to ask for something that already existed", category: "other" },
          { es: "que me tiemble la voz al principio", en: "that my voice shakes at the start", category: "other" },
          { es: "no saber a quién mirar cuando hablo", en: "not knowing who to look at while i talk", category: "activity" },
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        completions: [
          { es: "si yo digo números, ellos contestan con números", en: "if i give numbers, they answer with numbers", category: "other" },
          { es: "ya tienen la hoja de cálculo y yo no la voy a ganar", en: "they already have the spreadsheet and i'm not going to beat it", category: "other" },
          { es: "tengo un solo ejemplo bueno y lo puse al final", en: "i have one good example and i put it last", category: "other" },
          { es: "tres minutos pasan más rápido de pie", en: "three minutes go faster standing up", category: "time" },
          { es: "lo que quiero cabe en una frase y me da miedo decirla", en: "what i want fits in one sentence and i'm scared to say it", category: "opinion" },
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive)",
        completions: [
          { es: "quiera que se sientan mal, es que quiero la clase a las siete", en: "i want them to feel bad — i want the class at seven", category: "other" },
          { es: "pida dinero nuevo, es que pido el mismo salón más tarde", en: "i'm asking for new money — i'm asking for the same room later", category: "other" },
          { es: "vaya a discutir, es que voy con una fecha", en: "i'm going to argue — i'm going with a date", category: "time" },
          { es: "no confíe en ellos, es que confío más en Yesenia", en: "i don't trust them — i trust yesenia more", category: "opinion" },
          { es: "esté nerviosa, es que me importa demasiado", en: "i'm nervous — i care too much", category: "opinion" },
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        completions: [
          { es: "que me escuchan si llevo a Yesenia y no una gráfica", en: "that they listen if i bring yesenia and not a chart", category: "other" },
          { es: "que la sala se despierta cuando habla alguien de afuera", en: "that the room wakes up when an outsider speaks", category: "other" },
          { es: "que tres minutos alcanzan para una historia", en: "that three minutes are enough for one story", category: "time" },
          { es: "que nadie lee la carta y todos oyen la voz", en: "that nobody reads the letter and everybody hears the voice", category: "other" },
          { es: "que la petición tiene que ir al final", en: "that the ask has to come last", category: "other" },
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do?",
        completions: [
          { es: "párame si empiezo a sonar a informe", en: "stop me if i start sounding like a report", category: "other" },
          { es: "con el final: la petición o la historia", en: "with the ending: the ask or the story", category: "other" },
          { es: "si te dan tres minutos y te tiembla la voz", en: "if they give you three minutes and your voice shakes", category: "other" },
          { es: "quitar la primera frase o quitar la última", en: "cut the first sentence or cut the last", category: "other" },
          { es: "el martes a las cinco, en mi lugar", en: "tuesday at five, in my place", category: "time" },
        ],
      },
    ],
  },
  {
    day: 329,
    theme: "En el pasillo con Rocío",
    stems: [
      {
        stem: "A mí lo que me molesta es…",
        english: "What bugs me is…",
        completions: [
          { es: "que te enteraste por el boletín", en: "that you found out from the newsletter", category: "other" },
          { es: "que lo pusieron en la página cuatro", en: "that they put it on page four", category: "other" },
          { es: "que ya lo habían decidido en febrero", en: "that they'd already decided in february", category: "time" },
          { es: "que a ti tampoco te avisaron", en: "that they didn't tell you either", category: "other" },
          { es: "hablar de esto junto a la copiadora", en: "talking about this next to the copier", category: "activity" },
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "Here's what's going on… / The thing is…",
        completions: [
          { es: "nadie de esa clase está libre a esa hora tampoco", en: "nobody from that class is free at that hour either", category: "time" },
          { es: "la reunión es el martes a las cinco", en: "the meeting is tuesday at five", category: "time" },
          { es: "hasta la reunión sobre la clase de la noche es de día", en: "even the meeting about the night class is during the day", category: "other" },
          { es: "tengo cuatro minutos antes del timbre", en: "i have four minutes before the bell", category: "time" },
          { es: "tú ya sabes cómo termina esto", en: "you already know how this ends", category: "opinion" },
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that… (+ subjunctive)",
        completions: [
          { es: "no quiera ir sola, es que sola soy una maestra quejándose", en: "i don't want to go alone — alone i'm one teacher complaining", category: "opinion" },
          { es: "me dé miedo hablar, es que me da miedo hablar por otros", en: "i'm scared to speak — i'm scared to speak for others", category: "opinion" },
          { es: "necesite ayuda, es que necesito que seamos dos", en: "i need help — i need there to be two of us", category: "other" },
          { es: "no te crea, es que quiero oírtelo decir", en: "i don't believe you — i want to hear you say it", category: "other" },
          { es: "sea urgente hoy, es que el martes ya es tarde", en: "it's urgent today — by tuesday it's too late", category: "time" },
        ],
      },
      {
        stem: "Yo lo que veo es…",
        english: "What I see is… / From where I'm standing…",
        completions: [
          { es: "que tú ya hiciste esto antes", en: "that you've done this before", category: "other" },
          { es: "que a ti te contestan los correos el mismo día", en: "that people answer your emails the same day", category: "time" },
          { es: "que en este pasillo se decide más que en esa sala", en: "that more gets decided in this hallway than in that room", category: "opinion" },
          { es: "que sabes con quién hablar primero", en: "that you know who to talk to first", category: "other" },
          { es: "que si vas tú, van otros", en: "that if you go, others go", category: "other" },
        ],
      },
      {
        stem: "¿Tú qué harías?",
        english: "What would you do?",
        completions: [
          { es: "ir el martes o esperar la votación", en: "go tuesday or wait for the vote", category: "time" },
          { es: "en mi lugar, con cuatro minutos", en: "in my place, with four minutes", category: "time" },
          { es: "si te dijeran que ya está decidido", en: "if they told you it was already decided", category: "other" },
          { es: "llamar a las familias o esperar al lunes", en: "call the families or wait until monday", category: "other" },
          { es: "porque yo ya no sé por dónde empezar", en: "because i don't know where to start anymore", category: "opinion" },
        ],
      },
    ],
  },
];
