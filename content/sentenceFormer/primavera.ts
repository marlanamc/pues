import type { SentenceFormerDay } from "./types";
import { priWeek1SentenceFormerDays } from "../drafts/primavera/week1-sentenceFormer";
import { priWeek2SentenceFormerDays } from "../drafts/primavera/week2-sentenceFormer";
import { priWeek3SentenceFormerDays } from "../drafts/primavera/week3-sentenceFormer";
import { priWeek4SentenceFormerDays } from "../drafts/primavera/week4-sentenceFormer";
import { priWeek5SentenceFormerDays } from "../drafts/primavera/week5-sentenceFormer";
import { priWeek6SentenceFormerDays } from "../drafts/primavera/week6-sentenceFormer";
import { priWeek7SentenceFormerDays } from "../drafts/primavera/week7-sentenceFormer";
import { priWeek8SentenceFormerDays } from "../drafts/primavera/week8-sentenceFormer";
import { priWeek9SentenceFormerDays } from "../drafts/primavera/week9-sentenceFormer";
import { priWeek10SentenceFormerDays } from "../drafts/primavera/week10-sentenceFormer";
import { priWeek11SentenceFormerDays } from "../drafts/primavera/week11-sentenceFormer";
import { priWeek12SentenceFormerDays } from "../drafts/primavera/week12-sentenceFormer";
import { priWeek13SentenceFormerDays } from "../drafts/primavera/week13-sentenceFormer";

/**
 * Sentence Former banks (Primavera / spring), days 274–364.
 *
 * Stems are copied verbatim from that day's frames in content/frames/primavera.ts.
 * Every completion `es` starts lowercase — it is appended after the stem.
 *
 * Weeks live in content/drafts/primavera/ and are spread in order below.
 */
export const primaveraSentenceFormerDays: SentenceFormerDay[] = [
  ...priWeek1SentenceFormerDays,
  ...priWeek2SentenceFormerDays,
  ...priWeek3SentenceFormerDays,
  ...priWeek4SentenceFormerDays,
  ...priWeek5SentenceFormerDays,
  ...priWeek6SentenceFormerDays,
  ...priWeek7SentenceFormerDays,
  ...priWeek8SentenceFormerDays,
  ...priWeek9SentenceFormerDays,
  ...priWeek10SentenceFormerDays,
  ...priWeek11SentenceFormerDays,
  ...priWeek12SentenceFormerDays,
  ...priWeek13SentenceFormerDays,
];
