"use client";

/**
 * Cópialos a mano — the week's stems, with a ruled line under each to copy it
 * onto.
 *
 * Step 1 of the hour has always been called "Copy them by hand" and has always
 * handed you a list to copy onto paper. This is that step with the paper in it.
 *
 * Note what is deliberately *not* hidden: the stem stays printed above its
 * line. Formar la frase hides it, because there the exercise is retrieval —
 * here the exercise is copying, so the source stays in front of you.
 *
 * There is no save button. A sheet is filled in across an unhurried hour, and
 * closing the step or wandering off must not lose it, so each line writes
 * itself back a beat after the pen lifts.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { Gloss } from "@/components/Gloss";
import { speakDays } from "@/content/prompts";
import { InkLine, RULE_HEIGHT, inkLineHeight } from "@/components/InkLine";
import { useNearViewport } from "@/hooks/useNearViewport";
import { isEmpty, type InkDrawing } from "@/lib/ink";
import { isStrayTouch } from "@/lib/pen";
import { deleteInk, getInk, putInk } from "@/lib/inkStore";
import { clearWeekCopyInk, getWeekCopy, newId, setWeekCopyInk, weekCopyKey } from "@/lib/store";
import type { WeekStem } from "@/lib/weekStems";

/** Long enough that a pause mid-word is not a write, short enough to be safe. */
const AUTOSAVE_MS = 600;

type DayGroup = { day: number; themeEs: string; themeEn: string; stems: WeekStem[] };

/**
 * Thirty-five lines in one column is a wall. The week already has a shape, so
 * the sheet borrows it.
 *
 * `stemsForWeek` walks the days in order and keeps a stem's first appearance
 * only, so a plain linear pass groups correctly — and a repaso day whose stems
 * all appeared earlier simply produces no group, which is right: there is
 * nothing new to copy on it.
 */
function groupByDay(stems: WeekStem[]): DayGroup[] {
  const groups: DayGroup[] = [];
  for (const stem of stems) {
    let group = groups[groups.length - 1];
    if (!group || group.day !== stem.day) {
      const speak = speakDays[stem.day - 1];
      group = { day: stem.day, themeEs: speak.themeEs, themeEn: speak.themeEn, stems: [] };
      groups.push(group);
    }
    group.stems.push(stem);
  }
  return groups;
}

function CopyRow({ week, stem }: { week: number; stem: WeekStem }) {
  const rowRef = useRef<HTMLLIElement | null>(null);
  const near = useNearViewport(rowRef);

  const [drawing, setDrawing] = useState<InkDrawing | null>(null);
  const [loaded, setLoaded] = useState(false);
  const inkIdRef = useRef<string | null>(null);
  const timerRef = useRef<number | null>(null);
  const pendingRef = useRef<InkDrawing | null>(null);

  // Restore whatever is in storage. Runs again when a row scrolls back into
  // range, so a torn-down line comes back exactly as it was written.
  useEffect(() => {
    if (!near) return;
    let cancelled = false;
    const existing = getWeekCopy()[weekCopyKey(week, stem.promptId)] ?? null;
    inkIdRef.current = existing;
    const load = existing ? getInk(existing) : Promise.resolve(null);
    load.then((d) => {
      if (cancelled) return;
      setDrawing(d);
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, [near, week, stem.promptId]);

  const flush = useCallback(
    (next: InkDrawing) => {
      const id = inkIdRef.current ?? newId("ink");
      inkIdRef.current = id;
      void putInk(id, next);
      // The pointer is written only once the strokes are on their way, so a
      // stored pointer never refers to ink that was never saved.
      setWeekCopyInk(week, stem.promptId, id);
    },
    [week, stem.promptId],
  );

  function handleChange(next: InkDrawing) {
    setDrawing(next);
    pendingRef.current = next;
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => flush(next), AUTOSAVE_MS);
  }

  // A pending write must not be lost to unmounting — closing the step, opening
  // another, or simply scrolling this row out of range tears it down mid-timer.
  useEffect(() => {
    return () => {
      if (timerRef.current === null) return;
      window.clearTimeout(timerRef.current);
      const pending = pendingRef.current;
      if (pending && !isEmpty(pending)) flush(pending);
    };
  }, [flush]);

  function handleClear() {
    if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    timerRef.current = null;
    pendingRef.current = null;
    const id = inkIdRef.current;
    if (id) void deleteInk(id);
    inkIdRef.current = null;
    clearWeekCopyInk(week, stem.promptId);
    setDrawing(null);
  }

  // A palm resting on this control would erase the line being written, and
  // there is no undo once it is gone. The pointer that opened the press decides
  // whether the press counts.
  const pressWasStray = useRef(false);

  const written = !isEmpty(drawing);

  return (
    <li className="week-copy__row" ref={rowRef}>
      <div className="week-copy__head">
        <p className="week-copy__stem">
          {stem.stem}
          <Gloss>{stem.english}</Gloss>
        </p>
        {written && (
          <button
            type="button"
            className="week-copy__clear"
            onPointerDown={(e) => {
              pressWasStray.current = isStrayTouch(e.pointerType);
            }}
            onClick={(e) => {
              // detail 0 is a keyboard activation, which has no pointer and is
              // always deliberate.
              if (e.detail !== 0 && pressWasStray.current) return;
              handleClear();
            }}
          >
            Borrar
          </button>
        )}
      </div>
      {near && loaded ? (
        <InkLine
          stem={stem.stem}
          value={drawing}
          onChange={handleChange}
          rules={1}
          showTools={false}
          bare
        />
      ) : (
        // The line's own classes, so a dormant row is indistinguishable from a
        // live one and scrolling past it never shifts the page under the pen.
        <div
          className="ink-line__sheet ink-line__sheet--bare week-copy__dormant"
          style={{
            height: inkLineHeight(1),
            ["--ink-rule-h" as string]: `${RULE_HEIGHT}px`,
          }}
          aria-hidden
        />
      )}
    </li>
  );
}

export function WeekCopySheet({ week, stems }: { week: number; stems: WeekStem[] }) {
  return (
    <div className="week-copy">
      <p className="week-copy__lede">
        Cópialos con el lápiz. Nadie los corrige — la mano es el punto.
        <Gloss>Copy them with the pencil. Nothing is corrected — the hand is the point.</Gloss>
      </p>
      <ol className="week-copy__days">
        {groupByDay(stems).map((group) => (
          <li key={group.day} className="week-copy__day">
            <p className="text-caption week-copy__day-head">
              Día {String(group.day).padStart(2, "0")} · {group.themeEs}
              <Gloss>{group.themeEn}</Gloss>
            </p>
            <ul className="week-copy__list">
              {group.stems.map((s) => (
                <CopyRow key={s.promptId} week={week} stem={s} />
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
}
