import type { SentenceFormerDay } from "./types";
import { week2SentenceFormerDays } from "../drafts/week2-sentenceFormer";
import { week3SentenceFormerDays } from "../drafts/week3-sentenceFormer";
import { week4SentenceFormerDays } from "../drafts/week4-sentenceFormer";
import { week5SentenceFormerDays } from "../drafts/week5-sentenceFormer";
import { week6SentenceFormerDays } from "../drafts/week6-sentenceFormer";
import { week7SentenceFormerDays } from "../drafts/week7-sentenceFormer";
import { week8SentenceFormerDays } from "../drafts/week8-sentenceFormer";
import { week9SentenceFormerDays } from "../drafts/week9-sentenceFormer";
import { week10SentenceFormerDays } from "../drafts/week10-sentenceFormer";
import { week11SentenceFormerDays } from "../drafts/week11-sentenceFormer";
import { week12SentenceFormerDays } from "../drafts/week12-sentenceFormer";
import { week13SentenceFormerDays } from "../drafts/week13-sentenceFormer";

/**
 * Sentence Former banks (Otoño / fall), days 92+. Stems must match
 * content/frames/otono.ts for the same day.
 */
export const otonoSentenceFormerDays: SentenceFormerDay[] = [
  {
    day: 92,
    theme: "Buenas noticias",
    stems: [
      {
        stem: "Trata de…",
        english: "It's about…",
        hints: {
          que: [
            { es: "una amiga que se muda", en: "a friend who's moving" },
            { es: "un trabajo nuevo", en: "a new job" },
          ],
        },
        completions: [
          { es: "una amiga que se muda", en: "a friend who's moving", category: "other" },
          { es: "un trabajo nuevo", en: "a new job", category: "activity" },
          { es: "dejar la ciudad", en: "leaving the city", category: "activity" },
          { es: "una gran decisión", en: "a big decision", category: "opinion" },
          { es: "empezar de nuevo", en: "starting over", category: "activity" },
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        completions: [
          { es: "consiguió el trabajo", en: "she got the job", category: "other" },
          { es: "se muda pronto", en: "she's moving soon", category: "time" },
          { es: "está feliz", en: "she's happy", category: "opinion" },
          { es: "todo salió bien", en: "everything worked out", category: "opinion" },
          { es: "va a extrañar Atlanta", en: "she'll miss Atlanta", category: "opinion" },
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        completions: [
          { es: "es una gran noticia", en: "it's great news", category: "opinion" },
          { es: "se muda a Boston", en: "she's moving to Boston", category: "other" },
          { es: "todo cambió rápido", en: "everything changed fast", category: "time" },
          { es: "lo logró", en: "she did it", category: "opinion" },
          { es: "empieza un capítulo nuevo", en: "a new chapter begins", category: "other" },
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        completions: [
          { es: "está orgullosa de sí misma", en: "she's proud of herself", category: "opinion" },
          { es: "por fin lo consiguió", en: "she finally got it", category: "opinion" },
          { es: "va a estar bien", en: "she'll be okay", category: "opinion" },
          { es: "tiene apoyo", en: "she has support", category: "other" },
          { es: "no está sola", en: "she's not alone", category: "other" },
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        completions: [
          { es: "todo salió como quería", en: "everything worked out how she wanted", category: "opinion" },
          { es: "aceptó el puesto", en: "she accepted the position", category: "other" },
          { es: "valió la pena esperar", en: "it was worth the wait", category: "opinion" },
          { es: "se va la próxima semana", en: "she's leaving next week", category: "time" },
          { es: "todo se resolvió", en: "everything got resolved", category: "other" },
        ],
      },
    ],
  },
  {
    day: 93,
    theme: "Empacando",
    stems: [
      {
        stem: "Trata de…",
        english: "It's about…",
        completions: [
          { es: "empacar rápido", en: "packing fast", category: "activity" },
          { es: "vender los muebles", en: "selling the furniture", category: "activity" },
          { es: "organizar todo a tiempo", en: "organizing everything in time", category: "time" },
          { es: "decidir qué llevar", en: "deciding what to bring", category: "activity" },
          { es: "un fin de semana ocupado", en: "a busy weekend", category: "time" },
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        completions: [
          { es: "no tiene cajas todavía", en: "she doesn't have boxes yet", category: "other" },
          { es: "vendió el sofá", en: "she sold the couch", category: "other" },
          { es: "su mamá viene a ayudar", en: "her mom is coming to help", category: "other" },
          { es: "está un poco estresada", en: "she's a little stressed", category: "opinion" },
          { es: "le falta tiempo", en: "she's short on time", category: "time" },
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        completions: [
          { es: "es un caos total", en: "it's total chaos", category: "opinion" },
          { es: "todo pasó muy rápido", en: "everything happened fast", category: "time" },
          { es: "necesita más manos", en: "she needs more hands", category: "other" },
          { es: "está haciendo lo posible", en: "she's doing what she can", category: "opinion" },
          { es: "va a lograrlo", en: "she's going to manage it", category: "opinion" },
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        completions: [
          { es: "no está sola", en: "she's not alone", category: "other" },
          { es: "tiene ayuda", en: "she has help", category: "other" },
          { es: "ya tiene un plan", en: "she already has a plan", category: "other" },
          { es: "todo va a caber", en: "everything's going to fit", category: "other" },
          { es: "le queda una semana", en: "she has a week left", category: "time" },
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        completions: [
          { es: "consiguió cajas prestadas", en: "she got borrowed boxes", category: "other" },
          { es: "su mamá llega mañana", en: "her mom arrives tomorrow", category: "time" },
          { es: "todo cupo en el carro", en: "everything fit in the car", category: "other" },
          { es: "terminó a tiempo", en: "she finished on time", category: "time" },
          { es: "se le olvidó algo", en: "she forgot something", category: "other" },
        ],
      },
    ],
  },
  {
    day: 94,
    theme: "El camino",
    stems: [
      {
        stem: "Trata de…",
        english: "It's about…",
        completions: [
          { es: "manejar toda la noche", en: "driving all night", category: "activity" },
          { es: "un viaje larguísimo", en: "a really long trip", category: "other" },
          { es: "cruzar varios estados", en: "crossing several states", category: "activity" },
          { es: "llegar antes del amanecer", en: "arriving before dawn", category: "time" },
          { es: "parar solo para gasolina", en: "stopping only for gas", category: "activity" },
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        completions: [
          { es: "el viaje fue agotador", en: "the trip was exhausting", category: "opinion" },
          { es: "pararon poco", en: "they stopped little", category: "activity" },
          { es: "el café era malo", en: "the coffee was bad", category: "food" },
          { es: "manejaron por turnos", en: "they took turns driving", category: "activity" },
          { es: "llegaron muy tarde", en: "they arrived very late", category: "time" },
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        completions: [
          { es: "fue un viaje eterno", en: "it was an endless trip", category: "opinion" },
          { es: "no durmieron casi nada", en: "they barely slept", category: "other" },
          { es: "llegaron sin problemas", en: "they arrived without problems", category: "other" },
          { es: "valió la pena", en: "it was worth it", category: "opinion" },
          { es: "fue un viaje largo pero tranquilo", en: "it was a long but calm trip", category: "opinion" },
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        completions: [
          { es: "llegaron sanas y salvas", en: "they arrived safe and sound", category: "other" },
          { es: "nadie se durmió manejando", en: "no one fell asleep driving", category: "other" },
          { es: "se turnaron para manejar", en: "they took turns driving", category: "activity" },
          { es: "pararon a descansar", en: "they stopped to rest", category: "activity" },
          { es: "todo salió bien", en: "everything went well", category: "opinion" },
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        completions: [
          { es: "llegaron pasada la medianoche", en: "they arrived past midnight", category: "time" },
          { es: "encontraron el apartamento fácil", en: "they found the apartment easily", category: "other" },
          { es: "se durmieron enseguida", en: "they fell asleep right away", category: "time" },
          { es: "el viaje terminó bien", en: "the trip ended well", category: "opinion" },
          { es: "descansaron todo el domingo", en: "they rested all Sunday", category: "time" },
        ],
      },
    ],
  },
  {
    day: 95,
    theme: "El apartamento nuevo",
    stems: [
      {
        stem: "Trata de…",
        english: "It's about…",
        completions: [
          { es: "un apartamento vacío", en: "an empty apartment", category: "other" },
          { es: "sentirse un poco sola", en: "feeling a little lonely", category: "opinion" },
          { es: "empezar de cero", en: "starting from zero", category: "activity" },
          { es: "acostumbrarse a la ciudad", en: "getting used to the city", category: "activity" },
          { es: "los primeros días difíciles", en: "the hard first days", category: "other" },
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        completions: [
          { es: "todavía no tiene muebles", en: "she doesn't have furniture yet", category: "other" },
          { es: "extraña su casa", en: "she misses her home", category: "opinion" },
          { es: "llueve casi todos los días", en: "it rains almost every day", category: "other" },
          { es: "no conoce a nadie todavía", en: "she doesn't know anyone yet", category: "other" },
          { es: "se siente un poco sola", en: "she feels a little lonely", category: "opinion" },
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        completions: [
          { es: "el apartamento está vacío", en: "the apartment is empty", category: "other" },
          { es: "hace frío y llueve", en: "it's cold and rainy", category: "other" },
          { es: "está un poco triste", en: "she's a little sad", category: "opinion" },
          { es: "todo se siente nuevo", en: "everything feels new", category: "opinion" },
          { es: "necesita tiempo para adaptarse", en: "she needs time to adjust", category: "time" },
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        completions: [
          { es: "tiene un lugar propio", en: "she has her own place", category: "other" },
          { es: "no está sola del todo", en: "she's not completely alone", category: "opinion" },
          { es: "puede llamarme cuando quiera", en: "she can call me anytime", category: "other" },
          { es: "esto va a mejorar", en: "this will get better", category: "opinion" },
          { es: "ya dio el primer paso", en: "she already took the first step", category: "other" },
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        completions: [
          { es: "encontró una cama usada", en: "she found a used bed", category: "other" },
          { es: "dejó de llover", en: "it stopped raining", category: "other" },
          { es: "hablamos dos horas", en: "we talked for two hours", category: "time" },
          { es: "se sintió mejor", en: "she felt better", category: "opinion" },
          { es: "decidió comprar unas plantas", en: "she decided to buy some plants", category: "other" },
        ],
      },
    ],
  },
  {
    day: 96,
    theme: "El primer día",
    stems: [
      {
        stem: "Trata de…",
        english: "It's about…",
        completions: [
          { es: "su primer día de trabajo", en: "her first day of work", category: "other" },
          { es: "estar nerviosa", en: "being nervous", category: "opinion" },
          { es: "una reunión importante", en: "an important meeting", category: "other" },
          { es: "conocer a su equipo", en: "meeting her team", category: "activity" },
          { es: "pedir ayuda a tiempo", en: "asking for help in time", category: "activity" },
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        completions: [
          { es: "estaba muy nerviosa", en: "she was very nervous", category: "opinion" },
          { es: "no supo qué decir", en: "she didn't know what to say", category: "other" },
          { es: "un compañero la ayudó", en: "a coworker helped her", category: "other" },
          { es: "todos fueron amables", en: "everyone was kind", category: "opinion" },
          { es: "aprendió mucho ese día", en: "she learned a lot that day", category: "other" },
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        completions: [
          { es: "el día fue difícil", en: "the day was hard", category: "opinion" },
          { es: "se quedó en blanco", en: "she blanked", category: "other" },
          { es: "todos la trataron bien", en: "everyone treated her well", category: "opinion" },
          { es: "salió mejor de lo esperado", en: "it turned out better than expected", category: "opinion" },
          { es: "fue un día largo", en: "it was a long day", category: "time" },
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        completions: [
          { es: "pidió ayuda", en: "she asked for help", category: "other" },
          { es: "nadie la juzgó", en: "no one judged her", category: "other" },
          { es: "aprendió de su error", en: "she learned from her mistake", category: "other" },
          { es: "se sintió apoyada", en: "she felt supported", category: "opinion" },
          { es: "lo intentó de todas formas", en: "she tried anyway", category: "opinion" },
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        completions: [
          { es: "resolvió el problema", en: "she solved the problem", category: "other" },
          { es: "se sintió más tranquila", en: "she felt calmer", category: "opinion" },
          { es: "la invitaron a almorzar", en: "they invited her to lunch", category: "food" },
          { es: "hizo una nueva amiga", en: "she made a new friend", category: "other" },
          { es: "el día terminó bien", en: "the day ended well", category: "opinion" },
        ],
      },
    ],
  },
  {
    day: 97,
    theme: "Ya se siente en casa",
    stems: [
      {
        stem: "Trata de…",
        english: "It's about…",
        completions: [
          { es: "un mes entero en la ciudad", en: "a whole month in the city", category: "time" },
          { es: "hacer amigos nuevos", en: "making new friends", category: "activity" },
          { es: "encontrar su rutina", en: "finding her routine", category: "activity" },
          { es: "sentirse por fin en casa", en: "finally feeling at home", category: "opinion" },
          { es: "conocer la ciudad mejor", en: "getting to know the city better", category: "activity" },
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        completions: [
          { es: "ya no se siente sola", en: "she doesn't feel alone anymore", category: "opinion" },
          { es: "hizo una buena amiga", en: "she made a good friend", category: "other" },
          { es: "encontró su cafetería favorita", en: "she found her favorite coffee shop", category: "food" },
          { es: "le gusta su apartamento ahora", en: "she likes her apartment now", category: "opinion" },
          { es: "está más tranquila", en: "she's calmer now", category: "opinion" },
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        completions: [
          { es: "las cosas mejoraron", en: "things got better", category: "opinion" },
          { es: "ya tiene una rutina", en: "she has a routine now", category: "time" },
          { es: "se siente en casa", en: "she feels at home", category: "opinion" },
          { es: "todo va mejor ahora", en: "everything's better now", category: "opinion" },
          { es: "está más contenta", en: "she's happier", category: "opinion" },
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        completions: [
          { es: "encontró su lugar", en: "she found her place", category: "other" },
          { es: "ya no está sola", en: "she's not alone anymore", category: "opinion" },
          { es: "está orgullosa de sí misma", en: "she's proud of herself", category: "opinion" },
          { es: "hizo todo esto sola", en: "she did all this on her own", category: "opinion" },
          { es: "por fin se siente bien", en: "she finally feels good", category: "opinion" },
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        completions: [
          { es: "todo el esfuerzo valió la pena", en: "all the effort was worth it", category: "opinion" },
          { es: "ya siente Boston como su casa", en: "Boston feels like home now", category: "opinion" },
          { es: "voy a visitarla pronto", en: "I'm going to visit her soon", category: "time" },
          { es: "todo salió mejor de lo esperado", en: "everything turned out better than expected", category: "opinion" },
          { es: "encontró su nueva vida", en: "she found her new life", category: "other" },
        ],
      },
    ],
  },
  {
    day: 98,
    theme: "Repaso: resumir",
    stems: [
      {
        stem: "Trata de…",
        english: "It's about…",
        completions: [
          { es: "una amiga valiente", en: "a brave friend", category: "opinion" },
          { es: "cambiar de vida por completo", en: "changing your whole life", category: "activity" },
          { es: "un mes lleno de cambios", en: "a month full of changes", category: "time" },
          { es: "aprender a empezar de nuevo", en: "learning to start over", category: "activity" },
          { es: "seguir adelante con miedo y todo", en: "moving forward, fear and all", category: "opinion" },
        ],
      },
      {
        stem: "La idea principal es que…",
        english: "The main idea is that…",
        completions: [
          { es: "todo cambió en un mes", en: "everything changed in a month", category: "time" },
          { es: "lo logró sola", en: "she did it on her own", category: "opinion" },
          { es: "ahora tiene una vida nueva", en: "she has a new life now", category: "other" },
          { es: "nunca se rindió", en: "she never gave up", category: "opinion" },
          { es: "todo salió mejor de lo esperado", en: "everything turned out better than expected", category: "opinion" },
        ],
      },
      {
        stem: "En pocas palabras…",
        english: "In a few words…",
        completions: [
          { es: "fue un mes increíble", en: "it was an incredible month", category: "opinion" },
          { es: "por fin lo logró", en: "she finally did it", category: "opinion" },
          { es: "todo tuvo sentido al final", en: "it all made sense in the end", category: "opinion" },
          { es: "valió la pena el esfuerzo", en: "the effort was worth it", category: "opinion" },
          { es: "su vida cambió por completo", en: "her life changed completely", category: "other" },
        ],
      },
      {
        stem: "Lo importante es que…",
        english: "The important thing is…",
        completions: [
          { es: "nunca dejó de intentarlo", en: "she never stopped trying", category: "opinion" },
          { es: "pidió ayuda cuando la necesitó", en: "she asked for help when she needed it", category: "other" },
          { es: "ahora es más fuerte", en: "she's stronger now", category: "opinion" },
          { es: "no lo hizo sola del todo", en: "she didn't do it entirely alone", category: "opinion" },
          { es: "aprendió mucho de sí misma", en: "she learned a lot about herself", category: "other" },
        ],
      },
      {
        stem: "Al final…",
        english: "In the end…",
        completions: [
          { es: "encontró su hogar en Boston", en: "she found her home in Boston", category: "other" },
          { es: "todo el caos tuvo sentido", en: "all the chaos made sense", category: "opinion" },
          { es: "estamos muy orgullosas de ella", en: "we're very proud of her", category: "opinion" },
          { es: "empezó un capítulo nuevo", en: "she started a new chapter", category: "other" },
          { es: "la historia terminó feliz", en: "the story had a happy ending", category: "opinion" },
        ],
      },
    ],
  },
  ...week2SentenceFormerDays,
  ...week3SentenceFormerDays,
  ...week4SentenceFormerDays,
  ...week5SentenceFormerDays,
  ...week6SentenceFormerDays,
  ...week7SentenceFormerDays,
  ...week8SentenceFormerDays,
  ...week9SentenceFormerDays,
  ...week10SentenceFormerDays,
  ...week11SentenceFormerDays,
  ...week12SentenceFormerDays,
  ...week13SentenceFormerDays,
];
