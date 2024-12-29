import React from 'react';
import { GlassLabel } from './GlassLabel';

export function AIConsulting() {
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

  return (
    <div className="relative h-full flex flex-col justify-between">
      {/* Dots Section */}
      <div className="relative flex-1">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            className="absolute"
            style={{
              left: `${5 + (i * 18)}%`,
              bottom: `${15 + (i * 14)}%`,
            }}
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 blur-[6px] opacity-60" />
          </div>
        ))}
        
        {/* Glass Label */}
        <GlassLabel />
      </div>

      {/* Quarter Boxes */}
      <div className="flex justify-between gap-4 px-4">
        {quarters.map((quarter, i) => (
          <div 
            key={i}
            className="w-16 h-12 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-lg border border-white/5 flex items-center justify-center"
          >
            <span className="text-sm text-gray-400">{quarter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}