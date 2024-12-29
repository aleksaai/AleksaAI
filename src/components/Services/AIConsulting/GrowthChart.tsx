import React from 'react';

export function GrowthChart() {
  const barData = [30, 45, 65, 85];

  return (
    <div className="relative h-full w-full">
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        {/* Background Grid Lines */}
        {[...Array(5)].map((_, i) => (
          <line
            key={`grid-${i}`}
            x1="0"
            y1={i * 20}
            x2="100"
            y2={i * 20}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />
        ))}

        {/* Bars */}
        {barData.map((height, index) => (
          <rect
            key={`bar-${index}`}
            x={index * 25 + 5}
            y={100 - height}
            width="15"
            height={height}
            fill="url(#blue-gradient)"
            rx="2"
          />
        ))}

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="blue-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}