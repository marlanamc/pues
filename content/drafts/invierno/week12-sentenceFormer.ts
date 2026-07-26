import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 12 — "A velocidad real" (days 260–266).
 * Stems must match content/drafts/invierno/week12-frames.ts for the same day.
 */
export const invWeek12SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 260,
    theme: "En la panadería",
    stems: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        completions: [
          { es: "¿cómo va todo por aquí?", en: "how's everything around here?", category: "other" },
          { es: "vengo con una amiga", en: "i'm here with a friend", category: "other" },
          { es: "¿todavía queda pan de bono?", en: "is there still any pan de bono?", category: "food" },
          { es: "¿a qué hora cierran hoy?", en: "what time do you close today?", category: "time" },
          { es: "vengo por primera vez", en: "it's my first time here", category: "time" },
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        completions: [
          { es: "llevar dos de estos y un café", en: "take two of these and a coffee", category: "food" },
          { es: "probar lo que tú pidas", en: "try whatever you order", category: "food" },
          { es: "pedir en español, aunque me tarde", en: "order in spanish, even if it takes me a while", category: "activity" },
          { es: "preguntar qué es cada cosa", en: "ask what each thing is", category: "activity" },
          { es: "llevarme uno de cada uno", en: "take one of each", category: "food" },
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        completions: [
          { es: "lo prueben en la casa", en: "they can try it at home", category: "food" },
          { es: "me dure toda la semana", en: "it lasts me all week", category: "time" },
          { es: "no digas que no lo intenté", en: "you don't say i didn't try", category: "opinion" },
          { es: "aprenda los nombres de una vez", en: "i learn the names once and for all", category: "activity" },
          { es: "tengamos para el desayuno", en: "we have some for breakfast", category: "food" },
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        completions: [
          { es: "así, gracias", en: "like that, thank you", category: "other" },
          { es: "me llevo los dos", en: "i'll take both", category: "food" },
          { es: "no hay problema", en: "no problem", category: "other" },
          { es: "con eso alcanza", en: "that's enough", category: "food" },
          { es: "pago con tarjeta si se puede", en: "i'll pay by card if that works", category: "other" },
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        completions: [
          { es: "nunca vienes por aquí", en: "you never come around here", category: "time" },
          { es: "¿se acabó tan temprano?", en: "it sold out that early?", category: "time" },
          { es: "cuéntame", en: "tell me", category: "activity" },
          { es: "¿es receta de la casa?", en: "is it a house recipe?", category: "food" },
          { es: "¿lo hacen todos los días?", en: "do you make it every day?", category: "time" },
        ],
      },
    ],
  },
  {
    day: 261,
    theme: "Quiubo",
    stems: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        completions: [
          { es: "doña marta, ¿cómo amaneció?", en: "doña marta, how did you wake up?", category: "time" },
          { es: "ya me reconoce, qué pena", en: "she recognizes me now, how embarrassing", category: "other" },
          { es: "nos vemos el sábado", en: "see you saturday", category: "time" },
          { es: "¿cómo va el día?", en: "how's the day going?", category: "time" },
          { es: "vine temprano hoy", en: "i came early today", category: "time" },
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        completions: [
          { es: "pedir lo mismo de la otra vez", en: "order the same as last time", category: "food" },
          { es: "llevarme uno de esos que no conozco", en: "take one of those i don't know", category: "food" },
          { es: "llevar de más, que viene rocío", en: "take extra, rocío's coming", category: "food" },
          { es: "venir los sábados de aquí en adelante", en: "come on saturdays from now on", category: "time" },
          { es: "aprenderme el nombre de la señora", en: "learn the woman's name", category: "activity" },
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        completions: [
          { es: "me aprenda los nombres de todo", en: "i learn the names of everything", category: "activity" },
          { es: "la próxima venga sola", en: "next time i come on my own", category: "time" },
          { es: "se me haga costumbre venir", en: "coming becomes a habit for me", category: "time" },
          { es: "me vean como cliente y no como turista", en: "they see me as a customer and not a tourist", category: "opinion" },
          { es: "rocío conozca el lugar también", en: "rocío gets to know the place too", category: "other" },
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        completions: [
          { es: "entonces me llevo otra cosa", en: "then i'll take something else", category: "food" },
          { es: "con eso me arreglo", en: "that'll do me", category: "other" },
          { es: "no se preocupe", en: "don't worry about it", category: "other" },
          { es: "vuelvo mañana temprano", en: "i'll come back early tomorrow", category: "time" },
          { es: "así queda para la próxima", en: "that leaves it for next time", category: "time" },
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        completions: [
          { es: "está lleno hoy", en: "it's packed today", category: "time" },
          { es: "cerraron el martes pasado", en: "they closed last tuesday", category: "time" },
          { es: "¿hay fiesta o algo?", en: "is there a party or something?", category: "other" },
          { es: "¿cambió el horario?", en: "did the hours change?", category: "time" },
          { es: "¿ya no hacen los de queso?", en: "do you not make the cheese ones anymore?", category: "food" },
        ],
      },
    ],
  },
  {
    day: 262,
    theme: "Pa' que",
    stems: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        completions: [
          { es: "rocío, ¿cómo va la mañana?", en: "rocío, how's the morning going?", category: "time" },
          { es: "te traje algo de la panadería", en: "i brought you something from the bakery", category: "food" },
          { es: "¿ya te enteraste de lo de marzo?", en: "did you hear about the march thing?", category: "other" },
          { es: "vengo con hambre y con noticias", en: "i come with hunger and with news", category: "other" },
          { es: "no te vi en toda la semana", en: "i didn't see you all week", category: "time" },
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        completions: [
          { es: "hablar rápido a propósito esta semana", en: "talk fast on purpose this week", category: "time" },
          { es: "dejar de pronunciar cada palabra entera", en: "stop pronouncing every word in full", category: "activity" },
          { es: "copiarle el ritmo a camila", en: "copy camila's rhythm", category: "activity" },
          { es: "grabarme para oír si sueno distinta", en: "record myself to hear if i sound different", category: "activity" },
          { es: "juntar las palabras a ver qué pasa", en: "run the words together and see what happens", category: "activity" },
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        completions: [
          { es: "suene como conversación y no como examen", en: "it sounds like conversation and not an exam", category: "opinion" },
          { es: "no me hablen despacio", en: "they don't talk to me slowly", category: "other" },
          { es: "se me pegue el ritmo de verdad", en: "the rhythm really rubs off on me", category: "activity" },
          { es: "deje de contar sílabas", en: "i stop counting syllables", category: "activity" },
          { es: "nadie note que estoy pensando", en: "nobody notices i'm thinking", category: "opinion" },
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        completions: [
          { es: "lo digo mal y sigo", en: "i say it wrong and carry on", category: "activity" },
          { es: "que se me pegue el acento colombiano", en: "if the colombian accent rubs off on me", category: "opinion" },
          { es: "así, no tiene que ser perfecto", en: "like that, it doesn't have to be perfect", category: "opinion" },
          { es: "que se me coma alguna sílaba", en: "if i swallow the odd syllable", category: "opinion" },
          { es: "sonar de algún lado y no de ninguno", en: "to sound like somewhere rather than nowhere", category: "opinion" },
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        completions: [
          { es: "¿desde cuándo hablas así?", en: "since when do you talk like that?", category: "time" },
          { es: "nadie me avisó", en: "nobody told me", category: "other" },
          { es: "qué buena noticia", en: "what good news", category: "opinion" },
          { es: "¿te lo pegó camila?", en: "did camila give you that?", category: "other" },
          { es: "¿y ahora dices \"pa' que\" también?", en: "and now you say \"pa' que\" too?", category: "other" },
        ],
      },
    ],
  },
  {
    day: 263,
    theme: "Tá bien",
    stems: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        completions: [
          { es: "te mando un audio rapidito", en: "i'm sending you a quick voice note", category: "activity" },
          { es: "¿cómo va tu día?", en: "how's your day going?", category: "time" },
          { es: "ya salí del colegio", en: "i'm out of school", category: "time" },
          { es: "voy manejando, disculpa el ruido", en: "i'm driving, sorry about the noise", category: "other" },
          { es: "dos minutos y te cuento todo", en: "two minutes and i'll tell you everything", category: "time" },
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        completions: [
          { es: "estar en la casa como a las seis", en: "be home around six", category: "time" },
          { es: "hacer la cena y te llamo", en: "make dinner and call you", category: "food" },
          { es: "estar ocupada hasta las cuatro", en: "be busy until four", category: "time" },
          { es: "estar en el metro un rato", en: "be on the train for a while", category: "time" },
          { es: "estar sin señal como veinte minutos", en: "be out of signal for about twenty minutes", category: "time" },
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        completions: [
          { es: "no me esperen despiertos", en: "nobody waits up for me", category: "time" },
          { es: "esté listo antes del jueves", en: "it's ready before thursday", category: "time" },
          { es: "no se me olvide, lo escribo ya", en: "i don't forget, i'll write it now", category: "activity" },
          { es: "sepas dónde estoy", en: "you know where i am", category: "other" },
          { es: "no me llames justo a esa hora", en: "you don't call me right at that time", category: "time" },
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        completions: [
          { es: "no pasa nada", en: "nothing's wrong", category: "other" },
          { es: "ya estoy más tranquila", en: "i'm calmer now", category: "opinion" },
          { es: "todo por aquí, no te preocupes", en: "everything here, don't worry", category: "other" },
          { es: "si no puedes hoy, mañana", en: "if you can't today, tomorrow", category: "time" },
          { es: "estoy cansada pero contenta", en: "i'm tired but happy", category: "opinion" },
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        completions: [
          { es: "¿te dieron el día libre?", en: "did they give you the day off?", category: "time" },
          { es: "qué raro en ti", en: "how unlike you", category: "opinion" },
          { es: "cuéntame ya", en: "tell me right now", category: "activity" },
          { es: "¿pasó algo bueno?", en: "did something good happen?", category: "other" },
          { es: "¿y no me habías dicho nada?", en: "and you hadn't told me anything?", category: "other" },
        ],
      },
    ],
  },
  {
    day: 264,
    theme: "A uno y medio",
    stems: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        completions: [
          { es: "hice algo raro y te tengo que contar", en: "i did something odd and i have to tell you", category: "activity" },
          { es: "prueba esto que te voy a decir", en: "try this thing i'm about to tell you", category: "activity" },
          { es: "cambié una cosa y funcionó", en: "i changed one thing and it worked", category: "activity" },
          { es: "tengo un descubrimiento", en: "i've got a discovery", category: "other" },
          { es: "no me vas a creer lo que hice", en: "you won't believe what i did", category: "other" },
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        completions: [
          { es: "dejarlo a uno y medio toda la semana", en: "leave it at one and a half all week", category: "time" },
          { es: "probar con las noticias, que hablan más rápido", en: "try the news, they talk faster", category: "activity" },
          { es: "ver si aguanto a uno con setenta y cinco", en: "see if i can handle one point seven five", category: "time" },
          { es: "hacerlo con la serie también", en: "do it with the series too", category: "activity" },
          { es: "aguantar aunque pierda la mitad", en: "stick with it even if i lose half", category: "activity" },
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        completions: [
          { es: "la velocidad normal me parezca lenta", en: "normal speed feels slow to me", category: "time" },
          { es: "el oído se acostumbre solo", en: "my ear adjusts on its own", category: "activity" },
          { es: "deje de costarme trabajo", en: "it stops being hard work", category: "opinion" },
          { es: "no me asuste que hablen rápido", en: "fast talking stops scaring me", category: "opinion" },
          { es: "llegue a marzo con el oído listo", en: "i get to march with my ear ready", category: "time" },
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        completions: [
          { es: "perder algunas palabras si sigo el hilo", en: "to lose some words if i follow the thread", category: "opinion" },
          { es: "entiendo menos y aprendo más", en: "i understand less and learn more", category: "opinion" },
          { es: "era eso lo que quería probar", en: "that's exactly what i wanted to test", category: "opinion" },
          { es: "si me marea al principio", en: "if it makes me dizzy at first", category: "opinion" },
          { es: "volver a la velocidad normal cuando me canse", en: "to go back to normal speed when i get tired", category: "time" },
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        completions: [
          { es: "¿a quién se le ocurre acelerarlo?", en: "who thinks to speed it up?", category: "opinion" },
          { es: "¿no era ya bastante difícil?", en: "wasn't it hard enough already?", category: "opinion" },
          { es: "pues porque quiero llegar a marzo lista", en: "well, because i want to reach march ready", category: "time" },
          { es: "¿y de verdad funciona?", en: "and does it actually work?", category: "opinion" },
          { es: "¿lo hacen los intérpretes también?", en: "do interpreters do that too?", category: "other" },
        ],
      },
    ],
  },
  {
    day: 265,
    theme: "Ya no me hablan despacio",
    stems: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        completions: [
          { es: "hoy me saludaron ellos primero", en: "today they greeted me first", category: "time" },
          { es: "ya me dicen \"la maestra\"", en: "they call me \"the teacher\" now", category: "other" },
          { es: "me guardaron pan de bono", en: "they saved me some pan de bono", category: "food" },
          { es: "hoy fui sola y no pasó nada", en: "today i went alone and it was fine", category: "activity" },
          { es: "me preguntaron por rocío", en: "they asked about rocío", category: "other" },
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        completions: [
          { es: "contarte algo que me pasó y no sé si es bueno", en: "tell you something that happened and i don't know if it's good", category: "other" },
          { es: "decírtelo tal cual me lo dijeron", en: "tell it to you exactly as they said it", category: "activity" },
          { es: "tomármelo como cumplido", en: "take it as a compliment", category: "opinion" },
          { es: "pensarlo un rato antes de decidir", en: "think about it a while before deciding", category: "time" },
          { es: "preguntarte si a ti te pasó igual", en: "ask if the same happened to you", category: "activity" },
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        completions: [
          { es: "me traten como a cualquiera", en: "they treat me like anyone else", category: "opinion" },
          { es: "dejen de acomodarse a mí", en: "they stop adjusting to me", category: "opinion" },
          { es: "ya no sea la que está aprendiendo", en: "i stop being the one who's learning", category: "opinion" },
          { es: "no me pongan cara de paciencia", en: "they don't give me the patient face", category: "opinion" },
          { es: "la conversación sea de verdad", en: "the conversation is a real one", category: "opinion" },
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        completions: [
          { es: "prefiero perderme algo a que me hablen raro", en: "i'd rather miss something than be spoken to strangely", category: "opinion" },
          { es: "así, aunque sea más difícil", en: "like that, even if it's harder", category: "opinion" },
          { es: "no ser la excepción en la mesa", en: "not to be the exception at the table", category: "opinion" },
          { es: "que me cueste, para eso vine", en: "if it's hard, that's what i came for", category: "opinion" },
          { es: "preguntar cuando de verdad no entienda", en: "to ask when i genuinely don't understand", category: "activity" },
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        completions: [
          { es: "¿ya no me hablan despacio o me lo imagino?", en: "do they not slow down for me anymore or am i imagining it?", category: "opinion" },
          { es: "¿desde cuándo?", en: "since when?", category: "time" },
          { es: "dime la verdad, no me consientas", en: "tell me the truth, don't humor me", category: "opinion" },
          { es: "¿tú también lo notaste?", en: "did you notice it too?", category: "opinion" },
          { es: "¿es bueno o me estoy perdiendo cosas?", en: "is it good or am i missing things?", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 266,
    theme: "Repaso: A velocidad real",
    stems: [
      {
        stem: "¿Qué hubo?…",
        english: "Hey — how's it going?",
        completions: [
          { es: "me sale antes que \"hola\"", en: "comes out before \"hola\" does", category: "other" },
          { es: "lo digo sin pensarlo desde el martes", en: "i've said it without thinking since tuesday", category: "time" },
          { es: "es dos sílabas y suena a que vivo aquí", en: "is two syllables and sounds like i live here", category: "opinion" },
          { es: "ya no me suena raro decirlo", en: "doesn't sound odd to me anymore", category: "opinion" },
          { es: "se lo dije hasta a la directora", en: "i even said it to the principal", category: "other" },
        ],
      },
      {
        stem: "Voy a…",
        english: "I'm going to…",
        completions: [
          { es: "ya no lo digo entero nunca", en: "i never say it in full anymore", category: "time" },
          { es: "se me volvió una sola sílaba", en: "turned into one syllable for me", category: "other" },
          { es: "era la prueba: si se junta, va rápido", en: "was the test: if it runs together, it's fast", category: "opinion" },
          { es: "lo uso veinte veces al día sin notarlo", en: "i use it twenty times a day without noticing", category: "time" },
          { es: "es lo primero que se me pegó", en: "was the first thing that stuck", category: "other" },
        ],
      },
      {
        stem: "Para que…",
        english: "So that…",
        completions: [
          { es: "dejara de sonar a libro y sonara a persona", en: "it stopped sounding like a book and sounded like a person", category: "opinion" },
          { es: "la velocidad normal me pareciera normal", en: "normal speed felt normal to me", category: "time" },
          { es: "nadie tuviera que bajar el ritmo por mí", en: "nobody had to slow down for me", category: "opinion" },
          { es: "el ritmo entrara solo", en: "the rhythm came in by itself", category: "activity" },
          { es: "esta semana no fuera de vocabulario", en: "this week wasn't about vocabulary", category: "opinion" },
        ],
      },
      {
        stem: "Está bien…",
        english: "That's fine… / All right…",
        completions: [
          { es: "perder palabras, siempre se pierden", en: "to lose words, they're always lost", category: "opinion" },
          { es: "no era problema de pronunciación", en: "it wasn't a pronunciation problem", category: "opinion" },
          { es: "era problema de ritmo, y el ritmo se copia", en: "it was a rhythm problem, and rhythm gets copied", category: "opinion" },
          { es: "sonar a alguien y no a nadie", en: "to sound like someone rather than no one", category: "opinion" },
          { es: "que me tomara doce semanas", en: "that it took me twelve weeks", category: "time" },
        ],
      },
      {
        stem: "¿Y eso?…",
        english: "How come? / What's that about?",
        completions: [
          { es: "me lo pregunto yo ahora, mirando enero", en: "i ask myself that now, looking back at january", category: "time" },
          { es: "pues doce semanas, eso", en: "well, twelve weeks, that's what", category: "time" },
          { es: "falta una semana y se acaba el invierno", en: "one week left and winter's over", category: "time" },
          { es: "¿y la primavera qué trae?", en: "and what does spring bring?", category: "time" },
          { es: "nada, que ya pasó y no me di cuenta", en: "nothing, it just happened and i didn't notice", category: "time" },
        ],
      },
    ],
  },
];
