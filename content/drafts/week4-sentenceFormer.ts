import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 4 draft — Sentence Former banks (days 113–119).
 * Stems must match content/drafts/week4-frames.ts. Merge into
 * content/sentenceFormer/otono.ts when ready.
 */
export const week4SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 113,
    theme: "La advertencia",
    stems: [
      {
        stem: "Ya había…",
        english: "Already… / had already…",
        hints: {
          que: [
            { es: "llovido toda la mañana", en: "rained all morning" },
            { es: "comprado velas", en: "bought candles" },
          ],
          cuando: [
            { es: "empezaron las advertencias", en: "the warnings started" },
            { es: "oscureció el cielo", en: "the sky got dark" },
          ],
        },
        completions: [
          { es: "llovido toda la mañana", en: "rained all morning", category: "other" },
          { es: "comprado velas y comida", en: "bought candles and food", category: "other" },
          { es: "cerrado las ventanas", en: "closed the windows", category: "activity" },
          { es: "sonado la radio con alertas", en: "the radio had sounded with alerts", category: "other" },
          { es: "preparado la casa", en: "prepared the house", category: "activity" },
        ],
      },
      {
        stem: "Todavía no había…",
        english: "Still hadn't… / not yet…",
        completions: [
          { es: "empezado la tormenta", en: "the storm started", category: "other" },
          { es: "viento fuerte", en: "strong wind", category: "other" },
          { es: "llovido de verdad", en: "really rained", category: "other" },
          { es: "oscurecido del todo", en: "gotten completely dark", category: "other" },
          { es: "llegado la familia entera", en: "the whole family arrived", category: "other" },
        ],
      },
      {
        stem: "Nunca había…",
        english: "Had never…",
        completions: [
          { es: "visto el cielo tan oscuro", en: "seen the sky that dark", category: "other" },
          { es: "escuchado tantas advertencias", en: "heard so many warnings", category: "other" },
          { es: "sentido el barrio tan callado", en: "felt the neighborhood so quiet", category: "opinion" },
          { es: "estado en un huracán", en: "been in a hurricane", category: "other" },
          { es: "visto a mi abuela tan seria", en: "seen my grandmother so serious", category: "other" },
        ],
      },
      {
        stem: "Antes había…",
        english: "Before, there had been…",
        completions: [
          { es: "hecho sol casi todo el día", en: "been sunny almost all day", category: "other" },
          { es: "jugado afuera con mis primos", en: "played outside with my cousins", category: "activity" },
          { es: "sonado música en la radio", en: "music played on the radio", category: "other" },
          { es: "ido a la tienda del barrio", en: "gone to the neighborhood store", category: "activity" },
          { es: "parecido un día normal", en: "seemed like a normal day", category: "opinion" },
        ],
      },
      {
        stem: "Para entonces ya había…",
        english: "By then, already…",
        completions: [
          { es: "llovido un poco", en: "rained a little", category: "other" },
          { es: "guardado las cosas importantes", en: "put away the important things", category: "activity" },
          { es: "llamado a mi mamá", en: "called my mom", category: "activity" },
          { es: "cerrado todas las ventanas", en: "closed all the windows", category: "activity" },
          { es: "empezado a hacer viento", en: "the wind had started", category: "other" },
        ],
      },
    ],
  },
  {
    day: 114,
    theme: "La tormenta",
    stems: [
      {
        stem: "Ya había…",
        english: "Already… / had already…",
        completions: [
          { es: "empezado a llover fuerte", en: "started raining hard", category: "other" },
          { es: "caído una rama en el patio", en: "a branch fallen in the yard", category: "other" },
          { es: "entrado agua por la ventana", en: "water come in through the window", category: "other" },
          { es: "ido la luz", en: "the power gone", category: "other" },
          { es: "golpeado el viento muy fuerte", en: "the wind hit very hard", category: "other" },
        ],
      },
      {
        stem: "Todavía no había…",
        english: "Still hadn't… / not yet…",
        completions: [
          { es: "parado de llover", en: "stopped raining", category: "other" },
          { es: "dormido nada", en: "slept at all", category: "other" },
          { es: "amanecido", en: "dawned", category: "time" },
          { es: "bajado el viento", en: "the wind died down", category: "other" },
          { es: "regresado la luz", en: "the power come back", category: "other" },
        ],
      },
      {
        stem: "Nunca había…",
        english: "Had never…",
        completions: [
          { es: "escuchado el viento tan fuerte", en: "heard wind that loud", category: "other" },
          { es: "estado en una casa tan oscura", en: "been in such a dark house", category: "other" },
          { es: "sentido que la puerta iba a volar", en: "felt the door was going to fly off", category: "other" },
          { es: "visto tanta lluvia de una vez", en: "seen so much rain at once", category: "other" },
          { es: "tenido tanto miedo", en: "been so scared", category: "opinion" },
        ],
      },
      {
        stem: "Antes había…",
        english: "Before, there had been…",
        completions: [
          { es: "tenido luz en la casa", en: "had power in the house", category: "other" },
          { es: "cenado en la mesa de la cocina", en: "eaten dinner at the kitchen table", category: "food" },
          { es: "sonado el teléfono", en: "the phone rang", category: "other" },
          { es: "visto las noticias en la tele", en: "watched the news on TV", category: "activity" },
          { es: "parecido una noche normal", en: "seemed like a normal night", category: "opinion" },
        ],
      },
      {
        stem: "Para entonces ya había…",
        english: "By then, already…",
        completions: [
          { es: "entrado agua por debajo de la puerta", en: "water come in under the door", category: "other" },
          { es: "caído el árbol del vecino", en: "the neighbor's tree fallen", category: "other" },
          { es: "apagado todo en la casa", en: "everything turned off in the house", category: "other" },
          { es: "ido la electricidad", en: "the electricity gone", category: "other" },
          { es: "empezado lo peor del viento", en: "the worst of the wind started", category: "other" },
        ],
      },
    ],
  },
  {
    day: 115,
    theme: "La noche larga",
    stems: [
      {
        stem: "Ya había…",
        english: "Already… / had already…",
        hints: {
          cuando: [
            { es: "volvió a pegar el viento", en: "the wind hit again" },
          ],
        },
        completions: [
          { es: "pasado media noche", en: "midnight passed", category: "time" },
          { es: "contado dos cuentos", en: "told two stories", category: "activity" },
          { es: "rezado mi abuela", en: "my grandmother had prayed", category: "activity" },
          { es: "comido pan y queso", en: "eaten bread and cheese", category: "food" },
          { es: "bajado un poco el viento", en: "the wind died down a little", category: "other" },
        ],
      },
      {
        stem: "Todavía no había…",
        english: "Still hadn't… / not yet…",
        completions: [
          { es: "amanecido", en: "dawned", category: "time" },
          { es: "podido dormir ni un minuto", en: "slept even a minute", category: "other" },
          { es: "parado del todo", en: "stopped completely", category: "other" },
          { es: "regresado la luz", en: "the power come back", category: "other" },
          { es: "llegado ayuda de afuera", en: "help arrived from outside", category: "other" },
        ],
      },
      {
        stem: "Nunca había…",
        english: "Had never…",
        completions: [
          { es: "pasado una noche tan larga", en: "spent such a long night", category: "time" },
          { es: "visto a mi abuela tan calmada", en: "seen my grandmother so calm", category: "other" },
          { es: "sentido tanto calor en un cuarto", en: "felt so much warmth in one room", category: "other" },
          { es: "estado despierta tan tarde", en: "been awake so late", category: "time" },
          { es: "rezado tanto en una noche", en: "prayed so much in one night", category: "activity" },
        ],
      },
      {
        stem: "Antes había…",
        english: "Before, there had been…",
        completions: [
          { es: "llorado mi prima pequeña", en: "my little cousin cried", category: "other" },
          { es: "sonado algo fuerte en el techo", en: "something loud sounded on the roof", category: "other" },
          { es: "cantado mi abuela bajito", en: "my grandmother sang softly", category: "activity" },
          { es: "pegado el viento más fuerte", en: "the wind hit harder", category: "other" },
          { es: "entrado más agua", en: "more water come in", category: "other" },
        ],
      },
      {
        stem: "Para entonces ya había…",
        english: "By then, already…",
        completions: [
          { es: "amanecido", en: "dawned", category: "time" },
          { es: "bajado el viento", en: "the wind died down", category: "other" },
          { es: "dormido mi prima", en: "my cousin fallen asleep", category: "other" },
          { es: "parado de llover tanto", en: "stopped raining so hard", category: "other" },
          { es: "pasado lo peor", en: "the worst passed", category: "other" },
        ],
      },
    ],
  },
  {
    day: 116,
    theme: "El día después",
    stems: [
      {
        stem: "Ya había…",
        english: "Already… / had already…",
        completions: [
          { es: "caído un árbol en la calle", en: "a tree fallen in the street", category: "other" },
          { es: "salido los vecinos afuera", en: "the neighbors come outside", category: "other" },
          { es: "entrado agua en algunas casas", en: "water entered some houses", category: "other" },
          { es: "limpiado parte de la acera", en: "part of the sidewalk cleaned", category: "activity" },
          { es: "contado mi abuela la noche", en: "my grandmother told about the night", category: "activity" },
        ],
      },
      {
        stem: "Todavía no había…",
        english: "Still hadn't… / not yet…",
        completions: [
          { es: "regresado la electricidad", en: "the electricity come back", category: "other" },
          { es: "podido salir del barrio", en: "been able to leave the neighborhood", category: "other" },
          { es: "llegado ayuda del pueblo", en: "help arrived from town", category: "other" },
          { es: "abierto la tienda de la esquina", en: "the corner store opened", category: "other" },
          { es: "terminado de llover", en: "finished raining", category: "other" },
        ],
      },
      {
        stem: "Nunca había…",
        english: "Had never…",
        completions: [
          { es: "visto tantas ramas en una calle", en: "seen so many branches on one street", category: "other" },
          { es: "visto a los vecinos trabajar tan rápido", en: "seen neighbors work so fast", category: "other" },
          { es: "caminado por un barrio tan diferente", en: "walked through such a different neighborhood", category: "other" },
          { es: "sentido el barrio tan unido", en: "felt the neighborhood so united", category: "opinion" },
          { es: "visto tanto daño cerca de casa", en: "seen so much damage near home", category: "other" },
        ],
      },
      {
        stem: "Antes había…",
        english: "Before, there had been…",
        completions: [
          { es: "sombra de árboles en la acera", en: "shade from trees on the sidewalk", category: "other" },
          { es: "un columpio en el patio del vecino", en: "a swing in the neighbor's yard", category: "other" },
          { es: "olido a mango en la calle", en: "smelled like mango on the street", category: "other" },
          { es: "flores en el jardín de mi abuela", en: "flowers in my grandmother's garden", category: "other" },
          { es: "más árboles en la cuadra", en: "more trees on the block", category: "other" },
        ],
      },
      {
        stem: "Para entonces ya había…",
        english: "By then, already…",
        completions: [
          { es: "limpiado la acera el señor de la esquina", en: "the man on the corner cleaned the sidewalk", category: "activity" },
          { es: "prestado la macheta a la vecina", en: "lent the machete to the neighbor", category: "activity" },
          { es: "contado mi abuela lo peor", en: "my grandmother told the worst of it", category: "activity" },
          { es: "sacado fotos del daño", en: "taken photos of the damage", category: "activity" },
          { es: "empezado a ayudarse todos", en: "everyone started helping each other", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 117,
    theme: "Sin luz",
    stems: [
      {
        stem: "Ya había…",
        english: "Already… / had already…",
        completions: [
          { es: "pasado una semana sin luz", en: "a week gone by without power", category: "time" },
          { es: "echado a perder la comida", en: "the food spoiled", category: "food" },
          { es: "aprendido a cocinar en la fogata", en: "learned to cook on the bonfire", category: "activity" },
          { es: "cerrado la escuela otra semana", en: "school closed another week", category: "other" },
          { es: "compartido comida con los vecinos", en: "shared food with the neighbors", category: "food" },
        ],
      },
      {
        stem: "Todavía no había…",
        english: "Still hadn't… / not yet…",
        completions: [
          { es: "regresado la luz", en: "the power come back", category: "other" },
          { es: "podido ver las noticias", en: "been able to watch the news", category: "activity" },
          { es: "agua caliente en la casa", en: "hot water in the house", category: "other" },
          { es: "abierto el supermercado", en: "the supermarket opened", category: "other" },
          { es: "vuelto a la normalidad", en: "returned to normal", category: "other" },
        ],
      },
      {
        stem: "Nunca había…",
        english: "Had never…",
        completions: [
          { es: "pasado tantos días sin aire", en: "gone so many days without AC", category: "time" },
          { es: "comido tantas veces en la calle", en: "eaten so many times in the street", category: "food" },
          { es: "visto a mi abuela organizar comida", en: "seen my grandmother organize food", category: "activity" },
          { es: "dormido tan temprano cada noche", en: "gone to bed so early every night", category: "time" },
          { es: "necesitado hielo tanto", en: "needed ice so much", category: "other" },
        ],
      },
      {
        stem: "Antes había…",
        english: "Before, there had been…",
        completions: [
          { es: "hielo en el congelador", en: "ice in the freezer", category: "other" },
          { es: "leche fría por las mañanas", en: "cold milk in the mornings", category: "food" },
          { es: "escuela todos los días", en: "school every day", category: "other" },
          { es: "ventilador con un botón", en: "a fan with a button", category: "other" },
          { es: "comida fresca en el refrigerador", en: "fresh food in the refrigerator", category: "food" },
        ],
      },
      {
        stem: "Para entonces ya había…",
        english: "By then, already…",
        completions: [
          { es: "una olla grande de sopa", en: "a big pot of soup", category: "food" },
          { es: "gente compartiendo hielo", en: "people sharing ice", category: "other" },
          { es: "acostumbrado a dormir temprano", en: "gotten used to sleeping early", category: "time" },
          { es: "una rutina sin electricidad", en: "a routine without electricity", category: "other" },
          { es: "comida para media cuadra", en: "food for half the block", category: "food" },
        ],
      },
    ],
  },
  {
    day: 118,
    theme: "La reconstrucción",
    stems: [
      {
        stem: "Ya había…",
        english: "Already… / had already…",
        completions: [
          { es: "arreglado tres techos", en: "fixed three roofs", category: "activity" },
          { es: "limpiado el barrio casi entero", en: "cleaned almost the whole neighborhood", category: "activity" },
          { es: "vuelto la luz a la casa", en: "power come back to the house", category: "other" },
          { es: "flores nuevas en el jardín", en: "new flowers in the garden", category: "other" },
          { es: "escrito mi abuela en su cuaderno", en: "my grandmother written in her notebook", category: "activity" },
        ],
      },
      {
        stem: "Todavía no había…",
        english: "Still hadn't… / not yet…",
        completions: [
          { es: "regresado todo a la normalidad", en: "everything returned to normal", category: "other" },
          { es: "terminado de arreglar la escuela", en: "finished fixing the school", category: "other" },
          { es: "olvidado el sonido del viento", en: "forgotten the sound of the wind", category: "other" },
          { es: "reparado todos los techos", en: "repaired all the roofs", category: "activity" },
          { es: "vuelto el barrio a como era", en: "the neighborhood returned to how it was", category: "other" },
        ],
      },
      {
        stem: "Nunca había…",
        english: "Had never…",
        completions: [
          { es: "visto tanta gente trabajar junta", en: "seen so many people work together", category: "other" },
          { es: "entendido tan bien un barrio", en: "understood a neighborhood so well", category: "opinion" },
          { es: "sentido orgullo por el barrio", en: "felt pride in the neighborhood", category: "opinion" },
          { es: "visto arreglar un techo tan rápido", en: "seen a roof fixed so fast", category: "other" },
          { es: "aprendido tanto de mi abuela", en: "learned so much from my grandmother", category: "other" },
        ],
      },
      {
        stem: "Antes había…",
        english: "Before, there had been…",
        completions: [
          { es: "miedo en cada casa", en: "fear in every house", category: "opinion" },
          { es: "techo roto y ventanas abiertas", en: "broken roof and open windows", category: "other" },
          { es: "duda de cuánto iba a tardar", en: "doubt about how long it would take", category: "opinion" },
          { es: "escombros en toda la calle", en: "debris all over the street", category: "other" },
          { es: "más incertidumbre que esperanza", en: "more uncertainty than hope", category: "opinion" },
        ],
      },
      {
        stem: "Para entonces ya había…",
        english: "By then, already…",
        completions: [
          { es: "flores nuevas en el jardín", en: "new flowers in the garden", category: "other" },
          { es: "contado la historia mil veces", en: "told the story a thousand times", category: "activity" },
          { es: "escrito todo en el cuaderno", en: "written everything in the notebook", category: "activity" },
          { es: "limpiado los escombros", en: "cleared the debris", category: "activity" },
          { es: "vuelto a sentir esperanza", en: "felt hope again", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 119,
    theme: "Repaso: ya había pasado",
    stems: [
      {
        stem: "Ya había…",
        english: "Already… / had already…",
        completions: [
          { es: "advertido la radio", en: "the radio warned", category: "other" },
          { es: "pasado la peor noche", en: "the worst night passed", category: "time" },
          { es: "vuelto la luz al barrio", en: "power returned to the neighborhood", category: "other" },
          { es: "caído un árbol en la calle", en: "a tree fallen in the street", category: "other" },
          { es: "arreglado techos en la cuadra", en: "fixed roofs on the block", category: "activity" },
        ],
      },
      {
        stem: "Todavía no había…",
        english: "Still hadn't… / not yet…",
        completions: [
          { es: "empezado la tormenta", en: "the storm started", category: "other" },
          { es: "dormido cuando pegó el viento", en: "slept when the wind hit", category: "other" },
          { es: "regresado la normalidad", en: "normal returned", category: "other" },
          { es: "terminado de llover", en: "finished raining", category: "other" },
          { es: "llegado ayuda de afuera", en: "help arrived from outside", category: "other" },
        ],
      },
      {
        stem: "Nunca había…",
        english: "Had never…",
        completions: [
          { es: "visto el cielo tan oscuro", en: "seen the sky that dark", category: "other" },
          { es: "visto un barrio cocinar juntos", en: "seen a neighborhood cook together", category: "other" },
          { es: "entendido por qué guardaba el cuaderno", en: "understood why she kept the notebook", category: "other" },
          { es: "sentido tanto miedo", en: "felt so much fear", category: "opinion" },
          { es: "aprendido tanto de una semana", en: "learned so much from one week", category: "opinion" },
        ],
      },
      {
        stem: "Antes había…",
        english: "Before, there had been…",
        completions: [
          { es: "hecho sol por la mañana", en: "been sunny in the morning", category: "other" },
          { es: "árboles de mango en la cuadra", en: "mango trees on the block", category: "other" },
          { es: "miedo pero también ayuda", en: "fear but also help", category: "opinion" },
          { es: "una calle llena de sombra", en: "a street full of shade", category: "other" },
          { es: "hielo en el congelador", en: "ice in the freezer", category: "other" },
        ],
      },
      {
        stem: "Para entonces ya había…",
        english: "By then, already…",
        completions: [
          { es: "amanecido después de la tormenta", en: "dawned after the storm", category: "time" },
          { es: "arreglado techos y compartido comida", en: "fixed roofs and shared food", category: "activity" },
          { es: "pasado todo lo del cuaderno", en: "everything in the notebook happened", category: "other" },
          { es: "limpiado la calle entera", en: "cleaned the whole street", category: "activity" },
          { es: "escrito la historia para siempre", en: "written the story forever", category: "activity" },
        ],
      },
    ],
  },
];
