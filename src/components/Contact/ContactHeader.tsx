import React from 'react';
import { MessageSquare } from 'lucide-react';

export function ContactHeader() {
  return (
    <div className="text-center mb-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] mb-6">
        <MessageSquare className="w-4 h-4 text-blue-400" />
        <span className="text-blue-400 text-sm font-medium">Get in Touch</span>
      </div>
      
      <h2 className="text-4xl font-bold mb-6">
        <span className="text-white">Let's Start Your</span>
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
          AI Journey Today
        </span>
      </h2>
      
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Ready to transform your business with AI? Contact us for a free consultation and let's discuss how we can help you achieve your goals
      </p>
    </div>
  );
}