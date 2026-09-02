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
  Globe
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
          Professional Experience
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Architecting real-world commercial platforms from scratch, deploying to Linux cloud VMs, and supporting active daily operations.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8">
        {EXPERIENCE_ITEMS.map((item) => (
          <article
            key={item.id}
            className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xs overflow-hidden transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700"
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

              <div className="flex items-center gap-3 self-start sm:self-auto">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-xs font-mono text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>

                {item.liveUrl && (
                  <a
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/80 text-emerald-700 dark:text-emerald-300 text-xs font-mono font-semibold border border-emerald-200/60 dark:border-emerald-800/40 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Platform</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Key Bullet Points */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
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

              {/* Architecture Highlights Table / Grid */}
              {item.architectureHighlights && (
                <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-3 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-500" />
                    <span>Deployed Architecture Specifications</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                    {item.architectureHighlights.map((arch, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-xs">
                        <div className="font-mono text-zinc-400 text-[10px] uppercase">{arch.label}</div>
                        <div className="font-semibold text-zinc-900 dark:text-zinc-100 mt-0.5">{arch.val}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack Chips */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mr-2">Technologies:</span>
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
          </article>
        ))}
      </div>
    </section>
  );
};
