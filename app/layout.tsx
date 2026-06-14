import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import { AudioSpeedToggle } from "@/components/AudioSpeedToggle";
import { BottomTabNav } from "@/components/BottomTabNav";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-inter-tight",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pues",
  description: "A quiet notebook for thinking in Spanish.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Pues",
  },
};

export const viewport: Viewport = {
  themeColor: "#0e1420",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body className="min-h-dvh bg-bg text-ink antialiased">
        <AudioSpeedToggle />
        <main className="mx-auto w-full max-w-[520px] px-6 pt-14 pb-28">
          {children}
        </main>
        <BottomTabNav />
      </body>
    </html>
  );
}
