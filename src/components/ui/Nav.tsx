import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useActiveSection } from '../../hooks/useActiveSection';
import { sections, type SectionId } from '../../config/sections';

export function Nav() {
  const location = useLocation();
  const activeSection = useActiveSection();
  const isHomePage = location.pathname === '/';

  const handleClick = (sectionId: SectionId) => {
    if (isHomePage && sectionId !== 'tools') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[14px] shadow-lg" />
          
          <div className="relative flex items-center justify-center py-3 px-6">
            <div className="flex items-center gap-8">
              {Object.entries(sections).map(([id, { label }]) => (
                <Link
                  key={id}
                  to={id === 'tools' ? '/tools' : isHomePage ? `#${id}` : '/'}
                  onClick={() => handleClick(id as SectionId)}
                  className={`
                    relative text-sm font-medium transition-colors duration-300
                    ${activeSection === id ? 'text-white' : 'text-gray-400 hover:text-white'}
                  `}
                >
                  {label}
                  <span className={`
                    absolute -bottom-1 left-0 w-full h-0.5 rounded-full
                    bg-gradient-to-r from-blue-400 to-violet-400
                    transition-all duration-300
                    ${activeSection === id ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                  `} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}