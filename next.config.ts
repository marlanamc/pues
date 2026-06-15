import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
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
