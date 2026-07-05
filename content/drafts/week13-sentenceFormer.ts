import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 13 draft — Capstone "Mi otoño en Pues" (days 176–182).
 *
 * Append to content/sentenceFormer/otono.ts. Stems must match week13-frames.ts.
 */
export const week13SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 176,
    theme: "El comienzo",
    stems: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        hints: {
          que: [
            { es: "empezó otoño", en: "fall began" },
            { es: "no sabía resumir", en: "I didn't know how to summarize" },
          ],
        },
        completions: [
          { es: "apenas sabía resumir una noticia", en: "I barely knew how to summarize news", category: "other" },
          { es: "«Trata de…» me sonaba raro", en: "\"It's about…\" sounded strange", category: "opinion" },
          { es: "empezó otoño en mi cuaderno", en: "fall began in my notebook", category: "time" },
          { es: "solo leía sin retell", en: "I only read without retelling", category: "activity" },
          { es: "no confiaba en mis retells", en: "I didn't trust my retells", category: "opinion" },
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        completions: [
          { es: "contarte la historia de naty en cinco frases", en: "tell you Naty's story in five sentences", category: "activity" },
          { es: "usar «Trata de…» sin pensar", en: "use \"It's about…\" without thinking", category: "activity" },
          { es: "resumir lo que leo en voz alta", en: "summarize what I read out loud", category: "activity" },
          { es: "retell sin mirar el cuaderno", en: "retell without looking at the notebook", category: "activity" },
          { es: "empezar una historia con La última vez…", en: "start a story with \"The last time…\"", category: "activity" },
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        completions: [
          { es: "confiar en que podía retell lo que leía", en: "trusting I could retell what I read", category: "opinion" },
          { es: "hablar justo después de leer", en: "speaking right after reading", category: "activity" },
          { es: "no traducir cada stem", en: "not translating every stem", category: "activity" },
          { es: "empezar cada semana nueva", en: "starting each new week", category: "activity" },
          { es: "no compararme con hablantes nativos", en: "not comparing myself to native speakers", category: "opinion" },
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        completions: [
          { es: "lo rápido que sonó natural", en: "how fast it started to sound natural", category: "opinion" },
          { es: "recordar historias sin el cuaderno", en: "remembering stories without the notebook", category: "other" },
          { es: "disfrutar el proceso", en: "enjoying the process", category: "opinion" },
          { es: "entender más de lo que pensaba", en: "understanding more than I thought", category: "opinion" },
          { es: "que los stems se acumularon solos", en: "that stems accumulated on their own", category: "other" },
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        completions: [
          { es: "seguir más historias en invierno", en: "follow more stories in winter", category: "activity" },
          { es: "hablar un minuto sin parar", en: "speak a minute without stopping", category: "activity" },
          { es: "cerrar otoño con un repaso completo", en: "close fall with a complete review", category: "other" },
          { es: "mezclar stems de verano y otoño", en: "mix summer and fall stems", category: "activity" },
          { es: "descansar esta noche", en: "rest tonight", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 177,
    theme: "Las historias",
    stems: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        completions: [
          { es: "solo conocía la historia de naty", en: "I only knew Naty's story", category: "other" },
          { es: "leía sin retell después", en: "I read without retelling after", category: "activity" },
          { es: "no seguía un hilo seis días", en: "I didn't follow a thread six days", category: "activity" },
          { es: "no reaccionaba a lo leído", en: "I didn't react to what I read", category: "activity" },
          { es: "cada historia era nueva", en: "each story was new", category: "other" },
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        completions: [
          { es: "nombrar cinco historias de otoño", en: "name five fall stories", category: "activity" },
          { es: "retell la feria con conectores", en: "retell the fair with connectors", category: "activity" },
          { es: "seguir un hilo seis días seguidos", en: "follow a thread six days in a row", category: "activity" },
          { es: "contar el regreso de diego entero", en: "tell Diego's whole return story", category: "activity" },
          { es: "reaccionar al artículo con cinco stems", en: "react to the article with five stems", category: "activity" },
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        completions: [
          { es: "retomar el hilo cada mañana", en: "picking up the thread each morning", category: "activity" },
          { es: "recordar qué pasó ayer", en: "remembering what happened yesterday", category: "activity" },
          { es: "no mezclar historias distintas", en: "not mixing different stories", category: "activity" },
          { es: "seguir diego seis días", en: "following Diego six days", category: "activity" },
          { es: "retell sin leer otra vez", en: "retelling without reading again", category: "activity" },
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        completions: [
          { es: "cuánto recuerdo sin el cuaderno", en: "how much I remember without the notebook", category: "opinion" },
          { es: "lo viva que quedó la historia de diego", en: "how vivid Diego's story stayed", category: "opinion" },
          { es: "reaccionar de verdad al artículo", en: "really reacting to the article", category: "opinion" },
          { es: "que naty se siente real", en: "that Naty feels real", category: "opinion" },
          { es: "recordar la feria entera", en: "remembering the whole fair", category: "other" },
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        completions: [
          { es: "seguir historias más largas en invierno", en: "follow longer stories in winter", category: "activity" },
          { es: "contar una historia entera sin parar", en: "tell a whole story without stopping", category: "activity" },
          { es: "usar estas historias en conversación real", en: "use these stories in real conversation", category: "activity" },
          { es: "inventar mis propias historias", en: "invent my own stories", category: "activity" },
          { es: "repasar todo en un minuto", en: "review everything in one minute", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 178,
    theme: "Las herramientas",
    stems: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        completions: [
          { es: "solo tenía cinco stems de resumir", en: "I only had five summarizing stems", category: "other" },
          { es: "no sabía decir Dice que…", en: "I didn't know how to say \"He says that…\"", category: "activity" },
          { es: "además me sonaba formal", en: "\"What's more\" sounded formal to me", category: "opinion" },
          { es: "no conocía el subjuntivo", en: "I didn't know the subjunctive", category: "other" },
          { es: "tenía menos de veinte stems", en: "I had fewer than twenty stems", category: "other" },
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        completions: [
          { es: "usar más de sesenta stems", en: "use more than sixty stems", category: "activity" },
          { es: "reportar lo que alguien dijo", en: "report what someone said", category: "activity" },
          { es: "conectar y contrastar ideas", en: "connect and contrast ideas", category: "activity" },
          { es: "opinar sobre lo leído", en: "react to what I read", category: "activity" },
          { es: "hablar casi un minuto con estructura", en: "speak almost a minute with structure", category: "activity" },
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        completions: [
          { es: "el subjuntivo en Me sorprendió que…", en: "the subjunctive in \"I was surprised that…\"", category: "other" },
          { es: "ya había… para backstory", en: "\"Already had…\" for backstory", category: "other" },
          { es: "no mezclar stems de semanas distintas", en: "not mixing stems from different weeks", category: "activity" },
          { es: "recordar sesenta stems", en: "remembering sixty stems", category: "activity" },
          { es: "usar conectores en orden", en: "using connectors in order", category: "activity" },
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        completions: [
          { es: "que los conectores me salen solos", en: "that connectors come out on their own", category: "opinion" },
          { es: "usar stems sin traducir", en: "using stems without translating", category: "activity" },
          { es: "tener un toolkit de verdad", en: "having a real toolkit", category: "opinion" },
          { es: "mezclar stems sin pensar", en: "mixing stems without thinking", category: "activity" },
          { es: "que el subjuntivo suena menos raro", en: "that the subjunctive sounds less strange", category: "opinion" },
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        completions: [
          { es: "mezclar stems de verano y otoño", en: "mix summer and fall stems", category: "activity" },
          { es: "hablar con menos scaffold", en: "speak with less scaffolding", category: "activity" },
          { es: "invierno — conversación de ida y vuelta", en: "winter — back-and-forth conversation", category: "other" },
          { es: "usar el toolkit en conversación real", en: "use the toolkit in real conversation", category: "activity" },
          { es: "olvidar los stems y hablar", en: "forget the stems and speak", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 179,
    theme: "Leer y reaccionar",
    stems: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        completions: [
          { es: "la lectura era un extra antes de dormir", en: "reading was an extra before bed", category: "other" },
          { es: "no sabía decir Me dio gusto leer que…", en: "I didn't know how to say \"I was glad to read that…\"", category: "activity" },
          { es: "leía y cerraba el cuaderno", en: "I read and closed the notebook", category: "activity" },
          { es: "no reaccionaba, solo leía", en: "I didn't react, I only read", category: "activity" },
          { es: "la lectura no conectaba con hablar", en: "reading didn't connect to speaking", category: "other" },
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        completions: [
          { es: "leer, resumir, reaccionar y seguir la historia", en: "read, summarize, react, and follow the story", category: "activity" },
          { es: "opinar sobre lo leído con cinco stems", en: "react to what I read with five stems", category: "activity" },
          { es: "conectar la lectura con la conversación", en: "connect reading with conversation", category: "activity" },
          { es: "retell y reaccionar el mismo día", en: "retell and react the same day", category: "activity" },
          { es: "leer y hablar todo en español", en: "read and speak all in Spanish", category: "activity" },
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        completions: [
          { es: "confiar en que entendí suficiente", en: "trusting I understood enough", category: "opinion" },
          { es: "reaccionar, no solo retell", en: "reacting, not just retelling", category: "activity" },
          { es: "me sorprendió que… con subjuntivo", en: "\"I was surprised that…\" with subjunctive", category: "other" },
          { es: "tener opinión sobre un artículo", en: "having an opinion about an article", category: "opinion" },
          { es: "hablar el mismo día que leo", en: "speaking the same day I read", category: "activity" },
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        completions: [
          { es: "que la lectura se volvió el centro", en: "that reading became the center", category: "opinion" },
          { es: "tener opinión sobre un artículo", en: "having an opinion about an article", category: "opinion" },
          { es: "leer y hablar el mismo día", en: "reading and speaking the same day", category: "activity" },
          { es: "disfrutar la lectura más", en: "enjoying reading more", category: "opinion" },
          { es: "que el loop funciona", en: "that the loop works", category: "opinion" },
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        completions: [
          { es: "leer más textos de verdad", en: "read more real texts", category: "activity" },
          { es: "llevar una reacción a conversación real", en: "bring a reaction to real conversation", category: "activity" },
          { es: "invierno — charla de ida y vuelta", en: "winter — back-and-forth chat", category: "other" },
          { es: "compartir artículos con colegas", en: "share articles with colleagues", category: "activity" },
          { es: "leer en español por placer", en: "read in Spanish for pleasure", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 180,
    theme: "Un minuto",
    stems: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        completions: [
          { es: "hablaba diez segundos y paraba", en: "I spoke ten seconds and stopped", category: "time" },
          { es: "no tenía estructura para sostener", en: "I didn't have structure to sustain", category: "other" },
          { es: "el pánico llegaba rápido", en: "panic came quickly", category: "opinion" },
          { es: "no practicaba monólogos", en: "I didn't practice monologues", category: "activity" },
          { es: "hablar sola me daba miedo", en: "talking alone scared me", category: "opinion" },
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        completions: [
          { es: "hablar cuarenta y cinco segundos sin parar", en: "speak forty-five seconds without stopping", category: "time" },
          { es: "usar Hoy quiero hablar de… para sostener", en: "use \"Today I want to talk about…\" to sustain", category: "activity" },
          { es: "hablar sin pánico más seguido", en: "speak without panic more often", category: "opinion" },
          { es: "contar una historia entera casi", en: "tell almost a whole story", category: "activity" },
          { es: "practicar frente al espejo", en: "practice in front of the mirror", category: "activity" },
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        completions: [
          { es: "hablar sola frente al espejo", en: "talking alone in front of the mirror", category: "activity" },
          { es: "no parar cuando tropiezo", en: "not stopping when I stumble", category: "activity" },
          { es: "superar la vergüenza", en: "overcoming embarrassment", category: "opinion" },
          { es: "llegar al minuto completo", en: "reaching the full minute", category: "time" },
          { es: "hablar sin corregirme", en: "speaking without correcting myself", category: "activity" },
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        completions: [
          { es: "que la estructura funciona", en: "that structure works", category: "opinion" },
          { es: "pasar de diez a cuarenta y cinco segundos", en: "going from ten to forty-five seconds", category: "time" },
          { es: "que el espejo ayuda de verdad", en: "that the mirror really helps", category: "opinion" },
          { es: "disfrutar hablar sola", en: "enjoying talking alone", category: "opinion" },
          { es: "sostener con stems de monólogo", en: "sustaining with monologue stems", category: "activity" },
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        completions: [
          { es: "el minuto entero", en: "the full minute", category: "time" },
          { es: "sostener en conversación real", en: "sustain in real conversation", category: "activity" },
          { es: "invierno — charla de ida y vuelta", en: "winter — back-and-forth chat", category: "other" },
          { es: "hablar un minuto con priya", en: "speak a minute with Priya", category: "activity" },
          { es: "no necesitar el cronómetro", en: "not needing the timer", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 181,
    theme: "Mi otoño en Pues",
    stems: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        completions: [
          { es: "no sabía retell lo que leía", en: "I didn't know how to retell what I read", category: "activity" },
          { es: "solo leía y ya", en: "I just read and that was it", category: "activity" },
          { es: "empezó otoño — seguir el hilo", en: "fall began — follow the thread", category: "other" },
          { es: "tenía miedo de hablar de lo leído", en: "I was afraid to talk about what I read", category: "opinion" },
          { es: "no imaginaba noventa días", en: "I couldn't imagine ninety days", category: "time" },
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        completions: [
          { es: "resumir, reportar, conectar, reaccionar y seguir historias", en: "summarize, report, connect, react, and follow stories", category: "activity" },
          { es: "opinar sobre lo leído y hablar casi un minuto", en: "react to what I read and speak almost a minute", category: "activity" },
          { es: "seguir una historia varios días — la meta de otoño", en: "follow a story several days — fall's goal", category: "activity" },
          { es: "contar mi otoño en español", en: "tell my fall in Spanish", category: "activity" },
          { es: "hablar sin pánico más seguido", en: "speak without panic more often", category: "opinion" },
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        completions: [
          { es: "confiar en que entendía suficiente para hablar", en: "trusting I understood enough to speak", category: "opinion" },
          { es: "no rendirme en las semanas flojas", en: "not giving up during slow weeks", category: "opinion" },
          { es: "el subjuntivo en las reacciones", en: "the subjunctive in reactions", category: "other" },
          { es: "empezar cada lunes", en: "starting each Monday", category: "activity" },
          { es: "hablar sola frente al espejo", en: "talking alone in front of the mirror", category: "activity" },
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        completions: [
          { es: "cuánto recuerdo de las historias", en: "how much I remember from the stories", category: "opinion" },
          { es: "disfrutarlo tanto", en: "enjoying it so much", category: "opinion" },
          { es: "que los stems salen solos", en: "that stems come out on their own", category: "opinion" },
          { es: "llegar al día 181", en: "reaching day 181", category: "time" },
          { es: "sentirme diferente al hablar", en: "feeling different when I speak", category: "opinion" },
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        completions: [
          { es: "invierno", en: "winter", category: "other" },
          { es: "charla de ida y vuelta", en: "back-and-forth chat", category: "other" },
          { es: "descansar esta noche — me lo gané", en: "rest tonight — I earned it", category: "activity" },
          { es: "el minuto entero", en: "the full minute", category: "time" },
          { es: "seguir — verano, otoño, invierno", en: "continue — summer, fall, winter", category: "other" },
        ],
      },
    ],
  },
  {
    day: 182,
    theme: "Repaso: mi otoño",
    stems: [
      {
        stem: "Hace dos meses…",
        english: "Two months ago…",
        completions: [
          { es: "empecé a resumir con Trata de…", en: "I started summarizing with \"It's about…\"", category: "activity" },
          { es: "otoño era solo una idea en mi cuaderno", en: "fall was just an idea in my notebook", category: "other" },
          { es: "no sabía seguir un hilo seis días", en: "I didn't know how to follow a thread six days", category: "activity" },
          { es: "verano acababa de terminar", en: "summer had just ended", category: "time" },
          { es: "no imaginaba noventa días más", en: "I couldn't imagine ninety more days", category: "time" },
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        completions: [
          { es: "conectar, contrastar, reaccionar y seguir historias", en: "connect, contrast, react, and follow stories", category: "activity" },
          { es: "contar mi otoño en un minuto", en: "tell my fall in one minute", category: "activity" },
          { es: "hablar casi un minuto sin parar", en: "speak almost a minute without stopping", category: "time" },
          { es: "usar sesenta stems sin traducir", en: "use sixty stems without translating", category: "activity" },
          { es: "seguir el hilo como meta cumplida", en: "follow the thread as an accomplished goal", category: "other" },
        ],
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        completions: [
          { es: "confiar en mis retells", en: "trusting my retells", category: "opinion" },
          { es: "empezar cada semana nueva", en: "starting each new week", category: "activity" },
          { es: "no rendirme en las semanas flojas", en: "not giving up during slow weeks", category: "opinion" },
          { es: "el subjuntivo", en: "the subjunctive", category: "other" },
          { es: "hablar sola sin vergüenza", en: "talking alone without embarrassment", category: "opinion" },
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        completions: [
          { es: "disfrutarlo", en: "enjoying it", category: "opinion" },
          { es: "cuánto cambié en noventa días", en: "how much I changed in ninety days", category: "opinion" },
          { es: "recordar cinco historias enteras", en: "remembering five whole stories", category: "other" },
          { es: "que los conectores salen solos", en: "that connectors come out on their own", category: "opinion" },
          { es: "llegar al día 182", en: "reaching day 182", category: "time" },
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        completions: [
          { es: "invierno", en: "winter", category: "other" },
          { es: "el minuto entero y conversación real", en: "the full minute and real conversation", category: "activity" },
          { es: "seguir — verano, otoño, invierno", en: "continue — summer, fall, winter", category: "other" },
          { es: "descansar y empezar invierno", en: "rest and start winter", category: "activity" },
          { es: "charla de ida y vuelta", en: "back-and-forth chat", category: "other" },
        ],
      },
    ],
  },
];
