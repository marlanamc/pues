import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 7 — "Cambiar de registro" (days 316–322).
 * Stems must match content/drafts/primavera/week7-frames.ts for the same day.
 */
export const priWeek7SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 316,
    theme: "Ensayando con Rocío",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "disculpe, ¿tendría un momento antes de que empiece la fila?", en: "excuse me, would you have a moment before the line starts?", category: "other" },
          { es: "disculpe, señora, ¿tendría un momento para sentarnos?", en: "excuse me, ma'am, would you have a moment to sit down?", category: "other" },
          { es: "disculpe, ¿tendría un momentito?", en: "excuse me, would you have a quick moment?", category: "other" },
          { es: "no le quito mucho tiempo", en: "i won't take much of your time", category: "time" },
          { es: "¿tendría un momento después de clase?", en: "would you have a moment after class?", category: "time" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "yusuf ha mejorado mucho en participar", en: "yusuf has improved a lot in participating", category: "other" },
          { es: "su hija es de las que ayudan sin que se lo pidan", en: "her daughter is one of those who help without being asked", category: "other" },
          { es: "me gusta cómo pregunta en clase", en: "i like how she asks questions in class", category: "opinion" },
          { es: "su hijo lee más que en septiembre", en: "her son reads more than in september", category: "other" },
          { es: "tengo buenas noticias de esta semana", en: "i have good news from this week", category: "other" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "por qué cambiamos el horario", en: "why we changed the schedule", category: "other" },
          { es: "es un poco largo", en: "it's a little long", category: "other" },
          { es: "cómo leemos en esta clase", en: "how we read in this class", category: "activity" },
          { es: "cómo funciona la tarea", en: "how the homework works", category: "activity" },
          { es: "antes de mostrarle la carpeta", en: "before showing you the folder", category: "activity" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "señora martínez", en: "mrs. martínez", category: "other" },
          { es: "y por venir hoy", en: "and for coming today", category: "time" },
          { es: "sé que trabaja hasta tarde", en: "i know you work late", category: "time" },
          { es: "de verdad", en: "really", category: "other" },
          { es: "y por las preguntas", en: "and for the questions", category: "other" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "con permiso… ¿tendría un momento?", en: "excuse me… would you have a moment?", category: "other" },
          { es: "no quise interrumpir", en: "i didn't mean to interrupt", category: "other" },
          { es: "me equivoqué de nombre hace un momento", en: "i got the name wrong a moment ago", category: "other" },
          { es: "¿puedo pasar un segundo?", en: "can i come in for a second?", category: "other" },
          { es: "disculpe, me corrijo", en: "excuse me, let me correct myself", category: "other" },
        ],
      },
    ],
  },
  {
    day: 317,
    theme: "La primera madre",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "disculpe, ¿tendría un momento? la mesa está por aquí", en: "excuse me, would you have a moment? the table is over here", category: "other" },
          { es: "disculpe, señora lópez, ¿tendría un momento ahora?", en: "excuse me, mrs. lópez, would you have a moment now?", category: "other" },
          { es: "disculpe — ¿tendría un momentito?", en: "excuse me — would you have a quick moment?", category: "other" },
          { es: "le explico en dos minutos", en: "i'll explain in two minutes", category: "time" },
          { es: "preferiría que nos sentáramos", en: "i'd prefer we sit down", category: "activity" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "mateo lee en voz alta sin miedo ahora", en: "mateo reads aloud without fear now", category: "activity" },
          { es: "participa más que en septiembre", en: "he participates more than in september", category: "other" },
          { es: "me escribe cosas interesantes en el cuaderno", en: "he writes interesting things in his notebook", category: "activity" },
          { es: "ha mejorado en lectura", en: "he has improved in reading", category: "other" },
          { es: "me pide ayuda después de clase", en: "he asks me for help after class", category: "activity" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "cómo leemos aquí? no es como en su país", en: "how we read here? it's not like in your country", category: "other" },
          { es: "la tarea de esta semana", en: "this week's homework", category: "activity" },
          { es: "por qué no hay nota todavía", en: "why there isn't a grade yet", category: "other" },
          { es: "cómo puede ayudarlo en casa", en: "how she can help him at home", category: "activity" },
          { es: "el sistema de lectura", en: "the reading system", category: "other" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "sé que tiene otro hijo en tercero", en: "i know you have another child in third grade", category: "other" },
          { es: "y por las preguntas", en: "and for the questions", category: "other" },
          { es: "de verdad", en: "really", category: "other" },
          { es: "y por venir", en: "and for coming", category: "other" },
          { es: "la llamo si hay novedad", en: "i'll call if there's news", category: "activity" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "disculpe, ¿cómo se pronuncia su apellido?", en: "excuse me, how do you pronounce your last name?", category: "other" },
          { es: "con permiso — busco la carpeta de mateo", en: "excuse me — i'm looking for mateo's folder", category: "activity" },
          { es: "me equivoqué — quería decir lectura, no matemáticas", en: "i misspoke — i meant reading, not math", category: "other" },
          { es: "disculpe, no quise sonar fría", en: "excuse me, i didn't mean to sound cold", category: "opinion" },
          { es: "¿prefiere que hablemos más despacio?", en: "would you prefer we speak more slowly?", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 318,
    theme: "Un momento difícil",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "disculpe, ¿tendría un momento más? no hemos terminado", en: "excuse me, would you have a moment more? we haven't finished", category: "time" },
          { es: "disculpe, señora — ¿tendría cinco minutos más?", en: "excuse me, ma'am — would you have five more minutes?", category: "time" },
          { es: "disculpe, ¿tendría un momento?", en: "excuse me, would you have a moment?", category: "other" },
          { es: "preferiría que nos sentáramos", en: "i'd prefer we sit down", category: "activity" },
          { es: "no hemos terminado de hablar", en: "we haven't finished talking", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "su hijo no es vago — le cuesta la lectura en inglés", en: "your son isn't lazy — english reading is hard for him", category: "other" },
          { es: "entrega la tarea, aunque tarde", en: "he turns in homework, even if late", category: "activity" },
          { es: "me pide ayuda después de clase", en: "he asks me for help after class", category: "activity" },
          { es: "entiende cuando le leo en voz alta", en: "he understands when i read aloud to him", category: "activity" },
          { es: "sola, se traba", en: "alone, he gets stuck", category: "other" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "cómo calculamos la nota", en: "how we calculate the grade", category: "other" },
          { es: "qué puede hacer en casa", en: "what she can do at home", category: "activity" },
          { es: "no es que no quiera aprender", en: "it's not that she doesn't want to learn", category: "opinion" },
          { es: "por qué la nota se ve así", en: "why the grade looks like this", category: "other" },
          { es: "qué apoyo hay en el colegio", en: "what support there is at school", category: "other" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "entiendo que esto no es fácil", en: "i understand this isn't easy", category: "opinion" },
          { es: "y por escucharme", en: "and for listening to me", category: "other" },
          { es: "la llamo la semana que viene", en: "i'll call you next week", category: "time" },
          { es: "y por venir hoy", en: "and for coming today", category: "time" },
          { es: "podemos hablar otra vez si quiere", en: "we can talk again if you'd like", category: "activity" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "disculpe, déjeme decirlo de otra forma", en: "excuse me, let me say it another way", category: "other" },
          { es: "con permiso — ¿prefiere que hablemos con un intérprete?", en: "excuse me — would you prefer we speak with an interpreter?", category: "activity" },
          { es: "disculpe, no quise sonar fría. le explico mejor", en: "excuse me, i didn't mean to sound cold. let me explain better", category: "opinion" },
          { es: "¿puedo repetirlo más despacio?", en: "can i repeat it more slowly?", category: "activity" },
          { es: "me equivoqué de palabra", en: "i used the wrong word", category: "other" },
        ],
      },
    ],
  },
  {
    day: 319,
    theme: "La misma frase, en tú",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "necesito contarte la conferencia", en: "i need to tell you about the conference", category: "other" },
          { es: "con la mamá dije *disculpe, ¿tendría?*", en: "with the mother i said *excuse me, would you?*", category: "other" },
          { es: "te cuento lo mismo en tú", en: "i'll tell you the same thing in tú", category: "other" },
          { es: "tengo que desahogarme", en: "i need to vent", category: "other" },
          { es: "¿estás en el café?", en: "are you at the café?", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "casi lloro con la tercera madre", en: "i almost cried with the third mother", category: "other" },
          { es: "con ella dije *le quería comentar*", en: "with her i said *le quería comentar*", category: "other" },
          { es: "funcionó. de usted, todo el rato", en: "it worked. usted the whole time", category: "other" },
          { es: "no cambié al inglés", en: "i didn't switch to english", category: "other" },
          { es: "rocío tenía razón con el ensayo", en: "rocío was right about rehearsing", category: "opinion" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "lo que le dije sobre las notas", en: "what i told her about the grades", category: "other" },
          { es: "por qué me costó tanto", en: "why it was so hard for me", category: "opinion" },
          { es: "cómo calculamos la nota", en: "how we calculate the grade", category: "other" },
          { es: "la diferencia entre *dejas* y *permite*", en: "the difference between *dejas* and *permite*", category: "other" },
          { es: "lo de la mamá de daniela", en: "what happened with daniela's mother", category: "other" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "me escuchaste media hora", en: "you listened for half an hour", category: "time" },
          { es: "a las mamás: *por su tiempo.* a ti: *por tu tiempo.*", en: "to the mothers: *your time (formal).* to you: *your time (informal).*", category: "other" },
          { es: "necesitaba desahogarme", en: "i needed to vent", category: "other" },
          { es: "sin ti no habría ensayado", en: "without you i wouldn't have rehearsed", category: "other" },
          { es: "por aguantarme el usted todo el día", en: "for putting up with my usted talk all day", category: "other" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "casi le digo *con permiso* al mesero", en: "i almost said *excuse me* to the waiter", category: "other" },
          { es: "¿te cuento la parte difícil?", en: "can i tell you the hard part?", category: "other" },
          { es: "con permiso con las mamás; *oye, perdona* contigo", en: "*excuse me* with the mothers; *hey, sorry* with you", category: "other" },
          { es: "llevo usted en la cabeza", en: "i've got usted stuck in my head", category: "other" },
          { es: "¿te interrumpo el café?", en: "am i interrupting your coffee?", category: "food" },
        ],
      },
    ],
  },
  {
    day: 320,
    theme: "Cambiando en seco",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a minute? (tú)",
        completions: [
          { es: "acabo de salir de una difícil", en: "i just came out of a rough one", category: "other" },
          { es: "dame dos minutos antes de la próxima", en: "give me two minutes before the next one", category: "time" },
          { es: "necesito hablar como persona un rato", en: "i need to talk like a person for a bit", category: "activity" },
          { es: "siéntate conmigo aquí", en: "sit with me here", category: "activity" },
          { es: "todavía tengo dos familias más", en: "i still have two more families", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to mention that… (tú)",
        completions: [
          { es: "le hablé de usted a una mamá y casi te lo hago a ti", en: "i addressed a mom formally and almost did it to you", category: "other" },
          { es: "llevo cuatro horas sin decir una palabra en inglés", en: "i've gone four hours without a word of english", category: "time" },
          { es: "la de las tres me hizo llorar un poquito", en: "the three o'clock one made me cry a little", category: "time" },
          { es: "no me equivoqué ni con los nombres", en: "i didn't even get the names wrong", category: "other" },
          { es: "el papá de Mateo me dio la mano dos veces", en: "mateo's dad shook my hand twice", category: "other" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain? (tú)",
        completions: [
          { es: "porque suena peor de lo que fue", en: "because it sounds worse than it was", category: "opinion" },
          { es: "antes de que opines", en: "before you weigh in", category: "activity" },
          { es: "lo que le dije de la nota", en: "what i told her about the grade", category: "other" },
          { es: "cómo terminó lo del hermanito", en: "how the little brother thing ended", category: "other" },
          { es: "dos minutos y ya, te lo prometo", en: "two minutes and that's it, i promise", category: "time" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thanks so much for your time (tú)",
        completions: [
          { es: "y te lo digo distinto que allá adentro", en: "and i mean it differently than in there", category: "other" },
          { es: "en serio, no tenías que venir", en: "seriously, you didn't have to come", category: "other" },
          { es: "llevo diciendo esa frase todo el día", en: "i've been saying that phrase all day", category: "time" },
          { es: "y por el café, sobre todo", en: "and for the coffee, above all", category: "food" },
          { es: "la próxima te la debo yo", en: "the next one's on me", category: "other" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… (tú)",
        completions: [
          { es: "todavía tengo la voz de la conferencia puesta", en: "i still have the conference voice on", category: "other" },
          { es: "casi te digo señora", en: "i almost called you ma'am", category: "other" },
          { es: "dame un segundo y ya soy yo otra vez", en: "give me a second and i'll be me again", category: "time" },
          { es: "te dejé esperando en el pasillo", en: "i left you waiting in the hallway", category: "other" },
          { es: "estoy hablando muy rápido", en: "i'm talking too fast", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 321,
    theme: "La conferencia entera",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a minute? (tú)",
        completions: [
          { es: "llevo de pie desde la una", en: "i've been on my feet since one", category: "time" },
          { es: "siéntate conmigo antes de que llegue la última", en: "sit with me before the last one arrives", category: "activity" },
          { es: "necesito no hablar de notas cinco minutos", en: "i need to not talk about grades for five minutes", category: "time" },
          { es: "todavía huele a café quemado aquí", en: "it still smells like burnt coffee in here", category: "food" },
          { es: "me quedan dos y ya", en: "i have two left and that's it", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to mention that… (tú)",
        completions: [
          { es: "hoy no me cambié al inglés ni una vez", en: "today i didn't switch to english once", category: "time" },
          { es: "la mamá de Mateo me trajo pan", en: "mateo's mom brought me bread", category: "food" },
          { es: "la última familia llegó cuarenta minutos tarde", en: "the last family arrived forty minutes late", category: "time" },
          { es: "nadie me pidió traductor hoy", en: "nobody asked me for an interpreter today", category: "other" },
          { es: "me sé los once apellidos de memoria", en: "i know all eleven last names by heart", category: "other" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain? (tú)",
        completions: [
          { es: "el último papá me hizo la misma pregunta tres veces", en: "the last father asked me the same question three times", category: "other" },
          { es: "cómo terminó lo de la nota de Mateo", en: "how the thing with mateo's grade ended", category: "other" },
          { es: "por qué me quedé una hora más", en: "why i stayed an extra hour", category: "time" },
          { es: "lo que le dije a la mamá de Yusuf", en: "what i said to yusuf's mom", category: "other" },
          { es: "antes de que me juzgues por lo del folder", en: "before you judge me over the folder thing", category: "activity" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thanks so much for your time (tú)",
        completions: [
          { es: "me ayudaste a ensayar, Camila", en: "you helped me rehearse, camila", category: "activity" },
          { es: "y por el café, y por venir hasta acá", en: "and for the coffee, and for coming all this way", category: "food" },
          { es: "a ti sí te lo digo de verdad", en: "with you i actually mean it", category: "other" },
          { es: "llevo once veces diciéndolo hoy", en: "i've said it eleven times today", category: "time" },
          { es: "y perdona el olor a marcador", en: "and sorry about the marker smell", category: "other" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… (tú)",
        completions: [
          { es: "agarré la carpeta equivocada y seguí como si nada", en: "i grabbed the wrong folder and kept going", category: "activity" },
          { es: "se me fue el nombre de la mamá de Yusuf", en: "yusuf's mom's name slipped away from me", category: "other" },
          { es: "hoy contesto todo con claro que sí, señora", en: "today i answer everything with \"of course, ma'am\"", category: "other" },
          { es: "te estoy hablando con voz de conferencia", en: "i'm talking to you in conference voice", category: "other" },
          { es: "no te ofrecí ni un vaso de agua", en: "i didn't even offer you a glass of water", category: "food" },
        ],
      },
    ],
  },
  {
    day: 322,
    theme: "La farmacia",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a minute? (tú) — usted: *Disculpe, ¿tendría un momento?*",
        completions: [
          { es: "es por una receta de la semana pasada", en: "it's about a prescription from last week", category: "other" },
          { es: "ya sé que hay fila, pero es rápido", en: "i know there's a line, but it's quick", category: "time" },
          { es: "ya casi salimos, te lo prometo", en: "we're almost out of here, i promise", category: "time" },
          { es: "solo una pregunta y nos vamos", en: "just one question and we'll go", category: "activity" },
          { es: "no encuentro el mostrador de recetas", en: "i can't find the prescription counter", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to mention that… (tú) — usted: *Le quería comentar que…*",
        completions: [
          { es: "el doctor cambió la dosis y no está en la etiqueta", en: "the doctor changed the dose and it's not on the label", category: "other" },
          { es: "me dieron el frasco de treinta y debían ser noventa", en: "they gave me the thirty bottle and it should be ninety", category: "other" },
          { es: "esto me pasó la última vez también", en: "this happened to me last time too", category: "time" },
          { es: "la clínica dijo que ya lo habían mandado", en: "the clinic said they'd already sent it", category: "other" },
          { es: "vengo desde el otro lado de la ciudad", en: "i came from the other side of the city", category: "other" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain? (tú) — usted: *¿Me permite explicarle?*",
        completions: [
          { es: "tengo el mensaje de la clínica en el teléfono", en: "i have the clinic's message on my phone", category: "other" },
          { es: "un momento antes de que llame al doctor", en: "one moment before you call the doctor", category: "time" },
          { es: "por qué no me fui sin preguntar", en: "why i didn't leave without asking", category: "activity" },
          { es: "es más rápido si le enseño la pantalla", en: "it's faster if i show you the screen", category: "other" },
          { es: "la fecha del mensaje es del martes", en: "the message is dated tuesday", category: "time" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thanks so much for your time (tú) — usted: *…por su tiempo*",
        completions: [
          { es: "me ahorró un viaje", en: "you saved me a trip", category: "other" },
          { es: "ya sé que estaba sola en el mostrador", en: "i know you were alone at the counter", category: "other" },
          { es: "y por esperarme veinte minutos", en: "and for waiting twenty minutes for me", category: "time" },
          { es: "de verdad, no era obvio lo del cambio", en: "really, the change wasn't obvious", category: "other" },
          { es: "que tenga buena tarde", en: "have a good afternoon", category: "time" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… (tú) — usted: *Con permiso…* / *Disculpe…*",
        completions: [
          { es: "te tuve veinte minutos esperando por unas pastillas", en: "i kept you waiting twenty minutes for some pills", category: "time" },
          { es: "ahora sí nos vamos", en: "now we can really go", category: "activity" },
          { es: "te hice cargar la bolsa todo el rato", en: "i made you carry the bag the whole time", category: "other" },
          { es: "no te avisé que había que venir aquí", en: "i didn't warn you we had to come here", category: "other" },
          { es: "ya con esto sí te invito el café", en: "after this the coffee's definitely on me", category: "food" },
        ],
      },
    ],
  },
];
