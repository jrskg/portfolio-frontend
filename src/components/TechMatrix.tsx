import { motion } from 'framer-motion';
import { techMatrix } from '../data/skills';
import { useState } from 'react';

export default function TechMatrix() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // Group skills by category for better organization
  const categories = Array.from(new Set(techMatrix.map(s => s.category)));

  return (
    <section className="py-24 bg-[#0b0f19] relative" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400">Skills</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
            Beyond the last year
          </h2>
          <p className="text-gray-500 leading-relaxed">
            The broader stack I bring to any project, alongside what's new.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat} className="space-y-6">
              <div className="flex items-center space-x-4">
                <h3 className="text-xs font-mono font-semibold text-gray-500 uppercase tracking-[0.3em]">{cat}</h3>
                <div className="h-px flex-grow bg-white/5" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {techMatrix.filter(s => s.category === cat).map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`glass-card p-5 rounded-xl border border-white/5 transition-all duration-300 relative group overflow-hidden ${
                      activeNode === skill.name ? 'border-purple-500/50 bg-white/[0.04]' : ''
                    }`}
                    onMouseEnter={() => setActiveNode(skill.name)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-all">{skill.name}</h4>
                      <div className="text-[10px] font-mono text-gray-600">{skill.level}%</div>
                    </div>

                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level + "%" }}
                        className="h-full bg-purple-500"
                      />
                    </div>

                    <div className="h-8">
                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{
                          opacity: activeNode === skill.name ? 1 : 0,
                          y: activeNode === skill.name ? 0 : 5
                        }}
                        className="text-[11px] text-gray-500 leading-tight"
                      >
                        {skill.context}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
