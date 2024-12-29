import React from 'react';
import { Sparkles } from 'lucide-react';

export function ToolsHero() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-6">
        <Sparkles className="w-4 h-4 text-blue-400" />
        <span className="text-blue-400 text-sm font-medium">AI Tools Collection</span>
      </div>
      
      <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">
        <span className="text-white">Discover the best</span>
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          AI Tools
        </span>
      </h1>
      
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        AI Tools & Devices handpicked for You
      </p>
    </div>
  );
}