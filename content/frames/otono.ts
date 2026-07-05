import type { FrameDay } from "./types";

/**
 * Pues — daily frames (Otoño / fall), days 92+.
 *
 * Week 1 ("Resumir") below; append future weeks in place, keep index-aligned
 * with content/prompts/otono.ts, content/sentenceFormer/otono.ts, and
 * content/readings/otono.ts. See content/CURRICULUM.md's Otoño arc table.
 *
 * Week 1 uses one small toolkit (the same 5 stems every day, per CURRICULUM's
 * "Resumir" framing) rather than a new toolkit per day like Verano — each
 * day's 3 examples per stem retell that day's installment of "Naty se muda,"
 * the serialized story in content/readings/otono.ts.
 */
export const otonoFrameDays: FrameDay[] = [
  {
    day: 92,
    theme: "Resumir: Buenas noticias",
    subtitle: "Someone you love just got the job they wanted — tell it in four sentences.",
    frames: [
      {
        stem: "Trata de…",
        english: "It's about…",
        scenarios: ["a friend's big news", "a job offer", "a move to Boston"],
        examples: [
          "Trata de una amiga que se muda a Boston.",
          "Trata de un trabajo nuevo como desarrolladora.",
          "Trata de dejar Atlanta después de diez años.",
        ],
        note: "Trata de + noun names the topic before the detail — the opening move of any summary, spoken or written.",
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        scenarios: ["her news", "the timeline", "her decision"],
        examples: [
          "La idea principal es que consiguió el trabajo que quería.",
          "La idea principal es que empieza en dos semanas.",
          "La idea principal es que va a vivir cerca de mí.",
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        scenarios: ["telling a coworker fast", "texting a friend", "the short version"],
        examples: [
          "En pocas palabras, Naty se muda a Boston.",
          "En pocas palabras, terminó el bootcamp y consiguió trabajo.",
          "En pocas palabras, es una gran noticia.",
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        scenarios: ["what matters most", "her effort", "the outcome"],
        examples: [
          "Lo importante es que por fin consiguió el trabajo.",
          "Lo importante es que va a hacer lo que siempre quiso.",
          "Lo importante es que estamos muy orgullosas de ella.",
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        scenarios: ["how it resolved", "the offer", "her effort paying off"],
        examples: [
          "Al final, le ofrecieron el puesto la semana pasada.",
          "Al final, decidió aceptar sin pensarlo dos veces.",
          "Al final, todo su esfuerzo valió la pena.",
        ],
      },
    ],
  },
  {
    day: 93,
    theme: "Resumir: Empacando",
    subtitle: "The chaos before a move — pack a whole life into a few sentences.",
    frames: [
      {
        stem: "Trata de…",
        english: "It's about…",
        scenarios: ["packing chaos", "selling furniture", "a tight deadline"],
        examples: [
          "Trata de empacar toda una vida en cajas.",
          "Trata de vender los muebles antes de mudarse.",
          "Trata de organizar la mudanza en dos semanas.",
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        scenarios: ["what's missing", "what's already sold", "who's helping"],
        examples: [
          "La idea principal es que todavía no tiene cajas.",
          "La idea principal es que vendió el sofá ayer.",
          "La idea principal es que su mamá va a venir a ayudarla.",
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        scenarios: ["the honest version", "how it feels", "what she needs"],
        examples: [
          "En pocas palabras, es un caos total.",
          "En pocas palabras, no sabe por dónde empezar.",
          "En pocas palabras, necesita ayuda urgente.",
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        scenarios: ["the reassurance", "the plan coming together", "not being alone"],
        examples: [
          "Lo importante es que su mamá va a ayudarla.",
          "Lo importante es que ya encontró cajas prestadas.",
          "Lo importante es que no está haciendo esto sola.",
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        scenarios: ["how it resolved", "the timeline", "good enough"],
        examples: [
          "Al final, consiguió cajas de la tienda de la esquina.",
          "Al final, su mamá viene esta semana.",
          "Al final, todo va a caber en el carro, más o menos.",
        ],
      },
    ],
  },
  {
    day: 94,
    theme: "Resumir: El camino",
    subtitle: "An eighteen-hour drive, told in five sentences.",
    frames: [
      {
        stem: "Trata de…",
        english: "It's about…",
        scenarios: ["a long drive", "crossing states", "a late arrival"],
        examples: [
          "Trata de un viaje de dieciocho horas.",
          "Trata de manejar de Atlanta a Boston sin parar mucho.",
          "Trata de llegar antes de la medianoche.",
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        scenarios: ["how long it felt", "the stops", "the coffee"],
        examples: [
          "La idea principal es que el viaje fue larguísimo.",
          "La idea principal es que pararon solo dos veces.",
          "La idea principal es que el café de la carretera era terrible.",
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        scenarios: ["the honest verdict", "how tired they were", "if it was worth it"],
        examples: [
          "En pocas palabras, fue un viaje agotador.",
          "En pocas palabras, manejaron todo el día y toda la noche.",
          "En pocas palabras, valió la pena llegar.",
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        scenarios: ["safety first", "sharing the driving", "staying alert"],
        examples: [
          "Lo importante es que llegaron bien.",
          "Lo importante es que su mamá manejó la mitad del camino.",
          "Lo importante es que nadie se durmió al volante.",
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        scenarios: ["the arrival", "finding the street", "finally resting"],
        examples: [
          "Al final, llegaron a Boston pasada la medianoche.",
          "Al final, encontraron la calle sin problema.",
          "Al final, se durmieron enseguida.",
        ],
      },
    ],
  },
  {
    day: 95,
    theme: "Resumir: El apartamento nuevo",
    subtitle: "An empty apartment and a little homesickness — summarized with kindness.",
    frames: [
      {
        stem: "Trata de…",
        english: "It's about…",
        scenarios: ["an empty apartment", "the first days somewhere new", "feeling a little alone"],
        examples: [
          "Trata de un apartamento pequeño y vacío.",
          "Trata de los primeros días en una ciudad nueva.",
          "Trata de sentirse un poco sola.",
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        scenarios: ["what's missing", "the weather", "how she feels"],
        examples: [
          "La idea principal es que todavía no tiene muebles.",
          "La idea principal es que llueve mucho estos días.",
          "La idea principal es que extraña un poco su casa.",
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        scenarios: ["the apartment", "the weather", "how she feels"],
        examples: [
          "En pocas palabras, el apartamento está vacío.",
          "En pocas palabras, hace frío y llueve.",
          "En pocas palabras, se siente un poco perdida.",
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        scenarios: ["a place of her own", "the plan to fix it", "not being alone"],
        examples: [
          "Lo importante es que ya tiene un lugar propio.",
          "Lo importante es que va a comprar muebles esta semana.",
          "Lo importante es que no está sola del todo — yo estoy cerca.",
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        scenarios: ["a small win", "the weather clearing", "a long phone call"],
        examples: [
          "Al final, encontró una cama usada por buen precio.",
          "Al final, dejó de llover por la tarde.",
          "Al final, me llamó y hablamos dos horas.",
        ],
      },
    ],
  },
  {
    day: 96,
    theme: "Resumir: El primer día",
    subtitle: "A nervous first day at work — and asking for help instead of hiding it.",
    frames: [
      {
        stem: "Trata de…",
        english: "It's about…",
        scenarios: ["a first day of work", "nerves before a meeting", "asking for help"],
        examples: [
          "Trata de su primer día de trabajo.",
          "Trata de los nervios antes de una reunión.",
          "Trata de pedir ayuda cuando no sabes algo.",
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        scenarios: ["how nervous she was", "the hard moment", "who helped"],
        examples: [
          "La idea principal es que estaba muy nerviosa.",
          "La idea principal es que no supo responder una pregunta.",
          "La idea principal es que un compañero la ayudó sin problema.",
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        scenarios: ["the honest version", "the blank moment", "how people treated her"],
        examples: [
          "En pocas palabras, el primer día fue difícil.",
          "En pocas palabras, se quedó en blanco un momento.",
          "En pocas palabras, todos fueron muy amables.",
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        scenarios: ["what she did right", "no judgment", "what she learned"],
        examples: [
          "Lo importante es que pidió ayuda.",
          "Lo importante es que nadie la juzgó.",
          "Lo importante es que aprendió algo nuevo.",
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        scenarios: ["the resolution", "feeling calmer", "being included"],
        examples: [
          "Al final, resolvió el problema con ayuda de un compañero.",
          "Al final, se sintió más tranquila.",
          "Al final, el equipo la invitó a almorzar.",
        ],
      },
    ],
  },
  {
    day: 97,
    theme: "Resumir: Ya se siente en casa",
    subtitle: "A month later — the story already has a happy ending.",
    frames: [
      {
        stem: "Trata de…",
        english: "It's about…",
        scenarios: ["a whole month gone by", "a new friend at work", "finally feeling settled"],
        examples: [
          "Trata de un mes entero en Boston.",
          "Trata de hacer una nueva amiga en el trabajo.",
          "Trata de sentirse por fin en casa.",
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        scenarios: ["not feeling alone anymore", "a favorite spot", "an invitation"],
        examples: [
          "La idea principal es que ya no se siente tan sola.",
          "La idea principal es que encontró una cafetería favorita.",
          "La idea principal es que me invitó a conocer su apartamento.",
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        scenarios: ["how things changed", "the new routine", "how she feels now"],
        examples: [
          "En pocas palabras, las cosas están mejorando.",
          "En pocas palabras, ya tiene una rutina.",
          "En pocas palabras, se siente en casa.",
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        scenarios: ["what matters most now", "finding her place", "being proud"],
        examples: [
          "Lo importante es que ya no está sola.",
          "Lo importante es que encontró su lugar.",
          "Lo importante es que está orgullosa de lo que ha logrado.",
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        scenarios: ["it was worth it", "the city feels like home", "what's next"],
        examples: [
          "Al final, todo el esfuerzo valió la pena.",
          "Al final, Boston ya se siente como su ciudad.",
          "Al final, voy a visitarla el próximo fin de semana.",
        ],
      },
    ],
  },
  {
    day: 98,
    theme: "Repaso: Resumir",
    subtitle: "One month, five sentences — sum up Naty's whole story.",
    frames: [
      {
        stem: "Trata de…",
        english: "It's about…",
        scenarios: ["the whole story", "everything that happened", "starting over"],
        examples: [
          "Trata de una amiga que cambió de ciudad y de carrera al mismo tiempo.",
          "Trata de todo lo que pasó en solo un mes.",
          "Trata de empezar de nuevo, aunque dé miedo.",
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        scenarios: ["the move", "the outcome", "how it started"],
        examples: [
          "La idea principal es que Naty se mudó de Atlanta a Boston hace un mes.",
          "La idea principal es que ahora tiene trabajo, amigos y una rutina.",
          "La idea principal es que todo empezó con una sola decisión valiente.",
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        scenarios: ["the shortest version", "the transformation", "the month overall"],
        examples: [
          "En pocas palabras, Naty lo logró.",
          "En pocas palabras, pasó de sentirse perdida a sentirse en casa.",
          "En pocas palabras, ha sido un mes de muchos cambios.",
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        scenarios: ["what really mattered", "how she got through it", "who she is now"],
        examples: [
          "Lo importante es que nunca dejó de intentarlo.",
          "Lo importante es que pidió ayuda cuando la necesitó.",
          "Lo importante es que ahora es más fuerte que antes.",
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        scenarios: ["the ending", "making sense of it", "how they feel about her"],
        examples: [
          "Al final, Boston se convirtió en su nuevo hogar.",
          "Al final, todo el caos tuvo sentido.",
          "Al final, estamos muy orgullosas de ella.",
        ],
      },
    ],
  },
];
