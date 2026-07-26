import type { FrameDay } from "../../frames/types";

/**
 * Primavera Week 4 — "Historias con sabor" (days 295–301).
 * Story: "Lo del ascensor" — Marlana, Rocío, and a parent volunteer get stuck
 * between floors with a crock pot of soup, then Marlana tells Camila the whole
 * thing at Thursday café with full drama. Storytelling II: hooks, escalation,
 * the punch, the worst part, and the invitation to picture it.
 */
export const priWeek4FrameDays: FrameDay[] = [
  {
    day: 295,
    theme: "Historias con sabor: El ascensor se paró",
    subtitle: "Between the fifth and sixth floor — and the soup started to smell.",
    frames: [
      {
        stem: "No te vas a creer lo que…",
        english: "You're not going to believe what…",
        scenarios: ["the elevator stopped", "who was inside", "how it started"],
        examples: [
          "No te vas a creer lo que pasó en el ascensor hoy.",
          "No te vas a creer lo que llevaba Doña Carmen en la olla.",
          "No te vas a creer lo que hice cuando se paró de golpe.",
        ],
        note: "*No te vas a creer* is the hook — you say it before the story, not after. The listener leans in automatically.",
      },
      {
        stem: "Para colmo…",
        english: "And on top of that… / As if that weren't enough…",
        scenarios: ["parent night in twenty minutes", "no phone signal", "the smell"],
        examples: [
          "Para colmo, la noche de padres empezaba en veinte minutos.",
          "Para colmo, el celular de Doña Carmen no tenía señal.",
          "Para colmo, el olor a sopa llenó todo el ascensor.",
        ],
        note: "*Para colmo* piles on the bad luck — the second thing that makes the story worse, not the first.",
      },
      {
        stem: "Y de repente, ¡pum!",
        english: "And suddenly, bam!",
        scenarios: ["the jolt", "the alarm", "the lights"],
        examples: [
          "Y de repente, ¡pum!, el ascensor se movió un centímetro.",
          "Y de repente, ¡pum!, sonó la alarma y se apagaron las luces.",
          "Y de repente, ¡pum!, Doña Carmen gritó y yo también.",
        ],
        note: "*¡Pum!* is the sound effect — the moment the story turns. You can whisper it or shout it; both work.",
      },
      {
        stem: "Y lo peor es que…",
        english: "And the worst part is…",
        scenarios: ["having to stay calm", "who saw them get out", "what she said after"],
        examples: [
          "Y lo peor es que tuve que quedarme tranquila delante de la mamá.",
          "Y lo peor es que salimos justo cuando llegó la directora.",
          "Y lo peor es que Doña Carmen pensó que yo no tenía miedo.",
        ],
        note: "*Lo peor* is subjective — your worst moment, not necessarily the objectively worst thing that happened.",
      },
      {
        stem: "Imagínate que…",
        english: "Just imagine… / Picture this…",
        scenarios: ["setting the scene", "the three of them trapped", "the soup detail"],
        examples: [
          "Imagínate que estamos atrapadas entre el quinto y el sexto piso.",
          "Imagínate que llevas una olla de sopa y el ascensor se para.",
          "Imagínate que Rocío habla despacio y tú tienes que traducir.",
        ],
        note: "*Imagínate que* pulls the listener into the scene — more vivid than *te cuento que* because they have to see it.",
      },
    ],
  },
  {
    day: 296,
    theme: "Historias con sabor: Atrapadas con la olla",
    subtitle: "Ten minutes between floors — Rocío calm, Marlana narrating, soup everywhere.",
    frames: [
      {
        stem: "No te vas a creer lo que…",
        english: "You're not going to believe what…",
        scenarios: ["Rocío did", "Doña Carmen said", "the minutes felt like"],
        examples: [
          "No te vas a creer lo que dijo Rocío para calmar a Doña Carmen.",
          "No te vas a creer lo que llevaban diez minutos pareciendo una hora.",
          "No te vas a creer lo que encontramos cuando abrieron las puertas.",
        ],
      },
      {
        stem: "Para colmo…",
        english: "And on top of that… / As if that weren't enough…",
        scenarios: ["the soup spilled", "a student walked by", "the intercom"],
        examples: [
          "Para colmo, la tapa de la olla se movió y se derramó un poco.",
          "Para colmo, pasó un estudiante por el pasillo y nos oyó gritar.",
          "Para colmo, el intercomono funcionaba y nadie contestaba.",
        ],
      },
      {
        stem: "Y de repente, ¡pum!",
        english: "And suddenly, bam!",
        scenarios: ["someone pressed the button", "the doors tried to open", "a voice from above"],
        examples: [
          "Y de repente, ¡pum!, alguien apretó el botón de emergencia otra vez.",
          "Y de repente, ¡pum!, las puertas se abrieron un dedo y se volvieron a cerrar.",
          "Y de repente, ¡pum!, escuchamos una voz desde arriba: \"¿Hay alguien ahí?\"",
        ],
      },
      {
        stem: "Y lo peor es que…",
        english: "And the worst part is…",
        scenarios: ["pretending calm", "the smell on her cardigan", "missing the start of parent night"],
        examples: [
          "Y lo peor es que tuve que sonreír como si nada pasara.",
          "Y lo peor es que me manché el cardigan de caldo.",
          "Y lo peor es que la noche de padres ya había empezado sin mí.",
        ],
      },
      {
        stem: "Imagínate que…",
        english: "Just imagine… / Picture this…",
        scenarios: ["Rocío's voice", "Doña Carmen's face", "the tiny space"],
        examples: [
          "Imagínate que Rocío dice \"respiremos\" y yo traduzco al inglés en mi cabeza.",
          "Imagínate que Doña Carmen abraza la olla como si fuera un bebé.",
          "Imagínate que somos tres adultas en un espacio del tamaño de un closet.",
        ],
      },
    ],
  },
  {
    day: 297,
    theme: "Historias con sabor: Las luces se apagaron",
    subtitle: "The alarm, the jolt, the dark — and then someone answers the intercom.",
    frames: [
      {
        stem: "No te vas a creer lo que…",
        english: "You're not going to believe what…",
        scenarios: ["happened when the lights went out", "Doña Carmen did", "Rocío remembered"],
        examples: [
          "No te vas a creer lo que pasó cuando se apagaron las luces.",
          "No te vas a creer lo que hizo Doña Carmen: empezó a rezar en voz baja.",
          "No te vas a creer lo que se le ocurrió a Rocío en ese momento.",
        ],
        note: "Darkness in a stuck elevator is a classic beat — the story earns drama without exaggerating the danger.",
      },
      {
        stem: "Para colmo…",
        english: "And on top of that… / As if that weren't enough…",
        scenarios: ["Marlana's phone died", "the alarm wouldn't stop", "it was Rocío's birthday"],
        examples: [
          "Para colmo, mi celular tenía dos por ciento de batería.",
          "Para colmo, la alarma no paraba de sonar.",
          "Para colmo, era el cumpleaños de Rocío y estábamos aquí.",
        ],
      },
      {
        stem: "Y de repente, ¡pum!",
        english: "And suddenly, bam!",
        scenarios: ["lights back on", "doors moving", "fire department voice"],
        examples: [
          "Y de repente, ¡pum!, volvieron las luces y vimos el caldo en el piso.",
          "Y de repente, ¡pum!, las puertas se abrieron a medias en el quinto piso.",
          "Y de repente, ¡pum!, escuchamos: \"Bomberos, ¿hay alguien adentro?\"",
        ],
      },
      {
        stem: "Y lo peor es que…",
        english: "And the worst part is…",
        scenarios: ["getting out in front of students", "the smell", "having to go to parent night anyway"],
        examples: [
          "Y lo peor es que salimos frente a un grupo de quinto grado.",
          "Y lo peor es que olía a sopa durante toda la noche de padres.",
          "Y lo peor es que tuve que ir al salón con el cardigan manchado.",
        ],
      },
      {
        stem: "Imagínate que…",
        english: "Just imagine… / Picture this…",
        scenarios: ["climbing out", "the firefighter", "the principal waiting"],
        examples: [
          "Imagínate que sales del ascensor y la directora ya te está esperando.",
          "Imagínate que un bombero te da la mano y tú llevas una olla de sopa.",
          "Imagínate que los estudiantes preguntan: \"¿Qué les pasó?\"",
        ],
      },
    ],
  },
  {
    day: 298,
    theme: "Historias con sabor: Contárselo a Rocío",
    subtitle: "That night she retells the whole thing — and realizes she told it well.",
    frames: [
      {
        stem: "No te vas a creer lo que…",
        english: "You're not going to believe what…",
        scenarios: ["she said at parent night", "a parent asked", "Rocío laughed at"],
        examples: [
          "No te vas a creer lo que le conté a una mamá en la noche de padres.",
          "No te vas a creer lo que me preguntó el papá de Yusuf.",
          "No te vas a creer lo que se rió Rocío cuando se lo conté otra vez.",
        ],
      },
      {
        stem: "Para colmo…",
        english: "And on top of that… / As if that weren't enough…",
        scenarios: ["she used all the stems", "someone else had a story", "the principal heard"],
        examples: [
          "Para colmo, usé las cinco muletillas sin darme cuenta.",
          "Para colmo, otra maestra también se quedó atrapada el mes pasado.",
          "Para colmo, la directora escuchó la parte del caldo derramado.",
        ],
      },
      {
        stem: "Y de repente, ¡pum!",
        english: "And suddenly, bam!",
        scenarios: ["everyone laughed", "she remembered a detail", "Rocío added one"],
        examples: [
          "Y de repente, ¡pum!, toda la mesa se rió cuando dije \"¡pum!\"",
          "Y de repente, ¡pum!, me acordé de que Doña Carmen rezaba.",
          "Y de repente, ¡pum!, Rocío agregó: \"¡Y yo con mi pastel en el refri!\"",
        ],
      },
      {
        stem: "Y lo peor es que…",
        english: "And the worst part is…",
        scenarios: ["she enjoyed telling it", "someone asked for English", "she forgot a detail"],
        examples: [
          "Y lo peor es que me gustó contarlo.",
          "Y lo peor es que me pidieron la versión en inglés y se me olvidó el \"¡pum!\"",
          "Y lo peor es que alguien dijo: \"¿Y entonces qué pasó con la sopa?\"",
        ],
        note: "*Me gustó contarlo* — enjoying the telling is the primavera goal. The story is material now, not trauma.",
      },
      {
        stem: "Imagínate que…",
        english: "Just imagine… / Picture this…",
        scenarios: ["parent night scene", "retelling at the table", "the soup question"],
        examples: [
          "Imagínate que cuentas la historia y todos dejan de comer galletas.",
          "Imagínate que una mamá dice: \"Yo me hubiera desmayado.\"",
          "Imagínate que al final preguntan por la olla y no por nosotras.",
        ],
      },
    ],
  },
  {
    day: 299,
    theme: "Historias con sabor: En el café del jueves",
    subtitle: "Camila gets the full version — hooks, drama, soup, and all.",
    frames: [
      {
        stem: "No te vas a creer lo que…",
        english: "You're not going to believe what…",
        scenarios: ["opening at the café", "Camila's reaction", "comparing to her hospital stories"],
        examples: [
          "No te vas a creer lo que me pasó el martes en el colegio.",
          "No te vas a creer lo que hizo Camila cuando empecé a contar.",
          "No te vas a creer lo que me dijo: \"Eso es nada, en el hospital…\"",
        ],
      },
      {
        stem: "Para colmo…",
        english: "And on top of that… / As if that weren't enough…",
        scenarios: ["Camila one-ups her", "the coffee arrived mid-story", "someone at the next table listened"],
        examples: [
          "Para colmo, Camila tiene una historia del ascensor del hospital peor.",
          "Para colmo, llegó el café justo en la parte del \"¡pum!\"",
          "Para colmo, la mesa de al lado dejó de hablar para escuchar.",
        ],
      },
      {
        stem: "Y de repente, ¡pum!",
        english: "And suddenly, bam!",
        scenarios: ["Camila's punchline", "Marlana's gesture", "both laughed"],
        examples: [
          "Y de repente, ¡pum!, Camila golpea la mesa cuando digo que se apagaron las luces.",
          "Y de repente, ¡pum!, me doy cuenta de que llevo veinte minutos hablando.",
          "Y de repente, ¡pum!, las dos nos reímos como locas.",
        ],
      },
      {
        stem: "Y lo peor es que…",
        english: "And the worst part is…",
        scenarios: ["Camila's verdict", "Marlana forgot to ask about Camila's week", "best story wins"],
        examples: [
          "Y lo peor es que Camila dice que le falta más drama al final.",
          "Y lo peor es que no le pregunté cómo le fue en el hospital.",
          "Y lo peor es que su historia del hospital sí gana.",
        ],
      },
      {
        stem: "Imagínate que…",
        english: "Just imagine… / Picture this…",
        scenarios: ["Thursday café scene", "Camila leaning in", "retelling for practice"],
        examples: [
          "Imagínate que estás en el café y alguien te dice: \"Cuéntame otra vez.\"",
          "Imagínate que Camila dice: \"Empieza desde el ascensor.\"",
          "Imagínate que cuentas la misma historia tres veces y mejora cada vez.",
        ],
        note: "Camila asking her to start over is the practice — retelling is how stories get *sabor*.",
      },
    ],
  },
  {
    day: 300,
    theme: "Historias con sabor: Con todo el drama",
    subtitle: "The full retelling — all five stems, one elevator, zero notes.",
    frames: [
      {
        stem: "No te vas a creer lo que…",
        english: "You're not going to believe what…",
        scenarios: ["the complete hook", "Rocío's text afterward", "what changed"],
        examples: [
          "No te vas a creer lo que aprendí contando esta historia.",
          "No te vas a creer lo que me escribió Rocío: \"El ascensor ya funciona.\"",
          "No te vas a creer lo que cambió cuando dejé de disculparme al contarla.",
        ],
      },
      {
        stem: "Para colmo…",
        english: "And on top of that… / As if that weren't enough…",
        scenarios: ["the epilogue", "Doña Carmen's thank-you", "the elevator sign"],
        examples: [
          "Para colmo, Doña Carmen me trajo sopa hecha en casa al día siguiente.",
          "Para colmo, pusieron un letrero: \"Máximo dos personas o una olla.\"",
          "Para colmo, ahora me piden que la cuente en la sala de maestros.",
        ],
      },
      {
        stem: "Y de repente, ¡pum!",
        english: "And suddenly, bam!",
        scenarios: ["the practiced beat", "timing the punch", "making Camila jump"],
        examples: [
          "Y de repente, ¡pum!, ya lo digo en el momento exacto.",
          "Y de repente, ¡pum!, Camila salta aunque ya sabe lo que viene.",
          "Y de repente, ¡pum!, entiendo por qué existe esa palabra en la historia.",
        ],
      },
      {
        stem: "Y lo peor es que…",
        english: "And the worst part is…",
        scenarios: ["the real worst part", "what the story is really about", "not the elevator"],
        examples: [
          "Y lo peor es que casi no la cuento porque me daba vergüenza exagerar.",
          "Y lo peor es que la parte más mala fue quedarme callada diez minutos.",
          "Y lo peor es que ahora quiero una historia peor solo para ganarle a Camila.",
        ],
      },
      {
        stem: "Imagínate que…",
        english: "Just imagine… / Picture this…",
        scenarios: ["inviting Camila into the scene", "the whole story in one stem", "listener becomes witness"],
        examples: [
          "Imagínate que cierras los ojos y estás ahí con nosotras y la olla.",
          "Imagínate que esta historia la cuentas en una cena y todos piden más.",
          "Imagínate que el ascensor se para mañana y tú ya sabes qué decir.",
        ],
      },
    ],
  },
  {
    day: 301,
    theme: "Historias con sabor: Repaso",
    subtitle: "Six days, one elevator, five stems — and the story gets better every time you tell it.",
    frames: [
      {
        stem: "No te vas a creer lo que…",
        english: "You're not going to believe what…",
        scenarios: ["week recap", "what storytelling changed", "the first hook vs now"],
        examples: [
          "No te vas a creer lo que mejoró esta semana.",
          "No te vas a creer lo que suena distinto cuando empiezas con el gancho.",
          "No te vas a creer lo que hace una historia cuando le pones drama.",
        ],
      },
      {
        stem: "Para colmo…",
        english: "And on top of that… / As if that weren't enough…",
        scenarios: ["stacking beats", "practicing escalation", "Camila's challenge"],
        examples: [
          "Para colmo, ahora puedo apilar tres cosas malas seguidas.",
          "Para colmo, Camila dice que me falta un \"para colmo\" más.",
          "Para colmo, contar en español es más divertido que en inglés.",
        ],
      },
      {
        stem: "Y de repente, ¡pum!",
        english: "And suddenly, bam!",
        scenarios: ["the turn", "sound effects", "timing"],
        examples: [
          "Y de repente, ¡pum!, la historia despierta.",
          "Y de repente, ¡pum!, todos escuchan aunque no quieran.",
          "Y de repente, ¡pum!, entiendes por qué existe el suspenso.",
        ],
        note: "Five stems, five jobs: hook · pile-on · turn · worst part · pull them in. Lo del ascensor used all five.",
      },
      {
        stem: "Y lo peor es que…",
        english: "And the worst part is…",
        scenarios: ["personal worst", "the emotional beat", "what you remember"],
        examples: [
          "Y lo peor es que lo peor no siempre es lo obvio.",
          "Y lo peor es que la gente se acuerda del \"lo peor\" más que del resto.",
          "Y lo peor es que me reí contando lo peor.",
        ],
      },
      {
        stem: "Imagínate que…",
        english: "Just imagine… / Picture this…",
        scenarios: ["inviting the listener", "next story", "primavera ahead"],
        examples: [
          "Imagínate que la próxima historia la cuentas tú primero.",
          "Imagínate que alguien te interrumpe y sigues con \"para colmo…\"",
          "Imagínate que en un mes cuentas esto sin pensar en los stems.",
        ],
      },
    ],
  },
];
