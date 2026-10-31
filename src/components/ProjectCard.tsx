import React from 'react';
import { Project } from '../types';
import { getAssetUrl } from '../utils/asset';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(project)}
      className="group bg-[#090e19] hover:bg-[#0c1424] border border-slate-800/80 hover:border-slate-700 rounded-2xl overflow-hidden cursor-pointer transition-all duration-200 flex flex-col hover:shadow-xl hover:shadow-sky-950/20"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      {/* Image Preview Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <img
          src={getAssetUrl(project.image)}
          alt={project.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090e19]/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center p-4">
          <span className="px-3.5 py-1.5 rounded-full bg-sky-400 text-slate-950 font-medium text-xs tracking-wide shadow-lg backdrop-blur-sm flex items-center gap-1.5 transform translate-y-1 group-hover:translate-y-0 transition-transform">
            <span>
              {project.category === 'Funnels'
                ? 'View Full Landing Page'
                : project.category === 'Websites'
                ? 'View Full Website'
                : 'View Preview'}
            </span>
          </span>
        </div>
      </div>

      {/* Card Info Bar */}
      <div className="p-4 md:p-5 flex items-center justify-between gap-3 mt-auto border-t border-slate-800/40">
        <h3 className="font-semibold text-white text-sm md:text-base tracking-tight group-hover:text-sky-300 transition-colors truncate">
          {project.title}
        </h3>
        <span className="text-xs text-slate-400 font-medium whitespace-nowrap shrink-0">
          {project.category}
        </span>
      </div>
    </div>
  );
};
