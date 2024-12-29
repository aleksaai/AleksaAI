import React from 'react';
import { Bot, MessageCircle, Workflow, Brain } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function ServiceGrid() {
  return (
    <div className="grid lg:grid-cols-2 gap-16">
      <ServiceCard
        icon={MessageCircle}
        title="AI Chatbots"
        description="Intelligent chat solutions that provide 24/7 customer support with natural language understanding and personalized responses."
      />
      <ServiceCard
        icon={Bot}
        title="AI Voice Agents"
        description="Human-like voice assistants that handle customer service, sales calls, and support inquiries with natural conversations."
      />
      <ServiceCard
        icon={Workflow}
        title="Automated Workflows"
        description="Streamline your business processes with intelligent automation that handles repetitive tasks, data processing, and workflows with precision & reliability."
      />
      <ServiceCard
        icon={Brain}
        title="AI Consulting"
        description="Expert guidance on implementing AI solutions tailored to your business needs, from strategy development to technical implementation and optimization."
      />
    </div>
  );
}