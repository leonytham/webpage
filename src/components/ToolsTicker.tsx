import React from 'react';
import { 
  Globe, 
  Layers, 
  Layout, 
  Terminal, 
  Figma, 
  Cpu, 
  Zap, 
  Sparkles,
  Boxes
} from 'lucide-react';

interface ToolItem {
  name: string;
  icon: React.ReactNode;
}

const TOOLS: ToolItem[] = [
  { name: 'WordPress', icon: <Globe className="w-4 h-4" /> },
  { name: 'Webflow', icon: <Layout className="w-4 h-4" /> },
  { name: 'Framer', icon: <Layers className="w-4 h-4" /> },
  { name: 'Elementor', icon: <Boxes className="w-4 h-4" /> },
  { name: 'Vercel', icon: <Terminal className="w-4 h-4" /> },
  { name: 'Figma', icon: <Figma className="w-4 h-4" /> },
  { name: 'GoHighLevel', icon: <Cpu className="w-4 h-4" /> },
  { name: 'ClickFunnels', icon: <Zap className="w-4 h-4" /> },
  { name: 'Systeme.io', icon: <Sparkles className="w-4 h-4" /> },
];

export const ToolsTicker: React.FC = () => {
  return (
    <section className="py-14 border-y border-slate-900 bg-[#040814]/60">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-7">
          Tools that I use
        </p>

        {/* Desktop & Tablet Flex Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-slate-400 text-sm font-medium">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:text-slate-200 transition-colors"
            >
              <span className="text-sky-400/80">{tool.icon}</span>
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
