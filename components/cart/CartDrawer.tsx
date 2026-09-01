"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X, Minus, Plus } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { getProduct, formatPrice, DISCOVERY_PRICE } from "@/lib/products";
import { Button } from "@/components/ui/Button";
import { ScentArt } from "@/components/ui/ScentArt";

export function CartDrawer() {
  const { lines, isOpen, closeCart, updateQuantity, removeItem, subtotal } = useCart();

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeCart();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-ink/40 transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-display text-xl text-ink">Your Selection</h2>
          <button onClick={closeCart} aria-label="Close cart" className="text-ink hover:text-gold-700">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          {lines.length === 0 ? (
            <p className="mt-12 text-center text-sm text-ink-faint">
              Your selection is empty.
            </p>
          ) : (
            <ul className="space-y-6">
              {lines.map((line) => {
                const product = getProduct(line.slug);
                if (!product) return null;
                const unitPrice =
                  line.size === "sample" ? DISCOVERY_PRICE : product.prices[line.size];
                return (
                  <li key={`${line.slug}-${line.size}`} className="flex gap-4">
                    <ScentArt
                      accent={product.accent}
                      className="h-24 w-20 flex-shrink-0 rounded-md"
                    />
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <Link
                            href={`/products/${product.slug}`}
                            onClick={closeCart}
                            className="font-display text-base text-ink hover:text-gold-700"
                          >
                            {product.name}
                          </Link>
                          <p className="text-xs uppercase tracking-widest text-ink-faint mt-1">
                            {line.size === "sample" ? "Discovery Sample · 2ml" : `${line.size}ml`}
                          </p>
                        </div>
                        <p className="text-sm text-ink-soft">
                          {formatPrice(unitPrice * line.quantity)}
                        </p>
                      </div>

                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center gap-3 rounded-full border border-ink/15 px-3 py-1">
                          <button
                            aria-label="Decrease quantity"
                            onClick={() => updateQuantity(line.slug, line.size, line.quantity - 1)}
                            className="text-ink-soft hover:text-gold-700"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-4 text-center text-sm">{line.quantity}</span>
                          <button
                            aria-label="Increase quantity"
                            onClick={() => updateQuantity(line.slug, line.size, line.quantity + 1)}
                            className="text-ink-soft hover:text-gold-700"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(line.slug, line.size)}
                          className="text-xs uppercase tracking-wide text-ink-faint hover:text-ink"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-ink/10 px-6 py-6">
            <div className="flex items-center justify-between text-sm text-ink-soft">
              <span className="uppercase tracking-widest text-xs">Subtotal</span>
              <span className="font-display text-lg text-ink">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-1 text-xs text-ink-faint">Shipping and taxes calculated at checkout.</p>
            <Button className="mt-5 w-full">Proceed to Checkout</Button>
          </div>
        )}
      </aside>
    </div>
  );
}
