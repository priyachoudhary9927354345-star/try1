"use client";

import { useState } from "react";
import { ScentArt } from "@/components/ui/ScentArt";
import { Button } from "@/components/ui/Button";
import { NotesPyramid, IntensityMeters } from "@/components/product/NotesPyramid";
import { useCart } from "@/lib/cart-context";
import {
  DISCOVERY_PRICE,
  formatPrice,
  SIZES,
  type Product,
  type SizeMl,
} from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [size, setSize] = useState<SizeMl>(50);
  const [activeView, setActiveView] = useState(0);
  const [addedFull, setAddedFull] = useState(false);
  const [addedSample, setAddedSample] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-28 pt-32 lg:px-10 lg:pt-40">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <div className="aspect-[3/4] overflow-hidden rounded-sm bg-cream-dim">
            <ScentArt accent={product.accent} className="h-full w-full" />
          </div>
          <div className="mt-4 flex gap-3">
            {[0, 1, 2].map((i) => (
              <button
                key={i}
                onClick={() => setActiveView(i)}
                aria-label={`View ${i + 1}`}
                className={`h-16 w-14 overflow-hidden rounded-sm border transition-colors ${
                  activeView === i ? "border-gold-500" : "border-ink/10"
                }`}
              >
                <ScentArt accent={product.accent} className="h-full w-full" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold-700">
            {product.family}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-ink-soft">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink-faint">
              Size
            </p>
            <div className="flex gap-3">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-sm border px-5 py-3 text-sm transition-colors ${
                    size === s
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/15 text-ink-soft hover:border-gold-400"
                  }`}
                >
                  {s}ml
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <p className="font-display text-2xl text-ink">
              {formatPrice(product.prices[size])}
            </p>
            <Button
              onClick={() => {
                addItem(product.slug, size, 1);
                setAddedFull(true);
                window.setTimeout(() => setAddedFull(false), 1200);
              }}
              className="!px-8"
            >
              {addedFull ? "Added to Selection" : "Add to Cart"}
            </Button>
          </div>

          <div className="mt-10 rounded-sm border border-ink/10 bg-cream-dim/60 px-6 py-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-ink">Discovery Set</p>
                <p className="mt-1 text-xs text-ink-faint">
                  A 2ml sample of {product.name}, before committing to a bottle.
                </p>
              </div>
              <button
                onClick={() => {
                  addItem(product.slug, "sample", 1);
                  setAddedSample(true);
                  window.setTimeout(() => setAddedSample(false), 1200);
                }}
                className="whitespace-nowrap text-xs uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-gold-700"
              >
                {addedSample ? "Added" : `Add — ${formatPrice(DISCOVERY_PRICE)}`}
              </button>
            </div>
          </div>

          <div className="mt-14">
            <p className="mb-6 text-xs uppercase tracking-[0.2em] text-ink-faint">
              Notes
            </p>
            <NotesPyramid notes={product.notes} />
          </div>

          <div className="mt-10">
            <IntensityMeters longevity={product.longevity} sillage={product.sillage} />
          </div>

          <p className="mt-12 border-t border-ink/10 pt-8 text-sm leading-relaxed text-ink-soft">
            {product.story}
          </p>
        </div>
      </div>
    </div>
  );
}
