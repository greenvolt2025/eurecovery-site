export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Quantum particle core */}
      <circle cx="50" cy="50" r="8" fill="#3b82f6" />
      
      {/* Orbital rings */}
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        opacity="0.8"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="35"
        ry="15"
        stroke="#3b82f6"
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
        stroke="#3b82f6"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
        transform="rotate(-60 50 50)"
      />
      
      {/* Quantum particles on orbits */}
      <circle cx="85" cy="50" r="3" fill="#3b82f6" opacity="0.8" />
      <circle cx="15" cy="50" r="3" fill="#3b82f6" opacity="0.8" />
      <circle cx="67.5" cy="73" r="3" fill="#3b82f6" opacity="0.8" />
      <circle cx="32.5" cy="27" r="3" fill="#3b82f6" opacity="0.8" />
      <circle cx="67.5" cy="27" r="3" fill="#3b82f6" opacity="0.8" />
      <circle cx="32.5" cy="73" r="3" fill="#3b82f6" opacity="0.8" />
    </svg>
  );
}