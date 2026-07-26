import type { FrameDay } from "./types";
import { invWeek1FrameDays } from "../drafts/invierno/week1-frames";
import { invWeek2FrameDays } from "../drafts/invierno/week2-frames";
import { invWeek3FrameDays } from "../drafts/invierno/week3-frames";
import { invWeek4FrameDays } from "../drafts/invierno/week4-frames";
import { invWeek5FrameDays } from "../drafts/invierno/week5-frames";
import { invWeek6FrameDays } from "../drafts/invierno/week6-frames";
import { invWeek7FrameDays } from "../drafts/invierno/week7-frames";
import { invWeek8FrameDays } from "../drafts/invierno/week8-frames";
import { invWeek9FrameDays } from "../drafts/invierno/week9-frames";
import { invWeek10FrameDays } from "../drafts/invierno/week10-frames";
import { invWeek11FrameDays } from "../drafts/invierno/week11-frames";
import { invWeek12FrameDays } from "../drafts/invierno/week12-frames";
import { invWeek13FrameDays } from "../drafts/invierno/week13-frames";

/**
 * Pues — daily frames (Invierno / winter), days 183–273.
 *
 * Spine: *natural, fast, real* — colloquial glue (weeks 1–4), the subjunctive
 * as chunks you complete rather than tables you memorize (weeks 5–8), and
 * real-time conversation mechanics (weeks 9–13). See content/CURRICULUM.md
 * §"Invierno, week by week".
 *
 * Weeks live in content/drafts/invierno/ and are spread in order below.
 * Index-aligned with content/prompts/invierno.ts.
 */
export const inviernoFrameDays: FrameDay[] = [
  ...invWeek1FrameDays,
  ...invWeek2FrameDays,
  ...invWeek3FrameDays,
  ...invWeek4FrameDays,
  ...invWeek5FrameDays,
  ...invWeek6FrameDays,
  ...invWeek7FrameDays,
  ...invWeek8FrameDays,
  ...invWeek9FrameDays,
  ...invWeek10FrameDays,
  ...invWeek11FrameDays,
  ...invWeek12FrameDays,
  ...invWeek13FrameDays,
];
