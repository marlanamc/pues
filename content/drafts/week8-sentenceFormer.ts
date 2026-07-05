import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 8 — "Ordenar las ideas" (days 141–147).
 * Stems must match content/drafts/week8-frames.ts for the same day.
 */
export const week8SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 141,
    theme: "La tarea",
    stems: [
      {
        stem: "Primero que nada…",
        english: "First of all…",
        completions: [
          { es: "tengo que presentar el proyecto de lectura", en: "i have to present the reading project", category: "activity" },
          { es: "la directora pidió datos concretos", en: "the principal asked for concrete data", category: "other" },
          { es: "es la reunión de todo el personal", en: "it's the whole-staff meeting", category: "other" },
          { es: "necesito armar un esquema claro", en: "i need to build a clear outline", category: "activity" },
          { es: "solo tengo diez minutos", en: "i only have ten minutes", category: "time" },
        ],
      },
      {
        stem: "En cuanto a…",
        english: "As for… / Regarding…",
        completions: [
          { es: "el tiempo, solo tengo diez minutos", en: "time, i only have ten minutes", category: "time" },
          { es: "el público, son maestros de todos los grados", en: "the audience, they're teachers from every grade", category: "other" },
          { es: "el tema, es sobre lectura en primaria", en: "the topic, it's about reading in elementary", category: "other" },
          { es: "los datos, tengo que revisarlos esta semana", en: "the data, i have to review it this week", category: "activity" },
          { es: "el tono, quiero sonar segura pero accesible", en: "the tone, i want to sound confident but approachable", category: "opinion" },
        ],
      },
      {
        stem: "Por último…",
        english: "Lastly… / Finally…",
        completions: [
          { es: "quiero proponer un plan para el trimestre", en: "i want to propose a plan for the quarter", category: "activity" },
          { es: "mostraré los resultados del piloto", en: "i'll show the pilot results", category: "activity" },
          { es: "pediré voluntarios para el comité", en: "i'll ask for volunteers for the committee", category: "activity" },
          { es: "abriré espacio para preguntas", en: "i'll open time for questions", category: "activity" },
          { es: "cerraré con una propuesta concreta", en: "i'll close with a concrete proposal", category: "activity" },
        ],
      },
      {
        stem: "Volviendo a lo de…",
        english: "Getting back to… / Returning to…",
        completions: [
          { es: "los datos, tengo tres gráficos", en: "the data, i have three charts", category: "other" },
          { es: "la reunión, es el jueves a las tres", en: "the meeting, it's thursday at three", category: "time" },
          { es: "el proyecto, empezamos en enero", en: "the project, we started in january", category: "time" },
          { es: "el tiempo, diez minutos no es mucho", en: "time, ten minutes isn't much", category: "time" },
          { es: "la directora, ella quiere ver resultados", en: "the principal, she wants to see results", category: "other" },
        ],
      },
      {
        stem: "En resumen…",
        english: "In summary… / To sum up…",
        completions: [
          { es: "tengo que convencer al personal en diez minutos", en: "i have to convince the staff in ten minutes", category: "activity" },
          { es: "es un informe con propuesta al final", en: "it's a report with a proposal at the end", category: "other" },
          { es: "necesito practicar mucho esta semana", en: "i need to practice a lot this week", category: "activity" },
          { es: "tres partes: problema, datos y plan", en: "three parts: problem, data, and plan", category: "other" },
          { es: "la estructura lo es todo", en: "structure is everything", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 142,
    theme: "La investigación",
    stems: [
      {
        stem: "Primero que nada…",
        english: "First of all…",
        completions: [
          { es: "revisé las calificaciones de lectura del trimestre", en: "i reviewed the reading grades for the quarter", category: "activity" },
          { es: "los números muestran una mejora clara", en: "the numbers show a clear improvement", category: "other" },
          { es: "entrevisté a tres maestras de primaria", en: "i interviewed three elementary teachers", category: "activity" },
          { es: "busqué datos del año pasado", en: "i looked up last year's data", category: "activity" },
          { es: "organicé todo en una carpeta", en: "i organized everything in a folder", category: "activity" },
        ],
      },
      {
        stem: "En cuanto a…",
        english: "As for… / Regarding…",
        completions: [
          { es: "segundo grado, subieron ocho puntos", en: "second grade, they went up eight points", category: "other" },
          { es: "los libros, usamos textos más cortos", en: "the books, we used shorter texts", category: "other" },
          { es: "el método, combinamos lectura en voz alta y parejas", en: "the method, we combined read-aloud and pairs", category: "activity" },
          { es: "tercer grado, la mejora fue menor", en: "third grade, the improvement was smaller", category: "other" },
          { es: "las encuestas, los maestros están entusiasmados", en: "the surveys, teachers are enthusiastic", category: "opinion" },
        ],
      },
      {
        stem: "Por último…",
        english: "Lastly… / Finally…",
        completions: [
          { es: "el grupo piloto leyó el doble de páginas", en: "the pilot group read twice as many pages", category: "other" },
          { es: "las encuestas muestran entusiasmo de los maestros", en: "the surveys show teacher enthusiasm", category: "other" },
          { es: "comparé los resultados con el año pasado", en: "i compared results with last year", category: "activity" },
          { es: "encontré la estadística más fuerte", en: "i found the strongest statistic", category: "activity" },
          { es: "guardé todo para las diapositivas", en: "i saved everything for the slides", category: "activity" },
        ],
      },
      {
        stem: "Volviendo a lo de…",
        english: "Getting back to… / Returning to…",
        completions: [
          { es: "las calificaciones, la tendencia es positiva", en: "the grades, the trend is positive", category: "other" },
          { es: "el piloto, funcionó mejor de lo esperado", en: "the pilot, it worked better than expected", category: "opinion" },
          { es: "la directora, ella quiere ver esto el jueves", en: "the principal, she wants to see this thursday", category: "time" },
          { es: "segundo grado, ahí está la mayor mejora", en: "second grade, that's where the biggest improvement is", category: "other" },
          { es: "los libros, elegimos textos más accesibles", en: "the books, we chose more accessible texts", category: "other" },
        ],
      },
      {
        stem: "En resumen…",
        english: "In summary… / To sum up…",
        completions: [
          { es: "el proyecto de lectura está funcionando", en: "the reading project is working", category: "opinion" },
          { es: "tenemos datos sólidos para presentar", en: "we have solid data to present", category: "other" },
          { es: "la inversión valió la pena", en: "the investment was worth it", category: "opinion" },
          { es: "primaria mejoró en todos los grados", en: "elementary improved in every grade", category: "other" },
          { es: "los números respaldan la propuesta", en: "the numbers support the proposal", category: "other" },
        ],
      },
    ],
  },
  {
    day: 143,
    theme: "Ensayar",
    stems: [
      {
        stem: "Primero que nada…",
        english: "First of all…",
        completions: [
          { es: "tu introducción engancha bien", en: "your introduction hooks well", category: "opinion" },
          { es: "habla un poco más despacio", en: "speak a little slower", category: "activity" },
          { es: "el saludo está perfecto", en: "the greeting is perfect", category: "opinion" },
          { es: "respira antes de empezar", en: "breathe before you start", category: "activity" },
          { es: "tu voz se escucha clara", en: "your voice comes through clearly", category: "opinion" },
        ],
      },
      {
        stem: "En cuanto a…",
        english: "As for… / Regarding…",
        completions: [
          { es: "los gráficos, son claros pero hay muchos", en: "the charts, they're clear but there are too many", category: "opinion" },
          { es: "el tono, suenas segura", en: "the tone, you sound confident", category: "opinion" },
          { es: "el final, falta un cierre más fuerte", en: "the ending, it needs a stronger close", category: "opinion" },
          { es: "el ritmo, vas un poco rápido", en: "the pace, you're a little fast", category: "opinion" },
          { es: "las transiciones, algunas son bruscas", en: "the transitions, some are abrupt", category: "opinion" },
        ],
      },
      {
        stem: "Por último…",
        english: "Lastly… / Finally…",
        completions: [
          { es: "practica la transición al plan del trimestre", en: "practice the transition to the quarter plan", category: "activity" },
          { es: "deja tiempo para preguntas", en: "leave time for questions", category: "time" },
          { es: "respira antes de empezar", en: "breathe before you start", category: "activity" },
          { es: "prueba la frase final otra vez", en: "try the closing line again", category: "activity" },
          { es: "cronometra los diez minutos", en: "time the ten minutes", category: "activity" },
        ],
      },
      {
        stem: "Volviendo a lo de…",
        english: "Getting back to… / Returning to…",
        completions: [
          { es: "el medio, acortaste demasiado esa parte", en: "the middle, you shortened that part too much", category: "opinion" },
          { es: "los datos, repite el número clave", en: "the data, repeat the key number", category: "activity" },
          { es: "el cierre, prueba otra frase final", en: "the close, try another closing line", category: "activity" },
          { es: "los gráficos, quédate con dos", en: "the charts, stick with two", category: "activity" },
          { es: "la introducción, repítela una vez más", en: "the introduction, run it one more time", category: "activity" },
        ],
      },
      {
        stem: "En resumen…",
        english: "In summary… / To sum up…",
        completions: [
          { es: "vas muy bien, solo afina el final", en: "you're doing well, just tighten the ending", category: "opinion" },
          { es: "estás lista, solo falta confianza", en: "you're ready, you just need confidence", category: "opinion" },
          { es: "la estructura funciona, el contenido es sólido", en: "the structure works, the content is solid", category: "opinion" },
          { es: "practica una vez más mañana", en: "practice one more time tomorrow", category: "activity" },
          { es: "el jueves vas a brillar", en: "thursday you're going to shine", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 144,
    theme: "La estructura",
    stems: [
      {
        stem: "Primero que nada…",
        english: "First of all…",
        completions: [
          { es: "presento el problema de lectura en primaria", en: "i present the reading problem in elementary", category: "activity" },
          { es: "explico por qué empezamos el piloto", en: "i explain why we started the pilot", category: "activity" },
          { es: "saludo y agradezco su tiempo", en: "i greet them and thank them for their time", category: "activity" },
          { es: "planteo la pregunta central", en: "i pose the central question", category: "activity" },
          { es: "muestro el contexto del colegio", en: "i show the school context", category: "activity" },
        ],
      },
      {
        stem: "En cuanto a…",
        english: "As for… / Regarding…",
        completions: [
          { es: "los resultados, muestro tres gráficos", en: "the results, i show three charts", category: "activity" },
          { es: "el método, fue lectura diaria de quince minutos", en: "the method, it was fifteen minutes of daily reading", category: "activity" },
          { es: "los desafíos, hubo resistencia al principio", en: "the challenges, there was resistance at first", category: "other" },
          { es: "segundo grado, ahí está la mayor mejora", en: "second grade, that's where the biggest improvement is", category: "other" },
          { es: "los maestros, su feedback fue positivo", en: "the teachers, their feedback was positive", category: "opinion" },
        ],
      },
      {
        stem: "Por último…",
        english: "Lastly… / Finally…",
        completions: [
          { es: "propongo expandir el programa al segundo trimestre", en: "i propose expanding the program next quarter", category: "activity" },
          { es: "pido apoyo del personal para continuar", en: "i ask for staff support to continue", category: "activity" },
          { es: "abro el espacio para preguntas", en: "i open time for questions", category: "activity" },
          { es: "cierro con la propuesta concreta", en: "i close with the concrete proposal", category: "activity" },
          { es: "pido voluntarios para el comité", en: "i ask for volunteers for the committee", category: "activity" },
        ],
      },
      {
        stem: "Volviendo a lo de…",
        english: "Getting back to… / Returning to…",
        completions: [
          { es: "el problema inicial, estos datos lo confirman", en: "the initial problem, this data confirms it", category: "other" },
          { es: "enero, el piloto empezó con dos clases", en: "january, the pilot started with two classes", category: "time" },
          { es: "la directora, ella pidió una propuesta concreta", en: "the principal, she asked for a concrete proposal", category: "other" },
          { es: "los resultados, repito el número clave", en: "the results, i repeat the key number", category: "activity" },
          { es: "el método, quince minutos diarios bastaron", en: "the method, fifteen daily minutes were enough", category: "other" },
        ],
      },
      {
        stem: "En resumen…",
        english: "In summary… / To sum up…",
        completions: [
          { es: "leemos más, comprendemos mejor y los maestros están a bordo", en: "we read more, understand better, and teachers are on board", category: "other" },
          { es: "el piloto funciona y necesitamos escalarlo", en: "the pilot works and we need to scale it", category: "opinion" },
          { es: "tenemos evidencia y un plan claro", en: "we have evidence and a clear plan", category: "other" },
          { es: "tres partes, diez minutos, una propuesta", en: "three parts, ten minutes, one proposal", category: "other" },
          { es: "los datos hablan y el plan sigue", en: "the data speaks and the plan follows", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 145,
    theme: "La noche anterior",
    stems: [
      {
        stem: "Primero que nada…",
        english: "First of all…",
        completions: [
          { es: "repaso la introducción una vez más", en: "i review the introduction one more time", category: "activity" },
          { es: "verifico que el proyector funcione", en: "i check that the projector works", category: "activity" },
          { es: "elijo la ropa para mañana", en: "i pick my clothes for tomorrow", category: "activity" },
          { es: "reviso las diapositivas por última vez", en: "i review the slides one last time", category: "activity" },
          { es: "preparo las notas impresas", en: "i prepare the printed notes", category: "activity" },
        ],
      },
      {
        stem: "En cuanto a…",
        english: "As for… / Regarding…",
        completions: [
          { es: "los nervios, marlana dice que es normal", en: "nerves, marlana says it's normal", category: "opinion" },
          { es: "las diapositivas, las revisé tres veces", en: "the slides, i reviewed them three times", category: "activity" },
          { es: "el tiempo, cronometré diez minutos exactos", en: "time, i timed exactly ten minutes", category: "time" },
          { es: "el sueño, trato de descansar", en: "sleep, i'm trying to rest", category: "activity" },
          { es: "las preguntas, preparé tres respuestas", en: "questions, i prepared three answers", category: "activity" },
        ],
      },
      {
        stem: "Por último…",
        english: "Lastly… / Finally…",
        completions: [
          { es: "dejo las notas junto a la puerta", en: "i leave my notes by the door", category: "activity" },
          { es: "apago el celular y trato de dormir", en: "i turn off my phone and try to sleep", category: "activity" },
          { es: "me recuerdo que sé de lo que hablo", en: "i remind myself that i know what i'm talking about", category: "opinion" },
          { es: "respiro hondo tres veces", en: "i take three deep breaths", category: "activity" },
          { es: "confío en la estructura que armé", en: "i trust the structure i built", category: "opinion" },
        ],
      },
      {
        stem: "Volviendo a lo de…",
        english: "Getting back to… / Returning to…",
        completions: [
          { es: "la práctica, salió bien ayer", en: "the practice, it went well yesterday", category: "opinion" },
          { es: "los datos, son sólidos", en: "the data, it's solid", category: "opinion" },
          { es: "el cierre, ya tengo la frase final", en: "the close, i already have the closing line", category: "activity" },
          { es: "marlana, ella dijo que estoy lista", en: "marlana, she said i'm ready", category: "opinion" },
          { es: "los nervios, desaparecerán al empezar", en: "the nerves, they'll disappear when i start", category: "opinion" },
        ],
      },
      {
        stem: "En resumen…",
        english: "In summary… / To sum up…",
        completions: [
          { es: "estoy preparada aunque nerviosa", en: "i'm prepared even though nervous", category: "opinion" },
          { es: "lo peor que puede pasar es una pregunta difícil", en: "the worst that can happen is a hard question", category: "opinion" },
          { es: "mañana muestro meses de trabajo", en: "tomorrow i show months of work", category: "activity" },
          { es: "tengo estructura, datos y práctica", en: "i have structure, data, and practice", category: "other" },
          { es: "voy a dormir lo mejor que pueda", en: "i'm going to sleep as well as i can", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 146,
    theme: "El gran día",
    stems: [
      {
        stem: "Primero que nada…",
        english: "First of all…",
        completions: [
          { es: "empecé con una pregunta al público", en: "i started with a question to the audience", category: "activity" },
          { es: "agradecí y presenté el tema", en: "i thanked them and presented the topic", category: "activity" },
          { es: "mostré el gráfico más impactante", en: "i showed the most impactful chart", category: "activity" },
          { es: "respiré antes de hablar", en: "i breathed before speaking", category: "activity" },
          { es: "saludé a todos con calma", en: "i greeted everyone calmly", category: "activity" },
        ],
      },
      {
        stem: "En cuanto a…",
        english: "As for… / Regarding…",
        completions: [
          { es: "las preguntas, hubo dos sobre el presupuesto", en: "questions, there were two about the budget", category: "other" },
          { es: "el público, parecían interesados", en: "the audience, they seemed interested", category: "opinion" },
          { es: "los datos, nadie discutió los números", en: "the data, nobody disputed the numbers", category: "other" },
          { es: "el tiempo, terminé en nueve minutos", en: "time, i finished in nine minutes", category: "time" },
          { es: "el tono, me sentí segura", en: "the tone, i felt confident", category: "opinion" },
        ],
      },
      {
        stem: "Por último…",
        english: "Lastly… / Finally…",
        completions: [
          { es: "la directora aplaudió y pidió el plan por escrito", en: "the principal applauded and asked for the plan in writing", category: "other" },
          { es: "propuse el comité y cinco personas levantaron la mano", en: "i proposed the committee and five people raised their hands", category: "activity" },
          { es: "cerré con la frase que practicamos", en: "i closed with the line we practiced", category: "activity" },
          { es: "abrí espacio para preguntas", en: "i opened time for questions", category: "activity" },
          { es: "agradecí y salí aliviada", en: "i thanked them and left relieved", category: "activity" },
        ],
      },
      {
        stem: "Volviendo a lo de…",
        english: "Getting back to… / Returning to…",
        completions: [
          { es: "el presupuesto, expliqué que el piloto costó poco", en: "the budget, i explained the pilot cost little", category: "activity" },
          { es: "enero, conté cómo empezó todo", en: "january, i told how it all started", category: "activity" },
          { es: "los maestros, leí un testimonio en voz alta", en: "the teachers, i read a testimonial out loud", category: "activity" },
          { es: "los datos, repetí el número clave", en: "the data, i repeated the key number", category: "activity" },
          { es: "el piloto, dije cuánto duró", en: "the pilot, i said how long it lasted", category: "activity" },
        ],
      },
      {
        stem: "En resumen…",
        english: "In summary… / To sum up…",
        completions: [
          { es: "salió mejor de lo que esperaba", en: "it went better than i expected", category: "opinion" },
          { es: "convencí a casi todos", en: "i convinced almost everyone", category: "opinion" },
          { es: "diez minutos que valieron la pena", en: "ten minutes that were worth it", category: "opinion" },
          { es: "la directora quiere el plan por escrito", en: "the principal wants the plan in writing", category: "other" },
          { es: "marlana tenía razón sobre la estructura", en: "marlana was right about the structure", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 147,
    theme: "Repaso: ordenar las ideas",
    stems: [
      {
        stem: "Primero que nada…",
        english: "First of all…",
        completions: [
          { es: "la directora le pidió presentar el proyecto de lectura", en: "the principal asked her to present the reading project", category: "other" },
          { es: "reunió datos, practicó y armó diapositivas", en: "she gathered data, practiced, and built slides", category: "activity" },
          { es: "tenía diez minutos para convencer a todo el personal", en: "she had ten minutes to convince the whole staff", category: "time" },
          { es: "empezó con un esquema de tres partes", en: "she started with a three-part outline", category: "activity" },
          { es: "marlana la ayudó a ensayar", en: "marlana helped her rehearse", category: "activity" },
        ],
      },
      {
        stem: "En cuanto a…",
        english: "As for… / Regarding…",
        completions: [
          { es: "los datos, mostró una mejora clara en primaria", en: "the data, she showed a clear improvement in elementary", category: "other" },
          { es: "la práctica, ensayamos juntas dos veces", en: "the practice, we rehearsed together twice", category: "activity" },
          { es: "la estructura, usó intro, resultados y propuesta", en: "the structure, she used intro, results, and proposal", category: "other" },
          { es: "los nervios, desaparecieron al empezar", en: "the nerves, they disappeared when she started", category: "opinion" },
          { es: "el piloto, los números hablaron solos", en: "the pilot, the numbers spoke for themselves", category: "opinion" },
        ],
      },
      {
        stem: "Por último…",
        english: "Lastly… / Finally…",
        completions: [
          { es: "la directora aprobó expandir el programa", en: "the principal approved expanding the program", category: "other" },
          { es: "cinco colegas se ofrecieron para el comité", en: "five colleagues volunteered for the committee", category: "other" },
          { es: "cerró con una propuesta concreta para el trimestre", en: "she closed with a concrete proposal for the quarter", category: "activity" },
          { es: "pidió el plan por escrito", en: "they asked for the plan in writing", category: "other" },
          { es: "celebramos en la sala de maestros", en: "we celebrated in the teachers' lounge", category: "activity" },
        ],
      },
      {
        stem: "Volviendo a lo de…",
        english: "Getting back to… / Returning to…",
        completions: [
          { es: "los nervios, desaparecieron al empezar", en: "the nerves, they disappeared when she started", category: "opinion" },
          { es: "el piloto, los números hablaron solos", en: "the pilot, the numbers spoke for themselves", category: "opinion" },
          { es: "la práctica, cada consejo sirvió", en: "the practice, every tip helped", category: "opinion" },
          { es: "marlana, su feedback fue clave", en: "marlana, her feedback was key", category: "opinion" },
          { es: "la estructura, salvó la presentación", en: "the structure, it saved the presentation", category: "opinion" },
        ],
      },
      {
        stem: "En resumen…",
        english: "In summary… / To sum up…",
        completions: [
          { es: "priya presentó, convenció y ya tienen plan para el trimestre", en: "priya presented, convinced, and they already have a quarter plan", category: "other" },
          { es: "una semana de preparación para diez minutos que cambiaron el rumbo", en: "a week of prep for ten minutes that changed the course", category: "other" },
          { es: "ordenar las ideas le salvó la presentación", en: "organizing ideas saved her presentation", category: "opinion" },
          { es: "datos, estructura y práctica ganaron", en: "data, structure, and practice won", category: "opinion" },
          { es: "el proyecto de lectura sigue adelante", en: "the reading project moves forward", category: "other" },
        ],
      },
    ],
  },
];
