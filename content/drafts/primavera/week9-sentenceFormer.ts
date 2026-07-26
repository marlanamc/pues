import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 9 — "Profundizar" (days 330–336).
 * Stems must match content/drafts/primavera/week9-frames.ts for the same day.
 */
export const priWeek9SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 330,
    theme: "El problema de Rocío",
    stems: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        completions: [
          { es: "¿qué pasó en la reunión?", en: "what happened at the meeting?", category: "other" },
          { es: "no me lo contaste entero", en: "you didn't tell me the whole thing", category: "other" },
          { es: "suena a más que un mal día", en: "sounds like more than a bad day", category: "opinion" },
          { es: "¿rocío sigue enojada?", en: "is rocío still angry?", category: "other" },
          { es: "¿fue en la escuela o en el café?", en: "was it at school or at the café?", category: "other" },
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        completions: [
          { es: "¿te metieron sin avisar?", en: "they pulled you in without warning?", category: "other" },
          { es: "¿traducir sin prepararte?", en: "translate without preparing you?", category: "activity" },
          { es: "eso no suena a rocío", en: "that doesn't sound like rocío", category: "opinion" },
          { es: "¿solo te dijo una frase?", en: "she only told you one sentence?", category: "other" },
          { es: "¿en el pasillo entre campanas?", en: "in the hallway between bells?", category: "time" },
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        completions: [
          { es: "el papá después?", en: "the dad afterward?", category: "other" },
          { es: "la niña del grupo de lectura?", en: "the girl in the reading group?", category: "other" },
          { es: "la directora al final?", en: "the principal in the end?", category: "other" },
          { es: "el correo que le mandaron?", en: "the email they sent her?", category: "other" },
          { es: "la maestra del salón?", en: "the classroom teacher?", category: "other" },
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        completions: [
          { es: "¿te mandaron un correo?", en: "did they send you an email?", category: "other" },
          { es: "¿rocío siguió en la escuela?", en: "did rocío stay at school?", category: "other" },
          { es: "¿alguien le pidió disculpas?", en: "did someone apologize to her?", category: "other" },
          { es: "¿hablaste con ella otra vez?", en: "did you talk to her again?", category: "activity" },
          { es: "¿el papá se calmó?", en: "did the dad calm down?", category: "other" },
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        completions: [
          { es: "¿te echaron la culpa a ti?", en: "they blamed you?", category: "other" },
          { es: "¿sin darte contexto?", en: "without giving you context?", category: "other" },
          { es: "cuéntame todo", en: "tell me everything", category: "activity" },
          { es: "¿solo dijiste \"qué mal\"?", en: "you only said \"that's too bad\"?", category: "other" },
          { es: "¿la meten a traducir así siempre?", en: "they always pull her in to translate like that?", category: "other" },
        ],
      },
    ],
  },
  {
    day: 331,
    theme: "¿Y eso?",
    stems: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        completions: [
          { es: "¿qué problema tuvo rocío?", en: "what problem did rocío have?", category: "other" },
          { es: "¿fue en la reunión de padres?", en: "was it at the parent conference?", category: "other" },
          { es: "no le preguntaste nada más", en: "you didn't ask her anything else", category: "other" },
          { es: "¿te pidieron traducir?", en: "they asked you to translate?", category: "activity" },
          { es: "¿sin avisarte antes?", en: "without telling you first?", category: "other" },
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        completions: [
          { es: "¿te dijo solo eso y ya?", en: "she only told you that and left?", category: "other" },
          { es: "¿no te quedaste un minuto?", en: "you didn't stay a minute?", category: "time" },
          { es: "suena a traducción, no a pelea", en: "sounds like translation, not a fight", category: "opinion" },
          { es: "¿rocío estaba llorando?", en: "was rocío crying?", category: "other" },
          { es: "¿en treinta segundos no da?", en: "thirty seconds isn't enough?", category: "time" },
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        completions: [
          { es: "la mamá de la niña?", en: "the girl's mom?", category: "other" },
          { es: "la maestra de rocío?", en: "rocío's teacher?", category: "other" },
          { es: "la reunión cuando terminó?", en: "the meeting when it ended?", category: "other" },
          { es: "el audio que te mandó?", en: "the voice note she sent you?", category: "other" },
          { es: "la niña del grupo de lectura?", en: "the girl in the reading group?", category: "other" },
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        completions: [
          { es: "¿la buscaste en el pasillo?", en: "did you look for her in the hallway?", category: "activity" },
          { es: "¿te quedaste con la culpa?", en: "were you left feeling guilty?", category: "opinion" },
          { es: "¿le mandaste un mensaje?", en: "did you send her a message?", category: "activity" },
          { es: "¿rocío contestó?", en: "did rocío answer?", category: "other" },
          { es: "¿fuiste a clase igual?", en: "did you go to class anyway?", category: "activity" },
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        completions: [
          { es: "¿solo dijiste \"qué mal\"?", en: "you only said \"that's too bad\"?", category: "other" },
          { es: "¿y te fuiste a clase?", en: "and you went on to class?", category: "activity" },
          { es: "rocío necesitaba una pregunta, no un abrazo mental", en: "rocío needed a question, not a mental hug", category: "opinion" },
          { es: "¿no le preguntaste nada?", en: "you didn't ask her anything?", category: "other" },
          { es: "¿así sueltas el hilo siempre?", en: "you always drop the thread like that?", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 332,
    theme: "¿Cómo así?",
    stems: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        completions: [
          { es: "¿te pidieron traducir en la reunión?", en: "they asked you to translate at the meeting?", category: "activity" },
          { es: "¿sin avisarte antes?", en: "without telling you first?", category: "other" },
          { es: "eso explica la cara", en: "that explains the face", category: "opinion" },
          { es: "¿rocío te mandó un audio?", en: "rocío sent you a voice note?", category: "other" },
          { es: "¿fue la directora?", en: "was it the principal?", category: "other" },
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        completions: [
          { es: "¿la directora la agarró en la copiadora?", en: "the principal grabbed her at the copier?", category: "other" },
          { es: "¿sin decirle de qué era la reunión?", en: "without telling her what the meeting was about?", category: "other" },
          { es: "¿rocío no pudo decir que no?", en: "rocío couldn't say no?", category: "other" },
          { es: "¿sin la carpeta del niño?", en: "without the child's folder?", category: "other" },
          { es: "¿en pleno pasillo?", en: "right in the hallway?", category: "other" },
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        completions: [
          { es: "la maestra del salón?", en: "the classroom teacher?", category: "other" },
          { es: "el papá cuando oyó la respuesta?", en: "the dad when he heard the answer?", category: "other" },
          { es: "la niña mientras traducían?", en: "the girl while they were translating?", category: "other" },
          { es: "el estipendio bilingüe?", en: "the bilingual stipend?", category: "other" },
          { es: "la directora después?", en: "the principal afterward?", category: "other" },
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        completions: [
          { es: "¿qué preguntó el papá?", en: "what did the dad ask?", category: "other" },
          { es: "¿rocío supo qué responder?", en: "did rocío know what to answer?", category: "other" },
          { es: "¿alguien paró la reunión?", en: "did someone stop the meeting?", category: "other" },
          { es: "¿salió llorando?", en: "did she leave crying?", category: "other" },
          { es: "¿le mandaron correo?", en: "did they send her an email?", category: "other" },
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        completions: [
          { es: "¿la meten así, sin preparación?", en: "they pull her in like that, with no prep?", category: "other" },
          { es: "¿eso pasa en tu escuela también?", en: "does that happen at your school too?", category: "other" },
          { es: "no me extraña que estuviera así", en: "doesn't surprise me she looked like that", category: "opinion" },
          { es: "¿nadie le dio la carpeta?", en: "nobody gave her the folder?", category: "other" },
          { es: "¿rocío es la traductora oficial?", en: "is rocío the official translator?", category: "other" },
        ],
      },
    ],
  },
  {
    day: 333,
    theme: "¿Y qué pasó con…?",
    stems: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        completions: [
          { es: "¿movieron a la niña de grupo?", en: "they moved the girl down a group?", category: "other" },
          { es: "¿rocío no sabía el contexto?", en: "rocío didn't know the context?", category: "other" },
          { es: "¿tradujo una pregunta difícil?", en: "she translated a hard question?", category: "activity" },
          { es: "¿el papá se enojó?", en: "did the dad get angry?", category: "other" },
          { es: "¿fue sobre lectura?", en: "was it about reading?", category: "other" },
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        completions: [
          { es: "¿sonó a castigo para la niña?", en: "did it sound like punishment for the girl?", category: "opinion" },
          { es: "¿rocío no conocía el historial?", en: "rocío didn't know the history?", category: "other" },
          { es: "¿nadie le explicó el plan antes?", en: "nobody explained the plan to her first?", category: "other" },
          { es: "¿tradujo \"bajar de grupo\" literal?", en: "did she translate \"move down a group\" literally?", category: "activity" },
          { es: "¿la maestra nunca entró?", en: "the teacher never came in?", category: "other" },
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        completions: [
          { es: "el papá cuando leyó el correo?", en: "the dad when he read the email?", category: "other" },
          { es: "la niña al día siguiente?", en: "the girl the next day?", category: "time" },
          { es: "la maestra que pidió el cambio de grupo?", en: "the teacher who requested the group change?", category: "other" },
          { es: "la carta que mandaron después?", en: "the letter they sent afterward?", category: "other" },
          { es: "el grupo de lectura al final?", en: "the reading group in the end?", category: "other" },
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        completions: [
          { es: "¿el papá habló con la directora?", en: "did the dad talk to the principal?", category: "activity" },
          { es: "¿rocío salió llorando o furiosa?", en: "did rocío leave crying or furious?", category: "other" },
          { es: "¿alguien tradujo bien la respuesta?", en: "did someone translate the answer properly?", category: "activity" },
          { es: "¿quejaron a rocío?", en: "did they complain about rocío?", category: "other" },
          { es: "¿terminó la reunión ahí?", en: "did the meeting end there?", category: "other" },
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        completions: [
          { es: "¿le echaron la culpa a rocío?", en: "they blamed rocío?", category: "other" },
          { es: "¿sin darle la carpeta antes?", en: "without giving her the folder first?", category: "other" },
          { es: "eso es usar a alguien, no pedir un favor", en: "that's using someone, not asking a favor", category: "opinion" },
          { es: "¿tradujo sola toda la reunión?", en: "she translated the whole meeting alone?", category: "activity" },
          { es: "¿nadie paró al papá?", en: "nobody stopped the dad?", category: "other" },
        ],
      },
    ],
  },
  {
    day: 334,
    theme: "¿Y después?",
    stems: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        completions: [
          { es: "¿le mandaron un correo el mismo día?", en: "they sent her an email the same day?", category: "other" },
          { es: "¿hablaba del estipendio bilingüe?", en: "was it about the bilingual stipend?", category: "other" },
          { es: "¿rocío pensó que la iban a quitar?", en: "rocío thought they were going to take it away?", category: "other" },
          { es: "¿fue por escrito?", en: "was it in writing?", category: "other" },
          { es: "¿la directora firmó el correo?", en: "did the principal sign the email?", category: "other" },
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        completions: [
          { es: "¿le dijeron que \"se pasó de la raya\"?", en: "they told her she \"overstepped\"?", category: "other" },
          { es: "¿por correo y no en persona?", en: "by email and not in person?", category: "other" },
          { es: "¿sin preguntarle su versión?", en: "without asking her version?", category: "other" },
          { es: "¿el mismo día de la reunión?", en: "the same day as the meeting?", category: "time" },
          { es: "¿nadie la defendió?", en: "nobody defended her?", category: "other" },
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        completions: [
          { es: "el coordinador bilingüe?", en: "the bilingual coordinator?", category: "other" },
          { es: "la directora después del correo?", en: "the principal after the email?", category: "other" },
          { es: "la familia de la niña?", en: "the girl's family?", category: "other" },
          { es: "el estipendio al final?", en: "the stipend in the end?", category: "other" },
          { es: "la queja del papá?", en: "the dad's complaint?", category: "other" },
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        completions: [
          { es: "¿rocío fue a clase o se quedó en la oficina?", en: "did rocío go to class or stay in the office?", category: "activity" },
          { es: "¿alguien le dijo que no fue su culpa?", en: "did someone tell her it wasn't her fault?", category: "other" },
          { es: "¿la directora la llamó a hablar?", en: "did the principal call her in to talk?", category: "activity" },
          { es: "¿rocío contestó el correo?", en: "did rocío reply to the email?", category: "activity" },
          { es: "¿le quitaron el estipendio?", en: "did they take away her stipend?", category: "other" },
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        completions: [
          { es: "¿te mandaron eso por escrito?", en: "they sent you that in writing?", category: "other" },
          { es: "¿y tú traduciste sin la carpeta?", en: "and you translated without the folder?", category: "activity" },
          { es: "cuéntame la parte del correo", en: "tell me the email part", category: "activity" },
          { es: "¿nadie le pidió disculpas?", en: "nobody apologized to her?", category: "other" },
          { es: "¿así tratan a la traductora?", en: "that's how they treat the translator?", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 335,
    theme: "¿En serio?",
    stems: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        completions: [
          { es: "¿la directora pidió disculpas?", en: "the principal apologized?", category: "other" },
          { es: "¿al final no le quitaron nada?", en: "in the end they didn't take anything away?", category: "other" },
          { es: "¿rocío sigue enojada igual?", en: "is rocío still just as angry?", category: "other" },
          { es: "¿volvieron a pedirle traducir?", en: "they asked her to translate again?", category: "activity" },
          { es: "¿mandaron carta al papá?", en: "they sent a letter to the dad?", category: "other" },
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        completions: [
          { es: "¿perdón pero mismo sistema?", en: "sorry but same system?", category: "opinion" },
          { es: "¿te pidieron traducir otra vez ayer?", en: "they asked you to translate again yesterday?", category: "activity" },
          { es: "¿te sientes mejor o solo menos en peligro?", en: "do you feel better or just less in danger?", category: "opinion" },
          { es: "¿disculpa sin cambiar la regla?", en: "apology without changing the rule?", category: "opinion" },
          { es: "¿diez minutos en el pasillo?", en: "ten minutes in the hallway?", category: "time" },
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        completions: [
          { es: "el grupo de lectura de la niña?", en: "the girl's reading group?", category: "other" },
          { es: "el papá después de la disculpa?", en: "the dad after the apology?", category: "other" },
          { es: "la regla de avisar antes?", en: "the rule about warning first?", category: "other" },
          { es: "la carta explicando el apoyo?", en: "the letter explaining the support?", category: "other" },
          { es: "el estipendio bilingüe?", en: "the bilingual stipend?", category: "other" },
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        completions: [
          { es: "¿le ofreciste hablar con la directora?", en: "did you offer to talk to the principal?", category: "activity" },
          { es: "¿rocío dijo que sí o que no?", en: "did rocío say yes or no?", category: "other" },
          { es: "¿se quedaron hablando diez minutos?", en: "did you keep talking for ten minutes?", category: "time" },
          { es: "¿alguien más se enteró?", en: "did anyone else find out?", category: "other" },
          { es: "¿rocío se rió al final?", en: "did rocío laugh at the end?", category: "other" },
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        completions: [
          { es: "¿te volvieron a pedir sin avisar?", en: "they asked you again without warning?", category: "other" },
          { es: "¿y aguantaste otra reunión?", en: "and you sat through another meeting?", category: "activity" },
          { es: "rocío, eso no está bien", en: "rocío, that's not okay", category: "opinion" },
          { es: "¿nadie le había preguntado tanto?", en: "nobody had asked her so much?", category: "other" },
          { es: "¿así es amiga, no entrometida?", en: "that's being a friend, not nosy?", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 336,
    theme: "El hermano de Camila",
    stems: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come?",
        completions: [
          { es: "¿tu hermano se viene para acá?", en: "your brother is moving here?", category: "other" },
          { es: "¿desde cuándo lo estaban planeando?", en: "how long have they been planning it?", category: "time" },
          { es: "¿y tú por qué no me habías dicho nada?", en: "and why hadn't you told me anything?", category: "other" },
          { es: "¿así, de un domingo para otro?", en: "just like that, from one sunday to the next?", category: "time" },
          { es: "¿y él qué dice de todo esto?", en: "and what does he say about all this?", category: "opinion" },
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / What do you mean?",
        completions: [
          { es: "¿consiguió el trabajo o se viene sin nada?", en: "did he get the job or is he coming with nothing?", category: "activity" },
          { es: "¿se viene solo o con la familia?", en: "is he coming alone or with the family?", category: "other" },
          { es: "¿y el visado ya está resuelto?", en: "and is the visa already sorted out?", category: "other" },
          { es: "¿te lo dijo por teléfono a esa hora?", en: "he told you on the phone at that hour?", category: "time" },
          { es: "¿tú estabas de acuerdo o no?", en: "were you on board or not?", category: "opinion" },
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…?",
        completions: [
          { es: "el apartamento que tenía en Medellín", en: "the apartment he had in medellín", category: "other" },
          { es: "el trabajo de allá, ¿renunció?", en: "the job there, did he quit?", category: "activity" },
          { es: "el carro, ¿lo vendió?", en: "the car, did he sell it?", category: "other" },
          { es: "la novia que tenía el año pasado", en: "the girlfriend he had last year", category: "time" },
          { es: "el plan de estudiar allá", en: "the plan to study there", category: "activity" },
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / And after that?",
        completions: [
          { es: "¿le dijo a tu mamá o te tocó a ti?", en: "did he tell your mom or did it fall to you?", category: "other" },
          { es: "¿qué dijo ella cuando se enteró?", en: "what did she say when she found out?", category: "other" },
          { es: "¿ya compró el pasaje o todavía no?", en: "did he buy the ticket already or not yet?", category: "time" },
          { es: "¿volvieron a hablar esa semana?", en: "did you talk again that week?", category: "time" },
          { es: "¿y ahora quién le busca casa?", en: "and now who looks for a place for him?", category: "activity" },
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously?",
        completions: [
          { es: "¿se va a quedar contigo?", en: "he's staying with you?", category: "other" },
          { es: "¿en ese apartamento donde apenas cabes tú?", en: "in that apartment where you barely fit?", category: "other" },
          { es: "¿y tú cuándo pensabas contarme esto?", en: "and when were you going to tell me this?", category: "time" },
          { es: "¿dos meses? ¿nada más dos?", en: "two months? just two?", category: "time" },
          { es: "¿y ya le dijiste que sí?", en: "and you already told him yes?", category: "other" },
        ],
      },
    ],
  },
];
