import React from 'react';

interface TypingIndicatorProps {
  sender: 'ai' | 'aleksa';
}

export function TypingIndicator({ sender }: TypingIndicatorProps) {
  return (
    <div className="flex items-start gap-3">
      {/* Profile Picture */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
        <img 
          src={sender === 'aleksa' 
            ? "https://i.postimg.cc/qqXDFpcQ/U-Own-Destiny-Web-20.png"
            : "https://i.postimg.cc/Bnv7h9jc/DALL-E-2024-12-29-00-46-07-A-headshot-of-a-human-like-AI-bot-designed-to-look-highly-personable-an.webp"
          }
          alt={`${sender} typing`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Typing Animation */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-400">
          {sender === 'aleksa' ? 'Aleksa' : 'AI Assistant'}:
        </span>
        <div className="bg-white/[0.03] border border-white/[0.05] rounded-2xl p-3">
          <div className="flex gap-1">
            <div className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" />
            <div className="w-2 h-2 rounded-full bg-violet-400 animate-bounce [animation-delay:0.2s]" />
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.4s]" />
          </div>
        </div>
      </div>
    </div>
  );
}