import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 2 — "Muletillas II" (days 190–196).
 * Stems must match content/drafts/invierno/week2-frames.ts for the same day.
 */
export const invWeek2SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 190,
    theme: "Las muletillas de Camila",
    stems: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        completions: [
          { es: "yo también estudié sola muchos años", en: "i studied alone for years too", category: "time" },
          { es: "nunca me habían enseñado esto en un curso", en: "nobody had ever taught me this in a course", category: "other" },
          { es: "ahora las escucho en todas las conversaciones", en: "now i hear them in every conversation", category: "other" },
          { es: "en los libros de texto no aparecen", en: "they don't show up in textbooks", category: "other" },
          { es: "tú las usas sin darte cuenta", en: "you use them without realizing", category: "activity" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        completions: [
          { es: "tu muletilla favorita me sirve más que la mía", en: "your favorite filler is more useful to me than mine", category: "opinion" },
          { es: "no sabía que eso se podía enseñar", en: "i didn't know that could be taught", category: "opinion" },
          { es: "suena mucho más natural así", en: "it sounds much more natural that way", category: "opinion" },
          { es: "estas son más largas y me dan más tiempo", en: "these are longer and give me more time", category: "time" },
          { es: "me faltaban justo estas", en: "these were exactly what i was missing", category: "opinion" },
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        completions: [
          { es: "no es una regla, es una costumbre", en: "it's not a rule, it's a habit", category: "other" },
          { es: "no la aprendí en un libro, la aprendí aquí", en: "i didn't learn it in a book, i learned it here", category: "activity" },
          { es: "más que palabra es un gesto", en: "more than a word it's a gesture", category: "other" },
          { es: "no cinco palabras, cinco segundos", en: "not five words, five seconds", category: "time" },
          { es: "no sirven para hablar, sirven para no parar", en: "they're not for speaking, they're for not stopping", category: "opinion" },
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        completions: [
          { es: "es como respirar antes de hablar", en: "it's like breathing before you speak", category: "other" },
          { es: "no es relleno vacío, es tiempo", en: "it's not empty filler, it's time", category: "opinion" },
          { es: "por eso quiero practicarlas", en: "that's why i want to practice them", category: "activity" },
          { es: "la pausa deja de sonar a error", en: "the pause stops sounding like a mistake", category: "opinion" },
          { es: "no quiero sonar a libro", en: "i don't want to sound like a book", category: "opinion" },
        ],
      },
      {
        stem: "Total, que…",
        english: "Anyway… / So in the end…",
        completions: [
          { es: "ya tengo cinco palabras nuevas", en: "now i've got five new words", category: "other" },
          { es: "voy a usarlas toda la semana", en: "i'm going to use them all week", category: "time" },
          { es: "el jueves te cuento cómo me fue", en: "on thursday i'll tell you how it went", category: "time" },
          { es: "me llevo tarea para el colegio", en: "i'm taking homework to school", category: "activity" },
          { es: "las apunté en el celular", en: "i wrote them down on my phone", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 191,
    theme: "La mejor hora de la semana",
    stems: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        completions: [
          { es: "espero el jueves toda la semana", en: "i wait for thursday all week", category: "time" },
          { es: "en el colegio nadie me pregunta cómo voy", en: "at school nobody asks me how i'm doing", category: "other" },
          { es: "aquí no tengo que fingir nada", en: "here i don't have to pretend anything", category: "other" },
          { es: "salgo de aquí con más energía que al llegar", en: "i leave here with more energy than i came with", category: "opinion" },
          { es: "es la única hora en que no soy la maestra", en: "it's the only hour i'm not the teacher", category: "time" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        completions: [
          { es: "esta hora es la mejor de mi semana", en: "this hour is the best one of my week", category: "opinion" },
          { es: "llegué agotada y ya me siento distinta", en: "i arrived exhausted and i already feel different", category: "opinion" },
          { es: "me da miedo dejar de venir", en: "i'm afraid of stopping coming", category: "opinion" },
          { es: "no vengo solo por el español", en: "i don't come just for the spanish", category: "opinion" },
          { es: "no me esperaba esto de un intercambio", en: "i wasn't expecting this from a language exchange", category: "opinion" },
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        completions: [
          { es: "no es solo el español, es hablar con alguien", en: "it's not just the spanish, it's talking to someone", category: "activity" },
          { es: "no quiero sonar dramática, pero es así", en: "i don't want to sound dramatic, but that's how it is", category: "opinion" },
          { es: "me hacía falta esto", en: "i needed this", category: "opinion" },
          { es: "no es la práctica, es la compañía", en: "it's not the practice, it's the company", category: "opinion" },
          { es: "no exagero, lo pienso de verdad", en: "i'm not exaggerating, i really mean it", category: "opinion" },
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        completions: [
          { es: "no es la clase, es la conversación", en: "it's not the class, it's the conversation", category: "opinion" },
          { es: "con mis estudiantes soy la fuerte", en: "with my students i'm the strong one", category: "other" },
          { es: "aquí puedo equivocarme tranquila", en: "here i can make mistakes calmly", category: "other" },
          { es: "en el trabajo siempre tengo la respuesta", en: "at work i always have the answer", category: "other" },
          { es: "nadie me ve aprender en mi propio salón", en: "nobody sees me learning in my own classroom", category: "other" },
        ],
      },
      {
        stem: "Total, que…",
        english: "Anyway… / So in the end…",
        completions: [
          { es: "el jueves se volvió mi día favorito", en: "thursday turned into my favorite day", category: "time" },
          { es: "no pienso faltar", en: "i don't plan on missing it", category: "activity" },
          { es: "te agradezco más de lo que parece", en: "i'm more grateful than it seems", category: "opinion" },
          { es: "muevo todo lo demás para venir", en: "i move everything else around to come", category: "activity" },
          { es: "ya lo tengo fijo en el calendario", en: "i've already got it fixed in the calendar", category: "time" },
        ],
      },
    ],
  },
  {
    day: 192,
    theme: "Enfermera, no enfermero",
    stems: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        completions: [
          { es: "en inglés no tengo que pensar en el género", en: "in english i don't have to think about gender", category: "other" },
          { es: "ese error lo hago siempre", en: "i make that mistake every time", category: "other" },
          { es: "mis estudiantes hacen lo mismo al revés", en: "my students do the same thing in reverse", category: "other" },
          { es: "lo noto justo un segundo tarde", en: "i notice it exactly one second too late", category: "time" },
          { es: "en la escritura nunca me pasa", en: "it never happens to me in writing", category: "activity" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        completions: [
          { es: "el género me traiciona cada vez", en: "gender betrays me every time", category: "opinion" },
          { es: "lo pienso después de decirlo", en: "i think about it after i've said it", category: "time" },
          { es: "ya me río de mis propios errores", en: "i laugh at my own mistakes now", category: "opinion" },
          { es: "prefiero equivocarme rápido que callarme", en: "i'd rather be wrong fast than go quiet", category: "opinion" },
          { es: "nadie se confunde por una letra", en: "nobody gets confused over one letter", category: "opinion" },
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        completions: [
          { es: "enfermera, no enfermero", en: "nurse, feminine, not masculine", category: "other" },
          { es: "quise decir el turno de noche, no el de la tarde", en: "i meant the night shift, not the afternoon one", category: "time" },
          { es: "no fue el martes, fue el miércoles", en: "it wasn't tuesday, it was wednesday", category: "time" },
          { es: "la directora, no el director", en: "the principal, feminine, not masculine", category: "other" },
          { es: "tres años, no tres meses", en: "three years, not three months", category: "time" },
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        completions: [
          { es: "no lo corrijo para quedar bien", en: "i don't fix it to look good", category: "opinion" },
          { es: "lo corrijo para no repetirlo", en: "i fix it so i don't repeat it", category: "activity" },
          { es: "el error avisa dónde practicar", en: "the mistake tells you where to practice", category: "opinion" },
          { es: "corregirse no es interrumpirse", en: "correcting yourself isn't interrupting yourself", category: "opinion" },
          { es: "así lo hago con mis propios estudiantes", en: "that's how i do it with my own students", category: "activity" },
        ],
      },
      {
        stem: "Total, que…",
        english: "Anyway… / So in the end…",
        completions: [
          { es: "un \"digo\" me arregla la frase entera", en: "one \"digo\" fixes the whole sentence for me", category: "other" },
          { es: "ya no vuelvo al principio", en: "i don't go back to the beginning anymore", category: "activity" },
          { es: "corrijo sin cortar la conversación", en: "i correct myself without cutting off the conversation", category: "activity" },
          { es: "el error dura medio segundo", en: "the mistake lasts half a second", category: "time" },
          { es: "camila ni se detuvo a comentarlo", en: "camila didn't even stop to comment on it", category: "other" },
        ],
      },
    ],
  },
  {
    day: 193,
    theme: "El salón vacío",
    stems: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        completions: [
          { es: "cambiaron el horario sin avisarnos", en: "they changed the schedule without telling us", category: "other" },
          { es: "mis estudiantes llegaron a un salón vacío", en: "my students arrived to an empty classroom", category: "other" },
          { es: "la directora se enteró por mí", en: "the principal found out from me", category: "other" },
          { es: "el correo llegó el lunes por la tarde", en: "the email arrived monday afternoon", category: "time" },
          { es: "nadie revisó quién usaba ese salón", en: "nobody checked who was using that room", category: "other" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        completions: [
          { es: "nadie me dijo nada hasta el lunes", en: "nobody told me anything until monday", category: "time" },
          { es: "me molestó más de lo que mostré", en: "it bothered me more than i let on", category: "opinion" },
          { es: "no fue culpa de una sola persona", en: "it wasn't one person's fault", category: "opinion" },
          { es: "estas cosas pasan cada semestre", en: "these things happen every semester", category: "time" },
          { es: "mis estudiantes se lo tomaron mejor que yo", en: "my students took it better than i did", category: "opinion" },
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        completions: [
          { es: "no fue el horario, fue el salón", en: "it wasn't the schedule, it was the room", category: "other" },
          { es: "tres grupos, no dos", en: "three groups, not two", category: "other" },
          { es: "no me quejé, lo reporté", en: "i didn't complain, i reported it", category: "activity" },
          { es: "el lunes, no el viernes anterior", en: "monday, not the friday before", category: "time" },
          { es: "no estaban perdidos, estaban esperando", en: "they weren't lost, they were waiting", category: "other" },
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        completions: [
          { es: "el problema no era el cambio", en: "the problem wasn't the change", category: "opinion" },
          { es: "era que nadie avisó", en: "it was that nobody gave any warning", category: "opinion" },
          { es: "te lo explico otra vez si quieres", en: "i'll explain it again if you want", category: "activity" },
          { es: "un correo a tiempo lo resolvía todo", en: "one email on time would have solved everything", category: "opinion" },
          { es: "no busco culpables, busco un aviso", en: "i'm not looking for someone to blame, i'm looking for a heads-up", category: "opinion" },
        ],
      },
      {
        stem: "Total, que…",
        english: "Anyway… / So in the end…",
        completions: [
          { es: "dimos la clase en la biblioteca", en: "we taught the class in the library", category: "activity" },
          { es: "se resolvió, pero mal", en: "it got solved, but badly", category: "opinion" },
          { es: "ahora reviso el horario cada mañana", en: "now i check the schedule every morning", category: "time" },
          { es: "perdimos veinte minutos de clase", en: "we lost twenty minutes of class", category: "time" },
          { es: "escribí al equipo para que no se repita", en: "i wrote to the team so it doesn't happen again", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 194,
    theme: "Dos horas para nada",
    stems: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        completions: [
          { es: "la reunión duró dos horas para nada", en: "the meeting lasted two hours for nothing", category: "time" },
          { es: "empezaron hablando del presupuesto", en: "they started off talking about the budget", category: "activity" },
          { es: "al final nadie decidió nada", en: "in the end nobody decided anything", category: "other" },
          { es: "la mitad de la gente tenía la cámara apagada", en: "half the people had their camera off", category: "other" },
          { es: "yo llevaba el cuaderno de español debajo", en: "i had my spanish notebook underneath", category: "other" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        completions: [
          { es: "me distraí a los veinte minutos", en: "i drifted off after twenty minutes", category: "time" },
          { es: "estas reuniones podrían ser un correo", en: "these meetings could be an email", category: "opinion" },
          { es: "aproveché para pensar en español", en: "i took advantage of it to think in spanish", category: "activity" },
          { es: "nadie leyó el documento antes", en: "nobody read the document beforehand", category: "other" },
          { es: "salí más cansada que después de dar clase", en: "i left more tired than after teaching", category: "opinion" },
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        completions: [
          { es: "dos horas y media, para ser exacta", en: "two and a half hours, to be exact", category: "time" },
          { es: "no era el presupuesto, era el calendario", en: "it wasn't the budget, it was the calendar", category: "other" },
          { es: "sí decidieron una cosa: otra reunión", en: "they did decide one thing: another meeting", category: "other" },
          { es: "no me distraí, me rendí", en: "i didn't drift off, i gave up", category: "opinion" },
          { es: "casi toda la escuela, no solo mi equipo", en: "almost the whole school, not just my team", category: "other" },
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        completions: [
          { es: "nadie quería hablar primero", en: "nobody wanted to speak first", category: "other" },
          { es: "todos esperaban a la directora", en: "everyone was waiting for the principal", category: "other" },
          { es: "así se pierde una tarde entera", en: "that's how you lose a whole afternoon", category: "time" },
          { es: "el silencio ahí no era timidez, era cansancio", en: "the silence there wasn't shyness, it was exhaustion", category: "opinion" },
          { es: "yo tampoco levanté la mano", en: "i didn't raise my hand either", category: "activity" },
        ],
      },
      {
        stem: "Total, que…",
        english: "Anyway… / So in the end…",
        completions: [
          { es: "salí de ahí con más preguntas que al entrar", en: "i left with more questions than i went in with", category: "opinion" },
          { es: "vamos a repetir la reunión el jueves", en: "we're doing the meeting again on thursday", category: "time" },
          { es: "no pude venir temprano por eso", en: "that's why i couldn't come early", category: "time" },
          { es: "escribí el resumen yo misma", en: "i wrote the summary myself", category: "activity" },
          { es: "aprendí dos muletillas nuevas ahí sentada", en: "i learned two new fillers sitting right there", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 195,
    theme: "Escuchar en voz alta",
    stems: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        completions: [
          { es: "yo callada parezco aburrida y no lo estoy", en: "when i'm quiet i look bored and i'm not", category: "opinion" },
          { es: "en inglés hago ruiditos todo el tiempo", en: "in english i make little noises all the time", category: "activity" },
          { es: "nunca pensé que escuchar también se practica", en: "i never thought listening gets practiced too", category: "opinion" },
          { es: "tú dices \"ya\" y yo sé que me sigues", en: "you say \"ya\" and i know you're with me", category: "other" },
          { es: "mis estudiantes hacen lo mismo en inglés", en: "my students do the same thing in english", category: "other" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        completions: [
          { es: "estaba muy atenta, aunque no lo dije", en: "i was paying close attention, though i didn't say so", category: "opinion" },
          { es: "no sabía qué decir mientras hablabas", en: "i didn't know what to say while you were talking", category: "other" },
          { es: "un \"ajá\" a tiempo cambia todo", en: "a well-timed \"ajá\" changes everything", category: "opinion" },
          { es: "me daba miedo interrumpirte", en: "i was afraid of interrupting you", category: "opinion" },
          { es: "escuchar en silencio me sale natural", en: "listening in silence comes naturally to me", category: "opinion" },
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        completions: [
          { es: "no es que no me importe, es que me quedo quieta", en: "it's not that i don't care, it's that i go still", category: "opinion" },
          { es: "sí te seguía, solo estaba en silencio", en: "i was following you, i was just quiet", category: "other" },
          { es: "aprendí a hablar antes que a acompañar", en: "i learned to speak before i learned to keep company", category: "activity" },
          { es: "no era desinterés, era costumbre", en: "it wasn't disinterest, it was habit", category: "opinion" },
          { es: "no me faltaban ganas, me faltaban palabras", en: "i wasn't short on desire, i was short on words", category: "opinion" },
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        completions: [
          { es: "escuchar callada no es escuchar mal", en: "listening quietly isn't listening badly", category: "opinion" },
          { es: "pero tú no puedes saberlo", en: "but you can't know that", category: "opinion" },
          { es: "ahora te lo voy a mostrar con la voz", en: "now i'm going to show you with my voice", category: "activity" },
          { es: "el silencio se lee como ausencia", en: "silence gets read as absence", category: "opinion" },
          { es: "hablar no es la única mitad", en: "speaking isn't the only half", category: "opinion" },
        ],
      },
      {
        stem: "Total, que…",
        english: "Anyway… / So in the end…",
        completions: [
          { es: "voy a decir \"claro\" y \"exacto\" más seguido", en: "i'm going to say \"claro\" and \"exacto\" more often", category: "activity" },
          { es: "también se conversa mientras el otro habla", en: "you converse while the other person talks too", category: "opinion" },
          { es: "me faltaba la mitad de la conversación", en: "i was missing half the conversation", category: "opinion" },
          { es: "practico los ruiditos esta semana", en: "i'll practice the little noises this week", category: "time" },
          { es: "ya no te dejo hablando sola", en: "i won't leave you talking to yourself anymore", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 196,
    theme: "Repaso: Muletillas II",
    stems: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        completions: [
          { es: "ya llevo diez muletillas", en: "i'm up to ten fillers now", category: "other" },
          { es: "las de esta semana son más largas y dan más tiempo", en: "this week's are longer and give more time", category: "time" },
          { es: "ya no las cuento, me salen solas", en: "i don't count them anymore, they just come out", category: "activity" },
          { es: "las oigo en el hospital cuando llamo", en: "i hear them at the hospital when i call", category: "other" },
          { es: "hasta en inglés me salen ahora", en: "they even come out in english now", category: "other" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        completions: [
          { es: "esta semana me costó más que la primera", en: "this week was harder for me than the first", category: "opinion" },
          { es: "\"total, que\" es mi favorita", en: "\"total, que\" is my favorite", category: "opinion" },
          { es: "sueno como alguien que conversa, no que traduce", en: "i sound like someone having a conversation, not translating one", category: "opinion" },
          { es: "las cinco de esta semana son más difíciles", en: "this week's five are harder", category: "opinion" },
          { es: "todavía se me olvida escuchar en voz alta", en: "i still forget to listen out loud", category: "activity" },
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        completions: [
          { es: "no diez palabras, diez herramientas", en: "not ten words, ten tools", category: "other" },
          { es: "no las memoricé, las usé", en: "i didn't memorize them, i used them", category: "activity" },
          { es: "todavía se me olvidan a mitad de frase", en: "i still forget them mid-sentence", category: "other" },
          { es: "no dos semanas, catorce días seguidos", en: "not two weeks, fourteen days in a row", category: "time" },
          { es: "no es fluidez todavía, es soltura", en: "it's not fluency yet, it's ease", category: "opinion" },
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        completions: [
          { es: "ya no busco la palabra perfecta", en: "i'm not hunting for the perfect word anymore", category: "activity" },
          { es: "busco seguir hablando", en: "i'm trying to keep talking", category: "activity" },
          { es: "eso era todo el secreto", en: "that was the whole secret", category: "opinion" },
          { es: "la meta nunca fue hablar rápido", en: "the goal was never to speak fast", category: "opinion" },
          { es: "el silencio era el único enemigo", en: "silence was the only enemy", category: "opinion" },
        ],
      },
      {
        stem: "Total, que…",
        english: "Anyway… / So in the end…",
        completions: [
          { es: "dos semanas y ya sueno distinta", en: "two weeks and i already sound different", category: "time" },
          { es: "la próxima toca el teléfono", en: "next up is the phone", category: "time" },
          { es: "sigo el jueves que viene", en: "i'll keep going next thursday", category: "time" },
          { es: "me llevo diez y quiero diez más", en: "i'm taking ten and i want ten more", category: "opinion" },
          { es: "el invierno apenas empieza", en: "winter is only just starting", category: "time" },
        ],
      },
    ],
  },
];
