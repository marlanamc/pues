import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 3 — "Al teléfono" (days 197–203).
 * Stems must match content/drafts/invierno/week3-frames.ts for the same day.
 */
export const invWeek3SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 197,
    theme: "Sin cara, solo voz",
    stems: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        completions: [
          { es: "camila, ¿eres tú?", en: "camila, is that you?", category: "other" },
          { es: "sí, aquí estoy, dime", en: "yes, i'm here, go ahead", category: "other" },
          { es: "te oigo lejitos", en: "you sound far away", category: "other" },
          { es: "espera, me pongo los audífonos", en: "wait, let me put my earbuds in", category: "activity" },
          { es: "sí, sí, te escucho perfecto", en: "yes, yes, i hear you perfectly", category: "other" },
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        completions: [
          { es: "marlana creed, del programa de inglés", en: "marlana creed, from the english program", category: "other" },
          { es: "la maestra de su hijo, ¿tiene un minuto?", en: "your son's teacher, do you have a minute?", category: "time" },
          { es: "alguien del colegio, no se preocupe", en: "someone from the school, don't worry", category: "other" },
          { es: "marlana, del salón de la mañana", en: "marlana, from the morning class", category: "time" },
          { es: "la maestra que le escribió el lunes", en: "the teacher who wrote to you on monday", category: "time" },
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        completions: [
          { es: "para avisarle", en: "so i can let them know", category: "activity" },
          { es: "por favor", en: "please", category: "other" },
          { es: "ahora la comunico", en: "i'll put you through now", category: "activity" },
          { es: "se lo digo en un segundo", en: "i'll tell them in a second", category: "time" },
          { es: "déjeme anotar el nombre", en: "let me write the name down", category: "activity" },
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        completions: [
          { es: "creo que se oye mal", en: "i think the line's bad", category: "opinion" },
          { es: "bien o te llamo otra vez", en: "okay, or should i call you again", category: "other" },
          { es: "voy a caminar hacia la ventana", en: "i'm going to walk toward the window", category: "activity" },
          { es: "se oye como debajo del agua", en: "it sounds like you're underwater", category: "other" },
          { es: "dime algo para probar", en: "say something so i can test it", category: "activity" },
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        completions: [
          { es: "la llamada, perdona", en: "the call, sorry", category: "other" },
          { es: "justo cuando ibas a decirme algo", en: "right when you were about to tell me something", category: "time" },
          { es: "pero ya volví", en: "but i'm back", category: "other" },
          { es: "y no supe si seguías ahí", en: "and i didn't know if you were still there", category: "other" },
          { es: "sin aviso, como siempre", en: "with no warning, as always", category: "other" },
        ],
      },
    ],
  },
  {
    day: 198,
    theme: "La mamá de Yusuf",
    stems: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        completions: [
          { es: "buenas tardes, ¿hablo con la señora amina?", en: "good afternoon, am i speaking with mrs. amina?", category: "other" },
          { es: "disculpe la hora, señora", en: "sorry about the hour, ma'am", category: "time" },
          { es: "no la escucho bien, ¿me oye usted?", en: "i can't hear you well, can you hear me?", category: "other" },
          { es: "buenas tardes, llamo del colegio", en: "good afternoon, i'm calling from the school", category: "other" },
          { es: "¿es un buen momento para hablar?", en: "is this a good time to talk?", category: "time" },
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        completions: [
          { es: "marlana, la maestra de inglés de yusuf", en: "marlana, yusuf's english teacher", category: "other" },
          { es: "del colegio, no es nada grave", en: "the school, it's nothing serious", category: "other" },
          { es: "la maestra de su hijo, tengo buenas noticias", en: "your son's teacher, i have good news", category: "other" },
          { es: "marlana, nos vimos en la reunión de octubre", en: "marlana, we met at the october meeting", category: "time" },
          { es: "la maestra del programa de la tarde", en: "the teacher from the afternoon program", category: "time" },
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        completions: [
          { es: "le digo que llamé", en: "should i say called", category: "other" },
          { es: "hablo, disculpe", en: "am i speaking with, sorry", category: "other" },
          { es: "para anotarlo", en: "so i can write it down", category: "activity" },
          { es: "y a qué número le devuelvo la llamada", en: "and what number should i call back", category: "other" },
          { es: "perdón, no alcancé a escucharlo", en: "sorry, i didn't quite catch it", category: "other" },
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me? (usted: ¿Me escucha?)",
        hints: {
          como: [
            { es: "se oye un poco cortado", en: "it sounds a bit choppy" },
            { es: "se oye perfecto", en: "it sounds perfect" },
          ],
        },
        completions: [
          { es: "señora, se oye un poco cortado", en: "ma'am, it sounds a bit choppy", category: "other" },
          { es: "bien o la llamo más tarde", en: "okay, or should i call you later", category: "time" },
          { es: "ya colgué con ella, te cuento", en: "i'm off the phone with her, let me tell you", category: "activity" },
          { es: "o le escribo mejor por mensaje", en: "or should i just text you instead", category: "activity" },
          { es: "todo bien, la escucho clarito", en: "all good, i hear you clearly", category: "other" },
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        completions: [
          { es: "cuando le estaba explicando el horario", en: "while i was explaining the schedule to her", category: "time" },
          { es: "y la volví a llamar enseguida", en: "and i called her right back", category: "activity" },
          { es: "dos veces, pero terminamos", en: "twice, but we finished", category: "other" },
          { es: "y ella también me marcó al mismo tiempo", en: "and she called me at the same time too", category: "other" },
          { es: "y perdí la parte más importante", en: "and i lost the most important part", category: "other" },
        ],
      },
    ],
  },
  {
    day: 199,
    theme: "La persona que contesta",
    stems: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        completions: [
          { es: "buenos días, llamo de parte de una familia", en: "good morning, i'm calling on behalf of a family", category: "other" },
          { es: "¿es la clínica de la calle center?", en: "is this the clinic on center street?", category: "other" },
          { es: "¿me puede comunicar con la persona que agenda las citas?", en: "could you put me through to the person who schedules appointments?", category: "activity" },
          { es: "¿sigue abierto el consultorio?", en: "is the office still open?", category: "time" },
          { es: "llamo para confirmar una cita", en: "i'm calling to confirm an appointment", category: "activity" },
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        completions: [
          { es: "marlana, del programa de inglés para adultos", en: "marlana, from the adult english program", category: "other" },
          { es: "una maestra que ayuda a la familia con el idioma", en: "a teacher who helps the family with the language", category: "activity" },
          { es: "del centro comunitario de jamaica plain", en: "from the jamaica plain community center", category: "other" },
          { es: "marlana, no soy familiar, soy la maestra", en: "marlana, i'm not family, i'm the teacher", category: "other" },
          { es: "alguien autorizado por la familia", en: "someone the family has authorized", category: "other" },
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        completions: [
          { es: "me lo preguntaron dos veces", en: "they asked me twice", category: "other" },
          { es: "de la maestra, no de la familia", en: "from the teacher, not from the family", category: "other" },
          { es: "ahí me trabé y dije mi nombre y ya", en: "that's where i got stuck and just said my name", category: "other" },
          { es: "y no supe si dar mi apellido", en: "and i didn't know whether to give my last name", category: "other" },
          { es: "la tenía preparada esta vez", en: "i had it ready this time", category: "other" },
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        completions: [
          { es: "se quedó todo en silencio", en: "everything went silent", category: "other" },
          { es: "hay mucho ruido de ese lado", en: "there's a lot of noise on that end", category: "other" },
          { es: "todavía o me dejaron esperando", en: "still, or did they leave me waiting", category: "time" },
          { es: "o sigue la musiquita de espera", en: "or is the hold music still playing", category: "other" },
          { es: "llevo diez minutos aquí", en: "i've been here ten minutes", category: "time" },
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        completions: [
          { es: "mientras me tenían en espera", en: "while they had me on hold", category: "time" },
          { es: "y tuve que explicar todo otra vez", en: "and i had to explain everything again", category: "activity" },
          { es: "a la tercera llamada y ya me dio risa", en: "on the third call and by then it made me laugh", category: "other" },
          { es: "y nadie me devolvió la llamada", en: "and nobody called me back", category: "other" },
          { es: "justo cuando por fin me pasaron", en: "right when they finally put me through", category: "time" },
        ],
      },
    ],
  },
  {
    day: 200,
    theme: "No te escucho",
    stems: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        completions: [
          { es: "espérame, voy saliendo del pasillo", en: "hang on, i'm coming out of the hallway", category: "activity" },
          { es: "aquí adentro no entra bien la señal", en: "the signal doesn't come in well in here", category: "other" },
          { es: "ya salí, ahora sí", en: "i'm outside now, that's better", category: "time" },
          { es: "dame diez segundos y te escucho", en: "give me ten seconds and i'll hear you", category: "time" },
          { es: "estoy entre clases, habla rápido", en: "i'm between classes, talk fast", category: "time" },
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        completions: [
          { es: "marlana otra vez, se nos cortó", en: "marlana again, we got cut off", category: "other" },
          { es: "marlana, m de mamá, a-r-l", en: "marlana, m as in mamá, a-r-l", category: "other" },
          { es: "la misma persona de hace un minuto", en: "the same person from a minute ago", category: "time" },
          { es: "marlana, le deletreo el apellido", en: "marlana, i'll spell out my last name", category: "activity" },
          { es: "quien la llamó hace un rato", en: "the one who called you a little while ago", category: "time" },
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        completions: [
          { es: "no le entendí el nombre", en: "i didn't catch the name", category: "other" },
          { es: "me repite por favor", en: "could you repeat that please", category: "activity" },
          { es: "se escuchó cortado", en: "it came through choppy", category: "other" },
          { es: "me lo puede deletrear", en: "could you spell it for me", category: "activity" },
          { es: "escuché solo la primera parte", en: "i only heard the first part", category: "other" },
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        completions: [
          { es: "te puse en altavoz", en: "i've got you on speaker", category: "activity" },
          { es: "si hablo más fuerte", en: "if i talk louder", category: "other" },
          { es: "tengo una sola barra de señal", en: "i've got one bar of signal", category: "other" },
          { es: "me cambié al wifi de la escuela", en: "i switched to the school wifi", category: "activity" },
          { es: "o mejor te escribo", en: "or should i just text you instead", category: "activity" },
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        completions: [
          { es: "y me perdí la mitad de la frase", en: "and i lost half the sentence", category: "other" },
          { es: "en el elevador, siempre pasa", en: "in the elevator, it always happens", category: "other" },
          { es: "mejor te marco por videollamada", en: "i'd better call you on video instead", category: "activity" },
          { es: "tres veces en el mismo pasillo", en: "three times in the same hallway", category: "other" },
          { es: "y ya sé exactamente dónde pasa", en: "and now i know exactly where it happens", category: "other" },
        ],
      },
    ],
  },
  {
    day: 201,
    theme: "Se cortó",
    stems: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        completions: [
          { es: "soy yo otra vez, se nos fue la llamada", en: "it's me again, we lost the call", category: "other" },
          { es: "¿me escuchas ahora mejor?", en: "can you hear me better now?", category: "other" },
          { es: "¿en qué estábamos?", en: "where were we?", category: "other" },
          { es: "sigue, sigue, no perdí nada", en: "go on, go on, i didn't miss anything", category: "activity" },
          { es: "te oigo clarito, arranca de nuevo", en: "i hear you clearly, start again", category: "activity" },
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        completions: [
          { es: "marlana, disculpe la interrupción", en: "marlana, sorry for the interruption", category: "other" },
          { es: "otra vez la maestra de yusuf", en: "yusuf's teacher again", category: "other" },
          { es: "marlana, ya es la tercera vez, perdón", en: "marlana, it's the third time now, sorry", category: "time" },
          { es: "la misma de siempre, no se asuste", en: "the same one as always, don't be alarmed", category: "other" },
          { es: "marlana, prometo que es la última", en: "marlana, i promise this is the last one", category: "other" },
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        completions: [
          { es: "me llamó un número que no conozco", en: "a number i don't know called me", category: "other" },
          { es: "no reconocí la voz", en: "i didn't recognize the voice", category: "other" },
          { es: "ah, sí, la esperaba", en: "oh, yes, i was expecting you", category: "other" },
          { es: "creo que ya hablamos hace un rato", en: "i think we already spoke a while ago", category: "time" },
          { es: "¿me llamó usted o fue el sistema?", en: "did you call me or was it the system?", category: "other" },
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        completions: [
          { es: "ahora sin interrupciones", en: "now with no interruptions", category: "other" },
          { es: "repito lo último que dije", en: "i'll repeat the last thing i said", category: "activity" },
          { es: "dime hasta dónde llegaste", en: "tell me how far you got", category: "activity" },
          { es: "porque yo te perdí en \"el horario\"", en: "because i lost you at \"the schedule\"", category: "other" },
          { es: "o empiezo desde el principio", en: "or should i start from the beginning", category: "activity" },
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        completions: [
          { es: "no fuiste tú ni fui yo", en: "it wasn't you and it wasn't me", category: "other" },
          { es: "y no me dio tiempo de despedirme", en: "and i didn't get time to say goodbye", category: "time" },
          { es: "siempre en el mismo punto de la calle", en: "always at the same spot on the street", category: "other" },
          { es: "y pensé que me habías colgado", en: "and i thought you'd hung up on me", category: "opinion" },
          { es: "pero ya aprendí a volver a marcar sin pena", en: "but i've learned to call back without embarrassment", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 202,
    theme: "Dejar un recado",
    stems: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        completions: [
          { es: "por fin alguien contesta", en: "someone finally answers", category: "other" },
          { es: "gracias por devolverme la llamada", en: "thanks for calling me back", category: "other" },
          { es: "creo que marqué mal, disculpe", en: "i think i dialed wrong, sorry", category: "other" },
          { es: "no esperaba que contestaran tan rápido", en: "i wasn't expecting anyone to answer so fast", category: "other" },
          { es: "sí, soy yo, la que dejó el recado", en: "yes, it's me, the one who left the message", category: "other" },
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        completions: [
          { es: "marlana creed, del colegio de su hijo", en: "marlana creed, from your son's school", category: "other" },
          { es: "marlana, le dejo mi número al final", en: "marlana, i'll leave my number at the end", category: "other" },
          { es: "marlana, puede llamarme hasta las cuatro", en: "marlana, you can reach me until four", category: "time" },
          { es: "marlana, llamo solo por el horario nuevo", en: "marlana, i'm only calling about the new schedule", category: "other" },
          { es: "marlana, no necesita devolverme la llamada", en: "marlana, you don't need to call me back", category: "other" },
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        completions: [
          { es: "dígale que de la maestra marlana", en: "tell her it's from marlana, the teacher", category: "other" },
          { es: "de la escuela, sobre el horario", en: "from the school, about the schedule", category: "other" },
          { es: "le dejo mi nombre y mi número", en: "i'll leave my name and my number", category: "activity" },
          { es: "dígale que no es urgente", en: "tell her it isn't urgent", category: "other" },
          { es: "de marlana, ella ya sabe", en: "from marlana, she'll know", category: "other" },
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        completions: [
          { es: "no sé si esto está grabando", en: "i don't know if this is recording", category: "other" },
          { es: "lo importante viene ahora", en: "the important part is coming now", category: "time" },
          { es: "ya dejé el recado, cuéntame cómo lo hice", en: "i already left the message, tell me how i did", category: "activity" },
          { es: "porque hablé como robot, lo sé", en: "because i talked like a robot, i know", category: "opinion" },
          { es: "grabé el recado tres veces antes de mandarlo", en: "i recorded the message three times before sending it", category: "activity" },
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        completions: [
          { es: "el buzón de voz a mitad del recado", en: "the voicemail halfway through the message", category: "other" },
          { es: "antes de que dijera mi número", en: "before i said my number", category: "other" },
          { es: "así que llamé y lo dejé completo", en: "so i called and left it complete", category: "activity" },
          { es: "y me mandó directo al buzón la segunda vez", en: "and it sent me straight to voicemail the second time", category: "other" },
          { es: "pero el recado ya estaba entero", en: "but the message was already complete", category: "other" },
        ],
      },
    ],
  },
  {
    day: 203,
    theme: "Repaso: Al teléfono",
    stems: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        completions: [
          { es: "ya lo digo sin pensarlo", en: "i say it without thinking now", category: "activity" },
          { es: "contesto sin mirar quién llama", en: "i answer without looking at who's calling", category: "activity" },
          { es: "ahora empiezo en español y después decido", en: "now i start in spanish and decide after", category: "activity" },
          { es: "y espero a ver en qué idioma me contestan", en: "and i wait to see which language they answer in", category: "activity" },
          { es: "cuatro llamadas y ni una en inglés", en: "four calls and not one in english", category: "other" },
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        completions: [
          { es: "marlana, y esta vez no lo leí de un papel", en: "marlana, and this time i didn't read it off a paper", category: "other" },
          { es: "marlana: lo dije cuatro veces esta semana", en: "marlana: i said it four times this week", category: "time" },
          { es: "marlana, y ya me sale de corrido", en: "marlana, and it comes out in one go now", category: "activity" },
          { es: "marlana, sin ensayar antes", en: "marlana, without rehearsing first", category: "activity" },
          { es: "marlana, y hasta sonó profesional", en: "marlana, and it even sounded professional", category: "opinion" },
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        completions: [
          { es: "antes esa pregunta me congelaba", en: "that question used to freeze me", category: "opinion" },
          { es: "ahora contesto sin pensar", en: "now i answer without thinking", category: "activity" },
          { es: "ya la pregunto yo también", en: "i ask it myself now too", category: "activity" },
          { es: "y no me da pena repetir mi nombre", en: "and repeating my name doesn't embarrass me", category: "opinion" },
          { es: "es la pregunta más fácil de toda la llamada", en: "it's the easiest question in the whole call", category: "opinion" },
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        completions: [
          { es: "fue mi frase más usada de la semana", en: "it was my most-used sentence of the week", category: "time" },
          { es: "sirve para ganar tiempo y para arreglar la llamada", en: "it buys time and fixes the call", category: "opinion" },
          { es: "y con usted, ¿me escucha? las dos me salen", en: "and with usted — can you hear me? both come out now", category: "other" },
          { es: "la dije en cada una de las cuatro llamadas", en: "i said it in every one of the four calls", category: "other" },
          { es: "y nunca sonó a excusa", en: "and it never sounded like an excuse", category: "opinion" },
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        completions: [
          { es: "cinco veces y cinco veces volví a llamar", en: "five times and five times i called back", category: "other" },
          { es: "y ya no lo viví como un desastre", en: "and i didn't experience it as a disaster anymore", category: "opinion" },
          { es: "y aprendí que eso no me quita el español", en: "and i learned that doesn't take my spanish away", category: "opinion" },
          { es: "pero la conversación siguió igual", en: "but the conversation kept going all the same", category: "other" },
          { es: "y la próxima vez ya sé qué decir", en: "and next time i know what to say", category: "time" },
        ],
      },
    ],
  },
];
