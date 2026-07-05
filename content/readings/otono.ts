import type { ReadingDay } from "./types";
import { week2ReadingDays } from "../drafts/week2-readings";
import { week3ReadingDays } from "../drafts/week3-readings";
import { week4ReadingDays } from "../drafts/week4-readings";
import { week5ReadingDays } from "../drafts/week5-readings";
import { week6ReadingDays } from "../drafts/week6-readings";
import { week7ReadingDays } from "../drafts/week7-readings";
import { week8ReadingDays } from "../drafts/week8-readings";
import { week9ReadingDays } from "../drafts/week9-readings";
import { week10ReadingDays } from "../drafts/week10-readings";
import { week11ReadingDays } from "../drafts/week11-readings";
import { week12ReadingDays } from "../drafts/week12-readings";
import { week13ReadingDays } from "../drafts/week13-readings";

/**
 * La Lectura (Otoño / fall), days 92+ — the season's input backbone.
 *
 * Week 1: "Naty se muda" — Marlana updates her coworker Priya, day by day
 * in the teachers' lounge, on her friend Naty's move from Atlanta to Boston
 * for a junior developer job. Six installments (days 92–97) + a fresh recap
 * on the repaso day (98). That day's speak prompts retell/react to that
 * day's installment (read → retell → react).
 */
export const otonoReadingDays: ReadingDay[] = [
  {
    day: 92,
    themeEs: "Buenas noticias",
    storyTitle: "Naty se muda",
    part: 1,
    partsTotal: 6,
    vocab: [
      { es: "conseguir el trabajo", en: "to get the job", example: "Por fin consiguió el trabajo que quería." },
      { es: "mudarse", en: "to move", example: "Naty se muda a Boston el próximo mes." },
      { es: "el bootcamp", en: "the bootcamp", example: "Terminó el bootcamp hace dos semanas." },
      { es: "por fin", en: "finally", example: "Por fin le ofrecieron el puesto." },
      { es: "el puesto", en: "the position", example: "Aceptó el puesto sin pensarlo dos veces." },
    ],
    dialogue: {
      title: "¿Ya te enteraste?",
      situation: "En la sala de maestros, entre clases",
      lines: [
        { speaker: "A", es: "Priya, no vas a creer la noticia que tengo.", en: "Priya, you're not going to believe the news I have." },
        { speaker: "B", es: "Cuéntame, cuéntame. ¿Qué pasó?", en: "Tell me, tell me. What happened?" },
        { speaker: "A", es: "Naty consiguió el trabajo. Va a ser desarrolladora en una empresa de Boston.", en: "Naty got the job. She's going to be a developer at a company in Boston." },
        { speaker: "B", es: "¡Qué increíble! ¿Y va a mudarse?", en: "That's incredible! And she's going to move?" },
        { speaker: "A", es: "Sí, se muda el próximo mes. Todavía no lo puedo creer.", en: "Yes, she's moving next month. I still can't believe it." },
        { speaker: "B", es: "Después de todo el bootcamp, por fin le ofrecieron el puesto.", en: "After the whole bootcamp, they finally offered her the position." },
        { speaker: "A", es: "Exacto. Está feliz, pero también un poco nerviosa.", en: "Exactly. She's happy, but also a little nervous." },
        { speaker: "B", es: "Es normal. ¡Qué buena noticia para empezar la semana!", en: "That's normal. What good news to start the week!" },
      ],
    },
  },
  {
    day: 93,
    themeEs: "Empacando",
    storyTitle: "Naty se muda",
    part: 2,
    partsTotal: 6,
    vocab: [
      { es: "empacar", en: "to pack", example: "Todavía le falta empacar la cocina." },
      { es: "las cajas", en: "the boxes", example: "No tiene suficientes cajas." },
      { es: "el sofá", en: "the couch", example: "Vendió el sofá ayer." },
      { es: "prestado/a", en: "borrowed", example: "Le presté unas cajas prestadas." },
      { es: "venir a ayudar", en: "to come help", example: "Su mamá va a venir a ayudarla." },
    ],
    dialogue: {
      title: "Un caos total",
      situation: "En la sala de maestros, a la hora del almuerzo",
      lines: [
        { speaker: "A", es: "¿Cómo va la mudanza de Naty?", en: "How's Naty's move going?" },
        { speaker: "B", es: "Un caos total, según ella.", en: "Total chaos, according to her." },
        { speaker: "A", es: "¿Por qué? ¿Qué pasó?", en: "Why? What happened?" },
        { speaker: "B", es: "Vendió el sofá ayer y todavía no tiene cajas.", en: "She sold the couch yesterday and still doesn't have boxes." },
        { speaker: "A", es: "Ay no. ¿Y quién la va a ayudar a empacar?", en: "Oh no. And who's going to help her pack?" },
        { speaker: "B", es: "Su mamá va a venir esta semana para ayudarla con todo.", en: "Her mom is coming this week to help her with everything." },
        { speaker: "A", es: "Menos mal. Yo le presté unas cajas también.", en: "Good thing. I lent her some boxes too." },
        { speaker: "B", es: "Con eso ya tiene un buen comienzo.", en: "With that she already has a good start." },
      ],
    },
  },
  {
    day: 94,
    themeEs: "El camino",
    storyTitle: "Naty se muda",
    part: 3,
    partsTotal: 6,
    vocab: [
      { es: "el viaje", en: "the trip", example: "El viaje fue de dieciocho horas." },
      { es: "manejar", en: "to drive", example: "Se turnaron para manejar." },
      { es: "la medianoche", en: "midnight", example: "Llegaron pasada la medianoche." },
      { es: "cruzar", en: "to cross", example: "Cruzaron varios estados." },
      { es: "agotador/a", en: "exhausting", example: "Fue un viaje agotador." },
    ],
    dialogue: {
      title: "Dieciocho horas",
      situation: "En la sala de maestros, a primera hora",
      lines: [
        { speaker: "A", es: "¿Ya llegó Naty a Boston?", en: "Did Naty already get to Boston?" },
        { speaker: "B", es: "Sí, llegaron anoche, pasada la medianoche.", en: "Yes, they arrived last night, past midnight." },
        { speaker: "A", es: "¡Qué viaje tan largo! ¿Cuántas horas fueron?", en: "What a long trip! How many hours was it?" },
        { speaker: "B", es: "Dieciocho horas, más o menos. Cruzaron como seis estados.", en: "Eighteen hours, more or less. They crossed like six states." },
        { speaker: "A", es: "¿Y quién manejó?", en: "And who drove?" },
        { speaker: "B", es: "Se turnaron ella y su mamá. Pararon solo dos veces.", en: "She and her mom took turns. They stopped only twice." },
        { speaker: "A", es: "Suena agotador.", en: "That sounds exhausting." },
        { speaker: "B", es: "Ella dice que el café de la carretera era horrible, pero llegaron bien.", en: "She says the road coffee was horrible, but they arrived safely." },
      ],
    },
  },
  {
    day: 95,
    themeEs: "El apartamento nuevo",
    storyTitle: "Naty se muda",
    part: 4,
    partsTotal: 6,
    vocab: [
      { es: "vacío/a", en: "empty", example: "El apartamento está vacío." },
      { es: "los muebles", en: "furniture", example: "Todavía no tiene muebles." },
      { es: "extrañar", en: "to miss", example: "Extraña su casa en Atlanta." },
      { es: "sentirse perdido/a", en: "to feel lost", example: "Se siente un poco perdida." },
      { es: "del todo", en: "completely", example: "No está sola del todo." },
    ],
    dialogue: {
      title: "Los primeros días",
      situation: "En la sala de maestros, calificando exámenes",
      lines: [
        { speaker: "A", es: "Hablé con Naty anoche. Su apartamento todavía está vacío.", en: "I talked to Naty last night. Her apartment is still empty." },
        { speaker: "B", es: "Ay, ¿no tiene muebles?", en: "Oh, she doesn't have furniture?" },
        { speaker: "A", es: "Todavía no. Solo tiene una maleta y un colchón en el piso.", en: "Not yet. She only has a suitcase and a mattress on the floor." },
        { speaker: "B", es: "Eso suena difícil, sobre todo con la lluvia de esta semana.", en: "That sounds hard, especially with this week's rain." },
        { speaker: "A", es: "Sí, me dijo que extraña Atlanta y se siente un poco perdida.", en: "Yes, she told me she misses Atlanta and feels a little lost." },
        { speaker: "B", es: "Es normal los primeros días. ¿Está bien, aunque sea?", en: "That's normal the first days. Is she okay, at least?" },
        { speaker: "A", es: "Más o menos. No está sola del todo — hablamos dos horas anoche.", en: "More or less. She's not completely alone — we talked for two hours last night." },
        { speaker: "B", es: "Eso ayuda más de lo que crees.", en: "That helps more than you think." },
      ],
    },
  },
  {
    day: 96,
    themeEs: "El primer día",
    storyTitle: "Naty se muda",
    part: 5,
    partsTotal: 6,
    vocab: [
      { es: "los nervios", en: "the nerves", example: "Tenía muchos nervios esa mañana." },
      { es: "quedarse en blanco", en: "to blank", example: "Se quedó en blanco con la pregunta." },
      { es: "pedir ayuda", en: "to ask for help", example: "Pidió ayuda a un compañero." },
      { es: "el equipo", en: "the team", example: "El equipo la trató muy bien." },
      { es: "almorzar", en: "to have lunch", example: "La invitaron a almorzar." },
    ],
    dialogue: {
      title: "Con nervios, pero bien",
      situation: "En la sala de maestros, después de clases",
      lines: [
        { speaker: "A", es: "¿Cómo le fue a Naty en su primer día?", en: "How did Naty's first day go?" },
        { speaker: "B", es: "Con muchos nervios, pero bien al final.", en: "With a lot of nerves, but well in the end." },
        { speaker: "A", es: "Cuéntame qué pasó.", en: "Tell me what happened." },
        { speaker: "B", es: "En una reunión, alguien le hizo una pregunta y se quedó en blanco.", en: "In a meeting, someone asked her a question and she blanked." },
        { speaker: "A", es: "Ay, qué pena. ¿Y luego?", en: "Oh, that's rough. And then?" },
        { speaker: "B", es: "Pidió ayuda a un compañero y él le explicó todo con calma.", en: "She asked a coworker for help and he calmly explained everything." },
        { speaker: "A", es: "Qué bueno que preguntó, en vez de quedarse callada.", en: "How good that she asked, instead of staying quiet." },
        { speaker: "B", es: "Exacto. Y al final, el equipo la invitó a almorzar. Se sintió parte del grupo.", en: "Exactly. And in the end, the team invited her to lunch. She felt part of the group." },
      ],
    },
  },
  {
    day: 97,
    themeEs: "Ya se siente en casa",
    storyTitle: "Naty se muda",
    part: 6,
    partsTotal: 6,
    vocab: [
      { es: "la rutina", en: "the routine", example: "Ya tiene una rutina." },
      { es: "la cafetería", en: "the coffee shop", example: "Encontró una cafetería favorita." },
      { es: "sentirse en casa", en: "to feel at home", example: "Ya se siente en casa." },
      { es: "orgulloso/a", en: "proud", example: "Está orgullosa de lo que ha logrado." },
      { es: "el esfuerzo", en: "the effort", example: "Todo el esfuerzo valió la pena." },
    ],
    dialogue: {
      title: "Un mes después",
      situation: "En la sala de maestros, un viernes por la tarde",
      lines: [
        { speaker: "A", es: "Hablé con Naty. Ya lleva un mes en Boston.", en: "I talked to Naty. She's been in Boston a month now." },
        { speaker: "B", es: "¡Un mes! ¿Cómo va todo?", en: "A month! How's everything going?" },
        { speaker: "A", es: "Mucho mejor. Ya tiene una rutina y encontró una cafetería favorita cerca del trabajo.", en: "Much better. She has a routine now and found a favorite coffee shop near work." },
        { speaker: "B", es: "Qué bueno. ¿Y sigue un poco sola?", en: "That's great. And is she still a little lonely?" },
        { speaker: "A", es: "No, para nada. Hizo una amiga en el trabajo y ya salen juntas los viernes.", en: "No, not at all. She made a friend at work and they already go out together on Fridays." },
        { speaker: "B", es: "Se nota que ya se siente en casa.", en: "You can tell she already feels at home." },
        { speaker: "A", es: "Sí, y me invitó a conocer su apartamento el próximo fin de semana.", en: "Yes, and she invited me to see her apartment next weekend." },
        { speaker: "B", es: "Todo ese esfuerzo por fin está dando resultado.", en: "All that effort is finally paying off." },
      ],
    },
  },
  {
    day: 98,
    themeEs: "Repaso: resumir",
    isRecap: true,
    vocab: [
      { es: "resumir", en: "to summarize", example: "Voy a resumir todo el mes." },
      { es: "lograr", en: "to achieve, pull off", example: "Al final, lo logró." },
      { es: "el esfuerzo", en: "the effort", example: "Todo el esfuerzo valió la pena." },
      { es: "orgulloso/a", en: "proud", example: "Estamos muy orgullosas de ella." },
      { es: "el capítulo", en: "the chapter", example: "Empezó un capítulo nuevo." },
    ],
    dialogue: {
      title: "El resumen completo",
      situation: "En la sala de maestros, un mes después de la primera noticia",
      lines: [
        { speaker: "A", es: "Oye, ¿y cómo le va a Naty ahora, un mes después?", en: "Hey, how's Naty doing now, a month later?" },
        { speaker: "B", es: "La verdad, muy bien. ¿Quieres el resumen completo?", en: "Honestly, really well. Do you want the full summary?" },
        { speaker: "A", es: "Sí, cuéntamelo todo, pero rápido.", en: "Yes, tell me everything, but fast." },
        { speaker: "B", es: "Bueno: consiguió el trabajo, empacó en tiempo récord, manejó dieciocho horas, y llegó a un apartamento vacío.", en: "Okay: she got the job, packed in record time, drove eighteen hours, and arrived at an empty apartment." },
        { speaker: "A", es: "Uf, qué mes.", en: "Wow, what a month." },
        { speaker: "B", es: "Espera, hay más. Tuvo un primer día difícil, pero pidió ayuda. Y ahora, un mes después, tiene amigos, una rutina y una cafetería favorita.", en: "Wait, there's more. She had a hard first day, but she asked for help. And now, a month later, she has friends, a routine, and a favorite coffee shop." },
        { speaker: "A", es: "En pocas palabras, lo logró.", en: "In a few words, she did it." },
        { speaker: "B", es: "Exacto. Al final, estamos muy orgullosas de ella.", en: "Exactly. In the end, we're very proud of her." },
      ],
    },
  },
  ...week2ReadingDays,
  ...week3ReadingDays,
  ...week4ReadingDays,
  ...week5ReadingDays,
  ...week6ReadingDays,
  ...week7ReadingDays,
  ...week8ReadingDays,
  ...week9ReadingDays,
  ...week10ReadingDays,
  ...week11ReadingDays,
  ...week12ReadingDays,
  ...week13ReadingDays,
];
