export function HeroFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-charcoal-950">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background:
            "radial-gradient(60% 50% at 70% 30%, rgba(212,175,106,0.16), transparent 60%), radial-gradient(50% 60% at 20% 70%, rgba(120,150,170,0.12), transparent 65%), linear-gradient(160deg, #0a0a0d 0%, #16161a 45%, #0d0d10 100%)",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 800 500"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#d4af6a" strokeWidth="1">
          <path d="M120 380 L120 260 L340 260 L340 200 L560 200 L560 380 Z" />
          <path d="M340 260 L340 380" />
          <path d="M180 260 L180 200 L320 200" />
          <line x1="60" y1="380" x2="700" y2="380" />
        </g>
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,rgba(212,175,106,0.08)_50%,transparent_60%)] bg-[length:200%_100%] animate-shimmer" />
    </div>
  );
}
