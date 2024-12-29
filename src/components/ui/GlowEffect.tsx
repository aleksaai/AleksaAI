import React from 'react';

export function GlowEffect() {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_#3b82f6_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_#8b5cf6_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-3xl" />
    </div>
  );
}