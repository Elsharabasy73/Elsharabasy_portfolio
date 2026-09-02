import React, { useState } from 'react';
import { 
  X, 
  ExternalLink, 
  Code, 
  CheckCircle2, 
  Layers, 
  Database, 
  Server, 
  Cpu, 
  Terminal, 
  Copy, 
  Check, 
  Github 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'architecture'>('overview');
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const copySnippet = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet.code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl max-w-3xl w-full shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50/80 dark:bg-zinc-900/80">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
            <Terminal className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider">{project.category}</span>
            <span>•</span>
            <span className="truncate max-w-[200px] sm:max-w-xs">{project.title}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation Header */}
        <div className="flex items-center gap-2 px-6 pt-4 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs font-mono">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-3 font-semibold transition-all border-b-2 cursor-pointer ${
              activeTab === 'overview'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
            }`}
          >
            System Overview
          </button>
          
          {project.codeSnippet && (
            <button
              onClick={() => setActiveTab('code')}
              className={`pb-3 font-semibold transition-all border-b-2 cursor-pointer ${
                activeTab === 'code'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              Source Snippet ({project.codeSnippet.language})
            </button>
          )}

          {project.architectureHighlights && project.architectureHighlights.length > 0 && (
            <button
              onClick={() => setActiveTab('architecture')}
              className={`pb-3 font-semibold transition-all border-b-2 cursor-pointer ${
                activeTab === 'architecture'
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              Architecture Specs
            </button>
          )}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-700 dark:text-zinc-300">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white leading-tight">
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>

              {/* Cover Image */}
              <div className="rounded-xl overflow-hidden h-52 bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                  Architecture Overview
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                  {project.description}
                </p>
              </div>

              {/* Key Highlights */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                  Key Engineering Implementations
                </h3>
                <div className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                  Stack &amp; Ecosystem
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md text-xs font-mono border border-zinc-200 dark:border-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'code' && project.codeSnippet && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {project.codeSnippet.title}
                  </h3>
                  <p className="text-xs text-zinc-500 font-mono">
                    {project.codeSnippet.description}
                  </p>
                </div>

                <button
                  onClick={copySnippet}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-mono text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCode ? 'Copied' : 'Copy Snippet'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-xs sm:text-sm font-mono overflow-x-auto text-zinc-200 leading-relaxed">
                <pre>{project.codeSnippet.code}</pre>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && project.architectureHighlights && (
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Detailed Infrastructure Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.architectureHighlights.map((arch, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80">
                    <div className="text-xs font-mono text-zinc-400 uppercase font-semibold">{arch.label}</div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mt-1">{arch.val}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:px-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80 flex items-center justify-between">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-mono font-semibold transition-all"
            >
              <Github className="w-4 h-4" />
              <span>Inspect on GitHub</span>
            </a>
          ) : (
            <span className="font-mono text-xs text-zinc-400">Commercial IP — Private Repository</span>
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
