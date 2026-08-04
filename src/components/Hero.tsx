import { motion } from 'framer-motion';
import { BIO_INFO, CURRENT_FOCUS } from '../data/constantData';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';
import myImage from '../assets/my_image.jpeg';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen relative flex items-center pt-32 pb-16 overflow-hidden grid-bg">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono text-gray-300 tracking-wide">{BIO_INFO.location}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              Hi, I'm {BIO_INFO.name.split(' ')[0]}.
              <br />
              <span className="text-blue-400">{BIO_INFO.devRole}.</span>
            </h1>

            <div className="max-w-xl space-y-5">
              {BIO_INFO.paragraph.map((p, i) => (
                <p key={i} className="text-lg text-gray-400 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-white text-black font-semibold text-sm rounded-full flex items-center gap-2 shadow-xl"
              >
                <span>See my work</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 bg-transparent border border-white/15 text-white font-semibold text-sm rounded-full hover:bg-white/5 transition-all"
              >
                Get in touch
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 max-w-xl">
              {BIO_INFO.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4 rounded-2xl border border-white/5"
                >
                  <div className="text-2xl font-bold text-white leading-none">{stat.value}</div>
                  <div className="text-[11px] text-gray-500 leading-tight mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo + currently-learning card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative">
              <img
                src={myImage}
                alt={BIO_INFO.name}
                className="w-full aspect-[4/5] object-cover rounded-[2rem] border border-white/10 shadow-2xl"
              />
              <div className="absolute -bottom-5 -left-5 hidden md:flex items-center gap-2 glass-card px-5 py-3 rounded-2xl border border-white/10">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-xs text-gray-300 font-medium">{BIO_INFO.location}</span>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono uppercase tracking-widest text-gray-400">{CURRENT_FOCUS.label}</span>
              </div>
              <ul className="space-y-2.5">
                {CURRENT_FOCUS.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                    <span className="text-purple-400 mt-0.5">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
