import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Code, 
  Terminal, 
  Layers, 
  ExternalLink, 
  Github, 
  Cpu, 
  Database,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Full-Stack' | 'Backend API' | 'Mobile Backend'>('All');

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  const filterOptions: ('All' | 'Full-Stack' | 'Backend API' | 'Mobile Backend')[] = [
    'All',
    'Full-Stack',
    'Backend API',
    'Mobile Backend'
  ];

  return (
    <section 
      id="projects" 
      className="py-20 max-w-[1240px] mx-auto px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-xs font-semibold mb-3">
          <Terminal className="w-3.5 h-3.5 text-purple-500" />
          <span>PRODUCTION &amp; ARCHITECTURE REPOSITORIES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
          Featured Engineering Projects
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Comprehensive enterprise architectures, RESTful API microservices, distributed caching, and clean TypeScript/Node.js patterns.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer ${
                activeFilter === filter
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col overflow-hidden group"
          >
            {/* Project Header Image */}
            <div 
              onClick={() => onSelectProject(project)}
              className="h-48 w-full bg-zinc-900 relative overflow-hidden cursor-pointer border-b border-zinc-200 dark:border-zinc-800"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent"></div>

              {/* Status Badge */}
              {project.statusBadge && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2.5 py-1 bg-purple-600/90 text-white rounded-md text-[11px] font-mono font-bold backdrop-blur-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    {project.statusBadge}
                  </span>
                </div>
              )}

              {/* Category Pill */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2.5 py-1 bg-zinc-900/80 text-zinc-200 border border-zinc-700/80 rounded-md text-[10px] font-mono uppercase tracking-wider backdrop-blur-xs">
                  {project.category}
                </span>
              </div>

              {/* Click to Inspect Prompt */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-zinc-300 font-mono">
                <span className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                  {project.subtitle || project.title}
                </span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-emerald-400 flex items-center gap-1">
                  Inspect &rarr;
                </span>
              </div>
            </div>

            {/* Project Info Body */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 
                onClick={() => onSelectProject(project)}
                className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors cursor-pointer leading-snug mb-2"
              >
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Metric Highlights Pill if available */}
              {project.metrics && (
                <div className="mb-4 p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 grid grid-cols-2 gap-2 text-xs font-mono">
                  {Object.entries(project.metrics).slice(0, 2).map(([key, val]) => (
                    <div key={key}>
                      <span className="text-[10px] text-zinc-400 uppercase block">{key}</span>
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">{String(val)}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Highlights List */}
              <ul className="space-y-2 mb-5 flex-1 text-xs text-zinc-600 dark:text-zinc-300">
                {project.highlights.slice(0, 2).map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded text-[11px] font-mono border border-zinc-200/60 dark:border-zinc-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 font-semibold transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                ) : (
                  <span className="font-mono text-xs text-zinc-400">Commercial IP</span>
                )}

                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  <span>Specs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
