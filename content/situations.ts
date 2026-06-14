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

export type Situation = {
  slug: string;
  label: string;
  category: SituationCategory;
  whenToUse?: string;
  phrases?: Phrase[];
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
  },
  { slug: "your-school", label: "about the school where you teach", category: "work" },
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
  },
  { slug: "being-far-from-home", label: "about being far from home", category: "family" },
  { slug: "a-close-friend", label: "about a close friend", category: "family" },
  { slug: "growing-up-in-the-south", label: "about growing up in the South", category: "family" },
  { slug: "your-mom", label: "about your mom", category: "family" },
  { slug: "making-friends-in-boston", label: "about making friends in Boston", category: "family" },

  /* ─── Daily Life ────────────────────────────────────────── */
  { slug: "your-morning", label: "about your morning routine", category: "daily-life" },
  { slug: "the-t", label: "about taking the T", category: "daily-life" },
  { slug: "your-apartment", label: "about your apartment in Boston", category: "daily-life" },
  { slug: "boston-winter", label: "about Boston winter", category: "daily-life" },
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
  },
  { slug: "studying-code", label: "about studying code at night", category: "learning" },
  { slug: "a-book-youre-reading", label: "about a book you're reading", category: "learning" },
  { slug: "a-podcast", label: "about a podcast you listen to", category: "learning" },
  { slug: "something-new-you-learned", label: "about something new you learned this week", category: "learning" },

  /* ─── Travel ────────────────────────────────────────────── */
  { slug: "a-trip-to-atlanta", label: "about a trip back to Atlanta", category: "travel" },
  { slug: "a-place-you-want-to-visit", label: "about a place you want to visit", category: "travel" },
  { slug: "a-place-youve-been", label: "about somewhere you've been", category: "travel" },
  { slug: "packing-for-a-trip", label: "about packing for a trip", category: "travel" },
  { slug: "getting-around-boston", label: "about getting around Boston", category: "travel" },

  /* ─── Feelings ──────────────────────────────────────────── */
  { slug: "feeling-tired", label: "about feeling tired this week", category: "feelings" },
  { slug: "feeling-proud", label: "about something you're proud of", category: "feelings" },
  { slug: "feeling-overwhelmed", label: "about feeling overwhelmed", category: "feelings" },
  { slug: "feeling-grateful", label: "about something you're grateful for", category: "feelings" },
  { slug: "missing-home", label: "about missing home", category: "feelings" },
  { slug: "feeling-hopeful", label: "about feeling hopeful about something", category: "feelings" },

  /* ─── Food ──────────────────────────────────────────────── */
  { slug: "what-you-ate-today", label: "about what you ate today", category: "food" },
  { slug: "southern-food-you-miss", label: "about Southern food you miss", category: "food" },
  { slug: "a-favorite-restaurant", label: "about a favorite restaurant", category: "food" },
  { slug: "cooking-at-home", label: "about cooking at home", category: "food" },
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
  { slug: "career-change", label: "about your possible career change", category: "future-plans" },
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

export function situationBySlug(slug: string): Situation | undefined {
  return situations.find((s) => s.slug === slug);
}

export function sampleSituations(count = 5): Situation[] {
  const shuffled = [...situations].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function randomSituation(): Situation {
  return situations[Math.floor(Math.random() * situations.length)];
}
