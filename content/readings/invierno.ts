import type { ReadingDay } from "./types";
import { invWeek1ReadingDays } from "../drafts/invierno/week1-readings";
import { invWeek2ReadingDays } from "../drafts/invierno/week2-readings";
import { invWeek3ReadingDays } from "../drafts/invierno/week3-readings";
import { invWeek4ReadingDays } from "../drafts/invierno/week4-readings";
import { invWeek5ReadingDays } from "../drafts/invierno/week5-readings";
import { invWeek6ReadingDays } from "../drafts/invierno/week6-readings";
import { invWeek7ReadingDays } from "../drafts/invierno/week7-readings";
import { invWeek8ReadingDays } from "../drafts/invierno/week8-readings";
import { invWeek9ReadingDays } from "../drafts/invierno/week9-readings";
import { invWeek10ReadingDays } from "../drafts/invierno/week10-readings";
import { invWeek11ReadingDays } from "../drafts/invierno/week11-readings";
import { invWeek12ReadingDays } from "../drafts/invierno/week12-readings";
import { invWeek13ReadingDays } from "../drafts/invierno/week13-readings";

/**
 * La Lectura (Invierno / winter), days 183–273 — the season's input backbone.
 *
 * Thirteen self-contained weekly mini-stories with a new cast, unconnected to
 * Otoño's "Naty se muda". Each week serializes across its six new days
 * (`storyTitle` + `part`/`partsTotal`) with a fresh recap dialogue on the
 * repaso day (`isRecap`). That day's speak prompts retell/react to that day's
 * installment.
 *
 * Weeks live in content/drafts/invierno/ and are spread in order below.
 * `themeEs` must match content/prompts/invierno.ts at the same index.
 */
export const inviernoReadingDays: ReadingDay[] = [
  ...invWeek1ReadingDays,
  ...invWeek2ReadingDays,
  ...invWeek3ReadingDays,
  ...invWeek4ReadingDays,
  ...invWeek5ReadingDays,
  ...invWeek6ReadingDays,
  ...invWeek7ReadingDays,
  ...invWeek8ReadingDays,
  ...invWeek9ReadingDays,
  ...invWeek10ReadingDays,
  ...invWeek11ReadingDays,
  ...invWeek12ReadingDays,
  ...invWeek13ReadingDays,
];
