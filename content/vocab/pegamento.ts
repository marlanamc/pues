import type { VocabTheme } from "./types";

/**
 * Preguntas · Preposiciones · Conectores — the glue.
 *
 * The Fluent Forever 625 is nouns, verbs, adjectives: the filling. What stalls
 * a sentence in conversation is the slot around the verb — who, where, when,
 * how, and the little words that aim it. These three themes are not on the
 * source list; they are here because recognition of *el gato* says nothing
 * about whether *dónde* or *para* arrives when you need it.
 *
 * Accent twins are separate cards on purpose: *cuándo* is the question,
 * *cuando* is the join. Same for *cómo* / *como*, *por qué* / *porque*,
 * *dónde* / *donde*. Collapsing them would teach the wrong one.
 */

export const preguntas: VocabTheme = {
  slug: "preguntas",
  label: "Preguntas",
  labelEn: "Question words",
  words: [
    { id: "v-preguntas-que", es: "qué", en: "what", example: "¿Qué traes mañana a la clase?", exampleEn: "What are you bringing to class tomorrow?" },
    { id: "v-preguntas-quien", es: "quién", en: "who", example: "¿Quién dejó la puerta abierta otra vez?", exampleEn: "Who left the door open again?" },
    { id: "v-preguntas-donde", es: "dónde", en: "where?", example: "¿Dónde dejaste el cuaderno esta vez?", exampleEn: "Where did you leave the notebook this time?" },
    { id: "v-preguntas-cuando", es: "cuándo", en: "when?", example: "¿Cuándo te pagan, el viernes o el lunes?", exampleEn: "When do you get paid, Friday or Monday?" },
    { id: "v-preguntas-como", es: "cómo", en: "how?", example: "¿Cómo se dice esto sin sonar grosera?", exampleEn: "How do you say this without sounding rude?" },
    { id: "v-preguntas-por-que", es: "por qué", en: "why", example: "¿Por qué nadie avisó que se cancelaba?", exampleEn: "Why didn't anyone say it was cancelled?" },
    { id: "v-preguntas-cual", es: "cuál", en: "which", example: "¿Cuál de los dos horarios te queda mejor?", exampleEn: "Which of the two schedules works better for you?" },
    { id: "v-preguntas-cuanto", es: "cuánto", en: "how much", example: "¿Cuánto sale el boleto de ida?", exampleEn: "How much is the one-way ticket?" },
  ],
};

export const preposiciones: VocabTheme = {
  slug: "preposiciones",
  label: "Preposiciones",
  labelEn: "Prepositions",
  words: [
    { id: "v-preposiciones-a", es: "a", en: "to", example: "Voy a la tienda después de la clase.", exampleEn: "I'm going to the store after class." },
    { id: "v-preposiciones-a-alguien", es: "a", en: "to (a person)", example: "Ayer vi a mi hermana en el tren.", exampleEn: "Yesterday I saw my sister on the train." },
    { id: "v-preposiciones-de", es: "de", en: "of / from", example: "Ella es de Atlanta, igual que mi mamá.", exampleEn: "She's from Atlanta, same as my mom." },
    { id: "v-preposiciones-en", es: "en", en: "in / on / at", example: "Dejé el cuaderno en la mesa del fondo.", exampleEn: "I left the notebook on the table in the back." },
    { id: "v-preposiciones-con", es: "con", en: "with", example: "Voy con ella porque no conoce el camino.", exampleEn: "I'm going with her because she doesn't know the way." },
    { id: "v-preposiciones-sin", es: "sin", en: "without", example: "Salió sin el abrigo y se arrepintió a la cuadra.", exampleEn: "She left without her coat and regretted it a block later." },
    { id: "v-preposiciones-por", es: "por", en: "by / through / because of", example: "Pasé por tu casa y no había nadie.", exampleEn: "I stopped by your house and nobody was there." },
    { id: "v-preposiciones-para", es: "para", en: "for", example: "Esto es para ti, no lo abras todavía.", exampleEn: "This is for you — don't open it yet." },
    { id: "v-preposiciones-sobre", es: "sobre", en: "on / about", example: "Hablamos sobre el examen y se nos fue la hora.", exampleEn: "We talked about the exam and lost track of time." },
    { id: "v-preposiciones-entre", es: "entre", en: "between / among", example: "El secreto quedó entre nosotras dos.", exampleEn: "The secret stayed between us." },
    { id: "v-preposiciones-hasta", es: "hasta", en: "until / up to", example: "Espera hasta las ocho y si no llego, vete.", exampleEn: "Wait until eight and if I'm not there, go." },
    { id: "v-preposiciones-desde", es: "desde", en: "from / since", example: "Vivo aquí desde marzo y todavía me pierdo.", exampleEn: "I've lived here since March and I still get lost." },
    { id: "v-preposiciones-hacia", es: "hacia", en: "toward", example: "Caminaba hacia el río sin ningún apuro.", exampleEn: "She was walking toward the river, in no hurry." },
  ],
};

export const conectores: VocabTheme = {
  slug: "conectores",
  label: "Conectores",
  labelEn: "Connectors",
  words: [
    { id: "v-conectores-porque", es: "porque", en: "because", example: "No vine porque se me durmió el despertador.", exampleEn: "I didn't come because my alarm didn't go off." },
    { id: "v-conectores-cuando", es: "cuando", en: "when", example: "Cuando termina la clase, me quedo un rato.", exampleEn: "When class ends, I stay a little while." },
    { id: "v-conectores-como", es: "como", en: "like / as", example: "Dilo como si nadie te estuviera oyendo.", exampleEn: "Say it like nobody's listening." },
    { id: "v-conectores-si", es: "si", en: "if", example: "Si llueve, damos la clase igual.", exampleEn: "If it rains, we still have class." },
    { id: "v-conectores-pero", es: "pero", en: "but", example: "Quería ir, pero se me hizo tarde.", exampleEn: "I wanted to go, but I was running late." },
    { id: "v-conectores-aunque", es: "aunque", en: "even though", example: "Voy aunque llegue diez minutos tarde.", exampleEn: "I'm going even if I'm ten minutes late." },
    { id: "v-conectores-donde", es: "donde", en: "where", example: "El salón donde damos clase no tiene ventanas.", exampleEn: "The room where we have class has no windows." },
  ],
};
