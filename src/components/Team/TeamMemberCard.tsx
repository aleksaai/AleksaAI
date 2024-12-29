import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TeamMemberCardProps {
  name: string;
  role: string;
  image: string;
  socialLinks: {
    icon: LucideIcon;
    url: string;
  }[];
}

export function TeamMemberCard({ name, role, image, socialLinks }: TeamMemberCardProps) {
  const imageStyles = name === "Selim Disli" 
    ? "object-cover object-top" 
    : "object-cover object-center";

  return (
    <div className="group relative">
      {/* Hover effect only on desktop */}
      <div className="absolute inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 opacity-0 hidden lg:block lg:group-hover:opacity-100 blur transition duration-500 rounded-2xl" />
      <div className="relative bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] p-6 rounded-2xl">
        {/* Image */}
        <div className="relative mb-6 aspect-square rounded-xl overflow-hidden">
          <img
            src={image}
            alt={name}
            className={`w-full h-full ${imageStyles} transition-transform duration-500 lg:group-hover:scale-110`}
          />
        </div>

        {/* Info */}
        <h3 className="text-xl font-semibold text-white mb-1">{name}</h3>
        <p className="text-gray-400 mb-4">{role}</p>

        {/* Social Links */}
        <div className="flex gap-3">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-violet-500/10 hover:from-blue-500/20 hover:to-violet-500/20 transition-colors"
              >
                <Icon className="w-4 h-4 text-blue-400" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}