import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 12 — "A velocidad real" (days 260–266). Linking and reductions
 * in fast exchanges. Story: "La panadería" — Camila takes Marlana to a Colombian
 * bakery in East Boston where nobody slows down for anybody.
 *
 * Ties to content/linking.ts, which teaches the mechanics in isolation
 * (sinalefa, enlace, rhythm). This week applies them to whole chunks where the
 * reduction is already baked into how people say it. Each `note` names what
 * happens to the phrase at speed.
 */
export const invWeek12FrameDays: FrameDay[] = [
  {
    day: 260,
    theme: "A velocidad real: En la panadería",
    subtitle: "Nobody here slows down for you. That turns out to be the good news.",
    frames: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        scenarios: ["walking in", "greeting the woman behind the counter", "running into someone"],
        examples: [
          "¿Qué hubo? ¿Cómo va todo por aquí?",
          "¿Qué hubo? Vengo con una amiga.",
          "¿Qué hubo? ¿Todavía queda pan de bono?",
        ],
        note: "Said fast this is one word: **quiubo**. Two words on paper, two syllables in the mouth. In Colombia you'll hear it more than *hola*.",
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        scenarios: ["ordering", "deciding on the spot", "what she'll try"],
        examples: [
          "Voy a llevar dos de estos y un café.",
          "Voy a probar lo que tú pidas.",
          "Voy a pedir en español, aunque me tarde.",
        ],
        note: "*Voy a* collapses to **voy'a**, and at full speed to something like *vua*. It's the single most common reduction in spoken Spanish.",
      },
      {
        stem: "Para que…",
        english: "So that…",
        scenarios: ["explaining why", "for the family", "so it lasts"],
        examples: [
          "Para que lo prueben en la casa.",
          "Para que me dure toda la semana.",
          "Para que no digas que no lo intenté.",
        ],
        note: "Everyone says **pa' que**. The full *para* survives in writing and in careful speech; in a bakery at nine on a Saturday it does not.",
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        scenarios: ["accepting what's offered", "agreeing to the price", "it's enough"],
        examples: [
          "Está bien así, gracias.",
          "Está bien, me llevo los dos.",
          "Está bien, no hay problema.",
        ],
        note: "The first syllable disappears: **tá bien**. Same with *estoy* → *toy* and *estamos* → *tamos*. Nobody thinks they're dropping anything.",
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        scenarios: ["hearing surprising news", "asking for the reason", "genuine curiosity"],
        examples: [
          "¿Y eso? Nunca vienes por aquí.",
          "¿Y eso? ¿Se acabó tan temprano?",
          "¿Y eso? Cuéntame.",
        ],
        note: "Two words, one glide: **yeso**. Pure sinalefa, exactly as in content/linking.ts — and it's the most useful two-word question in the language.",
      },
    ],
  },
  {
    day: 261,
    theme: "A velocidad real: Quiubo",
    subtitle: "The greetings in the textbook are not the greetings in the room.",
    frames: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        scenarios: ["to the regulars", "to someone she now knows", "on the way out"],
        examples: [
          "¿Qué hubo, doña Marta? ¿Cómo amaneció?",
          "¿Qué hubo? Ya me reconoce, qué pena.",
          "¿Qué hubo? Nos vemos el sábado.",
        ],
        note: "*¿Cómo amaneció?* — how did you wake up? A morning greeting with no English equivalent, and much warmer than *¿cómo está?*",
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        scenarios: ["the usual order", "trying something new", "getting extra"],
        examples: [
          "Voy a pedir lo mismo de la otra vez.",
          "Voy a llevarme uno de esos que no conozco.",
          "Voy a llevar de más, que viene Rocío.",
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        scenarios: ["so she learns the names", "so she can order alone", "so it becomes routine"],
        examples: [
          "Para que me aprenda los nombres de todo.",
          "Para que la próxima venga sola.",
          "Para que se me haga costumbre venir.",
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        scenarios: ["when they say there's none left", "taking what there is", "no need to fuss"],
        examples: [
          "Está bien, entonces me llevo otra cosa.",
          "Está bien, con eso me arreglo.",
          "Está bien, no se preocupe.",
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        scenarios: ["why it's busy", "why they closed early", "why she's here on a Tuesday"],
        examples: [
          "¿Y eso? Está lleno hoy.",
          "¿Y eso? Cerraron el martes pasado.",
          "¿Y eso? ¿Hay fiesta o algo?",
        ],
      },
    ],
  },
  {
    day: 262,
    theme: "A velocidad real: Pa' que",
    subtitle: "You heard it for three months before you knew what it was.",
    frames: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        scenarios: ["with Rocío at school", "picking up the register", "trying it out"],
        examples: [
          "¿Qué hubo, Rocío? ¿Cómo va la mañana?",
          "¿Qué hubo? Te traje algo de la panadería.",
          "¿Qué hubo? ¿Ya te enteraste de lo de marzo?",
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        scenarios: ["today's plan", "a decision", "what she'll try this week"],
        examples: [
          "Voy a hablar rápido a propósito esta semana.",
          "Voy a dejar de pronunciar cada palabra entera.",
          "Voy a copiarle el ritmo a Camila.",
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        scenarios: ["so she sounds normal", "so they don't slow down", "so it stops being a performance"],
        examples: [
          "Para que suene como conversación y no como examen.",
          "Para que no me hablen despacio.",
          "Para que se me pegue el ritmo de verdad.",
        ],
        note: "Notice you now hear **pa' que** as one thing, not as a mistake. Recognizing a reduction is the step before producing one.",
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        scenarios: ["accepting a correction", "letting a mistake go", "good enough"],
        examples: [
          "Está bien, lo digo mal y sigo.",
          "Está bien que se me pegue el acento colombiano.",
          "Está bien así, no tiene que ser perfecto.",
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        scenarios: ["reacting to news at school", "why the change", "surprised"],
        examples: [
          "¿Y eso? ¿Desde cuándo hablas así?",
          "¿Y eso? Nadie me avisó.",
          "¿Y eso? Qué buena noticia.",
        ],
      },
    ],
  },
  {
    day: 263,
    theme: "A velocidad real: Tá bien",
    subtitle: "Dropped syllables everywhere, and nobody thinks they're dropping anything.",
    frames: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        scenarios: ["answering the phone casually", "a voice note to Camila", "quick hello"],
        examples: [
          "¿Qué hubo? Te mando un audio rapidito.",
          "¿Qué hubo? ¿Cómo va tu día?",
          "¿Qué hubo? Ya salí del colegio.",
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        scenarios: ["what she's about to do", "the next hour", "on the way somewhere"],
        examples: [
          "Voy a estar en la casa como a las seis.",
          "Voy a hacer la cena y te llamo.",
          "Voy a estar ocupada hasta las cuatro.",
        ],
        note: "*Voy a estar* is three reductions in a row: **voy'a'tar**. Say it slowly once, then never again.",
      },
      {
        stem: "Para que…",
        english: "So that…",
        scenarios: ["so nobody waits", "so it's ready", "so she doesn't forget"],
        examples: [
          "Para que no me esperen despiertos.",
          "Para que esté listo antes del jueves.",
          "Para que no se me olvide, lo escribo ya.",
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        scenarios: ["it's okay", "she's okay", "everything's fine"],
        examples: [
          "Está bien, no pasa nada.",
          "Está bien, ya estoy más tranquila.",
          "Está bien todo por aquí, no te preocupes.",
        ],
        note: "**Tá bien** is what you'll hear. *Estoy* becomes *toy*, *estamos* becomes *tamos*. The first syllable of *estar* is optional in speech, everywhere.",
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        scenarios: ["something unexpected", "a change of plan", "good news"],
        examples: [
          "¿Y eso? ¿Te dieron el día libre?",
          "¿Y eso? Qué raro en ti.",
          "¿Y eso? Cuéntame ya.",
        ],
      },
    ],
  },
  {
    day: 264,
    theme: "A velocidad real: A uno y medio",
    subtitle: "You sped the podcast up on purpose. It worked, and that's alarming.",
    frames: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        scenarios: ["reporting an experiment", "excited", "starting a voice note"],
        examples: [
          "¿Qué hubo? Hice algo raro y te tengo que contar.",
          "¿Qué hubo? Prueba esto que te voy a decir.",
          "¿Qué hubo? Cambié una cosa y funcionó.",
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        scenarios: ["the experiment", "keeping it up", "going further"],
        examples: [
          "Voy a dejarlo a uno y medio toda la semana.",
          "Voy a probar con las noticias, que hablan más rápido.",
          "Voy a ver si aguanto a uno con setenta y cinco.",
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        scenarios: ["so normal speed feels slow", "so the ear adjusts", "so it stops being work"],
        examples: [
          "Para que la velocidad normal me parezca lenta.",
          "Para que el oído se acostumbre solo.",
          "Para que deje de costarme trabajo.",
        ],
        note: "Speeding audio up deliberately is the same trick as running in a weighted vest. Normal speed afterward feels like a favor.",
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        scenarios: ["losing more words and not minding", "the trade is worth it", "good enough"],
        examples: [
          "Está bien perder algunas palabras si sigo el hilo.",
          "Está bien, entiendo menos y aprendo más.",
          "Está bien, era eso lo que quería probar.",
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        scenarios: ["Camila's surprise", "why she'd do that", "explaining herself"],
        examples: [
          "¿Y eso? ¿A quién se le ocurre acelerarlo?",
          "¿Y eso? ¿No era ya bastante difícil?",
          "¿Y eso? Pues porque quiero llegar a marzo lista.",
        ],
      },
    ],
  },
  {
    day: 265,
    theme: "A velocidad real: Ya no me hablan despacio",
    subtitle: "Nobody slows down for you anymore. It takes a second to realize that's a compliment.",
    frames: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        scenarios: ["at the bakery, as a regular", "greeted first", "belonging"],
        examples: [
          "¿Qué hubo? Hoy me saludaron ellos primero.",
          "¿Qué hubo? Ya me dicen \"la maestra\".",
          "¿Qué hubo? Me guardaron pan de bono.",
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        scenarios: ["noticing out loud", "what she'll say to Camila", "what she'll do about it"],
        examples: [
          "Voy a contarte algo que me pasó y no sé si es bueno.",
          "Voy a decírtelo tal cual me lo dijeron.",
          "Voy a tomármelo como cumplido.",
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        scenarios: ["they treat her normally", "she stops being the guest", "no special handling"],
        examples: [
          "Para que me traten como a cualquiera.",
          "Para que dejen de acomodarse a mí.",
          "Para que ya no sea la que está aprendiendo.",
        ],
        note: "The moment people stop accommodating you is the moment you stopped needing it. It arrives without an announcement.",
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        scenarios: ["it's fine to lose some", "accepting the new normal", "not asking them to slow down"],
        examples: [
          "Está bien, prefiero perderme algo a que me hablen raro.",
          "Está bien así, aunque sea más difícil.",
          "Está bien no ser la excepción en la mesa.",
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        scenarios: ["asking Camila why", "wanting the honest answer", "not sure it's good"],
        examples: [
          "¿Y eso? ¿Ya no me hablan despacio o me lo imagino?",
          "¿Y eso? ¿Desde cuándo?",
          "¿Y eso? Dime la verdad, no me consientas.",
        ],
      },
    ],
  },
  {
    day: 266,
    theme: "A velocidad real: Repaso",
    subtitle: "Same words, half the syllables. Nothing new was learned this week.",
    frames: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        scenarios: ["the greeting she uses now", "instead of hola", "without deciding to"],
        examples: [
          "¿Qué hubo? me sale antes que \"hola\".",
          "¿Qué hubo? lo digo sin pensarlo desde el martes.",
          "¿Qué hubo? es dos sílabas y suena a que vivo aquí.",
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        scenarios: ["the most reduced thing she says", "and never notices", "the measure of the week"],
        examples: [
          "Voy a ya no lo digo entero nunca.",
          "Voy a se me volvió una sola sílaba.",
          "Voy a era la prueba: si se junta, va rápido.",
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        scenarios: ["what the week was for", "the honest goal", "and it worked"],
        examples: [
          "Para que dejara de sonar a libro y sonara a persona.",
          "Para que la velocidad normal me pareciera normal.",
          "Para que nadie tuviera que bajar el ritmo por mí.",
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        scenarios: ["perder palabras es normal", "no era pronunciación", "era ritmo"],
        examples: [
          "Está bien perder palabras, siempre se pierden.",
          "Está bien, no era problema de pronunciación.",
          "Está bien: era problema de ritmo, y el ritmo se copia.",
        ],
        note: "Nothing this week was new vocabulary or new grammar. The words were all ones you already had; what changed was how many syllables you gave them.",
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        scenarios: ["the question of the season", "asked about herself", "one week left"],
        examples: [
          "¿Y eso? me lo pregunto yo ahora, mirando enero.",
          "¿Y eso? Pues doce semanas, eso.",
          "¿Y eso? Falta una semana y se acaba el invierno.",
        ],
      },
    ],
  },
];
