import { motion } from 'framer-motion';
import { Cloud, Monitor, Server, Wrench } from 'lucide-react';
import { skillCategories } from '../data/skills';
import { containerVariants, itemVariants } from '../utils/animations';

const icons = {
  Monitor,
  Server,
  Cloud,
  Wrench
};

export default function Skills() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-24"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black mb-8 text-white uppercase italic tracking-tighter">
            Stack & <span className="text-blue-500">Expertise</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
            Powering high-performance applications with a modern, optimized tech stack.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {skillCategories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons];
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="group p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.05] hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-[60px] group-hover:bg-blue-600/10 transition-all duration-500" />
                
                <div className="flex items-start mb-10 space-x-8">
                  <div className="p-5 rounded-3xl bg-blue-500/10 text-blue-500 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-blue-500/20">
                    <Icon className="w-10 h-10" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-black text-white mb-3 tracking-tight uppercase">
                      {category.category}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-6 py-2.5 rounded-2xl bg-white/5 text-gray-300 text-xs font-black uppercase tracking-widest border border-white/5 group-hover:border-white/10 transition-all hover:bg-white/10 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
