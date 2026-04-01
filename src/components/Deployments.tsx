import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Server, ExternalLink, Github, Activity, ShieldCheck, Box } from 'lucide-react';

export default function Deployments() {
  return (
    <section className="py-24 bg-[#0b0f19] relative" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl font-black neon-text-blue mb-2 uppercase tracking-tighter italic">
            Deployments
          </h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
            Active System Services v5.2
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
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Service::{project.id.toString().padStart(3, '0')}</span>
                </div>
                <div className="px-3 py-1 rounded bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">{project.duration === 'Ongoing' ? 'Active' : 'Deployed'}</span>
                </div>
              </div>

              <div className="p-8 flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight italic group-hover:neon-text-blue transition-all">
                    {project.title}
                  </h3>
                  <Box className="w-6 h-6 text-gray-700" />
                </div>
                
                <p className="text-sm font-mono text-gray-500 leading-relaxed line-clamp-3 mb-8">
                  {"> "}{project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-tighter">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                  <a 
                    href={project.githubUrls[0]?.url} 
                    target="_blank" 
                    className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5"
                  >
                    <Github className="w-4 h-4 text-gray-400" />
                    <span className="text-[10px] font-mono font-black uppercase tracking-widest">Source</span>
                  </a>
                  <button className="flex items-center justify-center space-x-2 p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-all border border-blue-500/10">
                    <Activity className="w-4 h-4 neon-text-blue" />
                    <span className="text-[10px] font-mono font-black neon-text-blue uppercase tracking-widest">Status</span>
                  </button>
                </div>
              </div>

              <div className="p-4 bg-black/40 border-t border-white/5 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-3 h-3 text-gray-600" />
                  <span className="text-[8px] font-mono text-gray-600 uppercase">Architecture: Verified</span>
                </div>
                <div className="text-[8px] font-mono text-gray-600 uppercase">Role: {project.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
