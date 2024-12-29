import React, { useRef, useState, useEffect } from 'react';
import { ProcessStep } from './ProcessStep';
import { ProcessCycle } from './ProcessCycle';
import { steps } from './steps';

export function ProcessSteps() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !progressLineRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startProgress = containerRect.top <= windowHeight * 0.8;
      let currentProgress = 0;
      
      if (startProgress) {
        const scrolledDistance = windowHeight * 0.8 - containerRect.top;
        const totalDistance = containerRect.height + windowHeight * 0.4;
        
        currentProgress = Math.max(0, Math.min(100, 
          (scrolledDistance / totalDistance) * 100
        ));
      }
      
      setTargetProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setProgress(targetProgress);
  }, [targetProgress]);

  const currentStep = Math.min(steps.length, Math.ceil((progress / 100) * steps.length));

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto">
      {/* Mobile Timeline */}
      <div className="lg:hidden relative">
        {/* Timeline line with progress */}
        <div className="absolute left-6 top-8 bottom-0 w-1 bg-white/[0.05]">
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-violet-500 to-purple-500 will-change-transform"
            style={{ 
              height: `${progress}%`,
              transition: 'height 0.1s linear'
            }}
          >
            <div className="absolute inset-0 blur-md bg-gradient-to-b from-blue-500 via-violet-500 to-purple-500" />
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="space-y-12 pl-16">
          {steps.map((step, index) => {
            const isActive = index <= Math.floor((progress / 100) * steps.length);
            const Icon = step.icon;
            
            return (
              <div key={index} className="relative">
                {/* Step Number Circle */}
                <div className={`
                  absolute -left-[60px] top-3 w-10 h-10 rounded-full
                  flex items-center justify-center
                  transition-colors duration-300
                  ${isActive 
                    ? 'bg-gradient-to-r from-blue-500 to-violet-500' 
                    : 'bg-white/[0.03] border border-white/[0.05]'}
                `}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>

                <div className={`
                  relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-6 rounded-2xl
                  transition-opacity duration-300
                  ${isActive ? 'opacity-100' : 'opacity-50'}
                `}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-violet-500/10">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Timeline - Unchanged */}
      <div className="hidden lg:block relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-white/[0.05]">
          <div 
            ref={progressLineRef}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-violet-500 to-purple-500 transition-all duration-700 ease-out"
            style={{ height: `${progress}%` }}
          >
            <div className="absolute inset-0 blur-md bg-gradient-to-b from-blue-500 via-violet-500 to-purple-500" />
          </div>
        </div>
        
        <div className="space-y-24">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              color="from-blue-500 to-violet-500"
              position={index % 2 === 0 ? 'right' : 'left'}
              stepIndex={index}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </div>
  );
}