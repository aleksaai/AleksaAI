import React from 'react';

export function GlassLabel() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group">
      <div className="relative px-4 py-2 bg-black/40 backdrop-blur-xl border border-white/10 rounded-lg transition-all duration-500 ease-out group-hover:translate-x-16 group-hover:-translate-y-16">
        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent whitespace-nowrap">
          With Aleksa AI
        </span>
      </div>
    </div>
  );
}