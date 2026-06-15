/**
 * Pronunciation hub — sounds (Acento) and written stress marks (Tildes).
 */

export type PronunciationHubLink = {
  href: string;
  label: string;
  title: string;
};

export const pronunciationHubLinks: PronunciationHubLink[] = [
  {
    href: "/guides/pronunciation/accent",
    label: "Acento",
    title: "Train the sounds — Latin American target.",
  },
  {
    href: "/guides/pronunciation/tildes",
    label: "Tildes",
    title: "Written accents — where stress goes on the page.",
  },
];

export const pronunciationOverview = {
  pill: "Sound & stress",
  title: "Say it right. Mark it right.",
  gloss:
    "Pronunciation is two skills: how the word sounds in your mouth, and how Spanish writes the stressed syllable. Start with the sound drills, then learn when the tilde shows up in writing.",
  quickMap: [
    {
      label: "Sounds",
      spanish: "Acento",
      hint: "— vowels, c/z, r, soft d",
    },
    {
      label: "Stress marks",
      spanish: "Tildes",
      hint: "— qué vs que, café, teléfono",
    },
    {
      label: "Connected speech",
      spanish: "Enlace",
      hint: "— separate guide in Guías",
    },
  ],
  practiceSteps: [
    "Pick one sound drill from Acento. Shadow it three times.",
    "Read one Tildes pair out loud — stress the marked syllable.",
    "Say a sentence that uses both: clear sounds and correct stress.",
  ],
};
