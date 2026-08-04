import { motion } from 'framer-motion';
import { aiBuilds } from '../data/aiBuilds';
import { Github, Sparkles } from 'lucide-react';

export default function AIBuilds() {
  return (
    <section className="py-24 bg-[#0b0f19] relative" id="ai-builds">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-mono uppercase tracking-widest text-purple-300">Built with Claude Code</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">AI-assisted builds</h2>
          <p className="text-gray-500 leading-relaxed">
            Two real side projects I designed and built with Claude Code as my daily pair — a good proxy
            for how comfortable I am directing AI tools to ship real, working software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {aiBuilds.map((build, index) => (
            <motion.div
              key={build.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-white/5 p-8 flex flex-col hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                  <build.icon className="w-6 h-6 text-purple-400" />
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-gray-400">
                  {build.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">{build.title}</h3>
              <p className="text-sm text-purple-300 mb-4">{build.tagline}</p>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">{build.description}</p>

              <ul className="space-y-2 mb-6">
                {build.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-purple-400 mt-1.5 w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {build.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-gray-400">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-3">
                {build.githubUrls.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/5 text-xs font-medium text-gray-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>{repo.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
