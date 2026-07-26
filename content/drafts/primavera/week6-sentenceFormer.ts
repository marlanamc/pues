import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 6 — "Debate suave II" (days 309–315).
 * Stems must match content/drafts/primavera/week6-frames.ts for the same day.
 */
export const priWeek6SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 309,
    theme: "Puede que tengas razón en el invierno",
    stems: [
      {
        stem: "Puede que tengas razón en…",
        english: "You might be right about…",
        completions: [
          { es: "que febrero sale más barato", en: "february being cheaper", category: "other" },
          { es: "que el invierno se ve bonito en fotos", en: "winter looking pretty in photos", category: "opinion" },
          { es: "que hace mucho que no nos vemos", en: "it being a long time since we saw each other", category: "time" },
          { es: "que mamá extraña verte pronto", en: "mom missing seeing you soon", category: "other" },
          { es: "que los vuelos suben en abril", en: "flights going up in april", category: "other" },
        ],
      },
      {
        stem: "Aun así…",
        english: "Even so… / Still…",
        completions: [
          { es: "febrero aquí no es lo que imaginas", en: "february here isn't what you imagine", category: "opinion" },
          { es: "no puedo tomarme una semana en pleno invierno", en: "i can't take a week in deep winter", category: "time" },
          { es: "prefiero que vengas cuando pueda salir con calma", en: "i'd rather you come when i can go out calmly", category: "activity" },
          { es: "la primavera me deja respirar un poco", en: "spring lets me breathe a little", category: "opinion" },
          { es: "no prometo toda la semana", en: "i'm not promising the whole week", category: "other" },
        ],
      },
      {
        stem: "No había pensado en eso",
        english: "I hadn't thought of that",
        completions: [
          { es: "— tus vacaciones son solo en enero", en: "your vacation being only in january", category: "time" },
          { es: "— la diferencia de precio con abril", en: "the price difference with april", category: "other" },
          { es: "— que llevas dos años sin subir en avión", en: "you haven't flown in two years", category: "time" },
          { es: "— lo mucho que extrañas la nieve", en: "how much you miss snow", category: "opinion" },
          { es: "— que mamá también opina", en: "mom having an opinion too", category: "other" },
        ],
      },
      {
        stem: "Tienes un punto",
        english: "You have a point",
        completions: [
          { es: "— quieres ver la nieve de verdad", en: "you want to see real snow", category: "activity" },
          { es: ", tía — hace demasiado que no vienes", en: "aunt — it's been too long since you came", category: "time" },
          { es: "con lo de reservar temprano", en: "about booking early", category: "activity" },
          { es: "— los precios no esperan", en: "prices don't wait", category: "other" },
          { es: "— extrañas Boston tanto como yo extraño Atlanta", en: "you miss boston as much as i miss atlanta", category: "opinion" },
        ],
      },
      {
        stem: "Me convenzo hasta cierto punto",
        english: "You convince me up to a point",
        completions: [
          { es: "con lo de febrero", en: "about february", category: "time" },
          { es: "— pero no toda la semana", en: "but not the whole week", category: "time" },
          { es: "si hablamos de marzo", en: "if we talk about march", category: "time" },
          { es: "de revisar fechas contigo", en: "to look at dates with you", category: "activity" },
          { es: "— pero tú también escuchas mis fechas", en: "but you also listen to my dates", category: "other" },
        ],
      },
    ],
  },
  {
    day: 310,
    theme: "Aun así no es mi temporada",
    stems: [
      {
        stem: "Puede que tengas razón en…",
        english: "You might be right about…",
        completions: [
          { es: "que se ve precioso en las fotos", en: "it looking beautiful in the photos", category: "opinion" },
          { es: "que el invierno es toda una experiencia", en: "winter being a whole experience", category: "opinion" },
          { es: "que me estoy poniendo dramática", en: "me being dramatic", category: "opinion" },
          { es: "que las fotos dan ganas de ir", en: "the photos making you want to go", category: "opinion" },
          { es: "que necesitas salir de Atlanta un rato", en: "you needing to get out of atlanta for a while", category: "activity" },
        ],
      },
      {
        stem: "Aun así…",
        english: "Even so… / Still…",
        completions: [
          { es: "febrero aquí es trabajo, nieve y más nieve", en: "february here is work, snow, and more snow", category: "other" },
          { es: "no quiero que llegues y no pueda acompañarte", en: "i don't want you to arrive and i can't go with you", category: "activity" },
          { es: "la primavera me deja respirar un poco", en: "spring lets me breathe a little", category: "opinion" },
          { es: "no prometo sol — prometo compañía", en: "i'm not promising sun — i'm promising company", category: "other" },
          { es: "recuerdo las tuberías del invierno pasado", en: "i remember last winter's pipes", category: "other" },
        ],
      },
      {
        stem: "No había pensado en eso",
        english: "I hadn't thought of that",
        completions: [
          { es: "— tú nunca has visto una tormenta de nieve", en: "you've never seen a snowstorm", category: "other" },
          { es: "— lo distinto que es Atlanta de febrero aquí", en: "how different atlanta is from february here", category: "opinion" },
          { es: "— que para ti esto es un viaje, no una temporada", en: "for you this is a trip, not a season", category: "opinion" },
          { es: "— lo mucho que extrañas ver cómo vivo yo", en: "how much you want to see how i live", category: "other" },
          { es: "— que las fotos te convencieron a ti también", en: "the photos convinced you too", category: "opinion" },
        ],
      },
      {
        stem: "Tienes un punto",
        english: "You have a point",
        completions: [
          { es: "con las fotos — dan ganas de ir", en: "about the photos — they make you want to go", category: "opinion" },
          { es: "— necesitas salir de Atlanta un rato", en: "you need to get out of atlanta for a while", category: "activity" },
          { es: "— quieres ver cómo vivo yo aquí", en: "you want to see how i live here", category: "other" },
          { es: "con lo de Instagram versus la vida real", en: "about instagram versus real life", category: "opinion" },
          { es: "— febrero es tu única ventana larga", en: "february is your only long window", category: "time" },
        ],
      },
      {
        stem: "Me convenzo hasta cierto punto",
        english: "You convince me up to a point",
        completions: [
          { es: "con un fin de semana largo", en: "about a long weekend", category: "time" },
          { es: "si no es pleno febrero", en: "if it's not deep february", category: "time" },
          { es: "— pero tú también cede un poco", en: "but you give a little too", category: "other" },
          { es: "de hablar con mamá mañana", en: "to talk with mom tomorrow", category: "activity" },
          { es: "— pero no compro el boleto hoy", en: "but i'm not buying the ticket today", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 311,
    theme: "No había pensado en eso",
    stems: [
      {
        stem: "Puede que tengas razón en…",
        english: "You might be right about…",
        completions: [
          { es: "que mamá extraña verte pronto", en: "mom missing seeing you soon", category: "other" },
          { es: "que abril se llena rápido", en: "april filling up fast", category: "time" },
          { es: "que yo también te extraño", en: "me missing you too", category: "opinion" },
          { es: "que los precios suben si espero", en: "prices going up if i wait", category: "other" },
          { es: "que febrero les conviene a ustedes dos", en: "february working for you two", category: "time" },
        ],
      },
      {
        stem: "Aun así…",
        english: "Even so… / Still…",
        completions: [
          { es: "quiero poder recibirte bien, no entre tormentas", en: "i want to host you well, not between storms", category: "activity" },
          { es: "abril me deja mostrarte la ciudad caminando", en: "april lets me show you the city on foot", category: "activity" },
          { es: "la decisión no la toma mamá sola", en: "mom doesn't make the decision alone", category: "other" },
          { es: "no compro el boleto sin confirmar", en: "i'm not buying the ticket without confirming", category: "activity" },
          { es: "marzo sigue en la mesa", en: "march is still on the table", category: "time" },
        ],
      },
      {
        stem: "No había pensado en eso",
        english: "I hadn't thought of that",
        completions: [
          { es: "— ya tienes un vuelo guardado", en: "you already have a flight saved", category: "activity" },
          { es: "— que mamá te respaldaría tan rápido", en: "mom would back you up so fast", category: "other" },
          { es: "— lo mucho que extrañan verte en Atlanta", en: "how much they miss seeing you in atlanta", category: "other" },
          { es: "— que los precios cambian en tres semanas", en: "prices changing in three weeks", category: "other" },
          { es: "— lo fuerte que suena \"compro hoy\"", en: "how strong \"i buy today\" sounds", category: "opinion" },
        ],
      },
      {
        stem: "Tienes un punto",
        english: "You have a point",
        completions: [
          { es: "con lo del vuelo — los precios suben", en: "about the flight — prices go up", category: "other" },
          { es: "— mamá lleva meses pidiéndote que vengas", en: "mom has been asking you to come for months", category: "time" },
          { es: "— la familia quiere verte ya", en: "the family wants to see you now", category: "other" },
          { es: "con lo de reservar antes de que suba", en: "about booking before it goes up", category: "activity" },
          { es: "— tres semanas es poco tiempo", en: "three weeks is little time", category: "time" },
        ],
      },
      {
        stem: "Me convenzo hasta cierto punto",
        english: "You convince me up to a point",
        completions: [
          { es: "de revisar fechas contigo", en: "to look at dates with you", category: "activity" },
          { es: "— pero no compro el boleto hoy", en: "but i'm not buying the ticket today", category: "activity" },
          { es: "si movemos la conversación a marzo", en: "if we move the conversation to march", category: "time" },
          { es: "de hacer videollamada con mamá", en: "to do a video call with mom", category: "activity" },
          { es: "— pero necesito mis condiciones", en: "but i need my conditions", category: "other" },
        ],
      },
    ],
  },
  {
    day: 312,
    theme: "Tienes un punto, tía",
    stems: [
      {
        stem: "Puede que tengas razón en…",
        english: "You might be right about…",
        completions: [
          { es: "que estoy siendo terca", en: "me being stubborn", category: "opinion" },
          { es: "que febrero les conviene a ustedes dos", en: "february working for you two", category: "time" },
          { es: "que yo prometí primavera y no di fecha", en: "me promising spring and not giving a date", category: "other" },
          { es: "que mamá tiene voz en esto", en: "mom having a say in this", category: "other" },
          { es: "que cuatro días suena poco", en: "four days sounding like too little", category: "opinion" },
        ],
      },
      {
        stem: "Aun así…",
        english: "Even so… / Still…",
        completions: [
          { es: "febrero me deja agotada después del colegio", en: "february leaves me exhausted after school", category: "activity" },
          { es: "no quiero que lleguen y yo esté en modo supervivencia", en: "i don't want you to arrive and me be in survival mode", category: "other" },
          { es: "prefiero una visita buena a una visita rápida", en: "i'd rather a good visit than a rushed one", category: "opinion" },
          { es: "marzo me deja ser anfitriona, no sobreviviente", en: "march lets me be a host, not a survivor", category: "opinion" },
          { es: "el colegio sigue y yo trabajo en las mañanas", en: "school continues and i work in the mornings", category: "activity" },
        ],
      },
      {
        stem: "No había pensado en eso",
        english: "I hadn't thought of that",
        completions: [
          { es: "— mamá quiere cocinar contigo en invierno", en: "mom wanting to cook with you in winter", category: "activity" },
          { es: "— que tu único hueco libre es enero", en: "your only free window being january", category: "time" },
          { es: "— que abril choca con el cumple de mi prima", en: "april clashing with my cousin's birthday", category: "time" },
          { es: "— lo mucho que mamá extraña la mesa llena", en: "how much mom misses a full table", category: "other" },
          { es: "— que la sopa es argumento emocional", en: "soup being an emotional argument", category: "opinion" },
        ],
      },
      {
        stem: "Tienes un punto",
        english: "You have a point",
        completions: [
          { es: ", tía — mamá tiene razón con lo de la sopa", en: "aunt — mom is right about the soup", category: "food" },
          { es: "— una vez hay que ver la nieve de cerca", en: "you have to see snow up close once", category: "activity" },
          { es: "con lo de no esperar otro año", en: "about not waiting another year", category: "time" },
          { es: "— discutir así es mejor que pelear", en: "arguing like this is better than fighting", category: "opinion" },
          { es: "— mamá nos echa de menos a las dos", en: "mom misses us both", category: "other" },
        ],
      },
      {
        stem: "Me convenzo hasta cierto punto",
        english: "You convince me up to a point",
        completions: [
          { es: "con finales de marzo", en: "about late march", category: "time" },
          { es: "— cuatro días, no siete", en: "four days, not seven", category: "time" },
          { es: "si ustedes también escuchan mis fechas", en: "if you also listen to my dates", category: "other" },
          { es: "de cerrar algo esta semana", en: "to close something this week", category: "time" },
          { es: "— pero confirmas conmigo antes", en: "but you confirm with me first", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 313,
    theme: "Me convenzo hasta cierto punto",
    stems: [
      {
        stem: "Puede que tengas razón en…",
        english: "You might be right about…",
        completions: [
          { es: "que a finales de marzo aún hay nieve", en: "there still being snow in late march", category: "other" },
          { es: "que esto nos conviene a las tres", en: "this working for all three of us", category: "opinion" },
          { es: "que valió la pena discutirlo", en: "it being worth arguing about", category: "opinion" },
          { es: "que marzo también tiene vuelos baratos", en: "march also having cheap flights", category: "other" },
          { es: "que discutir con cariño funciona", en: "arguing with warmth working", category: "opinion" },
        ],
      },
      {
        stem: "Aun así…",
        english: "Even so… / Still…",
        completions: [
          { es: "necesito que confirmes antes de comprar", en: "i need you to confirm before you buy", category: "activity" },
          { es: "no prometo sol — prometo compañía", en: "i'm not promising sun — i'm promising company", category: "other" },
          { es: "el colegio sigue y yo trabajo en las mañanas", en: "school continues and i work in the mornings", category: "activity" },
          { es: "cuatro días, no más", en: "four days, no more", category: "time" },
          { es: "febrero sigue siendo un no", en: "february is still a no", category: "time" },
        ],
      },
      {
        stem: "No había pensado en eso",
        english: "I hadn't thought of that",
        completions: [
          { es: "— marzo también tiene vuelos baratos", en: "march also having cheap flights", category: "other" },
          { es: "— que tú podías moverte una semana", en: "you could move a week", category: "time" },
          { es: "— lo contenta que se puso mamá con la fecha", en: "how happy mom got with the date", category: "other" },
          { es: "— que ganamos las dos un poco", en: "both of us winning a little", category: "opinion" },
          { es: "— lo bien que suena \"discutir con cariño\"", en: "how good \"arguing with warmth\" sounds", category: "opinion" },
        ],
      },
      {
        stem: "Tienes un punto",
        english: "You have a point",
        completions: [
          { es: "— finales de marzo suena bien", en: "late march sounds good", category: "time" },
          { es: "con lo de reservar esta semana", en: "about booking this week", category: "activity" },
          { es: "— discutir así es mejor que ceder de golpe", en: "arguing like this is better than giving in all at once", category: "opinion" },
          { es: "— tú ves nieve, yo no me congelo", en: "you get snow, i don't freeze", category: "opinion" },
          { es: "— valió la pena la videollamada", en: "the video call was worth it", category: "other" },
        ],
      },
      {
        stem: "Me convenzo hasta cierto punto",
        english: "You convince me up to a point",
        completions: [
          { es: "— quedamos en la última semana de marzo", en: "we're set for the last week of march", category: "time" },
          { es: "y compro el calendario", en: "and i'll buy the calendar", category: "activity" },
          { es: "— tú ves nieve, yo no me congelo", en: "you get snow, i don't freeze", category: "opinion" },
          { es: "de avisarte cuando tenga los días libres", en: "to tell you when i have days off", category: "activity" },
          { es: "— ahí se cierra el trato", en: "that's where the deal closes", category: "other" },
        ],
      },
    ],
  },
  {
    day: 314,
    theme: "Sin colapsar",
    stems: [
      {
        stem: "Puede que tengas razón en…",
        english: "You might be right that…",
        completions: [
          { es: "que sueno muy formal con mi tía", en: "that i sound too formal with my aunt", category: "opinion" },
          { es: "que al principio fui inflexible", en: "that i was inflexible at first", category: "opinion" },
          { es: "que ella solo quería una fecha", en: "that she just wanted a date", category: "time" },
          { es: "que no la dejé terminar", en: "that i didn't let her finish", category: "activity" },
          { es: "que mamá me lo advirtió antes", en: "that mom warned me beforehand", category: "time" },
        ],
      },
      {
        stem: "Aun así…",
        english: "Even so… / Still…",
        completions: [
          { es: "no dije que sí a febrero", en: "i didn't say yes to february", category: "time" },
          { es: "la fecha la elegí yo también", en: "i picked the date too", category: "time" },
          { es: "salí de la llamada sin pelear", en: "i got off the call without fighting", category: "other" },
          { es: "no me quedé callada como en enero", en: "i didn't go quiet like in january", category: "time" },
          { es: "colgué antes de arrepentirme", en: "i hung up before i changed my mind", category: "activity" },
        ],
      },
      {
        stem: "No había pensado en eso",
        english: "I hadn't thought about that",
        completions: [
          { es: "que mamá iba a estar de su lado todo el rato", en: "that mom would be on her side the whole time", category: "other" },
          { es: "que la tía nunca ha visto nieve de verdad", en: "that my aunt has never seen real snow", category: "other" },
          { es: "que para ella el viaje también cuesta", en: "that the trip costs her something too", category: "other" },
          { es: "que ella tiene un solo mes libre al año", en: "that she has one free month a year", category: "time" },
          { es: "que a mamá le hace ilusión que vengan juntas", en: "that mom is excited about them coming together", category: "opinion" },
        ],
      },
      {
        stem: "Tienes un punto",
        english: "You have a point",
        completions: [
          { es: "si viene en marzo sí puede salir a la calle", en: "if she comes in march she can go outside", category: "time" },
          { es: "ceder un poco no es perder", en: "giving a little isn't losing", category: "opinion" },
          { es: "con lo de reservar antes de que suban los vuelos", en: "about booking before flights go up", category: "other" },
          { es: "en marzo hay más luz por la tarde", en: "in march there's more light in the afternoon", category: "time" },
          { es: "una semana se pasa volando", en: "a week goes by fast", category: "time" },
        ],
      },
      {
        stem: "Me convenzo hasta cierto punto",
        english: "You convince me up to a point",
        completions: [
          { es: "que venga, pero dos semanas no", en: "she can come, but not two weeks", category: "time" },
          { es: "pero no dejo que vengan en enero", en: "but i'm not letting them come in january", category: "time" },
          { es: "de que se queden en mi casa", en: "about them staying at my place", category: "other" },
          { es: "de recogerlas yo en el aeropuerto", en: "about picking them up at the airport myself", category: "activity" },
          { es: "con una condición: yo elijo el fin de semana", en: "on one condition: i pick the weekend", category: "time" },
        ],
      },
    ],
  },
  {
    day: 315,
    theme: "Cediendo con Rocío",
    stems: [
      {
        stem: "Puede que tengas razón en…",
        english: "You might be right that…",
        completions: [
          { es: "que el sábado por la mañana nadie trabaja", en: "that nobody works saturday morning", category: "time" },
          { es: "que si no lo hacemos nosotras no lo hace nadie", en: "that if we don't do it nobody will", category: "other" },
          { es: "que empezar chiquito es mejor que no empezar", en: "that starting small beats not starting", category: "opinion" },
          { es: "que a mí también me haría bien", en: "that it would do me good too", category: "opinion" },
          { es: "que ya tienes el salón apartado", en: "that you already have the room reserved", category: "other" },
        ],
      },
      {
        stem: "Aun así…",
        english: "Even so… / Still…",
        completions: [
          { es: "yo no me apunto todas las semanas", en: "i'm not signing up every week", category: "time" },
          { es: "en mayo tengo los exámenes y no voy a poder", en: "in may i have the exams and i won't be able to", category: "time" },
          { es: "quiero que quede claro desde hoy", en: "i want it clear starting today", category: "other" },
          { es: "necesito un sábado libre al mes", en: "i need one free saturday a month", category: "time" },
          { es: "no cuentes conmigo para el verano", en: "don't count on me for the summer", category: "time" },
        ],
      },
      {
        stem: "No había pensado en eso",
        english: "I hadn't thought about that",
        completions: [
          { es: "que los papás quieren dónde dejarlos", en: "that the parents want somewhere to leave them", category: "other" },
          { es: "que a esa hora la biblioteca está cerrada", en: "that the library is closed at that hour", category: "time" },
          { es: "que algunos vienen aunque no haya clase", en: "that some come even when there's no class", category: "other" },
          { es: "que en la casa no tienen mesa para estudiar", en: "that at home they don't have a table to study at", category: "other" },
          { es: "que tú ya llevas dos años pensándolo", en: "that you've been thinking about it for two years", category: "time" },
        ],
      },
      {
        stem: "Tienes un punto",
        english: "You have a point",
        completions: [
          { es: "dos no es lo mismo que una", en: "two isn't the same as one", category: "opinion" },
          { es: "con lo de pedir el salón grande", en: "about asking for the big room", category: "other" },
          { es: "si es una vez al mes, sí aguanto", en: "if it's once a month, i can manage", category: "time" },
          { es: "los chicos vienen por el lugar, no por la clase", en: "the kids come for the place, not the class", category: "opinion" },
          { es: "más vale empezar en abril que en septiembre", en: "better to start in april than september", category: "time" },
        ],
      },
      {
        stem: "Me convenzo hasta cierto punto",
        english: "You convince me up to a point",
        completions: [
          { es: "hago un sábado al mes", en: "i'll do one saturday a month", category: "time" },
          { es: "pero el horario lo pongo yo", en: "but i set the schedule", category: "time" },
          { es: "pruébalo en abril y hablamos", en: "try it in april and we'll talk", category: "time" },
          { es: "empiezo contigo y en junio lo revisamos", en: "i'll start with you and we'll review it in june", category: "time" },
          { es: "voy, pero sin planear nada la noche antes", en: "i'll go, but i'm not planning anything the night before", category: "activity" },
        ],
      },
    ],
  },
];
