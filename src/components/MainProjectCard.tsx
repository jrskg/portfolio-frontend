import { ExternalLink, Github } from 'lucide-react';
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

const MainProjectCard: React.FC<Props> = ({ project, setSelectedProject, mode="light" }) => {
  const isDarkMode = mode === "dark";

  return (
    <motion.div
      key={project.id}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: 0.3 }}
      variants={itemVariants}
      className={cn("group rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-all duration-300",
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900',
        isDarkMode ? 'hover:bg-gray-950' : 'hover:bg-gray-50')}
      onClick={() => setSelectedProject(project)}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-6">
        <h3 className={`text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        <p className={`mb-4 line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <div className="flex space-x-4">
          {project.githubUrls.map(url => (
            <a
              key={url.url}
              href={url.url}
              className={`flex items-center ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-5 h-5 mr-2" />
              {url.name}
            </a>
          ))}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className={`flex items-center ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default memo(MainProjectCard);
