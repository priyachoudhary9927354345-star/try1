"use client";

import Link from "next/link";
import { useState } from "react";
import { ScentArt } from "@/components/ui/ScentArt";
import { useCart } from "@/lib/cart-context";
import { formatPrice, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [adding, setAdding] = useState(false);

  return (
    <div className="group flex flex-col">
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-[3/4] overflow-hidden rounded-sm bg-cream-dim"
      >
        <ScentArt
          accent={product.accent}
          className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
        />
      </Link>

      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-display text-xl text-ink underline-reveal">
              {product.name}
            </h3>
          </Link>
          <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink-faint">
            {product.family}
          </p>
        </div>
        <p className="whitespace-nowrap text-sm text-ink-soft">
          {formatPrice(product.prices[50])}
        </p>
      </div>

      <button
        onClick={() => {
          addItem(product.slug, 50, 1);
          setAdding(true);
          window.setTimeout(() => setAdding(false), 1200);
        }}
        className="mt-4 self-start text-xs uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold-700"
      >
        {adding ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
