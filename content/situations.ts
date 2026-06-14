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
  { slug: "being-far-from-home", label: "about being far from home", category: "family" },
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
      { es: "Vivo en un apartamento en Boston.", en: "I live in an apartment in Boston." },
      { es: "Es pequeño, pero tiene mucha luz.", en: "It's small, but it has a lot of light." },
      { es: "Todavía estoy tratando de hacerlo sentir como hogar.", en: "I'm still trying to make it feel like home." },
      { es: "Mi rincón favorito es donde tomo café.", en: "My favorite corner is where I drink coffee." },
    ],
    practicePrompts: [
      "Describe your apartment in one sentence.",
      "Say what part of it you like most.",
      "Say what you still want to change.",
    ],
    practiceItems: [
      {
        id: "apartment-light",
        english: "My apartment is small, but it gets a lot of light.",
        spanish: "Mi apartamento es pequeño, pero recibe mucha luz.",
        why: "*Recibe mucha luz* is a natural way to say a place gets a lot of light.",
        wordHints: [
          { en: "apartment", es: "apartamento" },
          { en: "small", es: "pequeño" },
          { en: "gets", es: "recibe" },
          { en: "light", es: "luz" },
        ],
      },
      {
        id: "apartment-home",
        english: "I'm trying to make it feel more like home.",
        spanish: "Estoy tratando de hacerlo sentir más como hogar.",
        why: "*Hacerlo sentir* literally means 'make it feel,' which works well here.",
        wordHints: [
          { en: "trying", es: "tratando" },
          { en: "make", es: "hacer" },
          { en: "feel", es: "sentir" },
          { en: "home", es: "hogar" },
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
  { slug: "your-neighborhood", label: "about your neighborhood", category: "daily-life" },

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
  { slug: "a-trip-to-atlanta", label: "about a trip back to Atlanta", category: "travel" },
  {
    slug: "a-place-you-want-to-visit",
    label: "about a place you want to visit",
    category: "travel",
    whenToUse: "Talking about travel hopes without needing a fully planned trip.",
    phrases: [
      { es: "Me gustaría visitar México algún día.", en: "I'd like to visit Mexico someday." },
      { es: "Quiero ir a un lugar donde pueda practicar español.", en: "I want to go somewhere where I can practice Spanish." },
      { es: "Todavía no tengo planes concretos.", en: "I don't have concrete plans yet." },
      { es: "Me emociona imaginar ese viaje.", en: "It makes me excited to imagine that trip." },
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
  { slug: "a-place-youve-been", label: "about somewhere you've been", category: "travel" },
  { slug: "packing-for-a-trip", label: "about packing for a trip", category: "travel" },
  { slug: "getting-around-boston", label: "about getting around Boston", category: "travel" },

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
  { slug: "missing-home", label: "about missing home", category: "feelings" },
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
  { slug: "your-city", label: "about something happening in Boston", category: "current-events" },
  { slug: "back-home", label: "about something happening back in Atlanta", category: "current-events" },
  { slug: "tech-news", label: "about something in tech news", category: "current-events" },

  /* ─── Dreams ────────────────────────────────────────────── */
  { slug: "a-dream-you-had", label: "about a dream you had last night", category: "dreams" },
  { slug: "a-recurring-dream", label: "about a recurring dream", category: "dreams" },
  { slug: "a-life-you-imagine", label: "about a life you imagine sometimes", category: "dreams" },
  { slug: "what-youd-do-with-more-time", label: "about what you'd do with more time", category: "dreams" },
  { slug: "a-place-you-imagine-living", label: "about a place you imagine living someday", category: "dreams" },

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
