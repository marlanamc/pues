import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 6 — "Sin embargo" (days 127–133).
 * Stems must match content/drafts/week6-frames.ts for the same day.
 */
export const week6SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 127,
    theme: "La noticia",
    stems: [
      {
        stem: "Sin embargo…",
        english: "However… / Nevertheless…",
        hints: {
          que: [
            { es: "empieza el lunes", en: "it starts monday" },
            { es: "nadie avisó", en: "nobody warned us" },
          ],
        },
        completions: [
          { es: "el horario nuevo empieza el lunes", en: "the new schedule starts monday", category: "time" },
          { es: "nadie nos avisó con tiempo", en: "nobody told us in time", category: "other" },
          { es: "la directora insiste en el cambio", en: "the principal insists on the change", category: "other" },
          { es: "van a implementarlo igual", en: "they're going to implement it anyway", category: "other" },
          { es: "quedaron muchas dudas", en: "many questions remained", category: "other" },
        ],
      },
      {
        stem: "Aunque…",
        english: "Although… / Even though…",
        completions: [
          { es: "entiendo la razón, me parece apresurado", en: "i understand the reason, it seems rushed", category: "opinion" },
          { es: "la directora lo explicó, quedaron dudas", en: "the principal explained it, questions remained", category: "other" },
          { es: "prometieron consultarnos, decidieron solos", en: "they promised to consult us, they decided alone", category: "other" },
          { es: "suena lógico, duele igual", en: "it sounds logical, it still hurts", category: "opinion" },
          { es: "es por el bien de todos, nadie está contento", en: "it's for everyone's good, nobody's happy", category: "opinion" },
        ],
      },
      {
        stem: "En cambio…",
        english: "On the other hand… / Instead…",
        completions: [
          { es: "el almuerzo ahora es a las once y media", en: "lunch is now at eleven thirty", category: "time" },
          { es: "perdemos el bloque largo de la tarde", en: "we lose the long afternoon block", category: "time" },
          { es: "las clases empiezan quince minutos antes", en: "classes start fifteen minutes earlier", category: "time" },
          { es: "el recreo se acorta", en: "recess gets shorter", category: "time" },
          { es: "todo el horario quedó distinto", en: "the whole schedule ended up different", category: "other" },
        ],
      },
      {
        stem: "A pesar de…",
        english: "Despite… / In spite of…",
        completions: [
          { es: "las quejas, van a implementarlo", en: "the complaints, they're going to implement it", category: "other" },
          { es: "la reunión de ayer, no cambiaron nada", en: "yesterday's meeting, they changed nothing", category: "other" },
          { es: "los correos, la decisión ya está hecha", en: "the emails, the decision is already made", category: "other" },
          { es: "el sindicato, no hubo cambios", en: "the union, there were no changes", category: "other" },
          { es: "las protestas, el lunes empieza igual", en: "the protests, monday starts the same", category: "time" },
        ],
      },
      {
        stem: "Por otro lado…",
        english: "On the other hand…",
        completions: [
          { es: "los bloques largos ayudan en ciencias", en: "longer blocks help in science", category: "other" },
          { es: "algunos maestros ven ventajas", en: "some teachers see advantages", category: "opinion" },
          { es: "el almuerzo temprano libera la tarde", en: "early lunch frees up the afternoon", category: "time" },
          { es: "hay menos transiciones entre clases", en: "there are fewer transitions between classes", category: "other" },
          { es: "puede funcionar con el tiempo", en: "it might work with time", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 128,
    theme: "El almuerzo",
    stems: [
      {
        stem: "Sin embargo…",
        english: "However… / Nevertheless…",
        completions: [
          { es: "la fila del comedor no bajó", en: "the cafeteria line didn't get shorter", category: "other" },
          { es: "los niños siguen con hambre a las dos", en: "the kids are still hungry at two", category: "time" },
          { es: "la cocina no estaba lista", en: "the kitchen wasn't ready", category: "other" },
          { es: "el caos del almuerzo continúa", en: "the lunch chaos continues", category: "other" },
          { es: "prometieron mejor fila y no pasó", en: "they promised a better line and it didn't happen", category: "other" },
        ],
      },
      {
        stem: "Aunque…",
        english: "Although… / Even though…",
        completions: [
          { es: "comen más temprano, piden snack tarde", en: "they eat earlier, they ask for snack late", category: "food" },
          { es: "dijeron que habría más tiempo, la fila es igual", en: "they said there'd be more time, the line is the same", category: "other" },
          { es: "el horario cambió, el menú sigue igual", en: "the schedule changed, the menu stays the same", category: "food" },
          { es: "hay más personal, no alcanza", en: "there's more staff, it's not enough", category: "other" },
          { es: "movieron el almuerzo, el hambre no se movió", en: "they moved lunch, the hunger didn't move", category: "food" },
        ],
      },
      {
        stem: "En cambio…",
        english: "On the other hand… / Instead…",
        completions: [
          { es: "el recreo se acortó diez minutos", en: "recess got ten minutes shorter", category: "time" },
          { es: "segundo grado almuerza antes que quinto", en: "second grade eats before fifth", category: "other" },
          { es: "ya no hay tiempo para la fila larga", en: "there's no time for the long line anymore", category: "other" },
          { es: "el almuerzo es a las once y media", en: "lunch is at eleven thirty", category: "time" },
          { es: "la cafetería cierra más temprano", en: "the cafeteria closes earlier", category: "time" },
        ],
      },
      {
        stem: "A pesar de…",
        english: "Despite… / In spite of…",
        completions: [
          { es: "los letreros, van al salón equivocado", en: "the signs, they go to the wrong room", category: "other" },
          { es: "la ayuda extra, el caos continúa", en: "the extra help, the chaos continues", category: "other" },
          { es: "las quejas de las mamás, no mueven el almuerzo", en: "the moms' complaints, they won't move lunch", category: "other" },
          { es: "los mapas, se pierden igual", en: "the maps, they get lost anyway", category: "other" },
          { es: "el entrenamiento, la fila es un desastre", en: "the training, the line is a mess", category: "other" },
        ],
      },
      {
        stem: "Por otro lado…",
        english: "On the other hand…",
        completions: [
          { es: "la cafetería está más tranquila después de las doce", en: "the cafeteria is quieter after twelve", category: "time" },
          { es: "los maestros almuerzan sin tanta prisa", en: "teachers lunch without so much rush", category: "activity" },
          { es: "hay menos gente a las once y media", en: "there are fewer people at eleven thirty", category: "other" },
          { es: "el personal come en paz", en: "the staff eats in peace", category: "activity" },
          { es: "la tarde queda más libre", en: "the afternoon is freer", category: "time" },
        ],
      },
    ],
  },
  {
    day: 129,
    theme: "Los maestros",
    stems: [
      {
        stem: "Sin embargo…",
        english: "However… / Nevertheless…",
        completions: [
          { es: "mi planificación ahora es a las siete", en: "my planning period is now at seven", category: "time" },
          { es: "dos reuniones caen en el mismo bloque", en: "two meetings fall in the same block", category: "time" },
          { es: "perdimos el tiempo compartido con priya", en: "we lost shared time with priya", category: "other" },
          { es: "no hay bloque libre en la mañana", en: "there's no free block in the morning", category: "time" },
          { es: "calificar es casi imposible", en: "grading is almost impossible", category: "activity" },
        ],
      },
      {
        stem: "Aunque…",
        english: "Although… / Even though…",
        completions: [
          { es: "tratamos de adaptarnos, es difícil calificar", en: "we're trying to adapt, grading is hard", category: "activity" },
          { es: "prometieron flexibilidad, el calendario es rígido", en: "they promised flexibility, the calendar is rigid", category: "other" },
          { es: "compartimos salón, ya no coincidimos", en: "we share a room, we no longer overlap", category: "other" },
          { es: "entendemos la razón, duele igual", en: "we understand the reason, it still hurts", category: "opinion" },
          { es: "hay bloques largos, falta planificar", en: "there are long blocks, we lack time to plan", category: "other" },
        ],
      },
      {
        stem: "En cambio…",
        english: "On the other hand… / Instead…",
        completions: [
          { es: "planifico en la tarde, cuando estoy agotada", en: "i plan in the afternoon when i'm exhausted", category: "time" },
          { es: "la reunión de departamento pasó al miércoles", en: "the department meeting moved to wednesday", category: "time" },
          { es: "el bloque libre de la mañana desapareció", en: "the morning free block disappeared", category: "time" },
          { es: "califico en casa, no en la escuela", en: "i grade at home, not at school", category: "activity" },
          { es: "el miércoles reemplazó al jueves", en: "wednesday replaced thursday", category: "time" },
        ],
      },
      {
        stem: "A pesar de…",
        english: "Despite… / In spite of…",
        completions: [
          { es: "la petición del sindicato, no hubo cambios", en: "the union's petition, there were no changes", category: "other" },
          { es: "las horas extra, seguimos sin tiempo", en: "overtime, we still have no time", category: "time" },
          { es: "las quejas en la sala, el horario sigue igual", en: "complaints in the lounge, the schedule stays the same", category: "other" },
          { es: "los correos al distrito, nada cambió", en: "emails to the district, nothing changed", category: "other" },
          { es: "las reuniones extra, no hay solución", en: "extra meetings, there's no solution", category: "other" },
        ],
      },
      {
        stem: "Por otro lado…",
        english: "On the other hand…",
        completions: [
          { es: "los bloques de noventa minutos ayudan en laboratorio", en: "ninety-minute blocks help in the lab", category: "other" },
          { es: "hay menos cambios de salón", en: "there are fewer room changes", category: "other" },
          { es: "algunos prefieren planificar por la tarde", en: "some prefer planning in the afternoon", category: "opinion" },
          { es: "las clases largas permiten proyectos", en: "long classes allow projects", category: "activity" },
          { es: "menos interrupciones entre periodos", en: "fewer interruptions between periods", category: "other" },
        ],
      },
    ],
  },
  {
    day: 130,
    theme: "Los estudiantes",
    stems: [
      {
        stem: "Sin embargo…",
        english: "However… / Nevertheless…",
        completions: [
          { es: "la mitad de mi clase llegó al salón viejo", en: "half my class showed up at the old room", category: "other" },
          { es: "los de sexto siguen confundidos", en: "the sixth graders are still confused", category: "other" },
          { es: "tres estudiantes se perdieron entre bloques", en: "three students got lost between blocks", category: "other" },
          { es: "el caos en los pasillos continúa", en: "the hallway chaos continues", category: "other" },
          { es: "los mapas no resolvieron nada", en: "the maps didn't solve anything", category: "other" },
        ],
      },
      {
        stem: "Aunque…",
        english: "Although… / Even though…",
        completions: [
          { es: "repitimos el horario cinco veces, siguen preguntando", en: "we repeated the schedule five times, they keep asking", category: "other" },
          { es: "hay mapas en cada pasillo, no los leen", en: "there are maps on every hallway, they don't read them", category: "other" },
          { es: "les dimos copias, las pierden al primer día", en: "we gave them copies, they lose them on day one", category: "other" },
          { es: "hubo orientación, el lunes fue un desastre", en: "there was orientation, monday was a disaster", category: "time" },
          { es: "hay ayudantes, se pierden igual", en: "there are helpers, they get lost anyway", category: "other" },
        ],
      },
      {
        stem: "En cambio…",
        english: "On the other hand… / Instead…",
        completions: [
          { es: "el salón de arte ahora es el de música", en: "the art room is now the music room", category: "other" },
          { es: "la campana suena diez minutos antes", en: "the bell rings ten minutes earlier", category: "time" },
          { es: "el recreo de los grandes es al final", en: "the older kids' recess is at the end", category: "time" },
          { es: "los salones cambiaron de piso", en: "the rooms changed floors", category: "other" },
          { es: "el horario de sexto es distinto al de octavo", en: "sixth grade's schedule differs from eighth", category: "other" },
        ],
      },
      {
        stem: "A pesar de…",
        english: "Despite… / In spite of…",
        completions: [
          { es: "los ayudantes en los pasillos, el caos continúa", en: "helpers in the hallways, the chaos continues", category: "other" },
          { es: "la orientación del viernes, el lunes fue un desastre", en: "friday's orientation, monday was a disaster", category: "time" },
          { es: "los recordatorios por megáfono, van al piso equivocado", en: "megaphone reminders, they go to the wrong floor", category: "other" },
          { es: "los compañeros guía, se confunden igual", en: "buddy guides, they get confused anyway", category: "other" },
          { es: "las pulseras de colores, no funcionaron", en: "the color bracelets didn't work", category: "other" },
        ],
      },
      {
        stem: "Por otro lado…",
        english: "On the other hand…",
        completions: [
          { es: "los de octavo ya memorizaron el horario", en: "the eighth graders already memorized the schedule", category: "other" },
          { es: "algunos se ríen y lo toman como aventura", en: "some laugh and treat it as an adventure", category: "opinion" },
          { es: "los grandes ayudan a los pequeños", en: "the older kids help the little ones", category: "activity" },
          { es: "cada día hay menos preguntas", en: "each day there are fewer questions", category: "other" },
          { es: "los más chicos se adaptan rápido", en: "the little ones adapt fast", category: "other" },
        ],
      },
    ],
  },
  {
    day: 131,
    theme: "Las familias",
    stems: [
      {
        stem: "Sin embargo…",
        english: "However… / Nevertheless…",
        completions: [
          { es: "muchas familias llegaron tarde a la recogida", en: "many families arrived late to pickup", category: "time" },
          { es: "la fila de carros se formó en la puerta equivocada", en: "the car line formed at the wrong door", category: "other" },
          { es: "los correos no aclararon la hora nueva", en: "the emails didn't clarify the new time", category: "other" },
          { es: "el caos de la salida continúa", en: "the dismissal chaos continues", category: "other" },
          { es: "los letreros no ayudaron mucho", en: "the signs didn't help much", category: "other" },
        ],
      },
      {
        stem: "Aunque…",
        english: "Although… / Even though…",
        completions: [
          { es: "mandamos un correo el viernes, muchos no lo leyeron", en: "we sent an email friday, many didn't read it", category: "other" },
          { es: "pusimos letreros en la entrada, hubo confusión", en: "we put signs at the entrance, there was confusion", category: "other" },
          { es: "cambió solo quince minutos, desorganizó todo", en: "it changed only fifteen minutes, it disorganized everything", category: "time" },
          { es: "llamamos a las familias, algunas no contestaron", en: "we called families, some didn't answer", category: "activity" },
          { es: "hubo reunión con padres, las quejas siguen", en: "there was a parent meeting, complaints continue", category: "other" },
        ],
      },
      {
        stem: "En cambio…",
        english: "On the other hand… / Instead…",
        completions: [
          { es: "la salida de primaria es a las dos y cuarto", en: "elementary dismissal is at two fifteen", category: "time" },
          { es: "los autobuses salen por la calle de atrás", en: "buses leave through the back street", category: "other" },
          { es: "el estacionamiento quedó más lejos", en: "the parking lot ended up farther", category: "other" },
          { es: "la puerta de recogida cambió", en: "the pickup door changed", category: "other" },
          { es: "los papás entran por otro lado", en: "parents enter through another side", category: "other" },
        ],
      },
      {
        stem: "A pesar de…",
        english: "Despite… / In spite of…",
        completions: [
          { es: "los voluntarios en la puerta, la fila era un caos", en: "volunteers at the door, the line was chaos", category: "other" },
          { es: "las llamadas de la oficina, algunos no se enteraron", en: "office calls, some didn't find out", category: "other" },
          { es: "la reunión con padres, las quejas siguen llegando", en: "parent meeting, complaints keep coming", category: "other" },
          { es: "los avisos en la app, muchos no la usan", en: "notices in the app, many don't use it", category: "other" },
          { es: "el segundo aviso, la fila siguió igual", en: "the second notice, the line stayed the same", category: "other" },
        ],
      },
      {
        stem: "Por otro lado…",
        english: "On the other hand…",
        completions: [
          { es: "algunas mamás prefieren recoger más temprano", en: "some moms prefer picking up earlier", category: "opinion" },
          { es: "hay menos tráfico a las tres", en: "there's less traffic at three", category: "time" },
          { es: "los niños llegan con más luz del día", en: "kids get home with more daylight", category: "time" },
          { es: "algunas familias ya se acostumbraron", en: "some families already got used to it", category: "other" },
          { es: "menos espera en la fila tarde", en: "less waiting in the late line", category: "time" },
        ],
      },
    ],
  },
  {
    day: 132,
    theme: "Lo bueno",
    stems: [
      {
        stem: "Sin embargo…",
        english: "However… / Nevertheless…",
        completions: [
          { es: "después de una semana, el caos bajó", en: "after a week, the chaos went down", category: "time" },
          { es: "no todo salió mal como pensábamos", en: "not everything went as badly as we thought", category: "opinion" },
          { es: "algunos maestros ya ven ventajas", en: "some teachers already see advantages", category: "opinion" },
          { es: "el colegio sigue en pie", en: "the school is still standing", category: "other" },
          { es: "la asistencia no bajó", en: "attendance didn't drop", category: "other" },
        ],
      },
      {
        stem: "Aunque…",
        english: "Although… / Even though…",
        completions: [
          { es: "todavía hay problemas, la fila mejoró", en: "there are still problems, the line improved", category: "other" },
          { es: "el primer día fue un desastre, hoy fue tranquilo", en: "the first day was a disaster, today was calm", category: "time" },
          { es: "no es perfecto, los bloques largos funcionan", en: "it's not perfect, the long blocks work", category: "opinion" },
          { es: "siguen las quejas, bajó el caos", en: "complaints continue, the chaos went down", category: "other" },
          { es: "faltan ajustes, vamos mejorando", en: "adjustments remain, we're improving", category: "opinion" },
        ],
      },
      {
        stem: "En cambio…",
        english: "On the other hand… / Instead…",
        completions: [
          { es: "las tardes en el pasillo están más calmadas", en: "afternoons in the hallway are calmer", category: "other" },
          { es: "hay menos interrupciones entre clases", en: "there are fewer interruptions between classes", category: "other" },
          { es: "los laboratorios tienen tiempo de sobra", en: "the labs have plenty of time", category: "other" },
          { es: "menos gente corre en los pasillos", en: "fewer people run in the hallways", category: "other" },
          { es: "el almuerzo ya tiene rutina", en: "lunch already has a routine", category: "activity" },
        ],
      },
      {
        stem: "A pesar de…",
        english: "Despite… / In spite of…",
        completions: [
          { es: "las quejas iniciales, la asistencia no bajó", en: "initial complaints, attendance didn't drop", category: "other" },
          { es: "los correos enojados, la directora no revirtió", en: "angry emails, the principal didn't reverse it", category: "other" },
          { es: "todo el ruido, los estudiantes se adaptan", en: "all the noise, students are adapting", category: "other" },
          { es: "el caos del lunes, el viernes fue tranquilo", en: "monday's chaos, friday was calm", category: "time" },
          { es: "las dudas, el colegio funciona", en: "the doubts, the school functions", category: "other" },
        ],
      },
      {
        stem: "Por otro lado…",
        english: "On the other hand…",
        completions: [
          { es: "nos obligó a hablar más entre departamentos", en: "it forced us to talk more across departments", category: "activity" },
          { es: "las familias entendieron la hora de salida", en: "families understood the dismissal time", category: "time" },
          { es: "en un mes esto será la normalidad", en: "in a month this will be normal", category: "opinion" },
          { es: "descubrimos ventajas que no esperábamos", en: "we discovered advantages we didn't expect", category: "opinion" },
          { es: "el equipo se unió más", en: "the team came together more", category: "other" },
        ],
      },
    ],
  },
  {
    day: 133,
    theme: "Repaso: sin embargo",
    stems: [
      {
        stem: "Sin embargo…",
        english: "However… / Nevertheless…",
        completions: [
          { es: "después de una semana de caos, el colegio sigue en pie", en: "after a week of chaos, the school is still standing", category: "other" },
          { es: "la directora no va a revertir el horario", en: "the principal won't reverse the schedule", category: "other" },
          { es: "lo peor ya pasó", en: "the worst is already past", category: "time" },
          { es: "vamos aprendiendo poco a poco", en: "we're learning little by little", category: "activity" },
          { es: "el cambio se quedó", en: "the change stayed", category: "other" },
        ],
      },
      {
        stem: "Aunque…",
        english: "Although… / Even though…",
        completions: [
          { es: "entendemos la razón, el cambio fue brusco", en: "we understand the reason, the change was abrupt", category: "opinion" },
          { es: "hubo quejas de todos lados, también adaptación", en: "there were complaints everywhere, also adaptation", category: "other" },
          { es: "no fue perfecto, algunas cosas mejoraron", en: "it wasn't perfect, some things improved", category: "opinion" },
          { es: "fue difícil, sobrevivimos", en: "it was hard, we survived", category: "opinion" },
          { es: "nadie lo pidió, ya lo tenemos", en: "nobody asked for it, we have it now", category: "other" },
        ],
      },
      {
        stem: "En cambio…",
        english: "On the other hand… / Instead…",
        completions: [
          { es: "el almuerzo, la planificación y la salida quedaron distintos", en: "lunch, planning, and dismissal all ended up different", category: "other" },
          { es: "perdimos rutinas viejas y ganamos bloques largos", en: "we lost old routines and gained long blocks", category: "other" },
          { es: "todo el colegio vive en un horario nuevo", en: "the whole school lives on a new schedule", category: "other" },
          { es: "antes planificábamos juntas, ahora no", en: "before we planned together, now we don't", category: "other" },
          { es: "el lunes fue caos, el viernes casi normal", en: "monday was chaos, friday almost normal", category: "time" },
        ],
      },
      {
        stem: "A pesar de…",
        english: "Despite… / In spite of…",
        completions: [
          { es: "las quejas de maestros, padres y estudiantes, el cambio se quedó", en: "complaints from teachers, parents, and students, the change stayed", category: "other" },
          { es: "el caos del primer día, nadie faltó el martes", en: "first day's chaos, nobody was absent tuesday", category: "time" },
          { es: "los correos furiosos, la directora mantuvo la decisión", en: "furious emails, the principal kept the decision", category: "other" },
          { es: "toda la resistencia, el lunes dos fue mejor", en: "all the resistance, the second monday was better", category: "time" },
          { es: "las predicciones de desastre, el colegio funciona", en: "disaster predictions, the school works", category: "other" },
        ],
      },
      {
        stem: "Por otro lado…",
        english: "On the other hand…",
        completions: [
          { es: "nos obligó a comunicarnos mejor como equipo", en: "it forced us to communicate better as a team", category: "activity" },
          { es: "los bloques largos ya tienen defensores", en: "the long blocks already have defenders", category: "opinion" },
          { es: "en un mes esto va a parecer normal", en: "in a month this will seem normal", category: "opinion" },
          { es: "aprendimos a avisar mejor a las familias", en: "we learned to notify families better", category: "activity" },
          { es: "descubrimos que podemos adaptarnos", en: "we discovered we can adapt", category: "opinion" },
        ],
      },
    ],
  },
];
