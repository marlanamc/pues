import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 11 draft — "Seguir la historia" (days 162–168).
 *
 * Append to content/sentenceFormer/otono.ts. Stems must match week11-frames.ts.
 */
export const week11SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 162,
    theme: "El regreso",
    stems: [
      {
        stem: "La última vez…",
        english: "The last time…",
        hints: {
          que: [
            { es: "no sabía si volvería", en: "he didn't know if he'd return" },
            { es: "hablamos por videollamada", en: "we talked on video call" },
          ],
        },
        completions: [
          { es: "no sabía si se quedaría en chile", en: "he didn't know if he'd stay in Chile", category: "other" },
          { es: "hablamos por videollamada en agosto", en: "we talked on video call in August", category: "time" },
          { es: "todavía empacaba su apartamento", en: "he was still packing his apartment", category: "activity" },
          { es: "lo despidieron con abrazos", en: "they sent him off with hugs", category: "other" },
          { es: "prometió mandar fotos", en: "he promised to send photos", category: "other" },
        ],
      },
      {
        stem: "Mientras tanto…",
        english: "Meanwhile…",
        completions: [
          { es: "el señor ortiz cubrió sus clases", en: "Mr. Ortiz covered his classes", category: "other" },
          { es: "seguimos con la feria escolar", en: "we continued with the school fair", category: "activity" },
          { es: "él aprendía español en santiago", en: "he was learning Spanish in Santiago", category: "activity" },
          { es: "extrañábamos su café", en: "we missed his coffee", category: "opinion" },
          { es: "el ambiente era más serio", en: "the atmosphere was more serious", category: "opinion" },
        ],
      },
      {
        stem: "Al día siguiente…",
        english: "The next day…",
        completions: [
          { es: "apareció en la sala de maestros", en: "he showed up in the teachers' lounge", category: "other" },
          { es: "todos lo abrazaron", en: "everyone hugged him", category: "other" },
          { es: "retomó sus clases de ciencias", en: "he resumed his science classes", category: "activity" },
          { es: "trajo regalos para todos", en: "he brought gifts for everyone", category: "other" },
          { es: "sonrió como si nunca se hubiera ido", en: "he smiled as if he'd never left", category: "opinion" },
        ],
      },
      {
        stem: "Ahora resulta que…",
        english: "Now it turns out that…",
        completions: [
          { es: "regresó con barba y mochila llena", en: "he came back with a beard and full backpack", category: "other" },
          { es: "decidió volver después de seis meses", en: "he decided to return after six months", category: "time" },
          { es: "trae regalos para todo el colegio", en: "he brings gifts for the whole school", category: "other" },
          { es: "está más delgado pero feliz", en: "he's thinner but happy", category: "opinion" },
          { es: "volvió antes de lo previsto", en: "he returned sooner than expected", category: "time" },
        ],
      },
      {
        stem: "Desde entonces…",
        english: "Since then…",
        completions: [
          { es: "el ambiente en la sala mejoró", en: "the lounge atmosphere improved", category: "opinion" },
          { es: "vuelve a oler a café bueno", en: "it smells like good coffee again", category: "other" },
          { es: "no paramos de escuchar historias", en: "we don't stop hearing stories", category: "activity" },
          { es: "el equipo se siente completo", en: "the team feels complete", category: "opinion" },
          { es: "los lunes son tolerables otra vez", en: "Mondays are tolerable again", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 163,
    theme: "Lo que extrañábamos",
    stems: [
      {
        stem: "La última vez…",
        english: "The last time…",
        completions: [
          { es: "hizo café, dejó galletas", en: "he made coffee, left cookies", category: "food" },
          { es: "contó un chiste en la reunión", en: "he told a joke at the meeting", category: "activity" },
          { es: "nos hizo reír antes del examen", en: "he made us laugh before the exam", category: "activity" },
          { es: "animó toda la sala", en: "he livened up the whole lounge", category: "activity" },
          { es: "organizó el turno de café", en: "he organized the coffee shift", category: "activity" },
        ],
      },
      {
        stem: "Mientras tanto…",
        english: "Meanwhile…",
        completions: [
          { es: "las reuniones eran más aburridas", en: "meetings were more boring", category: "opinion" },
          { es: "el señor ortiz hacía el café", en: "Mr. Ortiz made the coffee", category: "activity" },
          { es: "todos notamos que faltaba algo", en: "everyone noticed something was missing", category: "opinion" },
          { es: "nadie contaba chistes malos", en: "nobody told bad jokes", category: "activity" },
          { es: "el ambiente era más callado", en: "the atmosphere was quieter", category: "opinion" },
        ],
      },
      {
        stem: "Al día siguiente…",
        english: "The next day…",
        completions: [
          { es: "de irse, ortiz tomó su turno", en: "after he left, Ortiz took his shift", category: "other" },
          { es: "alguien preguntó quién haría café", en: "someone asked who would make coffee", category: "other" },
          { es: "la reunión se sintió más larga", en: "the meeting felt longer", category: "opinion" },
          { es: "buscaron a alguien para animar", en: "they looked for someone to liven things up", category: "activity" },
          { es: "extrañamos su risa", en: "we missed his laugh", category: "opinion" },
        ],
      },
      {
        stem: "Ahora resulta que…",
        english: "Now it turns out that…",
        completions: [
          { es: "se ofreció para retomar el café", en: "he offered to take back coffee duty", category: "activity" },
          { es: "trae galletas otra vez", en: "he brings cookies again", category: "food" },
          { es: "los lunes vuelven a ser tolerables", en: "Mondays are tolerable again", category: "opinion" },
          { es: "quiere hacer el turno esta semana", en: "he wants to do the shift this week", category: "activity" },
          { es: "volvió con más chistes", en: "he came back with more jokes", category: "other" },
        ],
      },
      {
        stem: "Desde entonces…",
        english: "Since then…",
        completions: [
          { es: "ortiz hace el café — no es lo mismo", en: "Ortiz makes coffee — it's not the same", category: "opinion" },
          { es: "todos notamos su ausencia", en: "everyone noticed his absence", category: "opinion" },
          { es: "extrañamos su sentido del humor", en: "we missed his sense of humor", category: "opinion" },
          { es: "el turno de café quedó vacío", en: "the coffee shift was empty", category: "other" },
          { es: "aprendimos a no darlo por sentado", en: "we learned not to take him for granted", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 164,
    theme: "La primera clase",
    stems: [
      {
        stem: "La última vez…",
        english: "The last time…",
        completions: [
          { es: "enseñó, lo despidieron con cartas", en: "he taught, they sent him off with letters", category: "other" },
          { es: "estuvo frente al salón en mayo", en: "he was in front of the classroom in May", category: "time" },
          { es: "dejó un experimento a medias", en: "he left an experiment half-done", category: "activity" },
          { es: "sus estudiantes lloraron un poco", en: "his students cried a little", category: "other" },
          { es: "prometió volver pronto", en: "he promised to return soon", category: "other" },
        ],
      },
      {
        stem: "Mientras tanto…",
        english: "Meanwhile…",
        completions: [
          { es: "ortiz le dejó notas de lo que cambió", en: "Ortiz left him notes on what changed", category: "other" },
          { es: "el plan de estudios avanzó sin él", en: "the curriculum moved on without him", category: "other" },
          { es: "sus estudiantes preguntaban cuándo volvería", en: "his students asked when he'd return", category: "other" },
          { es: "alguien cubrió sus clases de ciencias", en: "someone covered his science classes", category: "activity" },
          { es: "el experimento quedó pendiente", en: "the experiment was left pending", category: "other" },
        ],
      },
      {
        stem: "Al día siguiente…",
        english: "The next day…",
        completions: [
          { es: "de llegar, ya estaba frente al salón", en: "after arriving, he was already in front of class", category: "activity" },
          { es: "lo recibieron con aplausos", en: "they received him with applause", category: "other" },
          { es: "bromeó al entrar y se adaptó rápido", en: "he joked on entry and adapted fast", category: "activity" },
          { es: "retomó el experimento a medias", en: "he picked up the half-done experiment", category: "activity" },
          { es: "los estudiantes gritaron su nombre", en: "the students shouted his name", category: "other" },
        ],
      },
      {
        stem: "Ahora resulta que…",
        english: "Now it turns out that…",
        completions: [
          { es: "se adapta más rápido de lo pensado", en: "he adapts faster than we thought", category: "opinion" },
          { es: "los estudiantes están encantados", en: "the students are delighted", category: "opinion" },
          { es: "retomó el experimento que dejó", en: "he picked up the experiment he left", category: "activity" },
          { es: "enseña con la misma energía", en: "he teaches with the same energy", category: "opinion" },
          { es: "ya conoce los nombres nuevos", en: "he already knows the new names", category: "other" },
        ],
      },
      {
        stem: "Desde entonces…",
        english: "Since then…",
        completions: [
          { es: "se está poniendo al día con el plan", en: "he's catching up on the curriculum", category: "activity" },
          { es: "enseña con la misma energía de antes", en: "he teaches with the same energy as before", category: "opinion" },
          { es: "los estudiantes de ciencias sonríen más", en: "science students smile more", category: "opinion" },
          { es: "revisa las notas de ortiz cada noche", en: "he reviews Ortiz's notes every night", category: "activity" },
          { es: "el salón vuelve a sentirse vivo", en: "the classroom feels alive again", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 165,
    theme: "Historias de Chile",
    stems: [
      {
        stem: "La última vez…",
        english: "The last time…",
        completions: [
          { es: "comimos juntos, no paró de contar", en: "we ate together, he didn't stop telling stories", category: "activity" },
          { es: "imitó el acento chileno", en: "he imitated the Chilean accent", category: "activity" },
          { es: "nos enseñó fotos del mercado", en: "he showed us market photos", category: "activity" },
          { es: "habló del océano una hora", en: "he talked about the ocean for an hour", category: "activity" },
          { es: "trajo fruta seca de recuerdo", en: "he brought dried fruit as a souvenir", category: "food" },
        ],
      },
      {
        stem: "Mientras tanto…",
        english: "Meanwhile…",
        completions: [
          { es: "compraba fruta en el mercado central", en: "he was buying fruit at the central market", category: "activity" },
          { es: "probaba comida que nunca había comido", en: "he tried food he'd never eaten", category: "food" },
          { es: "caminaba junto al océano", en: "he walked along the ocean", category: "activity" },
          { es: "enseñaba en un colegio de santiago", en: "he taught at a school in Santiago", category: "activity" },
          { es: "aprendía modismos chilenos", en: "he was learning Chilean expressions", category: "activity" },
        ],
      },
      {
        stem: "Al día siguiente…",
        english: "The next day…",
        completions: [
          { es: "trajo más fotos del océano", en: "he brought more ocean photos", category: "activity" },
          { es: "enseñó una palabra chilena", en: "he taught a Chilean word", category: "activity" },
          { es: "contó otra anécdota del mercado", en: "he told another market anecdote", category: "activity" },
          { es: "improvisó el acento otra vez", en: "he improvised the accent again", category: "activity" },
          { es: "compartió una receta chilena", en: "he shared a Chilean recipe", category: "food" },
        ],
      },
      {
        stem: "Ahora resulta que…",
        english: "Now it turns out that…",
        completions: [
          { es: "imita el acento en cada almuerzo", en: "he imitates the accent at every lunch", category: "activity" },
          { es: "extraña el mar más de lo pensado", en: "he misses the sea more than we thought", category: "opinion" },
          { es: "trae recetas que quiere probar", en: "he brings recipes he wants to try", category: "food" },
          { es: "sabe más español de lo esperado", en: "he knows more Spanish than expected", category: "opinion" },
          { es: "el océano sale en cada charla", en: "the ocean comes up in every chat", category: "other" },
        ],
      },
      {
        stem: "Desde entonces…",
        english: "Since then…",
        completions: [
          { es: "el almuerzo dura el doble", en: "lunch lasts twice as long", category: "time" },
          { es: "aprendemos palabras chilenas sin querer", en: "we learn Chilean words without trying", category: "activity" },
          { es: "el océano aparece en cada conversación", en: "the ocean appears in every conversation", category: "other" },
          { es: "diego es el centro de la mesa", en: "Diego is the center of the table", category: "opinion" },
          { es: "tenemos ganas de visitar chile", en: "we want to visit Chile", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 166,
    theme: "El cambio",
    stems: [
      {
        stem: "La última vez…",
        english: "The last time…",
        completions: [
          { es: "no hablaba de intercambios escolares", en: "he wasn't talking about school exchanges", category: "other" },
          { es: "era más impulsivo y menos reflexivo", en: "he was more impulsive and less reflective", category: "opinion" },
          { es: "su plan era sobrevivir el invierno", en: "his plan was to survive the winter", category: "other" },
          { es: "no pensaba en proyectos internacionales", en: "he didn't think about international projects", category: "other" },
          { es: "solo quería la aventura", en: "he just wanted the adventure", category: "opinion" },
        ],
      },
      {
        stem: "Mientras tanto…",
        english: "Meanwhile…",
        completions: [
          { es: "enseñaba en un colegio de santiago", en: "he was teaching at a school in Santiago", category: "activity" },
          { es: "aprendió a ver el aula desde afuera", en: "he learned to see the classroom from outside", category: "opinion" },
          { es: "maduró más de lo esperado", en: "he matured more than we expected", category: "opinion" },
          { es: "conoció maestros de otro país", en: "he met teachers from another country", category: "other" },
          { es: "pensó en un intercambio escolar", en: "he thought about a school exchange", category: "activity" },
        ],
      },
      {
        stem: "Al día siguiente…",
        english: "The next day…",
        completions: [
          { es: "de la propuesta, la directora apoyó", en: "after the proposal, the principal supported it", category: "other" },
          { es: "varios maestros se entusiasmaron", en: "several teachers got excited", category: "opinion" },
          { es: "empezó a buscar contactos en chile", en: "he started looking for contacts in Chile", category: "activity" },
          { es: "escribió un borrador del plan", en: "he wrote a draft of the plan", category: "activity" },
          { es: "compartió la idea en la reunión", en: "he shared the idea at the meeting", category: "activity" },
        ],
      },
      {
        stem: "Ahora resulta que…",
        english: "Now it turns out that…",
        completions: [
          { es: "propuso un intercambio con santiago", en: "he proposed an exchange with Santiago", category: "activity" },
          { es: "regresó más calmado pero con más ideas", en: "he came back calmer but with more ideas", category: "opinion" },
          { es: "la directora lo apoya en principio", en: "the principal supports it in principle", category: "other" },
          { es: "trae otra perspectiva al equipo", en: "he brings a different perspective to the team", category: "opinion" },
          { es: "quiere conectar dos colegios", en: "he wants to connect two schools", category: "activity" },
        ],
      },
      {
        stem: "Desde entonces…",
        english: "Since then…",
        completions: [
          { es: "está entusiasmado con el intercambio", en: "he's enthusiastic about the exchange", category: "opinion" },
          { es: "trae otra perspectiva a cada reunión", en: "he brings a different perspective to each meeting", category: "opinion" },
          { es: "el equipo habla más de proyectos internacionales", en: "the team talks more about international projects", category: "activity" },
          { es: "escribe correos a chile cada semana", en: "he writes emails to Chile every week", category: "activity" },
          { es: "la directora pidió un plan formal", en: "the principal asked for a formal plan", category: "other" },
        ],
      },
    ],
  },
  {
    day: 167,
    theme: "La bienvenida",
    stems: [
      {
        stem: "La última vez…",
        english: "The last time…",
        completions: [
          { es: "celebramos con diego, fue su despedida", en: "we celebrated with Diego, it was his farewell", category: "other" },
          { es: "brindamos pensando que sería un año", en: "we toasted thinking it would be a year", category: "time" },
          { es: "le dimos un mapa de santiago", en: "we gave him a map of Santiago", category: "other" },
          { es: "lloramos un poco al despedirlo", en: "we cried a little saying goodbye", category: "opinion" },
          { es: "prometimos mantenernos en contacto", en: "we promised to stay in touch", category: "other" },
        ],
      },
      {
        stem: "Mientras tanto…",
        english: "Meanwhile…",
        completions: [
          { es: "organizamos la cena toda la semana", en: "we organized the dinner all week", category: "activity" },
          { es: "cada maestro traía algo para compartir", en: "each teacher brought something to share", category: "activity" },
          { es: "los estudiantes hicieron una tarjeta grande", en: "the students made a big card", category: "activity" },
          { es: "reservamos el restaurante del barrio", en: "we reserved the neighborhood restaurant", category: "activity" },
          { es: "compramos un regalo grupal", en: "we bought a group gift", category: "activity" },
        ],
      },
      {
        stem: "Al día siguiente…",
        english: "The next day…",
        completions: [
          { es: "retomó su turno de café solo", en: "he resumed his coffee shift on his own", category: "activity" },
          { es: "dijo que se sintió de vuelta en casa", en: "he said he felt back home", category: "opinion" },
          { es: "el lunes volvió a oler a café bueno", en: "Monday smelled like good coffee again", category: "other" },
          { es: "llegó temprano con galletas", en: "he arrived early with cookies", category: "food" },
          { es: "contó cómo fue la cena otra vez", en: "he told how the dinner went again", category: "activity" },
        ],
      },
      {
        stem: "Ahora resulta que…",
        english: "Now it turns out that…",
        completions: [
          { es: "el lunes vuelve a oler a café bueno", en: "Monday smells like good coffee again", category: "other" },
          { es: "casi todo el colegio vino a la cena", en: "almost the whole school came to dinner", category: "other" },
          { es: "seis meses fuera no lo cambiaron del todo", en: "six months away didn't change him completely", category: "opinion" },
          { es: "brindamos hasta tarde el viernes", en: "we toasted until late on Friday", category: "activity" },
          { es: "diego es diego otra vez", en: "Diego is Diego again", category: "opinion" },
        ],
      },
      {
        stem: "Desde entonces…",
        english: "Since then…",
        completions: [
          { es: "el equipo se siente completo otra vez", en: "the team feels complete again", category: "opinion" },
          { es: "diego planea el intercambio con entusiasmo", en: "Diego plans the exchange with enthusiasm", category: "activity" },
          { es: "las cenas del viernes incluyen más anécdotas", en: "Friday dinners include more anecdotes", category: "activity" },
          { es: "el café de la mañana es sagrado otra vez", en: "morning coffee is sacred again", category: "opinion" },
          { es: "todos sonríen más en la sala", en: "everyone smiles more in the lounge", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 168,
    theme: "Repaso: seguir la historia",
    stems: [
      {
        stem: "La última vez…",
        english: "The last time…",
        completions: [
          { es: "no sabía si se quedaría en chile", en: "he didn't know if he'd stay in Chile", category: "other" },
          { es: "hablamos, empacaba para santiago", en: "we talked, he was packing for Santiago", category: "activity" },
          { es: "nos despedimos pensando en un año", en: "we said goodbye thinking it would be a year", category: "time" },
          { es: "lo vimos en el aeropuerto", en: "we saw him at the airport", category: "other" },
          { es: "prometió volver para navidad", en: "he promised to return for Christmas", category: "other" },
        ],
      },
      {
        stem: "Mientras tanto…",
        english: "Meanwhile…",
        completions: [
          { es: "extrañábamos su café y sus chistes", en: "we missed his coffee and jokes", category: "opinion" },
          { es: "ortiz cubrió sus clases", en: "Ortiz covered his classes", category: "other" },
          { es: "él enseñaba en santiago", en: "he was teaching in Santiago", category: "activity" },
          { es: "el ambiente era más serio", en: "the atmosphere was more serious", category: "opinion" },
          { es: "aprendió español y maduró", en: "he learned Spanish and matured", category: "activity" },
        ],
      },
      {
        stem: "Al día siguiente…",
        english: "The next day…",
        completions: [
          { es: "de volver, ya estaba en clase", en: "after returning, he was already in class", category: "activity" },
          { es: "retomó su turno de café", en: "he resumed his coffee shift", category: "activity" },
          { es: "apareció con barba y sonrisa enorme", en: "he showed up with a beard and huge smile", category: "other" },
          { es: "todos lo abrazaron en la sala", en: "everyone hugged him in the lounge", category: "other" },
          { es: "contó la primera anécdota de chile", en: "he told the first Chile anecdote", category: "activity" },
        ],
      },
      {
        stem: "Ahora resulta que…",
        english: "Now it turns out that…",
        completions: [
          { es: "propuso un intercambio escolar", en: "he proposed a school exchange", category: "activity" },
          { es: "imita el acento chileno en cada almuerzo", en: "he imitates the Chilean accent at every lunch", category: "activity" },
          { es: "el lunes vuelve a oler a café bueno", en: "Monday smells like good coffee again", category: "other" },
          { es: "regresó transformado pero igual", en: "he came back transformed but the same", category: "opinion" },
          { es: "la directora apoya su idea", en: "the principal supports his idea", category: "other" },
        ],
      },
      {
        stem: "Desde entonces…",
        english: "Since then…",
        completions: [
          { es: "la directora apoya el intercambio", en: "the principal supports the exchange", category: "other" },
          { es: "el equipo se siente completo otra vez", en: "the team feels complete again", category: "opinion" },
          { es: "no paramos de escuchar historias de chile", en: "we don't stop hearing Chile stories", category: "activity" },
          { es: "diego planifica el futuro del colegio", en: "Diego plans the school's future", category: "activity" },
          { es: "encajó como si nunca se hubiera ido", en: "he fit in as if he'd never left", category: "opinion" },
        ],
      },
    ],
  },
];
