import { motion } from 'framer-motion';
import { MoveRightIcon } from 'lucide-react';
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
    <section className="py-10 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Some of my recent work</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <MainProjectCard
              project={project}
              setSelectedProject={setSelectedProject}
              key={project.id}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="flex justify-center px-3 rounded-md py-1 cursor-pointer mt-10 gap-2 items-center bg-gradient-to-r from-blue-500 to-purple-500 w-max m-auto"
        onClick={() =>  navigate("/project/all")}
      >
        <p className="text-xl text-white font-semibold">See More</p>
        <MoveRightIcon className="w-10  p-2 h-10 text-white" />
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}