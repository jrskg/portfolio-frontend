import { Code2Icon } from 'lucide-react'
import { useState } from 'react'
import MainProjectCard from '../components/MainProjectCard'
import ProjectModal from '../components/ProjectModal'
import { Project, projects } from '../data/projects'

const AllProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <div className="relative w-screen min-h-screen flex justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black md:p-4">
      <div className="w-full md:w-[90%] lg:w-[80%] h-max p-5 rounded-lg">
        <div className="flex items-center space-x-3 mb-6">
          <Code2Icon className='w-10 h-10 text-gray-300' />
          <h1 className="text-3xl font-bold text-gray-300">All Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
