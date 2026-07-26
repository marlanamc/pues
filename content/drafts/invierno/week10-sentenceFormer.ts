import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 10 — "El turno" (days 246–252).
 * Stems must match content/drafts/invierno/week10-frames.ts for the same day.
 */
export const invWeek10SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 246,
    theme: "Tres al mismo tiempo",
    stems: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        completions: [
          { es: "rocío", en: "rocío", category: "other" },
          { es: "llevas rato callada", en: "you've been quiet a while", category: "time" },
          { es: "de todo esto", en: "about all this", category: "other" },
          { es: "que conoces a las familias mejor", en: "you know the families better", category: "other" },
          { es: "porque yo no me decido", en: "because i can't make up my mind", category: "opinion" },
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        completions: [
          { es: "y ya te la paso", en: "and then i'll hand it over", category: "activity" },
          { es: "la idea, me falta poquito", en: "the thought, i'm nearly there", category: "time" },
          { es: "que si no se me va", en: "because otherwise i'll lose it", category: "other" },
          { es: "y después me callo un rato", en: "and then i'll be quiet a while", category: "time" },
          { es: "esta parte, que es la que importa", en: "this part, it's the one that matters", category: "opinion" },
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        completions: [
          { es: "dame un segundo", en: "give me a second", category: "time" },
          { es: "pero primero el contexto", en: "but the context first", category: "other" },
          { es: "es justo lo que iba a decir", en: "it's exactly what i was going to say", category: "other" },
          { es: "no me lo quites", en: "don't take it from me", category: "activity" },
          { es: "en dos frases llego", en: "i'll get there in two sentences", category: "time" },
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        completions: [
          { es: "las familias quieren más temprano", en: "the families want it earlier", category: "time" },
          { es: "antes de la interrupción, faltan sillas", en: "before the interruption, we're short on chairs", category: "other" },
          { es: "yo me encargo de las llamadas", en: "i'll handle the calls", category: "activity" },
          { es: "hay dos cosas que decidir", en: "there are two things to decide", category: "other" },
          { es: "y ahora sí lo termino", en: "and now i'll actually finish it", category: "activity" },
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        completions: [
          { es: "te sigo", en: "i'm with you", category: "other" },
          { es: "y entonces qué hiciste", en: "and then what did you do", category: "activity" },
          { es: "exacto, eso mismo pensé yo", en: "exactly, that's just what i thought", category: "opinion" },
          { es: "ya, ya, sigue", en: "right, right, go on", category: "activity" },
          { es: "entiendo, qué complicado", en: "i see, how complicated", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 247,
    theme: "Déjame terminar",
    stems: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        completions: [
          { es: "puede que esté equivocada", en: "i might be wrong", category: "opinion" },
          { es: "ya dije lo mío", en: "i've said my piece", category: "activity" },
          { es: "camila, desde el hospital lo ves distinto", en: "camila, from the hospital you see it differently", category: "other" },
          { es: "sin filtro, por favor", en: "unfiltered, please", category: "opinion" },
          { es: "y no me digas que sí por educación", en: "and don't agree just to be polite", category: "opinion" },
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        completions: [
          { es: "son dos frases más", en: "it's two more sentences", category: "time" },
          { es: "esta parte y opinas", en: "this part and then you weigh in", category: "activity" },
          { es: "no te enojes, es que se me va", en: "don't get annoyed, it's just that i'll lose it", category: "other" },
          { es: "que ya casi cierro la idea", en: "i'm nearly done with the thought", category: "time" },
          { es: "y prometo que es corto", en: "and i promise it's short", category: "time" },
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        completions: [
          { es: "espérame tantito", en: "hang on just a moment", category: "time" },
          { es: "pero necesitas saber lo de antes", en: "but you need to know what came before", category: "other" },
          { es: "confía en mí", en: "trust me", category: "opinion" },
          { es: "esa es la conclusión, no el principio", en: "that's the conclusion, not the beginning", category: "other" },
          { es: "aguántame una frase más", en: "bear with me one more sentence", category: "time" },
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        completions: [
          { es: "el problema es el horario", en: "the problem is the schedule", category: "time" },
          { es: "y ahora sí termino", en: "and now i really will finish", category: "activity" },
          { es: "por tercera vez", en: "for the third time", category: "time" },
          { es: "eso lo hablamos el martes", en: "we talked about that tuesday", category: "time" },
          { es: "hay tres cosas y voy en la primera", en: "there are three things and i'm on the first", category: "other" },
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        completions: [
          { es: "sigue", en: "go on", category: "activity" },
          { es: "ya, ya veo por dónde vas", en: "right, i see where you're going", category: "other" },
          { es: "entiendo, y eso lo cambia todo", en: "i see, and that changes everything", category: "opinion" },
          { es: "sí, sí, te escucho", en: "yes, yes, i'm listening", category: "activity" },
          { es: "claro, tiene lógica", en: "of course, that makes sense", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 248,
    theme: "A eso voy",
    stems: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        completions: [
          { es: "ahora sí llegué al punto", en: "now i've actually got to the point", category: "other" },
          { es: "de verdad quiero saber", en: "i genuinely want to know", category: "opinion" },
          { es: "a lo mejor lo estoy viendo mal", en: "maybe i'm seeing it wrong", category: "opinion" },
          { es: "dime que estoy exagerando", en: "tell me i'm exaggerating", category: "opinion" },
          { es: "tú que estuviste ahí", en: "you who were there", category: "other" },
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        completions: [
          { es: "el contexto y se entiende solo", en: "the context and it explains itself", category: "other" },
          { es: "con esta parte, es la importante", en: "with this part, it's the important one", category: "opinion" },
          { es: "y verás que sí tiene sentido", en: "and you'll see it does make sense", category: "opinion" },
          { es: "que el final es lo bueno", en: "the ending is the good bit", category: "opinion" },
          { es: "y luego me dices si me pasé", en: "and then tell me if i went on too long", category: "opinion" },
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        completions: [
          { es: "voy dando la vuelta pero llego", en: "i'm going the long way but i'll arrive", category: "other" },
          { es: "dame treinta segundos", en: "give me thirty seconds", category: "time" },
          { es: "la conclusión es lo que preguntas", en: "the conclusion is what you're asking about", category: "other" },
          { es: "el rodeo es parte de la historia", en: "the detour is part of the story", category: "other" },
          { es: "ya casi, ya casi", en: "almost, almost", category: "time" },
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        completions: [
          { es: "todo empezó el martes", en: "it all started on tuesday", category: "time" },
          { es: "y ahora sí sin que me interrumpan", en: "and now without being interrupted", category: "activity" },
          { es: "hay tres partes y vamos en la primera", en: "there are three parts and we're on the first", category: "other" },
          { es: "el asunto es más viejo de lo que parece", en: "the business is older than it looks", category: "time" },
          { es: "volvamos a donde estábamos", en: "let's go back to where we were", category: "activity" },
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        completions: [
          { es: "dale", en: "go ahead", category: "activity" },
          { es: "sí, sí, te escucho", en: "yes, yes, i'm listening", category: "activity" },
          { es: "no te interrumpo más", en: "i won't interrupt again", category: "activity" },
          { es: "ya, ya, sigue tranquila", en: "right, right, go on, take your time", category: "time" },
          { es: "exacto, ahí quería llegar yo", en: "exactly, that's where i was heading too", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 249,
    theme: "¿Y tú qué opinas?",
    stems: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        completions: [
          { es: "no has dicho nada en veinte minutos", en: "you haven't said anything in twenty minutes", category: "time" },
          { es: "yo llevo hablando demasiado", en: "i've been talking too much", category: "time" },
          { es: "yo la verdad no sé", en: "honestly i don't know", category: "opinion" },
          { es: "tú decides y yo me acomodo", en: "you decide and i'll go along", category: "opinion" },
          { es: "que a ti te toca vivirlo", en: "since you're the one who'll live with it", category: "other" },
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        completions: [
          { es: "esta frase y te escucho", en: "this sentence and i'll listen", category: "activity" },
          { es: "y después opinan ustedes dos", en: "and then you two weigh in", category: "activity" },
          { es: "rapidito, es corto", en: "quickly, it's short", category: "time" },
          { es: "y con eso cierro", en: "and with that i'm done", category: "activity" },
          { es: "que es lo último que digo hoy", en: "it's the last thing i'll say today", category: "time" },
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        completions: [
          { es: "ahorita les pregunto a ustedes", en: "in a moment i'll ask you two", category: "time" },
          { es: "ya casi", en: "almost there", category: "time" },
          { es: "y ahí sí quiero oírlas", en: "and then i do want to hear from you", category: "activity" },
          { es: "primero cierro y luego escucho", en: "first i'll close, then i'll listen", category: "activity" },
          { es: "es la última parte, lo prometo", en: "it's the last part, i promise", category: "time" },
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        completions: [
          { es: "esa es mi parte, ahora la tuya", en: "that's my part, now yours", category: "other" },
          { es: "yo lo veo así, pero puedo estar mal", en: "that's how i see it, but i could be wrong", category: "opinion" },
          { es: "ya terminé, adelante", en: "i've finished, go ahead", category: "activity" },
          { es: "eso era todo de mi lado", en: "that was everything from my side", category: "other" },
          { es: "y ahora sí me callo", en: "and now i'll be quiet", category: "activity" },
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        completions: [
          { es: "cuéntame más", en: "tell me more", category: "activity" },
          { es: "ya, sigue, no te apures", en: "right, go on, no rush", category: "time" },
          { es: "exacto, en eso no había pensado", en: "exactly, i hadn't thought of that", category: "opinion" },
          { es: "sí, sí, eso es cierto", en: "yes, yes, that's true", category: "opinion" },
          { es: "entiendo, y qué pasó después", en: "i see, and what happened after", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 250,
    theme: "Como te decía",
    stems: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        completions: [
          { es: "ya, por fin terminé", en: "right, i finally finished", category: "time" },
          { es: "ahora que ya oíste todo", en: "now that you've heard it all", category: "other" },
          { es: "ahora sí puedo escuchar", en: "now i can actually listen", category: "activity" },
          { es: "sin que te sientas obligada", en: "without feeling obliged", category: "opinion" },
          { es: "aunque no estés de acuerdo", en: "even if you don't agree", category: "opinion" },
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        completions: [
          { es: "por tercera vez", en: "for the third time", category: "time" },
          { es: "ya casi, lo prometo", en: "almost there, i promise", category: "time" },
          { es: "y luego se ríen de mí", en: "and then you can laugh at me", category: "activity" },
          { es: "que es la misma frase de hace diez minutos", en: "it's the same sentence from ten minutes ago", category: "time" },
          { es: "aunque sea la mitad", en: "even if it's only half", category: "other" },
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        completions: [
          { es: "no me adelantes el final", en: "don't spoil the ending for me", category: "activity" },
          { es: "todavía no", en: "not yet", category: "time" },
          { es: "el rodeo tiene sentido, ya verás", en: "the detour makes sense, you'll see", category: "opinion" },
          { es: "y esta vez llego, de verdad", en: "and this time i'll get there, really", category: "time" },
          { es: "falta la mejor parte", en: "the best part's still coming", category: "other" },
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        completions: [
          { es: "llegué a la junta con tres puntos", en: "i came to the meeting with three points", category: "other" },
          { es: "el segundo era el del transporte", en: "the second was the transportation one", category: "other" },
          { es: "y el tercero no lo dije nunca", en: "and the third i never got to say", category: "other" },
          { es: "y esta vez que nadie me pare", en: "and this time let nobody stop me", category: "activity" },
          { es: "íbamos en la parte del horario", en: "we were at the schedule part", category: "time" },
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        completions: [
          { es: "ahora sí las escucho a ustedes", en: "now i'm listening to you two", category: "activity" },
          { es: "sí, tienes razón en eso", en: "yes, you're right about that", category: "opinion" },
          { es: "ya entendí por dónde ibas", en: "now i get where you were going", category: "other" },
          { es: "y perdón por no dejarte hablar", en: "and sorry for not letting you talk", category: "opinion" },
          { es: "exacto, eso también me pasó a mí", en: "exactly, that happened to me too", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 251,
    theme: "Ajá, claro",
    stems: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        completions: [
          { es: "después de todo eso", en: "after all that", category: "other" },
          { es: "de verdad, no lo educado", en: "really, not the polite answer", category: "opinion" },
          { es: "rocío, somos tres aquí", en: "rocío, there are three of us here", category: "other" },
          { es: "que llevas media hora oyéndonos", en: "you've been listening to us for half an hour", category: "time" },
          { es: "y no me digas \"lo que tú quieras\"", en: "and don't tell me \"whatever you want\"", category: "opinion" },
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        completions: [
          { es: "solo cuando de verdad importa", en: "only when it really matters", category: "opinion" },
          { es: "esta y ya no digo más en toda la noche", en: "this one and i'll say no more all evening", category: "time" },
          { es: "aunque hoy casi no me hizo falta", en: "though today i hardly needed it", category: "time" },
          { es: "y esta vez sin insistir", en: "and this time without insisting", category: "activity" },
          { es: "que ya aprendí a decirlo sin filo", en: "i've learned to say it without an edge", category: "opinion" },
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        completions: [
          { es: "es para cuando te empujan, y hoy no", en: "it's for when they push you, and today they didn't", category: "time" },
          { es: "lo usé una vez y bastó", en: "i used it once and that was enough", category: "time" },
          { es: "hoy nadie me apuró", en: "nobody rushed me today", category: "time" },
          { es: "y me dejaron llegar sola", en: "and they let me get there on my own", category: "activity" },
          { es: "casi ni lo necesité", en: "i barely needed it", category: "opinion" },
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        completions: [
          { es: "y esta vez sí llegué al final", en: "and this time i did get to the end", category: "time" },
          { es: "no me interrumpieron ni una vez", en: "they didn't interrupt me once", category: "time" },
          { es: "la historia salió entera", en: "the story came out whole", category: "other" },
          { es: "y me sobró tiempo para escucharlas", en: "and i had time left to listen to them", category: "time" },
          { es: "esto hace tres meses no pasaba", en: "three months ago this didn't happen", category: "time" },
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        completions: [
          { es: "y tu abuela qué dijo", en: "and what did your grandmother say", category: "activity" },
          { es: "ya, ya, cuéntame esa parte otra vez", en: "right, right, tell me that part again", category: "activity" },
          { es: "exacto, eso es lo que yo pensaba", en: "exactly, that's what i was thinking", category: "opinion" },
          { es: "entiendo, qué fuerte", en: "i see, how intense", category: "opinion" },
          { es: "sí, sí, sigue, te escucho", en: "yes, yes, go on, i'm listening", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 252,
    theme: "Repaso: El turno",
    stems: [
      {
        stem: "¿Y tú qué opinas?",
        english: "And what do you think?",
        completions: [
          { es: "es la que más digo ahora", en: "is the one i say most now", category: "time" },
          { es: "cambia una conversación entera", en: "changes a whole conversation", category: "opinion" },
          { es: "nadie la usa y debería", en: "nobody uses it and they should", category: "opinion" },
          { es: "es la más generosa de las cinco", en: "is the most generous of the five", category: "opinion" },
          { es: "y la voy a usar también en inglés", en: "and i'll use it in english too", category: "activity" },
        ],
      },
      {
        stem: "Déjame terminar…",
        english: "Let me finish…",
        completions: [
          { es: "me costó decirlo sin sonar molesta", en: "was hard to say without sounding annoyed", category: "opinion" },
          { es: "ya me sale tranquilo", en: "comes out calmly now", category: "opinion" },
          { es: "sirve más de lo que pensaba", en: "helps more than i expected", category: "opinion" },
          { es: "no es grosero, es claro", en: "isn't rude, it's clear", category: "opinion" },
          { es: "y casi siempre me dejan", en: "and they almost always let me", category: "other" },
        ],
      },
      {
        stem: "A eso voy…",
        english: "I'm getting to that…",
        completions: [
          { es: "me compró la historia entera", en: "bought me the whole story", category: "other" },
          { es: "son tres palabras y la gente espera", en: "is three words and people wait", category: "other" },
          { es: "es mi favorita para las historias largas", en: "is my favorite for long stories", category: "opinion" },
          { es: "y nunca sonó impaciente", en: "and it never sounded impatient", category: "opinion" },
          { es: "la digo sin pensarla ya", en: "i say it without thinking now", category: "activity" },
        ],
      },
      {
        stem: "Como te decía…",
        english: "As I was saying…",
        completions: [
          { es: "nunca suena a reproche", en: "never sounds like a reproach", category: "opinion" },
          { es: "recoge la frase donde se cayó", en: "picks up the sentence where it fell", category: "other" },
          { es: "lo usé cuatro veces sin darme cuenta", en: "i used it four times without noticing", category: "time" },
          { es: "es la más elegante de todas", en: "is the most elegant of them all", category: "opinion" },
          { es: "y borra la interrupción entera", en: "and erases the interruption completely", category: "other" },
        ],
      },
      {
        stem: "Ajá, claro…",
        english: "Mm-hm, right…",
        completions: [
          { es: "fue la que más tardé en sentir natural", en: "took me longest to feel natural", category: "time" },
          { es: "ya lo hago sin pensarlo", en: "i do it without thinking now", category: "activity" },
          { es: "resultó ser la otra mitad de conversar", en: "turned out to be the other half of talking", category: "opinion" },
          { es: "y nadie vuelve a preguntarme si sigo ahí", en: "and nobody asks if i'm still there anymore", category: "other" },
          { es: "el silencio ya no me representa", en: "silence doesn't represent me anymore", category: "opinion" },
        ],
      },
    ],
  },
];
