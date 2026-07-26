import type { SentenceFormerDay } from "../../sentenceFormer/types";

/**
 * Primavera Week 7 — "Cambiar de registro" (days 316–322).
 * Stems must match content/drafts/primavera/week7-frames.ts for the same day.
 */
export const priWeek7SentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 316,
    theme: "Ensayando con Rocío",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "disculpe, ¿tendría un momento antes de que empiece la fila?", en: "excuse me, would you have a moment before the line starts?", category: "other" },
          { es: "disculpe, señora, ¿tendría un momento para sentarnos?", en: "excuse me, ma'am, would you have a moment to sit down?", category: "other" },
          { es: "disculpe, ¿tendría un momentito?", en: "excuse me, would you have a quick moment?", category: "other" },
          { es: "no le quito mucho tiempo", en: "i won't take much of your time", category: "time" },
          { es: "¿tendría un momento después de clase?", en: "would you have a moment after class?", category: "time" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "yusuf ha mejorado mucho en participar", en: "yusuf has improved a lot in participating", category: "other" },
          { es: "su hija es de las que ayudan sin que se lo pidan", en: "her daughter is one of those who help without being asked", category: "other" },
          { es: "me gusta cómo pregunta en clase", en: "i like how she asks questions in class", category: "opinion" },
          { es: "su hijo lee más que en septiembre", en: "her son reads more than in september", category: "other" },
          { es: "tengo buenas noticias de esta semana", en: "i have good news from this week", category: "other" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "por qué cambiamos el horario", en: "why we changed the schedule", category: "other" },
          { es: "es un poco largo", en: "it's a little long", category: "other" },
          { es: "cómo leemos en esta clase", en: "how we read in this class", category: "activity" },
          { es: "cómo funciona la tarea", en: "how the homework works", category: "activity" },
          { es: "antes de mostrarle la carpeta", en: "before showing you the folder", category: "activity" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "señora martínez", en: "mrs. martínez", category: "other" },
          { es: "y por venir hoy", en: "and for coming today", category: "time" },
          { es: "sé que trabaja hasta tarde", en: "i know you work late", category: "time" },
          { es: "de verdad", en: "really", category: "other" },
          { es: "y por las preguntas", en: "and for the questions", category: "other" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "con permiso… ¿tendría un momento?", en: "excuse me… would you have a moment?", category: "other" },
          { es: "no quise interrumpir", en: "i didn't mean to interrupt", category: "other" },
          { es: "me equivoqué de nombre hace un momento", en: "i got the name wrong a moment ago", category: "other" },
          { es: "¿puedo pasar un segundo?", en: "can i come in for a second?", category: "other" },
          { es: "disculpe, me corrijo", en: "excuse me, let me correct myself", category: "other" },
        ],
      },
    ],
  },
  {
    day: 317,
    theme: "La primera madre",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "disculpe, ¿tendría un momento? la mesa está por aquí", en: "excuse me, would you have a moment? the table is over here", category: "other" },
          { es: "disculpe, señora lópez, ¿tendría un momento ahora?", en: "excuse me, mrs. lópez, would you have a moment now?", category: "other" },
          { es: "disculpe — ¿tendría un momentito?", en: "excuse me — would you have a quick moment?", category: "other" },
          { es: "le explico en dos minutos", en: "i'll explain in two minutes", category: "time" },
          { es: "preferiría que nos sentáramos", en: "i'd prefer we sit down", category: "activity" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "mateo lee en voz alta sin miedo ahora", en: "mateo reads aloud without fear now", category: "activity" },
          { es: "participa más que en septiembre", en: "he participates more than in september", category: "other" },
          { es: "me escribe cosas interesantes en el cuaderno", en: "he writes interesting things in his notebook", category: "activity" },
          { es: "ha mejorado en lectura", en: "he has improved in reading", category: "other" },
          { es: "me pide ayuda después de clase", en: "he asks me for help after class", category: "activity" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "cómo leemos aquí? no es como en su país", en: "how we read here? it's not like in your country", category: "other" },
          { es: "la tarea de esta semana", en: "this week's homework", category: "activity" },
          { es: "por qué no hay nota todavía", en: "why there isn't a grade yet", category: "other" },
          { es: "cómo puede ayudarlo en casa", en: "how she can help him at home", category: "activity" },
          { es: "el sistema de lectura", en: "the reading system", category: "other" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "sé que tiene otro hijo en tercero", en: "i know you have another child in third grade", category: "other" },
          { es: "y por las preguntas", en: "and for the questions", category: "other" },
          { es: "de verdad", en: "really", category: "other" },
          { es: "y por venir", en: "and for coming", category: "other" },
          { es: "la llamo si hay novedad", en: "i'll call if there's news", category: "activity" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "disculpe, ¿cómo se pronuncia su apellido?", en: "excuse me, how do you pronounce your last name?", category: "other" },
          { es: "con permiso — busco la carpeta de mateo", en: "excuse me — i'm looking for mateo's folder", category: "activity" },
          { es: "me equivoqué — quería decir lectura, no matemáticas", en: "i misspoke — i meant reading, not math", category: "other" },
          { es: "disculpe, no quise sonar fría", en: "excuse me, i didn't mean to sound cold", category: "opinion" },
          { es: "¿prefiere que hablemos más despacio?", en: "would you prefer we speak more slowly?", category: "activity" },
        ],
      },
    ],
  },
  {
    day: 318,
    theme: "Un momento difícil",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "disculpe, ¿tendría un momento más? no hemos terminado", en: "excuse me, would you have a moment more? we haven't finished", category: "time" },
          { es: "disculpe, señora — ¿tendría cinco minutos más?", en: "excuse me, ma'am — would you have five more minutes?", category: "time" },
          { es: "disculpe, ¿tendría un momento?", en: "excuse me, would you have a moment?", category: "other" },
          { es: "preferiría que nos sentáramos", en: "i'd prefer we sit down", category: "activity" },
          { es: "no hemos terminado de hablar", en: "we haven't finished talking", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "su hijo no es vago — le cuesta la lectura en inglés", en: "your son isn't lazy — english reading is hard for him", category: "other" },
          { es: "entrega la tarea, aunque tarde", en: "he turns in homework, even if late", category: "activity" },
          { es: "me pide ayuda después de clase", en: "he asks me for help after class", category: "activity" },
          { es: "entiende cuando le leo en voz alta", en: "he understands when i read aloud to him", category: "activity" },
          { es: "sola, se traba", en: "alone, he gets stuck", category: "other" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "cómo calculamos la nota", en: "how we calculate the grade", category: "other" },
          { es: "qué puede hacer en casa", en: "what she can do at home", category: "activity" },
          { es: "no es que no quiera aprender", en: "it's not that she doesn't want to learn", category: "opinion" },
          { es: "por qué la nota se ve así", en: "why the grade looks like this", category: "other" },
          { es: "qué apoyo hay en el colegio", en: "what support there is at school", category: "other" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "entiendo que esto no es fácil", en: "i understand this isn't easy", category: "opinion" },
          { es: "y por escucharme", en: "and for listening to me", category: "other" },
          { es: "la llamo la semana que viene", en: "i'll call you next week", category: "time" },
          { es: "y por venir hoy", en: "and for coming today", category: "time" },
          { es: "podemos hablar otra vez si quiere", en: "we can talk again if you'd like", category: "activity" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "disculpe, déjeme decirlo de otra forma", en: "excuse me, let me say it another way", category: "other" },
          { es: "con permiso — ¿prefiere que hablemos con un intérprete?", en: "excuse me — would you prefer we speak with an interpreter?", category: "activity" },
          { es: "disculpe, no quise sonar fría. le explico mejor", en: "excuse me, i didn't mean to sound cold. let me explain better", category: "opinion" },
          { es: "¿puedo repetirlo más despacio?", en: "can i repeat it more slowly?", category: "activity" },
          { es: "me equivoqué de palabra", en: "i used the wrong word", category: "other" },
        ],
      },
    ],
  },
  {
    day: 319,
    theme: "La misma frase, en tú",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "necesito contarte la conferencia", en: "i need to tell you about the conference", category: "other" },
          { es: "con la mamá dije *disculpe, ¿tendría?*", en: "with the mother i said *excuse me, would you?*", category: "other" },
          { es: "te cuento lo mismo en tú", en: "i'll tell you the same thing in tú", category: "other" },
          { es: "tengo que desahogarme", en: "i need to vent", category: "other" },
          { es: "¿estás en el café?", en: "are you at the café?", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "casi lloro con la tercera madre", en: "i almost cried with the third mother", category: "other" },
          { es: "con ella dije *le quería comentar*", en: "with her i said *le quería comentar*", category: "other" },
          { es: "funcionó. de usted, todo el rato", en: "it worked. usted the whole time", category: "other" },
          { es: "no cambié al inglés", en: "i didn't switch to english", category: "other" },
          { es: "rocío tenía razón con el ensayo", en: "rocío was right about rehearsing", category: "opinion" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "lo que le dije sobre las notas", en: "what i told her about the grades", category: "other" },
          { es: "por qué me costó tanto", en: "why it was so hard for me", category: "opinion" },
          { es: "cómo calculamos la nota", en: "how we calculate the grade", category: "other" },
          { es: "la diferencia entre *dejas* y *permite*", en: "the difference between *dejas* and *permite*", category: "other" },
          { es: "lo de la mamá de daniela", en: "what happened with daniela's mother", category: "other" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "me escuchaste media hora", en: "you listened for half an hour", category: "time" },
          { es: "a las mamás: *por su tiempo.* a ti: *por tu tiempo.*", en: "to the mothers: *your time (formal).* to you: *your time (informal).*", category: "other" },
          { es: "necesitaba desahogarme", en: "i needed to vent", category: "other" },
          { es: "sin ti no habría ensayado", en: "without you i wouldn't have rehearsed", category: "other" },
          { es: "por aguantarme el usted todo el día", en: "for putting up with my usted talk all day", category: "other" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "casi le digo *con permiso* al mesero", en: "i almost said *excuse me* to the waiter", category: "other" },
          { es: "¿te cuento la parte difícil?", en: "can i tell you the hard part?", category: "other" },
          { es: "con permiso con las mamás; *oye, perdona* contigo", en: "*excuse me* with the mothers; *hey, sorry* with you", category: "other" },
          { es: "llevo usted en la cabeza", en: "i've got usted stuck in my head", category: "other" },
          { es: "¿te interrumpo el café?", en: "am i interrupting your coffee?", category: "food" },
        ],
      },
    ],
  },
  {
    day: 320,
    theme: "Cambiando en seco",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "disculpe, ¿tendría un momento? — ah, camila, ¿tienes un momento?", en: "excuse me, would you? — oh, camila, do you have a moment?", category: "other" },
          { es: "la última mamá acaba de salir", en: "the last mother just left", category: "time" },
          { es: "disculpe, señora — gracias. oye, camila, ¿tienes un momento?", en: "excuse me, ma'am — thank you. hey, camila, do you have a moment?", category: "other" },
          { es: "mismo pasillo, otro registro", en: "same hallway, different register", category: "other" },
          { es: "cambié en seco", en: "i switched on a dime", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "la misma frase suena distinta en usted", en: "the same phrase sounds different in usted", category: "other" },
          { es: "ya no me cuesta tanto el *le quería*", en: "the *le quería* doesn't cost me as much anymore", category: "other" },
          { es: "casi me da un infarto con la de las notas", en: "the grades one almost gave me a heart attack", category: "other" },
          { es: "le dije *le quería* y a ti *te quería* en la misma hora", en: "i said *le quería* to her and *te quería* to you in the same hour", category: "time" },
          { es: "funcionó con todas las mamás", en: "it worked with all the mothers", category: "other" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "lo de la nota de mateo", en: "what happened with mateo's grade", category: "other" },
          { es: "por qué me tembló la voz", en: "why my voice shook", category: "other" },
          { es: "¿me permite explicarle? con la mamá. ¿me dejas explicarte? contigo", en: "may i explain? with the mother. can i explain? with you", category: "other" },
          { es: "cómo me salvó esa frase", en: "how that phrase saved me", category: "other" },
          { es: "lo que pasó en el pasillo", en: "what happened in the hallway", category: "other" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "muchas gracias por su tiempo — y a ti, muchas gracias por tu tiempo", en: "thank you for your time (formal) — and to you, thank you for your time (informal)", category: "other" },
          { es: "dije *su tiempo* ocho veces hoy. *tu tiempo* una, contigo", en: "i said *your time (formal)* eight times today. *your time (informal)* once, with you", category: "time" },
          { es: "sin ti no habría ensayado", en: "without you i wouldn't have rehearsed", category: "other" },
          { es: "por escucharme entre conferencias", en: "for listening to me between conferences", category: "time" },
          { es: "y por enseñarme a cambiar en seco", en: "and for teaching me to switch on a dime", category: "other" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "casi le digo *oye* a la directora", en: "i almost said *hey* to the principal", category: "other" },
          { es: "con permiso en la puerta; oye, perdona en el café", en: "*excuse me* at the door; *hey, sorry* at the café", category: "other" },
          { es: "¿practicamos otra vez la de *¿me permite?*", en: "shall we practice *may i explain* again?", category: "activity" },
          { es: "¿acabas de verme cambiar en seco?", en: "did you just see me switch on a dime?", category: "other" },
          { es: "llevo usted en los músculos", en: "i've got usted in my muscles", category: "other" },
        ],
      },
    ],
  },
  {
    day: 321,
    theme: "La conferencia entera",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "disculpe, ¿tendría un momento? — la abrió once veces hoy", en: "excuse me, would you? — she opened with it eleven times today", category: "time" },
          { es: "oye, ¿tienes un momento? son las cuatro y sigo en usted en la cabeza", en: "hey, do you have a moment? it's four and i still have usted in my head", category: "time" },
          { es: "disculpe, ¿tendría un momentito? funcionó con todas", en: "excuse me, would you have a quick moment? it worked with all of them", category: "other" },
          { es: "seis horas de conferencias", en: "six hours of conferences", category: "time" },
          { es: "once familias hoy", en: "eleven families today", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "así empecé las once conferencias", en: "that's how i started all eleven conferences", category: "other" },
          { es: "hoy no cambié al inglés ni una vez", en: "today i didn't switch to english once", category: "other" },
          { es: "su hijo me hace reír — se lo dije en serio", en: "her son makes me laugh — i told her seriously", category: "other" },
          { es: "cada mamá escuchó algo bueno primero", en: "every mother heard something good first", category: "other" },
          { es: "el usted ya no suena a disfraz", en: "usted doesn't sound like a costume anymore", category: "opinion" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "por qué esa frase me salvó", en: "why that phrase saved me", category: "other" },
          { es: "la usé cuando no sabía qué decir", en: "i used it when i didn't know what to say", category: "other" },
          { es: "¿me permite explicarle el horario — otra vez, otra familia", en: "may i explain the schedule — again, another family", category: "other" },
          { es: "compra tiempo y organiza", en: "it buys time and organizes you", category: "other" },
          { es: "la mamá respira cuando la digo", en: "the mother breathes when i say it", category: "other" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "muchas gracias por su tiempo — la cerré once veces", en: "thank you for your time (formal) — i closed with it eleven times", category: "time" },
          { es: "muchas gracias por tu tiempo, camila. me ayudaste a ensayar", en: "thank you for your time, camila. you helped me rehearse", category: "other" },
          { es: "muchas gracias por su tiempo — y la mamá sonrió al final", en: "thank you for your time — and the mother smiled at the end", category: "other" },
          { es: "cada cierre sonó de verdad", en: "every closing sounded real", category: "opinion" },
          { es: "su tiempo once, tu tiempo una", en: "your time (formal) eleven times, your time (informal) once", category: "other" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "disculpe, me equivoqué de carpeta — me corregí y seguí", en: "excuse me, wrong folder — i corrected myself and kept going", category: "other" },
          { es: "oye, perdona — ¿te cuento la de las dos y media?", en: "hey, sorry — can i tell you about the two-thirty one?", category: "time" },
          { es: "con permiso — la fila seguía y yo seguía en usted", en: "excuse me — the line kept going and i stayed in usted", category: "other" },
          { es: "un error no significa cambiar al inglés", en: "a mistake doesn't mean switching to english", category: "opinion" },
          { es: "me equivoqué de nombre y seguí", en: "i got the name wrong and kept going", category: "other" },
        ],
      },
    ],
  },
  {
    day: 322,
    theme: "Repaso: Cambiar de registro",
    stems: [
      {
        stem: "Oye, ¿tienes un momento?",
        english: "Hey, do you have a moment?",
        completions: [
          { es: "oye, ¿tienes un momento? — contigo. disculpe, ¿tendría? — con una mamá", en: "hey, do you have a moment? — with you. excuse me, would you? — with a mother", category: "other" },
          { es: "disculpe, ¿tendría un momento? la practiqué doce veces esta semana", en: "excuse me, would you? i practiced it twelve times this week", category: "time" },
          { es: "oye, ¿tienes un momento? ya no suena a disfraz", en: "hey, do you have a moment? it doesn't sound like a costume anymore", category: "other" },
          { es: "tú con amigas, usted con familias", en: "tú with friends, usted with families", category: "other" },
          { es: "la practiqué con rocío primero", en: "i practiced it with rocío first", category: "other" },
        ],
      },
      {
        stem: "Te quería comentar que…",
        english: "I wanted to tell you that…",
        completions: [
          { es: "aprendí a cambiar sin pensar", en: "i learned to switch without thinking", category: "other" },
          { es: "le quería comentar que… — *le* con usted, *te* contigo", en: "le quería comentar que… — *le* with usted, *te* with you", category: "other" },
          { es: "la misma frase en dos formas me cambió la semana", en: "the same phrase in two forms changed my week", category: "other" },
          { es: "el resto de la oración no cambia", en: "the rest of the sentence doesn't change", category: "other" },
          { es: "tercer usted del año y ya suena mío", en: "third usted of the year and it already sounds mine", category: "other" },
        ],
      },
      {
        stem: "¿Me dejas explicarte?",
        english: "Can I explain to you?",
        completions: [
          { es: "¿me dejas explicarte? contigo. ¿me permite explicarle? con una familia", en: "can i explain? with you. may i explain? with a family", category: "other" },
          { es: "¿me permite explicarle? — me compró tiempo once veces", en: "may i explain? — it bought me time eleven times", category: "time" },
          { es: "¿me dejas explicarte por qué *permite* suena tan formal?", en: "can i explain why *permite* sounds so formal?", category: "other" },
          { es: "dejas / permite — mismo permiso", en: "dejas / permite — same permission", category: "other" },
          { es: "explicarte / explicarle — te o le", en: "explain to you / explain to you — te or le", category: "other" },
        ],
      },
      {
        stem: "Muchas gracias por tu tiempo",
        english: "Thank you so much for your time",
        completions: [
          { es: "muchas gracias por tu tiempo — camila. muchas gracias por su tiempo — señora", en: "thank you for your time — camila. thank you for your time — ma'am", category: "other" },
          { es: "muchas gracias por su tiempo: lo dije al cerrar cada conferencia", en: "thank you for your time: i said it closing every conference", category: "other" },
          { es: "muchas gracias por tu tiempo por escucharme repasar", en: "thank you for your time for listening to me review", category: "other" },
          { es: "tu / su — una palabra, todo el registro", en: "your / your — one word, whole register", category: "other" },
          { es: "cierra bien las dos conversaciones", en: "it closes both kinds of conversation well", category: "other" },
        ],
      },
      {
        stem: "Oye, perdona…",
        english: "Hey, sorry… / Excuse me…",
        completions: [
          { es: "oye, perdona — contigo. con permiso — con un padre en el pasillo", en: "hey, sorry — with you. excuse me — with a father in the hallway", category: "other" },
          { es: "con permiso… ¿tendría un momento? — abre en usted", en: "excuse me… would you? — opens in usted", category: "other" },
          { es: "oye, perdona, ¿repasamos los cinco otra vez?", en: "hey, sorry, shall we review the five again?", category: "activity" },
          { es: "la misma frase, dos formas", en: "the same phrase, two forms", category: "other" },
          { es: "ninguna es traducción del inglés", en: "neither one is a translation from english", category: "other" },
        ],
      },
    ],
  },
];
