import React from 'react';
import { 
  Building2, 
  Calendar, 
  ExternalLink, 
  CheckCircle2, 
  Server, 
  Terminal, 
  Layers, 
  Activity,
  Globe,
  Github,
  Code2,
  Cpu
} from 'lucide-react';
import { EXPERIENCE_ITEMS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section 
      id="experience" 
      className="py-20 max-w-[1240px] mx-auto px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-xs font-semibold mb-3">
          <Terminal className="w-3.5 h-3.5 text-emerald-500" />
          <span>PRODUCTION TRACK RECORD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
          Professional Experience &amp; Commercial Deployments
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Architecting real-world commercial platforms from scratch, deploying to Linux cloud VMs, and supporting active daily operations.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-12">
        {EXPERIENCE_ITEMS.map((item) => (
          <article
            key={item.id}
            className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            {/* Top Bar with Role & Status */}
            <div className="p-6 sm:px-8 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    {item.type}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">•</span>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {item.location}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                  {item.role} <span className="text-zinc-400 font-normal">@</span> {item.company}
                </h3>
              </div>

              <div className="flex items-center gap-2.5 flex-wrap self-start sm:self-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>

                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-semibold border border-zinc-200 dark:border-zinc-700 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Code Repo</span>
                    <ExternalLink className="w-3 h-3 text-zinc-400" />
                  </a>
                )}

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-semibold border border-emerald-200/60 dark:border-emerald-800/40 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Platform</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Content Body: Two Columns on large screens */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Visual Showcase & Architecture Specs */}
                {item.imageUrl && (
                  <div className="lg:col-span-5 space-y-4">
                    {/* Browser / Platform Mockup Frame */}
                    <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-md">
                      {/* Browser Titlebar */}
                      <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-zinc-900/90 text-[11px] font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                        </div>
                        <div className="text-zinc-400 truncate max-w-[200px] text-[10.5px]">
                          {item.liveUrl?.replace('https://', '') || item.company}
                        </div>
                        <div className="flex items-center gap-1 text-emerald-400 text-[10px]">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                          <span>LIVE</span>
                        </div>
                      </div>

                      {/* Platform Screenshot */}
                      <div className="relative group overflow-hidden bg-zinc-900 aspect-16/10">
                        <img
                          src={item.imageUrl}
                          alt={`${item.company} Platform Preview`}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        {item.liveUrl && (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-zinc-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold backdrop-blur-xs"
                          >
                            <span>Open Live Website</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Architecture Specs Mini-Grid */}
                    {item.architectureHighlights && (
                      <div className="grid grid-cols-2 gap-2.5 pt-1">
                        {item.architectureHighlights.map((arch, idx) => (
                          <div key={idx} className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-800 text-xs">
                            <div className="font-mono text-zinc-500 dark:text-zinc-400 text-[10px] uppercase">{arch.label}</div>
                            <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-[11.5px] mt-0.5 truncate" title={arch.val}>
                              {arch.val}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Right Column: Engineering Deliverables & Tech Stack */}
                <div className={item.imageUrl ? "lg:col-span-7 space-y-6" : "col-span-12 space-y-6"}>
                  {/* Key Bullet Points */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3.5 flex items-center gap-2">
                      <Server className="w-4 h-4 text-emerald-500" />
                      <span>Key Engineering Accomplishments &amp; Deliverables</span>
                    </h4>
                    <ul className="space-y-3">
                      {item.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture Overview Flow */}
                  {item.architectureOverview && item.architectureOverview.length > 0 && (
                    <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2.5 flex items-center gap-2">
                        <Layers className="w-4 h-4 text-blue-500" />
                        <span>System Architecture Pipeline</span>
                      </h4>
                      <div className="space-y-1.5">
                        {item.architectureOverview.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400">
                            <span className="w-4 h-4 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center text-[10px] font-bold shrink-0">
                              {idx + 1}
                            </span>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Stack Chips */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-2.5 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-purple-500" />
                      <span>Production Technology Stack:</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono border border-zinc-200 dark:border-zinc-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
