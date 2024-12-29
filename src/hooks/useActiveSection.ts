import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { SectionId } from '../config/sections';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (!isHomePage) {
      const path = location.pathname.substring(1) as SectionId;
      setActiveSection(path || 'hero');
      return;
    }

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let currentSection: SectionId | null = null;

      // Special handling for hero section - only active at the very top
      if (window.scrollY === 0) {
        currentSection = 'hero';
      } else {
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          const offset = window.innerHeight * 0.3;

          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = section.id as SectionId;
          }
        });
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  return activeSection;
}