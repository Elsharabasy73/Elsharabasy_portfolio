import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  HardDrive, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Copy, 
  Check, 
  ExternalLink,
  Code2
} from 'lucide-react';
import { ARCHITECTURE_DIAGRAMS, EXPERIENCE_ITEMS } from '../data/portfolioData';

export const ArchitectureSection: React.FC = () => {
  const [selectedArchId, setSelectedArchId] = useState<string>('kayan-modern-arch');
  const [activeTab, setActiveTab] = useState<'diagram' | 'caddyfile' | 'systemd'>('diagram');
  const [copiedConfig, setCopiedConfig] = useState(false);

  const currentArch = ARCHITECTURE_DIAGRAMS.find(a => a.id === selectedArchId) || ARCHITECTURE_DIAGRAMS[0];

  const getNodeIcon = (type: string) => {
    switch (type) {
      case 'client':
        return <Globe className="w-5 h-5 text-sky-500" />;
      case 'gateway':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'app':
        return <Server className="w-5 h-5 text-blue-500" />;
      case 'cache':
        return <Cpu className="w-5 h-5 text-amber-500" />;
      case 'database':
        return <Database className="w-5 h-5 text-indigo-500" />;
      case 'storage':
        return <HardDrive className="w-5 h-5 text-purple-500" />;
      default:
        return <Layers className="w-5 h-5 text-zinc-500" />;
    }
  };

  const caddyfileSnippet = `kayanmodern.com, www.kayanmodern.com {
    # Automatic Let's Encrypt TLS v1.3 & HTTP/2
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
}`;

  const systemdSnippet = `[Unit]
Description=Kayan Modern Express API Backend Daemon
After=network.target mongodb.service

[Service]
Type=simple
User=azureuser
WorkingDirectory=/var/www/kayanmodern/backend
ExecStart=/usr/bin/node server.js
Restart=always
RestartSec=5
Environment=NODE_ENV=production
Environment=PORT=5000
Environment=MONGODB_URI=mongodb+srv://kayan_admin:SECRET@cluster0.kayan.mongodb.net/kayan_prod

# Security Sandbox
LimitNOFILE=65536
StandardOutput=append:/var/log/kayan-api.log
StandardError=append:/var/log/kayan-api.error.log

[Install]
WantedBy=multi-user.target`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <section id="architecture" className="py-20 max-w-[1200px] mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 font-mono text-xs font-semibold mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>PRODUCTION INFRASTRUCTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white tracking-tight mb-3">
          Backend Architecture &amp; System Topology
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Detailed look at real, production-tested topologies: reverse proxies, single-device session invalidations, in-memory caching, and zero-downtime Linux process units.
        </p>

        {/* Architecture Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {ARCHITECTURE_DIAGRAMS.map((arch) => (
            <button
              key={arch.id}
              onClick={() => setSelectedArchId(arch.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                selectedArchId === arch.id
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              {arch.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Architecture Container */}
      <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:px-8 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div>
            <h3 className="font-bold text-lg text-zinc-900 dark:text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <span>{currentArch.name}</span>
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              {currentArch.description}
            </p>
          </div>

          {/* Subview Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 self-start sm:self-auto">
            <button
              onClick={() => setActiveTab('diagram')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'diagram'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              System Nodes
            </button>
            <button
              onClick={() => setActiveTab('caddyfile')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'caddyfile'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Caddyfile Config
            </button>
            <button
              onClick={() => setActiveTab('systemd')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'systemd'
                  ? 'bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              systemd Service
            </button>
          </div>
        </div>

        {/* Tab 1: Topology Diagram Nodes */}
        {activeTab === 'diagram' && (
          <div className="p-6 sm:p-8 space-y-8">
            {/* Visual Node Flow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              {currentArch.nodes.map((node, index) => (
                <React.Fragment key={node.id}>
                  <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/80 flex flex-col justify-between h-32 hover:border-emerald-500/80 dark:hover:border-emerald-500/80 transition-all group">
                    <div className="flex items-center justify-between">
                      <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700">
                        {getNodeIcon(node.type)}
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-200/80 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 uppercase">
                        {node.type}
                      </span>
                    </div>

                    <div>
                      <div className="font-bold text-xs sm:text-sm text-zinc-900 dark:text-zinc-100 truncate">
                        {node.label}
                      </div>
                      <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                        {node.subtext}
                      </div>
                    </div>
                  </div>

                  {index < currentArch.nodes.length - 1 && (
                    <div className="hidden md:flex justify-center items-center text-zinc-400 dark:text-zinc-600">
                      <ArrowRight className="w-4 h-4 animate-pulse" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Request Lifecycle Steps */}
            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Request &amp; Execution Lifecycle Pipeline</span>
              </h4>
              <div className="space-y-2.5">
                {currentArch.flowSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Caddyfile Configuration */}
        {activeTab === 'caddyfile' && (
          <div className="p-6 sm:p-8 bg-zinc-950 text-zinc-100">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <span className="text-emerald-400 font-bold">/etc/caddy/Caddyfile</span>
                <span>•</span>
                <span className="text-zinc-500">Reverse Proxy &amp; SSL Auto-Renewal</span>
              </div>
              <button
                onClick={() => copyToClipboard(caddyfileSnippet)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono transition-colors cursor-pointer"
              >
                {copiedConfig ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedConfig ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="font-mono text-xs sm:text-sm overflow-x-auto text-zinc-300 leading-relaxed py-2">
              {caddyfileSnippet}
            </pre>
          </div>
        )}

        {/* Tab 3: systemd Service */}
        {activeTab === 'systemd' && (
          <div className="p-6 sm:p-8 bg-zinc-950 text-zinc-100">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                <span className="text-emerald-400 font-bold">/etc/systemd/system/kayan-api.service</span>
                <span>•</span>
                <span className="text-zinc-500">Daemon Unit Supervisor</span>
              </div>
              <button
                onClick={() => copyToClipboard(systemdSnippet)}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-mono transition-colors cursor-pointer"
              >
                {copiedConfig ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedConfig ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <pre className="font-mono text-xs sm:text-sm overflow-x-auto text-zinc-300 leading-relaxed py-2">
              {systemdSnippet}
            </pre>
          </div>
        )}
      </div>
    </section>
  );
};
