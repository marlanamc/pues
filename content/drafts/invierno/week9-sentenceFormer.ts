import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 9 — "Interrumpir" (days 239–245).
 * Stems must match content/drafts/invierno/week9-frames.ts for the same day.
 */
export const invWeek9SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 239,
    theme: "No logro entrar",
    stems: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        completions: [
          { es: "pero es rapidísimo", en: "but it's really quick", category: "time" },
          { es: "solo quiero agregar algo", en: "i just want to add something", category: "activity" },
          { es: "¿puedo decir una cosa?", en: "can i say one thing?", category: "activity" },
          { es: "es sobre lo que acabas de decir", en: "it's about what you just said", category: "other" },
          { es: "y después te dejo seguir", en: "and then i'll let you go on", category: "time" },
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        completions: [
          { es: "¿de qué fecha estamos hablando?", en: "what date are we talking about?", category: "time" },
          { es: "me perdí en la parte del presupuesto", en: "i got lost at the budget part", category: "other" },
          { es: "regresemos un paso", en: "let's back up a step", category: "activity" },
          { es: "¿eso ya lo decidimos?", en: "did we already decide that?", category: "other" },
          { es: "no entendí quién hace qué", en: "i didn't get who does what", category: "other" },
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        completions: [
          { es: "faltan las familias del turno de noche", en: "we're missing the night-shift families", category: "other" },
          { es: "ya tenemos el salón confirmado", en: "we've got the room confirmed", category: "other" },
          { es: "rocío no puede el jueves", en: "rocío can't do thursday", category: "time" },
          { es: "hay que avisarle a la directora", en: "we have to tell the principal", category: "activity" },
          { es: "quedan dos semanas nada más", en: "there are only two weeks left", category: "time" },
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        completions: [
          { es: "¿quién manda la invitación?", en: "who sends the invitation?", category: "other" },
          { es: "rápida y sigo escuchando", en: "quickly and i'll go back to listening", category: "time" },
          { es: "nada más, y ya me callo", en: "and that's all, i'll be quiet", category: "activity" },
          { es: "¿en qué idioma la mandamos?", en: "what language do we send it in?", category: "other" },
          { es: "¿esto se decide hoy o después?", en: "is this decided today or later?", category: "time" },
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        completions: [
          { es: "eso ya lo intentamos el año pasado", en: "we already tried that last year", category: "time" },
          { es: "falta pensar en quién traduce", en: "we still need to think about who translates", category: "activity" },
          { es: "primero hay que saber cuántos vienen", en: "first we need to know how many are coming", category: "other" },
          { es: "eso depende del horario", en: "that depends on the schedule", category: "time" },
          { es: "no todas las familias tienen carro", en: "not all the families have a car", category: "other" },
        ],
      },
    ],
  },
  {
    day: 240,
    theme: "Perdona que te interrumpa",
    stems: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        completions: [
          { es: "pero creo que nos falta un dato", en: "but i think we're missing a piece of information", category: "other" },
          { es: "otra vez, es sobre lo mismo", en: "again, it's about the same thing", category: "other" },
          { es: "directora, es un minuto", en: "principal, it'll take a minute", category: "time" },
          { es: "quiero decir algo antes del voto", en: "i want to say something before the vote", category: "activity" },
          { es: "y ya no vuelvo a interrumpir", en: "and i won't interrupt again", category: "activity" },
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        completions: [
          { es: "están hablando dos a la vez", en: "two people are talking at once", category: "other" },
          { es: "¿quién dijo eso?", en: "who said that?", category: "other" },
          { es: "no decidamos eso hoy", en: "let's not decide that today", category: "time" },
          { es: "déjame anotarlo primero", en: "let me write it down first", category: "activity" },
          { es: "esa parte sí quiero entenderla", en: "that part i do want to understand", category: "opinion" },
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        completions: [
          { es: "son cuarenta familias, no veinte", en: "it's forty families, not twenty", category: "other" },
          { es: "cambiaron la fecha del salón", en: "they changed the room's date", category: "time" },
          { es: "hay que invitar a yesenia", en: "we have to invite yesenia", category: "activity" },
          { es: "el permiso ya salió", en: "the permission already came through", category: "other" },
          { es: "necesitamos sillas para cincuenta", en: "we need chairs for fifty", category: "other" },
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        completions: [
          { es: "¿la comida la ponemos nosotros?", en: "are we providing the food?", category: "food" },
          { es: "¿eso lo hace el comité o el colegio?", en: "does the committee or the school do that?", category: "other" },
          { es: "chiquita y ya no molesto", en: "tiny, and then i'll stop bothering you", category: "activity" },
          { es: "¿alguien puede quedarse a ordenar?", en: "can anyone stay to clean up?", category: "activity" },
          { es: "¿cerramos a las ocho o a las nueve?", en: "do we finish at eight or nine?", category: "time" },
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        completions: [
          { es: "en marzo nadie va a tener tiempo", en: "in march nobody's going to have time", category: "time" },
          { es: "eso sale caro para el comité", en: "that's expensive for the committee", category: "other" },
          { es: "preguntemos primero quién puede", en: "let's first ask who's available", category: "activity" },
          { es: "las familias ya dijeron otra cosa", en: "the families already said otherwise", category: "other" },
          { es: "hay que decidirlo hoy, no en abril", en: "we have to decide it today, not in april", category: "time" },
        ],
      },
    ],
  },
  {
    day: 241,
    theme: "Espera, espera",
    stems: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        completions: [
          { es: "¿me repites la última parte?", en: "could you repeat the last part?", category: "activity" },
          { es: "¿qué significa \"convocatoria\"?", en: "what does \"convocatoria\" mean?", category: "other" },
          { es: "¿entendí bien que es el once?", en: "did i get it right that it's the eleventh?", category: "time" },
          { es: "esa palabra no la conozco", en: "i don't know that word", category: "other" },
          { es: "¿lo puedes decir más despacio?", en: "can you say it more slowly?", category: "activity" },
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        completions: [
          { es: "vas rapidísimo", en: "you're going really fast", category: "other" },
          { es: "dijiste tres cosas juntas", en: "you said three things at once", category: "other" },
          { es: "vamos una por una", en: "let's go one at a time", category: "activity" },
          { es: "esa parte me la perdí entera", en: "i missed that part completely", category: "other" },
          { es: "¿de quién estamos hablando ahora?", en: "who are we talking about now?", category: "other" },
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        completions: [
          { es: "quedó pendiente lo de los volantes", en: "the flyers are still outstanding", category: "other" },
          { es: "prometí llamar a dos familias", en: "i promised to call two families", category: "activity" },
          { es: "el contacto se llama delia", en: "the contact is called delia", category: "other" },
          { es: "falta el permiso del gimnasio", en: "the gym permission is still missing", category: "other" },
          { es: "la lista está en mi correo", en: "the list is in my email", category: "other" },
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        completions: [
          { es: "no capté esa palabra, ¿cómo era?", en: "i didn't catch that word, what was it?", category: "other" },
          { es: "¿dijiste quince o cincuenta?", en: "did you say fifteen or fifty?", category: "other" },
          { es: "¿alguien está anotando esto?", en: "is anyone writing this down?", category: "activity" },
          { es: "¿me pasas ese número después?", en: "can you send me that number after?", category: "activity" },
          { es: "¿eso está en el correo que mandaron?", en: "is that in the email they sent?", category: "other" },
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        completions: [
          { es: "en teoría, porque en la práctica no da tiempo", en: "in theory, because in practice there's no time", category: "time" },
          { es: "ese día chocan las dos actividades", en: "that day the two activities clash", category: "time" },
          { es: "nuestras familias trabajan de noche", en: "our families work nights", category: "other" },
          { es: "eso ya lo dijimos la vez pasada", en: "we already said that last time", category: "time" },
          { es: "todavía nadie confirmó nada", en: "nobody has confirmed anything yet", category: "other" },
        ],
      },
    ],
  },
  {
    day: 242,
    theme: "Antes de que se me olvide",
    stems: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        completions: [
          { es: "es sobre eso mismo", en: "it's about that very thing", category: "other" },
          { es: "quiero sumar a lo que dijiste", en: "i want to add to what you said", category: "activity" },
          { es: "creo que ese dato cambió", en: "i think that figure changed", category: "other" },
          { es: "antes de que pasemos de tema", en: "before we move on", category: "time" },
          { es: "porque si no, se me pasa", en: "because otherwise i'll miss my chance", category: "time" },
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        completions: [
          { es: "no cerremos ese punto todavía", en: "let's not close that point yet", category: "time" },
          { es: "me quedé con una duda de eso", en: "i've still got a question about that", category: "other" },
          { es: "volvamos a lo de las traducciones", en: "let's go back to the translations", category: "activity" },
          { es: "eso no es lo que entendí yo", en: "that's not what i understood", category: "opinion" },
          { es: "déjenme decir una cosa de eso", en: "let me say one thing about that", category: "activity" },
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        completions: [
          { es: "las familias pidieron que fuera más temprano", en: "the families asked for it to be earlier", category: "time" },
          { es: "nadie ha hablado del transporte", en: "nobody has talked about transportation", category: "other" },
          { es: "tengo la lista de quién confirmó", en: "i have the list of who confirmed", category: "other" },
          { es: "hay dos familias sin celular", en: "there are two families without a phone", category: "other" },
          { es: "el año pasado sobró comida", en: "last year there was food left over", category: "food" },
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        completions: [
          { es: "que quiero decir al final, si hay tiempo", en: "i want to say at the end, if there's time", category: "time" },
          { es: "¿me dan dos minutos ahorita?", en: "can i have two minutes right now?", category: "time" },
          { es: "que nadie ha mencionado: el transporte", en: "nobody has mentioned: transportation", category: "other" },
          { es: "que se me quedó de la vez pasada", en: "that i've been carrying since last time", category: "time" },
          { es: "y con eso termino", en: "and with that i'm done", category: "activity" },
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        completions: [
          { es: "eso lo decidimos sin preguntarles a ellas", en: "we decided that without asking them", category: "other" },
          { es: "nos saltamos la parte del horario", en: "we skipped the schedule part", category: "time" },
          { es: "yo hablé con seis familias y dicen otra cosa", en: "i talked to six families and they say otherwise", category: "other" },
          { es: "eso sirve solo si pueden llegar", en: "that only works if they can get there", category: "other" },
          { es: "estamos planeando para nosotras, no para ellas", en: "we're planning for us, not for them", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 243,
    theme: "Una cosa",
    stems: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        completions: [
          { es: "no nos conocemos, soy marlana", en: "we haven't met, i'm marlana", category: "other" },
          { es: "sé que hay poco tiempo", en: "i know there isn't much time", category: "time" },
          { es: "es lo último que digo", en: "it's the last thing i'll say", category: "activity" },
          { es: "solo para presentarme", en: "just to introduce myself", category: "activity" },
          { es: "vengo de parte del programa de inglés", en: "i'm here on behalf of the english program", category: "other" },
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        completions: [
          { es: "rocío, eso no fue lo que quedamos", en: "rocío, that's not what we agreed", category: "other" },
          { es: "antes de votar léelo otra vez", en: "before voting read it again", category: "activity" },
          { es: "¿todos oyeron lo que dijo delia?", en: "did everyone hear what delia said?", category: "other" },
          { es: "eso cambia todo el plan", en: "that changes the whole plan", category: "opinion" },
          { es: "que lo repita, por favor", en: "have her say it again, please", category: "activity" },
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        completions: [
          { es: "gracias por traer el café", en: "thanks for bringing the coffee", category: "food" },
          { es: "dejo las llaves en la oficina", en: "i'll leave the keys in the office", category: "activity" },
          { es: "¿la próxima es el día ocho?", en: "is the next one on the eighth?", category: "time" },
          { es: "hay que devolver las sillas el viernes", en: "the chairs have to go back friday", category: "time" },
          { es: "les mando el resumen mañana", en: "i'll send you the summary tomorrow", category: "time" },
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        completions: [
          { es: "yo puedo encargarme de eso", en: "i can take care of that", category: "activity" },
          { es: "y me callo: falta decidir la hora", en: "and then i'll shut up: we still need a time", category: "time" },
          { es: "y perdón por meterme", en: "and sorry for butting in", category: "activity" },
          { es: "¿lo anotamos ahora?", en: "shall we write it down now?", category: "activity" },
          { es: "que no quiero que se pierda", en: "that i don't want to get lost", category: "opinion" },
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        completions: [
          { es: "no nos convenzamos tan rápido", en: "let's not convince ourselves so fast", category: "opinion" },
          { es: "eso deja fuera a la mitad", en: "that leaves half of them out", category: "other" },
          { es: "déjenme terminar la idea", en: "let me finish the thought", category: "activity" },
          { es: "todavía falta la parte de la comida", en: "the food part is still missing", category: "food" },
          { es: "eso funcionó con otro grupo, no con este", en: "that worked with another group, not this one", category: "other" },
        ],
      },
    ],
  },
  {
    day: 244,
    theme: "Sí, sí, pero",
    stems: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        completions: [
          { es: "pero eso que dices es clave", en: "but what you're saying is the key thing", category: "opinion" },
          { es: "quiero apoyar lo de delia", en: "i want to back up what delia said", category: "opinion" },
          { es: "solo para decir que estoy de acuerdo", en: "just to say i agree", category: "opinion" },
          { es: "y que quede grabado que dije que sí", en: "and let the record show i said yes", category: "other" },
          { es: "para sumarme a esa propuesta", en: "to add my name to that proposal", category: "activity" },
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        completions: [
          { es: "esa idea sí me gustó", en: "i did like that idea", category: "opinion" },
          { es: "no pasemos por encima de eso", en: "let's not skate past that", category: "activity" },
          { es: "repítelo para que quede anotado", en: "say it again so it gets written down", category: "activity" },
          { es: "eso es justo lo que faltaba", en: "that's exactly what was missing", category: "opinion" },
          { es: "de eso quiero saber más", en: "i want to hear more about that", category: "opinion" },
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        completions: [
          { es: "la idea fue de rocío, no mía", en: "the idea was rocío's, not mine", category: "other" },
          { es: "yo me comprometo a llamar a diez", en: "i'll commit to calling ten", category: "activity" },
          { es: "mando el resumen esta noche", en: "i'll send the summary tonight", category: "time" },
          { es: "yesenia se ofreció a traducir", en: "yesenia offered to translate", category: "other" },
          { es: "el gimnasio está libre el once", en: "the gym is free on the eleventh", category: "time" },
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        completions: [
          { es: "que quede claro quién llama a quién", en: "let's be clear who calls whom", category: "activity" },
          { es: "¿lo dejamos por escrito hoy mismo?", en: "shall we put it in writing today?", category: "time" },
          { es: "más y cerramos", en: "more and we'll wrap up", category: "time" },
          { es: "¿quién abre el salón esa tarde?", en: "who opens the room that afternoon?", category: "other" },
          { es: "y con eso ya está todo", en: "and with that, everything's covered", category: "other" },
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        completions: [
          { es: "la parte difícil es sostenerlo cada mes", en: "the hard part is keeping it going every month", category: "time" },
          { es: "necesitamos a alguien que traduzca en vivo", en: "we need someone to translate live", category: "activity" },
          { es: "eso funciona si la gente puede llegar", en: "that works if people can get there", category: "other" },
          { es: "una noche buena no arregla el año", en: "one good night doesn't fix the year", category: "opinion" },
          { es: "hay que preguntarles antes de prometer", en: "we should ask them before promising", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 245,
    theme: "Repaso: Interrumpir",
    stems: [
      {
        stem: "Perdona que te interrumpa…",
        english: "Sorry to interrupt you…",
        completions: [
          { es: "fue mi puerta de entrada", en: "was my way in", category: "other" },
          { es: "lo usé cuatro veces el martes", en: "i used it four times on tuesday", category: "time" },
          { es: "ya no me cuesta nada", en: "costs me nothing now", category: "opinion" },
          { es: "sirve hasta con la directora", en: "it works even with the principal", category: "other" },
          { es: "y nadie se molestó ni una vez", en: "and nobody minded once", category: "opinion" },
        ],
      },
      {
        stem: "Espera, espera…",
        english: "Hang on, hang on…",
        completions: [
          { es: "funcionó mejor de lo que pensaba", en: "worked better than i expected", category: "opinion" },
          { es: "lo dije dos veces y nadie se molestó", en: "i said it twice and nobody minded", category: "opinion" },
          { es: "me salvó de asentir sin entender", en: "saved me from nodding without understanding", category: "activity" },
          { es: "es la que más rápido detiene el salón", en: "it's the one that stops the room fastest", category: "opinion" },
          { es: "y me dio tiempo de pensar", en: "and it gave me time to think", category: "time" },
        ],
      },
      {
        stem: "Antes de que se me olvide…",
        english: "Before I forget…",
        completions: [
          { es: "resultó la más fácil de todas", en: "turned out the easiest of them all", category: "opinion" },
          { es: "nadie te la niega nunca", en: "nobody ever refuses it", category: "opinion" },
          { es: "la usé tres veces sin pensar", en: "i used it three times without thinking", category: "activity" },
          { es: "es la que suena menos a interrupción", en: "it's the one that sounds least like an interruption", category: "opinion" },
          { es: "y siempre tenía algo guardado", en: "and i always had something saved up", category: "other" },
        ],
      },
      {
        stem: "Una cosa…",
        english: "One thing… / Quick thing…",
        completions: [
          { es: "resultó ser la mejor de las cinco", en: "turned out to be the best of the five", category: "opinion" },
          { es: "dos palabras y ya estás dentro", en: "two words and you're already in", category: "other" },
          { es: "es la que me llevo de esta semana", en: "it's the one i'm keeping from this week", category: "opinion" },
          { es: "y no tuve que pedir permiso", en: "and i didn't have to ask permission", category: "activity" },
          { es: "sirve hasta cuando nadie hace pausa", en: "it works even when nobody pauses", category: "other" },
        ],
      },
      {
        stem: "Sí, sí, pero…",
        english: "Yes, yes, but…",
        completions: [
          { es: "fue la que más me costó decir", en: "was the hardest one for me to say", category: "opinion" },
          { es: "suena grosera y no lo es", en: "sounds rude and isn't", category: "opinion" },
          { es: "la voy a usar más de ahora en adelante", en: "i'm going to use it more from now on", category: "time" },
          { es: "los dos síes hacen todo el trabajo", en: "the two \"yes\"es do all the work", category: "opinion" },
          { es: "sin ella nunca llego a mi punto", en: "without it i never get to my point", category: "opinion" },
        ],
      },
    ],
  },
];
