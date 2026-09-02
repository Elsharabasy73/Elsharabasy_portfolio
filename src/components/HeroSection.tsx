import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Globe, 
  ArrowRight, 
  Terminal as TerminalIcon, 
  Check, 
  Copy, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Activity,
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TerminalConsole } from './TerminalConsole';
import { ProgrammingVisualCard } from './ProgrammingVisualCard';

export const HeroSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showEmbeddedTerminal, setShowEmbeddedTerminal] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section 
      id="home" 
      className="pt-28 md:pt-36 pb-16 max-w-[1240px] mx-auto px-6 flex flex-col justify-center min-h-[85vh]"
    >
      {/* Live Backend Telemetry Strip */}
      <div className="w-full mb-8 p-2.5 sm:px-4 rounded-xl bg-zinc-100/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-600 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-zinc-900 dark:text-zinc-200 font-semibold">STATUS:</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">{PERSONAL_INFO.status}</span>
        </div>

        <div className="flex items-center gap-4 sm:gap-6 text-[11px] overflow-x-auto">
          <span className="hidden sm:inline">
            <strong className="text-zinc-900 dark:text-zinc-300">STACK:</strong> Node.js · Express · PostgreSQL · Mongo
          </span>
          <span>
            <strong className="text-zinc-900 dark:text-zinc-300">HOST:</strong> Azure VM + AWS S3
          </span>
          <span className="hidden md:inline">
            <strong className="text-zinc-900 dark:text-zinc-300">LATENCY:</strong> &lt;45ms
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Bio & Core Specs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          {/* Engineering Role Eyebrow */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            <span>[DAM-EGY]</span>
            <span>•</span>
            <span className="text-zinc-900 dark:text-zinc-200 font-semibold">{PERSONAL_INFO.roleSpecialty}</span>
          </div>

          {/* Clean Editorial Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.12]">
            {PERSONAL_INFO.name}
          </h1>

          {/* Subtitle / Engineer Mission */}
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-xl font-normal">
            {PERSONAL_INFO.bioHeadline}
          </p>

          {/* Stats Bento Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-1">
            {PERSONAL_INFO.systemStats.map((st) => (
              <div 
                key={st.label} 
                className="p-3 rounded-xl bg-white dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 shadow-2xs"
              >
                <div className="font-mono text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {st.value}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium">
                  {st.label}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 px-6 py-3 rounded-xl font-semibold text-sm shadow-xs transition-all cursor-pointer active:scale-95"
            >
              <span>Initiate Contact</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#architecture"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 px-5 py-3 rounded-xl font-semibold text-sm shadow-xs hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all cursor-pointer"
            >
              <Server className="w-4 h-4 text-emerald-500" />
              <span>Inspect Architecture</span>
            </a>

            <button
              onClick={() => setShowEmbeddedTerminal(!showEmbeddedTerminal)}
              className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-mono text-xs font-semibold border transition-all cursor-pointer ${
                showEmbeddedTerminal
                  ? 'bg-emerald-600 text-white border-emerald-600'
                  : 'bg-zinc-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 border-zinc-300 dark:border-zinc-700 hover:border-emerald-500'
              }`}
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>{showEmbeddedTerminal ? 'Hide Terminal' : 'Interactive CLI'}</span>
            </button>
          </div>

          {/* Verified Developer Links Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <button
              onClick={copyEmail}
              className="h-10 px-3.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-mono inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700/60 transition-colors cursor-pointer"
              title="Click to copy email address"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{PERSONAL_INFO.email}</span>
            </button>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-mono inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700/60 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-zinc-500" />
              <span>GitHub</span>
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-mono inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700/60 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PERSONAL_INFO.livePortfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 px-3.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-emerald-600 dark:text-emerald-400 text-xs font-mono inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700/60 transition-colors"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>kayanmodern.com</span>
            </a>
          </div>
        </div>

        {/* Right Column: Programming Visualizer or Interactive Terminal (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end w-full">
          {showEmbeddedTerminal ? (
            <div className="w-full animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-2 mb-1">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  ~/portfolio-cli (interactive)
                </span>
                <button
                  onClick={() => setShowEmbeddedTerminal(false)}
                  className="text-xs font-mono text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>&larr; Switch to Code / Architecture View</span>
                </button>
              </div>
              <TerminalConsole />
            </div>
          ) : (
            <div className="w-full animate-in fade-in zoom-in-95 duration-200">
              <ProgrammingVisualCard onOpenTerminal={() => setShowEmbeddedTerminal(true)} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
