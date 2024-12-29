import React, { useState } from 'react';
import { StatusBadge } from './StatusBadge';
import { AgentInfo } from './AgentInfo';

interface VoiceAgentProps {
  agentName?: string;
  agentImage?: string;
}

export function VoiceAgent({ 
  agentName = "Sarah",
  agentImage = "https://i.postimg.cc/Bnv7h9jc/DALL-E-2024-12-29-00-46-07-A-headshot-of-a-human-like-AI-bot-designed-to-look-highly-personable-an.webp"
}: VoiceAgentProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="h-full flex items-center justify-center relative">
      {/* Dark background - always present on mobile, transparent on desktop */}
      <div className="absolute inset-0 bg-black/90 lg:bg-white/[0.03] rounded-2xl" />

      {/* Blur effect - only when active */}
      {isActive && (
        <div className="absolute inset-0 backdrop-blur-lg rounded-2xl" />
      )}

      {/* Main Content */}
      <div className="relative w-full h-full max-w-[280px] mx-auto flex flex-col justify-center">
        {/* Center Profile */}
        <div className="flex flex-col items-center">
          <button 
            onClick={() => setIsActive(!isActive)}
            className="relative group cursor-pointer"
          >
            {/* Gradient effect when active */}
            <div className={`
              absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 
              rounded-full blur-xl transition-opacity duration-300
              ${isActive ? 'opacity-50 scale-110' : 'opacity-0 scale-100'}
            `} />
            
            <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden">
              <img 
                src={agentImage} 
                alt={agentName}
                className="w-full h-full object-cover"
              />
            </div>
            
            {isActive && <StatusBadge />}
          </button>
          
          <AgentInfo name={agentName} />
        </div>
      </div>
    </div>
  );
}