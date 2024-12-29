import React from 'react';
import { useLocation } from 'react-router-dom';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { NavLink } from './NavLink';
import { sections } from '../../../config/sections';

export function Nav() {
  const location = useLocation();
  const activeSection = useActiveSection();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[14px] shadow-lg" />
          
          <div className="relative flex items-center justify-center py-3 px-6">
            <div className="flex items-center gap-6">
              {Object.entries(sections).map(([id, { label }]) => (
                <NavLink 
                  key={id}
                  id={id as keyof typeof sections}
                  isActive={isHomePage ? activeSection === id : location.pathname === `/${id}`}
                  label={label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}