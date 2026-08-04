import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Github, Box } from 'lucide-react';

export default function Deployments() {
  return (
    <section className="py-24 bg-[#0b0f19] relative" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
            Things I've built for fun
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Personal projects, mostly built solo, outside of work hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group rounded-2xl border border-white/5 overflow-hidden flex flex-col hover:border-blue-500/30 transition-all duration-500"
            >
              <div className="p-6 border-b border-white/5 bg-white/[0.01] flex justify-between items-center">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{project.role}</span>
                <div className="px-3 py-1 rounded bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">{project.duration === 'Ongoing' ? 'Ongoing' : project.duration}</span>
                </div>
              </div>

              <div className="p-8 flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-all">
                    {project.title}
                  </h3>
                  <Box className="w-6 h-6 text-gray-700" />
                </div>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 mb-8">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5">
                  <a
                    href={project.githubUrls[0]?.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5"
                  >
                    <Github className="w-4 h-4 text-gray-400" />
                    <span className="text-xs font-medium text-gray-300">View source</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
