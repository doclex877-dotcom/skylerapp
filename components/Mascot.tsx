"use client";

type MascotState = "idle" | "thinking" | "happy" | "sad";

export default function Mascot({ state = "idle", size = 140 }: { state?: MascotState; size?: number }) {
  const mouthPath =
    state === "sad"
      ? "M188 320 C 214 288, 298 288, 324 320"
      : "M188 284 C 214 320, 298 320, 324 284 C 324 330, 280 356, 256 356 C 232 356, 188 330, 188 284 Z";

  const wrapperClass =
    state === "thinking" ? "animate-wiggle" : state === "happy" ? "animate-bounce-in" : "";

  return (
    <div className={wrapperClass} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="blobGradM" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2E7E" />
            <stop offset="100%" stopColor="#7B2FF7" />
          </linearGradient>
          <radialGradient id="glowM" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d="M256 84 C 330 80, 400 118, 418 190 C 434 254, 412 312, 372 356 C 330 402, 262 424, 196 404 C 132 386, 88 330, 82 262 C 76 192, 112 122, 178 96 C 202 86, 230 82, 256 84 Z"
          fill="url(#blobGradM)"
        />
        <path
          d="M256 84 C 330 80, 400 118, 418 190 C 434 254, 412 312, 372 356 C 330 402, 262 424, 196 404 C 132 386, 88 330, 82 262 C 76 192, 112 122, 178 96 C 202 86, 230 82, 256 84 Z"
          fill="url(#glowM)"
        />

        <line x1="256" y1="84" x2="256" y2="44" stroke="#DFFF3C" strokeWidth="10" strokeLinecap="round" />
        <circle cx="256" cy="34" r="14" fill="#DFFF3C" />

        <circle cx="200" cy="236" r="17" fill="#0E0B1A" />
        <circle cx="296" cy="236" r="17" fill="#0E0B1A" />
        <circle cx="207" cy="229" r="5" fill="#F6F2FF" />
        <circle cx="303" cy="229" r="5" fill="#F6F2FF" />

        {state === "happy" ? (
          <g className="animate-chomp" style={{ transformOrigin: "256px 300px" }}>
            <path d={mouthPath} fill="#0E0B1A" />
            <path
              d="M206 296 C 222 312, 290 312, 306 296"
              stroke="#FF2E7E"
              strokeWidth="8"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        ) : (
          <path d={mouthPath} stroke="#0E0B1A" strokeWidth="10" strokeLinecap="round" fill="none" />
        )}

        <ellipse cx="164" cy="272" rx="16" ry="10" fill="#FFB8DA" opacity="0.55" />
        <ellipse cx="348" cy="272" rx="16" ry="10" fill="#FFB8DA" opacity="0.55" />
      </svg>
    </div>
  );
}
