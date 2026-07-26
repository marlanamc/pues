import type { FrameDay } from "./types";
import { priWeek1FrameDays } from "../drafts/primavera/week1-frames";
import { priWeek2FrameDays } from "../drafts/primavera/week2-frames";
import { priWeek3FrameDays } from "../drafts/primavera/week3-frames";
import { priWeek4FrameDays } from "../drafts/primavera/week4-frames";
import { priWeek5FrameDays } from "../drafts/primavera/week5-frames";
import { priWeek6FrameDays } from "../drafts/primavera/week6-frames";
import { priWeek7FrameDays } from "../drafts/primavera/week7-frames";
import { priWeek8FrameDays } from "../drafts/primavera/week8-frames";
import { priWeek9FrameDays } from "../drafts/primavera/week9-frames";
import { priWeek10FrameDays } from "../drafts/primavera/week10-frames";
import { priWeek11FrameDays } from "../drafts/primavera/week11-frames";
import { priWeek12FrameDays } from "../drafts/primavera/week12-frames";
import { priWeek13FrameDays } from "../drafts/primavera/week13-frames";

/**
 * Pues — daily frames (Primavera / spring), days 274–364.
 *
 * Spine: *personality and length* — your voice (weeks 1–4), gentle debate and
 * register (weeks 5–8), going long without prep (weeks 9–13). See
 * content/CURRICULUM.md §"Primavera, week by week".
 *
 * Weeks live in content/drafts/primavera/ and are spread in order below.
 * Index-aligned with content/prompts/primavera.ts.
 */
export const primaveraFrameDays: FrameDay[] = [
  ...priWeek1FrameDays,
  ...priWeek2FrameDays,
  ...priWeek3FrameDays,
  ...priWeek4FrameDays,
  ...priWeek5FrameDays,
  ...priWeek6FrameDays,
  ...priWeek7FrameDays,
  ...priWeek8FrameDays,
  ...priWeek9FrameDays,
  ...priWeek10FrameDays,
  ...priWeek11FrameDays,
  ...priWeek12FrameDays,
  ...priWeek13FrameDays,
];
