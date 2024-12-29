import React, { useEffect, useState } from 'react';

export function Confetti() {
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981', '#F59E0B'];
    const shapes = ['circle', 'square'];
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      style: {
        position: 'absolute',
        left: `${Math.random() * 200 - 50}%`,
        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
        width: `${Math.random() * 6 + 3}px`,
        height: `${Math.random() * 6 + 3}px`,
        borderRadius: shapes[Math.floor(Math.random() * shapes.length)] === 'circle' ? '50%' : '2px',
        transform: `rotate(${Math.random() * 360}deg)`,
        opacity: 1,
        animation: `confetti-fall ${Math.random() * 1 + 1.5}s linear forwards`,
      },
    }));

    setParticles(newParticles);

    const timer = setTimeout(() => {
      setParticles([]);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-40 h-40 pointer-events-none">
      {particles.map(particle => (
        <span
          key={particle.id}
          style={particle.style}
        />
      ))}
    </div>
  );
}