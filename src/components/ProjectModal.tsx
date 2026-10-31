import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Clock, User, Wrench } from 'lucide-react';
import { Project } from '../types';
import { getAssetUrl } from '../utils/asset';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string, category: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onRequestSimilar
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#090e19] border border-slate-800 rounded-2xl overflow-y-auto shadow-2xl flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 rounded-full transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Showcase */}
        <div className="relative w-full bg-slate-950 overflow-hidden border-b border-slate-800">
          {project.fullImage ? (
            <div className="flex flex-col">
              <div className="flex items-center justify-between px-6 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs">
                <span className="text-slate-400 font-medium">Design Mockup View</span>
                <span className="text-sky-400 text-[11px]">Scroll down to inspect full design</span>
              </div>
              <div className="max-h-[380px] overflow-y-auto w-full scrollbar-thin">
                <img
                  src={getAssetUrl(project.fullImage)}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-top"
                />
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/9] w-full">
              <img
                src={getAssetUrl(project.image)}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090e19] via-transparent to-transparent opacity-80" />
            </div>
          )}
          <div className="p-4 sm:p-6 bg-[#090e19]/90 border-t border-slate-800/60">
            <span className="text-xs uppercase tracking-wider font-semibold text-sky-400 bg-sky-950/80 border border-sky-800/80 px-2.5 py-1 rounded-md mb-2 inline-block">
              {project.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 space-y-8">
          {/* Tagline & Overview */}
          <div>
            <h3 className="text-lg font-semibold text-sky-300 mb-2">Project Overview</h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              {project.description}
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-950/60 border border-slate-800/60 rounded-xl">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <User className="w-3.5 h-3.5 text-sky-400" />
                <span>Client Type</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-200">{project.clientType}</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>Turnaround</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-200">{project.timeframe}</p>
            </div>
            <div className="space-y-1 col-span-2 sm:col-span-1">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Wrench className="w-3.5 h-3.5 text-sky-400" />
                <span>Stack</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-200 truncate">
                {project.toolsUsed.join(', ')}
              </p>
            </div>
          </div>

          {/* Quantifiable Results */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Measurable Impact
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-slate-900/60 border border-slate-800/80 rounded-xl flex flex-col justify-between"
                  >
                    <span className="text-2xl font-bold text-white tabular-nums tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-xs text-slate-400 mt-1">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Deliverables */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Included Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400 text-center sm:text-left">
              Need a similar solution for your brand?
            </span>
            <button
              onClick={() => {
                onClose();
                onRequestSimilar(project.title, project.category);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#38bdf8] hover:bg-[#7dd3fc] text-slate-950 font-semibold text-sm px-6 py-2.5 rounded-full transition-colors cursor-pointer"
            >
              <span>Build something like this</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
