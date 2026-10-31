import React from 'react';
import { Filter, Globe, Clapperboard, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/projects';
import { ProjectCategory } from '../types';

interface ServicesSectionProps {
  onFilterCategory: (category: ProjectCategory) => void;
  onOpenContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onFilterCategory,
  onOpenContact
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'funnel':
        return <Filter className="w-5 h-5 text-sky-400" />;
      case 'website':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'video':
        return <Clapperboard className="w-5 h-5 text-sky-400" />;
      default:
        return <Filter className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4 tracking-tight">
            Services
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
            One partner for the full journey: traffic-ready funnels, professional websites, scroll-stopping carousels, AI UGC and polished video edits.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group bg-[#090e19] hover:bg-[#0c1424] border border-slate-800/80 hover:border-slate-700 rounded-2xl p-7 md:p-8 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-sky-950/20"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-105 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Scope items */}
                <div className="space-y-2 mb-8 pt-4 border-t border-slate-800/60">
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="w-1 h-1 rounded-full bg-sky-400/80" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  onClick={() => {
                    if (service.category === 'UGC Video') {
                      onOpenContact(service.title);
                    } else {
                      onFilterCategory(service.category);
                    }
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors cursor-pointer group/link"
                >
                  <span>{service.category === 'UGC Video' ? 'Request samples' : 'See the work'}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </button>

                <button
                  onClick={() => onOpenContact(service.title)}
                  className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
