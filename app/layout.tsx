import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="font-body bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
