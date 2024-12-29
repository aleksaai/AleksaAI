import React from 'react';
import { Check } from 'lucide-react';

interface TodoItemProps {
  text: string;
  isCompleted: boolean;
  onClick: () => void;
}

export function TodoItem({ text, isCompleted, onClick }: TodoItemProps) {
  return (
    <div 
      className={`
        relative group flex items-center gap-3 p-4 
        bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-xl
        transition-all duration-300
        ${isCompleted ? 'opacity-50' : 'opacity-100'}
      `}
    >
      <button
        onClick={onClick}
        className={`
          w-5 h-5 rounded border
          transition-colors duration-300
          ${isCompleted 
            ? 'bg-blue-500 border-blue-500' 
            : 'border-white/20 hover:border-blue-500'}
        `}
      >
        {isCompleted && <Check className="w-3 h-3 text-white m-0.5" />}
      </button>
      <span className={`
        text-sm text-white
        transition-all duration-300
        ${isCompleted ? 'line-through' : ''}
      `}>
        {text}
      </span>
    </div>
  );
}