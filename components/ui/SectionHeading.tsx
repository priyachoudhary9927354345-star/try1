type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center mx-auto max-w-2xl" : ""}>
      <div
        className={`flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-gold-700 ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="h-px w-8 bg-gold-400" />
        {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.1] text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-faint text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
