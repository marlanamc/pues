import type { FrameDay } from "./types";

/**
 * Pues — daily frames (Verano / summer), days 1–91.
 *
 * Moved verbatim from the original content/frames.ts at the Otoño boundary
 * (see content/CURRICULUM.md convention 7). Latin American Spanish, tú-form.
 * Index-aligned with content/prompts/verano.ts, content/sentenceFormer/verano.ts,
 * and content/readings/verano.ts (enforced by content/content.test.ts).
 */
export const veranoFrameDays: FrameDay[] = [
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
  // ===== Week 7 — Explicar y describir / Explaining & describing =====
  {
    day: 43,
    theme: "Describing a Place",
    subtitle: "Your corner of the world, in words.",
    frames: [
      {
        stem: "Mi barrio es…",
        english: "My neighborhood is…",
        scenarios: ["its character", "its best season", "its size"],
        examples: [
          "Mi barrio es tranquilo y tiene de todo.",
          "Mi barrio es más bonito en otoño.",
          "Mi barrio es pequeño, pero nunca me aburro.",
        ],
      },
      {
        stem: "Es un lugar…",
        english: "It's a place…",
        scenarios: ["for reading", "with history", "where people know you"],
        examples: [
          "Es un lugar perfecto para leer.",
          "Es un lugar con mucha historia.",
          "Es un lugar donde todos se conocen.",
        ],
        note: "Donde links a place to its description — no extra words needed.",
      },
      {
        stem: "Tiene…",
        english: "It has…",
        scenarios: ["a park", "cafés", "a view"],
        examples: [
          "Tiene un parque enorme en el centro.",
          "Tiene cafés en cada esquina.",
          "Tiene una vista increíble del río.",
        ],
      },
      {
        stem: "Se siente…",
        english: "It feels…",
        scenarios: ["like a town", "safe", "seasonal"],
        examples: [
          "Se siente como un pueblo dentro de la ciudad.",
          "Se siente seguro a cualquier hora.",
          "Se siente diferente en cada estación.",
        ],
      },
      {
        stem: "Está lleno de…",
        english: "It's full of…",
        scenarios: ["students", "trees", "life"],
        examples: [
          "Está lleno de estudiantes durante el año escolar.",
          "Está lleno de árboles viejos y casas de ladrillo.",
          "Está lleno de vida los fines de semana.",
        ],
      },
    ],
  },
  {
    day: 44,
    theme: "Describing a Person",
    subtitle: "The people you love deserve good words.",
    frames: [
      {
        stem: "Es una persona…",
        english: "He/She is a … person",
        scenarios: ["generous", "a listener", "unforgettable"],
        examples: [
          "Es una persona muy generosa.",
          "Es una persona que escucha de verdad.",
          "Es una persona difícil de olvidar.",
        ],
      },
      {
        stem: "Se parece a…",
        english: "He/She looks like / is like…",
        scenarios: ["family", "a movie character", "your younger self"],
        examples: [
          "Se parece a su mamá cuando sonríe.",
          "Se parece a un profesor de película.",
          "Se parece mucho a como era yo a su edad.",
        ],
        note: "Parecerse a = to resemble. Reflexive, like so many verbs about the self.",
      },
      {
        stem: "Siempre…",
        english: "He/She always…",
        scenarios: ["stories", "the right words", "laughter"],
        examples: [
          "Siempre llega con una historia nueva.",
          "Siempre sabe qué decir.",
          "Siempre me hace reír.",
        ],
      },
      {
        stem: "Lo que me gusta de… es…",
        english: "What I like about … is…",
        scenarios: ["patience", "persistence", "energy"],
        examples: [
          "Lo que me gusta de ella es su paciencia.",
          "Lo que me gusta de él es que nunca se rinde.",
          "Lo que me gusta de mi clase es la energía.",
        ],
      },
      {
        stem: "Es de esas personas que…",
        english: "He/She is one of those people who…",
        scenarios: ["make you feel at home", "remember birthdays", "talk to everyone"],
        examples: [
          "Es de esas personas que te hacen sentir en casa.",
          "Es de esas personas que recuerdan tu cumpleaños.",
          "Es de esas personas que hablan con todos.",
        ],
        note: "Es de esas personas que… — a whole portrait in one frame.",
      },
    ],
  },
  {
    day: 45,
    theme: "Comparing",
    subtitle: "More than, less than, just as much.",
    frames: [
      {
        stem: "Es más… que…",
        english: "… is more … than…",
        scenarios: ["two cities", "two skills", "two routes"],
        examples: [
          "El verano en Atlanta es más húmedo que aquí.",
          "Hablar es más difícil que leer, por ahora.",
          "El tren es más rápido que el autobús a esta hora.",
        ],
      },
      {
        stem: "Es menos… que…",
        english: "… is less … than…",
        scenarios: ["noise", "cost", "fear"],
        examples: [
          "Boston es menos ruidoso de lo que esperaba.",
          "Este barrio es menos caro que el centro.",
          "La gramática es menos misteriosa que antes.",
        ],
      },
      {
        stem: "Es tan… como…",
        english: "… is as … as…",
        scenarios: ["skills", "seasons", "home cooking"],
        examples: [
          "Escuchar es tan importante como hablar.",
          "El otoño aquí es tan bonito como dicen.",
          "Cocinar en casa es tan rico como salir.",
        ],
        note: "Tan… como… — as… as. Equality, stated cleanly.",
      },
      {
        stem: "No es tan… como…",
        english: "… isn't as … as…",
        scenarios: ["complexity", "winter", "fear"],
        examples: [
          "No es tan complicado como parece.",
          "El invierno no es tan terrible como me advirtieron.",
          "Hablar no es tan aterrador como era antes.",
        ],
      },
      {
        stem: "Es el/la más… de…",
        english: "It's the most … in…",
        scenarios: ["a bakery", "a month", "the language"],
        examples: [
          "Es la mejor panadería del barrio.",
          "Es el mes más bonito del año.",
          "Es la parte más difícil del idioma, dicen.",
        ],
        note: "Superlatives take de: the best del barrio — never 'en el barrio.'",
      },
    ],
  },
  {
    day: 46,
    theme: "How It Works",
    subtitle: "Purpose, instructions, and what it runs on.",
    frames: [
      {
        stem: "Sirve para…",
        english: "It's for… / It's used to…",
        scenarios: ["practice", "saving", "navigation"],
        examples: [
          "Sirve para practicar español todos los días.",
          "Sirve para guardar tus frases favoritas.",
          "Sirve para no perderte en la ciudad.",
        ],
        note: "Sirve para + infinitive — 'it serves to.' The purpose frame.",
      },
      {
        stem: "Se usa para…",
        english: "You use it to…",
        scenarios: ["transit", "translation", "coffee"],
        examples: [
          "Se usa para pagar en el metro.",
          "Se usa para traducir palabras rápido.",
          "Se usa para hacer café sin electricidad.",
        ],
      },
      {
        stem: "Funciona con…",
        english: "It works with/on…",
        scenarios: ["a phone", "coins", "patience"],
        examples: [
          "Funciona con el teléfono.",
          "Funciona con monedas nada más.",
          "Funciona con paciencia, más que nada.",
        ],
        note: "Nada más — 'nothing more,' Latin America's favorite way to say 'only.'",
      },
      {
        stem: "Primero tienes que…",
        english: "First you have to…",
        scenarios: ["an account", "a button", "waiting"],
        examples: [
          "Primero tienes que crear una cuenta.",
          "Primero tienes que apretar este botón.",
          "Primero tienes que dejar que se caliente.",
        ],
      },
      {
        stem: "Es fácil de…",
        english: "It's easy to…",
        scenarios: ["using", "learning", "finding"],
        examples: [
          "Es fácil de usar.",
          "Es fácil de aprender si practicas un poco.",
          "Es fácil de encontrar, está al lado de la estación.",
        ],
        note: "Fácil de + infinitive. The de is the grammar; the encouragement is the point.",
      },
    ],
  },
  {
    day: 47,
    theme: "It's Like…",
    subtitle: "Analogies — the explainer's best friend.",
    frames: [
      {
        stem: "Es como…",
        english: "It's like…",
        scenarios: ["a museum", "cilantro", "a puzzle"],
        examples: [
          "Es como un museo, pero al aire libre.",
          "Es como el cilantro: o lo amas o lo odias.",
          "Es como un rompecabezas que por fin tiene sentido.",
        ],
      },
      {
        stem: "Es parecido a…",
        english: "It's similar to…",
        scenarios: ["food", "English", "class"],
        examples: [
          "Es parecido a un crepe, pero más grueso.",
          "Es parecido al inglés en esta parte.",
          "Es parecido a lo que hacemos en clase.",
        ],
      },
      {
        stem: "Es un tipo de…",
        english: "It's a kind of…",
        scenarios: ["pastry", "wordplay", "dance"],
        examples: [
          "Es un tipo de pan dulce.",
          "Es un tipo de juego de palabras.",
          "Es un tipo de baile del Caribe.",
        ],
      },
      {
        stem: "Imagínate…",
        english: "Imagine…",
        scenarios: ["a tool library", "perfect fall", "jokes abroad"],
        examples: [
          "Imagínate una biblioteca, pero de herramientas.",
          "Imagínate el otoño perfecto: eso es octubre aquí.",
          "Imagínate explicar chistes en otro idioma.",
        ],
        note: "Imagínate — another warm tú command: put this in your head.",
      },
      {
        stem: "Es la versión … de…",
        english: "It's the … version of…",
        scenarios: ["cornbread", "a festival", "your routine"],
        examples: [
          "Es la versión dulce del pan de maíz.",
          "Es la versión pequeña de un festival.",
          "Es la versión en español de mi rutina de siempre.",
        ],
      },
    ],
  },
  {
    day: 48,
    theme: "Explaining Why",
    subtitle: "Because, that's why, the thing is.",
    frames: [
      {
        stem: "Porque…",
        english: "Because…",
        scenarios: ["the goal", "a walk", "Saturdays"],
        examples: [
          "Porque quiero pensar en español, no traducir.",
          "Porque me hace bien caminar un rato.",
          "Porque los sábados son para eso.",
        ],
      },
      {
        stem: "Por eso…",
        english: "That's why…",
        scenarios: ["the habit", "arriving early", "the barrio"],
        examples: [
          "Por eso practico un poco cada día.",
          "Por eso llegué temprano hoy.",
          "Por eso me gusta tanto este barrio.",
        ],
      },
      {
        stem: "Es que…",
        english: "The thing is…",
        scenarios: ["bad sleep", "a full train", "being Southern"],
        examples: [
          "Es que no dormí bien anoche.",
          "Es que el tren venía lleno.",
          "Es que soy del sur: el frío no es lo mío.",
        ],
        note: "Es que… — the great Spanish softener for explanations and excuses. Every conversation has one.",
      },
      {
        stem: "La razón es que…",
        english: "The reason is that…",
        scenarios: ["students", "location", "the old one"],
        examples: [
          "La razón es que quiero hablar con mis estudiantes.",
          "La razón es que me queda cerca del trabajo.",
          "La razón es que el otro estaba agotado.",
        ],
      },
      {
        stem: "Como…",
        english: "Since…",
        scenarios: ["no plans", "rain", "late"],
        examples: [
          "Como no tenía planes, dije que sí.",
          "Como llueve, mejor nos quedamos.",
          "Como ya era tarde, lo dejamos para mañana.",
        ],
        note: "Como at the start of a sentence = 'since.' Same word as 'like/how,' new job.",
      },
    ],
  },
  {
    day: 49,
    theme: "Repaso: Explaining",
    subtitle: "The week's frames, aimed at your real life.",
    frames: [
      {
        stem: "Se siente…",
        english: "It feels…",
        scenarios: ["speaking freely", "vacation", "progress"],
        examples: [
          "Se siente raro hablar sin miedo, pero me gusta.",
          "Se siente como el primer día de vacaciones.",
          "Se siente más fácil cada semana.",
        ],
      },
      {
        stem: "Siempre…",
        english: "Always…",
        scenarios: ["new words", "extra bread", "sad movies"],
        examples: [
          "Siempre encuentro una palabra nueva en este mercado.",
          "Siempre termino comprando pan de más.",
          "Siempre me pasa lo mismo con las películas tristes.",
        ],
      },
      {
        stem: "No es tan… como…",
        english: "It isn't as … as…",
        scenarios: ["price", "distance", "seriousness"],
        examples: [
          "No es tan caro como pensaba.",
          "No es tan lejos como parece en el mapa.",
          "No es tan serio como suena.",
        ],
      },
      {
        stem: "Es como…",
        english: "It's like…",
        scenarios: ["two lives", "a game", "coming home"],
        examples: [
          "Es como tener dos vidas en una ciudad.",
          "Es como un juego que por fin entiendo.",
          "Es como volver a casa por un camino nuevo.",
        ],
      },
      {
        stem: "Es que…",
        english: "The thing is…",
        scenarios: ["golden hour", "new words", "energy"],
        examples: [
          "Es que me encanta esa hora de la tarde.",
          "Es que las palabras nuevas me emocionan.",
          "Es que hoy amanecí con energía.",
        ],
      },
    ],
  },
  // ===== Week 8 — Consejos y ánimo / Advice & encouragement =====
  {
    day: 50,
    theme: "You Should…",
    subtitle: "Advice in the conditional — soft on purpose.",
    frames: [
      {
        stem: "Deberías…",
        english: "You should…",
        scenarios: ["rest", "a class", "directness"],
        examples: [
          "Deberías descansar un poco.",
          "Deberías probar la clase de baile.",
          "Deberías preguntarle directamente.",
        ],
        note: "Deberías — conditional of deber: softer than 'debes,' kinder than silence.",
      },
      {
        stem: "No deberías…",
        english: "You shouldn't…",
        scenarios: ["self-criticism", "overwork", "big decisions"],
        examples: [
          "No deberías ser tan dura contigo misma.",
          "No deberías trabajar hasta tan tarde.",
          "No deberías decidir eso hoy.",
        ],
      },
      {
        stem: "Podrías…",
        english: "You could…",
        scenarios: ["try first", "ask someone", "join us"],
        examples: [
          "Podrías intentarlo primero y decidir después.",
          "Podrías preguntarle a la directora.",
          "Podrías venir con nosotras el sábado.",
        ],
      },
      {
        stem: "Sería bueno…",
        english: "It would be good…",
        scenarios: ["in person", "gradually", "a second opinion"],
        examples: [
          "Sería bueno hablarlo en persona.",
          "Sería bueno empezar poco a poco.",
          "Sería bueno pedir una segunda opinión.",
        ],
      },
      {
        stem: "Te haría bien…",
        english: "It would do you good…",
        scenarios: ["going out", "an empty weekend", "talking"],
        examples: [
          "Te haría bien salir un rato.",
          "Te haría bien un fin de semana sin planes.",
          "Te haría bien hablar con alguien de esto.",
        ],
        note: "Te haría bien — 'it would do you good.' Conditional + care.",
      },
    ],
  },
  {
    day: 51,
    theme: "Why Don't You…?",
    subtitle: "Suggestions dressed as questions.",
    frames: [
      {
        stem: "¿Por qué no…?",
        english: "Why don't you / we…?",
        scenarios: ["retry", "together", "just ask"],
        examples: [
          "¿Por qué no lo intentas otra vez?",
          "¿Por qué no vamos juntas?",
          "¿Por qué no le preguntas y ya?",
        ],
      },
      {
        stem: "¿Has probado…?",
        english: "Have you tried…?",
        scenarios: ["study tricks", "food", "speaking alone"],
        examples: [
          "¿Has probado estudiar con música?",
          "¿Has probado el café de la esquina?",
          "¿Has probado hablar en voz alta cuando estás sola?",
        ],
      },
      {
        stem: "¿Qué tal si…?",
        english: "What if…?",
        scenarios: ["small starts", "Friday", "more people"],
        examples: [
          "¿Qué tal si empezamos con algo pequeño?",
          "¿Qué tal si lo dejamos para el viernes?",
          "¿Qué tal si invitamos a más gente?",
        ],
      },
      {
        stem: "¿Y si…?",
        english: "And what if…?",
        scenarios: ["the train", "writing first", "optimism"],
        examples: [
          "¿Y si tomamos el tren en vez de manejar?",
          "¿Y si le escribes primero?",
          "¿Y si resulta mejor de lo que crees?",
        ],
      },
      {
        stem: "A lo mejor puedes…",
        english: "Maybe you can…",
        scenarios: ["the schedule", "a neighbor", "both"],
        examples: [
          "A lo mejor puedes cambiar el horario.",
          "A lo mejor puedes practicar con tu vecina.",
          "A lo mejor puedes hacer las dos cosas.",
        ],
        note: "A lo mejor = maybe, in everyday Latin American speech — takes plain indicative, no subjunctive needed.",
      },
    ],
  },
  {
    day: 52,
    theme: "I Recommend…",
    subtitle: "Share what you love, specifically.",
    frames: [
      {
        stem: "Te recomiendo…",
        english: "I recommend (to you)…",
        scenarios: ["a market", "audio first", "going early"],
        examples: [
          "Te recomiendo el mercado de los sábados.",
          "Te recomiendo empezar por los audios.",
          "Te recomiendo ir temprano, se llena rápido.",
        ],
      },
      {
        stem: "Te va a encantar…",
        english: "You're going to love…",
        scenarios: ["a book", "the sound", "the ending"],
        examples: [
          "Te va a encantar este libro.",
          "Te va a encantar cómo suena en español.",
          "Te va a encantar el final, no digo más.",
        ],
      },
      {
        stem: "No te pierdas…",
        english: "Don't miss…",
        scenarios: ["a sunset", "an exhibit", "tacos"],
        examples: [
          "No te pierdas el atardecer desde el puente.",
          "No te pierdas la exposición nueva.",
          "No te pierdas los tacos del camión rojo.",
        ],
        note: "No te pierdas — another negative tú command: don't lose it for yourself.",
      },
      {
        stem: "Tienes que probar…",
        english: "You have to try…",
        scenarios: ["bread", "a dance class", "before leaving"],
        examples: [
          "Tienes que probar el pan de aquí.",
          "Tienes que probar la clase de salsa.",
          "Tienes que probar esto antes de irte.",
        ],
      },
      {
        stem: "Mi favorito es…",
        english: "My favorite is…",
        scenarios: ["chocolate", "a bookstore", "a season"],
        examples: [
          "Mi favorito es el de chocolate, sin duda.",
          "Mi favorita es la librería que está cerca del parque.",
          "Mi favorito es el otoño, con todo y lluvia.",
        ],
        note: "El de chocolate — 'the chocolate one.' De builds the 'one of' phrase.",
      },
    ],
  },
  {
    day: 53,
    theme: "If I Were You…",
    subtitle: "Advice from inside their shoes.",
    frames: [
      {
        stem: "Si yo fuera tú…",
        english: "If I were you…",
        scenarios: ["accepting", "worrying less", "today"],
        examples: [
          "Si yo fuera tú, aceptaría.",
          "Si yo fuera tú, no me preocuparía tanto.",
          "Si yo fuera tú, se lo diría hoy mismo.",
        ],
        note: "Fuera — past subjunctive of ser, frozen inside this classic phrase. Borrow it whole.",
      },
      {
        stem: "Yo en tu lugar…",
        english: "In your place, I…",
        scenarios: ["resting", "more time", "the call"],
        examples: [
          "Yo en tu lugar descansaría primero.",
          "Yo en tu lugar pediría más tiempo.",
          "Yo en tu lugar haría la llamada.",
        ],
      },
      {
        stem: "Yo que tú…",
        english: "If I were you (colloquial)…",
        scenarios: ["going", "not waiting", "celebrating"],
        examples: [
          "Yo que tú, iría.",
          "Yo que tú, no esperaría más.",
          "Yo que tú, lo celebraría en grande.",
        ],
        note: "Yo que tú — the street version of si yo fuera tú. Three words, same job.",
      },
      {
        stem: "Lo que yo haría es…",
        english: "What I would do is…",
        scenarios: ["asking first", "small steps", "sleeping on it"],
        examples: [
          "Lo que yo haría es preguntar primero.",
          "Lo que yo haría es dividirlo en pasos pequeños.",
          "Lo que yo haría es dormir y decidir mañana.",
        ],
      },
      {
        stem: "Yo empezaría por…",
        english: "I would start with…",
        scenarios: ["the easy part", "a list", "a conversation"],
        examples: [
          "Yo empezaría por lo más fácil.",
          "Yo empezaría por hacer una lista.",
          "Yo empezaría por hablar con ella.",
        ],
      },
    ],
  },
  {
    day: 54,
    theme: "One Must…",
    subtitle: "Life rules — nobody's name on them.",
    frames: [
      {
        stem: "Hay que…",
        english: "You have to / one must…",
        scenarios: ["daily practice", "arriving early", "trying it"],
        examples: [
          "Hay que practicar todos los días, aunque sea poquito.",
          "Hay que llegar temprano para encontrar mesa.",
          "Hay que probarlo para entenderlo.",
        ],
        note: "Hay que + infinitive — obligation with nobody's name on it.",
      },
      {
        stem: "No hay que…",
        english: "One shouldn't / no need to…",
        scenarios: ["perfectionism", "bring nothing", "lighten up"],
        examples: [
          "No hay que hacerlo perfecto, hay que hacerlo.",
          "No hay que traer nada, solo ganas.",
          "No hay que tomárselo tan en serio.",
        ],
      },
      {
        stem: "Lo importante es…",
        english: "The important thing is…",
        scenarios: ["not stopping", "being understood", "trying"],
        examples: [
          "Lo importante es no parar.",
          "Lo importante es entenderse, no la gramática perfecta.",
          "Lo importante es que lo intentaste.",
        ],
      },
      {
        stem: "No hace falta…",
        english: "There's no need to…",
        scenarios: ["reservations", "many words", "perfection"],
        examples: [
          "No hace falta reservar.",
          "No hace falta decir mucho, con estar ahí basta.",
          "No hace falta ser perfecta para empezar.",
        ],
        note: "No hace falta — 'it's not lacking' = no need. Permission, granted.",
      },
      {
        stem: "Con el tiempo…",
        english: "With time…",
        scenarios: ["fluency", "lighter loads", "even winter"],
        examples: [
          "Con el tiempo se vuelve natural.",
          "Con el tiempo todo pesa menos.",
          "Con el tiempo vas a extrañar hasta el invierno.",
        ],
      },
    ],
  },
  {
    day: 55,
    theme: "Teacher's Advice",
    subtitle: "What you tell students — now in Spanish, also for you.",
    frames: [
      {
        stem: "Intenta…",
        english: "Try…",
        scenarios: ["out loud", "again", "your own words"],
        examples: [
          "Intenta leerlo en voz alta primero.",
          "Intenta otra vez, sin prisa.",
          "Intenta explicármelo con tus palabras.",
        ],
      },
      {
        stem: "No tengas miedo de…",
        english: "Don't be afraid to…",
        scenarios: ["mistakes", "questions", "sounding strange"],
        examples: [
          "No tengas miedo de equivocarte.",
          "No tengas miedo de preguntar.",
          "No tengas miedo de sonar rara al principio.",
        ],
        note: "No tengas — negative tú command of tener. The advice every language learner needs on a card.",
      },
      {
        stem: "Recuerda que…",
        english: "Remember that…",
        scenarios: ["progress", "everyone starts", "listening counts"],
        examples: [
          "Recuerda que ya sabes más que ayer.",
          "Recuerda que todos empezamos desde cero.",
          "Recuerda que entender también cuenta.",
        ],
      },
      {
        stem: "Poco a poco…",
        english: "Little by little…",
        scenarios: ["far", "steady", "the ear"],
        examples: [
          "Poco a poco se llega lejos.",
          "Poco a poco, pero sin parar.",
          "Poco a poco el oído se acostumbra.",
        ],
        note: "Poco a poco — the unofficial motto of every language learner who made it.",
      },
      {
        stem: "Confía en…",
        english: "Trust…",
        scenarios: ["your ear", "the process", "your practice"],
        examples: [
          "Confía en tu oído.",
          "Confía en el proceso, aunque no lo veas.",
          "Confía en lo que ya has practicado.",
        ],
      },
    ],
  },
  {
    day: 56,
    theme: "Repaso: Advice",
    subtitle: "Advise like a friend, not a judge.",
    frames: [
      {
        stem: "Deberías…",
        english: "You should…",
        scenarios: ["your progress", "a day off", "a song"],
        examples: [
          "Deberías escucharte hablando ahora — has mejorado muchísimo.",
          "Deberías tomarte el viernes libre.",
          "Deberías enseñarle esa canción a tu clase.",
        ],
      },
      {
        stem: "¿Has probado…?",
        english: "Have you tried…?",
        scenarios: ["thinking-while-walking", "new soup", "write then say"],
        examples: [
          "¿Has probado pensar en español mientras caminas?",
          "¿Has probado la sopa del lugar nuevo?",
          "¿Has probado escribirlo primero y decirlo después?",
        ],
      },
      {
        stem: "Tienes que probar…",
        english: "You have to try…",
        scenarios: ["mango con chile", "the river route", "five minutes"],
        examples: [
          "Tienes que probar el mango con chile.",
          "Tienes que probar la ruta por el río.",
          "Tienes que probar esto: cinco minutos y ya.",
        ],
      },
      {
        stem: "Yo que tú…",
        english: "If I were you…",
        scenarios: ["save the phrase", "arrive early", "say yes"],
        examples: [
          "Yo que tú, guardaría esa frase en el cuaderno.",
          "Yo que tú, llegaría media hora antes.",
          "Yo que tú, diría que sí sin pensarlo.",
        ],
      },
      {
        stem: "No tengas miedo de…",
        english: "Don't be afraid to…",
        scenarios: ["speaking first", "asking again", "sounding new"],
        examples: [
          "No tengas miedo de hablar primero.",
          "No tengas miedo de pedir que te repitan.",
          "No tengas miedo de sonar como principiante: eso pasa.",
        ],
      },
    ],
  },
  // ===== Week 9 — Hacer planes juntos / Making plans together =====
  {
    day: 57,
    theme: "Proposing",
    subtitle: "Float the idea. Someone has to.",
    frames: [
      {
        stem: "¿Te parece si…?",
        english: "How about if…?",
        scenarios: ["Thursday", "over coffee", "ten o'clock"],
        examples: [
          "¿Te parece si nos vemos el jueves?",
          "¿Te parece si lo hablamos con un café?",
          "¿Te parece si empezamos a las diez?",
        ],
        note: "¿Te parece si…? — 'does it seem right to you if…' Consent built into the grammar.",
      },
      {
        stem: "¿Qué te parece…?",
        english: "What do you think of…?",
        scenarios: ["a morning", "the plan", "a picnic"],
        examples: [
          "¿Qué te parece el sábado por la mañana?",
          "¿Qué te parece el plan?",
          "¿Qué te parece un picnic en el parque?",
        ],
      },
      {
        stem: "Podemos…",
        english: "We can…",
        scenarios: ["after work", "bring food", "improvise"],
        examples: [
          "Podemos vernos después del trabajo.",
          "Podemos llevar algo de comer.",
          "Podemos decidir sobre la marcha.",
        ],
        note: "Sobre la marcha — 'on the march' = as we go. For plans that prefer freedom.",
      },
      {
        stem: "¿Hacemos…?",
        english: "Shall we…?",
        scenarios: ["the weekend", "a list", "half and half"],
        examples: [
          "¿Hacemos algo este fin de semana?",
          "¿Hacemos una lista antes de ir?",
          "¿Hacemos la mitad hoy y la mitad mañana?",
        ],
        note: "Present tense as proposal: ¿hacemos…? = shall we?",
      },
      {
        stem: "Tengo una idea:…",
        english: "I have an idea:…",
        scenarios: ["breakfast first", "a class", "an exchange"],
        examples: [
          "Tengo una idea: desayuno y después el mercado.",
          "Tengo una idea: clase de cocina juntas.",
          "Tengo una idea: te enseño inglés y me enseñas español.",
        ],
      },
    ],
  },
  {
    day: 58,
    theme: "When & Where",
    subtitle: "Pin it down — time, place, day.",
    frames: [
      {
        stem: "Quedamos a las…",
        english: "Let's meet at (time)…",
        scenarios: ["six", "nine", "lunch"],
        examples: [
          "Quedamos a las seis en la entrada.",
          "Quedamos a las nueve, ¿te parece?",
          "Quedamos a la una para almorzar.",
        ],
        note: "Quedar = to arrange to meet. Quedamos a las seis — deal sealed.",
      },
      {
        stem: "Nos vemos en…",
        english: "See you at (place)…",
        scenarios: ["the station", "the usual café", "the movies"],
        examples: [
          "Nos vemos en la estación.",
          "Nos vemos en el café de siempre.",
          "Nos vemos en la puerta del cine.",
        ],
      },
      {
        stem: "¿Te queda bien…?",
        english: "Does … work for you?",
        scenarios: ["Tuesday", "five o'clock", "my neighborhood"],
        examples: [
          "¿Te queda bien el martes?",
          "¿Te queda bien a las cinco?",
          "¿Te queda bien por mi barrio?",
        ],
        note: "Quedar again, third job: quedarle bien a alguien = to suit someone.",
      },
      {
        stem: "Mejor el…",
        english: "Better on (day)…",
        scenarios: ["Sunday", "Thursday", "whatever's easy"],
        examples: [
          "Mejor el domingo, sin prisa.",
          "Mejor el jueves; el miércoles tengo clase.",
          "Mejor el que te quede más fácil.",
        ],
      },
      {
        stem: "¿A qué hora te viene bien?",
        english: "What time works for you?",
        scenarios: ["open question", "starting", "flexible"],
        examples: [
          "¿A qué hora te viene bien?",
          "¿A qué hora te viene bien empezar?",
          "¿A qué hora te viene bien? Yo estoy libre toda la tarde.",
        ],
        note: "Venir bien — to come well = to suit. The scheduling verb you'll use weekly.",
      },
    ],
  },
  {
    day: 59,
    theme: "Availability",
    subtitle: "When you can — and when you can't.",
    frames: [
      {
        stem: "Me viene bien…",
        english: "… works for me",
        scenarios: ["Saturday", "later", "almost any day"],
        examples: [
          "Me viene bien el sábado.",
          "Me viene bien más tarde, como a las siete.",
          "Me viene bien cualquier día menos el lunes.",
        ],
      },
      {
        stem: "No me viene bien…",
        english: "… doesn't work for me",
        scenarios: ["this week", "so early", "downtown"],
        examples: [
          "No me viene bien esta semana, ¿la próxima?",
          "No me viene bien tan temprano.",
          "No me viene bien el centro, mejor por acá.",
        ],
      },
      {
        stem: "Estoy libre…",
        english: "I'm free…",
        scenarios: ["Friday", "after four", "the whole weekend"],
        examples: [
          "Estoy libre el viernes por la tarde.",
          "Estoy libre después de las cuatro.",
          "Estoy libre todo el fin de semana, milagrosamente.",
        ],
      },
      {
        stem: "Tengo un compromiso…",
        english: "I have a commitment…",
        scenarios: ["Thursday", "family", "unmovable"],
        examples: [
          "Tengo un compromiso el jueves, pero el viernes sí puedo.",
          "Tengo un compromiso familiar ese día.",
          "Tengo un compromiso que no puedo mover.",
        ],
        note: "Compromiso — commitment, not 'compromise.' Another false friend defused.",
      },
      {
        stem: "Puedo a partir de…",
        english: "I can from … on",
        scenarios: ["five o'clock", "Wednesday", "next week"],
        examples: [
          "Puedo a partir de las cinco.",
          "Puedo a partir del miércoles.",
          "Puedo a partir de la próxima semana.",
        ],
        note: "A partir de — from … onward. Precise and useful daily.",
      },
    ],
  },
  {
    day: 60,
    theme: "Inviting",
    subtitle: "An invitation is an open door.",
    frames: [
      {
        stem: "¿Vienes a…?",
        english: "Are you coming to…?",
        scenarios: ["dinner", "a walk", "the festival"],
        examples: [
          "¿Vienes a la cena del viernes?",
          "¿Vienes a caminar con nosotras?",
          "¿Vienes a la escuela para el festival?",
        ],
      },
      {
        stem: "Te invito a…",
        english: "Let me treat you to…",
        scenarios: ["coffee", "dinner at home", "a concert"],
        examples: [
          "Te invito a un café.",
          "Te invito a cenar a la casa.",
          "Te invito al concierto, tengo dos boletos.",
        ],
        note: "Te invito a… means you're paying — the invitation and the treat are one verb.",
      },
      {
        stem: "Va a haber…",
        english: "There's going to be…",
        scenarios: ["food", "live music", "good people"],
        examples: [
          "Va a haber comida de sobra.",
          "Va a haber música en vivo.",
          "Va a haber gente muy querida.",
        ],
        note: "Va a haber — the future of hay. Still never changes for plural.",
      },
      {
        stem: "Trae a…",
        english: "Bring (someone)…",
        scenarios: ["a sister", "anyone", "the dog"],
        examples: [
          "Trae a tu hermana si quiere venir.",
          "Trae a quien quieras.",
          "Trae a tu perro, es bienvenido.",
        ],
      },
      {
        stem: "Avísame si…",
        english: "Let me know if…",
        scenarios: ["you can come", "you change your mind", "you need directions"],
        examples: [
          "Avísame si puedes venir.",
          "Avísame si cambias de opinión.",
          "Avísame si necesitas la dirección.",
        ],
        note: "Avísame — 'advise me': the everyday way to say keep me posted.",
      },
    ],
  },
  {
    day: 61,
    theme: "Changing Plans",
    subtitle: "Plans move; the affection doesn't.",
    frames: [
      {
        stem: "¿Podemos dejarlo para…?",
        english: "Can we leave it for…?",
        scenarios: ["Sunday", "next week", "a calmer time"],
        examples: [
          "¿Podemos dejarlo para el domingo?",
          "¿Podemos dejarlo para la próxima semana?",
          "¿Podemos dejarlo para cuando estés menos ocupada?",
        ],
      },
      {
        stem: "Se me complicó…",
        english: "Things got complicated for me…",
        scenarios: ["the day", "work", "the afternoon"],
        examples: [
          "Se me complicó el día, perdón.",
          "Se me complicó con el trabajo.",
          "Se me complicó la tarde: ¿lo movemos?",
        ],
        note: "Se me complicó — the day did it to you; Spanish spares you the blame again.",
      },
      {
        stem: "¿Lo movemos a…?",
        english: "Shall we move it to…?",
        scenarios: ["seven", "Tuesday", "your side of town"],
        examples: [
          "¿Lo movemos a las siete?",
          "¿Lo movemos al martes?",
          "¿Lo movemos a tu barrio esta vez?",
        ],
      },
      {
        stem: "Perdón por avisar tarde…",
        english: "Sorry for the late notice…",
        scenarios: ["not making it", "checking in", "canceling"],
        examples: [
          "Perdón por avisar tarde, no voy a llegar.",
          "Perdón por avisar tarde, ¿sigue en pie el plan?",
          "Perdón por avisar tarde: hoy no puedo.",
        ],
        note: "¿Sigue en pie? — 'is it still standing?' The idiom for is-it-still-on.",
      },
      {
        stem: "Otro día sin falta…",
        english: "Another day, without fail…",
        scenarios: ["a promise", "your treat", "their pick"],
        examples: [
          "Otro día sin falta, te lo prometo.",
          "Otro día sin falta, y yo invito.",
          "Otro día sin falta: elige tú la fecha.",
        ],
      },
    ],
  },
  {
    day: 62,
    theme: "Confirming",
    subtitle: "A confirmed plan is already half a memory.",
    frames: [
      {
        stem: "Entonces quedamos así:…",
        english: "So it's settled:…",
        scenarios: ["day and time", "who brings what", "final"],
        examples: [
          "Entonces quedamos así: el sábado a las diez.",
          "Entonces quedamos así: tú traes el postre.",
          "Entonces quedamos así, ¿va?",
        ],
        note: "¿Va? — 'does it go?' A one-word deal-sealer across Latin America.",
      },
      {
        stem: "Confirmado…",
        english: "Confirmed…",
        scenarios: ["see you there", "reservation", "tickets"],
        examples: [
          "Confirmado, ahí nos vemos.",
          "Confirmado: reservé para cuatro.",
          "Confirmado, ya compré los boletos.",
        ],
      },
      {
        stem: "Ahí estaré…",
        english: "I'll be there…",
        scenarios: ["punctual", "at eight", "don't start"],
        examples: [
          "Ahí estaré, puntual como siempre.",
          "Ahí estaré a las ocho.",
          "Ahí estaré, no empiecen sin mí.",
        ],
        note: "Estaré — plain future tense; rarer in speech, perfect for promises.",
      },
      {
        stem: "Nos vemos el…",
        english: "See you on…",
        scenarios: ["Thursday", "the fifteenth", "festival day"],
        examples: [
          "Nos vemos el jueves entonces.",
          "Nos vemos el quince en la mañana.",
          "Nos vemos el día del festival.",
        ],
      },
      {
        stem: "Cualquier cosa, me escribes…",
        english: "If anything comes up, text me…",
        scenarios: ["the basic", "problem-solving", "fast replies"],
        examples: [
          "Cualquier cosa, me escribes.",
          "Cualquier cosa, me escribes y lo resolvemos.",
          "Cualquier cosa, me escribes; contesto rápido.",
        ],
        note: "Cualquier cosa — 'any thing' — the all-purpose safety net at the end of every plan.",
      },
    ],
  },
  {
    day: 63,
    theme: "Repaso: Plans",
    subtitle: "Idea → time → yes/no → invite → sealed.",
    frames: [
      {
        stem: "Tengo una idea:…",
        english: "I have an idea:…",
        scenarios: ["market + café", "movies", "cooking in"],
        examples: [
          "Tengo una idea: mercado primero, café después.",
          "Tengo una idea: cine en español con subtítulos.",
          "Tengo una idea: cocinamos en vez de salir.",
        ],
      },
      {
        stem: "Quedamos a las…",
        english: "Let's meet at (time)…",
        scenarios: ["Sunday-late", "the park", "straight from work"],
        examples: [
          "Quedamos a las once, que es domingo.",
          "Quedamos a las cuatro en el parque de siempre.",
          "Quedamos a las ocho; llego directo del trabajo.",
        ],
      },
      {
        stem: "No me viene bien…",
        english: "… doesn't work for me",
        scenarios: ["today", "weeknights", "that café"],
        examples: [
          "No me viene bien hoy, de verdad lo siento.",
          "No me viene bien tan tarde entre semana.",
          "No me viene bien ese café; ¿el otro?",
        ],
      },
      {
        stem: "¿Vienes a…?",
        english: "Are you coming to…?",
        scenarios: ["a reading", "meeting friends", "the fair"],
        examples: [
          "¿Vienes a la lectura de poesía el jueves?",
          "¿Vienes a conocer a mis amigos?",
          "¿Vienes a la feria del barrio conmigo?",
        ],
      },
      {
        stem: "Entonces quedamos así:…",
        english: "So it's settled:…",
        scenarios: ["who brings what", "check in Friday", "no more changes"],
        examples: [
          "Entonces quedamos así: yo llevo el café, tú los cuentos.",
          "Entonces quedamos así: nos escribimos el viernes.",
          "Entonces quedamos así y no se cambia más.",
        ],
      },
    ],
  },
  // ===== Week 10 — Opiniones con matices / Opinions with nuance =====
  {
    day: 64,
    theme: "Both Sides",
    subtitle: "On one hand, on the other.",
    frames: [
      {
        stem: "Por un lado…",
        english: "On one hand…",
        scenarios: ["missing home", "liking a plan", "an idea"],
        examples: [
          "Por un lado, extraño Atlanta.",
          "Por un lado, el plan suena perfecto.",
          "Por un lado, me encanta la idea.",
        ],
      },
      {
        stem: "Por otro lado…",
        english: "On the other hand…",
        scenarios: ["life here", "time limits", "never tried"],
        examples: [
          "Por otro lado, mi vida está aquí ahora.",
          "Por otro lado, no tenemos mucho tiempo.",
          "Por otro lado, nunca lo hemos intentado.",
        ],
      },
      {
        stem: "Lo bueno es que…",
        english: "The good thing is…",
        scenarios: ["flexible dates", "close by", "lessons learned"],
        examples: [
          "Lo bueno es que se puede cambiar la fecha.",
          "Lo bueno es que queda cerca.",
          "Lo bueno es que aprendí algo, hasta del error.",
        ],
      },
      {
        stem: "Lo malo es que…",
        english: "The bad thing is…",
        scenarios: ["early closing", "reservations", "summer ending"],
        examples: [
          "Lo malo es que cierra temprano.",
          "Lo malo es que hay que reservar con meses.",
          "Lo malo es que el verano se acaba.",
        ],
      },
      {
        stem: "Al mismo tiempo…",
        english: "At the same time…",
        scenarios: ["their point", "no rush", "both true"],
        examples: [
          "Al mismo tiempo, entiendo su punto.",
          "Al mismo tiempo, no quiero apurarme.",
          "Al mismo tiempo, las dos cosas son ciertas.",
        ],
        note: "Las dos cosas son ciertas — the sentence that ends most arguments kindly.",
      },
    ],
  },
  {
    day: 65,
    theme: "Maybe",
    subtitle: "Quizás, tal vez — room to think.",
    frames: [
      {
        stem: "Puede ser que…",
        english: "It may be that…",
        scenarios: ["they're right", "rain", "too soon"],
        examples: [
          "Puede ser que tengas razón.",
          "Puede ser que llueva más tarde.",
          "Puede ser que sea demasiado pronto para saber.",
        ],
        note: "Puede ser que + subjunctive (tengas, llueva, sea). Borrow these three whole — the pattern comes in invierno.",
      },
      {
        stem: "Quizás…",
        english: "Perhaps…",
        scenarios: ["courage", "time", "a re-listen"],
        examples: [
          "Quizás me animo y pregunto.",
          "Quizás es cuestión de tiempo.",
          "Quizás necesito escucharlo otra vez.",
        ],
        note: "Animarse — to work up the nerve. The learner's most important reflexive verb.",
      },
      {
        stem: "Tal vez…",
        english: "Maybe…",
        scenarios: ["next year", "undecided", "a re-listen"],
        examples: [
          "Tal vez el año que viene.",
          "Tal vez sí, tal vez no — todavía no sé.",
          "Tal vez necesito caminar y pensarlo.",
        ],
      },
      {
        stem: "Es posible que…",
        english: "It's possible that…",
        scenarios: ["changing minds", "another way", "staying"],
        examples: [
          "Es posible que cambie de opinión.",
          "Es posible que haya otra manera.",
          "Es posible que me quede un año más.",
        ],
      },
      {
        stem: "Seguramente…",
        english: "Surely / most likely…",
        scenarios: ["an explanation", "forgetfulness", "good endings"],
        examples: [
          "Seguramente hay una explicación.",
          "Seguramente se le olvidó, no es nada personal.",
          "Seguramente va a salir bien.",
        ],
      },
    ],
  },
  {
    day: 66,
    theme: "I Don't Think So",
    subtitle: "Doubt flips the grammar — borrow the chunks.",
    frames: [
      {
        stem: "No creo que…",
        english: "I don't think that…",
        scenarios: ["severity", "timing", "reservations"],
        examples: [
          "No creo que sea tan grave.",
          "No creo que llegue a tiempo.",
          "No creo que haga falta reservar.",
        ],
        note: "Creo que takes normal verbs; no creo que flips to subjunctive (sea, llegue, haga). Doubt changes the grammar.",
      },
      {
        stem: "Dudo que…",
        english: "I doubt that…",
        scenarios: ["opening hours", "coincidence", "intent"],
        examples: [
          "Dudo que abran tan temprano.",
          "Dudo que sea coincidencia.",
          "Dudo que lo hayan hecho a propósito.",
        ],
      },
      {
        stem: "No me parece que…",
        english: "It doesn't seem to me that…",
        scenarios: ["fairness", "readiness", "arguing"],
        examples: [
          "No me parece que sea justo.",
          "No me parece que esté listo todavía.",
          "No me parece que valga la pena discutir.",
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that…",
        scenarios: ["wanting", "difficulty", "bothering"],
        examples: [
          "No es que no quiera, es que no puedo.",
          "No es que sea difícil, es que es nuevo.",
          "No es que me moleste, pero pregunto.",
        ],
        note: "No es que… es que… — deny the wrong reading, give the right one. Peak conversational Spanish.",
      },
      {
        stem: "No estoy convencida de que…",
        english: "I'm not convinced that…",
        scenarios: ["the best option", "how it works", "deciding now"],
        examples: [
          "No estoy convencida de que sea la mejor opción.",
          "No estoy convencida de que funcione así.",
          "No estoy convencida de que haya que decidir ya.",
        ],
      },
    ],
  },
  {
    day: 67,
    theme: "Nuancing",
    subtitle: "Up to a point, more like, let's say.",
    frames: [
      {
        stem: "Hasta cierto punto…",
        english: "Up to a point…",
        scenarios: ["agreement", "truth", "shared blame"],
        examples: [
          "Hasta cierto punto, estoy de acuerdo.",
          "Hasta cierto punto, es verdad.",
          "Hasta cierto punto, todos tenemos la culpa.",
        ],
      },
      {
        stem: "En general…, pero…",
        english: "In general…, but…",
        scenarios: ["moods", "the neighborhood", "it depends"],
        examples: [
          "En general me gusta, pero hoy no.",
          "En general es tranquilo, pero los viernes no tanto.",
          "En general sí, pero depende del día.",
        ],
      },
      {
        stem: "Más bien…",
        english: "Rather / more like…",
        scenarios: ["a misunderstanding", "habit", "luck"],
        examples: [
          "Más bien fue un malentendido.",
          "Más bien es cuestión de costumbre.",
          "Más bien diría que fue suerte.",
        ],
        note: "Más bien — 'rather.' A gentle steering wheel for conversations.",
      },
      {
        stem: "No tanto… sino…",
        english: "Not so much… but rather…",
        scenarios: ["money vs time", "grammar vs confidence", "cold vs wind"],
        examples: [
          "No tanto por el dinero, sino por el tiempo.",
          "No tanto la gramática, sino la confianza.",
          "No tanto el frío, sino el viento.",
        ],
        note: "Sino — the 'but' of corrections. Pero contrasts; sino replaces.",
      },
      {
        stem: "Digamos que…",
        english: "Let's say…",
        scenarios: ["a rough day", "a tie", "kitchen incidents"],
        examples: [
          "Digamos que no fue mi mejor día.",
          "Digamos que quedamos en empate.",
          "Digamos que el pastel no sobrevivió al viaje.",
        ],
      },
    ],
  },
  {
    day: 68,
    theme: "According To…",
    subtitle: "Name your sources — even when it's your neighbor.",
    frames: [
      {
        stem: "Según…",
        english: "According to…",
        scenarios: ["a neighbor", "the news", "your mom"],
        examples: [
          "Según mi vecina, el mejor pan sale a las ocho.",
          "Según las noticias, va a hacer calor toda la semana.",
          "Según mi mamá, siempre hay tiempo para llamar.",
        ],
      },
      {
        stem: "Dicen que…",
        english: "They say that…",
        scenarios: ["the seasons", "a restaurant", "study habits"],
        examples: [
          "Dicen que el otoño llega temprano este año.",
          "Dicen que ese restaurante es buenísimo.",
          "Dicen que hablar solo es señal de buen estudiante.",
        ],
      },
      {
        stem: "He leído que…",
        english: "I've read that…",
        scenarios: ["sleep science", "city news", "book vs movie"],
        examples: [
          "He leído que dormir bien ayuda con los idiomas.",
          "He leído que la ciudad va a arreglar el parque.",
          "He leído que el libro es mejor que la película.",
        ],
      },
      {
        stem: "Por lo que entiendo…",
        english: "From what I understand…",
        scenarios: ["a date", "sign-ups", "nothing decided"],
        examples: [
          "Por lo que entiendo, el cambio es en septiembre.",
          "Por lo que entiendo, no hace falta inscribirse.",
          "Por lo que entiendo, todavía no hay nada decidido.",
        ],
        note: "Por lo que entiendo — claims exactly as much as you know, no more.",
      },
      {
        stem: "En mi experiencia…",
        english: "In my experience…",
        scenarios: ["laughter", "daily practice", "kind strangers"],
        examples: [
          "En mi experiencia, los estudiantes aprenden más riéndose.",
          "En mi experiencia, quince minutos diarios ganan.",
          "En mi experiencia, la gente quiere ayudar.",
        ],
      },
    ],
  },
  {
    day: 69,
    theme: "Your Take, Calmly",
    subtitle: "An opinion without an apology.",
    frames: [
      {
        stem: "Desde mi punto de vista…",
        english: "From my point of view…",
        scenarios: ["worth trying", "the real problem", "on track"],
        examples: [
          "Desde mi punto de vista, vale la pena intentarlo.",
          "Desde mi punto de vista, el problema es otro.",
          "Desde mi punto de vista, vamos bien.",
        ],
      },
      {
        stem: "Siendo honesta…",
        english: "Being honest…",
        scenarios: ["unconvinced", "a little scared", "staying in"],
        examples: [
          "Siendo honesta, no me convence.",
          "Siendo honesta, me da un poco de miedo.",
          "Siendo honesta, prefiero quedarme en casa hoy.",
        ],
        note: "Me da miedo — 'it gives me fear.' Feelings arrive via dar in Spanish.",
      },
      {
        stem: "Lo veo así:…",
        english: "The way I see it:…",
        scenarios: ["opportunity", "asking", "every sentence"],
        examples: [
          "Lo veo así: es una oportunidad, no una amenaza.",
          "Lo veo así: si no pregunto, nunca voy a saber.",
          "Lo veo así: cada frase cuenta.",
        ],
      },
      {
        stem: "Al final de cuentas…",
        english: "At the end of the day…",
        scenarios: ["your call", "what matters", "nobody's perfect"],
        examples: [
          "Al final de cuentas, es mi decisión.",
          "Al final de cuentas, lo que importa es la gente.",
          "Al final de cuentas, nadie lo hace perfecto.",
        ],
        note: "Al final de cuentas — 'at the end of the accounts.' Where opinions cash out.",
      },
      {
        stem: "Puede que sí, pero…",
        english: "Maybe so, but…",
        scenarios: ["seeing first", "not today", "second opinions"],
        examples: [
          "Puede que sí, pero quiero verlo primero.",
          "Puede que sí, pero no hoy.",
          "Puede que sí, pero me gustaría otra opinión.",
        ],
      },
    ],
  },
  {
    day: 70,
    theme: "Repaso: Nuance",
    subtitle: "Think out loud, the way you actually think.",
    frames: [
      {
        stem: "Lo bueno es que…",
        english: "The good thing is…",
        scenarios: ["Friday", "asking for help", "fixable"],
        examples: [
          "Lo bueno es que mañana es viernes.",
          "Lo bueno es que ya sé pedir ayuda en español.",
          "Lo bueno es que el error se arregla fácil.",
        ],
      },
      {
        stem: "Tal vez…",
        english: "Maybe…",
        scenarios: ["small changes", "walking", "overthinking"],
        examples: [
          "Tal vez es hora de un cambio pequeño.",
          "Tal vez la respuesta llega caminando.",
          "Tal vez exagero, pero mejor preguntar.",
        ],
      },
      {
        stem: "No es que…",
        english: "It's not that…",
        scenarios: ["style", "hurry", "early starts"],
        examples: [
          "No es que no me guste, es que no es mi estilo.",
          "No es que tenga prisa, es que quiero llegar con calma.",
          "No es que sea tarde, es que empezamos temprano.",
        ],
      },
      {
        stem: "Digamos que…",
        english: "Let's say…",
        scenarios: ["that meeting", "first attempts", "almost Friday"],
        examples: [
          "Digamos que la reunión pudo ser un correo.",
          "Digamos que mi primer intento no salió como en el video.",
          "Digamos que ya casi es fin de semana.",
        ],
      },
      {
        stem: "Según…",
        english: "According to…",
        scenarios: ["your students", "the forecast", "yourself"],
        examples: [
          "Según mis estudiantes, mi español va mejorando.",
          "Según el pronóstico, mañana sí sale el sol.",
          "Según yo, ya estamos listas.",
        ],
        note: "Según yo — 'according to me': playful, self-aware, very spoken.",
      },
    ],
  },
  // ===== Week 11 — Resolver problemas / Fixing problems =====
  {
    day: 71,
    theme: "Something's Broken",
    subtitle: "Naming the problem is half the fix.",
    frames: [
      {
        stem: "No funciona…",
        english: "… isn't working",
        scenarios: ["wifi", "a button", "as it should"],
        examples: [
          "No funciona el wifi otra vez.",
          "No funciona el botón de guardar.",
          "No funciona como debería.",
        ],
      },
      {
        stem: "Está roto/a…",
        english: "… is broken",
        scenarios: ["the printer", "a zipper", "the coffee machine"],
        examples: [
          "Está rota la impresora de la escuela.",
          "Está roto el cierre de mi mochila.",
          "Está rota la máquina de café — emergencia real.",
        ],
        note: "Roto/rota agrees with the broken thing. Some things never change, in any country.",
      },
      {
        stem: "No prende…",
        english: "… won't turn on",
        scenarios: ["the computer", "a light", "after checking"],
        examples: [
          "No prende la computadora.",
          "No prende la luz del pasillo.",
          "No prende y ya revisé el cable.",
        ],
        note: "Prender = to turn on, in most of Latin America. In Spain: encender.",
      },
      {
        stem: "Se descompuso…",
        english: "… broke down",
        scenarios: ["the dishwasher", "the train", "worst timing"],
        examples: [
          "Se descompuso el lavaplatos.",
          "Se descompuso el tren y llegué tarde.",
          "Se descompuso justo cuando más lo necesitaba.",
        ],
        note: "Descomponerse — Latin America's word for machines giving up. In Spain: estropearse.",
      },
      {
        stem: "Deja de funcionar cuando…",
        english: "It stops working when…",
        scenarios: ["too many tabs", "heat", "the projector"],
        examples: [
          "Deja de funcionar cuando abro muchas pestañas.",
          "Deja de funcionar cuando hace mucho calor.",
          "Deja de funcionar cuando lo conecto al proyector.",
        ],
        note: "Dejar de + infinitive — to stop doing. These are your repro steps, en español.",
      },
    ],
  },
  {
    day: 72,
    theme: "Polite Complaints (usted)",
    subtitle: "You can complain and stay kind.",
    frames: [
      {
        stem: "Disculpe, …",
        english: "Excuse me, … (usted)",
        scenarios: ["a bill", "a wait", "getting attention"],
        examples: [
          "Disculpe, creo que hay un error en la cuenta.",
          "Disculpe, pedí esto hace media hora.",
          "Disculpe, ¿me puede atender cuando pueda?",
        ],
        note: "Disculpe (usted) opens every polite complaint. Disculpa is the tú version, for friends.",
      },
      {
        stem: "Hubo un problema con…",
        english: "There was a problem with…",
        scenarios: ["a reservation", "a payment", "a delivery"],
        examples: [
          "Hubo un problema con mi reserva.",
          "Hubo un problema con el pago.",
          "Hubo un problema con la entrega.",
        ],
        note: "Hubo — the preterite of hay. One-time event: there was.",
      },
      {
        stem: "Creo que hay un error en…",
        english: "I think there's a mistake in…",
        scenarios: ["an invoice", "an order", "a date"],
        examples: [
          "Creo que hay un error en la factura.",
          "Creo que hay un error en mi pedido.",
          "Creo que hay un error en la fecha.",
        ],
      },
      {
        stem: "Pedí… pero…",
        english: "I ordered… but…",
        scenarios: ["decaf", "sizes", "quantities"],
        examples: [
          "Pedí un café descafeinado, pero creo que este no lo es.",
          "Pedí la talla mediana, pero me llegó la grande.",
          "Pedí dos, pero solo llegó uno.",
        ],
      },
      {
        stem: "¿Me puede ayudar con…?",
        english: "Can you help me with…? (usted)",
        scenarios: ["this", "a seat change", "a form"],
        examples: [
          "¿Me puede ayudar con esto, por favor?",
          "¿Me puede ayudar con un cambio de asiento?",
          "¿Me puede ayudar con el formulario? No entiendo esta parte.",
        ],
      },
    ],
  },
  {
    day: 73,
    theme: "Misunderstandings",
    subtitle: "Crossed wires, uncrossed by talking.",
    frames: [
      {
        stem: "Creo que nos entendimos mal…",
        english: "I think we misunderstood each other…",
        scenarios: ["the time", "the topic", "no harm done"],
        examples: [
          "Creo que nos entendimos mal con la hora.",
          "Creo que nos entendimos mal, yo hablaba de otra cosa.",
          "Creo que nos entendimos mal y no pasa nada.",
        ],
        note: "Nos entendimos mal — we understood each other badly. Mutual, blameless.",
      },
      {
        stem: "No quise decir eso…",
        english: "I didn't mean that…",
        scenarios: ["apologizing", "a bad phrasing", "emphatically"],
        examples: [
          "No quise decir eso, perdón.",
          "No quise decir eso; me salió mal la frase.",
          "No quise decir eso para nada.",
        ],
        note: "Quise — preterite of querer: no quise decir = I didn't mean. Meaning-changing preterite again.",
      },
      {
        stem: "Lo que quería decir es…",
        english: "What I meant was…",
        scenarios: ["a compliment", "something else", "yes, but later"],
        examples: [
          "Lo que quería decir es que me encanta la idea.",
          "Lo que quería decir es otra cosa.",
          "Lo que quería decir es que sí, pero más tarde.",
        ],
      },
      {
        stem: "Pensé que habías dicho…",
        english: "I thought you'd said…",
        scenarios: ["a day", "coming", "the opposite"],
        examples: [
          "Pensé que habías dicho el martes.",
          "Pensé que habías dicho que venías.",
          "Pensé que habías dicho lo contrario.",
        ],
        note: "Habías dicho — past perfect: what you 'had said' before the wires crossed.",
      },
      {
        stem: "Empecemos de nuevo…",
        english: "Let's start over…",
        scenarios: ["an offer", "both sides", "from the top"],
        examples: [
          "Empecemos de nuevo, ¿te parece?",
          "Empecemos de nuevo: yo decía una cosa y tú otra.",
          "Empecemos de nuevo desde el principio.",
        ],
        note: "Empecemos — a nosotros command: let's start. Repair, offered as a team.",
      },
    ],
  },
  {
    day: 74,
    theme: "Lost Things",
    subtitle: "Everything lost teaches vocabulary.",
    frames: [
      {
        stem: "Perdí…",
        english: "I lost…",
        scenarios: ["a transit card", "the thread", "count"],
        examples: [
          "Perdí mi tarjeta del metro.",
          "Perdí el hilo de la conversación.",
          "Perdí la cuenta de cuántas veces lo intenté.",
        ],
        note: "Perder el hilo — to lose the thread. (Otoño's mission is to keep it.)",
      },
      {
        stem: "Se me perdió…",
        english: "… got lost on me",
        scenarios: ["an umbrella", "keys", "a glove"],
        examples: [
          "Se me perdió el paraguas otra vez.",
          "Se me perdieron las llaves.",
          "Se me perdió un guante, como siempre.",
        ],
        note: "Se me perdió — the object wandered off; you're the victim, not the culprit. Spanish's kindest grammar.",
      },
      {
        stem: "Dejé … en…",
        english: "I left … in/at…",
        scenarios: ["a coat", "the exams", "the phone"],
        examples: [
          "Dejé mi abrigo en el restaurante.",
          "Dejé los exámenes en la escuela.",
          "Dejé el teléfono en casa y sobreviví.",
        ],
      },
      {
        stem: "¿Alguien ha visto…?",
        english: "Has anyone seen…?",
        scenarios: ["glasses", "a notebook", "the cat"],
        examples: [
          "¿Alguien ha visto mis lentes?",
          "¿Alguien ha visto un cuaderno rojo?",
          "¿Alguien ha visto al gato?",
        ],
      },
      {
        stem: "La última vez que lo vi…",
        english: "The last time I saw it…",
        scenarios: ["the kitchen", "someone had it", "the bag"],
        examples: [
          "La última vez que lo vi fue en la cocina.",
          "La última vez que lo vi lo tenías tú.",
          "La última vez que lo vi estaba en mi bolsa.",
        ],
      },
    ],
  },
  {
    day: 75,
    theme: "Asking for Fixes (usted)",
    subtitle: "A fix isn't a fight — it's forward motion.",
    frames: [
      {
        stem: "¿Me lo puede cambiar…?",
        english: "Can you exchange it for me…?",
        scenarios: ["another size", "it came broken", "no receipt"],
        examples: [
          "¿Me lo puede cambiar por otra talla?",
          "¿Me lo puede cambiar? Este vino roto.",
          "¿Me lo puede cambiar aunque no tenga el recibo?",
        ],
        note: "Me lo puede cambiar — three little pronouns in a row, all earning their place.",
      },
      {
        stem: "¿Me pueden devolver…?",
        english: "Can you (all) refund…?",
        scenarios: ["money", "a deposit", "an extra charge"],
        examples: [
          "¿Me pueden devolver el dinero?",
          "¿Me pueden devolver el depósito?",
          "¿Me pueden devolver el cobro extra?",
        ],
      },
      {
        stem: "¿Hay alguna manera de…?",
        english: "Is there any way to…?",
        scenarios: ["a flight", "recovery", "today"],
        examples: [
          "¿Hay alguna manera de cambiar el vuelo?",
          "¿Hay alguna manera de recuperarlo?",
          "¿Hay alguna manera de resolverlo hoy?",
        ],
        note: "¿Hay alguna manera de…? — the door-opener when the first answer was no.",
      },
      {
        stem: "¿Qué me sugiere?",
        english: "What do you suggest? (usted)",
        scenarios: ["this case", "urgency", "prevention"],
        examples: [
          "¿Qué me sugiere en este caso?",
          "¿Qué me sugiere? Necesito una solución pronto.",
          "¿Qué me sugiere para que no vuelva a pasar?",
        ],
        note: "¿Qué me sugiere? — hand the problem back, respectfully. Experts love this question.",
      },
      {
        stem: "Necesito resolver esto…",
        english: "I need to get this resolved…",
        scenarios: ["today", "by Friday", "escalating"],
        examples: [
          "Necesito resolver esto hoy mismo.",
          "Necesito resolver esto antes del viernes.",
          "Necesito resolver esto, ¿con quién puedo hablar?",
        ],
      },
    ],
  },
  {
    day: 76,
    theme: "Apologizing",
    subtitle: "A good apology has a verb and a plan.",
    frames: [
      {
        stem: "Perdón por…",
        english: "Sorry for…",
        scenarios: ["the mess", "slow replies", "confusion"],
        examples: [
          "Perdón por el desorden.",
          "Perdón por no contestar antes.",
          "Perdón por la confusión de ayer.",
        ],
      },
      {
        stem: "Fue mi culpa…",
        english: "It was my fault…",
        scenarios: ["wrong time", "not asking", "sincerely"],
        examples: [
          "Fue mi culpa, yo anoté mal la hora.",
          "Fue mi culpa por no preguntar.",
          "Fue mi culpa, y lo siento de verdad.",
        ],
      },
      {
        stem: "No me di cuenta de que…",
        english: "I didn't realize that…",
        scenarios: ["the hour", "waiting", "an unsent message"],
        examples: [
          "No me di cuenta de que era tan tarde.",
          "No me di cuenta de que estabas esperando.",
          "No me di cuenta de que el mensaje no se envió.",
        ],
      },
      {
        stem: "¿Cómo lo arreglo?",
        english: "How do I fix it?",
        scenarios: ["ready to act", "carefully", "with you"],
        examples: [
          "¿Cómo lo arreglo? Dime y lo hago.",
          "¿Cómo lo arreglo sin empeorarlo?",
          "¿Cómo lo arreglo contigo?",
        ],
      },
      {
        stem: "No va a volver a pasar…",
        english: "It won't happen again…",
        scenarios: ["a promise", "an alarm", "lesson learned"],
        examples: [
          "No va a volver a pasar, te lo prometo.",
          "No va a volver a pasar; ya puse una alarma.",
          "No va a volver a pasar, aprendí la lección.",
        ],
        note: "Volver a + infinitive = to do again. No va a volver a pasar — it won't re-happen.",
      },
    ],
  },
  {
    day: 77,
    theme: "Repaso: Problems",
    subtitle: "Solved problems make the best stories.",
    frames: [
      {
        stem: "No funciona…",
        english: "… isn't working",
        scenarios: ["the elevator", "your usual plan", "the mic"],
        examples: [
          "No funciona el ascensor, vamos por la escalera.",
          "No funciona mi plan de siempre, necesito otro.",
          "No funciona el micrófono, ¿me escuchan?",
        ],
      },
      {
        stem: "Hubo un problema con…",
        english: "There was a problem with…",
        scenarios: ["the schedule", "the app", "a book order"],
        examples: [
          "Hubo un problema con el horario, pero ya está resuelto.",
          "Hubo un problema con la aplicación esta mañana.",
          "Hubo un problema con el pedido de los libros.",
        ],
      },
      {
        stem: "Se me perdió…",
        english: "… got lost on me",
        scenarios: ["a ticket", "half the audio", "the habit"],
        examples: [
          "Se me perdió el boleto, qué pena.",
          "Se me perdió la mitad del audio, ¿lo repites?",
          "Se me perdió la costumbre, hay que retomarla.",
        ],
      },
      {
        stem: "¿Hay alguna manera de…?",
        english: "Is there any way to…?",
        scenarios: ["arriving early", "real-life practice", "paying online"],
        examples: [
          "¿Hay alguna manera de llegar antes de las tres?",
          "¿Hay alguna manera de practicar esto en la vida real?",
          "¿Hay alguna manera de pagar en línea?",
        ],
      },
      {
        stem: "Perdón por…",
        english: "Sorry for…",
        scenarios: ["noise", "changed plans", "app talk"],
        examples: [
          "Perdón por el ruido de anoche.",
          "Perdón por cambiar los planes otra vez.",
          "Perdón por hablar tanto de mi aplicación.",
        ],
      },
    ],
  },
  // ===== Week 12 — Decir lo que sientes / Saying what you feel =====
  {
    day: 78,
    theme: "What You Love Most",
    subtitle: "Name it in detail — it becomes more yours.",
    frames: [
      {
        stem: "Lo que más me gusta de… es…",
        english: "What I like most about… is…",
        scenarios: ["teaching", "Boston", "Spanish"],
        examples: [
          "Lo que más me gusta de enseñar es ver el clic.",
          "Lo que más me gusta de Boston es el otoño.",
          "Lo que más me gusta del español es cómo suena.",
        ],
      },
      {
        stem: "Lo que menos me gusta de… es…",
        english: "What I like least about… is…",
        scenarios: ["winter", "early mornings", "traffic"],
        examples: [
          "Lo que menos me gusta del invierno es la oscuridad.",
          "Lo que menos me gusta es madrugar, no lo niego.",
          "Lo que menos me gusta de la ciudad es el tráfico.",
        ],
        note: "Madrugar — to get up at dawn. One verb for a whole struggle.",
      },
      {
        stem: "Me llena de…",
        english: "It fills me with…",
        scenarios: ["pride", "energy", "peace"],
        examples: [
          "Me llena de orgullo ver a mis estudiantes hablar.",
          "Me llena de energía caminar por la mañana.",
          "Me llena de paz leer antes de dormir.",
        ],
      },
      {
        stem: "Disfruto mucho…",
        english: "I really enjoy…",
        scenarios: ["slow mornings", "cooking", "self-talk"],
        examples: [
          "Disfruto mucho las mañanas lentas.",
          "Disfruto mucho cocinar sin prisa.",
          "Disfruto mucho estas conversaciones conmigo misma.",
        ],
        note: "Disfrutar — to enjoy. It takes the thing directly, no preposition needed.",
      },
      {
        stem: "Me hace feliz…",
        english: "It makes me happy…",
        scenarios: ["coffee smell", "a joke", "company"],
        examples: [
          "Me hace feliz el olor a café.",
          "Me hace feliz entender un chiste en español.",
          "Me hace feliz que estés aquí.",
        ],
      },
    ],
  },
  {
    day: 79,
    theme: "Missing",
    subtitle: "Missing is loving at a distance.",
    frames: [
      {
        stem: "Extraño…",
        english: "I miss…",
        scenarios: ["long summers", "mom's cooking", "family close"],
        examples: [
          "Extraño los veranos largos de Atlanta.",
          "Extraño la comida de mi mamá.",
          "Extraño tener a mi familia cerca.",
        ],
        note: "Extrañar — to miss, in Latin America. In Spain: echar de menos. Both live in this day.",
      },
      {
        stem: "Echo de menos…",
        english: "I miss… (Spain's version)",
        scenarios: ["porch evenings", "college friends", "car karaoke"],
        examples: [
          "Echo de menos las tardes en el porche.",
          "Echo de menos a mis amigas de la universidad.",
          "Echo de menos cantar en el carro a todo volumen.",
        ],
      },
      {
        stem: "Me acuerdo mucho de…",
        english: "I think a lot about…",
        scenarios: ["grandma", "Sunday breakfasts", "your first class"],
        examples: [
          "Me acuerdo mucho de mi abuela en esta época.",
          "Me acuerdo mucho de esos desayunos de domingo.",
          "Me acuerdo mucho de mi primera clase.",
        ],
        note: "Acordarse de = to remember (reflexive). Recordar works too — Spanish gives you two.",
      },
      {
        stem: "Ojalá pudiera…",
        english: "I wish I could…",
        scenarios: ["two places", "seeing them", "staying longer"],
        examples: [
          "Ojalá pudiera estar en dos lugares a la vez.",
          "Ojalá pudiera verlos más seguido.",
          "Ojalá pudiera quedarme un rato más.",
        ],
        note: "Ojalá — from Arabic 'inshallah' — plus past subjunctive: the grammar of longing. Borrow it whole.",
      },
      {
        stem: "Cuando pienso en…, siento…",
        english: "When I think of…, I feel…",
        scenarios: ["home", "a trip", "the future"],
        examples: [
          "Cuando pienso en casa, siento calorcito.",
          "Cuando pienso en ese viaje, siento gratitud.",
          "Cuando pienso en el futuro, siento curiosidad.",
        ],
      },
    ],
  },
  {
    day: 80,
    theme: "Gratitude",
    subtitle: "Gratitude spoken is worth double.",
    frames: [
      {
        stem: "Estoy agradecida por…",
        english: "I'm grateful for…",
        scenarios: ["this chapter", "your people", "fresh starts"],
        examples: [
          "Estoy agradecida por esta etapa de mi vida.",
          "Estoy agradecida por la gente que me rodea.",
          "Estoy agradecida por poder empezar de nuevo.",
        ],
      },
      {
        stem: "Gracias a…, yo…",
        english: "Thanks to…, I…",
        scenarios: ["students", "mom", "this summer"],
        examples: [
          "Gracias a mis estudiantes, yo también aprendo.",
          "Gracias a mi mamá, sé trabajar duro.",
          "Gracias a este verano, hablo con menos miedo.",
        ],
      },
      {
        stem: "No sé qué haría sin…",
        english: "I don't know what I'd do without…",
        scenarios: ["morning coffee", "friends", "lists"],
        examples: [
          "No sé qué haría sin mi café de la mañana.",
          "No sé qué haría sin mis amigas.",
          "No sé qué haría sin listas.",
        ],
      },
      {
        stem: "Significa mucho para mí…",
        english: "It means a lot to me…",
        scenarios: ["being asked", "this notebook", "saying it"],
        examples: [
          "Significa mucho para mí que preguntes.",
          "Significa mucho para mí este cuaderno de frases.",
          "Significa mucho para mí poder decir esto en español.",
        ],
      },
      {
        stem: "Nunca te he dicho que…",
        english: "I've never told you that…",
        scenarios: ["admiration", "learning from them", "their support"],
        examples: [
          "Nunca te he dicho que admiro tu paciencia.",
          "Nunca te he dicho que aprendí mucho de ti.",
          "Nunca te he dicho que tu apoyo me cambió el año.",
        ],
        note: "Nunca te he dicho — present perfect opening the vault. Today's the day.",
      },
    ],
  },
  {
    day: 81,
    theme: "Worries Out Loud",
    subtitle: "Worries weigh less once said.",
    frames: [
      {
        stem: "Últimamente me preocupa…",
        english: "Lately I've been worried about…",
        scenarios: ["screen time", "a student", "rest"],
        examples: [
          "Últimamente me preocupa el tiempo que paso en pantallas.",
          "Últimamente me preocupa una estudiante en particular.",
          "Últimamente me preocupa no descansar lo suficiente.",
        ],
      },
      {
        stem: "No dejo de pensar en…",
        english: "I can't stop thinking about…",
        scenarios: ["a conversation", "the career change", "time flying"],
        examples: [
          "No dejo de pensar en esa conversación.",
          "No dejo de pensar en el cambio de carrera.",
          "No dejo de pensar en lo rápido que pasa el año.",
        ],
        note: "No dejo de + infinitive — 'I don't stop.' Lo rápido que… — how fast.",
      },
      {
        stem: "Me da miedo…",
        english: "I'm afraid of…",
        scenarios: ["plateauing", "asking too much", "forgetting"],
        examples: [
          "Me da miedo estancarme.",
          "Me da miedo pedir demasiado.",
          "Me da miedo que se me olvide lo aprendido.",
        ],
      },
      {
        stem: "A veces siento que…",
        english: "Sometimes I feel like…",
        scenarios: ["running late on life", "not enough", "good days"],
        examples: [
          "A veces siento que voy tarde a todo.",
          "A veces siento que no es suficiente.",
          "A veces siento que sí puedo — y ese día gano.",
        ],
      },
      {
        stem: "Necesito hablar de…",
        english: "I need to talk about…",
        scenarios: ["something nagging", "class logistics", "with someone safe"],
        examples: [
          "Necesito hablar de algo que me tiene inquieta.",
          "Necesito hablar de cómo organizamos las clases.",
          "Necesito hablar de esto con alguien de confianza.",
        ],
        note: "Me tiene inquieta — 'has me restless.' Tener, describing a state it's holding you in.",
      },
    ],
  },
  {
    day: 82,
    theme: "Hopes",
    subtitle: "Looking forward is a plan too.",
    frames: [
      {
        stem: "Me hace ilusión…",
        english: "I'm looking forward to…",
        scenarios: ["a long conversation", "the school year", "a year from now"],
        examples: [
          "Me hace ilusión mi primera conversación larga en español.",
          "Me hace ilusión empezar el año escolar.",
          "Me hace ilusión pensar en dónde estaré en un año.",
        ],
        note: "Hacer ilusión — joy-in-advance. One of Spanish's untranslatable gifts.",
      },
      {
        stem: "Estoy contando los días para…",
        english: "I'm counting the days until…",
        scenarios: ["vacation", "family", "a concert"],
        examples: [
          "Estoy contando los días para las vacaciones.",
          "Estoy contando los días para ver a mi familia.",
          "Estoy contando los días para el concierto.",
        ],
      },
      {
        stem: "Lo que más espero de… es…",
        english: "What I most hope for from… is…",
        scenarios: ["fall", "this year", "a trip"],
        examples: [
          "Lo que más espero del otoño es tiempo para leer.",
          "Lo que más espero de este año es confianza.",
          "Lo que más espero del viaje es desconectarme.",
        ],
      },
      {
        stem: "Sería un sueño…",
        english: "It would be a dream…",
        scenarios: ["two languages", "a month away", "no subtitles"],
        examples: [
          "Sería un sueño enseñar en dos idiomas.",
          "Sería un sueño pasar un mes en América Latina.",
          "Sería un sueño no necesitar subtítulos.",
        ],
      },
      {
        stem: "Ya quiero…",
        english: "I can't wait to…",
        scenarios: ["Friday", "telling everyone", "the ending"],
        examples: [
          "Ya quiero que sea viernes.",
          "Ya quiero contarle a todos.",
          "Ya quiero ver cómo termina esta historia.",
        ],
        note: "Ya quiero… — 'I already want…' = I can't wait. Impatience, the warm kind.",
      },
    ],
  },
  {
    day: 83,
    theme: "Saying It to Someone",
    subtitle: "Kind words aren't for saving.",
    frames: [
      {
        stem: "Quiero que sepas que…",
        english: "I want you to know that…",
        scenarios: ["counting on them", "it matters", "you noticed"],
        examples: [
          "Quiero que sepas que cuento contigo.",
          "Quiero que sepas que esto me importa.",
          "Quiero que sepas que lo noté.",
        ],
        note: "Quiero que sepas — subjunctive (sepas) after wanting something of someone. A chunk worth its weight.",
      },
      {
        stem: "Eres muy importante para mí…",
        english: "You're very important to me…",
        scenarios: ["undersaid", "family", "for years"],
        examples: [
          "Eres muy importante para mí, aunque no lo diga mucho.",
          "Eres muy importante para mí y para esta familia.",
          "Eres muy importante para mí desde hace años.",
        ],
      },
      {
        stem: "Admiro cómo…",
        english: "I admire how…",
        scenarios: ["hard things", "making people feel seen", "always learning"],
        examples: [
          "Admiro cómo manejas las cosas difíciles.",
          "Admiro cómo haces que todos se sientan vistos.",
          "Admiro cómo sigues aprendiendo siempre.",
        ],
      },
      {
        stem: "Gracias por estar…",
        english: "Thank you for being there…",
        scenarios: ["good and bad", "checking in", "no reason"],
        examples: [
          "Gracias por estar en las buenas y en las malas.",
          "Gracias por estar pendiente de mí.",
          "Gracias por estar, así, sin más.",
        ],
        note: "Estar pendiente de — to keep an eye out for, lovingly.",
      },
      {
        stem: "Contigo puedo…",
        english: "With you I can…",
        scenarios: ["being yourself", "any topic", "mistakes"],
        examples: [
          "Contigo puedo ser yo misma.",
          "Contigo puedo hablar de cualquier cosa.",
          "Contigo puedo equivocarme sin miedo.",
        ],
      },
    ],
  },
  {
    day: 84,
    theme: "Repaso: Feelings",
    subtitle: "Feeling in two languages is living twice.",
    frames: [
      {
        stem: "Me llena de…",
        english: "It fills me with…",
        scenarios: ["old sentences", "small wins", "the ritual"],
        examples: [
          "Me llena de ternura ver mis primeras frases del cuaderno.",
          "Me llena de ganas de seguir cada pequeño avance.",
          "Me llena de calma este ritual de cinco minutos.",
        ],
      },
      {
        stem: "Extraño…",
        english: "I miss…",
        scenarios: ["cicadas", "old prices", "your people"],
        examples: [
          "Extraño el ruido de las cigarras en verano.",
          "Extraño los precios de hace unos años, como todos.",
          "Extraño a mi gente, pero aquí estoy construyendo la mía.",
        ],
      },
      {
        stem: "Estoy agradecida por…",
        english: "I'm grateful for…",
        scenarios: ["neighbors", "an unhurried summer", "new words"],
        examples: [
          "Estoy agradecida por las vecinas que me saludan en español.",
          "Estoy agradecida por un verano que no me pidió prisa.",
          "Estoy agradecida por cada palabra nueva.",
        ],
      },
      {
        stem: "A veces siento que…",
        english: "Sometimes I feel like…",
        scenarios: ["it lives in you", "words arriving", "just beginning"],
        examples: [
          "A veces siento que el español ya vive en mí.",
          "A veces siento que las palabras llegan solas.",
          "A veces siento que esto apenas empieza.",
        ],
      },
      {
        stem: "Ya quiero…",
        english: "I can't wait to…",
        scenarios: ["a year from now", "effortless talk", "fall in Spanish"],
        examples: [
          "Ya quiero leer mi cuaderno dentro de un año.",
          "Ya quiero tener esa conversación sin pensar.",
          "Ya quiero ver el otoño desde este nuevo idioma.",
        ],
      },
    ],
  },
  // ===== Week 13 — La conversación entera / The whole conversation =====
  {
    day: 85,
    theme: "Openings",
    subtitle: "Whoever says hi first, wins.",
    frames: [
      {
        stem: "¡Hola! ¿Qué tal…?",
        english: "Hi! How's…?",
        scenarios: ["their day", "everything", "back to school"],
        examples: [
          "¡Hola! ¿Qué tal tu día?",
          "¡Hola! ¿Qué tal todo?",
          "¡Hola! ¿Qué tal el regreso a clases?",
        ],
      },
      {
        stem: "¿Cómo has estado?",
        english: "How have you been?",
        scenarios: ["long time", "busy season", "since the trip"],
        examples: [
          "¿Cómo has estado? Hace mucho que no hablamos.",
          "¿Cómo has estado? Te vi muy ocupada.",
          "¿Cómo has estado desde el viaje?",
        ],
        note: "Hace mucho que no… — 'it's been long since.' Time expressions doing warm work.",
      },
      {
        stem: "¡Tanto tiempo!",
        english: "It's been so long!",
        scenarios: ["surprise meeting", "seeing them", "catching up"],
        examples: [
          "¡Tanto tiempo! ¿Cómo estás?",
          "¡Tanto tiempo sin verte!",
          "¡Tanto tiempo! Tenemos que ponernos al día.",
        ],
        note: "Ponerse al día — to catch up. The whole point of running into someone.",
      },
      {
        stem: "¿Cómo va todo con…?",
        english: "How's everything going with…?",
        scenarios: ["a new job", "family", "a move"],
        examples: [
          "¿Cómo va todo con el trabajo nuevo?",
          "¿Cómo va todo con la familia?",
          "¿Cómo va todo con la mudanza?",
        ],
      },
      {
        stem: "Qué gusto verte…",
        english: "So good to see you…",
        scenarios: ["around here", "looking well", "sincerely"],
        examples: [
          "Qué gusto verte por aquí.",
          "Qué gusto verte tan bien.",
          "Qué gusto verte, de verdad.",
        ],
      },
    ],
  },
  {
    day: 86,
    theme: "Small Talk",
    subtitle: "Small talk opens big doors.",
    frames: [
      {
        stem: "¿Qué me cuentas de…?",
        english: "What's new with…?",
        scenarios: ["their summer", "family", "anything"],
        examples: [
          "¿Qué me cuentas de tu verano?",
          "¿Qué me cuentas de la familia?",
          "¿Qué me cuentas de nuevo?",
        ],
        note: "¿Qué me cuentas? — 'what do you tell me?' — the small-talk engine of Latin America.",
      },
      {
        stem: "Por aquí todo…",
        english: "Around here everything's…",
        scenarios: ["fine", "calm", "the same"],
        examples: [
          "Por aquí todo bien, gracias a Dios.",
          "Por aquí todo tranquilo, como siempre.",
          "Por aquí todo igual, trabajando mucho.",
        ],
      },
      {
        stem: "Últimamente…",
        english: "Lately…",
        scenarios: ["river walks", "busy but happy", "the heat"],
        examples: [
          "Últimamente he caminado mucho por el río.",
          "Últimamente ando ocupada, pero contenta.",
          "Últimamente hace un calor tremendo, ¿verdad?",
        ],
        note: "Ando ocupada — andar as 'to be lately.' Very spoken, very natural.",
      },
      {
        stem: "¿Sigues…?",
        english: "Are you still…?",
        scenarios: ["same school", "morning runs", "dance class"],
        examples: [
          "¿Sigues en la misma escuela?",
          "¿Sigues corriendo por las mañanas?",
          "¿Sigues con las clases de baile?",
        ],
        note: "Remembering someone's life back to them is the real small talk.",
      },
      {
        stem: "El clima está…",
        english: "The weather is…",
        scenarios: ["perfect", "crazy", "improving"],
        examples: [
          "El clima está perfecto para caminar.",
          "El clima está loco esta semana.",
          "El clima está mejor que la semana pasada, al menos.",
        ],
      },
    ],
  },
  {
    day: 87,
    theme: "Transitions",
    subtitle: "Bueno, pues, oye — conversation's oil.",
    frames: [
      {
        stem: "Bueno, …",
        english: "Well, …",
        scenarios: ["shifting gears", "your turn", "here's the thing"],
        examples: [
          "Bueno, cambiando de tema…",
          "Bueno, tú dirás.",
          "Bueno, la cosa es así.",
        ],
        note: "Bueno at the start of a sentence isn't 'good' — it's the sound of a conversation shifting gears.",
      },
      {
        stem: "Pues…",
        english: "Well / so…",
        scenarios: ["turns out", "your view", "wrapping up"],
        examples: [
          "Pues resulta que sí.",
          "Pues yo lo veo diferente.",
          "Pues nada, así quedó la cosa.",
        ],
        note: "Pues — the app's namesake. The word that buys you a breath while your Spanish catches up.",
      },
      {
        stem: "Oye, …",
        english: "Hey, …",
        scenarios: ["their opinion", "before forgetting", "a compliment"],
        examples: [
          "Oye, ¿y tú qué piensas?",
          "Oye, antes de que se me olvide…",
          "Oye, qué bonito lo que dijiste.",
        ],
      },
      {
        stem: "Hablando de…",
        english: "Speaking of…",
        scenarios: ["food", "trips", "a story"],
        examples: [
          "Hablando de comida, ¿ya almorzaste?",
          "Hablando de viajes, ¿cómo estuvo el tuyo?",
          "Hablando de eso, tengo una historia.",
        ],
      },
      {
        stem: "Cambiando de tema…",
        english: "Changing the subject…",
        scenarios: ["the news", "advice", "plans"],
        examples: [
          "Cambiando de tema, ¿viste las noticias?",
          "Cambiando de tema, necesito tu consejo.",
          "Cambiando de tema, ¿qué planes tienes?",
        ],
      },
    ],
  },
  {
    day: 88,
    theme: "Holding Your Turn",
    subtitle: "Think out loud without losing the floor.",
    frames: [
      {
        stem: "Espera, déjame pensar…",
        english: "Wait, let me think…",
        scenarios: ["finding words", "a second", "an example"],
        examples: [
          "Espera, déjame pensar cómo decirlo.",
          "Espera, déjame pensar un segundo.",
          "Espera, déjame pensar en un ejemplo.",
        ],
        note: "Déjame pensar — 'let me think.' Holding your turn beats losing it.",
      },
      {
        stem: "¿Cómo te explico?",
        english: "How do I explain…?",
        scenarios: ["complex feelings", "no drawing", "untranslatable"],
        examples: [
          "¿Cómo te explico? Es complicado y simple a la vez.",
          "¿Cómo te explico sin hacer un dibujo?",
          "¿Cómo te explico? Es difícil de traducir, pero fácil de sentir.",
        ],
      },
      {
        stem: "Es decir…",
        english: "That is to say…",
        scenarios: ["conditions", "the opposite", "starting over"],
        examples: [
          "Es decir, sí, pero con condiciones.",
          "Es decir, lo contrario de lo que pensaba.",
          "Es decir, que empezamos de cero otra vez.",
        ],
      },
      {
        stem: "O sea…",
        english: "I mean…",
        scenarios: ["calibrating", "emphasis", "double-checking"],
        examples: [
          "O sea, no es tan grave, pero tampoco es nada.",
          "O sea, me encantó, punto.",
          "O sea, que sí vienes, ¿verdad?",
        ],
        note: "O sea — the great Spanish 'I mean.' Invierno makes it fast; today makes it yours.",
      },
      {
        stem: "Lo que pasa es que…",
        english: "The thing is…",
        scenarios: ["not daring", "schedule changes", "high standards"],
        examples: [
          "Lo que pasa es que no me atrevía a decirlo.",
          "Lo que pasa es que el horario cambió.",
          "Lo que pasa es que quiero hacerlo bien.",
        ],
        note: "Atreverse a — to dare to. Me atrevía — imperfect: the not-daring lasted a while. It's over now.",
      },
    ],
  },
  {
    day: 89,
    theme: "Graceful Exits",
    subtitle: "A good goodbye sets up the next hello.",
    frames: [
      {
        stem: "Bueno, me tengo que ir…",
        english: "Well, I have to go…",
        scenarios: ["with a promise", "the train", "early morning"],
        examples: [
          "Bueno, me tengo que ir, pero seguimos.",
          "Bueno, me tengo que ir o pierdo el tren.",
          "Bueno, me tengo que ir; mañana madrugamos.",
        ],
      },
      {
        stem: "Fue un gusto…",
        english: "It was a pleasure…",
        scenarios: ["seeing them", "finally meeting", "in Spanish"],
        examples: [
          "Fue un gusto verte.",
          "Fue un gusto conocerte por fin.",
          "Fue un gusto hablar contigo en español.",
        ],
      },
      {
        stem: "Te dejo, pero…",
        english: "I'll let you go, but…",
        scenarios: ["talk soon", "a coffee debt", "updates"],
        examples: [
          "Te dejo, pero hablamos pronto.",
          "Te dejo, pero me debes un café.",
          "Te dejo, pero cuéntame cómo te va.",
        ],
        note: "Te dejo — 'I leave you': the standard soft exit on calls and chats.",
      },
      {
        stem: "Seguimos hablando…",
        english: "We'll keep talking…",
        scenarios: ["this week", "it got good", "by message"],
        examples: [
          "Seguimos hablando en la semana.",
          "Seguimos hablando, que esto se puso bueno.",
          "Seguimos hablando por mensaje.",
        ],
      },
      {
        stem: "Saludos a…",
        english: "Say hi to…",
        scenarios: ["family", "everyone", "their mom"],
        examples: [
          "Saludos a tu familia.",
          "Saludos a todos por allá.",
          "Saludos a tu mamá de mi parte.",
        ],
        note: "De mi parte — 'from me.' The tiny bow on a Spanish goodbye.",
      },
    ],
  },
  {
    day: 90,
    theme: "Your Season",
    subtitle: "Day 90. Before, now, next.",
    frames: [
      {
        stem: "Hace tres meses…",
        english: "Three months ago…",
        scenarios: ["the fear", "day one", "just an idea"],
        examples: [
          "Hace tres meses no me atrevía a hablar.",
          "Hace tres meses empezó este cuaderno.",
          "Hace tres meses esto era solo una idea.",
        ],
      },
      {
        stem: "Ahora puedo…",
        english: "Now I can…",
        scenarios: ["the skills", "no translating", "the season goal"],
        examples: [
          "Ahora puedo pedir, preguntar y contar historias.",
          "Ahora puedo hablar sin traducir cada palabra.",
          "Ahora puedo tener una conversación simple, sin pánico.",
        ],
        note: "That third sentence was Verano's goal, word for word. Say it slowly.",
      },
      {
        stem: "Lo más difícil fue…",
        english: "The hardest part was…",
        scenarios: ["starting", "the first time", "the slow weeks"],
        examples: [
          "Lo más difícil fue empezar.",
          "Lo más difícil fue hablar en voz alta la primera vez.",
          "Lo más difícil fue no rendirme en las semanas flojas.",
        ],
      },
      {
        stem: "Lo que más me sorprendió fue…",
        english: "What surprised me most was…",
        scenarios: ["comprehension", "kind people", "enjoying it"],
        examples: [
          "Lo que más me sorprendió fue cuánto entiendo ya.",
          "Lo que más me sorprendió fue lo amable que es la gente.",
          "Lo que más me sorprendió fue disfrutarlo tanto.",
        ],
      },
      {
        stem: "El próximo paso es…",
        english: "The next step is…",
        scenarios: ["fall's thread", "a full minute", "real conversations"],
        examples: [
          "El próximo paso es seguir el hilo en otoño.",
          "El próximo paso es hablar un minuto sin parar.",
          "El próximo paso es buscar más conversaciones reales.",
        ],
      },
    ],
  },
  {
    day: 91,
    theme: "Repaso: The Whole Conversation",
    subtitle: "Hola to adiós — one conversation, five beats. Yours.",
    frames: [
      {
        stem: "¡Tanto tiempo!",
        english: "It's been so long!",
        scenarios: ["thinking of them", "the neighborhood", "playfully"],
        examples: [
          "¡Tanto tiempo! Pensé en ti el otro día.",
          "¡Tanto tiempo! ¿Sigues por el barrio?",
          "¡Tanto tiempo! Casi no te reconozco con el sombrero.",
        ],
      },
      {
        stem: "¿Qué me cuentas de…?",
        english: "What's new with…?",
        scenarios: ["your classes", "life", "that old project"],
        examples: [
          "¿Qué me cuentas de tus clases de español?",
          "¿Qué me cuentas de la vida?",
          "¿Qué me cuentas de aquel proyecto que tenías?",
        ],
      },
      {
        stem: "Hablando de…",
        english: "Speaking of…",
        scenarios: ["projects", "coffee", "the time"],
        examples: [
          "Hablando de proyectos, terminé mi temporada de verano.",
          "Hablando de café, conozco un lugar nuevo.",
          "Hablando de tiempo, ¿ya viste qué tarde es?",
        ],
      },
      {
        stem: "Lo que pasa es que…",
        english: "The thing is…",
        scenarios: ["ninety days", "two languages", "love"],
        examples: [
          "Lo que pasa es que llevo noventa días practicando.",
          "Lo que pasa es que ahora pienso en dos idiomas.",
          "Lo que pasa es que me enamoré de este idioma.",
        ],
        note: "Llevar + time + gerund — llevo noventa días practicando: the grammar of persistence.",
      },
      {
        stem: "Bueno, me tengo que ir…",
        english: "Well, I have to go…",
        scenarios: ["a coffee soon", "next season", "sincerely"],
        examples: [
          "Bueno, me tengo que ir, pero esto merece un café pronto.",
          "Bueno, me tengo que ir; mañana empieza otra temporada.",
          "Bueno, me tengo que ir — fue un gusto, de verdad.",
        ],
      },
    ],
  },
];
