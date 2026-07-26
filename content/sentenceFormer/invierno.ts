import type { SentenceFormerDay } from "./types";
import { invWeek1SentenceFormerDays } from "../drafts/invierno/week1-sentenceFormer";
import { invWeek2SentenceFormerDays } from "../drafts/invierno/week2-sentenceFormer";
import { invWeek3SentenceFormerDays } from "../drafts/invierno/week3-sentenceFormer";
import { invWeek4SentenceFormerDays } from "../drafts/invierno/week4-sentenceFormer";
import { invWeek5SentenceFormerDays } from "../drafts/invierno/week5-sentenceFormer";
import { invWeek6SentenceFormerDays } from "../drafts/invierno/week6-sentenceFormer";
import { invWeek7SentenceFormerDays } from "../drafts/invierno/week7-sentenceFormer";
import { invWeek8SentenceFormerDays } from "../drafts/invierno/week8-sentenceFormer";
import { invWeek9SentenceFormerDays } from "../drafts/invierno/week9-sentenceFormer";
import { invWeek10SentenceFormerDays } from "../drafts/invierno/week10-sentenceFormer";
import { invWeek11SentenceFormerDays } from "../drafts/invierno/week11-sentenceFormer";
import { invWeek12SentenceFormerDays } from "../drafts/invierno/week12-sentenceFormer";
import { invWeek13SentenceFormerDays } from "../drafts/invierno/week13-sentenceFormer";

/**
 * Sentence Former banks (Invierno / winter), days 183–273.
 *
 * Stems are copied verbatim from that day's frames in
 * content/frames/invierno.ts. Every completion `es` starts lowercase — it is
 * appended after the stem. The `category` enum stays as-is; the season's
 * conversational and subjunctive completions use `"other"` where none of the
 * narrower buckets fit.
 *
 * Weeks live in content/drafts/invierno/ and are spread in order below.
 */
export const inviernoSentenceFormerDays: SentenceFormerDay[] = [
  ...invWeek1SentenceFormerDays,
  ...invWeek2SentenceFormerDays,
  ...invWeek3SentenceFormerDays,
  ...invWeek4SentenceFormerDays,
  ...invWeek5SentenceFormerDays,
  ...invWeek6SentenceFormerDays,
  ...invWeek7SentenceFormerDays,
  ...invWeek8SentenceFormerDays,
  ...invWeek9SentenceFormerDays,
  ...invWeek10SentenceFormerDays,
  ...invWeek11SentenceFormerDays,
  ...invWeek12SentenceFormerDays,
  ...invWeek13SentenceFormerDays,
];
