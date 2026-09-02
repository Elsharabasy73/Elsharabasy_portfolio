import React from 'react';
import { ArrowUp, Terminal, Code2, Server, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md py-10 transition-colors">
      <div className="max-w-[1240px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
        {/* Brand & Dev details */}
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center font-bold text-xs">
            &gt;_
          </div>
          <div>
            <span className="font-semibold text-zinc-900 dark:text-zinc-200">Abd El-Rahman Elsharabasy</span>
            <span className="mx-2 text-zinc-400">•</span>
            <span>Senior Backend Developer</span>
          </div>
        </div>

        {/* Server telemetry */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            SYS_UPTIME: 99.98%
          </span>
          <span className="text-zinc-400">•</span>
          <span>BUILD: v2.4.0-prod</span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 transition-all font-semibold cursor-pointer"
        >
          <span>TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
