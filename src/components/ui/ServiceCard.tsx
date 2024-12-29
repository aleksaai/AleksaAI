import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 blur transition duration-500 rounded-2xl" />
      <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/[0.05] p-6 rounded-2xl transition duration-500">
        <div className="flex items-center gap-4 mb-4">
          <div className="p-2 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-xl">
            <Icon className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}