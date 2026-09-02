import React from 'react';
import { 
  MapPin, 
  Languages, 
  GraduationCap, 
  Star, 
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  Calendar
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="py-20 max-w-[1240px] mx-auto px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-xs font-semibold mb-3">
          <Terminal className="w-3.5 h-3.5 text-blue-500" />
          <span>BACKGROUND &amp; PHILOSOPHY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
          About &amp; Technical Capabilities
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          From relational schema normalization and high-throughput routing to Linux daemon supervisors and cloud storage integration.
        </p>
      </div>

      {/* Main Bio, Education & Military Service Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        {/* Left: Bio Narrative (7 cols) */}
        <div className="lg:col-span-7 bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-zinc-200 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-500" />
              <span>Full Lifecycle Backend Engineering</span>
            </h3>
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
              {PERSONAL_INFO.aboutBio}
            </p>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-mono space-y-1.5">
              <div className="text-emerald-600 dark:text-emerald-400 font-bold">Key Architectural Priorities:</div>
              <div>• Idempotent API operations with strict validation layers (Zod / Joi)</div>
              <div>• Zero credential leakage via single-device session invalidation</div>
              <div>• Low-latency database indexing &amp; Redis read caching (&lt;45ms SLA)</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-zinc-900 dark:text-white">Location</div>
                <div className="text-zinc-500 dark:text-zinc-400">{PERSONAL_INFO.location} ({PERSONAL_INFO.relocationStatus})</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                <Languages className="w-4 h-4" />
              </div>
              <div>
                <div className="font-semibold text-zinc-900 dark:text-white">Languages</div>
                <div className="text-zinc-500 dark:text-zinc-400">{PERSONAL_INFO.languages}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Academic & Military Status (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Education Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">Academic Degree</h3>
            </div>
            <div className="space-y-1.5">
              <div className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                {PERSONAL_INFO.education.degree}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                {PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.period}
              </div>
              <div className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded-md border border-blue-200/50 dark:border-blue-800/40 mt-1">
                <Star className="w-3 h-3 fill-current" />
                <span>{PERSONAL_INFO.education.grade}</span>
              </div>
            </div>
          </div>

          {/* Military Service Roadmap Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-zinc-200 dark:border-zinc-800 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-5 h-5 text-amber-500" />
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">{PERSONAL_INFO.militaryService.title}</h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-3">
              {PERSONAL_INFO.militaryService.status}
            </p>
            <div className="font-mono text-xs px-2.5 py-1.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
              Timeline: <strong>{PERSONAL_INFO.militaryService.timeline}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Categorized Technical Skills Matrix */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-emerald-500" />
            <span>Technical Competency Matrix</span>
          </h3>
          <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Categorized by layer</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div 
              key={cat.category}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
                  {cat.category}
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center px-3.5 py-2 bg-zinc-100/90 dark:bg-zinc-800/80 rounded-xl text-zinc-800 dark:text-zinc-200 text-xs font-medium border border-zinc-200/90 dark:border-zinc-700/60 hover:bg-zinc-200/80 dark:hover:bg-zinc-700/90 transition-all duration-200 group hover:scale-[1.03] shadow-2xs"
                    >
                      <span className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200 flex items-center justify-center shrink-0">
                        <TechIcon name={skill.name} className="w-5 h-5 rounded-xs" />
                      </span>
                      <span className="font-medium font-sans">{skill.name}</span>
                      {skill.level === 'Core' && (
                        <span className="ml-1.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" title="Core Production Skill"></span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
