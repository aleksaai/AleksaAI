import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceBadgeProps {
  Icon: LucideIcon;
  label: string;
}

export function ServiceBadge({ Icon, label }: ServiceBadgeProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.05] transition-colors">
      <Icon className="w-4 h-4 text-blue-400" />
      <span className="text-sm text-gray-300">{label}</span>
    </div>
  );
}