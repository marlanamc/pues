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
  { slug: "a-difficult-day-teaching", label: "about a difficult day teaching", category: "work" },
  { slug: "your-coworkers", label: "about your coworkers", category: "work" },
  { slug: "a-meeting", label: "about a work meeting", category: "work" },
  { slug: "a-side-project", label: "about a coding side project", category: "work" },

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
  { slug: "a-close-friend", label: "about a close friend", category: "family" },
  { slug: "growing-up-in-the-south", label: "about growing up in the South", category: "family" },
  { slug: "your-mom", label: "about your mom", category: "family" },
  { slug: "making-friends-in-boston", label: "about making friends in Boston", category: "family" },

  /* ─── Daily Life ────────────────────────────────────────── */
  { slug: "your-morning", label: "about your morning routine", category: "daily-life" },
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
  { slug: "the-weekend", label: "about your weekend", category: "daily-life" },
  { slug: "errands", label: "about errands you ran today", category: "daily-life" },
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
  { slug: "studying-code", label: "about studying code at night", category: "learning" },
  { slug: "a-book-youre-reading", label: "about a book you're reading", category: "learning" },
  { slug: "a-podcast", label: "about a podcast you listen to", category: "learning" },
  { slug: "something-new-you-learned", label: "about something new you learned this week", category: "learning" },

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
  { slug: "feeling-tired", label: "about feeling tired this week", category: "feelings" },
  { slug: "feeling-proud", label: "about something you're proud of", category: "feelings" },
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
  { slug: "feeling-grateful", label: "about something you're grateful for", category: "feelings" },
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
  { slug: "feeling-hopeful", label: "about feeling hopeful about something", category: "feelings" },

  /* ─── Food ──────────────────────────────────────────────── */
  { slug: "what-you-ate-today", label: "about what you ate today", category: "food" },
  { slug: "southern-food-you-miss", label: "about Southern food you miss", category: "food" },
  { slug: "a-favorite-restaurant", label: "about a favorite restaurant", category: "food" },
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
  { slug: "coffee-habits", label: "about your coffee habits", category: "food" },
  { slug: "a-meal-with-friends", label: "about a meal with friends", category: "food" },

  /* ─── Current Events ────────────────────────────────────── */
  { slug: "something-in-the-news", label: "about something in the news", category: "current-events" },
  { slug: "education-policy", label: "about education policy", category: "current-events" },
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
  { slug: "tech-news", label: "about something in tech news", category: "current-events" },

  /* ─── Dreams ────────────────────────────────────────────── */
  { slug: "a-dream-you-had", label: "about a dream you had last night", category: "dreams" },
  { slug: "a-recurring-dream", label: "about a recurring dream", category: "dreams" },
  { slug: "a-life-you-imagine", label: "about a life you imagine sometimes", category: "dreams" },
  { slug: "what-youd-do-with-more-time", label: "about what you'd do with more time", category: "dreams" },
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
  { slug: "this-year", label: "about what you want to do this year", category: "future-plans" },
  { slug: "next-summer", label: "about next summer", category: "future-plans" },
  { slug: "a-project-youre-planning", label: "about a project you're planning", category: "future-plans" },
  { slug: "where-youll-be-in-five-years", label: "where you'll be in five years", category: "future-plans" },
  { slug: "something-youll-learn-next", label: "about something you'll learn next", category: "future-plans" },
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
