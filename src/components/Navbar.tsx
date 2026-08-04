import { motion } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Learning', href: '#learning' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Builds', href: '#ai-builds' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/70 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="text-lg font-bold tracking-tight text-white">
            jr_skg
          </a>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button
                onClick={() => navigate('/chat')}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm font-medium text-gray-300"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask AI about me</span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-xl bg-white/5 transition-all"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[#0b0f19]/95 backdrop-blur-3xl border-b border-white/5"
        >
          <div className="px-6 py-8 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-xl font-semibold text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                navigate('/chat');
              }}
              className="flex items-center gap-2 text-xl font-semibold text-blue-400"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Ask AI about me</span>
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
