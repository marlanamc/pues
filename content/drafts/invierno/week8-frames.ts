import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 8 — "Es mejor que…" (days 232–238). Subjunctive chunk 4:
 * advice. Story: "La estudiante nueva" — Yesenia joins the ESOL class in
 * February, terrified, and Marlana catches herself giving her, word for word,
 * the advice Camila gave her in week 1.
 *
 * Register note (convention 3): day 232 opens on usted, and Yesenia asks to be
 * spoken to as tú. The switch is deliberate and the frames say so.
 */
export const invWeek8FrameDays: FrameDay[] = [
  {
    day: 232,
    theme: "Es mejor que…: La estudiante nueva",
    subtitle: "Yesenia joins in February. Eight months in the country, not one English sentence spoken.",
    frames: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        scenarios: ["starting small", "sitting near the front", "coming even when tired"],
        examples: [
          "Es mejor que empiece con frases cortas.",
          "Es mejor que se siente adelante para oírme.",
          "Es mejor que venga aunque llegue cansada.",
        ],
        note: "Today opens on usted — a new adult student, first day. Watch what happens on Wednesday when she asks to be spoken to as tú.",
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        scenarios: ["knowing she's not behind", "asking questions", "coming back"],
        examples: [
          "Es importante que sepa que no está atrasada.",
          "Es importante que pregunte cuando no entienda.",
          "Es importante que vuelva el jueves.",
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        scenarios: ["not needing to apologize", "not needing supplies", "not needing to explain"],
        examples: [
          "No hace falta que se disculpe por llegar tarde.",
          "No hace falta que traiga nada, aquí hay de todo.",
          "No hace falta que me explique por qué no vino antes.",
        ],
        note: "*No hace falta que* is the kindest sentence in this family. It removes an obligation the other person invented for themselves.",
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        scenarios: ["suggesting a notebook", "suggesting one word a day", "suggesting she sit with someone"],
        examples: [
          "Te sugiero que traigas un cuaderno cualquiera.",
          "Te sugiero que aprendas una palabra al día, nada más.",
          "Te sugiero que te sientes al lado de Doris, que lleva un año.",
        ],
        note: "*Te sugiero* is softer than *te recomiendo* and much softer than *tienes que*. Advice you can turn down without awkwardness.",
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        scenarios: ["better to start now", "better to be wrong out loud", "better not to wait"],
        examples: [
          "Más vale que empieces hoy que la semana que viene.",
          "Más vale que te equivoques hablando que quedarte callada.",
          "Más vale que preguntes ahora y no al final.",
        ],
      },
    ],
  },
  {
    day: 233,
    theme: "Es mejor que…: No hace falta que te disculpes",
    subtitle: "She apologizes eleven times in one hour. You counted, because you used to do it too.",
    frames: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        scenarios: ["better to say pues", "better to keep going", "better not to translate first"],
        examples: [
          "Es mejor que digas \"pues\" y sigas.",
          "Es mejor que termines la frase mal a que la dejes a medias.",
          "Es mejor que no traduzcas primero en la cabeza.",
        ],
        note: "Week 1, handed on intact. Marlana is teaching the exact thing she was taught in a café in January.",
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        scenarios: ["knowing nobody's grading her", "hearing herself", "not comparing"],
        examples: [
          "Es importante que sepas que aquí nadie te califica.",
          "Es importante que te oigas hablar, aunque sea mal.",
          "Es importante que no te compares con nadie del salón.",
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        scenarios: ["no need to apologize", "no need to know everything", "no need for permission"],
        examples: [
          "No hace falta que te disculpes cada vez que te equivocas.",
          "No hace falta que sepas todas las palabras para empezar.",
          "No hace falta que pidas permiso para hablar aquí.",
        ],
        note: "Eleven apologies in an hour. The sentence that fixes it is one you needed said to you, once.",
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        scenarios: ["suggesting she count them", "suggesting a filler instead", "suggesting she stop mid-apology"],
        examples: [
          "Te sugiero que cuentes cuántas veces pides perdón hoy.",
          "Te sugiero que cambies el \"sorry\" por un \"pues\".",
          "Te sugiero que te pares a mitad de la disculpa y sigas hablando.",
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        scenarios: ["better to be wrong loudly", "better to talk than plan", "better this week than never"],
        examples: [
          "Más vale que hables mal y fuerte que bien y bajito.",
          "Más vale que hables sin pensarlo tanto.",
          "Más vale que empieces esta semana, aunque sea con una frase.",
        ],
      },
    ],
  },
  {
    day: 234,
    theme: "Es mejor que…: Es importante que hables mal",
    subtitle: "Giving someone permission to be bad at something is the whole job.",
    frames: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        scenarios: ["better to speak badly today", "better with mistakes than silence", "better in class than at home"],
        examples: [
          "Es mejor que hables mal hoy y mejor el mes que viene.",
          "Es mejor que tengas errores a que tengas silencio.",
          "Es mejor que practiques aquí, donde nadie se ríe.",
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        scenarios: ["important to be wrong", "important not to wait to be ready", "important to be understood, not correct"],
        examples: [
          "Es importante que te equivoques delante de alguien.",
          "Es importante que no esperes a sentirte lista.",
          "Es importante que te entiendan, no que hables perfecto.",
        ],
        note: "*Que te entiendan, no que hables perfecto* — the whole method of this app, said to someone else.",
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        scenarios: ["no need to be ready", "no need to study first", "no need to hide the accent"],
        examples: [
          "No hace falta que estés lista para empezar.",
          "No hace falta que estudies antes de venir a clase.",
          "No hace falta que escondas el acento, aquí todos tenemos uno.",
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        scenarios: ["suggesting five sentences a day", "suggesting she talk to one person", "suggesting she not study grammar yet"],
        examples: [
          "Te sugiero que digas cinco frases al día, en voz alta.",
          "Te sugiero que le hables a una sola persona esta semana.",
          "Te sugiero que dejes la gramática para después.",
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        scenarios: ["better understood than correct", "better today than perfect", "better a bad sentence than none"],
        examples: [
          "Más vale que te entiendan mal a que no digas nada.",
          "Más vale que sea hoy y no cuando esté perfecto.",
          "Más vale que salga una frase fea que ninguna.",
        ],
      },
    ],
  },
  {
    day: 235,
    theme: "Es mejor que…: Te sugiero que grabes",
    subtitle: "You hand her the voice-note trick. It was given to you six weeks ago.",
    frames: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        scenarios: ["better to record than write", "better alone first", "better without deleting"],
        examples: [
          "Es mejor que grabes un audio a que escribas un texto.",
          "Es mejor que practiques sola antes de hablar con alguien.",
          "Es mejor que mandes el primero sin escucharlo.",
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        scenarios: ["important to hear herself", "important to keep the first one", "important to do it daily"],
        examples: [
          "Es importante que te escuches una vez a la semana.",
          "Es importante que guardes el primer audio para comparar.",
          "Es importante que lo hagas todos los días, aunque sea corto.",
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        scenarios: ["no need to send it", "no need for it to be long", "no need to plan it"],
        examples: [
          "No hace falta que se lo mandes a nadie.",
          "No hace falta que dure más de treinta segundos.",
          "No hace falta que sepas qué vas a decir antes de grabar.",
        ],
        note: "The permission that made week 4 work: nobody has to hear it. The microphone doesn't judge anybody.",
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        scenarios: ["suggesting she record", "suggesting she not delete", "suggesting a set time"],
        examples: [
          "Te sugiero que grabes un audio cada noche.",
          "Te sugiero que no borres ninguno, aunque te dé pena.",
          "Te sugiero que lo hagas siempre a la misma hora.",
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        scenarios: ["better thirty seconds daily", "better imperfect than unrecorded", "better start tonight"],
        examples: [
          "Más vale que grabes treinta segundos diarios que una hora el domingo.",
          "Más vale que quede feo a que no quede nada.",
          "Más vale que empieces esta noche, antes de pensarlo mucho.",
        ],
      },
    ],
  },
  {
    day: 236,
    theme: "Es mejor que…: Más vale que empieces hoy",
    subtitle: "Urgency without pressure. There's a version of 'hurry up' that helps.",
    frames: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        scenarios: ["better now than in the spring", "better small and daily", "better before the fear settles"],
        examples: [
          "Es mejor que sea ahora y no en la primavera.",
          "Es mejor que hagas poquito todos los días.",
          "Es mejor que empieces antes de que el miedo se acomode.",
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        scenarios: ["important not to wait for a good moment", "important to keep the streak", "important to forgive a missed day"],
        examples: [
          "Es importante que no esperes el momento perfecto.",
          "Es importante que no rompas la racha por un día malo.",
          "Es importante que te perdones el día que falles.",
        ],
        note: "Both halves matter. Keep the streak, and forgive breaking it. Say only the first and people quit at the first miss.",
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        scenarios: ["no need to do a lot", "no need to catch up", "no need to promise anything"],
        examples: [
          "No hace falta que hagas mucho, hace falta que lo hagas seguido.",
          "No hace falta que recuperes los días que no hiciste.",
          "No hace falta que me prometas nada a mí.",
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        scenarios: ["suggesting the smallest version", "suggesting a fixed spot", "suggesting she tell one person"],
        examples: [
          "Te sugiero que empieces por lo más pequeño que se te ocurra.",
          "Te sugiero que lo hagas siempre en el mismo lugar.",
          "Te sugiero que se lo cuentes a alguien, para que sea real.",
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        scenarios: ["better today than perfect", "better one sentence than a plan", "better slow than stopped"],
        examples: [
          "Más vale que empieces hoy mal a que empieces nunca bien.",
          "Más vale una frase hoy que un plan entero el domingo.",
          "Más vale que vayas lenta a que te detengas.",
        ],
        note: "*Más vale* + a bare noun works too: *más vale una frase hoy*. No verb required when the comparison is obvious.",
      },
    ],
  },
  {
    day: 237,
    theme: "Es mejor que…: Lo que me dijo Camila",
    subtitle: "Halfway through the sentence you realize whose words these are.",
    frames: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        scenarios: ["better to pass it on", "better said than kept", "better to admit where it came from"],
        examples: [
          "Es mejor que se lo diga a alguien más y no que se me quede.",
          "Es mejor que le cuente de dónde salió el consejo.",
          "Es mejor que aprenda enseñando, como siempre.",
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        scenarios: ["important she knows it worked on someone", "important not to pretend it's easy", "important to name Camila"],
        examples: [
          "Es importante que sepa que a mí me funcionó primero.",
          "Es importante que no le venda esto como algo fácil.",
          "Es importante que le diga que a mí me lo dijo una enfermera colombiana.",
        ],
        note: "The advice is worth more with the story attached. It stops being a rule and starts being something that happened to a person.",
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        scenarios: ["no need to be an expert", "no need to have finished", "no need to hide her own level"],
        examples: [
          "No hace falta que sea experta para pasar el consejo.",
          "No hace falta que yo haya terminado para ayudar a alguien que empieza.",
          "No hace falta que esconda que yo también estoy aprendiendo.",
        ],
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        scenarios: ["suggesting she find her own Camila", "suggesting one person a week", "suggesting she teach it back"],
        examples: [
          "Te sugiero que busques a alguien con quien practicar cada semana.",
          "Te sugiero que le hables a una persona nueva cada semana.",
          "Te sugiero que se lo enseñes a otra persona, así se te queda.",
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        scenarios: ["better passed on than hoarded", "better honest than impressive", "better a real story"],
        examples: [
          "Más vale que el consejo circule a que se quede conmigo.",
          "Más vale que le diga la verdad a que le parezca fácil.",
          "Más vale contarle mi enero que darle una regla.",
        ],
      },
    ],
  },
  {
    day: 238,
    theme: "Es mejor que…: Repaso",
    subtitle: "Four weeks of subjunctive, and the closing move is giving it away.",
    frames: [
      {
        stem: "Es mejor que…",
        english: "It's better if… / You'd be better off…",
        scenarios: ["better as chunks", "better used than studied", "better to keep going"],
        examples: [
          "Es mejor que lo aprenda en trozos y no en tablas.",
          "Es mejor que lo use veinte veces a que lo estudie una hora.",
          "Es mejor que siga sin parar a revisar lo de atrás.",
        ],
      },
      {
        stem: "Es importante que…",
        english: "It's important that…",
        scenarios: ["important to notice the shift", "important not to go back to rules", "important to keep speaking"],
        examples: [
          "Es importante que note que ya no armo estas frases.",
          "Es importante que no vuelva a estudiar reglas ahora.",
          "Es importante que siga hablando aunque cambie el tema.",
        ],
      },
      {
        stem: "No hace falta que…",
        english: "There's no need to…",
        scenarios: ["no need to name the tense", "no need to be perfect", "no need to review"],
        examples: [
          "No hace falta que sepa cómo se llama para usarlo.",
          "No hace falta que me salga perfecto para que sirva.",
          "No hace falta que repase, hace falta que lo hable.",
        ],
        note: "Four weeks, four openers a week, twenty chunks. Not one of them arrived as a conjugation.",
      },
      {
        stem: "Te sugiero que…",
        english: "I'd suggest that…",
        scenarios: ["suggesting the next thing", "suggesting she keep the recordings", "suggesting she teach someone"],
        examples: [
          "Te sugiero que sigas con la parte de conversación real.",
          "Te sugiero que guardes los audios de enero y de marzo.",
          "Te sugiero que le enseñes esto a alguien antes de que se te olvide.",
        ],
      },
      {
        stem: "Más vale que…",
        english: "You'd better… / Best to…",
        scenarios: ["better forward than back", "better used than named", "better shared"],
        examples: [
          "Más vale que siga adelante y no que vuelva a empezar.",
          "Más vale usarlo mal veinte veces que nombrarlo bien una.",
          "Más vale que este invierno le sirva a alguien más.",
        ],
      },
    ],
  },
];
