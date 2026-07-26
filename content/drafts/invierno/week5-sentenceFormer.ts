import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 5 — "Quiero que…" (days 211–217).
 * Stems must match content/drafts/invierno/week5-frames.ts for the same day.
 */
export const invWeek5SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 211,
    theme: "Lo que quiero de esta noche",
    stems: [
      {
        stem: "Quiero que…",
        english: "I want … to …",
        completions: [
          { es: "las familias hablen, no que solo escuchen", en: "the families to talk, not just listen", category: "activity" },
          { es: "rocío me ayude con la parte en español", en: "rocío to help me with the spanish part", category: "activity" },
          { es: "salga sencillo y cálido", en: "it to come out simple and warm", category: "opinion" },
          { es: "todos se sientan cómodos", en: "everyone to feel comfortable", category: "opinion" },
          { es: "la gente se quede conversando al final", en: "people to stay talking at the end", category: "activity" },
        ],
      },
      {
        stem: "Necesito que…",
        english: "I need … to …",
        completions: [
          { es: "la directora nos dé el salón grande", en: "the principal to give us the big room", category: "other" },
          { es: "me confirmes la fecha esta semana", en: "you to confirm the date for me this week", category: "time" },
          { es: "alguien traiga las sillas del segundo piso", en: "someone to bring the chairs from the second floor", category: "activity" },
          { es: "sepamos cuántos vienen", en: "us to know how many are coming", category: "other" },
          { es: "el permiso salga antes del lunes", en: "the permission to come through before monday", category: "time" },
        ],
      },
      {
        stem: "Prefiero que…",
        english: "I'd rather … / I prefer that …",
        completions: [
          { es: "sea un jueves, no un viernes", en: "it be a thursday, not a friday", category: "time" },
          { es: "empecemos temprano", en: "we start early", category: "time" },
          { es: "no dure más de una hora", en: "it not last more than an hour", category: "time" },
          { es: "lo hagamos en el salón y no en el gimnasio", en: "we do it in the classroom and not the gym", category: "other" },
          { es: "vengan las familias completas", en: "whole families come", category: "other" },
        ],
      },
      {
        stem: "Me gustaría que…",
        english: "I'd love it if … / I'd like … to …",
        completions: [
          { es: "vinieran los papás también", en: "the parents came too", category: "other" },
          { es: "hubiera comida de varios países", en: "there were food from several countries", category: "food" },
          { es: "nadie se sintiera de visita", en: "nobody felt like a guest", category: "opinion" },
          { es: "los estudiantes presentaran algo suyo", en: "the students presented something of their own", category: "activity" },
          { es: "durara más de lo planeado", en: "it lasted longer than planned", category: "time" },
        ],
      },
      {
        stem: "¿Quieres que…?",
        english: "Do you want me to…? / Shall we…?",
        completions: [
          { es: "hable yo primero", en: "i speak first", category: "activity" },
          { es: "te mande el borrador esta noche", en: "i send you the draft tonight", category: "time" },
          { es: "invitemos a otros salones", en: "we invite other classrooms", category: "activity" },
          { es: "reserve el salón hoy mismo", en: "i book the room today", category: "time" },
          { es: "haga la lista de comida", en: "i make the food list", category: "food" },
        ],
      },
    ],
  },
  {
    day: 212,
    theme: "Lo que necesito de ti",
    stems: [
      {
        stem: "Quiero que…",
        english: "I want … to …",
        completions: [
          { es: "tú lleves la parte en español y yo la de inglés", en: "you take the spanish part and me the english one", category: "activity" },
          { es: "cada una tenga su lista", en: "each of us to have her own list", category: "other" },
          { es: "quede claro quién hace qué", en: "it to be clear who does what", category: "other" },
          { es: "nos repartamos las llamadas", en: "us to split the calls between us", category: "activity" },
          { es: "las dos estemos en la puerta al principio", en: "both of us to be at the door at the start", category: "other" },
        ],
      },
      {
        stem: "Necesito que…",
        english: "I need … to …",
        completions: [
          { es: "me digas cuántas familias confirmaron", en: "you to tell me how many families confirmed", category: "other" },
          { es: "revises el volante antes de imprimirlo", en: "you to check the flyer before printing it", category: "activity" },
          { es: "llegues media hora antes", en: "you to arrive half an hour early", category: "time" },
          { es: "me pases los nombres hoy", en: "you to send me the names today", category: "time" },
          { es: "alguien se encargue del café", en: "someone to take charge of the coffee", category: "food" },
        ],
      },
      {
        stem: "Prefiero que…",
        english: "I'd rather … / I prefer that …",
        completions: [
          { es: "tú recibas a las familias en la puerta", en: "you greet the families at the door", category: "activity" },
          { es: "yo me quede con el micrófono", en: "i keep the microphone", category: "other" },
          { es: "dividamos el trabajo por escrito", en: "we split the work in writing", category: "activity" },
          { es: "nos escribamos todo por el chat", en: "we put everything in the chat", category: "activity" },
          { es: "decidamos hoy y no el miércoles", en: "we decide today and not wednesday", category: "time" },
        ],
      },
      {
        stem: "Me gustaría que…",
        english: "I'd love it if … / I'd like … to …",
        completions: [
          { es: "trabajáramos juntas más seguido", en: "we worked together more often", category: "activity" },
          { es: "esto no se quedara en una sola noche", en: "this didn't stay a single night", category: "time" },
          { es: "el colegio lo repitiera cada semestre", en: "the school repeated it every semester", category: "time" },
          { es: "otros maestros se animaran", en: "other teachers got on board", category: "other" },
          { es: "nos dieran presupuesto para la próxima", en: "they gave us a budget for next time", category: "other" },
        ],
      },
      {
        stem: "¿Quieres que…?",
        english: "Do you want me to…? / Shall we…?",
        completions: [
          { es: "yo hable con la directora", en: "i talk to the principal", category: "activity" },
          { es: "lo dividamos por salones", en: "we split it by classroom", category: "activity" },
          { es: "te pase mi lista ahora", en: "i send you my list now", category: "time" },
          { es: "escriba yo el correo al equipo", en: "i write the email to the team", category: "activity" },
          { es: "nos veamos mañana diez minutos", en: "we meet for ten minutes tomorrow", category: "time" },
        ],
      },
    ],
  },
  {
    day: 213,
    theme: "Prefiero que sea sencillo",
    stems: [
      {
        stem: "Quiero que…",
        english: "I want … to …",
        completions: [
          { es: "la gente coma y hable, nada más", en: "people to eat and talk, nothing more", category: "food" },
          { es: "quitemos las presentaciones largas", en: "us to drop the long presentations", category: "activity" },
          { es: "el salón esté puesto en círculo", en: "the room to be set up in a circle", category: "other" },
          { es: "haya sillas para todos", en: "there to be chairs for everyone", category: "other" },
          { es: "nadie tenga que pararse al frente", en: "nobody to have to stand at the front", category: "other" },
        ],
      },
      {
        stem: "Necesito que…",
        english: "I need … to …",
        completions: [
          { es: "reduzcamos la lista a tres actividades", en: "us to cut the list to three activities", category: "activity" },
          { es: "quepa todo en una hora", en: "it all to fit in one hour", category: "time" },
          { es: "nadie tenga que preparar nada en casa", en: "nobody to have to prepare anything at home", category: "activity" },
          { es: "el plan quepa en media página", en: "the plan to fit on half a page", category: "other" },
          { es: "sepamos qué hacer si llueve", en: "us to know what to do if it rains", category: "other" },
        ],
      },
      {
        stem: "Prefiero que…",
        english: "I'd rather … / I prefer that …",
        completions: [
          { es: "sea sencillo y salga bien", en: "it be simple and go well", category: "opinion" },
          { es: "no haya proyector", en: "there be no projector", category: "other" },
          { es: "las mesas estén juntas", en: "the tables be pushed together", category: "other" },
          { es: "no se sienta como una clase", en: "it not feel like a class", category: "opinion" },
          { es: "sobre comida y no falte", en: "there be food left over rather than not enough", category: "food" },
        ],
      },
      {
        stem: "Me gustaría que…",
        english: "I'd love it if … / I'd like … to …",
        completions: [
          { es: "se sintiera como una cena, no como una junta", en: "it felt like a dinner, not a meeting", category: "food" },
          { es: "los niños también estuvieran", en: "the kids were there too", category: "other" },
          { es: "sobrara tiempo para conversar", en: "there was time left over to talk", category: "time" },
          { es: "la gente se sentara donde quisiera", en: "people sat wherever they wanted", category: "other" },
          { es: "nadie mirara el reloj", en: "nobody looked at the clock", category: "time" },
        ],
      },
      {
        stem: "¿Quieres que…?",
        english: "Do you want me to…? / Shall we…?",
        completions: [
          { es: "cortemos la última actividad", en: "we cut the last activity", category: "activity" },
          { es: "pidamos comida o que cada quien traiga algo", en: "we order food or have everyone bring something", category: "food" },
          { es: "lo probemos primero con un salón", en: "we try it first with one classroom", category: "activity" },
          { es: "dejemos la música para el final", en: "we leave the music for the end", category: "time" },
          { es: "escriba el plan corto y te lo mande", en: "i write the short plan and send it to you", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 214,
    theme: "Me gustaría que vinieran",
    stems: [
      {
        stem: "Quiero que…",
        english: "I want … to …",
        completions: [
          { es: "sepan que no es una reunión de quejas", en: "them to know it isn't a complaints meeting", category: "other" },
          { es: "el volante esté en los dos idiomas", en: "the flyer to be in both languages", category: "other" },
          { es: "lo mandemos por mensaje y en papel", en: "us to send it by message and on paper", category: "activity" },
          { es: "se note que es una invitación, no un aviso", en: "it to read as an invitation, not a notice", category: "opinion" },
          { es: "aparezcan nuestros dos nombres", en: "both our names to appear", category: "other" },
        ],
      },
      {
        stem: "Necesito que…",
        english: "I need … to …",
        completions: [
          { es: "me ayudes a traducir la invitación", en: "you to help me translate the invitation", category: "activity" },
          { es: "confirmen antes del martes", en: "them to confirm before tuesday", category: "time" },
          { es: "alguien llame a las familias que no leen mensajes", en: "someone to call the families who don't read messages", category: "activity" },
          { es: "quede clara la hora y el lugar", en: "the time and place to be clear", category: "time" },
          { es: "revisemos que no falte ninguna familia", en: "us to check no family is missing", category: "activity" },
        ],
      },
      {
        stem: "Prefiero que…",
        english: "I'd rather … / I prefer that …",
        completions: [
          { es: "la invitación sea corta", en: "the invitation be short", category: "other" },
          { es: "no pongamos la palabra \"obligatorio\"", en: "we not put the word \"mandatory\"", category: "other" },
          { es: "la firmemos las dos", en: "both of us sign it", category: "activity" },
          { es: "el español vaya primero", en: "the spanish go first", category: "other" },
          { es: "no digamos nada de asistencia", en: "we say nothing about attendance", category: "other" },
        ],
      },
      {
        stem: "Me gustaría que…",
        english: "I'd love it if … / I'd like … to …",
        completions: [
          { es: "vinieran aunque no hablen inglés", en: "they came even if they don't speak english", category: "other" },
          { es: "trajeran algo de su casa", en: "they brought something from home", category: "food" },
          { es: "se llevaran una buena noche", en: "they took away a good evening", category: "opinion" },
          { es: "invitaran a sus vecinos", en: "they invited their neighbors", category: "other" },
          { es: "vinieran los que nunca vienen", en: "the ones who never come, came", category: "other" },
        ],
      },
      {
        stem: "¿Quieres que…?",
        english: "Do you want me to…? / Shall we…?",
        completions: [
          { es: "grabemos un audio invitándolos", en: "we record a voice note inviting them", category: "activity" },
          { es: "lo escriba yo en español y tú lo revisas", en: "i write it in spanish and you check it", category: "activity" },
          { es: "llamemos a las familias una por una", en: "we call the families one by one", category: "activity" },
          { es: "lo mande también por el grupo del colegio", en: "i send it on the school group too", category: "activity" },
          { es: "imprimamos cincuenta o cien", en: "we print fifty or a hundred", category: "other" },
        ],
      },
    ],
  },
  {
    day: 215,
    theme: "¿Quieres que te ayude?",
    stems: [
      {
        stem: "Quiero que…",
        english: "I want … to …",
        completions: [
          { es: "te apoyes en mí, no que cargues sola", en: "you to lean on me, not carry it alone", category: "opinion" },
          { es: "digas cuando algo te queda grande", en: "you to say when something's too much for you", category: "opinion" },
          { es: "esto nos salga bien a las dos", en: "this to go well for both of us", category: "opinion" },
          { es: "nos repartamos el cansancio también", en: "us to split the exhaustion too", category: "other" },
          { es: "sepas que no estás sola en esto", en: "you to know you're not alone in this", category: "opinion" },
        ],
      },
      {
        stem: "Necesito que…",
        english: "I need … to …",
        completions: [
          { es: "me avises si te falta tiempo", en: "you to let me know if you're short on time", category: "time" },
          { es: "descanses antes del jueves", en: "you to rest before thursday", category: "time" },
          { es: "confíes en que yo cierro mi parte", en: "you to trust that i'll close out my half", category: "opinion" },
          { es: "me digas qué te falta hoy mismo", en: "you to tell me what you're missing today", category: "time" },
          { es: "no te quedes hasta las diez otra vez", en: "you not to stay until ten again", category: "time" },
        ],
      },
      {
        stem: "Prefiero que…",
        english: "I'd rather … / I prefer that …",
        completions: [
          { es: "me pidas ayuda temprano", en: "you ask me for help early", category: "time" },
          { es: "hablemos hoy y no el miércoles", en: "we talk today and not wednesday", category: "time" },
          { es: "cambiemos el plan a que salga mal", en: "we change the plan than have it go badly", category: "opinion" },
          { es: "quitemos algo antes de que te agotes", en: "we cut something before you burn out", category: "activity" },
          { es: "seamos honestas con lo que se puede", en: "we be honest about what's possible", category: "opinion" },
        ],
      },
      {
        stem: "Me gustaría que…",
        english: "I'd love it if … / I'd like … to …",
        completions: [
          { es: "aprendieras a pedir ayuda sin disculparte", en: "you learned to ask for help without apologizing", category: "activity" },
          { es: "te dieras crédito por esto", en: "you gave yourself credit for this", category: "opinion" },
          { es: "camila pudiera venir esa noche", en: "camila could come that night", category: "other" },
          { es: "supieras cuánto ayudaste", en: "you knew how much you helped", category: "opinion" },
          { es: "te fueras a casa tranquila", en: "you went home at peace", category: "opinion" },
        ],
      },
      {
        stem: "¿Quieres que…?",
        english: "Do you want me to…? / Shall we…?",
        completions: [
          { es: "te ayude con las traducciones", en: "i help you with the translations", category: "activity" },
          { es: "me quede después a ordenar", en: "i stay after to clean up", category: "activity" },
          { es: "le pregunte a camila si se pasa", en: "i ask camila if she'll drop by", category: "activity" },
          { es: "haga yo las llamadas de mañana", en: "i make tomorrow's calls", category: "time" },
          { es: "nos tomemos un café antes de empezar", en: "we have a coffee before starting", category: "food" },
        ],
      },
    ],
  },
  {
    day: 216,
    theme: "La noche",
    stems: [
      {
        stem: "Quiero que…",
        english: "I want … to …",
        completions: [
          { es: "sepas que salió mejor de lo que pensábamos", en: "you to know it went better than we thought", category: "opinion" },
          { es: "veas las fotos", en: "you to see the photos", category: "activity" },
          { es: "lo repitamos en marzo", en: "us to do it again in march", category: "time" },
          { es: "rocío lea los mensajes que llegaron después", en: "rocío to read the messages that came afterward", category: "activity" },
          { es: "quede alguna foto de las dos juntas", en: "there to be a photo of the two of us", category: "other" },
        ],
      },
      {
        stem: "Necesito que…",
        english: "I need … to …",
        completions: [
          { es: "me creas: hablé toda la noche en español", en: "you to believe me: i spoke spanish all evening", category: "time" },
          { es: "alguien le cuente esto a la directora", en: "someone to tell the principal about this", category: "activity" },
          { es: "guardemos la lista para la próxima", en: "us to save the list for next time", category: "time" },
          { es: "escribamos qué funcionó y qué no", en: "us to write down what worked and what didn't", category: "activity" },
          { es: "me digas si se me notó el acento", en: "you to tell me if my accent showed", category: "opinion" },
        ],
      },
      {
        stem: "Prefiero que…",
        english: "I'd rather … / I prefer that …",
        completions: [
          { es: "lo cuente rocío, que lo dice mejor", en: "rocío tell it, she says it better", category: "opinion" },
          { es: "no lo llamemos \"evento\", suena frío", en: "we not call it an \"event\", it sounds cold", category: "opinion" },
          { es: "la próxima sea igual de sencilla", en: "the next one be just as simple", category: "time" },
          { es: "no lo pongamos en el boletín todavía", en: "we not put it in the newsletter yet", category: "time" },
          { es: "las familias digan si quieren otra", en: "the families say whether they want another", category: "other" },
        ],
      },
      {
        stem: "Me gustaría que…",
        english: "I'd love it if … / I'd like … to …",
        completions: [
          { es: "hubieras estado ahí", en: "you'd been there", category: "other" },
          { es: "vieras cómo se quedaron conversando", en: "you could see how they stayed talking", category: "activity" },
          { es: "cada colegio hiciera una de estas", en: "every school did one of these", category: "other" },
          { es: "los estudiantes vieran a sus papás así", en: "the students saw their parents like that", category: "other" },
          { es: "esto no se acabara aquí", en: "this didn't end here", category: "time" },
        ],
      },
      {
        stem: "¿Quieres que…?",
        english: "Do you want me to…? / Shall we…?",
        completions: [
          { es: "te mande el audio que grabé al final", en: "i send you the voice note i recorded at the end", category: "activity" },
          { es: "te cuente la mejor parte", en: "i tell you the best part", category: "activity" },
          { es: "hagamos una así en tu hospital", en: "we do one like this at your hospital", category: "other" },
          { es: "te mande las fotos ahora o mañana", en: "i send you the photos now or tomorrow", category: "time" },
          { es: "escribamos juntas el resumen", en: "we write the summary together", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 217,
    theme: "Repaso: Quiero que…",
    stems: [
      {
        stem: "Quiero que…",
        english: "I want … to …",
        completions: [
          { es: "esta semana quede escrita en algún lado", en: "this week to be written down somewhere", category: "other" },
          { es: "recuerdes que empezó con un audio", en: "you to remember it started with a voice note", category: "other" },
          { es: "me digas si notas el cambio", en: "you to tell me if you notice the change", category: "opinion" },
          { es: "sigamos igual la semana que viene", en: "us to keep going the same way next week", category: "time" },
          { es: "esto se quede como hábito, no como semana", en: "this to stay a habit, not a week", category: "time" },
        ],
      },
      {
        stem: "Necesito que…",
        english: "I need … to …",
        completions: [
          { es: "me expliques por qué esto ya no me cuesta", en: "you to explain why this isn't hard for me anymore", category: "opinion" },
          { es: "me pongas algo más difícil", en: "you to give me something harder", category: "activity" },
          { es: "sigamos con el mismo ritmo", en: "us to keep the same rhythm", category: "time" },
          { es: "me corrijas si se me pega algún error", en: "you to correct me if a mistake sticks", category: "activity" },
          { es: "no me dejes volver al inglés", en: "you not to let me go back to english", category: "activity" },
        ],
      },
      {
        stem: "Prefiero que…",
        english: "I'd rather … / I prefer that …",
        completions: [
          { es: "sigamos con frases y no con reglas", en: "we keep going with phrases and not rules", category: "opinion" },
          { es: "me corrijas al final, no en medio", en: "you correct me at the end, not in the middle", category: "time" },
          { es: "practiquemos hablando, no explicando", en: "we practice by speaking, not explaining", category: "activity" },
          { es: "me des ejemplos y no definiciones", en: "you give me examples and not definitions", category: "opinion" },
          { es: "empecemos siempre por algo real", en: "we always start from something real", category: "opinion" },
        ],
      },
      {
        stem: "Me gustaría que…",
        english: "I'd love it if … / I'd like … to …",
        completions: [
          { es: "alguien me hubiera enseñado esto así antes", en: "someone had taught me this way earlier", category: "other" },
          { es: "mis estudiantes tuvieran algo parecido", en: "my students had something similar", category: "other" },
          { es: "el resto del invierno fuera igual", en: "the rest of winter were like this", category: "time" },
          { es: "no se me olvidara nada de esta semana", en: "i forgot nothing from this week", category: "other" },
          { es: "pudiéramos vernos más de una vez por semana", en: "we could see each other more than once a week", category: "time" },
        ],
      },
      {
        stem: "¿Quieres que…?",
        english: "Do you want me to…? / Shall we…?",
        completions: [
          { es: "empecemos la próxima con el tiempo futuro", en: "we start next week with future time", category: "time" },
          { es: "te resuma la semana en un audio", en: "i sum up the week for you in a voice note", category: "activity" },
          { es: "cuente cuántas veces usé el subjuntivo", en: "i count how many times i used the subjunctive", category: "other" },
          { es: "te mande la lista de las cinco frases", en: "i send you the list of the five sentences", category: "activity" },
          { es: "sigamos el jueves a la misma hora", en: "we keep going thursday at the same time", category: "time" },
        ],
      },
    ],
  },
];
