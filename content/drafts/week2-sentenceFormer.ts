import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 2 — "Dice que…" (days 99–105).
 * Stems must match content/drafts/week2-frames.ts for the same day.
 */
export const week2SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 99,
    theme: "La carta llega",
    stems: [
      {
        stem: "Dice que…",
        english: "She says that…",
        hints: {
          que: [
            { es: "está muy bien", en: "she's doing well" },
            { es: "me extraña mucho", en: "she misses me a lot" },
          ],
        },
        completions: [
          { es: "está muy bien de salud", en: "she's in very good health", category: "other" },
          { es: "me extraña mucho", en: "she misses me a lot", category: "other" },
          { es: "piensa en mí todos los días", en: "she thinks about me every day", category: "other" },
          { es: "el barrio está igual", en: "the neighborhood is the same", category: "other" },
          { es: "la carta tardó semanas", en: "the letter took weeks", category: "time" },
        ],
      },
      {
        stem: "Según…",
        english: "According to…",
        hints: {
          que: [
            { es: "la carta", en: "the letter" },
            { es: "abuela", en: "grandmother" },
          ],
        },
        completions: [
          { es: "la carta, está bien de salud", en: "the letter, she's in good health", category: "other" },
          { es: "abuela, el invierno ha sido suave", en: "grandmother, winter has been mild", category: "other" },
          { es: "el sobre, la mandó hace semanas", en: "the envelope, she sent it weeks ago", category: "time" },
          { es: "lo que escribe, me extraña", en: "what she writes, she misses me", category: "other" },
          { es: "la carta, la familia está bien", en: "the letter, the family is fine", category: "other" },
        ],
      },
      {
        stem: "Explica que…",
        english: "She explains that…",
        completions: [
          { es: "prefiere escribir a mano", en: "she prefers writing by hand", category: "activity" },
          { es: "casi no usa el teléfono", en: "she hardly uses the phone", category: "other" },
          { es: "su sobrina le ayuda", en: "her niece helps her", category: "other" },
          { es: "las cartas duran más", en: "letters last longer", category: "opinion" },
          { es: "le cuesta escribir en inglés", en: "writing in English is hard for her", category: "other" },
        ],
      },
      {
        stem: "Se trata de…",
        english: "It's about…",
        completions: [
          { es: "una carta larga y llena de cariño", en: "a long letter full of affection", category: "other" },
          { es: "noticias de la familia", en: "family news", category: "other" },
          { es: "la primera carta desde boston", en: "the first letter from boston", category: "other" },
          { es: "su salud y su cariño", en: "her health and her affection", category: "other" },
          { es: "extrañarme desde lejos", en: "missing me from far away", category: "other" },
        ],
      },
      {
        stem: "Cuenta que…",
        english: "She says/tells that…",
        completions: [
          { es: "se alegró con mi noticia", en: "she was happy about my news", category: "other" },
          { es: "oró por mí el día de la mudanza", en: "she prayed for me on moving day", category: "other" },
          { es: "guarda mi foto favorita", en: "she keeps my favorite photo", category: "other" },
          { es: "toda la familia pregunta por mí", en: "the whole family asks about me", category: "other" },
          { es: "le tomó días escribirla", en: "it took her days to write it", category: "time" },
        ],
      },
    ],
  },
  {
    day: 100,
    theme: "Recuerdos de la infancia",
    stems: [
      {
        stem: "Dice que…",
        english: "She says that…",
        completions: [
          { es: "de niña corría descalza", en: "as a girl she ran barefoot", category: "activity" },
          { es: "los veranos eran los mejores", en: "the summers were the best", category: "opinion" },
          { es: "yo era muy curiosa", en: "i was very curious", category: "opinion" },
          { es: "el patio era enorme", en: "the yard was huge", category: "other" },
          { es: "su abuela cocinaba todos los días", en: "her grandmother cooked every day", category: "activity" },
        ],
      },
      {
        stem: "Según…",
        english: "According to…",
        completions: [
          { es: "la carta, había un árbol de mango", en: "the letter, there was a mango tree", category: "other" },
          { es: "lo que recuerda, los domingos eran especiales", en: "what she remembers, sundays were special", category: "time" },
          { es: "sus palabras, yo tenía tres años", en: "her words, i was three years old", category: "other" },
          { es: "la carta, el barrio era más pequeño", en: "the letter, the neighborhood was smaller", category: "other" },
          { es: "abuela, cantaban juntas por las noches", en: "grandmother, they sang together at night", category: "activity" },
        ],
      },
      {
        stem: "Explica que…",
        english: "She explains that…",
        completions: [
          { es: "el olor a café nunca se le olvida", en: "the smell of coffee never leaves her", category: "other" },
          { es: "el barrio era más unido", en: "the neighborhood was closer-knit", category: "other" },
          { es: "ahora casi nadie vive ahí", en: "hardly anyone lives there now", category: "other" },
          { es: "esos recuerdos la hacen feliz", en: "those memories make her happy", category: "opinion" },
          { es: "me escribió para que no olvide", en: "she wrote so i wouldn't forget", category: "other" },
        ],
      },
      {
        stem: "Se trata de…",
        english: "It's about…",
        completions: [
          { es: "recuerdos de su infancia", en: "memories from her childhood", category: "other" },
          { es: "las tardes en el balcón", en: "afternoons on the balcony", category: "time" },
          { es: "historias que casi olvidé", en: "stories i almost forgot", category: "other" },
          { es: "puerto rico cuando era niña", en: "puerto rico when she was a girl", category: "other" },
          { es: "lo que compartimos de pequeña", en: "what we shared when i was little", category: "other" },
        ],
      },
      {
        stem: "Cuenta que…",
        english: "She says/tells that…",
        completions: [
          { es: "yo me escondía bajo la mesa", en: "i used to hide under the table", category: "activity" },
          { es: "mi mamá cantaba con ella", en: "my mom sang with her", category: "activity" },
          { es: "probé helado en la plaza", en: "i tried ice cream in the town square", category: "food" },
          { es: "corríamos descalzas en el patio", en: "we ran barefoot in the yard", category: "activity" },
          { es: "los domingos olían a arroz", en: "sundays smelled like rice", category: "food" },
        ],
      },
    ],
  },
  {
    day: 101,
    theme: "La receta secreta",
    stems: [
      {
        stem: "Dice que…",
        english: "She says that…",
        completions: [
          { es: "la receta lleva gandules frescos", en: "the recipe calls for fresh pigeon peas", category: "food" },
          { es: "el sofrito es lo más importante", en: "the sofrito is the most important thing", category: "food" },
          { es: "hay que cocinar sin prisa", en: "you have to cook without rushing", category: "activity" },
          { es: "el arroz no debe quedar pegado", en: "the rice shouldn't come out sticky", category: "food" },
          { es: "el culantro hace la diferencia", en: "culantro makes the difference", category: "food" },
        ],
      },
      {
        stem: "Según…",
        english: "According to…",
        completions: [
          { es: "la carta, la receta es de su abuela", en: "the letter, the recipe is from her grandmother", category: "food" },
          { es: "sus instrucciones, primero va el sofrito", en: "her instructions, the sofrito goes first", category: "food" },
          { es: "abuela, nadie la hace igual", en: "grandmother, nobody makes it the same", category: "opinion" },
          { es: "lo que escribe, no hay medidas exactas", en: "what she writes, there are no exact measurements", category: "other" },
          { es: "la carta, se aprende mirando", en: "the letter, you learn by watching", category: "activity" },
        ],
      },
      {
        stem: "Explica que…",
        english: "She explains that…",
        completions: [
          { es: "el arroz tiene que quedar suelto", en: "the rice has to come out loose", category: "food" },
          { es: "el culantro fresco es clave", en: "fresh culantro is key", category: "food" },
          { es: "la receta no se escribe, se mira", en: "the recipe isn't written, it's watched", category: "other" },
          { es: "cada familia tiene su versión", en: "every family has its version", category: "other" },
          { es: "sin sofrito no es lo mismo", en: "without sofrito it's not the same", category: "opinion" },
        ],
      },
      {
        stem: "Se trata de…",
        english: "It's about…",
        completions: [
          { es: "arroz con gandules de la familia", en: "the family's arroz con gandules", category: "food" },
          { es: "un plato que solo ella hace bien", en: "a dish only she makes well", category: "food" },
          { es: "algo que no quiere que se pierda", en: "something she doesn't want lost", category: "other" },
          { es: "la cocina de su infancia", en: "the kitchen of her childhood", category: "other" },
          { es: "pasar la receta a la siguiente generación", en: "passing the recipe to the next generation", category: "other" },
        ],
      },
      {
        stem: "Cuenta que…",
        english: "She says/tells that…",
        completions: [
          { es: "lo prepara cada navidad", en: "she makes it every christmas", category: "time" },
          { es: "su mamá le enseñó mirando", en: "her mom taught her by watching", category: "activity" },
          { es: "la última vez me quedó seco", en: "the last time mine came out dry", category: "food" },
          { es: "toda la familia pide el plato", en: "the whole family asks for the dish", category: "food" },
          { es: "cocina con música y calma", en: "she cooks with music and calm", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 102,
    theme: "Consejos de la abuela",
    stems: [
      {
        stem: "Dice que…",
        english: "She says that…",
        completions: [
          { es: "tengo que descansar más", en: "i need to rest more", category: "activity" },
          { es: "la comida de la calle no cuenta", en: "street food doesn't count", category: "food" },
          { es: "boston es bonita pero fría", en: "boston is pretty but cold", category: "opinion" },
          { es: "debo llamar más seguido", en: "i should call more often", category: "activity" },
          { es: "no trabaje los domingos", en: "don't work on sundays", category: "time" },
        ],
      },
      {
        stem: "Según…",
        english: "According to…",
        completions: [
          { es: "la carta, lo primero es la salud", en: "the letter, health comes first", category: "other" },
          { es: "sus consejos, hay que comer caliente", en: "her advice, you have to eat something hot", category: "food" },
          { es: "abuela, el trabajo no lo es todo", en: "grandmother, work isn't everything", category: "opinion" },
          { es: "lo que escribe, la familia es lo primero", en: "what she writes, family comes first", category: "other" },
          { es: "la carta, hay que cuidarse", en: "the letter, you have to take care of yourself", category: "other" },
        ],
      },
      {
        stem: "Explica que…",
        english: "She explains that…",
        completions: [
          { es: "vio a mucha gente quemarse", en: "she saw many people burn out", category: "other" },
          { es: "una comida calma las preocupaciones", en: "a meal calms worries", category: "food" },
          { es: "la distancia se siente menos si hablas", en: "distance feels smaller if you talk", category: "opinion" },
          { es: "le preocupa que no descanse", en: "she worries that i don't rest", category: "other" },
          { es: "escribirle la hace sentir cerca", en: "writing to her makes her feel close", category: "other" },
        ],
      },
      {
        stem: "Se trata de…",
        english: "It's about…",
        completions: [
          { es: "consejos de abuela sin rodeos", en: "grandmother's advice without beating around the bush", category: "other" },
          { es: "recordarme que no estoy sola", en: "reminding me i'm not alone", category: "other" },
          { es: "cuidarme como cuidaba a mis primos", en: "taking care of me like she did my cousins", category: "other" },
          { es: "su amor disfrazado de regaño", en: "her love disguised as scolding", category: "opinion" },
          { es: "lo que una abuela siempre dice", en: "what a grandmother always says", category: "other" },
        ],
      },
      {
        stem: "Cuenta que…",
        english: "She says/tells that…",
        completions: [
          { es: "se preocupa si no le escribo", en: "she worries if i don't write her", category: "other" },
          { es: "quiere que coma antes del frío", en: "she wants me to eat before the cold", category: "food" },
          { es: "está orgullosa de lo lejos que llegué", en: "she's proud of how far i've come", category: "opinion" },
          { es: "reza por mí cada domingo", en: "she prays for me every sunday", category: "time" },
          { es: "me conoce mejor de lo que creo", en: "she knows me better than i think", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 103,
    theme: "La foto vieja",
    stems: [
      {
        stem: "Dice que…",
        english: "She says that…",
        completions: [
          { es: "la foto tiene veinte años", en: "the photo is twenty years old", category: "time" },
          { es: "en la foto yo tengo cinco años", en: "in the photo i'm five years old", category: "other" },
          { es: "ese día llovió toda la tarde", en: "it rained all afternoon that day", category: "time" },
          { es: "mi vestido amarillo era favorito", en: "my yellow dress was my favorite", category: "other" },
          { es: "estamos en su portal", en: "we're on her porch", category: "other" },
        ],
      },
      {
        stem: "Según…",
        english: "According to…",
        completions: [
          { es: "la carta, es del verano en su casa", en: "the letter, it's from the summer at her house", category: "time" },
          { es: "el reverso, la tomó mi tío", en: "the back, my uncle took it", category: "other" },
          { es: "lo que escribe, fue un cumpleaños", en: "what she writes, it was a birthday", category: "other" },
          { es: "abuela, ese día fuimos a la playa", en: "grandmother, that day we went to the beach", category: "activity" },
          { es: "la carta, la guardó años", en: "the letter, she kept it for years", category: "time" },
        ],
      },
      {
        stem: "Explica que…",
        english: "She explains that…",
        completions: [
          { es: "la guardó en su gaveta de recuerdos", en: "she kept it in her drawer of mementos", category: "other" },
          { es: "comimos pasteles en el balcón", en: "we ate cakes on the balcony", category: "food" },
          { es: "la mandó para que no olvide", en: "she sent it so i wouldn't forget", category: "other" },
          { es: "ese día me abrazó fuerte", en: "that day she hugged me tight", category: "other" },
          { es: "la foto la hace sonreír todavía", en: "the photo still makes her smile", category: "opinion" },
        ],
      },
      {
        stem: "Se trata de…",
        english: "It's about…",
        completions: [
          { es: "una foto en su portal", en: "a photo on her porch", category: "other" },
          { es: "un recuerdo que atesora", en: "a memory she treasures", category: "other" },
          { es: "mi primera vez en la playa", en: "my first time at the beach", category: "activity" },
          { es: "abuela y yo de pequeña", en: "grandmother and me as a little girl", category: "other" },
          { es: "un día que no se olvida", en: "a day you don't forget", category: "time" },
        ],
      },
      {
        stem: "Cuenta que…",
        english: "She says/tells that…",
        completions: [
          { es: "no quería salir de la playa", en: "i didn't want to leave the beach", category: "activity" },
          { es: "me enseñó a buscar caracoles", en: "she taught me to look for seashells", category: "activity" },
          { es: "me abrazó antes de irnos", en: "she hugged me before we left", category: "other" },
          { es: "lloré cuando anocheció", en: "i cried when it got dark", category: "other" },
          { es: "fue el mejor día del verano", en: "it was the best day of the summer", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 104,
    theme: "Quiere visitar",
    stems: [
      {
        stem: "Dice que…",
        english: "She says that…",
        completions: [
          { es: "quiere visitarme el próximo año", en: "she wants to visit me next year", category: "time" },
          { es: "nunca ha visto nieve", en: "she's never seen snow", category: "other" },
          { es: "ya está ahorrando para el viaje", en: "she's already saving for the trip", category: "activity" },
          { es: "le da miedo el frío", en: "the cold scares her", category: "opinion" },
          { es: "quiere conocer mi escuela", en: "she wants to see my school", category: "other" },
        ],
      },
      {
        stem: "Según…",
        english: "According to…",
        completions: [
          { es: "la carta, quiere venir en primavera", en: "the letter, she wants to come in spring", category: "time" },
          { es: "sus planes, se quedaría dos semanas", en: "her plans, she'd stay two weeks", category: "time" },
          { es: "abuela, quiere ver cómo vivo", en: "grandmother, she wants to see how i live", category: "other" },
          { es: "lo que escribe, su sobrina la acompaña", en: "what she writes, her niece accompanies her", category: "other" },
          { es: "la carta, ya le contó a la familia", en: "the letter, she already told the family", category: "other" },
        ],
      },
      {
        stem: "Explica que…",
        english: "She explains that…",
        completions: [
          { es: "quiere ver con sus propios ojos", en: "she wants to see with her own eyes", category: "other" },
          { es: "le da miedo el frío de boston", en: "boston's cold scares her", category: "opinion" },
          { es: "su sobrina la acompañaría", en: "her niece would accompany her", category: "other" },
          { es: "nunca ha salido de puerto rico", en: "she's never left puerto rico", category: "other" },
          { es: "sueña con caminar por el puerto", en: "she dreams of walking by the harbor", category: "activity" },
        ],
      },
      {
        stem: "Se trata de…",
        english: "It's about…",
        completions: [
          { es: "un viaje que lleva meses planeando", en: "a trip she's been planning for months", category: "time" },
          { es: "su primer viaje fuera de la isla", en: "her first trip off the island", category: "other" },
          { es: "por fin verse después de tanto", en: "finally seeing each other after so long", category: "other" },
          { es: "cerrar la distancia un poco", en: "closing the distance a little", category: "other" },
          { es: "su sueño de conocer boston", en: "her dream of seeing boston", category: "other" },
        ],
      },
      {
        stem: "Cuenta que…",
        english: "She says/tells that…",
        completions: [
          { es: "ya le contó a toda la familia", en: "she already told the whole family", category: "other" },
          { es: "sueña con caminar por el puerto", en: "she dreams of walking by the harbor", category: "activity" },
          { es: "me preguntó si tengo espacio", en: "she asked me if i have space", category: "other" },
          { es: "cuenta los meses para venir", en: "she's counting the months until she comes", category: "time" },
          { es: "quiere probar la comida de aquí", en: "she wants to try the food here", category: "food" },
        ],
      },
    ],
  },
  {
    day: 105,
    theme: "Repaso: dice que",
    stems: [
      {
        stem: "Dice que…",
        english: "She says that…",
        completions: [
          { es: "está bien y me extraña", en: "she's fine and she misses me", category: "other" },
          { es: "quiere visitarme el próximo año", en: "she wants to visit me next year", category: "time" },
          { es: "la carta trae recuerdos y recetas", en: "the letter brings memories and recipes", category: "other" },
          { es: "boston le da curiosidad", en: "boston makes her curious", category: "opinion" },
          { es: "le da miedo el frío", en: "the cold scares her", category: "opinion" },
        ],
      },
      {
        stem: "Según…",
        english: "According to…",
        completions: [
          { es: "la carta, pasó semanas escribiéndola", en: "the letter, she spent weeks writing it", category: "time" },
          { es: "todo lo que escribe, la familia está bien", en: "everything she writes, the family is fine", category: "other" },
          { es: "el sobre, la mandó hace un mes", en: "the envelope, she sent it a month ago", category: "time" },
          { es: "abuela, escribió con mucho cariño", en: "grandmother, she wrote with great affection", category: "other" },
          { es: "la carta, trae seis partes distintas", en: "the letter, it has six different parts", category: "other" },
        ],
      },
      {
        stem: "Explica que…",
        english: "She explains that…",
        completions: [
          { es: "escribió para sentirse más cerca", en: "she wrote to feel closer", category: "other" },
          { es: "no quiere que olvide mis raíces", en: "she doesn't want me to forget my roots", category: "other" },
          { es: "cada página es un abrazo", en: "each page is a hug", category: "opinion" },
          { es: "prefiere cartas a mensajes cortos", en: "she prefers letters to short messages", category: "opinion" },
          { es: "la distancia pesa, pero aguanta", en: "the distance weighs on her, but she endures", category: "opinion" },
        ],
      },
      {
        stem: "Se trata de…",
        english: "It's about…",
        completions: [
          { es: "recuerdos, comida y consejos", en: "memories, food, and advice", category: "other" },
          { es: "una vida de cariño en seis páginas", en: "a lifetime of affection in six pages", category: "other" },
          { es: "tener raíces en dos lugares", en: "having roots in two places", category: "other" },
          { es: "lo que significa ser de dos sitios", en: "what it means to be from two places", category: "other" },
          { es: "toda una semana de historias", en: "a whole week of stories", category: "other" },
        ],
      },
      {
        stem: "Cuenta que…",
        english: "She says/tells that…",
        completions: [
          { es: "no importa la distancia", en: "distance doesn't matter", category: "opinion" },
          { es: "la familia sigue siendo familia", en: "family is still family", category: "other" },
          { es: "ya cuenta los meses para venir", en: "she's already counting the months until she comes", category: "time" },
          { es: "al leer la última página, la siento cerca", en: "reading the last page, i feel her close", category: "opinion" },
          { es: "me abrazó con cada palabra", en: "she hugged me with every word", category: "opinion" },
        ],
      },
    ],
  },
];
