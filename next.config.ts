import { execSync } from "node:child_process";
import type { NextConfig } from "next";

/**
 * Build identity, resolved once at build time and inlined into the bundle.
 *
 * This exists because the app is an installed PWA: iOS keeps a standalone page
 * alive for days, so "is my iPad running the fix?" is a real question with no
 * obvious answer from the device. The stamp on Settings answers it.
 */
function buildCommit(): string {
  // Vercel does not ship a .git directory, but it does set this.
  const fromHost = process.env.VERCEL_GIT_COMMIT_SHA;
  if (fromHost) return fromHost.slice(0, 7);
  try {
    return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return "";
  }
}

/** Fixed UTC, formatted here rather than in the browser — a locale-formatted
 *  date would render differently on the server and the client and mismatch. */
function buildTime(): string {
  return new Date().toISOString().slice(0, 16).replace("T", " ") + " UTC";
}

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BUILD_COMMIT: buildCommit(),
    NEXT_PUBLIC_BUILD_TIME: buildTime(),
  },
  async redirects() {
    return [
      {
        source: "/activities",
        destination: "/guides",
        permanent: true,
      },
      {
        source: "/activities/:path*",
        destination: "/guides/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
