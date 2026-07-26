export type { Frame, FrameDay } from "./frames/types";
import type { FrameDay } from "./frames/types";
import { veranoFrameDays } from "./frames/verano";
import { otonoFrameDays } from "./frames/otono";
import { inviernoFrameDays } from "./frames/invierno";

/**
 * Pues — daily frames barrel. Concatenates each season's day-aligned
 * FrameDay arrays into one flat, sequentially-numbered array (see
 * content/CURRICULUM.md convention 7). New temporadas are added by
 * importing + concatenating another season file here — never by
 * branching on the calendar date.
 */
export const frameDays: FrameDay[] = [
  ...veranoFrameDays,
  ...otonoFrameDays,
  ...inviernoFrameDays,
];

export const totalDays = frameDays.length;
