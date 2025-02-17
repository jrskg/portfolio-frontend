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
    <section className="py-10 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            Skills & Expertise
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600">
            Crafting digital experiences with cutting-edge technologies
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => {
            const Icon = icons[category.icon as keyof typeof icons];
            return (
              <motion.div
                key={category.category}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/90 p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-pink-500" />

                <div className="flex items-start mb-8 space-x-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 border border-gray-600/30 shadow-lg">
                    <Icon className="w-8 h-8 text-white bg-gradient-to-r from-blue-300 to-purple-400 bg-clip-text" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
                      {category.category}
                    </h3>
                    <p className="mt-2 text-gray-300 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="relative p-4 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/80 transition-all duration-200"
                    >
                      <span className="font-medium text-gray-200 relative">
                        {skill}
                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                      </span>
                    </div>
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
