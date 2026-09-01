type ScentArtProps = {
  accent: string;
  variant?: "bottle" | "glow";
  className?: string;
};

/**
 * Studio-light bottle rendering used as placeholder photography throughout
 * the site. Swap for real product photography by replacing this component.
 */
export function ScentArt({ accent, variant = "bottle", className = "" }: ScentArtProps) {
  const gradientId = `glow-${accent.replace("#", "")}`;

  return (
    <div className={`relative overflow-hidden bg-cream-dim ${className}`}>
      <div
        className="absolute inset-0 animate-drift"
        style={{
          background: `radial-gradient(60% 60% at 50% 38%, ${accent}33 0%, transparent 70%)`,
        }}
      />
      {variant === "bottle" && (
        <svg
          viewBox="0 0 200 320"
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
              <stop offset="100%" stopColor={accent} stopOpacity="0.55" />
            </linearGradient>
            <radialGradient id={`${gradientId}-light`} cx="35%" cy="20%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="100" cy="290" rx="55" ry="10" fill={accent} opacity="0.12" />
          <rect x="88" y="40" width="24" height="26" rx="3" fill="#1A1A1A" opacity="0.85" />
          <rect
            x="65"
            y="66"
            width="70"
            height="200"
            rx="10"
            fill={`url(#${gradientId})`}
          />
          <rect
            x="65"
            y="66"
            width="70"
            height="200"
            rx="10"
            fill={`url(#${gradientId}-light)`}
          />
          <rect x="65" y="66" width="70" height="200" rx="10" fill="none" stroke="#1A1A1A" strokeOpacity="0.08" />
        </svg>
      )}
      <div className="absolute inset-0 mix-blend-multiply opacity-[0.03] [background-image:radial-gradient(circle,#1A1A1A_1px,transparent_1px)] [background-size:3px_3px]" />
    </div>
  );
}
