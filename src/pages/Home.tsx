import { MessageSquare, Cpu } from 'lucide-react'
import { motion } from "framer-motion"
import { useNavigate } from 'react-router-dom'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Deployments from '../components/Deployments'
import TechMatrix from '../components/TechMatrix'
import SystemLogs from '../components/SystemLogs'
import OptimizationEngine from '../components/OptimizationEngine'
import NameModal from '../components/NameModal'
import Navbar from '../components/Navbar'
import Particles from '../components/sub_components/Particles'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#0b0f19] text-[#e2e8f0] font-mono selection:bg-blue-500/30 selection:text-blue-200">
      <Particles />
      <Navbar />
      <NameModal/>
      
      <main className="relative z-10">
        <Hero />
        <OptimizationEngine />
        <SystemLogs />
        <TechMatrix />
        <Deployments />
        <Contact />
      </main>

      {/* Floating System Communication Trigger */}
      <motion.div
        onClick={() => navigate("/chat")}
        className="fixed bottom-8 right-8 z-50 cursor-pointer group"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="relative">
          {/* Status Ring */}
          <div className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl group-hover:bg-blue-500/40 transition-all duration-500" />
          
          <div className="relative glass-card p-5 rounded-2xl border border-blue-500/30 group-hover:border-blue-500/60 transition-all flex items-center space-x-4 bg-black/60 backdrop-blur-2xl">
            <div className="relative">
              <MessageSquare className="w-6 h-6 neon-text-blue" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#0b0f19] animate-pulse" />
            </div>
            <div className="hidden md:flex flex-col">
              <span className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1 italic">Comms_Link</span>
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Query AI Core</span>
            </div>
          </div>
        </div>
      </motion.div>

      <footer className="py-16 border-t border-white/5 bg-black/40 relative z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-8 md:mb-0">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10">
              <Cpu className="w-6 h-6 text-gray-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-white uppercase italic tracking-tighter">Suraj Gupta // Sys_Architect</span>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em] mt-1">Radical System Optimization & Backend Engineering</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-12">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest mb-1">Architecture</span>
              <span className="text-[10px] font-black text-blue-400 uppercase italic tracking-widest">Microservices_V2</span>
            </div>
            <div className="h-8 w-px bg-white/5 hidden md:block" />
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest mb-1">System Status</span>
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]" />
                <span className="text-[10px] font-black text-white uppercase italic tracking-widest">Optimal</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
