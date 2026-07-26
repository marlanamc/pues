import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Invierno Week 6 — "Cuando llegues…" (days 218–224).
 * Stems must match content/drafts/invierno/week6-frames.ts for the same day.
 */
export const invWeek6SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 218,
    theme: "Cuando pare la nieve",
    stems: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        completions: [
          { es: "pare la nieve, salimos a ver cómo quedó todo", en: "the snow stops, we'll go see how everything looks", category: "time" },
          { es: "llegue a casa, te mando un audio", en: "i get home, i'll send you a voice note", category: "time" },
          { es: "sepan algo del colegio, nos avisan", en: "they know something from the school, they'll let us know", category: "other" },
          { es: "termine de nevar, hay que palear", en: "it stops snowing, we'll have to shovel", category: "activity" },
          { es: "amanezca, vemos cuánto cayó", en: "it gets light, we'll see how much fell", category: "time" },
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        completions: [
          { es: "empiece a nevar, cierran las escuelas", en: "it starts snowing, they close the schools", category: "time" },
          { es: "me entere, te escribo", en: "i find out, i'll write you", category: "activity" },
          { es: "termine el turno, camila se va a casa", en: "her shift ends, camila goes home", category: "time" },
          { es: "salga del trabajo, paso por el súper", en: "i get off work, i'll stop by the store", category: "activity" },
          { es: "haya aviso, lo mando al grupo", en: "there's a notice, i'll send it to the group", category: "activity" },
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        completions: [
          { es: "pase la tormenta, no salgo", en: "the storm passes, i'm not going out", category: "time" },
          { es: "llegue la máquina quitanieve, estamos encerrados", en: "the plow comes, we're stuck inside", category: "time" },
          { es: "amanezca, nadie maneja", en: "it gets light, nobody drives", category: "time" },
          { es: "deje de nevar, no se puede ni ver", en: "it stops snowing, you can't even see", category: "other" },
          { es: "vuelva la luz, nos quedamos con velas", en: "the power comes back, we're on candles", category: "other" },
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        completions: [
          { es: "empiece, quiero llegar a casa", en: "it starts, i want to get home", category: "time" },
          { es: "cierren las tiendas, hay que comprar algo", en: "the stores close, we need to buy something", category: "activity" },
          { es: "oscurezca, traigan la pala", en: "it gets dark, bring the shovel", category: "time" },
          { es: "se ponga peor, salgo del colegio", en: "it gets worse, i'll leave school", category: "time" },
          { es: "se llene el súper, voy ahora", en: "the store fills up, i'll go now", category: "activity" },
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        completions: [
          { es: "quiten la nieve, vamos por el pan", en: "they clear the snow, we'll go get bread", category: "food" },
          { es: "salga el sol, esto se convierte en hielo", en: "the sun comes out, this turns to ice", category: "other" },
          { es: "pueda, te llamo desde el hospital", en: "i can, i'll call you from the hospital", category: "activity" },
          { es: "abra el súper, hago la compra", en: "the store opens, i'll do the shopping", category: "food" },
          { es: "tenga un rato, te cuento todo", en: "i have a minute, i'll tell you everything", category: "time" },
        ],
      },
    ],
  },
  {
    day: 219,
    theme: "En cuanto cancelen",
    stems: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        completions: [
          { es: "anuncien el cierre, se acaba la incertidumbre", en: "they announce the closure, the uncertainty ends", category: "time" },
          { es: "suene el teléfono a las cinco, ya sabemos qué es", en: "the phone rings at five, we already know what it is", category: "time" },
          { es: "sea oficial, aviso a las familias", en: "it's official, i'll notify the families", category: "activity" },
          { es: "lo digan en la radio, es verdad", en: "they say it on the radio, it's real", category: "other" },
          { es: "lo vea escrito, me lo creo", en: "i see it in writing, i'll believe it", category: "opinion" },
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        completions: [
          { es: "cancelen, mando el mensaje al grupo", en: "they cancel, i'll send the message to the group", category: "activity" },
          { es: "salga en las noticias, todo el mundo lo sabe", en: "it's on the news, everyone knows", category: "other" },
          { es: "me despierte, reviso el celular", en: "i wake up, i'll check my phone", category: "activity" },
          { es: "lo confirmen, vuelvo a dormir", en: "they confirm it, i'll go back to sleep", category: "time" },
          { es: "lo sepa rocío, me escribe", en: "rocío knows, she'll message me", category: "other" },
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        completions: [
          { es: "digan algo, no preparo nada", en: "they say something, i'm not preparing anything", category: "activity" },
          { es: "sean las cinco, no me duermo", en: "it's five o'clock, i won't fall asleep", category: "time" },
          { es: "se confirme, los papás no organizan nada", en: "it's confirmed, the parents won't organize anything", category: "other" },
          { es: "haya un correo oficial, no cuenta", en: "there's an official email, it doesn't count", category: "other" },
          { es: "lo diga la directora, es rumor", en: "the principal says it, it's a rumor", category: "opinion" },
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        completions: [
          { es: "anuncien, quiero tener listo el plan", en: "they announce it, i want the plan ready", category: "activity" },
          { es: "me pregunten, voy a escribirles", en: "they ask me, i'll write to them", category: "activity" },
          { es: "se pongan malas las calles, salgo temprano", en: "the roads get bad, i'll leave early", category: "time" },
          { es: "amanezca, dejo todo listo", en: "it gets light, i'll have everything ready", category: "time" },
          { es: "se llene el grupo de mensajes, mando el mío", en: "the group fills with messages, i'll send mine", category: "activity" },
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        completions: [
          { es: "lo confirmen, te aviso", en: "they confirm it, i'll let you know", category: "activity" },
          { es: "lo vea, te reenvío el mensaje", en: "i see it, i'll forward you the message", category: "activity" },
          { es: "aclare, miro cuánta nieve cayó", en: "it clears up, i'll see how much snow fell", category: "time" },
          { es: "suene la alarma, reviso las noticias", en: "the alarm goes off, i'll check the news", category: "activity" },
          { es: "sepa algo, no me lo guardo", en: "i know anything, i won't keep it to myself", category: "other" },
        ],
      },
    ],
  },
  {
    day: 220,
    theme: "Hasta que pase la tormenta",
    stems: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        completions: [
          { es: "deje de nevar, esto va a estar precioso", en: "it stops snowing, this is going to be beautiful", category: "opinion" },
          { es: "vuelva la luz, pongo café", en: "the power comes back, i'll put coffee on", category: "food" },
          { es: "pueda salir, la primera parada es la panadería", en: "i can go out, the first stop is the bakery", category: "food" },
          { es: "se seque el piso, entro las botas", en: "the floor dries, i'll bring the boots in", category: "activity" },
          { es: "haya wifi otra vez, trabajo un rato", en: "there's wifi again, i'll work for a bit", category: "activity" },
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        completions: [
          { es: "me levante, miro por la ventana", en: "i get up, i'll look out the window", category: "activity" },
          { es: "limpien la calle, salgo a caminar", en: "they clear the street, i'll go out for a walk", category: "activity" },
          { es: "tenga señal, te mando fotos", en: "i have signal, i'll send you photos", category: "activity" },
          { es: "pare el viento, abro la puerta", en: "the wind stops, i'll open the door", category: "time" },
          { es: "haya pan, hago desayuno de verdad", en: "there's bread, i'll make a real breakfast", category: "food" },
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        completions: [
          { es: "pase la tormenta, no me muevo de aquí", en: "the storm passes, i'm not moving from here", category: "time" },
          { es: "digan que es seguro, nadie maneja", en: "they say it's safe, nobody drives", category: "other" },
          { es: "llegue el domingo, vamos a estar así", en: "sunday comes, we'll be like this", category: "time" },
          { es: "quiten la nieve de la entrada, no sale el carro", en: "they clear the driveway, the car isn't going anywhere", category: "other" },
          { es: "se calme un poco, no vale la pena salir", en: "it calms down a bit, it's not worth going out", category: "opinion" },
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        completions: [
          { es: "se haga de noche, hay que echar sal", en: "it gets dark, we should put salt down", category: "time" },
          { es: "suba el viento, cierren bien las ventanas", en: "the wind picks up, close the windows properly", category: "activity" },
          { es: "se acabe la comida, cocinamos algo grande", en: "the food runs out, we'll cook something big", category: "food" },
          { es: "se congele todo, quito la nieve de la escalera", en: "everything freezes, i'll clear the steps", category: "activity" },
          { es: "se vaya la luz otra vez, cargo el celular", en: "the power goes out again, i'll charge my phone", category: "activity" },
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        completions: [
          { es: "termine, salgo con la pala", en: "it stops, i'll go out with the shovel", category: "activity" },
          { es: "pase la máquina, movemos el carro", en: "the plow goes by, we'll move the car", category: "activity" },
          { es: "se desocupe camila, hablamos", en: "camila is free, we'll talk", category: "time" },
          { es: "vea la calle limpia, aviso al grupo", en: "i see the street clear, i'll tell the group", category: "activity" },
          { es: "salga alguien más, salgo yo también", en: "someone else goes out, i'll go out too", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 221,
    theme: "Antes de que se congelen las tuberías",
    stems: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        completions: [
          { es: "me devuelva la llamada, le explico todo", en: "he calls me back, i'll explain everything", category: "activity" },
          { es: "baje de menos diez, el riesgo es real", en: "it drops below minus ten, the risk is real", category: "other" },
          { es: "venga alguien, le muestro dónde gotea", en: "someone comes, i'll show them where it drips", category: "activity" },
          { es: "conteste, no cuelgo hasta terminar", en: "he answers, i won't hang up until i'm done", category: "activity" },
          { es: "lo arreglen, escribo el reporte", en: "they fix it, i'll write the report", category: "activity" },
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        completions: [
          { es: "conteste, le digo que es urgente", en: "he answers, i'll tell him it's urgent", category: "activity" },
          { es: "cuelgue, te cuento cómo me fue", en: "i hang up, i'll tell you how it went", category: "activity" },
          { es: "lo arreglen, dejo de preocuparme", en: "they fix it, i'll stop worrying", category: "opinion" },
          { es: "abra la oficina, vuelvo a llamar", en: "the office opens, i'll call again", category: "time" },
          { es: "me den una hora, la anoto", en: "they give me a time, i'll write it down", category: "time" },
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        completions: [
          { es: "venga alguien, no me quedo tranquila", en: "someone comes, i won't relax", category: "opinion" },
          { es: "me den una hora, voy a insistir", en: "they give me a time, i'm going to keep at it", category: "activity" },
          { es: "salga tibia, dejo el agua corriendo", en: "it runs warm, i'll leave the water running", category: "activity" },
          { es: "lo revisen, no apago la calefacción", en: "they check it, i won't turn off the heat", category: "activity" },
          { es: "conteste el casero, sigo marcando", en: "the landlord answers, i'll keep dialing", category: "activity" },
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        completions: [
          { es: "se congelen las tuberías, llamo", en: "the pipes freeze, i'm calling", category: "activity" },
          { es: "sea una emergencia, mejor avisar", en: "it's an emergency, better to give warning", category: "opinion" },
          { es: "llegue el fin de semana, quiero resolverlo", en: "the weekend comes, i want it sorted", category: "time" },
          { es: "baje más la temperatura, abro las llaves", en: "the temperature drops further, i'll open the taps", category: "activity" },
          { es: "se me olvide, lo dejo por escrito", en: "i forget, i'll put it in writing", category: "activity" },
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        completions: [
          { es: "me responda, te aviso", en: "he gets back to me, i'll let you know", category: "activity" },
          { es: "amanezca, vuelvo a llamar", en: "it's morning, i'll call again", category: "time" },
          { es: "lo revisen, mando el reporte por escrito", en: "they check it, i'll send the report in writing", category: "activity" },
          { es: "sepa algo, te mando un audio", en: "i know something, i'll send you a voice note", category: "activity" },
          { es: "entre alguien, le enseño la cocina", en: "someone comes in, i'll show them the kitchen", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 222,
    theme: "Apenas abran las calles",
    stems: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        completions: [
          { es: "terminen la calle, sacamos los carros", en: "they finish the street, we'll get the cars out", category: "activity" },
          { es: "saque el mío, te ayudo con el tuyo", en: "i get mine out, i'll help you with yours", category: "activity" },
          { es: "salgan todos, esto parece una fiesta", en: "everyone comes out, this looks like a party", category: "opinion" },
          { es: "acabe con la entrada, sigo con la banqueta", en: "i finish the driveway, i'll do the sidewalk", category: "activity" },
          { es: "tenga las manos calientes, sigo", en: "my hands are warm, i'll keep going", category: "activity" },
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        completions: [
          { es: "abran la calle, voy por comida", en: "they open the road, i'll go get food", category: "food" },
          { es: "consiga otra pala, seguimos", en: "i get another shovel, we'll keep going", category: "activity" },
          { es: "pegue el sol, se pone resbaloso", en: "the sun hits, it gets slippery", category: "other" },
          { es: "salga el vecino, empezamos los dos", en: "the neighbor comes out, we'll both start", category: "activity" },
          { es: "termine aquí, ayudo en la esquina", en: "i finish here, i'll help on the corner", category: "activity" },
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        completions: [
          { es: "quede libre la banqueta, seguimos", en: "the sidewalk's clear, we'll keep going", category: "activity" },
          { es: "se me congelen las manos, otra vez no", en: "my hands freeze, not again", category: "other" },
          { es: "terminemos todos, nadie entra", en: "we all finish, nobody goes in", category: "activity" },
          { es: "pase la máquina, no sirve de nada palear", en: "the plow goes by, shoveling is pointless", category: "opinion" },
          { es: "haya sol, esto no se derrite", en: "there's sun, this isn't melting", category: "other" },
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        completions: [
          { es: "se haga hielo, hay que quitarla", en: "it turns to ice, we have to clear it", category: "activity" },
          { es: "vuelva a nevar el domingo, terminamos", en: "it snows again sunday, we'll finish", category: "time" },
          { es: "se metan, les doy las gracias", en: "they go inside, i'll thank them", category: "activity" },
          { es: "se acabe la sal, echamos la que queda", en: "the salt runs out, we'll spread what's left", category: "activity" },
          { es: "salga el sol, hay que tener esto listo", en: "the sun comes out, this needs to be done", category: "time" },
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        completions: [
          { es: "abran las calles, manejo al colegio", en: "they open the streets, i'll drive to school", category: "activity" },
          { es: "entre en calor, sigo con el otro lado", en: "i warm up, i'll do the other side", category: "activity" },
          { es: "haya café, invito a todos", en: "there's coffee, i'll invite everyone", category: "food" },
          { es: "acabe la cuadra, me meto a descansar", en: "the block is done, i'm going in to rest", category: "activity" },
          { es: "vea el buzón, saco la correspondencia", en: "i can see the mailbox, i'll get the mail", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 223,
    theme: "Cuando volvamos",
    stems: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        completions: [
          { es: "volvamos, hay que recuperar tres días", en: "we're back, we have to make up three days", category: "time" },
          { es: "lleguen los estudiantes, empezamos donde quedamos", en: "the students arrive, we'll start where we left off", category: "activity" },
          { es: "arreglen el horario, les aviso a las familias", en: "they fix the schedule, i'll notify the families", category: "activity" },
          { es: "abran el colegio, todo va a estar frío", en: "they open the school, everything will be cold", category: "other" },
          { es: "vea a mis estudiantes, les pregunto cómo la pasaron", en: "i see my students, i'll ask how they got on", category: "activity" },
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        completions: [
          { es: "entre al colegio, busco a rocío", en: "i walk into school, i'll find rocío", category: "activity" },
          { es: "la vea, le cuento lo de la tormenta", en: "i see her, i'll tell her about the storm", category: "activity" },
          { es: "tengamos un rato, planeamos lo de marzo", en: "we have a moment, we'll plan the march thing", category: "time" },
          { es: "salga el calendario, lo mando al grupo", en: "the calendar comes out, i'll send it to the group", category: "activity" },
          { es: "termine la primera clase, respiro", en: "the first class ends, i'll breathe", category: "time" },
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        completions: [
          { es: "estemos todos, no cambio nada", en: "we're all back, i'm not changing anything", category: "activity" },
          { es: "nos pongamos al día, seguimos con lo mismo", en: "we catch up, we'll stay on the same thing", category: "activity" },
          { es: "salga el calendario nuevo, no prometo fechas", en: "the new calendar comes out, i won't promise dates", category: "time" },
          { es: "vuelvan todos los estudiantes, no doy examen", en: "all the students are back, i won't give a test", category: "activity" },
          { es: "se normalice la semana, no planeo nada nuevo", en: "the week settles down, i'm not planning anything new", category: "time" },
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        completions: [
          { es: "me lo pregunten, explico el plan", en: "they ask me, i'll explain the plan", category: "activity" },
          { es: "se acabe febrero, quiero cerrar la unidad", en: "february ends, i want to close the unit", category: "time" },
          { es: "caiga otra tormenta, recuperamos los días", en: "another storm hits, we'll make up the days", category: "time" },
          { es: "se pierdan más clases, ajusto el plan", en: "we lose more classes, i'll adjust the plan", category: "activity" },
          { es: "llegue marzo, quiero estar al día", en: "march arrives, i want to be caught up", category: "time" },
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        completions: [
          { es: "empiece la clase, se les olvida la nieve", en: "class starts, they forget about the snow", category: "activity" },
          { es: "tenga la lista, te la mando", en: "i have the list, i'll send it to you", category: "activity" },
          { es: "lo decidan, lo pongo en el calendario", en: "they decide, i'll put it in the calendar", category: "time" },
          { es: "vea a rocío, le doy un abrazo", en: "i see rocío, i'll give her a hug", category: "activity" },
          { es: "suene el timbre, todo vuelve a la normalidad", en: "the bell rings, everything goes back to normal", category: "time" },
        ],
      },
    ],
  },
  {
    day: 224,
    theme: "Repaso: Cuando llegues…",
    stems: [
      {
        stem: "Cuando…",
        english: "When … (happens)",
        completions: [
          { es: "llegue la primavera, me voy a acordar de esta semana", en: "spring comes, i'm going to remember this week", category: "time" },
          { es: "mire atrás, esto va a parecer poca cosa", en: "i look back, this will seem like nothing", category: "opinion" },
          { es: "haga calor otra vez, nadie se acuerda de la nieve", en: "it's warm again, nobody remembers the snow", category: "time" },
          { es: "termine el invierno, quiero oír la diferencia", en: "winter ends, i want to hear the difference", category: "time" },
          { es: "las diga sin pensar, ya está", en: "i say them without thinking, that's it", category: "activity" },
        ],
      },
      {
        stem: "En cuanto…",
        english: "As soon as…",
        completions: [
          { es: "termine la semana, escucho todos los audios seguidos", en: "the week ends, i'll listen to all the recordings in a row", category: "activity" },
          { es: "tenga la grabación, la comparo con la de enero", en: "i have the recording, i'll compare it with january's", category: "activity" },
          { es: "nos veamos, quiero contarte esto en persona", en: "we see each other, i want to tell you this in person", category: "activity" },
          { es: "pare de nevar, salgo a caminar sin apuro", en: "it stops snowing, i'll go walk without rushing", category: "activity" },
          { es: "empiece la semana siete, cambia el tema", en: "week seven starts, the topic changes", category: "time" },
        ],
      },
      {
        stem: "Hasta que…",
        english: "Until…",
        completions: [
          { es: "me salgan solas, voy a repetirlas", en: "they come out by themselves, i'll keep repeating them", category: "activity" },
          { es: "deje de fijarme en la forma, practico", en: "i stop noticing the form, i'll practice", category: "activity" },
          { es: "llegue marzo, seguimos así", en: "march comes, we'll keep going like this", category: "time" },
          { es: "no tenga que pensarlo, no está aprendido", en: "i don't have to think about it, it isn't learned", category: "opinion" },
          { es: "las oiga en la calle, no cuentan", en: "i hear them on the street, they don't count", category: "opinion" },
        ],
      },
      {
        stem: "Antes de que…",
        english: "Before…",
        completions: [
          { es: "se me olvide, lo escribo", en: "i forget, i'll write it down", category: "activity" },
          { es: "empiece la semana nueva, reviso las cinco", en: "the new week starts, i'll go over the five", category: "time" },
          { es: "se acabe el invierno, quiero decirlo", en: "winter ends, i want to say it", category: "time" },
          { es: "cambiemos de tema, repito las de esta semana", en: "we change topic, i'll run through this week's", category: "activity" },
          { es: "llegue el jueves, grabo el resumen", en: "thursday comes, i'll record the recap", category: "time" },
        ],
      },
      {
        stem: "Apenas…",
        english: "The moment… / As soon as…",
        completions: [
          { es: "la oiga en la calle, la voy a reconocer", en: "i hear it on the street, i'll recognize it", category: "other" },
          { es: "alguien diga \"cuando puedas\", ya sé qué viene después", en: "someone says \"cuando puedas\", i know what comes next", category: "other" },
          { es: "me pregunten, contesto sin armar la frase", en: "they ask me, i answer without building the sentence", category: "activity" },
          { es: "empiece a hablar, salen solas", en: "i start talking, they come out on their own", category: "activity" },
          { es: "vuelva a nevar, ya tengo las frases listas", en: "it snows again, i've already got the sentences ready", category: "time" },
        ],
      },
    ],
  },
];
