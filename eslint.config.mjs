import next from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const config = [
  ...next,
  ...nextTs,
  {
    rules: {
      // Spanish copy is full of apostrophes/quotes; HTML renders them fine.
      "react/no-unescaped-entities": "off",
      // The app deliberately reads localStorage in an effect after mount to stay
      // SSR-safe (avoids hydration mismatches). Keep visible as a warning rather
      // than forcing a risky refactor of every hydration hook.
      "react-hooks/set-state-in-effect": "warn",
      // Mutating DOM objects (HTMLAudioElement properties, refs) trips this; not
      // a React state mutation. Downgraded to a warning to surface real cases.
      "react-hooks/immutability": "warn",
      // Components defined during render (the games) — real perf nit to revisit,
      // but not worth refactoring large game files during this hardening pass.
      "react-hooks/static-components": "warn",
      "react-hooks/use-memo": "warn",
      "react-hooks/exhaustive-deps": "warn",
    },
  },
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "next-env.d.ts",
      // Tooling / vendored / design artifacts — not application source.
      ".claude/**",
      ".impeccable/**",
      "design_handoff*/**",
    ],
  },
];

export default config;
