import type { FrameDay } from "../frames/types";

/**
 * Otoño Week 10 draft — "Opinar sobre lo leído" (days 155–161).
 *
 * Append to content/frames/otono.ts after weeks 2–9 land. Same 5 stems every
 * day; each day's examples react to that installment of "El artículo."
 * Keep index-aligned with week10-prompts.ts, week10-readings.ts, week10-sentenceFormer.ts.
 */
export const week10FrameDays: FrameDay[] = [
  {
    day: 155,
    theme: "Opinar: El artículo",
    subtitle: "You read something worth reacting to — name what caught your eye first.",
    frames: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        scenarios: ["the title", "who shared it", "when you read it"],
        examples: [
          "Lo que más me llamó la atención fue el título del artículo.",
          "Lo que más me llamó la atención fue que una exalumna lo compartió.",
          "Lo que más me llamó la atención fue leerlo antes de dormir.",
        ],
        note: "*Lo que más me llamó la atención* opens a reaction the way a good book review does — with the hook.",
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        scenarios: ["why it matters now", "who wrote it", "what comes next"],
        examples: [
          "Lo que no entiendo es por qué no lo había visto antes.",
          "Lo que no entiendo es quién financia esos estudios.",
          "Lo que no entiendo es si la directora lo ha leído.",
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        scenarios: ["local author", "positive framing", "someone shared it"],
        examples: [
          "Me dio gusto leer que alguien de aquí lo publicó.",
          "Me dio gusto leer que el tono era esperanzador.",
          "Me dio gusto leer que hablaba de salones reales.",
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        scenarios: ["the topic", "the timing", "who sent it"],
        examples: [
          "Me sorprendió que apareciera justo esta semana.",
          "Me sorprendió que fuera tan largo y tan claro.",
          "Me sorprendió que una exalumna lo encontrara primero.",
        ],
        note: "*Me sorprendió que* + subjunctive is the natural shape for a surprised reaction to something you read.",
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        scenarios: ["knows classrooms", "has an agenda", "writes for teachers"],
        examples: [
          "Creo que el autor conoce salones bilingües de verdad.",
          "Creo que el autor escribe para maestros como nosotras.",
          "Creo que el autor quiere cambiar la conversación.",
        ],
      },
    ],
  },
  {
    day: 156,
    theme: "Opinar: Los argumentos",
    subtitle: "The author makes a case — react to what they're defending.",
    frames: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        scenarios: ["the main claim", "real examples", "how it's framed"],
        examples: [
          "Lo que más me llamó la atención fue la idea de «no pierden, ganan».",
          "Lo que más me llamó la atención fue cómo usa ejemplos de salones reales.",
          "Lo que más me llamó la atención fue la defensa de los programas duales.",
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        scenarios: ["a term", "a comparison", "a gap in the argument"],
        examples: [
          "Lo que no entiendo es por qué no lo enseñan en la universidad.",
          "Lo que no entiendo es la diferencia entre dual e inmersión.",
          "Lo que no entiendo es quién decide qué programa usar.",
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        scenarios: ["examples not theory", "teacher voices", "clear language"],
        examples: [
          "Me dio gusto leer que lo explica con ejemplos, no solo con teoría.",
          "Me dio gusto leer que menciona maestras de verdad.",
          "Me dio gusto leer que el tono no era condescendiente.",
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        scenarios: ["mental flexibility", "a bold claim", "the structure"],
        examples: [
          "Me sorprendió que mencione la flexibilidad mental como ventaja.",
          "Me sorprendió que fuera tan directo con los detractores.",
          "Me sorprendió que defendiera dos idiomas a la vez sin miedo.",
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        scenarios: ["defends dual programs", "knows the research", "writes clearly"],
        examples: [
          "Creo que el autor defiende los programas duales con claridad.",
          "Creo que el autor conoce la investigación reciente.",
          "Creo que el autor quiere convencer a los que dudan.",
        ],
      },
    ],
  },
  {
    day: 157,
    theme: "Opinar: Los datos",
    subtitle: "Numbers in print — react to what the evidence shows.",
    frames: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        scenarios: ["reading scores", "the study size", "the comparison"],
        examples: [
          "Lo que más me llamó la atención fue que los bilingües sacaron mejores notas.",
          "Lo que más me llamó la atención fue el estudio de mil estudiantes.",
          "Lo que más me llamó la atención fue la comparación con escuelas solo en inglés.",
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        scenarios: ["the methodology", "who funded it", "why it's ignored"],
        examples: [
          "Lo que no entiendo es cómo eligieron las escuelas de comparación.",
          "Lo que no entiendo es por qué esos datos no llegan a los padres.",
          "Lo que no entiendo es si el estudio se repitió en otros estados.",
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        scenarios: ["long-term follow-up", "cited sources", "honest numbers"],
        examples: [
          "Me dio gusto leer que siguieron a los niños cinco años.",
          "Me dio gusto leer que cita la fuente completa.",
          "Me dio gusto leer que no exageró los resultados.",
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        scenarios: ["how clear the gap was", "the timeline", "the sample size"],
        examples: [
          "Me sorprendió que la diferencia fuera tan clara al final.",
          "Me sorprendió que el seguimiento durara tanto.",
          "Me sorprendió que incluyera escuelas de barrios parecidos al nuestro.",
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        scenarios: ["uses data to persuade", "answers skeptics", "builds trust"],
        examples: [
          "Creo que el autor usa esos datos para responder a los que dudan.",
          "Creo que el autor sabe que los números convencen a algunos padres.",
          "Creo que el autor equilibra datos con historias humanas.",
        ],
      },
    ],
  },
  {
    day: 158,
    theme: "Opinar: Las voces en contra",
    subtitle: "The article faces pushback — react to how it handles critics.",
    frames: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        scenarios: ["critics named", "myths addressed", "evidence cited"],
        examples: [
          "Lo que más me llamó la atención fue que no ignoró las críticas.",
          "Lo que más me llamó la atención fue cómo nombra el mito de la confusión.",
          "Lo que más me llamó la atención fue la evidencia de Canadá.",
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        scenarios: ["why myths persist", "who spreads them", "what parents fear"],
        examples: [
          "Lo que no entiendo es por qué esa idea sigue tan fuerte.",
          "Lo que no entiendo es de dónde sale el miedo al retraso.",
          "Lo que no entiendo es por qué algunos padres no visitan el salón.",
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        scenarios: ["honest about fears", "evidence from here", "respectful tone"],
        examples: [
          "Me dio gusto leer que responde con evidencia de escuelas aquí mismo.",
          "Me dio gusto leer que reconoce las preocupaciones de los padres.",
          "Me dio gusto leer que no ridiculiza a nadie.",
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        scenarios: ["critics quoted", "myths debunked calmly", "international examples"],
        examples: [
          "Me sorprendió que citara voces en contra con respeto.",
          "Me sorprendió que usara ejemplos de Canadá y de aquí.",
          "Me sorprendió que explicara el mito sin enojarse.",
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        scenarios: ["understands fear", "changes minds", "builds bridges"],
        examples: [
          "Creo que el autor entiende por qué la gente duda.",
          "Creo que el autor quiere convencer, no humillar.",
          "Creo que el autor sabe que muchos no han visto un salón bilingüe.",
        ],
      },
    ],
  },
  {
    day: 159,
    theme: "Opinar: Mi conexión",
    subtitle: "The article hit home — react with your own classroom in mind.",
    frames: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        scenarios: ["the teacher profile", "patience theme", "parent conversations"],
        examples: [
          "Lo que más me llamó la atención fue la maestra del ejemplo final.",
          "Lo que más me llamó la atención fue cómo explica la paciencia a los padres.",
          "Lo que más me llamó la atención fue la frase «La paciencia también se enseña».",
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        scenarios: ["why it moved you", "a detail", "what's missing"],
        examples: [
          "Lo que no entiendo es por qué me conmovió tanto esa parte.",
          "Lo que no entiendo es si el autor trabajó en un salón de ESL.",
          "Lo que no entiendo es por qué no habla más de los maestros.",
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        scenarios: ["teacher recognition", "real struggles", "hope at the end"],
        examples: [
          "Me dio gusto leer que pusiera a una maestra como protagonista.",
          "Me dio gusto leer que reconociera lo difícil del proceso.",
          "Me dio gusto leer que terminara con esperanza, no con culpa.",
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        scenarios: ["the ending", "identifying with her", "simple closing line"],
        examples: [
          "Me sorprendió que el autor terminara con una frase tan simple.",
          "Me sorprendió que me identificara tanto con esa maestra.",
          "Me sorprendió que hablara de orgullo familiar al final.",
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        scenarios: ["writes for teachers like you", "knows the daily work", "gets it"],
        examples: [
          "Creo que el autor conoce lo que pasa en un salón de ESL.",
          "Creo que el autor escribió esa parte para maestras como nosotras.",
          "Creo que el autor entiende lo que cuesta explicar el proceso.",
        ],
      },
    ],
  },
  {
    day: 160,
    theme: "Opinar: La conversación",
    subtitle: "Priya read it too — compare reactions out loud.",
    frames: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        scenarios: ["title and data", "workshop proposal", "the whole arc"],
        examples: [
          "Lo que más me llamó la atención fue el título y los datos juntos.",
          "Lo que más me llamó la atención fue la propuesta de talleres.",
          "Lo que más me llamó la atención fue cómo cierra el círculo al final.",
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        scenarios: ["why principals miss it", "why parents don't see it", "distribution"],
        examples: [
          "Lo que no entiendo es por qué no lo leen más directores.",
          "Lo que no entiendo es por qué no llega a más familias.",
          "Lo que no entiendo es quién decide qué se comparte en el distrito.",
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        scenarios: ["clear explanation", "workshops proposed", "patience theme"],
        examples: [
          "Me dio gusto leer que alguien lo explicara tan claro.",
          "Me dio gusto leer que propusiera talleres para familias nuevas.",
          "Me dio gusto leer que Priya también se quedara con lo de la paciencia.",
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        scenarios: ["workshop idea", "Priya agreed", "practical ending"],
        examples: [
          "Me sorprendió que al final propusiera talleres para familias.",
          "Me sorprendió que Priya lo leyera tan rápido.",
          "Me sorprendió que las dos coincidieramos tanto.",
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        scenarios: ["knows real classrooms", "writes for teachers", "offers solutions"],
        examples: [
          "Creo que el autor conoce salones reales.",
          "Creo que el autor escribe para maestros como nosotras.",
          "Creo que el autor no solo critica — también propone.",
        ],
      },
    ],
  },
  {
    day: 161,
    theme: "Repaso: Opinar",
    subtitle: "One article, five reactions — rebuild the whole week in five sentences.",
    frames: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        scenarios: ["title and data", "the whole arc", "teacher profile"],
        examples: [
          "Lo que más me llamó la atención fue el título — y los datos al final.",
          "Lo que más me llamó la atención fue cómo pasó de teoría a salones reales.",
          "Lo que más me llamó la atención fue la maestra del ejemplo final.",
        ],
        note: "Repaso day: five reaction stems, one article — the toolkit you drilled all week.",
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        scenarios: ["why it doesn't spread", "persistent myths", "the gap"],
        examples: [
          "Lo que no entiendo es por qué no circula más entre los padres.",
          "Lo que no entiendo es por qué el mito de la confusión sigue fuerte.",
          "Lo que no entiendo es por qué no lo leen más directores.",
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        scenarios: ["evidence and examples", "workshops", "respectful tone"],
        examples: [
          "Me dio gusto leer que respondiera a las críticas con evidencia real.",
          "Me dio gusto leer que propusiera talleres para familias.",
          "Me dio gusto leer que reconociera el trabajo de las maestras.",
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        scenarios: ["evidence not slogans", "the ending", "how much you agreed"],
        examples: [
          "Me sorprendió que respondiera con evidencia, no con slogans.",
          "Me sorprendió que terminara proponiendo talleres concretos.",
          "Me sorprendió que me identificara tanto con la maestra del final.",
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        scenarios: ["writes for teachers", "knows classrooms", "worth sharing"],
        examples: [
          "Creo que el autor escribe para maestros como nosotras.",
          "Creo que el autor conoce salones bilingües de verdad.",
          "Creo que el autor merece que lo compartamos en la reunión de padres.",
        ],
      },
    ],
  },
];
