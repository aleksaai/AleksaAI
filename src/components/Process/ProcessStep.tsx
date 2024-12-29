import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Confetti } from '../ui/Confetti';

interface ProcessStepProps {
  number: number;
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  position: 'left' | 'right';
  stepIndex: number;
  progress: number;
}

export function ProcessStep({ 
  number, 
  icon: Icon, 
  title, 
  description, 
  color,
  position,
  stepIndex,
  progress
}: ProcessStepProps) {
  const isActive = progress >= (stepIndex / 5) * 100;
  const isOddStep = number % 2 === 1;
  const verticalOffset = isOddStep ? '-6rem' : '0';
  const isLaunchStep = title === "Launch";
  const showConfetti = isLaunchStep && progress === 100;

  return (
    <div 
      data-step={stepIndex}
      className={`
        relative group grid grid-cols-[1fr,auto,1fr] gap-8 items-center
        opacity-0 translate-y-8
        animate-[fadeIn_0.5s_ease-out_forwards]
      `}
      style={{ animationDelay: `${stepIndex * 0.2}s` }}
    >
      {/* Content */}
      <div className={position === 'left' ? 'col-start-1' : 'col-start-3'}>
        <div className="relative max-w-lg">
          {/* Glass Card */}
          <div className="relative bg-white/20 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
            {showConfetti && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Confetti />
              </div>
            )}
            {/* Content */}
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-violet-500/10">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Center Number */}
      <div className="relative col-start-2 w-14">
        <div 
          className={`
            absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            w-14 h-14 rounded-[14px]
            bg-gradient-to-r from-blue-500 to-violet-500
            transition-all duration-500
            ${isActive ? 'shadow-[0_0_30px_rgba(59,130,246,0.3)]' : ''}
          `}
          style={{ marginTop: verticalOffset }}
        >
          <div className={`
            absolute inset-[1px] rounded-[13px] 
            backdrop-blur-xl
            transition-colors duration-500
            ${isActive ? 'bg-black/40' : 'bg-black/80'}
          `} />
          
          <span className="absolute inset-0 flex items-center justify-center text-white text-xl font-bold">
            {number}
          </span>
        </div>
      </div>

      {/* Empty Column */}
      <div className={position === 'left' ? 'col-start-3' : 'col-start-1'} />
    </div>
  );
}