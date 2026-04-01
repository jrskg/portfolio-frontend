import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Project, projects } from '../data/projects';
import { containerVariants } from '../utils/animations';
import MainProjectCard from './MainProjectCard';
import ProjectModal from './ProjectModal';
import { useNavigate } from 'react-router-dom';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  return (
    <section className="py-32 bg-[#080808]" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 text-white uppercase italic tracking-tighter">
            Featured <span className="text-blue-500">Works</span>
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
            Architecting scalable solutions from real-time communication platforms to massive enterprise systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.slice(0, 6).map((project) => (
            <MainProjectCard
              project={project}
              setSelectedProject={setSelectedProject}
              key={project.id}
              mode="dark"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <button
            onClick={() => navigate("/project/all")}
            className="group relative inline-flex items-center space-x-6 bg-white text-black px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm transition-all duration-500 hover:pr-16 shadow-[0_0_40px_rgba(255,255,255,0.05)]"
          >
            <span>View All Archives</span>
            <ArrowRight className="absolute right-8 opacity-0 group-hover:opacity-100 transition-all" />
          </button>
        </motion.div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        mode="dark"
      />
    </section>
  );
}