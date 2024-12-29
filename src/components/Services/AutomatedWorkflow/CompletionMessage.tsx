import React from 'react';

export function CompletionMessage() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent animate-fadeIn">
        All done 🎉
      </div>
    </div>
  );
}