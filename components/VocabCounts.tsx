"use client";

import type { VocabProgress } from "@/lib/store";

/**
 * The three-number progress line, shared by the index and the theme screen.
 *
 * Numbers, never a bar and never a percentage. A meter that fills is a
 * progress game, and the list is long enough that a 4%-full bar would read as
 * discouragement rather than information. `sabidas / en marcha / sin ver` just
 * says where things stand.
 *
 * Takes the progress map rather than reading the store so a list of 27 themes
 * costs one read, not 27.
 */
export function VocabCounts({
  ids,
  progress,
}: {
  ids: string[];
  progress: VocabProgress;
}) {
  let known = 0;
  let learning = 0;
  for (const id of ids) {
    const state = progress[id];
    if (!state) continue;
    if (state.status === "known") known += 1;
    else learning += 1;
  }
  const unseen = ids.length - known - learning;

  if (known === 0 && learning === 0) {
    return <span className="text-caption text-ink-mute">{ids.length} sin ver</span>;
  }

  return (
    <span className="text-caption text-ink-mute">
      {known} sabidas
      {learning > 0 && (
        <>
          {" · "}
          <span style={{ color: "var(--zone)" }}>{learning} en marcha</span>
        </>
      )}
      {unseen > 0 && ` · ${unseen} sin ver`}
    </span>
  );
}
