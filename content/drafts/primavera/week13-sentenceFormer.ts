import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 13 — "La última clase" (days 358–364).
 * Stems must match content/drafts/primavera/week13-frames.ts for the same day.
 */
export const priWeek13SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 358,
    theme: "El salón a las seis",
    stems: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "nunca he hecho una de estas", en: "i've never done one of these", category: "activity" },
          { es: "compré comida para veinte por si acaso", en: "i bought food for twenty just in case", category: "food" },
          { es: "llevo tres días pensando en esta noche", en: "i've been thinking about tonight for three days", category: "time" },
          { es: "no sé cuánta gente viene", en: "i don't know how many people are coming", category: "other" },
          { es: "me dan más nervios que el primer día de clase", en: "i'm more nervous than on the first day of class", category: "opinion" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "el mantel se ve bien", en: "the tablecloth looks fine", category: "other" },
          { es: "nadie va a medir las servilletas", en: "nobody is going to measure the napkins", category: "other" },
          { es: "sí puedes poner la música", en: "you can put the music on", category: "activity" },
          { es: "quedó mejor de lo que esperaba", en: "it turned out better than i expected", category: "opinion" },
          { es: "tú siempre haces esto mejor que yo", en: "you always do this better than i do", category: "opinion" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "si ponemos las sillas en filas nadie va a hablar", en: "if we put the chairs in rows nobody will talk", category: "other" },
          { es: "prefiero que no haya una mesa al frente", en: "i'd rather there wasn't a table at the front", category: "opinion" },
          { es: "esta noche no doy ningún discurso", en: "i'm not giving any speech tonight", category: "activity" },
          { es: "la comida va en el centro y punto", en: "the food goes in the middle and that's that", category: "food" },
          { es: "en círculo caben los mismos", en: "the same number fit in a circle", category: "other" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "poner la comida en el centro", en: "putting the food in the middle", category: "food" },
          { es: "dejar la puerta abierta y ver quién entra", en: "leaving the door open and seeing who comes in", category: "activity" },
          { es: "empezar sin esperar a nadie", en: "starting without waiting for anyone", category: "time" },
          { es: "poner las sillas en círculo", en: "putting the chairs in a circle", category: "other" },
          { es: "preguntarles a ellos cómo lo quieren", en: "asking them how they want it", category: "other" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "de la coordinadora, ¿al final te contestó?", en: "about the coordinator, did she get back to you?", category: "other" },
          { es: "el lunes, sí llamaron a las familias", en: "on monday, they did call the families", category: "time" },
          { es: "en abril, esto pasó porque fuimos dos", en: "in april, this happened because there were two of us", category: "time" },
          { es: "de la lista de espera, todavía existe", en: "about the waiting list, it still exists", category: "other" },
          { es: "esta mañana, sí me trajeron las llaves", en: "this morning, they did bring me the keys", category: "time" },
        ],
      },
    ],
  },
  {
    day: 359,
    theme: "Yesenia llega con la olla",
    stems: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "no pensé que alguien fuera a traer algo", en: "i didn't think anyone was going to bring anything", category: "food" },
          { es: "esto huele mejor que todo lo que compré yo", en: "this smells better than everything i bought", category: "food" },
          { es: "me da pena que hayas cocinado después del turno", en: "i feel bad that you cooked after your shift", category: "other" },
          { es: "tú siempre llegas antes que yo", en: "you always get here before i do", category: "time" },
          { es: "no sé cómo te alcanza el día", en: "i don't know how you fit it all in a day", category: "time" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "claro que cabe la olla", en: "of course the pot fits", category: "food" },
          { es: "no te vamos a cobrar la entrada", en: "we're not going to charge you admission", category: "other" },
          { es: "tú siempre llegas primero", en: "you always arrive first", category: "time" },
          { es: "la mesa aguanta dos ollas más", en: "the table can hold two more pots", category: "food" },
          { es: "nadie se va a ir con hambre", en: "nobody is leaving hungry", category: "food" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "esta noche no vas a servir tú sola", en: "tonight you're not serving by yourself", category: "activity" },
          { es: "hoy te sientas como los demás", en: "today you sit like everyone else", category: "other" },
          { es: "yo también sé usar una cuchara", en: "i know how to use a spoon too", category: "food" },
          { es: "trajiste la comida, ya hiciste bastante", en: "you brought the food, you've done enough", category: "food" },
          { es: "aquí nadie es la mesera", en: "nobody here is the waitress", category: "other" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "preguntarte qué le dirías a alguien que empieza", en: "asking you what you'd tell someone starting out", category: "other" },
          { es: "que tú expliques mejor que yo por qué vale la pena", en: "that you explain better than i do why it's worth it", category: "opinion" },
          { es: "sentarnos antes de que llegue todo el mundo", en: "sitting down before everyone arrives", category: "time" },
          { es: "servirte a ti primero, por una vez", en: "serving you first, for once", category: "food" },
          { es: "guardar un plato para Rocío", en: "saving a plate for rocío", category: "food" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "en marzo, lo del inglés para qué sirve", en: "in march, the thing about what english is for", category: "time" },
          { es: "de las cuatro horas, tenías razón en preguntar", en: "about the four hours, you were right to ask", category: "time" },
          { es: "ese jueves, la respuesta corta era mala", en: "that thursday, the short answer was a bad one", category: "opinion" },
          { es: "de tu mamá, ¿cómo sigue?", en: "about your mom, how is she doing?", category: "other" },
          { es: "del horario nuevo, sí lo movieron a las siete", en: "about the new schedule, they did move it to seven", category: "time" },
        ],
      },
    ],
  },
  {
    day: 360,
    theme: "Camila conoce a la clase",
    stems: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "me daba nervios que ustedes dos se conocieran", en: "i was nervous about you two meeting", category: "other" },
          { es: "hablo de esta clase contigo desde hace meses", en: "i've been telling you about this class for months", category: "time" },
          { es: "quería que vieras el salón, no solo oírlo", en: "i wanted you to see the room, not just hear about it", category: "other" },
          { es: "aquí soy otra persona y tú no la conocías", en: "here i'm a different person and you hadn't met her", category: "opinion" },
          { es: "me alegra que hayas venido temprano", en: "i'm glad you came early", category: "time" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "aquí nadie cree que yo fuera mala para esto", en: "nobody here believes i was ever bad at this", category: "opinion" },
          { es: "no eres la invitada de honor, eres la del pan", en: "you're not the guest of honor, you're the bread person", category: "food" },
          { es: "siéntate antes de que te den un examen", en: "sit down before they give you a test", category: "activity" },
          { es: "ya te van a preguntar de dónde eres", en: "they're about to ask you where you're from", category: "other" },
          { es: "tú también tienes que presentarte", en: "you have to introduce yourself too", category: "activity" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "no les cuentes todavía lo del ascensor", en: "don't tell them the elevator thing yet", category: "other" },
          { es: "aquí yo no soy la que hace las preguntas", en: "here i'm not the one who asks the questions", category: "other" },
          { es: "deja que ellos hablen primero", en: "let them talk first", category: "activity" },
          { es: "en este salón el español manda", en: "in this room spanish is in charge", category: "opinion" },
          { es: "esa historia es para el café, no para aquí", en: "that story is for the café, not for here", category: "other" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "que ustedes dos se van a llevar demasiado bien", en: "that you two are going to get along far too well", category: "opinion" },
          { es: "presentarte a Yesenia antes que a nadie", en: "introducing you to yesenia before anyone else", category: "other" },
          { es: "que ya nadie me necesita para traducir", en: "that nobody needs me to translate anymore", category: "opinion" },
          { es: "sentarte al lado de Rocío", en: "sitting you next to rocío", category: "other" },
          { es: "callarme y dejarlas hablar", en: "shutting up and letting them talk", category: "activity" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "en la puerta, sí, este es el salón", en: "at the door, yes, this is the room", category: "other" },
          { es: "en el café, así suena cuando hablan todos", en: "at the café, that's how it sounds when everyone talks", category: "other" },
          { es: "del hospital, aquí llega la misma gente cansada", en: "about the hospital, the same tired people come here", category: "other" },
          { es: "el jueves pasado, sí vinieron los once", en: "last thursday, all eleven did come", category: "time" },
          { es: "hace un rato, tenías razón con lo de la comida", en: "a little while ago, you were right about the food", category: "food" },
        ],
      },
    ],
  },
  {
    day: 361,
    theme: "La mamá de Diego",
    stems: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is… (usted throughout)",
        completions: [
          { es: "no esperaba que usted viniera", en: "i wasn't expecting you to come", category: "other" },
          { es: "me alegró mucho verla en la puerta", en: "it made me very happy to see you at the door", category: "other" },
          { es: "su hijo habló de esto toda la semana", en: "your son talked about this all week", category: "time" },
          { es: "no sabía si le había llegado la invitación", en: "i didn't know if the invitation had reached you", category: "other" },
          { es: "quería hablar con usted desde hace meses", en: "i've been wanting to talk with you for months", category: "time" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg (usted: *le*)",
        completions: [
          { es: "su hijo me dijo que usted iba a decir eso", en: "your son told me you were going to say that", category: "other" },
          { es: "la comida de usted se acabó primero", en: "your food ran out first", category: "food" },
          { es: "no le voy a poner tarea a usted también", en: "i'm not going to give you homework too", category: "activity" },
          { es: "él saca la lectura de alguien", en: "he gets the reading from someone", category: "opinion" },
          { es: "aquí la maestra es usted esta noche", en: "tonight you're the teacher here", category: "other" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but… (usted: *su punto*)",
        completions: [
          { es: "él lee mejor en los dos idiomas", en: "he reads better in both languages", category: "activity" },
          { es: "el español de la casa no le quita nada al inglés", en: "the spanish at home takes nothing from the english", category: "opinion" },
          { es: "yo lo he visto explicar en español lo que leyó en inglés", en: "i've seen him explain in spanish what he read in english", category: "activity" },
          { es: "los dos idiomas se ayudan, no compiten", en: "the two languages help each other, they don't compete", category: "opinion" },
          { es: "él necesita oírla a usted, no a un libro", en: "he needs to hear you, not a book", category: "other" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "que esta noche le pida que le lea en español", en: "that tonight you ask him to read to you in spanish", category: "activity" },
          { es: "que usted le cuente algo y él lo escriba en inglés", en: "that you tell him something and he writes it in english", category: "activity" },
          { es: "que vengan los dos el año que viene", en: "that the two of you come next year", category: "time" },
          { es: "darle mi número por si tiene preguntas", en: "giving you my number in case you have questions", category: "other" },
          { es: "que hablemos otra vez en septiembre", en: "that we talk again in september", category: "time" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said… (usted: *dijo*)",
        completions: [
          { es: "en el otoño, usted no está afuera", en: "in the fall, you're not left out", category: "time" },
          { es: "en la reunión, nadie le va a pedir que cambie su casa", en: "at the meeting, nobody is going to ask you to change your home", category: "other" },
          { es: "ese día, tenía razón en preocuparse", en: "that day, you were right to worry", category: "opinion" },
          { es: "de las cartas, ya se las mandamos en español", en: "about the letters, we send them in spanish now", category: "other" },
          { es: "hace un rato, Diego dijo lo mismo", en: "a little while ago, diego said the same thing", category: "time" },
        ],
      },
    ],
  },
  {
    day: 362,
    theme: "Los que no vuelven",
    stems: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "tres no vuelven y yo ya sé cuáles tres", en: "three aren't coming back and i know which three", category: "other" },
          { es: "llevo dos semanas sin preguntarles", en: "i've spent two weeks not asking them", category: "time" },
          { es: "esto es lo que menos me gusta de junio", en: "this is what i like least about june", category: "opinion" },
          { es: "me lo veía venir desde marzo", en: "i saw it coming back in march", category: "time" },
          { es: "no sé cómo decírselo a los demás", en: "i don't know how to tell the others", category: "activity" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "de mí no te libras tan fácil", en: "you're not getting rid of me that easy", category: "other" },
          { es: "ya te aparté la silla de septiembre", en: "i already saved your september chair", category: "time" },
          { es: "tú vuelves aunque cambien el horario", en: "you'll come back even if they change the schedule", category: "time" },
          { es: "te voy a escribir hasta que contestes", en: "i'm going to text you until you answer", category: "activity" },
          { es: "todavía me debes una tarea", en: "you still owe me one assignment", category: "activity" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "irse no es lo mismo que fracasar", en: "leaving isn't the same as failing", category: "opinion" },
          { es: "un año de clase no se borra", en: "a year of class doesn't get erased", category: "opinion" },
          { es: "yo no cuento las sillas, cuento las conversaciones", en: "i don't count chairs, i count conversations", category: "opinion" },
          { es: "volver en dos años también es volver", en: "coming back in two years is still coming back", category: "time" },
          { es: "el que se va también aprendió algo", en: "the one who leaves learned something too", category: "opinion" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "darles mi número y decirlo en serio", en: "giving them my number and meaning it", category: "other" },
          { es: "escribirles en septiembre aunque no contesten", en: "texting them in september even if they don't answer", category: "time" },
          { es: "preguntarles a qué hora sí podrían", en: "asking them what hour would actually work", category: "time" },
          { es: "no despedirme, decirles hasta pronto", en: "not saying goodbye, saying see you soon", category: "other" },
          { es: "guardarles el lugar sin decírselo", en: "holding their spot without telling them", category: "other" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "del turno de noche, por eso no pueden venir", en: "about the night shift, that's why they can't come", category: "time" },
          { es: "de las once personas, siguen siendo once", en: "about the eleven people, there are still eleven", category: "other" },
          { es: "hace un rato, no todos los que se van se rinden", en: "a little while ago, not everyone who leaves gives up", category: "opinion" },
          { es: "en abril, la hora sí importaba", en: "in april, the hour did matter", category: "time" },
          { es: "de la lista de espera, hay catorce esperando", en: "about the waiting list, fourteen are waiting", category: "other" },
        ],
      },
    ],
  },
  {
    day: 363,
    theme: "Una conversación entera",
    stems: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "no quiero ser yo la que termine esto", en: "i don't want to be the one who ends this", category: "other" },
          { es: "podríamos quedarnos otra hora", en: "we could stay another hour", category: "time" },
          { es: "el conserje ya pasó dos veces", en: "the custodian has come by twice already", category: "time" },
          { es: "esta mesa es la mejor parte de la noche", en: "this table is the best part of the night", category: "opinion" },
          { es: "no me quiero levantar todavía", en: "i don't want to get up yet", category: "activity" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "llévate las sobras, todas", en: "take the leftovers, all of them", category: "food" },
          { es: "esa olla se va contigo o conmigo", en: "that pot is going with you or with me", category: "food" },
          { es: "nadie va a lavar nada esta noche", en: "nobody is washing anything tonight", category: "activity" },
          { es: "el pan lo trajo Camila, que se lo lleve", en: "camila brought the bread, let her take it", category: "food" },
          { es: "mañana nos repartimos la culpa", en: "tomorrow we'll split the blame", category: "time" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "septiembre está a cinco meses", en: "september is five months away", category: "time" },
          { es: "no quiero prometer nada esta noche", en: "i don't want to promise anything tonight", category: "time" },
          { es: "si lo decidimos hoy lo decidimos cansadas", en: "if we decide today we decide it tired", category: "opinion" },
          { es: "prefiero hablarlo en agosto con calma", en: "i'd rather talk it through calmly in august", category: "time" },
          { es: "primero hay que preguntarles a ellos", en: "first we have to ask them", category: "activity" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "el mismo salón, la misma hora", en: "the same room, the same hour", category: "time" },
          { es: "que Yesenia dé la primera clase de septiembre", en: "that yesenia teach the first class in september", category: "activity" },
          { es: "no cambiar nada y ver qué pasa", en: "not changing anything and seeing what happens", category: "other" },
          { es: "preguntarles a ellos qué quieren", en: "asking them what they want", category: "activity" },
          { es: "que vengamos las cuatro otra vez", en: "that the four of us come again", category: "other" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "hace una hora, sí, hagámoslo otra vez", en: "an hour ago, yes, let's do it again", category: "time" },
          { es: "cuando llegaste, este salón se llena solo", en: "when you got here, this room fills up on its own", category: "other" },
          { es: "de las conversaciones, hoy conté cuatro", en: "about the conversations, i counted four today", category: "other" },
          { es: "del horario, a las siete o nada", en: "about the schedule, seven o'clock or nothing", category: "time" },
          { es: "en la puerta, sí valió la pena", en: "at the door, yes it was worth it", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 364,
    theme: "Cerrar el salón",
    stems: [
      {
        stem: "La verdad es que…",
        english: "Honestly… / The truth is…",
        completions: [
          { es: "esta noche no voy a poder dormir", en: "i'm not going to be able to sleep tonight", category: "time" },
          { es: "se me hizo corta", en: "it went by fast for me", category: "time" },
          { es: "mañana voy a extrañar el ruido", en: "tomorrow i'm going to miss the noise", category: "other" },
          { es: "tengo hambre y no comí nada", en: "i'm hungry and i didn't eat anything", category: "food" },
          { es: "no quiero apagar las luces todavía", en: "i don't want to turn the lights off yet", category: "activity" },
        ],
      },
      {
        stem: "Te estoy tomando el pelo",
        english: "I'm teasing you / I'm pulling your leg",
        completions: [
          { es: "tú llevas las sillas y yo saco la basura", en: "you take the chairs and i'll take out the trash", category: "activity" },
          { es: "la llave la tienes tú desde marzo", en: "you've had the key since march", category: "time" },
          { es: "mañana no vengo ni por un incendio", en: "i'm not coming in tomorrow even for a fire", category: "time" },
          { es: "esas sillas las apilaste mal a propósito", en: "you stacked those chairs wrong on purpose", category: "activity" },
          { es: "el año que viene traes tú la comida", en: "next year you bring the food", category: "food" },
        ],
      },
      {
        stem: "Entiendo tu punto, pero…",
        english: "I get your point, but…",
        completions: [
          { es: "no voy a dejar la olla aquí hasta el lunes", en: "i'm not leaving the pot here until monday", category: "food" },
          { es: "esas sillas no caben en ese armario", en: "those chairs don't fit in that closet", category: "other" },
          { es: "yo apago las luces y tú cierras", en: "i'll turn off the lights and you lock up", category: "activity" },
          { es: "el conserje ya se fue hace media hora", en: "the custodian left half an hour ago", category: "time" },
          { es: "mañana es sábado y no vuelvo", en: "tomorrow is saturday and i'm not coming back", category: "time" },
        ],
      },
      {
        stem: "Lo primero que se me ocurre es…",
        english: "The first thing that comes to mind is…",
        completions: [
          { es: "apuntar el nombre de la mamá de Yesenia", en: "writing down yesenia's mom's name", category: "other" },
          { es: "mandarle un mensaje a Camila para que llegue bien", en: "texting camila so she gets home safe", category: "other" },
          { es: "que la lista de espera todavía existe", en: "that the waiting list still exists", category: "other" },
          { es: "dormir hasta las diez mañana", en: "sleeping until ten tomorrow", category: "time" },
          { es: "no revisar el correo hasta el lunes", en: "not checking email until monday", category: "activity" },
        ],
      },
      {
        stem: "Volviendo a lo que dijiste…",
        english: "Going back to what you said…",
        completions: [
          { es: "junto a la copiadora en abril, tenías razón", en: "by the copier in april, you were right", category: "time" },
          { es: "ese lunes, fuimos las dos y por eso movieron la hora", en: "that monday, we both went and that's why they moved the hour", category: "time" },
          { es: "hace meses, el pasillo decidió más que la sala", en: "months ago, the hallway decided more than the room", category: "opinion" },
          { es: "de la coordinadora, sí sirvió hablarle primero", en: "about the coordinator, talking to her first did help", category: "activity" },
          { es: "cuando empezó todo esto, con dos alcanzaba", en: "when all of this started, two was enough", category: "other" },
        ],
      },
    ],
  },
];
