import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import React, { memo } from 'react';
import { itemVariants } from '../utils/animations';
import { motion } from 'framer-motion';
import { Project } from '../data/projects';
import { cn } from '../lib/utils';

interface Props {
  project: Project;
  setSelectedProject: React.Dispatch<React.SetStateAction<Project | null>>;
  mode?: "light" | "dark";
}

const MainProjectCard: React.FC<Props> = ({ project, setSelectedProject, mode="dark" }) => {
  const isDarkMode = mode === "dark";

  return (
    <motion.div
      key={project.id}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.3 }}
      variants={itemVariants}
      className={cn(
        "group relative rounded-[2rem] overflow-hidden cursor-pointer bg-[#0a0a0a] border border-white/[0.05] hover:border-blue-500/30 transition-all duration-700 shadow-2xl",
        !isDarkMode && "bg-white border-gray-100"
      )}
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />
        <div className="absolute top-6 right-6 z-20">
          <span className={cn(
            "px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-xl border border-white/10 shadow-2xl",
            project.duration.toLowerCase() === 'ongoing' || project.duration.toLowerCase() === 'running' 
              ? "bg-blue-500 text-white border-blue-400/30" 
              : "bg-black/60 text-white"
          )}>
            {project.duration}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
      </div>

      <div className="p-10">
        <h3 className={cn(
          "text-3xl font-black mb-4 transition-all duration-500 tracking-tighter uppercase italic",
          isDarkMode ? "text-white" : "text-gray-900",
          "group-hover:text-blue-500 group-hover:translate-x-1"
        )}>
          {project.title}
        </h3>
        
        <p className={cn(
          "mb-8 line-clamp-2 text-sm font-medium leading-relaxed",
          isDarkMode ? "text-gray-500" : "text-gray-500"
        )}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={cn(
                "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-500",
                isDarkMode 
                  ? "bg-white/5 text-gray-400 border border-white/5 group-hover:border-blue-500/20 group-hover:text-blue-400" 
                  : "bg-gray-50 text-gray-600"
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-white/5">
          <div className="flex space-x-4">
            {project.githubUrls.map(url => (
              <a
                key={url.url}
                href={url.url}
                className={cn(
                  "p-3 rounded-2xl transition-all duration-500",
                  isDarkMode ? "text-gray-500 hover:text-white bg-white/5 hover:bg-white/10" : "text-gray-400 hover:text-blue-600 bg-gray-50"
                )}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-blue-500 font-black text-xs uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-500">
            <span>View Case</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default memo(MainProjectCard);
