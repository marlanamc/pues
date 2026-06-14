export type AccentDrill = {
  id: string;
  title: string;
  target: string;
  note: string;
  examples: {
    text: string;
    cue: string;
  }[];
};

export const accentDrills: AccentDrill[] = [
  {
    id: "vowels",
    title: "Clean vowels",
    target: "Keep a, e, i, o, u short and steady.",
    note:
      "For a Latin American sound, avoid sliding English vowels. No ay in cafe, no ow in no.",
    examples: [
      { text: "Me llamo Marlana.", cue: "Keep me and la simple." },
      { text: "Tengo una idea.", cue: "Each vowel gets one clean shape." },
      { text: "Quiero mejorar mi español.", cue: "Do not stretch quiero or mejorar." },
    ],
  },
  {
    id: "seseo",
    title: "C, Z, and S",
    target: "Use an S sound for ce, ci, z, and s.",
    note:
      "This is the Latin American default. Do not use the Spain-style th sound for gracias or corazón.",
    examples: [
      { text: "Gracias por la conversación.", cue: "Gracias starts with gra-sias." },
      { text: "Necesito practicar la pronunciación.", cue: "All the c/z sounds stay S-like." },
      { text: "La situación es interesante.", cue: "Keep situacion smooth and light." },
    ],
  },
  {
    id: "r-sounds",
    title: "Tap R, trill RR",
    target: "A single r is quick. Double rr is held and rolled.",
    note:
      "If the trill is hard, start with a fast tapped d sound and keep the tongue relaxed.",
    examples: [
      { text: "Quiero hablar con mi familia.", cue: "Tap the r in quiero and familia." },
      { text: "Trabajo en una escuela para adultos.", cue: "The r in trabajo is quick, not English." },
      { text: "El perro corre rápido.", cue: "Hold perro and corre longer than pero." },
    ],
  },
  {
    id: "soft-d",
    title: "Soft D",
    target: "Between vowels, d softens instead of becoming a hard English d.",
    note:
      "Think of the light th in this, but shorter. In many Latin American accents it can get very soft.",
    examples: [
      { text: "Estoy cansada hoy.", cue: "Soften the d in cansada." },
      { text: "He aprendido mucho.", cue: "Aprendido has a light middle d." },
      { text: "Todo depende del día.", cue: "Do not punch the d sounds." },
    ],
  },
  {
    id: "ll-y",
    title: "LL and Y",
    target: "Aim for a clear y or soft j sound.",
    note:
      "Latin America varies a lot, but a gentle y sound is a useful neutral target. Avoid turning ll into an English L.",
    examples: [
      { text: "Me llamo Marlana.", cue: "Llamo starts like yamo." },
      { text: "Ya estoy lista.", cue: "Ya starts with a clean y sound." },
      { text: "Ella tiene razón.", cue: "Ella can sound like eya or eja, not ela." },
    ],
  },
];

export function accentAudioTexts() {
  return accentDrills.flatMap((drill) => drill.examples.map((example) => example.text));
}
