"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  return (
    <section className="bg-ink py-24 sm:py-28">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
        <p className="flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase text-gold-300">
          <span className="h-px w-8 bg-gold-400" />
          Private List
        </p>
        <h2 className="mt-6 font-display text-3xl leading-tight text-cream sm:text-4xl">
          Join the private list.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-cream/60">
          Early access to new fragrances, limited formulations, and notes
          from the studio. No noise.
        </p>

        {status === "idle" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setStatus("submitted");
            }}
            className="mx-auto mt-8 flex max-w-sm flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full border-b border-cream/30 bg-transparent px-1 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold-400 focus:outline-none"
            />
            <Button
              type="submit"
              className="!bg-gold-400 !text-ink hover:!bg-gold-300 !py-3 !px-6 !text-xs whitespace-nowrap"
            >
              Request Access
            </Button>
          </form>
        ) : (
          <p className="mt-8 text-sm text-gold-300">
            You&apos;re on the list. We&apos;ll be in touch.
          </p>
        )}
      </div>
    </section>
  );
}
