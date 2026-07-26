import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 2 — "Humor ligero" (days 281–287).
 * Stems must match content/drafts/primavera/week2-frames.ts for the same day.
 */
export const priWeek2SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 281,
    theme: "El primer intento",
    stems: [
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "no te enojes", en: "don't get mad", category: "other" },
          { es: "camila, relájate", en: "camila, relax", category: "other" },
          { es: "solo fue un comentario", en: "it was just a comment", category: "other" },
          { es: "no es en serio", en: "i'm not serious", category: "opinion" },
          { es: "fue una broma pequeña", en: "it was a small joke", category: "other" },
        ],
      },
      {
        stem: "¡Qué va!",
        english: "No way! / Not at all!",
        completions: [
          { es: "yo nunca llego tarde", en: "i'm never late", category: "time" },
          { es: "eso no pasó así", en: "that's not how it happened", category: "other" },
          { es: "tú eres la que siempre trae postre", en: "you're the one who always brings dessert", category: "other" },
          { es: "no fue tan malo", en: "it wasn't that bad", category: "opinion" },
          { es: "yo no dije eso", en: "i didn't say that", category: "other" },
        ],
      },
      {
        stem: "No exageres",
        english: "Don't exaggerate / You're blowing it up",
        completions: [
          { es: "solo falté una semana", en: "i only missed one week", category: "time" },
          { es: "no fue para tanto", en: "it wasn't that big a deal", category: "opinion" },
          { es: "fue una broma pequeña", en: "it was a small joke", category: "other" },
          { es: "solo dije una frase", en: "i only said one sentence", category: "other" },
          { es: "no me enojé de verdad", en: "i didn't really get mad", category: "opinion" },
        ],
      },
      {
        stem: "Mira quién habla",
        english: "Look who's talking",
        completions: [
          { es: "la que llegó tarde ayer", en: "the one who was late yesterday", category: "time" },
          { es: "tú también lo haces", en: "you do it too", category: "activity" },
          { es: "la reina del café", en: "the queen of coffee", category: "other" },
          { es: "la que trae postre siempre", en: "the one who always brings dessert", category: "other" },
          { es: "la maestra estricta", en: "the strict teacher", category: "other" },
        ],
      },
      {
        stem: "¿En serio?",
        english: "Seriously? / For real?",
        completions: [
          { es: "¿crees que me enojé?", en: "do you think i got mad?", category: "opinion" },
          { es: "¿te lo tomaste a pecho?", en: "did you take it to heart?", category: "opinion" },
          { es: "¿así reaccionas siempre?", en: "is that how you always react?", category: "other" },
          { es: "¿eso fue la broma?", en: "that was the joke?", category: "other" },
          { es: "¿te ofendiste?", en: "did you get offended?", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 282,
    theme: "Camila devuelve la broma",
    stems: [
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "y tú te pones roja", en: "and you turn red", category: "other" },
          { es: "marlana, no corras", en: "marlana, don't run", category: "other" },
          { es: "pero tú empezaste", en: "but you started it", category: "other" },
          { es: "no es para tanto", en: "it's not that serious", category: "opinion" },
          { es: "solo devolví la broma", en: "i just gave the joke back", category: "activity" },
        ],
      },
      {
        stem: "¡Qué va!",
        english: "No way! / Not at all!",
        completions: [
          { es: "tú eres la maestra estricta", en: "you're the strict teacher", category: "other" },
          { es: "nunca te he visto enojada de verdad", en: "i've never seen you really mad", category: "opinion" },
          { es: "ayer dijiste lo mismo de mí", en: "yesterday you said the same about me", category: "time" },
          { es: "yo no me pongo roja", en: "i don't turn red", category: "opinion" },
          { es: "tú también llegas temprano", en: "you arrive early too", category: "time" },
        ],
      },
      {
        stem: "No exageres",
        english: "Don't exaggerate / You're blowing it up",
        completions: [
          { es: "solo dije que llegas temprano", en: "i only said you arrive early", category: "other" },
          { es: "tú también me tomas el pelo", en: "you tease me too", category: "activity" },
          { es: "fue tu idea practicar humor", en: "practicing humor was your idea", category: "other" },
          { es: "no fue un ataque", en: "it wasn't an attack", category: "opinion" },
          { es: "fue una frase nada más", en: "it was just one sentence", category: "other" },
        ],
      },
      {
        stem: "Mira quién habla",
        english: "Look who's talking",
        completions: [
          { es: "la que corrige el género", en: "the one who corrects gender", category: "other" },
          { es: "miss puntualidad", en: "miss punctuality", category: "other" },
          { es: "la que se pone nerviosa con una broma", en: "the one who gets nervous over a joke", category: "opinion" },
          { es: "la que llegó quince minutos antes", en: "the one who got here fifteen minutes early", category: "time" },
          { es: "la que se pone roja sola", en: "the one who turns red all by herself", category: "other" },
        ],
      },
      {
        stem: "¿En serio?",
        english: "Seriously? / For real?",
        completions: [
          { es: "¿nunca bromeaste con tus estudiantes?", en: "you never joked with your students?", category: "activity" },
          { es: "¿así te quedas cuando te devuelven la broma?", en: "is that how you freeze when someone teases you back?", category: "other" },
          { es: "¿eso te pareció duro?", en: "did that seem harsh to you?", category: "opinion" },
          { es: "¿te quedaste callada por eso?", en: "did you go quiet because of that?", category: "other" },
          { es: "¿así reaccionas siempre?", en: "is that how you always react?", category: "other" },
        ],
      },
    ],
  },
  {
    day: 283,
    theme: "En el colegio con Rocío",
    stems: [
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "rocío, tranquila", en: "rocío, relax", category: "other" },
          { es: "no es queja formal", en: "it's not a formal complaint", category: "other" },
          { es: "tú sabes cómo es el lunes", en: "you know what mondays are like", category: "time" },
          { es: "fue un comentario entre nosotras", en: "it was a comment between us", category: "other" },
          { es: "no le cuentes a delia", en: "don't tell delia", category: "activity" },
        ],
      },
      {
        stem: "¡Qué va!",
        english: "No way! / Not at all!",
        completions: [
          { es: "yo no me quejo tanto", en: "i don't complain that much", category: "opinion" },
          { es: "la directora no dijo eso", en: "the principal didn't say that", category: "other" },
          { es: "tú también odias las reuniones", en: "you hate meetings too", category: "opinion" },
          { es: "no fue tan grave", en: "it wasn't that serious", category: "opinion" },
          { es: "yo no dije eso en serio", en: "i didn't mean that seriously", category: "opinion" },
        ],
      },
      {
        stem: "No exageres",
        english: "Don't exaggerate / You're blowing it up",
        completions: [
          { es: "solo fueron veinte minutos", en: "it was only twenty minutes", category: "time" },
          { es: "no dije que odio mi trabajo", en: "i didn't say i hate my job", category: "opinion" },
          { es: "rocío, fue un comentario entre nosotras", en: "rocío, it was a comment between us", category: "other" },
          { es: "no es para la junta", en: "it's not for the meeting", category: "other" },
          { es: "solo fue un lunes normal", en: "it was just a normal monday", category: "time" },
        ],
      },
      {
        stem: "Mira quién habla",
        english: "Look who's talking",
        completions: [
          { es: "la que trae tres tazas de café", en: "the one who brings three cups of coffee", category: "other" },
          { es: "la reina de las quejas", en: "the queen of complaints", category: "other" },
          { es: "tú también llegaste tarde el martes", en: "you were late tuesday too", category: "time" },
          { es: "la que se queja del horario", en: "the one who complains about the schedule", category: "other" },
          { es: "la que odia los lunes", en: "the one who hates mondays", category: "time" },
        ],
      },
      {
        stem: "¿En serio?",
        english: "Seriously? / For real?",
        completions: [
          { es: "¿te lo tomaste mal?", en: "did you take it the wrong way?", category: "opinion" },
          { es: "¿nunca bromeas con delia?", en: "you never joke with delia?", category: "activity" },
          { es: "¿así reaccionan todas en el colegio?", en: "is that how everyone reacts at school?", category: "other" },
          { es: "¿te ofendió?", en: "did it offend you?", category: "opinion" },
          { es: "¿rocío se enojó?", en: "did rocío get mad?", category: "other" },
        ],
      },
    ],
  },
  {
    day: 284,
    theme: "El grupo de la familia",
    stems: [
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "mamá, no llores", en: "mom, don't cry", category: "other" },
          { es: "kevin, no es para tanto", en: "kevin, it's not that serious", category: "opinion" },
          { es: "solo pregunté", en: "i only asked", category: "activity" },
          { es: "no peleen en el grupo", en: "don't fight in the group chat", category: "other" },
          { es: "fue una broma de familia", en: "it was a family joke", category: "other" },
        ],
      },
      {
        stem: "¡Qué va!",
        english: "No way! / Not at all!",
        completions: [
          { es: "yo no cocino tan mal", en: "i don't cook that badly", category: "opinion" },
          { es: "eso fue hace diez años", en: "that was ten years ago", category: "time" },
          { es: "tú eres el que quema el arroz", en: "you're the one who burns the rice", category: "other" },
          { es: "no fue tres horas", en: "it wasn't three hours", category: "time" },
          { es: "kevin exagera siempre", en: "kevin always exaggerates", category: "opinion" },
        ],
      },
      {
        stem: "No exageres",
        english: "Don't exaggerate / You're blowing it up",
        completions: [
          { es: "solo dije que llegué tarde", en: "i only said i arrived late", category: "time" },
          { es: "fue media hora, no tres horas", en: "it was half an hour, not three hours", category: "time" },
          { es: "kevin, no es competencia", en: "kevin, it's not a competition", category: "other" },
          { es: "mamá, no llores por eso", en: "mom, don't cry over that", category: "other" },
          { es: "fue un comentario nada más", en: "it was just a comment", category: "other" },
        ],
      },
      {
        stem: "Mira quién habla",
        english: "Look who's talking",
        completions: [
          { es: "el que no contesta nunca", en: "the one who never replies", category: "other" },
          { es: "la que manda stickers a las tres de la mañana", en: "the one who sends stickers at three a.m.", category: "time" },
          { es: "tú también olvidaste el cumpleaños", en: "you forgot the birthday too", category: "time" },
          { es: "el que quema el arroz", en: "the one who burns the rice", category: "other" },
          { es: "la que manda corazones por todo", en: "the one who sends hearts for everything", category: "other" },
        ],
      },
      {
        stem: "¿En serio?",
        english: "Seriously? / For real?",
        completions: [
          { es: "¿eso les pareció ofensivo?", en: "did they find that offensive?", category: "opinion" },
          { es: "¿así reaccionan en el grupo siempre?", en: "is that how they always react in the group?", category: "other" },
          { es: "¿kevin se enojó por eso?", en: "did kevin get mad about that?", category: "other" },
          { es: "¿mamá lloró?", en: "did mom cry?", category: "other" },
          { es: "¿fue tan grave?", en: "was it that serious?", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 285,
    theme: "La broma que sale sola",
    stems: [
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "y esta vez te reíste", en: "and this time you laughed", category: "other" },
          { es: "pero salió natural", en: "but it came out natural", category: "opinion" },
          { es: "¿viste? no planifiqué nada", en: "see? i didn't plan anything", category: "activity" },
          { es: "salió solo", en: "it came out on its own", category: "other" },
          { es: "no me puse roja", en: "i didn't turn red", category: "other" },
        ],
      },
      {
        stem: "¡Qué va!",
        english: "No way! / Not at all!",
        completions: [
          { es: "fue lo más natural del mundo", en: "it was the most natural thing in the world", category: "opinion" },
          { es: "no estaba nerviosa esta vez", en: "i wasn't nervous this time", category: "opinion" },
          { es: "tú también te reíste primero", en: "you laughed first too", category: "other" },
          { es: "no fue un chiste perfecto", en: "it wasn't a perfect joke", category: "opinion" },
          { es: "no lo pensé tanto", en: "i didn't overthink it", category: "activity" },
        ],
      },
      {
        stem: "No exageres",
        english: "Don't exaggerate / You're blowing it up",
        completions: [
          { es: "no fue un chiste perfecto", en: "it wasn't a perfect joke", category: "opinion" },
          { es: "solo dije lo que pensé", en: "i just said what i thought", category: "activity" },
          { es: "fue una frase nada más", en: "it was just one sentence", category: "other" },
          { es: "no fue para tanto", en: "it wasn't that big a deal", category: "opinion" },
          { es: "solo salió", en: "it just came out", category: "other" },
        ],
      },
      {
        stem: "Mira quién habla",
        english: "Look who's talking",
        completions: [
          { es: "la que decía que no podía bromear", en: "the one who said she couldn't joke", category: "other" },
          { es: "miss seria de enero", en: "miss serious from january", category: "time" },
          { es: "la que se ponía roja con un cumplido", en: "the one who turned red at a compliment", category: "other" },
          { es: "la del bolso enorme", en: "the one with the huge bag", category: "other" },
          { es: "la reina del café otra vez", en: "the queen of coffee again", category: "other" },
        ],
      },
      {
        stem: "¿En serio?",
        english: "Seriously? / For real?",
        completions: [
          { es: "¿te pareció gracioso?", en: "did you think it was funny?", category: "opinion" },
          { es: "¿salió solo?", en: "did it come out on its own?", category: "other" },
          { es: "¿así de fácil era?", en: "was it that easy?", category: "opinion" },
          { es: "¿no planifiqué nada?", en: "i didn't plan anything?", category: "activity" },
          { es: "¿te reíste de verdad?", en: "did you really laugh?", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 286,
    theme: "Cuando no cae",
    stems: [
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "bueno, tal vez no", en: "well, maybe not", category: "other" },
          { es: "o al menos lo intenté", en: "or at least i tried", category: "activity" },
          { es: "aunque no haya caído", en: "even though it didn't land", category: "other" },
          { es: "perdón, fue malo", en: "sorry, that was bad", category: "opinion" },
          { es: "mejor lo digo en serio", en: "better i say it seriously", category: "other" },
        ],
      },
      {
        stem: "¡Qué va!",
        english: "No way! / Not at all!",
        completions: [
          { es: "no fue tan malo como pareció", en: "it wasn't as bad as it seemed", category: "opinion" },
          { es: "no me enojé, me quedé en blanco", en: "i didn't get mad, i went blank", category: "other" },
          { es: "tú también has tenido chistes que no caen", en: "you've had jokes that didn't land too", category: "other" },
          { es: "no fue un desastre", en: "it wasn't a disaster", category: "opinion" },
          { es: "solo hubo silencio", en: "there was just silence", category: "other" },
        ],
      },
      {
        stem: "No exageres",
        english: "Don't exaggerate / You're blowing it up",
        completions: [
          { es: "no fue un desastre", en: "it wasn't a disaster", category: "opinion" },
          { es: "solo hubo silencio incómodo", en: "there was just an awkward silence", category: "other" },
          { es: "lo arreglé con otra frase", en: "i fixed it with another sentence", category: "activity" },
          { es: "no me fui", en: "i didn't leave", category: "activity" },
          { es: "seguimos hablando", en: "we kept talking", category: "activity" },
        ],
      },
      {
        stem: "Mira quién habla",
        english: "Look who's talking",
        completions: [
          { es: "la que me enseñó a reírme de mis errores", en: "the one who taught me to laugh at my mistakes", category: "other" },
          { es: "la que se ríe de sus propias bromas", en: "the one who laughs at her own jokes", category: "other" },
          { es: "tú también has tenido un chiste que no cae", en: "you've had a joke that didn't land too", category: "other" },
          { es: "la del café de hospital", en: "the one with the hospital coffee", category: "other" },
          { es: "la que corrige mis chistes", en: "the one who corrects my jokes", category: "other" },
        ],
      },
      {
        stem: "¿En serio?",
        english: "Seriously? / For real?",
        completions: [
          { es: "¿te quedaste callada por eso?", en: "did you go quiet because of that?", category: "other" },
          { es: "¿fue tan incómodo?", en: "was it that awkward?", category: "opinion" },
          { es: "¿así se arregla, diciendo la verdad?", en: "is that how you fix it, by saying the truth?", category: "other" },
          { es: "¿hay diferencia entre malo y que no cae?", en: "is there a difference between bad and not landing?", category: "opinion" },
          { es: "¿cuenta igual?", en: "does it count the same?", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 287,
    theme: "Repaso: Humor ligero",
    stems: [
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "ya no me da miedo decirlo", en: "saying it doesn't scare me anymore", category: "opinion" },
          { es: "aunque a veces no caiga", en: "even though sometimes it doesn't land", category: "other" },
          { es: "y tú ya sabes que es broma", en: "and you already know it's a joke", category: "other" },
          { es: "en el colegio y en el grupo", en: "at school and in the group chat", category: "other" },
          { es: "sin ponerme roja", en: "without turning red", category: "other" },
        ],
      },
      {
        stem: "¡Qué va!",
        english: "No way! / Not at all!",
        completions: [
          { es: "no soy la misma de enero", en: "i'm not the same person as january", category: "time" },
          { es: "no fue tan malo como pareció", en: "it wasn't as bad as it seemed", category: "opinion" },
          { es: "tú también me devuelves las bromas", en: "you give the jokes back to me too", category: "activity" },
          { es: "no fue un desastre", en: "it wasn't a disaster", category: "opinion" },
          { es: "kevin exagera más que yo", en: "kevin exaggerates more than me", category: "opinion" },
        ],
      },
      {
        stem: "No exageres",
        english: "Don't exaggerate / You're blowing it up",
        completions: [
          { es: "solo aprendí cinco frases nuevas", en: "i only learned five new phrases", category: "other" },
          { es: "no fue un desastre, fue un silencio", en: "it wasn't a disaster, it was a silence", category: "other" },
          { es: "kevin, mamá y tú también exageran", en: "kevin, mom and you exaggerate too", category: "other" },
          { es: "no soy comediante todavía", en: "i'm not a comedian yet", category: "opinion" },
          { es: "fue una semana nada más", en: "it was just one week", category: "time" },
        ],
      },
      {
        stem: "Mira quién habla",
        english: "Look who's talking",
        completions: [
          { es: "la que no podía tomarse una broma", en: "the one who couldn't take a joke", category: "other" },
          { es: "la reina del café y de las bromas", en: "the queen of coffee and jokes", category: "other" },
          { es: "miss seria de invierno", en: "miss serious from winter", category: "time" },
          { es: "la que devuelve todo", en: "the one who gives everything back", category: "other" },
          { es: "la del chiste que no cayó", en: "the one with the joke that didn't land", category: "other" },
        ],
      },
      {
        stem: "¿En serio?",
        english: "Seriously? / For real?",
        completions: [
          { es: "¿ya llevo dos semanas de primavera?", en: "two weeks of spring already?", category: "time" },
          { es: "¿así de fácil salió al final?", en: "it turned out that easy in the end?", category: "opinion" },
          { es: "¿eso fue tomarse el pelo?", en: "that was teasing?", category: "other" },
          { es: "¿cuenta la que no cayó?", en: "does the one that didn't land count?", category: "opinion" },
          { es: "¿la próxima es exagerar?", en: "next is exaggerating?", category: "time" },
        ],
      },
    ],
  },
];
