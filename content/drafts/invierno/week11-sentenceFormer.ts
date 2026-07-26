import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 11 — "Sin captar todo" (days 253–259).
 * Stems must match content/drafts/invierno/week11-frames.ts for the same day.
 */
export const invWeek11SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 253,
    theme: "Quitar los subtítulos",
    stems: [
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        completions: [
          { es: "se están peleando por la casa", en: "they're fighting over the house", category: "other" },
          { es: "él no quiere volver", en: "he doesn't want to come back", category: "opinion" },
          { es: "pasó algo hace años", en: "something happened years ago", category: "time" },
          { es: "los dos tienen razón en algo", en: "they're both right about something", category: "opinion" },
          { es: "la historia empieza antes del capítulo uno", en: "the story starts before episode one", category: "time" },
        ],
      },
      {
        stem: "Lo que sí entendí fue…",
        english: "What I did catch was…",
        completions: [
          { es: "que ella se va el domingo", en: "that she's leaving on sunday", category: "time" },
          { es: "el tono: estaba furiosa", en: "the tone: she was furious", category: "opinion" },
          { es: "el nombre del pueblo", en: "the name of the town", category: "other" },
          { es: "que nadie dijo la verdad completa", en: "that nobody told the whole truth", category: "opinion" },
          { es: "quién estaba de qué lado", en: "who was on which side", category: "other" },
        ],
      },
      {
        stem: "¿Dijiste que…?",
        english: "Did you say that…?",
        completions: [
          { es: "son hermanos", en: "they're siblings", category: "other" },
          { es: "la serie es colombiana", en: "the series is colombian", category: "other" },
          { es: "quedan dos temporadas", en: "there are two seasons left", category: "time" },
          { es: "ya la habías visto entera", en: "you'd already seen it all", category: "time" },
          { es: "esa actriz sale en otra que vimos", en: "that actress is in another one we watched", category: "other" },
        ],
      },
      {
        stem: "Se me escapó la parte de…",
        english: "I missed the part about…",
        completions: [
          { es: "la llamada", en: "the phone call", category: "other" },
          { es: "por qué se fue", en: "why she left", category: "other" },
          { es: "el principio", en: "the beginning", category: "time" },
          { es: "lo que dijo el abuelo", en: "what the grandfather said", category: "other" },
          { es: "la escena del carro", en: "the car scene", category: "other" },
        ],
      },
      {
        stem: "Por el contexto entiendo que…",
        english: "From the context I gather that…",
        completions: [
          { es: "es la mamá", en: "she's the mother", category: "other" },
          { es: "no es la primera vez", en: "it isn't the first time", category: "time" },
          { es: "él ya lo sabía", en: "he already knew", category: "other" },
          { es: "esa casa es de la familia hace años", en: "that house has been the family's for years", category: "time" },
          { es: "van a terminar mal", en: "it's going to end badly", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 254,
    theme: "Más o menos entendí",
    stems: [
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        completions: [
          { es: "el capítulo entero", en: "the whole episode", category: "other" },
          { es: "lo perdonó al final", en: "she forgave him in the end", category: "time" },
          { es: "va a vender la casa", en: "she's going to sell the house", category: "other" },
          { es: "nadie va a quedar contento", en: "nobody's going to end up happy", category: "opinion" },
          { es: "faltan cosas por contar", en: "there are things still untold", category: "other" },
        ],
      },
      {
        stem: "Lo que sí entendí fue…",
        english: "What I did catch was…",
        completions: [
          { es: "toda la discusión de la cocina", en: "the whole kitchen argument", category: "other" },
          { es: "el chiste, y me reí a tiempo", en: "the joke, and i laughed on time", category: "other" },
          { es: "la última frase, que era la importante", en: "the last line, which was the important one", category: "opinion" },
          { es: "todo lo que dijo la abuela", en: "everything the grandmother said", category: "other" },
          { es: "la mitad rápida y la lenta entera", en: "half the fast bit and all the slow bit", category: "other" },
        ],
      },
      {
        stem: "¿Dijiste que…?",
        english: "Did you say that…?",
        completions: [
          { es: "ese señor es el tío", en: "that man is the uncle", category: "other" },
          { es: "ya viste esta temporada", en: "you've already seen this season", category: "time" },
          { es: "\"finca\"? ¿qué es una finca?", en: "\"finca\"? what's a finca?", category: "other" },
          { es: "hablan así en toda colombia", en: "they talk like that all over colombia", category: "other" },
          { es: "eso es acento paisa", en: "that's a paisa accent", category: "other" },
        ],
      },
      {
        stem: "Se me escapó la parte de…",
        english: "I missed the part about…",
        completions: [
          { es: "cuando hablan los dos a la vez", en: "when they both talk at once", category: "other" },
          { es: "la carta", en: "the letter", category: "other" },
          { es: "el final, hablaron muy rápido", en: "the ending, they talked very fast", category: "time" },
          { es: "lo que gritaron en la calle", en: "what they shouted in the street", category: "other" },
          { es: "los nombres, se me juntan todos", en: "the names, they all run together for me", category: "other" },
        ],
      },
      {
        stem: "Por el contexto entiendo que…",
        english: "From the context I gather that…",
        completions: [
          { es: "la noticia era mala", en: "the news was bad", category: "opinion" },
          { es: "se conocen de antes", en: "they know each other from before", category: "time" },
          { es: "nadie le cree", en: "nobody believes him", category: "opinion" },
          { es: "esa mujer manda en la casa", en: "that woman runs the household", category: "other" },
          { es: "el dinero es el problema real", en: "money is the real problem", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 255,
    theme: "Lo que sí entendí",
    stems: [
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        completions: [
          { es: "su hija cambió de horario", en: "her daughter's schedule changed", category: "time" },
          { es: "lo que necesitaba", en: "what she needed", category: "other" },
          { es: "para poder ayudarla", en: "enough to be able to help her", category: "activity" },
          { es: "venía por un papel del colegio", en: "she came about a school form", category: "other" },
          { es: "algo se le complicó en el trabajo", en: "something got complicated at her work", category: "other" },
        ],
      },
      {
        stem: "Lo que sí entendí fue…",
        english: "What I did catch was…",
        completions: [
          { es: "que necesita el papel para el viernes", en: "that she needs the form by friday", category: "time" },
          { es: "que ya vino dos veces", en: "that she's already come twice", category: "time" },
          { es: "lo importante, el resto no hacía falta", en: "the important part, the rest wasn't needed", category: "opinion" },
          { es: "el nombre de su hija", en: "her daughter's name", category: "other" },
          { es: "que nadie le había explicado nada", en: "that nobody had explained anything to her", category: "other" },
        ],
      },
      {
        stem: "¿Dijiste que…?",
        english: "Did you say that…?",
        completions: [
          { es: "era para el viernes", en: "it was for friday", category: "time" },
          { es: "ya habló con la oficina", en: "you already spoke to the office", category: "activity" },
          { es: "se llama marisol", en: "her name is marisol", category: "other" },
          { es: "necesita dos copias o una", en: "you need two copies or one", category: "other" },
          { es: "la esperan en la otra oficina", en: "they're expecting you at the other office", category: "other" },
        ],
      },
      {
        stem: "Se me escapó la parte de…",
        english: "I missed the part about…",
        completions: [
          { es: "por qué lo necesita", en: "why she needs it", category: "other" },
          { es: "el apellido", en: "the last name", category: "other" },
          { es: "en medio, ¿me la repite?", en: "the middle, could you repeat it?", category: "activity" },
          { es: "a quién tiene que entregárselo", en: "who she has to hand it to", category: "other" },
          { es: "la fecha exacta", en: "the exact date", category: "time" },
        ],
      },
      {
        stem: "Por el contexto entiendo que…",
        english: "From the context I gather that…",
        completions: [
          { es: "es urgente", en: "it's urgent", category: "time" },
          { es: "la mandaron de una oficina a otra", en: "they sent her from one office to another", category: "other" },
          { es: "ya está cansada de preguntar", en: "she's tired of asking", category: "opinion" },
          { es: "nadie le habló en español antes", en: "nobody spoke to her in spanish before", category: "other" },
          { es: "esperaba que la mandara a otro lado", en: "she expected me to send her somewhere else", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 256,
    theme: "¿Dijiste que…?",
    stems: [
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        completions: [
          { es: "hablaban de la migración", en: "they were talking about migration", category: "other" },
          { es: "la mitad del episodio", en: "half the episode", category: "other" },
          { es: "el hilo, aunque perdí ejemplos", en: "the through-line, though i lost the examples", category: "other" },
          { es: "era una entrevista, no un reportaje", en: "it was an interview, not a report", category: "other" },
          { es: "el tema era más triste de lo que esperaba", en: "the topic was sadder than i expected", category: "opinion" },
        ],
      },
      {
        stem: "Lo que sí entendí fue…",
        english: "What I did catch was…",
        completions: [
          { es: "la entrevista del final", en: "the interview at the end", category: "time" },
          { es: "que son ocho millones de personas", en: "that it's eight million people", category: "other" },
          { es: "la historia de la señora de cúcuta", en: "the story of the woman from cúcuta", category: "other" },
          { es: "todo lo que dijo el segundo invitado", en: "everything the second guest said", category: "other" },
          { es: "la pregunta, aunque no la respuesta", en: "the question, though not the answer", category: "other" },
        ],
      },
      {
        stem: "¿Dijiste que…?",
        english: "Did you say that…?",
        completions: [
          { es: "tú también lo escuchas", en: "you listen to it too", category: "activity" },
          { es: "eran ocho o dieciocho", en: "it was eight or eighteen", category: "other" },
          { es: "\"desplazados\"? esa palabra la oí tres veces", en: "\"desplazados\"? i heard that word three times", category: "other" },
          { es: "hay episodio nuevo cada semana", en: "there's a new episode every week", category: "time" },
          { es: "lo mejor viene en la segunda mitad", en: "the best part is in the second half", category: "opinion" },
        ],
      },
      {
        stem: "Se me escapó la parte de…",
        english: "I missed the part about…",
        completions: [
          { es: "los números", en: "the numbers", category: "other" },
          { es: "el segundo invitado", en: "the second guest", category: "other" },
          { es: "el túnel, se cortó el audio", en: "the tunnel, the audio cut out", category: "other" },
          { es: "las fechas, siempre las pierdo", en: "the dates, i always lose those", category: "time" },
          { es: "cuando se rieron los dos", en: "when the two of them laughed", category: "other" },
        ],
      },
      {
        stem: "Por el contexto entiendo que…",
        english: "From the context I gather that…",
        completions: [
          { es: "\"desplazados\" es gente que tuvo que irse", en: "\"desplazados\" is people who had to leave", category: "other" },
          { es: "es un tema difícil allá", en: "it's a difficult subject there", category: "opinion" },
          { es: "la entrevistadora lo conoce bien", en: "the interviewer knows him well", category: "other" },
          { es: "esa palabra se usa mucho en las noticias", en: "that word is used a lot in the news", category: "other" },
          { es: "no hacía falta buscarla en el diccionario", en: "i didn't need to look it up", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 257,
    theme: "Se me escapó la parte de",
    stems: [
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        completions: [
          { es: "cambiaron la reunión", en: "they changed the meeting", category: "time" },
          { es: "hay que llevar algo", en: "we have to bring something", category: "activity" },
          { es: "lo suficiente para no preguntar más", en: "enough not to ask anything else", category: "activity" },
          { es: "todo sigue igual menos la hora", en: "everything's the same except the time", category: "time" },
          { es: "me toca a mí abrir el salón", en: "it's my turn to open the room", category: "activity" },
        ],
      },
      {
        stem: "Lo que sí entendí fue…",
        english: "What I did catch was…",
        completions: [
          { es: "el día y la hora", en: "the day and the time", category: "time" },
          { es: "dónde es", en: "where it is", category: "other" },
          { es: "a quién hay que llamar", en: "who has to be called", category: "activity" },
          { es: "que yo llevo algo", en: "that i'm bringing something", category: "activity" },
          { es: "lo único que cambiaba mi tarde", en: "the only thing that changed my afternoon", category: "time" },
        ],
      },
      {
        stem: "¿Dijiste que…?",
        english: "Did you say that…?",
        completions: [
          { es: "a las siete en el salón grande", en: "seven o'clock in the big room", category: "time" },
          { es: "yo llevo las sillas", en: "i'm bringing the chairs", category: "activity" },
          { es: "confirmara antes del miércoles", en: "i should confirm before wednesday", category: "time" },
          { es: "ya le avisaste a rocío", en: "you already told rocío", category: "other" },
          { es: "es la última junta antes de marzo", en: "it's the last meeting before march", category: "time" },
        ],
      },
      {
        stem: "Se me escapó la parte de…",
        english: "I missed the part about…",
        completions: [
          { es: "quién abre el salón", en: "who opens the room", category: "other" },
          { es: "la comida, solo esa", en: "the food, just that bit", category: "food" },
          { es: "después del jueves", en: "after thursday", category: "time" },
          { es: "cuánta gente confirmó", en: "how many people confirmed", category: "other" },
          { es: "lo que dijiste al final, ibas rápido", en: "what you said at the end, you were going fast", category: "time" },
        ],
      },
      {
        stem: "Por el contexto entiendo que…",
        english: "From the context I gather that…",
        completions: [
          { es: "lo abre el conserje", en: "the caretaker opens it", category: "other" },
          { es: "la comida la trae cada familia", en: "each family brings the food", category: "food" },
          { es: "no hace falta confirmar", en: "there's no need to confirm", category: "activity" },
          { es: "esto ya está decidido y solo me avisan", en: "this is already decided and they're just telling me", category: "other" },
          { es: "nadie tiene el plan completo", en: "nobody has the full plan", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 258,
    theme: "Por el contexto",
    stems: [
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        completions: [
          { es: "toda la noche", en: "the whole evening", category: "time" },
          { es: "sin traducir nada", en: "without translating anything", category: "activity" },
          { es: "y no me perdí ni una vez del todo", en: "and i never got completely lost", category: "time" },
          { es: "las tres conversaciones a la vez", en: "all three conversations at once", category: "other" },
          { es: "hasta lo que decían en la mesa de al lado", en: "even what they said at the next table", category: "other" },
        ],
      },
      {
        stem: "Lo que sí entendí fue…",
        english: "What I did catch was…",
        completions: [
          { es: "casi todo, para variar", en: "almost all of it, for a change", category: "opinion" },
          { es: "hasta los chistes", en: "even the jokes", category: "other" },
          { es: "incluso cuando hablaban rápido", en: "even when they were talking fast", category: "time" },
          { es: "las tres voces por separado", en: "all three voices separately", category: "other" },
          { es: "más de lo que esperaba de mí misma", en: "more than i expected of myself", category: "opinion" },
        ],
      },
      {
        stem: "¿Dijiste que…?",
        english: "Did you say that…?",
        completions: [
          { es: "solo pregunté dos veces", en: "i only asked twice", category: "time" },
          { es: "las dos veces adiviné bien", en: "both times i guessed right", category: "other" },
          { es: "eso en serio o me estás consintiendo", en: "that seriously or are you humoring me", category: "opinion" },
          { es: "sueno distinta desde enero", en: "i sound different since january", category: "time" },
          { es: "ya no me ves pensar antes de hablar", en: "you don't see me think before speaking anymore", category: "activity" },
        ],
      },
      {
        stem: "Se me escapó la parte de…",
        english: "I missed the part about…",
        completions: [
          { es: "los primos, nada más", en: "the cousins, nothing else", category: "other" },
          { es: "un solo minuto en toda la noche", en: "one single minute in the whole evening", category: "time" },
          { es: "la canción, pero esa no cuenta", en: "the song, but that one doesn't count", category: "other" },
          { es: "los apodos, no sé quién es quién", en: "the nicknames, i don't know who's who", category: "other" },
          { es: "cuando hablaron las dos juntas", en: "when the two of them spoke at the same time", category: "other" },
        ],
      },
      {
        stem: "Por el contexto entiendo que…",
        english: "From the context I gather that…",
        completions: [
          { es: "\"chévere\" es como \"qué bueno\"", en: "\"chévere\" is like \"how great\"", category: "other" },
          { es: "cuatro palabras nuevas de hoy", en: "four new words from today", category: "other" },
          { es: "casi todo lo que no sé", en: "almost everything i don't know", category: "other" },
          { es: "no necesito el diccionario en la mesa", en: "i don't need the dictionary at the table", category: "other" },
          { es: "adivinar bien también es saber", en: "guessing right is also knowing", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 259,
    theme: "Repaso: Sin captar todo",
    stems: [
      {
        stem: "Más o menos entendí que…",
        english: "I more or less got that…",
        completions: [
          { es: "\"más o menos\" siempre fue suficiente", en: "\"more or less\" was always enough", category: "opinion" },
          { es: "el pánico era el problema, no las palabras", en: "the panic was the problem, not the words", category: "opinion" },
          { es: "nadie capta el cien por ciento", en: "nobody catches a hundred percent", category: "opinion" },
          { es: "en inglés tampoco entiendo todo", en: "i don't understand everything in english either", category: "opinion" },
          { es: "escuchar no es traducir", en: "listening isn't translating", category: "opinion" },
        ],
      },
      {
        stem: "Lo que sí entendí fue…",
        english: "What I did catch was…",
        completions: [
          { es: "que cuento mal: contaba huecos", en: "that i count wrong: i was counting holes", category: "opinion" },
          { es: "que ya no busco el control remoto", en: "that i don't reach for the remote anymore", category: "activity" },
          { es: "que puedo seguir sin entenderlo todo", en: "that i can carry on without understanding it all", category: "opinion" },
          { es: "que la meta era esta, y ya está", en: "that this was the goal, and here it is", category: "opinion" },
          { es: "todo lo que necesitaba, ni más ni menos", en: "everything i needed, no more no less", category: "opinion" },
        ],
      },
      {
        stem: "¿Dijiste que…?",
        english: "Did you say that…?",
        completions: [
          { es: "pregunto menos que antes", en: "i ask less than before", category: "time" },
          { es: "pregunto mejor, no menos", en: "i ask better, not less", category: "opinion" },
          { es: "eso también es entender", en: "that's understanding too", category: "opinion" },
          { es: "ya no me ves con cara de perdida", en: "you don't see me looking lost anymore", category: "opinion" },
          { es: "el jueves lo probamos otra vez", en: "we'll try it again thursday", category: "time" },
        ],
      },
      {
        stem: "Se me escapó la parte de…",
        english: "I missed the part about…",
        completions: [
          { es: "siempre, y no pasó nada", en: "as always, and nothing happened", category: "time" },
          { es: "algo cada día de esta semana", en: "something every day this week", category: "time" },
          { es: "entrar en pánico, esa sí se me fue", en: "panicking, that one really did leave me", category: "opinion" },
          { es: "los números, como siempre", en: "the numbers, as always", category: "other" },
          { es: "sentirme mal por eso", en: "feeling bad about it", category: "opinion" },
        ],
      },
      {
        stem: "Por el contexto entiendo que…",
        english: "From the context I gather that…",
        completions: [
          { es: "ya casi termina el invierno", en: "winter is nearly over", category: "time" },
          { es: "esto era la meta de la temporada", en: "this was the season's goal", category: "opinion" },
          { es: "llegué sin darme cuenta", en: "i arrived without noticing", category: "opinion" },
          { es: "lo que viene es hablar a velocidad real", en: "what's coming is talking at real speed", category: "time" },
          { es: "quedan dos semanas de invierno", en: "there are two weeks of winter left", category: "time" },
        ],
      },
    ],
  },
];
