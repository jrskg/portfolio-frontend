import { motion } from 'framer-motion';
import { DASHBOARD_METRICS } from '../data/constantData';
import { TrendingDown, Zap, ShieldCheck } from 'lucide-react';

export default function OptimizationEngine() {
  return (
    <section className="py-20 relative overflow-hidden" id="optimization">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-black neon-text-blue mb-2 uppercase tracking-tighter italic">
            Optimization Engine
          </h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
            Quantifying Performance Gains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {DASHBOARD_METRICS.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Zap className="w-8 h-8 neon-text-blue" />
              </div>
              
              <h3 className="text-xl font-bold mb-6 text-white uppercase">{metric.label}</h3>

              {metric.before ? (
                <div className="space-y-6">
                  <div className="relative">
                    <div className="flex justify-between mb-2 text-xs font-mono text-gray-500 uppercase tracking-widest">
                      <span>Before Optimization</span>
                      <span>{metric.before}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        className="h-full bg-red-500/30"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex justify-between mb-2 text-xs font-mono neon-text-blue uppercase tracking-widest">
                      <span>Optimized Version (V2)</span>
                      <span>{metric.after}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: (parseFloat(metric.after) / parseFloat(metric.before) * 100) + "%" }}
                        className="h-full bg-[#00f0ff] shadow-[0_0_15px_#00f0ff]"
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 pt-4">
                    <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <TrendingDown className="w-6 h-6 neon-text-blue" />
                    </div>
                    <div>
                      <div className="text-3xl font-black neon-text-blue leading-none">{metric.reduction}</div>
                      <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">Faster Processing</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center space-x-6 py-6">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-blue-500/30 flex items-center justify-center animate-spin-slow">
                    <ShieldCheck className="w-10 h-10 neon-text-blue" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-black neon-text-purple tracking-tighter italic">{metric.impact} IMPACT</div>
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">{metric.type} Configuration</div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
