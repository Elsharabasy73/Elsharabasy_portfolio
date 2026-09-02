import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Maximize2, Minimize2, CornerDownLeft, Copy, Check, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES, PROJECTS_DATA, EXPERIENCE_ITEMS, TERMINAL_COMMANDS_HELP } from '../data/portfolioData';

interface TerminalConsoleProps {
  onClose?: () => void;
  isOpen?: boolean;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export const TerminalConsole: React.FC<TerminalConsoleProps> = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-2 text-zinc-300 dark:text-zinc-300">
          <p className="text-emerald-400 font-bold">
            ✨ Abd El-Rahman Elsharabasy — Interactive Backend Engineer CLI (v2.4.0)
          </p>
          <p className="text-zinc-400 text-xs">
            Type <span className="text-amber-300 font-mono">help</span> to view available commands, or click any quick-run pill below.
          </p>
        </div>
      ),
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [commandIndex, setCommandIndex] = useState<number>(-1);
  const [submittedCommands, setSubmittedCommands] = useState<string[]>([]);
  const [isCopied, setIsCopied] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommandExecution = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setSubmittedCommands(prev => [...prev, rawCmd]);
    setCommandIndex(-1);

    const timestamp = new Date().toLocaleTimeString();
    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1.5 py-1 text-xs sm:text-sm">
            <p className="text-amber-400 font-semibold mb-2">Available Terminal Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              {TERMINAL_COMMANDS_HELP.map(c => (
                <div key={c.cmd} className="flex items-baseline justify-between border-b border-zinc-800/80 pb-0.5">
                  <span className="font-mono text-cyan-400 font-medium">{c.cmd}</span>
                  <span className="text-zinc-400 text-xs">{c.desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'bio':
      case 'about':
        output = (
          <div className="space-y-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <p className="text-emerald-400 font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.role}</p>
            <p className="text-zinc-300">{PERSONAL_INFO.aboutBio}</p>
            <div className="flex flex-wrap gap-4 text-xs text-zinc-400 pt-1">
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>🎓 {PERSONAL_INFO.education.degree} ({PERSONAL_INFO.education.institution})</span>
              <span>🗣️ {PERSONAL_INFO.languages}</span>
            </div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-3 text-xs sm:text-sm py-1">
            <p className="text-cyan-400 font-bold">Production Technical Stack Matrix:</p>
            {SKILL_CATEGORIES.map(cat => (
              <div key={cat.category} className="space-y-1">
                <p className="text-zinc-400 text-xs font-mono uppercase tracking-wider">{cat.category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map(s => (
                    <span key={s.name} className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 text-xs font-mono border border-zinc-700">
                      {s.name} <span className="text-emerald-400 text-[10px]">({s.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-3 text-xs sm:text-sm py-1">
            <p className="text-purple-400 font-bold">Featured Production & Architecture Projects:</p>
            {PROJECTS_DATA.map((p, idx) => (
              <div key={p.id} className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-zinc-100">{idx + 1}. {p.title}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 text-cyan-300 font-mono">{p.category}</span>
                </div>
                <p className="text-zinc-400 text-xs">{p.description}</p>
                <p className="text-zinc-500 font-mono text-[11px]">Stack: {p.tags.join(', ')}</p>
                {p.githubUrl && <p className="text-blue-400 text-xs font-mono">Repo: {p.githubUrl}</p>}
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        output = (
          <div className="space-y-3 text-xs sm:text-sm py-1">
            <p className="text-blue-400 font-bold">Professional Timeline & Production Deployments:</p>
            {EXPERIENCE_ITEMS.map(exp => (
              <div key={exp.id} className="p-2.5 rounded bg-zinc-900/90 border border-zinc-800 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-zinc-100">{exp.role} — {exp.company}</span>
                  <span className="text-xs font-mono text-amber-400">{exp.period}</span>
                </div>
                <p className="text-zinc-400 text-xs">Live System: <a href={exp.liveUrl} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{exp.liveUrl}</a></p>
                <ul className="list-disc list-inside space-y-1 text-zinc-300 text-xs">
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case 'curl kayanmodern':
      case 'curl https://kayanmodern.com/api/v1/health':
      case 'curl health':
        output = (
          <div className="space-y-1 font-mono text-xs p-3 rounded bg-black/60 border border-emerald-950/80 text-emerald-300">
            <p className="text-zinc-400">&gt; GET /api/v1/health HTTP/2</p>
            <p className="text-zinc-400">&gt; Host: kayanmodern.com</p>
            <p className="text-zinc-400">&gt; User-Agent: curl/8.4.0</p>
            <p className="text-zinc-500 py-1">----------------------------------------</p>
            <p className="text-emerald-400 font-bold">&lt; HTTP/2 200 OK</p>
            <p className="text-zinc-400">&lt; server: Caddy</p>
            <p className="text-zinc-400">&lt; content-type: application/json; charset=utf-8</p>
            <p className="text-zinc-400">&lt; x-response-time: 34.2ms</p>
            <p className="text-zinc-400">&lt; x-cluster-node: azure-vm-node-01</p>
            <p className="text-zinc-400">&lt; strict-transport-security: max-age=31536000</p>
            <div className="mt-2 p-2 bg-zinc-950 rounded text-cyan-300">
              {JSON.stringify({
                status: "healthy",
                uptime: "99.98%",
                database: "connected (MongoDB Atlas replica)",
                caching: "active",
                endpointsServed: 34,
                activeConnections: 18,
                timestamp: new Date().toISOString()
              }, null, 2)}
            </div>
          </div>
        );
        break;

      case 'cat caddyfile':
        output = (
          <div className="p-3 rounded bg-black/70 border border-zinc-800 text-xs font-mono space-y-1 text-zinc-300">
            <p className="text-amber-400 font-bold mb-2"># Production /etc/caddy/Caddyfile</p>
            <pre className="overflow-x-auto text-zinc-300 leading-relaxed">
{`kayanmodern.com, www.kayanmodern.com {
    # Automatic Let's Encrypt TLS & HTTP/2
    tls abdo.elsharabasy73@gmail.com
    encode gzip zstd

    # Security Headers
    header {
        Strict-Transport-Security "max-age=31536000; includeSubDomains"
        X-Content-Type-Options "nosniff"
        X-Frame-Options "DENY"
        Referrer-Policy "strict-origin-when-cross-origin"
    }

    # API Proxy Routing to Node.js Backend Cluster
    handle /api/* {
        reverse_proxy localhost:5000 {
            header_up X-Real-IP {remote_host}
            header_up X-Forwarded-Proto {scheme}
        }
    }

    # Static SPA Frontend Routing Fallback
    handle {
        root * /var/www/kayanmodern/dist
        try_files {path} /index.html
        file_server
    }
}`}
            </pre>
          </div>
        );
        break;

      case 'cat systemd':
      case 'systemctl status api':
        output = (
          <div className="p-3 rounded bg-black/70 border border-zinc-800 text-xs font-mono space-y-1 text-zinc-300">
            <p className="text-emerald-400 font-bold">● kayan-api.service - Node.js Express Backend Daemon</p>
            <p className="text-zinc-400">Loaded: loaded (/etc/systemd/system/kayan-api.service; enabled; vendor preset: enabled)</p>
            <p className="text-emerald-400">Active: active (running) since Sun 2024-09-15; 168d 14h ago</p>
            <p className="text-zinc-400">Docs: https://kayanmodern.com</p>
            <p className="text-zinc-400">Main PID: 14892 (node)</p>
            <p className="text-zinc-400">Tasks: 11 (limit: 4915)</p>
            <p className="text-zinc-400">Memory: 84.6M (limit: 1.0G)</p>
            <p className="text-zinc-400">CPU: 1.8% average</p>
            <div className="mt-2 text-zinc-500">
              <p>[systemd] Started Node.js API Service</p>
              <p>[node] Server running in production mode on port 5000</p>
              <p>[mongodb] Connected to cluster: cluster0.kayan.mongodb.net</p>
            </div>
          </div>
        );
        break;

      case 'arch':
      case 'architecture':
        output = (
          <div className="p-3 rounded bg-black/70 border border-zinc-800 text-xs font-mono space-y-2 text-zinc-300">
            <p className="text-cyan-400 font-bold">Production Node.js & Cloud System Topology:</p>
            <pre className="text-emerald-400 leading-tight">
{`[Client / Browser]
       │
       ▼ (HTTPS / TLS 1.3 - Port 443)
[Caddy Reverse Proxy & Web Server]
       ├── /api/* ─────────► [Node.js Express Cluster (localhost:5000)]
       │                              │
       │                              ├──► [Redis Cache (OTP & GETs)]
       │                              │
       │                              ├──► [MongoDB Atlas / Postgres Replica]
       │                              │
       │                              └──► [Azure Blob & AWS S3 Media Bucket]
       └── /* (Static SPA) ──► [Optimized React Build (/dist)]`}
            </pre>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1.5 text-xs sm:text-sm text-zinc-300 py-1">
            <p className="text-emerald-400 font-bold">Direct Engineering Contact Endpoints:</p>
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline font-mono">{PERSONAL_INFO.email}</a></p>
            <p>📱 Phone: <span className="text-zinc-200 font-mono">{PERSONAL_INFO.phone}</span></p>
            <p>🐙 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline font-mono">{PERSONAL_INFO.githubUsername}</a></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline font-mono">linkedin.com/in/elsharabasy73</a></p>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      default:
        output = (
          <div className="text-red-400 text-xs sm:text-sm">
            Command not found: <span className="font-mono text-zinc-200">"{rawCmd}"</span>. Type <span className="text-amber-300 font-mono">help</span> for valid commands.
          </div>
        );
    }

    setHistory(prev => [
      ...prev,
      {
        id: `cmd-${Date.now()}`,
        command: rawCmd,
        output,
        timestamp
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandExecution(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (submittedCommands.length === 0) return;
      const nextIndex = commandIndex === -1 ? submittedCommands.length - 1 : Math.max(0, commandIndex - 1);
      setCommandIndex(nextIndex);
      setInputVal(submittedCommands[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandIndex === -1) return;
      const nextIndex = commandIndex + 1;
      if (nextIndex >= submittedCommands.length) {
        setCommandIndex(-1);
        setInputVal('');
      } else {
        setCommandIndex(nextIndex);
        setInputVal(submittedCommands[nextIndex]);
      }
    }
  };

  const quickCommands = [
    { label: 'help', cmd: 'help' },
    { label: 'curl /health', cmd: 'curl kayanmodern' },
    { label: 'cat Caddyfile', cmd: 'cat caddyfile' },
    { label: 'arch', cmd: 'arch' },
    { label: 'skills', cmd: 'skills' },
    { label: 'projects', cmd: 'projects' },
    { label: 'contact', cmd: 'contact' }
  ];

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 text-zinc-100 shadow-2xl font-mono text-xs sm:text-sm transition-all">
      {/* Terminal Titlebar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="ml-2 flex items-center gap-1.5 text-zinc-400 text-xs font-mono font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
            <span>abdo@azure-vm: ~/portfolio</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-zinc-500 font-mono hidden sm:inline">bash 5.2.15</span>
          <button
            onClick={() => handleCommandExecution('clear')}
            className="text-[11px] px-2 py-0.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            clear
          </button>
        </div>
      </div>

      {/* Quick Command Action Bar */}
      <div className="flex items-center gap-1.5 px-4 py-2 bg-zinc-900/40 border-b border-zinc-800/60 overflow-x-auto">
        <span className="text-[11px] text-zinc-500 uppercase tracking-wider shrink-0 font-semibold mr-1">
          Quick Run:
        </span>
        {quickCommands.map(qc => (
          <button
            key={qc.cmd}
            onClick={() => handleCommandExecution(qc.cmd)}
            className="px-2.5 py-1 rounded bg-zinc-800/80 hover:bg-emerald-950/80 text-zinc-300 hover:text-emerald-300 text-xs font-mono border border-zinc-700/50 hover:border-emerald-700 transition-all shrink-0 cursor-pointer active:scale-95"
          >
            {qc.label}
          </button>
        ))}
      </div>

      {/* Terminal Screen Body */}
      <div 
        className="p-4 sm:p-5 max-h-[380px] min-h-[220px] overflow-y-auto space-y-4 font-mono select-text"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((item) => (
          <div key={item.id} className="space-y-1.5">
            <div className="flex items-center gap-2 text-zinc-400 text-xs">
              <span className="text-emerald-400 font-bold">abdo@azure-vm:~$</span>
              <span className="text-zinc-100 font-semibold">{item.command}</span>
              <span className="text-zinc-600 text-[10px] ml-auto">{item.timestamp}</span>
            </div>
            <div className="pl-2 border-l-2 border-zinc-800/80 text-zinc-300">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={terminalBottomRef} />
      </div>

      {/* Input Prompt Row */}
      <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-t border-zinc-800">
        <span className="text-emerald-400 font-bold shrink-0">abdo@azure-vm:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a command (e.g. 'help', 'curl /health', 'arch')..."
          className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 outline-none font-mono text-xs sm:text-sm"
          autoComplete="off"
          spellCheck={false}
        />
        <button
          onClick={() => handleCommandExecution(inputVal)}
          disabled={!inputVal.trim()}
          className="p-1.5 rounded bg-emerald-600/80 hover:bg-emerald-500 text-white disabled:opacity-30 transition-all cursor-pointer"
          title="Run command"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
