import React from 'react';
import { HelpCircle } from 'lucide-react';

export function FAQHeader() {
  return (
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-6">
        <HelpCircle className="w-4 h-4 text-blue-400" />
        <span className="text-blue-400 text-sm font-medium">FAQ</span>
      </div>
      
      <h2 className="text-4xl font-bold mb-6">
        <span className="text-white">Frequently Asked</span>
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          Questions
        </span>
      </h2>
      
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Find answers to common questions about our AI solutions and services
      </p>
    </div>
  );
}