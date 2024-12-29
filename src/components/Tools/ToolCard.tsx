import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ToolCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  categories: string[];
  image: string;
}

export function ToolCard({ title, description, icon: Icon, categories, image }: ToolCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 group-hover:opacity-100 blur transition duration-500 rounded-2xl" />
      <div className="relative bg-black/40 backdrop-blur-xl border border-white/[0.05] p-6 rounded-2xl">
        {/* Image */}
        <div className="relative mb-6 aspect-video rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3">
            <div className="p-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/10">
              <Icon className="w-5 h-5 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category}
              className="px-2 py-1 text-xs rounded-full bg-white/[0.03] border border-white/[0.05] text-gray-400"
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}