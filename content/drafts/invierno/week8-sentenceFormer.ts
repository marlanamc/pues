import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 8 — "Es mejor que…" (days 232–238).
 * Stems must match content/drafts/invierno/week8-frames.ts for the same day.
 */
export const invWeek8SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 232,
    theme: "La estudiante nueva",
    stems: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        completions: [
          { es: "empiece con frases cortas", en: "you start with short sentences", category: "activity" },
          { es: "se siente adelante para oírme", en: "you sit up front so you can hear me", category: "activity" },
          { es: "venga aunque llegue cansada", en: "you come even if you arrive tired", category: "time" },
          { es: "traiga solo lo que ya tiene", en: "you bring only what you already have", category: "other" },
          { es: "se quede los primeros diez minutos", en: "you stay for the first ten minutes", category: "time" },
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        completions: [
          { es: "sepa que no está atrasada", en: "you know you're not behind", category: "opinion" },
          { es: "pregunte cuando no entienda", en: "you ask when you don't understand", category: "activity" },
          { es: "vuelva el jueves", en: "you come back thursday", category: "time" },
          { es: "no se compare con los demás", en: "you don't compare yourself to the others", category: "opinion" },
          { es: "se sienta cómoda aquí", en: "you feel comfortable here", category: "opinion" },
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        completions: [
          { es: "se disculpe por llegar tarde", en: "you apologize for arriving late", category: "time" },
          { es: "traiga nada, aquí hay de todo", en: "you bring anything, we have everything here", category: "other" },
          { es: "me explique por qué no vino antes", en: "you explain why you didn't come sooner", category: "activity" },
          { es: "hable hoy si no quiere", en: "you speak today if you don't want to", category: "activity" },
          { es: "sepa nada para empezar", en: "you know anything to start", category: "other" },
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        completions: [
          { es: "traigas un cuaderno cualquiera", en: "you bring any old notebook", category: "other" },
          { es: "aprendas una palabra al día, nada más", en: "you learn one word a day, nothing more", category: "activity" },
          { es: "te sientes al lado de doris, que lleva un año", en: "you sit next to doris, she's been here a year", category: "other" },
          { es: "vengas los dos días, no uno", en: "you come both days, not one", category: "time" },
          { es: "escribas tu nombre en la lista de hoy", en: "you write your name on today's list", category: "activity" },
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        completions: [
          { es: "empieces hoy que la semana que viene", en: "you start today than next week", category: "time" },
          { es: "te equivoques hablando que quedarte callada", en: "you get it wrong out loud than stay silent", category: "activity" },
          { es: "preguntes ahora y no al final", en: "you ask now and not at the end", category: "time" },
          { es: "vengas sin tarea que no vengas", en: "you come without homework than not come", category: "activity" },
          { es: "digas poquito hoy que mucho nunca", en: "you say a little today than a lot never", category: "time" },
        ],
      },
    ],
  },
  {
    day: 233,
    theme: "No hace falta que te disculpes",
    stems: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        completions: [
          { es: "digas \"pues\" y sigas", en: "you say \"pues\" and keep going", category: "activity" },
          { es: "termines la frase mal a que la dejes a medias", en: "you finish the sentence badly than leave it half done", category: "activity" },
          { es: "no traduzcas primero en la cabeza", en: "you don't translate in your head first", category: "activity" },
          { es: "hables antes de estar segura", en: "you speak before you're sure", category: "opinion" },
          { es: "uses la palabra que sí sabes", en: "you use the word you do know", category: "other" },
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        completions: [
          { es: "sepas que aquí nadie te califica", en: "you know nobody grades you here", category: "opinion" },
          { es: "te oigas hablar, aunque sea mal", en: "you hear yourself speak, even badly", category: "activity" },
          { es: "no te compares con nadie del salón", en: "you don't compare yourself with anyone in the room", category: "opinion" },
          { es: "notes cuándo te callas y por qué", en: "you notice when you go quiet and why", category: "activity" },
          { es: "cuentes las veces que sí hablaste", en: "you count the times you did speak", category: "activity" },
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        completions: [
          { es: "te disculpes cada vez que te equivocas", en: "you apologize every time you get something wrong", category: "activity" },
          { es: "sepas todas las palabras para empezar", en: "you know all the words to start", category: "other" },
          { es: "pidas permiso para hablar aquí", en: "you ask permission to speak here", category: "activity" },
          { es: "tengas la frase lista antes de abrir la boca", en: "you have the sentence ready before opening your mouth", category: "activity" },
          { es: "expliques por qué te costó", en: "you explain why it was hard", category: "opinion" },
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        completions: [
          { es: "cuentes cuántas veces pides perdón hoy", en: "you count how many times you apologize today", category: "activity" },
          { es: "cambies el \"sorry\" por un \"pues\"", en: "you swap the \"sorry\" for a \"pues\"", category: "activity" },
          { es: "te pares a mitad de la disculpa y sigas hablando", en: "you stop mid-apology and keep talking", category: "activity" },
          { es: "escribas las cinco muletillas en el cuaderno", en: "you write the five fillers in your notebook", category: "activity" },
          { es: "te propongas un día entero sin disculparte", en: "you aim for a whole day without apologizing", category: "time" },
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        completions: [
          { es: "hables mal y fuerte que bien y bajito", en: "you speak badly and loudly than well and quietly", category: "opinion" },
          { es: "hables sin pensarlo tanto", en: "you talk without overthinking it", category: "activity" },
          { es: "empieces esta semana, aunque sea con una frase", en: "you start this week, even with one sentence", category: "time" },
          { es: "digas la mitad que no digas nada", en: "you say half of it than nothing at all", category: "opinion" },
          { es: "te oigan dudar a que no te oigan", en: "they hear you hesitate than not hear you", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 234,
    theme: "Es importante que hables mal",
    stems: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        completions: [
          { es: "hables mal hoy y mejor el mes que viene", en: "you speak badly today and better next month", category: "time" },
          { es: "tengas errores a que tengas silencio", en: "you have mistakes than have silence", category: "opinion" },
          { es: "practiques aquí, donde nadie se ríe", en: "you practice here, where nobody laughs", category: "other" },
          { es: "empieces por lo que ya sabes decir", en: "you start with what you already know how to say", category: "activity" },
          { es: "hables con una persona y no con el grupo", en: "you talk to one person and not the group", category: "activity" },
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        completions: [
          { es: "te equivoques delante de alguien", en: "you get it wrong in front of someone", category: "activity" },
          { es: "no esperes a sentirte lista", en: "you don't wait to feel ready", category: "time" },
          { es: "te entiendan, no que hables perfecto", en: "they understand you, not that you speak perfectly", category: "opinion" },
          { es: "salgas de aquí habiendo dicho algo", en: "you leave here having said something", category: "activity" },
          { es: "vuelvas mañana aunque hoy te haya costado", en: "you come back tomorrow even if today was hard", category: "time" },
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        completions: [
          { es: "estés lista para empezar", en: "you're ready in order to start", category: "opinion" },
          { es: "estudies antes de venir a clase", en: "you study before coming to class", category: "activity" },
          { es: "escondas el acento, aquí todos tenemos uno", en: "you hide your accent, we all have one here", category: "opinion" },
          { es: "hables como en la televisión", en: "you talk like on television", category: "opinion" },
          { es: "entiendas todo lo que digo", en: "you understand everything i say", category: "other" },
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        completions: [
          { es: "digas cinco frases al día, en voz alta", en: "you say five sentences a day, out loud", category: "activity" },
          { es: "le hables a una sola persona esta semana", en: "you talk to just one person this week", category: "time" },
          { es: "dejes la gramática para después", en: "you leave the grammar for later", category: "activity" },
          { es: "empieces por saludar a alguien nuevo", en: "you start by greeting someone new", category: "activity" },
          { es: "practiques con quien no te dé pena", en: "you practice with someone who doesn't embarrass you", category: "other" },
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        completions: [
          { es: "te entiendan mal a que no digas nada", en: "they misunderstand you than you say nothing", category: "opinion" },
          { es: "sea hoy y no cuando esté perfecto", en: "it's today and not when it's perfect", category: "time" },
          { es: "salga una frase fea que ninguna", en: "an ugly sentence comes out than none", category: "opinion" },
          { es: "practiques mal que estudies bien", en: "you practice badly than study well", category: "opinion" },
          { es: "hables hoy que planees toda la semana", en: "you speak today than plan all week", category: "time" },
        ],
      },
    ],
  },
  {
    day: 235,
    theme: "Te sugiero que grabes",
    stems: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        completions: [
          { es: "grabes un audio a que escribas un texto", en: "you record a voice note than write a text", category: "activity" },
          { es: "practiques sola antes de hablar con alguien", en: "you practice alone before talking to someone", category: "activity" },
          { es: "mandes el primero sin escucharlo", en: "you send the first without listening to it", category: "activity" },
          { es: "grabes en la cocina y no en el escritorio", en: "you record in the kitchen and not at a desk", category: "other" },
          { es: "hables como si le contaras a una amiga", en: "you talk as if telling a friend", category: "activity" },
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        completions: [
          { es: "te escuches una vez a la semana", en: "you listen to yourself once a week", category: "time" },
          { es: "guardes el primer audio para comparar", en: "you keep the first recording to compare", category: "activity" },
          { es: "lo hagas todos los días, aunque sea corto", en: "you do it every day, even if it's short", category: "time" },
          { es: "no te juzgues la primera vez que te oigas", en: "you don't judge yourself the first time you hear yourself", category: "opinion" },
          { es: "sepas que todos suenan raro al principio", en: "you know everyone sounds strange at first", category: "opinion" },
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        completions: [
          { es: "se lo mandes a nadie", en: "you send it to anyone", category: "activity" },
          { es: "dure más de treinta segundos", en: "it lasts more than thirty seconds", category: "time" },
          { es: "sepas qué vas a decir antes de grabar", en: "you know what you'll say before recording", category: "activity" },
          { es: "lo repitas si no te gusta", en: "you redo it if you don't like it", category: "activity" },
          { es: "busques un lugar silencioso", en: "you look for a quiet place", category: "other" },
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        completions: [
          { es: "grabes un audio cada noche", en: "you record a voice note every night", category: "time" },
          { es: "no borres ninguno, aunque te dé pena", en: "you don't delete any, even when you're embarrassed", category: "activity" },
          { es: "lo hagas siempre a la misma hora", en: "you do it always at the same time", category: "time" },
          { es: "cuentes lo que hiciste ese día, nada más", en: "you tell what you did that day, nothing more", category: "activity" },
          { es: "empieces con treinta segundos y ya", en: "you start with thirty seconds and that's it", category: "time" },
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        completions: [
          { es: "grabes treinta segundos diarios que una hora el domingo", en: "you record thirty seconds daily than an hour on sunday", category: "time" },
          { es: "quede feo a que no quede nada", en: "it comes out ugly than nothing comes out", category: "opinion" },
          { es: "empieces esta noche, antes de pensarlo mucho", en: "you start tonight, before overthinking it", category: "time" },
          { es: "te oigas a ti misma que me oigas a mí", en: "you hear yourself than hear me", category: "opinion" },
          { es: "lo hagas mal seis días que bien uno", en: "you do it badly six days than well one", category: "time" },
        ],
      },
    ],
  },
  {
    day: 236,
    theme: "Más vale que empieces hoy",
    stems: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        completions: [
          { es: "sea ahora y no en la primavera", en: "it's now and not in the spring", category: "time" },
          { es: "hagas poquito todos los días", en: "you do a tiny bit every day", category: "time" },
          { es: "empieces antes de que el miedo se acomode", en: "you start before the fear settles in", category: "time" },
          { es: "no te pongas una meta grande", en: "you don't set yourself a big goal", category: "opinion" },
          { es: "midas los días y no las horas", en: "you count days and not hours", category: "time" },
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        completions: [
          { es: "no esperes el momento perfecto", en: "you don't wait for the perfect moment", category: "time" },
          { es: "no rompas la racha por un día malo", en: "you don't break the streak over one bad day", category: "time" },
          { es: "te perdones el día que falles", en: "you forgive yourself the day you slip", category: "opinion" },
          { es: "vuelvas al día siguiente sin drama", en: "you come back the next day without drama", category: "time" },
          { es: "cuentes las semanas y no los errores", en: "you count weeks and not mistakes", category: "time" },
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        completions: [
          { es: "hagas mucho, hace falta que lo hagas seguido", en: "you do a lot, you need to do it often", category: "time" },
          { es: "recuperes los días que no hiciste", en: "you make up the days you missed", category: "time" },
          { es: "me prometas nada a mí", en: "you promise me anything", category: "opinion" },
          { es: "empieces un lunes", en: "you start on a monday", category: "time" },
          { es: "tengas todo listo antes", en: "you have everything ready first", category: "activity" },
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        completions: [
          { es: "empieces por lo más pequeño que se te ocurra", en: "you start with the smallest thing you can think of", category: "activity" },
          { es: "lo hagas siempre en el mismo lugar", en: "you do it always in the same place", category: "other" },
          { es: "se lo cuentes a alguien, para que sea real", en: "you tell someone, so that it's real", category: "activity" },
          { es: "lo pegues en la nevera", en: "you stick it on the fridge", category: "activity" },
          { es: "elijas una hora fea pero segura", en: "you pick an ugly but reliable hour", category: "time" },
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        completions: [
          { es: "empieces hoy mal a que empieces nunca bien", en: "you start today badly than start never well", category: "time" },
          { es: "una frase hoy que un plan entero el domingo", en: "one sentence today than a whole plan on sunday", category: "time" },
          { es: "vayas lenta a que te detengas", en: "you go slowly than stop", category: "opinion" },
          { es: "hagas dos minutos que ninguno", en: "you do two minutes than none", category: "time" },
          { es: "falles el martes y vuelvas el miércoles", en: "you slip tuesday and come back wednesday", category: "time" },
        ],
      },
    ],
  },
  {
    day: 237,
    theme: "Lo que me dijo Camila",
    stems: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        completions: [
          { es: "se lo diga a alguien más y no que se me quede", en: "i tell someone else than keep it to myself", category: "activity" },
          { es: "le cuente de dónde salió el consejo", en: "i tell her where the advice came from", category: "activity" },
          { es: "aprenda enseñando, como siempre", en: "i learn by teaching, as always", category: "activity" },
          { es: "le diga que yo empecé igual de mal", en: "i tell her i started just as badly", category: "opinion" },
          { es: "no me haga la experta", en: "i don't play the expert", category: "opinion" },
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        completions: [
          { es: "sepa que a mí me funcionó primero", en: "she knows it worked on me first", category: "opinion" },
          { es: "no le venda esto como algo fácil", en: "i don't sell her this as something easy", category: "opinion" },
          { es: "le diga que a mí me lo dijo una enfermera colombiana", en: "i tell her a colombian nurse said it to me", category: "other" },
          { es: "entienda que lleva meses, no días", en: "she understands it takes months, not days", category: "time" },
          { es: "vea que yo también sigo aprendiendo", en: "she sees that i'm still learning too", category: "opinion" },
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        completions: [
          { es: "sea experta para pasar el consejo", en: "i be an expert to pass the advice on", category: "opinion" },
          { es: "yo haya terminado para ayudar a alguien que empieza", en: "i be finished to help someone starting", category: "opinion" },
          { es: "esconda que yo también estoy aprendiendo", en: "i hide that i'm learning too", category: "opinion" },
          { es: "tenga todas las respuestas", en: "i have all the answers", category: "opinion" },
          { es: "hable perfecto para enseñar a hablar", en: "i speak perfectly to teach speaking", category: "opinion" },
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        completions: [
          { es: "busques a alguien con quien practicar cada semana", en: "you find someone to practice with each week", category: "time" },
          { es: "le hables a una persona nueva cada semana", en: "you talk to a new person each week", category: "time" },
          { es: "se lo enseñes a otra persona, así se te queda", en: "you teach it to someone else, that way it sticks", category: "activity" },
          { es: "no esperes a que alguien te busque a ti", en: "you don't wait for someone to seek you out", category: "activity" },
          { es: "empieces por alguien que también esté aprendiendo", en: "you start with someone who's also learning", category: "other" },
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        completions: [
          { es: "el consejo circule a que se quede conmigo", en: "the advice circulates than stays with me", category: "opinion" },
          { es: "le diga la verdad a que le parezca fácil", en: "i tell her the truth than have it seem easy", category: "opinion" },
          { es: "contarle mi enero que darle una regla", en: "tell her about my january than give her a rule", category: "opinion" },
          { es: "se lo pase a ella que lo guarde para mí", en: "i pass it to her than save it for myself", category: "activity" },
          { es: "una historia real que un buen consejo", en: "a real story than a good piece of advice", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 238,
    theme: "Repaso: Es mejor que…",
    stems: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        completions: [
          { es: "lo aprenda en trozos y no en tablas", en: "i learn it in chunks and not tables", category: "activity" },
          { es: "lo use veinte veces a que lo estudie una hora", en: "i use it twenty times than study it an hour", category: "time" },
          { es: "siga sin parar a revisar lo de atrás", en: "i keep going than go back and review", category: "activity" },
          { es: "confíe en lo que ya me sale", en: "i trust what already comes out", category: "opinion" },
          { es: "cambie de tema y no de método", en: "i change topic and not method", category: "opinion" },
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        completions: [
          { es: "note que ya no armo estas frases", en: "i notice i don't assemble these sentences anymore", category: "opinion" },
          { es: "no vuelva a estudiar reglas ahora", en: "i don't go back to studying rules now", category: "activity" },
          { es: "siga hablando aunque cambie el tema", en: "i keep speaking even when the topic changes", category: "activity" },
          { es: "recuerde de dónde salió cada frase", en: "i remember where each phrase came from", category: "other" },
          { es: "no me ponga a contar aciertos", en: "i don't start counting successes", category: "opinion" },
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        completions: [
          { es: "sepa cómo se llama para usarlo", en: "i know what it's called to use it", category: "opinion" },
          { es: "me salga perfecto para que sirva", en: "it comes out perfect for it to work", category: "opinion" },
          { es: "repase, hace falta que lo hable", en: "i review, i need to speak it", category: "activity" },
          { es: "entienda la regla detrás", en: "i understand the rule behind it", category: "opinion" },
          { es: "lo practique aparte, ya está en todo", en: "i practice it separately, it's in everything now", category: "activity" },
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        completions: [
          { es: "sigas con la parte de conversación real", en: "you continue with the real-conversation part", category: "activity" },
          { es: "guardes los audios de enero y de marzo", en: "you keep january's and march's recordings", category: "time" },
          { es: "le enseñes esto a alguien antes de que se te olvide", en: "you teach this to someone before you forget", category: "activity" },
          { es: "no cambies de método a mitad de camino", en: "you don't change method halfway", category: "opinion" },
          { es: "te fijes en cuánto hablas, no en cuánto sabes", en: "you watch how much you speak, not how much you know", category: "opinion" },
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        completions: [
          { es: "siga adelante y no que vuelva a empezar", en: "i go forward than start over", category: "activity" },
          { es: "usarlo mal veinte veces que nombrarlo bien una", en: "use it badly twenty times than name it well once", category: "opinion" },
          { es: "este invierno le sirva a alguien más", en: "this winter is useful to someone else too", category: "opinion" },
          { es: "termine la temporada hablando que sabiendo", en: "i end the season speaking than knowing", category: "opinion" },
          { es: "me acuerde de yesenia que de la gramática", en: "i remember yesenia than the grammar", category: "other" },
        ],
      },
    ],
  },
];
