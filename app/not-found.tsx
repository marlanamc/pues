import Link from "next/link";

/** Themed 404 — a calm dead-end with a way back home. */
export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 py-24 text-center">
      <div className="flex flex-col gap-2">
        <p className="mono-cap text-ink-mute">404</p>
        <h1 className="font-display text-2xl text-ink">
          Esta página no existe.
        </h1>
        <p className="max-w-[28ch] text-ink-soft">
          Quizá se movió, o el enlace no es correcto.
        </p>
      </div>
      <Link
        href="/"
        className="mono-cap inline-flex items-center justify-center rounded-full border border-rule px-5 py-2 text-ink-soft transition-colors hover:border-accent/60 hover:text-accent"
      >
        Ir al inicio
      </Link>
    </div>
  );
}
