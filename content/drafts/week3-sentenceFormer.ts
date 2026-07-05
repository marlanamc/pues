import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 3 draft — Sentence Former banks (days 106–112).
 * Stems must match content/drafts/week3-frames.ts.
 */
export const week3SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 106,
    theme: "Antes de la entrevista",
    stems: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        hints: {
          que: [
            { es: "estaba nervioso", en: "he was nervous" },
            { es: "tenía la entrevista mañana", en: "he had the interview tomorrow" },
          ],
        },
        completions: [
          { es: "estaba muy nervioso", en: "he was very nervous", category: "opinion" },
          { es: "tenía la entrevista al día siguiente", en: "he had the interview the next day", category: "time" },
          { es: "había repasado toda la semana", en: "he'd reviewed all week", category: "activity" },
          { es: "no había dormido bien", en: "he hadn't slept well", category: "other" },
          { es: "la beca era muy importante para él", en: "the scholarship was very important to him", category: "opinion" },
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        completions: [
          { es: "no había dormido bien anoche", en: "he hadn't slept well last night", category: "time" },
          { es: "había preparado tarjetas", en: "he'd prepared flashcards", category: "activity" },
          { es: "su mamá estaba ansiosa también", en: "his mom was anxious too", category: "other" },
          { es: "llevaba meses preparándose", en: "he'd been preparing for months", category: "time" },
          { es: "otros estudiantes también competían", en: "other students were competing too", category: "other" },
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        completions: [
          { es: "la beca cubría la universidad completa", en: "the scholarship covered the full university", category: "other" },
          { es: "había hecho tarjetas con preguntas", en: "he'd made flashcards with questions", category: "activity" },
          { es: "competían muchos por el mismo premio", en: "many were competing for the same award", category: "other" },
          { es: "la entrevista era al día siguiente", en: "the interview was the next day", category: "time" },
          { es: "había practicado con un amigo", en: "he'd practiced with a friend", category: "activity" },
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        completions: [
          { es: "yo creía que estaba listo", en: "I thought he was ready", category: "opinion" },
          { es: "las tarjetas eran suficientes", en: "the flashcards were enough", category: "other" },
          { es: "podía practicar un rato más", en: "he could practice a little more", category: "activity" },
          { es: "la entrevista sería difícil", en: "the interview would be hard", category: "opinion" },
          { es: "yo había pasado por algo similar", en: "I'd been through something similar", category: "other" },
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        completions: [
          { es: "confiara en lo que había preparado", en: "he should trust what he'd prepared", category: "opinion" },
          { es: "había trabajado demasiado para rendirse", en: "he'd worked too hard to give up", category: "opinion" },
          { es: "todo iba a salir bien", en: "everything was going to be okay", category: "opinion" },
          { es: "estaba orgullosa de él", en: "she was proud of him", category: "opinion" },
          { es: "respirara antes de empezar", en: "he should breathe before starting", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 107,
    theme: "La entrevista",
    stems: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        completions: [
          { es: "la entrevista había durado media hora", en: "the interview had lasted half an hour", category: "time" },
          { es: "le habían hecho preguntas difíciles", en: "they'd asked him hard questions", category: "other" },
          { es: "al principio se había quedado en blanco", en: "at first he'd blanked", category: "other" },
          { es: "había respondido con calma al final", en: "he'd answered calmly in the end", category: "opinion" },
          { es: "se había sentido mejor al terminar", en: "he'd felt better when it ended", category: "opinion" },
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        completions: [
          { es: "un evaluador le preguntó por qué quería la beca", en: "an evaluator asked why he wanted the scholarship", category: "other" },
          { es: "tuvo que hablar de su familia", en: "he had to talk about his family", category: "other" },
          { es: "le preguntaron sobre sus notas", en: "they asked about his grades", category: "other" },
          { es: "había respondido con honestidad", en: "he'd answered honestly", category: "opinion" },
          { es: "le debían avisar en dos semanas", en: "they were supposed to notify him in two weeks", category: "time" },
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        completions: [
          { es: "le preguntaron sobre sus notas", en: "they asked about his grades", category: "other" },
          { es: "tuvo que hablar de su familia", en: "he had to talk about his family", category: "other" },
          { es: "había tres evaluadores en la sala", en: "there were three evaluators in the room", category: "other" },
          { es: "la pregunta más difícil fue sobre sus metas", en: "the hardest question was about his goals", category: "other" },
          { es: "le debían dar una respuesta pronto", en: "they were supposed to give an answer soon", category: "time" },
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        completions: [
          { es: "había respondido bien", en: "he'd answered well", category: "opinion" },
          { es: "sus respuestas sonaban honestas", en: "his answers sounded honest", category: "opinion" },
          { es: "yo había visto entrevistas así", en: "I'd seen interviews like this", category: "other" },
          { es: "una pregunta lo había arruinado todo", en: "one question had ruined everything", category: "opinion" },
          { es: "todavía tenía posibilidades", en: "he still had a chance", category: "opinion" },
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        completions: [
          { es: "había respondido con mucha claridad", en: "he'd answered very clearly", category: "opinion" },
          { es: "había hecho una buena impresión", en: "he'd made a good impression", category: "opinion" },
          { es: "le avisarían en unas semanas", en: "they'd notify him in a few weeks", category: "time" },
          { es: "no se preocupara tanto", en: "he shouldn't worry so much", category: "opinion" },
          { es: "había sonado muy sincero", en: "he'd sounded very sincere", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 108,
    theme: "La espera",
    stems: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        completions: [
          { es: "revisaba el correo todos los días", en: "he checked his email every day", category: "activity" },
          { es: "no podía dejar de pensar en la respuesta", en: "he couldn't stop thinking about the answer", category: "opinion" },
          { es: "cada día se le hacía más largo", en: "each day felt longer", category: "time" },
          { es: "ya llevaba una semana esperando", en: "he'd already been waiting a week", category: "time" },
          { es: "trataba de concentrarse en clases", en: "he tried to focus in class", category: "activity" },
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        completions: [
          { es: "había soñado con la carta de aceptación", en: "he'd dreamed about the acceptance letter", category: "other" },
          { es: "su mamá también estaba ansiosa", en: "his mom was anxious too", category: "opinion" },
          { es: "algunos amigos ya habían recibido respuestas", en: "some friends had already gotten answers", category: "other" },
          { es: "casi no podía estudiar", en: "he could hardly study", category: "activity" },
          { es: "había revisado el correo diez veces hoy", en: "he'd checked his email ten times today", category: "activity" },
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        completions: [
          { es: "faltaban cinco días para la fecha límite", en: "five days were left until the deadline", category: "time" },
          { es: "algunos amigos ya sabían la respuesta", en: "some friends already knew the answer", category: "other" },
          { es: "le costaba concentrarse en las clases", en: "he had trouble focusing in class", category: "activity" },
          { es: "había pensado en mandar un correo", en: "he'd thought about sending an email", category: "activity" },
          { es: "su mamá revisaba el correo también", en: "his mom checked email too", category: "other" },
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        completions: [
          { es: "era normal esperar tanto", en: "it was normal to wait this long", category: "opinion" },
          { es: "todavía tenía posibilidades", en: "he still had a chance", category: "opinion" },
          { es: "debería mandar un correo", en: "he should send an email", category: "activity" },
          { es: "yo pensaba que lo había hecho bien", en: "I thought he'd done well", category: "opinion" },
          { es: "la espera podía durar más", en: "the wait could last longer", category: "time" },
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        completions: [
          { es: "no se obsesionara con el correo", en: "he shouldn't obsess over his email", category: "opinion" },
          { es: "la respuesta llegaría a su tiempo", en: "the answer would come in its time", category: "time" },
          { es: "ya había hecho su parte", en: "he'd already done his part", category: "opinion" },
          { es: "no perdiera la esperanza", en: "he shouldn't lose hope", category: "opinion" },
          { es: "la espera era lo más difícil", en: "the wait was the hardest part", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 109,
    theme: "La respuesta",
    stems: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        completions: [
          { es: "le habían dado la beca", en: "they'd given him the scholarship", category: "other" },
          { es: "había recibido el correo esa mañana", en: "he'd gotten the email that morning", category: "time" },
          { es: "casi no podía creerlo", en: "he could hardly believe it", category: "opinion" },
          { es: "había llorado de la emoción", en: "he'd cried from excitement", category: "opinion" },
          { es: "tenía que firmar antes del viernes", en: "he had to sign before Friday", category: "time" },
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        completions: [
          { es: "gritó cuando leyó la primera línea", en: "he shouted when he read the first line", category: "other" },
          { es: "su mamá corrió cuando lo escuchó", en: "his mom ran when she heard him", category: "other" },
          { es: "había llorado de la emoción", en: "he'd cried from excitement", category: "opinion" },
          { es: "casi no podía hablar", en: "he could hardly speak", category: "other" },
          { es: "leyó la carta tres veces", en: "he read the letter three times", category: "activity" },
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        completions: [
          { es: "la carta incluía libros y una laptop", en: "the letter included books and a laptop", category: "other" },
          { es: "empezaba en el otoño", en: "it started in the fall", category: "time" },
          { es: "tenía que firmar antes del viernes", en: "he had to sign before Friday", category: "time" },
          { es: "era la universidad de sus sueños", en: "it was his dream university", category: "opinion" },
          { es: "la carta decía felicitaciones", en: "the letter said congratulations", category: "other" },
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        completions: [
          { es: "podía contárselo a los maestros", en: "he could tell the teachers", category: "other" },
          { es: "yo me acordaba de sus nervios", en: "I remembered his nerves", category: "opinion" },
          { es: "iba a la universidad de sus sueños", en: "he was going to his dream university", category: "other" },
          { es: "yo sabía lo que sentía", en: "I knew how he felt", category: "opinion" },
          { es: "podía celebrar después de clases", en: "he could celebrate after class", category: "activity" },
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        completions: [
          { es: "era el día más feliz de su vida", en: "it was the happiest day of her life", category: "opinion" },
          { es: "siempre había creído en él", en: "she'd always believed in him", category: "opinion" },
          { es: "siempre había sabido que lo lograría", en: "she'd always known he'd make it", category: "opinion" },
          { es: "quería abrazarlo en persona", en: "she wanted to hug him in person", category: "other" },
          { es: "estaba muy orgullosa de él", en: "she was very proud of him", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 110,
    theme: "Contándole a su mamá",
    stems: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        completions: [
          { es: "le había llamado en cuanto recibió la carta", en: "he'd called her as soon as he got the letter", category: "time" },
          { es: "ella no podía hablar al principio", en: "she couldn't speak at first", category: "other" },
          { es: "lloró casi tanto como él", en: "she cried almost as much as he did", category: "other" },
          { es: "hablaron casi una hora", en: "they talked for almost an hour", category: "time" },
          { es: "repitió la noticia tres veces", en: "he repeated the news three times", category: "other" },
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        completions: [
          { es: "su mamá pensó que era una broma", en: "his mom thought it was a joke", category: "other" },
          { es: "repitió la noticia tres veces", en: "he repeated the news three times", category: "other" },
          { es: "ella le dijo que siempre había creído en él", en: "she told him she'd always believed in him", category: "opinion" },
          { es: "hablaron casi una hora por teléfono", en: "they talked almost an hour on the phone", category: "time" },
          { es: "toda la familia celebró esa noche", en: "the whole family celebrated that night", category: "activity" },
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        completions: [
          { es: "su abuela también lloró", en: "his grandmother cried too", category: "other" },
          { es: "su papá iba a faltar al trabajo", en: "his dad was going to miss work", category: "activity" },
          { es: "su mamá quería celebrar con la familia", en: "his mom wanted to celebrate with the family", category: "activity" },
          { es: "querían hacer una cena especial", en: "they wanted to have a special dinner", category: "food" },
          { es: "su familia estaba muy emocionada", en: "his family was very excited", category: "opinion" },
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        completions: [
          { es: "podía invitar a su mamá a la escuela", en: "he could invite his mom to school", category: "other" },
          { es: "yo había contado la noticia a alguien", en: "I'd told the news to someone", category: "other" },
          { es: "las familias hacían algo especial", en: "families did something special", category: "other" },
          { es: "podía traer a su mamá algún día", en: "he could bring his mom someday", category: "time" },
          { es: "había otras familias orgullosas así", en: "there were other proud families like this", category: "other" },
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He told her that…",
        completions: [
          { es: "la beca cubría cuatro años", en: "the scholarship covered four years", category: "other" },
          { es: "iba a estudiar ingeniería", en: "he was going to study engineering", category: "activity" },
          { es: "todo el esfuerzo había valido la pena", en: "all the effort had been worth it", category: "opinion" },
          { es: "por fin lo había logrado", en: "he'd finally made it", category: "opinion" },
          { es: "empezaba en el otoño", en: "it started in the fall", category: "time" },
        ],
      },
    ],
  },
  {
    day: 111,
    theme: "El plan",
    stems: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        completions: [
          { es: "iba a estudiar ingeniería civil", en: "he was going to study civil engineering", category: "activity" },
          { es: "la beca pagaba matrícula y libros", en: "the scholarship paid tuition and books", category: "other" },
          { es: "quería trabajar solo si era necesario", en: "he wanted to work only if necessary", category: "activity" },
          { es: "pensaba ayudar a su mamá", en: "he was thinking of helping his mom", category: "other" },
          { es: "el programa empezaba en agosto", en: "the program started in August", category: "time" },
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        completions: [
          { es: "ya había mirado los dormitorios", en: "he'd already looked at the dorms", category: "activity" },
          { es: "quería guardar para emergencias", en: "he wanted to save for emergencies", category: "other" },
          { es: "pensaba ayudar a su mamá", en: "he was thinking of helping his mom", category: "other" },
          { es: "había hablado con un orientador", en: "he'd talked to an advisor", category: "other" },
          { es: "tenía que llenar más papeles", en: "he had to fill out more paperwork", category: "activity" },
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        completions: [
          { es: "el programa empezaba en agosto", en: "the program started in August", category: "time" },
          { es: "tenía que confirmar antes de junio", en: "he had to confirm before June", category: "time" },
          { es: "un orientador lo iba a contactar", en: "an advisor was going to contact him", category: "other" },
          { es: "había mirado el campus en línea", en: "he'd looked at the campus online", category: "activity" },
          { es: "la orientación era en agosto", en: "orientation was in August", category: "time" },
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        completions: [
          { es: "yo conocía a alguien que estudiara allí", en: "I knew someone who'd studied there", category: "other" },
          { es: "podía venir a practicar después", en: "he could come practice afterward", category: "activity" },
          { es: "había apoyo para estudiantes latinos", en: "there was support for Latino students", category: "other" },
          { es: "la universidad tenía buenos programas", en: "the university had good programs", category: "opinion" },
          { es: "todavía podía contar conmigo", en: "he could still count on me", category: "other" },
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He/She told him that…",
        completions: [
          { es: "tenía que confirmar antes de junio", en: "he had to confirm before June", category: "time" },
          { es: "la orientación era en agosto", en: "orientation was in August", category: "time" },
          { es: "mandara los documentos pronto", en: "he should send the documents soon", category: "activity" },
          { es: "tenía un plan muy sensato", en: "he had a very sensible plan", category: "opinion" },
          { es: "podía escribirle con preguntas", en: "he could write with questions", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 112,
    theme: "Repaso: dijo que",
    stems: [
      {
        stem: "Dijo que…",
        english: "He said that…",
        hints: {
          que: [
            { es: "todo había empezado con tarjetas", en: "it all started with flashcards" },
            { es: "la entrevista fue difícil", en: "the interview was hard" },
          ],
        },
        completions: [
          { es: "todo había empezado con tarjetas", en: "it all started with flashcards", category: "other" },
          { es: "la entrevista fue difícil pero salió bien", en: "the interview was hard but went well", category: "opinion" },
          { es: "dos semanas de espera fueron eternas", en: "two weeks of waiting felt eternal", category: "time" },
          { es: "le habían dado la beca", en: "they'd given him the scholarship", category: "other" },
          { es: "casi no durmió la noche anterior", en: "he hardly slept the night before", category: "time" },
        ],
      },
      {
        stem: "Me contó que…",
        english: "He told me that…",
        completions: [
          { es: "gritó cuando vio felicitaciones", en: "he shouted when he saw congratulations", category: "other" },
          { es: "le hicieron preguntas sobre su familia", en: "they asked him questions about his family", category: "other" },
          { es: "casi no durmió antes de la entrevista", en: "he hardly slept before the interview", category: "time" },
          { es: "su mamá lloró de alegría", en: "his mom cried with joy", category: "other" },
          { es: "había preparado tarjetas durante meses", en: "he'd prepared flashcards for months", category: "activity" },
        ],
      },
      {
        stem: "Mencionó que…",
        english: "He mentioned that…",
        completions: [
          { es: "la beca cubría cuatro años", en: "the scholarship covered four years", category: "other" },
          { es: "su mamá lloró cuando se enteró", en: "his mom cried when she found out", category: "other" },
          { es: "ya tenía un plan para la universidad", en: "he already had a plan for university", category: "other" },
          { es: "iba a estudiar ingeniería civil", en: "he was going to study civil engineering", category: "activity" },
          { es: "el programa empezaba en agosto", en: "the program started in August", category: "time" },
        ],
      },
      {
        stem: "Preguntó si…",
        english: "He asked if…",
        completions: [
          { es: "yo recordaba lo nervioso que estaba", en: "I remembered how nervous he was", category: "opinion" },
          { es: "el esfuerzo había valido la pena", en: "the effort had been worth it", category: "opinion" },
          { es: "podía usar la sala para celebrar", en: "he could use the lounge to celebrate", category: "activity" },
          { es: "yo estaba orgullosa de él", en: "I was proud of him", category: "opinion" },
          { es: "creía que lo había hecho bien", en: "I thought he'd done well", category: "opinion" },
        ],
      },
      {
        stem: "Le dijo que…",
        english: "He told her that…",
        completions: [
          { es: "todo el esfuerzo había valido la pena", en: "all the effort had been worth it", category: "opinion" },
          { es: "su familia estaba muy orgullosa", en: "his family was very proud", category: "opinion" },
          { es: "iba a aprovechar cada oportunidad", en: "he was going to make the most of every opportunity", category: "opinion" },
          { es: "la beca cubría cuatro años", en: "the scholarship covered four years", category: "other" },
          { es: "por fin lo había logrado", en: "he'd finally made it", category: "opinion" },
        ],
      },
    ],
  },
];
