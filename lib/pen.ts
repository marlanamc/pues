"use client";

/**
 * Whether a stylus has ever touched this app, and what follows from that.
 *
 * Palm rejection is not only the canvas's problem. A hand resting on the glass
 * lands on whatever is under it — a label, a button — and iOS answers with a
 * text selection or, worse, a tap. On a writing sheet the thing under your palm
 * may well be the control that erases the line you are in the middle of.
 *
 * So the rule is shared: once a pen has been seen, touch stops counting as
 * input anywhere that sits beside ink. Someone who never picks up a pencil is
 * unaffected — `penSeen` stays false and fingers work normally.
 *
 * Module-level on purpose. It must outlive any one component: a palm rejected
 * on one line must stay rejected on the next.
 */

let penSeen = false;

export function notePointerType(pointerType: string): void {
  if (pointerType === "pen") penSeen = true;
}

/**
 * True when this pointer is a stray palm rather than deliberate input.
 *
 * Only touch is ever stray. A mouse or trackpad pointer is deliberate by
 * definition — nobody rests a palm on a trackpad — and an iPad with a keyboard
 * case has one, so rejecting everything that is not a pen would kill the
 * trackpad the moment the Pencil came out.
 */
export function isStrayTouch(pointerType: string): boolean {
  return penSeen && pointerType === "touch";
}
