export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Quantum particle core */}
      <circle cx="50" cy="50" r="8" fill="url(#quantumGradient)" />
      
      {/* Orbital rings */}
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        stroke="url(#orbitalGradient1)"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        stroke="url(#orbitalGradient2)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        transform="rotate(60 50 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        stroke="url(#orbitalGradient3)"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        transform="rotate(-60 50 50)"
      />
      
      {/* Quantum particles on orbits */}
      <circle cx="85" cy="50" r="3" fill="#3b82f6" opacity="0.8" />
      <circle cx="15" cy="50" r="3" fill="#8b5cf6" opacity="0.8" />
      <circle cx="67.5" cy="73" r="3" fill="#06b6d4" opacity="0.8" />
      <circle cx="32.5" cy="27" r="3" fill="#6366f1" opacity="0.8" />
      <circle cx="67.5" cy="27" r="3" fill="#a855f7" opacity="0.8" />
      <circle cx="32.5" cy="73" r="3" fill="#0ea5e9" opacity="0.8" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="orbitalGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="orbitalGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="orbitalGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
      </defs>
    </svg>
  );
}