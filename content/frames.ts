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
 * Pues — The First 14 Days
 *
 * Latin American Spanish, tú-form. Mostly pan-Hispanic vocabulary; where a
 * regional alternative is common, the frame's `note` field calls it out.
 * Examples are written for Marlana — 35, ESOL teacher + aspiring developer,
 * Boston by way of Atlanta. Real life, not textbook.
 *
 * Daily structure (per app philosophy):
 *   1. Read the frame.  2. Pick a situation.  3. Write your thought.
 *   4. Say it out loud.  5. Save it.   Goal: 5 thoughts a day.
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
];

export const totalDays = frameDays.length;
