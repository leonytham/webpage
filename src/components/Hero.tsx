import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MESSENGER_URL } from '../config';

interface HeroProps {
  onOpenContact: () => void;
  onViewWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onViewWork }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden text-center">
      {/* Background radial blue glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] hero-glow pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Subtle top badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300 text-xs font-medium tracking-wider uppercase mb-8 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
          <span>AI IMPLEMENTER</span>
        </div>

        {/* Hero Title in Serif Font */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.12] mb-6 max-w-3xl">
          Your business, <br />
          <span className="italic font-normal">upgraded with AI</span>
        </h1>

        {/* Subtitle */}
        <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light">
          Websites, funnels, content and automations: built fast with AI, refined with care, and measured by the results they bring you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#38bdf8] hover:bg-[#7dd3fc] text-slate-950 font-semibold text-sm px-6 py-3 rounded-full transition-all duration-150 shadow-md shadow-sky-500/20 active:scale-98 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Get in touch</span>
          </a>
          <button
            onClick={onViewWork}
            className="w-full sm:w-auto bg-slate-900/60 hover:bg-slate-800/80 border border-slate-700/80 text-slate-200 hover:text-white font-medium text-sm px-6 py-3 rounded-full transition-all duration-150 backdrop-blur-sm cursor-pointer"
          >
            View selected work
          </button>
        </div>
      </div>
    </section>
  );
};
