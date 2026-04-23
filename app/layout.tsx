import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Host Atlas — Curated narratives for the silent stretches",
  description:
    "The Host Atlas gives river, coastal, and expedition cruise operators a contextual experience layer for the journey between the highlights. Curated narratives for the silent stretches.",
  openGraph: {
    title: "The Host Atlas — Curated narratives for the silent stretches",
    description:
      "A contextual experience layer for river, coastal, and expedition cruise operators. Turning scenic transit into curated narrative.",
    url: "https://hostatlas.guide",
    siteName: "The Host Atlas",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} bg-[#FBFAF8]`}>
      <body className="bg-[#FBFAF8] text-[#1A1A2E] font-body antialiased">
        {children}
      </body>
    </html>
  );
}
