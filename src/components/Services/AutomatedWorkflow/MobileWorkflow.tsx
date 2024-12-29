import React from 'react';
import { Check } from 'lucide-react';

interface MobileWorkflowProps {
  tasks: Array<{ id: number; text: string }>;
  completedTasks: number[];
  onTaskClick: (taskId: number) => void;
}

export function MobileWorkflow({ tasks, completedTasks, onTaskClick }: MobileWorkflowProps) {
  return (
    <div className="space-y-3">
      {tasks.map(task => {
        const isCompleted = completedTasks.includes(task.id);
        const isNext = task.id === completedTasks.length + 1;
        
        return (
          <button
            key={task.id}
            onClick={() => isNext ? onTaskClick(task.id) : undefined}
            className={`
              w-full flex items-center gap-3 p-4 rounded-xl
              transition-all duration-300
              ${isCompleted 
                ? 'bg-blue-500/20 border-blue-500/30' 
                : isNext
                  ? 'bg-white/[0.03] border-white/[0.1] animate-pulse'
                  : 'bg-white/[0.03] border-white/[0.05]'}
              border
            `}
            disabled={!isNext}
          >
            <div className={`
              w-6 h-6 rounded-full flex items-center justify-center
              transition-colors duration-300
              ${isCompleted 
                ? 'bg-blue-500' 
                : 'border-2 border-white/20'}
            `}>
              {isCompleted && <Check className="w-4 h-4 text-white" />}
            </div>
            
            <span className={`
              text-sm font-medium
              ${isCompleted ? 'text-blue-400' : 'text-white'}
            `}>
              {task.text}
            </span>
          </button>
        );
      })}
    </div>
  );
}