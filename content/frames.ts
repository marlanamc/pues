export type Frame = {
  stem: string;
  english: string;
  scenarios: string[];
  examples: string[];
  note?: string;
};

export type FrameDay = {
  day: number;
  theme: string;
  subtitle: string;
  frames: Frame[];
};

/**
 * Pues — The daily frames (Verano season)
 *
 * Latin American Spanish, tú-form. Mostly pan-Hispanic vocabulary; where a
 * regional alternative is common, the frame's `note` field calls it out.
 * Examples are written for Marlana — 35, ESOL teacher + aspiring developer,
 * Boston by way of Atlanta. Real life, not textbook.
 *
 * Structure: days 1–14 (weeks 1–2) assert — say true things about yourself.
 * From day 15 on, weeks follow the arc in content/CURRICULUM.md: 6 new days
 * + 1 repaso day per week, building toward "una conversación simple, sin
 * pánico" by the end of Verano. This file is index-aligned with
 * content/prompts.ts — same day count, same day numbers (enforced by
 * content/content.test.ts).
 */
export const frameDays: FrameDay[] = [
  {
    day: 1,
    theme: "Wants & Plans",
    subtitle: "The language of desire and intention.",
    frames: [
      {
        stem: "Quiero…",
        english: "I want…",
        scenarios: ["right now", "this week", "tonight"],
        examples: [
          "Quiero aprender más español.",
          "Quiero un café de la cafetería de la esquina.",
          "Quiero terminar este proyecto de código antes del viernes.",
        ],
      },
      {
        stem: "Necesito…",
        english: "I need…",
        scenarios: ["before class", "for tomorrow", "to feel better"],
        examples: [
          "Necesito imprimir las hojas para mi clase.",
          "Necesito acostarme temprano esta noche.",
          "Necesito tomar más agua durante el día.",
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        scenarios: ["tonight", "tomorrow", "this weekend"],
        examples: [
          "Voy a cocinar esta noche.",
          "Voy a dar tres clases mañana por la mañana.",
          "Voy a llamar a mi mamá este fin de semana.",
        ],
        note: "Voy a + infinitive = near-future plans. The everyday way to talk about what's coming up across all Spanish-speaking countries.",
      },
      {
        stem: "Me gustaría…",
        english: "I would like…",
        scenarios: ["politely", "in a daydream", "if I could"],
        examples: [
          "Me gustaría viajar más.",
          "Me gustaría visitar a mi familia más seguido.",
          "Me gustaría aprender a tocar la guitarra algún día.",
        ],
        note: "Softer and more polite than 'quiero.' Use it for wishes and requests.",
      },
      {
        stem: "Tengo ganas de…",
        english: "I feel like… / I'm in the mood for…",
        scenarios: ["after work", "on Friday", "tonight"],
        examples: [
          "Tengo ganas de descansar.",
          "Tengo ganas de salir a caminar.",
          "Tengo ganas de ver una buena película.",
        ],
        note: "Followed by an infinitive or a noun. A very natural way to say 'I'm in the mood for…' in everyday speech.",
      },
    ],
  },
  {
    day: 2,
    theme: "Daily Life",
    subtitle: "The language of everyday reality.",
    frames: [
      {
        stem: "Tengo…",
        english: "I have…",
        scenarios: ["today", "at home", "in my bag"],
        examples: [
          "Tengo mucho trabajo.",
          "Tengo una reunión con los maestros a las tres.",
          "Tengo mi laptop y un cuaderno conmigo.",
        ],
        note: "Reunión is the standard word for 'meeting.' In Mexico, junta is also very common for work meetings.",
      },
      {
        stem: "No tengo…",
        english: "I don't have…",
        scenarios: ["this week", "with me", "right now"],
        examples: [
          "No tengo mucho tiempo libre esta semana.",
          "No tengo mi cartera, la dejé en casa.",
          "No tengo planes para esta noche.",
        ],
      },
      {
        stem: "Hay…",
        english: "There is / there are…",
        scenarios: ["in my neighborhood", "on the way", "today"],
        examples: [
          "Hay mucho tráfico.",
          "Hay una panadería buena cerca de mi casa.",
          "Hay como veinticinco estudiantes en mi clase.",
        ],
        note: "Hay never changes form — singular or plural, same word.",
      },
      {
        stem: "Uso…",
        english: "I use…",
        scenarios: ["every day", "for work", "to learn"],
        examples: [
          "Uso mi laptop para casi todo.",
          "Uso una aplicación para estudiar vocabulario.",
          "Uso el metro para ir al trabajo.",
        ],
      },
      {
        stem: "Paso mucho tiempo…",
        english: "I spend a lot of time…",
        scenarios: ["at home", "on screens", "with people"],
        examples: [
          "Paso mucho tiempo en mi computadora.",
          "Paso mucho tiempo con mis estudiantes.",
          "Paso mucho tiempo leyendo en la noche.",
        ],
        note: "Followed by a gerund (-ando / -iendo) or a place. Try both forms.",
      },
    ],
  },
  {
    day: 3,
    theme: "Beliefs & Thoughts",
    subtitle: "The language of opinions.",
    frames: [
      {
        stem: "Creo que…",
        english: "I think / I believe…",
        scenarios: ["about students", "about Boston", "about an idea"],
        examples: [
          "Creo que es una buena idea.",
          "Creo que mis estudiantes están aprendiendo mucho.",
          "Creo que aprender a programar me va a abrir puertas.",
        ],
      },
      {
        stem: "Pienso que…",
        english: "I think that…",
        scenarios: ["about a choice", "about today", "about a friend"],
        examples: [
          "Pienso que es mejor descansar antes de seguir.",
          "Pienso que hoy fue un buen día.",
          "Pienso que ella tiene razón.",
        ],
      },
      {
        stem: "Me parece que…",
        english: "It seems to me that…",
        scenarios: ["about the weather", "about a person", "about a plan"],
        examples: [
          "Me parece que va a nevar otra vez.",
          "Me parece que mi estudiante nuevo está progresando rápido.",
          "Me parece que el plan está funcionando.",
        ],
      },
      {
        stem: "Supongo que…",
        english: "I suppose / I guess…",
        scenarios: ["uncertainly", "when shrugging", "about a delay"],
        examples: [
          "Supongo que tienes razón.",
          "Supongo que va a llegar tarde.",
          "Supongo que vale la pena intentarlo.",
        ],
      },
      {
        stem: "No sé si…",
        english: "I don't know if…",
        scenarios: ["about tomorrow", "about a decision", "about an answer"],
        examples: [
          "No sé si tengo tiempo.",
          "No sé si voy a poder ir mañana.",
          "No sé si esta línea de código está bien.",
        ],
      },
    ],
  },
  {
    day: 4,
    theme: "Likes & Dislikes",
    subtitle: "The language of preference.",
    frames: [
      {
        stem: "Me gusta…",
        english: "I like…",
        scenarios: ["in the morning", "at the school", "on weekends"],
        examples: [
          "Me gusta el café fuerte por la mañana.",
          "Me gusta cuando mis estudiantes se ríen en clase.",
          "Me gusta caminar por el barrio los sábados.",
        ],
      },
      {
        stem: "No me gusta…",
        english: "I don't like…",
        scenarios: ["honestly", "in winter", "when tired"],
        examples: [
          "No me gusta el frío de Boston en febrero.",
          "No me gusta hablar mucho cuando estoy cansada.",
          "No me gusta cuando el café ya está frío.",
        ],
      },
      {
        stem: "Prefiero…",
        english: "I prefer…",
        scenarios: ["between options", "in routines", "honestly"],
        examples: [
          "Prefiero el verano.",
          "Prefiero leer en papel que en la pantalla.",
          "Prefiero caminar en lugar de tomar el metro cuando hace buen tiempo.",
        ],
      },
      {
        stem: "Me encanta…",
        english: "I love…",
        scenarios: ["wholeheartedly", "as a reaction", "about a person"],
        examples: [
          "Me encanta leer.",
          "Me encanta cómo enseña esta colega.",
          "Me encanta el otoño en Nueva Inglaterra.",
        ],
        note: "Me encanta is stronger than me gusta — closer to 'I love it.' Use it sparingly so it stays meaningful.",
      },
      {
        stem: "No soporto…",
        english: "I can't stand…",
        scenarios: ["pet peeves", "after a long day", "about noise"],
        examples: [
          "No soporto el ruido en la mañana.",
          "No soporto cuando hablan al mismo tiempo en clase.",
          "No soporto tener prisa todo el tiempo.",
        ],
        note: "Strong. Save it for genuine annoyances — overusing it sounds harsh in Spanish.",
      },
    ],
  },
  {
    day: 5,
    theme: "People",
    subtitle: "The language of relationships.",
    frames: [
      {
        stem: "Mi amigo…",
        english: "My friend…",
        scenarios: ["from work", "from back home", "from class"],
        examples: [
          "Mi amigo de la escuela también está aprendiendo a programar.",
          "Mi amiga de Atlanta me viene a visitar pronto.",
          "Mi amigo me recomendó un libro buenísimo.",
        ],
        note: "Use amiga for a female friend. Spanish always marks gender on nouns about people.",
      },
      {
        stem: "Mi familia…",
        english: "My family…",
        scenarios: ["in Atlanta", "in general", "on weekends"],
        examples: [
          "Mi familia vive en Atlanta.",
          "Mi familia es muy unida.",
          "Mi familia me apoya mucho en este cambio de carrera.",
        ],
      },
      {
        stem: "Conozco a…",
        english: "I know (a person)…",
        scenarios: ["from class", "from years ago", "well"],
        examples: [
          "Conozco a alguien que también enseña en Boston.",
          "Conozco a mi vecina desde hace años.",
          "Conozco a varios maestros que me inspiran.",
        ],
        note: "Conocer = to know a person/place. Saber = to know a fact. Both translate as 'know' in English.",
      },
      {
        stem: "Admiro a…",
        english: "I admire…",
        scenarios: ["about family", "about a colleague", "about a leader"],
        examples: [
          "Admiro a mi madre.",
          "Admiro a los maestros que llevan muchos años en esto.",
          "Admiro a la gente que aprende idiomas siendo ya adulta.",
        ],
      },
      {
        stem: "Paso tiempo con…",
        english: "I spend time with…",
        scenarios: ["on weekends", "in the evenings", "when I can"],
        examples: [
          "Paso tiempo con mis amigos.",
          "Paso tiempo con mi familia cuando viajo a Atlanta.",
          "Paso tiempo con mis colegas después del trabajo a veces.",
        ],
      },
    ],
  },
  {
    day: 6,
    theme: "The Past",
    subtitle: "The language of memory.",
    frames: [
      {
        stem: "Ayer…",
        english: "Yesterday…",
        scenarios: ["at work", "in the evening", "with friends"],
        examples: [
          "Ayer di una clase muy buena.",
          "Ayer cené con una amiga.",
          "Ayer caminé mucho por la ciudad.",
        ],
        note: "Yesterday's actions use preterite tense (-é / -aste / -ó endings). The frame trains the pattern: ayer + verb in preterite.",
      },
      {
        stem: "La semana pasada…",
        english: "Last week…",
        scenarios: ["a small win", "a low point", "a memory"],
        examples: [
          "La semana pasada terminé un proyecto pequeño de código.",
          "La semana pasada estuve cansada casi todos los días.",
          "La semana pasada hablé por teléfono con mi mamá tres veces.",
        ],
      },
      {
        stem: "Recuerdo que…",
        english: "I remember that…",
        scenarios: ["from childhood", "from Atlanta", "from a moment"],
        examples: [
          "Recuerdo que estaba nerviosa.",
          "Recuerdo que en Atlanta el invierno era mucho más corto.",
          "Recuerdo que de niña me gustaba mucho leer en español.",
        ],
      },
      {
        stem: "Cuando era niño…",
        english: "When I was a kid…",
        scenarios: ["in the South", "with family", "at school"],
        examples: [
          "Cuando era niña nadaba mucho.",
          "Cuando era niña vivía cerca de mis abuelos.",
          "Cuando era niña me encantaba leer en voz alta.",
        ],
        note: "Use niña if you're talking about yourself (female). Childhood + recurring actions = imperfect tense (-aba / -ía endings).",
      },
      {
        stem: "Una vez…",
        english: "One time…",
        scenarios: ["a funny story", "a scary moment", "a surprise"],
        examples: [
          "Una vez me perdí en una ciudad nueva.",
          "Una vez una estudiante me hizo llorar de risa.",
          "Una vez viajé sola por primera vez y me encantó.",
        ],
      },
    ],
  },
  {
    day: 7,
    theme: "Learning",
    subtitle: "The language of growth.",
    frames: [
      {
        stem: "Estoy aprendiendo…",
        english: "I'm learning…",
        scenarios: ["right now", "in the evenings", "alongside work"],
        examples: [
          "Estoy aprendiendo español otra vez.",
          "Estoy aprendiendo a programar en JavaScript.",
          "Estoy aprendiendo a tener más paciencia conmigo misma.",
        ],
      },
      {
        stem: "He aprendido…",
        english: "I have learned…",
        scenarios: ["over time", "the hard way", "from students"],
        examples: [
          "He aprendido mucho de mis estudiantes.",
          "He aprendido a pedir ayuda cuando la necesito.",
          "He aprendido que es mejor practicar poco y seguido.",
        ],
        note: "Present perfect (he + past participle) = something completed but still relevant. Common when reflecting on what you've gained.",
      },
      {
        stem: "Quiero mejorar…",
        english: "I want to improve…",
        scenarios: ["in Spanish", "at work", "personally"],
        examples: [
          "Quiero mejorar mi pronunciación.",
          "Quiero mejorar mi forma de explicar gramática.",
          "Quiero mejorar mi manejo del tiempo.",
        ],
      },
      {
        stem: "Me cuesta…",
        english: "I struggle with… / It's hard for me to…",
        scenarios: ["in Spanish", "in coding", "in daily life"],
        examples: [
          "Me cuesta hablar rápido sin pensarlo demasiado.",
          "Me cuesta entender las funciones recursivas.",
          "Me cuesta pedir ayuda cuando estoy estresada.",
        ],
        note: "Me cuesta + infinitive = a natural way to admit difficulty without saying 'no puedo.' Honest and humble.",
      },
      {
        stem: "Estoy practicando…",
        english: "I'm practicing…",
        scenarios: ["daily", "this week", "for a goal"],
        examples: [
          "Estoy practicando un poco de español cada día.",
          "Estoy practicando hablar en voz alta cuando estoy sola.",
          "Estoy practicando código en mi tiempo libre.",
        ],
      },
    ],
  },
  {
    day: 8,
    theme: "Feelings",
    subtitle: "The language of emotion.",
    frames: [
      {
        stem: "Me siento…",
        english: "I feel…",
        scenarios: ["today", "after class", "this week"],
        examples: [
          "Me siento cansada.",
          "Me siento agradecida hoy.",
          "Me siento más confiada que el mes pasado.",
        ],
        note: "Adjectives after 'me siento' agree with you. Female speaker: cansada, contenta. Male: cansado, contento.",
      },
      {
        stem: "Estoy…",
        english: "I am… (right now)",
        scenarios: ["a temporary state", "before a class", "after a long day"],
        examples: [
          "Estoy un poco cansada hoy.",
          "Estoy emocionada por este proyecto.",
          "Estoy lista para empezar la semana.",
        ],
        note: "Estoy = temporary state. Soy = permanent identity. 'Estoy cansada' = I'm tired now. 'Soy cansada' is wrong — you wouldn't claim tiredness as an identity.",
      },
      {
        stem: "Me preocupa…",
        english: "I'm worried about…",
        scenarios: ["about a student", "about a plan", "about money"],
        examples: [
          "Me preocupa que mis estudiantes no entiendan.",
          "Me preocupa no tener tiempo suficiente.",
          "Me preocupa el cambio de carrera, pero también me emociona.",
        ],
      },
      {
        stem: "Me alegra…",
        english: "It makes me happy that…",
        scenarios: ["a small win", "about a person", "about today"],
        examples: [
          "Me alegra ver a mis estudiantes progresar.",
          "Me alegra haber empezado a practicar español otra vez.",
          "Me alegra escuchar tu voz por teléfono.",
        ],
      },
      {
        stem: "Me emociona…",
        english: "I'm excited about…",
        scenarios: ["a project", "a trip", "what's next"],
        examples: [
          "Me emociona este proyecto.",
          "Me emociona la idea de visitar Atlanta pronto.",
          "Me emociona ver hasta dónde puedo llegar con esto.",
        ],
      },
    ],
  },
  {
    day: 9,
    theme: "Challenges",
    subtitle: "The language of difficulty.",
    frames: [
      {
        stem: "Es difícil…",
        english: "It's hard to…",
        scenarios: ["in Spanish", "as a teacher", "in life"],
        examples: [
          "Es difícil hablar sin miedo a equivocarme.",
          "Es difícil enseñar a tantos niveles a la vez.",
          "Es difícil mantener la rutina cuando estoy cansada.",
        ],
      },
      {
        stem: "Tengo problemas con…",
        english: "I have trouble with…",
        scenarios: ["grammar", "code", "a habit"],
        examples: [
          "Tengo problemas con los verbos irregulares.",
          "Tengo problemas con esta parte del código.",
          "Tengo problemas con dormirme temprano.",
        ],
      },
      {
        stem: "Estoy intentando…",
        english: "I'm trying to…",
        scenarios: ["a habit", "in Spanish", "with patience"],
        examples: [
          "Estoy intentando hablar más.",
          "Estoy intentando no compararme con otros.",
          "Estoy intentando estudiar treinta minutos al día.",
        ],
      },
      {
        stem: "Todavía no puedo…",
        english: "I still can't…",
        scenarios: ["honestly", "in Spanish", "in code"],
        examples: [
          "Todavía no puedo entender películas sin subtítulos.",
          "Todavía no puedo escribir una función desde cero sin ayuda.",
          "Todavía no puedo hablar sin traducir mentalmente.",
        ],
        note: "Todavía = 'still / yet.' Pairing it with a frustration softens it — it suggests the door is open.",
      },
      {
        stem: "Necesito ayuda con…",
        english: "I need help with…",
        scenarios: ["at work", "in code", "at home"],
        examples: [
          "Necesito ayuda con la pronunciación de algunas palabras.",
          "Necesito ayuda con un error en mi código.",
          "Necesito ayuda con organizar mis materiales de clase.",
        ],
      },
    ],
  },
  {
    day: 10,
    theme: "The Future",
    subtitle: "The language of possibility.",
    frames: [
      {
        stem: "Espero…",
        english: "I hope…",
        scenarios: ["for this year", "for tomorrow", "for someone else"],
        examples: [
          "Espero viajar a España.",
          "Espero descansar bien este fin de semana.",
          "Espero que mis estudiantes sigan motivados.",
        ],
        note: "Espero que + subjunctive is common (espero que llueva, espero que vengas). It signals desire about something out of your control.",
      },
      {
        stem: "En el futuro…",
        english: "In the future…",
        scenarios: ["career", "where to live", "personal"],
        examples: [
          "En el futuro quiero trabajar como desarrolladora.",
          "En el futuro me gustaría vivir cerca de mi familia otra vez.",
          "En el futuro voy a hablar español con más confianza.",
        ],
      },
      {
        stem: "Algún día…",
        english: "Someday…",
        scenarios: ["a dream", "a travel goal", "a soft goal"],
        examples: [
          "Algún día voy a visitar América Latina por mi cuenta.",
          "Algún día quiero escribir un libro pequeño.",
          "Algún día me gustaría enseñar en dos idiomas.",
        ],
      },
      {
        stem: "Mi meta es…",
        english: "My goal is…",
        scenarios: ["this year", "this month", "long-term"],
        examples: [
          "Mi meta es hablar con fluidez.",
          "Mi meta es construir mi primera aplicación completa este año.",
          "Mi meta es practicar español cinco días a la semana.",
        ],
      },
      {
        stem: "Sueño con…",
        english: "I dream of…",
        scenarios: ["honestly", "as a fantasy", "deeply"],
        examples: [
          "Sueño con vivir en una ciudad cálida algún día.",
          "Sueño con tener un trabajo que me deje viajar.",
          "Sueño con sentirme a gusto hablando español en cualquier situación.",
        ],
      },
    ],
  },
  {
    day: 11,
    theme: "Work & Purpose",
    subtitle: "The language of contribution.",
    frames: [
      {
        stem: "Trabajo en…",
        english: "I work at / in…",
        scenarios: ["intro", "to a stranger", "casually"],
        examples: [
          "Trabajo en una escuela para adultos.",
          "Trabajo en un programa de inglés como segunda lengua.",
          "Trabajo en Boston desde hace varios años.",
        ],
      },
      {
        stem: "Estoy trabajando en…",
        english: "I'm working on…",
        scenarios: ["a side project", "an idea", "myself"],
        examples: [
          "Estoy trabajando en una aplicación pequeña para practicar español.",
          "Estoy trabajando en un nuevo plan de clase para mis estudiantes.",
          "Estoy trabajando en tener más paciencia conmigo misma.",
        ],
      },
      {
        stem: "Quiero ayudar…",
        english: "I want to help…",
        scenarios: ["students", "newcomers", "someone close"],
        examples: [
          "Quiero ayudar a mis estudiantes a sentirse seguros.",
          "Quiero ayudar a otras personas que están empezando a programar.",
          "Quiero ayudar a mi familia cuando pueda.",
        ],
      },
      {
        stem: "Estoy construyendo…",
        english: "I'm building…",
        scenarios: ["a project", "a habit", "a life"],
        examples: [
          "Estoy construyendo una aplicación.",
          "Estoy construyendo una práctica diaria de español.",
          "Estoy construyendo una vida nueva en Boston, poco a poco.",
        ],
      },
      {
        stem: "Mi trabajo consiste en…",
        english: "My work consists of…",
        scenarios: ["the honest version", "to a stranger", "the heart of it"],
        examples: [
          "Mi trabajo consiste en enseñar inglés a adultos.",
          "Mi trabajo consiste en escuchar mucho y explicar con paciencia.",
          "Mi trabajo consiste en acompañar a la gente en su aprendizaje.",
        ],
      },
    ],
  },
  {
    day: 12,
    theme: "Experiences",
    subtitle: "The language of life experience.",
    frames: [
      {
        stem: "He estado…",
        english: "I have been…",
        scenarios: ["lately", "this week", "for a while"],
        examples: [
          "He estado muy ocupada.",
          "He estado pensando en mi cambio de carrera.",
          "He estado durmiendo mejor estas últimas semanas.",
        ],
        note: "He estado + gerund = 'I have been [doing]…' A great way to talk about ongoing recent experience.",
      },
      {
        stem: "He visto…",
        english: "I have seen…",
        scenarios: ["a film", "a place", "a change"],
        examples: [
          "He visto muchas series últimamente.",
          "He visto a mis estudiantes mejorar muchísimo este año.",
          "He visto cómo cambia Boston con cada estación.",
        ],
      },
      {
        stem: "He probado…",
        english: "I have tried…",
        scenarios: ["food", "a method", "a place"],
        examples: [
          "He probado varios cafés del barrio.",
          "He probado diferentes métodos para estudiar español.",
          "He probado cocinar comida del sur en Boston, no es lo mismo.",
        ],
      },
      {
        stem: "Nunca he…",
        english: "I have never…",
        scenarios: ["honestly", "travel", "a confession"],
        examples: [
          "Nunca he visitado Argentina.",
          "Nunca he vivido en una ciudad tan fría como Boston, antes.",
          "Nunca he hablado español por más de unos minutos sin parar.",
        ],
      },
      {
        stem: "Ya he…",
        english: "I have already…",
        scenarios: ["a small win", "a milestone", "today"],
        examples: [
          "Ya he terminado lo más difícil de la semana.",
          "Ya he aprendido más de lo que esperaba este mes.",
          "Ya he tomado mi café, ahora sí puedo pensar.",
        ],
      },
    ],
  },
  {
    day: 13,
    theme: "Possibilities",
    subtitle: "The language of imagination.",
    frames: [
      {
        stem: "Si pudiera…",
        english: "If I could…",
        scenarios: ["honestly", "in a fantasy", "with no limits"],
        examples: [
          "Si pudiera viajaría más.",
          "Si pudiera trabajaría desde un café cerca del mar.",
          "Si pudiera dormiría una hora más cada mañana.",
        ],
        note: "Si pudiera + conditional (-ría endings) is the 'if I could…I would…' pattern. Pure imagination — use it freely.",
      },
      {
        stem: "Si tuviera…",
        english: "If I had…",
        scenarios: ["time", "money", "courage"],
        examples: [
          "Si tuviera más tiempo aprendería un tercer idioma.",
          "Si tuviera más confianza hablaría sin pensarlo tanto.",
          "Si tuviera un día libre lo pasaría leyendo.",
        ],
      },
      {
        stem: "Haría…",
        english: "I would do…",
        scenarios: ["differently", "as a wish", "in a what-if"],
        examples: [
          "Haría las cosas un poco diferente si pudiera empezar de nuevo.",
          "Haría más viajes cortos en lugar de uno largo.",
          "Haría más pausas durante el día.",
        ],
      },
      {
        stem: "Intentaría…",
        english: "I would try to…",
        scenarios: ["with hindsight", "with new courage", "as advice"],
        examples: [
          "Intentaría no preocuparme tanto.",
          "Intentaría hablar con cualquier persona que quisiera practicar.",
          "Intentaría disfrutar más el proceso.",
        ],
      },
      {
        stem: "Cambiaría…",
        english: "I would change…",
        scenarios: ["honestly", "small things", "big things"],
        examples: [
          "Cambiaría algunas cosas.",
          "Cambiaría la forma en la que organizo mi semana.",
          "No cambiaría las decisiones grandes, pero sí algunos detalles.",
        ],
      },
    ],
  },
  {
    day: 14,
    theme: "Your Story",
    subtitle: "The language of identity.",
    frames: [
      {
        stem: "Soy…",
        english: "I am…",
        scenarios: ["introduction", "honest version", "now"],
        examples: [
          "Soy profesora.",
          "Soy de Atlanta, pero ahora vivo en Boston.",
          "Soy alguien que está aprendiendo a hacer cosas nuevas.",
        ],
      },
      {
        stem: "Antes era…",
        english: "I used to be…",
        scenarios: ["years ago", "before a change", "softly"],
        examples: [
          "Antes era más impaciente.",
          "Antes era estudiante, ahora soy maestra.",
          "Antes era más callada en grupos grandes.",
        ],
        note: "Imperfect tense (era) is used for descriptions in the past — what you used to be like, what was true for a while.",
      },
      {
        stem: "Ahora soy…",
        english: "Now I am…",
        scenarios: ["a contrast", "with pride", "with surprise"],
        examples: [
          "Ahora soy maestra y también aprendiz.",
          "Ahora soy más paciente conmigo misma.",
          "Ahora soy alguien que escribe en español todos los días.",
        ],
      },
      {
        stem: "Lo más importante para mí es…",
        english: "The most important thing for me is…",
        scenarios: ["values", "in relationships", "in work"],
        examples: [
          "Lo más importante para mí es seguir aprendiendo.",
          "Lo más importante para mí es estar cerca de mi familia, aunque sea por teléfono.",
          "Lo más importante para mí es enseñar con cariño.",
        ],
      },
      {
        stem: "Estoy orgullosa de…",
        english: "I'm proud of…",
        scenarios: ["a small thing", "a big thing", "about someone else"],
        examples: [
          "Estoy orgullosa de mi progreso.",
          "Estoy orgullosa de no haber abandonado el español.",
          "Estoy orgullosa de mis estudiantes y de lo lejos que han llegado.",
        ],
        note: "Orgullosa = female speaker; orgulloso = male. The adjective agrees with you.",
      },
    ],
  },
  // ===== Week 3 — Hacer preguntas / Asking questions =====
  {
    day: 15,
    theme: "Basic Questions",
    subtitle: "Where, when, what — the walking-around questions.",
    frames: [
      {
        stem: "¿Dónde está…?",
        english: "Where is…?",
        scenarios: ["on the street", "in a building", "in a new place"],
        examples: [
          "¿Dónde está la parada del autobús?",
          "¿Dónde está el baño?",
          "¿Dónde está la oficina principal?",
        ],
        note: "Questions in Spanish don't rearrange words — the rising melody (and the ¿?) does all the work.",
      },
      {
        stem: "¿Dónde puedo…?",
        english: "Where can I…?",
        scenarios: ["errands", "at school", "traveling"],
        examples: [
          "¿Dónde puedo imprimir estas hojas?",
          "¿Dónde puedo comprar un buen café por aquí?",
          "¿Dónde puedo cambiar dinero?",
        ],
      },
      {
        stem: "¿Cuándo es…?",
        english: "When is…?",
        scenarios: ["at work", "holidays", "events"],
        examples: [
          "¿Cuándo es la reunión de maestros?",
          "¿Cuándo es el próximo feriado?",
          "¿Cuándo es el concierto en el parque?",
        ],
        note: "Feriado is the common Latin American word for a public holiday; in Spain you'll hear festivo.",
      },
      {
        stem: "¿Qué es…?",
        english: "What is…?",
        scenarios: ["menus", "new things", "curiosities"],
        examples: [
          "¿Qué es esto?",
          "¿Qué es la sopa del día?",
          "¿Qué es ese edificio de la torre verde?",
        ],
      },
      {
        stem: "¿A qué hora…?",
        english: "What time…?",
        scenarios: ["opening hours", "classes", "transit"],
        examples: [
          "¿A qué hora abre la biblioteca?",
          "¿A qué hora empieza la clase?",
          "¿A qué hora sale el último tren?",
        ],
      },
    ],
  },
  {
    day: 16,
    theme: "Asking to Understand",
    subtitle: "The panic-killers. Say these instead of freezing.",
    frames: [
      {
        stem: "¿Cómo se dice…?",
        english: "How do you say…?",
        scenarios: ["a missing word", "in class", "describing around"],
        examples: [
          "¿Cómo se dice 'field trip' en español?",
          "¿Cómo se dice esto?",
          "¿Cómo se dice cuando el tren va completamente lleno?",
        ],
        note: "Your single most useful question. It turns every missing word into a conversation instead of a dead end.",
      },
      {
        stem: "¿Qué significa…?",
        english: "What does … mean?",
        scenarios: ["a new word", "slang", "signs"],
        examples: [
          "¿Qué significa esa palabra?",
          "¿Qué significa 'chévere'?",
          "¿Qué significa este letrero?",
        ],
        note: "Chévere = cool in the Caribbean, Colombia, and Venezuela. In Mexico you'll hear padre or chido instead.",
      },
      {
        stem: "¿Puedes repetir…?",
        english: "Can you repeat…?",
        scenarios: ["on the phone", "numbers", "names"],
        examples: [
          "¿Puedes repetir eso, por favor?",
          "¿Puedes repetir la última parte?",
          "¿Puedes repetir el número más despacio?",
        ],
      },
      {
        stem: "¿Puedes hablar más despacio…?",
        english: "Can you speak more slowly…?",
        scenarios: ["with a stranger", "on the phone", "honestly"],
        examples: [
          "¿Puedes hablar más despacio, por favor?",
          "¿Puedes hablar un poco más despacio? Todavía estoy aprendiendo.",
          "¿Puedes hablar más despacio? Quiero entender todo.",
        ],
        note: "With strangers or elders you'd switch to usted: ¿Puede hablar más despacio? Week 4 practices that shift.",
      },
      {
        stem: "No entendí…",
        english: "I didn't understand…",
        scenarios: ["one word", "instructions", "a joke"],
        examples: [
          "No entendí la última palabra.",
          "No entendí bien. ¿Me lo explicas otra vez?",
          "No entendí el chiste, pero me reí igual.",
        ],
        note: "Saying no entendí out loud — instead of nodding along — is the bravest move in language learning.",
      },
    ],
  },
  {
    day: 17,
    theme: "Getting to Know Someone",
    subtitle: "The language of curiosity about people.",
    frames: [
      {
        stem: "¿De dónde eres…?",
        english: "Where are you from…?",
        scenarios: ["meeting someone", "an accent you notice", "small talk"],
        examples: [
          "¿De dónde eres?",
          "¿De dónde eres? Yo soy de Atlanta.",
          "¿De dónde es tu familia?",
        ],
        note: "Answer your own question back — yo soy de… — and the conversation keeps moving. Questions travel in pairs.",
      },
      {
        stem: "¿Quién es…?",
        english: "Who is…?",
        scenarios: ["a photo", "a name you heard", "playfully"],
        examples: [
          "¿Quién es ella?",
          "¿Quién es la persona de la foto?",
          "¿Quién es tu maestra favorita?",
        ],
      },
      {
        stem: "¿Con quién…?",
        english: "Who … with?",
        scenarios: ["living", "practicing", "going out"],
        examples: [
          "¿Con quién vives?",
          "¿Con quién practicas tu inglés?",
          "¿Con quién fuiste al concierto?",
        ],
        note: "Spanish keeps the preposition up front: ¿con quién…?, never ¿quién… con?",
      },
      {
        stem: "¿A qué te dedicas…?",
        english: "What do you do (for a living)…?",
        scenarios: ["small talk", "at a party", "about family"],
        examples: [
          "¿A qué te dedicas?",
          "¿A qué te dedicas? Yo soy maestra.",
          "¿A qué se dedica tu hermano?",
        ],
        note: "Literally 'what do you dedicate yourself to' — warmer and more common than asking someone's job title.",
      },
      {
        stem: "¿Tienes…?",
        english: "Do you have…?",
        scenarios: ["family", "plans", "pets"],
        examples: [
          "¿Tienes hermanos?",
          "¿Tienes mascotas?",
          "¿Tienes planes para el verano?",
        ],
      },
    ],
  },
  {
    day: 18,
    theme: "Their Likes",
    subtitle: "Turn your opinions outward — ask theirs.",
    frames: [
      {
        stem: "¿Te gusta…?",
        english: "Do you like…?",
        scenarios: ["a place", "food", "a change"],
        examples: [
          "¿Te gusta vivir en Boston?",
          "¿Te gusta la comida picante?",
          "¿Te gusta tu nuevo trabajo?",
        ],
      },
      {
        stem: "¿Qué piensas de…?",
        english: "What do you think of…?",
        scenarios: ["an idea", "a place", "a person"],
        examples: [
          "¿Qué piensas de mi idea?",
          "¿Qué piensas de este barrio?",
          "¿Qué piensas de la nueva directora?",
        ],
      },
      {
        stem: "¿Prefieres…?",
        english: "Do you prefer…?",
        scenarios: ["this or that", "routines", "seasons"],
        examples: [
          "¿Prefieres té o café?",
          "¿Prefieres la playa o la montaña?",
          "¿Prefieres estudiar por la mañana o por la noche?",
        ],
        note: "¿Prefieres X o Y? hands someone an easy choice — the friendliest kind of question, in both directions.",
      },
      {
        stem: "¿Qué te pareció…?",
        english: "What did you think of…? (afterwards)",
        scenarios: ["after class", "a book", "a meal"],
        examples: [
          "¿Qué te pareció el libro?",
          "¿Qué te pareció la clase de hoy?",
          "¿Qué te pareció el restaurante nuevo?",
        ],
        note: "Pareció is preterite — a verdict on something finished. Compare me parece que (day 3), which is for right now.",
      },
      {
        stem: "¿Cuál es tu … favorito?",
        english: "What's your favorite …?",
        scenarios: ["words", "music", "food"],
        examples: [
          "¿Cuál es tu palabra favorita en inglés?",
          "¿Cuál es tu canción favorita?",
          "¿Cuál es tu comida favorita?",
        ],
        note: "Spanish uses cuál, not qué, when picking from a set: ¿Cuál es tu color favorito?",
      },
    ],
  },
  {
    day: 19,
    theme: "Permission & Possibility",
    subtitle: "Can I, can you, is there.",
    frames: [
      {
        stem: "¿Puedo…?",
        english: "Can I…?",
        scenarios: ["paying", "sitting", "asking"],
        examples: [
          "¿Puedo pagar con tarjeta?",
          "¿Puedo sentarme aquí?",
          "¿Puedo hacerte una pregunta?",
        ],
      },
      {
        stem: "¿Puedes…?",
        english: "Can you…?",
        scenarios: ["a small favor", "logistics", "waiting"],
        examples: [
          "¿Puedes ayudarme con esto?",
          "¿Puedes mandarme la dirección?",
          "¿Puedes esperar un momento?",
        ],
      },
      {
        stem: "¿Se puede…?",
        english: "Can one… / Is it OK to…?",
        scenarios: ["rules", "paying", "distances"],
        examples: [
          "¿Se puede entrar con café?",
          "¿Se puede pagar en efectivo?",
          "¿Se puede caminar hasta allá?",
        ],
        note: "The impersonal se — no 'you' involved, just whether the world allows it. Perfect for rules, signs, and shops.",
      },
      {
        stem: "¿Hay…?",
        english: "Is there… / Are there…?",
        scenarios: ["wifi", "nearby places", "space"],
        examples: [
          "¿Hay wifi aquí?",
          "¿Hay una farmacia cerca?",
          "¿Hay espacio para una más?",
        ],
      },
      {
        stem: "¿Me ayudas con…?",
        english: "Will you help me with…?",
        scenarios: ["carrying", "translating", "a moment"],
        examples: [
          "¿Me ayudas con esta caja?",
          "¿Me ayudas con la traducción?",
          "¿Me ayudas con esto un momento?",
        ],
        note: "Present tense as a request — friendlier than a command, warmer than ¿puedes?",
      },
    ],
  },
  {
    day: 20,
    theme: "Plans & Catching Up",
    subtitle: "The questions friendships run on.",
    frames: [
      {
        stem: "¿Qué vas a hacer…?",
        english: "What are you going to do…?",
        scenarios: ["weekend", "after class", "vacation"],
        examples: [
          "¿Qué vas a hacer este fin de semana?",
          "¿Qué vas a hacer después de clase?",
          "¿Qué vas a hacer en las vacaciones?",
        ],
      },
      {
        stem: "¿Quieres…?",
        english: "Do you want to…?",
        scenarios: ["coffee", "joining", "practicing"],
        examples: [
          "¿Quieres tomar un café conmigo?",
          "¿Quieres venir con nosotros?",
          "¿Quieres practicar español un rato?",
        ],
        note: "¿Quieres…? is the invitation itself. Between friends, no extra politeness needed — the question mark does it.",
      },
      {
        stem: "¿Tienes tiempo para…?",
        english: "Do you have time for/to…?",
        scenarios: ["a coffee", "five minutes", "tomorrow"],
        examples: [
          "¿Tienes tiempo para un café?",
          "¿Tienes tiempo para hablar cinco minutos?",
          "¿Tienes tiempo para ayudarme mañana?",
        ],
      },
      {
        stem: "¿Qué hiciste…?",
        english: "What did you do…?",
        scenarios: ["the weekend", "last night", "vacation"],
        examples: [
          "¿Qué hiciste el fin de semana?",
          "¿Qué hiciste ayer después del trabajo?",
          "¿Qué hiciste en tus vacaciones?",
        ],
        note: "Hiciste — preterite of hacer. This one question powers every Monday conversation.",
      },
      {
        stem: "¿Cómo estuvo…?",
        english: "How was…?",
        scenarios: ["the day", "a trip", "a party"],
        examples: [
          "¿Cómo estuvo tu día?",
          "¿Cómo estuvo el viaje?",
          "¿Cómo estuvo la fiesta?",
        ],
        note: "Estuvo — preterite of estar, for events that are over. ¿Cómo estuvo tu día? is the everyday check-in.",
      },
    ],
  },
  {
    day: 21,
    theme: "Repaso: Questions",
    subtitle: "The week's questions, out in the world.",
    frames: [
      {
        stem: "¿Dónde puedo…?",
        english: "Where can I…?",
        scenarios: ["transit", "breakfast", "coats"],
        examples: [
          "¿Dónde puedo tomar el autobús a Cambridge?",
          "¿Dónde puedo conseguir algo rico para el desayuno?",
          "¿Dónde puedo dejar mi abrigo?",
        ],
      },
      {
        stem: "¿Cómo se dice…?",
        english: "How do you say…?",
        scenarios: ["school words", "names", "elsewhere"],
        examples: [
          "¿Cómo se dice 'snow day' en español?",
          "¿Cómo se dice tu nombre? Quiero pronunciarlo bien.",
          "¿Cómo se dice esto en tu país?",
        ],
        note: "Asking a student how to pronounce their name — carefully, until you get it right — might be the most teacherly sentence in this app.",
      },
      {
        stem: "¿Tienes…?",
        english: "Do you have…?",
        scenarios: ["a minute", "photos", "energy"],
        examples: [
          "¿Tienes un minuto? Es rápido.",
          "¿Tienes fotos de tu viaje?",
          "¿Tienes ganas de salir hoy?",
        ],
      },
      {
        stem: "¿Qué te pareció…?",
        english: "What did you think of…?",
        scenarios: ["a movie", "your Spanish", "an exam"],
        examples: [
          "¿Qué te pareció la película de anoche?",
          "¿Qué te pareció mi español? Sé honesta.",
          "¿Qué te pareció el examen?",
        ],
      },
      {
        stem: "¿Quieres…?",
        english: "Do you want to…?",
        scenarios: ["lunch", "the market", "a taste"],
        examples: [
          "¿Quieres almorzar juntas mañana?",
          "¿Quieres ir al mercado el sábado?",
          "¿Quieres probar un poco?",
        ],
        note: "Juntas — when both people are women; juntos otherwise. Small word, warm signal.",
      },
    ],
  },
  // ===== Week 4 — Pedir con confianza / Asking for what you need =====
  {
    day: 22,
    theme: "At the Café",
    subtitle: "Order like a regular.",
    frames: [
      {
        stem: "Me da…, por favor",
        english: "I'll have…, please",
        scenarios: ["your order", "a repeat", "something sweet"],
        examples: [
          "Me da un café con leche, por favor.",
          "Me da un té y un pan dulce, por favor.",
          "Me da lo mismo de ayer, por favor.",
        ],
        note: "Me da…? sounds abrupt translated, but it's the standard, perfectly polite way to order across Latin America.",
      },
      {
        stem: "Quisiera…",
        english: "I would like… (extra polite)",
        scenarios: ["ordering", "a preference", "trying something"],
        examples: [
          "Quisiera un capuchino mediano.",
          "Quisiera algo sin azúcar.",
          "Quisiera probar el café de temporada.",
        ],
        note: "Quisiera is the extra-polite cousin of quiero — perfect with strangers and service counters.",
      },
      {
        stem: "Para mí…",
        english: "For me…",
        scenarios: ["ordering in a group", "the usual", "off the menu"],
        examples: [
          "Para mí, un café negro.",
          "Para mí, lo de siempre.",
          "Para mí, el desayuno número dos.",
        ],
        note: "Lo de siempre = 'the usual.' The phrase of someone who belongs.",
      },
      {
        stem: "¿Me trae…?",
        english: "Could you bring me…?",
        scenarios: ["water", "a napkin", "a refill"],
        examples: [
          "¿Me trae un vaso de agua, por favor?",
          "¿Me trae una servilleta?",
          "¿Me trae otro café cuando pueda?",
        ],
        note: "Trae is usted-form — with waitstaff, usted is the default courtesy. More of this on day 25.",
      },
      {
        stem: "¿Cuánto cuesta…?",
        english: "How much does … cost?",
        scenarios: ["one thing", "several things", "before deciding"],
        examples: [
          "¿Cuánto cuesta el café grande?",
          "¿Cuánto cuesta este pastel?",
          "¿Cuánto cuestan los sándwiches?",
        ],
        note: "Cuesta for one thing, cuestan for several.",
      },
    ],
  },
  {
    day: 23,
    theme: "At the Shop",
    subtitle: "Find it, ask about it, take it home.",
    frames: [
      {
        stem: "Estoy buscando…",
        english: "I'm looking for…",
        scenarios: ["a gift", "clothes", "an aisle"],
        examples: [
          "Estoy buscando un regalo para mi mamá.",
          "Estoy buscando algo para el frío.",
          "Estoy buscando el pasillo de los cuadernos.",
        ],
      },
      {
        stem: "¿Tienen…?",
        english: "Do you have…? (to a shop)",
        scenarios: ["colors", "basics", "cheaper"],
        examples: [
          "¿Tienen esto en otro color?",
          "¿Tienen pilas?",
          "¿Tienen algo más barato?",
        ],
        note: "Tienen addresses the shop, not the person — that's why it's plural.",
      },
      {
        stem: "¿Dónde encuentro…?",
        english: "Where do I find…?",
        scenarios: ["groceries", "supplies", "the good stuff"],
        examples: [
          "¿Dónde encuentro la leche?",
          "¿Dónde encuentro el papel de regalo?",
          "¿Dónde encuentro la salsa picante?",
        ],
      },
      {
        stem: "¿Me puede mostrar…?",
        english: "Can you show me…? (usted)",
        scenarios: ["jewelry", "how it works", "another size"],
        examples: [
          "¿Me puede mostrar ese anillo?",
          "¿Me puede mostrar cómo funciona?",
          "¿Me puede mostrar otra talla?",
        ],
        note: "Puede — usted, the default courtesy with shop staff. In some countries you'll hear enseñar instead of mostrar.",
      },
      {
        stem: "Me llevo…",
        english: "I'll take…",
        scenarios: ["deciding", "both", "the blue one"],
        examples: [
          "Me llevo este.",
          "Me llevo los dos.",
          "Me llevo el azul, gracias.",
        ],
        note: "Me llevo — literally 'I carry off for myself.' The moment of decision at the register.",
      },
    ],
  },
  {
    day: 24,
    theme: "Getting Around",
    subtitle: "The T, the bus, the way there.",
    frames: [
      {
        stem: "¿Cómo llego a…?",
        english: "How do I get to…?",
        scenarios: ["the station", "the airport", "on foot"],
        examples: [
          "¿Cómo llego a la estación de tren?",
          "¿Cómo llego al aeropuerto desde aquí?",
          "¿Cómo llego a la terminal de autobuses?",
        ],
        note: "Llegar = to arrive. ¿Cómo llego…? — 'how do I arrive' — is the asking-directions classic.",
      },
      {
        stem: "¿Este tren va a…?",
        english: "Does this train go to…?",
        scenarios: ["downtown", "with a transfer", "double-checking"],
        examples: [
          "¿Este tren va al centro?",
          "¿Este tren va a Cambridge o tengo que cambiar?",
          "¿Este tren va hacia el norte?",
        ],
      },
      {
        stem: "Necesito llegar a…",
        english: "I need to get to…",
        scenarios: ["school", "the airport", "early"],
        examples: [
          "Necesito llegar a la escuela antes de las ocho.",
          "Necesito llegar al aeropuerto a las seis.",
          "Necesito llegar temprano mañana.",
        ],
      },
      {
        stem: "Queda…",
        english: "It's (located)…",
        scenarios: ["near", "blocks away", "far"],
        examples: [
          "Queda cerca del parque.",
          "Queda a dos cuadras de aquí.",
          "Queda lejos, mejor toma el metro.",
        ],
        note: "Queda is how people actually answer 'where is it?' Cuadras = city blocks, everywhere in Latin America.",
      },
      {
        stem: "Está a … de…",
        english: "It's … (away) from…",
        scenarios: ["minutes", "stops", "an hour"],
        examples: [
          "Está a diez minutos de mi casa.",
          "Está a tres paradas de aquí.",
          "Está a una hora de Boston en tren.",
        ],
      },
    ],
  },
  {
    day: 25,
    theme: "With Families (usted)",
    subtitle: "Parent-conference Spanish. Today, everything is usted.",
    frames: [
      {
        stem: "¿Me puede firmar…?",
        english: "Could you sign … for me? (usted)",
        scenarios: ["a form", "a permission slip", "no rush"],
        examples: [
          "¿Me puede firmar este formulario, por favor?",
          "¿Me puede firmar el permiso para la excursión?",
          "¿Me puede firmar aquí, cuando tenga un momento?",
        ],
        note: "Today is an usted day: with students' families, usted signals respect. Puede, not puedes — the verb carries the courtesy.",
      },
      {
        stem: "Su hijo/a necesita…",
        english: "Your son/daughter needs… (usted)",
        scenarios: ["reading", "materials", "support"],
        examples: [
          "Su hija necesita practicar la lectura en casa.",
          "Su hijo necesita traer el cuaderno mañana.",
          "Su hija necesita más apoyo con la escritura.",
        ],
        note: "Su = your (usted). It's the same word as his/her — context does the work.",
      },
      {
        stem: "La reunión es…",
        english: "The meeting is…",
        scenarios: ["day and time", "the room", "reassurance"],
        examples: [
          "La reunión es el jueves a las cuatro.",
          "La reunión es en el salón doce.",
          "La reunión es corta, media hora nada más.",
        ],
        note: "Days take el: la reunión es el jueves = 'on Thursday.' No extra word for 'on.'",
      },
      {
        stem: "¿Puede venir…?",
        english: "Can you come…? (usted)",
        scenarios: ["a day", "a bit early", "an event"],
        examples: [
          "¿Puede venir el martes por la tarde?",
          "¿Puede venir unos minutos antes?",
          "¿Puede venir a la presentación de los estudiantes?",
        ],
      },
      {
        stem: "Le voy a mandar…",
        english: "I'm going to send you… (usted)",
        scenarios: ["a message", "info", "photos"],
        examples: [
          "Le voy a mandar un mensaje con la fecha.",
          "Le voy a mandar la información por correo.",
          "Le voy a mandar fotos del proyecto de su hija.",
        ],
        note: "Le = to you (usted). With tú it would be te voy a mandar — one letter of respect.",
      },
    ],
  },
  {
    day: 26,
    theme: "Favors",
    subtitle: "Asking friends for help, warmly. Back to tú.",
    frames: [
      {
        stem: "¿Me haces un favor…?",
        english: "Will you do me a favor…?",
        scenarios: ["opening move", "a small one", "no rush"],
        examples: [
          "¿Me haces un favor?",
          "¿Me haces un favor? Es cortito.",
          "¿Me haces un favor cuando tengas tiempo?",
        ],
      },
      {
        stem: "¿Me prestas…?",
        english: "Will you lend me…?",
        scenarios: ["a pen", "a charger", "a book"],
        examples: [
          "¿Me prestas un bolígrafo?",
          "¿Me prestas tu cargador un momento?",
          "¿Me prestas ese libro cuando lo termines?",
        ],
        note: "Prestar = to lend. Between friends, ¿me prestas…? needs no 'please' — the tú already says you're close.",
      },
      {
        stem: "¿Me acompañas a…?",
        english: "Will you come with me to…?",
        scenarios: ["an errand", "shopping", "the market"],
        examples: [
          "¿Me acompañas a la farmacia?",
          "¿Me acompañas a comprar el regalo?",
          "¿Me acompañas al mercado el sábado?",
        ],
        note: "Acompañar — to keep someone company. You're asking for presence, not labor. One of the warmest verbs in Spanish.",
      },
      {
        stem: "¿Te importa si…?",
        english: "Do you mind if…?",
        scenarios: ["the window", "being late", "a plus-one"],
        examples: [
          "¿Te importa si abro la ventana?",
          "¿Te importa si llegamos un poco tarde?",
          "¿Te importa si invito a mi vecina?",
        ],
      },
      {
        stem: "Te agradezco…",
        english: "I'm grateful (to you) for…",
        scenarios: ["help", "advice", "patience"],
        examples: [
          "Te agradezco la ayuda.",
          "Te agradezco mucho el consejo.",
          "Te agradezco la paciencia conmigo.",
        ],
        note: "Te agradezco + noun — a fuller thank-you than gracias, for when someone really showed up.",
      },
    ],
  },
  {
    day: 27,
    theme: "Eating Out",
    subtitle: "A whole restaurant visit, start to finish.",
    frames: [
      {
        stem: "Una mesa para…",
        english: "A table for…",
        scenarios: ["two", "by the window", "just you"],
        examples: [
          "Una mesa para dos, por favor.",
          "Una mesa para cuatro, cerca de la ventana si se puede.",
          "Una mesa para una — sí, solo yo.",
        ],
      },
      {
        stem: "¿Qué me recomienda…?",
        english: "What do you recommend…? (usted)",
        scenarios: ["in general", "dessert", "spicy"],
        examples: [
          "¿Qué me recomienda?",
          "¿Qué me recomienda de postre?",
          "¿Qué me recomienda si me gusta lo picante?",
        ],
        note: "Recomienda — usted, like day 25. To a friend it would be ¿qué me recomiendas?",
      },
      {
        stem: "Sin…, por favor",
        english: "Without…, please",
        scenarios: ["onion", "ice", "cilantro"],
        examples: [
          "Sin cebolla, por favor.",
          "Sin hielo, por favor.",
          "Sin cilantro, por favor — sé que es polémico.",
        ],
      },
      {
        stem: "¿Está incluido…?",
        english: "Is … included?",
        scenarios: ["the tip", "the fixed menu", "breakfast"],
        examples: [
          "¿Está incluida la propina?",
          "¿Está incluido el postre en el menú del día?",
          "¿Está incluido el desayuno?",
        ],
        note: "Incluido agrees: la propina → incluida. Menú del día = the fixed lunch deal, beloved everywhere Spanish is spoken.",
      },
      {
        stem: "¿Nos trae…?",
        english: "Could you bring us…?",
        scenarios: ["the check", "more bread", "no rush"],
        examples: [
          "¿Nos trae la cuenta, por favor?",
          "¿Nos trae más pan, por favor?",
          "¿Nos trae la cuenta cuando pueda?",
        ],
        note: "Nos = to us. La cuenta never comes until you ask — asking isn't rude, it's how it works.",
      },
    ],
  },
  {
    day: 28,
    theme: "Repaso: Asking",
    subtitle: "The week's asks, in new places.",
    frames: [
      {
        stem: "Me da…, por favor",
        english: "I'll have…, please",
        scenarios: ["street food", "a ticket", "a bag"],
        examples: [
          "Me da dos empanadas, por favor.",
          "Me da un boleto para las tres, por favor.",
          "Me da una bolsa, por favor.",
        ],
      },
      {
        stem: "Estoy buscando…",
        english: "I'm looking for…",
        scenarios: ["a bookstore section", "an outfit", "quiet"],
        examples: [
          "Estoy buscando la sección de niños.",
          "Estoy buscando un vestido para una boda.",
          "Estoy buscando un lugar tranquilo para leer.",
        ],
      },
      {
        stem: "¿Cómo llego a…?",
        english: "How do I get to…?",
        scenarios: ["the beach", "the hotel", "plan B"],
        examples: [
          "¿Cómo llego a la playa desde aquí?",
          "¿Cómo llego al hotel si no hay taxis?",
          "¿Cómo llego al mercado central?",
        ],
      },
      {
        stem: "¿Me prestas…?",
        english: "Will you lend me…?",
        scenarios: ["an umbrella", "five dollars", "notes"],
        examples: [
          "¿Me prestas tu paraguas? Se me olvidó el mío.",
          "¿Me prestas cinco dólares? Te los devuelvo mañana.",
          "¿Me prestas tus apuntes de la reunión?",
        ],
        note: "Se me olvidó — 'it forgot itself on me.' Spanish lets accidents happen to you instead of blaming you.",
      },
      {
        stem: "¿Qué me recomienda…?",
        english: "What do you recommend…? (usted)",
        scenarios: ["to take home", "regional", "for a learner"],
        examples: [
          "¿Qué me recomienda para llevar a casa?",
          "¿Qué me recomienda de la región?",
          "¿Qué me recomienda para alguien que apenas está aprendiendo español?",
        ],
      },
    ],
  },
  // ===== Week 5 — Reaccionar y seguir / Reacting & keeping it going =====
  {
    day: 29,
    theme: "Good News",
    subtitle: "React like you mean it.",
    frames: [
      {
        stem: "¡Qué bueno que…!",
        english: "I'm so glad that…!",
        scenarios: ["a visit", "an exam", "recovery"],
        examples: [
          "¡Qué bueno que viniste!",
          "¡Qué bueno que pasaste el examen!",
          "¡Qué bueno que ya te sientes mejor!",
        ],
        note: "¡Qué bueno que…! + the good fact — the all-purpose happy reaction.",
      },
      {
        stem: "¡Felicidades por…!",
        english: "Congratulations on…!",
        scenarios: ["a job", "a graduation", "a baby"],
        examples: [
          "¡Felicidades por el trabajo nuevo!",
          "¡Felicidades por tu graduación!",
          "¡Felicidades por el bebé!",
        ],
        note: "Congratulations 'for' the thing — always por, never de.",
      },
      {
        stem: "Me alegro por…",
        english: "I'm happy for…",
        scenarios: ["a friend", "a couple", "a family"],
        examples: [
          "Me alegro por ti.",
          "Me alegro por ustedes dos.",
          "Me alegro por tu familia.",
        ],
        note: "Me alegro por ti — short, sincere, always welcome.",
      },
      {
        stem: "¡No me digas! Cuéntame…",
        english: "No way! Tell me…",
        scenarios: ["everything", "how", "more"],
        examples: [
          "¡No me digas! Cuéntame todo.",
          "¡No me digas! Cuéntame cómo pasó.",
          "¡No me digas! Cuéntame más.",
        ],
        note: "No me digas = 'you don't say.' Cuéntame — a tú command — invites the whole story. Your first commands are invitations.",
      },
      {
        stem: "Qué emoción…",
        english: "How exciting…",
        scenarios: ["can't wait", "a start date", "their news"],
        examples: [
          "Qué emoción, ¡ya quiero verlo!",
          "Qué emoción, ¿cuándo empiezas?",
          "Qué emoción lo de tu viaje.",
        ],
        note: "Lo de… = 'the thing about…' — a wonderfully vague pointer at someone's news.",
      },
    ],
  },
  {
    day: 30,
    theme: "Hard News",
    subtitle: "Being there, in Spanish.",
    frames: [
      {
        stem: "Lo siento mucho por…",
        english: "I'm so sorry about…",
        scenarios: ["a loss", "what happened", "bad news"],
        examples: [
          "Lo siento mucho por tu pérdida.",
          "Lo siento mucho por lo que pasó.",
          "Lo siento mucho por las malas noticias.",
        ],
      },
      {
        stem: "Qué difícil…",
        english: "How hard…",
        scenarios: ["honestly", "what they're facing", "for everyone"],
        examples: [
          "Qué difícil, no sé qué decir.",
          "Qué difícil lo que estás pasando.",
          "Qué difícil para toda la familia.",
        ],
        note: "You don't have to fix it. Qué difícil says 'I see it' — often that's the whole job.",
      },
      {
        stem: "Espero que se mejore…",
        english: "I hope they get better…",
        scenarios: ["soon", "a relative", "everything"],
        examples: [
          "Espero que se mejore pronto.",
          "Espero que se mejore tu mamá.",
          "Espero que todo se mejore en casa.",
        ],
        note: "Se mejore is subjunctive — keep it as a fixed get-well chunk for now. The full pattern arrives in invierno.",
      },
      {
        stem: "Cuenta conmigo para…",
        english: "Count on me for…",
        scenarios: ["anything", "the kids", "whatever"],
        examples: [
          "Cuenta conmigo para lo que necesites.",
          "Cuenta conmigo para cuidar a los niños.",
          "Cuenta conmigo para lo que sea.",
        ],
      },
      {
        stem: "Si necesitas algo…",
        english: "If you need anything…",
        scenarios: ["let me know", "I'm here", "any hour"],
        examples: [
          "Si necesitas algo, me avisas.",
          "Si necesitas algo, aquí estoy.",
          "Si necesitas algo, llámame a cualquier hora.",
        ],
        note: "Me avisas — 'you let me know.' Plain present tense doing the work of a warm offer.",
      },
    ],
  },
  {
    day: 31,
    theme: "Agreeing",
    subtitle: "Agree — and add your piece.",
    frames: [
      {
        stem: "Estoy de acuerdo con…",
        english: "I agree with…",
        scenarios: ["a person", "an idea", "almost everything"],
        examples: [
          "Estoy de acuerdo contigo.",
          "Estoy de acuerdo con esa idea.",
          "Estoy de acuerdo con casi todo lo que dijiste.",
        ],
      },
      {
        stem: "Tienes razón en…",
        english: "You're right about…",
        scenarios: ["that", "the schedule", "a new angle"],
        examples: [
          "Tienes razón en eso.",
          "Tienes razón en lo del horario.",
          "Tienes razón, no lo había pensado así.",
        ],
        note: "Tener razón — to 'have reason.' In Spanish, being right is something you carry.",
      },
      {
        stem: "Claro que…",
        english: "Of course…",
        scenarios: ["yes", "it's worth it", "you can"],
        examples: [
          "Claro que sí.",
          "Claro que vale la pena.",
          "Claro que puedes.",
        ],
      },
      {
        stem: "Yo también…",
        english: "Me too / I also…",
        scenarios: ["beliefs", "tiredness", "plans"],
        examples: [
          "Yo también lo creo.",
          "Yo también estoy cansada hoy.",
          "Yo también quiero ir.",
        ],
      },
      {
        stem: "A mí también…",
        english: "Me too (with gustar-verbs)",
        scenarios: ["agreeing", "a place", "me neither"],
        examples: [
          "A mí también me gusta.",
          "A mí también me encanta ese lugar.",
          "A mí tampoco me gusta el frío.",
        ],
        note: "Echo the me: a mí también me gusta. For negatives, tampoco — 'me neither.'",
      },
    ],
  },
  {
    day: 32,
    theme: "Disagreeing Softly",
    subtitle: "Push back without friction.",
    frames: [
      {
        stem: "Sí, pero…",
        english: "Yes, but…",
        scenarios: ["not so easy", "another angle", "first things"],
        examples: [
          "Sí, pero no es tan fácil.",
          "Sí, pero hay otra manera de verlo.",
          "Sí, pero primero tengo que terminar esto.",
        ],
      },
      {
        stem: "Depende de…",
        english: "It depends on…",
        scenarios: ["the day", "how you look at it", "the student"],
        examples: [
          "Depende del día.",
          "Depende de cómo lo mires.",
          "Depende del estudiante.",
        ],
        note: "De + el contracts to del — always, no exceptions.",
      },
      {
        stem: "No estoy tan segura de…",
        english: "I'm not so sure about…",
        scenarios: ["that", "an idea", "the plan"],
        examples: [
          "No estoy tan segura de eso.",
          "No estoy tan segura de que sea buena idea.",
          "No estoy tan segura del plan.",
        ],
        note: "After no estoy segura de que, Spanish slides into subjunctive (sea). Borrow the chunk now — the grammar arrives in invierno.",
      },
      {
        stem: "No sé, creo que…",
        english: "I don't know, I think…",
        scenarios: ["complications", "options", "your way"],
        examples: [
          "No sé, creo que es más complicado.",
          "No sé, creo que hay mejores opciones.",
          "No sé, creo que yo lo haría diferente.",
        ],
      },
      {
        stem: "En mi caso…",
        english: "In my case…",
        scenarios: ["the reverse", "mornings", "coffee"],
        examples: [
          "En mi caso, fue al revés.",
          "En mi caso, funciona mejor por la mañana.",
          "En mi caso, el café es obligatorio.",
        ],
        note: "En mi caso disagrees without declaring war — you're just adding your data.",
      },
    ],
  },
  {
    day: 33,
    theme: "Showing Interest",
    subtitle: "Keep the other person talking.",
    frames: [
      {
        stem: "¿En serio?",
        english: "Really?",
        scenarios: ["disbelief", "and then", "when"],
        examples: [
          "¿En serio? No lo puedo creer.",
          "¿En serio? ¿Y qué dijiste?",
          "¿En serio? ¿Cuándo pasó eso?",
        ],
      },
      {
        stem: "¿Y luego qué pasó con…?",
        english: "And then what happened with…?",
        scenarios: ["a neighbor", "an interview", "a project"],
        examples: [
          "¿Y luego qué pasó con tu vecino?",
          "¿Y luego qué pasó con la entrevista?",
          "¿Y luego qué pasó con el proyecto?",
        ],
        note: "The engine of every good story: and then?",
      },
      {
        stem: "Cuéntame más de…",
        english: "Tell me more about…",
        scenarios: ["a trip", "a friend", "a job"],
        examples: [
          "Cuéntame más de tu viaje.",
          "Cuéntame más de esa amiga.",
          "Cuéntame más de tu nuevo trabajo.",
        ],
        note: "Cuéntame más — the greatest gift you can give a storyteller.",
      },
      {
        stem: "¿Cómo te fue con…?",
        english: "How did it go with…?",
        scenarios: ["the doctor", "an exam", "the move"],
        examples: [
          "¿Cómo te fue con el doctor?",
          "¿Cómo te fue con el examen?",
          "¿Cómo te fue con la mudanza?",
        ],
        note: "¿Cómo te fue? — 'how did it go for you?' The follow-up that shows you remembered.",
      },
      {
        stem: "Suena…",
        english: "That sounds…",
        scenarios: ["amazing", "complicated", "like you need"],
        examples: [
          "Suena increíble.",
          "Suena complicado, ¿cómo te sientes?",
          "Suena a que necesitas unas vacaciones.",
        ],
        note: "Suena a que… = 'it sounds like…' — reading between someone's lines, out loud.",
      },
    ],
  },
  {
    day: 34,
    theme: "Encouraging",
    subtitle: "What you say to students. Keep a copy for yourself.",
    frames: [
      {
        stem: "Lo estás haciendo…",
        english: "You're doing it…",
        scenarios: ["very well", "better than you think", "carefully"],
        examples: [
          "Lo estás haciendo muy bien.",
          "Lo estás haciendo mejor de lo que crees.",
          "Lo estás haciendo con mucho cuidado, se nota.",
        ],
      },
      {
        stem: "Vas muy bien con…",
        english: "You're doing great with…",
        scenarios: ["reading", "English", "verbs"],
        examples: [
          "Vas muy bien con la lectura.",
          "Vas muy bien con el inglés.",
          "Vas muy bien con los verbos.",
        ],
        note: "Vas bien — literally 'you're going well.' Progress as motion.",
      },
      {
        stem: "No te preocupes por…",
        english: "Don't worry about…",
        scenarios: ["mistakes", "the exam", "not now"],
        examples: [
          "No te preocupes por los errores.",
          "No te preocupes por el examen.",
          "No te preocupes por eso ahora.",
        ],
        note: "No te preocupes — a negative tú command; the ending shifts (preocupas → preocupes). Learn it as a chunk of kindness.",
      },
      {
        stem: "Sigue practicando…",
        english: "Keep practicing…",
        scenarios: ["daily", "you'll get there", "out loud"],
        examples: [
          "Sigue practicando todos los días.",
          "Sigue practicando, vas a llegar.",
          "Sigue practicando en voz alta.",
        ],
        note: "Seguir + gerund = keep doing. The advice you give students — and need yourself.",
      },
      {
        stem: "Cada día… mejor",
        english: "Every day… better",
        scenarios: ["speaking", "understanding", "little by little"],
        examples: [
          "Cada día hablas mejor.",
          "Cada día entiendes más.",
          "Cada día un poco mejor.",
        ],
      },
    ],
  },
  {
    day: 35,
    theme: "Repaso: Reacting",
    subtitle: "One friend's week — react five ways.",
    frames: [
      {
        stem: "¡Qué bueno que…!",
        english: "I'm so glad that…!",
        scenarios: ["an apartment", "a job", "arriving safe"],
        examples: [
          "¡Qué bueno que encontraste apartamento!",
          "¡Qué bueno que te dieron el puesto!",
          "¡Qué bueno que llegaste bien!",
        ],
      },
      {
        stem: "Qué difícil…",
        english: "How hard…",
        scenarios: ["that week", "a decision", "all at once"],
        examples: [
          "Qué difícil esa semana, de verdad.",
          "Qué difícil decisión, ¿cómo te sientes?",
          "Qué difícil cuando pasa todo a la vez.",
        ],
      },
      {
        stem: "Yo también…",
        english: "Me too / I also…",
        scenarios: ["a week like that", "needing rest", "same thought"],
        examples: [
          "Yo también tuve una semana así.",
          "Yo también necesito un descanso.",
          "Yo también pensé lo mismo.",
        ],
      },
      {
        stem: "¿Cómo te fue con…?",
        english: "How did it go with…?",
        scenarios: ["the presentation", "Sunday", "the rest"],
        examples: [
          "¿Cómo te fue con la presentación al final?",
          "¿Cómo te fue con tu mamá el domingo?",
          "¿Cómo te fue con el resto de la semana?",
        ],
      },
      {
        stem: "No te preocupes por…",
        english: "Don't worry about…",
        scenarios: ["replying", "dinner", "other people"],
        examples: [
          "No te preocupes por contestarme rápido.",
          "No te preocupes por la cena, yo llevo algo.",
          "No te preocupes por lo que piensen los demás.",
        ],
      },
    ],
  },
  // ===== Week 6 — Contar historias / Telling stories =====
  {
    day: 36,
    theme: "Step by Step",
    subtitle: "What happened, in order.",
    frames: [
      {
        stem: "Primero…",
        english: "First…",
        scenarios: ["the market", "breakfast", "messages"],
        examples: [
          "Primero fui al mercado.",
          "Primero desayuné con calma.",
          "Primero revisé mis mensajes.",
        ],
      },
      {
        stem: "Después…",
        english: "After that…",
        scenarios: ["a walk", "a call", "dinner"],
        examples: [
          "Después caminé hasta el río.",
          "Después llamé a una amiga.",
          "Después preparé la cena.",
        ],
      },
      {
        stem: "Luego…",
        english: "Then…",
        scenarios: ["a movie", "a stroll", "reading"],
        examples: [
          "Luego vimos una película.",
          "Luego salimos a caminar un rato.",
          "Luego me puse a leer.",
        ],
        note: "Me puse a + infinitive — 'I got down to…' A storyteller's verb.",
      },
      {
        stem: "Al final…",
        english: "In the end…",
        scenarios: ["it worked out", "a decision", "on time"],
        examples: [
          "Al final todo salió bien.",
          "Al final decidimos quedarnos en casa.",
          "Al final llegué a tiempo.",
        ],
      },
      {
        stem: "De repente…",
        english: "Suddenly…",
        scenarios: ["rain", "blackout", "applause"],
        examples: [
          "De repente empezó a llover.",
          "De repente se fue la luz.",
          "De repente todos empezaron a aplaudir.",
        ],
        note: "De repente is the plot-twist word — everything before it is setup.",
      },
    ],
  },
  {
    day: 37,
    theme: "Setting the Scene",
    subtitle: "How things were, before anything happened.",
    frames: [
      {
        stem: "Era…",
        english: "It was… (description)",
        scenarios: ["a beautiful day", "late", "a first"],
        examples: [
          "Era un día precioso.",
          "Era tarde y no había nadie en la calle.",
          "Era mi primer verano en Boston.",
        ],
        note: "Era — imperfect of ser. Descriptions in the past live here.",
      },
      {
        stem: "Estaba…",
        english: "I was / it was… (state)",
        scenarios: ["nerves", "rain", "grandma's house"],
        examples: [
          "Estaba nerviosa pero contenta.",
          "Estaba lloviendo y no tenía paraguas.",
          "Estaba en casa de mi abuela.",
        ],
      },
      {
        stem: "Había…",
        english: "There was / there were…",
        scenarios: ["a crowd", "a line", "music"],
        examples: [
          "Había mucha gente en la plaza.",
          "Había una fila larguísima.",
          "Había música por todas partes.",
        ],
        note: "Había — the imperfect of hay. Like hay, it never changes for plural.",
      },
      {
        stem: "Hacía…",
        english: "The weather was… / It had been…",
        scenarios: ["heat", "cold", "years"],
        examples: [
          "Hacía muchísimo calor.",
          "Hacía un frío tremendo esa noche.",
          "Hacía años que no visitaba Atlanta.",
        ],
        note: "Hacía + weather sets the scene; hacía años que no… = 'it had been years since…'",
      },
      {
        stem: "Todos los días…",
        english: "Every day… (used to)",
        scenarios: ["the lake", "the same train", "grandma's coffee"],
        examples: [
          "Todos los días nadábamos en el lago.",
          "Todos los días tomaba el mismo tren.",
          "Todos los días mi abuela hacía café a las seis.",
        ],
        note: "Repeated past = imperfect. Todos los días is its signature.",
      },
    ],
  },
  {
    day: 38,
    theme: "What Happened",
    subtitle: "Name the events. Preterite does the lifting.",
    frames: [
      {
        stem: "Fui a…",
        english: "I went to…",
        scenarios: ["a concert", "a visit", "the doctor"],
        examples: [
          "Fui a un concierto en el parque.",
          "Fui a visitar a una amiga en Providence.",
          "Fui al médico por fin.",
        ],
      },
      {
        stem: "Vi…",
        english: "I saw…",
        scenarios: ["a whale", "a neighbor", "a documentary"],
        examples: [
          "Vi una ballena desde el barco.",
          "Vi a mi vecina en el mercado.",
          "Vi un documental buenísimo anoche.",
        ],
        note: "Vi a mi vecina — the personal a returns whenever you see a person.",
      },
      {
        stem: "Conocí a…",
        english: "I met…",
        scenarios: ["parents", "a developer", "a neighbor"],
        examples: [
          "Conocí a los padres de mi estudiante.",
          "Conocí a una desarrolladora de Medellín.",
          "Conocí a mi vecino nuevo por fin.",
        ],
        note: "Conocer in preterite = met for the first time. In imperfect (conocía) it means already knew.",
      },
      {
        stem: "Me pasó algo…",
        english: "Something … happened to me",
        scenarios: ["funny", "strange", "incredible"],
        examples: [
          "Me pasó algo chistoso en el tren.",
          "Me pasó algo raro esta mañana.",
          "Me pasó algo increíble y tengo que contártelo.",
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that…",
        scenarios: ["neighbors", "the exam", "small world"],
        examples: [
          "Resulta que éramos vecinas.",
          "Resulta que el examen era hoy.",
          "Resulta que su mamá también es maestra.",
        ],
        note: "Resulta que — 'it turns out.' The hinge where a story reveals its surprise.",
      },
    ],
  },
  {
    day: 39,
    theme: "Scene Meets Event",
    subtitle: "The classic combo — this week's grammar peak.",
    frames: [
      {
        stem: "Estaba… cuando…",
        english: "I was … when…",
        scenarios: ["coffee", "walking", "about to leave"],
        examples: [
          "Estaba haciendo café cuando sonó el teléfono.",
          "Estaba caminando al trabajo cuando empezó a nevar.",
          "Estaba a punto de salir cuando llegó el paquete.",
        ],
        note: "The classic combo: imperfect for the scene, preterite for the interruption.",
      },
      {
        stem: "Mientras…",
        english: "While…",
        scenarios: ["cooking", "waiting", "everyone asleep"],
        examples: [
          "Mientras cocinaba, escuchaba las noticias.",
          "Mientras esperaba el tren, leí un capítulo entero.",
          "Mientras todos dormían, terminé mi proyecto.",
        ],
      },
      {
        stem: "Justo cuando…",
        english: "Just when…",
        scenarios: ["arriving", "about to speak", "a seat"],
        examples: [
          "Justo cuando llegué, empezó la lluvia.",
          "Justo cuando iba a hablar, se cortó la llamada.",
          "Justo cuando encontré asiento, anunciaron mi parada.",
        ],
      },
      {
        stem: "En ese momento…",
        english: "At that moment…",
        scenarios: ["understanding", "knowing", "silence"],
        examples: [
          "En ese momento entendí todo.",
          "En ese momento supe que era el lugar correcto.",
          "En ese momento nadie dijo nada.",
        ],
        note: "Supe — preterite of saber — means 'I found out,' not 'I knew.' Some verbs change meaning in preterite.",
      },
      {
        stem: "Y entonces…",
        english: "And then…",
        scenarios: ["everything changed", "laughter", "the surprise"],
        examples: [
          "Y entonces todo cambió.",
          "Y entonces ella empezó a reírse.",
          "Y entonces llegó la sorpresa.",
        ],
      },
    ],
  },
  {
    day: 40,
    theme: "Inside the Story",
    subtitle: "What you thought, noticed, and almost did.",
    frames: [
      {
        stem: "Pensé que…",
        english: "I thought that…",
        scenarios: ["a joke", "being late", "you knew"],
        examples: [
          "Pensé que era una broma.",
          "Pensé que iba a llegar tarde.",
          "Pensé que ya lo sabías.",
        ],
      },
      {
        stem: "No sabía que…",
        english: "I didn't know that…",
        scenarios: ["a hidden talent", "how easy", "how close"],
        examples: [
          "No sabía que hablabas español.",
          "No sabía que era tan fácil.",
          "No sabía que vivían tan cerca.",
        ],
      },
      {
        stem: "Me di cuenta de que…",
        english: "I realized that…",
        scenarios: ["understanding", "the last one", "not alone"],
        examples: [
          "Me di cuenta de que entendí casi todo.",
          "Me di cuenta de que era la última.",
          "Me di cuenta de que no estaba sola.",
        ],
        note: "Darse cuenta = to realize. Realizar means to carry out — a false friend.",
      },
      {
        stem: "Casi…",
        english: "I almost…",
        scenarios: ["the ice", "the train", "laughing"],
        examples: [
          "Casi me caigo en el hielo.",
          "Casi pierdo el tren.",
          "Casi lloro de la risa.",
        ],
        note: "Casi + present tense tells a past near-miss — Spanish relives the moment.",
      },
      {
        stem: "Por suerte…",
        english: "Luckily…",
        scenarios: ["an umbrella", "a helper", "spare time"],
        examples: [
          "Por suerte llevaba paraguas.",
          "Por suerte alguien me ayudó.",
          "Por suerte tenía tiempo de sobra.",
        ],
      },
    ],
  },
  {
    day: 41,
    theme: "Telling It to Someone",
    subtitle: "A story isn't complete until it's told.",
    frames: [
      {
        stem: "¿Sabes qué?",
        english: "You know what?",
        scenarios: ["a win", "an admission", "in person"],
        examples: [
          "¿Sabes qué? Hoy hablé español sin miedo.",
          "¿Sabes qué? Tenías razón.",
          "¿Sabes qué? Mejor te lo cuento en persona.",
        ],
      },
      {
        stem: "Te cuento que…",
        english: "So, I have to tell you…",
        scenarios: ["a finish line", "a student", "news"],
        examples: [
          "Te cuento que ya terminé el curso.",
          "Te cuento que mi estudiante leyó su primer libro en inglés.",
          "Te cuento que hay novedades en casa.",
        ],
      },
      {
        stem: "Adivina qué…",
        english: "Guess what…",
        scenarios: ["class today", "a find", "what they said"],
        examples: [
          "Adivina qué pasó en la clase de hoy.",
          "Adivina qué encontré en el mercado.",
          "Adivina qué me dijeron hoy.",
        ],
        note: "Adivina — another tú command doing friendly work: guess.",
      },
      {
        stem: "Lo mejor fue…",
        english: "The best part was…",
        scenarios: ["a reaction", "the ending", "the surprise"],
        examples: [
          "Lo mejor fue la cara que puso.",
          "Lo mejor fue el final.",
          "Lo mejor fue que nadie lo esperaba.",
        ],
      },
      {
        stem: "Total, que…",
        english: "Long story short…",
        scenarios: ["very late", "a cat", "a misunderstanding"],
        examples: [
          "Total, que llegamos tardísimo.",
          "Total, que ahora tenemos gato.",
          "Total, que todo era un malentendido.",
        ],
        note: "Total, que… — 'long story short.' The abbreviation every rambling story eventually needs.",
      },
    ],
  },
  {
    day: 42,
    theme: "Repaso: One Whole Story",
    subtitle: "Five beats. One true story. Yours.",
    frames: [
      {
        stem: "Estaba… cuando…",
        english: "I was … when…",
        scenarios: ["the market", "about to leave", "grading"],
        examples: [
          "Estaba comprando fruta cuando la señora me habló en español.",
          "Estaba por irme cuando empezó la música.",
          "Estaba revisando exámenes cuando llegó el correo.",
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that…",
        scenarios: ["a student's mom", "same hometown", "the bus"],
        examples: [
          "Resulta que su hija está en mi clase.",
          "Resulta que crecimos en la misma ciudad.",
          "Resulta que el autobús no pasaba por ahí.",
        ],
      },
      {
        stem: "Y entonces…",
        english: "And then…",
        scenarios: ["kept talking", "a shout", "the answer"],
        examples: [
          "Y entonces seguimos hablando un buen rato.",
          "Y entonces alguien gritó mi nombre.",
          "Y entonces encontré la respuesta.",
        ],
      },
      {
        stem: "Me di cuenta de que…",
        english: "I realized that…",
        scenarios: ["no translating", "no fear", "the goal"],
        examples: [
          "Me di cuenta de que no estaba traduciendo en mi cabeza.",
          "Me di cuenta de que ya no tenía miedo.",
          "Me di cuenta de que eso era exactamente la meta.",
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        scenarios: ["a goodbye", "a coffee date", "a better ending"],
        examples: [
          "Al final me despedí en español, como si nada.",
          "Al final quedamos en tomar un café.",
          "Al final la historia terminó mejor de lo que empezó.",
        ],
        note: "Quedar en + infinitive = to agree to. Quedamos en tomar un café — you made a plan; week 9 makes more.",
      },
    ],
  },
];

export const totalDays = frameDays.length;
