import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Aura Estates | Redefining Luxury Living",
  description:
    "Aura Estates is a boutique luxury real estate agency curating the world's most extraordinary residences, architectural masterpieces, and private estates.",
  keywords: [
    "luxury real estate",
    "luxury homes",
    "Aura Estates",
    "premium property",
    "architectural homes",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d0d10",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-charcoal-950 text-ivory-100 font-sans selection:bg-gold-400">
        {children}
      </body>
    </html>
  );
}
