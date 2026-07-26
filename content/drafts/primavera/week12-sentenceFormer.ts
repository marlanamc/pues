import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 12 — "Conversación larga II" (days 351–357).
 * Stems must match content/drafts/primavera/week12-frames.ts for the same day.
 */
export const priWeek12SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 351,
    theme: "El silencio",
    stems: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        completions: [
          { es: "¿qué más te pasó esta semana?", en: "what else happened to you this week?", category: "time" },
          { es: "cuéntame, que se me acabaron las preguntas", en: "tell me, i ran out of questions", category: "activity" },
          { es: "no me dejes colgada con ese silencio", en: "don't leave me hanging with that silence", category: "other" },
          { es: "¿qué más tienes en la cabeza?", en: "what else is on your mind?", category: "other" },
          { es: "¿algo pequeño, no importa?", en: "something small, doesn't matter?", category: "other" },
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        completions: [
          { es: "lo de la mamá de diego", en: "about diego's mom", category: "other" },
          { es: "que rocío me preguntó por ti", en: "that rocío asked about you", category: "other" },
          { es: "casi cuelgo sin decirte", en: "i almost hung up without telling you", category: "activity" },
          { es: "lo de yesenia del jueves", en: "about yesenia from thursday", category: "time" },
          { es: "una cosa del colegio", en: "something from school", category: "activity" },
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        completions: [
          { es: "¿cómo va lo del turno nuevo?", en: "how's the new shift going?", category: "time" },
          { es: "¿viste lo de la directora?", en: "did you see the thing about the principal?", category: "other" },
          { es: "necesito aire fresco en esta llamada", en: "i need fresh air in this call", category: "other" },
          { es: "¿qué tal tu semana en el hospital?", en: "how was your week at the hospital?", category: "time" },
          { es: "hace rato que no hablamos de tu familia", en: "we haven't talked about your family in a while", category: "other" },
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        completions: [
          { es: "vi a tu vecina en la panadería", en: "i saw your neighbor at the bakery", category: "other" },
          { es: "me acordé de ti cuando pasé por el colegio", en: "i thought of you when i passed the school", category: "activity" },
          { es: "¿tú dijiste que ibas al médico el martes?", en: "did you say you were going to the doctor tuesday?", category: "time" },
          { es: "oí \"pa' que\" en la tienda", en: "i heard \"pa' que\" at the store", category: "other" },
          { es: "encontré la receta que me pediste", en: "i found the recipe you asked for", category: "other" },
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        completions: [
          { es: "no cuelgues todavía", en: "don't hang up yet", category: "activity" },
          { es: "que me acordé ahora mismo", en: "that i just remembered", category: "time" },
          { es: "el jueves tengo libre por la tarde", en: "thursday i'm free in the afternoon", category: "time" },
          { es: "mañana llámame temprano", en: "call me early tomorrow", category: "time" },
          { es: "traje pan de bono, pásate", en: "i brought pan de bono, come by", category: "food" },
        ],
      },
    ],
  },
  {
    day: 352,
    theme: "Bueno, ¿y qué más?",
    stems: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        completions: [
          { es: "no tiene que ser importante", en: "it doesn't have to be important", category: "opinion" },
          { es: "¿qué más te ronda la cabeza?", en: "what else is going around in your head?", category: "other" },
          { es: "a veces sale lo mejor ahí", en: "sometimes the best stuff comes out there", category: "opinion" },
          { es: "¿qué más te pasó que no contaste?", en: "what else happened that you didn't tell?", category: "activity" },
          { es: "el piso sigue siendo tuyo", en: "the floor is still yours", category: "other" },
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        completions: [
          { es: "que anoche hubo un susto en el hospital", en: "that there was a scare at the hospital last night", category: "other" },
          { es: "me lo dijo rocío el viernes", en: "rocío told me on friday", category: "time" },
          { es: "lo del ascensor, te vas a reír", en: "about the elevator, you'll laugh", category: "other" },
          { es: "que tu alumna me escribió", en: "that your student wrote to me", category: "activity" },
          { es: "algo de la panadería", en: "something about the bakery", category: "other" },
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        completions: [
          { es: "¿tú sigues yendo al café los jueves?", en: "are you still going to the café on thursdays?", category: "time" },
          { es: "¿qué tal yesenia esta semana?", en: "how's yesenia this week?", category: "other" },
          { es: "hace meses que no hablamos de tu hermana", en: "it's been months since we talked about your sister", category: "time" },
          { es: "¿viste la serie?", en: "did you watch the series?", category: "activity" },
          { es: "necesito oír algo que no sea el colegio", en: "i need to hear something that isn't school", category: "opinion" },
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        completions: [
          { es: "tu alumna me escribió anoche", en: "your student wrote to me last night", category: "activity" },
          { es: "encontré la receta que me pediste", en: "i found the recipe you asked for", category: "other" },
          { es: "¿sabías que cierran la panadería los lunes?", en: "did you know they close the bakery on mondays?", category: "time" },
          { es: "rocío preguntó por ti", en: "rocío asked about you", category: "other" },
          { es: "vi tu foto en el grupo del colegio", en: "i saw your photo in the school group", category: "other" },
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        completions: [
          { es: "mañana llámame temprano", en: "call me early tomorrow", category: "time" },
          { es: "que quería tu opinión", en: "that i wanted your opinion", category: "opinion" },
          { es: "traje pan de bono, pásate", en: "i brought pan de bono, come by", category: "food" },
          { es: "no cuelgues todavía", en: "don't hang up yet", category: "activity" },
          { es: "sobre lo del hospital", en: "about the hospital thing", category: "other" },
        ],
      },
    ],
  },
  {
    day: 353,
    theme: "Se me olvidaba contarte",
    stems: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        completions: [
          { es: "¿qué más pasó con la mamá de diego?", en: "what else happened with diego's mom?", category: "other" },
          { es: "¿qué más te dijo la directora?", en: "what else did the principal tell you?", category: "other" },
          { es: "no te quedes solo con eso", en: "don't stop at just that", category: "activity" },
          { es: "¿y yesenia qué más dijo?", en: "and what else did yesenia say?", category: "other" },
          { es: "cuéntame el final", en: "tell me the ending", category: "activity" },
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        completions: [
          { es: "que yesenia volvió el jueves", en: "that yesenia came back thursday", category: "time" },
          { es: "lo que me dijo la mamá al final", en: "what her mom told me at the end", category: "other" },
          { es: "casi lo enterré con el silencio", en: "i almost buried it with the silence", category: "other" },
          { es: "lo del regalo de rocío", en: "about rocío's gift", category: "other" },
          { es: "que el jueves tengo reunión de padres", en: "that i have parent conferences thursday", category: "time" },
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        completions: [
          { es: "¿cómo amaneció tu turno?", en: "how did your shift start?", category: "time" },
          { es: "cuéntame lo del compañero nuevo", en: "tell me about the new coworker", category: "other" },
          { es: "ya hablé mucho de mi semana", en: "i've talked enough about my week", category: "opinion" },
          { es: "¿qué tal lo del ascensor?", en: "how about the elevator thing?", category: "other" },
          { es: "¿tú qué harías con yesenia?", en: "what would you do with yesenia?", category: "opinion" },
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        completions: [
          { es: "la mamá de diego trabaja cerca del hospital", en: "diego's mom works near the hospital", category: "other" },
          { es: "me sonó a lo que te pasó en enero", en: "it reminded me of what happened to you in january", category: "time" },
          { es: "¿tú conoces a alguien que traduzca formularios?", en: "do you know anyone who translates forms?", category: "other" },
          { es: "la vecina es de medellín", en: "the neighbor is from medellín", category: "other" },
          { es: "vi a doña marta el sábado", en: "i saw doña marta on saturday", category: "time" },
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        completions: [
          { es: "el jueves tengo reunión de padres", en: "thursday i have parent conferences", category: "time" },
          { es: "sobre yesenia, ahora que lo pienso", en: "about yesenia, now that i think of it", category: "other" },
          { es: "¿tú puedes el sábado?", en: "can you do saturday?", category: "time" },
          { es: "sobre lo que dijo la mamá", en: "about what the mom said", category: "other" },
          { es: "¿me ayudas a practicar?", en: "will you help me practice?", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 354,
    theme: "Cambiando de tema",
    stems: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        completions: [
          { es: "¿qué más sobre el turno? ¿o ya fue todo?", en: "what else about the shift? or was that everything?", category: "time" },
          { es: "si no, cambiamos", en: "if not, we switch", category: "activity" },
          { es: "¿qué más te preocupa de eso?", en: "what else worries you about that?", category: "opinion" },
          { es: "¿algo más del hospital?", en: "anything else from the hospital?", category: "other" },
          { es: "¿o pasamos a otra cosa?", en: "or do we move on?", category: "activity" },
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        completions: [
          { es: "lo que pasó con el ascensor", en: "what happened with the elevator", category: "other" },
          { es: "la cara de la enfermera nueva", en: "the new nurse's face", category: "other" },
          { es: "iba justo con lo del turno", en: "it went right with the shift story", category: "other" },
          { es: "lo del susto de anoche", en: "about last night's scare", category: "time" },
          { es: "que rocío preguntó por ti", en: "that rocío asked about you", category: "other" },
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        completions: [
          { es: "¿viste la serie que me recomendaste?", en: "did you watch the series you recommended?", category: "activity" },
          { es: "ya sé demasiado de mi semana", en: "i already know too much about my week", category: "opinion" },
          { es: "¿qué tal tu sobrina?", en: "how's your niece?", category: "other" },
          { es: "¿cómo va lo del permiso?", en: "how's the permit thing going?", category: "other" },
          { es: "hablemos de otra cosa", en: "let's talk about something else", category: "activity" },
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        completions: [
          { es: "rocío preguntó si vienes al cumpleaños", en: "rocío asked if you're coming to the birthday", category: "other" },
          { es: "vi tu foto en el grupo del colegio", en: "i saw your photo in the school group", category: "other" },
          { es: "¿tú fuiste a la feria del barrio?", en: "did you go to the neighborhood fair?", category: "activity" },
          { es: "me acordé de ti en la panadería", en: "i thought of you at the bakery", category: "other" },
          { es: "¿conoces a doña marta?", en: "do you know doña marta?", category: "other" },
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        completions: [
          { es: "sobre la serie — no me spoilees", en: "about the series — don't spoil it", category: "activity" },
          { es: "el cumpleaños es en español, ¿verdad?", en: "the birthday's in spanish, right?", category: "other" },
          { es: "que me acordé con lo de rocío", en: "that i remembered with the rocío thing", category: "other" },
          { es: "sobre doña marta, te vas a morir", en: "about doña marta, you're going to die", category: "other" },
          { es: "¿vamos juntas al cumpleaños?", en: "shall we go to the birthday together?", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 355,
    theme: "Por cierto",
    stems: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        completions: [
          { es: "¿qué más pasó con la vecina?", en: "what else happened with the neighbor?", category: "other" },
          { es: "eso suena a historia larga", en: "that sounds like a long story", category: "opinion" },
          { es: "¿qué más te dijo en la panadería?", en: "what else did she tell you at the bakery?", category: "other" },
          { es: "cuéntame lo de medellín", en: "tell me the medellín part", category: "other" },
          { es: "¿y doña marta?", en: "and doña marta?", category: "other" },
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        completions: [
          { es: "que la vecina es de medellín", en: "that the neighbor is from medellín", category: "other" },
          { es: "por eso me acordé de tu tía", en: "that's why i thought of your aunt", category: "other" },
          { es: "lo del precio del pan", en: "about the price of bread", category: "food" },
          { es: "que me guardaron pan de bono", en: "that they saved me pan de bono", category: "food" },
          { es: "lo de la feria del barrio", en: "about the neighborhood fair", category: "other" },
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        completions: [
          { es: "¿cómo va lo del permiso?", en: "how's the permit thing going?", category: "other" },
          { es: "llevamos una hora en la panadería", en: "we've been on the bakery for an hour", category: "time" },
          { es: "¿tú qué harías con yesenia?", en: "what would you do with yesenia?", category: "opinion" },
          { es: "volvamos al colegio un momento", en: "let's go back to school for a moment", category: "activity" },
          { es: "¿ya pensaste en el capstone?", en: "have you thought about the capstone yet?", category: "other" },
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        completions: [
          { es: "oí a alguien decir \"pa' que\" en la tienda", en: "i heard someone say \"pa' que\" at the store", category: "other" },
          { es: "me acordé de lo de la panadería en enero", en: "i remembered the january bakery thing", category: "time" },
          { es: "¿tú conoces a doña marta?", en: "do you know doña marta?", category: "other" },
          { es: "vi a tu vecina en la panadería", en: "i saw your neighbor at the bakery", category: "other" },
          { es: "encontré la receta que me pediste", en: "i found the recipe you asked for", category: "other" },
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        completions: [
          { es: "el sábado voy a la panadería temprano", en: "saturday i'm going to the bakery early", category: "time" },
          { es: "sobre doña marta, te vas a morir", en: "about doña marta, you're going to die", category: "other" },
          { es: "¿vamos juntas?", en: "shall we go together?", category: "activity" },
          { es: "sobre la vecina de medellín", en: "about the neighbor from medellín", category: "other" },
          { es: "rocío dice que te extraña", en: "rocío says she misses you", category: "other" },
        ],
      },
    ],
  },
  {
    day: 356,
    theme: "Ah, y otra cosa",
    stems: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Well, what else?… / So, anything else?…",
        completions: [
          { es: "todavía no cuelgo si tú no", en: "i'm not hanging up if you're not", category: "activity" },
          { es: "¿qué más falta? llevamos hora y media", en: "what else is left? we're at an hour and a half", category: "time" },
          { es: "dijiste \"ah, y otra cosa\" tres veces", en: "you said \"oh, and one more thing\" three times", category: "other" },
          { es: "¿algo más antes de colgar?", en: "anything else before hanging up?", category: "activity" },
          { es: "¿tú tampoco quieres colgar?", en: "you don't want to hang up either?", category: "other" },
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you… / I was forgetting to tell you…",
        completions: [
          { es: "lo del regalo de rocío", en: "about rocío's gift", category: "other" },
          { es: "iba a colgar sin decirte", en: "i was about to hang up without telling you", category: "activity" },
          { es: "que el sábado cambiaron el horario", en: "that they changed the hours on saturday", category: "time" },
          { es: "lo mejor de la llamada", en: "the best part of the call", category: "opinion" },
          { es: "que aprendí a relanzar", en: "that i learned to relaunch", category: "activity" },
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, and changing the subject… / Speaking of something else…",
        completions: [
          { es: "¿ya pensaste en lo del capstone?", en: "have you thought about the capstone yet?", category: "other" },
          { es: "falta poco para mayo", en: "may is almost here", category: "time" },
          { es: "¿tú crees que aguanto una hora entera?", en: "do you think i can hold a full hour?", category: "opinion" },
          { es: "¿qué toca la semana que viene?", en: "what's next week about?", category: "time" },
          { es: "¿cómo fue tu domingo aparte de esto?", en: "how was your sunday besides this?", category: "time" },
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way… / Incidentally…",
        completions: [
          { es: "el domingo que viene igual, ¿sí?", en: "same time next sunday, right?", category: "time" },
          { es: "guarda mi audio de hoy — suena distinta", en: "save my voice note from today — i sound different", category: "activity" },
          { es: "rocío dice que te extraña", en: "rocío says she misses you", category: "other" },
          { es: "mañana llámame temprano", en: "call me early tomorrow", category: "time" },
          { es: "el cumpleaños es el sábado", en: "the birthday is saturday", category: "time" },
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing… / Ah, and another thing…",
        completions: [
          { es: "no cuelgues, falta lo mejor", en: "don't hang up, the best is left", category: "activity" },
          { es: "hoy aprendí a relanzar una conversación", en: "today i learned to relaunch a conversation", category: "activity" },
          { es: "y otra, y otra — así se enfría y así se calienta", en: "and another, and another — that's how it cools and warms", category: "other" },
          { es: "sobre el capstone", en: "about the capstone", category: "other" },
          { es: "te quiero, pero no lo digo", en: "i love you, but i won't say it", category: "other" },
        ],
      },
    ],
  },
  {
    day: 357,
    theme: "En el carro de Rocío",
    stems: [
      {
        stem: "Bueno, ¿y qué más?…",
        english: "Okay, so what else?",
        completions: [
          { es: "todavía nos quedan veinte minutos de tráfico", en: "we still have twenty minutes of traffic", category: "time" },
          { es: "no tiene que ser importante", en: "it doesn't have to be important", category: "opinion" },
          { es: "cuéntame cualquier cosa", en: "tell me anything", category: "activity" },
          { es: "¿cómo va tu hija con lo de la universidad?", en: "how's your daughter doing with the university thing?", category: "other" },
          { es: "algo que no sea del colegio", en: "something that isn't about school", category: "other" },
        ],
      },
      {
        stem: "Se me olvidaba contarte…",
        english: "I forgot to tell you…",
        completions: [
          { es: "que por fin arreglaron la copiadora", en: "that they finally fixed the copier", category: "other" },
          { es: "que la directora me paró en el pasillo", en: "that the principal stopped me in the hallway", category: "other" },
          { es: "que Yesenia trajo pan otra vez", en: "that yesenia brought bread again", category: "food" },
          { es: "que el martes no hay reunión", en: "that there's no meeting tuesday", category: "time" },
          { es: "que me preguntaron por el programa de verano", en: "that they asked me about the summer program", category: "time" },
        ],
      },
      {
        stem: "Oye, y cambiando de tema…",
        english: "Hey, changing the subject…",
        completions: [
          { es: "¿cómo te fue con el casero?", en: "how did it go with your landlord?", category: "other" },
          { es: "¿tu hija ya decidió lo de la universidad?", en: "has your daughter decided about university?", category: "other" },
          { es: "¿tú vas el sábado o no?", en: "are you going saturday or not?", category: "time" },
          { es: "¿viste lo que pusieron en el boletín?", en: "did you see what they put in the newsletter?", category: "other" },
          { es: "¿ya comiste algo hoy?", en: "have you eaten anything today?", category: "food" },
        ],
      },
      {
        stem: "Por cierto…",
        english: "By the way…",
        completions: [
          { es: "este no es el camino a mi casa", en: "this isn't the way to my house", category: "other" },
          { es: "vi a tu vecino en la panadería el martes", en: "i saw your neighbor at the bakery tuesday", category: "food" },
          { es: "se te está acabando la gasolina", en: "you're running low on gas", category: "other" },
          { es: "todavía tengo tu paraguas en la oficina", en: "i still have your umbrella at the office", category: "other" },
          { es: "mañana llueve todo el día, dicen", en: "they say it rains all day tomorrow", category: "time" },
        ],
      },
      {
        stem: "Ah, y otra cosa…",
        english: "Oh, and one more thing…",
        completions: [
          { es: "no me dejes en la esquina, que está lloviendo", en: "don't drop me at the corner, it's raining", category: "other" },
          { es: "mañana no vengas a buscarme, voy en tren", en: "don't pick me up tomorrow, i'm taking the train", category: "time" },
          { es: "el lunes te devuelvo el libro, de verdad", en: "monday i'll give you back the book, really", category: "time" },
          { es: "gracias por traerme, en serio", en: "thanks for the ride, seriously", category: "other" },
          { es: "escríbeme cuando llegues a tu casa", en: "text me when you get home", category: "activity" },
        ],
      },
    ],
  },
];
