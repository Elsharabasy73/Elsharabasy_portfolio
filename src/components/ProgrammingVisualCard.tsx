import React, { useState } from 'react';
import { 
  Terminal as TerminalIcon, 
  Cpu, 
  Server, 
  Activity, 
  ShieldCheck, 
  Code2, 
  Layers, 
  Database, 
  Flame, 
  Zap, 
  Check, 
  Copy,
  ChevronRight,
  HardDrive
} from 'lucide-react';

interface ProgrammingVisualCardProps {
  onOpenTerminal: () => void;
}

export const ProgrammingVisualCard: React.FC<ProgrammingVisualCardProps> = ({ onOpenTerminal }) => {
  const [activeTab, setActiveTab] = useState<'code' | 'pipeline' | 'metrics'>('code');
  const [copied, setCopied] = useState(false);

  const codeSample = `// Production Idempotent Order Dispatch Controller
import { Router, Request, Response } from 'express';
import { authenticateSession, rateLimiter } from '../middleware/auth';
import { redisClient } from '../config/redis';
import { OrderModel } from '../models/Order';

export const orderRouter = Router();

orderRouter.post('/api/v1/orders',
  authenticateSession,
  rateLimiter({ windowMs: 60 * 1000, max: 120 }),
  async (req: Request, res: Response) => {
    const { idempotencyKey, cartItems, totalAmount } = req.body;
    
    // Acquire distributed lock in Redis
    const lockAcquired = await redisClient.set(
      \`lock:order:\${idempotencyKey}\`,
      req.user.id,
      'NX', 'EX', 15
    );

    if (!lockAcquired) {
      return res.status(409).json({ error: 'Concurrent order request in flight' });
    }

    const session = await OrderModel.startSession();
    session.startTransaction();

    try {
      const order = await OrderModel.create([{
        userId: req.user.id,
        items: cartItems,
        total: totalAmount,
        status: 'CONFIRMED'
      }], { session });

      await session.commitTransaction();
      return res.status(201).json({ success: true, orderId: order[0]._id });
    } catch (err) {
      await session.abortTransaction();
      throw err;
    } finally {
      session.endSession();
    }
  }
);`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl flex flex-col transition-all">
      {/* Top OS Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/80">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <span className="text-zinc-300 dark:text-zinc-700 mx-1">|</span>
          <div className="flex items-center gap-1 text-[11px] font-mono text-zinc-600 dark:text-zinc-400 font-semibold">
            <Code2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>server/src/controllers/order.controller.ts</span>
          </div>
        </div>

        {/* Action button to switch to terminal */}
        <button
          onClick={onOpenTerminal}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
          title="Switch to CLI Terminal"
        >
          <TerminalIcon className="w-3 h-3" />
          <span className="hidden sm:inline">CLI Mode</span>
        </button>
      </div>

      {/* Tabs Strip */}
      <div className="flex items-center justify-between px-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 text-xs font-mono">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('code')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'code'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-zinc-900'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>TypeScript API</span>
          </button>

          <button
            onClick={() => setActiveTab('pipeline')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'pipeline'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-zinc-900'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Pipeline Architecture</span>
          </button>

          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-3 py-2 border-b-2 font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'metrics'
                ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400 bg-white dark:bg-zinc-900'
                : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>Live Telemetry</span>
          </button>
        </div>

        {activeTab === 'code' && (
          <button
            onClick={copyCode}
            className="p-1 rounded text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>

      {/* Tab Body */}
      <div className="p-4 bg-zinc-950 text-zinc-200 font-mono text-xs overflow-x-auto min-h-[340px] max-h-[390px] flex flex-col justify-between">
        {activeTab === 'code' && (
          <div className="space-y-1 leading-relaxed selection:bg-emerald-800 selection:text-white">
            <div className="text-zinc-500 text-[11px] mb-2 pb-1 border-b border-zinc-800/80 flex items-center justify-between">
              <span>// Express.js + Mongoose Transaction + Redis Lock</span>
              <span className="text-emerald-400">Node v20.x ESM</span>
            </div>
            <pre className="text-zinc-300 font-mono text-[11.5px] leading-5 whitespace-pre-wrap overflow-x-auto">
              <span className="text-purple-400">import</span> &#123; Router, Request, Response &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'express'</span>;{'\n'}
              <span className="text-purple-400">import</span> &#123; authenticateSession &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'../middleware/auth'</span>;{'\n'}
              <span className="text-purple-400">import</span> &#123; redisClient &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'../config/redis'</span>;{'\n'}
              <span className="text-purple-400">import</span> &#123; OrderModel &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'../models/Order'</span>;{'\n\n'}
              <span className="text-blue-400">export const</span> orderRouter = <span className="text-yellow-400">Router</span>();{'\n\n'}
              orderRouter.<span className="text-yellow-300">post</span>(<span className="text-emerald-300">'/api/v1/orders'</span>, authenticateSession, <span className="text-blue-400">async</span> (req, res) =&gt; &#123;{'\n'}
              {'  '}<span className="text-blue-400">const</span> &#123; idempotencyKey, cartItems, totalAmount &#125; = req.body;{'\n'}
              {'  '}<span className="text-zinc-500">// Distributed lock prevents duplicate charges</span>{'\n'}
              {'  '}<span className="text-blue-400">const</span> lock = <span className="text-purple-400">await</span> redisClient.<span className="text-yellow-300">set</span>(<span className="text-emerald-300">{`\`lock:\${idempotencyKey}\``}</span>, req.user.id, <span className="text-emerald-300">'NX'</span>, <span className="text-emerald-300">'EX'</span>, <span className="text-amber-300">15</span>);{'\n'}
              {'  '}<span className="text-purple-400">if</span> (!lock) <span className="text-purple-400">return</span> res.<span className="text-yellow-300">status</span>(<span className="text-amber-300">409</span>).<span className="text-yellow-300">json</span>(&#123; error: <span className="text-emerald-300">'Request in flight'</span> &#125;);{'\n\n'}
              {'  '}<span className="text-blue-400">const</span> session = <span className="text-purple-400">await</span> OrderModel.<span className="text-yellow-300">startSession</span>();{'\n'}
              {'  '}session.<span className="text-yellow-300">startTransaction</span>();{'\n'}
              {'  '}<span className="text-purple-400">try</span> &#123;{'\n'}
              {'    '}<span className="text-blue-400">const</span> order = <span className="text-purple-400">await</span> OrderModel.<span className="text-yellow-300">create</span>([&#123; userId: req.user.id, items: cartItems, total: totalAmount &#125;], &#123; session &#125;);{'\n'}
              {'    '}<span className="text-purple-400">await</span> session.<span className="text-yellow-300">commitTransaction</span>();{'\n'}
              {'    '}<span className="text-purple-400">return</span> res.<span className="text-yellow-300">status</span>(<span className="text-amber-300">201</span>).<span className="text-yellow-300">json</span>(&#123; success: <span className="text-amber-300">true</span>, orderId: order[<span className="text-amber-300">0</span>]._id &#125;);{'\n'}
              {'  '}&#123; <span className="text-purple-400">catch</span> (err) &#123; <span className="text-purple-400">await</span> session.<span className="text-yellow-300">abortTransaction</span>(); <span className="text-purple-400">throw</span> err; &#125;{'\n'}
              &#125;);
            </pre>
          </div>
        )}

        {activeTab === 'pipeline' && (
          <div className="space-y-3 py-1">
            <div className="text-zinc-400 text-[11px] pb-2 border-b border-zinc-800 flex items-center justify-between">
              <span>HTTP REQUEST EXECUTION PIPELINE</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                ACTIVE
              </span>
            </div>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-400 text-[10px] font-bold">1</span>
                  <span className="text-zinc-200">Caddy Edge Proxy</span>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">TLS 1.3 · HTTP/3 SSL Termination</span>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">2</span>
                  <span className="text-zinc-200">Express.js Middleware</span>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">JWT Auth · Rate Limiting · CORS</span>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-rose-500/20 text-rose-400 text-[10px] font-bold">3</span>
                  <span className="text-zinc-200">Redis Cache &amp; Locks</span>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">Sub-5ms Key Lookup &amp; Mutex</span>
              </div>

              <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-[10px] font-bold">4</span>
                  <span className="text-zinc-200">MongoDB Atlas / Postgres</span>
                </div>
                <span className="text-[11px] text-zinc-500 font-mono">ACID Transactions &amp; Indexing</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'metrics' && (
          <div className="space-y-4 py-1">
            <div className="text-zinc-400 text-[11px] pb-2 border-b border-zinc-800 flex items-center justify-between">
              <span>AZURE UBUNTU 22.04 LTS HOST METRICS</span>
              <span className="text-emerald-400 font-semibold">NORMAL_HEALTH</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-blue-400" />
                    <span>CPU LOAD</span>
                  </span>
                  <span className="text-emerald-400 font-bold">14.2%</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '14.2%' }}></div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-emerald-400" />
                    <span>RAM USAGE</span>
                  </span>
                  <span className="text-emerald-400 font-bold">342MB / 1GB</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: '34.2%' }}></div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-amber-400" />
                    <span>AVG LATENCY</span>
                  </span>
                  <span className="text-amber-400 font-bold">38ms</span>
                </div>
                <div className="text-[10px] text-zinc-500">Target SLA: &lt;50ms</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/90 border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-zinc-400 text-[11px]">
                  <span className="flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-purple-400" />
                    <span>SYSTEMD STATUS</span>
                  </span>
                  <span className="text-emerald-400 font-bold">active (running)</span>
                </div>
                <div className="text-[10px] text-zinc-500">PID 1842 · 0 restarts</div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Status Bar */}
        <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-zinc-400">Node.js Express Cluster</span>
          </div>
          <button
            onClick={onOpenTerminal}
            className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>Open Interactive CLI</span>
            <ChevronRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
};
