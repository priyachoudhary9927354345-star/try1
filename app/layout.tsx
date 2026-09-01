import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
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

const siteUrl = "https://maison-elan.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Maison Élan | Fine Fragrance House",
    template: "%s | Maison Élan",
  },
  description:
    "Maison Élan is a fine fragrance house crafting small-batch perfumes from rare, sustainably sourced ingredients. Scent, distilled into memory.",
  keywords: [
    "Maison Élan",
    "luxury perfume",
    "niche fragrance",
    "fine fragrance house",
    "small batch perfume",
  ],
  openGraph: {
    title: "Maison Élan | Fine Fragrance House",
    description: "Scent, distilled into memory.",
    url: siteUrl,
    siteName: "Maison Élan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maison Élan | Fine Fragrance House",
    description: "Scent, distilled into memory.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ef",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink font-sans selection:bg-gold-400">
        <CartProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
