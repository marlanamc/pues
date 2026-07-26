import type { ReadingDay } from "./types";
import { priWeek1ReadingDays } from "../drafts/primavera/week1-readings";
import { priWeek2ReadingDays } from "../drafts/primavera/week2-readings";
import { priWeek3ReadingDays } from "../drafts/primavera/week3-readings";
import { priWeek4ReadingDays } from "../drafts/primavera/week4-readings";
import { priWeek5ReadingDays } from "../drafts/primavera/week5-readings";
import { priWeek6ReadingDays } from "../drafts/primavera/week6-readings";
import { priWeek7ReadingDays } from "../drafts/primavera/week7-readings";
import { priWeek8ReadingDays } from "../drafts/primavera/week8-readings";
import { priWeek9ReadingDays } from "../drafts/primavera/week9-readings";
import { priWeek10ReadingDays } from "../drafts/primavera/week10-readings";
import { priWeek11ReadingDays } from "../drafts/primavera/week11-readings";
import { priWeek12ReadingDays } from "../drafts/primavera/week12-readings";
import { priWeek13ReadingDays } from "../drafts/primavera/week13-readings";

/**
 * La Lectura (Primavera / spring), days 274–364 — the season's input backbone.
 *
 * Thirteen weekly mini-stories continuing Marlana's Thursday exchange with
 * Camila and the Boston cast. Each week serializes across six new days with a
 * fresh recap on the repaso day. `themeEs` must match content/prompts/primavera.ts
 * at the same index.
 *
 * Weeks live in content/drafts/primavera/ and are spread in order below.
 */
export const primaveraReadingDays: ReadingDay[] = [
  ...priWeek1ReadingDays,
  ...priWeek2ReadingDays,
  ...priWeek3ReadingDays,
  ...priWeek4ReadingDays,
  ...priWeek5ReadingDays,
  ...priWeek6ReadingDays,
  ...priWeek7ReadingDays,
  ...priWeek8ReadingDays,
  ...priWeek9ReadingDays,
  ...priWeek10ReadingDays,
  ...priWeek11ReadingDays,
  ...priWeek12ReadingDays,
  ...priWeek13ReadingDays,
];
