import type { FrameDay } from "../frames/types";

/**
 * Otoño Week 13 draft — Capstone "Mi otoño en Pues" (days 176–182).
 *
 * Append to content/frames/otono.ts. Same 5 capstone stems every day;
 * day 181 = day-90-equivalent retrospective; day 182 repaso = one-minute retell.
 * Keep index-aligned with week13-prompts.ts, week13-readings.ts, week13-sentenceFormer.ts.
 */
export const week13FrameDays: FrameDay[] = [
  {
    day: 176,
    theme: "Capstone: El comienzo",
    subtitle: "Two months ago vs. now — start the season lookback.",
    frames: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        scenarios: ["fall began", "summarizing was new", "stems sounded strange"],
        examples: [
          "Hace dos meses apenas sabía resumir una noticia.",
          "Hace dos meses, «Trata de…» me sonaba raro.",
          "Hace dos meses empezó otoño en mi cuaderno.",
        ],
        note: "*Hace dos meses* mirrors Verano's *Hace tres meses* — the season retrospective opener.",
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        scenarios: ["retell in five sentences", "use stems without thinking", "follow stories"],
        examples: [
          "Ahora puedo contarte la historia de Naty en cinco frases.",
          "Ahora puedo usar «Trata de…» sin pensar.",
          "Ahora puedo resumir lo que leo en voz alta.",
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        scenarios: ["trusting retells", "new stems", "reading then speaking"],
        examples: [
          "Lo más difícil fue confiar en que podía retell lo que leía.",
          "Lo más difícil fue hablar justo después de leer.",
          "Lo más difícil fue no traducir cada stem.",
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        scenarios: ["how fast it clicked", "remembering stories", "enjoying it"],
        examples: [
          "Lo que más me sorprendió fue lo rápido que sonó natural.",
          "Lo que más me sorprendió fue recordar historias sin el cuaderno.",
          "Lo que más me sorprendió fue disfrutar el proceso.",
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        scenarios: ["more stories", "winter preview", "the full minute"],
        examples: [
          "El próximo paso es seguir más historias en invierno.",
          "El próximo paso es hablar un minuto sin parar.",
          "El próximo paso es cerrar otoño con un repaso completo.",
        ],
      },
    ],
  },
  {
    day: 177,
    theme: "Capstone: Las historias",
    subtitle: "The serialized stories you followed — name them and what stuck.",
    frames: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        scenarios: ["one story at a time", "Naty first", "reading was separate"],
        examples: [
          "Hace dos meses solo conocía la historia de Naty.",
          "Hace dos meses leía sin retell después.",
          "Hace dos meses no seguía un hilo seis días seguidos.",
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        scenarios: ["name all stories", "retell any arc", "follow six days"],
        examples: [
          "Ahora puedo nombrar cinco historias de otoño.",
          "Ahora puedo retell la feria escolar con conectores.",
          "Ahora puedo seguir un hilo seis días seguidos.",
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        scenarios: ["remembering details", "picking up threads", "daily installments"],
        examples: [
          "Lo más difícil fue retomar el hilo cada mañana.",
          "Lo más difícil fue recordar qué pasó ayer en la historia.",
          "Lo más difícil fue no mezclar una historia con otra.",
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        scenarios: ["how much you remember", "Diego's arc", "the article"],
        examples: [
          "Lo que más me sorprendió fue cuánto recuerdo sin mirar el cuaderno.",
          "Lo que más me sorprendió fue lo viva que quedó la historia de Diego.",
          "Lo que más me sorprendió fue reaccionar de verdad al artículo.",
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        scenarios: ["winter stories", "longer arcs", "real conversations"],
        examples: [
          "El próximo paso es seguir historias más largas en invierno.",
          "El próximo paso es contar una historia entera sin parar.",
          "El próximo paso es usar estas historias en conversaciones reales.",
        ],
      },
    ],
  },
  {
    day: 178,
    theme: "Capstone: Las herramientas",
    subtitle: "Sixty-plus stems — inventory what you actually use.",
    frames: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        scenarios: ["a handful of stems", "summarize only", "no connectors"],
        examples: [
          "Hace dos meses solo tenía cinco stems de resumir.",
          "Hace dos meses no sabía decir Dice que…",
          "Hace dos meses Además me sonaba formal y lejano.",
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        scenarios: ["sixty stems", "report speech", "connect and contrast"],
        examples: [
          "Ahora puedo usar más de sesenta stems.",
          "Ahora puedo reportar lo que alguien dijo.",
          "Ahora puedo conectar y contrastar ideas en una frase.",
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        scenarios: ["subjunctive", "past perfect", "too many stems"],
        examples: [
          "Lo más difícil fue el subjuntivo en Me sorprendió que…",
          "Lo más difícil fue Ya había… para contar backstory.",
          "Lo más difícil fue no mezclar stems de semanas distintas.",
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        scenarios: ["connectors automatic", "stems feel natural", "toolkit complete"],
        examples: [
          "Lo que más me sorprendió fue que los conectores me salen solos.",
          "Lo que más me sorprendió fue usar stems sin traducir.",
          "Lo que más me sorprendió fue tener un toolkit de verdad.",
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        scenarios: ["winter toolkit", "mix stems freely", "less scaffolding"],
        examples: [
          "El próximo paso es mezclar stems de verano y otoño.",
          "El próximo paso es hablar con menos scaffold.",
          "El próximo paso es invierno — conversación de ida y vuelta.",
        ],
      },
    ],
  },
  {
    day: 179,
    theme: "Capstone: Leer y reaccionar",
    subtitle: "Reading graduated from extra to backbone — say how.",
    frames: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        scenarios: ["reading was extra", "no reaction stems", "bedtime only"],
        examples: [
          "Hace dos meses la lectura era un extra antes de dormir.",
          "Hace dos meses no sabía decir Me dio gusto leer que…",
          "Hace dos meses leía y cerraba el cuaderno.",
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        scenarios: ["read retell react", "full loop", "article reactions"],
        examples: [
          "Ahora puedo leer, resumir, reaccionar y seguir la historia.",
          "Ahora puedo opinar sobre lo leído con cinco stems.",
          "Ahora puedo conectar la lectura con la conversación.",
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        scenarios: ["trusting comprehension", "reacting not just retelling", "subjunctive reactions"],
        examples: [
          "Lo más difícil fue confiar en que entendí suficiente.",
          "Lo más difícil fue reaccionar, no solo retell.",
          "Lo más difícil fue Me sorprendió que… con subjuntivo.",
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        scenarios: ["reading as center", "habit formed", "La Lectura backbone"],
        examples: [
          "Lo que más me sorprendió fue que la lectura se volvió el centro.",
          "Lo que más me sorprendió fue tener opinión sobre un artículo.",
          "Lo que más me sorprendió fue leer y hablar el mismo día.",
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        scenarios: ["more input", "real articles", "conversation from reading"],
        examples: [
          "El próximo paso es leer más textos de verdad.",
          "El próximo paso es llevar una reacción a conversación real.",
          "El próximo paso es invierno — charla de ida y vuelta.",
        ],
      },
    ],
  },
  {
    day: 180,
    theme: "Capstone: Un minuto",
    subtitle: "From ten seconds to forty-five — measure the sustain progress.",
    frames: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        scenarios: ["ten seconds", "no structure", "panic"],
        examples: [
          "Hace dos meses hablaba diez segundos y paraba.",
          "Hace dos meses no tenía estructura para sostener.",
          "Hace dos meses el pánico llegaba rápido.",
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        scenarios: ["forty-five seconds", "structured monologue", "less panic"],
        examples: [
          "Ahora puedo hablar cuarenta y cinco segundos sin parar.",
          "Ahora puedo usar Hoy quiero hablar de… para sostener.",
          "Ahora puedo hablar sin pánico más seguido.",
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        scenarios: ["mirror practice", "stumbling", "talking alone"],
        examples: [
          "Lo más difícil fue hablar sola frente al espejo.",
          "Lo más difícil fue no parar cuando tropiezo.",
          "Lo más difícil fue superar la vergüenza.",
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        scenarios: ["structure works", "mirror helps", "four times longer"],
        examples: [
          "Lo que más me sorprendió fue que la estructura funciona.",
          "Lo que más me sorprendió fue pasar de diez a cuarenta y cinco segundos.",
          "Lo que más me sorprendió fue que el espejo ayuda de verdad.",
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        scenarios: ["full minute", "winter sustain", "real conversation"],
        examples: [
          "El próximo paso es el minuto entero.",
          "El próximo paso es sostener en conversación real.",
          "El próximo paso es invierno — charla de ida y vuelta.",
        ],
      },
    ],
  },
  {
    day: 181,
    theme: "Mi otoño en Pues",
    subtitle: "Day 181. Before, now, next — the full season retrospective.",
    frames: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        scenarios: ["couldn't retell", "just read", "fall began"],
        examples: [
          "Hace dos meses no sabía retell lo que leía.",
          "Hace dos meses solo leía y ya.",
          "Hace dos meses empezó otoño — seguir el hilo.",
        ],
        note: "Day-90 equivalent: say these slowly. This is the season retrospective.",
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        scenarios: ["full fall toolkit", "follow stories", "season goal met"],
        examples: [
          "Ahora puedo resumir, reportar, conectar, reaccionar y seguir una historia varios días.",
          "Ahora puedo opinar sobre lo leído y hablar casi un minuto.",
          "Ahora puedo seguir una historia varios días — la meta de otoño.",
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        scenarios: ["trusting yourself", "slow weeks", "subjunctive"],
        examples: [
          "Lo más difícil fue confiar en que entendía suficiente para hablar.",
          "Lo más difícil fue no rendirme en las semanas flojas.",
          "Lo más difícil fue el subjuntivo en las reacciones.",
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        scenarios: ["remembering stories", "enjoying it", "connectors automatic"],
        examples: [
          "Lo que más me sorprendió fue cuánto recuerdo de las historias.",
          "Lo que más me sorprendió fue disfrutarlo tanto.",
          "Lo que más me sorprendió fue que los stems salen solos.",
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        scenarios: ["winter", "rest tonight", "conversation"],
        examples: [
          "El próximo paso es invierno.",
          "El próximo paso es charla de ida y vuelta.",
          "El próximo paso es descansar esta noche — me lo gané.",
        ],
      },
    ],
  },
  {
    day: 182,
    theme: "Repaso: Mi otoño",
    subtitle: "One minute. Whole season. Yours.",
    frames: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        scenarios: ["summarize began", "first stems", "Naty first story"],
        examples: [
          "Hace dos meses empecé a resumir con Trata de…",
          "Hace dos meses otoño era solo una idea en mi cuaderno.",
          "Hace dos meses no sabía seguir un hilo seis días.",
        ],
        note: "Repaso day: one-minute season retell — all five capstone stems, whole arc.",
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        scenarios: ["full toolkit", "read retell react", "almost a minute"],
        examples: [
          "Ahora puedo conectar, contrastar, reaccionar y seguir historias.",
          "Ahora puedo contar mi otoño en un minuto.",
          "Ahora puedo hablar casi un minuto sin parar.",
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        scenarios: ["trusting", "slow weeks", "starting"],
        examples: [
          "Lo más difícil fue confiar en mis retells.",
          "Lo más difícil fue empezar cada semana nueva.",
          "Lo más difícil fue no rendirme en las semanas flojas.",
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        scenarios: ["enjoying it", "remembering", "progress"],
        examples: [
          "Lo que más me sorprendió fue disfrutarlo.",
          "Lo que más me sorprendió fue cuánto cambié en noventa días.",
          "Lo que más me sorprendió fue recordar cinco historias enteras.",
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        scenarios: ["winter", "full minute", "real talk"],
        examples: [
          "El próximo paso es invierno.",
          "El próximo paso es el minuto entero y conversación real.",
          "El próximo paso es seguir — verano, otoño, invierno.",
        ],
      },
    ],
  },
];
