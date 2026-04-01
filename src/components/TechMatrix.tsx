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
        <div className="mb-20">
          <h2 className="text-3xl font-black neon-text-purple mb-2 uppercase tracking-tighter italic">
            Tech Stack Matrix
          </h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
            Comprehensive Skill Grid v7.0.1
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat} className="space-y-6">
              <div className="flex items-center space-x-4">
                <h3 className="text-xs font-mono font-black text-gray-500 uppercase tracking-[0.3em] italic">{cat}</h3>
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
                      activeNode === skill.name ? 'border-purple-500/50 shadow-[0_0_15px_rgba(124,58,237,0.1)] bg-white/[0.04]' : ''
                    }`}
                    onMouseEnter={() => setActiveNode(skill.name)}
                    onMouseLeave={() => setActiveNode(null)}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-sm font-black tracking-tight uppercase group-hover:neon-text-purple transition-all italic">{skill.name}</h4>
                      <div className="text-[10px] font-mono text-gray-700 font-black">{skill.level}%</div>
                    </div>

                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden mb-3">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level + "%" }}
                        className="h-full bg-[#7c3aed] shadow-[0_0_8px_#7c3aed]"
                      />
                    </div>

                    <div className="h-8">
                      <motion.p 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ 
                          opacity: activeNode === skill.name ? 1 : 0,
                          y: activeNode === skill.name ? 0 : 5
                        }}
                        className="text-[10px] font-mono text-gray-400 italic leading-tight"
                      >
                        {"> "}{skill.context}
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
