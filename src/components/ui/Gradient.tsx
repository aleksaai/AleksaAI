import React from 'react';

export function Gradient() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <div className="absolute w-full aspect-square md:aspect-[2.5/1] bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-3xl" />
      <div className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-blue-500 rounded-full -top-12 -right-12 blur-3xl opacity-10" />
      <div className="absolute w-32 h-32 lg:w-48 lg:h-48 bg-violet-500 rounded-full -bottom-12 -left-12 blur-3xl opacity-10" />
    </div>
  );
}