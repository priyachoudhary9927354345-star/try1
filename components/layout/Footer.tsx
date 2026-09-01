import Link from "next/link";
import { Camera } from "lucide-react";
import { products } from "@/lib/products";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <span className="font-display text-2xl text-ink">MAISON</span>
          <span className="ml-2 text-[10px] tracking-[0.4em] uppercase text-gold-700">
            Élan
          </span>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-faint">
            Fine fragrance, composed in small batches from rare and
            sustainably sourced ingredients.
          </p>
          <div className="mt-6 grid grid-cols-4 gap-2">
            {products.map((product) => (
              <div
                key={product.slug}
                className="aspect-square rounded-sm"
                style={{ background: `${product.accent}22` }}
                aria-hidden
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-700">
            Client Care
          </h4>
          <ul className="space-y-2 text-sm text-ink-faint">
            <li>Shipping &amp; delivery</li>
            <li>Returns &amp; exchanges</li>
            <li>Track an order</li>
            <li>Contact concierge</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-gold-700">
            The House
          </h4>
          <ul className="space-y-2 text-sm text-ink-faint">
            <li>
              <Link href="#story" className="hover:text-ink">
                Our story
              </Link>
            </li>
            <li>hello@maisonelan.com</li>
            <li>By appointment, Paris</li>
            <li className="flex items-center gap-2 pt-1">
              <Camera size={14} />
              <span>@maisonelan</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-ink-faint sm:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} Maison Élan. All rights reserved.</p>
          <p className="tracking-wide">Scent, distilled into memory.</p>
        </div>
      </div>
    </footer>
  );
}
