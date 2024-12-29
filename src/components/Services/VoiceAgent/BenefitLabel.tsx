import React from 'react';

interface BenefitLabelProps {
  text: string;
  color: string;
  className?: string;
}

export function BenefitLabel({ text, color, className = '' }: BenefitLabelProps) {
  return (
    <div className={`absolute group transition-all duration-300 ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg shadow-2xl 
          transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
        <div className="relative bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg px-3 py-2 shadow-2xl
          transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1 whitespace-nowrap">
          <p className={`text-sm ${color}`}>{text}</p>
        </div>
      </div>
    </div>
  );
}