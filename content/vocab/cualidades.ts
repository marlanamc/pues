import type { VocabTheme } from "./types";

/**
 * Adjetivos · Pronombres — 72 words.
 *
 * Adjectives are authored in the masculine singular citation form, with
 * agreement shown at work in the example rather than explained. Where the
 * source list glosses two different Spanish words with the same English word —
 * short, old, light — the parenthetical from the source is kept verbatim, so
 * the recall card always names which one it wants.
 *
 * Pronombres is the smallest and least drillable theme, kept because
 * completeness is the whole point of a list like this: a seven-card sweep
 * costs twenty seconds and closes the set.
 */

export const adjetivos: VocabTheme = {
  slug: "adjetivos",
  label: "Adjetivos",
  labelEn: "Adjectives",
  words: [
    { id: "v-adjetivos-largo", es: "largo", en: "long", example: "El pasillo es largo y siempre está oscuro.", exampleEn: "The hallway is long and always dark." },
    { id: "v-adjetivos-corto", es: "corto", en: "short (long)", example: "La clase de hoy fue corta y salió mejor.", exampleEn: "Today's class was short and went better." },
    { id: "v-adjetivos-alto", es: "alto", en: "tall", example: "Es tan alto que no cabe en el pupitre.", exampleEn: "He's so tall he doesn't fit in the desk." },
    { id: "v-adjetivos-bajo", es: "bajo", en: "short (vs tall)", example: "Es bajita y se sienta adelante para ver.", exampleEn: "She's short and sits up front to see." },
    { id: "v-adjetivos-ancho", es: "ancho", en: "wide", example: "El río es más ancho de lo que se ve en el mapa.", exampleEn: "The river is wider than it looks on the map." },
    { id: "v-adjetivos-estrecho", es: "estrecho", en: "narrow", example: "La escalera es tan estrecha que solo cabe uno.", exampleEn: "The staircase is so narrow only one person fits." },
    { id: "v-adjetivos-grande", es: "grande", en: "big / large", example: "Nos dieron un salón más grande y se sintió vacío.", exampleEn: "They gave us a bigger room and it felt empty." },
    { id: "v-adjetivos-pequeno", es: "pequeño", en: "small / little", example: "Es un cambio pequeño pero se nota.", exampleEn: "It's a small change but you notice it." },
    { id: "v-adjetivos-lento", es: "lento", en: "slow", example: "Voy lenta hablando y rápida leyendo.", exampleEn: "I'm slow speaking and fast reading." },
    { id: "v-adjetivos-rapido", es: "rápido", en: "fast", example: "Habla rapidísimo y aun así le entiendo.", exampleEn: "He talks super fast and I still understand him." },
    { id: "v-adjetivos-caliente", es: "caliente", en: "hot", example: "El café todavía está muy caliente.", exampleEn: "The coffee is still very hot." },
    { id: "v-adjetivos-frio", es: "frío", en: "cold", example: "El salón está frío hasta que se llena.", exampleEn: "The room is cold until it fills up." },
    { id: "v-adjetivos-tibio", es: "tibio", en: "warm", example: "Se tomó el té ya tibio y no dijo nada.", exampleEn: "She drank the tea already lukewarm and said nothing." },
    { id: "v-adjetivos-fresco", es: "fresco", en: "cool", example: "Salimos a un aire fresco que se agradecía.", exampleEn: "We stepped out into cool air that felt good." },
    { id: "v-adjetivos-nuevo", es: "nuevo", en: "new", example: "Hay dos alumnas nuevas desde el lunes.", exampleEn: "There are two new students as of Monday." },
    { id: "v-adjetivos-viejo-cosa", es: "viejo", en: "old (new)", example: "Ese proyector viejo aguantó otro semestre.", exampleEn: "That old projector made it through another semester." },
    { id: "v-adjetivos-joven", es: "joven", en: "young", example: "Es la más joven del salón y la que más pregunta.", exampleEn: "She's the youngest in the room and asks the most." },
    { id: "v-adjetivos-mayor", es: "mayor", en: "old (young)", example: "Los alumnos mayores llegan primero, siempre.", exampleEn: "The older students arrive first, always." },
    { id: "v-adjetivos-bueno", es: "bueno", en: "good", example: "Fue un día bueno: hablaron todos.", exampleEn: "It was a good day — everyone spoke." },
    { id: "v-adjetivos-malo", es: "malo", en: "bad", example: "El tren malo es el de las cinco y media.", exampleEn: "The bad train is the five-thirty." },
    { id: "v-adjetivos-mojado", es: "mojado", en: "wet", example: "Llegó con los zapatos mojados y se quedó igual.", exampleEn: "She arrived with wet shoes and stayed anyway." },
    { id: "v-adjetivos-seco", es: "seco", en: "dry", example: "El aire está tan seco que duele la garganta.", exampleEn: "The air is so dry your throat hurts." },
    { id: "v-adjetivos-enfermo", es: "enfermo", en: "sick", example: "Vino enfermo porque no quería perder la clase.", exampleEn: "He came in sick because he didn't want to miss class." },
    { id: "v-adjetivos-sano", es: "sano", en: "healthy", example: "Come sano toda la semana y el domingo no.", exampleEn: "She eats healthy all week and not on Sunday." },
    { id: "v-adjetivos-ruidoso", es: "ruidoso", en: "loud", example: "El pasillo es ruidoso justo cuando empezamos.", exampleEn: "The hallway is loud right when we start." },
    { id: "v-adjetivos-callado", es: "callado", en: "quiet", example: "Es callado hasta que le preguntas por su pueblo.", exampleEn: "He's quiet until you ask him about his hometown." },
    { id: "v-adjetivos-feliz", es: "feliz", en: "happy", example: "Salió feliz porque entendió el chiste.", exampleEn: "She left happy because she got the joke." },
    { id: "v-adjetivos-triste", es: "triste", en: "sad", example: "Está triste desde que se fue su hermana.", exampleEn: "She's been sad since her sister left." },
    { id: "v-adjetivos-hermoso", es: "hermoso", en: "beautiful", example: "Escribió algo hermoso y no quiso leerlo.", exampleEn: "She wrote something beautiful and didn't want to read it." },
    { id: "v-adjetivos-feo", es: "feo", en: "ugly", example: "El edificio es feo por fuera y calientito por dentro.", exampleEn: "The building is ugly outside and warm inside." },
    { id: "v-adjetivos-sordo", es: "sordo", en: "deaf", example: "Su papá es sordo y ella le traduce todo.", exampleEn: "Her father is deaf and she translates everything for him." },
    { id: "v-adjetivos-ciego", es: "ciego", en: "blind", example: "Un alumno ciego usa la computadora mejor que yo.", exampleEn: "A blind student uses the computer better than I do." },
    { id: "v-adjetivos-amable", es: "amable", en: "nice", example: "Fue amable conmigo el primer día y no se me olvida.", exampleEn: "She was nice to me the first day and I haven't forgotten." },
    { id: "v-adjetivos-grosero", es: "grosero", en: "mean", example: "Nadie es grosero aquí, y eso no es poca cosa.", exampleEn: "Nobody is mean here, and that's no small thing." },
    { id: "v-adjetivos-rico", es: "rico", en: "rich", example: "No hay que ser rico para viajar, dice él.", exampleEn: "You don't have to be rich to travel, he says." },
    { id: "v-adjetivos-pobre", es: "pobre", en: "poor", example: "Creció pobre y lo cuenta sin drama.", exampleEn: "He grew up poor and tells it without drama." },
    { id: "v-adjetivos-grueso", es: "grueso", en: "thick", example: "El libro es tan grueso que nadie lo abre.", exampleEn: "The book is so thick nobody opens it." },
    { id: "v-adjetivos-delgado", es: "delgado", en: "thin", example: "El abrigo es muy delgado para este invierno.", exampleEn: "The coat is too thin for this winter." },
    { id: "v-adjetivos-caro", es: "caro", en: "expensive", example: "Todo aquí es caro menos la biblioteca.", exampleEn: "Everything here is expensive except the library." },
    { id: "v-adjetivos-barato", es: "barato", en: "cheap", example: "Encontró un cuarto barato a una hora de aquí.", exampleEn: "She found a cheap room an hour away." },
    { id: "v-adjetivos-plano", es: "plano", en: "flat", example: "El techo es plano y por eso se junta el agua.", exampleEn: "The roof is flat and that's why water pools." },
    { id: "v-adjetivos-curvo", es: "curvo", en: "curved", example: "La calle es curva y no se ve quién viene.", exampleEn: "The street is curved and you can't see who's coming." },
    { id: "v-adjetivos-masculino", es: "masculino", en: "male", example: "Ese sustantivo es masculino aunque no lo parezca.", exampleEn: "That noun is masculine even though it doesn't look it." },
    { id: "v-adjetivos-femenino", es: "femenino", en: "female", example: "La mano es femenina y siempre confunde a todos.", exampleEn: "*La mano* is feminine and it confuses everybody." },
    { id: "v-adjetivos-apretado", es: "apretado", en: "tight", example: "El tren de la mañana va apretado hasta el centro.", exampleEn: "The morning train is packed tight to downtown." },
    { id: "v-adjetivos-flojo", es: "flojo", en: "loose", example: "El botón quedó flojo y se cayó en el pasillo.", exampleEn: "The button was loose and fell off in the hallway." },
    { id: "v-adjetivos-alto-nivel", es: "alto", en: "high", example: "El precio le pareció alto y se fue sin comprar.", exampleEn: "The price struck him as high and he left without buying." },
    { id: "v-adjetivos-bajo-nivel", es: "bajo", en: "low", example: "Habla en voz baja aunque le pida que suba.", exampleEn: "She talks in a low voice even when I ask her to raise it." },
    { id: "v-adjetivos-suave", es: "suave", en: "soft", example: "Tiene una voz suave que obliga a callarse.", exampleEn: "She has a soft voice that makes everyone quiet down." },
    { id: "v-adjetivos-duro", es: "duro", en: "hard", example: "El pan del lunes ya está duro.", exampleEn: "Monday's bread is hard already." },
    { id: "v-adjetivos-profundo", es: "profundo", en: "deep", example: "Hizo una pregunta profunda y nadie supo contestar.", exampleEn: "She asked a deep question and nobody knew how to answer." },
    { id: "v-adjetivos-poco-profundo", es: "poco profundo", en: "shallow", example: "La parte poco profunda de la piscina siempre está llena.", exampleEn: "The shallow end of the pool is always full." },
    { id: "v-adjetivos-limpio", es: "limpio", en: "clean", example: "Deja el salón limpio aunque no le toque.", exampleEn: "He leaves the classroom clean even when it isn't his turn." },
    { id: "v-adjetivos-sucio", es: "sucio", en: "dirty", example: "El pizarrón lleva sucio desde el martes.", exampleEn: "The board has been dirty since Tuesday." },
    { id: "v-adjetivos-fuerte", es: "fuerte", en: "strong", example: "Tiene un acento fuerte y una gramática impecable.", exampleEn: "He has a strong accent and impeccable grammar." },
    { id: "v-adjetivos-debil", es: "débil", en: "weak", example: "La señal está débil en ese salón.", exampleEn: "The signal is weak in that room." },
    { id: "v-adjetivos-muerto", es: "muerto", en: "dead", example: "El celular estaba muerto justo cuando lo necesitaba.", exampleEn: "My phone was dead right when I needed it." },
    { id: "v-adjetivos-vivo", es: "vivo", en: "alive", example: "La planta sigue viva de milagro.", exampleEn: "The plant is somehow still alive." },
    { id: "v-adjetivos-pesado", es: "pesado", en: "heavy", example: "El bolso está pesado de tantos cuadernos.", exampleEn: "The bag is heavy from so many notebooks." },
    { id: "v-adjetivos-ligero", es: "ligero", en: "light (heavy)", example: "Busco una computadora más ligera para cargarla.", exampleEn: "I'm looking for a lighter computer to carry around." },
    { id: "v-adjetivos-oscuro", es: "oscuro", en: "dark", example: "A las cuatro ya está oscuro en diciembre.", exampleEn: "By four it's already dark in December." },
    { id: "v-adjetivos-claro", es: "claro", en: "light (dark)", example: "Pintaron el pasillo de un verde claro horrible.", exampleEn: "They painted the hallway an awful light green." },
    { id: "v-adjetivos-nuclear", es: "nuclear", en: "nuclear", example: "Salió el tema de la energía nuclear y se armó el debate.", exampleEn: "Nuclear energy came up and the debate was on." },
    { id: "v-adjetivos-famoso", es: "famoso", en: "famous", example: "Es famoso en su país y aquí nadie lo conoce.", exampleEn: "He's famous in his country and nobody here knows him." },
  ],
};

export const pronombres: VocabTheme = {
  slug: "pronombres",
  label: "Pronombres",
  labelEn: "Pronouns",
  words: [
    { id: "v-pronombres-yo", es: "yo", en: "I", example: "Yo llego temprano y ella cierra.", exampleEn: "I arrive early and she locks up." },
    { id: "v-pronombres-tu", es: "tú", en: "you (singular)", example: "¿Tú qué harías en mi lugar?", exampleEn: "What would you do in my place?" },
    { id: "v-pronombres-el", es: "él", en: "he", example: "Él trabaja de noche, ella de día.", exampleEn: "He works nights, she works days." },
    { id: "v-pronombres-ella", es: "ella", en: "she", example: "Ella fue la primera en levantar la mano.", exampleEn: "She was the first to raise her hand." },
    { id: "v-pronombres-ello", es: "ello", en: "it", example: "Todo ello salió en la misma reunión.", exampleEn: "All of it came out in the same meeting." },
    { id: "v-pronombres-nosotros", es: "nosotros", en: "we", example: "Nosotros nos quedamos hasta que apagan las luces.", exampleEn: "We stay until they turn the lights off." },
    { id: "v-pronombres-ustedes", es: "ustedes", en: "you (plural, y'all)", example: "¿Ustedes ya terminaron o les doy más tiempo?", exampleEn: "Have y'all finished or should I give you more time?" },
    { id: "v-pronombres-ellos", es: "ellos", en: "they", example: "Ellos se conocieron en esta misma clase.", exampleEn: "They met each other in this very class." },
  ],
};
