import React from 'react';

interface StatsCardProps {
  position: string;
  value: string;
  label: string;
  className?: string;
}

export function StatsCard({ position, value, label, className = '' }: StatsCardProps) {
  return (
    <div className={`absolute ${position} group ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg shadow-2xl 
          transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
        <div className="relative bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg p-4 shadow-2xl
          transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            {value}
          </div>
          <div className="text-sm text-gray-400">{label}</div>
        </div>
      </div>
    </div>
  );
}