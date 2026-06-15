/**
 * Marcadores — Spanish time markers (marcadores temporales) and the tense each
 * one calls for. A standalone game; it reuses La Línea's timeline shapes as a
 * visual aid (a marker's `marks` reuses the `Mark` type from laLinea).
 *
 * Dialect: region-neutral / Latin-American-safe.
 */

import type { Mark } from "@/content/laLinea";

export type Marcador = {
  /** the marker, exactly as it appears in `example` */
  word: string;
  meaning: string;
  /** English gloss of the example sentence */
  en: string;
  tenseName: string;
  example: string;
  /** conjugated verb substring to underline in `example` */
  verbPhrase: string;
  marks: Mark[];
  note?: string;
};

export type ProduccionOption = {
  conjugated: string;
  tenseName: string;
  correct: boolean;
};

export type ProduccionItem = {
  /** sentence containing the marker and a "___" blank */
  sentence: string;
  /** marker substring to highlight */
  marker: string;
  /** base verb shown in (paréntesis) */
  base: string;
  options: ProduccionOption[];
  tenseName: string;
  en: string;
  why: string;
};

export type MarcadorGroup = {
  id: string;
  label: string;
  tenseName: string;
  description: string;
  markers: Marcador[];
  production: ProduccionItem[];
};

export type Scope = { id: string; label: string };

export const SCOPES: Scope[] = [
  { id: "all", label: "Todo" },
  { id: "preterito", label: "Pretérito" },
  { id: "imperfecto", label: "Imperfecto" },
  { id: "perfecto", label: "Perfectos" },
  { id: "presente", label: "Presente" },
  { id: "futuro", label: "Futuro" },
  { id: "modo", label: "Subj · Cond" },
];

export const marcadoresOverview = {
  pill: "Juego",
  title: "Marcadores.",
  gloss: "Las palabras de tiempo y el tiempo verbal que piden. Explora, empareja y completa.",
};

/* timeline shapes shared with La Línea */
const M_DOT_PAST: Mark[] = [{ kind: "dot", zone: "past", pos: 0.45 }];
const M_LINE_PAST: Mark[] = [{ kind: "line", zone: "past", pos: 0.45 }];
const M_DOTS_PAST: Mark[] = [{ kind: "dots", zone: "past" }];
const M_ARC: Mark[] = [{ kind: "arc", zone: "past", pos: 0.3, to: 0.5, toZone: "now" }];
const M_DOTS_NOW: Mark[] = [{ kind: "dots", zone: "now" }];
const M_DOT_FUT: Mark[] = [{ kind: "dot", zone: "future", pos: 0.5 }];
const M_WAVE: Mark[] = [{ kind: "wave", zone: "future", pos: 0.42 }];
const M_DIAMOND: Mark[] = [{ kind: "diamond", zone: "future", pos: 0.4 }];

export const GROUPS: MarcadorGroup[] = [
  /* ===== 1 · Pretérito ===== */
  {
    id: "preterito",
    label: "Pasado terminado",
    tenseName: "Pretérito",
    description: "Un momento puntual, terminado.",
    markers: [
      { word: "ayer", meaning: "Un día concreto del pasado, ya terminado.", en: "Yesterday I bought bread.", tenseName: "Pretérito", example: "Ayer compré pan.", verbPhrase: "compré", marks: M_DOT_PAST },
      { word: "anoche", meaning: "La noche pasada — un momento cerrado.", en: "Last night I watched a movie.", tenseName: "Pretérito", example: "Anoche vi una película.", verbPhrase: "vi", marks: M_DOT_PAST },
      { word: "la semana pasada", meaning: "Un período pasado ya cerrado.", en: "Last week I traveled to Miami.", tenseName: "Pretérito", example: "La semana pasada viajé a Miami.", verbPhrase: "viajé", marks: M_DOT_PAST },
      { word: "hace dos días", meaning: "Cuenta hacia atrás desde ahora hasta un punto cerrado.", en: "Two days ago I called the doctor.", tenseName: "Pretérito", example: "Hace dos días llamé al médico.", verbPhrase: "llamé", marks: M_DOT_PAST },
      { word: "el año pasado", meaning: "Un año concreto, ya terminado.", en: "Last year I finished school.", tenseName: "Pretérito", example: "El año pasado terminé la escuela.", verbPhrase: "terminé", marks: M_DOT_PAST },
      { word: "de repente", meaning: "Algo que ocurrió en un instante.", en: "Suddenly the alarm went off.", tenseName: "Pretérito", example: "De repente sonó la alarma.", verbPhrase: "sonó", marks: M_DOT_PAST },
    ],
    production: [
      { sentence: "Ayer ___ tacos con mi familia.", marker: "Ayer", base: "comer", tenseName: "Pretérito", en: "Yesterday I ate tacos with my family.", why: "«Ayer» marca un momento terminado: pretérito.", options: [
        { conjugated: "comí", tenseName: "Pretérito", correct: true },
        { conjugated: "como", tenseName: "Presente", correct: false },
        { conjugated: "comía", tenseName: "Imperfecto", correct: false },
        { conjugated: "comeré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "La semana pasada ___ al dentista.", marker: "La semana pasada", base: "ir", tenseName: "Pretérito", en: "Last week I went to the dentist.", why: "Un período pasado cerrado pide pretérito.", options: [
        { conjugated: "fui", tenseName: "Pretérito", correct: true },
        { conjugated: "voy", tenseName: "Presente", correct: false },
        { conjugated: "iba", tenseName: "Imperfecto", correct: false },
        { conjugated: "iré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Anoche ___ a mis amigos.", marker: "Anoche", base: "ver", tenseName: "Pretérito", en: "Last night I saw my friends.", why: "«Anoche» es un momento cerrado: pretérito.", options: [
        { conjugated: "vi", tenseName: "Pretérito", correct: true },
        { conjugated: "veo", tenseName: "Presente", correct: false },
        { conjugated: "veía", tenseName: "Imperfecto", correct: false },
        { conjugated: "veré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Hace tres días ___ tu carta.", marker: "Hace tres días", base: "recibir", tenseName: "Pretérito", en: "Three days ago I received your letter.", why: "«Hace + tiempo» apunta a un punto terminado: pretérito.", options: [
        { conjugated: "recibí", tenseName: "Pretérito", correct: true },
        { conjugated: "recibo", tenseName: "Presente", correct: false },
        { conjugated: "recibía", tenseName: "Imperfecto", correct: false },
        { conjugated: "he recibido", tenseName: "Pretérito perfecto", correct: false },
      ] },
    ],
  },

  /* ===== 2 · Imperfecto ===== */
  {
    id: "imperfecto",
    label: "Fondo del pasado",
    tenseName: "Imperfecto",
    description: "Costumbres y escenas que duran en el pasado.",
    markers: [
      { word: "De niña", meaning: "Una etapa de la vida — describe cómo eran las cosas.", en: "As a girl, I lived near the sea.", tenseName: "Imperfecto", example: "De niña, vivía cerca del mar.", verbPhrase: "vivía", marks: M_LINE_PAST },
      { word: "Mientras", meaning: "Dos cosas a la vez — el fondo en desarrollo.", en: "While I was driving, I listened to music.", tenseName: "Imperfecto", example: "Mientras manejaba, escuchaba música.", verbPhrase: "manejaba", marks: M_LINE_PAST },
      { word: "Antes", meaning: "Algo que era costumbre y ya no.", en: "I used to smoke a lot.", tenseName: "Imperfecto", example: "Antes fumaba mucho.", verbPhrase: "fumaba", marks: M_DOTS_PAST, note: "«Antes» = costumbre pasada (≈ used to)." },
      { word: "siempre", meaning: "Costumbre repetida en el pasado (con contexto de niñez).", en: "As a kid, I always played outside.", tenseName: "Imperfecto", example: "De pequeño, siempre jugaba afuera.", verbPhrase: "jugaba", marks: M_DOTS_PAST, note: "Aquí el contexto pasado convierte «siempre» en hábito del imperfecto." },
      { word: "Todos los veranos", meaning: "Un hábito que se repetía cada año.", en: "Every summer we went to the beach.", tenseName: "Imperfecto", example: "Todos los veranos íbamos a la playa.", verbPhrase: "íbamos", marks: M_DOTS_PAST },
      { word: "En aquella época", meaning: "Describe una situación que duraba en el pasado.", en: "Back then I worked at a café.", tenseName: "Imperfecto", example: "En aquella época trabajaba en un café.", verbPhrase: "trabajaba", marks: M_LINE_PAST },
    ],
    production: [
      { sentence: "De niño ___ al fútbol todos los días.", marker: "De niño", base: "jugar", tenseName: "Imperfecto", en: "As a boy, I played soccer every day.", why: "Una costumbre del pasado: imperfecto.", options: [
        { conjugated: "jugaba", tenseName: "Imperfecto", correct: true },
        { conjugated: "jugué", tenseName: "Pretérito", correct: false },
        { conjugated: "juego", tenseName: "Presente", correct: false },
        { conjugated: "jugaré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Mientras ___, cantaba en voz baja.", marker: "Mientras", base: "cocinar", tenseName: "Imperfecto", en: "While I was cooking, I sang quietly.", why: "Acción de fondo en desarrollo: imperfecto.", options: [
        { conjugated: "cocinaba", tenseName: "Imperfecto", correct: true },
        { conjugated: "cociné", tenseName: "Pretérito", correct: false },
        { conjugated: "cocino", tenseName: "Presente", correct: false },
        { conjugated: "cocinaré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Antes ___ en México.", marker: "Antes", base: "vivir", tenseName: "Imperfecto", en: "I used to live in Mexico.", why: "Estado pasado que duraba: imperfecto.", options: [
        { conjugated: "vivía", tenseName: "Imperfecto", correct: true },
        { conjugated: "viví", tenseName: "Pretérito", correct: false },
        { conjugated: "vivo", tenseName: "Presente", correct: false },
        { conjugated: "he vivido", tenseName: "Pretérito perfecto", correct: false },
      ] },
      { sentence: "Todos los veranos ___ a la playa.", marker: "Todos los veranos", base: "ir", tenseName: "Imperfecto", en: "Every summer we went to the beach.", why: "Hábito repetido en el pasado: imperfecto.", options: [
        { conjugated: "íbamos", tenseName: "Imperfecto", correct: true },
        { conjugated: "fuimos", tenseName: "Pretérito", correct: false },
        { conjugated: "vamos", tenseName: "Presente", correct: false },
        { conjugated: "iremos", tenseName: "Futuro", correct: false },
      ] },
    ],
  },

  /* ===== 3 · Pretérito perfecto ===== */
  {
    id: "perfecto",
    label: "Conectado con ahora",
    tenseName: "Pretérito perfecto",
    description: "Pasado que todavía toca el presente.",
    markers: [
      { word: "Ya", meaning: "Algo ya hecho, con efecto en el ahora.", en: "I have already finished the homework.", tenseName: "Pretérito perfecto", example: "Ya he terminado la tarea.", verbPhrase: "he terminado", marks: M_ARC },
      { word: "Todavía no", meaning: "Aún no ha pasado, hasta este momento.", en: "I haven't eaten yet.", tenseName: "Pretérito perfecto", example: "Todavía no he comido.", verbPhrase: "he comido", marks: M_ARC },
      { word: "Alguna vez", meaning: "Experiencia en algún punto hasta hoy.", en: "Have you ever tried sushi?", tenseName: "Pretérito perfecto", example: "¿Alguna vez has probado el sushi?", verbPhrase: "has probado", marks: M_ARC },
      { word: "Nunca", meaning: "Ninguna vez, hasta el momento presente.", en: "I have never been to Spain.", tenseName: "Pretérito perfecto", example: "Nunca he estado en España.", verbPhrase: "he estado", marks: M_ARC },
      { word: "Últimamente", meaning: "En el período reciente que llega hasta ahora.", en: "Lately I've been sleeping badly.", tenseName: "Pretérito perfecto", example: "Últimamente he dormido mal.", verbPhrase: "he dormido", marks: M_ARC },
      { word: "Esta semana", meaning: "Un período que incluye el ahora.", en: "This week I have worked a lot.", tenseName: "Pretérito perfecto", example: "Esta semana he trabajado mucho.", verbPhrase: "he trabajado", marks: M_ARC, note: "El período («esta semana») sigue abierto, por eso conecta con ahora." },
    ],
    production: [
      { sentence: "Ya ___ la cena.", marker: "Ya", base: "hacer", tenseName: "Pretérito perfecto", en: "I have already made dinner.", why: "«Ya» conecta lo hecho con el ahora: pretérito perfecto.", options: [
        { conjugated: "he hecho", tenseName: "Pretérito perfecto", correct: true },
        { conjugated: "hice", tenseName: "Pretérito", correct: false },
        { conjugated: "hago", tenseName: "Presente", correct: false },
        { conjugated: "haré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Nunca ___ en París.", marker: "Nunca", base: "estar", tenseName: "Pretérito perfecto", en: "I have never been to Paris.", why: "Experiencia hasta ahora: pretérito perfecto.", options: [
        { conjugated: "he estado", tenseName: "Pretérito perfecto", correct: true },
        { conjugated: "estuve", tenseName: "Pretérito", correct: false },
        { conjugated: "estaba", tenseName: "Imperfecto", correct: false },
        { conjugated: "estaré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "¿Alguna vez ___ paella?", marker: "Alguna vez", base: "comer", tenseName: "Pretérito perfecto", en: "Have you ever eaten paella?", why: "«Alguna vez» pregunta por experiencia: pretérito perfecto.", options: [
        { conjugated: "has comido", tenseName: "Pretérito perfecto", correct: true },
        { conjugated: "comiste", tenseName: "Pretérito", correct: false },
        { conjugated: "comías", tenseName: "Imperfecto", correct: false },
        { conjugated: "comes", tenseName: "Presente", correct: false },
      ] },
      { sentence: "Todavía no ___ el libro.", marker: "Todavía no", base: "terminar", tenseName: "Pretérito perfecto", en: "I haven't finished the book yet.", why: "«Todavía no» mira desde el pasado hasta ahora: pretérito perfecto.", options: [
        { conjugated: "he terminado", tenseName: "Pretérito perfecto", correct: true },
        { conjugated: "terminé", tenseName: "Pretérito", correct: false },
        { conjugated: "termino", tenseName: "Presente", correct: false },
        { conjugated: "terminaré", tenseName: "Futuro", correct: false },
      ] },
    ],
  },

  /* ===== 4 · Presente ===== */
  {
    id: "presente",
    label: "Rutina y verdades",
    tenseName: "Presente",
    description: "Hábitos y hechos del ahora.",
    markers: [
      { word: "Normalmente", meaning: "Lo que sueles hacer.", en: "I normally have breakfast at seven.", tenseName: "Presente", example: "Normalmente desayuno a las siete.", verbPhrase: "desayuno", marks: M_DOTS_NOW },
      { word: "Todos los días", meaning: "Una rutina actual.", en: "Every day I drink coffee.", tenseName: "Presente", example: "Todos los días tomo café.", verbPhrase: "tomo", marks: M_DOTS_NOW, note: "En presente es rutina actual; con contexto pasado sería imperfecto." },
      { word: "A veces", meaning: "Con cierta frecuencia, ahora.", en: "Sometimes I go out running.", tenseName: "Presente", example: "A veces salgo a correr.", verbPhrase: "salgo", marks: M_DOTS_NOW },
      { word: "siempre", meaning: "Una costumbre que sigue siendo verdad.", en: "I always arrive early.", tenseName: "Presente", example: "Siempre llego temprano.", verbPhrase: "llego", marks: M_DOTS_NOW, note: "Sin contexto pasado, «siempre» describe una rutina del presente." },
      { word: "Generalmente", meaning: "Por lo general, en el presente.", en: "I generally work from home.", tenseName: "Presente", example: "Generalmente trabajo desde casa.", verbPhrase: "trabajo", marks: M_DOTS_NOW },
      { word: "Cada mañana", meaning: "Algo que se repite cada día.", en: "Each morning I check my email.", tenseName: "Presente", example: "Cada mañana reviso mi correo.", verbPhrase: "reviso", marks: M_DOTS_NOW },
    ],
    production: [
      { sentence: "Todos los días ___ el autobús.", marker: "Todos los días", base: "tomar", tenseName: "Presente", en: "Every day I take the bus.", why: "Rutina actual: presente.", options: [
        { conjugated: "tomo", tenseName: "Presente", correct: true },
        { conjugated: "tomé", tenseName: "Pretérito", correct: false },
        { conjugated: "tomaba", tenseName: "Imperfecto", correct: false },
        { conjugated: "tomaré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Normalmente ___ ocho horas.", marker: "Normalmente", base: "trabajar", tenseName: "Presente", en: "I normally work eight hours.", why: "Lo habitual del ahora: presente.", options: [
        { conjugated: "trabajo", tenseName: "Presente", correct: true },
        { conjugated: "trabajé", tenseName: "Pretérito", correct: false },
        { conjugated: "trabajaba", tenseName: "Imperfecto", correct: false },
        { conjugated: "trabajaré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "A veces ___ a caminar.", marker: "A veces", base: "salir", tenseName: "Presente", en: "Sometimes I go out for a walk.", why: "Frecuencia en el presente: presente.", options: [
        { conjugated: "salgo", tenseName: "Presente", correct: true },
        { conjugated: "salí", tenseName: "Pretérito", correct: false },
        { conjugated: "salía", tenseName: "Imperfecto", correct: false },
        { conjugated: "saldré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Siempre ___ a tiempo.", marker: "Siempre", base: "llegar", tenseName: "Presente", en: "I always arrive on time.", why: "Costumbre actual: presente.", options: [
        { conjugated: "llego", tenseName: "Presente", correct: true },
        { conjugated: "llegué", tenseName: "Pretérito", correct: false },
        { conjugated: "llegaba", tenseName: "Imperfecto", correct: false },
        { conjugated: "llegaré", tenseName: "Futuro", correct: false },
      ] },
    ],
  },

  /* ===== 5 · Futuro ===== */
  {
    id: "futuro",
    label: "Lo que viene",
    tenseName: "Futuro",
    description: "Un momento a la derecha de ahora.",
    markers: [
      { word: "Mañana", meaning: "El día que viene.", en: "Tomorrow I will go to the market.", tenseName: "Futuro", example: "Mañana iré al mercado.", verbPhrase: "iré", marks: M_DOT_FUT },
      { word: "La próxima semana", meaning: "Un período que aún no llega.", en: "Next week I will start a course.", tenseName: "Futuro", example: "La próxima semana empezaré un curso.", verbPhrase: "empezaré", marks: M_DOT_FUT },
      { word: "El año que viene", meaning: "Un año futuro.", en: "Next year I will travel to Seville.", tenseName: "Futuro", example: "El año que viene viajaré a Sevilla.", verbPhrase: "viajaré", marks: M_DOT_FUT },
      { word: "Pronto", meaning: "Dentro de poco tiempo.", en: "Soon I will call my family.", tenseName: "Futuro", example: "Pronto llamaré a mi familia.", verbPhrase: "llamaré", marks: M_DOT_FUT },
      { word: "Dentro de poco", meaning: "En un futuro cercano.", en: "Before long I will finish the project.", tenseName: "Futuro", example: "Dentro de poco terminaré el proyecto.", verbPhrase: "terminaré", marks: M_DOT_FUT },
      { word: "Esta noche", meaning: "Un momento que todavía no llega hoy.", en: "Tonight I will cook pasta.", tenseName: "Futuro", example: "Esta noche cocinaré pasta.", verbPhrase: "cocinaré", marks: M_DOT_FUT },
    ],
    production: [
      { sentence: "Mañana ___ a Boston.", marker: "Mañana", base: "viajar", tenseName: "Futuro", en: "Tomorrow I will travel to Boston.", why: "«Mañana» apunta a un momento futuro.", options: [
        { conjugated: "viajaré", tenseName: "Futuro", correct: true },
        { conjugated: "viajé", tenseName: "Pretérito", correct: false },
        { conjugated: "viajo", tenseName: "Presente", correct: false },
        { conjugated: "viajaba", tenseName: "Imperfecto", correct: false },
      ] },
      { sentence: "La próxima semana ___ a trabajar.", marker: "La próxima semana", base: "empezar", tenseName: "Futuro", en: "Next week I will start working.", why: "Un período que aún no llega: futuro.", options: [
        { conjugated: "empezaré", tenseName: "Futuro", correct: true },
        { conjugated: "empecé", tenseName: "Pretérito", correct: false },
        { conjugated: "empiezo", tenseName: "Presente", correct: false },
        { conjugated: "empezaba", tenseName: "Imperfecto", correct: false },
      ] },
      { sentence: "El año que viene ___ español.", marker: "El año que viene", base: "estudiar", tenseName: "Futuro", en: "Next year I will study Spanish.", why: "Un año futuro: futuro.", options: [
        { conjugated: "estudiaré", tenseName: "Futuro", correct: true },
        { conjugated: "estudié", tenseName: "Pretérito", correct: false },
        { conjugated: "estudio", tenseName: "Presente", correct: false },
        { conjugated: "estudiaba", tenseName: "Imperfecto", correct: false },
      ] },
      { sentence: "Pronto ___ a mis amigos.", marker: "Pronto", base: "ver", tenseName: "Futuro", en: "Soon I will see my friends.", why: "«Pronto» mira hacia adelante: futuro.", options: [
        { conjugated: "veré", tenseName: "Futuro", correct: true },
        { conjugated: "vi", tenseName: "Pretérito", correct: false },
        { conjugated: "veo", tenseName: "Presente", correct: false },
        { conjugated: "veía", tenseName: "Imperfecto", correct: false },
      ] },
    ],
  },

  /* ===== 6 · Subjuntivo · Condicional ===== */
  {
    id: "modo",
    label: "Lo posible",
    tenseName: "Subjuntivo · Condicional",
    description: "Deseos, dudas e hipótesis — fuera de la línea.",
    markers: [
      { word: "Ojalá", meaning: "Un deseo. Dispara el subjuntivo.", en: "I hope it rains tomorrow.", tenseName: "Subjuntivo", example: "Ojalá llueva mañana.", verbPhrase: "llueva", marks: M_WAVE },
      { word: "Quizás", meaning: "Posibilidad, duda. Pide subjuntivo.", en: "Maybe she'll come to the party.", tenseName: "Subjuntivo", example: "Quizás venga a la fiesta.", verbPhrase: "venga", marks: M_WAVE },
      { word: "Es posible que", meaning: "Marca algo no seguro: subjuntivo.", en: "It's possible that I'll arrive late.", tenseName: "Subjuntivo", example: "Es posible que llegue tarde.", verbPhrase: "llegue", marks: M_WAVE },
      { word: "Si pudiera", meaning: "Una hipótesis irreal. La respuesta va en condicional.", en: "If I could, I would travel more.", tenseName: "Condicional", example: "Si pudiera, viajaría más.", verbPhrase: "viajaría", marks: M_DIAMOND, note: "La condición es irreal; el resultado usa condicional (el rombo)." },
      { word: "Me gustaría", meaning: "Un deseo suave: condicional.", en: "I would like to learn to dance.", tenseName: "Condicional", example: "Me gustaría aprender a bailar.", verbPhrase: "Me gustaría", marks: M_DIAMOND },
      { word: "¿Podrías…?", meaning: "Una petición amable: condicional.", en: "Could you help me?", tenseName: "Condicional", example: "¿Podrías ayudarme?", verbPhrase: "Podrías", marks: M_DIAMOND },
    ],
    production: [
      { sentence: "Ojalá ___ buen tiempo el sábado.", marker: "Ojalá", base: "hacer", tenseName: "Subjuntivo", en: "I hope the weather is nice on Saturday.", why: "«Ojalá» es un deseo: subjuntivo.", options: [
        { conjugated: "haga", tenseName: "Subjuntivo", correct: true },
        { conjugated: "hace", tenseName: "Presente", correct: false },
        { conjugated: "hizo", tenseName: "Pretérito", correct: false },
        { conjugated: "hará", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Es posible que ___ mañana.", marker: "Es posible que", base: "venir", tenseName: "Subjuntivo", en: "It's possible that she'll come tomorrow.", why: "Posibilidad no segura: subjuntivo.", options: [
        { conjugated: "venga", tenseName: "Subjuntivo", correct: true },
        { conjugated: "viene", tenseName: "Presente", correct: false },
        { conjugated: "vino", tenseName: "Pretérito", correct: false },
        { conjugated: "vendrá", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Si pudiera, ___ por todo el mundo.", marker: "Si pudiera", base: "viajar", tenseName: "Condicional", en: "If I could, I would travel all over the world.", why: "Hipótesis irreal: el resultado va en condicional.", options: [
        { conjugated: "viajaría", tenseName: "Condicional", correct: true },
        { conjugated: "viajo", tenseName: "Presente", correct: false },
        { conjugated: "viajé", tenseName: "Pretérito", correct: false },
        { conjugated: "viajaré", tenseName: "Futuro", correct: false },
      ] },
      { sentence: "Me ___ vivir cerca del mar.", marker: "Me", base: "gustar", tenseName: "Condicional", en: "I would like to live near the sea.", why: "Un deseo suave: condicional.", options: [
        { conjugated: "gustaría", tenseName: "Condicional", correct: true },
        { conjugated: "gusta", tenseName: "Presente", correct: false },
        { conjugated: "gustó", tenseName: "Pretérito", correct: false },
        { conjugated: "gustaba", tenseName: "Imperfecto", correct: false },
      ] },
    ],
  },
];
