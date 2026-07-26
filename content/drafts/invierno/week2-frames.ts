import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 2 — "Muletillas II" (days 190–196).
 * Story: "Las muletillas de Camila" — Camila hands over her own fillers and
 * Marlana starts hearing herself use them at school.
 *
 * Day 195 is where the folded "Estoy contigo" material lands: listener signals
 * (ajá · claro · ya · exacto) get their story beat here and their own stem in
 * week 10 ("El turno").
 */
export const invWeek2FrameDays: FrameDay[] = [
  {
    day: 190,
    theme: "Muletillas II: Las muletillas de Camila",
    subtitle: "Camila hands over her own favorite filler — the one that makes a point land.",
    frames: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        scenarios: ["landing a point", "a small revelation", "what she noticed"],
        examples: [
          "Fíjate que yo también estudié sola muchos años.",
          "Fíjate que nunca me habían enseñado esto en un curso.",
          "Fíjate que ahora las escucho en todas las conversaciones.",
        ],
        note: "*Fíjate que* asks the other person to pay attention to what's coming — a filler that also frames the sentence as worth hearing.",
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        scenarios: ["being straight about it", "a real opinion", "an admission"],
        examples: [
          "La verdad es que tu muletilla favorita me sirve más que la mía.",
          "La verdad es que no sabía que eso se podía enseñar.",
          "La verdad es que suena mucho más natural así.",
        ],
        note: "Longer fillers buy more time. *La verdad es que* gives you five syllables of runway before the content has to arrive.",
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        scenarios: ["sharpening what she said", "swapping one word", "a quick correction"],
        examples: [
          "Digo, no es una regla, es una costumbre.",
          "Digo, no la aprendí en un libro, la aprendí aquí.",
          "Digo, más que palabra es un gesto.",
        ],
        note: "*Digo* is the surgical version of *o sea*: one word out, one word in, sentence continues.",
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        scenarios: ["checking in mid-thought", "before the next point", "asking for a nod"],
        examples: [
          "¿Me entiendes? Es como respirar antes de hablar.",
          "¿Me entiendes? No es relleno vacío, es tiempo.",
          "¿Me entiendes? Por eso quiero practicarlas.",
        ],
        note: "Ask it, then keep going. *¿Me entiendes?* hands the listener a moment to nod without giving up your turn.",
      },
      {
        stem: "En fin…",
        english: "Anyway… / So in the end…",
        scenarios: ["wrapping it up", "the takeaway", "the plan from here"],
        examples: [
          "En fin, ya tengo cinco palabras nuevas.",
          "En fin, voy a usarlas toda la semana.",
          "En fin, el jueves te cuento cómo me fue.",
        ],
        note: "*En fin,* is the exit door from a long story. Say it and everyone knows the ending has started.",
      },
    ],
  },
  {
    day: 191,
    theme: "Muletillas II: La mejor hora de la semana",
    subtitle: "Honest instead of polite — say the true thing about this hour out loud.",
    frames: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        scenarios: ["waiting for Thursday", "nobody asks at school", "not pretending here"],
        examples: [
          "Fíjate que espero el jueves toda la semana.",
          "Fíjate que en el colegio nadie me pregunta cómo voy.",
          "Fíjate que aquí no tengo que fingir nada.",
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        scenarios: ["the best hour", "arriving exhausted", "a quiet fear"],
        examples: [
          "La verdad es que esta hora es la mejor de mi semana.",
          "La verdad es que llegué agotada y ya me siento distinta.",
          "La verdad es que me da miedo dejar de venir.",
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        scenarios: ["it's not the Spanish", "toning it down", "naming the need"],
        examples: [
          "Digo, no es solo el español, es hablar con alguien.",
          "Digo, no quiero sonar dramática, pero es así.",
          "Digo, me hacía falta esto.",
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        scenarios: ["class versus conversation", "always being the strong one", "permission to be wrong"],
        examples: [
          "¿Me entiendes? No es la clase, es la conversación.",
          "¿Me entiendes? Con mis estudiantes soy la fuerte.",
          "¿Me entiendes? Aquí puedo equivocarme tranquila.",
        ],
      },
      {
        stem: "En fin…",
        english: "Anyway… / So in the end…",
        scenarios: ["Thursday won", "not missing it", "thanking her"],
        examples: [
          "En fin, el jueves se volvió mi día favorito.",
          "En fin, no pienso faltar.",
          "En fin, te agradezco más de lo que parece.",
        ],
      },
    ],
  },
  {
    day: 192,
    theme: "Muletillas II: Enfermera, no enfermero",
    subtitle: "You called her 'enfermero' — fix it in one word and keep going.",
    frames: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        scenarios: ["no gender in English", "the error she always makes", "her students, in reverse"],
        examples: [
          "Fíjate que en inglés no tengo que pensar en el género.",
          "Fíjate que ese error lo hago siempre.",
          "Fíjate que mis estudiantes hacen lo mismo al revés.",
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        scenarios: ["gender betrays her", "noticing too late", "laughing at herself"],
        examples: [
          "La verdad es que el género me traiciona cada vez.",
          "La verdad es que lo pienso después de decirlo.",
          "La verdad es que ya me río de mis propios errores.",
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        scenarios: ["fixing the gender", "the wrong shift", "the wrong day"],
        examples: [
          "Digo, enfermera, no enfermero.",
          "Digo, quise decir el turno de noche, no el de la tarde.",
          "Digo, no fue el martes, fue el miércoles.",
        ],
        note: "This is the whole point of *digo*: you don't restart the sentence, you swap the one wrong word and carry on.",
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        scenarios: ["not correcting to look good", "not repeating it", "what the error tells you"],
        examples: [
          "¿Me entiendes? No lo corrijo para quedar bien.",
          "¿Me entiendes? Lo corrijo para no repetirlo.",
          "¿Me entiendes? El error avisa dónde practicar.",
        ],
      },
      {
        stem: "En fin…",
        english: "Anyway… / So in the end…",
        scenarios: ["one word fixes it", "no more restarting", "correcting without stopping"],
        examples: [
          "En fin, un \"digo\" me arregla la frase entera.",
          "En fin, ya no vuelvo al principio.",
          "En fin, corrijo sin cortar la conversación.",
        ],
      },
    ],
  },
  {
    day: 193,
    theme: "Muletillas II: El salón vacío",
    subtitle: "Explaining a mess at school — check in instead of trailing off.",
    frames: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        scenarios: ["the schedule changed", "students in an empty room", "how the principal found out"],
        examples: [
          "Fíjate que cambiaron el horario sin avisarnos.",
          "Fíjate que mis estudiantes llegaron a un salón vacío.",
          "Fíjate que la directora se enteró por mí.",
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        scenarios: ["nobody said anything", "more annoyed than she showed", "not one person's fault"],
        examples: [
          "La verdad es que nadie me dijo nada hasta el lunes.",
          "La verdad es que me molestó más de lo que mostré.",
          "La verdad es que no fue culpa de una sola persona.",
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        scenarios: ["room, not schedule", "three groups", "reported, not complained"],
        examples: [
          "Digo, no fue el horario, fue el salón.",
          "Digo, tres grupos, no dos.",
          "Digo, no me quejé, lo reporté.",
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        scenarios: ["the change wasn't the problem", "nobody warned anyone", "offering to re-explain"],
        examples: [
          "¿Me entiendes? El problema no era el cambio.",
          "¿Me entiendes? Era que nadie avisó.",
          "¿Me entiendes? Te lo explico otra vez si quieres.",
        ],
        note: "Checking in beats trailing off. A trailing sentence sounds lost; *¿me entiendes?* sounds like someone who's still driving.",
      },
      {
        stem: "En fin…",
        english: "Anyway… / So in the end…",
        scenarios: ["class in the library", "solved, badly", "her new habit"],
        examples: [
          "En fin, dimos la clase en la biblioteca.",
          "En fin, se resolvió, pero mal.",
          "En fin, ahora reviso el horario cada mañana.",
        ],
      },
    ],
  },
  {
    day: 194,
    theme: "Muletillas II: Dos horas para nada",
    subtitle: "A long staff-meeting story — get to the end without losing anyone.",
    frames: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        scenarios: ["two hours, no result", "how it started", "nobody decided"],
        examples: [
          "Fíjate que la reunión duró dos horas para nada.",
          "Fíjate que empezaron hablando del presupuesto.",
          "Fíjate que al final nadie decidió nada.",
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        scenarios: ["she drifted off", "it could've been an email", "what she did instead"],
        examples: [
          "La verdad es que me distraí a los veinte minutos.",
          "La verdad es que estas reuniones podrían ser un correo.",
          "La verdad es que aproveché para pensar en español.",
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        scenarios: ["being exact", "the real topic", "one thing did get decided"],
        examples: [
          "Digo, dos horas y media, para ser exacta.",
          "Digo, no era el presupuesto, era el calendario.",
          "Digo, sí decidieron una cosa: otra reunión.",
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        scenarios: ["nobody spoke first", "waiting on the principal", "how an afternoon dies"],
        examples: [
          "¿Me entiendes? Nadie quería hablar primero.",
          "¿Me entiendes? Todos esperaban a la directora.",
          "¿Me entiendes? Así se pierde una tarde entera.",
        ],
      },
      {
        stem: "En fin…",
        english: "Anyway… / So in the end…",
        scenarios: ["more questions than answers", "doing it again Thursday", "why she was late"],
        examples: [
          "En fin, salí de ahí con más preguntas que al entrar.",
          "En fin, vamos a repetir la reunión el jueves.",
          "En fin, no pude venir temprano por eso.",
        ],
        note: "A story can be long if the landing is clean. *En fin,* is the landing.",
      },
    ],
  },
  {
    day: 195,
    theme: "Muletillas II: Escuchar en voz alta",
    subtitle: "Camila's turn to talk — silence from you reads as absence. Say you're there.",
    frames: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        scenarios: ["quiet looks bored", "in English she does it constantly", "listening is a skill too"],
        examples: [
          "Fíjate que yo callada parezco aburrida y no lo estoy.",
          "Fíjate que en inglés hago ruiditos todo el tiempo.",
          "Fíjate que nunca pensé que escuchar también se practica.",
        ],
        note: "Spanish conversation expects noise from the listener: *ajá · claro · ya · exacto · entiendo · sí, sí*. Silence is read as absence, not respect.",
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        scenarios: ["she was paying attention", "not knowing what to say", "one well-timed ajá"],
        examples: [
          "La verdad es que estaba muy atenta, aunque no lo dije.",
          "La verdad es que no sabía qué decir mientras hablabas.",
          "La verdad es que un \"ajá\" a tiempo cambia todo.",
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        scenarios: ["it's not indifference", "she was following", "learned to talk, not to accompany"],
        examples: [
          "Digo, no es que no me importe, es que me quedo quieta.",
          "Digo, sí te seguía, solo estaba en silencio.",
          "Digo, aprendí a hablar antes que a acompañar.",
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        scenarios: ["quiet listening isn't bad listening", "but you can't tell", "showing it with her voice"],
        examples: [
          "¿Me entiendes? Escuchar callada no es escuchar mal.",
          "¿Me entiendes? Pero tú no puedes saberlo.",
          "¿Me entiendes? Ahora te lo voy a mostrar con la voz.",
        ],
      },
      {
        stem: "En fin…",
        english: "Anyway… / So in the end…",
        scenarios: ["saying claro more often", "conversation goes both ways", "the missing half"],
        examples: [
          "En fin, voy a decir \"claro\" y \"exacto\" más seguido.",
          "En fin, también se conversa mientras el otro habla.",
          "En fin, me faltaba la mitad de la conversación.",
        ],
      },
    ],
  },
  {
    day: 196,
    theme: "Muletillas II: Repaso",
    subtitle: "Ten fillers now — five to think with and five to keep the other person with you.",
    frames: [
      {
        stem: "Fíjate que…",
        english: "Get this… / You know…",
        scenarios: ["ten of them now", "the longer ones buy more", "no longer counting"],
        examples: [
          "Fíjate que ya llevo diez muletillas.",
          "Fíjate que las de esta semana son más largas y dan más tiempo.",
          "Fíjate que ya no las cuento, me salen solas.",
        ],
      },
      {
        stem: "La verdad es que…",
        english: "The truth is… / Honestly…",
        scenarios: ["a harder week", "her favorite", "conversing, not translating"],
        examples: [
          "La verdad es que esta semana me costó más que la primera.",
          "La verdad es que \"total, que\" es mi favorita.",
          "La verdad es que sueno como alguien que conversa, no que traduce.",
        ],
      },
      {
        stem: "Digo…",
        english: "I mean… / Sorry, I mean…",
        scenarios: ["tools, not words", "used, not memorized", "still slipping"],
        examples: [
          "Digo, no diez palabras, diez herramientas.",
          "Digo, no las memoricé, las usé.",
          "Digo, todavía se me olvidan a mitad de frase.",
        ],
      },
      {
        stem: "¿Me entiendes?",
        english: "You know what I mean?",
        scenarios: ["no longer hunting the perfect word", "just continuing", "the whole secret"],
        examples: [
          "¿Me entiendes? Ya no busco la palabra perfecta.",
          "¿Me entiendes? Busco seguir hablando.",
          "¿Me entiendes? Eso era todo el secreto.",
        ],
      },
      {
        stem: "En fin…",
        english: "Anyway… / So in the end…",
        scenarios: ["two weeks in", "the phone is next", "see you Thursday"],
        examples: [
          "En fin, dos semanas y ya sueno distinta.",
          "En fin, la próxima toca el teléfono.",
          "En fin, sigo el jueves que viene.",
        ],
      },
    ],
  },
];
