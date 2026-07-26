import type { SpeakDay } from "./types";
import { priWeek1SpeakDays } from "../drafts/primavera/week1-prompts";
import { priWeek2SpeakDays } from "../drafts/primavera/week2-prompts";
import { priWeek3SpeakDays } from "../drafts/primavera/week3-prompts";
import { priWeek4SpeakDays } from "../drafts/primavera/week4-prompts";
import { priWeek5SpeakDays } from "../drafts/primavera/week5-prompts";
import { priWeek6SpeakDays } from "../drafts/primavera/week6-prompts";
import { priWeek7SpeakDays } from "../drafts/primavera/week7-prompts";
import { priWeek8SpeakDays } from "../drafts/primavera/week8-prompts";
import { priWeek9SpeakDays } from "../drafts/primavera/week9-prompts";
import { priWeek10SpeakDays } from "../drafts/primavera/week10-prompts";
import { priWeek11SpeakDays } from "../drafts/primavera/week11-prompts";
import { priWeek12SpeakDays } from "../drafts/primavera/week12-prompts";
import { priWeek13SpeakDays } from "../drafts/primavera/week13-prompts";

/**
 * Pues — Speak-First prompts (Primavera / spring), days 274–364.
 *
 * The season where Marlana speaks as herself: humor, color, gentle debate,
 * register shifts, and conversations that stay alive for fifteen minutes.
 * Contemporary Latin American Spanish throughout (CURRICULUM.md convention 9).
 *
 * Weeks live in content/drafts/primavera/ and are spread in order below.
 * Index-aligned with content/frames/primavera.ts and content/readings/primavera.ts.
 */
export const primaveraSpeakDays: SpeakDay[] = [
  ...priWeek1SpeakDays,
  ...priWeek2SpeakDays,
  ...priWeek3SpeakDays,
  ...priWeek4SpeakDays,
  ...priWeek5SpeakDays,
  ...priWeek6SpeakDays,
  ...priWeek7SpeakDays,
  ...priWeek8SpeakDays,
  ...priWeek9SpeakDays,
  ...priWeek10SpeakDays,
  ...priWeek11SpeakDays,
  ...priWeek12SpeakDays,
  ...priWeek13SpeakDays,
];
