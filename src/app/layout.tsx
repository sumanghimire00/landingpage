import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, } from "next/font/google";
import "./globals.css";
import TopBanner from "../components/layout/TopBanner";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "AstroParasar",
    template: "AstroParasar",
  },
  description:
    "Discover hidden karmic patterns and gain clarity through Vedic astrology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} h-full`}>
      <body className="min-h-screen bg-[#f8f5f2] font-sans antialiased">
        <TopBanner />
        {children}
      </body>
    </html>
  );
}