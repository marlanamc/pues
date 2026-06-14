/**
 * Commonly mistaken verbs and expressions — especially traps for English speakers
 * who map one English word onto several different Spanish patterns.
 */

export type ConfusionOption = {
  pattern: string;
  english: string;
  when: string;
  avoid?: string;
};

export type ConfusionExample = {
  spanish: string;
  english: string;
  cue: string;
  /** What Americans often reach for instead — and why it misses. */
  trap?: string;
};

export type ConfusionGroup = {
  id: string;
  title: string;
  headline: string;
  note: string;
  options: ConfusionOption[];
  examples: ConfusionExample[];
};

export type ConfusionCategoryId =
  | "feel-want"
  | "to-be"
  | "know-think"
  | "say-ask"
  | "see-hear"
  | "go-meet"
  | "do-duty"
  | "daily";

export const confusionCategories: {
  id: ConfusionCategoryId;
  label: string;
}[] = [
  { id: "feel-want", label: "Feel & want" },
  { id: "to-be", label: "To be" },
  { id: "know-think", label: "Know & think" },
  { id: "say-ask", label: "Say & ask" },
  { id: "see-hear", label: "See & hear" },
  { id: "go-meet", label: "Go & meet" },
  { id: "do-duty", label: "Do & duty" },
  { id: "daily", label: "Daily life" },
];

const confusionCategoryById: Record<string, ConfusionCategoryId> = {
  "feel-want-mood": "feel-want",
  "me-siento-estoy": "feel-want",
  "gusta-gustaria-quiero": "feel-want",
  esperar: "feel-want",
  "ser-estar": "to-be",
  "saber-conocer": "know-think",
  "pensar-creer": "know-think",
  "recordar-acordarse": "know-think",
  "pedir-preguntar": "say-ask",
  "decir-contar": "say-ask",
  "mirar-ver": "see-hear",
  "escuchar-oir": "see-hear",
  "llevar-traer": "go-meet",
  "ir-venir": "go-meet",
  "quedar-quedarse": "go-meet",
  "encontrar-encontrarse": "go-meet",
  hacer: "do-duty",
  "tener-que-deber-hay-que": "do-duty",
  "dejar-parar": "do-duty",
  "tomar-beber": "daily",
  "llevar-usar": "daily",
  "prestar-pedir-prestado": "daily",
  "por-para": "daily",
};

export function confusionGroupsByCategory() {
  return confusionCategories.map((category) => ({
    category,
    groups: confusionGroups.filter(
      (group) => confusionCategoryById[group.id] === category.id,
    ),
  }));
}

export const confusionGroups: ConfusionGroup[] = [
  {
    id: "feel-want-mood",
    title: "Feel · mood · want",
    headline:
      "English squeezes these into one word. Spanish splits them into different patterns.",
    note:
      "This is the cluster that causes the most daily mix-ups. Ask yourself: Am I naming how I feel? What I'm in the mood for? What I want right now? Or a softer wish down the road?",
    options: [
      {
        pattern: "Me siento + adjective",
        english: "I feel… (how you are inside)",
        when: "Emotional or inner state — tired, grateful, confident, off.",
        avoid: "Not for cravings or plans. You don't say *me siento un café*.",
      },
      {
        pattern: "Tengo ganas de + verb / noun",
        english: "I feel like… / I'm in the mood for…",
        when: "A pull toward doing something or having something soon.",
        avoid: "Not a permanent feeling. *Tengo ganas de* fades — it's a mood, not who you are.",
      },
      {
        pattern: "Quiero + verb / noun",
        english: "I want… (direct, now)",
        when: "Immediate desire or intention. Ordering, deciding, stating what you want.",
        avoid: "Can sound blunt in formal settings. Fine with friends; at a nice restaurant, soften it.",
      },
      {
        pattern: "Me gustaría + verb / noun",
        english: "I would like… (softer / someday)",
        when: "Polite requests, daydreams, hypothetical futures, things that aren't happening right now.",
        avoid: "Not your go-to for a strong immediate craving. *Me gustaría un café* is polite — but you mean *quiero* when you're headed to the counter now.",
      },
    ],
    examples: [
      {
        spanish: "Me siento cansada hoy.",
        english: "I feel tired today.",
        cue: "Inner state — how you're doing emotionally or physically inside.",
        trap: "✗ Estoy cansada works too for 'I'm tired now,' but *me siento* emphasizes the feeling itself.",
      },
      {
        spanish: "Tengo ganas de un café.",
        english: "I feel like having a coffee.",
        cue: "Mood or craving — you're in the mood for it, not stating a life goal.",
        trap: "✗ Me gustaría un café sounds polite but distant — like a wish, not 'I want one now.'",
      },
      {
        spanish: "Quiero un café, por favor.",
        english: "I want a coffee, please.",
        cue: "Direct order or decision. You're getting coffee.",
        trap: "✗ Me gustaría un café is softer — good at a sit-down restaurant, odd if you're just grabbing one.",
      },
      {
        spanish: "Me gustaría viajar más algún día.",
        english: "I would like to travel more someday.",
        cue: "Down-the-road wish — not happening this afternoon.",
        trap: "✗ Quiero viajar más states the want more firmly, as a real intention.",
      },
      {
        spanish: "Tengo ganas de descansar.",
        english: "I feel like resting.",
        cue: "Mood after work — very natural, very spoken.",
        trap: "✗ Me siento descansar is impossible — *me siento* needs an adjective, not an action.",
      },
    ],
  },
  {
    id: "me-siento-estoy",
    title: "Me siento vs estoy",
    headline: "Both can mean 'I feel,' but they point at different things.",
    note:
      "Americans often default to *me siento* for everything because English says 'I feel.' For physical states happening right now, *estoy* is often more natural.",
    options: [
      {
        pattern: "Me siento + adjective",
        english: "I feel… (inner / emotional)",
        when: "Grateful, confident, weird, relieved — how you experience yourself.",
      },
      {
        pattern: "Estoy + adjective",
        english: "I am… (temporary state, right now)",
        when: "Tired, busy, sick, ready — what's true in this moment.",
        avoid: "Never *soy cansada* — tired isn't your identity.",
      },
    ],
    examples: [
      {
        spanish: "Me siento agradecida por este trabajo.",
        english: "I feel grateful for this job.",
        cue: "Emotional tone — gratitude as an inner feeling.",
      },
      {
        spanish: "Estoy cansada después de clase.",
        english: "I'm tired after class.",
        cue: "Temporary state right now. Very common in daily speech.",
        trap: "✗ Me siento cansada also works — slightly more reflective, less 'right now.'",
      },
      {
        spanish: "Estoy lista para empezar.",
        english: "I'm ready to start.",
        cue: "State in the moment — *estoy* is the default for 'ready / busy / sick.'",
      },
    ],
  },
  {
    id: "gusta-gustaria-quiero",
    title: "Me gusta · me gustaría · quiero",
    headline: "Three different relationships to wanting.",
    note:
      "*Gustar* flips the grammar: the thing you like is the subject. *Me gustaría* is the conditional — softer, hypothetical. *Quiero* puts you in charge: direct want.",
    options: [
      {
        pattern: "Me gusta + noun / infinitive",
        english: "I like… (in general)",
        when: "Ongoing preferences — food, hobbies, how things are.",
      },
      {
        pattern: "Me gustaría + noun / infinitive",
        english: "I would like…",
        when: "Polite offers, wishes, things you'd enjoy if they happened.",
      },
      {
        pattern: "Quiero + noun / infinitive",
        english: "I want…",
        when: "Concrete desire or plan you're claiming.",
      },
    ],
    examples: [
      {
        spanish: "Me gusta el café fuerte.",
        english: "I like strong coffee.",
        cue: "General taste — coffee is the subject: 'strong coffee pleases me.'",
        trap: "✗ Quiero el café fuerte sounds like you're ordering or demanding it.",
      },
      {
        spanish: "Me gustaría aprender a tocar la guitarra.",
        english: "I would like to learn to play guitar.",
        cue: "A wish — not necessarily starting lessons tomorrow.",
      },
      {
        spanish: "Quiero aprender más español.",
        english: "I want to learn more Spanish.",
        cue: "Active intention — you're stating a real goal.",
      },
    ],
  },
  {
    id: "saber-conocer",
    title: "Saber vs conocer",
    headline: "Both translate as 'know' — but for different kinds of knowing.",
    note:
      "Rough rule: *saber* = facts, how-to, information. *Conocer* = people, places, familiarity from experience.",
    options: [
      {
        pattern: "Saber + fact / question word / infinitive",
        english: "To know (information, how to)",
        when: "Facts, skills, answers — *sé dónde está*, *sé cocinar*, *no sé*.",
      },
      {
        pattern: "Conocer + person / place",
        english: "To know (be familiar with)",
        when: "People, cities, restaurants — you've met or been there.",
        avoid: "Not *conozco cocinar* — skills use *saber*.",
      },
    ],
    examples: [
      {
        spanish: "Sé dónde está la escuela.",
        english: "I know where the school is.",
        cue: "Information — a fact you can answer.",
        trap: "✗ Conozco dónde está treats 'where' like a place you visit.",
      },
      {
        spanish: "Conozco bien este barrio.",
        english: "I know this neighborhood well.",
        cue: "Familiarity from being there.",
      },
      {
        spanish: "Sé usar Excel, pero no mucho.",
        english: "I know how to use Excel, but not much.",
        cue: "Skill / how-to always takes *saber + infinitive*.",
      },
    ],
  },
  {
    id: "pedir-preguntar",
    title: "Pedir vs preguntar",
    headline: "English 'ask' covers both — Spanish doesn't.",
    note:
      "*Pedir* = ask for something (request). *Preguntar* = ask a question. If you'd say 'ask for' in English, it's almost always *pedir*.",
    options: [
      {
        pattern: "Pedir + thing",
        english: "To ask for / request / order",
        when: "Food, favors, raises, forgiveness — you want something given.",
      },
      {
        pattern: "Preguntar (+ a alguien)",
        english: "To ask (a question)",
        when: "Questions — *pregunté el precio*, *le pregunté a María*.",
        avoid: "Not *pregunté un café* — you pedir a coffee, not question it.",
      },
    ],
    examples: [
      {
        spanish: "Voy a pedir un café.",
        english: "I'm going to order a coffee.",
        cue: "Requesting something — order at a café.",
        trap: "✗ Voy a preguntar un café sounds like you'll interview the coffee.",
      },
      {
        spanish: "Le pregunté a mi jefa sobre el horario.",
        english: "I asked my boss about the schedule.",
        cue: "A question to a person — *preguntar a*.",
      },
      {
        spanish: "¿Puedo pedirte un favor?",
        english: "Can I ask you for a favor?",
        cue: "English says 'ask for' → Spanish *pedir*.",
      },
    ],
  },
  {
    id: "llevar-traer",
    title: "Llevar vs traer",
    headline: "Take vs bring — direction matters.",
    note:
      "Think from the speaker's point of view. *Llevar* = carry away from here. *Traer* = bring toward here. Americans mix these up constantly.",
    options: [
      {
        pattern: "Llevar + thing / person",
        english: "To take / carry (away from here)",
        when: "Taking kids to school, bringing lunch from home to work — away from the speaker.",
      },
      {
        pattern: "Traer + thing / person",
        english: "To bring (toward here)",
        when: "Bring wine to the party you're already at, bring documents to the meeting.",
      },
    ],
    examples: [
      {
        spanish: "Voy a llevar a los niños a la escuela.",
        english: "I'm going to take the kids to school.",
        cue: "Away from home — *llevar*.",
        trap: "✗ Traer a los niños implies bringing them toward you.",
      },
      {
        spanish: "¿Puedes traer el libro mañana?",
        english: "Can you bring the book tomorrow?",
        cue: "Toward me / toward our meeting — *traer*.",
      },
      {
        spanish: "Llevo mi laptop al trabajo todos los días.",
        english: "I take my laptop to work every day.",
        cue: "From home → work. Motion away from where you start.",
      },
    ],
  },
  {
    id: "ir-venir",
    title: "Ir vs venir",
    headline: "Go vs come — same direction logic as llevar/traer.",
    note:
      "*Ir* = go there. *Venir* = come here (toward the speaker or the place you're treating as 'here').",
    options: [
      {
        pattern: "Ir + a + place",
        english: "To go (away to there)",
        when: "Voy al trabajo, voy a la tienda — movement toward another place.",
      },
      {
        pattern: "Venir + a / de + place",
        english: "To come (toward here)",
        when: "¿Vienes a la fiesta? — are you coming (to where I am)?",
      },
    ],
    examples: [
      {
        spanish: "Voy a la oficina a las nueve.",
        english: "I go to the office at nine.",
        cue: "You're heading there — default commute verb.",
      },
      {
        spanish: "¿Vienes a la reunión?",
        english: "Are you coming to the meeting?",
        cue: "Coming toward the speaker's context — the meeting we're both talking about.",
        trap: "✗ ¿Vas a la reunión? is fine too, but shifts perspective — 'are you going (there)?'",
      },
      {
        spanish: "Mi hermana viene de Colombia este verano.",
        english: "My sister is coming from Colombia this summer.",
        cue: "*Venir* toward us — she's on her way here.",
      },
    ],
  },
  {
    id: "recordar-acordarse",
    title: "Recordar vs acordarse de",
    headline: "Both mean 'remember' — different grammar, same idea.",
    note:
      "*Recordar* works like a normal verb: *recuerdo tu nombre*. *Acordarse* is reflexive and needs *de*: *me acuerdo de tu nombre*. Americans often forget the *de*.",
    options: [
      {
        pattern: "Recordar + thing / person",
        english: "To remember (direct object)",
        when: "Recuerdo ese día, recuerdo la lección — no preposition.",
      },
      {
        pattern: "Acordarse de + thing / person",
        english: "To remember (reflexive)",
        when: "Me acuerdo de… — very common in speech. Don't drop the *de*.",
        avoid: "✗ Me acuerdo tu nombre — missing *de*.",
      },
    ],
    examples: [
      {
        spanish: "Recuerdo ese día muy bien.",
        english: "I remember that day very well.",
        cue: "*Recordar* + direct object.",
      },
      {
        spanish: "No me acuerdo de su nombre.",
        english: "I don't remember his name.",
        cue: "Reflexive + *de* — probably the most spoken version.",
        trap: "✗ No me recuerdo de su nombre — mixing the two patterns.",
      },
      {
        spanish: "¿Te acuerdas de la primera clase?",
        english: "Do you remember the first class?",
        cue: "*Acordarse de* in questions — natural and common.",
      },
    ],
  },
  {
    id: "esperar",
    title: "Esperar",
    headline: "Wait and hope are the same verb.",
    note:
      "Context does the work. *Espero el autobús* = waiting. *Espero que sí* = hoping. *Esperar* also means 'to expect' in some contexts — three English words, one Spanish verb.",
    options: [
      {
        pattern: "Esperar + noun",
        english: "To wait for",
        when: "Espero el autobús, espera un momento — literal waiting.",
      },
      {
        pattern: "Esperar que + subjunctive",
        english: "To hope that",
        when: "Espero que puedas venir — hope for something to happen.",
      },
      {
        pattern: "Esperar + thing",
        english: "To expect",
        when: "Esperaba más gente — you expected a bigger turnout.",
      },
    ],
    examples: [
      {
        spanish: "Espero el autobús desde hace diez minutos.",
        english: "I've been waiting for the bus for ten minutes.",
        cue: "Physical waiting — the basic meaning.",
      },
      {
        spanish: "Espero que todo salga bien.",
        english: "I hope everything turns out okay.",
        cue: "*Esperar que* + subjunctive = hope.",
        trap: "✗ English 'hope' does not use *ojalá* unless it's a strong wish — *espero que* is everyday hope.",
      },
      {
        spanish: "No esperaba tanta gente.",
        english: "I didn't expect so many people.",
        cue: "Expectation — past tense is very common here.",
      },
    ],
  },
  {
    id: "ser-estar",
    title: "Ser vs estar",
    headline: "Both mean 'to be' — identity vs condition.",
    note:
      "The classic split. *Ser* = what something is (identity, origin, time, traits that define). *Estar* = how/where something is right now (location, mood, temporary state). Americans reach for *es* when they need *está* and vice versa.",
    options: [
      {
        pattern: "Ser + noun / adjective",
        english: "To be (identity / definition)",
        when: "Profession, nationality, personality, time — *soy maestra*, *es lunes*, *es inteligente* (as a trait).",
        avoid: "Not location or 'right now' states — *soy en la casa* is wrong.",
      },
      {
        pattern: "Estar + adjective / location",
        english: "To be (state / location)",
        when: "Location, mood, health, progress — *estoy en casa*, *estoy cansada*, *está roto*.",
        avoid: "Not *estoy maestra* — your job uses *ser*.",
      },
    ],
    examples: [
      {
        spanish: "Soy maestra de inglés.",
        english: "I'm an English teacher.",
        cue: "Profession = identity → *ser*.",
        trap: "✗ Estoy maestra treats your job like a temporary mood.",
      },
      {
        spanish: "Estoy en la escuela ahora.",
        english: "I'm at school now.",
        cue: "Location → *estar*. Always.",
        trap: "✗ Soy en la escuela — never use *ser* for where you are.",
      },
      {
        spanish: "Estoy cansada, pero soy una persona activa.",
        english: "I'm tired, but I'm an active person.",
        cue: "Tired = right now (*estar*). Active = trait (*ser*).",
      },
      {
        spanish: "La sopa está fría.",
        english: "The soup is cold.",
        cue: "Condition right now — it could heat up → *estar*.",
        trap: "✗ La sopa es fría sounds like cold soup is its permanent nature.",
      },
      {
        spanish: "Es tarde — tengo que irme.",
        english: "It's late — I have to go.",
        cue: "Time always takes *ser*: *es la una*, *es tarde*, *es lunes*.",
      },
    ],
  },
  {
    id: "pensar-creer",
    title: "Pensar en vs pensar que · creer que",
    headline: "Thinking about something vs thinking that something is true.",
    note:
      "*Pensar en* = your mind is on a topic. *Pensar que / creer que* = you hold an opinion or belief. English 'think' covers all of it. *Creer* is often closer to 'believe' or 'think so' in everyday speech.",
    options: [
      {
        pattern: "Pensar en + noun / infinitive",
        english: "To think about",
        when: "The topic on your mind — *pienso en mi familia*, *pienso en cambiar de trabajo*.",
        avoid: "Not *pienso en que…* — opinions need *pensar que*.",
      },
      {
        pattern: "Pensar que + clause",
        english: "To think that… (opinion)",
        when: "What you figure is true — *pienso que es buena idea*.",
      },
      {
        pattern: "Creer que + clause",
        english: "To believe / think that…",
        when: "Slightly stronger opinion — *creo que sí*, *creo que puedes hacerlo*.",
        avoid: "Not *creo en que* for opinions — *creer en* is 'believe in' (faith, trust).",
      },
    ],
    examples: [
      {
        spanish: "Estoy pensando en cambiar de carrera.",
        english: "I'm thinking about changing careers.",
        cue: "Topic on your mind — *pensar en + infinitive*.",
        trap: "✗ Pienso que cambiar de carrera means 'I think changing careers [is X]' — different idea.",
      },
      {
        spanish: "Creo que es una buena idea.",
        english: "I think it's a good idea.",
        cue: "Opinion — *creer que* is the everyday 'I think so.'",
        trap: "✗ Pienso en una buena idea = 'I'm thinking about a good idea.'",
      },
      {
        spanish: "Pienso en mis estudiantes mucho.",
        english: "I think about my students a lot.",
        cue: "People on your mind → *pensar en*.",
      },
      {
        spanish: "No creo que pueda venir mañana.",
        english: "I don't think I can come tomorrow.",
        cue: "Doubt about a fact → *creer que* + subjunctive when negated.",
      },
    ],
  },
  {
    id: "hacer",
    title: "Hacer",
    headline: "Do and make are one verb in Spanish.",
    note:
      "English splits 'do' and 'make.' Spanish uses *hacer* for both — homework, food, decisions, noise, progress. Learn common collocations instead of translating literally.",
    options: [
      {
        pattern: "Hacer + noun (task / activity)",
        english: "To do / make",
        when: "Homework, the bed, a mistake, progress, noise — *hacer la tarea*, *hacer la cama*.",
      },
      {
        pattern: "Hacer + weather / time",
        english: "To be (weather)",
        when: "*Hace frío*, *hace sol*, *hace dos años* — weather and elapsed time.",
        avoid: "Weather never uses *es frío* or *está frío* for 'it's cold out.'",
      },
    ],
    examples: [
      {
        spanish: "Tengo que hacer la tarea esta noche.",
        english: "I have to do homework tonight.",
        cue: "Tasks → *hacer*, not *hacer* vs English 'do' — just learn the chunk.",
        trap: "✗ Hacer doesn't pair with 'do' one-to-one — *hacer la tarea* is a fixed phrase.",
      },
      {
        spanish: "Voy a hacer la cena.",
        english: "I'm going to make dinner.",
        cue: "Making food → still *hacer*, not a separate 'make' verb.",
      },
      {
        spanish: "Hace frío esta mañana.",
        english: "It's cold this morning.",
        cue: "Weather → *hacer*. Non-negotiable.",
        trap: "✗ Está frío describes something that is cold — the soup, not the weather.",
      },
      {
        spanish: "Hice un error en el informe.",
        english: "I made a mistake in the report.",
        cue: "Mistakes, decisions, progress — *hacer* again.",
      },
      {
        spanish: "¿Qué haces este fin de semana?",
        english: "What are you doing this weekend?",
        cue: "Everyday 'what are you up to' → *¿qué haces?*",
      },
    ],
  },
  {
    id: "decir-contar",
    title: "Decir vs contar",
    headline: "Say vs tell — Spanish keeps them separate.",
    note:
      "*Decir* = to say (words). *Contar* = to tell (a story, the truth, someone what happened). If English uses 'tell,' it's usually *contar* — and *contar* often needs *a* someone.",
    options: [
      {
        pattern: "Decir + words / que",
        english: "To say",
        when: "*Dijo que sí*, *di la respuesta*, *¿qué dijiste?*",
      },
      {
        pattern: "Contar (+ a alguien)",
        english: "To tell (a story / account)",
        when: "*Te cuento*, *contó la verdad*, *cuéntame qué pasó*.",
        avoid: "Not *díme la historia* — stories get *contar*.",
      },
    ],
    examples: [
      {
        spanish: "Dijo que llegaría tarde.",
        english: "He said he'd arrive late.",
        cue: "Reporting words → *decir que*.",
      },
      {
        spanish: "Te cuento lo que pasó en la reunión.",
        english: "I'll tell you what happened in the meeting.",
        cue: "Telling someone an account → *contar*.",
        trap: "✗ Te digo lo que pasó is understandable but less natural for narrating events.",
      },
      {
        spanish: "Cuéntame la verdad.",
        english: "Tell me the truth.",
        cue: "*Contar* for telling — very spoken.",
        trap: "✗ Dime la verdad works in some regions but *cuéntame* is the storytelling verb.",
      },
    ],
  },
  {
    id: "mirar-ver",
    title: "Mirar vs ver",
    headline: "Look vs see vs watch.",
    note:
      "*Mirar* = to look at / watch intentionally. *Ver* = to see (perceive, notice) or watch in a general sense. 'Watch a movie' can be either depending on region — *ver una película* is very common.",
    options: [
      {
        pattern: "Mirar + object",
        english: "To look at / watch (intentionally)",
        when: "Looking at photos, watching someone, staring — *mira esto*, *estoy mirando el menú*.",
      },
      {
        pattern: "Ver + object / person",
        english: "To see / watch",
        when: "Perceiving, visiting, watching TV/movies — *veo la tele*, *quiero ver a mi mamá*.",
        avoid: "Not 'see' as in 'I see your point' — that's *entiendo*.",
      },
    ],
    examples: [
      {
        spanish: "Estoy mirando el menú.",
        english: "I'm looking at the menu.",
        cue: "Deliberate looking → *mirar*.",
      },
      {
        spanish: "¿Viste el mensaje?",
        english: "Did you see the message?",
        cue: "Notice/perceive → *ver*.",
        trap: "✗ ¿Miraste el mensaje? sounds like you stared at it intentionally.",
      },
      {
        spanish: "Quiero ver una película esta noche.",
        english: "I want to watch a movie tonight.",
        cue: "Movies and shows usually take *ver*.",
      },
    ],
  },
  {
    id: "escuchar-oir",
    title: "Escuchar vs oír",
    headline: "Listen vs hear — same split as mirar/ver.",
    note:
      "*Oír* = to hear (sound reaches you). *Escuchar* = to listen (pay attention). *No oigo* = I can't hear you. *No escucho* = I'm not listening.",
    options: [
      {
        pattern: "Oír + sound",
        english: "To hear",
        when: "Sounds reaching your ears — *oigo música*, *¿oyes eso?*",
      },
      {
        pattern: "Escuchar + music / person",
        english: "To listen to",
        when: "Active listening — *escucho un podcast*, *escúchame*.",
      },
    ],
    examples: [
      {
        spanish: "No oigo bien — ¿puedes repetir?",
        english: "I can't hear well — can you repeat?",
        cue: "Hearing ability → *oír*.",
        trap: "✗ No escucho bien blames you for not listening, not bad hearing.",
      },
      {
        spanish: "Me gusta escuchar podcasts en el carro.",
        english: "I like listening to podcasts in the car.",
        cue: "Intentional listening → *escuchar*.",
      },
      {
        spanish: "¿Oíste eso?",
        english: "Did you hear that?",
        cue: "A sound happened — did it reach you?",
      },
    ],
  },
  {
    id: "quedar-quedarse",
    title: "Quedar · quedarse · quedar en",
    headline: "One verb family, three everyday meanings.",
    note:
      "Americans rarely learn these cleanly. *Quedar* = to be left / to turn out / to meet (agree on plans). *Quedarse* = to stay / remain. *Quedar en* = to agree to meet or do something.",
    options: [
      {
        pattern: "Quedar + result",
        english: "To turn out / be left",
        when: "*Quedó perfecto*, *queda poco tiempo* — how something ended up.",
      },
      {
        pattern: "Quedarse + place",
        english: "To stay / remain",
        when: "*Me quedo en casa*, *se quedó dormido* — staying put.",
      },
      {
        pattern: "Quedar en + infinitive",
        english: "To agree to (plans)",
        when: "*Quedamos en vernos el viernes* — we agreed to meet Friday.",
        avoid: "Not *acordamos encontrarnos* for casual plans — *quedar en* is more spoken.",
      },
    ],
    examples: [
      {
        spanish: "Me quedo en casa esta noche.",
        english: "I'm staying home tonight.",
        cue: "Staying → reflexive *quedarse*.",
        trap: "✗ Me quedo en casa is right; *me quedo a casa* is wrong preposition.",
      },
      {
        spanish: "¿Quedamos en vernos el viernes?",
        english: "Shall we agree to meet on Friday?",
        cue: "Making plans — extremely common in Latin America.",
        trap: "✗ Nos encontramos el viernes is fine but *¿quedamos en…?* is the social default.",
      },
      {
        spanish: "Solo quedan dos asientos.",
        english: "Only two seats are left.",
        cue: "What's remaining → *quedar*.",
      },
      {
        spanish: "La comida quedó deliciosa.",
        english: "The food turned out delicious.",
        cue: "How something turned out → *quedar*.",
      },
    ],
  },
  {
    id: "tener-que-deber-hay-que",
    title: "Tener que · deber · hay que",
    headline: "Three ways to say something must happen.",
    note:
      "*Tener que* = I/you have to (personal obligation). *Deber* = should (advice, duty — softer). *Hay que* = one must / it's necessary (impersonal — no specific person). Americans overuse *necesito* when *tener que* fits better.",
    options: [
      {
        pattern: "Tener que + infinitive",
        english: "To have to",
        when: "Personal obligation — *tengo que trabajar*, *tienes que ver esto*.",
      },
      {
        pattern: "Deber + infinitive",
        english: "Should / ought to",
        when: "Advice or moral duty — *deberías descansar*, *debo llamarla*.",
      },
      {
        pattern: "Hay que + infinitive",
        english: "One must / it's necessary",
        when: "General necessity — *hay que practicar*, *hay que tener paciencia*.",
        avoid: "Not *hay que* for 'I have to' — that's *tengo que*.",
      },
    ],
    examples: [
      {
        spanish: "Tengo que terminar esto antes de las cinco.",
        english: "I have to finish this before five.",
        cue: "Your personal deadline → *tener que*.",
        trap: "✗ Necesito terminar is close, but *tener que* is the obligation frame.",
      },
      {
        spanish: "Deberías descansar un poco.",
        english: "You should rest a bit.",
        cue: "Gentle advice → *deber*.",
      },
      {
        spanish: "Hay que practicar todos los días.",
        english: "You have to practice every day. / One must practice.",
        cue: "General truth — no one in particular, just life.",
        trap: "✗ Tengo que practicar every day is about YOU specifically.",
      },
    ],
  },
  {
    id: "dejar-parar",
    title: "Dejar vs parar",
    headline: "Leave, stop, and let — English overloads all three.",
    note:
      "*Dejar* = to leave (a place or object), to let/allow, to quit/stop doing. *Parar* = to stop (moving, an activity). *Dejar de + infinitive* = to stop doing something — the pattern Americans need most.",
    options: [
      {
        pattern: "Dejar + thing / place",
        english: "To leave (behind / a place)",
        when: "*Dejé las llaves*, *dejé el trabajo* — left something or quit.",
      },
      {
        pattern: "Dejar de + infinitive",
        english: "To stop doing",
        when: "*Dejé de comer azúcar*, *deja de hablar* — quit a habit or stop an action.",
        avoid: "Not *parar de comer* for habits — *dejar de* is the idiom.",
      },
      {
        pattern: "Parar",
        english: "To stop (halt)",
        when: "*Para el carro*, *la lluvia paró* — physical stopping.",
      },
    ],
    examples: [
      {
        spanish: "Dejé las llaves en la mesa.",
        english: "I left the keys on the table.",
        cue: "Left something behind → *dejar*.",
      },
      {
        spanish: "Dejé de tomar café por la tarde.",
        english: "I stopped drinking coffee in the afternoon.",
        cue: "Quit a habit → *dejar de + infinitive*.",
        trap: "✗ Paré de tomar café is understandable but *dejar de* is the natural idiom.",
      },
      {
        spanish: "Para un momento — necesito pensar.",
        english: "Stop for a moment — I need to think.",
        cue: "Halt right now → *parar*.",
      },
      {
        spanish: "Déjame ayudarte.",
        english: "Let me help you.",
        cue: "*Dejar* also means let/allow — *déjame* is everywhere.",
      },
    ],
  },
  {
    id: "tomar-beber",
    title: "Tomar vs beber",
    headline: "Take, drink, have — tomar does a lot of work.",
    note:
      "In Latin America, *tomar* covers drinking (*tomar café*), taking medication, taking a bus, and having food. *Beber* is specifically to drink liquids — more literal.",
    options: [
      {
        pattern: "Tomar + drink / food / transport",
        english: "To have / drink / take",
        when: "*Tomo café*, *tomamos el bus*, *tomé medicina* — everyday Latin American default.",
      },
      {
        pattern: "Beber + liquid",
        english: "To drink",
        when: "More literal — *bebe mucha agua*, *no bebo alcohol*.",
      },
    ],
    examples: [
      {
        spanish: "Voy a tomar un café.",
        english: "I'm going to have a coffee.",
        cue: "Having a drink — *tomar* is natural across Latin America.",
        trap: "✗ Beber un café isn't wrong, but *tomar* is what you'll hear.",
      },
      {
        spanish: "Tomo el bus al trabajo.",
        english: "I take the bus to work.",
        cue: "Transport → *tomar*, not *llevar*.",
        trap: "✗ Llevo el bus confuses 'take' with 'carry.'",
      },
      {
        spanish: "Bebo mucha agua durante el día.",
        english: "I drink a lot of water during the day.",
        cue: "*Beber* when emphasizing the act of drinking.",
      },
    ],
  },
  {
    id: "llevar-usar",
    title: "Llevar vs usar",
    headline: "Wear vs carry — another llevar meaning.",
    note:
      "*Llevar* also means to wear — *llevo una camisa azul*. *Usar* = to use (tools, apps, clothes). For clothing, both work; *llevar* is very common for what you have on.",
    options: [
      {
        pattern: "Llevar + clothing",
        english: "To wear",
        when: "What's on your body right now — *llevo jeans*, *llevaba un vestido rojo*.",
      },
      {
        pattern: "Usar + thing",
        english: "To use / wear",
        when: "Tools, apps, glasses, clothes — broader 'use.'",
      },
    ],
    examples: [
      {
        spanish: "Hoy llevo una camisa azul.",
        english: "Today I'm wearing a blue shirt.",
        cue: "Wearing clothes → *llevar*.",
        trap: "✗ Americans reach for *uso* first — it works, but *llevo* is very natural.",
      },
      {
        spanish: "Uso esta app para practicar español.",
        english: "I use this app to practice Spanish.",
        cue: "Tools and apps → *usar*.",
      },
      {
        spanish: "¿Llevas chaqueta? Hace frío.",
        english: "Are you wearing a jacket? It's cold.",
        cue: "Checking what someone has on → *llevar*.",
      },
    ],
  },
  {
    id: "prestar-pedir-prestado",
    title: "Prestar vs pedir prestado",
    headline: "Lend vs borrow — direction matters again.",
    note:
      "Same trap as llevar/traer. *Prestar* = to lend (give temporarily). *Pedir prestado* = to borrow (ask to have temporarily). The thing is the object — the verb shows which direction.",
    options: [
      {
        pattern: "Prestar + thing (+ a alguien)",
        english: "To lend",
        when: "*Te presto el libro*, *prestó su carro* — you're giving it out.",
      },
      {
        pattern: "Pedir prestado + thing",
        english: "To borrow",
        when: "*Pedí prestado el carro*, *¿me prestas tu cargador?* — you're receiving it.",
      },
    ],
    examples: [
      {
        spanish: "¿Me prestas tu cargador?",
        english: "Can you lend me your charger?",
        cue: "Asking someone to lend → *¿me prestas…?*",
        trap: "✗ ¿Me pides prestado tu cargador? reverses who's borrowing.",
      },
      {
        spanish: "Pedí prestado el libro de la biblioteca.",
        english: "I borrowed the book from the library.",
        cue: "You borrowed → *pedir prestado*.",
      },
      {
        spanish: "Te lo presto hasta mañana.",
        english: "I'll lend it to you until tomorrow.",
        cue: "You're the lender → *prestar*.",
      },
    ],
  },
  {
    id: "por-para",
    title: "Por vs para",
    headline: "Not verbs — but Americans confuse them constantly.",
    note:
      "Worth a slot here because they show up inside every verb phrase. Rough start: *para* = destination, purpose, deadline (for/to/by). *Por* = cause, exchange, duration, through.",
    options: [
      {
        pattern: "Para + person / purpose / time",
        english: "For / in order to / by (deadline)",
        when: "*Es para ti*, *estudio para aprender*, *para el lunes*.",
      },
      {
        pattern: "Por + cause / duration / exchange",
        english: "Because of / for (duration) / through",
        when: "*Por eso*, *por dos horas*, *por $10*, *por la mañana*.",
        avoid: "Not *por* for purpose — *estudio por aprender* is wrong.",
      },
    ],
    examples: [
      {
        spanish: "Estudio español para poder hablar con mi familia.",
        english: "I study Spanish to be able to speak with my family.",
        cue: "Purpose → *para + infinitive*.",
        trap: "✗ Estudio español por poder hablar — *por* isn't 'in order to.'",
      },
      {
        spanish: "Gracias por tu ayuda.",
        english: "Thanks for your help.",
        cue: "Reason/cause → *por*.",
      },
      {
        spanish: "Necesito el informe para el viernes.",
        english: "I need the report by Friday.",
        cue: "Deadline → *para*.",
        trap: "✗ Para el viernes can also mean 'for Friday' — context tells you which.",
      },
      {
        spanish: "Caminé por el parque una hora.",
        english: "I walked through the park for an hour.",
        cue: "Through + duration → both *por*.",
      },
    ],
  },
  {
    id: "encontrar-encontrarse",
    title: "Encontrar vs encontrarse",
    headline: "Find vs meet vs feel — reflexive again.",
    note:
      "*Encontrar* = to find. *Encontrarse con* = to meet (run into / meet up). *Encontrarse + state* = to find oneself / feel — *me encuentro bien* (less common than *me siento* in some regions).",
    options: [
      {
        pattern: "Encontrar + thing",
        english: "To find",
        when: "*Encontré las llaves*, *no encuentro mi teléfono*.",
      },
      {
        pattern: "Encontrarse con + person",
        english: "To meet (run into / meet up)",
        when: "*Me encontré con María*, *nos encontramos en el café*.",
        avoid: "Not *encontré con María* — needs reflexive *encontrarse con*.",
      },
    ],
    examples: [
      {
        spanish: "No encuentro mis llaves.",
        english: "I can't find my keys.",
        cue: "Lost object → *encontrar*.",
      },
      {
        spanish: "Me encontré con una amiga en el supermercado.",
        english: "I ran into a friend at the supermarket.",
        cue: "Bump into someone → *encontrarse con*.",
        trap: "✗ Conocí a una amiga en el super means you met her for the first time.",
      },
      {
        spanish: "¿Nos encontramos a las tres?",
        english: "Shall we meet at three?",
        cue: "Meeting up — very spoken. Similar to *quedar*.",
      },
    ],
  },
];

/** Flat list for TTS prefetch, if needed later. */
export function confusionAudioTexts() {
  return confusionGroups.flatMap((group) =>
    group.examples.map((example) => example.spanish),
  );
}
