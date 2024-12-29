import React from 'react';

export function Confetti() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <span
          key={i}
          className="absolute animate-confetti"
          style={{
            left: `${Math.random() * 100}%`,
            top: '-20%',
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899'][Math.floor(Math.random() * 3)],
            width: '8px',
            height: '8px',
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
}