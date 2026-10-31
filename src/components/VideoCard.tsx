import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Project } from '../types';

interface VideoCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ project, onSelect }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const totalSeconds = project.videoMeta?.seconds || 30;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalSeconds) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, totalSeconds]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, clickX / rect.width));
    setCurrentTime(Math.floor(ratio * totalSeconds));
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${mins}:${remSecs < 10 ? '0' : ''}${remSecs}`;
  };

  const progressPercent = (currentTime / totalSeconds) * 100;

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
      {/* Video Viewport & Player Frame */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 flex flex-col justify-end">
        {/* Thumbnail Background */}
        <img
          src={project.image}
          alt={project.title}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center absolute inset-0 transition-transform duration-300 ${
            isPlaying ? 'scale-105' : 'group-hover:scale-102'
          }`}
        />

        {/* Dynamic caption overlay */}
        {project.videoMeta?.caption && (
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <span className="bg-black/60 backdrop-blur-xs text-white text-xs md:text-sm font-bold px-3 py-1 rounded shadow-md border border-white/10 uppercase tracking-wide">
              {project.videoMeta.caption}
            </span>
          </div>
        )}

        {/* Video Scrim & Controls Overlay */}
        <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent pt-6 pb-2 px-3 flex flex-col gap-1.5">
          {/* Controls Row */}
          <div className="flex items-center justify-between text-white text-xs">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="hover:text-sky-400 p-1 rounded transition-colors focus:outline-none"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? (
                  <Pause className="w-3.5 h-3.5 fill-current" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
              </button>
              <span className="font-mono text-[11px] text-slate-200 tabular-nums">
                {formatTime(currentTime)} / {project.videoMeta?.duration || '0:30'}
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <button
                onClick={toggleMute}
                className="hover:text-white p-1 rounded transition-colors focus:outline-none"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-3.5 h-3.5" />
                ) : (
                  <Volume2 className="w-3.5 h-3.5" />
                )}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelect(project);
                }}
                className="hover:text-white p-1 rounded transition-colors focus:outline-none"
                aria-label="Expand video"
              >
                <Maximize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Interactive Progress Bar */}
          <div
            onClick={handleSeek}
            className="w-full h-1 bg-slate-700/60 hover:h-1.5 rounded-full cursor-pointer relative overflow-hidden transition-all duration-150"
          >
            <div
              className="absolute top-0 bottom-0 left-0 bg-sky-400 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
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
