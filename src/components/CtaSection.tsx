import React from 'react';
import { MessageCircle } from 'lucide-react';
import { MESSENGER_URL } from '../config';

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="relative rounded-3xl bg-[#080d1a] border border-slate-800/90 py-16 px-8 md:py-24 md:px-16 text-center overflow-hidden shadow-2xl">
          {/* Internal radial blue glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] cta-glow pointer-events-none -z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-5 tracking-tight">
              Have a project in mind?
            </h2>

            <p className="text-slate-300 text-base md:text-lg mb-10 leading-relaxed font-light">
              Share what you are working on and the outcome you want. We can find the clearest next step together.
            </p>

            <a
              href={MESSENGER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#38bdf8] hover:bg-[#7dd3fc] text-slate-950 font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-150 shadow-lg shadow-sky-500/25 active:scale-98 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get in touch</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
