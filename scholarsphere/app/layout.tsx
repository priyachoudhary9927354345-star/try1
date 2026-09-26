import type { Metadata, Viewport } from "next";
import { Fredoka, Plus_Jakarta_Sans } from "next/font/google";
import { Nav } from "@/components/Nav";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ScholarSphere — CBSE study companion for Classes 8–12",
    template: "%s · ScholarSphere",
  },
  description:
    "Explore the CBSE curriculum chapter by chapter, get simple AI explanations, make notes and practise with quizzes and flashcards. No sign-up needed.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} ${fredoka.variable}`}>
      <body className="min-h-dvh font-sans antialiased">
        <Nav />
        <main className="mx-auto w-full max-w-6xl px-4 pb-28 pt-6 sm:px-6 md:pb-16">
          {children}
        </main>
      </body>
    </html>
  );
}
