import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="w-full text-left"
    >
      <div className="relative group">
        <div className="relative bg-[#0A0A0A] hover:bg-[#111111] border border-white/[0.05] p-6 rounded-2xl transition-colors duration-300">
          <div className="flex justify-between items-center gap-4">
            <h3 className="text-lg font-medium text-white">{question}</h3>
            <ChevronDown 
              className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`} 
            />
          </div>
          
          <div className={`
            mt-4 text-gray-400 overflow-hidden transition-all duration-300
            ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          `}>
            {answer}
          </div>
        </div>
      </div>
    </button>
  );
}