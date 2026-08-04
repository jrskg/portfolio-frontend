import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { systemLogs, reportSpeedups } from '../data/timeline';
import { ChevronDown, Terminal, Target, Wrench } from 'lucide-react';

const maxMultiplier = Math.max(...reportSpeedups.map((r) => parseFloat(r.multiplier)));

export default function Experience() {
  const [expandedLog, setExpandedLog] = useState<string | null>(systemLogs[0]?.id ?? null);

  return (
    <section className="py-24 bg-[#0b0f19] relative" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
            One year at Jellyfish Technologies
          </h2>
          <p className="text-gray-500 leading-relaxed">
            I joined as a Software Engineer Trainee and grew into a full-time Software Engineer role,
            spending most of that year on one payroll platform — finding the slow, expensive parts and
            rebuilding them properly.
          </p>
        </div>

        {/* Case studies */}
        <div className="space-y-4 mb-20">
          {systemLogs.map((log) => {
            const Icon = log.icon;
            const isExpanded = expandedLog === log.id;
            return (
              <div key={log.id} className="glass-card rounded-2xl border border-white/5 overflow-hidden transition-all duration-500">
                <button
                  className={`w-full text-left p-6 md:p-8 cursor-pointer flex flex-wrap items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors ${isExpanded ? 'bg-white/[0.03]' : ''}`}
                  onClick={() => setExpandedLog(isExpanded ? null : log.id)}
                >
                  <div className="flex items-center space-x-5">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shrink-0">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-1">{log.timestamp}</div>
                      <h3 className="text-xl font-bold text-white">{log.event}</h3>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 ml-auto">
                    <div className="flex space-x-6">
                      {log.metrics.map((m, i) => (
                        <div key={i} className="text-right">
                          <div className="text-lg font-bold text-blue-400 leading-none tabular-nums">{m.value}</div>
                          <div className="text-[10px] text-gray-500 mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="p-2 rounded-full border border-white/10 shrink-0"
                    >
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-white/5 bg-black/20"
                    >
                      <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Terminal className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wide">The Problem</span>
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed">{log.problem}</p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-blue-400">
                            <Wrench className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wide">What I Did</span>
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed">{log.solution}</p>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2 text-green-400">
                            <Target className="w-4 h-4" />
                            <span className="text-xs font-semibold uppercase tracking-wide">The Result</span>
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed">{log.result}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Report suite breakdown */}
        <div className="glass-card rounded-2xl border border-white/5 p-6 md:p-10">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-2">The report suite, line by line</h3>
            <p className="text-sm text-gray-500">
              Same fix across the board — removing N+1 queries. 14 reports, all measured before and after.
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[560px] space-y-3">
              {reportSpeedups.map((r, i) => (
                <motion.div
                  key={r.report}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  className="grid grid-cols-[1fr_auto] items-center gap-4"
                >
                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <span className="text-sm text-gray-300">{r.report}</span>
                      <span className="text-[11px] text-gray-500 tabular-nums">
                        {r.before} <span className="text-gray-600">→</span> {r.after}
                      </span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.max((parseFloat(r.multiplier) / maxMultiplier) * 100, 10)}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.03 }}
                        className="h-full bg-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white tabular-nums w-14 text-right">{r.multiplier}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
