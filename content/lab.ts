export type HearItPair = {
  a: string;
  b: string;
  note?: string;
};

export type RealPair = {
  textbook: string;
  real: string;
  note?: string;
};

export type FastPhrase = {
  written: string;
  spoken: string;
  note?: string;
};

export type JGWord = {
  word: string;
  sound: string;
  note?: string;
};

export type LLYWord = {
  word: string;
  note?: string;
};

export const vowelPairs: HearItPair[] = [
  {
    a: "peso",
    b: "piso",
    note: 'The E in peso is open and clear — like "eh." The I in piso is tighter and higher. Spanish vowels never slide into diphthongs the way English ones do.',
  },
  {
    a: "mesa",
    b: "misa",
    note: "Mesa (table) vs. misa (mass). The vowel is the only thing that changes — everything else is identical.",
  },
  {
    a: "pero",
    b: "puro",
    note: "The O in pero is round and full. The U in puro sits further back in the mouth. Both are short, clean sounds.",
  },
  {
    a: "cosa",
    b: "casa",
    note: "O vs. A — two of the clearest vowel contrasts in Spanish. Cosa (thing) vs. casa (house).",
  },
  {
    a: "bello",
    b: "vello",
    note: "B and V sound identical in Spanish — what changes here is only the context and meaning (beautiful vs. body hair).",
  },
];

export const rrPairs: HearItPair[] = [
  {
    a: "pero",
    b: "perro",
    note: 'Pero (but) vs. perro (dog). The single R is a quick tap — like the D in the English word "butter." The double RR is a sustained trill.',
  },
  {
    a: "caro",
    b: "carro",
    note: "Caro (expensive) vs. carro (car). In many Latin American countries, carro is the everyday word for car.",
  },
  {
    a: "coro",
    b: "corro",
    note: "Coro (choir) vs. corro (I run). Same spelling, just one extra R — completely different meaning.",
  },
  {
    a: "para",
    b: "parra",
    note: "Para (for/to) vs. parra (grapevine). The RR appears between vowels — that's its most common position.",
  },
];

export const acentoPairs: HearItPair[] = [
  {
    a: "papa",
    b: "papá",
    note: "Papa (potato) vs. papá (dad). The accent mark tells you where to stress. Without it, stress falls on the second-to-last syllable by default.",
  },
  {
    a: "esta",
    b: "está",
    note: "Esta (this, as an adjective) vs. está (is, from estar). One is demonstrative, the other is a verb. The accent changes both meaning and stress.",
  },
  {
    a: "practico",
    b: "práctico",
    note: "Practico (I practice) vs. práctico (practical). Stress on the first syllable makes it an adjective. Stress on the second makes it a first-person verb.",
  },
  {
    a: "publico",
    b: "público",
    note: "Publico (I publish) vs. público (public/audience). These triplets — practico/practicó/práctico — are a hallmark of Spanish verb conjugation.",
  },
  {
    a: "solo",
    b: "sólo",
    note: "Solo (alone) vs. sólo (only/just). The accent mark on sólo is now optional in modern Spanish, but the distinction in speech is still clear.",
  },
];

export const jgWords: JGWord[] = [
  {
    word: "José",
    sound: "H",
    note: 'The J in Spanish is always pronounced like a strong English H — never like the English J in "jump."',
  },
  {
    word: "gente",
    sound: "H",
    note: 'When G comes before E or I, it makes the same H sound as J. Gente (people) sounds like "HEN-teh."',
  },
  {
    word: "girar",
    sound: "H",
    note: "Girar (to spin/turn) — the G before I is pronounced H. This surprises many learners who expect a hard G.",
  },
  {
    word: "trabajo",
    sound: "H",
    note: 'Trabajo (work/job) — the J here is that same Spanish H sound. No buzzing, no "zh" — just a clean exhale.',
  },
  {
    word: "mujer",
    sound: "H",
    note: "Mujer (woman) — the J sounds like H. Notice the stress: mu-HER.",
  },
  {
    word: "reloj",
    sound: "silent or soft H",
    note: "Reloj (watch/clock) — the final J is often barely pronounced or even silent in casual speech. Don't over-articulate it.",
  },
  {
    word: "guerra",
    sound: "hard G",
    note: 'When G comes before U, it stays a hard G — like in English "get." The U is silent here. Guerra (war) sounds like "GEH-rra."',
  },
];

export const llyWords: LLYWord[] = [
  {
    word: "llamar",
    note: 'In most of Spain and Andean regions, the LL is distinct from Y — closer to the English "ly" sound. In Argentina/Uruguay it sounds like "sh." Across most of Latin America, LL and Y have merged into the same sound.',
  },
  {
    word: "yo",
    note: 'Yo (I) — in Argentina and Uruguay, this sounds like "SHO." In Mexico and most of Latin America, it sounds like "YO" (as in English "yo"). Both are correct — this is called yeísmo.',
  },
  {
    word: "playa",
    note: 'Playa (beach) — the Y here varies by region. In Spain (distinción) it may be slightly more like "lya." In most of Latin America it\'s simply "ya."',
  },
  {
    word: "lluvia",
    note: "Lluvia (rain) — listen for how the double-L opening sound changes by region. The meaning never changes, only the accent.",
  },
  {
    word: "calle",
    note: 'Calle (street) — one of the most common words where you\'ll hear this regional variation. In Argentina: "CA-she." In Mexico: "CA-yeh."',
  },
];

export const fastPhrases: FastPhrase[] = [
  {
    written: "Voy a ir al supermercado.",
    spoken: "Voy'ir'al supermercado.",
    note: 'Voy a ir collapses — the A and I blend. This is called "liaison" and it\'s normal, not sloppy.',
  },
  {
    written: "¿Cómo está usted?",
    spoken: "¿Cóm'está used?",
    note: "The O of cómo and the E of está blend together. Usted often drops the D in casual speech.",
  },
  {
    written: "Para atrás y para adelante.",
    spoken: "P'atrás y p'adelante.",
    note: "Para shortens to p' before a vowel in fast speech. You'll hear this constantly with directions.",
  },
  {
    written: "Tengo que ir a la tienda.",
    spoken: "Tengo qu'ir a la tienda.",
    note: "Que ir — the E of que and the vowel of ir collapse. The phrase flows without a break.",
  },
  {
    written: "¿Qué es eso?",
    spoken: "¿Qué'so?",
    note: 'Qué es eso collapses dramatically in fast speech. This is why "What is that?" can sound like a single short word.',
  },
  {
    written: "No me lo puedo creer.",
    spoken: "No me lo puedo creer.",
    note: 'This one stays relatively intact — Spanish doesn\'t always compress. But the O–E boundary between "lo" and "puedo" often blurs.',
  },
];

export const realPairs: RealPair[] = [
  {
    textbook: "¿Cómo estás?",
    real: "¿Cómo'tás?",
    note: "The E of estás drops and merges with the final O of cómo. You'll hear this everywhere.",
  },
  {
    textbook: "Pues entonces…",
    real: "Puentonces…",
    note: "Pues and entonces fuse completely. This is where PUES gets its name — these little words are the glue of real conversation.",
  },
  {
    textbook: "Voy a ir.",
    real: "Voyair.",
    note: "Three words become one fluid sound. The A of a and the I of ir barely exist as separate vowels.",
  },
  {
    textbook: "¿Para qué?",
    real: "¿P'aqué?",
    note: "Para que is one of the most compressed phrases in casual Spanish. In fast speech it's often just two syllables.",
  },
  {
    textbook: "Está bien.",
    real: "'Tá bien.",
    note: "The Es at the start of está is almost always dropped in relaxed speech. You'll hear 'tá bien constantly.",
  },
  {
    textbook: "Ahora mismo.",
    real: "Ahorita.",
    note: 'Ahorita is the diminutive of ahora — and in Latin America it doesn\'t just mean "right now." It can mean soon, later, or eventually. Context is everything.',
  },
  {
    textbook: "¿Qué haces?",
    real: "¿Qué'aces?",
    note: "The H in haces is always silent in Spanish. In fast speech, the boundary between qué and haces disappears entirely.",
  },
  {
    textbook: "Me da igual.",
    real: "Me da igual.",
    note: 'This one\'s common but rarely taught — it means "it\'s all the same to me" or "I don\'t care." Textbooks prefer no importa, but native speakers reach for me da igual constantly.',
  },
  {
    textbook: "No sé.",
    real: "No sé.",
    note: "Sometimes what sounds unfamiliar is just rhythm. Native speakers say no sé faster, with the stress almost entirely on sé. The no can vanish to a quick exhale.",
  },
  {
    textbook: "¿Verdad?",
    real: "¿Verdá?",
    note: "The final D in verdad often disappears — especially in Spain and Caribbean Spanish. You'll hear it as verdá or even verda.",
  },
];
