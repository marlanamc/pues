import type { Metadata, Viewport } from "next";
import { Newsreader, Hanken_Grotesk, Spline_Sans_Mono } from "next/font/google";
import { BottomTabNav } from "@/components/BottomTabNav";
import { LeftRailNav } from "@/components/LeftRailNav";
import "./globals.css";

// Newsreader — display, headlines, and all Spanish sentences. The soul of the look.
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

// Hanken Grotesk — interface and body text.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

// Spline Sans Mono — metadata only (the library-card / ledger signal).
const splineMono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-spline-mono",
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
  themeColor: "#1b1712",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const themeModeScript = `
try {
  var mode = JSON.parse(localStorage.getItem("pues:theme-mode") || '"dark"');
  document.documentElement.classList.toggle("light", mode === "light");
} catch {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${hanken.variable} ${splineMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-bg text-ink antialiased lg:flex">
        <script dangerouslySetInnerHTML={{ __html: themeModeScript }} />
        <LeftRailNav />
        <main className="w-full px-6 pt-3 pb-28 lg:flex lg:flex-1 lg:min-h-0 lg:min-w-0 lg:flex-col lg:px-0 lg:pt-10 lg:pb-12">
          <div className="mx-auto w-full max-w-[520px] lg:max-w-[1040px] lg:px-12">
            {children}
          </div>
        </main>
        <BottomTabNav />
      </body>
    </html>
  );
}
