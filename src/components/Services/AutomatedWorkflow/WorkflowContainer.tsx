import React from 'react';
import { Confetti } from './Confetti';

interface WorkflowContainerProps {
  showConfetti: boolean;
  children: React.ReactNode;
}

export function WorkflowContainer({ showConfetti, children }: WorkflowContainerProps) {
  return (
    <div className="h-full flex flex-col justify-center">
      {/* Dark background for mobile */}
      <div className="absolute inset-0 lg:hidden bg-black/90 rounded-2xl" />
      
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-xl p-6">
        {showConfetti && <Confetti />}
        {children}
      </div>
    </div>
  );
}