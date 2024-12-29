import React from 'react';

interface VoiceAgentProps {
  agentName?: string;
  agentImage?: string;
}

export function VoiceAgent({ 
  agentName = "Sarah",
  agentImage = "https://i.postimg.cc/Bnv7h9jc/DALL-E-2024-12-29-00-46-07-A-headshot-of-a-human-like-AI-bot-designed-to-look-highly-personable-an.webp"
}: VoiceAgentProps) {
  return (
    <div className="h-full flex items-center justify-center relative">
      {/* Blurred Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg rounded-2xl" />

      {/* Main Content */}
      <div className="relative w-full max-w-md mx-auto">
        {/* Center Profile */}
        <div className="flex flex-col items-center">
          {/* Agent Image with Status */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-xl opacity-50 scale-110" />
            <img 
              src={agentImage} 
              alt={agentName}
              className="relative z-10 w-24 h-24 rounded-full object-cover"
            />
            <div className="absolute -top-2 right-0 z-20">
              <div className="flex items-center gap-1.5 bg-emerald-500 px-2 py-1 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] font-medium text-white uppercase tracking-wider">Live</span>
              </div>
            </div>
          </div>

          {/* Agent Info */}
          <h4 className="text-white font-medium mt-3 mb-1">{agentName}</h4>
          <p className="text-gray-400 text-sm">AI Voice Assistant</p>
        </div>

        {/* Left Label */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg shadow-2xl 
              transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
            <div className="relative bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg p-3 shadow-2xl
              transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
              <div className="text-sm font-medium bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent whitespace-nowrap">
                24/7 Availability
              </div>
            </div>
          </div>
        </div>

        {/* Right Label */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg shadow-2xl 
              transition-all duration-300 group-hover:translate-y-1 group-hover:translate-x-1" />
            <div className="relative bg-white/[0.03] backdrop-blur-lg border border-white/[0.05] rounded-lg p-3 shadow-2xl
              transition-all duration-300 group-hover:-translate-y-1 group-hover:-translate-x-1">
              <div className="text-sm font-medium bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent whitespace-nowrap">
                Multi-language Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}