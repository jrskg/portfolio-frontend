import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animations';
import { timelineData } from '../data/timeline';

export default function Timeline() {
  return (
    <section className="py-32 bg-[#050505]" id="timeline">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-32"
        >
          <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-8 text-white uppercase italic tracking-tighter">
            The <span className="text-blue-500">Timeline</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
            Chronicles of technical growth and system optimizations.
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-transparent" />

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
                className={`relative flex items-center justify-between mb-24 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 shadow-2xl hover:border-blue-500/30 transition-all duration-500"
                  >
                    <span className="inline-block px-5 py-2 rounded-xl bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
                      {item.date}
                    </span>
                    <h3 className="text-3xl font-black text-white mb-4 tracking-tight uppercase">{item.title}</h3>
                    <p className="text-gray-500 font-medium leading-relaxed">{item.description}</p>
                  </motion.div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                  <div className={`${item.color} p-5 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] ring-8 ring-[#050505]`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}