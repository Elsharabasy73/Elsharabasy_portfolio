import React from 'react';
import { 
  X, 
  Download, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin, 
  CheckCircle2, 
  GraduationCap,
  Terminal,
  FileText
} from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, EXPERIENCE_ITEMS, PROJECTS_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const resumeText = `
================================================================================
ABD EL-RAHMAN ELSHARABASY — SENIOR BACKEND DEVELOPER
Node.js · Express.js · PostgreSQL · MongoDB · Redis · Cloud Deployments (Azure & AWS)
================================================================================
Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location} (${PERSONAL_INFO.relocationStatus})
GitHub: ${PERSONAL_INFO.github}
LinkedIn: ${PERSONAL_INFO.linkedin}
Live Production System: ${PERSONAL_INFO.livePortfolio}

--------------------------------------------------------------------------------
PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
${PERSONAL_INFO.aboutBio}

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
${PERSONAL_INFO.education.degree} (${PERSONAL_INFO.education.period})
${PERSONAL_INFO.education.institution}
${PERSONAL_INFO.education.grade}

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
${SKILL_CATEGORIES.map(c => `[${c.category}]\n${c.skills.map(s => s.name).join(', ')}`).join('\n\n')}

--------------------------------------------------------------------------------
WORK EXPERIENCE
--------------------------------------------------------------------------------
${EXPERIENCE_ITEMS.map(e => `
* ${e.role} — ${e.company}
  Period: ${e.period} | Type: ${e.type} | Live: ${e.liveUrl || 'N/A'}
  Technologies: ${e.tags.join(', ')}
${e.points.map(p => `  • ${p}`).join('\n')}
`).join('\n')}

--------------------------------------------------------------------------------
SELECTED PROJECTS
--------------------------------------------------------------------------------
${PROJECTS_DATA.map(p => `
* ${p.title} (${p.category || 'Backend'})
  Subtitle: ${p.subtitle || ''}
  Technologies: ${p.tags.join(', ')}
  Description: ${p.description}
${p.highlights.map(h => `  • ${h}`).join('\n')}
  Repository: ${p.githubUrl || 'Commercial IP / Private'}
`).join('\n')}

--------------------------------------------------------------------------------
CERTIFICATIONS & VERIFIED CREDENTIALS
--------------------------------------------------------------------------------
${CERTIFICATIONS_DATA.map(c => `• ${c.title} (${c.issuer}, ${c.year})`).join('\n')}

--------------------------------------------------------------------------------
LANGUAGES & MILITARY SERVICE
--------------------------------------------------------------------------------
Languages: ${PERSONAL_INFO.languages}
Military Service: ${PERSONAL_INFO.militaryService.title} (${PERSONAL_INFO.militaryService.timeline}) - ${PERSONAL_INFO.militaryService.status}
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Abd_El-Rahman_Elsharabasy_CV.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl max-w-4xl w-full shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
          <div className="flex items-center gap-2 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <FileText className="w-4 h-4 text-emerald-500" />
            <span className="font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Curriculum Vitae (CV)
            </span>
            <span>•</span>
            <span>Abd El-Rahman Elsharabasy</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors inline-flex items-center gap-1.5 text-xs font-mono font-semibold cursor-pointer"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>
            
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 transition-colors inline-flex items-center gap-1.5 text-xs font-mono font-semibold cursor-pointer"
              title="Download Plain Text Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-800 dark:text-zinc-200 font-sans">
          {/* Header */}
          <div className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-sm font-mono font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
                  Senior Backend Developer · Node.js, Express.js &amp; Cloud Infrastructure
                </p>
              </div>

              <div className="text-xs font-mono text-zinc-600 dark:text-zinc-400 space-y-1">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-zinc-400" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{PERSONAL_INFO.location} ({PERSONAL_INFO.relocationStatus})</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 mt-4 text-xs font-mono">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 underline">
                <Github className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.githubUsername}</span>
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 underline">
                <Linkedin className="w-3.5 h-3.5 text-blue-500" />
                <span>LinkedIn Profile</span>
              </a>
              <a href={PERSONAL_INFO.livePortfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline">
                <Globe className="w-3.5 h-3.5" />
                <span>Live System (kayanmodern.com)</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
              {PERSONAL_INFO.aboutBio}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.category} className="bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-700/80">
                  <span className="font-mono font-bold text-zinc-900 dark:text-white block mb-1 text-[11px] uppercase">{cat.category}</span>
                  <span className="text-zinc-600 dark:text-zinc-300">{cat.skills.map(s => s.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
              Work Experience
            </h2>
            {EXPERIENCE_ITEMS.map((exp) => (
              <div key={exp.id} className="mb-6 p-4 rounded-xl bg-zinc-50/50 dark:bg-zinc-800/40 border border-zinc-200/80 dark:border-zinc-800">
                <div className="flex justify-between items-baseline flex-wrap gap-2">
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-white">
                    {exp.role} — {exp.company}
                  </h3>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    {exp.period} | {exp.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 my-2">
                  {exp.tags.map(t => (
                    <span key={t} className="px-2 py-0.5 bg-zinc-200/80 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-[11px] font-mono rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1.5 mt-3 text-xs text-zinc-600 dark:text-zinc-300">
                  {exp.points.map((p, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education & Military Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                Education
              </h2>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">{PERSONAL_INFO.education.degree}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 font-mono">{PERSONAL_INFO.education.institution} ({PERSONAL_INFO.education.period})</p>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-1 font-mono">{PERSONAL_INFO.education.grade}</p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/80">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                Languages &amp; Military Status
              </h2>
              <p className="text-xs text-zinc-700 dark:text-zinc-300"><strong className="text-zinc-900 dark:text-white">Languages:</strong> {PERSONAL_INFO.languages}</p>
              <p className="text-xs text-zinc-700 dark:text-zinc-300 mt-2"><strong className="text-zinc-900 dark:text-white">Service:</strong> {PERSONAL_INFO.militaryService.title} ({PERSONAL_INFO.militaryService.timeline})</p>
              <p className="text-[11px] text-zinc-500 font-mono mt-1">{PERSONAL_INFO.militaryService.status}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
