import { MessageSquare, Github, Linkedin } from 'lucide-react'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Deployments from '../components/Deployments'
import TechMatrix from '../components/TechMatrix'
import Experience from '../components/Experience'
import CurrentlyLearning from '../components/CurrentlyLearning'
import AIBuilds from '../components/AIBuilds'
import Testimonials from '../components/Testimonials'
import NameModal from '../components/NameModal'
import Navbar from '../components/Navbar'
import Particles from '../components/sub_components/Particles'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0] selection:bg-blue-500/30 selection:text-blue-200">
      <Particles />
      <Navbar />
      <NameModal/>

      <main className="relative z-10">
        <Hero />
        <CurrentlyLearning />
        <Experience />
        <TechMatrix />
        <Deployments />
        <AIBuilds />
        <Testimonials />
        <Contact />
      </main>

      {/* Chat with AI trigger */}
      <motion.button
        onClick={() => navigate("/chat")}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-white text-black shadow-2xl"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Chat with AI about me"
      >
        <MessageSquare className="w-5 h-5" />
      </motion.button>

      <footer className="py-16 border-t border-white/5 bg-black/40 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm font-bold text-white">Suraj Gupta</span>
            <span className="text-xs text-gray-500 mt-1">Software Engineer · Birgunj, Nepal</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jrskg"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/jrskg/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <span className="text-xs text-gray-600">© {new Date().getFullYear()} jr_skg</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
