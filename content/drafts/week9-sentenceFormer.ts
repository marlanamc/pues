import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 9 — "¿Te enteraste?" (days 148–154).
 * Stems must match content/drafts/week9-frames.ts for the same day.
 */
export const week9SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 148,
    theme: "El café nuevo",
    stems: [
      {
        stem: "¿Te enteraste de…?",
        english: "Did you hear about…?",
        completions: [
          { es: "que abren un café en la esquina", en: "they're opening a café on the corner", category: "other" },
          { es: "el local vacío que por fin tiene dueño", en: "the empty storefront that finally has an owner", category: "other" },
          { es: "que la inauguración es el sábado", en: "the grand opening is saturday", category: "time" },
          { es: "la dueña que viene de colombia", en: "the owner who's from colombia", category: "other" },
          { es: "que van a abrir a las seis de la mañana", en: "they're opening at six in the morning", category: "time" },
        ],
      },
      {
        stem: "Vi que…",
        english: "I saw that…",
        completions: [
          { es: "ya pusieron letrero en la ventana", en: "they already put a sign in the window", category: "other" },
          { es: "pintaron toda la fachada de verde", en: "they painted the whole facade green", category: "other" },
          { es: "instalaron una máquina de espresso enorme", en: "they installed a huge espresso machine", category: "other" },
          { es: "trabajaban hasta tarde ayer", en: "they were working late yesterday", category: "time" },
          { es: "colgaron luces en la entrada", en: "they hung lights at the entrance", category: "other" },
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that… / As it happens…",
        completions: [
          { es: "la dueña es de colombia y trae café de allá", en: "the owner is from colombia and brings coffee from there", category: "other" },
          { es: "van a abrir a las seis de la mañana", en: "they're opening at six in the morning", category: "time" },
          { es: "conocen a la dueña de la panadería de al lado", en: "they know the owner of the bakery next door", category: "other" },
          { es: "el alquiler era carísimo", en: "the rent was very expensive", category: "other" },
          { es: "van a tener eventos los domingos", en: "they're going to have events on sundays", category: "time" },
        ],
      },
      {
        stem: "Al parecer…",
        english: "Apparently… / It seems that…",
        completions: [
          { es: "van a tener pasteles de guayaba", en: "they're going to have guava pastries", category: "food" },
          { es: "buscan baristas del barrio", en: "they're looking for baristas from the neighborhood", category: "other" },
          { es: "el alquiler era carísimo", en: "the rent was very expensive", category: "other" },
          { es: "van a tener wifi gratis", en: "they're going to have free wifi", category: "other" },
          { es: "abren el sábado con descuentos", en: "they're opening saturday with discounts", category: "time" },
        ],
      },
      {
        stem: "Me contaron que…",
        english: "They told me that…",
        completions: [
          { es: "la dueña antes tenía un café en jamaica plain", en: "the owner used to have a café in jamaica plain", category: "other" },
          { es: "el local estuvo vacío dos años", en: "the storefront was empty for two years", category: "time" },
          { es: "van a hacer eventos los domingos", en: "they're going to have events on sundays", category: "time" },
          { es: "la inauguración es este sábado", en: "the grand opening is this saturday", category: "time" },
          { es: "van a contratar gente del barrio", en: "they're going to hire people from the neighborhood", category: "other" },
        ],
      },
    ],
  },
  {
    day: 149,
    theme: "El edificio",
    stems: [
      {
        stem: "¿Te enteraste de…?",
        english: "Did you hear about…?",
        completions: [
          { es: "que van a vender el edificio", en: "they're going to sell the building", category: "other" },
          { es: "lo que le pasó a la señora del tercero", en: "what happened to the lady on the third floor", category: "other" },
          { es: "la reunión de inquilinos", en: "the tenants' meeting", category: "other" },
          { es: "el aviso de venta en el lobby", en: "the for-sale notice in the lobby", category: "other" },
          { es: "que el casero quiere jubilarse", en: "the landlord wants to retire", category: "other" },
        ],
      },
      {
        stem: "Vi que…",
        english: "I saw that…",
        completions: [
          { es: "pusieron un aviso de venta en el lobby", en: "they put a for-sale notice in the lobby", category: "other" },
          { es: "vino un inspector ayer por la tarde", en: "an inspector came yesterday afternoon", category: "time" },
          { es: "pegaron un flyer de reunión en el ascensor", en: "they posted a meeting flyer in the elevator", category: "other" },
          { es: "el casero salió con un hombre de traje", en: "the landlord left with a man in a suit", category: "other" },
          { es: "varios inquilinos hablaban en el pasillo", en: "several tenants were talking in the hallway", category: "other" },
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that… / As it happens…",
        completions: [
          { es: "llevan meses negociando en secreto", en: "they've been negotiating in secret for months", category: "time" },
          { es: "el comprador quiere convertir dos pisos en condominios", en: "the buyer wants to convert two floors into condos", category: "other" },
          { es: "los contratos actuales se respetan, por ahora", en: "current leases are honored, for now", category: "other" },
          { es: "la venta cierra en diciembre", en: "the sale closes in december", category: "time" },
          { es: "el casero nunca mantuvo el edificio bien", en: "the landlord never maintained the building well", category: "opinion" },
        ],
      },
      {
        stem: "Al parecer…",
        english: "Apparently… / It seems that…",
        completions: [
          { es: "algunos inquilinos van a pelear legalmente", en: "some tenants are going to fight it legally", category: "other" },
          { es: "la venta cierra en diciembre", en: "the sale closes in december", category: "time" },
          { es: "el casero quiere jubilarse", en: "the landlord wants to retire", category: "other" },
          { es: "van a subir la renta después", en: "they're going to raise rent afterward", category: "other" },
          { es: "hay un grupo de whatsapp para organizarnos", en: "there's a whatsapp group to organize", category: "other" },
        ],
      },
      {
        stem: "Me contaron que…",
        english: "They told me that…",
        completions: [
          { es: "convocaron a un abogado de inquilinos", en: "they called a tenants' lawyer", category: "other" },
          { es: "el casero nunca mantuvo el edificio bien", en: "the landlord never maintained the building well", category: "opinion" },
          { es: "hay un grupo de whatsapp para organizarnos", en: "there's a whatsapp group to organize", category: "other" },
          { es: "la reunión es el jueves en la biblioteca", en: "the meeting is thursday at the library", category: "time" },
          { es: "varios inquilinos llevan años aquí", en: "several tenants have been here for years", category: "other" },
        ],
      },
    ],
  },
  {
    day: 150,
    theme: "La boda",
    stems: [
      {
        stem: "¿Te enteraste de…?",
        english: "Did you hear about…?",
        completions: [
          { es: "la boda de los del tercero", en: "the third-floor couple's wedding", category: "other" },
          { es: "que van a hacer fiesta en el patio", en: "they're going to have a party in the courtyard", category: "other" },
          { es: "que nos invitaron", en: "they invited us", category: "other" },
          { es: "la ceremonia en el jardín botánico", en: "the ceremony at the botanical garden", category: "other" },
          { es: "que invitaron a todo el edificio", en: "they invited the whole building", category: "other" },
        ],
      },
      {
        stem: "Vi que…",
        english: "I saw that…",
        completions: [
          { es: "les llegó un paquete enorme de decoración", en: "a huge decoration package arrived for them", category: "other" },
          { es: "pusieron una invitación en mi buzón", en: "they put an invitation in my mailbox", category: "other" },
          { es: "la novia probó un vestido en la tienda de la esquina", en: "the bride tried on a dress at the corner shop", category: "activity" },
          { es: "decoraban el patio el domingo", en: "they were decorating the courtyard sunday", category: "activity" },
          { es: "llegó un camión de flores", en: "a flower truck arrived", category: "other" },
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that… / As it happens…",
        completions: [
          { es: "la ceremonia es en el jardín botánico", en: "the ceremony is at the botanical garden", category: "other" },
          { es: "llevan juntos ocho años", en: "they've been together eight years", category: "time" },
          { es: "la familia de ella viene de puerto rico", en: "her family is from puerto rico", category: "other" },
          { es: "se conocieron en el edificio", en: "they met in the building", category: "other" },
          { es: "la fiesta es el mes que viene", en: "the party is next month", category: "time" },
        ],
      },
      {
        stem: "Al parecer…",
        english: "Apparently… / It seems that…",
        completions: [
          { es: "van a contratar al restaurante del barrio", en: "they're going to hire the neighborhood restaurant", category: "food" },
          { es: "invitaron a todo el edificio", en: "they invited the whole building", category: "other" },
          { es: "la fiesta dura hasta la medianoche", en: "the party lasts until midnight", category: "time" },
          { es: "van a tener mariachi", en: "they're going to have a mariachi band", category: "other" },
          { es: "la música termina a las once", en: "the music ends at eleven", category: "time" },
        ],
      },
      {
        stem: "Me contaron que…",
        english: "They told me that…",
        completions: [
          { es: "pidieron permiso para usar el patio", en: "they asked permission to use the courtyard", category: "other" },
          { es: "la música termina a las once", en: "the music ends at eleven", category: "time" },
          { es: "aceptan regalos en efectivo", en: "they accept cash gifts", category: "other" },
          { es: "van a contratar al restaurante del barrio", en: "they're hiring the neighborhood restaurant", category: "food" },
          { es: "la invitación llegó por buzón", en: "the invitation came by mailbox", category: "other" },
        ],
      },
    ],
  },
  {
    day: 151,
    theme: "La construcción",
    stems: [
      {
        stem: "¿Te enteraste de…?",
        english: "Did you hear about…?",
        completions: [
          { es: "la construcción en nuestra calle", en: "the construction on our street", category: "other" },
          { es: "que cierran el tramo entero", en: "they're closing the whole stretch", category: "other" },
          { es: "cuánto va a durar", en: "how long it's going to last", category: "time" },
          { es: "el desvío por la calle paralela", en: "the detour through the parallel street", category: "other" },
          { es: "que empiezan el lunes", en: "they start monday", category: "time" },
        ],
      },
      {
        stem: "Vi que…",
        english: "I saw that…",
        completions: [
          { es: "dejaron conos naranjas desde anoche", en: "they left orange cones there since last night", category: "other" },
          { es: "pegaron un aviso de la ciudad en el poste", en: "they posted a city notice on the pole", category: "other" },
          { es: "estacionaron una excavadora frente a mi casa", en: "they parked an excavator in front of my house", category: "other" },
          { es: "cerraron media cuadra", en: "they closed half the block", category: "other" },
          { es: "marcaron el asfalto con pintura", en: "they marked the asphalt with paint", category: "other" },
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that… / As it happens…",
        completions: [
          { es: "van a cambiar las tuberías de agua", en: "they're going to replace the water pipes", category: "other" },
          { es: "el proyecto dura seis semanas", en: "the project lasts six weeks", category: "time" },
          { es: "afecta mi ruta al colegio", en: "it affects my route to school", category: "other" },
          { es: "empiezan a las siete de la mañana", en: "they start at seven in the morning", category: "time" },
          { es: "no se puede estacionar en toda la cuadra", en: "you can't park on the whole block", category: "other" },
        ],
      },
      {
        stem: "Al parecer…",
        english: "Apparently… / It seems that…",
        completions: [
          { es: "el desvío pasa por la calle paralela", en: "the detour goes through the parallel street", category: "other" },
          { es: "no se puede estacionar en toda la cuadra", en: "you can't park on the whole block", category: "other" },
          { es: "empiezan a las siete de la mañana", en: "they start at seven in the morning", category: "time" },
          { es: "el ruido va a ser horrible", en: "the noise is going to be horrible", category: "opinion" },
          { es: "pueden multar si estacionas ahí", en: "they can fine you if you park there", category: "other" },
        ],
      },
      {
        stem: "Me contaron que…",
        english: "They told me that…",
        completions: [
          { es: "la última vez tardaron el doble", en: "last time it took twice as long", category: "time" },
          { es: "el concejal va a visitar el barrio", en: "the city councilor is going to visit the neighborhood", category: "other" },
          { es: "pueden multar si estacionas ahí", en: "they can fine you if you park there", category: "other" },
          { es: "el proyecto dura seis semanas", en: "the project lasts six weeks", category: "time" },
          { es: "afecta la ruta del autobús", en: "it affects the bus route", category: "other" },
        ],
      },
    ],
  },
  {
    day: 152,
    theme: "Vecinos nuevos",
    stems: [
      {
        stem: "¿Te enteraste de…?",
        english: "Did you hear about…?",
        completions: [
          { es: "la familia nueva del primer piso", en: "the new family on the first floor", category: "other" },
          { es: "que tienen dos niños pequeños", en: "they have two small children", category: "other" },
          { es: "de dónde vienen", en: "where they're from", category: "other" },
          { es: "el perro pequeño y ruidoso", en: "the small noisy dog", category: "other" },
          { es: "que vienen de chicago", en: "they're from chicago", category: "other" },
        ],
      },
      {
        stem: "Vi que…",
        english: "I saw that…",
        completions: [
          { es: "llegó un camión de mudanzas el sábado", en: "a moving truck arrived saturday", category: "time" },
          { es: "tienen un perro pequeño y muy ruidoso", en: "they have a small very noisy dog", category: "other" },
          { es: "la mamá saludó a todos en el pasillo", en: "the mom greeted everyone in the hallway", category: "activity" },
          { es: "subían muebles todo el día", en: "they were carrying furniture all day", category: "activity" },
          { es: "los niños jugaban en el pasillo", en: "the kids were playing in the hallway", category: "activity" },
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that… / As it happens…",
        completions: [
          { es: "vienen de chicago y se mudan por trabajo", en: "they're from chicago and moved for work", category: "other" },
          { es: "el papá es ingeniero en una startup", en: "the dad is an engineer at a startup", category: "other" },
          { es: "los niños van a empezar en nuestro distrito escolar", en: "the kids are going to start in our school district", category: "other" },
          { es: "conocen a alguien del barrio", en: "they know someone in the neighborhood", category: "other" },
          { es: "buscan recomendaciones de restaurantes", en: "they're looking for restaurant recommendations", category: "activity" },
        ],
      },
      {
        stem: "Al parecer…",
        english: "Apparently… / It seems that…",
        completions: [
          { es: "son muy amables", en: "they're very friendly", category: "opinion" },
          { es: "buscan recomendaciones de restaurantes", en: "they're looking for restaurant recommendations", category: "activity" },
          { es: "el perro ladra cuando se quedan solos", en: "the dog barks when they're left alone", category: "other" },
          { es: "quieren conocer a los vecinos", en: "they want to meet the neighbors", category: "activity" },
          { es: "van a quedarse mucho tiempo", en: "they're going to stay a long time", category: "opinion" },
        ],
      },
      {
        stem: "Me contaron que…",
        english: "They told me that…",
        completions: [
          { es: "el administrador les dio las llaves el viernes", en: "the building manager gave them keys friday", category: "time" },
          { es: "preguntaron por el supermercado más cercano", en: "they asked about the nearest supermarket", category: "activity" },
          { es: "quieren conocer a los vecinos", en: "they want to meet the neighbors", category: "activity" },
          { es: "los niños van a la escuela del barrio", en: "the kids go to the neighborhood school", category: "other" },
          { es: "vienen de chicago por trabajo", en: "they're from chicago for work", category: "other" },
        ],
      },
    ],
  },
  {
    day: 153,
    theme: "La reunión",
    stems: [
      {
        stem: "¿Te enteraste de…?",
        english: "Did you hear about…?",
        completions: [
          { es: "la reunión del barrio el jueves", en: "the neighborhood meeting thursday", category: "time" },
          { es: "que van a hablar del edificio y la calle", en: "they're going to talk about the building and the street", category: "other" },
          { es: "que invitaron al concejal", en: "they invited the city councilor", category: "other" },
          { es: "la vecina del quinto que organiza todo", en: "the fifth-floor neighbor organizing everything", category: "other" },
          { es: "que deberíamos ir las dos", en: "we should both go", category: "activity" },
        ],
      },
      {
        stem: "Vi que…",
        english: "I saw that…",
        completions: [
          { es: "pegaron un flyer en la panadería", en: "they posted a flyer at the bakery", category: "other" },
          { es: "la lista de temas incluye la venta del edificio", en: "the agenda includes the building sale", category: "other" },
          { es: "reservaron la sala de la biblioteca comunitaria", en: "they reserved the community library room", category: "other" },
          { es: "el flyer dice jueves a las siete", en: "the flyer says thursday at seven", category: "time" },
          { es: "hay un grupo de whatsapp para la reunión", en: "there's a whatsapp group for the meeting", category: "other" },
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that… / As it happens…",
        completions: [
          { es: "la organiza la vecina del quinto piso", en: "the fifth-floor neighbor is organizing it", category: "other" },
          { es: "van a servir café y galletas", en: "they're going to serve coffee and cookies", category: "food" },
          { es: "esperan más de treinta personas", en: "they expect more than thirty people", category: "other" },
          { es: "el concejal confirma asistencia", en: "the city councilor confirms attendance", category: "other" },
          { es: "van a hablar de la construcción también", en: "they're also going to talk about the construction", category: "other" },
        ],
      },
      {
        stem: "Al parecer…",
        english: "Apparently… / It seems that…",
        completions: [
          { es: "el tema más caliente es la venta del edificio", en: "the hottest topic is the building sale", category: "other" },
          { es: "varios inquilinos van a hablar", en: "several tenants are going to speak", category: "other" },
          { es: "la construcción también está en la agenda", en: "the construction is also on the agenda", category: "other" },
          { es: "van a repartir información del abogado", en: "they're going to hand out information from the lawyer", category: "other" },
          { es: "va a estar llena la sala", en: "the room is going to be full", category: "opinion" },
        ],
      },
      {
        stem: "Me contaron que…",
        english: "They told me that…",
        completions: [
          { es: "deberíamos ir las dos", en: "we should both go", category: "activity" },
          { es: "pueden repartir información del abogado", en: "they may hand out information from the lawyer", category: "other" },
          { es: "el concejal confirma asistencia", en: "the city councilor confirms attendance", category: "other" },
          { es: "van a servir café y galletas", en: "they're serving coffee and cookies", category: "food" },
          { es: "es importante que vayamos", en: "it's important that we go", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 154,
    theme: "Repaso: te enteraste",
    stems: [
      {
        stem: "¿Te enteraste de…?",
        english: "Did you hear about…?",
        completions: [
          { es: "todo lo que pasó en el barrio esta semana", en: "everything that happened in the neighborhood this week", category: "other" },
          { es: "el café, la venta del edificio y la boda", en: "the café, the building sale, and the wedding", category: "other" },
          { es: "que el barrio no para", en: "the neighborhood doesn't stop", category: "opinion" },
          { es: "la reunión del jueves", en: "thursday's meeting", category: "time" },
          { es: "la familia nueva y la construcción", en: "the new family and the construction", category: "other" },
        ],
      },
      {
        stem: "Vi que…",
        english: "I saw that…",
        completions: [
          { es: "el barrio cambió más en una semana que en un año", en: "the neighborhood changed more in a week than in a year", category: "opinion" },
          { es: "hay letreros, conos, flyers y mudanzas por todos lados", en: "there are signs, cones, flyers, and moves everywhere", category: "other" },
          { es: "la vecina del quinto organiza todo desde su celular", en: "the fifth-floor neighbor organizes everything from her phone", category: "activity" },
          { es: "el barrio se despertó esta semana", en: "the neighborhood woke up this week", category: "opinion" },
          { es: "todo está conectado", en: "everything is connected", category: "opinion" },
        ],
      },
      {
        stem: "Resulta que…",
        english: "It turns out that… / As it happens…",
        completions: [
          { es: "la dueña del café conoce a la novia del tercero", en: "the café owner knows the bride from the third floor", category: "other" },
          { es: "la construcción y la venta del edificio están conectadas", en: "the construction and the building sale are connected", category: "other" },
          { es: "todo pasa al mismo tiempo", en: "everything happens at the same time", category: "opinion" },
          { es: "el barrio tiene más historias de las que pensaba", en: "the neighborhood has more stories than i thought", category: "opinion" },
          { es: "la reunión del jueves lo junta todo", en: "thursday's meeting ties it all together", category: "other" },
        ],
      },
      {
        stem: "Al parecer…",
        english: "Apparently… / It seems that…",
        completions: [
          { es: "el barrio se está despertando", en: "the neighborhood is waking up", category: "opinion" },
          { es: "la reunión del jueves va a estar llena", en: "thursday's meeting is going to be packed", category: "opinion" },
          { es: "ya no somos solo inquilinos anónimos", en: "we're no longer just anonymous tenants", category: "opinion" },
          { es: "la próxima semana habrá más novedades", en: "next week there will be more news", category: "other" },
          { es: "el café abre el sábado", en: "the café opens saturday", category: "time" },
        ],
      },
      {
        stem: "Me contaron que…",
        english: "They told me that…",
        completions: [
          { es: "deberíamos ir juntas el jueves", en: "we should go together thursday", category: "activity" },
          { es: "el barrio tiene más historias de las que pensaba", en: "the neighborhood has more stories than i thought", category: "opinion" },
          { es: "la próxima semana habrá más novedades", en: "next week there will be more news", category: "other" },
          { es: "la dueña del café conoce a la novia", en: "the café owner knows the bride", category: "other" },
          { es: "es importante que estemos presentes", en: "it's important that we're present", category: "opinion" },
        ],
      },
    ],
  },
];
