import React from 'react';
import { scrollToSection } from '../../../utils/scroll';
import { sections, type SectionId } from '../../../config/sections';

export function FooterNav() {
  const sectionIds = Object.keys(sections) as SectionId[];

  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Navigation</h3>
      <ul className="space-y-2">
        {sectionIds.map((id) => (
          <li key={id}>
            <button 
              onClick={() => scrollToSection(id)}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {sections[id].label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}