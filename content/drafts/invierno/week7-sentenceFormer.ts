import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 7 — "Ojalá" (days 225–231).
 * Stems must match content/drafts/invierno/week7-frames.ts for the same day.
 */
export const invWeek7SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 225,
    theme: "La llamada de Camila",
    stems: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        completions: [
          { es: "no sea nada grave", en: "it isn't anything serious", category: "opinion" },
          { es: "te llamen pronto del hospital", en: "the hospital calls you soon", category: "time" },
          { es: "tu mamá esté con ella", en: "your mom is with her", category: "other" },
          { es: "tengas noticias antes de mañana", en: "you have news before tomorrow", category: "time" },
          { es: "haya alguien contigo esta noche", en: "there's someone with you tonight", category: "other" },
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        completions: [
          { es: "puedas dormir algo esta noche", en: "you can get some sleep tonight", category: "time" },
          { es: "los resultados salgan bien", en: "the results come back fine", category: "other" },
          { es: "me llames a cualquier hora", en: "you call me at any hour", category: "time" },
          { es: "no te quedes con esto sola", en: "you don't sit with this alone", category: "opinion" },
          { es: "sepas que aquí estoy", en: "you know i'm here", category: "opinion" },
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        completions: [
          { es: "esta noche en el turno", en: "tonight on your shift", category: "time" },
          { es: "y me cuentas mañana", en: "and tell me tomorrow", category: "time" },
          { es: "con la familia", en: "with your family", category: "other" },
          { es: "en todo lo que venga", en: "with whatever comes", category: "other" },
          { es: "y no cargues sola", en: "and don't carry it alone", category: "opinion" },
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        completions: [
          { es: "aunque sea un rato", en: "even a little while", category: "time" },
          { es: "y mañana hablamos", en: "and we'll talk tomorrow", category: "time" },
          { es: "yo aquí estoy", en: "i'm right here", category: "other" },
          { es: "y come algo antes", en: "and eat something first", category: "food" },
          { es: "sin pensar en mañana", en: "without thinking about tomorrow", category: "time" },
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        completions: [
          { es: "hacer algo más que escribirte", en: "do something more than write to you", category: "activity" },
          { es: "saber qué decir en estos casos", en: "know what to say in these situations", category: "opinion" },
          { es: "estar cerca para acompañarte", en: "be nearby to be with you", category: "other" },
          { es: "quitarte esta noche de encima", en: "take this night off your shoulders", category: "time" },
          { es: "contestarte con algo mejor", en: "answer you with something better", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 226,
    theme: "Espero que no sea grave",
    stems: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        completions: [
          { es: "salgan hoy los resultados", en: "the results come today", category: "time" },
          { es: "le toque un buen médico", en: "she gets a good doctor", category: "other" },
          { es: "haya noticias antes de la noche", en: "there's news before tonight", category: "time" },
          { es: "no la dejen esperando tanto", en: "they don't leave her waiting so long", category: "time" },
          { es: "puedas hablar con alguien que te explique", en: "you can talk to someone who'll explain", category: "activity" },
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        completions: [
          { es: "no sea nada de cuidado", en: "it's nothing to worry about", category: "opinion" },
          { es: "tu mamá esté aguantando bien", en: "your mom is holding up okay", category: "opinion" },
          { es: "les expliquen todo con calma", en: "they explain everything calmly", category: "activity" },
          { es: "no estés adivinando sola", en: "you're not guessing on your own", category: "opinion" },
          { es: "hoy sea un día más corto", en: "today is a shorter day", category: "time" },
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        completions: [
          { es: "en la llamada con el doctor", en: "on the call with the doctor", category: "activity" },
          { es: "hoy, con todo encima", en: "today, with everything on you", category: "time" },
          { es: "y avísame lo que sea", en: "and tell me whatever it is", category: "activity" },
          { es: "y no te guardes nada", en: "and don't keep anything in", category: "opinion" },
          { es: "aunque el día venga pesado", en: "even if the day comes on heavy", category: "time" },
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        completions: [
          { es: "después de dos turnos seguidos", en: "after two shifts in a row", category: "time" },
          { es: "aunque sean dos horas", en: "even if it's two hours", category: "time" },
          { es: "y no me contestes hoy", en: "and don't answer me today", category: "activity" },
          { es: "y deja el celular lejos", en: "and leave your phone far away", category: "activity" },
          { es: "que mañana también es largo", en: "because tomorrow is long too", category: "time" },
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        completions: [
          { es: "esperar contigo esos resultados", en: "wait for those results with you", category: "time" },
          { es: "cubrirte un turno", en: "cover a shift for you", category: "activity" },
          { es: "hacer que bogotá quedara más cerca", en: "make bogotá be closer", category: "other" },
          { es: "llamar yo al hospital por ti", en: "call the hospital for you myself", category: "activity" },
          { es: "darte una respuesta y no un deseo", en: "give you an answer and not a wish", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 227,
    theme: "Que te vaya bien",
    stems: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        completions: [
          { es: "encuentres vuelo para el viernes", en: "you find a flight for friday", category: "time" },
          { es: "te dejen entrar a verla", en: "they let you in to see her", category: "activity" },
          { es: "llegues a tiempo", en: "you get there in time", category: "time" },
          { es: "no se te complique la conexión", en: "the connection doesn't get complicated", category: "other" },
          { es: "el vuelo salga puntual", en: "the flight leaves on time", category: "time" },
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        completions: [
          { es: "el viaje sea tranquilo", en: "the trip is an easy one", category: "other" },
          { es: "te reciban en el aeropuerto", en: "they meet you at the airport", category: "other" },
          { es: "duermas algo en el avión", en: "you sleep a bit on the plane", category: "time" },
          { es: "no viajes con el estómago vacío", en: "you don't travel on an empty stomach", category: "food" },
          { es: "todo esté más tranquilo cuando llegues", en: "everything is calmer when you arrive", category: "time" },
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        completions: [
          { es: "camila, de verdad", en: "camila, truly", category: "other" },
          { es: "y me escribes al aterrizar", en: "and write me when you land", category: "activity" },
          { es: "y abraza a tu abuela por mí", en: "and hug your grandmother for me", category: "activity" },
          { es: "en todo el viaje", en: "for the whole trip", category: "time" },
          { es: "y vuelve cuando puedas", en: "and come back when you can", category: "time" },
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        completions: [
          { es: "esta noche antes de volar", en: "tonight before flying", category: "time" },
          { es: "en el vuelo, son seis horas", en: "on the flight, it's six hours", category: "time" },
          { es: "al llegar, no hagas nada más", en: "when you arrive, don't do anything else", category: "activity" },
          { es: "y deja la maleta para mañana", en: "and leave the suitcase for tomorrow", category: "activity" },
          { es: "aunque llegues de madrugada", en: "even if you land at dawn", category: "time" },
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        completions: [
          { es: "ir contigo", en: "go with you", category: "activity" },
          { es: "llevarte al aeropuerto el viernes", en: "drive you to the airport friday", category: "activity" },
          { es: "ayudarte desde aquí de alguna forma", en: "help you from here somehow", category: "activity" },
          { es: "tomarme la semana y acompañarte", en: "take the week off and go with you", category: "time" },
          { es: "estar en los dos lugares", en: "be in both places", category: "other" },
        ],
      },
    ],
  },
  {
    day: 228,
    theme: "Ojalá pudiera ir contigo",
    stems: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        completions: [
          { es: "ya hayas llegado", en: "you've already arrived", category: "time" },
          { es: "las noticias mejoren esta semana", en: "the news gets better this week", category: "time" },
          { es: "comas algo hoy, en serio", en: "you eat something today, really", category: "food" },
          { es: "te den una cama para quedarte", en: "they give you a bed to stay", category: "other" },
          { es: "alguien te releve unas horas", en: "someone relieves you for a few hours", category: "time" },
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        completions: [
          { es: "no estés sola en el hospital", en: "you're not alone at the hospital", category: "other" },
          { es: "se turnen entre todos", en: "you all take turns", category: "activity" },
          { es: "pidas ayuda si la necesitas", en: "you ask for help if you need it", category: "activity" },
          { es: "tu familia también te cuide", en: "your family takes care of you too", category: "other" },
          { es: "encuentres un rato para ti", en: "you find a moment for yourself", category: "time" },
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        completions: [
          { es: "con los médicos hoy", en: "with the doctors today", category: "activity" },
          { es: "cada día de esta semana", en: "every day of this week", category: "time" },
          { es: "en todo, camila", en: "with everything, camila", category: "other" },
          { es: "y que las noticias sean buenas", en: "and may the news be good", category: "other" },
          { es: "y me cuentas solo si quieres", en: "and tell me only if you want to", category: "activity" },
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        completions: [
          { es: "aunque allá ya sea de madrugada", en: "even if it's already dawn there", category: "time" },
          { es: "aunque sea en la silla del hospital", en: "even if it's in the hospital chair", category: "other" },
          { es: "cuando puedas, no cuando debas", en: "when you can, not when you should", category: "time" },
          { es: "y que nadie te despierte", en: "and may nobody wake you", category: "other" },
          { es: "aunque duermas a pedazos", en: "even if you sleep in pieces", category: "time" },
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        completions: [
          { es: "estar ahí contigo esta semana", en: "be there with you this week", category: "time" },
          { es: "quitarte un poco de la preocupación", en: "take a little of the worry off you", category: "opinion" },
          { es: "hablar lo bastante bien para decirte esto mejor", en: "speak well enough to say this better", category: "opinion" },
          { es: "mandarte algo más que palabras", en: "send you something more than words", category: "other" },
          { es: "hacer las siete horas de diferencia más cortas", en: "make the seven-hour difference shorter", category: "time" },
        ],
      },
    ],
  },
  {
    day: 229,
    theme: "Que descanses",
    stems: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        completions: [
          { es: "estés durmiendo cuando te llegue esto", en: "you're asleep when this reaches you", category: "time" },
          { es: "mañana sea un día más tranquilo", en: "tomorrow is a calmer day", category: "time" },
          { es: "te sirva de algo leerme", en: "reading me helps somehow", category: "opinion" },
          { es: "no te despierte el celular", en: "your phone doesn't wake you", category: "other" },
          { es: "esta noche sea la última difícil", en: "tonight is the last hard one", category: "time" },
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        completions: [
          { es: "no me contestes por compromiso", en: "you're not answering me out of obligation", category: "opinion" },
          { es: "estés comiendo aunque sea mal", en: "you're eating, even badly", category: "food" },
          { es: "tu familia te cuide a ti también", en: "your family takes care of you too", category: "other" },
          { es: "sepas que no espero respuesta", en: "you know i'm not expecting a reply", category: "opinion" },
          { es: "alguien te haya hecho reír hoy", en: "someone made you laugh today", category: "other" },
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        completions: [
          { es: "hoy y ya, no digo más", en: "today and that's it, i'll stop there", category: "time" },
          { es: "en la visita de la tarde", en: "on the afternoon visit", category: "time" },
          { es: "y no tienes que responder", en: "and you don't have to reply", category: "activity" },
          { es: "y mañana te escribo igual", en: "and i'll write you tomorrow all the same", category: "time" },
          { es: "aunque no me leas hasta el sábado", en: "even if you don't read me until saturday", category: "time" },
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        completions: [
          { es: "allá ya son las once", en: "it's eleven there already", category: "time" },
          { es: "te lo voy a decir todas las noches", en: "i'm going to say it to you every night", category: "time" },
          { es: "es lo único que puedo mandarte desde aquí", en: "it's the only thing i can send you from here", category: "other" },
          { es: "y mañana empezamos otra vez", en: "and tomorrow we start again", category: "time" },
          { es: "aunque sea la séptima noche igual", en: "even if it's the seventh identical night", category: "time" },
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        completions: [
          { es: "llamarte a cualquier hora sin despertarte", en: "call you any time without waking you", category: "time" },
          { es: "borrar las siete horas de diferencia", en: "erase the seven-hour difference", category: "time" },
          { es: "sentarme un rato contigo, sin hablar", en: "sit with you a while, without talking", category: "activity" },
          { es: "mandarte comida de verdad", en: "send you real food", category: "food" },
          { es: "estar de guardia yo esta noche", en: "be the one on call tonight", category: "time" },
        ],
      },
    ],
  },
  {
    day: 230,
    theme: "Ojalá la hubieras conocido",
    stems: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        completions: [
          { es: "siga mejorando así de rápido", en: "she keeps improving this fast", category: "time" },
          { es: "le den de alta la semana que viene", en: "they discharge her next week", category: "time" },
          { es: "te dejen quedarte unos días más", en: "they let you stay a few more days", category: "time" },
          { es: "puedas sentarte a comer con ella", en: "you can sit and eat with her", category: "food" },
          { es: "esta sea la buena de verdad", en: "this is the real turn", category: "opinion" },
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        completions: [
          { es: "ahora sí duermas ocho horas", en: "you actually sleep eight hours now", category: "time" },
          { es: "te caiga el alivio de golpe", en: "the relief hits you all at once", category: "opinion" },
          { es: "te tomes un día entero para ti", en: "you take a whole day for yourself", category: "time" },
          { es: "celebren aunque sea con un café", en: "you celebrate, even with a coffee", category: "food" },
          { es: "no vuelvas a trabajar el lunes", en: "you don't go back to work on monday", category: "time" },
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        completions: [
          { es: "en estos últimos días allá", en: "in these last days over there", category: "time" },
          { es: "de regreso y me avisas", en: "on the way back and let me know", category: "activity" },
          { es: "con toda tu familia junta", en: "with your whole family together", category: "other" },
          { es: "en la despedida, que esa duele", en: "with the goodbye, that one hurts", category: "opinion" },
          { es: "y guárdame una historia de ella", en: "and save me a story about her", category: "activity" },
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        completions: [
          { es: "hoy de verdad, no a medias", en: "really today, not halfway", category: "time" },
          { es: "sin alarma por primera vez", en: "with no alarm for the first time", category: "time" },
          { es: "por fin, te lo debes", en: "finally, you owe it to yourself", category: "opinion" },
          { es: "y duerme hasta que te dé la gana", en: "and sleep as long as you feel like", category: "time" },
          { es: "que ya pasó lo peor", en: "the worst is over now", category: "opinion" },
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        completions: [
          { es: "haberla conocido", en: "have met her", category: "other" },
          { es: "oírle contar todo eso ella misma", en: "hear her tell all that herself", category: "activity" },
          { es: "ir algún día a bogotá a saludarla", en: "go to bogotá someday to say hello", category: "activity" },
          { es: "grabarla contando esas historias", en: "record her telling those stories", category: "activity" },
          { es: "aprender español con ella una tarde", en: "learn spanish with her for an afternoon", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 231,
    theme: "Repaso: Ojalá",
    stems: [
      {
        stem: "Ojalá…",
        english: "I hope… / Hopefully…",
        completions: [
          { es: "esta semana termine tan bien como va", en: "this week ends as well as it's going", category: "time" },
          { es: "nos veamos el jueves como siempre", en: "we see each other thursday as always", category: "time" },
          { es: "no tenga que usar estas frases muy seguido", en: "i don't have to use these phrases very often", category: "opinion" },
          { es: "las tenga listas la próxima vez", en: "i have them ready next time", category: "time" },
          { es: "alguien más las aprenda antes de necesitarlas", en: "someone else learns them before needing them", category: "opinion" },
        ],
      },
      {
        stem: "Espero que…",
        english: "I hope that…",
        completions: [
          { es: "te hayas sentido acompañada", en: "you felt accompanied", category: "opinion" },
          { es: "mis mensajes no te hayan pesado", en: "my messages weren't a burden", category: "opinion" },
          { es: "sepas que puedo repetirlo cuando haga falta", en: "you know i can do it again whenever needed", category: "opinion" },
          { es: "no te haya sonado a fórmula", en: "it didn't sound like a formula to you", category: "opinion" },
          { es: "hayas notado que nunca cambié al inglés", en: "you noticed i never switched to english", category: "other" },
        ],
      },
      {
        stem: "Que te vaya bien…",
        english: "Hope it goes well… / Take care…",
        completions: [
          { es: "lo dije doce veces esta semana", en: "i said it twelve times this week", category: "time" },
          { es: "y cada vez lo sentí igual", en: "and each time i meant it the same", category: "opinion" },
          { es: "con lo que venga ahora", en: "with whatever comes now", category: "other" },
          { es: "en el vuelo de regreso", en: "on the flight back", category: "time" },
          { es: "y nos vemos en el café", en: "and see you at the café", category: "other" },
        ],
      },
      {
        stem: "Que descanses…",
        english: "Get some rest… / Sleep well…",
        completions: [
          { es: "fue mi frase de la semana", en: "was my phrase of the week", category: "time" },
          { es: "cuatro palabras, siete noches", en: "four words, seven nights", category: "time" },
          { es: "y resultó que alcanzaba", en: "and it turned out to be enough", category: "opinion" },
          { es: "y nunca sonó repetido", en: "and it never sounded repetitive", category: "opinion" },
          { es: "esta noche también, aunque ya estés bien", en: "tonight too, even though you're okay now", category: "time" },
        ],
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        completions: [
          { es: "haber tenido estas frases hace diez años", en: "have had these phrases ten years ago", category: "time" },
          { es: "enseñárselas a mis estudiantes antes que la gramática", en: "teach them to my students before the grammar", category: "activity" },
          { es: "no haberlas aprendido en una semana así", en: "not have learned them in a week like this", category: "opinion" },
          { es: "decirle a la marlana de enero que esto llegaba", en: "tell january's marlana that this was coming", category: "other" },
          { es: "guardar esta semana en algún lado", en: "keep this week somewhere", category: "other" },
        ],
      },
    ],
  },
];
