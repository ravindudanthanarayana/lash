import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavItem {
  name: string;
  href: string;
}

interface FloatingNavbarProps {
  navItems: NavItem[];
  className?: string;
}

export const FloatingNavbar: React.FC<FloatingNavbarProps> = ({ 
  navItems, 
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      // Route navigation
      navigate(href);
    } else if (href === '#') {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Hash link navigation
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <div className={`fixed top-4 left-4 md:left-1/2 md:transform md:-translate-x-1/2 z-50 transition-all duration-300 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    } ${className}`}>
      <nav className="bg-white/10 backdrop-blur-md border border-white/20 md:rounded-full rounded-lg px-4 md:px-6 lg:px-6 py-2 md:py-3 shadow-lg md:min-w-[680px]">
        <div className="flex items-center md:justify-center">
          {/* Logo */}
          <div className="flex-shrink-0 hidden md:block mr-4 lg:mr-6">
            <img 
              src="/lovable-uploads/d9e7d77a-5740-472c-83a5-e0f658a73c9a.png" 
              alt="Lashura Global" 
              className="h-6 lg:h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white px-1 lg:px-2 py-2 text-xs lg:text-sm font-medium transition-all duration-200 relative group whitespace-nowrap"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-auto">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white transition-colors duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsOpen(false);
                  }}
                  className="text-white block px-3 py-2 text-base font-medium w-full text-left transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
