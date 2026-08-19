/**
 * The build this copy of the app was made from — a library-card line at the
 * foot of Settings.
 *
 * Pues is an installed PWA, and iOS keeps a standalone page alive long enough
 * that a change can be live for days without reaching the home-screen icon.
 * Without a stamp there is no way to tell from the device which build you are
 * looking at, which turns "is this fixed?" into guesswork. Metadata, not
 * chrome: mono, muted, and the last thing on the page.
 */
export function BuildStamp() {
  const commit = process.env.NEXT_PUBLIC_BUILD_COMMIT;
  const time = process.env.NEXT_PUBLIC_BUILD_TIME;
  if (!commit && !time) return null;

  return (
    <p className="mono-cap" style={{ textAlign: "center" }}>
      Build {[commit, time].filter(Boolean).join(" · ")}
    </p>
  );
}
