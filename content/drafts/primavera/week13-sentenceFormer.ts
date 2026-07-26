import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 13 — "El año entero" (days 358–364).
 * Stems must match content/drafts/primavera/week13-frames.ts for the same day.
 */
export const priWeek13SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 358,
    theme: "La última semana",
    stems: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        completions: [
          { es: "llevan un año hablando todos los días", en: "have been speaking every day for a year", category: "time" },
          { es: "ya no cuentan los días con miedo", en: "don't count the days with fear anymore", category: "time" },
          { es: "se dan cuenta tarde de lo lejos que llegaron", en: "realize late how far they've come", category: "opinion" },
          { es: "quieren cerrar el año bien", en: "want to close the year properly", category: "time" },
          { es: "tienen un jueves fijo desde junio", en: "have had a fixed thursday since june", category: "time" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "no llores todavía", en: "don't cry yet", category: "other" },
          { es: "camila, falta una semana entera", en: "camila, there's a whole week left", category: "time" },
          { es: "bueno, tal vez no del todo", en: "well, maybe not entirely", category: "opinion" },
          { es: "no es un discurso de despedida", en: "this isn't a farewell speech", category: "activity" },
          { es: "rocío, tú también exageras", en: "rocío, you exaggerate too", category: "other" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "no quiero que esta semana se me pase volando", en: "i don't want this week to fly by", category: "time" },
          { es: "el jueves no se adelanta", en: "thursday doesn't get moved up", category: "time" },
          { es: "primero quiero oír el audio de junio", en: "first i want to hear the june recording", category: "activity" },
          { es: "siete días siguen siendo siete días", en: "seven days are still seven days", category: "time" },
          { es: "no apresuremos el final", en: "let's not rush the ending", category: "opinion" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "que empecé sin creérmelo", en: "that i started without believing it", category: "time" },
          { es: "el primer jueves en el café", en: "the first thursday at the café", category: "time" },
          { es: "que ya no traduzco en la cabeza", en: "that i don't translate in my head anymore", category: "opinion" },
          { es: "junio y el miedo a la pausa", en: "june and the fear of the pause", category: "time" },
          { es: "que falta una semana entera", en: "that a whole week is left", category: "time" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "en marzo: sonar natural no era el final", en: "in march: sounding natural wasn't the end", category: "time" },
          { es: "el primer jueves de primavera, lo recuerdo", en: "the first thursday of spring, i remember it", category: "time" },
          { es: "sobre los jueves — eso sigue siendo verdad", en: "about thursdays — that's still true", category: "time" },
          { es: "en invierno sobre guardar el primero", en: "in winter about keeping the first one", category: "time" },
          { es: "sobre seguir igual — lo firmo", en: "about carrying on the same — i sign up to that", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 359,
    theme: "Hace un año",
    stems: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        completions: [
          { es: "ya no reconocen su voz de junio", en: "don't recognize their june voice anymore", category: "time" },
          { es: "en junio pedían permiso para cada frase", en: "in june asked permission for every sentence", category: "time" },
          { es: "guardaron el primer audio por si acaso", en: "kept the first recording just in case", category: "activity" },
          { es: "pueden oír la diferencia sin discutir", en: "can hear the difference without arguing", category: "opinion" },
          { es: "cuentan las pausas en el audio viejo", en: "count the pauses in the old recording", category: "activity" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "no era tan horrible", en: "it wasn't that horrible", category: "opinion" },
          { es: "bueno, sí era tan horrible", en: "well, yes, it really was that horrible", category: "opinion" },
          { es: "camila, no mires así", en: "camila, don't look at me like that", category: "other" },
          { es: "para el audio un segundo", en: "stop the recording a second", category: "activity" },
          { es: "no me compadezcas todavía", en: "don't feel sorry for me yet", category: "opinion" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "no me compadezcas", en: "don't feel sorry for me", category: "opinion" },
          { es: "esa persona tenía valor también", en: "that person had value too", category: "opinion" },
          { es: "hace un año no podía pedir un café", en: "a year ago i couldn't order a coffee", category: "time" },
          { es: "junio no era inútil, era el principio", en: "june wasn't useless, it was the start", category: "time" },
          { es: "el miedo se oía, y eso cuenta", en: "the fear was audible, and that counts", category: "opinion" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "que tenía miedo de la pausa", en: "that i was afraid of the pause", category: "opinion" },
          { es: "que decía \"perdón\" dos veces por frase", en: "that i said \"sorry\" twice per sentence", category: "time" },
          { es: "que ya no hablo así", en: "that i don't talk like that anymore", category: "time" },
          { es: "ocho segundos y cuatro pausas", en: "eight seconds and four pauses", category: "time" },
          { es: "que me da vergüenza y orgullo a la vez", en: "that i'm embarrassed and proud at once", category: "opinion" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "en invierno: guarda el primero", en: "in winter: keep the first one", category: "time" },
          { es: "tenías razón en guardarlo", en: "you were right to keep it", category: "opinion" },
          { es: "sobre la pausa — ahí estaba todo", en: "about the pause — that was everything", category: "opinion" },
          { es: "en otoño sobre contar historias", en: "in fall about telling stories", category: "time" },
          { es: "el jueves pasado — comparemos otra vez", en: "last thursday — let's compare again", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 360,
    theme: "Lo que cambió",
    stems: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        completions: [
          { es: "hablan todos los días, poquito, un año entero", en: "speak every day, a little, for a whole year", category: "time" },
          { es: "no llaman don a lo que fue constancia", en: "don't call a gift what was consistency", category: "opinion" },
          { es: "pueden nombrar qué cambió sin decir \"mejoré\"", en: "can name what changed without saying \"i got better\"", category: "opinion" },
          { es: "saben casi las mismas palabras de junio", en: "know almost the same words as june", category: "time" },
          { es: "cambió el ritmo, no el nivel", en: "the rhythm changed, not the level", category: "opinion" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "bueno, no, no fue talento", en: "well, no, it wasn't talent", category: "opinion" },
          { es: "si crees que fue el acento", en: "if you think it was the accent", category: "opinion" },
          { es: "rocío, no fue magia", en: "rocío, it wasn't magic", category: "opinion" },
          { es: "no lo digo por modestia", en: "i'm not saying it out of modesty", category: "opinion" },
          { es: "si lo llamas don, nadie lo copia", en: "if you call it a gift, nobody copies it", category: "opinion" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "verano no fue vocabulario, fue supervivencia", en: "summer wasn't vocabulary, it was survival", category: "time" },
          { es: "invierno no fue gramática, fue dejar de frenar", en: "winter wasn't grammar, it was not braking", category: "time" },
          { es: "primavera fue personalidad, no perfección", en: "spring was personality, not perfection", category: "time" },
          { es: "otoño fue seguir un hilo, no memorizar", en: "fall was following a thread, not memorizing", category: "time" },
          { es: "las tablas nunca hicieron nada", en: "the tables never did anything", category: "opinion" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "que el miedo a la pausa se fue", en: "that the fear of the pause is gone", category: "opinion" },
          { es: "que ahora interrumpo sin disculparme tanto", en: "that now i interrupt without apologizing so much", category: "activity" },
          { es: "que hablo de mí con color", en: "that i talk about myself with color", category: "opinion" },
          { es: "lo que sirve es hablar todos los días, poquito", en: "what works is speaking every day, a little", category: "time" },
          { es: "que hacía falta alguien al otro lado", en: "that there had to be someone on the other end", category: "other" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "en otoño: empezó con las preguntas", en: "in fall: it started with the questions", category: "time" },
          { es: "en enero: dejó de pedir permiso", en: "in january: she stopped asking permission", category: "time" },
          { es: "la semana pasada: ya suena a ti", en: "last week: it already sounds like you", category: "time" },
          { es: "sobre los trozos y las reglas", en: "about chunks and rules", category: "opinion" },
          { es: "en verano sobre sobrevivir el silencio", en: "in summer about surviving the silence", category: "time" },
        ],
      },
    ],
  },
  {
    day: 361,
    theme: "La mesa entera",
    stems: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        completions: [
          { es: "trajeron a alguien nuevo al café cada temporada", en: "brought someone new to the café every season", category: "time" },
          { es: "ya no son la única en la mesa", en: "aren't the only one at the table anymore", category: "other" },
          { es: "tienen un jueves fijo desde junio", en: "have had a fixed thursday since june", category: "time" },
          { es: "ahora somos cuatro en esta mesa", en: "now there are four of us at this table", category: "other" },
          { es: "pueden presentar a dos personas sin traducir", en: "can introduce two people without translating", category: "activity" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "yesenia, no planifiqué ninguno de estos jueves", en: "yesenia, i didn't plan any of these thursdays", category: "time" },
          { es: "bueno, el café sí lo planifiqué", en: "well, the coffee i did plan", category: "food" },
          { es: "mamá, no llores en el grupo", en: "mom, don't cry in the group chat", category: "other" },
          { es: "no es un cuento de hadas", en: "it's not a fairy tale", category: "opinion" },
          { es: "exageras, no fue magia", en: "you're exaggerating, it wasn't magic", category: "opinion" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "hace un año yo tampoco creía que fuera posible", en: "a year ago i didn't believe it was possible either", category: "time" },
          { es: "no fue un año de estudiar, fue un año de hablar", en: "it wasn't a year of studying, it was a year of speaking", category: "time" },
          { es: "la mesa importa tanto como la app", en: "the table matters as much as the app", category: "opinion" },
          { es: "hablo entendible, que es otra cosa", en: "i speak understandably, which is different", category: "opinion" },
          { es: "empieza feo y sigue — eso es el método", en: "start rough and keep going — that's the method", category: "activity" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "cinco frases al día, nada más", en: "five sentences a day, nothing more", category: "time" },
          { es: "que alguien al otro lado hace falta", en: "that someone on the other end is necessary", category: "other" },
          { es: "que empieces feo y sigas", en: "that you start rough and keep going", category: "activity" },
          { es: "el primer jueves, no el primer día perfecto", en: "the first thursday, not the first perfect day", category: "time" },
          { es: "que la pena es lo que frena, no el inglés", en: "that embarrassment is what holds you back, not english", category: "opinion" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "no te preocupa el inglés, te preocupa la pena", en: "it isn't the english that worries you, it's the embarrassment", category: "opinion" },
          { es: "en enero — lo recuerdo porque lo sentí igual", en: "in january — i remember because i felt the same", category: "time" },
          { es: "sobre empezar sola — no funcionó, ¿verdad?", en: "about starting alone — it didn't work, right?", category: "activity" },
          { es: "sobre los jueves — ven si te sirve", en: "about thursdays — come if it helps", category: "time" },
          { es: "que necesitas que alguien te dé permiso", en: "that you need someone to give you permission", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 362,
    theme: "Lo que me llevo",
    stems: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        completions: [
          { es: "pueden tener una conversación larga sin prepararla", en: "can have a long conversation without preparing it", category: "activity" },
          { es: "bromean en español aunque a veces no caiga", en: "joke in spanish even when it doesn't always land", category: "activity" },
          { es: "ya no se esconden detrás del cargo", en: "don't hide behind the job title anymore", category: "opinion" },
          { es: "discuten sin sonar frías", en: "argue without sounding cold", category: "activity" },
          { es: "hablan español con alma, no solo con reglas", en: "speak spanish with soul, not just with rules", category: "opinion" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "no voy a llorar — bueno, tal vez un poco", en: "i'm not going to cry — well, maybe a little", category: "opinion" },
          { es: "camila, no es un discurso", en: "camila, this isn't a speech", category: "activity" },
          { es: "ya no me da miedo decirlo en serio", en: "i'm not afraid to say it seriously anymore", category: "opinion" },
          { es: "rocío, tampoco tú lloras tanto", en: "rocío, you don't cry that much either", category: "other" },
          { es: "no es despedida, es repaso", en: "it's not a farewell, it's a recap", category: "time" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "todavía me encojo cuando me contradicen fuerte", en: "i still shrink when someone contradicts me hard", category: "opinion" },
          { es: "no todo está resuelto — y está bien", en: "not everything is solved — and that's fine", category: "opinion" },
          { es: "el año no acaba en perfecto", en: "the year doesn't end in perfect", category: "time" },
          { es: "me falta el chiste perfecto, no la conversación", en: "i'm missing the perfect joke, not the conversation", category: "opinion" },
          { es: "lo pequeño es lo que funcionó", en: "the small version is what worked", category: "opinion" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "de verano: sobreviví", en: "about summer: i survived", category: "time" },
          { es: "de invierno: dejé de frenar", en: "about winter: i stopped braking", category: "time" },
          { es: "de primavera: sueno como yo", en: "about spring: i sound like me", category: "time" },
          { es: "de otoño: conté una historia entera", en: "about fall: i told a whole story", category: "time" },
          { es: "que quiero seguir mañana", en: "that i want to keep going tomorrow", category: "time" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "hablar es un hábito, no un talento", en: "speaking is a habit, not a talent", category: "opinion" },
          { es: "el último jueves de invierno — lo firmo", en: "the last thursday of winter — i sign up to that", category: "time" },
          { es: "sobre seguir igual: eso es lo que me llevo", en: "about carrying on the same: that's what i'm taking", category: "opinion" },
          { es: "en marzo sobre sonar como yo", en: "in march about sounding like me", category: "time" },
          { es: "sobre los jueves — no se negocian", en: "about thursdays — they're not negotiable", category: "time" },
        ],
      },
    ],
  },
  {
    day: 363,
    theme: "Una conversación entera",
    stems: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        completions: [
          { es: "cuentan el año en jueves, no en meses", en: "count the year in thursdays, not months", category: "time" },
          { es: "empiezan la historia por el final si quieren", en: "start the story from the end if they want", category: "activity" },
          { es: "ya no necesitan permiso para hablar dos horas", en: "don't need permission to talk for two hours anymore", category: "activity" },
          { es: "cuentan el casero en la misma charla que junio", en: "tell the landlord story in the same talk as june", category: "other" },
          { es: "pueden sostener cuatro voces en un idioma", en: "can hold four voices in one language", category: "activity" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "camila, no fuiste la profesora — fuiste la mesa", en: "camila, you weren't the teacher — you were the table", category: "other" },
          { es: "rocío, tú también exageras", en: "rocío, you exaggerate too", category: "other" },
          { es: "bueno, la parte del casero sí pasó", en: "well, the landlord part really happened", category: "other" },
          { es: "no planifiqué esta charla de dos horas", en: "i didn't plan this two-hour talk", category: "activity" },
          { es: "yesenia, ya estás en la mesa", en: "yesenia, you're at the table now", category: "other" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "falta la mitad de esa historia", en: "half of that story is missing", category: "other" },
          { es: "yo lo viví distinto en otoño", en: "i experienced that differently in fall", category: "time" },
          { es: "déjame llegar al jueves de marzo", en: "let me get to the thursday in march", category: "time" },
          { es: "se cortó cinco veces, y volví cinco veces", en: "it dropped five times, and i called back five times", category: "activity" },
          { es: "espera, esa parte la cuento yo", en: "wait, i'll tell that part", category: "activity" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "la llamada al casero — diez minutos, cinco cortes", en: "the landlord call — ten minutes, five drops", category: "activity" },
          { es: "que nunca pensé que aguantaría un año", en: "that i never thought i'd last a year", category: "time" },
          { es: "que quiero que siga", en: "that i want it to continue", category: "opinion" },
          { es: "el primer jueves y este jueves juntos", en: "the first thursday and this thursday together", category: "time" },
          { es: "gracias, antes de pensarlo", en: "thank you, before thinking about it", category: "other" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "hace diez minutos: lo difícil viene después", en: "ten minutes ago: the hard part comes after", category: "time" },
          { es: "de yesenia — ella ya está en la mesa", en: "about yesenia — she's at the table now", category: "other" },
          { es: "al principio: esto no se acaba mañana", en: "at the start: this doesn't end tomorrow", category: "time" },
          { es: "sobre el casero — esa es la historia", en: "about the landlord — that's the story", category: "other" },
          { es: "y ahora te devuelvo el turno", en: "and now i give you the floor back", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 364,
    theme: "Repaso: El año entero",
    stems: [
      {
        stem: "Soy de las que…",
        english: "I'm the kind of person who…",
        completions: [
          { es: "empezaron sin creer y terminaron sin parar", en: "started without believing and finished without stopping", category: "time" },
          { es: "ya no cuentan cuántas frases faltan", en: "don't count how many sentences are left anymore", category: "time" },
          { es: "pueden decir un año entero en cinco frases", en: "can say a whole year in five sentences", category: "activity" },
          { es: "hablan español con alma", en: "speak spanish with soul", category: "opinion" },
          { es: "tienen un jueves fijo y un hábito diario", en: "have a fixed thursday and a daily habit", category: "time" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "una última vez este año", en: "one last time this year", category: "time" },
          { es: "camila — bueno, gracias, y ya está", en: "camila — well, thank you, and that's it", category: "other" },
          { es: "y tú ya sabes que es cariño", en: "and you know it's affection", category: "other" },
          { es: "no es despedida, es pausa", en: "it's not a farewell, it's a pause", category: "time" },
          { es: "rocío, tú también lloras", en: "rocío, you cry too", category: "other" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "viniste a tomar café los jueves y cambiaste un año", en: "you came for coffee on thursdays and changed a year", category: "time" },
          { es: "alguien al otro lado hace falta, y fuiste tú", en: "someone on the other end is necessary, and it was you", category: "other" },
          { es: "esto no se queda solo en mi cabeza", en: "this doesn't stay just in my head", category: "opinion" },
          { es: "no hiciste nada — y cambiaste todo", en: "you didn't do anything — and you changed everything", category: "opinion" },
          { es: "el año sigue igual de sencillo: hablar todos los días", en: "the year stays this simple: speak every day", category: "time" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "gracias", en: "thank you", category: "other" },
          { es: "que hablar es un hábito", en: "that speaking is a habit", category: "opinion" },
          { es: "que quiero seguir mañana", en: "that i want to keep going tomorrow", category: "time" },
          { es: "hace un año no podía pedir un café", en: "a year ago i couldn't order a coffee", category: "time" },
          { es: "el primer jueves en el café", en: "the first thursday at the café", category: "time" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "el primer jueves: aquí seguimos", en: "the first thursday: we're still here", category: "time" },
          { es: "última pregunta del año", en: "last question of the year", category: "time" },
          { es: "y ahora sí, escucho", en: "and now, i'm listening", category: "activity" },
          { es: "sobre los jueves — nos vemos el próximo", en: "about thursdays — see you at the next one", category: "time" },
          { es: "sin apuro, tenemos toda la tarde", en: "no rush, we have all afternoon", category: "time" },
        ],
      },
    ],
  },
];
