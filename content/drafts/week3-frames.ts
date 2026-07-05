import type { FrameDay } from "../frames/types";

/**
 * Otoño Week 3 draft — days 106–112 ("Dijo que…").
 * Story: "La entrevista de Marcos" — Marlana retells what her student Marcos
 * told her after each step of his scholarship interview arc.
 *
 * Fixed stems all week (reported speech, past):
 * Dijo que… · Me contó que… · Mencionó que… · Preguntó si… · Le dijo que…
 */
export const week3FrameDays: FrameDay[] = [
  {
    day: 106,
    theme: "Antes de la entrevista",
    subtitle: "Marcos had his scholarship interview tomorrow — retell what he told you in the teachers' lounge.",
    frames: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        scenarios: ["his nerves", "the interview date", "his preparation"],
        examples: [
          "Dijo que estaba muy nervioso.",
          "Dijo que tenía la entrevista al día siguiente.",
          "Dijo que había repasado con tarjetas toda la semana.",
        ],
        note: "When the reporting verb is past (*dijo*), the clause after *que* usually shifts back one step — present becomes imperfect, preterite becomes past perfect.",
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        scenarios: ["a sleepless night", "his flashcards", "what his mom said"],
        examples: [
          "Me contó que no había dormido bien anoche.",
          "Me contó que había preparado tarjetas con preguntas posibles.",
          "Me contó que su mamá le había dicho que confiara en él.",
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        scenarios: ["what the scholarship covers", "the competition", "how long he'd prepared"],
        examples: [
          "Mencionó que la beca cubría la universidad completa.",
          "Mencionó que otros estudiantes también competían por el mismo premio.",
          "Mencionó que llevaba meses preparándose.",
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        scenarios: ["whether he was ready", "if the flashcards were enough", "one more practice round"],
        examples: [
          "Preguntó si yo creía que estaba listo.",
          "Preguntó si las tarjetas eran suficientes.",
          "Preguntó si podía practicar conmigo un rato más.",
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        scenarios: ["his mom's encouragement", "trusting his preparation", "everything would be okay"],
        examples: [
          "Le dijo que confiara en todo lo que había preparado.",
          "Le dijo que había trabajado demasiado para rendirse ahora.",
          "Le dijo que todo iba a salir bien.",
        ],
        note: "*Le dijo que* + subjunctive reports advice someone gave Marcos — *confiara* shifts from present subjunctive the way *estaba* shifts from *está*.",
      },
    ],
  },
  {
    day: 107,
    theme: "La entrevista",
    subtitle: "The interview happened — retell what Marcos said when he came back to your classroom.",
    frames: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        scenarios: ["how long it lasted", "the hard questions", "blanking at first"],
        examples: [
          "Dijo que la entrevista había durado como media hora.",
          "Dijo que le habían hecho preguntas difíciles.",
          "Dijo que al principio se había quedado en blanco.",
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        scenarios: ["why he wants the scholarship", "finding his calm", "how he felt when it ended"],
        examples: [
          "Me contó que un evaluador le preguntó por qué quería la beca.",
          "Me contó que había respondido con calma al final.",
          "Me contó que se había sentido mejor cuando terminó.",
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        scenarios: ["questions about his grades", "talking about his family", "when he'd hear back"],
        examples: [
          "Mencionó que le preguntaron sobre sus notas.",
          "Mencionó que tuvo que hablar de su familia.",
          "Mencionó que le debían dar una respuesta en dos semanas.",
        ],
        note: "*Mencionó que tuvo que…* keeps the preterite in the subordinate clause — that's normal in everyday reported speech when the event is clearly finished.",
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        scenarios: ["whether you'd seen interviews like this", "if he answered the hardest one well", "if his answers sounded honest"],
        examples: [
          "Preguntó si yo había visto entrevistas así antes.",
          "Preguntó si había respondido bien a la pregunta más difícil.",
          "Preguntó si sus respuestas sonaban honestas.",
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        scenarios: ["the evaluator's feedback", "a good impression", "he'd hear back soon"],
        examples: [
          "Le dijo que había respondido con mucha claridad.",
          "Le dijo que había hecho una buena impresión.",
          "Le dijo que le avisarían en unas semanas.",
        ],
      },
    ],
  },
  {
    day: 108,
    theme: "La espera",
    subtitle: "Two weeks of waiting — retell how Marcos described the anxious days after the interview.",
    frames: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        scenarios: ["checking email every day", "not being able to stop thinking", "each day feeling longer"],
        examples: [
          "Dijo que revisaba el correo todos los días.",
          "Dijo que no podía dejar de pensar en la respuesta.",
          "Dijo que cada día sin noticias se le hacía más largo.",
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        scenarios: ["how long he'd been waiting", "dreaming about the acceptance letter", "his mom's anxiety"],
        examples: [
          "Me contó que ya llevaba una semana esperando.",
          "Me contó que había soñado con la carta de aceptación.",
          "Me contó que su mamá también estaba ansiosa.",
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        scenarios: ["the deadline approaching", "friends who already heard back", "trying to focus in class"],
        examples: [
          "Mencionó que faltaban solo cinco días para la fecha límite.",
          "Mencionó que algunos amigos ya habían recibido respuestas.",
          "Mencionó que trataba de concentrarse en las clases, pero le costaba.",
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        scenarios: ["whether the wait was normal", "if he still had a chance", "if he should send a follow-up email"],
        examples: [
          "Preguntó si era normal esperar tanto.",
          "Preguntó si yo pensaba que aún tenía posibilidades.",
          "Preguntó si debería mandar un correo preguntando.",
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        scenarios: ["his mom's patience", "not checking email every hour", "the answer would come"],
        examples: [
          "Le dijo que no se obsesionara con el correo.",
          "Le dijo que la respuesta llegaría cuando tuviera que llegar.",
          "Le dijo que ya había hecho su parte.",
        ],
      },
    ],
  },
  {
    day: 109,
    theme: "La respuesta",
    subtitle: "He got the scholarship — retell Marcos's excitement the morning the email arrived.",
    frames: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        scenarios: ["the email that morning", "getting the scholarship", "hardly believing it"],
        examples: [
          "Dijo que había recibido el correo esa mañana.",
          "Dijo que le habían dado la beca.",
          "Dijo que casi no podía creerlo.",
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        scenarios: ["shouting when he read it", "his mom running from the other room", "crying from joy"],
        examples: [
          "Me contó que gritó cuando leyó la primera línea.",
          "Me contó que su mamá corrió cuando lo escuchó.",
          "Me contó que había llorado de la emoción.",
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        scenarios: ["when it starts", "what else is included", "the deadline to sign"],
        examples: [
          "Mencionó que la carta decía que empezaba en el otoño.",
          "Mencionó que también incluía libros y una laptop.",
          "Mencionó que tenía que firmar antes del viernes.",
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        scenarios: ["sharing the news with other teachers", "whether you remembered his nerves", "if this meant his dream school"],
        examples: [
          "Preguntó si podía contárselo a los otros maestros.",
          "Preguntó si yo me acordaba de lo nervioso que estaba antes.",
          "Preguntó si esto significaba que iba a la universidad de sus sueños.",
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        scenarios: ["his mom on the phone", "she always believed in him", "this was the happiest day"],
        examples: [
          "Le dijo que siempre había sabido que lo lograría.",
          "Le dijo que era el día más feliz de su vida.",
          "Le dijo que quería abrazarlo en persona pronto.",
        ],
      },
    ],
  },
  {
    day: 110,
    theme: "Contándole a su mamá",
    subtitle: "Marcos called his mom — retell that conversation and what he told you about it.",
    frames: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        scenarios: ["calling his mom right away", "her not speaking at first", "her crying as much as he did"],
        examples: [
          "Dijo que le había llamado a su mamá en cuanto recibió la carta.",
          "Dijo que ella no podía hablar al principio.",
          "Dijo que lloró casi tanto como él.",
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        scenarios: ["she thought it was a joke", "repeating the news three times", "what she said about believing in him"],
        examples: [
          "Me contó que su mamá pensó que era una broma.",
          "Me contó que repitió la noticia tres veces antes de que ella creyera.",
          "Me contó que ella le dijo que siempre había creído en él.",
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        scenarios: ["a family celebration", "his grandmother crying too", "his dad taking the day off"],
        examples: [
          "Mencionó que su mamá quería celebrar con toda la familia.",
          "Mencionó que su abuela también lloró cuando se enteró.",
          "Mencionó que su papá dijo que iba a faltar al trabajo para festejar.",
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        scenarios: ["whether you'd told anyone else", "bringing his mom to school someday", "what other families do"],
        examples: [
          "Preguntó si yo había contado la noticia a alguien más.",
          "Preguntó si podía invitar a su mamá a la escuela algún día.",
          "Preguntó si las familias de otros estudiantes hacían algo especial así.",
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He told her that…",
        scenarios: ["four years covered", "what he'll study", "that it was all worth it"],
        examples: [
          "Le dijo que la beca cubría cuatro años de universidad.",
          "Le dijo que iba a estudiar ingeniería.",
          "Le dijo que todo el esfuerzo había valido la pena.",
        ],
        note: "On this day *Le dijo que* reports what Marcos told his *mamá* — same stem, different listener.",
      },
    ],
  },
  {
    day: 111,
    theme: "El plan",
    subtitle: "Marcos has plans for the scholarship money — retell what he shared with you.",
    frames: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        scenarios: ["what he'll study", "what the scholarship pays for", "working part-time only if needed"],
        examples: [
          "Dijo que iba a estudiar ingeniería civil.",
          "Dijo que la beca pagaba matrícula, libros y computadora.",
          "Dijo que quería trabajar part-time solo si era necesario.",
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        scenarios: ["looking at dorms", "helping his mom with expenses", "saving for emergencies"],
        examples: [
          "Me contó que ya había mirado los dormitorios del campus.",
          "Me contó que pensaba ayudar a su mamá con algunos gastos.",
          "Me contó que quería guardar un poco para emergencias.",
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        scenarios: ["when the program starts", "more paperwork due in June", "an advisor calling next week"],
        examples: [
          "Mencionó que el programa empezaba en agosto.",
          "Mencionó que tenía que llenar más papeles antes de junio.",
          "Mencionó que un orientador lo iba a contactar la próxima semana.",
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        scenarios: ["whether you know alumni", "still practicing Spanish after graduating", "support for Latino students"],
        examples: [
          "Preguntó si yo conocía a alguien que hubiera estudiado allí.",
          "Preguntó si todavía podía venir a practicar español después de graduarse.",
          "Preguntó si la universidad tenía buen apoyo para estudiantes latinos.",
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        scenarios: ["the advisor's next steps", "confirming enrollment", "orientation in August"],
        examples: [
          "Le dijo que tenía que confirmar su matrícula antes de junio.",
          "Le dijo que la orientación sería la primera semana de agosto.",
          "Le dijo que mandara los documentos lo antes posible.",
        ],
      },
    ],
  },
  {
    day: 112,
    theme: "Repaso: dijo que",
    subtitle: "One student's whole scholarship story — five sentences of reported speech.",
    frames: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        scenarios: ["how it all started", "the interview itself", "the endless wait"],
        examples: [
          "Dijo que todo había empezado con tarjetas y muchos nervios.",
          "Dijo que la entrevista fue difícil pero salió bien.",
          "Dijo que dos semanas de espera se le hicieron eternas.",
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        scenarios: ["the sleepless night", "questions about family and goals", "seeing congratulations in the email"],
        examples: [
          "Me contó que casi no durmió la noche anterior.",
          "Me contó que le hicieron preguntas sobre su familia y sus metas.",
          "Me contó que gritó cuando vio la palabra felicitaciones en el correo.",
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        scenarios: ["his mom crying", "four years fully covered", "a plan for university"],
        examples: [
          "Mencionó que su mamá lloró cuando le contó la noticia.",
          "Mencionó que la beca cubría cuatro años completos.",
          "Mencionó que ya tenía un plan para la universidad.",
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        scenarios: ["whether you remember his nerves", "if the effort was worth it", "using the lounge to celebrate"],
        examples: [
          "Preguntó si yo recordaba lo nervioso que estaba al principio.",
          "Preguntó si creía que el esfuerzo había valido la pena.",
          "Preguntó si podía usar la sala de maestros para celebrar con su familia.",
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        scenarios: ["Marlana's pride", "the merit was his", "he'll be a great engineer"],
        examples: [
          "Le dijo que todo el esfuerzo había valido la pena.",
          "Le dijo que su familia estaba muy orgullosa de él.",
          "Le dijo que iba a aprovechar cada oportunidad.",
        ],
      },
    ],
  },
];
