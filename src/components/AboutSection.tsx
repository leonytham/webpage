import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { getAssetUrl } from '../utils/asset';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Manifesto & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.2] tracking-tight">
              I’m Leony, and I turn AI from a buzzword into a business tool. My projects pair solid marketing fundamentals with modern AI workflows that deliver measurable results.
            </h2>

            <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed font-light">
              <p>
                I pair solid marketing fundamentals with modern AI workflows, so the work ships in days instead of months without looking like it was rushed.
              </p>
              <p>
                Every project is done-for-you and judged by one thing: the results it brings.
              </p>
            </div>

            {/* Quiet value points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Ships in 5–7 days, not months</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Direct conversion architecture</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Custom AI avatar & prompt pipelines</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 shrink-0">
                  <Check className="w-3 h-3" />
                </div>
                <span>Complete 1-on-1 done-for-you partner</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 font-medium text-sm group cursor-pointer"
              >
                <span>Discuss your business roadmap</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Portrait Photo */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle back halo */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-sky-500/10 via-transparent to-blue-500/10 rounded-3xl blur-xl -z-10"
                aria-hidden="true"
              />
              
              <div className="overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900 shadow-2xl aspect-[4/5] sm:aspect-square">
                <img
                  src={getAssetUrl('/assets/projects/leony_portrait.jpg')}
                  alt="Leony Tham — AI Implementer & Digital Partner"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Status pill under portrait */}
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400 px-2">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Available for select projects</span>
                </span>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
