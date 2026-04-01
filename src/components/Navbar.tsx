import { motion } from 'framer-motion';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Terminal', href: '#' },
  { name: 'Optimization', href: '#optimization' },
  { name: 'Logs', href: '#timeline' },
  { name: 'Matrix', href: '#skills' },
  { name: 'Deployments', href: '#projects' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0f19]/40 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <Cpu className="w-5 h-5 neon-text-blue" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-white uppercase italic">
                JR_SKG
              </span>
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest font-black">Sys_Admin v7.0.1</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-white transition-all duration-300 font-mono font-black uppercase text-[10px] tracking-widest flex items-center space-x-2 group"
                >
                  <span className="opacity-0 group-hover:opacity-100 neon-text-blue transition-opacity">{"["}</span>
                  <span>{link.name}</span>
                  <span className="opacity-0 group-hover:opacity-100 neon-text-blue transition-opacity">{"]"}</span>
                </a>
              ))}
              <div className="h-4 w-[1px] bg-white/10" />
              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]" />
                <span className="text-[10px] font-mono text-green-500 uppercase font-black">Live</span>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 rounded-xl bg-white/5 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
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
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-2xl font-black text-gray-500 hover:text-white transition-colors uppercase italic"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
