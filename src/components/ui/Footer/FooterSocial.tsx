import React from 'react';
import { Linkedin, Instagram, Globe } from 'lucide-react';

export function FooterSocial() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aleksaspalevic/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/iamaleksa.ai', label: 'Instagram' },
    { icon: Globe, href: 'https://aleksa.ai/', label: 'Website' },
  ];

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Connect</h3>
      <div className="flex gap-4">
        {socialLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-violet-500/10 hover:from-blue-500/20 hover:to-violet-500/20 transition-colors"
            aria-label={link.label}
          >
            <link.icon className="w-4 h-4 text-blue-400" />
          </a>
        ))}
      </div>
    </div>
  );
}