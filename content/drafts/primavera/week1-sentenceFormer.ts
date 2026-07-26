import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 1 — "Cómo reacciono" (days 274–280).
 * Stems must match content/drafts/primavera/week1-frames.ts for the same day.
 */
export const priWeek1SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 274,
    theme: "El primer jueves de primavera",
    stems: [
      {
        stem: "Ay, no…",
        english: "Oh no… / Ugh, no…",
        completions: [
          { es: "no me preguntes eso todavía", en: "don't ask me that yet", category: "other" },
          { es: "otra vez la misma pregunta", en: "the same question again", category: "other" },
          { es: "dame un café primero", en: "give me a coffee first", category: "food" },
          { es: "eso es peor que una entrevista", en: "that's worse than an interview", category: "opinion" },
          { es: "espérate, déjame pensar", en: "hang on, let me think", category: "time" },
        ],
      },
      {
        stem: "Te juro que…",
        english: "I swear (that)…",
        completions: [
          { es: "nunca me he descrito en voz alta", en: "i've never described myself out loud", category: "activity" },
          { es: "en inglés tampoco sé contestar eso", en: "i can't answer that in english either", category: "other" },
          { es: "lo pensé todo el camino", en: "i thought about it the whole way here", category: "time" },
          { es: "no se me ocurre nada bueno", en: "nothing good comes to mind", category: "opinion" },
          { es: "esto me cuesta más que la gramática", en: "this is harder for me than grammar", category: "opinion" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "prefiero contarte una historia", en: "i'd rather tell you a story", category: "activity" },
          { es: "esta pregunta me da más miedo que hablar español", en: "this question scares me more than speaking spanish", category: "opinion" },
          { es: "llevo un mes esperando este jueves", en: "i've been waiting a month for this thursday", category: "time" },
          { es: "no sé por dónde empezar", en: "i don't know where to start", category: "other" },
          { es: "me gusta más escuchar que hablar de mí", en: "i like listening more than talking about myself", category: "opinion" },
        ],
      },
      {
        stem: "Me da una cosa…",
        english: "It gives me a feeling… / It makes me squirm…",
        completions: [
          { es: "cuando me preguntan a qué me dedico", en: "when they ask what i do for a living", category: "other" },
          { es: "hablar de mí sin que nadie me interrumpa", en: "talking about myself with nobody interrupting", category: "activity" },
          { es: "el primer día de una estación nueva", en: "the first day of a new season", category: "time" },
          { es: "que me miren mientras pienso", en: "being watched while i think", category: "other" },
          { es: "el silencio antes de contestar", en: "the silence before answering", category: "time" },
        ],
      },
      {
        stem: "No sé, a mí…",
        english: "I don't know, for me… / I dunno, personally…",
        completions: [
          { es: "la primavera me da por hablar más", en: "spring makes me talk more", category: "time" },
          { es: "las preguntas grandes me salen mejor caminando", en: "big questions come out better when i'm walking", category: "activity" },
          { es: "me gusta más este café en marzo", en: "i like this café better in march", category: "opinion" },
          { es: "me cuesta empezar y después no paro", en: "starting is hard and then i don't stop", category: "other" },
          { es: "me sale mejor en la segunda vuelta", en: "it comes out better the second time around", category: "other" },
        ],
      },
    ],
  },
  {
    day: 275,
    theme: "En el pasillo",
    stems: [
      {
        stem: "Ay, no…",
        english: "Oh no… / Ugh, no…",
        completions: [
          { es: "no me digas que se dañó otra vez", en: "don't tell me it broke again", category: "other" },
          { es: "hoy no, que tengo examen a primera hora", en: "not today, i have a test first period", category: "time" },
          { es: "me dejé las llaves en el otro abrigo", en: "i left my keys in the other coat", category: "other" },
          { es: "ya sonó el timbre", en: "the bell already rang", category: "time" },
          { es: "esa reunión otra vez no", en: "not that meeting again", category: "opinion" },
        ],
      },
      {
        stem: "Te juro que…",
        english: "I swear (that)…",
        completions: [
          { es: "tenía esa carpeta en la mano", en: "i had that folder in my hand", category: "other" },
          { es: "mandé el correo el viernes", en: "i sent the email on friday", category: "time" },
          { es: "este pasillo se come las cosas", en: "this hallway eats things", category: "other" },
          { es: "lo dejé encima de tu escritorio", en: "i left it on your desk", category: "other" },
          { es: "salgo en dos minutos", en: "i'm leaving in two minutes", category: "time" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "no he comido desde las siete", en: "i haven't eaten since seven", category: "food" },
          { es: "hoy no tengo cabeza para una reunión", en: "i don't have the head for a meeting today", category: "opinion" },
          { es: "prefiero cubrir tu clase que ir a esa junta", en: "i'd rather cover your class than go to that meeting", category: "activity" },
          { es: "llevo tres días con el mismo dolor de cabeza", en: "i've had the same headache for three days", category: "time" },
          { es: "me falta media hora de sueño cada noche", en: "i'm half an hour short of sleep every night", category: "time" },
        ],
      },
      {
        stem: "Me da una cosa…",
        english: "It gives me a feeling… / It makes me squirm…",
        completions: [
          { es: "cuando un estudiante me espera afuera", en: "when a student waits for me outside", category: "other" },
          { es: "el pasillo a las siete y media", en: "the hallway at seven thirty", category: "time" },
          { es: "que me pidan ayuda con la voz bajita", en: "being asked for help in a small voice", category: "other" },
          { es: "el salón vacío antes de que lleguen", en: "the empty classroom before they arrive", category: "time" },
          { es: "cuando alguien me dice gracias en la puerta", en: "when someone says thank you at the door", category: "other" },
        ],
      },
      {
        stem: "No sé, a mí…",
        english: "I don't know, for me… / I dunno, personally…",
        completions: [
          { es: "me gusta más este pasillo que la sala de maestros", en: "i like this hallway better than the staff room", category: "opinion" },
          { es: "las mañanas me cunden más que las tardes", en: "mornings are more productive for me than afternoons", category: "time" },
          { es: "me sirve más hablar contigo aquí", en: "talking to you here works better for me", category: "activity" },
          { es: "los lunes se me hacen largos", en: "mondays feel long to me", category: "time" },
          { es: "me cae mejor la copiadora vieja", en: "i like the old copier better", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 276,
    theme: "La videollamada",
    stems: [
      {
        stem: "Ay, no…",
        english: "Oh no… / Ugh, no…",
        completions: [
          { es: "mamá, no empieces con la hija de la vecina", en: "mom, don't start with the neighbor's daughter", category: "other" },
          { es: "esa foto no, por favor", en: "not that photo, please", category: "other" },
          { es: "ya sé lo que vas a decir", en: "i already know what you're going to say", category: "other" },
          { es: "no me pongas a la tía en la llamada", en: "don't put my aunt on the call", category: "other" },
          { es: "otra vez la misma conversación", en: "the same conversation again", category: "opinion" },
        ],
      },
      {
        stem: "Te juro que…",
        english: "I swear (that)…",
        completions: [
          { es: "te iba a marcar, tenía el teléfono en la mano", en: "i was about to call you, i had the phone in my hand", category: "other" },
          { es: "sí como, mamá", en: "i do eat, mom", category: "food" },
          { es: "la semana que viene te mando las fotos", en: "next week i'll send you the photos", category: "time" },
          { es: "no estoy trabajando ahorita", en: "i'm not working right now", category: "time" },
          { es: "aquí también hace frío en marzo", en: "it's cold here in march too", category: "other" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "extraño más el calor que la casa", en: "i miss the heat more than the house", category: "opinion" },
          { es: "estas llamadas me duran toda la semana", en: "these calls last me the whole week", category: "time" },
          { es: "no te cuento la mitad para que no te preocupes", en: "i don't tell you half of it so you won't worry", category: "other" },
          { es: "aquí nadie cocina como tú", en: "nobody here cooks like you", category: "food" },
          { es: "los jueves son mi mejor día", en: "thursdays are my best day", category: "time" },
        ],
      },
      {
        stem: "Me da una cosa…",
        english: "It gives me a feeling… / It makes me squirm…",
        completions: [
          { es: "cuando te oigo en la cocina detrás del teléfono", en: "when i hear you in the kitchen behind the phone", category: "other" },
          { es: "ver la misma silla en el mismo rincón", en: "seeing the same chair in the same corner", category: "other" },
          { es: "colgar y que la casa se quede en silencio", en: "hanging up and the house going quiet", category: "other" },
          { es: "oír a los primos de fondo", en: "hearing the cousins in the background", category: "other" },
          { es: "que me llames mija todavía", en: "that you still call me mija", category: "other" },
        ],
      },
      {
        stem: "No sé, a mí…",
        english: "I don't know, for me… / I dunno, personally…",
        completions: [
          { es: "los domingos me pegan más que las fiestas", en: "sundays hit me harder than the holidays", category: "time" },
          { es: "me hace falta el ruido de allá, no la casa", en: "i miss the noise there, not the house", category: "opinion" },
          { es: "me cuesta más marzo que diciembre", en: "march is harder for me than december", category: "time" },
          { es: "me gusta más llamarte de noche", en: "i like calling you at night better", category: "time" },
          { es: "se me hace raro no tener a nadie cerca los domingos", en: "it feels strange having nobody near on sundays", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 277,
    theme: "El código",
    stems: [
      {
        stem: "Ay, no…",
        english: "Oh no… / Ugh, no…",
        completions: [
          { es: "no mires el código, está pegado con cinta", en: "don't look at the code, it's held together with tape", category: "other" },
          { es: "se cayó otra vez y ya iba bien", en: "it crashed again and it was going well", category: "other" },
          { es: "eso lo escribí a las dos de la mañana", en: "i wrote that at two in the morning", category: "time" },
          { es: "ese botón todavía no sirve", en: "that button doesn't work yet", category: "other" },
          { es: "no le des ahí, por favor", en: "don't click there, please", category: "activity" },
        ],
      },
      {
        stem: "Te juro que…",
        english: "I swear (that)…",
        completions: [
          { es: "anoche a medianoche sí funcionaba", en: "last night at midnight it was working", category: "time" },
          { es: "no toqué nada desde ayer", en: "i haven't touched anything since yesterday", category: "time" },
          { es: "es un error de una sola letra", en: "it's a one-letter mistake", category: "other" },
          { es: "en mi computadora se ve distinto", en: "on my computer it looks different", category: "other" },
          { es: "esto lo hice en dos noches", en: "i made this in two nights", category: "time" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "construyo estas cosas para no pensar en el colegio", en: "i build these things so i don't think about school", category: "activity" },
          { es: "nadie me pidió esto, lo hice porque quise", en: "nobody asked me for this, i did it because i wanted to", category: "other" },
          { es: "me gusta más armarlo que terminarlo", en: "i like building it more than finishing it", category: "opinion" },
          { es: "aprendí todo esto de videos a medianoche", en: "i learned all of this from videos at midnight", category: "time" },
          { es: "lo uso yo sola y ya vale la pena", en: "i'm the only one who uses it and it's already worth it", category: "opinion" },
        ],
      },
      {
        stem: "Me da una cosa…",
        english: "It gives me a feeling… / It makes me squirm…",
        completions: [
          { es: "cuando algo que hice yo por fin funciona", en: "when something i made finally works", category: "other" },
          { es: "enseñarle esto a alguien por primera vez", en: "showing this to someone for the first time", category: "activity" },
          { es: "el silencio de la casa a las once", en: "the silence of the house at eleven", category: "time" },
          { es: "borrar cien líneas de una vez", en: "deleting a hundred lines at once", category: "activity" },
          { es: "que alguien más lo abra y le sirva", en: "someone else opening it and it being useful", category: "other" },
        ],
      },
      {
        stem: "No sé, a mí…",
        english: "I don't know, for me… / I dunno, personally…",
        completions: [
          { es: "se me hace más fácil arreglar un error que corregir papeles", en: "fixing a bug is easier for me than grading papers", category: "activity" },
          { es: "programar me relaja más que la televisión", en: "coding relaxes me more than tv", category: "opinion" },
          { es: "las dos cosas se me parecen", en: "the two things feel the same to me", category: "opinion" },
          { es: "me sale mejor de noche que de día", en: "it comes out better at night than in the day", category: "time" },
          { es: "me gusta más cuando nadie sabe que lo estoy haciendo", en: "i like it better when nobody knows i'm doing it", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 278,
    theme: "Lo que ve Camila",
    stems: [
      {
        stem: "Ay, no…",
        english: "Oh no… / Ugh, no…",
        completions: [
          { es: "para, que me vas a hacer llorar", en: "stop, you're going to make me cry", category: "other" },
          { es: "esto es peor que hablar de mí yo misma", en: "this is worse than talking about myself", category: "opinion" },
          { es: "di algo malo también, para equilibrar", en: "say something bad too, to even it out", category: "other" },
          { es: "ya, cámbiame el tema", en: "okay, change the subject on me", category: "activity" },
          { es: "no sigas, que se me sube el color", en: "don't go on, i'm turning red", category: "other" },
        ],
      },
      {
        stem: "Te juro que…",
        english: "I swear (that)…",
        completions: [
          { es: "yo no me veo así para nada", en: "i don't see myself that way at all", category: "opinion" },
          { es: "en mi cabeza soy la torpe de la mesa", en: "in my head i'm the clumsy one at the table", category: "opinion" },
          { es: "es la primera vez que alguien me dice eso", en: "it's the first time anyone has said that to me", category: "time" },
          { es: "no sabía que se me notaba", en: "i didn't know it showed", category: "other" },
          { es: "me lo voy a acordar todo el año", en: "i'm going to remember that all year", category: "time" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "nadie me dice eso hace años", en: "nobody has said that to me in years", category: "time" },
          { es: "no sé qué hacer con la cara ahora mismo", en: "i don't know what to do with my face right now", category: "other" },
          { es: "necesitaba oírlo hoy", en: "i needed to hear it today", category: "time" },
          { es: "me cuesta más recibir que dar", en: "receiving is harder for me than giving", category: "opinion" },
          { es: "me gusta cómo suena en tu voz", en: "i like how it sounds in your voice", category: "opinion" },
        ],
      },
      {
        stem: "Me da una cosa…",
        english: "It gives me a feeling… / It makes me squirm…",
        completions: [
          { es: "oírtelo decir en español", en: "hearing you say it in spanish", category: "activity" },
          { es: "que me conozcas tan rápido", en: "that you know me so fast", category: "other" },
          { es: "pensar que llevas un año mirándome hablar", en: "thinking you've spent a year watching me talk", category: "time" },
          { es: "que lo digas sin dudarlo", en: "that you say it without hesitating", category: "other" },
          { es: "quedarme callada mientras hablas de mí", en: "staying quiet while you talk about me", category: "activity" },
        ],
      },
      {
        stem: "No sé, a mí…",
        english: "I don't know, for me… / I dunno, personally…",
        completions: [
          { es: "siempre me pareció que yo era la callada", en: "i always thought i was the quiet one", category: "opinion" },
          { es: "eso me suena a otra persona", en: "that sounds like someone else to me", category: "opinion" },
          { es: "me cuesta creerlo y aun así me gusta", en: "it's hard for me to believe and i like it anyway", category: "opinion" },
          { es: "me ves mejor de lo que soy", en: "you see me better than i am", category: "other" },
          { es: "me da más confianza oírlo de ti", en: "hearing it from you gives me more confidence", category: "other" },
        ],
      },
    ],
  },
  {
    day: 279,
    theme: "Cuando me llevan la contraria",
    stems: [
      {
        stem: "Ay, no…",
        english: "Oh no… / Ugh, no…",
        completions: [
          { es: "ahora suenas como mi tía", en: "now you sound like my aunt", category: "other" },
          { es: "eso no es lo mismo y tú lo sabes", en: "that's not the same and you know it", category: "opinion" },
          { es: "no me vengas con eso a esta hora", en: "don't come at me with that at this hour", category: "time" },
          { es: "ahí sí no te sigo", en: "there i'm not with you", category: "opinion" },
          { es: "esa la escuché en enero también", en: "i heard that one in january too", category: "time" },
        ],
      },
      {
        stem: "Te juro que…",
        english: "I swear (that)…",
        completions: [
          { es: "eso no fue lo que dije", en: "that's not what i said", category: "other" },
          { es: "lo pensé antes de decirlo", en: "i thought about it before saying it", category: "activity" },
          { es: "no me estoy enojando, estoy discutiendo", en: "i'm not getting angry, i'm arguing", category: "opinion" },
          { es: "te escuché entera antes de contestar", en: "i heard you all the way out before answering", category: "activity" },
          { es: "esta vez no voy a ceder tan rápido", en: "this time i'm not giving in so fast", category: "time" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "yo sigo pensando que tengo razón", en: "i still think i'm right", category: "opinion" },
          { es: "no me convenciste, pero te entiendo", en: "you didn't convince me, but i understand you", category: "opinion" },
          { es: "prefiero que me lo digas así, de frente", en: "i'd rather you told me that way, straight", category: "other" },
          { es: "me molestó y ya se me pasó", en: "it bothered me and it's already passed", category: "time" },
          { es: "discutir contigo me sale más fácil que con otros", en: "arguing with you is easier for me than with others", category: "activity" },
        ],
      },
      {
        stem: "Me da una cosa…",
        english: "It gives me a feeling… / It makes me squirm…",
        completions: [
          { es: "cuando alguien me corrige delante de otros", en: "when someone corrects me in front of others", category: "other" },
          { es: "discutir en español y no poder esconderme en el inglés", en: "arguing in spanish and not being able to hide in english", category: "activity" },
          { es: "quedarme callada cuando no estoy de acuerdo", en: "staying quiet when i don't agree", category: "activity" },
          { es: "levantar la voz aunque tenga razón", en: "raising my voice even when i'm right", category: "other" },
          { es: "el silencio justo después de discutir", en: "the silence right after an argument", category: "time" },
        ],
      },
      {
        stem: "No sé, a mí…",
        english: "I don't know, for me… / I dunno, personally…",
        completions: [
          { es: "no me hace falta que estemos de acuerdo hoy", en: "i don't need us to agree today", category: "time" },
          { es: "me parece que las dos tenemos una parte", en: "it seems to me we're each partly right", category: "opinion" },
          { es: "discutir contigo no me cansa, me despierta", en: "arguing with you doesn't tire me, it wakes me up", category: "opinion" },
          { es: "me sirve más una discusión que un acuerdo rápido", en: "an argument helps me more than a quick agreement", category: "opinion" },
          { es: "se me ocurren las respuestas al día siguiente", en: "the answers come to me the next day", category: "time" },
        ],
      },
    ],
  },
  {
    day: 280,
    theme: "Sábado en la lavandería",
    stems: [
      {
        stem: "Ay, no…",
        english: "Oh no… / Ugh, no…",
        completions: [
          { es: "no me digas que tú también vienes en tu día libre", en: "don't tell me you come on your day off too", category: "time" },
          { es: "y yo con la misma sudadera de ayer", en: "and me in yesterday's sweatshirt", category: "other" },
          { es: "se me olvidó el jabón otra vez", en: "i forgot the soap again", category: "other" },
          { es: "esa secadora lleva media hora parada", en: "that dryer has been sitting for half an hour", category: "time" },
          { es: "no traje monedas", en: "i didn't bring quarters", category: "other" },
        ],
      },
      {
        stem: "Te juro que…",
        english: "I swear (that)…",
        completions: [
          { es: "no te reconocí sin el uniforme", en: "i didn't recognize you without the uniform", category: "other" },
          { es: "iba a preguntarte el jueves cómo seguía tu mamá", en: "i was going to ask you thursday how your mom was doing", category: "time" },
          { es: "llevo cuarenta minutos esperando esa secadora", en: "i've been waiting forty minutes for that dryer", category: "time" },
          { es: "esta es la única cosa que hago los sábados", en: "this is the only thing i do on saturdays", category: "activity" },
          { es: "nunca me había pasado encontrarme a alguien aquí", en: "i've never run into anyone here before", category: "other" },
        ],
      },
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "este es el primer sábado que no trabajo en un mes", en: "this is the first saturday i haven't worked in a month", category: "time" },
          { es: "vengo aquí porque en casa no dejo de corregir", en: "i come here because at home i don't stop grading", category: "activity" },
          { es: "tú preguntas mejor que yo", en: "you ask better questions than i do", category: "opinion" },
          { es: "me gusta el ruido de este lugar", en: "i like the noise of this place", category: "opinion" },
          { es: "no sé nada de tu vida fuera de la clase", en: "i don't know anything about your life outside of class", category: "other" },
        ],
      },
      {
        stem: "Me da una cosa…",
        english: "It gives me a feeling… / It makes me squirm…",
        completions: [
          { es: "encontrarte fuera de la clase", en: "running into you outside of class", category: "other" },
          { es: "que me hables en español y no en inglés aquí", en: "that you speak to me in spanish and not english here", category: "activity" },
          { es: "el ruido de las secadoras, me recuerda a Atlanta", en: "the noise of the dryers, it reminds me of atlanta", category: "other" },
          { es: "verte doblando ropa un sábado", en: "seeing you folding laundry on a saturday", category: "time" },
          { es: "no saber si decirte maestra o Marlana", en: "not knowing whether to call you teacher or marlana", category: "other" },
        ],
      },
      {
        stem: "No sé, a mí…",
        english: "I don't know, for me… / I dunno, personally…",
        completions: [
          { es: "me gusta más hablar contigo aquí que en el salón", en: "i like talking to you here better than in the classroom", category: "opinion" },
          { es: "los sábados en este barrio me caen bien", en: "saturdays in this neighborhood sit well with me", category: "time" },
          { es: "me pareces otra persona sin la silla de la clase", en: "you seem like a different person without the classroom chair", category: "opinion" },
          { es: "se me olvida que soy la maestra aquí", en: "i forget i'm the teacher here", category: "other" },
          { es: "esto cuenta como práctica también", en: "this counts as practice too", category: "activity" },
        ],
      },
    ],
  },
];
