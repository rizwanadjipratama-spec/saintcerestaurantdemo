import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Saintce Restaurant | Fresh Coffee & Juice Escape",
  description: "Experience the perfect blend of premium coffee and fresh juices in a modern, cozy atmosphere at Saintce Restaurant.",
  keywords: ["cafe", "coffee", "juice", "restaurant", "brunch", "saintce"],
  manifest: "/manifest.json",
  appleWebApp: {
    title: "saintce",
    statusBarStyle: "default",
    capable: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon1.png", type: "image/png" },
      { url: "/icon0.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} scroll-smooth`}
    >
      <body className="antialiased selection:bg-accent selection:text-cream">
        {children}
      </body>
    </html>
  );
}
