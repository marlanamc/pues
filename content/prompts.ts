import { totalDays } from "@/content/frames";

/**
 * Pues — Speak-First prompts ("El Cuaderno")
 *
 * The core mechanic: the user is shown an English thought + a situation and
 * must SAY it aloud in Spanish before any answer is revealed. Then a model
 * answer appears with audio and a soft note on *why*.
 *
 * Each day has 5 prompts (one per frame), derived from the Spanish examples in
 * content/frames.ts. The model `spanish` is the answer; `english` is the thought
 * to say; `why` is a gentle note where *words wrapped in asterisks* render in
 * Newsreader italic on the Reveal screen.
 *
 * Latin American Spanish, tú-form. Written for Marlana — ESOL teacher + aspiring
 * developer, Boston by way of Atlanta.
 */

export type WordHint = {
  /** Lowercase English lookup key, e.g. "worksheets" */
  en: string;
  /** Spanish gloss shown on tap, e.g. "las hojas" */
  es: string;
};

export type SpeakPrompt = {
  id: string;
  frameStem: string;
  /** The English thought the user must say out loud in Spanish. */
  english: string;
  /** One natural model answer in Spanish. */
  spanish: string;
  /** A short Spanish situation label, e.g. "En el café". */
  situationLabel: string;
  /** A soft note on why; *asterisks* mark words to italicize. */
  why: string;
  /** Optional per-prompt word hints for the English prompt. */
  wordHints?: WordHint[];
};

export type SpeakDay = {
  day: number;
  /** Spanish theme label for the day cap, e.g. "La vida diaria". */
  themeEs: string;
  /** One warm Spanish sentence shown on Home. */
  line: string;
  prompts: SpeakPrompt[];
};

export const speakDays: SpeakDay[] = [
  {
    day: 1,
    themeEs: "Deseos y planes",
    line: "Cinco minutos son una conversación entera.",
    prompts: [
      {
        id: "d1-quiero",
        frameStem: "Quiero…",
        english: "I want to learn more Spanish.",
        spanish: "Quiero aprender más español.",
        situationLabel: "Pensando en una meta",
        why: "*Quiero* is the most direct way to state what you want.",
        wordHints: [
          { en: "want", es: "quiero" },
          { en: "learn", es: "aprender" },
          { en: "more", es: "más" },
          { en: "spanish", es: "español" },
        ],
      },
      {
        id: "d1-necesito",
        frameStem: "Necesito…",
        english: "I need to print the worksheets for my class.",
        spanish: "Necesito imprimir las hojas para mi clase.",
        situationLabel: "Antes de clase",
        why: "*Necesito* + infinitive expresses something you need to do.",
        wordHints: [
          { en: "need", es: "necesito" },
          { en: "print", es: "imprimir" },
          { en: "worksheets", es: "las hojas" },
          { en: "for", es: "para" },
          { en: "my", es: "mi" },
          { en: "class", es: "la clase" },
        ],
      },
      {
        id: "d1-voy-a",
        frameStem: "Voy a…",
        english: "I'm going to cook tonight.",
        spanish: "Voy a cocinar esta noche.",
        situationLabel: "Esta noche",
        why: "*Voy a* + infinitive is the everyday way to talk about near-future plans.",
        wordHints: [
          { en: "i'm", es: "voy" },
          { en: "going", es: "a" },
          { en: "cook", es: "cocinar" },
          { en: "tonight", es: "esta noche" },
        ],
      },
      {
        id: "d1-me-gustaria",
        frameStem: "Me gustaría…",
        english: "I would like to travel more.",
        spanish: "Me gustaría viajar más.",
        situationLabel: "Soñando despierta",
        why: "*Me gustaría* is softer and more polite than *quiero*.",
        wordHints: [
          { en: "would", es: "me gustaría" },
          { en: "like", es: "gustaría" },
          { en: "travel", es: "viajar" },
          { en: "more", es: "más" },
        ],
      },
      {
        id: "d1-tengo-ganas",
        frameStem: "Tengo ganas de…",
        english: "I feel like resting.",
        spanish: "Tengo ganas de descansar.",
        situationLabel: "Al final del día",
        why: "*Tengo ganas de* means 'I'm in the mood for' — very natural in everyday speech.",
        wordHints: [
          { en: "feel", es: "tengo ganas" },
          { en: "like", es: "de" },
          { en: "resting", es: "descansar" },
        ],
      },
    ],
  },
  {
    day: 2,
    themeEs: "La vida diaria",
    line: "Lo cotidiano también merece palabras.",
    prompts: [
      {
        id: "d2-tengo",
        frameStem: "Tengo…",
        english: "I have a meeting with the teachers at three.",
        spanish: "Tengo una reunión con los maestros a las tres.",
        situationLabel: "En el trabajo",
        why: "*Reunión* is the standard word for a meeting; in Mexico *junta* is also common.",
        wordHints: [
          { en: "have", es: "tengo" },
          { en: "meeting", es: "una reunión" },
          { en: "with", es: "con" },
          { en: "teachers", es: "los maestros" },
          { en: "three", es: "las tres" },
        ],
      },
      {
        id: "d2-no-tengo",
        frameStem: "No tengo…",
        english: "I don't have much free time this week.",
        spanish: "No tengo mucho tiempo libre esta semana.",
        situationLabel: "Una semana ocupada",
        why: "*No tengo* + noun is the plain way to say you lack something.",
        wordHints: [
          { en: "don't", es: "no" },
          { en: "have", es: "tengo" },
          { en: "much", es: "mucho" },
          { en: "free", es: "libre" },
          { en: "time", es: "tiempo" },
          { en: "this", es: "esta" },
          { en: "week", es: "semana" },
        ],
      },
      {
        id: "d2-hay",
        frameStem: "Hay…",
        english: "There's a good bakery near my house.",
        spanish: "Hay una panadería buena cerca de mi casa.",
        situationLabel: "En el barrio",
        why: "*Hay* never changes form — singular or plural, same word.",
        wordHints: [
          { en: "there's", es: "hay" },
          { en: "good", es: "buena" },
          { en: "bakery", es: "una panadería" },
          { en: "near", es: "cerca de" },
          { en: "my", es: "mi" },
          { en: "house", es: "casa" },
        ],
      },
      {
        id: "d2-uso",
        frameStem: "Uso…",
        english: "I use the subway to get to work.",
        spanish: "Uso el metro para ir al trabajo.",
        situationLabel: "Camino al trabajo",
        why: "*Uso* + noun describes the tools and routines of your day.",
        wordHints: [
          { en: "use", es: "uso" },
          { en: "subway", es: "el metro" },
          { en: "get", es: "ir" },
          { en: "work", es: "el trabajo" },
        ],
      },
      {
        id: "d2-paso-tiempo",
        frameStem: "Paso mucho tiempo…",
        english: "I spend a lot of time on my computer.",
        spanish: "Paso mucho tiempo en mi computadora.",
        situationLabel: "Un día normal",
        why: "*Paso mucho tiempo* takes a gerund (-ando/-iendo) or a place.",
        wordHints: [
          { en: "spend", es: "paso" },
          { en: "lot", es: "mucho" },
          { en: "time", es: "tiempo" },
          { en: "on", es: "en" },
          { en: "my", es: "mi" },
          { en: "computer", es: "computadora" },
        ],
      },
    ],
  },
  {
    day: 3,
    themeEs: "Creencias e ideas",
    line: "Tus ideas suenan distinto en voz alta.",
    prompts: [
      {
        id: "d3-creo",
        frameStem: "Creo que…",
        english: "I think it's a good idea.",
        spanish: "Creo que es una buena idea.",
        situationLabel: "Dando tu opinión",
        why: "*Creo que* is the everyday way to share what you believe.",
        wordHints: [
          { en: "think", es: "creo" },
          { en: "it's", es: "es" },
          { en: "good", es: "buena" },
          { en: "idea", es: "una idea" },
        ],
      },
      {
        id: "d3-pienso",
        frameStem: "Pienso que…",
        english: "I think today was a good day.",
        spanish: "Pienso que hoy fue un buen día.",
        situationLabel: "Al reflexionar",
        why: "*Pienso que* and *creo que* are close; both open an opinion.",
        wordHints: [
          { en: "think", es: "pienso" },
          { en: "today", es: "hoy" },
          { en: "was", es: "fue" },
          { en: "good", es: "buen" },
          { en: "day", es: "día" },
        ],
      },
      {
        id: "d3-me-parece",
        frameStem: "Me parece que…",
        english: "It seems to me it's going to snow again.",
        spanish: "Me parece que va a nevar otra vez.",
        situationLabel: "Mirando el cielo",
        why: "*Me parece que* softens an opinion to 'it seems to me'.",
        wordHints: [
          { en: "seems", es: "me parece" },
          { en: "going", es: "va a" },
          { en: "snow", es: "nevar" },
          { en: "again", es: "otra vez" },
        ],
      },
      {
        id: "d3-supongo",
        frameStem: "Supongo que…",
        english: "I suppose you're right.",
        spanish: "Supongo que tienes razón.",
        situationLabel: "Cediendo un poco",
        why: "*Supongo que* carries a shrug — useful when you're not fully sure.",
        wordHints: [
          { en: "suppose", es: "supongo" },
          { en: "you're", es: "tienes" },
          { en: "right", es: "razón" },
        ],
      },
      {
        id: "d3-no-se-si",
        frameStem: "No sé si…",
        english: "I don't know if I have time.",
        spanish: "No sé si tengo tiempo.",
        situationLabel: "Indecisa",
        why: "*No sé si* lets you admit uncertainty plainly.",
        wordHints: [
          { en: "don't", es: "no" },
          { en: "know", es: "sé" },
          { en: "if", es: "si" },
          { en: "have", es: "tengo" },
          { en: "time", es: "tiempo" },
        ],
      },
    ],
  },
  {
    day: 4,
    themeEs: "Gustos y disgustos",
    line: "Di lo que de verdad te gusta.",
    prompts: [
      {
        id: "d4-me-gusta",
        frameStem: "Me gusta…",
        english: "I like strong coffee in the morning.",
        spanish: "Me gusta el café fuerte por la mañana.",
        situationLabel: "En la cafetería",
        why: "*Me gusta* + singular noun; for plural use *me gustan*.",
        wordHints: [
          { en: "like", es: "me gusta" },
          { en: "strong", es: "fuerte" },
          { en: "coffee", es: "el café" },
          { en: "morning", es: "la mañana" },
        ],
      },
      {
        id: "d4-no-me-gusta",
        frameStem: "No me gusta…",
        english: "I don't like Boston's cold in February.",
        spanish: "No me gusta el frío de Boston en febrero.",
        situationLabel: "En pleno invierno",
        why: "*No me gusta* turns the same pattern negative.",
        wordHints: [
          { en: "don't", es: "no" },
          { en: "like", es: "me gusta" },
          { en: "boston's", es: "de Boston" },
          { en: "cold", es: "el frío" },
          { en: "february", es: "febrero" },
        ],
      },
      {
        id: "d4-prefiero",
        frameStem: "Prefiero…",
        english: "I prefer reading on paper over a screen.",
        spanish: "Prefiero leer en papel que en la pantalla.",
        situationLabel: "Eligiendo",
        why: "*Prefiero A que B* sets one option above another.",
        wordHints: [
          { en: "prefer", es: "prefiero" },
          { en: "reading", es: "leer" },
          { en: "paper", es: "papel" },
          { en: "over", es: "que" },
          { en: "screen", es: "la pantalla" },
        ],
      },
      {
        id: "d4-me-encanta",
        frameStem: "Me encanta…",
        english: "I love fall in New England.",
        spanish: "Me encanta el otoño en Nueva Inglaterra.",
        situationLabel: "Con entusiasmo",
        why: "*Me encanta* is stronger than *me gusta* — closer to 'I love it'.",
        wordHints: [
          { en: "love", es: "me encanta" },
          { en: "fall", es: "el otoño" },
          { en: "new", es: "Nueva" },
          { en: "england", es: "Inglaterra" },
        ],
      },
      {
        id: "d4-no-soporto",
        frameStem: "No soporto…",
        english: "I can't stand noise in the morning.",
        spanish: "No soporto el ruido en la mañana.",
        situationLabel: "Antes del café",
        why: "*No soporto* is strong — save it for genuine annoyances.",
        wordHints: [
          { en: "can't", es: "no" },
          { en: "stand", es: "soporto" },
          { en: "noise", es: "el ruido" },
          { en: "morning", es: "la mañana" },
        ],
      },
    ],
  },
  {
    day: 5,
    themeEs: "La gente",
    line: "Las personas se cuentan, no se traducen.",
    prompts: [
      {
        id: "d5-mi-amigo",
        frameStem: "Mi amigo…",
        english: "My friend from Atlanta is coming to visit me soon.",
        spanish: "Mi amiga de Atlanta me viene a visitar pronto.",
        situationLabel: "Hablando de una amiga",
        why: "Use *amiga* for a female friend — Spanish marks gender on people.",
        wordHints: [
          { en: "my", es: "mi" },
          { en: "friend", es: "amiga" },
          { en: "from", es: "de" },
          { en: "atlanta", es: "Atlanta" },
          { en: "coming", es: "viene" },
          { en: "visit", es: "visitar" },
          { en: "me", es: "me" },
          { en: "soon", es: "pronto" },
        ],
      },
      {
        id: "d5-mi-familia",
        frameStem: "Mi familia…",
        english: "My family lives in Atlanta.",
        spanish: "Mi familia vive en Atlanta.",
        situationLabel: "Sobre tu familia",
        why: "*Mi familia* takes a singular verb, even though it's many people.",
        wordHints: [
          { en: "my", es: "mi" },
          { en: "family", es: "familia" },
          { en: "lives", es: "vive" },
          { en: "atlanta", es: "Atlanta" },
        ],
      },
      {
        id: "d5-conozco",
        frameStem: "Conozco a…",
        english: "I know someone who also teaches in Boston.",
        spanish: "Conozco a alguien que también enseña en Boston.",
        situationLabel: "Presentando a alguien",
        why: "*Conocer* = to know a person/place; *saber* = to know a fact.",
        wordHints: [
          { en: "know", es: "conozco" },
          { en: "someone", es: "a alguien" },
          { en: "who", es: "que" },
          { en: "also", es: "también" },
          { en: "teaches", es: "enseña" },
          { en: "boston", es: "Boston" },
        ],
      },
      {
        id: "d5-admiro",
        frameStem: "Admiro a…",
        english: "I admire my mother.",
        spanish: "Admiro a mi madre.",
        situationLabel: "Con cariño",
        why: "The personal *a* appears before a person who's the object — *admiro a*.",
        wordHints: [
          { en: "admire", es: "admiro" },
          { en: "my", es: "mi" },
          { en: "mother", es: "madre" },
        ],
      },
      {
        id: "d5-paso-tiempo-con",
        frameStem: "Paso tiempo con…",
        english: "I spend time with my friends.",
        spanish: "Paso tiempo con mis amigos.",
        situationLabel: "El fin de semana",
        why: "*Paso tiempo con* + person is how you say who you're with.",
        wordHints: [
          { en: "spend", es: "paso" },
          { en: "time", es: "tiempo" },
          { en: "with", es: "con" },
          { en: "my", es: "mis" },
          { en: "friends", es: "amigos" },
        ],
      },
    ],
  },
  {
    day: 6,
    themeEs: "El pasado",
    line: "El pasado se dice con calma.",
    prompts: [
      {
        id: "d6-ayer",
        frameStem: "Ayer…",
        english: "Yesterday I taught a really good class.",
        spanish: "Ayer di una clase muy buena.",
        situationLabel: "Recordando ayer",
        why: "Yesterday's actions use the preterite — *di*, from *dar*.",
        wordHints: [
          { en: "yesterday", es: "ayer" },
          { en: "taught", es: "di" },
          { en: "really", es: "muy" },
          { en: "good", es: "buena" },
          { en: "class", es: "una clase" },
        ],
      },
      {
        id: "d6-semana-pasada",
        frameStem: "La semana pasada…",
        english: "Last week I finished a small coding project.",
        spanish: "La semana pasada terminé un proyecto pequeño de código.",
        situationLabel: "Un logro reciente",
        why: "*La semana pasada* pairs with preterite endings (-é, -aste, -ó).",
        wordHints: [
          { en: "last", es: "pasada" },
          { en: "week", es: "la semana" },
          { en: "finished", es: "terminé" },
          { en: "small", es: "pequeño" },
          { en: "coding", es: "de código" },
          { en: "project", es: "un proyecto" },
        ],
      },
      {
        id: "d6-recuerdo",
        frameStem: "Recuerdo que…",
        english: "I remember that I was nervous.",
        spanish: "Recuerdo que estaba nerviosa.",
        situationLabel: "Un recuerdo",
        why: "*Recuerdo que* + imperfect (*estaba*) describes how things were.",
        wordHints: [
          { en: "remember", es: "recuerdo" },
          { en: "that", es: "que" },
          { en: "was", es: "estaba" },
          { en: "nervous", es: "nerviosa" },
        ],
      },
      {
        id: "d6-cuando-era-nino",
        frameStem: "Cuando era niño…",
        english: "When I was a kid I used to swim a lot.",
        spanish: "Cuando era niña nadaba mucho.",
        situationLabel: "De la infancia",
        why: "Childhood and repeated actions use the imperfect — *era*, *nadaba*.",
        wordHints: [
          { en: "when", es: "cuando" },
          { en: "was", es: "era" },
          { en: "kid", es: "niña" },
          { en: "used", es: "nadaba" },
          { en: "swim", es: "nadaba" },
          { en: "lot", es: "mucho" },
        ],
      },
      {
        id: "d6-una-vez",
        frameStem: "Una vez…",
        english: "One time I got lost in a new city.",
        spanish: "Una vez me perdí en una ciudad nueva.",
        situationLabel: "Contando una anécdota",
        why: "*Una vez* opens a one-off story; *me perdí* is preterite.",
        wordHints: [
          { en: "one", es: "una" },
          { en: "time", es: "vez" },
          { en: "got", es: "me perdí" },
          { en: "lost", es: "perdí" },
          { en: "new", es: "nueva" },
          { en: "city", es: "una ciudad" },
        ],
      },
    ],
  },
  {
    day: 7,
    themeEs: "Aprender",
    line: "Aprender es repetir sin miedo.",
    prompts: [
      {
        id: "d7-estoy-aprendiendo",
        frameStem: "Estoy aprendiendo…",
        english: "I'm learning to code in JavaScript.",
        spanish: "Estoy aprendiendo a programar en JavaScript.",
        situationLabel: "Sobre tu estudio",
        why: "*Estoy* + gerund (-ando/-iendo) = something happening now.",
        wordHints: [
          { en: "i'm", es: "estoy" },
          { en: "learning", es: "aprendiendo" },
          { en: "code", es: "programar" },
          { en: "javascript", es: "JavaScript" },
        ],
      },
      {
        id: "d7-he-aprendido",
        frameStem: "He aprendido…",
        english: "I've learned a lot from my students.",
        spanish: "He aprendido mucho de mis estudiantes.",
        situationLabel: "Mirando atrás",
        why: "*He* + past participle = done, but still relevant to now.",
        wordHints: [
          { en: "i've", es: "he" },
          { en: "learned", es: "aprendido" },
          { en: "lot", es: "mucho" },
          { en: "from", es: "de" },
          { en: "my", es: "mis" },
          { en: "students", es: "estudiantes" },
        ],
      },
      {
        id: "d7-quiero-mejorar",
        frameStem: "Quiero mejorar…",
        english: "I want to improve my pronunciation.",
        spanish: "Quiero mejorar mi pronunciación.",
        situationLabel: "Una meta",
        why: "*Mejorar* takes a direct object — what you want to get better at.",
        wordHints: [
          { en: "want", es: "quiero" },
          { en: "improve", es: "mejorar" },
          { en: "my", es: "mi" },
          { en: "pronunciation", es: "pronunciación" },
        ],
      },
      {
        id: "d7-me-cuesta",
        frameStem: "Me cuesta…",
        english: "I struggle to speak quickly without overthinking it.",
        spanish: "Me cuesta hablar rápido sin pensarlo demasiado.",
        situationLabel: "Siendo honesta",
        why: "*Me cuesta* + infinitive admits difficulty without saying *no puedo*.",
        wordHints: [
          { en: "struggle", es: "me cuesta" },
          { en: "speak", es: "hablar" },
          { en: "quickly", es: "rápido" },
          { en: "without", es: "sin" },
          { en: "overthinking", es: "pensarlo demasiado" },
        ],
      },
      {
        id: "d7-estoy-practicando",
        frameStem: "Estoy practicando…",
        english: "I'm practicing speaking out loud when I'm alone.",
        spanish: "Estoy practicando hablar en voz alta cuando estoy sola.",
        situationLabel: "Practicando",
        why: "*Estoy practicando* keeps the action ongoing and present.",
        wordHints: [
          { en: "i'm", es: "estoy" },
          { en: "practicing", es: "practicando" },
          { en: "speaking", es: "hablar" },
          { en: "out", es: "en voz alta" },
          { en: "loud", es: "en voz alta" },
          { en: "when", es: "cuando" },
          { en: "alone", es: "sola" },
        ],
      },
    ],
  },
  {
    day: 8,
    themeEs: "Las emociones",
    line: "Nombrar lo que sientes ya es avanzar.",
    prompts: [
      {
        id: "d8-me-siento",
        frameStem: "Me siento…",
        english: "I feel grateful today.",
        spanish: "Me siento agradecida hoy.",
        situationLabel: "Hoy",
        why: "Adjectives after *me siento* agree with you — *agradecida* (female).",
        wordHints: [
          { en: "feel", es: "me siento" },
          { en: "grateful", es: "agradecida" },
          { en: "today", es: "hoy" },
        ],
      },
      {
        id: "d8-estoy",
        frameStem: "Estoy…",
        english: "I'm excited about this project.",
        spanish: "Estoy emocionada por este proyecto.",
        situationLabel: "Antes de empezar",
        why: "*Estoy* = a temporary state; *soy* would claim it as identity.",
        wordHints: [
          { en: "i'm", es: "estoy" },
          { en: "excited", es: "emocionada" },
          { en: "about", es: "por" },
          { en: "this", es: "este" },
          { en: "project", es: "proyecto" },
        ],
      },
      {
        id: "d8-me-preocupa",
        frameStem: "Me preocupa…",
        english: "I'm worried about not having enough time.",
        spanish: "Me preocupa no tener tiempo suficiente.",
        situationLabel: "Una preocupación",
        why: "*Me preocupa* + infinitive names what worries you.",
        wordHints: [
          { en: "i'm", es: "me preocupa" },
          { en: "worried", es: "preocupa" },
          { en: "about", es: "no tener" },
          { en: "having", es: "tener" },
          { en: "enough", es: "suficiente" },
          { en: "time", es: "tiempo" },
        ],
      },
      {
        id: "d8-me-alegra",
        frameStem: "Me alegra…",
        english: "It makes me happy to see my students progress.",
        spanish: "Me alegra ver a mis estudiantes progresar.",
        situationLabel: "Un buen momento",
        why: "*Me alegra* + infinitive = 'it makes me happy to…'.",
        wordHints: [
          { en: "makes", es: "me alegra" },
          { en: "happy", es: "alegra" },
          { en: "see", es: "ver" },
          { en: "my", es: "mis" },
          { en: "students", es: "estudiantes" },
          { en: "progress", es: "progresar" },
        ],
      },
      {
        id: "d8-me-emociona",
        frameStem: "Me emociona…",
        english: "This project excites me.",
        spanish: "Me emociona este proyecto.",
        situationLabel: "Con ilusión",
        why: "*Me emociona* works like *me gusta* — the thing is the subject.",
        wordHints: [
          { en: "this", es: "este" },
          { en: "project", es: "proyecto" },
          { en: "excites", es: "me emociona" },
          { en: "me", es: "me" },
        ],
      },
    ],
  },
  {
    day: 9,
    themeEs: "Los retos",
    line: "Lo difícil se vuelve dicho.",
    prompts: [
      {
        id: "d9-es-dificil",
        frameStem: "Es difícil…",
        english: "It's hard to speak without fear of making mistakes.",
        spanish: "Es difícil hablar sin miedo a equivocarme.",
        situationLabel: "Siendo honesta",
        why: "*Es difícil* + infinitive states a general difficulty.",
        wordHints: [
          { en: "it's", es: "es" },
          { en: "hard", es: "difícil" },
          { en: "speak", es: "hablar" },
          { en: "without", es: "sin" },
          { en: "fear", es: "miedo" },
          { en: "making", es: "equivocarme" },
          { en: "mistakes", es: "equivocarme" },
        ],
      },
      {
        id: "d9-tengo-problemas",
        frameStem: "Tengo problemas con…",
        english: "I have trouble with irregular verbs.",
        spanish: "Tengo problemas con los verbos irregulares.",
        situationLabel: "Estudiando",
        why: "*Tengo problemas con* + noun points at what's giving you trouble.",
        wordHints: [
          { en: "have", es: "tengo" },
          { en: "trouble", es: "problemas" },
          { en: "with", es: "con" },
          { en: "irregular", es: "irregulares" },
          { en: "verbs", es: "los verbos" },
        ],
      },
      {
        id: "d9-estoy-intentando",
        frameStem: "Estoy intentando…",
        english: "I'm trying to speak more.",
        spanish: "Estoy intentando hablar más.",
        situationLabel: "Un esfuerzo",
        why: "*Estoy intentando* + infinitive = an ongoing attempt.",
        wordHints: [
          { en: "i'm", es: "estoy" },
          { en: "trying", es: "intentando" },
          { en: "speak", es: "hablar" },
          { en: "more", es: "más" },
        ],
      },
      {
        id: "d9-todavia-no-puedo",
        frameStem: "Todavía no puedo…",
        english: "I still can't speak without translating in my head.",
        spanish: "Todavía no puedo hablar sin traducir mentalmente.",
        situationLabel: "Reconociendo un límite",
        why: "*Todavía* ('still/yet') softens it — the door stays open.",
        wordHints: [
          { en: "still", es: "todavía" },
          { en: "can't", es: "no puedo" },
          { en: "speak", es: "hablar" },
          { en: "without", es: "sin" },
          { en: "translating", es: "traducir" },
          { en: "head", es: "mentalmente" },
        ],
      },
      {
        id: "d9-necesito-ayuda",
        frameStem: "Necesito ayuda con…",
        english: "I need help with a bug in my code.",
        spanish: "Necesito ayuda con un error en mi código.",
        situationLabel: "Pidiendo ayuda",
        why: "*Necesito ayuda con* + noun is how you ask for support.",
        wordHints: [
          { en: "need", es: "necesito" },
          { en: "help", es: "ayuda" },
          { en: "with", es: "con" },
          { en: "bug", es: "un error" },
          { en: "in", es: "en" },
          { en: "my", es: "mi" },
          { en: "code", es: "código" },
        ],
      },
    ],
  },
  {
    day: 10,
    themeEs: "El futuro",
    line: "El futuro empieza en una frase.",
    prompts: [
      {
        id: "d10-espero",
        frameStem: "Espero…",
        english: "I hope to rest well this weekend.",
        spanish: "Espero descansar bien este fin de semana.",
        situationLabel: "Con esperanza",
        why: "*Espero* + infinitive for your own hopes; *espero que* + subjunctive for others.",
        wordHints: [
          { en: "hope", es: "espero" },
          { en: "rest", es: "descansar" },
          { en: "well", es: "bien" },
          { en: "this", es: "este" },
          { en: "weekend", es: "fin de semana" },
        ],
      },
      {
        id: "d10-en-el-futuro",
        frameStem: "En el futuro…",
        english: "In the future I want to work as a developer.",
        spanish: "En el futuro quiero trabajar como desarrolladora.",
        situationLabel: "Pensando adelante",
        why: "*En el futuro* sets the time; the verb stays in the present here.",
        wordHints: [
          { en: "future", es: "el futuro" },
          { en: "want", es: "quiero" },
          { en: "work", es: "trabajar" },
          { en: "as", es: "como" },
          { en: "developer", es: "desarrolladora" },
        ],
      },
      {
        id: "d10-algun-dia",
        frameStem: "Algún día…",
        english: "Someday I'm going to visit Latin America on my own.",
        spanish: "Algún día voy a visitar América Latina por mi cuenta.",
        situationLabel: "Un sueño",
        why: "*Algún día* opens a soft, far-off goal.",
        wordHints: [
          { en: "someday", es: "algún día" },
          { en: "i'm", es: "voy" },
          { en: "going", es: "a" },
          { en: "visit", es: "visitar" },
          { en: "latin", es: "América Latina" },
          { en: "america", es: "América Latina" },
          { en: "own", es: "mi cuenta" },
        ],
      },
      {
        id: "d10-mi-meta",
        frameStem: "Mi meta es…",
        english: "My goal is to speak fluently.",
        spanish: "Mi meta es hablar con fluidez.",
        situationLabel: "Una meta clara",
        why: "*Mi meta es* + infinitive names the aim directly.",
        wordHints: [
          { en: "my", es: "mi" },
          { en: "goal", es: "meta" },
          { en: "is", es: "es" },
          { en: "speak", es: "hablar" },
          { en: "fluently", es: "con fluidez" },
        ],
      },
      {
        id: "d10-sueno-con",
        frameStem: "Sueño con…",
        english: "I dream of living in a warm city someday.",
        spanish: "Sueño con vivir en una ciudad cálida algún día.",
        situationLabel: "Soñando",
        why: "*Soñar con* + infinitive or noun = 'to dream of'.",
        wordHints: [
          { en: "dream", es: "sueño" },
          { en: "of", es: "con" },
          { en: "living", es: "vivir" },
          { en: "warm", es: "cálida" },
          { en: "city", es: "una ciudad" },
          { en: "someday", es: "algún día" },
        ],
      },
    ],
  },
  {
    day: 11,
    themeEs: "Trabajo y propósito",
    line: "Tu trabajo cabe en una oración.",
    prompts: [
      {
        id: "d11-trabajo-en",
        frameStem: "Trabajo en…",
        english: "I work at a school for adults.",
        spanish: "Trabajo en una escuela para adultos.",
        situationLabel: "Presentándote",
        why: "*Trabajo en* + place tells where you work.",
        wordHints: [
          { en: "work", es: "trabajo" },
          { en: "at", es: "en" },
          { en: "school", es: "una escuela" },
          { en: "for", es: "para" },
          { en: "adults", es: "adultos" },
        ],
      },
      {
        id: "d11-estoy-trabajando-en",
        frameStem: "Estoy trabajando en…",
        english: "I'm working on a small app to practice Spanish.",
        spanish: "Estoy trabajando en una aplicación pequeña para practicar español.",
        situationLabel: "Un proyecto",
        why: "*Estoy trabajando en* = a project in progress.",
        wordHints: [
          { en: "i'm", es: "estoy" },
          { en: "working", es: "trabajando" },
          { en: "on", es: "en" },
          { en: "small", es: "pequeña" },
          { en: "app", es: "una aplicación" },
          { en: "practice", es: "practicar" },
          { en: "spanish", es: "español" },
        ],
      },
      {
        id: "d11-quiero-ayudar",
        frameStem: "Quiero ayudar…",
        english: "I want to help my students feel confident.",
        spanish: "Quiero ayudar a mis estudiantes a sentirse seguros.",
        situationLabel: "Tu propósito",
        why: "*Ayudar a* + person + *a* + infinitive: help someone do something.",
        wordHints: [
          { en: "want", es: "quiero" },
          { en: "help", es: "ayudar" },
          { en: "my", es: "mis" },
          { en: "students", es: "estudiantes" },
          { en: "feel", es: "sentirse" },
          { en: "confident", es: "seguros" },
        ],
      },
      {
        id: "d11-estoy-construyendo",
        frameStem: "Estoy construyendo…",
        english: "I'm building a daily Spanish practice.",
        spanish: "Estoy construyendo una práctica diaria de español.",
        situationLabel: "Poco a poco",
        why: "*Estoy construyendo* works for habits and lives, not just objects.",
        wordHints: [
          { en: "i'm", es: "estoy" },
          { en: "building", es: "construyendo" },
          { en: "daily", es: "diaria" },
          { en: "spanish", es: "de español" },
          { en: "practice", es: "una práctica" },
        ],
      },
      {
        id: "d11-mi-trabajo-consiste",
        frameStem: "Mi trabajo consiste en…",
        english: "My work consists of teaching English to adults.",
        spanish: "Mi trabajo consiste en enseñar inglés a adultos.",
        situationLabel: "Explicando tu trabajo",
        why: "*Consiste en* + infinitive describes what something is made of.",
        wordHints: [
          { en: "my", es: "mi" },
          { en: "work", es: "trabajo" },
          { en: "consists", es: "consiste" },
          { en: "of", es: "en" },
          { en: "teaching", es: "enseñar" },
          { en: "english", es: "inglés" },
          { en: "adults", es: "adultos" },
        ],
      },
    ],
  },
  {
    day: 12,
    themeEs: "Experiencias",
    line: "Lo que viviste, cuéntalo.",
    prompts: [
      {
        id: "d12-he-estado",
        frameStem: "He estado…",
        english: "I've been thinking about my career change.",
        spanish: "He estado pensando en mi cambio de carrera.",
        situationLabel: "Últimamente",
        why: "*He estado* + gerund = 'I have been [doing]…'.",
        wordHints: [
          { en: "i've", es: "he" },
          { en: "been", es: "estado" },
          { en: "thinking", es: "pensando" },
          { en: "about", es: "en" },
          { en: "my", es: "mi" },
          { en: "career", es: "de carrera" },
          { en: "change", es: "cambio" },
        ],
      },
      {
        id: "d12-he-visto",
        frameStem: "He visto…",
        english: "I've seen my students improve a lot this year.",
        spanish: "He visto a mis estudiantes mejorar muchísimo este año.",
        situationLabel: "Este año",
        why: "*He visto* is present perfect — recent experience that still counts.",
        wordHints: [
          { en: "i've", es: "he" },
          { en: "seen", es: "visto" },
          { en: "my", es: "mis" },
          { en: "students", es: "estudiantes" },
          { en: "improve", es: "mejorar" },
          { en: "lot", es: "muchísimo" },
          { en: "this", es: "este" },
          { en: "year", es: "año" },
        ],
      },
      {
        id: "d12-he-probado",
        frameStem: "He probado…",
        english: "I've tried several cafés in the neighborhood.",
        spanish: "He probado varios cafés del barrio.",
        situationLabel: "Explorando",
        why: "*Probar* = to try food, methods, or places.",
        wordHints: [
          { en: "i've", es: "he" },
          { en: "tried", es: "probado" },
          { en: "several", es: "varios" },
          { en: "cafés", es: "cafés" },
          { en: "neighborhood", es: "el barrio" },
        ],
      },
      {
        id: "d12-nunca-he",
        frameStem: "Nunca he…",
        english: "I've never visited Argentina.",
        spanish: "Nunca he visitado Argentina.",
        situationLabel: "Una confesión",
        why: "*Nunca he* + participle = 'I have never…'.",
        wordHints: [
          { en: "i've", es: "he" },
          { en: "never", es: "nunca" },
          { en: "visited", es: "visitado" },
          { en: "argentina", es: "Argentina" },
        ],
      },
      {
        id: "d12-ya-he",
        frameStem: "Ya he…",
        english: "I've already finished the hardest part of the week.",
        spanish: "Ya he terminado lo más difícil de la semana.",
        situationLabel: "Un alivio",
        why: "*Ya he* + participle adds 'already' to the present perfect.",
        wordHints: [
          { en: "i've", es: "he" },
          { en: "already", es: "ya" },
          { en: "finished", es: "terminado" },
          { en: "hardest", es: "lo más difícil" },
          { en: "part", es: "parte" },
          { en: "week", es: "la semana" },
        ],
      },
    ],
  },
  {
    day: 13,
    themeEs: "Posibilidades",
    line: "Imagina en voz alta, sin límites.",
    prompts: [
      {
        id: "d13-si-pudiera",
        frameStem: "Si pudiera…",
        english: "If I could, I would travel more.",
        spanish: "Si pudiera, viajaría más.",
        situationLabel: "Imaginando",
        why: "*Si pudiera* + conditional (-ría) is the 'if I could… I would…' pattern.",
        wordHints: [
          { en: "if", es: "si" },
          { en: "could", es: "pudiera" },
          { en: "would", es: "viajaría" },
          { en: "travel", es: "viajaría" },
          { en: "more", es: "más" },
        ],
      },
      {
        id: "d13-si-tuviera",
        frameStem: "Si tuviera…",
        english: "If I had more time, I'd learn a third language.",
        spanish: "Si tuviera más tiempo, aprendería un tercer idioma.",
        situationLabel: "Un what-if",
        why: "*Si tuviera* (past subjunctive) pairs with the conditional.",
        wordHints: [
          { en: "if", es: "si" },
          { en: "had", es: "tuviera" },
          { en: "more", es: "más" },
          { en: "time", es: "tiempo" },
          { en: "i'd", es: "aprendería" },
          { en: "learn", es: "aprendería" },
          { en: "third", es: "tercer" },
          { en: "language", es: "idioma" },
        ],
      },
      {
        id: "d13-haria",
        frameStem: "Haría…",
        english: "I would take more breaks during the day.",
        spanish: "Haría más pausas durante el día.",
        situationLabel: "Con perspectiva",
        why: "*Haría* is the conditional of *hacer* — 'I would do/make'.",
        wordHints: [
          { en: "would", es: "haría" },
          { en: "take", es: "haría" },
          { en: "more", es: "más" },
          { en: "breaks", es: "pausas" },
          { en: "during", es: "durante" },
          { en: "day", es: "el día" },
        ],
      },
      {
        id: "d13-intentaria",
        frameStem: "Intentaría…",
        english: "I would try not to worry so much.",
        spanish: "Intentaría no preocuparme tanto.",
        situationLabel: "Un consejo a ti misma",
        why: "*Intentaría* + infinitive = 'I would try to…'.",
        wordHints: [
          { en: "would", es: "intentaría" },
          { en: "try", es: "intentar" },
          { en: "not", es: "no" },
          { en: "worry", es: "preocuparme" },
          { en: "so", es: "tanto" },
          { en: "much", es: "tanto" },
        ],
      },
      {
        id: "d13-cambiaria",
        frameStem: "Cambiaría…",
        english: "I would change the way I organize my week.",
        spanish: "Cambiaría la forma en la que organizo mi semana.",
        situationLabel: "Siendo honesta",
        why: "*Cambiaría* is conditional — a hypothetical change, not a done one.",
        wordHints: [
          { en: "would", es: "cambiaría" },
          { en: "change", es: "cambiaría" },
          { en: "way", es: "la forma" },
          { en: "organize", es: "organizo" },
          { en: "my", es: "mi" },
          { en: "week", es: "semana" },
        ],
      },
    ],
  },
  {
    day: 14,
    themeEs: "Tu historia",
    line: "Tu historia, dicha por ti.",
    prompts: [
      {
        id: "d14-soy",
        frameStem: "Soy…",
        english: "I'm from Atlanta, but now I live in Boston.",
        spanish: "Soy de Atlanta, pero ahora vivo en Boston.",
        situationLabel: "Presentándote",
        why: "*Soy de* + place for origin; *soy* marks lasting identity.",
        wordHints: [
          { en: "i'm", es: "soy" },
          { en: "from", es: "de" },
          { en: "atlanta", es: "Atlanta" },
          { en: "but", es: "pero" },
          { en: "now", es: "ahora" },
          { en: "live", es: "vivo" },
          { en: "boston", es: "Boston" },
        ],
      },
      {
        id: "d14-antes-era",
        frameStem: "Antes era…",
        english: "I used to be quieter in big groups.",
        spanish: "Antes era más callada en grupos grandes.",
        situationLabel: "Mirando atrás",
        why: "*Antes era* (imperfect) describes how you used to be.",
        wordHints: [
          { en: "used", es: "era" },
          { en: "be", es: "era" },
          { en: "quieter", es: "más callada" },
          { en: "big", es: "grandes" },
          { en: "groups", es: "grupos" },
        ],
      },
      {
        id: "d14-ahora-soy",
        frameStem: "Ahora soy…",
        english: "Now I'm more patient with myself.",
        spanish: "Ahora soy más paciente conmigo misma.",
        situationLabel: "Un contraste",
        why: "*Ahora soy* contrasts the present with *antes era*.",
        wordHints: [
          { en: "now", es: "ahora" },
          { en: "i'm", es: "soy" },
          { en: "more", es: "más" },
          { en: "patient", es: "paciente" },
          { en: "with", es: "con" },
          { en: "myself", es: "conmigo misma" },
        ],
      },
      {
        id: "d14-lo-mas-importante",
        frameStem: "Lo más importante para mí es…",
        english: "The most important thing for me is to keep learning.",
        spanish: "Lo más importante para mí es seguir aprendiendo.",
        situationLabel: "Tus valores",
        why: "*Lo más importante es* + infinitive states a value.",
        wordHints: [
          { en: "most", es: "más" },
          { en: "important", es: "importante" },
          { en: "thing", es: "lo" },
          { en: "for", es: "para" },
          { en: "me", es: "mí" },
          { en: "is", es: "es" },
          { en: "keep", es: "seguir" },
          { en: "learning", es: "aprendiendo" },
        ],
      },
      {
        id: "d14-estoy-orgullosa",
        frameStem: "Estoy orgullosa de…",
        english: "I'm proud of my progress.",
        spanish: "Estoy orgullosa de mi progreso.",
        situationLabel: "Con orgullo",
        why: "*Orgullosa* agrees with a female speaker; *de* introduces what you're proud of.",
        wordHints: [
          { en: "i'm", es: "estoy" },
          { en: "proud", es: "orgullosa" },
          { en: "of", es: "de" },
          { en: "my", es: "mi" },
          { en: "progress", es: "progreso" },
        ],
      },
    ],
  },
];

/** Prompts per day (the daily session size). */
export const PROMPTS_PER_DAY = 5;

/** The SpeakDay for a given (already day-indexed) position, wrapping by total days. */
export function speakDayForIndex(currentDayIndex: number): SpeakDay {
  return speakDays[currentDayIndex % totalDays];
}

/** A single prompt within today's session. */
export function promptForSession(
  currentDayIndex: number,
  sessionIndex: number
): SpeakPrompt {
  const day = speakDayForIndex(currentDayIndex);
  return day.prompts[sessionIndex % day.prompts.length];
}

/** Parse a `why` note: returns segments, marking *asterisk* spans for italics. */
export function parseWhy(why: string): { text: string; italic: boolean }[] {
  const segments: { text: string; italic: boolean }[] = [];
  const re = /\*([^*]+)\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(why)) !== null) {
    if (m.index > last) {
      segments.push({ text: why.slice(last, m.index), italic: false });
    }
    segments.push({ text: m[1], italic: true });
    last = re.lastIndex;
  }
  if (last < why.length) {
    segments.push({ text: why.slice(last), italic: false });
  }
  return segments;
}
