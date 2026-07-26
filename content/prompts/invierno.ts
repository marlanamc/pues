import type { SpeakDay } from "./types";
import { invWeek1SpeakDays } from "../drafts/invierno/week1-prompts";
import { invWeek2SpeakDays } from "../drafts/invierno/week2-prompts";
import { invWeek3SpeakDays } from "../drafts/invierno/week3-prompts";
import { invWeek4SpeakDays } from "../drafts/invierno/week4-prompts";
import { invWeek5SpeakDays } from "../drafts/invierno/week5-prompts";
import { invWeek6SpeakDays } from "../drafts/invierno/week6-prompts";
import { invWeek7SpeakDays } from "../drafts/invierno/week7-prompts";
import { invWeek8SpeakDays } from "../drafts/invierno/week8-prompts";
import { invWeek9SpeakDays } from "../drafts/invierno/week9-prompts";
import { invWeek10SpeakDays } from "../drafts/invierno/week10-prompts";
import { invWeek11SpeakDays } from "../drafts/invierno/week11-prompts";
import { invWeek12SpeakDays } from "../drafts/invierno/week12-prompts";
import { invWeek13SpeakDays } from "../drafts/invierno/week13-prompts";

/**
 * Pues — Speak-First prompts (Invierno / winter), days 183–273.
 *
 * The season where Marlana stops sounding like a textbook: fillers first, then
 * the subjunctive as ready-made chunks, then the mechanics of a real
 * back-and-forth. Register is contemporary Latin American Spanish — phones are
 * cell phones, messages are audios and links (CURRICULUM.md convention 9).
 *
 * Weeks live in content/drafts/invierno/ and are spread in order below.
 * Index-aligned with content/frames/invierno.ts, and each day retells/reacts
 * to that day's installment in content/readings/invierno.ts.
 */
export const inviernoSpeakDays: SpeakDay[] = [
  ...invWeek1SpeakDays,
  ...invWeek2SpeakDays,
  ...invWeek3SpeakDays,
  ...invWeek4SpeakDays,
  ...invWeek5SpeakDays,
  ...invWeek6SpeakDays,
  ...invWeek7SpeakDays,
  ...invWeek8SpeakDays,
  ...invWeek9SpeakDays,
  ...invWeek10SpeakDays,
  ...invWeek11SpeakDays,
  ...invWeek12SpeakDays,
  ...invWeek13SpeakDays,
];
