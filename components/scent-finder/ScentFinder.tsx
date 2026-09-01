"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScentArt } from "@/components/ui/ScentArt";
import { Button } from "@/components/ui/Button";
import { products, type Product } from "@/lib/products";

type Question = {
  prompt: string;
  options: { label: string; tags: string[] }[];
};

const QUESTIONS: Question[] = [
  {
    prompt: "What mood are you dressing for?",
    options: [
      { label: "Warm and intimate", tags: ["warm", "intimate"] },
      { label: "Fresh and grounded", tags: ["fresh", "grounded"] },
      { label: "Romantic and light", tags: ["romantic", "airy"] },
      { label: "Bold and unapologetic", tags: ["bold"] },
    ],
  },
  {
    prompt: "When will you wear it, most often?",
    options: [
      { label: "Daylight hours", tags: ["daytime"] },
      { label: "After dark", tags: ["evening"] },
    ],
  },
  {
    prompt: "Which notes call to you?",
    options: [
      { label: "Amber, oud, sandalwood", tags: ["warm", "evening", "intimate"] },
      { label: "Vetiver, fig, moss", tags: ["fresh", "grounded", "daytime"] },
      { label: "Rose, sea salt, musk", tags: ["romantic", "daytime", "airy"] },
      { label: "Leather, tobacco, amber", tags: ["bold", "evening"] },
    ],
  },
];

function recommend(selectedTags: string[]): Product {
  let best = products[0];
  let bestScore = -1;
  for (const product of products) {
    const score = product.mood.reduce(
      (acc, tag) => acc + (selectedTags.includes(tag) ? 1 : 0),
      0,
    );
    if (score > bestScore) {
      bestScore = score;
      best = product;
    }
  }
  return best;
}

export function ScentFinder() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[][]>([]);

  const isDone = step >= QUESTIONS.length;
  const result = useMemo(
    () => (isDone ? recommend(answers.flat()) : null),
    [isDone, answers],
  );

  const choose = (tags: string[]) => {
    setAnswers((prev) => [...prev, tags]);
    setStep((s) => s + 1);
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <section id="scent-finder" className="bg-cream-dim py-28 sm:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="Scent Finder"
          title="Not sure where to begin?"
          description="Four questions. One considered recommendation."
          align="center"
        />

        <div className="mt-16 min-h-[280px]">
          {!isDone ? (
            <div className="mx-auto max-w-xl text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-ink-faint">
                Question {step + 1} of {QUESTIONS.length}
              </p>
              <h3 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
                {QUESTIONS[step].prompt}
              </h3>
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {QUESTIONS[step].options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => choose(option.tags)}
                    className="rounded-sm border border-ink/15 bg-cream px-6 py-4 text-sm text-ink-soft transition-colors hover:border-gold-400 hover:text-ink"
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            result && (
              <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
                <ScentArt
                  accent={result.accent}
                  className="h-56 w-44 flex-shrink-0 rounded-sm"
                />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold-700">
                    Recommended for you
                  </p>
                  <h3 className="mt-3 font-display text-3xl text-ink">
                    {result.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-ink-faint">
                    {result.family}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                    {result.tagline}
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-4 sm:justify-start">
                    <Link href={`/products/${result.slug}`}>
                      <Button variant="gold" className="!py-3 !px-6 !text-xs">
                        View Fragrance
                      </Button>
                    </Link>
                    <button
                      onClick={restart}
                      className="text-xs uppercase tracking-[0.2em] text-ink-faint hover:text-ink"
                    >
                      Start Over
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
