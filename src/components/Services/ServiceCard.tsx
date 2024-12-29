import React from 'react';
import { LucideIcon } from 'lucide-react';
import { ChatInteraction } from './ChatInteraction';
import { VoiceAgent } from './VoiceAgent/index';
import { AutomatedWorkflow } from './AutomatedWorkflow';
import { AIConsulting } from './AIConsulting';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-lg">
            <Icon className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>

      {/* Content Box */}
      <div className="relative">
        <div className="relative h-[300px] bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-6 overflow-hidden">
          {(() => {
            switch (title) {
              case "AI Chatbots":
                return <ChatInteraction />;
              case "AI Voice Agents":
                return <VoiceAgent />;
              case "Automated Workflows":
                return <AutomatedWorkflow />;
              case "AI Consulting":
                return <AIConsulting />;
              default:
                return null;
            }
          })()}
        </div>
      </div>
    </div>
  );
}