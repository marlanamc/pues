import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 10 draft — "Opinar sobre lo leído" (days 155–161).
 *
 * Append to content/sentenceFormer/otono.ts. Stems must match week10-frames.ts.
 */
export const week10SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 155,
    theme: "El artículo",
    stems: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        hints: {
          que: [
            { es: "el título era directo", en: "the title was direct" },
            { es: "hablaba de educación bilingüe", en: "it was about bilingual education" },
          ],
        },
        completions: [
          { es: "el título del artículo", en: "the article's title", category: "other" },
          { es: "que una exalumna lo compartió", en: "that an alum shared it", category: "other" },
          { es: "leerlo antes de dormir", en: "reading it before bed", category: "time" },
          { es: "el tono esperanzador", en: "the hopeful tone", category: "opinion" },
          { es: "que hablaba de salones reales", en: "that it talked about real classrooms", category: "other" },
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        completions: [
          { es: "por qué no lo había visto antes", en: "why I hadn't seen it before", category: "other" },
          { es: "quién financia esos estudios", en: "who funds those studies", category: "other" },
          { es: "si la directora lo ha leído", en: "if the principal has read it", category: "other" },
          { es: "por qué no circula más", en: "why it doesn't circulate more", category: "other" },
          { es: "cómo llegó a mis manos", en: "how it reached my hands", category: "other" },
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        completions: [
          { es: "alguien de aquí lo publicó", en: "someone from here published it", category: "other" },
          { es: "el tono era esperanzador", en: "the tone was hopeful", category: "opinion" },
          { es: "hablaba de salones reales", en: "it talked about real classrooms", category: "other" },
          { es: "no era condescendiente", en: "it wasn't condescending", category: "opinion" },
          { es: "una exalumna lo encontró", en: "an alum found it", category: "other" },
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        completions: [
          { es: "apareciera justo esta semana", en: "it appeared this very week", category: "time" },
          { es: "fuera tan largo y claro", en: "it was so long and clear", category: "opinion" },
          { es: "una exalumna lo encontrara primero", en: "an alum found it first", category: "other" },
          { es: "el título fuera tan directo", en: "the title was so direct", category: "opinion" },
          { es: "hablara de Massachusetts", en: "it talked about Massachusetts", category: "other" },
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        completions: [
          { es: "conoce salones bilingües de verdad", en: "knows bilingual classrooms for real", category: "opinion" },
          { es: "escribe para maestros como nosotras", en: "writes for teachers like us", category: "opinion" },
          { es: "quiere cambiar la conversación", en: "wants to change the conversation", category: "opinion" },
          { es: "ha trabajado en escuelas", en: "has worked in schools", category: "other" },
          { es: "sabe lo que pasa en clase", en: "knows what happens in class", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 156,
    theme: "Los argumentos",
    stems: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        completions: [
          { es: "la idea de «no pierden, ganan»", en: "the idea of \"they don't lose, they gain\"", category: "other" },
          { es: "cómo usa ejemplos reales", en: "how he uses real examples", category: "other" },
          { es: "la defensa de programas duales", en: "the defense of dual programs", category: "other" },
          { es: "que menciona dos idiomas a la vez", en: "that he mentions two languages at once", category: "other" },
          { es: "la claridad del argumento", en: "the clarity of the argument", category: "opinion" },
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        completions: [
          { es: "por qué no lo enseñan en la universidad", en: "why they don't teach it in college", category: "other" },
          { es: "la diferencia entre dual e inmersión", en: "the difference between dual and immersion", category: "other" },
          { es: "quién decide qué programa usar", en: "who decides which program to use", category: "other" },
          { es: "por qué algunos padres dudan", en: "why some parents doubt", category: "other" },
          { es: "cómo se mide la flexibilidad mental", en: "how mental flexibility is measured", category: "other" },
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        completions: [
          { es: "lo explica con ejemplos, no teoría", en: "he explains with examples, not theory", category: "other" },
          { es: "menciona maestras de verdad", en: "he mentions real teachers", category: "other" },
          { es: "el tono no era condescendiente", en: "the tone wasn't condescending", category: "opinion" },
          { es: "defiende los programas duales", en: "he defends dual programs", category: "other" },
          { es: "habla de ventajas concretas", en: "he talks about concrete advantages", category: "other" },
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        completions: [
          { es: "mencione la flexibilidad mental", en: "he mentions mental flexibility", category: "other" },
          { es: "fuera tan directo con detractores", en: "he was so direct with critics", category: "opinion" },
          { es: "defienda dos idiomas sin miedo", en: "he defends two languages without fear", category: "opinion" },
          { es: "use salones reales como prueba", en: "he uses real classrooms as proof", category: "other" },
          { es: "el argumento fuera tan claro", en: "the argument was so clear", category: "opinion" },
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        completions: [
          { es: "defiende los programas duales con claridad", en: "defends dual programs clearly", category: "opinion" },
          { es: "conoce la investigación reciente", en: "knows recent research", category: "opinion" },
          { es: "quiere convencer a los que dudan", en: "wants to convince those who doubt", category: "opinion" },
          { es: "escribe para padres y maestros", en: "writes for parents and teachers", category: "opinion" },
          { es: "no exagera los beneficios", en: "doesn't exaggerate the benefits", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 157,
    theme: "Los datos",
    stems: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        completions: [
          { es: "que los bilingües sacaron mejores notas", en: "bilingual students got better grades", category: "other" },
          { es: "el estudio de mil estudiantes", en: "the study of a thousand students", category: "other" },
          { es: "la comparación con escuelas solo en inglés", en: "the comparison with English-only schools", category: "other" },
          { es: "el seguimiento de cinco años", en: "the five-year follow-up", category: "time" },
          { es: "que citara la fuente completa", en: "that he cited the full source", category: "other" },
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        completions: [
          { es: "cómo eligieron las escuelas de comparación", en: "how they chose the comparison schools", category: "other" },
          { es: "por qué esos datos no llegan a padres", en: "why that data doesn't reach parents", category: "other" },
          { es: "si el estudio se repitió en otros estados", en: "if the study was repeated in other states", category: "other" },
          { es: "quién financió la investigación", en: "who funded the research", category: "other" },
          { es: "por qué no lo enseñan en la facultad", en: "why they don't teach it in college", category: "other" },
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        completions: [
          { es: "siguieron a los niños cinco años", en: "they followed the children five years", category: "time" },
          { es: "cita la fuente completa", en: "he cites the full source", category: "other" },
          { es: "no exageró los resultados", en: "he didn't exaggerate the results", category: "opinion" },
          { es: "incluyó escuelas parecidas al nuestro", en: "he included schools like ours", category: "other" },
          { es: "los números eran honestos", en: "the numbers were honest", category: "opinion" },
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        completions: [
          { es: "la diferencia fuera tan clara al final", en: "the difference was so clear in the end", category: "opinion" },
          { es: "el seguimiento durara tanto", en: "the follow-up lasted so long", category: "time" },
          { es: "incluyera escuelas de barrios parecidos", en: "he included schools from similar neighborhoods", category: "other" },
          { es: "los datos fueran tan convincentes", en: "the data was so convincing", category: "opinion" },
          { es: "comparara con un grupo similar", en: "he compared with a similar group", category: "other" },
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        completions: [
          { es: "usa esos datos para responder a dudas", en: "uses that data to answer doubts", category: "opinion" },
          { es: "sabe que los números convencen", en: "knows numbers convince some people", category: "opinion" },
          { es: "equilibra datos con historias", en: "balances data with stories", category: "opinion" },
          { es: "no manipula las cifras", en: "doesn't manipulate the figures", category: "opinion" },
          { es: "elige estudios serios", en: "chooses serious studies", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 158,
    theme: "Las voces en contra",
    stems: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        completions: [
          { es: "que no ignoró las críticas", en: "that he didn't ignore the criticisms", category: "other" },
          { es: "cómo nombra el mito de la confusión", en: "how he names the confusion myth", category: "other" },
          { es: "la evidencia de Canadá", en: "the evidence from Canada", category: "other" },
          { es: "que citara voces en contra", en: "that he quoted critics", category: "other" },
          { es: "el tono respetuoso con detractores", en: "the respectful tone with critics", category: "opinion" },
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        completions: [
          { es: "por qué esa idea sigue tan fuerte", en: "why that idea is still so strong", category: "other" },
          { es: "de dónde sale el miedo al retraso", en: "where the fear of delay comes from", category: "other" },
          { es: "por qué algunos padres no visitan el salón", en: "why some parents don't visit the classroom", category: "other" },
          { es: "quién difunde esos mitos", en: "who spreads those myths", category: "other" },
          { es: "por qué no los invitan a ver clase", en: "why they're not invited to see class", category: "other" },
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        completions: [
          { es: "responde con evidencia de aquí", en: "he responds with evidence from here", category: "other" },
          { es: "reconoce las preocupaciones de padres", en: "he acknowledges parents' concerns", category: "other" },
          { es: "no ridiculiza a nadie", en: "he doesn't ridicule anyone", category: "opinion" },
          { es: "usa ejemplos de Canadá y aquí", en: "he uses examples from Canada and here", category: "other" },
          { es: "explica el mito sin enojarse", en: "he explains the myth without getting angry", category: "opinion" },
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        completions: [
          { es: "citara voces en contra con respeto", en: "he quoted critics with respect", category: "opinion" },
          { es: "usara ejemplos de Canadá y aquí", en: "he used examples from Canada and here", category: "other" },
          { es: "explicara el mito sin enojarse", en: "he explained the myth without anger", category: "opinion" },
          { es: "no atacara a los detractores", en: "he didn't attack the critics", category: "opinion" },
          { es: "reconociera el miedo de los padres", en: "he acknowledged parents' fear", category: "other" },
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        completions: [
          { es: "entiende por qué la gente duda", en: "understands why people doubt", category: "opinion" },
          { es: "quiere convencer, no humillar", en: "wants to convince, not humiliate", category: "opinion" },
          { es: "sabe que muchos no han visto un salón bilingüe", en: "knows many haven't seen a bilingual classroom", category: "opinion" },
          { es: "construye puentes, no muros", en: "builds bridges, not walls", category: "opinion" },
          { es: "respeta a los que piensan distinto", en: "respects those who think differently", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 159,
    theme: "Mi conexión",
    stems: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        completions: [
          { es: "la maestra del ejemplo final", en: "the teacher in the final example", category: "other" },
          { es: "cómo explica la paciencia a padres", en: "how she explains patience to parents", category: "other" },
          { es: "la frase «La paciencia también se enseña»", en: "the sentence \"Patience is taught too\"", category: "other" },
          { es: "que me identificara con ella", en: "that I identified with her", category: "opinion" },
          { es: "el salón parecido al nuestro", en: "the classroom similar to ours", category: "other" },
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        completions: [
          { es: "por qué me conmovió tanto esa parte", en: "why that part moved me so much", category: "opinion" },
          { es: "si el autor trabajó en ESL", en: "if the author worked in ESL", category: "other" },
          { es: "por qué no habla más de maestros", en: "why he doesn't talk more about teachers", category: "other" },
          { es: "cómo eligió esa maestra", en: "how he chose that teacher", category: "other" },
          { es: "por qué terminó ahí el artículo", en: "why he ended the article there", category: "other" },
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        completions: [
          { es: "pusiera a una maestra como protagonista", en: "he put a teacher as the protagonist", category: "other" },
          { es: "reconociera lo difícil del proceso", en: "he acknowledged how hard the process is", category: "other" },
          { es: "terminara con esperanza, no culpa", en: "he ended with hope, not blame", category: "opinion" },
          { es: "hablara de orgullo familiar", en: "he talked about family pride", category: "other" },
          { es: "mencionara la paciencia como enseñanza", en: "he mentioned patience as teaching", category: "other" },
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        completions: [
          { es: "terminara con una frase tan simple", en: "he ended with such a simple sentence", category: "opinion" },
          { es: "me identificara tanto con esa maestra", en: "I identified so much with that teacher", category: "opinion" },
          { es: "hablara de orgullo familiar al final", en: "he talked about family pride at the end", category: "other" },
          { es: "la parte final fuera tan personal", en: "the final part was so personal", category: "opinion" },
          { es: "me conmoviera tanto leyendo", en: "it moved me so much while reading", category: "opinion" },
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        completions: [
          { es: "conoce lo que pasa en un salón de ESL", en: "knows what happens in an ESL classroom", category: "opinion" },
          { es: "escribió esa parte para maestras como nosotras", en: "wrote that part for teachers like us", category: "opinion" },
          { es: "entiende lo que cuesta explicar el proceso", en: "understands how hard it is to explain the process", category: "opinion" },
          { es: "ha hablado con padres de verdad", en: "has talked to real parents", category: "opinion" },
          { es: "sabe lo que es esperar resultados", en: "knows what waiting for results feels like", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 160,
    theme: "La conversación",
    stems: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        completions: [
          { es: "el título y los datos juntos", en: "the title and data together", category: "other" },
          { es: "la propuesta de talleres", en: "the workshop proposal", category: "other" },
          { es: "cómo cierra el círculo al final", en: "how it closes the circle at the end", category: "other" },
          { es: "que Priya también lo leyera", en: "that Priya read it too", category: "other" },
          { es: "lo de la paciencia al final", en: "the patience part at the end", category: "other" },
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        completions: [
          { es: "por qué no lo leen más directores", en: "why more principals don't read it", category: "other" },
          { es: "por qué no llega a más familias", en: "why it doesn't reach more families", category: "other" },
          { es: "quién decide qué se comparte", en: "who decides what gets shared", category: "other" },
          { es: "por qué no lo usan en capacitaciones", en: "why they don't use it in training", category: "other" },
          { es: "cómo hacer que circule más", en: "how to make it circulate more", category: "activity" },
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        completions: [
          { es: "alguien lo explicara tan claro", en: "someone explained it so clearly", category: "opinion" },
          { es: "propusiera talleres para familias nuevas", en: "he proposed workshops for new families", category: "other" },
          { es: "priya también se quedara con lo de la paciencia", en: "Priya also took away the patience part", category: "other" },
          { es: "las dos coincidieramos", en: "we both agreed", category: "opinion" },
          { es: "terminara con una propuesta concreta", en: "it ended with a concrete proposal", category: "other" },
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        completions: [
          { es: "al final propusiera talleres para familias", en: "at the end he proposed workshops for families", category: "other" },
          { es: "priya lo leyera tan rápido", en: "Priya read it so fast", category: "other" },
          { es: "las dos coincidieramos tanto", en: "we agreed so much", category: "opinion" },
          { es: "quedara tan claro para compartir", en: "it was so clear to share", category: "opinion" },
          { es: "propusiera algo tan práctico", en: "he proposed something so practical", category: "opinion" },
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        completions: [
          { es: "conoce salones reales", en: "knows real classrooms", category: "opinion" },
          { es: "escribe para maestros como nosotras", en: "writes for teachers like us", category: "opinion" },
          { es: "no solo critica — también propone", en: "doesn't just criticize — he also proposes", category: "opinion" },
          { es: "merece que lo compartamos en la reunión", en: "deserves to be shared at the meeting", category: "opinion" },
          { es: "entiende padres y maestros", en: "understands parents and teachers", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 161,
    theme: "Repaso: opinar",
    stems: [
      {
        stem: "Lo que más me llamó la atención fue…",
        english: "What caught my attention most was…",
        completions: [
          { es: "el título — y los datos al final", en: "the title — and the data at the end", category: "other" },
          { es: "cómo pasó de teoría a salones reales", en: "how it went from theory to real classrooms", category: "other" },
          { es: "la maestra del ejemplo final", en: "the teacher in the final example", category: "other" },
          { es: "todo el arco del artículo", en: "the whole arc of the article", category: "other" },
          { es: "la mezcla de datos e historias", en: "the mix of data and stories", category: "other" },
        ],
      },
      {
        stem: "Lo que no entiendo es…",
        english: "What I don't understand is…",
        completions: [
          { es: "por qué no circula más entre padres", en: "why it doesn't circulate more among parents", category: "other" },
          { es: "por qué el mito sigue fuerte", en: "why the myth is still strong", category: "other" },
          { es: "por qué no lo leen más directores", en: "why more principals don't read it", category: "other" },
          { es: "cómo hacer que llegue a más gente", en: "how to make it reach more people", category: "activity" },
          { es: "por qué no lo enseñan en la facultad", en: "why they don't teach it in college", category: "other" },
        ],
      },
      {
        stem: "Me dio gusto leer que…",
        english: "I was glad to read that…",
        completions: [
          { es: "respondiera a críticas con evidencia real", en: "he answered criticisms with real evidence", category: "other" },
          { es: "propusiera talleres para familias", en: "he proposed workshops for families", category: "other" },
          { es: "reconociera el trabajo de las maestras", en: "he recognized teachers' work", category: "other" },
          { es: "no ignorara las voces en contra", en: "he didn't ignore critics", category: "other" },
          { es: "terminara con esperanza", en: "it ended with hope", category: "opinion" },
        ],
      },
      {
        stem: "Me sorprendió que…",
        english: "I was surprised that…",
        completions: [
          { es: "respondiera con evidencia, no slogans", en: "he answered with evidence, not slogans", category: "opinion" },
          { es: "terminara proponiendo talleres concretos", en: "he ended proposing concrete workshops", category: "other" },
          { es: "me identificara tanto con la maestra", en: "I identified so much with the teacher", category: "opinion" },
          { es: "fuera tan completo en pocas páginas", en: "it was so complete in few pages", category: "opinion" },
          { es: "priya y yo coincidieramos tanto", en: "Priya and I agreed so much", category: "opinion" },
        ],
      },
      {
        stem: "Creo que el autor…",
        english: "I think the author…",
        completions: [
          { es: "escribe para maestros como nosotras", en: "writes for teachers like us", category: "opinion" },
          { es: "conoce salones bilingües de verdad", en: "knows bilingual classrooms for real", category: "opinion" },
          { es: "merece que lo compartamos en la reunión", en: "deserves to be shared at the meeting", category: "opinion" },
          { es: "equilibra datos, críticas e historias", en: "balances data, criticism, and stories", category: "opinion" },
          { es: "cambió un poco mi forma de explicarlo", en: "changed a bit how I explain it", category: "opinion" },
        ],
      },
    ],
  },
];
