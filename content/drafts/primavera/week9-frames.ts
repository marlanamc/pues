import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 9 — "Profundizar" (days 330–336). Follow-up chains that keep
 * one topic alive five turns. Story: "El problema de Rocío" — Camila and
 * Marlana dig into what happened at school instead of letting the thread die.
 */
export const priWeek9FrameDays: FrameDay[] = [
  {
    day: 330,
    theme: "Profundizar: El problema de Rocío",
    subtitle: "She said she had a problem. You said you were sorry and let her go.",
    frames: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        scenarios: ["when someone drops half a story", "Rocío in the hallway", "not changing subject"],
        examples: [
          "¿Y eso? ¿Qué pasó en la reunión?",
          "¿Y eso? No me lo contaste entero.",
          "¿Y eso? Suena a más que un mal día.",
        ],
        note: "Two words that refuse to let the topic die. You say it like you mean to stay — not like you're being nosy.",
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        scenarios: ["when the how isn't clear", "asking for the mechanism", "pulling the thread"],
        examples: [
          "¿Cómo así? ¿Te metieron sin avisar?",
          "¿Cómo así? ¿Traducir sin prepararte?",
          "¿Cómo así? Eso no suena a Rocío.",
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        scenarios: ["following one person", "the parent in the story", "the email afterward"],
        examples: [
          "¿Y qué pasó con el papá después?",
          "¿Y qué pasó con la niña del grupo de lectura?",
          "¿Y qué pasó con la directora al final?",
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        scenarios: ["the next beat", "after the meeting ended", "keeping the chain going"],
        examples: [
          "¿Y después? ¿Te mandaron un correo?",
          "¿Y después? ¿Rocío siguió en la escuela?",
          "¿Y después? ¿Alguien le pidió disculpas?",
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        scenarios: ["disbelief that keeps you listening", "not closing the topic", "inviting more"],
        examples: [
          "¿En serio? ¿Te echaron la culpa a ti?",
          "¿En serio? ¿Sin darte contexto?",
          "¿En serio? Cuéntame todo.",
        ],
        note: "Sounds like reaction — works like a follow-up. The story keeps going because you won't accept the short version.",
      },
    ],
  },
  {
    day: 331,
    theme: "Profundizar: ¿Y eso?",
    subtitle: "She gave you one sentence. There were five more behind it.",
    frames: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        scenarios: ["Camila at café", "practicing on Rocío's line", "the hallway moment again"],
        examples: [
          "¿Y eso? ¿Qué problema tuvo Rocío?",
          "¿Y eso? ¿Fue en la reunión de padres?",
          "¿Y eso? No le preguntaste nada más.",
        ],
        note: "*¿Y eso?* is the cheapest follow-up there is — and the hardest to skip once you know it works.",
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        scenarios: ["when Rocío looked shaken", "why it wasn't a small thing", "Marlana guessing wrong"],
        examples: [
          "¿Cómo así? ¿Te dijo solo eso y ya?",
          "¿Cómo así? ¿No te quedaste un minuto?",
          "¿Cómo así? Suena a traducción, no a pelea.",
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        scenarios: ["the parent conference", "who else was there", "the girl's reading group"],
        examples: [
          "¿Y qué pasó con la niña del grupo de lectura?",
          "¿Y qué pasó con la mamá de la niña?",
          "¿Y qué pasó con la maestra de Rocío?",
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        scenarios: ["after Rocío walked away", "what Marlana did wrong", "what she'll do tomorrow"],
        examples: [
          "¿Y después? ¿La buscaste en el pasillo?",
          "¿Y después? ¿Te quedaste con la culpa?",
          "¿Y después? ¿Le mandaste un mensaje?",
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        scenarios: ["Camila pushing back", "Marlana's excuse", "why sorry isn't enough"],
        examples: [
          "¿En serio? ¿Solo dijiste \"qué mal\"?",
          "¿En serio? ¿Y te fuiste a clase?",
          "¿En serio? Rocío necesitaba una pregunta, no un abrazo mental.",
        ],
      },
    ],
  },
  {
    day: 332,
    theme: "Profundizar: ¿Cómo así?",
    subtitle: "The how is where the story lives. You were skipping it.",
    frames: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        scenarios: ["Rocío's text arrives", "new detail", "still on the same topic"],
        examples: [
          "¿Y eso? ¿Te pidieron traducir en la reunión?",
          "¿Y eso? ¿Sin avisarte antes?",
          "¿Y eso? Eso explica la cara.",
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        scenarios: ["the mechanism Camila wants", "how they pulled Rocío in", "no prep, no context"],
        examples: [
          "¿Cómo así? ¿La directora la agarró en la copiadora?",
          "¿Cómo así? ¿Sin decirle de qué era la reunión?",
          "¿Cómo así? ¿Rocío no pudo decir que no?",
        ],
        note: "*¿Cómo así?* asks for the machinery — not whether it happened, but how on earth it happened.",
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        scenarios: ["the principal", "the classroom teacher", "the bilingual stipend"],
        examples: [
          "¿Y qué pasó con la maestra del salón?",
          "¿Y qué pasó con el papá cuando oyó la respuesta?",
          "¿Y qué pasó con la niña mientras traducían?",
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        scenarios: ["inside the meeting", "the moment it went wrong", "Rocío's version"],
        examples: [
          "¿Y después? ¿Qué preguntó el papá?",
          "¿Y después? ¿Rocío supo qué responder?",
          "¿Y después? ¿Alguien paró la reunión?",
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        scenarios: ["school using Rocío as default translator", "Marlana's anger", "Camila nodding"],
        examples: [
          "¿En serio? ¿La meten así, sin preparación?",
          "¿En serio? ¿Eso pasa en tu escuela también?",
          "¿En serio? No me extraña que estuviera así.",
        ],
      },
    ],
  },
  {
    day: 333,
    theme: "Profundizar: ¿Y qué pasó con…?",
    subtitle: "Pick one thread — the parent, the kid, the email — and don't let go.",
    frames: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        scenarios: ["the reading group detail", "why the parent got mad", "new piece from Rocío"],
        examples: [
          "¿Y eso? ¿Movieron a la niña de grupo?",
          "¿Y eso? ¿Rocío no sabía el contexto?",
          "¿Y eso? ¿Tradujo una pregunta difícil?",
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        scenarios: ["why the translation landed wrong", "lower reading group", "sound like punishment"],
        examples: [
          "¿Cómo así? ¿Sonó a castigo para la niña?",
          "¿Cómo así? ¿Rocío no conocía el historial?",
          "¿Cómo así? ¿Nadie le explicó el plan antes?",
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        scenarios: ["the father", "the daughter", "the classroom teacher's explanation"],
        examples: [
          "¿Y qué pasó con el papá cuando leyó el correo?",
          "¿Y qué pasó con la niña al día siguiente?",
          "¿Y qué pasó con la maestra que pidió el cambio de grupo?",
        ],
        note: "Name the person or thing — *¿Y qué pasó con el papá?* turns a vague problem into a scene you can see.",
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        scenarios: ["parent complained", "principal's reaction", "Rocío left the room"],
        examples: [
          "¿Y después? ¿El papá habló con la directora?",
          "¿Y después? ¿Rocío salió llorando o furiosa?",
          "¿Y después? ¿Alguien tradujo bien la respuesta?",
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        scenarios: ["blaming the translator", "school process failure", "Marlana at café"],
        examples: [
          "¿En serio? ¿Le echaron la culpa a Rocío?",
          "¿En serio? ¿Sin darle la carpeta antes?",
          "¿En serio? Eso es usar a alguien, no pedir un favor.",
        ],
      },
    ],
  },
  {
    day: 334,
    theme: "Profundizar: ¿Y después?",
    subtitle: "The meeting ended. That's when half the story usually gets lost.",
    frames: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        scenarios: ["the email Rocío got", "aftermath at school", "still same story"],
        examples: [
          "¿Y eso? ¿Le mandaron un correo el mismo día?",
          "¿Y eso? ¿Hablaba del estipendio bilingüe?",
          "¿Y eso? ¿Rocío pensó que la iban a quitar?",
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        scenarios: ["the word \"overstepped\"", "blame by email", "no conversation after"],
        examples: [
          "¿Cómo así? ¿Le dijeron que \"se pasó de la raya\"?",
          "¿Cómo así? ¿Por correo y no en persona?",
          "¿Cómo así? ¿Sin preguntarle su versión?",
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        scenarios: ["the stipend", "the principal's apology", "Rocío's colleague"],
        examples: [
          "¿Y qué pasó con el coordinador bilingüe?",
          "¿Y qué pasó con la directora después del correo?",
          "¿Y qué pasó con la familia de la niña?",
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        scenarios: ["Thursday morning", "Rocío in the lounge", "Marlana finally asking"],
        examples: [
          "¿Y después? ¿Rocío fue a clase o se quedó en la oficina?",
          "¿Y después? ¿Alguien le dijo que no fue su culpa?",
          "¿Y después? ¿La directora la llamó a hablar?",
        ],
        note: "*¿Y después?* is for the beat after the beat — the part people skip when they're being polite.",
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        scenarios: ["email instead of conversation", "Marlana using it with Rocío", "disbelief as follow-up"],
        examples: [
          "¿En serio? ¿Te mandaron eso por escrito?",
          "¿En serio? ¿Y tú traduciste sin la carpeta?",
          "¿En serio? Cuéntame la parte del correo.",
        ],
      },
    ],
  },
  {
    day: 335,
    theme: "Profundizar: ¿En serio?",
    subtitle: "Disbelief isn't changing the subject. It's staying on it harder.",
    frames: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        scenarios: ["Rocío's update", "principal apologized", "twist in the story"],
        examples: [
          "¿Y eso? ¿La directora pidió disculpas?",
          "¿Y eso? ¿Al final no le quitaron nada?",
          "¿Y eso? ¿Rocío sigue enojada igual?",
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        scenarios: ["apology but no process change", "why Rocío is still shaken", "Marlana asking Rocío directly"],
        examples: [
          "¿Cómo así? ¿Perdón pero mismo sistema?",
          "¿Cómo así? ¿Te pidieron traducir otra vez ayer?",
          "¿Cómo así? ¿Te sientes mejor o solo menos en peligro?",
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        scenarios: ["the girl's reading group", "the father's complaint", "the folder protocol"],
        examples: [
          "¿Y qué pasó con el grupo de lectura de la niña?",
          "¿Y qué pasó con el papá después de la disculpa?",
          "¿Y qué pasó con la regla de avisar antes?",
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        scenarios: ["what Rocío wants now", "what Marlana offered", "staying five turns"],
        examples: [
          "¿Y después? ¿Le ofreciste hablar con la directora?",
          "¿Y después? ¿Rocío dijo que sí o que no?",
          "¿Y después? ¿Se quedaron hablando diez minutos?",
        ],
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        scenarios: ["Marlana with Rocío in person", "not letting her shrug it off", "Camila's lesson landing"],
        examples: [
          "¿En serio? ¿Te volvieron a pedir sin avisar?",
          "¿En serio? ¿Y aguantaste otra reunión?",
          "¿En serio? Rocío, eso no está bien.",
        ],
        note: "*¿En serio?* said to a friend isn't doubt — it's *sigue contando*. You're holding the door open.",
      },
    ],
  },
  {
    day: 336,
    theme: "Profundizar: Repaso",
    subtitle: "Same story, better — five follow-ups, one thread, no subject change.",
    frames: [
      {
        stem: "¿Y eso?…",
        english: "And that? / How come? / Wait — and that?",
        scenarios: ["retelling beat one", "the hallway hook", "repaso chain"],
        examples: [
          "¿Y eso? Rocío tuvo un problema en la reunión de padres.",
          "¿Y eso? Me lo dijo en el pasillo y yo solo dije \"qué mal\".",
          "¿Y eso? Fue la semana entera profundizando, no soltando.",
        ],
      },
      {
        stem: "¿Cómo así?…",
        english: "How so? / How come? / Say more…",
        scenarios: ["retelling beat two", "copier room detail", "same story better"],
        examples: [
          "¿Cómo así? La directora la agarró en la copiadora sin contexto.",
          "¿Cómo así? La metieron a traducir una queja de un papá.",
          "¿Cómo así? Rocío no tenía la carpeta ni el historial.",
        ],
      },
      {
        stem: "¿Y qué pasó con…?",
        english: "And what happened with…? / And how did … turn out?",
        scenarios: ["retelling beat three", "the father and the reading group", "named thread"],
        examples: [
          "¿Y qué pasó con el papá? Preguntó por qué bajaron a la niña de grupo.",
          "¿Y qué pasó con la niña? Rocío tradujo sin saber que era apoyo, no castigo.",
          "¿Y qué pasó con la maestra? Nunca entró a aclarar en la reunión.",
        ],
      },
      {
        stem: "¿Y después?…",
        english: "And then? / What happened next? / And after that?",
        scenarios: ["retelling beat four", "email and apology", "week 9.5 detail folded in"],
        examples: [
          "¿Y después? Le mandaron un correo diciendo que se pasó de la raya.",
          "¿Y después? Rocío pensó que le quitarían el estipendio bilingüe.",
          "¿Y después? La directora pidió disculpas, pero el sistema sigue igual.",
        ],
        note: "Day 42's move: five stems, one story. Here Marlana retells Rocío's week with the detail she earned by not changing subject.",
      },
      {
        stem: "¿En serio?…",
        english: "Seriously? / For real? / Wait, really?",
        scenarios: ["retelling beat five", "what Marlana learned", "closing the chain"],
        examples: [
          "¿En serio? Una semana entera y nunca cambié de tema.",
          "¿En serio? Cinco preguntas y la historia completa.",
          "¿En serio? Profundizar es quedarte, no ser entrometida.",
        ],
      },
    ],
  },
];
