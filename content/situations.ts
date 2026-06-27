export type SituationCategory =
  | "work"
  | "family"
  | "daily-life"
  | "learning"
  | "travel"
  | "feelings"
  | "food"
  | "current-events"
  | "dreams"
  | "future-plans";

export const categoryLabels: Record<SituationCategory, string> = {
  work: "Work",
  family: "Family & Friends",
  "daily-life": "Daily Life",
  learning: "Learning",
  travel: "Travel",
  feelings: "Feelings",
  food: "Food",
  "current-events": "Current Events",
  dreams: "Dreams",
  "future-plans": "Future Plans",
};

export type Phrase = {
  es: string;
  en: string;
  note?: string;
};

export type SituationWordHint = {
  en: string;
  es: string;
};

export type SituationPracticeItem = {
  id: string;
  english: string;
  spanish: string;
  why: string;
  wordHints?: SituationWordHint[];
};

export type Situation = {
  slug: string;
  label: string;
  category: SituationCategory;
  whenToUse?: string;
  phrases?: Phrase[];
  practiceItems?: SituationPracticeItem[];
  practicePrompts?: string[];
};

/**
 * Labels are written lowercase to read naturally after a frame stem:
 *   "Creo que… about your ESOL students."
 *
 * A few situations carry full phrasebanks; most are label-only and rely
 * on the flow's free-write input. We expand details over time.
 */
export const situations: Situation[] = [
  /* ─── Work ──────────────────────────────────────────────── */
  {
    slug: "your-esol-students",
    label: "about your ESOL students",
    category: "work",
    whenToUse: "Talking about your adult learners and how they're doing.",
    phrases: [
      { es: "Soy maestra de inglés para adultos.", en: "I'm an English teacher for adults." },
      { es: "Mis estudiantes vienen de muchos países.", en: "My students come from many countries." },
      { es: "Algunos están aprendiendo a leer por primera vez.", en: "Some are learning to read for the first time." },
      { es: "Lo más bonito es ver cuando algo les hace 'clic'.", en: "The best part is when something clicks for them." },
      { es: "A veces es difícil, pero vale la pena.", en: "Sometimes it's hard, but it's worth it." },
    ],
    practicePrompts: [
      "Describe one student you remember (no real names).",
      "Say one thing you love about your classroom.",
      "Say one thing that's hard about teaching adults.",
    ],
    practiceItems: [
      {
        id: "students-progress",
        english: "My students are making progress little by little.",
        spanish: "Mis estudiantes están avanzando poco a poco.",
        why: "*Avanzar* is a natural way to talk about progress, especially in learning.",
        wordHints: [
          { en: "students", es: "estudiantes" },
          { en: "making", es: "están" },
          { en: "progress", es: "avanzando" },
          { en: "little", es: "poco" },
        ],
      },
      {
        id: "students-click",
        english: "I love when something finally clicks for them.",
        spanish: "Me encanta cuando por fin algo les hace clic.",
        why: "*Por fin* adds the feeling of 'finally' after effort or waiting.",
        wordHints: [
          { en: "love", es: "me encanta" },
          { en: "finally", es: "por fin" },
          { en: "clicks", es: "hace clic" },
        ],
      },
    ],
  },
  {
    slug: "your-school",
    label: "about the school where you teach",
    category: "work",
    whenToUse: "Describing your program, your classroom, and the rhythm of the school day.",
    phrases: [
      { es: "Trabajo en una escuela para adultos.", en: "I work at a school for adults." },
      { es: "Las clases son prácticas y muy reales.", en: "The classes are practical and very real." },
      { es: "Hay estudiantes con muchos niveles diferentes.", en: "There are students at many different levels." },
      { es: "Mi salón casi siempre está lleno de energía.", en: "My classroom is almost always full of energy." },
    ],
    practicePrompts: [
      "Say where you work.",
      "Describe what your classroom feels like.",
      "Say one thing that makes your school special.",
    ],
    practiceItems: [
      {
        id: "school-adults",
        english: "I teach English at a school for adults.",
        spanish: "Enseño inglés en una escuela para adultos.",
        why: "*Enseño* is the simple present form for 'I teach.'",
        wordHints: [
          { en: "teach", es: "enseño" },
          { en: "english", es: "inglés" },
          { en: "school", es: "escuela" },
          { en: "adults", es: "adultos" },
        ],
      },
      {
        id: "school-levels",
        english: "Every class has students at different levels.",
        spanish: "Cada clase tiene estudiantes de diferentes niveles.",
        why: "*Cada* means 'each' or 'every' and stays the same before singular nouns.",
        wordHints: [
          { en: "every", es: "cada" },
          { en: "class", es: "clase" },
          { en: "different", es: "diferentes" },
          { en: "levels", es: "niveles" },
        ],
      },
    ],
  },
  { slug: "learning-to-code", label: "about learning to code", category: "work",
    whenToUse: "When someone asks what you're working on outside teaching.",
    phrases: [
      { es: "Estoy aprendiendo a programar en mi tiempo libre.", en: "I'm learning to code in my free time." },
      { es: "Quiero hacer un cambio de carrera con el tiempo.", en: "I want to make a career change eventually." },
      { es: "Es difícil, pero me gusta resolver problemas.", en: "It's hard, but I like solving problems." },
      { es: "Estoy haciendo proyectos pequeños para practicar.", en: "I'm doing small projects to practice." },
    ],
    practicePrompts: [
      "Say what programming language you're learning and why.",
      "Describe one project you're working on.",
      "Say what's frustrating and what's rewarding.",
    ],
    practiceItems: [
      {
        id: "code-free-time",
        english: "I'm learning to code in my free time.",
        spanish: "Estoy aprendiendo a programar en mi tiempo libre.",
        why: "*Estoy aprendiendo* emphasizes that the learning is in progress right now.",
        wordHints: [
          { en: "learning", es: "aprendiendo" },
          { en: "code", es: "programar" },
          { en: "free", es: "libre" },
          { en: "time", es: "tiempo" },
        ],
      },
      {
        id: "code-problems",
        english: "It's frustrating, but I like solving problems.",
        spanish: "Es frustrante, pero me gusta resolver problemas.",
        why: "*Me gusta* uses the thing you like as the subject: *resolver problemas*.",
        wordHints: [
          { en: "frustrating", es: "frustrante" },
          { en: "like", es: "me gusta" },
          { en: "solving", es: "resolver" },
          { en: "problems", es: "problemas" },
        ],
      },
    ],
  },
  {
    slug: "a-difficult-day-teaching",
    label: "about a difficult day teaching",
    category: "work",
    whenToUse: "After a hard class — tired students, heavy grammar, or material that didn't land.",
    phrases: [
      { es: "Hoy fue un día difícil en clase.", en: "Today was a difficult day in class." },
      { es: "Mis estudiantes estaban cansados y la lección era muy de gramática.", en: "My students were tired and the lesson was too grammar-heavy." },
      { es: "El material no les interesaba mucho.", en: "The material wasn't very interesting to them." },
      { es: "Después camino, como algo fácil y trato de desconectar.", en: "Afterward I walk, eat something easy, and try to unwind." },
    ],
    practicePrompts: [
      "Say what made today hard.",
      "Say how your students seemed.",
      "Say what you do to recover after a tough class.",
    ],
    practiceItems: [
      {
        id: "hard-day-tired",
        english: "It was hard today because the students were tired.",
        spanish: "Hoy fue difícil porque los estudiantes estaban cansados.",
        why: "*Porque* links the reason directly — natural for explaining a hard day.",
        wordHints: [
          { en: "hard", es: "difícil" },
          { en: "because", es: "porque" },
          { en: "tired", es: "cansados" },
        ],
      },
      {
        id: "hard-day-grammar",
        english: "The lesson felt too grammar-heavy and not interesting enough.",
        spanish: "La lección se sintió muy de gramática y no lo bastante interesante.",
        why: "*Se sintió* is conversational for how something felt or seemed.",
        wordHints: [
          { en: "lesson", es: "lección" },
          { en: "felt", es: "se sintió" },
          { en: "interesting", es: "interesante" },
        ],
      },
    ],
  },
  {
    slug: "your-coworkers",
    label: "about your coworkers",
    category: "work",
    whenToUse: "Talking about the people you work with and who you turn to for help.",
    phrases: [
      { es: "Tengo compañeros con quienes puedo resolver problemas.", en: "I have coworkers I can problem-solve with." },
      { es: "Les pido consejo cuando no sé cómo manejar algo.", en: "I ask them for advice when I'm not sure how to handle something." },
      { es: "No soy maestra de formación, pero me importa mucho y trabajo duro.", en: "I'm not a trained teacher, but I care deeply and work very hard." },
      { es: "Me gusta cuando podemos pensar juntos en cómo mejorar las clases.", en: "I like when we can think together about how to improve classes." },
    ],
    practicePrompts: [
      "Say who you go to when you need help at work.",
      "Say one thing you appreciate about a colleague.",
      "Say something you wish you could tell a coworker in Spanish.",
    ],
    practiceItems: [
      {
        id: "coworkers-advice",
        english: "I have coworkers I can ask for advice when I'm unsure.",
        spanish: "Tengo compañeros a quienes puedo pedir consejo cuando no estoy segura.",
        why: "*A quienes* is the natural relative pronoun when talking about people you ask.",
        wordHints: [
          { en: "coworkers", es: "compañeros" },
          { en: "advice", es: "consejo" },
          { en: "unsure", es: "no estoy segura" },
        ],
      },
      {
        id: "coworkers-care",
        english: "I'm not a trained teacher, but I care and I work hard.",
        spanish: "No soy maestra de formación, pero me importa y trabajo duro.",
        why: "*Me importa* expresses that you care — warmer than *me preocupa* here.",
        wordHints: [
          { en: "trained", es: "formación" },
          { en: "care", es: "me importa" },
          { en: "work hard", es: "trabajo duro" },
        ],
      },
    ],
  },
  {
    slug: "a-meeting",
    label: "about a work meeting",
    category: "work",
    whenToUse: "Describing a recent meeting — training, tech, or planning at MLRI.",
    phrases: [
      { es: "Tuve una reunión muy útil sobre Brightspace.", en: "I had a really helpful meeting about Brightspace." },
      { es: "Estaba nerviosa porque no sabía si mi idea tenía sentido.", en: "I was nervous because I wasn't sure if my idea made sense." },
      { es: "La persona fue amable y me dijo que el proyecto tenía apoyo.", en: "The person was kind and told me the project was supported." },
      { es: "Después me sentí aliviada y con más confianza.", en: "Afterward I felt relieved and more confident." },
    ],
    practicePrompts: [
      "Say what the meeting was about.",
      "Say how you felt before and after.",
      "Say one thing you learned from it.",
    ],
    practiceItems: [
      {
        id: "meeting-nervous",
        english: "I was nervous because I wasn't sure my idea made sense.",
        spanish: "Estaba nerviosa porque no estaba segura de que mi idea tuviera sentido.",
        why: "*Tuviera sentido* uses subjunctive after doubt — very natural in real speech.",
        wordHints: [
          { en: "nervous", es: "nerviosa" },
          { en: "sure", es: "segura" },
          { en: "made sense", es: "tuviera sentido" },
        ],
      },
      {
        id: "meeting-supported",
        english: "They told me the project was supported, and I felt relieved.",
        spanish: "Me dijeron que el proyecto tenía apoyo y me sentí aliviada.",
        why: "*Me sentí aliviada* captures the relief after worry — a very human follow-up.",
        wordHints: [
          { en: "supported", es: "apoyo" },
          { en: "felt", es: "me sentí" },
          { en: "relieved", es: "aliviada" },
        ],
      },
    ],
  },
  {
    slug: "a-side-project",
    label: "about a coding side project",
    category: "work",
    whenToUse: "Talking about what you're building — the Spanish app, ESOL LMS, or MLRI tools.",
    phrases: [
      { es: "Estoy construyendo una app para aprender español con frases de la vida real.", en: "I'm building a Spanish learning app with real-life sentence frames." },
      { es: "También trabajo en un LMS para mis clases de ESOL.", en: "I'm also working on an LMS for my ESOL classes." },
      { es: "Lo difícil es convertir una idea grande en algo simple.", en: "The hard part is turning a big idea into something simple." },
      { es: "Es gratificante cuando la estructura por fin tiene sentido.", en: "It's rewarding when the structure finally makes sense." },
    ],
    practicePrompts: [
      "Say what project you're working on right now.",
      "Say what's frustrating about it.",
      "Say what's rewarding when it clicks.",
    ],
    practiceItems: [
      {
        id: "side-project-spanish-app",
        english: "I'm building a Spanish site that uses real examples instead of textbook drills.",
        spanish: "Estoy construyendo un sitio de español que usa ejemplos reales en lugar de ejercicios de libro.",
        why: "*En lugar de* means 'instead of' — handy when contrasting real life vs textbook.",
        wordHints: [
          { en: "building", es: "construyendo" },
          { en: "real", es: "reales" },
          { en: "instead of", es: "en lugar de" },
        ],
      },
      {
        id: "side-project-simple",
        english: "The frustrating part is making something huge feel simple and clean.",
        spanish: "Lo frustrante es hacer que algo enorme se sienta simple y limpio.",
        why: "*Lo frustrante es* frames the hardest part without sounding whiny.",
        wordHints: [
          { en: "frustrating", es: "frustrante" },
          { en: "huge", es: "enorme" },
          { en: "simple", es: "simple" },
        ],
      },
    ],
  },
  {
    slug: "evening-classes",
    label: "about teaching evening classes",
    category: "work",
    whenToUse: "Your Tue/Thu 6–8pm ESOL schedule and how it shapes your day.",
    phrases: [
      { es: "Mis clases de ESOL son los martes y jueves de seis a ocho de la noche.", en: "My ESOL classes are Tuesday and Thursday from six to eight at night." },
      { es: "Trabajo de nueve a cinco, y después enseño por la noche.", en: "I work nine to five, and then I teach at night." },
      { es: "Los estudiantes vienen después del trabajo, cansados pero con ganas.", en: "Students come after work — tired but motivated." },
      { es: "Me gusta que cada segundo de la clase cuente.", en: "I like when every second of class counts." },
    ],
    practicePrompts: [
      "Say when you teach and how long class lasts.",
      "Describe what your evening students are like.",
      "Say how you keep the energy up at night.",
    ],
    practiceItems: [
      {
        id: "evening-schedule",
        english: "I teach ESOL Tuesday and Thursday evenings, six to eight.",
        spanish: "Doy clases de ESOL los martes y jueves por la noche, de seis a ocho.",
        why: "*Por la noche* is the natural phrase for evening hours.",
        wordHints: [
          { en: "teach", es: "doy clases" },
          { en: "evening", es: "por la noche" },
          { en: "Tuesday", es: "martes" },
        ],
      },
      {
        id: "evening-energy",
        english: "We move quickly — I want every second of class to count.",
        spanish: "Nos movemos rápido — quiero que cada segundo de la clase cuente.",
        why: "*Que cuente* uses subjunctive for what you want to happen — very natural here.",
        wordHints: [
          { en: "move", es: "nos movemos" },
          { en: "quickly", es: "rápido" },
          { en: "count", es: "cuente" },
        ],
      },
    ],
  },

  /* ─── Family & Friends ──────────────────────────────────── */
  { slug: "family-in-atlanta", label: "about your family in Atlanta", category: "family",
    whenToUse: "Catching up about people back home.",
    phrases: [
      { es: "Mi familia vive en Atlanta.", en: "My family lives in Atlanta." },
      { es: "Trato de llamar a mi mamá cada semana.", en: "I try to call my mom every week." },
      { es: "Los extraño, sobre todo en los días grises.", en: "I miss them, especially on gray days." },
      { es: "Voy a visitarlos un par de veces al año.", en: "I go visit them a couple of times a year." },
    ],
    practicePrompts: [
      "Say who in your family you talk to most.",
      "Describe what you miss about being there.",
      "Say when you'll see them next.",
    ],
    practiceItems: [
      {
        id: "atlanta-call",
        english: "I try to call my mom every week.",
        spanish: "Trato de llamar a mi mamá cada semana.",
        why: "*Trato de* + infinitive is a natural way to say 'I try to.'",
        wordHints: [
          { en: "try", es: "trato de" },
          { en: "call", es: "llamar" },
          { en: "mom", es: "mamá" },
          { en: "week", es: "semana" },
        ],
      },
      {
        id: "atlanta-miss",
        english: "I miss my family, especially on gray days.",
        spanish: "Extraño a mi familia, sobre todo en los días grises.",
        why: "*Extraño a* is used for missing people.",
        wordHints: [
          { en: "miss", es: "extraño" },
          { en: "family", es: "familia" },
          { en: "especially", es: "sobre todo" },
          { en: "gray", es: "grises" },
        ],
      },
    ],
  },
  { slug: "being-far-from-home", label: "about being far from home", category: "family",
    whenToUse: "The push and pull of living far from family — good days and gray days.",
    phrases: [
      { es: "Vivo en Boston y mi familia está en Georgia.", en: "I live in Boston and my family is in Georgia." },
      { es: "En un buen día, me siento independiente y con ganas de explorar.", en: "On a good day, I feel independent and excited to explore." },
      { es: "En un día gris, me siento sola y extraño mi red de apoyo.", en: "On a gray day, I feel lonely and miss my support system." },
      { es: "Extraño no tener que explicarme todo el tiempo.", en: "I miss not having to explain myself all the time." },
    ],
    practicePrompts: [
      "Say where you live now and where your family is.",
      "Describe a good day far from home.",
      "Describe a hard day far from home.",
    ],
    practiceItems: [
      {
        id: "distance-good-day",
        english: "On a good day, being far from home feels independent and exciting.",
        spanish: "En un buen día, estar lejos de casa se siente independiente y emocionante.",
        why: "*Estar lejos de casa* is the natural phrase for being far from home.",
        wordHints: [
          { en: "good day", es: "buen día" },
          { en: "far", es: "lejos" },
          { en: "home", es: "casa" },
          { en: "exciting", es: "emocionante" },
        ],
      },
      {
        id: "distance-gray-day",
        english: "On a gray day, it feels lonely — like everyone else has built-in support.",
        spanish: "En un día gris, se siente solitario — como si todos tuvieran apoyo de fábrica.",
        why: "*Apoyo de fábrica* is a playful way to say built-in support — casual and vivid.",
        wordHints: [
          { en: "gray day", es: "día gris" },
          { en: "lonely", es: "solitario" },
          { en: "everyone", es: "todos" },
          { en: "support", es: "apoyo" },
        ],
      },
    ],
  },
  {
    slug: "your-partner",
    label: "about your partner",
    category: "family",
    whenToUse: "Talking about José and daily life together in Boston.",
    phrases: [
      { es: "Vivo en Boston con José.", en: "I live in Boston with José." },
      { es: "Él es de El Salvador.", en: "He's from El Salvador." },
      { es: "Después del trabajo, a veces hablamos, cocinamos o seguimos con nuestros proyectos.", en: "After work, sometimes we talk, cook, or keep working on our projects." },
      { es: "Practicar español con él me ayuda a sentirme más natural.", en: "Practicing Spanish with him helps me feel more natural." },
    ],
    practicePrompts: [
      "Say where your partner is from.",
      "Describe a typical evening together.",
      "Say how he helps your Spanish.",
    ],
    practiceItems: [
      {
        id: "partner-salvador",
        english: "My boyfriend is from El Salvador.",
        spanish: "Mi novio es de El Salvador.",
        why: "*Es de* is the simple way to say where someone is from.",
        wordHints: [
          { en: "boyfriend", es: "novio" },
          { en: "from", es: "de" },
        ],
      },
      {
        id: "partner-evening",
        english: "After work we usually decompress — talk, make food, or keep building things.",
        spanish: "Después del trabajo normalmente nos relajamos — hablamos, hacemos comida o seguimos construyendo cosas.",
        why: "*Nos relajamos* is conversational for unwinding together.",
        wordHints: [
          { en: "after work", es: "después del trabajo" },
          { en: "unwind", es: "nos relajamos" },
          { en: "food", es: "comida" },
        ],
      },
    ],
  },
  {
    slug: "a-close-friend",
    label: "about a close friend",
    category: "family",
    whenToUse: "Friends here and back home — Emma, college friends, the group chat.",
    phrases: [
      { es: "Mi mejor amiga de la infancia se llama Emma y vive en Nueva York.", en: "My best friend from childhood is Emma, and she lives in New York." },
      { es: "Mis amigos de la universidad y yo hablamos casi todos los días en el chat.", en: "My college friends and I talk almost every day in the group chat." },
      { es: "Hablamos de deportes, estrés y la versión de mí que existía antes de Boston.", en: "We talk about sports, stress, and the version of me that existed before Boston." },
      { es: "Todos éramos nadadores — eso me hizo fuerte y trabajadora.", en: "We were all swimmers — that made me tough and a hard worker." },
    ],
    practicePrompts: [
      "Say who your closest friend is and where they live.",
      "Say what you usually talk about.",
      "Describe one memory from growing up together.",
    ],
    practiceItems: [
      {
        id: "friend-emma",
        english: "I text my best friend Emma from childhood — she lives in NYC now.",
        spanish: "Le escribo a mi mejor amiga Emma de la infancia — ahora vive en Nueva York.",
        why: "*Le escribo* is the natural pattern for texting someone.",
        wordHints: [
          { en: "text", es: "le escribo" },
          { en: "best friend", es: "mejor amiga" },
          { en: "childhood", es: "infancia" },
        ],
      },
      {
        id: "friend-swimmers",
        english: "We were all competitive swimmers growing up.",
        spanish: "Todos éramos nadadores competitivos cuando éramos jóvenes.",
        why: "*Éramos* is imperfect for who you used to be over time.",
        wordHints: [
          { en: "all", es: "todos" },
          { en: "swimmers", es: "nadadores" },
          { en: "growing up", es: "éramos jóvenes" },
        ],
      },
    ],
  },
  {
    slug: "growing-up-in-the-south",
    label: "about growing up in the South",
    category: "family",
    whenToUse: "Georgia roots — warmth, humor, swimming, and what home felt like.",
    phrases: [
      { es: "Crecí en Georgia.", en: "I grew up in Georgia." },
      { es: "Mi infancia tenía calidez, humor, presión y una sensación muy específica de hogar.", en: "My childhood had warmth, humor, pressure, and a very specific sense of home." },
      { es: "Nadé en competencia y eso me hizo trabajadora y fuerte.", en: "I swam competitively and that made me a hard worker and tough." },
      { es: "Extraño la comida sureña y la facilidad de estar con gente que ya me conoce.", en: "I miss Southern food and how easy it is to be around people who already know me." },
    ],
    practicePrompts: [
      "Say where you grew up.",
      "Describe your childhood in a few words.",
      "Say one thing from the South you still carry with you.",
    ],
    practiceItems: [
      {
        id: "south-georgia",
        english: "I grew up in Georgia — Athens, near Atlanta.",
        spanish: "Crecí en Georgia — Athens, cerca de Atlanta.",
        why: "*Crecí* is the natural preterite for where you grew up.",
        wordHints: [
          { en: "grew up", es: "crecí" },
          { en: "near", es: "cerca de" },
        ],
      },
      {
        id: "south-swimming",
        english: "Swimming competitively made me tough and a hard worker.",
        spanish: "Nadar en competencia me hizo fuerte y trabajadora.",
        why: "*Me hizo* explains how something shaped you — very useful for life stories.",
        wordHints: [
          { en: "swimming", es: "nadar" },
          { en: "made me", es: "me hizo" },
          { en: "tough", es: "fuerte" },
        ],
      },
    ],
  },
  {
    slug: "your-mom",
    label: "about your mom",
    category: "family",
    whenToUse: "Talking about your mom — strength, humor, and the advice she gives.",
    phrases: [
      { es: "Mi mamá es fuerte — también tiene AuDHD como yo.", en: "My mom is strong — she has AuDHD like me." },
      { es: "Es muy graciosa.", en: "She's really funny." },
      { es: "Se preocupa porque le importo.", en: "She worries because she cares." },
      { es: "Siempre me da consejos.", en: "She always gives me advice." },
    ],
    practicePrompts: [
      "Say three things about your mom.",
      "Say something she always tells you.",
      "Say when you'll see her next.",
    ],
    practiceItems: [
      {
        id: "mom-strong",
        english: "My mom is strong and funny — she has AuDHD like me.",
        spanish: "Mi mamá es fuerte y graciosa — también tiene AuDHD como yo.",
        why: "*También tiene* links you and her with something shared.",
        wordHints: [
          { en: "mom", es: "mamá" },
          { en: "strong", es: "fuerte" },
          { en: "funny", es: "graciosa" },
        ],
      },
      {
        id: "mom-visit",
        english: "I hope to visit her in the next few weeks.",
        spanish: "Espero visitarla en las próximas semanas.",
        why: "*Visitarla* attaches the pronoun to the verb — natural when the person is clear.",
        wordHints: [
          { en: "hope", es: "espero" },
          { en: "visit", es: "visitarla" },
          { en: "weeks", es: "semanas" },
        ],
      },
    ],
  },
  {
    slug: "making-friends-in-boston",
    label: "about making friends in Boston",
    category: "family",
    whenToUse: "The honest version — schedules, staying home, liking people but not putting yourself out there.",
    phrases: [
      { es: "Casi todos tienen horarios diferentes.", en: "Almost everyone has different schedules." },
      { es: "Me gusta la gente aquí, pero no me gusta exponerme mucho.", en: "I like people here, but I don't like putting myself out there." },
      { es: "Prefiero estar en casa.", en: "I prefer being at home." },
      { es: "José es mi persona más cercana en la ciudad.", en: "José is my closest person in the city." },
    ],
    practicePrompts: [
      "Say whether making friends here feels easy or hard.",
      "Say what gets in the way.",
      "Say who you feel closest to in Boston.",
    ],
    practiceItems: [
      {
        id: "friends-schedules",
        english: "It's hard because everyone has different schedules.",
        spanish: "Es difícil porque casi todos tienen horarios diferentes.",
        why: "*Horarios diferentes* is the everyday way to talk about busy, mismatched lives.",
        wordHints: [
          { en: "hard", es: "difícil" },
          { en: "schedules", es: "horarios" },
          { en: "everyone", es: "todos" },
        ],
      },
      {
        id: "friends-home",
        english: "I like people here, but I prefer being at home.",
        spanish: "Me gusta la gente aquí, pero prefiero estar en casa.",
        why: "*Prefiero* states a preference plainly — good for honest small talk.",
        wordHints: [
          { en: "like", es: "me gusta" },
          { en: "prefer", es: "prefiero" },
          { en: "home", es: "casa" },
        ],
      },
    ],
  },

  /* ─── Daily Life ────────────────────────────────────────── */
  {
    slug: "your-morning",
    label: "about your morning routine",
    category: "daily-life",
    whenToUse: "Coffee, meds, skincare, and getting to the gym before work — even when mornings are hard.",
    phrases: [
      { es: "No soy persona de mañanas — mi ADHD lo hace más difícil.", en: "I'm not a morning person — my ADHD makes it harder." },
      { es: "Primero tomo café, jugo de cereza y mis medicamentos.", en: "First I have coffee, tart cherry juice, and my meds." },
      { es: "Después hago skincare y voy al gimnasio antes del trabajo.", en: "Then I do skincare and go to the gym before work." },
      { es: "Un pequeño placer: tortitas de arroz con chocolate, mantequilla de maní y EDM.", en: "A small pleasure: chocolate rice cakes with peanut butter and EDM." },
    ],
    practicePrompts: [
      "Say the first three things you do in the morning.",
      "Say what makes mornings hard for you.",
      "Say one small morning pleasure.",
    ],
    practiceItems: [
      {
        id: "morning-not-person",
        english: "I'm not a morning person — ADHD makes it harder.",
        spanish: "No soy persona de mañanas — el ADHD me lo hace más difícil.",
        why: "*Persona de mañanas* is the natural idiom for a morning person.",
        wordHints: [
          { en: "morning person", es: "persona de mañanas" },
          { en: "harder", es: "más difícil" },
        ],
      },
      {
        id: "morning-gym",
        english: "I try to work out before work.",
        spanish: "Trato de hacer ejercicio antes del trabajo.",
        why: "*Trato de* + infinitive for something you aim to do, not always succeed at.",
        wordHints: [
          { en: "try", es: "trato de" },
          { en: "work out", es: "hacer ejercicio" },
          { en: "before", es: "antes de" },
        ],
      },
    ],
  },
  {
    slug: "the-t",
    label: "about taking the T",
    category: "daily-life",
    whenToUse: "Talking about your commute, delays, and moving around Boston.",
    phrases: [
      { es: "Tomo el T para ir al trabajo.", en: "I take the T to go to work." },
      { es: "A veces se tarda más de lo esperado.", en: "Sometimes it takes longer than expected." },
      { es: "Cuando hace frío, la espera se siente eterna.", en: "When it's cold, the wait feels endless." },
      { es: "Me gusta mirar la ciudad por la ventana.", en: "I like looking at the city through the window." },
    ],
    practicePrompts: [
      "Say how you get to work.",
      "Say what happens when the train is late.",
      "Describe one thing you notice on the ride.",
    ],
    practiceItems: [
      {
        id: "t-work",
        english: "I usually take the T to work.",
        spanish: "Normalmente tomo el T para ir al trabajo.",
        why: "*Para ir* means 'in order to go' and is common when explaining transportation.",
        wordHints: [
          { en: "usually", es: "normalmente" },
          { en: "take", es: "tomo" },
          { en: "work", es: "trabajo" },
        ],
      },
      {
        id: "t-late",
        english: "The train was late, so I arrived a little stressed.",
        spanish: "El tren llegó tarde, así que llegué un poco estresada.",
        why: "*Así que* connects a cause with a result: 'so.'",
        wordHints: [
          { en: "train", es: "tren" },
          { en: "late", es: "tarde" },
          { en: "arrived", es: "llegué" },
          { en: "stressed", es: "estresada" },
        ],
      },
    ],
  },
  {
    slug: "your-apartment",
    label: "about your apartment in Boston",
    category: "daily-life",
    whenToUse: "Describing your home, what you like about it, and what still feels unfinished.",
    phrases: [
      { es: "Vivo en un apartamento pequeño en East Boston.", en: "I live in a small apartment in East Boston." },
      { es: "Es acogedor, pero siempre hay proyectos por todas partes.", en: "It's cozy, but there are always projects everywhere." },
      { es: "Mi lugar favorito es el sofá frente al televisor, con mi laptop y un café.", en: "My favorite spot is the couch in front of the TV, with my laptop and coffee." },
      { es: "A veces Boston todavía se siente temporal, aunque ya tengo vida aquí.", en: "Sometimes Boston still feels temporary, even though I've built a life here." },
    ],
    practicePrompts: [
      "Describe your apartment in one sentence.",
      "Say what part of it you like most.",
      "Say what still doesn't feel like home yet.",
    ],
    practiceItems: [
      {
        id: "apartment-cozy",
        english: "My apartment is small and cozy, but there are projects everywhere.",
        spanish: "Mi apartamento es pequeño y acogedor, pero hay proyectos por todas partes.",
        why: "*Acogedor* is warmer than *pequeño* alone — cozy, welcoming.",
        wordHints: [
          { en: "small", es: "pequeño" },
          { en: "cozy", es: "acogedor" },
          { en: "projects", es: "proyectos" },
          { en: "everywhere", es: "por todas partes" },
        ],
      },
      {
        id: "apartment-couch",
        english: "My favorite spot is the couch with my laptop and coffee.",
        spanish: "Mi lugar favorito es el sofá con mi laptop y un café.",
        why: "*Lugar favorito* is the natural phrase for a favorite spot in a place.",
        wordHints: [
          { en: "favorite", es: "favorito" },
          { en: "spot", es: "lugar" },
          { en: "couch", es: "sofá" },
          { en: "coffee", es: "café" },
        ],
      },
    ],
  },
  {
    slug: "boston-winter",
    label: "about Boston winter",
    category: "daily-life",
    whenToUse: "Talking about cold weather, short days, and getting through winter.",
    phrases: [
      { es: "El invierno en Boston se siente larguísimo.", en: "Winter in Boston feels very long." },
      { es: "Me cuesta salir cuando oscurece tan temprano.", en: "It's hard for me to go out when it gets dark so early." },
      { es: "El frío me cansa, pero también me gusta estar en casa.", en: "The cold tires me out, but I also like being at home." },
      { es: "Estoy contando los días para la primavera.", en: "I'm counting the days until spring." },
    ],
    practicePrompts: [
      "Say how Boston winter feels to you.",
      "Say what helps you get through cold days.",
      "Say what you miss in winter.",
    ],
    practiceItems: [
      {
        id: "winter-long",
        english: "Boston winter feels very long to me.",
        spanish: "El invierno en Boston se me hace larguísimo.",
        why: "*Se me hace* is conversational for 'it feels/seems to me.'",
        wordHints: [
          { en: "winter", es: "invierno" },
          { en: "feels", es: "se me hace" },
          { en: "long", es: "largo" },
        ],
      },
      {
        id: "winter-dark",
        english: "It's hard for me when it gets dark so early.",
        spanish: "Me cuesta cuando oscurece tan temprano.",
        why: "*Me cuesta* means 'it's hard for me' and sounds natural for emotional effort.",
        wordHints: [
          { en: "hard", es: "me cuesta" },
          { en: "dark", es: "oscurece" },
          { en: "early", es: "temprano" },
        ],
      },
    ],
  },
  {
    slug: "the-weekend",
    label: "about your weekend",
    category: "daily-life",
    whenToUse: "Saturday movement and errands, Sunday reset — and NFL Sundays in the fall.",
    phrases: [
      { es: "Los sábados hago yoga o fuerza, tomo café, camino y pongo al día lo que no terminé.", en: "Saturdays I do yoga or strength, get coffee, walk, and catch up on what I didn't finish." },
      { es: "El domingo es día de reinicio: planear, comprar comida, lavar ropa.", en: "Sunday is reset day: plan, grocery shop, do laundry." },
      { es: "En otoño, los domingos son de la NFL todo el día.", en: "In the fall, Sundays are NFL all day long." },
      { es: "Hago yoga por la noche para calmarme.", en: "I do yoga at night to calm my brain down." },
    ],
    practicePrompts: [
      "Describe a typical Saturday.",
      "Say what Sunday is for.",
      "Say how you recharge on the weekend.",
    ],
    practiceItems: [
      {
        id: "weekend-saturday",
        english: "Saturday is yoga, coffee, walking, and catching up.",
        spanish: "El sábado es yoga, café, caminar y ponerse al día.",
        why: "*Ponerse al día* is the idiomatic phrase for catching up.",
        wordHints: [
          { en: "Saturday", es: "sábado" },
          { en: "catching up", es: "ponerse al día" },
          { en: "walking", es: "caminar" },
        ],
      },
      {
        id: "weekend-sunday-reset",
        english: "Sunday I try to reset — groceries, laundry, plan the week.",
        spanish: "El domingo trato de reiniciar — compras, lavandería, planear la semana.",
        why: "*Reiniciar* works literally and emotionally for a fresh start.",
        wordHints: [
          { en: "Sunday", es: "domingo" },
          { en: "reset", es: "reiniciar" },
          { en: "laundry", es: "lavandería" },
        ],
      },
    ],
  },
  {
    slug: "errands",
    label: "about errands you ran today",
    category: "daily-life",
    whenToUse: "Groceries, laundry, pharmacy, coffee runs — the ordinary stuff of the week.",
    phrases: [
      { es: "Fui al supermercado y a la farmacia.", en: "I went to the grocery store and the pharmacy." },
      { es: "También lavé la ropa y fui por café.", en: "I also did laundry and grabbed coffee." },
      { es: "A veces los mandados son lo que llena el fin de semana.", en: "Sometimes errands are what fill up the weekend." },
      { es: "Caminar mientras hago mandados me ayuda a despejarme.", en: "Walking while I run errands helps me clear my head." },
    ],
    practicePrompts: [
      "List two errands you ran recently.",
      "Say which errand you always put off.",
      "Say how errands fit into your weekend.",
    ],
    practiceItems: [
      {
        id: "errands-grocery",
        english: "I went grocery shopping and did laundry today.",
        spanish: "Hoy fui de compras al super y lavé la ropa.",
        why: "*Fui de compras* is conversational for went shopping.",
        wordHints: [
          { en: "grocery", es: "super" },
          { en: "laundry", es: "lavé la ropa" },
          { en: "today", es: "hoy" },
        ],
      },
      {
        id: "errands-coffee",
        english: "I also stopped for coffee on the way.",
        spanish: "También paré por un café en el camino.",
        why: "*Paré por* captures stopping for something along the way.",
        wordHints: [
          { en: "stopped", es: "paré" },
          { en: "coffee", es: "café" },
          { en: "way", es: "camino" },
        ],
      },
    ],
  },
  {
    slug: "working-out",
    label: "about working out",
    category: "daily-life",
    whenToUse: "Yoga, strength training, pilates — movement that helps your mood and energy.",
    phrases: [
      { es: "Hago yoga, levanto pesas y a veces pilates.", en: "I do yoga, lift weights, and sometimes pilates." },
      { es: "El movimiento me ayuda mucho con el ánimo.", en: "Movement helps my mood a lot." },
      { es: "Los sábados suelo ir a una clase.", en: "On Saturdays I usually go to a class." },
      { es: "Cuando no tengo energía, igual intento moverme un poco.", en: "When I don't have energy, I still try to move a little." },
    ],
    practicePrompts: [
      "Say what kinds of exercise you do.",
      "Say how movement affects your mood.",
      "Say when you usually work out.",
    ],
    practiceItems: [
      {
        id: "workout-yoga",
        english: "I do yoga at night to calm down.",
        spanish: "Hago yoga por la noche para calmarme.",
        why: "*Para calmarme* explains purpose — to calm myself down.",
        wordHints: [
          { en: "yoga", es: "yoga" },
          { en: "night", es: "noche" },
          { en: "calm down", es: "calmarme" },
        ],
      },
      {
        id: "workout-mood",
        english: "Movement really helps my mood — I have AuDHD and my surroundings matter.",
        spanish: "El movimiento me ayuda mucho con el ánimo — tengo AuDHD y mi entorno importa.",
        why: "*Mi entorno importa* is a natural way to say your surroundings matter.",
        wordHints: [
          { en: "movement", es: "movimiento" },
          { en: "mood", es: "ánimo" },
          { en: "surroundings", es: "entorno" },
        ],
      },
    ],
  },
  {
    slug: "sports-you-watch",
    label: "about sports you watch",
    category: "daily-life",
    whenToUse: "Basketball, soccer, NFL — what you watched last night or on Sunday.",
    phrases: [
      { es: "Anoche vi baloncesto y fútbol.", en: "Last night I watched basketball and soccer." },
      { es: "En otoño veo la NFL todo el domingo.", en: "In the fall I watch the NFL all Sunday." },
      { es: "Le escribo a mi papá sobre deportes.", en: "I text my dad about sports." },
      { es: "Los deportes son una forma fácil de conectar con mi familia.", en: "Sports are an easy way to connect with my family." },
    ],
    practicePrompts: [
      "Say what you watched recently.",
      "Say who you talk to about sports.",
      "Say what sport you follow most in the fall.",
    ],
    practiceItems: [
      {
        id: "sports-last-night",
        english: "Last night I watched basketball and made dinner.",
        spanish: "Anoche vi baloncesto y hice la cena.",
        why: "*Anoche* is the simple time marker for last night.",
        wordHints: [
          { en: "last night", es: "anoche" },
          { en: "basketball", es: "baloncesto" },
          { en: "dinner", es: "cena" },
        ],
      },
      {
        id: "sports-dad",
        english: "I text my dad about sports.",
        spanish: "Le escribo a mi papá sobre deportes.",
        why: "*Le escribo a* is the standard pattern for messaging someone.",
        wordHints: [
          { en: "text", es: "le escribo" },
          { en: "dad", es: "papá" },
          { en: "sports", es: "deportes" },
        ],
      },
    ],
  },
  {
    slug: "your-neighborhood",
    label: "about your neighborhood",
    category: "daily-life",
    whenToUse: "Describing East Boston, the waterfront, and the places you walk to often.",
    phrases: [
      { es: "Vivo en East Boston, cerca del agua.", en: "I live in East Boston, near the water." },
      { es: "Mi barrio es diverso y siempre está cambiando.", en: "My neighborhood is diverse and always changing." },
      { es: "Camino mucho a cafeterías, al supermercado y al waterfront.", en: "I walk a lot to coffee shops, the grocery store, and the waterfront." },
      { es: "En verano, Boston se siente viva de verdad.", en: "In summer, Boston really comes to life." },
    ],
    practicePrompts: [
      "Describe your neighborhood in three words.",
      "Say where you walk when you need to clear your head.",
      "Say what season you notice most where you live.",
    ],
    practiceItems: [
      {
        id: "neighborhood-waterfront",
        english: "I live near the waterfront in a neighborhood that's always changing.",
        spanish: "Vivo cerca del waterfront en un barrio que siempre está cambiando.",
        why: "*Barrio* is the everyday word for neighborhood in Latin American Spanish.",
        wordHints: [
          { en: "live", es: "vivo" },
          { en: "waterfront", es: "waterfront" },
          { en: "neighborhood", es: "barrio" },
          { en: "changing", es: "cambiando" },
        ],
      },
      {
        id: "neighborhood-walk",
        english: "I walk to coffee shops and the T when I need to clear my head.",
        spanish: "Camino a cafeterías y al T cuando necesito despejarme.",
        why: "*Despejarme* means to clear your head — a very natural reflexive verb here.",
        wordHints: [
          { en: "walk", es: "camino" },
          { en: "coffee shops", es: "cafeterías" },
          { en: "clear", es: "despejarme" },
          { en: "head", es: "cabeza" },
        ],
      },
    ],
  },

  /* ─── Learning ──────────────────────────────────────────── */
  { slug: "learning-spanish-again", label: "about coming back to Spanish", category: "learning",
    whenToUse: "When someone asks why you're studying Spanish.",
    phrases: [
      { es: "Estudié español hace tiempo y lo estoy retomando.", en: "I studied Spanish a while back and I'm picking it back up." },
      { es: "Quiero usarlo más en mi trabajo con estudiantes hispanohablantes.", en: "I want to use it more with my Spanish-speaking students." },
      { es: "Trato de practicar un poco cada día.", en: "I try to practice a little every day." },
      { es: "Lo que más me cuesta es soltarme a hablar.", en: "What's hardest for me is loosening up to speak." },
    ],
    practicePrompts: [
      "Say why you're learning Spanish.",
      "Describe how you practice during the week.",
      "Say what's easy and what's hard for you.",
    ],
    practiceItems: [
      {
        id: "spanish-back",
        english: "I studied Spanish before, and now I'm coming back to it.",
        spanish: "Estudié español antes y ahora lo estoy retomando.",
        why: "*Retomar* means to pick something back up after time away.",
        wordHints: [
          { en: "studied", es: "estudié" },
          { en: "before", es: "antes" },
          { en: "coming", es: "retomando" },
        ],
      },
      {
        id: "spanish-speaking",
        english: "The hardest part is loosening up when I speak.",
        spanish: "Lo más difícil es soltarme cuando hablo.",
        why: "*Soltarme* captures loosening up or feeling less stiff when speaking.",
        wordHints: [
          { en: "hardest", es: "lo más difícil" },
          { en: "loosening", es: "soltarme" },
          { en: "speak", es: "hablo" },
        ],
      },
    ],
  },
  {
    slug: "studying-code",
    label: "about studying code at night",
    category: "learning",
    whenToUse: "Night coding sessions — flow state, too many tabs, and projects that won't let you go.",
    phrases: [
      { es: "A menudo programo o trabajo en proyectos de aprendizaje por la noche.", en: "I often code or work on learning projects at night." },
      { es: "A veces quiero parar antes, pero si entro en flujo, puedo seguir horas.", en: "Sometimes I mean to stop earlier, but if I get into flow, I can keep going for hours." },
      { es: "Abro demasiadas pestañas y trato de ordenar ideas desordenadas.", en: "I open too many tabs and try to turn messy ideas into something organized." },
      { es: "Anoche trabajé en mi app de español.", en: "Last night I worked on my Spanish app." },
    ],
    practicePrompts: [
      "Say what you were coding last night.",
      "Say what happens when you get into flow.",
      "Say what's hard about learning to code.",
    ],
    practiceItems: [
      {
        id: "code-night-flow",
        english: "If I get into flow at night, I can code for hours.",
        spanish: "Si entro en flujo por la noche, puedo programar horas.",
        why: "*Entrar en flujo* is how Spanish speakers say getting into flow state.",
        wordHints: [
          { en: "flow", es: "flujo" },
          { en: "night", es: "noche" },
          { en: "hours", es: "horas" },
        ],
      },
      {
        id: "code-tabs",
        english: "I open too many tabs and try to organize messy ideas.",
        spanish: "Abro demasiadas pestañas y trato de organizar ideas desordenadas.",
        why: "*Demasiadas* intensifies 'too many' — very everyday.",
        wordHints: [
          { en: "too many", es: "demasiadas" },
          { en: "tabs", es: "pestañas" },
          { en: "messy", es: "desordenadas" },
        ],
      },
    ],
  },
  {
    slug: "a-book-youre-reading",
    label: "about a book you're reading",
    category: "learning",
    whenToUse: "What you're reading or want to read — language, law, education, self-improvement.",
    phrases: [
      { es: "Me gusta leer sobre idiomas, derecho, educación o superación personal.", en: "I like reading about language, law, education, or self-improvement." },
      { es: "No siempre tengo tiempo, pero me gusta aprender con libros.", en: "I don't always have time, but I like learning through books." },
      { es: "Un buen libro me ayuda a pensar con más claridad.", en: "A good book helps me think more clearly." },
      { es: "A veces leo antes de dormir, si no estoy en un proyecto.", en: "Sometimes I read before bed, if I'm not stuck in a project." },
    ],
    practicePrompts: [
      "Say what kind of books you gravitate toward.",
      "Say when you find time to read.",
      "Describe a book that changed how you think.",
    ],
    practiceItems: [
      {
        id: "book-topics",
        english: "I like books about language, education, or how people learn.",
        spanish: "Me gustan los libros sobre idiomas, educación o cómo aprende la gente.",
        why: "*Cómo aprende la gente* is natural for how people learn.",
        wordHints: [
          { en: "books", es: "libros" },
          { en: "language", es: "idiomas" },
          { en: "learn", es: "aprende" },
        ],
      },
      {
        id: "book-time",
        english: "I don't always have time to read, but I want to.",
        spanish: "No siempre tengo tiempo para leer, pero quiero.",
        why: "*Pero quiero* leaves the sentence open — honest and conversational.",
        wordHints: [
          { en: "always", es: "siempre" },
          { en: "time", es: "tiempo" },
          { en: "read", es: "leer" },
        ],
      },
    ],
  },
  {
    slug: "a-podcast",
    label: "about a podcast you listen to",
    category: "learning",
    whenToUse: "Culture, news, language, tech, psychology — what you listen to when you have brain space.",
    phrases: [
      { es: "Escucho podcasts sobre cultura, noticias, idiomas o tecnología.", en: "I listen to podcasts about culture, news, language, or tech." },
      { es: "También me gustan los de psicología.", en: "I also like psychology ones." },
      { es: "Los pongo cuando camino o hago cosas en casa.", en: "I put them on when I walk or do things at home." },
      { es: "A veces aprendo una frase que quiero usar en español.", en: "Sometimes I learn a phrase I want to use in Spanish." },
    ],
    practicePrompts: [
      "Say what topics your podcasts cover.",
      "Say when you usually listen.",
      "Say one phrase you heard recently and liked.",
    ],
    practiceItems: [
      {
        id: "podcast-topics",
        english: "I usually listen to something about culture, tech, or psychology.",
        spanish: "Normalmente escucho algo sobre cultura, tecnología o psicología.",
        why: "*Algo sobre* softens it — something about, not a specific show.",
        wordHints: [
          { en: "usually", es: "normalmente" },
          { en: "culture", es: "cultura" },
          { en: "psychology", es: "psicología" },
        ],
      },
      {
        id: "podcast-phrase",
        english: "I heard 'no pasa nada' recently and I want to use it more.",
        spanish: "Escuché 'no pasa nada' hace poco y quiero usarlo más.",
        why: "*Hace poco* means recently — lighter than *recientemente* in speech.",
        wordHints: [
          { en: "heard", es: "escuché" },
          { en: "recently", es: "hace poco" },
          { en: "use", es: "usarlo" },
        ],
      },
    ],
  },
  {
    slug: "something-new-you-learned",
    label: "about something new you learned this week",
    category: "learning",
    whenToUse: "Small insights from work, coding, or Spanish — things worth saying out loud.",
    phrases: [
      { es: "Esta semana aprendí que a veces la estructura más simple es la más útil.", en: "This week I learned that sometimes the simplest structure is the most useful." },
      { es: "Estoy entendiendo mejor cómo aprendo yo y cómo aprenden otros adultos.", en: "I'm understanding better how I learn and how other adults learn." },
      { es: "Eso me ayuda en mi trabajo con estudiantes.", en: "That helps me in my work with students." },
      { es: "Me gusta cuando algo pequeño hace que todo encaje.", en: "I like when something small makes everything click." },
    ],
    practicePrompts: [
      "Say one thing you learned this week.",
      "Say how it connects to your job or your Spanish.",
      "Say what you want to learn next.",
    ],
    practiceItems: [
      {
        id: "learned-simple",
        english: "I learned that the simplest structure is often the most useful.",
        spanish: "Aprendí que la estructura más simple suele ser la más útil.",
        why: "*Suele ser* means 'tends to be' — softer than always.",
        wordHints: [
          { en: "learned", es: "aprendí" },
          { en: "simple", es: "simple" },
          { en: "useful", es: "útil" },
        ],
      },
      {
        id: "learned-adults",
        english: "I'm understanding better how adult learners work.",
        spanish: "Estoy entendiendo mejor cómo funcionan los adultos que aprenden.",
        why: "*Estoy entendiendo* emphasizes ongoing understanding, not a one-time fact.",
        wordHints: [
          { en: "understanding", es: "entendiendo" },
          { en: "adults", es: "adultos" },
          { en: "learn", es: "aprenden" },
        ],
      },
    ],
  },

  /* ─── Travel ────────────────────────────────────────────── */
  {
    slug: "a-trip-to-atlanta",
    label: "about a trip back to Atlanta",
    category: "travel",
    whenToUse: "Talking about visiting family in Georgia — how often, what you miss, and when you'll go next.",
    phrases: [
      { es: "Mi familia vive en Georgia, cerca de Atlanta.", en: "My family lives in Georgia, near Atlanta." },
      { es: "No voy tan seguido como me gustaría.", en: "I don't go back as often as I'd like." },
      { es: "Cuando voy, extraño la comida sureña y los lugares familiares.", en: "When I go, I miss Southern food and familiar places." },
      { es: "Espero visitarlos en las próximas semanas.", en: "I hope to visit them in the next few weeks." },
    ],
    practicePrompts: [
      "Say where your family lives.",
      "Say how often you go back home.",
      "Say what you miss when you're far away.",
    ],
    practiceItems: [
      {
        id: "atlanta-not-often",
        english: "I don't visit as often as I'd like — money and stability make it hard.",
        spanish: "No visito tan seguido como me gustaría — el dinero y la estabilidad lo hacen difícil.",
        why: "*Tan seguido como* compares frequency: 'as often as.'",
        wordHints: [
          { en: "visit", es: "visito" },
          { en: "often", es: "seguido" },
          { en: "money", es: "dinero" },
          { en: "hard", es: "difícil" },
        ],
      },
      {
        id: "atlanta-miss-food",
        english: "I miss Southern food and not having to explain myself.",
        spanish: "Extraño la comida sureña y no tener que explicarme.",
        why: "*No tener que* + infinitive means 'not having to' — very useful for missing ease.",
        wordHints: [
          { en: "miss", es: "extraño" },
          { en: "Southern", es: "sureña" },
          { en: "food", es: "comida" },
          { en: "explain", es: "explicarme" },
        ],
      },
    ],
  },
  {
    slug: "a-place-you-want-to-visit",
    label: "about a place you want to visit",
    category: "travel",
    whenToUse: "Talking about travel hopes without needing a fully planned trip.",
    phrases: [
      { es: "Me gustaría viajar más cuando tenga más estabilidad.", en: "I'd like to travel more when I have more stability." },
      { es: "Quiero ir a un lugar donde pueda practicar español.", en: "I want to go somewhere where I can practice Spanish." },
      { es: "También imagino vivir cerca del agua algún día.", en: "I also imagine living near the water someday." },
      { es: "Todavía no tengo planes concretos, pero me gusta imaginarlo.", en: "I don't have concrete plans yet, but I like imagining it." },
    ],
    practicePrompts: [
      "Say one place you want to visit.",
      "Say why that place interests you.",
      "Say what you would do there.",
    ],
    practiceItems: [
      {
        id: "visit-spanish",
        english: "I want to visit a place where I can practice Spanish.",
        spanish: "Quiero visitar un lugar donde pueda practicar español.",
        why: "*Donde pueda* means 'where I can' with a little sense of possibility.",
        wordHints: [
          { en: "visit", es: "visitar" },
          { en: "place", es: "lugar" },
          { en: "where", es: "donde" },
          { en: "practice", es: "practicar" },
        ],
      },
      {
        id: "visit-no-plans",
        english: "I don't have concrete plans yet, but I like imagining it.",
        spanish: "Todavía no tengo planes concretos, pero me gusta imaginarlo.",
        why: "*Todavía no* means 'not yet.'",
        wordHints: [
          { en: "yet", es: "todavía" },
          { en: "plans", es: "planes" },
          { en: "imagining", es: "imaginar" },
        ],
      },
    ],
  },
  {
    slug: "a-place-youve-been",
    label: "about somewhere you've been",
    category: "travel",
    whenToUse: "Talking about a place that shaped your Spanish — Nicaragua and what you remember.",
    phrases: [
      { es: "Viví en Nicaragua unos tres meses, hace como diez años.", en: "I lived in Nicaragua for about three months, around ten years ago." },
      { es: "Aprendí mucho, pero después me enredé con la gramática.", en: "I learned a lot, but later I got tangled up in grammar." },
      { es: "Todavía recuerdo muchos verbos y palabras.", en: "I still remember a lot of verbs and words." },
      { es: "Me da pena hablar, pero quiero retomarlo.", en: "I'm shy about speaking, but I want to pick it back up." },
    ],
    practicePrompts: [
      "Say where you lived and for how long.",
      "Say what you learned there.",
      "Say why you stopped speaking confidently.",
    ],
    practiceItems: [
      {
        id: "nicaragua-lived",
        english: "I lived in Nicaragua for three months about ten years ago.",
        spanish: "Viví en Nicaragua tres meses hace como diez años.",
        why: "*Hace como* softens the time estimate: 'around' or 'about' ten years ago.",
        wordHints: [
          { en: "lived", es: "viví" },
          { en: "months", es: "meses" },
          { en: "ago", es: "hace" },
          { en: "years", es: "años" },
        ],
      },
      {
        id: "nicaragua-grammar",
        english: "I got wrapped up in grammar and became scared to speak.",
        spanish: "Me enredé con la gramática y me dio miedo hablar.",
        why: "*Me enredé* is vivid for getting tangled up; *me dio miedo* is the natural fear pattern.",
        wordHints: [
          { en: "wrapped up", es: "me enredé" },
          { en: "grammar", es: "gramática" },
          { en: "scared", es: "miedo" },
          { en: "speak", es: "hablar" },
        ],
      },
    ],
  },
  {
    slug: "packing-for-a-trip",
    label: "about packing for a trip",
    category: "travel",
    whenToUse: "Light travel talk — what you always bring and how you prepare for a visit home.",
    phrases: [
      { es: "Siempre llevo mi laptop y los cargadores.", en: "I always bring my laptop and chargers." },
      { es: "Necesito zapatos cómodos para caminar mucho.", en: "I need comfortable shoes for walking a lot." },
      { es: "Trato de empacar ligero, pero nunca lo logro.", en: "I try to pack light, but I never manage it." },
      { es: "Lo más importante es tener tiempo para ver a mi familia.", en: "The most important thing is having time to see my family." },
    ],
    practicePrompts: [
      "Say three things you pack every time.",
      "Say what you always forget.",
      "Say what you're most excited about on the trip.",
    ],
    practiceItems: [
      {
        id: "pack-walk",
        english: "I always pack comfortable shoes because I walk a lot.",
        spanish: "Siempre empaco zapatos cómodos porque camino mucho.",
        why: "*Empacar* is the everyday verb for packing a bag.",
        wordHints: [
          { en: "pack", es: "empaco" },
          { en: "comfortable", es: "cómodos" },
          { en: "shoes", es: "zapatos" },
          { en: "walk", es: "camino" },
        ],
      },
      {
        id: "pack-family",
        english: "The main thing is making time to see my family.",
        spanish: "Lo principal es tener tiempo para ver a mi familia.",
        why: "*Lo principal es* frames what matters most without sounding formal.",
        wordHints: [
          { en: "main", es: "principal" },
          { en: "time", es: "tiempo" },
          { en: "see", es: "ver" },
          { en: "family", es: "familia" },
        ],
      },
    ],
  },
  {
    slug: "getting-around-boston",
    label: "about getting around Boston",
    category: "travel",
    whenToUse: "Your commute and daily routes — walking, the T, and moving around East Boston.",
    phrases: [
      { es: "Normalmente camino y tomo el T.", en: "I usually walk and take the T." },
      { es: "Vivo en East Boston, así que el agua siempre está cerca.", en: "I live in East Boston, so the water is always nearby." },
      { es: "Camino al trabajo cuando hace buen tiempo.", en: "I walk to work when the weather is nice." },
      { es: "A veces el T se tarda más de lo que esperaba.", en: "Sometimes the T takes longer than I expected." },
    ],
    practicePrompts: [
      "Say how you usually get around.",
      "Describe your favorite route.",
      "Say what happens when the T is late.",
    ],
    practiceItems: [
      {
        id: "boston-walk-t",
        english: "I usually get around by walking and taking the T.",
        spanish: "Normalmente me muevo caminando y tomando el T.",
        why: "*Me muevo* is conversational for getting around or moving through the city.",
        wordHints: [
          { en: "usually", es: "normalmente" },
          { en: "get around", es: "me muevo" },
          { en: "walking", es: "caminando" },
          { en: "T", es: "el T" },
        ],
      },
      {
        id: "boston-water",
        english: "I like living near the water in East Boston.",
        spanish: "Me gusta vivir cerca del agua en East Boston.",
        why: "*Cerca del agua* is the simple, natural way to say near the water.",
        wordHints: [
          { en: "like", es: "me gusta" },
          { en: "live", es: "vivir" },
          { en: "near", es: "cerca" },
          { en: "water", es: "agua" },
        ],
      },
    ],
  },

  /* ─── Feelings ──────────────────────────────────────────── */
  {
    slug: "feeling-tired",
    label: "about feeling tired this week",
    category: "feelings",
    whenToUse: "Naming exhaustion without drama — work, projects, and long days.",
    phrases: [
      { es: "Estoy cansada porque he trabajado mucho.", en: "I'm tired because I've been working a lot." },
      { es: "A veces sigo trabajando hasta tarde si estoy en un proyecto.", en: "Sometimes I keep working late if I'm deep in a project." },
      { es: "Trato de dormir a las once, pero depende de qué tan disciplinada sea.", en: "I try to sleep at eleven, but it depends on how disciplined I am." },
      { es: "Hoy no tengo mucha energía para cosas que no me importan.", en: "Today I don't have much energy for things that don't matter to me." },
    ],
    practicePrompts: [
      "Say why you're tired this week.",
      "Say what you've been working on late.",
      "Say what you don't have energy for right now.",
    ],
    practiceItems: [
      {
        id: "tired-working",
        english: "I'm tired because I've been working a lot.",
        spanish: "Estoy cansada porque he trabajado mucho.",
        why: "*He trabajado* uses present perfect for something ongoing lately.",
        wordHints: [
          { en: "tired", es: "cansada" },
          { en: "working", es: "trabajado" },
          { en: "a lot", es: "mucho" },
        ],
      },
      {
        id: "tired-energy",
        english: "I don't have much energy for gossip or negativity.",
        spanish: "No tengo mucha energía para chismes o negatividad.",
        why: "*Chismes* is the everyday word for gossip.",
        wordHints: [
          { en: "energy", es: "energía" },
          { en: "gossip", es: "chismes" },
          { en: "negativity", es: "negatividad" },
        ],
      },
    ],
  },
  {
    slug: "feeling-proud",
    label: "about something you're proud of",
    category: "feelings",
    whenToUse: "The ESOL app, your students, or a project that's not finished yet but still matters.",
    phrases: [
      { es: "Estoy orgullosa de la app de ESOL que construí.", en: "I'm proud of the ESOL app I built." },
      { es: "Me encanta ver la emoción de mis estudiantes.", en: "I love seeing my students' excitement." },
      { es: "Estoy orgullosa aunque todavía no esté terminado.", en: "I'm proud even though it's not finished yet." },
      { es: "Mis estudiantes siguen apareciendo, incluso cuando están cansados.", en: "My students keep showing up, even when they're tired." },
    ],
    practicePrompts: [
      "Say what you're proud of this month.",
      "Say who you're proud of besides yourself.",
      "Say why it matters even if it's not done.",
    ],
    practiceItems: [
      {
        id: "proud-app",
        english: "I'm proud of the ESOL app I built and my students' excitement.",
        spanish: "Estoy orgullosa de la app de ESOL que construí y de la emoción de mis estudiantes.",
        why: "*Estoy orgullosa de* is the standard pattern for being proud of something.",
        wordHints: [
          { en: "proud", es: "orgullosa" },
          { en: "built", es: "construí" },
          { en: "excitement", es: "emoción" },
        ],
      },
      {
        id: "proud-not-finished",
        english: "I'm proud of this, even though it's not finished.",
        spanish: "Estoy orgullosa de esto, aunque no esté terminado.",
        why: "*Aunque no esté* uses subjunctive after although — natural in careful speech.",
        wordHints: [
          { en: "proud", es: "orgullosa" },
          { en: "although", es: "aunque" },
          { en: "finished", es: "terminado" },
        ],
      },
    ],
  },
  {
    slug: "feeling-overwhelmed",
    label: "about feeling overwhelmed",
    category: "feelings",
    whenToUse: "Naming stress gently, especially when there are too many demands at once.",
    phrases: [
      { es: "Me siento un poco abrumada.", en: "I feel a little overwhelmed." },
      { es: "Tengo demasiadas cosas en la cabeza.", en: "I have too many things in my head." },
      { es: "Necesito ir paso a paso.", en: "I need to go step by step." },
      { es: "Hoy no puedo con todo, y está bien.", en: "Today I can't handle everything, and that's okay." },
    ],
    practicePrompts: [
      "Say that you're feeling overwhelmed.",
      "Say what you need right now.",
      "Say one thing you can do first.",
    ],
    practiceItems: [
      {
        id: "overwhelmed-head",
        english: "I have too many things in my head today.",
        spanish: "Hoy tengo demasiadas cosas en la cabeza.",
        why: "*En la cabeza* is a natural image for mental load.",
        wordHints: [
          { en: "too", es: "demasiadas" },
          { en: "things", es: "cosas" },
          { en: "head", es: "cabeza" },
        ],
      },
      {
        id: "overwhelmed-step",
        english: "I need to go step by step.",
        spanish: "Necesito ir paso a paso.",
        why: "*Paso a paso* is the direct, common phrase for taking things one step at a time.",
        wordHints: [
          { en: "need", es: "necesito" },
          { en: "go", es: "ir" },
          { en: "step", es: "paso" },
        ],
      },
    ],
  },
  {
    slug: "feeling-grateful",
    label: "about something you're grateful for",
    category: "feelings",
    whenToUse: "Family, José, the harbor, community, movement, good food — the real list.",
    phrases: [
      { es: "Estoy agradecida por mi familia, José y mis amigos.", en: "I'm grateful for my family, José, and my friends." },
      { es: "También por el puerto, el agua, la música y la buena comida.", en: "Also for the harbor, the water, music, and good food." },
      { es: "Me siento agradecida por poder ayudar a la gente.", en: "I'm grateful I get to help people." },
      { es: "Y por poder moverme — pesas, yoga, pilates.", en: "And for being able to move — weights, yoga, pilates." },
    ],
    practicePrompts: [
      "Name three things you're grateful for today.",
      "Say something about Boston you're grateful for.",
      "Say something about your body or health you don't take for granted.",
    ],
    practiceItems: [
      {
        id: "grateful-harbor",
        english: "I'm grateful for the harbor and being near the water.",
        spanish: "Estoy agradecida por el puerto y estar cerca del agua.",
        why: "*Estar cerca del agua* pairs naturally with gratitude for place.",
        wordHints: [
          { en: "grateful", es: "agradecida" },
          { en: "harbor", es: "puerto" },
          { en: "water", es: "agua" },
        ],
      },
      {
        id: "grateful-movement",
        english: "I'm grateful I can lift weights, do yoga, and move.",
        spanish: "Estoy agradecida de poder levantar pesas, hacer yoga y moverme.",
        why: "*De poder* introduces what you're thankful you can do.",
        wordHints: [
          { en: "grateful", es: "agradecida" },
          { en: "lift weights", es: "levantar pesas" },
          { en: "move", es: "moverme" },
        ],
      },
    ],
  },
  { slug: "missing-home", label: "about missing home", category: "feelings",
    whenToUse: "Naming homesickness gently — food, people, and familiar places.",
    phrases: [
      { es: "Extraño a mi familia en Georgia.", en: "I miss my family in Georgia." },
      { es: "Extraño la comida sureña y las comidas en familia.", en: "I miss Southern food and family meals." },
      { es: "Extraño los lugares que ya conozco sin pensar.", en: "I miss places I know without having to think." },
      { es: "A veces extraño la facilidad de estar en casa.", en: "Sometimes I miss how easy it feels to be home." },
    ],
    practicePrompts: [
      "Say who you miss.",
      "Say what food or ritual you miss.",
      "Say what felt easier back home.",
    ],
    practiceItems: [
      {
        id: "miss-family-ga",
        english: "I miss my family — they live in Athens, Georgia.",
        spanish: "Extraño a mi familia — viven en Athens, Georgia.",
        why: "*Extraño a* is used for missing people; the dash adds a natural spoken pause.",
        wordHints: [
          { en: "miss", es: "extraño" },
          { en: "family", es: "familia" },
          { en: "live", es: "viven" },
        ],
      },
      {
        id: "miss-southern-food",
        english: "I miss Southern food and the feeling of being home without trying.",
        spanish: "Extraño la comida sureña y la sensación de estar en casa sin esforzarme.",
        why: "*Sin esforzarme* captures 'without trying' — home as ease, not effort.",
        wordHints: [
          { en: "Southern", es: "sureña" },
          { en: "food", es: "comida" },
          { en: "home", es: "casa" },
          { en: "trying", es: "esforzarme" },
        ],
      },
    ],
  },
  {
    slug: "feeling-hopeful",
    label: "about feeling hopeful about something",
    category: "feelings",
    whenToUse: "Your learning journey, understanding how you learn, and getting stronger in Spanish.",
    phrases: [
      { es: "Me siento esperanzada con mi camino de aprendizaje.", en: "I feel hopeful about my learning journey." },
      { es: "Creo que estoy entendiendo mejor cómo aprendo.", en: "I think I'm understanding better how I learn." },
      { es: "Eso también me ayuda a entender cómo aprenden otros adultos.", en: "That also helps me understand how other adults learn." },
      { es: "Eso me sirve mucho en mi trabajo.", en: "That helps me a lot in my job." },
    ],
    practicePrompts: [
      "Say what you're hopeful about right now.",
      "Say how your learning connects to your students.",
      "Say one thing that feels possible this year.",
    ],
    practiceItems: [
      {
        id: "hopeful-learning",
        english: "I'm hopeful about my learning journey.",
        spanish: "Me siento esperanzada con mi camino de aprendizaje.",
        why: "*Camino de aprendizaje* is a warm phrase for a learning journey.",
        wordHints: [
          { en: "hopeful", es: "esperanzada" },
          { en: "journey", es: "camino" },
          { en: "learning", es: "aprendizaje" },
        ],
      },
      {
        id: "hopeful-adults",
        english: "I think I understand better how adult learners work.",
        spanish: "Creo que entiendo mejor cómo funcionan los adultos que aprenden.",
        why: "*Creo que* softens an opinion — you're sharing a feeling, not a fact.",
        wordHints: [
          { en: "think", es: "creo" },
          { en: "understand", es: "entiendo" },
          { en: "adults", es: "adultos" },
        ],
      },
    ],
  },

  /* ─── Food ──────────────────────────────────────────────── */
  {
    slug: "what-you-ate-today",
    label: "about what you ate today",
    category: "food",
    whenToUse: "Simple, practical meals — salmon, salad, cauliflower rice, and the occasional treat.",
    phrases: [
      { es: "Hoy comí salmón, ensalada y arroz de coliflor.", en: "Today I ate salmon, salad, and cauliflower rice." },
      { es: "También helado — me lo merecía.", en: "Also ice cream — I deserved it." },
      { es: "Me gusta comida que me llena sin dejarme sin energía.", en: "I like food that fills me up without crashing my energy." },
      { es: "A veces cocino, a veces improviso con lo que hay.", en: "Sometimes I cook, sometimes I improvise with what's around." },
    ],
    practicePrompts: [
      "Say what you ate today.",
      "Say what you eat when you want something filling but light.",
      "Say what you had for a treat recently.",
    ],
    practiceItems: [
      {
        id: "ate-salmon",
        english: "Today I had salmon, salad, and cauliflower rice.",
        spanish: "Hoy comí salmón, ensalada y arroz de coliflor.",
        why: "*Comí* is simple preterite for what you ate today.",
        wordHints: [
          { en: "today", es: "hoy" },
          { en: "salmon", es: "salmón" },
          { en: "salad", es: "ensalada" },
        ],
      },
      {
        id: "ate-crash",
        english: "I like food that fills me up without making me crash.",
        spanish: "Me gusta la comida que me llena sin dejarme sin energía.",
        why: "*Sin dejarme sin energía* captures the no-crash feeling in natural Spanish.",
        wordHints: [
          { en: "fills", es: "llena" },
          { en: "without", es: "sin" },
          { en: "energy", es: "energía" },
        ],
      },
    ],
  },
  {
    slug: "southern-food-you-miss",
    label: "about Southern food you miss",
    category: "food",
    whenToUse: "Biscuits, barbecue, fried chicken, mac and cheese — food that feels like home.",
    phrases: [
      { es: "Extraño los biscuits, la barbacoa y el pollo frito.", en: "I miss biscuits, barbecue, and fried chicken." },
      { es: "También un buen mac and cheese.", en: "Also good mac and cheese." },
      { es: "La comida sureña se siente como hogar.", en: "Southern food feels like home." },
      { es: "Cuando visito a mi familia, eso es lo primero que busco.", en: "When I visit family, that's the first thing I look for." },
    ],
    practicePrompts: [
      "Name three Southern foods you miss.",
      "Say what food feels most like home.",
      "Say what you'd eat first on a trip to Georgia.",
    ],
    practiceItems: [
      {
        id: "southern-miss",
        english: "I miss biscuits, barbecue, and fried chicken.",
        spanish: "Extraño los biscuits, la barbacoa y el pollo frito.",
        why: "*Extraño* without *a* is for missing things, not people.",
        wordHints: [
          { en: "miss", es: "extraño" },
          { en: "barbecue", es: "barbacoa" },
          { en: "fried chicken", es: "pollo frito" },
        ],
      },
      {
        id: "southern-home",
        english: "Southern food feels like home without trying.",
        spanish: "La comida sureña se siente como hogar sin esforzarme.",
        why: "*Sin esforzarme* again — home as ease, not effort.",
        wordHints: [
          { en: "Southern", es: "sureña" },
          { en: "feels like", es: "se siente como" },
          { en: "home", es: "hogar" },
        ],
      },
    ],
  },
  {
    slug: "a-favorite-restaurant",
    label: "about a favorite restaurant",
    category: "food",
    whenToUse: "Seafood, Greek food, salads — special but not fussy.",
    phrases: [
      { es: "Me gustan los lugares con buen marisco o comida griega.", en: "I like places with good seafood or Greek food." },
      { es: "También ensaladas grandes con cosas interesantes encima.", en: "Also big salads with interesting toppings." },
      { es: "Prefiero algo especial pero sin ser demasiado formal.", en: "I prefer something special but not too fussy." },
      { es: "La comida importa, pero también poder hablar y relajarme.", en: "The food matters, but so does being able to talk and relax." },
    ],
    practicePrompts: [
      "Describe a restaurant you like in Boston.",
      "Say what you usually order.",
      "Say what kind of vibe you want when you eat out.",
    ],
    practiceItems: [
      {
        id: "restaurant-seafood",
        english: "I like restaurants with good seafood or Greek food.",
        spanish: "Me gustan los restaurantes con buen marisco o comida griega.",
        why: "*Marisco* is the general word for seafood in many dialects.",
        wordHints: [
          { en: "seafood", es: "marisco" },
          { en: "Greek", es: "griega" },
          { en: "restaurants", es: "restaurantes" },
        ],
      },
      {
        id: "restaurant-casual",
        english: "I like places that feel special but not fussy.",
        spanish: "Me gustan los lugares que se sienten especiales pero no complicados.",
        why: "*No complicados* captures not fussy without sounding negative.",
        wordHints: [
          { en: "special", es: "especiales" },
          { en: "fussy", es: "complicados" },
          { en: "places", es: "lugares" },
        ],
      },
    ],
  },
  {
    slug: "cooking-at-home",
    label: "about cooking at home",
    category: "food",
    whenToUse: "Talking about weeknight meals, comfort food, and trying to cook more.",
    phrases: [
      { es: "Estoy tratando de cocinar más en casa.", en: "I'm trying to cook more at home." },
      { es: "A veces hago algo rápido después del trabajo.", en: "Sometimes I make something quick after work." },
      { es: "Me gusta cocinar cuando no tengo prisa.", en: "I like cooking when I'm not in a hurry." },
      { es: "La comida sencilla también puede sentirse especial.", en: "Simple food can also feel special." },
    ],
    practicePrompts: [
      "Say what you cook on a busy night.",
      "Say why you want to cook more at home.",
      "Say what food feels comforting.",
    ],
    practiceItems: [
      {
        id: "cooking-more",
        english: "I'm trying to cook at home more often.",
        spanish: "Estoy tratando de cocinar en casa más seguido.",
        why: "*Más seguido* is a conversational way to say 'more often.'",
        wordHints: [
          { en: "trying", es: "tratando" },
          { en: "cook", es: "cocinar" },
          { en: "home", es: "casa" },
          { en: "often", es: "seguido" },
        ],
      },
      {
        id: "cooking-after-work",
        english: "After work, I usually make something quick.",
        spanish: "Después del trabajo, normalmente hago algo rápido.",
        why: "*Hago algo rápido* is simple and natural for an easy meal.",
        wordHints: [
          { en: "after", es: "después de" },
          { en: "work", es: "trabajo" },
          { en: "usually", es: "normalmente" },
          { en: "quick", es: "rápido" },
        ],
      },
    ],
  },
  {
    slug: "coffee-habits",
    label: "about your coffee habits",
    category: "food",
    whenToUse: "Cold brew, coffee shops, and working with a cup nearby.",
    phrases: [
      { es: "El café es parte de mi personalidad diaria.", en: "Coffee is part of my daily personality." },
      { es: "Me gusta el cold brew y las buenas cafeterías.", en: "I like cold brew and good coffee shops." },
      { es: "Tomo café mientras trabajo en el sofá.", en: "I have coffee while I work on the couch." },
      { es: "Un latte helado de vainilla o un cold brew fuerte en un día caluroso me hace feliz.", en: "An iced vanilla latte or strong cold brew on a hot day makes me happy." },
    ],
    practicePrompts: [
      "Say how you take your coffee.",
      "Say where you like to get coffee.",
      "Describe a small coffee moment that made you happy recently.",
    ],
    practiceItems: [
      {
        id: "coffee-daily",
        english: "Coffee is part of my daily routine — cold brew especially.",
        spanish: "El café es parte de mi rutina diaria — especialmente cold brew.",
        why: "*Especialmente* highlights your preference without over-explaining.",
        wordHints: [
          { en: "coffee", es: "café" },
          { en: "daily", es: "diaria" },
          { en: "especially", es: "especialmente" },
        ],
      },
      {
        id: "coffee-hot-day",
        english: "A strong cold brew on a hot day makes me really happy.",
        spanish: "Un cold brew fuerte en un día caluroso me hace muy feliz.",
        why: "*Me hace feliz* is simple and warm for small pleasures.",
        wordHints: [
          { en: "hot day", es: "día caluroso" },
          { en: "strong", es: "fuerte" },
          { en: "happy", es: "feliz" },
        ],
      },
    ],
  },
  {
    slug: "a-meal-with-friends",
    label: "about a meal with friends",
    category: "food",
    whenToUse: "Casual meals where talking matters more than the food.",
    phrases: [
      { es: "Probablemente iría a un lugar casual.", en: "I'd probably go somewhere casual." },
      { es: "La comida importa menos que poder hablar y reír.", en: "The food matters less than being able to talk and laugh." },
      { es: "Me gusta cuando puedo relajarme de verdad.", en: "I like when I can really relax." },
      { es: "Una buena comida con amigos me recarga.", en: "A good meal with friends recharges me." },
    ],
    practicePrompts: [
      "Describe your ideal meal with friends.",
      "Say whether you prefer casual or fancy.",
      "Say what made the last dinner with friends good.",
    ],
    practiceItems: [
      {
        id: "meal-casual",
        english: "I'd pick somewhere casual where we can talk and laugh.",
        spanish: "Elegiría un lugar casual donde podamos hablar y reír.",
        why: "*Elegiría* is conditional — what you would pick, naturally hypothetical.",
        wordHints: [
          { en: "pick", es: "elegiría" },
          { en: "casual", es: "casual" },
          { en: "laugh", es: "reír" },
        ],
      },
      {
        id: "meal-talk",
        english: "The food mattered less than being able to relax and talk.",
        spanish: "La comida importaba menos que poder relajarme y hablar.",
        why: "*Importaba menos que* compares what mattered more — very natural.",
        wordHints: [
          { en: "mattered", es: "importaba" },
          { en: "less", es: "menos" },
          { en: "relax", es: "relajarme" },
        ],
      },
    ],
  },
  {
    slug: "ordering-food-in-spanish",
    label: "about ordering food in Spanish",
    category: "food",
    whenToUse: "Coffee, tacos, pupusas, seafood — ordering without sounding awkward.",
    phrases: [
      { es: "Quiero pedir café, tacos o pupusas con confianza.", en: "I want to order coffee, tacos, or pupusas confidently." },
      { es: "También marisco, pollo o ensaladas con sustituciones.", en: "Also seafood, chicken, or salads with substitutions." },
      { es: "Me cuesta pedir cambios sin sentirme incómoda.", en: "It's hard for me to ask for changes without feeling awkward." },
      { es: "Practicar esto me ayuda en la vida real.", en: "Practicing this helps me in real life." },
    ],
    practicePrompts: [
      "Practice ordering your usual coffee in Spanish.",
      "Say how you'd ask for a substitution.",
      "Say what food you most want to order confidently.",
    ],
    practiceItems: [
      {
        id: "order-coffee",
        english: "I'd like a cold brew, please.",
        spanish: "Me gustaría un cold brew, por favor.",
        why: "*Me gustaría* is polite and natural for ordering.",
        wordHints: [
          { en: "I'd like", es: "me gustaría" },
          { en: "please", es: "por favor" },
        ],
      },
      {
        id: "order-substitution",
        english: "Can I substitute cauliflower rice for the rice?",
        spanish: "¿Puedo cambiar el arroz por arroz de coliflor?",
        why: "*Cambiar X por Y* is the clean pattern for substitutions.",
        wordHints: [
          { en: "substitute", es: "cambiar" },
          { en: "rice", es: "arroz" },
          { en: "cauliflower", es: "coliflor" },
        ],
      },
    ],
  },

  /* ─── Current Events ────────────────────────────────────── */
  {
    slug: "something-in-the-news",
    label: "about something in the news",
    category: "current-events",
    whenToUse: "What actually caught your attention — AI, education, trust, not a news quiz.",
    phrases: [
      { es: "Últimamente sigo mucho lo de la inteligencia artificial.", en: "Lately I've been following AI a lot." },
      { es: "Me preocupa cómo cambia la educación, el trabajo y la confianza.", en: "I worry about how it's changing education, work, and trust." },
      { es: "También pienso en cómo afecta el aprendizaje de idiomas.", en: "I also think about how it affects language learning." },
      { es: "No necesito tener todas las respuestas — solo quiero entender.", en: "I don't need all the answers — I just want to understand." },
    ],
    practicePrompts: [
      "Say one news story you've been thinking about.",
      "Say why it matters to your work or life.",
      "Say what question you still have about it.",
    ],
    practiceItems: [
      {
        id: "news-ai",
        english: "I've been paying attention to how fast AI is changing everything.",
        spanish: "He estado prestando atención a lo rápido que la IA está cambiando todo.",
        why: "*He estado* + gerund for something ongoing you've been doing.",
        wordHints: [
          { en: "paying attention", es: "prestando atención" },
          { en: "fast", es: "rápido" },
          { en: "changing", es: "cambiando" },
        ],
      },
      {
        id: "news-trust",
        english: "It changes education, work, and how people build trust.",
        spanish: "Cambia la educación, el trabajo y cómo la gente genera confianza.",
        why: "*Generar confianza* is natural for building trust.",
        wordHints: [
          { en: "education", es: "educación" },
          { en: "work", es: "trabajo" },
          { en: "trust", es: "confianza" },
        ],
      },
    ],
  },
  {
    slug: "education-policy",
    label: "about education policy",
    category: "current-events",
    whenToUse: "Adult learners, working parents, and systems that forget real life.",
    phrases: [
      { es: "Pienso mucho en los estudiantes adultos.", en: "I think a lot about adult learners." },
      { es: "Muchos sistemas olvidan a la gente que trabaja, cuida hijos y aprende inglés a la vez.", en: "Many systems forget people who work, parent, learn English, and try to survive at the same time." },
      { es: "También es difícil enseñar con tanta incertidumbre y miedo.", en: "It's also hard to teach with so much uncertainty and fear." },
      { es: "La educación de adultos necesita más respeto y más recursos.", en: "Adult education needs more respect and more resources." },
    ],
    practicePrompts: [
      "Say who you think education policy forgets.",
      "Say what your students are dealing with outside class.",
      "Say one change you'd make if you could.",
    ],
    practiceItems: [
      {
        id: "policy-adults",
        english: "Education systems often forget working adult learners.",
        spanish: "Los sistemas educativos a menudo olvidan a los adultos que trabajan y aprenden.",
        why: "*A menudo* means often — slightly more formal than *muchas veces*, still natural.",
        wordHints: [
          { en: "systems", es: "sistemas" },
          { en: "often", es: "a menudo" },
          { en: "adults", es: "adultos" },
        ],
      },
      {
        id: "policy-survive",
        english: "My students are working, parenting, and learning English at the same time.",
        spanish: "Mis estudiantes trabajan, cuidan hijos y aprenden inglés al mismo tiempo.",
        why: "*Al mismo tiempo* stacks parallel pressures clearly.",
        wordHints: [
          { en: "working", es: "trabajan" },
          { en: "parenting", es: "cuidan hijos" },
          { en: "same time", es: "al mismo tiempo" },
        ],
      },
    ],
  },
  { slug: "your-city", label: "about something happening in Boston", category: "current-events",
    whenToUse: "Talking about how Boston is changing — housing, transit, and your neighborhood.",
    phrases: [
      { es: "Boston siempre está cambiando.", en: "Boston is always changing." },
      { es: "La vivienda y el transporte se sienten más caros cada año.", en: "Housing and transit feel more expensive every year." },
      { es: "Mi barrio se siente diverso, pero también en transformación.", en: "My neighborhood feels diverse, but also in transition." },
      { es: "En verano, la ciudad se siente completamente distinta.", en: "In summer, the city feels completely different." },
    ],
    practicePrompts: [
      "Say one way Boston has changed since you moved.",
      "Say what you notice in your neighborhood.",
      "Say what season changes the city most for you.",
    ],
    practiceItems: [
      {
        id: "boston-housing",
        english: "Housing and transit keep getting more expensive.",
        spanish: "La vivienda y el transporte siguen poniéndose más caros.",
        why: "*Seguir* + gerund means something keeps happening over time.",
        wordHints: [
          { en: "housing", es: "vivienda" },
          { en: "transit", es: "transporte" },
          { en: "expensive", es: "caros" },
          { en: "keep", es: "siguen" },
        ],
      },
      {
        id: "boston-summer",
        english: "In summer, everything in Boston comes to life.",
        spanish: "En verano, todo en Boston cobra vida.",
        why: "*Cobrar vida* is a beautiful, common phrase for things coming alive.",
        wordHints: [
          { en: "summer", es: "verano" },
          { en: "everything", es: "todo" },
          { en: "comes to life", es: "cobra vida" },
        ],
      },
    ],
  },
  {
    slug: "back-home",
    label: "about something happening back in Atlanta",
    category: "current-events",
    whenToUse: "Staying connected to Georgia — politics, weather, and family news from afar.",
    phrases: [
      { es: "Todavía sigo lo que pasa en Georgia.", en: "I still follow what's happening in Georgia." },
      { es: "Presto atención a la política, el clima y las noticias de mi familia.", en: "I pay attention to politics, weather, and family news." },
      { es: "A veces me entero por el chat familiar.", en: "Sometimes I find out through the family group chat." },
      { es: "Me hace falta estar allá para entenderlo de verdad.", en: "I miss being there to really understand it." },
    ],
    practicePrompts: [
      "Say how you keep up with news back home.",
      "Say what you heard from family recently.",
      "Say what you miss about being there in person.",
    ],
    practiceItems: [
      {
        id: "georgia-follow",
        english: "I still pay attention to what's happening back in Georgia.",
        spanish: "Todavía presto atención a lo que pasa en Georgia.",
        why: "*Prestar atención a* is the standard phrase for paying attention to something.",
        wordHints: [
          { en: "still", es: "todavía" },
          { en: "pay attention", es: "presto atención" },
          { en: "happening", es: "pasa" },
        ],
      },
      {
        id: "georgia-group-chat",
        english: "My family group chat keeps me connected — dog photos and all.",
        spanish: "El chat familiar me mantiene conectada — fotos de perros y todo.",
        why: "*Me mantiene conectada* works for staying in touch from a distance.",
        wordHints: [
          { en: "family", es: "familiar" },
          { en: "chat", es: "chat" },
          { en: "connected", es: "conectada" },
          { en: "photos", es: "fotos" },
        ],
      },
    ],
  },
  {
    slug: "tech-news",
    label: "about something in tech news",
    category: "current-events",
    whenToUse: "AI agents, language tools, coding tools, and trust with chatbots.",
    phrases: [
      { es: "Sigo las noticias sobre agentes de IA y herramientas de código.", en: "I follow news about AI agents and coding tools." },
      { es: "También me interesan las apps de idiomas.", en: "I'm also interested in language learning apps." },
      { es: "Me pregunto cómo la gente construye confianza con chatbots.", en: "I wonder how people build trust with chatbots." },
      { es: "Quiero usar la tecnología para ayudar a personas reales.", en: "I want to use technology to help real people." },
    ],
    practicePrompts: [
      "Say one tech trend you're following.",
      "Say how it connects to your projects.",
      "Say what excites or worries you about it.",
    ],
    practiceItems: [
      {
        id: "tech-agents",
        english: "I'm following AI agents and how coding tools are changing.",
        spanish: "Estoy siguiendo los agentes de IA y cómo están cambiando las herramientas de código.",
        why: "*Estoy siguiendo* is ongoing — you're actively keeping up.",
        wordHints: [
          { en: "following", es: "siguiendo" },
          { en: "agents", es: "agentes" },
          { en: "tools", es: "herramientas" },
        ],
      },
      {
        id: "tech-trust",
        english: "I think about how people build trust with chatbots.",
        spanish: "Pienso en cómo la gente genera confianza con chatbots.",
        why: "*Pienso en* + question is natural for something you wonder about.",
        wordHints: [
          { en: "think", es: "pienso" },
          { en: "trust", es: "confianza" },
          { en: "chatbots", es: "chatbots" },
        ],
      },
    ],
  },

  /* ─── Dreams ────────────────────────────────────────────── */
  { slug: "a-dream-you-had", label: "about a dream you had last night", category: "dreams" },
  { slug: "a-recurring-dream", label: "about a recurring dream", category: "dreams" },
  {
    slug: "a-life-you-imagine",
    label: "about a life you imagine sometimes",
    category: "dreams",
    whenToUse: "Healthy, stable, fluent in Spanish, building meaningful tools, helping people.",
    phrases: [
      { es: "A veces imagino una vida más sana y estable.", en: "Sometimes I imagine a healthier, more stable life." },
      { es: "Quiero hablar español con fluidez.", en: "I want to speak Spanish fluently." },
      { es: "Quiero construir herramientas que ayuden a la gente.", en: "I want to build tools that help people." },
      { es: "Y hacer trabajo que tenga sentido.", en: "And do work that matters." },
    ],
    practicePrompts: [
      "Describe the life you imagine when you let yourself dream.",
      "Say what would need to change first.",
      "Say what part of that life feels closest already.",
    ],
    practiceItems: [
      {
        id: "imagine-fluent",
        english: "I imagine being healthy, stable, and fluent in Spanish.",
        spanish: "Imagino estar sana, estable y hablar español con fluidez.",
        why: "*Con fluidez* is the natural phrase for speaking fluently.",
        wordHints: [
          { en: "imagine", es: "imagino" },
          { en: "stable", es: "estable" },
          { en: "fluent", es: "fluidez" },
        ],
      },
      {
        id: "imagine-tools",
        english: "I want to build meaningful tools and do work that helps people.",
        spanish: "Quiero construir herramientas con sentido y hacer trabajo que ayude a la gente.",
        why: "*Con sentido* means meaningful — warmer than *importante* here.",
        wordHints: [
          { en: "build", es: "construir" },
          { en: "meaningful", es: "con sentido" },
          { en: "helps", es: "ayude" },
        ],
      },
    ],
  },
  {
    slug: "what-youd-do-with-more-time",
    label: "about what you'd do with more time",
    category: "dreams",
    whenToUse: "Spanish, cooking, working out, reading, travel, projects without rushing.",
    phrases: [
      { es: "Con más tiempo, estudiaría más español.", en: "With more time, I'd study more Spanish." },
      { es: "Cocinaría más y haría más ejercicio.", en: "I'd cook more and work out more." },
      { es: "Leería, viajaría y construiría proyectos sin prisa.", en: "I'd read, travel, and build projects without rushing." },
      { es: "Me gustaría sentir que tengo espacio para respirar.", en: "I'd like to feel like I have room to breathe." },
    ],
    practicePrompts: [
      "Say three things you'd do with more free time.",
      "Say what you'd stop rushing.",
      "Say what you'd learn first.",
    ],
    practiceItems: [
      {
        id: "time-spanish",
        english: "With more time I'd study Spanish, cook more, and travel.",
        spanish: "Con más tiempo estudiaría español, cocinaría más y viajaría.",
        why: "Conditional verbs (*estudiaría*) naturally express hypothetical free time.",
        wordHints: [
          { en: "more time", es: "más tiempo" },
          { en: "study", es: "estudiaría" },
          { en: "travel", es: "viajaría" },
        ],
      },
      {
        id: "time-rush",
        english: "I'd build projects without feeling rushed.",
        spanish: "Construiría proyectos sin sentirme con prisa.",
        why: "*Sin sentirme con prisa* captures not feeling rushed — very speakable.",
        wordHints: [
          { en: "build", es: "construiría" },
          { en: "rushed", es: "prisa" },
          { en: "without", es: "sin" },
        ],
      },
    ],
  },
  { slug: "a-place-you-imagine-living", label: "about a place you imagine living someday", category: "dreams",
    whenToUse: "Soft future talk — Boston, somewhere warmer, or near the water.",
    phrases: [
      { es: "Tal vez me quedo en Boston.", en: "Maybe I'll stay in Boston." },
      { es: "También imagino un lugar más cálido.", en: "I also imagine somewhere warmer." },
      { es: "Me encantaría vivir cerca del agua.", en: "I'd love to live near the water." },
      { es: "Todavía no lo tengo claro, y está bien.", en: "I don't have it figured out yet, and that's okay." },
    ],
    practicePrompts: [
      "Say one place you could imagine living.",
      "Say what draws you to that place.",
      "Say what would need to change first.",
    ],
    practiceItems: [
      {
        id: "live-water",
        english: "I'd love to live somewhere near the water someday.",
        spanish: "Me encantaría vivir en algún lugar cerca del agua algún día.",
        why: "*Algún día* adds the someday feeling without committing to a timeline.",
        wordHints: [
          { en: "love", es: "me encantaría" },
          { en: "live", es: "vivir" },
          { en: "water", es: "agua" },
          { en: "someday", es: "algún día" },
        ],
      },
      {
        id: "live-warmer",
        english: "Maybe Boston, maybe somewhere warmer — I'm not sure yet.",
        spanish: "Tal vez Boston, tal vez algún lugar más cálido — todavía no estoy segura.",
        why: "*Todavía no estoy segura* is honest and conversational for an open question.",
        wordHints: [
          { en: "maybe", es: "tal vez" },
          { en: "warmer", es: "más cálido" },
          { en: "not sure", es: "no estoy segura" },
          { en: "yet", es: "todavía" },
        ],
      },
    ],
  },

  /* ─── Future Plans ──────────────────────────────────────── */
  {
    slug: "career-change",
    label: "about your possible career change",
    category: "future-plans",
    whenToUse: "Explaining a long-term transition without pretending every detail is settled.",
    phrases: [
      { es: "Estoy pensando en hacer un cambio de carrera.", en: "I'm thinking about making a career change." },
      { es: "Todavía estoy explorando mis opciones.", en: "I'm still exploring my options." },
      { es: "Quiero construir algo con más libertad y creatividad.", en: "I want to build something with more freedom and creativity." },
      { es: "Me da miedo, pero también me emociona.", en: "It scares me, but it also excites me." },
    ],
    practicePrompts: [
      "Say that you're considering a career change.",
      "Say what feels scary about it.",
      "Say what feels exciting about it.",
    ],
    practiceItems: [
      {
        id: "career-thinking",
        english: "I'm thinking about making a career change eventually.",
        spanish: "Estoy pensando en hacer un cambio de carrera con el tiempo.",
        why: "*Con el tiempo* softens the timeline: eventually, over time.",
        wordHints: [
          { en: "thinking", es: "pensando" },
          { en: "change", es: "cambio" },
          { en: "career", es: "carrera" },
          { en: "eventually", es: "con el tiempo" },
        ],
      },
      {
        id: "career-scary",
        english: "It scares me, but it also makes me excited.",
        spanish: "Me da miedo, pero también me emociona.",
        why: "*Me da miedo* literally means 'it gives me fear,' the natural Spanish pattern.",
        wordHints: [
          { en: "scares", es: "me da miedo" },
          { en: "also", es: "también" },
          { en: "excited", es: "me emociona" },
        ],
      },
    ],
  },
  {
    slug: "this-year",
    label: "about what you want to do this year",
    category: "future-plans",
    whenToUse: "Stronger, more Spanish, something real built, stop underestimating yourself.",
    phrases: [
      { es: "Este año quiero ser más fuerte.", en: "This year I want to get stronger." },
      { es: "Quiero hablar más español.", en: "I want to speak more Spanish." },
      { es: "Quiero construir algo real.", en: "I want to build something real." },
      { es: "Y dejar de subestimarme.", en: "And stop underestimating myself." },
    ],
    practicePrompts: [
      "Say three goals for this year.",
      "Say which goal matters most right now.",
      "Say what progress would look like in six months.",
    ],
    practiceItems: [
      {
        id: "year-stronger",
        english: "This year I want to get stronger and speak more Spanish.",
        spanish: "Este año quiero ponerme más fuerte y hablar más español.",
        why: "*Ponerme más fuerte* is conversational for getting stronger.",
        wordHints: [
          { en: "this year", es: "este año" },
          { en: "stronger", es: "más fuerte" },
          { en: "speak", es: "hablar" },
        ],
      },
      {
        id: "year-underestimate",
        english: "I want to stop underestimating myself.",
        spanish: "Quiero dejar de subestimarme.",
        why: "*Dejar de* + infinitive is the clean pattern for stop doing something.",
        wordHints: [
          { en: "stop", es: "dejar de" },
          { en: "underestimating", es: "subestimarme" },
        ],
      },
    ],
  },
  {
    slug: "next-summer",
    label: "about next summer",
    category: "future-plans",
    whenToUse: "Lighter, more stable, more confident, proud of what you built.",
    phrases: [
      { es: "El próximo verano espero sentirme más ligera.", en: "Next summer I hope to feel lighter." },
      { es: "Más estable y con más confianza.", en: "More stable and more confident." },
      { es: "Quiero estar orgullosa de lo que construí.", en: "I want to be proud of what I built." },
      { es: "Y disfrutar más el verano en Boston.", en: "And enjoy Boston summer more." },
    ],
    practicePrompts: [
      "Say how you hope to feel next summer.",
      "Say what you'd want to have finished by then.",
      "Say one thing you want to do when Boston comes alive.",
    ],
    practiceItems: [
      {
        id: "summer-lighter",
        english: "Next summer I hope to feel lighter and more confident.",
        spanish: "El próximo verano espero sentirme más ligera y con más confianza.",
        why: "*Espero* + infinitive expresses hope without sounding too formal.",
        wordHints: [
          { en: "next summer", es: "próximo verano" },
          { en: "hope", es: "espero" },
          { en: "confident", es: "confianza" },
        ],
      },
      {
        id: "summer-proud",
        english: "I want to be proud of what I built by then.",
        spanish: "Quiero estar orgullosa de lo que haya construido para entonces.",
        why: "*Para entonces* means by then — useful for future milestones.",
        wordHints: [
          { en: "proud", es: "orgullosa" },
          { en: "built", es: "construido" },
          { en: "by then", es: "para entonces" },
        ],
      },
    ],
  },
  {
    slug: "a-project-youre-planning",
    label: "about a project you're planning",
    category: "future-plans",
    whenToUse: "The Spanish learning site — real sentences for real lives.",
    phrases: [
      { es: "Estoy planeando un sitio para aprender español.", en: "I'm planning a Spanish learning site." },
      { es: "Quiero ayudar a la gente a practicar frases que de verdad necesitan.", en: "I want to help people practice sentences they actually need." },
      { es: "No ejercicios aleatorios de libro de texto.", en: "Not random textbook drills." },
      { es: "Ejemplos de la vida real, repetidos hasta que salgan solos.", en: "Real-life examples, repeated until they come out automatically." },
    ],
    practicePrompts: [
      "Describe the project you're planning.",
      "Say who it's for.",
      "Say what makes it different from a textbook.",
    ],
    practiceItems: [
      {
        id: "project-spanish-site",
        english: "I'm planning a site that helps people practice real-life Spanish.",
        spanish: "Estoy planeando un sitio que ayude a practicar español de la vida real.",
        why: "*De la vida real* anchors the phrase in real life, not classroom Spanish.",
        wordHints: [
          { en: "planning", es: "planeando" },
          { en: "real life", es: "vida real" },
          { en: "practice", es: "practicar" },
        ],
      },
      {
        id: "project-frames",
        english: "Repeated sentence frames until they come out automatically.",
        spanish: "Marcos de frases repetidos hasta que salgan solos.",
        why: "*Hasta que salgan solos* captures until they come out on their own.",
        wordHints: [
          { en: "repeated", es: "repetidos" },
          { en: "until", es: "hasta que" },
          { en: "automatically", es: "solos" },
        ],
      },
    ],
  },
  {
    slug: "where-youll-be-in-five-years",
    label: "where you'll be in five years",
    category: "future-plans",
    whenToUse: "Public-interest tech, legal education, language learning, data for justice.",
    phrases: [
      { es: "En cinco años espero trabajar en tecnología de interés público.", en: "In five years I hope to work in public-interest technology." },
      { es: "O en educación legal, aprendizaje de idiomas o datos para la justicia.", en: "Or in legal education, language learning, or data for justice." },
      { es: "Quiero hacer trabajo que ayude a personas reales.", en: "I want to do work that helps real people." },
      { es: "Todavía estoy explorando, pero tengo dirección.", en: "I'm still exploring, but I have direction." },
    ],
    practicePrompts: [
      "Say where you honestly think you'll be in five years.",
      "Say what kind of work you hope to be doing.",
      "Say what's still uncertain.",
    ],
    practiceItems: [
      {
        id: "five-years-public",
        english: "In five years I hope to work in public-interest technology.",
        spanish: "En cinco años espero trabajar en tecnología de interés público.",
        why: "*De interés público* is the standard phrase for public-interest work.",
        wordHints: [
          { en: "five years", es: "cinco años" },
          { en: "hope", es: "espero" },
          { en: "public-interest", es: "interés público" },
        ],
      },
      {
        id: "five-years-exploring",
        english: "I'm still exploring, but I know the direction I care about.",
        spanish: "Todavía estoy explorando, pero sé la dirección que me importa.",
        why: "*La dirección que me importa* sounds honest — direction you care about.",
        wordHints: [
          { en: "exploring", es: "explorando" },
          { en: "direction", es: "dirección" },
          { en: "care about", es: "me importa" },
        ],
      },
    ],
  },
  {
    slug: "something-youll-learn-next",
    label: "about something you'll learn next",
    category: "future-plans",
    whenToUse: "Better Spanish conversation and building simpler, more beautiful apps.",
    phrases: [
      { es: "Quiero mejorar mi conversación en español.", en: "I want to get better at Spanish conversation." },
      { es: "También quiero que mis apps se sientan más simples y bonitas.", en: "I also want my apps to feel simpler and more beautiful." },
      { es: "Y más útiles para personas reales.", en: "And more useful for real people." },
      { es: "Aprender a simplificar es casi tan difícil como aprender un idioma.", en: "Learning to simplify is almost as hard as learning a language." },
    ],
    practicePrompts: [
      "Say what skill you want to learn next.",
      "Say why it matters for your work.",
      "Say how you'll practice it.",
    ],
    practiceItems: [
      {
        id: "learn-conversation",
        english: "Next I want to get better at Spanish conversation.",
        spanish: "Lo próximo que quiero es mejorar mi conversación en español.",
        why: "*Lo próximo que quiero es* frames the next thing you want clearly.",
        wordHints: [
          { en: "next", es: "próximo" },
          { en: "conversation", es: "conversación" },
          { en: "better", es: "mejorar" },
        ],
      },
      {
        id: "learn-simpler-apps",
        english: "I want to learn how to make my apps simpler and more useful.",
        spanish: "Quiero aprender a hacer mis apps más simples y útiles.",
        why: "*Aprender a* + infinitive for learning how to do something.",
        wordHints: [
          { en: "learn", es: "aprender" },
          { en: "simpler", es: "simples" },
          { en: "useful", es: "útiles" },
        ],
      },
    ],
  },
];

export function situationsByCategory(): Record<SituationCategory, Situation[]> {
  const out = Object.fromEntries(
    (Object.keys(categoryLabels) as SituationCategory[]).map((k) => [k, [] as Situation[]])
  ) as Record<SituationCategory, Situation[]>;
  for (const s of situations) out[s.category].push(s);
  return out;
}

export function situationsForCategory(category: SituationCategory): Situation[] {
  return situations.filter((s) => s.category === category);
}

export function situationBySlug(slug: string): Situation | undefined {
  return situations.find((s) => s.slug === slug);
}

export function relatedSituations(slug: string, count = 3): Situation[] {
  const situation = situationBySlug(slug);
  if (!situation) return [];
  return situations
    .filter((s) => s.category === situation.category && s.slug !== slug)
    .slice(0, count);
}

export function practiceItemsForSituation(
  situation: Situation
): SituationPracticeItem[] {
  if (situation.practiceItems?.length) return situation.practiceItems;
  if (situation.phrases?.length) {
    return situation.phrases.map((phrase, index) => ({
      id: `phrase-${index + 1}`,
      english: phrase.en,
      spanish: phrase.es,
      why: phrase.note ?? "*Escucha* la frase y pruébala en voz alta.",
    }));
  }
  return [
    {
      id: "open-practice",
      english: `Say one thought ${situation.label}.`,
      spanish: "Quiero practicar esta situación con mis propias palabras.",
      why: "*Con mis propias palabras* means 'in my own words.'",
    },
  ];
}

export function practiceItemForSituation(
  situation: Situation,
  index = 0
): SituationPracticeItem {
  const items = practiceItemsForSituation(situation);
  return items[Math.abs(index) % items.length];
}

export function sampleSituations(count = 5): Situation[] {
  const shuffled = [...situations].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function randomSituation(): Situation {
  return situations[Math.floor(Math.random() * situations.length)];
}
