import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Database, 
  Terminal, 
  FileCode2, 
  HardDrive, 
  Cpu, 
  Binary,
  CheckCircle,
  Award
} from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Certification } from '../types';

export const CertificationsSection: React.FC = () => {
  const getCertIcon = (iconName: Certification['iconName']) => {
    const iconClass = "w-5 h-5 text-emerald-600 dark:text-emerald-400";
    if (iconName === 'code') return <Code2 className={iconClass} />;
    if (iconName === 'database') return <Database className={iconClass} />;
    if (iconName === 'terminal') return <Terminal className={iconClass} />;
    if (iconName === 'javascript') return <FileCode2 className={iconClass} />;
    if (iconName === 'storage') return <HardDrive className={iconClass} />;
    if (iconName === 'computer') return <Cpu className={iconClass} />;
    if (iconName === 'integration_instructions') return <Binary className={iconClass} />;
    return <GraduationCap className={iconClass} />;
  };

  return (
    <section 
      id="certifications" 
      className="py-20 max-w-[1240px] mx-auto px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-xs font-semibold mb-3">
          <Award className="w-3.5 h-3.5 text-amber-500" />
          <span>VERIFIED CREDENTIALS</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
          Certifications &amp; Training
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Rigorous academic and industry verifications covering algorithms, backend microservices, database normalization, and clean code paradigms.
        </p>
      </div>

      {/* Grid of Certifications */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {CERTIFICATIONS_DATA.map((cert) => (
          <div
            key={cert.id}
            className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {getCertIcon(cert.iconName)}
              </div>

              <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white mb-2 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {cert.title}
              </h3>
            </div>

            <div className="pt-4 mt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              <span className="font-medium truncate max-w-[120px]">{cert.issuer}</span>
              <span className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-[11px]">
                {cert.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
