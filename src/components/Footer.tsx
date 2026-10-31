import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { MESSENGER_URL } from '../config';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="border-t border-slate-900 bg-[#030611] py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand Wordmark */}
        <div className="flex items-center gap-4">
          <span className="text-base font-bold text-white tracking-tight">
            Leony Tham
          </span>
          <span className="text-xs text-slate-400">
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Right: Contact & Messaging Shortcuts */}
        <div className="flex items-center gap-3">
          <a
            href={MESSENGER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 transition-colors cursor-pointer"
            title="Chat on Facebook Messenger"
            aria-label="Messenger"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenContact()}
            className="w-9 h-9 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 transition-colors cursor-pointer"
            title="Email Leony"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
