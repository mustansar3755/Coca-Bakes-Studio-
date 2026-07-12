export default function CocoaSeal({ className = "h-12 w-12", spin = false }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`${className} ${spin ? "animate-[spin_28s_linear_infinite]" : ""}`}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="58" fill="var(--color-cocoa-900)" />
      <circle cx="60" cy="60" r="58" fill="none" stroke="var(--color-gold-500)" strokeWidth="1.5" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="var(--color-gold-500)" strokeWidth="1" strokeDasharray="2 4" />
      <path
        id="sealCirclePath"
        d="M 60,60 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
        fill="none"
      />
      <text fill="var(--color-gold-400)" fontSize="9.5" letterSpacing="3" fontFamily="Manrope, sans-serif">
        <textPath href="#sealCirclePath" startOffset="2%">
          COCOA BAKE STUDIO • EST. 2018 •
        </textPath>
      </text>
      <text
        x="60"
        y="70"
        textAnchor="middle"
        fill="var(--color-cream-100)"
        fontFamily="Fraunces, serif"
        fontSize="30"
        fontWeight="600"
      >
        C
      </text>
    </svg>
  );
}
