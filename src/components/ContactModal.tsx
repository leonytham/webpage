import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, Copy, Check, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = 'Sales Funnel'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [budget, setBudget] = useState('$2,000 – $5,000');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    try {
      // Send directly to leonytham@gmail.com (works on GitHub Pages, Vercel, and AI Studio)
      await fetch('https://formsubmit.co/ajax/leonytham@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          service,
          budget,
          message: message || 'No additional message provided.',
          _subject: `New Project Inquiry from ${name} (${service})`,
          _template: 'table',
          _captcha: 'false'
        }),
      });

      // Also notify local development server if running
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, service, budget, message }),
      }).catch(() => {});
    } catch (err) {
      console.warn('API submission notice:', err);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('leonytham@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const resetAndClose = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-200"
      onClick={resetAndClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-xl bg-[#090e19] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-full transition-colors focus:outline-none cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-normal text-white">
                Brief received
              </h3>
              <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-white font-medium">{name}</span>. Leony has received your project details and will review them before reaching out to <span className="text-sky-300">{email}</span> within 24 hours.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={resetAndClose}
                className="bg-[#38bdf8] hover:bg-[#7dd3fc] text-slate-950 font-semibold text-sm px-6 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                Back to website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 text-xs text-sky-400 font-medium mb-1 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start a project</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                Get in touch
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Share what you are working on and we will build a tailored roadmap.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Service Needed</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Sales Funnel', 'Website', 'AIGC Video', 'Full-Stack Suite', 'Custom Automation'].map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setService(item)}
                      className={`px-3 py-2 text-xs font-medium rounded-lg border text-left transition-colors cursor-pointer ${
                        service === item
                          ? 'bg-sky-950/80 border-sky-600 text-sky-200'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Estimated Budget</label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="Under $2,000">Under $2,000</option>
                  <option value="$2,000 – $5,000">$2,000 – $5,000 (Most common)</option>
                  <option value="$5,000 – $10,000">$5,000 – $10,000 (Full multi-funnel suite)</option>
                  <option value="$10,000+">$10,000+ (Enterprise retainer)</option>
                </select>
              </div>

              {/* Project Details */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">Project Details</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your current offer, target audience, or desired launch date..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#38bdf8] hover:bg-[#7dd3fc] disabled:opacity-50 text-slate-950 font-semibold text-sm py-3 rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-500/20 active:scale-98"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Submitting brief...</span>
                  ) : (
                    <>
                      <span>Send inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Email quick copy */}
            <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
              <span>Or email directly:</span>
              <div className="flex items-center gap-2">
                <a
                  href="mailto:leonytham@gmail.com"
                  className="text-sky-400 hover:text-sky-300 transition-colors"
                >
                  leonytham@gmail.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email"
                  className="p-1 hover:text-white bg-slate-900 border border-slate-800 rounded transition-colors cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
