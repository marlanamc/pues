import type { FrameDay } from "../../frames/types";

/**
 * Invierno Week 3 — "Al teléfono" (days 197–203).
 * Story: "Sin cara, solo voz" — Camila's night shifts move the exchange to the
 * phone, and Marlana finally has to make the school calls she's been avoiding.
 *
 * Register note (convention 9): this is cell-phone Spanish, not landline
 * Spanish. No switchboards, no operators, no answering machines — dropped
 * signal, speakerphone, voicemail, calling back.
 *
 * Day 198 is deliberately **usted** (calling a student's mother), per
 * convention 3 — every frame that shifts carries a `note` saying so.
 */
export const invWeek3FrameDays: FrameDay[] = [
  {
    day: 197,
    theme: "Al teléfono: Sin cara, solo voz",
    subtitle: "Camila calls instead of coming — no lips to read, no gestures. Just voice.",
    frames: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        scenarios: ["picking up", "confirming it's her", "a faint line"],
        examples: [
          "¿Aló? Camila, ¿eres tú?",
          "¿Aló? Sí, aquí estoy, dime.",
          "¿Aló? Te oigo lejitos.",
        ],
        note: "*¿Aló?* is the standard Latin American way to answer. Mexico says *¿Bueno?*; both are current, neither is Spain's *¿Diga?*",
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        scenarios: ["rehearsing the school call", "introducing herself formally", "reassuring the person"],
        examples: [
          "Le habla Marlana Creed, del programa de inglés.",
          "Le habla la maestra de su hijo, ¿tiene un minuto?",
          "Le habla alguien del colegio, no se preocupe.",
        ],
        note: "*Le habla X* is how you identify yourself on a work call — automatically usted, and still exactly what people say.",
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        scenarios: ["answering for someone else", "taking a name", "passing the call along"],
        examples: [
          "¿De parte de quién? Para avisarle.",
          "¿De parte de quién, por favor?",
          "¿De parte de quién? Ahora la comunico.",
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        scenarios: ["a bad line", "offering to call back", "moving to a window"],
        examples: [
          "¿Me escuchas? Creo que se oye mal.",
          "¿Me escuchas bien o te llamo otra vez?",
          "¿Me escuchas? Voy a caminar hacia la ventana.",
        ],
        note: "On the phone this is the single most useful sentence you own — it buys time *and* fixes the problem.",
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        scenarios: ["apologizing after a drop", "bad timing", "calling straight back"],
        examples: [
          "Se cortó la llamada, perdona.",
          "Se cortó justo cuando ibas a decirme algo.",
          "Se cortó, pero ya volví.",
        ],
        note: "*Se cortó* blames the connection, not either person. No apology needed beyond the word itself.",
      },
    ],
  },
  {
    day: 198,
    theme: "Al teléfono: La mamá de Yusuf",
    subtitle: "Calling a student's mother — usted the whole way, and you rehearsed the first line.",
    frames: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        scenarios: ["greeting formally", "apologizing for the hour", "a weak signal"],
        examples: [
          "¿Aló? Buenas tardes, ¿hablo con la señora Amina?",
          "¿Aló? Disculpe la hora, señora.",
          "¿Aló? No la escucho bien, ¿me oye usted?",
        ],
        note: "Notice *¿hablo con…?* — the polite way to confirm you reached the right person, without demanding a name.",
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        scenarios: ["who she is", "heading off alarm", "leading with good news"],
        examples: [
          "Le habla Marlana, la maestra de inglés de Yusuf.",
          "Le habla del colegio, no es nada grave.",
          "Le habla la maestra de su hijo, tengo buenas noticias.",
        ],
        note: "*No es nada grave* early in a school call is a kindness — a parent's first thought is always the worst one.",
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        scenarios: ["leaving her name", "asking who she reached", "writing it down"],
        examples: [
          "¿De parte de quién le digo que llamé?",
          "¿De parte de quién hablo, disculpe?",
          "¿De parte de quién, para anotarlo?",
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        scenarios: ["checking the line, formally", "offering to call back", "asking her to repeat"],
        examples: [
          "¿Me escucha, señora? Se oye un poco cortado.",
          "¿Me escucha bien o la llamo más tarde?",
          "¿Me escuchas? Ya colgué con ella, te cuento.",
        ],
        note: "Today the stem shifts: with usted it becomes **¿Me escucha?** — no *s*. The third example is tú again, because the moment Marlana hangs up she calls Camila.",
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        scenarios: ["mid-explanation", "calling her back", "finishing the message"],
        examples: [
          "Se cortó cuando le estaba explicando el horario.",
          "Se cortó y la volví a llamar enseguida.",
          "Se cortó dos veces, pero terminamos.",
        ],
      },
    ],
  },
  {
    day: 199,
    theme: "Al teléfono: La persona que contesta",
    subtitle: "Calling a clinic for a student — the person who answers is never the person you need.",
    frames: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        scenarios: ["reaching a front desk", "checking she got the right number", "asking to be transferred"],
        examples: [
          "¿Aló? Buenos días, llamo de parte de una familia.",
          "¿Aló? ¿Es la clínica de la calle Center?",
          "¿Aló? ¿Me puede comunicar con la persona que agenda las citas?",
        ],
        note: "*Comunicar con* is the neutral Latin American verb for putting a call through — no switchboard vocabulary required.",
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        scenarios: ["stating her role", "why she's calling for someone else", "her school"],
        examples: [
          "Le habla Marlana, del programa de inglés para adultos.",
          "Le habla una maestra que ayuda a la familia con el idioma.",
          "Le habla del centro comunitario de Jamaica Plain.",
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        scenarios: ["the question she gets asked", "answering it", "explaining she's not family"],
        examples: [
          "¿De parte de quién? Me lo preguntaron dos veces.",
          "¿De parte de quién? De la maestra, no de la familia.",
          "¿De parte de quién? Ahí me trabé y dije mi nombre y ya.",
        ],
        note: "You'll get asked this constantly. Having the answer ready means the pause never happens.",
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        scenarios: ["on hold", "a noisy front desk", "checking they're still there"],
        examples: [
          "¿Me escuchas? Se quedó todo en silencio.",
          "¿Me escuchas? Hay mucho ruido de ese lado.",
          "¿Me escuchas todavía o me dejaron esperando?",
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        scenarios: ["dropped while on hold", "having to start over", "third attempt"],
        examples: [
          "Se cortó mientras me tenían en espera.",
          "Se cortó y tuve que explicar todo otra vez.",
          "Se cortó a la tercera llamada y ya me dio risa.",
        ],
      },
    ],
  },
  {
    day: 200,
    theme: "Al teléfono: No te escucho",
    subtitle: "Bad signal in the school hallway — repair the call instead of hanging up.",
    frames: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        scenarios: ["picking up mid-hallway", "checking the line", "stepping outside"],
        examples: [
          "¿Aló? Espérame, voy saliendo del pasillo.",
          "¿Aló? Aquí adentro no entra bien la señal.",
          "¿Aló? Ya salí, ahora sí.",
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        scenarios: ["repeating her name", "spelling it", "on the second try"],
        examples: [
          "Le habla Marlana otra vez, se nos cortó.",
          "Le habla Marlana, M de mamá, a-r-l.",
          "Le habla la misma persona de hace un minuto.",
        ],
        note: "Spelling out loud with a word per letter (*M de mamá*) is standard on the phone in Spanish.",
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        scenarios: ["not catching the name", "asking again", "the name came through broken"],
        examples: [
          "¿De parte de quién? No le entendí el nombre.",
          "¿De parte de quién, me repite por favor?",
          "¿De parte de quién? Se escuchó cortado.",
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        scenarios: ["speakerphone", "louder", "one bar of signal"],
        examples: [
          "¿Me escuchas? Te puse en altavoz.",
          "¿Me escuchas si hablo más fuerte?",
          "¿Me escuchas? Tengo una sola barra de señal.",
        ],
        note: "*El altavoz* is speakerphone; *una barra de señal* is one bar. This is the actual vocabulary of a 2026 phone call.",
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        scenarios: ["losing half a sentence", "the elevator", "switching to data"],
        examples: [
          "Se cortó y me perdí la mitad de la frase.",
          "Se cortó en el elevador, siempre pasa.",
          "Se cortó, mejor te marco por videollamada.",
        ],
      },
    ],
  },
  {
    day: 201,
    theme: "Al teléfono: Se cortó",
    subtitle: "The call drops mid-sentence — call back and pick up where you were.",
    frames: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        scenarios: ["calling straight back", "confirming she's back", "picking up the thread"],
        examples: [
          "¿Aló? Soy yo otra vez, se nos fue la llamada.",
          "¿Aló? ¿Me escuchas ahora mejor?",
          "¿Aló? ¿En qué estábamos?",
        ],
        note: "*¿En qué estábamos?* — where were we? The one sentence that rescues a dropped call without starting over.",
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        scenarios: ["re-introducing after a drop", "the third call", "apologizing for the interruptions"],
        examples: [
          "Le habla Marlana, disculpe la interrupción.",
          "Le habla otra vez la maestra de Yusuf.",
          "Le habla Marlana, ya es la tercera vez, perdón.",
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        scenarios: ["an unknown number calling back", "not recognizing the voice", "confirming"],
        examples: [
          "¿De parte de quién? Me llamó un número que no conozco.",
          "¿De parte de quién? No reconocí la voz.",
          "¿De parte de quién? Ah, sí, la esperaba.",
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        scenarios: ["testing the new line", "before restarting", "checking nothing was lost"],
        examples: [
          "¿Me escuchas ahora sin interrupciones?",
          "¿Me escuchas? Repito lo último que dije.",
          "¿Me escuchas? Dime hasta dónde llegaste.",
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        scenarios: ["naming what happened", "not her fault", "the pattern"],
        examples: [
          "Se cortó, no fuiste tú ni fui yo.",
          "Se cortó y no me dio tiempo de despedirme.",
          "Se cortó siempre en el mismo punto de la calle.",
        ],
        note: "*Se cortó* is impersonal on purpose. The connection did it. Nobody has to be sorry.",
      },
    ],
  },
  {
    day: 202,
    theme: "Al teléfono: Dejar un recado",
    subtitle: "Nobody picks up — leave a message a real person could act on.",
    frames: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        scenarios: ["reaching a person at last", "the callback", "a wrong number"],
        examples: [
          "¿Aló? Por fin alguien contesta.",
          "¿Aló? Gracias por devolverme la llamada.",
          "¿Aló? Creo que marqué mal, disculpe.",
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        scenarios: ["the voicemail opener", "leaving a number", "saying when to call back"],
        examples: [
          "Le habla Marlana Creed, del colegio de su hijo.",
          "Le habla Marlana, le dejo mi número al final.",
          "Le habla Marlana, puede llamarme hasta las cuatro.",
        ],
        note: "A voicemail in Spanish follows the same three beats as in English: who you are, why you called, when you're reachable.",
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        scenarios: ["asked by whoever takes the message", "leaving word with a coworker", "spelling the name again"],
        examples: [
          "¿De parte de quién? Dígale que de la maestra Marlana.",
          "¿De parte de quién? De la escuela, sobre el horario.",
          "¿De parte de quién? Le dejo mi nombre y mi número.",
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        scenarios: ["checking the recording is going", "before the important part", "with Camila afterward"],
        examples: [
          "¿Me escuchas? No sé si esto está grabando.",
          "¿Me escuchas? Lo importante viene ahora.",
          "¿Me escuchas? Ya dejé el recado, cuéntame cómo lo hice.",
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        scenarios: ["cut off by voicemail", "running out of time", "trying again"],
        examples: [
          "Se cortó el buzón de voz a mitad del recado.",
          "Se cortó antes de que dijera mi número.",
          "Se cortó, así que llamé y lo dejé completo.",
        ],
        note: "*El buzón de voz* is voicemail. *Me mandó al buzón* — it sent me to voicemail — is how you say it in one breath.",
      },
    ],
  },
  {
    day: 203,
    theme: "Al teléfono: Repaso",
    subtitle: "Four calls in one week, none of them in English. Say how each one went.",
    frames: [
      {
        stem: "¿Aló?",
        english: "Hello? (answering the phone)",
        scenarios: ["the word that stopped scaring her", "answering without checking who it is", "picking up in Spanish first"],
        examples: [
          "¿Aló? Ya lo digo sin pensarlo.",
          "¿Aló? Contesto sin mirar quién llama.",
          "¿Aló? Ahora empiezo en español y después decido.",
        ],
      },
      {
        stem: "Le habla…",
        english: "This is … speaking",
        scenarios: ["the rehearsed line", "four times this week", "no longer reading it"],
        examples: [
          "Le habla Marlana, y esta vez no lo leí de un papel.",
          "Le habla Marlana: lo dije cuatro veces esta semana.",
          "Le habla Marlana, y ya me sale de corrido.",
        ],
      },
      {
        stem: "¿De parte de quién?",
        english: "Who's calling?",
        scenarios: ["the question that used to freeze her", "having the answer ready", "asking it herself"],
        examples: [
          "¿De parte de quién? Antes esa pregunta me congelaba.",
          "¿De parte de quién? Ahora contesto sin pensar.",
          "¿De parte de quién? Ya la pregunto yo también.",
        ],
      },
      {
        stem: "¿Me escuchas?",
        english: "Can you hear me?",
        scenarios: ["the most used sentence of the week", "buying time and fixing the line", "in usted too"],
        examples: [
          "¿Me escuchas? Fue mi frase más usada de la semana.",
          "¿Me escuchas? Sirve para ganar tiempo y para arreglar la llamada.",
          "¿Me escuchas? Y con usted, ¿me escucha? Las dos me salen.",
        ],
      },
      {
        stem: "Se cortó…",
        english: "The call dropped… / It cut out…",
        scenarios: ["five drops, five callbacks", "no longer a disaster", "what the week taught her"],
        examples: [
          "Se cortó cinco veces y cinco veces volví a llamar.",
          "Se cortó y ya no lo viví como un desastre.",
          "Se cortó, y aprendí que eso no me quita el español.",
        ],
        note: "The week's real lesson: a dropped call is a technical problem, not a language failure. You call back and continue.",
      },
    ],
  },
];
