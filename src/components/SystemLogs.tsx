import { motion, AnimatePresence } from 'framer-motion';
import { systemLogs } from '../data/timeline';
import { useState } from 'react';
import { ChevronDown, Terminal, Target, Cpu } from 'lucide-react';

export default function SystemLogs() {
  const [expandedLog, setExpandedLog] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#0b0f19] relative" id="timeline">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl font-black neon-text-blue mb-2 uppercase tracking-tighter italic">
            System Logs
          </h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
            Optimization Case Studies v4.1
          </p>
        </div>

        <div className="space-y-4">
          {systemLogs.map((log) => {
            const Icon = log.icon;
            const isExpanded = expandedLog === log.id;
            return (
              <div key={log.id} className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-500">
                <div 
                  className={`p-8 cursor-pointer flex flex-wrap items-center justify-between hover:bg-white/[0.02] transition-colors ${isExpanded ? 'bg-white/[0.03]' : ''}`}
                  onClick={() => setExpandedLog(isExpanded ? null : log.id)}
                >
                  <div className="flex items-center space-x-8">
                    <div className="text-[10px] font-mono text-gray-500 font-black tracking-widest uppercase">{log.timestamp}</div>
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <Icon className="w-6 h-6 neon-text-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-tight uppercase group-hover:neon-text-blue">{log.event}</h3>
                      <div className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">ID: {log.id}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-12 mt-6 md:mt-0">
                    <div className="flex space-x-6">
                      {log.metrics.map((m, i) => (
                        <div key={i} className="text-right">
                          <div className="text-xl font-black neon-text-blue leading-none tracking-tight tabular-nums">{m.value}</div>
                          <div className="text-[8px] font-mono text-gray-500 uppercase tracking-widest mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <motion.div 
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="p-2 rounded-full border border-white/10"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </div>
                </div>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/5 bg-black/40"
                    >
                      <div className="p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 text-red-500/80 mb-2">
                            <Terminal className="w-5 h-5" />
                            <span className="text-xs font-mono font-black uppercase tracking-widest">Problem Definition</span>
                          </div>
                          <p className="text-sm font-mono text-gray-400 leading-relaxed italic">
                            {"> "} {log.problem}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 text-purple-500/80 mb-2">
                            <Cpu className="w-5 h-5" />
                            <span className="text-xs font-mono font-black uppercase tracking-widest">Architectural Solution</span>
                          </div>
                          <p className="text-sm font-mono text-gray-400 leading-relaxed italic">
                            {"> "} {log.solution}
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 text-green-500/80 mb-2">
                            <Target className="w-5 h-5" />
                            <span className="text-xs font-mono font-black uppercase tracking-widest">Deployment Result</span>
                          </div>
                          <p className="text-sm font-mono text-gray-400 leading-relaxed italic">
                            {"> "} {log.result}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
