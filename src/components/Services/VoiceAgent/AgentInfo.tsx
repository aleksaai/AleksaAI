import React from 'react';

interface AgentInfoProps {
  name: string;
}

export function AgentInfo({ name }: AgentInfoProps) {
  return (
    <div className="text-center">
      <h4 className="text-white font-medium mt-3 mb-1">{name}</h4>
      <p className="text-gray-400 text-sm">AI Voice Assistant</p>
    </div>
  );
}