import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HostAtlas — A contextual experience layer for scenic transit",
  description:
    "HostAtlas gives river and coastal cruise operators a contextual experience layer for the journey between the highlights — turning what guests see into something they understand.",
  openGraph: {
    title: "HostAtlas",
    description:
      "A contextual experience layer for river and coastal cruise operators.",
    url: "https://hostatlas.guide",
    siteName: "HostAtlas",
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
