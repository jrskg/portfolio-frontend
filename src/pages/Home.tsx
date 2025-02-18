import { MessageCircle } from 'lucide-react'
import About from '../components/About'
import Bio from '../components/Bio'
import Contact from '../components/Contact'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Timeline from '../components/Timeline'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
import NameModal from '../components/NameModal'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <NameModal/>
      <Hero />
      <Bio />
      <About />
      <Skills />
      <Projects />
      <Testimonials/>
      <Timeline />
      <Contact />
      <motion.div
        onClick={() => navigate("/chat")}
        className="fixed bottom-6 right-6 md:bottom-14 md:right-16 cursor-pointer flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full shadow-lg"
        animate={{
          scale: [1, 1.1, 1],
          boxShadow: [
            "0px 0px 12px rgba(0, 153, 255, 0.7)",
            "0px 0px 20px rgba(0, 153, 255, 0.9)",
            "0px 0px 12px rgba(0, 153, 255, 0.7)"
          ],
        }}
        whileHover={{ scale: 1.2, boxShadow: "0px 0px 25px rgba(0, 153, 255, 1)" }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <MessageCircle size={32} />
      </motion.div>
    </div>
  )
}

export default Home