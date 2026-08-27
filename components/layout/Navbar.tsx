"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "#properties", label: "Properties" },
  { href: "#valuation", label: "Valuation" },
  { href: "#about", label: "Philosophy" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-panel py-4" : "bg-transparent py-6"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-wide text-ivory-100">
            AURA
          </span>
          <span className="text-[10px] tracking-[0.4em] uppercase text-gold-400">
            Estates
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm tracking-wide text-ivory-100/80">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative transition-colors hover:text-gold-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button
            variant="outline"
            className="!py-2.5 !px-5 !text-xs"
            onClick={() =>
              document
                .getElementById("valuation")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Valuation
          </Button>
        </div>

        <button
          className="md:hidden text-ivory-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-panel mt-4 mx-4 rounded-2xl px-6 py-6">
          <ul className="flex flex-col gap-5 text-base text-ivory-100/90">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
