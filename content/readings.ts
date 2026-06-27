/**
 * Pues — La Lectura: a daily reading before bed.
 *
 * Each day has 4–5 vocab words pulled from the dialogue itself, then a short
 * natural conversation (6–8 lines) in Latin American Spanish. Designed for
 * low-energy evenings — purely receptive, nothing to produce.
 *
 * Themes mirror the 14-day speaking plan in content/frames.ts.
 */

export type VocabWord = {
  es: string;
  en: string;
  example: string;
};

export type DialogueLine = {
  speaker: "A" | "B";
  es: string;
  en: string;
};

export type ReadingDay = {
  day: number;
  themeEs: string;
  vocab: VocabWord[];
  dialogue: {
    title: string;
    situation: string;
    lines: DialogueLine[];
  };
};

export const readingDays: ReadingDay[] = [
  {
    day: 1,
    themeEs: "Deseos y planes",
    vocab: [
      { es: "por fin", en: "finally", example: "Por fin terminó la semana." },
      { es: "tengo ganas de", en: "I'm in the mood for", example: "Tengo ganas de pedir pizza esta noche." },
      { es: "me gustaría", en: "I would like", example: "Me gustaría salir a caminar." },
      { es: "voy a", en: "I'm going to", example: "Voy a quedarme en casa esta noche." },
      { es: "para variar", en: "for a change", example: "Hoy no tengo prisa, para variar." },
    ],
    dialogue: {
      title: "¿Qué vas a hacer esta noche?",
      situation: "En el pasillo de la escuela, al final del día",
      lines: [
        { speaker: "A", es: "Por fin terminó el día. ¿Qué vas a hacer esta noche?", en: "Finally the day is over. What are you going to do tonight?" },
        { speaker: "B", es: "Quiero quedarme en casa. Estoy agotada. ¿Y tú?", en: "I want to stay home. I'm exhausted. What about you?" },
        { speaker: "A", es: "Me gustaría salir a caminar, pero creo que también voy a quedarme.", en: "I'd like to go for a walk, but I think I'm going to stay in too." },
        { speaker: "B", es: "Tengo ganas de pedir pizza y ver algo en la tele.", en: "I'm in the mood to order pizza and watch something on TV." },
        { speaker: "A", es: "Eso suena perfecto. ¿Me mandas la recomendación si encuentras algo bueno?", en: "That sounds perfect. Send me the recommendation if you find something good?" },
        { speaker: "B", es: "Claro. Oye, mañana voy a llegar tarde — tengo una reunión a las ocho.", en: "Of course. Hey, I'm going to be late tomorrow — I have a meeting at eight." },
        { speaker: "A", es: "Ay, qué horror. Yo voy a llegar puntual para variar.", en: "Ugh, how awful. I'm going to be on time for a change." },
        { speaker: "B", es: "¡Eso quiero ver! Buenas noches.", en: "I'll believe it when I see it! Good night." },
      ],
    },
  },
  {
    day: 2,
    themeEs: "La vida diaria",
    vocab: [
      { es: "de camino", en: "on the way", example: "De camino al trabajo paré en la panadería." },
      { es: "me toca", en: "I have to / it's my turn", example: "Me toca dar cuatro clases hoy." },
      { es: "a lo mejor", en: "maybe / perhaps", example: "A lo mejor paso por ahí esta tarde." },
      { es: "valentía", en: "courage / bravery", example: "Tienes más valentía que yo viniendo en bici." },
      { es: "para variar", en: "for a change", example: "Hoy no hubo tráfico, para variar." },
    ],
    dialogue: {
      title: "El metro otra vez",
      situation: "En el andén del metro, por la mañana",
      lines: [
        { speaker: "A", es: "No puedo creer el tráfico que hay hoy.", en: "I can't believe the traffic today." },
        { speaker: "B", es: "El metro tampoco. Me tomó cuarenta minutos llegar desde Davis.", en: "The subway either. It took me forty minutes to get here from Davis." },
        { speaker: "A", es: "Yo vine en bici. Hoy no había nieve, para variar.", en: "I rode my bike. No snow today, for a change." },
        { speaker: "B", es: "Tienes más valentía que yo. ¿Cuántas clases tienes hoy?", en: "You're braver than me. How many classes do you have today?" },
        { speaker: "A", es: "Me toca dar cuatro. La última es a las seis.", en: "I have to teach four. The last one is at six." },
        { speaker: "B", es: "Uf. Yo tengo tres y ya me siento cansada.", en: "Ugh. I have three and I'm already tired." },
        { speaker: "A", es: "Oye, de camino al trabajo paré en esa panadería nueva. Tienes que ir.", en: "Hey, on the way to work I stopped at that new bakery. You have to go." },
        { speaker: "B", es: "¿La de la calle Cambridge? A lo mejor paso esta tarde si salgo a tiempo.", en: "The one on Cambridge Street? Maybe I'll stop by this afternoon if I get out on time." },
      ],
    },
  },
  {
    day: 3,
    themeEs: "Creencias y pensamientos",
    vocab: [
      { es: "a ver", en: "let's see / well", example: "A ver, ¿qué piensas tú?" },
      { es: "en serio", en: "seriously / really", example: "En serio, creo que tienes razón." },
      { es: "tiene sentido", en: "it makes sense", example: "Tiene sentido lo que dices." },
      { es: "depende", en: "it depends", example: "Depende del grupo, creo yo." },
      { es: "se me ocurre", en: "it occurs to me / I come up with", example: "A ver si se me ocurre algo." },
    ],
    dialogue: {
      title: "¿Vale la pena?",
      situation: "En la sala de maestros, durante el descanso",
      lines: [
        { speaker: "A", es: "Creo que este año los estudiantes están más motivados que el año pasado.", en: "I think this year the students are more motivated than last year." },
        { speaker: "B", es: "¿En serio? Me parece que los míos están más distraídos.", en: "Really? It seems to me mine are more distracted." },
        { speaker: "A", es: "A ver, pienso que depende del grupo. Los jueves son mis días difíciles.", en: "Well, I think it depends on the group. Thursdays are my hard days." },
        { speaker: "B", es: "Sí, tiene sentido. Los viernes a mí me van mejor — ya quieren salir.", en: "Yes, that makes sense. Fridays work better for me — they're already ready to leave." },
        { speaker: "A", es: "Yo pienso que la hora también importa mucho. Las clases de mañana son otra cosa.", en: "I think the time of day matters a lot too. Morning classes are a different story." },
        { speaker: "B", es: "Totalmente. Creo que voy a cambiar mis actividades del lunes por la mañana.", en: "Totally. I think I'm going to change my Monday morning activities." },
        { speaker: "A", es: "Me parece buena idea. ¿Qué vas a hacer diferente?", en: "That sounds like a good idea. What are you going to do differently?" },
        { speaker: "B", es: "No sé todavía. A ver si se me ocurre algo este fin de semana.", en: "I don't know yet. We'll see if I come up with something this weekend." },
      ],
    },
  },
  {
    day: 4,
    themeEs: "Gustos y preferencias",
    vocab: [
      { es: "la verdad", en: "honestly / truth is", example: "La verdad, me gusta más el otoño." },
      { es: "tampoco", en: "not either / neither", example: "A mí tampoco me gusta madrugar." },
      { es: "qué curioso", en: "how interesting / funny", example: "Qué curioso, yo pensaba lo mismo." },
      { es: "tener algo especial", en: "to have something special", example: "Boston tiene algo especial." },
      { es: "lo que más me gusta", en: "what I like most", example: "Lo que más me gusta es caminar por el barrio." },
    ],
    dialogue: {
      title: "Gustos de Boston",
      situation: "Sentadas en un café del barrio, un sábado por la tarde",
      lines: [
        { speaker: "A", es: "¿Cómo te va con el invierno en Boston? ¿Ya te acostumbraste?", en: "How are you handling Boston winters? Have you gotten used to it?" },
        { speaker: "B", es: "La verdad, no. No soporto el frío de enero y febrero.", en: "Honestly, no. I can't stand the cold in January and February." },
        { speaker: "A", es: "A mí tampoco me gusta, pero me encanta el otoño. Los colores son increíbles.", en: "I don't like it either, but I love the fall. The colors are incredible." },
        { speaker: "B", es: "Eso sí. Y lo que más me gusta es caminar por el barrio cuando hace sol.", en: "That's true. And what I like most is walking through the neighborhood when it's sunny." },
        { speaker: "A", es: "¿Prefieres vivir aquí o en el sur?", en: "Do you prefer living here or in the South?" },
        { speaker: "B", es: "Prefiero el sur para la familia, pero Boston tiene algo especial.", en: "I prefer the South for family, but Boston has something special." },
        { speaker: "A", es: "Me encanta que hay de todo aquí — restaurantes, museos, el río.", en: "I love that there's everything here — restaurants, museums, the river." },
        { speaker: "B", es: "Qué curioso — lo que más me gusta a mí es que la gente lee mucho en el metro.", en: "Funny — what I like most is that people read a lot on the subway." },
      ],
    },
  },
  {
    day: 5,
    themeEs: "Las personas",
    vocab: [
      { es: "echar de menos", en: "to miss someone", example: "Echo de menos a mi familia en Atlanta." },
      { es: "me cae bien", en: "I like them (as a person)", example: "Me cae muy bien tu amiga Sara." },
      { es: "contar con", en: "to count on", example: "Sé que puedo contar con ella." },
      { es: "estar al tanto", en: "to be in the loop / keep up", example: "Siempre estamos al tanto la una de la otra." },
      { es: "llevar meses sin", en: "to not have done something for months", example: "Llevamos meses sin vernos en persona." },
    ],
    dialogue: {
      title: "Familia y amigos",
      situation: "Por teléfono, después del trabajo",
      lines: [
        { speaker: "A", es: "Hola, ¿cómo estás? ¿Pudiste hablar con tu mamá?", en: "Hi, how are you? Were you able to talk to your mom?" },
        { speaker: "B", es: "Sí, la llamé ayer. La echo de menos, la verdad.", en: "Yes, I called her yesterday. I miss her, honestly." },
        { speaker: "A", es: "Lo entiendo. Yo también echo de menos a los míos. ¿Cuándo vas a Atlanta?", en: "I understand. I miss mine too. When are you going to Atlanta?" },
        { speaker: "B", es: "Quizás en las vacaciones de primavera. Llevamos meses sin vernos.", en: "Maybe during spring break. We haven't seen each other in months." },
        { speaker: "A", es: "Oye, mi amiga Sara preguntó por ti. Dice que te quiere conocer.", en: "Hey, my friend Sara asked about you. She says she wants to meet you." },
        { speaker: "B", es: "¡Qué bueno! Me cae bien Sara, es muy simpática.", en: "How nice! I like Sara, she's very friendly." },
        { speaker: "A", es: "Sí, es de las personas con las que sé que puedo contar.", en: "Yes, she's one of those people I know I can count on." },
        { speaker: "B", es: "Eso vale mucho. Oye, te llamo mañana, que tengo que hacer la cena.", en: "That means a lot. Hey, I'll call you tomorrow — I have to make dinner." },
      ],
    },
  },
  {
    day: 6,
    themeEs: "El pasado",
    vocab: [
      { es: "de niña", en: "as a girl / when I was little", example: "De niña quería ser veterinaria." },
      { es: "en aquella época", en: "back then / in those days", example: "En aquella época no había tanto estrés." },
      { es: "solía", en: "used to", example: "Solía llegar con miedo y salir sintiéndome bien." },
      { es: "qué tiempos", en: "those were the days", example: "Qué tiempos aquellos, ¿verdad?" },
      { es: "quien me inspiró", en: "the one who inspired me", example: "Fue ella quien me inspiró a enseñar." },
    ],
    dialogue: {
      title: "Cómo llegué hasta aquí",
      situation: "Caminando de vuelta a la escuela después del almuerzo",
      lines: [
        { speaker: "A", es: "Oye, ¿cómo llegaste tú a la enseñanza? ¿Siempre lo quisiste?", en: "Hey, how did you end up in teaching? Did you always want to?" },
        { speaker: "B", es: "La verdad, no. De niña quería ser veterinaria.", en: "Honestly, no. When I was little I wanted to be a vet." },
        { speaker: "A", es: "¡Qué curioso! Yo de niña quería ser escritora.", en: "How funny! When I was little I wanted to be a writer." },
        { speaker: "B", es: "¿Y? Todavía puedes.", en: "And? You still can." },
        { speaker: "A", es: "Me acuerdo de mi primera maestra de inglés. Fue ella quien me inspiró.", en: "I remember my first English teacher. She was the one who inspired me." },
        { speaker: "B", es: "Qué bonito. Yo también tuve una así. En aquella época no pensaba que yo podría hacer lo mismo.", en: "How lovely. I had one like that too. Back then I never thought I could do the same thing." },
        { speaker: "A", es: "¿Y qué cambió?", en: "So what changed?" },
        { speaker: "B", es: "Un trabajo de verano dando clases. Solía llegar con miedo y salir sintiéndome bien. Qué tiempos.", en: "A summer job teaching. I used to arrive scared and leave feeling good. Those were the days." },
      ],
    },
  },
  {
    day: 7,
    themeEs: "El aprendizaje",
    vocab: [
      { es: "poco a poco", en: "little by little", example: "Poco a poco, algo va cambiando." },
      { es: "sin darme cuenta", en: "without realizing it", example: "Sin darme cuenta, ya entendía mucho más." },
      { es: "me cuesta", en: "it's hard for me / I struggle with", example: "Me cuesta no traducir todo en la cabeza." },
      { es: "vale la pena", en: "it's worth it", example: "Vale la pena el esfuerzo, aunque cuesta." },
      { es: "seguir adelante", en: "to keep going / to move forward", example: "Lo importante es seguir adelante." },
    ],
    dialogue: {
      title: "Aprender de adulta",
      situation: "En una clase de conversación, durante el descanso",
      lines: [
        { speaker: "A", es: "¿Cuánto tiempo llevas estudiando español?", en: "How long have you been studying Spanish?" },
        { speaker: "B", es: "Más o menos dos años, pero con pausas largas. ¿Y tú?", en: "About two years, but with long breaks. And you?" },
        { speaker: "A", es: "Yo lo hablo desde niña, pero siempre quise mejorarlo. Me cuesta el subjuntivo todavía.", en: "I've spoken it since I was little, but I always wanted to improve. The subjunctive is still hard for me." },
        { speaker: "B", es: "Yo ni entiendo qué es eso. Aprendo poco a poco.", en: "I don't even know what that is. I learn little by little." },
        { speaker: "A", es: "Yo creo que la clave es hablar, aunque uno se equivoque.", en: "I think the key is to speak, even if you make mistakes." },
        { speaker: "B", es: "Sí, pero da vergüenza. Sin darme cuenta, sin embargo, ya entiendo mucho más que antes.", en: "Yes, but it's embarrassing. Without realizing it, though, I already understand so much more than before." },
        { speaker: "A", es: "Eso es lo que vale la pena. No el perfecto, sino el progreso.", en: "That's what makes it worth it. Not perfection, but progress." },
        { speaker: "B", es: "Tienes razón. Lo importante es seguir adelante, ¿no?", en: "You're right. The important thing is to keep going, isn't it?" },
      ],
    },
  },
  {
    day: 8,
    themeEs: "Los sentimientos",
    vocab: [
      { es: "agotada", en: "exhausted (f.)", example: "Estoy agotada después de esa semana tan larga." },
      { es: "me alegra", en: "it makes me happy / I'm glad", example: "Me alegra que puedas decirlo." },
      { es: "guardarse algo", en: "to keep something to yourself", example: "A veces uno se guarda todo." },
      { es: "pesar", en: "to weigh on / to feel heavy", example: "A veces el trabajo me pesa más de lo normal." },
      { es: "en serio", en: "seriously / I mean it", example: "Gracias por preguntar, en serio." },
    ],
    dialogue: {
      title: "¿Cómo estás, de verdad?",
      situation: "En el pasillo de la escuela, un jueves por la tarde",
      lines: [
        { speaker: "A", es: "Hola. ¿Cómo estás?", en: "Hi. How are you?" },
        { speaker: "B", es: "Bien, bien. Bueno… la verdad, estoy un poco agotada.", en: "Good, good. Well… honestly, I'm a little exhausted." },
        { speaker: "A", es: "Lo noto. ¿Qué está pasando?", en: "I can tell. What's going on?" },
        { speaker: "B", es: "Nada grave. A veces el trabajo me pesa más de lo normal.", en: "Nothing serious. Sometimes work just weighs on me more than usual." },
        { speaker: "A", es: "Entiendo. Yo también estoy pasando por una semana difícil.", en: "I understand. I'm also having a tough week." },
        { speaker: "B", es: "Me alegra que puedas decirlo. A veces uno se guarda todo.", en: "I'm glad you can say that. Sometimes you just keep everything to yourself." },
        { speaker: "A", es: "Oye, ¿quieres tomar algo después? Un café, lo que sea.", en: "Hey, do you want to get something after? Coffee, whatever." },
        { speaker: "B", es: "Me parece bien. Necesito salir un rato. Gracias por preguntar, en serio.", en: "Sounds good. I need to get out for a bit. Thanks for asking, I mean it." },
      ],
    },
  },
  {
    day: 9,
    themeEs: "Los retos",
    vocab: [
      { es: "meterse en", en: "to get into / take on", example: "Me metí en algo más grande de lo que pensaba." },
      { es: "no es fácil", en: "it's not easy", example: "No es fácil admitir que necesitas ayuda." },
      { es: "hay que", en: "one must / you have to", example: "Hay que tener más paciencia conmigo misma." },
      { es: "salir adelante", en: "to get through it / to push through", example: "Siempre sales adelante, lo sé." },
      { es: "qué le vas a hacer", en: "what can you do / such is life", example: "Qué le vas a hacer, la próxima vez saldrá mejor." },
    ],
    dialogue: {
      title: "Cuando las cosas no salen",
      situation: "Por teléfono, un domingo por la noche",
      lines: [
        { speaker: "A", es: "Oye, ¿cómo te fue con ese proyecto que me contaste?", en: "Hey, how did that project go that you told me about?" },
        { speaker: "B", es: "Fatal. No salió como quería. Me metí en algo más grande de lo que pensaba.", en: "Terrible. It didn't go how I wanted. I got into something bigger than I expected." },
        { speaker: "A", es: "Ay, no. ¿Qué pasó?", en: "Oh no. What happened?" },
        { speaker: "B", es: "Me tomó el doble de tiempo y al final tuve que pedir ayuda. No es fácil admitirlo.", en: "It took me twice as long and in the end I had to ask for help. It's not easy to admit." },
        { speaker: "A", es: "Pero pediste ayuda, eso ya es mucho. No todo el mundo lo hace.", en: "But you asked for help — that's already a lot. Not everyone does that." },
        { speaker: "B", es: "Supongo. Hay que tener más paciencia conmigo misma, creo.", en: "I guess so. I need to have more patience with myself, I think." },
        { speaker: "A", es: "Vas a salir adelante. Siempre lo haces.", en: "You're going to get through it. You always do." },
        { speaker: "B", es: "Gracias. Qué le vas a hacer, ¿no? La próxima vez saldrá mejor.", en: "Thanks. What can you do, right? Next time it'll go better." },
      ],
    },
  },
  {
    day: 10,
    themeEs: "El futuro",
    vocab: [
      { es: "a largo plazo", en: "in the long run / long-term", example: "A largo plazo quiero trabajar en algo diferente." },
      { es: "tener claro", en: "to be clear about / to know for sure", example: "No tengo claro qué quiero exactamente." },
      { es: "me ilusiona", en: "I'm excited about it / it thrills me", example: "Me ilusiona mucho la idea de aprender código." },
      { es: "quién sabe", en: "who knows", example: "Quién sabe, a lo mejor me va bien." },
      { es: "arrepentirse de no haber", en: "to regret not having", example: "No quiero arrepentirme de no haberlo intentado." },
    ],
    dialogue: {
      title: "¿Y tú qué sueñas?",
      situation: "En un parque, un sábado de primavera",
      lines: [
        { speaker: "A", es: "Oye, ¿qué quieres hacer en cinco años? ¿Lo tienes claro?", en: "Hey, what do you want to be doing in five years? Do you know?" },
        { speaker: "B", es: "No del todo. A largo plazo me gustaría trabajar en algo diferente.", en: "Not entirely. Long-term I'd like to work in something different." },
        { speaker: "A", es: "¿Como qué?", en: "Like what?" },
        { speaker: "B", es: "Quizás algo con tecnología. Estoy aprendiendo a programar, poco a poco.", en: "Maybe something with technology. I'm learning to code, little by little." },
        { speaker: "A", es: "¿En serio? Me ilusiona esa idea. Yo algún día quiero vivir más cerca del mar.", en: "Really? That excites me. I want to live closer to the ocean someday." },
        { speaker: "B", es: "Eso suena bien. Quién sabe, a lo mejor los dos cambiamos de ciudad.", en: "That sounds good. Who knows, maybe we'll both end up in a new city." },
        { speaker: "A", es: "¿Y si todo sale mal?", en: "And if everything goes wrong?" },
        { speaker: "B", es: "Pues a empezar de nuevo. No quiero arrepentirme de no haberlo intentado.", en: "Well, then you start over. I don't want to regret not having tried." },
      ],
    },
  },
  {
    day: 11,
    themeEs: "El trabajo y el propósito",
    vocab: [
      { es: "dedicarse a", en: "to work as / to dedicate oneself to", example: "Me dedico a enseñar inglés a adultos." },
      { es: "al final del día", en: "at the end of the day", example: "Al final del día, eso es lo que importa." },
      { es: "más allá de", en: "beyond", example: "Más allá del sueldo, busco algo con sentido." },
      { es: "tiene que ver con", en: "has to do with", example: "Mi trabajo tiene que ver con acompañar a la gente." },
      { es: "marcar la diferencia", en: "to make a difference", example: "Quiero marcar la diferencia en mis estudiantes." },
    ],
    dialogue: {
      title: "¿Por qué enseñas?",
      situation: "En una reunión de maestros, antes de empezar",
      lines: [
        { speaker: "A", es: "¿Cuánto tiempo llevas en esto?", en: "How long have you been doing this?" },
        { speaker: "B", es: "Siete años ya. Me dedico a ESOL desde que terminé la universidad.", en: "Seven years now. I've been doing ESOL since I graduated." },
        { speaker: "A", es: "¿Y todavía te gusta?", en: "And do you still like it?" },
        { speaker: "B", es: "Sí. Al final del día, cuando veo a alguien entender algo que antes no podía, vale todo.", en: "Yes. At the end of the day, when I see someone understand something they couldn't before, it's all worth it." },
        { speaker: "A", es: "Eso es lo que me mantiene también. Más allá del sueldo, uno quiere sentir que importa.", en: "That's what keeps me going too. Beyond the paycheck, you want to feel like you matter." },
        { speaker: "B", es: "Exacto. Mi trabajo tiene que ver con acompañar a la gente, no solo con enseñar gramática.", en: "Exactly. My work is about accompanying people, not just teaching grammar." },
        { speaker: "A", es: "Bien dicho. ¿Y a dónde quieres llegar con esto?", en: "Well said. And where do you want to go with it?" },
        { speaker: "B", es: "No lo sé exactamente. Pero quiero marcar la diferencia en las personas que pasan por mi clase.", en: "I'm not sure exactly. But I want to make a difference in the people who come through my class." },
      ],
    },
  },
  {
    day: 12,
    themeEs: "Las experiencias",
    vocab: [
      { es: "hasta ahora", en: "so far / up until now", example: "Hasta ahora ha sido una buena semana." },
      { es: "ya era hora", en: "it was about time", example: "Ya era hora de retomar el español." },
      { es: "merecer la pena", en: "to be worth it", example: "Mereció la pena todo el esfuerzo." },
      { es: "que yo recuerde", en: "as far as I remember", example: "Que yo recuerde, siempre quisiste aprender a programar." },
      { es: "algo está cambiando", en: "something is changing", example: "Me ha costado, pero algo está cambiando." },
    ],
    dialogue: {
      title: "¿Cómo te ha ido?",
      situation: "Reunión de amigas, el primer viernes del mes",
      lines: [
        { speaker: "A", es: "¿Cómo te ha ido este mes? Hace tiempo que no hablamos bien.", en: "How has this month been? We haven't had a real talk in a while." },
        { speaker: "B", es: "Mejor de lo que esperaba, la verdad. He estado aprendiendo cosas nuevas.", en: "Better than I expected, honestly. I've been learning new things." },
        { speaker: "A", es: "¿Como qué?", en: "Like what?" },
        { speaker: "B", es: "Código, principalmente. Y español otra vez. Ya era hora de retomarlo.", en: "Code, mostly. And Spanish again. It was about time I got back to it." },
        { speaker: "A", es: "¿Y te está gustando?", en: "And are you enjoying it?" },
        { speaker: "B", es: "Sí. Hasta ahora ha valido la pena. Me ha costado, pero algo está cambiando.", en: "Yes. So far it's been worth it. It's been hard, but something is changing." },
        { speaker: "A", es: "Que yo recuerde, siempre quisiste aprender a programar.", en: "As far as I remember, you always wanted to learn to code." },
        { speaker: "B", es: "Y ya escribí mis primeras líneas sola. Mereció la pena el esfuerzo.", en: "And I already wrote my first lines of code on my own. The effort was worth it." },
      ],
    },
  },
  {
    day: 13,
    themeEs: "Las posibilidades",
    vocab: [
      { es: "imagínate", en: "imagine / just think", example: "Imagínate poder trabajar desde cualquier lugar." },
      { es: "no perdemos nada", en: "we have nothing to lose", example: "No perdemos nada con pensarlo." },
      { es: "en el mejor de los casos", en: "in the best case", example: "En el mejor de los casos, funciona bien." },
      { es: "atreverse", en: "to dare / to take the leap", example: "Hay que atreverse aunque dé un poco de miedo." },
      { es: "solo hace falta", en: "all you need is", example: "A veces solo hace falta que alguien diga: vamos." },
    ],
    dialogue: {
      title: "¿Y si…?",
      situation: "En casa de una amiga, una tarde de domingo",
      lines: [
        { speaker: "A", es: "Oye, ¿alguna vez pensaste en dejar Boston?", en: "Hey, have you ever thought about leaving Boston?" },
        { speaker: "B", es: "Sí, a veces. ¿Y si me fuera un año a otro lugar? Pero da un poco de miedo.", en: "Yes, sometimes. What if I went somewhere else for a year? But it's a little scary." },
        { speaker: "A", es: "Imagínate — trabajar desde cualquier ciudad. Con internet ya se puede.", en: "Just imagine — working from any city. With the internet you can now." },
        { speaker: "B", es: "Es que no perdemos nada con pensarlo, ¿no?", en: "I mean, we have nothing to lose by thinking about it, right?" },
        { speaker: "A", es: "Exacto. En el mejor de los casos, encuentras algo mejor. En el peor, vuelves.", en: "Exactly. In the best case, you find something better. In the worst, you come back." },
        { speaker: "B", es: "Tienes razón. Creo que hay que atreverse aunque dé miedo.", en: "You're right. I think you have to take the leap even if it's scary." },
        { speaker: "A", es: "¿Y si lo planificamos juntas? Podríamos hacer algo este verano.", en: "What if we planned it together? We could do something this summer." },
        { speaker: "B", es: "Me gusta la idea. A veces solo hace falta que alguien diga: vamos.", en: "I like that idea. Sometimes all you need is for someone to say: let's go." },
      ],
    },
  },
  {
    day: 14,
    themeEs: "Tu historia",
    vocab: [
      { es: "llegar a ser", en: "to become / to end up being", example: "Nunca pensé que llegaría a ser maestra." },
      { es: "de dónde vengo", en: "where I come from", example: "Hay mucho de dónde vengo en cómo enseño." },
      { es: "lo que me define", en: "what defines me", example: "Lo que me define no es un solo trabajo." },
      { es: "seguir siendo", en: "to keep being / to remain", example: "Quiero seguir siendo curiosa." },
      { es: "orgullosa de", en: "proud of", example: "Estoy orgullosa de lo que he construido, poco a poco." },
    ],
    dialogue: {
      title: "¿Quién eres ahora?",
      situation: "Caminando por el río Charles, un atardecer de otoño",
      lines: [
        { speaker: "A", es: "¿Cómo te describes a ti misma? Si te lo preguntaran hoy.", en: "How would you describe yourself? If someone asked you today." },
        { speaker: "B", es: "Maestra, aprendiz, alguien que está cambiando. Las tres cosas a la vez.", en: "Teacher, learner, someone who's changing. All three at the same time." },
        { speaker: "A", es: "Me gusta eso. Hay mucho de dónde vengo en cómo soy ahora.", en: "I like that. There's a lot of where I come from in who I am now." },
        { speaker: "B", es: "¿Cómo así?", en: "How so?" },
        { speaker: "A", es: "Crecí en el sur, con mi familia cerca. Ahora vivo lejos, y eso me formó de otra manera.", en: "I grew up in the South, with my family nearby. Now I live far away, and that shaped me differently." },
        { speaker: "B", es: "Entiendo. Yo nunca pensé que llegaría a ser lo que soy. Antes era muy callada.", en: "I get that. I never thought I'd become what I am. I used to be very quiet." },
        { speaker: "A", es: "¿Y qué quieres seguir siendo?", en: "And what do you want to keep being?" },
        { speaker: "B", es: "Curiosa. Orgullosa de lo que he construido. Y con ganas de aprender más. Eso es lo que me define.", en: "Curious. Proud of what I've built. And eager to keep learning. That's what defines me." },
      ],
    },
  },
];

export function readingForIndex(i: number): ReadingDay {
  return readingDays[i % readingDays.length];
}
