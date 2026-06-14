export type LinkingDrill = {
  id: string;
  title: string;
  target: string;
  note: string;
  examples: {
    text: string;
    /** How it actually sounds — words joined, to show the flow. */
    linked: string;
    cue: string;
  }[];
};

export const linkingDrills: LinkingDrill[] = [
  {
    id: "vowel-linking",
    title: "Vowel meets vowel",
    target: "When one word ends in a vowel and the next starts with one, glide them together.",
    note:
      "This is sinalefa — the heart of sounding fluent instead of word-by-word. The two vowels become one smooth sound. (Remember: h is silent, so it counts as a vowel start.)",
    examples: [
      { text: "la escuela", linked: "laescuela", cue: "No stop between la and escuela — slide straight through." },
      { text: "mi hermana", linked: "miermana", cue: "The h is silent, so mi glides right into ermana." },
      { text: "su amigo", linked: "suamigo", cue: "u into a, one smooth glide." },
      { text: "lo olvidé", linked: "lolvidé", cue: "Two o's collapse into one. Don't say each separately." },
      { text: "está aquí", linked: "estaquí", cue: "a meets a — merge them, don't reset." },
    ],
  },
  {
    id: "consonant-linking",
    title: "Consonant into vowel",
    target: "A word ending in a consonant ties onto the next word's vowel.",
    note:
      "This is enlace. The consonant resyllabifies — it actually starts the next word's syllable. It's why fast speech is hard to follow: the word boundaries disappear.",
    examples: [
      { text: "los amigos", linked: "lo-sa-mi-gos", cue: "The s jumps over: lo-SA-mi-gos." },
      { text: "un año", linked: "u-na-ño", cue: "The n leads into año: u-NA-ño." },
      { text: "el agua", linked: "e-la-gua", cue: "The l carries into agua: e-LA-gua." },
      { text: "con ella", linked: "co-ne-lla", cue: "The n starts ella: co-NE-lla." },
      { text: "mis hijos", linked: "mi-si-jos", cue: "h is silent, so the s links straight in: mi-SI-jos." },
    ],
  },
  {
    id: "rhythm",
    title: "Even rhythm",
    target: "Give every syllable roughly the same length. No rushing, no swallowing vowels.",
    note:
      "Spanish is syllable-timed — unlike English, it doesn't reduce little words. Keeping a steady beat is what makes you both sound natural and hear the rhythm of others.",
    examples: [
      { text: "Necesito practicar más.", linked: "ne-ce-si-to-prac-ti-car-más", cue: "Eight even beats. Don't speed up on the small syllables." },
      { text: "Todo depende del día.", linked: "to-do-de-pen-de-del-dí-a", cue: "Steady and equal — let each beat land." },
      { text: "Tengo mucho que hacer hoy.", linked: "ten-go-mu-cho-quea-cer-oy", cue: "que hacer links into 'queacer' — keep the beat even through it." },
    ],
  },
  {
    id: "own-frames",
    title: "Link your own sentences",
    target: "The same links inside real sentences from your daily frames.",
    note:
      "These are lines you already practice. Find the joins, then say the whole thing in one smooth breath instead of word by word.",
    examples: [
      { text: "Quiero aprender más español.", linked: "Quieroaprender más español.", cue: "Quiero glides into aprender — o straight into a." },
      { text: "Creo que es una buena idea.", linked: "Creo que esuna buenaidea.", cue: "es-una join, and buena-idea join. Two smooth links." },
      { text: "Me gusta el café fuerte por la mañana.", linked: "Me gustael café fuerte por la mañana.", cue: "gusta ties into el: gusta-EL café." },
    ],
  },
];

export function linkingAudioTexts() {
  return linkingDrills.flatMap((drill) => drill.examples.map((example) => example.text));
}
