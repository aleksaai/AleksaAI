import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToSection } from '../../../utils/scroll';
import type { SectionId } from '../../../config/sections';

interface NavLinkProps {
  id: SectionId;
  isActive: boolean;
  label: string;
}

export function NavLink({ id, isActive, label }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (id === 'tools') {
      window.location.href = '/tools';
    } else {
      scrollToSection(id);
    }
  };

  return (
    <Link
      to={id === 'tools' ? '/tools' : `/#${id}`}
      onClick={handleClick}
      className={`
        relative text-sm font-medium transition-colors duration-300
        ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'}
      `}
    >
      {label}
      <span className={`
        absolute -bottom-1 left-0 w-full h-0.5 rounded-full
        bg-gradient-to-r from-blue-400 to-violet-400
        transition-all duration-300
        ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
      `} />
    </Link>
  );
}