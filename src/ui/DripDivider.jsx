export default function DripDivider({ color = "var(--color-cream-50)", flip = false, className = "" }) {
  return (
    <div
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none" className="h-[64px] w-full md:h-[90px]">
        <path
          d="M0,0 L1200,0 L1200,28
             C1150,28 1140,60 1110,60
             C1085,60 1080,32 1055,32
             C1030,32 1024,66 998,66
             C972,66 968,26 940,26
             C912,26 908,50 880,50
             C852,50 850,22 820,22
             C790,22 788,58 758,58
             C728,58 726,30 696,30
             C666,30 662,48 632,48
             C602,48 600,20 570,20
             C540,20 538,54 508,54
             C478,54 476,34 446,34
             C416,34 414,62 384,62
             C354,62 352,24 322,24
             C292,24 290,46 260,46
             C230,46 228,18 198,18
             C168,18 166,56 136,56
             C106,56 104,30 74,30
             C44,30 40,20 0,20 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
