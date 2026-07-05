export type Frame = {
  stem: string;
  english: string;
  scenarios: string[];
  examples: string[];
  note?: string;
};

export type FrameDay = {
  day: number;
  theme: string;
  subtitle: string;
  frames: Frame[];
};
