import React from 'react';

interface ProcessCycleProps {
  currentStep: number;
  totalSteps: number;
}

export function ProcessCycle({ currentStep, totalSteps }: ProcessCycleProps) {
  return (
    <div className="relative">
      {/* Background circle */}
      <div className="w-16 h-16 rounded-full bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] 
        flex items-center justify-center">
        {/* Progress indicator */}
        <div className="relative w-12 h-12">
          {/* Progress circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-white/[0.03]"
            />
            <circle
              cx="24"
              cy="24"
              r="20"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${(currentStep / totalSteps) * 125.6} 125.6`}
              className="text-blue-500 transition-all duration-500"
            />
          </svg>
          
          {/* Step counter */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold">{currentStep}/{totalSteps}</span>
          </div>
        </div>
      </div>
    </div>
  );
}