import { motion } from 'framer-motion';
import { SYSTEM_STATUS, BIO_INFO } from '../data/constantData';
import { Terminal, Cpu, Database, Layout, ArrowDownRight, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center pt-24 pb-12 overflow-hidden grid-bg">
      <div className="scanline" />
      
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Control Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-8 space-y-8"
          >
            <div className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Terminal className="w-40 h-40 text-blue-500" />
              </div>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="h-[1px] w-20 bg-white/10" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black">System::Main_Control</span>
              </div>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1 rounded bg-blue-500/10 border border-blue-500/20 mb-4"
                >
                  <span className="text-[10px] font-mono neon-text-blue uppercase tracking-widest font-black italic">
                    {SYSTEM_STATUS.label}
                  </span>
                </motion.div>
                
                <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter uppercase italic">
                  {BIO_INFO.name} <br/>
                  <span className="neon-text-purple">{BIO_INFO.devRole}</span>
                </h1>

                <div className="max-w-xl space-y-6 pt-6">
                  {BIO_INFO.paragraph.map((p, i) => (
                    <p key={i} className="text-lg text-gray-400 font-mono leading-relaxed italic">
                      {"> "} {p}
                    </p>
                  ))}
                </div>

                <div className="pt-12 flex flex-wrap gap-6">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)] flex items-center space-x-3"
                  >
                    <span>Initiate Session</span>
                    <ArrowDownRight className="w-4 h-4" />
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-transparent border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-white/5 transition-all"
                  >
                    System Archives
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BIO_INFO.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="glass-card p-6 rounded-2xl border border-white/5 flex items-center space-x-4 group hover:border-blue-500/30 transition-all"
                >
                  <div className="text-3xl font-black text-white italic group-hover:neon-text-blue transition-all">{stat.count}+</div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black leading-tight">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar Status Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="glass-card p-8 rounded-[2rem] border border-white/5 space-y-8">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-black italic">Network Status</span>
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
              </div>

              <div className="space-y-6">
                <StatusItem icon={<Globe className="w-4 h-4" />} label="Location" value={SYSTEM_STATUS.location} />
                <StatusItem icon={<Cpu className="w-4 h-4" />} label="Environment" value={SYSTEM_STATUS.environment} />
                <StatusItem icon={<Database className="w-4 h-4" />} label="Uptime" value={SYSTEM_STATUS.uptime} />
                <StatusItem icon={<Layout className="w-4 h-4" />} label="Last Deployment" value={SYSTEM_STATUS.lastDeployment} />
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-1.5 rounded-lg bg-purple-500/20">
                      <Cpu className="w-3 h-3 neon-text-purple" />
                    </div>
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest text-gray-400 italic">V2 Migration Progress</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "65%" }}
                      transition={{ duration: 2, ease: "easeOut" }}
                      className="h-full bg-purple-500 shadow-[0_0_10px_#7c3aed]"
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-[8px] font-mono text-gray-600 uppercase">
                    <span>Migrating to Golang</span>
                    <span>65.4%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-[2rem] border border-white/5 bg-[#7c3aed]/5">
              <div className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-black mb-4 italic">Core Directive</div>
              <p className="text-xs font-mono text-gray-400 leading-relaxed italic">
                {"> "} High-throughput backend engineering. Radical reduction of system overhead. Seamless scalability at production load.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function StatusItem({ icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between group">
      <div className="flex items-center space-x-3">
        <div className="p-2 rounded-lg bg-white/5 text-gray-500 group-hover:text-blue-400 transition-colors">
          {icon}
        </div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{label}</span>
      </div>
      <span className="text-xs font-mono text-white font-black">{value}</span>
    </div>
  );
}
