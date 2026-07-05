import type { SentenceFormerDay } from "../sentenceFormer/types";

/**
 * Otoño Week 7 — "Por eso" (days 134–140).
 * Stems must match content/drafts/week7-frames.ts for the same day.
 */
export const week7SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 134,
    theme: "Se paró el coche",
    stems: [
      {
        stem: "Por eso…",
        english: "That's why… / So…",
        completions: [
          { es: "tuve que llamar a priya desde el arcén", en: "i had to call priya from the shoulder", category: "activity" },
          { es: "llegué tarde al colegio", en: "i arrived late to school", category: "time" },
          { es: "apagué el motor enseguida", en: "i turned off the engine right away", category: "activity" },
          { es: "no seguí manejando con la luz encendida", en: "i didn't keep driving with the light on", category: "activity" },
          { es: "paré en el arcén inmediatamente", en: "i stopped on the shoulder immediately", category: "activity" },
        ],
      },
      {
        stem: "Así que…",
        english: "So… / And so…",
        completions: [
          { es: "me bajé y abrí el capó", en: "i got out and opened the hood", category: "activity" },
          { es: "pedí un uber para llegar al colegio", en: "i ordered an uber to get to school", category: "activity" },
          { es: "avisé a la oficina por teléfono", en: "i notified the office by phone", category: "activity" },
          { es: "encendí las luces de emergencia", en: "i turned on the hazard lights", category: "activity" },
          { es: "esperé ayuda en el arcén", en: "i waited for help on the shoulder", category: "activity" },
        ],
      },
      {
        stem: "Como…",
        english: "Since… / Because…",
        completions: [
          { es: "la luz del motor llevaba días encendida, no me sorprendió", en: "the check-engine light had been on for days, i wasn't surprised", category: "other" },
          { es: "hacía frío, la batería falló más rápido", en: "it was cold, the battery failed faster", category: "other" },
          { es: "iba apurada, no paré en la gasolinera", en: "i was in a hurry, i didn't stop at the gas station", category: "activity" },
          { es: "el motor hacía ruido, debí parar antes", en: "the engine was making noise, i should have stopped sooner", category: "opinion" },
          { es: "no revisé el aceite, esto era predecible", en: "i didn't check the oil, this was predictable", category: "opinion" },
        ],
      },
      {
        stem: "Debido a…",
        english: "Due to… / Because of…",
        completions: [
          { es: "la avería, perdí la primera clase", en: "the breakdown, i missed first period", category: "time" },
          { es: "el tráfico en la autopista, el auxilio tardó", en: "highway traffic, roadside help was slow", category: "time" },
          { es: "el motor, el taller cobra más de lo que pensaba", en: "the engine, the shop charges more than i thought", category: "other" },
          { es: "la grúa, llegué casi una hora tarde", en: "the tow truck, i arrived almost an hour late", category: "time" },
          { es: "el retraso, no pude preparar la clase", en: "the delay, i couldn't prepare the lesson", category: "activity" },
        ],
      },
      {
        stem: "Gracias a…",
        english: "Thanks to…",
        completions: [
          { es: "priya, no me quedé sola en la carretera", en: "priya, i wasn't alone on the highway", category: "other" },
          { es: "el seguro, la grúa salió gratis", en: "insurance, the tow was free", category: "other" },
          { es: "un aviso del taller, sé cuánto va a costar", en: "a notice from the shop, i know how much it'll cost", category: "other" },
          { es: "la oficina, entendieron mi retraso", en: "the office, they understood my delay", category: "other" },
          { es: "el auxilio en carretera, no tuve que caminar", en: "roadside assistance, i didn't have to walk", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 135,
    theme: "Llegué tarde",
    stems: [
      {
        stem: "Por eso…",
        english: "That's why… / So…",
        completions: [
          { es: "mis estudiantes esperaban en el pasillo", en: "my students were waiting in the hallway", category: "other" },
          { es: "la directora me miró raro al entrar", en: "the principal gave me a look when i walked in", category: "other" },
          { es: "tuve que improvisar la actividad de apertura", en: "i had to improvise the opening activity", category: "activity" },
          { es: "perdí los primeros diez minutos de clase", en: "i lost the first ten minutes of class", category: "time" },
          { es: "llegué sin café ni materiales", en: "i arrived without coffee or materials", category: "other" },
        ],
      },
      {
        stem: "Así que…",
        english: "So… / And so…",
        completions: [
          { es: "empecé la clase directo con el repaso", en: "i started class straight with the review", category: "activity" },
          { es: "le pedí a priya que cubriera cinco minutos", en: "i asked priya to cover five minutes", category: "activity" },
          { es: "cancelé la prueba sorpresa del día", en: "i canceled the pop quiz for the day", category: "activity" },
          { es: "salté la actividad de apertura", en: "i skipped the opening activity", category: "activity" },
          { es: "expliqué rápido por qué llegué tarde", en: "i quickly explained why i was late", category: "activity" },
        ],
      },
      {
        stem: "Como…",
        english: "Since… / Because…",
        completions: [
          { es: "llegué veinte minutos tarde, perdí la reunión", en: "i arrived twenty minutes late, i missed the meeting", category: "time" },
          { es: "no tenía coche, no pude traer los materiales", en: "i didn't have a car, i couldn't bring the materials", category: "other" },
          { es: "estaba estresada, hablé más rápido de lo normal", en: "i was stressed, i spoke faster than usual", category: "opinion" },
          { es: "perdí la reunión, no firmé la lista", en: "i missed the meeting, i didn't sign the list", category: "activity" },
          { es: "venía del arcén, no tenía buen aspecto", en: "i was coming from the shoulder, i didn't look good", category: "other" },
        ],
      },
      {
        stem: "Debido a…",
        english: "Due to… / Because of…",
        completions: [
          { es: "mi retraso, no firmé la lista a tiempo", en: "my delay, i didn't sign the attendance list on time", category: "activity" },
          { es: "el caos de la mañana, olvidé el café", en: "the morning chaos, i forgot my coffee", category: "other" },
          { es: "la avería, tuve que replanear todo el día", en: "the breakdown, i had to replan the whole day", category: "activity" },
          { es: "el uber, gasté más de lo normal", en: "the uber, i spent more than usual", category: "other" },
          { es: "la confusión, empecé con la actividad equivocada", en: "the confusion, i started with the wrong activity", category: "activity" },
        ],
      },
      {
        stem: "Gracias a…",
        english: "Thanks to…",
        completions: [
          { es: "mis estudiantes, retomamos la clase rápido", en: "my students, we got back on track quickly", category: "other" },
          { es: "la secretaria, avisaron a la directora", en: "the secretary, they notified the principal", category: "other" },
          { es: "priya, no perdí toda la primera hora", en: "priya, i didn't lose the whole first hour", category: "time" },
          { es: "la clase tranquila, recuperamos el ritmo", en: "the calm class, we recovered the rhythm", category: "other" },
          { es: "el repaso que tenía listo, salvé la clase", en: "the review i had ready, it saved the class", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 136,
    theme: "El transporte",
    stems: [
      {
        stem: "Por eso…",
        english: "That's why… / So…",
        completions: [
          { es: "esta semana gasto más en transporte", en: "this week i'm spending more on transportation", category: "other" },
          { es: "salgo de casa una hora antes", en: "i leave home an hour earlier", category: "time" },
          { es: "llevo el abrigo y la lonchera en la misma bolsa", en: "i carry my coat and lunch bag in the same bag", category: "other" },
          { es: "llego agotada al colegio", en: "i arrive exhausted at school", category: "other" },
          { es: "mi rutina de mañana cambió por completo", en: "my morning routine changed completely", category: "other" },
        ],
      },
      {
        stem: "Así que…",
        english: "So… / And so…",
        completions: [
          { es: "descargué la app del autobús otra vez", en: "i downloaded the bus app again", category: "activity" },
          { es: "dejé el coche en el taller hasta el viernes", en: "i left the car at the shop until friday", category: "activity" },
          { es: "acordé con priya ir juntas los martes", en: "i agreed with priya to go together on tuesdays", category: "activity" },
          { es: "compré un pase de autobús semanal", en: "i bought a weekly bus pass", category: "activity" },
          { es: "dejé de estacionar en el colegio", en: "i stopped parking at school", category: "activity" },
        ],
      },
      {
        stem: "Como…",
        english: "Since… / Because…",
        completions: [
          { es: "no tengo coche, dependo del uber y del bus", en: "i don't have a car, i depend on uber and the bus", category: "other" },
          { es: "hace frío, esperar en la parada es horrible", en: "it's cold, waiting at the stop is horrible", category: "opinion" },
          { es: "el taller está lejos, la grúa tardó una hora", en: "the shop is far, the tow took an hour", category: "time" },
          { es: "vivo lejos del colegio, el bus tarda mucho", en: "i live far from school, the bus takes a long time", category: "time" },
          { es: "el coche está en reparación, no tengo opción", en: "the car is being repaired, i have no choice", category: "other" },
        ],
      },
      {
        stem: "Debido a…",
        english: "Due to… / Because of…",
        completions: [
          { es: "el transporte público, llego más cansada", en: "public transit, i arrive more tired", category: "other" },
          { es: "la hora pico, el uber costó el doble", en: "rush hour, the uber cost double", category: "other" },
          { es: "la distancia, el bus tarda cuarenta minutos", en: "the distance, the bus takes forty minutes", category: "time" },
          { es: "el desvío, perdí mi parada de bus", en: "the detour, i missed my bus stop", category: "activity" },
          { es: "la lluvia, el uber no llegaba", en: "the rain, the uber wasn't arriving", category: "other" },
        ],
      },
      {
        stem: "Gracias a…",
        english: "Thanks to…",
        completions: [
          { es: "el pase de autobús del distrito, ahorro algo", en: "the district bus pass, i save a little", category: "other" },
          { es: "la vecina, sé qué línea tomar", en: "the neighbor, i know which line to take", category: "other" },
          { es: "priya, los martes no uso uber", en: "priya, on tuesdays i don't use uber", category: "activity" },
          { es: "la app del bus, sé cuándo llega", en: "the bus app, i know when it arrives", category: "activity" },
          { es: "un compañero, aprendí la ruta más rápida", en: "a coworker, i learned the fastest route", category: "other" },
        ],
      },
    ],
  },
  {
    day: 137,
    theme: "El taller",
    stems: [
      {
        stem: "Por eso…",
        english: "That's why… / So…",
        completions: [
          { es: "esta semana como arroz con lo que hay", en: "this week i'm eating rice with whatever's there", category: "food" },
          { es: "no voy a salir el fin de semana", en: "i'm not going out this weekend", category: "activity" },
          { es: "revisé mi cuenta tres veces", en: "i checked my account three times", category: "activity" },
          { es: "cancelé la cena con amigas", en: "i canceled dinner with friends", category: "activity" },
          { es: "no compro nada extra este mes", en: "i'm not buying anything extra this month", category: "other" },
        ],
      },
      {
        stem: "Así que…",
        english: "So… / And so…",
        completions: [
          { es: "aprobé la reparación del alternador", en: "i approved the alternator repair", category: "activity" },
          { es: "pedí presupuesto en otro taller", en: "i got a quote at another shop", category: "activity" },
          { es: "usé lo que había guardado para emergencias", en: "i used what i had saved for emergencies", category: "activity" },
          { es: "acepté el plan de pagos", en: "i accepted the payment plan", category: "activity" },
          { es: "dejé el coche hasta que esté listo", en: "i left the car until it's ready", category: "activity" },
        ],
      },
      {
        stem: "Como…",
        english: "Since… / Because…",
        completions: [
          { es: "el coche tiene diez años, estas cosas pasan", en: "the car is ten years old, these things happen", category: "opinion" },
          { es: "ignoré la luz del motor, empeoró", en: "i ignored the check-engine light, it got worse", category: "other" },
          { es: "lo necesito para ir al colegio, no tengo opción", en: "i need it to get to school, i have no choice", category: "other" },
          { es: "no hice mantenimiento, esto era inevitable", en: "i didn't do maintenance, this was inevitable", category: "opinion" },
          { es: "es mi único transporte, tengo que arreglarlo", en: "it's my only transportation, i have to fix it", category: "other" },
        ],
      },
      {
        stem: "Debido a…",
        english: "Due to… / Because of…",
        completions: [
          { es: "el alternador, la factura supera los quinientos", en: "the alternator, the bill exceeds five hundred", category: "other" },
          { es: "la pieza importada, tardan hasta el jueves", en: "the imported part, they'll take until thursday", category: "time" },
          { es: "la revisión completa, encontraron otra falla", en: "the full inspection, they found another problem", category: "other" },
          { es: "la mano de obra, el precio subió", en: "labor, the price went up", category: "other" },
          { es: "la batería vieja, hay que cambiarla también", en: "the old battery, it needs to be replaced too", category: "other" },
        ],
      },
      {
        stem: "Gracias a…",
        english: "Thanks to…",
        completions: [
          { es: "el mecánico de confianza, no me cobró de más", en: "my trusted mechanic, he didn't overcharge me", category: "other" },
          { es: "el plan de pagos, puedo respirar un poco", en: "the payment plan, i can breathe a little", category: "other" },
          { es: "mi tío, encontré un taller barato y bueno", en: "my uncle, i found a cheap and good shop", category: "other" },
          { es: "el presupuesto por escrito, no hubo sorpresas", en: "the written estimate, there were no surprises", category: "other" },
          { es: "el fondo de emergencia, pude pagar la mitad", en: "the emergency fund, i could pay half", category: "other" },
        ],
      },
    ],
  },
  {
    day: 138,
    theme: "Priya al rescate",
    stems: [
      {
        stem: "Por eso…",
        english: "That's why… / So…",
        completions: [
          { es: "le compré el café toda la semana", en: "i bought her coffee all week", category: "activity" },
          { es: "le debo un favor grande", en: "i owe her a big favor", category: "other" },
          { es: "no me sentí tan sola esta semana", en: "i didn't feel so alone this week", category: "opinion" },
          { es: "le guardé el estacionamiento el miércoles", en: "i saved her a parking spot wednesday", category: "activity" },
          { es: "le escribí un mensaje de agradecimiento", en: "i sent her a thank-you message", category: "activity" },
        ],
      },
      {
        stem: "Así que…",
        english: "So… / And so…",
        completions: [
          { es: "acordamos compartir el viaje los días de lluvia", en: "we agreed to share the ride on rainy days", category: "activity" },
          { es: "le pagué la gasolina del miércoles", en: "i paid for her gas on wednesday", category: "activity" },
          { es: "le guardo el estacionamiento cuando llega tarde", en: "i save her a parking spot when she arrives late", category: "activity" },
          { es: "intercambiamos favores esta semana", en: "we traded favors this week", category: "activity" },
          { es: "planificamos juntas los martes", en: "we plan together on tuesdays", category: "activity" },
        ],
      },
      {
        stem: "Como…",
        english: "Since… / Because…",
        completions: [
          { es: "priya vive cerca, el desvío no le cuesta mucho", en: "priya lives nearby, the detour doesn't cost her much", category: "other" },
          { es: "tenemos la misma hora de entrada, coincide perfecto", en: "we have the same start time, it works perfectly", category: "time" },
          { es: "es buena amiga, no tuve que rogarle", en: "she's a good friend, i didn't have to beg", category: "opinion" },
          { es: "compartimos salón, es fácil coordinar", en: "we share a room, it's easy to coordinate", category: "other" },
          { es: "ella también maneja, entiende mi situación", en: "she drives too, she understands my situation", category: "opinion" },
        ],
      },
      {
        stem: "Debido a…",
        english: "Due to… / Because of…",
        completions: [
          { es: "sus rides, no falté ni un día", en: "her rides, i didn't miss a single day", category: "other" },
          { es: "la lluvia del jueves, su ayuda fue clave", en: "thursday's rain, her help was key", category: "other" },
          { es: "su paciencia, sobreviví la semana", en: "her patience, i survived the week", category: "opinion" },
          { es: "su flexibilidad, no perdí ninguna reunión", en: "her flexibility, i didn't miss any meetings", category: "other" },
          { es: "su compañía, el viaje fue menos pesado", en: "her company, the commute felt lighter", category: "opinion" },
        ],
      },
      {
        stem: "Gracias a…",
        english: "Thanks to…",
        completions: [
          { es: "priya, llegué a tiempo el viernes", en: "priya, i made it on time friday", category: "time" },
          { es: "sus rides, ahorré en uber", en: "her rides, i saved on uber", category: "other" },
          { es: "su compañía, el viaje se sintió menos pesado", en: "her company, the commute felt less heavy", category: "opinion" },
          { es: "nuestra amistad, pedir ayuda fue fácil", en: "our friendship, asking for help was easy", category: "opinion" },
          { es: "su carpool, pude calificar en el camino", en: "her carpool, i could grade on the way", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 139,
    theme: "Arreglado",
    stems: [
      {
        stem: "Por eso…",
        english: "That's why… / So…",
        completions: [
          { es: "hoy respiré al encender el motor", en: "today i breathed easy when i started the engine", category: "opinion" },
          { es: "voy a revisar la luz del tablero enseguida", en: "i'm going to check dashboard lights right away", category: "activity" },
          { es: "guardo más para emergencias", en: "i save more for emergencies", category: "activity" },
          { es: "ya no ignoro los ruidos raros", en: "i no longer ignore strange noises", category: "activity" },
          { es: "aprecio mi rutina normal", en: "i appreciate my normal routine", category: "opinion" },
        ],
      },
      {
        stem: "Así que…",
        english: "So… / And so…",
        completions: [
          { es: "fui al taller el sábado por la mañana", en: "i went to the shop saturday morning", category: "activity" },
          { es: "le llevé un pastel a priya el lunes", en: "i brought priya a cake on monday", category: "activity" },
          { es: "volví a mi ruta normal esta semana", en: "i went back to my normal route this week", category: "activity" },
          { es: "cancelé el plan de carpool con priya", en: "i canceled the carpool plan with priya", category: "activity" },
          { es: "empecé a revisar el aceite cada mes", en: "i started checking the oil every month", category: "activity" },
        ],
      },
      {
        stem: "Como…",
        english: "Since… / Because…",
        completions: [
          { es: "ya está arreglado, puedo olvidar el caos", en: "it's fixed now, i can forget the chaos", category: "opinion" },
          { es: "aprendí la lección, reviso el aceite cada mes", en: "i learned the lesson, i check the oil every month", category: "activity" },
          { es: "fue una semana dura, aprecio mi rutina", en: "it was a hard week, i appreciate my routine", category: "opinion" },
          { es: "el coche funciona bien, puedo relajarme", en: "the car runs well, i can relax", category: "opinion" },
          { es: "pagamos la factura, no hay deuda", en: "we paid the bill, there's no debt", category: "other" },
        ],
      },
      {
        stem: "Debido a…",
        english: "Due to… / Because of…",
        completions: [
          { es: "toda la semana, estaba agotada el domingo", en: "the whole week, i was exhausted sunday", category: "other" },
          { es: "el gasto, cancelé el viaje de otoño", en: "the expense, i canceled the fall trip", category: "activity" },
          { es: "el estrés, dormí doce horas el sábado", en: "the stress, i slept twelve hours saturday", category: "activity" },
          { es: "los uber, gasté más de lo planeado", en: "the ubers, i spent more than planned", category: "other" },
          { es: "la reparación, no comí fuera todo el mes", en: "the repair, i didn't eat out all month", category: "food" },
        ],
      },
      {
        stem: "Gracias a…",
        english: "Thanks to…",
        completions: [
          { es: "todos los que me ayudaron, sobreviví", en: "everyone who helped, i survived", category: "other" },
          { es: "el fondo de emergencia, pagué sin deuda", en: "the emergency fund, i paid without debt", category: "other" },
          { es: "priya y al mecánico, el coche vuelve a funcionar", en: "priya and the mechanic, the car works again", category: "other" },
          { es: "el seguro, la grúa no me costó nada", en: "insurance, the tow cost me nothing", category: "other" },
          { es: "la semana difícil, sé quién está ahí", en: "the hard week, i know who's there for me", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 140,
    theme: "Repaso: por eso",
    stems: [
      {
        stem: "Por eso…",
        english: "That's why… / So…",
        completions: [
          { es: "tuve una semana entera de transporte caótico", en: "i had a whole week of chaotic transportation", category: "other" },
          { es: "no ignoro las luces del tablero nunca más", en: "i never ignore dashboard lights again", category: "activity" },
          { es: "valoro tener amigas cerca del colegio", en: "i value having friends near school", category: "opinion" },
          { es: "ahora guardo más para emergencias", en: "now i save more for emergencies", category: "activity" },
          { es: "aprecio cada mañana sin estrés", en: "i appreciate every stress-free morning", category: "opinion" },
        ],
      },
      {
        stem: "Así que…",
        english: "So… / And so…",
        completions: [
          { es: "pedí uber, bus, favores y paciencia", en: "i took uber, bus, favors, and patience", category: "other" },
          { es: "pagué el taller y retomé mi rutina", en: "i paid the shop and went back to my routine", category: "activity" },
          { es: "le devolví el favor a priya con café y pastel", en: "i returned the favor to priya with coffee and cake", category: "activity" },
          { es: "aprendí a pedir ayuda sin vergüenza", en: "i learned to ask for help without shame", category: "opinion" },
          { es: "revisé mi presupuesto para el próximo mes", en: "i reviewed my budget for next month", category: "activity" },
        ],
      },
      {
        stem: "Como…",
        english: "Since… / Because…",
        completions: [
          { es: "ignoré la luz del motor, el coche se paró", en: "i ignored the check-engine light, the car stopped", category: "other" },
          { es: "no tenía plan b, dependí de priya", en: "i didn't have a plan b, i depended on priya", category: "other" },
          { es: "el coche es viejo, estas cosas pasan", en: "the car is old, these things happen", category: "opinion" },
          { es: "no hice mantenimiento, la avería era inevitable", en: "i didn't do maintenance, the breakdown was inevitable", category: "opinion" },
          { es: "vivo lejos, perder el coche fue un desastre", en: "i live far away, losing the car was a disaster", category: "opinion" },
        ],
      },
      {
        stem: "Debido a…",
        english: "Due to… / Because of…",
        completions: [
          { es: "la avería, gasté más de lo planeado", en: "the breakdown, i spent more than planned", category: "other" },
          { es: "el retraso, perdí clases y reuniones", en: "the delay, i missed classes and meetings", category: "time" },
          { es: "la semana difícil, aprecio lo normal", en: "the hard week, i appreciate normal life", category: "opinion" },
          { es: "el alternador, usé mis ahorros", en: "the alternator, i used my savings", category: "other" },
          { es: "los uber, no comí fuera toda la semana", en: "the ubers, i didn't eat out all week", category: "food" },
        ],
      },
      {
        stem: "Gracias a…",
        english: "Thanks to…",
        completions: [
          { es: "priya, al seguro y al mecánico, lo resolví", en: "priya, insurance, and the mechanic, i figured it out", category: "other" },
          { es: "la semana difícil, sé quién está ahí", en: "the hard week, i know who's there", category: "opinion" },
          { es: "el fondo de emergencia, no me endeudé", en: "the emergency fund, i didn't go into debt", category: "other" },
          { es: "mis estudiantes, la clase siguió adelante", en: "my students, class kept moving forward", category: "other" },
          { es: "todos los favores, sobreviví sin faltar", en: "all the favors, i survived without missing a day", category: "other" },
        ],
      },
    ],
  },
];
