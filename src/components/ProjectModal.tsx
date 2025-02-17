import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, XIcon } from 'lucide-react';
import { Project } from '../data/projects';
import { useEffect } from 'react';
import { cn } from '../lib/utils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  mode?: "light" | "dark";
}

export default function ProjectModal({ project, onClose, mode="light" }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <XIcon className="absolute top-4 right-4 w-8 h-8 text-white cursor-pointer" onClick={onClose} />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg",
              mode === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-900'
            )}
            onClick={e => e.stopPropagation()}
          >
            <div className='group relative h-64 overflow-hidden'>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-semibold">Duration</p>
                  <p>{project.duration}</p>
                </div>
                <div>
                  <p className="font-semibold">Role</p>
                  <p>{project.role}</p>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-xl font-semibold mb-2">Overview</h4>
                <p className="leading-relaxed">{project.longDescription}</p>
              </div>
              {project.videoDemo && (
                <div className="mb-6 flex justify-center">
                  <div className={cn("flex flex-col items-center p-4 rounded-lg shadow-lg", mode === 'dark' ? 'bg-gray-800' : 'bg-gray-100')}>
                    <h4 className="text-xl font-semibold mb-4 border-b-2 pb-2">{project.videoDemo.orientation === 'portrait' ? '🎬 Video Demo' : '🎬 Video Demo'}</h4>
                    <div className="overflow-hidden rounded-lg shadow-md border border-gray-300">
                      <video
                        controls
                        className={cn("border-none", project.videoDemo.orientation === 'portrait' ? 'h-[65vh] rounded-lg' : 'w-[100%] h-auto rounded-lg')}
                      >
                        <source src={project.videoDemo.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
              )}

              <ShowList heading='Key Features' list={project.features} mode={mode} />
              <ShowList heading='Challenges' list={project.challenges} mode={mode} />
              <ShowList heading='Learnings' list={project.learnings} mode={mode} />

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.githubUrls.map(url => (
                  <a
                    key={url.url}
                    href={url.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg",
                      mode === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-900 text-white hover:bg-gray-800'
                    )}
                  >
                    <Github className="w-5 h-5" />
                    <span>{url.name}</span>
                  </a>
                ))}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg",
                      mode === 'dark' ? 'bg-blue-500 text-white hover:bg-blue-400' : 'bg-blue-500 text-white hover:bg-blue-600'
                    )}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface Props {
  list: string[];
  heading: string;
  mode?: "light" | "dark";
}

const ShowList: React.FC<Props> = ({ heading, list, mode="light" }) => {
  return (
    <div className="mb-6">
      <h4 className={cn("text-xl font-semibold mb-2", mode === 'dark' && 'text-white')}>{heading}</h4>
      <ul className="list-disc list-inside space-y-2">
        {list.map((listItem, index) => (
          <li key={index} className={cn(mode === 'dark' ? 'text-gray-200' : 'text-gray-600')}>{listItem}</li>
        ))}
      </ul>
    </div>
  );
}
