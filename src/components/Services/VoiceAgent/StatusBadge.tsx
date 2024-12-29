import React from 'react';

export function StatusBadge() {
  return (
    <div className="absolute -top-2 right-0 z-20">
      <div className="flex items-center gap-1.5 bg-emerald-500 px-2 py-1 rounded-full">
        <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
        <span className="text-[10px] font-medium text-white uppercase tracking-wider">Live</span>
      </div>
    </div>
  );
}