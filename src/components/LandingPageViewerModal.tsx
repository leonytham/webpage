import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  ExternalLink,
  Sparkles,
  MousePointer
} from 'lucide-react';
import { Project } from '../types';
import { getAssetUrl } from '../utils/asset';

interface LandingPageViewerModalProps {
  project: Project | null;
  projectsList: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const LandingPageViewerModal: React.FC<LandingPageViewerModalProps> = ({
  project,
  projectsList,
  onClose,
  onSelectProject
}) => {
  const [zoom, setZoom] = useState<number>(100);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const currentIndex = project
    ? projectsList.findIndex((p) => p.id === project.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectProject(projectsList[currentIndex - 1]);
      setZoom(100);
      setHasScrolled(false);
      if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
    }
  };

  const handleNext = () => {
    if (currentIndex < projectsList.length - 1) {
      onSelectProject(projectsList[currentIndex + 1]);
      setZoom(100);
      setHasScrolled(false);
      if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === '+' || e.key === '=') {
        setZoom((prev) => Math.min(prev + 15, 160));
      } else if (e.key === '-' || e.key === '_') {
        setZoom((prev) => Math.max(prev - 15, 60));
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, currentIndex, projectsList, onClose]);

  // Reset scroll and zoom on project change
  useEffect(() => {
    setZoom(100);
    setHasScrolled(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [project?.id]);

  if (!project) return null;

  const displayImage = project.fullImage || project.image;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-slate-950/95 backdrop-blur-xl transition-all duration-200 select-none"
      role="dialog"
      aria-modal="true"
      aria-label={`Full Landing Page: ${project.title}`}
    >
      {/* Top Navigation & Controls Bar */}
      <header className="h-16 px-4 md:px-6 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between gap-4 shrink-0 z-20">
        {/* Left: Project Branding & Title */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sky-950/80 border border-sky-800/60 text-sky-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{project.category === 'Websites' ? 'Full Website Design' : 'Full Landing Page'}</span>
          </div>
          <div className="min-w-0">
            <h2 className="text-white font-semibold text-sm md:text-base truncate tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs text-slate-400 truncate hidden md:block">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Center: Carousel / Pagination Navigation */}
        {projectsList.length > 1 && (
          <div className="flex items-center gap-1.5 bg-slate-950/80 border border-slate-800 rounded-full px-2 py-1 shadow-inner">
            <button
              onClick={handlePrev}
              disabled={currentIndex <= 0}
              aria-label="Previous sample"
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-medium text-slate-300 px-2 min-w-[50px] text-center">
              {currentIndex + 1} / {projectsList.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex >= projectsList.length - 1}
              aria-label="Next sample"
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-slate-400 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Right: Zoom controls, external link, and close */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Zoom In / Out Controls */}
          <div className="hidden sm:flex items-center gap-1 bg-slate-950/80 border border-slate-800 rounded-full p-1">
            <button
              onClick={() => setZoom((prev) => Math.max(prev - 15, 60))}
              title="Zoom Out (-)"
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono text-slate-300 px-1 min-w-[42px] text-center">
              {zoom}%
            </span>
            <button
              onClick={() => setZoom((prev) => Math.min(prev + 15, 160))}
              title="Zoom In (+)"
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setZoom(100)}
              title="Reset Zoom to 100%"
              className="p-1 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-0.5"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Open full-res raw file in new tab */}
          <a
            href={getAssetUrl(displayImage)}
            target="_blank"
            rel="noopener noreferrer"
            title="Open high-res image in new tab"
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-full transition-colors cursor-pointer border border-transparent hover:border-slate-700"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Close Lightbox */}
          <button
            onClick={onClose}
            aria-label="Close landing page viewer"
            className="p-2 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-full transition-colors cursor-pointer ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Main Canvas / Browser Mockup Area */}
      <div
        ref={scrollContainerRef}
        onScroll={() => setHasScrolled(true)}
        className="flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-6 md:p-8 flex justify-center items-start relative scroll-smooth"
        onClick={(e) => {
          // If clicking on empty canvas background, close
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Browser Mockup Window */}
        <div
          style={{ width: `${Math.min(zoom, 150)}%`, maxWidth: zoom <= 100 ? '900px' : `${900 * (zoom / 100)}px` }}
          className="transition-all duration-150 ease-out bg-[#0b101b] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col mb-16 my-auto"
        >
          {/* Faux Browser Window Header */}
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
            {/* Window control dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            </div>

            {/* Faux URL / Preview Address */}
            <div className="flex-1 max-w-md mx-auto bg-slate-950/80 border border-slate-800/80 rounded-md px-3 py-1 text-center truncate">
              <span className="text-[11px] font-mono text-slate-400">
                preview.folista.sh/{project.category.toLowerCase()}/{project.id}
              </span>
            </div>

            {/* Client indicator badge */}
            <div className="text-[11px] text-slate-400 hidden sm:block truncate max-w-[180px]">
              {project.clientType || 'Live Production Concept'}
            </div>
          </div>

          {/* Full High-Resolution Landing Page Image */}
          <div className="w-full bg-slate-950 relative">
            <img
              src={getAssetUrl(displayImage)}
              alt={`Full landing page for ${project.title}`}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-contain block"
              loading="eager"
            />
          </div>
        </div>

        {/* Scroll hint indicator (fades out after first scroll) */}
        {!hasScrolled && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-none transition-opacity duration-300">
            <div className="flex items-center gap-2 bg-slate-900/90 text-slate-300 border border-slate-700/80 px-4 py-2 rounded-full shadow-xl text-xs font-medium backdrop-blur-md animate-bounce">
              <MousePointer className="w-3.5 h-3.5 text-sky-400" />
              <span>Scroll down to inspect full {project.category === 'Websites' ? 'website' : 'landing page'}</span>
            </div>
          </div>
        )}
      </div>

      {/* Floating Bottom Quick-Switcher for Keyboard or Mobile Users */}
      <footer className="h-12 px-4 bg-slate-900/80 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 shrink-0 z-20">
        <div className="flex items-center gap-2">
          <span className="hidden md:inline">Tip: Use Left/Right keys to browse samples, Esc to exit</span>
          <span className="md:hidden truncate">{project.title}</span>
        </div>
        <div className="flex items-center gap-3">
          {currentIndex > 0 && (
            <button
              onClick={handlePrev}
              className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
          )}
          {currentIndex < projectsList.length - 1 && (
            <button
              onClick={handleNext}
              className="hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1"
            >
              <span>Next Sample</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </footer>
    </div>
  );
};
