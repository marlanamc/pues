import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 4 — "Notas de voz" (days 204–210).
 * Stems must match content/drafts/invierno/week4-frames.ts for the same day.
 */
export const invWeek4SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 204,
    theme: "El primer audio",
    stems: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        completions: [
          { es: "escribirlo me toma media hora", en: "typing it takes me half an hour", category: "time" },
          { es: "quiero practicar hablando sola", en: "i want to practice talking alone", category: "activity" },
          { es: "hoy no alcancé a llamarte", en: "i didn't get a chance to call you today", category: "time" },
          { es: "es más rápido que un mensaje", en: "it's faster than a message", category: "opinion" },
          { es: "tengo las manos ocupadas", en: "my hands are full", category: "other" },
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        completions: [
          { es: "ya grabé el primero", en: "i've recorded the first one", category: "activity" },
          { es: "lo borré cuatro veces", en: "i deleted it four times", category: "activity" },
          { es: "me da más miedo esto que la llamada", en: "this scares me more than the call did", category: "opinion" },
          { es: "no sabía cómo empezar un audio", en: "i didn't know how to start a voice note", category: "other" },
          { es: "el silencio al principio se oye horrible", en: "the silence at the start sounds terrible", category: "opinion" },
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        completions: [
          { es: "apreté grabar y me quedé muda", en: "i hit record and went mute", category: "activity" },
          { es: "dos frases y ya no supe seguir", en: "two sentences and i didn't know how to go on", category: "other" },
          { es: "la cuarta versión quedó igual que la primera", en: "the fourth version came out the same as the first", category: "other" },
          { es: "me oí y me dio risa", en: "i heard myself and it made me laugh", category: "opinion" },
          { es: "diez segundos y ya se me acabó el tema", en: "ten seconds and i'd run out of topic", category: "time" },
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        completions: [
          { es: "si se entiende algo", en: "if any of it makes sense", category: "other" },
          { es: "sin apuro", en: "no rush", category: "time" },
          { es: "y te mando otro", en: "and i'll send you another", category: "activity" },
          { es: "qué debería practicar primero", en: "what i should practice first", category: "activity" },
          { es: "aunque sea mañana", en: "even if it's tomorrow", category: "time" },
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        completions: [
          { es: "y lo repito", en: "and i'll do it over", category: "activity" },
          { es: "por el chat", en: "on the chat", category: "other" },
          { es: "y hablamos mañana", en: "and we'll talk tomorrow", category: "time" },
          { es: "a la hora que sea", en: "at whatever hour", category: "time" },
          { es: "y te contesto en cuanto pueda", en: "and i'll answer as soon as i can", category: "time" },
        ],
      },
    ],
  },
  {
    day: 205,
    theme: "Sin borrar",
    stems: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        completions: [
          { es: "esta vez no lo borré", en: "this time i didn't delete it", category: "activity" },
          { es: "prefiero la primera toma", en: "i prefer the first take", category: "opinion" },
          { es: "hoy decidí no editarme", en: "today i decided not to edit myself", category: "activity" },
          { es: "quiero que quede como salió", en: "i want it to stay how it came out", category: "opinion" },
          { es: "los errores también cuentan", en: "the mistakes count too", category: "opinion" },
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        completions: [
          { es: "este tiene errores y lo mandé igual", en: "this one has mistakes and i sent it anyway", category: "other" },
          { es: "me trabé dos veces y seguí", en: "i got stuck twice and kept going", category: "activity" },
          { es: "borrar me estaba frenando", en: "deleting was slowing me down", category: "opinion" },
          { es: "grabar cinco veces no me hacía mejor", en: "recording five times wasn't making me better", category: "opinion" },
          { es: "el miedo estaba en el botón de borrar", en: "the fear was in the delete button", category: "opinion" },
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        completions: [
          { es: "grabé una sola vez y ya", en: "i recorded once and that was it", category: "activity" },
          { es: "se oye un perro ladrando al fondo", en: "there's a dog barking in the background", category: "other" },
          { es: "me equivoqué en el género otra vez", en: "i got the gender wrong again", category: "other" },
          { es: "dije \"pues\" antes de cada frase", en: "i said \"pues\" before every sentence", category: "activity" },
          { es: "sonó desordenado y se entendió igual", en: "it sounded messy and was understood all the same", category: "opinion" },
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        completions: [
          { es: "si suena natural así", en: "if it sounds natural like this", category: "opinion" },
          { es: "cuál versión prefieres", en: "which version you prefer", category: "opinion" },
          { es: "aunque sea con un audio corto", en: "even if it's just a short voice note", category: "other" },
          { es: "si te molesta el ruido de fondo", en: "if the background noise bothers you", category: "opinion" },
          { es: "y me dices la verdad", en: "and tell me the truth", category: "activity" },
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        completions: [
          { es: "y no me ofendo", en: "and i won't be offended", category: "opinion" },
          { es: "las correcciones", en: "the corrections", category: "other" },
          { es: "y lo grabo de nuevo", en: "and i'll record it again", category: "activity" },
          { es: "sin rodeos, mejor directo", en: "no beating around the bush, better direct", category: "opinion" },
          { es: "aunque sea para decirme que estuvo mal", en: "even if it's to tell me it was bad", category: "other" },
        ],
      },
    ],
  },
  {
    day: 206,
    theme: "Dos minutos seguidos",
    stems: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        completions: [
          { es: "hoy me salieron dos minutos seguidos", en: "today two straight minutes came out", category: "time" },
          { es: "tengo una historia larga", en: "i have a long story", category: "other" },
          { es: "en texto no cabía", en: "it wouldn't fit in text", category: "other" },
          { es: "quiero probar hasta dónde llego", en: "i want to test how far i get", category: "activity" },
          { es: "hablar seguido me está saliendo", en: "talking without stopping is starting to work for me", category: "activity" },
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        completions: [
          { es: "no paré ni una vez", en: "i didn't stop once", category: "activity" },
          { es: "se me fue el miedo a mitad del audio", en: "the fear left me halfway through the recording", category: "time" },
          { es: "dos minutos ya no me parecen tanto", en: "two minutes doesn't seem like much anymore", category: "opinion" },
          { es: "el primer minuto es el difícil", en: "the first minute is the hard one", category: "opinion" },
          { es: "después del minuto uno se me olvidó que grababa", en: "after minute one i forgot i was recording", category: "time" },
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        completions: [
          { es: "empecé sin saber cómo terminar", en: "i started without knowing how to end", category: "other" },
          { es: "usé las diez muletillas en dos minutos", en: "i used all ten fillers in two minutes", category: "activity" },
          { es: "al final me sobraba qué decir", en: "by the end i had more to say, not less", category: "other" },
          { es: "hablé del colegio, de rocío y del metro", en: "i talked about school, about rocío, and about the train", category: "other" },
          { es: "no lo escuché antes de mandarlo", en: "i didn't listen to it before sending it", category: "activity" },
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        completions: [
          { es: "si dos minutos es mucho", en: "if two minutes is a lot", category: "time" },
          { es: "hasta dónde llegaste escuchando", en: "how far you got listening", category: "other" },
          { es: "y subo a tres", en: "and i'll go up to three", category: "time" },
          { es: "si se me entiende todo el audio", en: "if the whole recording is understandable", category: "other" },
          { es: "cuál parte te gustó más", en: "which part you liked most", category: "opinion" },
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        completions: [
          { es: "si me fui por las ramas", en: "if i went off on tangents", category: "other" },
          { es: "qué parte no se entendió", en: "which part wasn't clear", category: "other" },
          { es: "y lo corto en dos", en: "and i'll split it in two", category: "activity" },
          { es: "si te aburriste a mitad", en: "if you got bored halfway", category: "opinion" },
          { es: "y mañana hago uno más corto", en: "and tomorrow i'll make a shorter one", category: "time" },
        ],
      },
    ],
  },
  {
    day: 207,
    theme: "Escucharme a mí misma",
    stems: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        completions: [
          { es: "acabo de escucharme y quiero contarte", en: "i just listened to myself and i want to tell you", category: "activity" },
          { es: "descubrí algo raro", en: "i discovered something odd", category: "other" },
          { es: "no sé si esa voz es mía", en: "i don't know if that voice is mine", category: "opinion" },
          { es: "necesito contárselo a alguien", en: "i need to tell someone about it", category: "activity" },
          { es: "nunca me había oído en otro idioma", en: "i'd never heard myself in another language", category: "other" },
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        completions: [
          { es: "me escuché por primera vez en español", en: "i heard myself in spanish for the first time", category: "other" },
          { es: "sueno más lenta de lo que creía", en: "i sound slower than i thought", category: "opinion" },
          { es: "también sueno más tranquila", en: "i also sound calmer", category: "opinion" },
          { es: "por dentro sentía pánico y no se oye", en: "inside i felt panic and you can't hear it", category: "opinion" },
          { es: "mi voz en español es más grave", en: "my voice in spanish is deeper", category: "opinion" },
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        completions: [
          { es: "mi acento no es tan malo como pensaba", en: "my accent isn't as bad as i thought", category: "opinion" },
          { es: "las pausas casi no se notan", en: "the pauses are barely noticeable", category: "opinion" },
          { es: "dije \"o sea\" nueve veces", en: "i said \"o sea\" nine times", category: "other" },
          { es: "hablo más despacio en español que en inglés", en: "i speak more slowly in spanish than in english", category: "opinion" },
          { es: "las frases largas son las que se enredan", en: "the long sentences are the ones that tangle", category: "opinion" },
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        completions: [
          { es: "qué te suena raro a ti", en: "what sounds odd to you", category: "opinion" },
          { es: "si tú también te escuchas", en: "if you listen to yourself too", category: "activity" },
          { es: "esto me dio mucho en qué pensar", en: "this gave me a lot to think about", category: "opinion" },
          { es: "si me oyes acento de algún país", en: "if you hear any country's accent in me", category: "opinion" },
          { es: "qué palabra digo peor", en: "which word i say worst", category: "opinion" },
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        completions: [
          { es: "y guardo el audio", en: "and i'll keep the recording", category: "activity" },
          { es: "tu opinión sincera", en: "your honest opinion", category: "opinion" },
          { es: "y comparamos las voces", en: "and we'll compare voices", category: "activity" },
          { es: "y lo escuchamos juntas el jueves", en: "and we'll listen to it together on thursday", category: "time" },
          { es: "y me mandas uno tuyo", en: "and send me one of yours", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 208,
    theme: "Audios del colegio",
    stems: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        completions: [
          { es: "hoy le mandé uno a una compañera del colegio", en: "today i sent one to a colleague at school", category: "activity" },
          { es: "tengo tres minutos entre clases", en: "i've got three minutes between classes", category: "time" },
          { es: "voy caminando al metro", en: "i'm walking to the train", category: "activity" },
          { es: "pasó algo bueno y quiero contarlo", en: "something good happened and i want to tell it", category: "other" },
          { es: "en la sala de maestros no puedo hablar fuerte", en: "i can't talk loudly in the teachers' lounge", category: "other" },
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        completions: [
          { es: "ya no solo te mando audios a ti", en: "i don't only send voice notes to you anymore", category: "activity" },
          { es: "rocío me contestó con otro audio", en: "rocío answered me with another voice note", category: "other" },
          { es: "en el trabajo también funciona", en: "it works at work too", category: "opinion" },
          { es: "llevábamos ocho años sin hablarnos en español", en: "we'd gone eight years without speaking spanish to each other", category: "time" },
          { es: "ahora somos dos practicando", en: "now there are two of us practicing", category: "other" },
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        completions: [
          { es: "rocío es de guatemala y lleva ocho años aquí", en: "rocío is from guatemala and has been here eight years", category: "other" },
          { es: "nunca habíamos hablado en español en el colegio", en: "we'd never spoken spanish at school", category: "other" },
          { es: "ahora nos mandamos audios entre clases", en: "now we send each other voice notes between classes", category: "activity" },
          { es: "ella habla más rápido que tú", en: "she talks faster than you do", category: "opinion" },
          { es: "me corrigió una palabra y se lo agradecí", en: "she corrected one word and i thanked her", category: "activity" },
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        completions: [
          { es: "si eso cuenta como práctica", en: "if that counts as practice", category: "opinion" },
          { es: "sé que estás en turno", en: "i know you're on shift", category: "time" },
          { es: "y te presento a rocío", en: "and i'll introduce you to rocío", category: "activity" },
          { es: "si te parece bien que practique con ella también", en: "if you're okay with me practicing with her too", category: "opinion" },
          { es: "cuando termines de trabajar", en: "when you finish work", category: "time" },
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        completions: [
          { es: "cuando salgas del hospital", en: "when you get out of the hospital", category: "time" },
          { es: "aunque sea de una línea", en: "even if it's one line", category: "other" },
          { es: "y te cuento el resto", en: "and i'll tell you the rest", category: "activity" },
          { es: "y dormimos los dos, que ya es tarde", en: "and we'll both sleep, it's late already", category: "time" },
          { es: "mañana con calma", en: "tomorrow, calmly", category: "time" },
        ],
      },
    ],
  },
  {
    day: 209,
    theme: "Ya no escribo, mando audio",
    stems: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        completions: [
          { es: "ya me sale más rápido que escribir", en: "it comes out faster than typing now", category: "time" },
          { es: "el texto me hacía pensar demasiado", en: "text made me overthink", category: "opinion" },
          { es: "así no me corrijo tres veces", en: "this way i don't correct myself three times", category: "activity" },
          { es: "es lo primero que se me ocurre ahora", en: "it's the first thing that occurs to me now", category: "other" },
          { es: "escribir en español me da más trabajo", en: "typing in spanish takes me more work", category: "opinion" },
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        completions: [
          { es: "cambié el hábito sin darme cuenta", en: "i changed the habit without realizing", category: "activity" },
          { es: "llevo seis días mandando audios", en: "i've been sending voice notes for six days", category: "time" },
          { es: "ya no preparo lo que voy a decir", en: "i don't prepare what i'm going to say anymore", category: "activity" },
          { es: "el botón de grabar dejó de asustarme", en: "the record button stopped scaring me", category: "opinion" },
          { es: "hablar dejó de ser la opción difícil", en: "speaking stopped being the hard option", category: "opinion" },
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        completions: [
          { es: "hoy grabé mientras cocinaba", en: "today i recorded while cooking", category: "activity" },
          { es: "mandé cuatro audios y ninguno lo repetí", en: "i sent four voice notes and didn't redo one", category: "activity" },
          { es: "escribir en español ahora me parece más difícil", en: "typing in spanish seems harder to me now", category: "opinion" },
          { es: "grabé uno en el metro y se oye el tren", en: "i recorded one on the train and you can hear it", category: "other" },
          { es: "ya no me escucho antes de mandar", en: "i don't listen back before sending anymore", category: "activity" },
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        completions: [
          { es: "si notas la diferencia", en: "if you notice the difference", category: "opinion" },
          { es: "y seguimos así", en: "and we'll keep going like this", category: "activity" },
          { es: "no hay prisa ninguna", en: "there's no hurry at all", category: "time" },
          { es: "si te sirve este ritmo", en: "if this rhythm works for you", category: "opinion" },
          { es: "y me dices qué practico la semana que viene", en: "and tell me what i practice next week", category: "time" },
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        completions: [
          { es: "o me mandas audio, como quieras", en: "or send me audio, however you like", category: "other" },
          { es: "y lo vemos el jueves", en: "and we'll look at it on thursday", category: "time" },
          { es: "que para eso está el chat", en: "that's what the chat is for", category: "other" },
          { es: "y no te preocupes por la hora", en: "and don't worry about the hour", category: "time" },
          { es: "en el idioma que te salga", en: "in whichever language comes out", category: "other" },
        ],
      },
    ],
  },
  {
    day: 210,
    theme: "Repaso: Notas de voz",
    stems: [
      {
        stem: "Te mando un audio porque…",
        english: "I'm sending you a voice note because…",
        completions: [
          { es: "es el resumen de la semana", en: "it's the week's recap", category: "other" },
          { es: "quiero cerrarla hablando", en: "i want to close it by speaking", category: "activity" },
          { es: "ya es mi forma normal de contestar", en: "it's my normal way of answering now", category: "activity" },
          { es: "un texto no diría lo mismo", en: "a text wouldn't say the same thing", category: "opinion" },
          { es: "quiero oírme al final de la semana", en: "i want to hear myself at the end of the week", category: "activity" },
        ],
      },
      {
        stem: "Era para decirte que…",
        english: "I was just going to say that…",
        completions: [
          { es: "grabé dieciocho audios en siete días", en: "i recorded eighteen voice notes in seven days", category: "time" },
          { es: "el primero duró once segundos", en: "the first lasted eleven seconds", category: "time" },
          { es: "el último duró tres minutos", en: "the last lasted three minutes", category: "time" },
          { es: "no borré ni uno desde el martes", en: "i haven't deleted a single one since tuesday", category: "time" },
          { es: "esta semana hablé más que en todo el otoño", en: "this week i spoke more than in the whole fall", category: "time" },
        ],
      },
      {
        stem: "Te cuento rapidito:…",
        english: "Quick rundown:…",
        completions: [
          { es: "lo que cambió fue no borrar", en: "what changed was not deleting", category: "opinion" },
          { es: "hablar sola resultó más fácil que conversar", en: "talking alone turned out easier than conversing", category: "opinion" },
          { es: "el micrófono no juzga a nadie", en: "the microphone doesn't judge anybody", category: "opinion" },
          { es: "cuatro semanas y ya no ensayo nada", en: "four weeks and i don't rehearse anything anymore", category: "time" },
          { es: "ahora tengo dos personas con quien practicar", en: "now i have two people to practice with", category: "other" },
        ],
      },
      {
        stem: "Avísame cuando puedas…",
        english: "Let me know when you can…",
        completions: [
          { es: "qué semana viene ahora", en: "what week comes now", category: "time" },
          { es: "si vuelves al café el jueves", en: "if you're back at the café on thursday", category: "time" },
          { es: "y te mando el último de la semana", en: "and i'll send you the last one of the week", category: "time" },
          { es: "cómo van tus turnos", en: "how your shifts are going", category: "other" },
          { es: "y celebramos el primer mes", en: "and we'll celebrate the first month", category: "time" },
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "Anything at all, just message me…",
        completions: [
          { es: "y arrancamos con lo que sigue", en: "and we'll start on what's next", category: "activity" },
          { es: "que ya perdí la vergüenza", en: "because i've lost the embarrassment", category: "opinion" },
          { es: "ahora contesto en audio", en: "i answer in audio now", category: "activity" },
          { es: "y seguimos en invierno", en: "and we'll keep going through winter", category: "time" },
          { es: "y gracias por estas cuatro semanas", en: "and thank you for these four weeks", category: "other" },
        ],
      },
    ],
  },
];
