import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#030712]/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg md:text-xl font-bold tracking-tight text-white hover:text-sky-400 transition-colors whitespace-nowrap shrink-0"
        >
          Leony Tham
        </a>

        {/* Zone 2: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollToSection('portfolio')}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Services
          </button>
          <button
            onClick={() => onOpenContact()}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center shrink-0">
          <button
            onClick={() => onOpenContact()}
            className="bg-[#38bdf8] hover:bg-[#7dd3fc] active:scale-98 text-slate-950 font-semibold text-sm px-5 py-2 rounded-full transition-all duration-150 shadow-sm shadow-sky-500/20 whitespace-nowrap cursor-pointer"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070d1d] border-b border-slate-800 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3 text-base font-medium text-slate-200">
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-left py-2 hover:text-sky-400"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left py-2 hover:text-sky-400"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-left py-2 hover:text-sky-400"
            >
              Services
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-left py-2 hover:text-sky-400"
            >
              Contact
            </button>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full bg-[#38bdf8] hover:bg-[#7dd3fc] text-slate-950 font-semibold text-sm py-2.5 rounded-full transition-colors"
            >
              Get in touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
