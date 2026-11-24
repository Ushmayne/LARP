import type { Metadata, Viewport } from "next";
import { Fredoka, Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

const fredoka = Fredoka({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-fredoka", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Larp · Know ball in 5 minutes", template: "%s · Larp" },
  description: "Five-minute packs on any fandom: the names, the slang, the hot takes. Then a vibe check tells you if you'd pass.",
};

export const viewport: Viewport = {
  themeColor: "#2A1B3D",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${inter.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
