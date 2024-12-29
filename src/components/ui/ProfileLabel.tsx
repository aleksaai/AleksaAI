import React from 'react';

export function ProfileLabel() {
  return (
    <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 group">
      <div className="relative">
        {/* 3D Animation Layer */}
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg shadow-2xl 
          transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
        
        {/* Content Layer */}
        <div className="relative bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg p-4 shadow-2xl
          transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Aleksa Spalevic
          </div>
          <div className="text-sm text-gray-400">CEO, AI Automation Agency</div>
        </div>
      </div>
    </div>
  );
}