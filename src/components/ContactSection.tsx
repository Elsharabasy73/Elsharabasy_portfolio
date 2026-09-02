import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  CheckCircle2, 
  Sparkles,
  Copy,
  Check,
  Terminal,
  Globe
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <section 
      id="contact" 
      className="py-20 max-w-[1240px] mx-auto px-6"
    >
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono text-xs font-semibold mb-3">
          <Terminal className="w-3.5 h-3.5 text-emerald-500" />
          <span>DIRECT DISPATCH</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
          Initiate Contact
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Open to backend engineering roles, cloud systems consulting, and scalable API contract development.
        </p>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Contact Channels (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-2xs space-y-6">
            <div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                Verified Endpoints
              </h3>
              <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 font-normal">
                Direct communication channels. Average response time: &lt;12 hours.
              </p>
            </div>

            <div className="space-y-3">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Email Address</div>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-mono font-semibold text-zinc-900 dark:text-white truncate block hover:underline">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Direct Mobile / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-mono font-semibold text-zinc-900 dark:text-white truncate">
                      {PERSONAL_INFO.phone}
                    </div>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="p-2 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-zinc-700 dark:text-zinc-300 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase">Base of Operations</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-white">
                    {PERSONAL_INFO.location} <span className="text-zinc-500 font-normal">({PERSONAL_INFO.relocationStatus})</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Link Grid */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-center font-mono text-xs text-zinc-700 dark:text-zinc-300 font-semibold transition-colors flex flex-col items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-center font-mono text-xs text-zinc-700 dark:text-zinc-300 font-semibold transition-colors flex flex-col items-center gap-1.5"
              >
                <Linkedin className="w-4 h-4 text-blue-500" />
                <span>LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.livePortfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-center font-mono text-xs text-emerald-600 dark:text-emerald-400 font-semibold transition-colors flex flex-col items-center gap-1.5"
              >
                <Globe className="w-4 h-4" />
                <span>Kayan Live</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Message Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-zinc-200 dark:border-zinc-800 shadow-2xs">
            {submitted ? (
              <div className="text-center py-10 flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Message Dispatched Successfully
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-sm max-w-sm">
                  Thanks, <strong className="font-semibold">{formData.name}</strong>. Your message was recorded. A reply will be sent to <span className="font-mono text-emerald-600 dark:text-emerald-400">{formData.email}</span>.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-4 px-5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <Terminal className="w-4 h-4 text-emerald-500" />
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    Send Direct Dispatch Message
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name" 
                      className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase font-semibold"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Engineering Lead"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-email" 
                      className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase font-semibold"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white font-sans transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="contact-subject" 
                    className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase font-semibold"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Backend Developer Role / System Architecture"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white font-sans transition-colors"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="contact-message" 
                    className="block text-xs font-mono text-zinc-500 dark:text-zinc-400 mb-1.5 uppercase font-semibold"
                  >
                    Message Body
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Project requirements, team scope, technical specifications, or interview scheduling..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-900 dark:focus:border-white font-sans transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-semibold text-sm shadow-xs transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
