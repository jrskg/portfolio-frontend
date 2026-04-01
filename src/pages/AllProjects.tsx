import { ArrowLeft, Code2Icon } from 'lucide-react'
import { useState } from 'react'
import MainProjectCard from '../components/MainProjectCard'
import ProjectModal from '../components/ProjectModal'
import { Project, projects } from '../data/projects'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#050505] py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-10 mb-24">
          <div className="flex items-center space-x-6">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              onClick={() => navigate('/')}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all shadow-2xl"
            >
              <ArrowLeft className="w-6 h-6" />
            </motion.button>
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white flex items-center gap-4 uppercase italic tracking-tighter">
                <Code2Icon className="w-12 h-12 text-blue-500" />
                Archives
              </h1>
              <p className="text-gray-500 mt-2 font-black uppercase tracking-[0.3em] text-[10px]">Technical Case Studies & Systems</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map(p => (
            <MainProjectCard
              project={p}
              setSelectedProject={setSelectedProject}
              key={p.id}
              mode="dark"
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        mode='dark'
      />
    </div>
  )
}

export default AllProjects
