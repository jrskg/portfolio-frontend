import { motion } from 'framer-motion';
import { Code2, Rocket, Coffee } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';
import myImg from "../assets/my_image.jpeg";
import { BIO_INFO } from '../data/constantData';

export default function Bio() {
  const { commitCount, paragraph, projectCount, slogan, stats, devRole } = BIO_INFO;

  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="relative order-2 lg:order-1" variants={itemVariants}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-[#0a0a0a] rounded-[2.5rem] p-3 border border-white/5 shadow-2xl overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  src={myImg}
                  loading='lazy'
                  alt="Suraj Gupta"
                  className="rounded-[2rem] w-full max-w-md mx-auto z-10 filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              
              <FloatingStat
                icon={<Code2 className="w-5 h-5 text-blue-400" />}
                count={projectCount}
                label="Projects"
                bgColor="bg-blue-500/10"
                hoverColor="text-blue-400"
                position="absolute -bottom-8 -right-4 md:-right-10"
              />

              <FloatingStat
                icon={<Coffee className="w-5 h-5 text-purple-400" />}
                count={commitCount}
                label="Commits"
                bgColor="bg-purple-500/10"
                hoverColor="text-purple-400"
                position="absolute -top-8 -left-4 md:-left-10"
              />
            </div>
          </motion.div>

          <motion.div className="space-y-10 order-1 lg:order-2" variants={itemVariants}>
            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-gray-300 px-5 py-2 rounded-full text-xs font-black uppercase tracking-[0.2em]"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span>{devRole}</span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter italic uppercase"
              >
                {slogan[0]} <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {slogan[1]}
                </span>
              </motion.h2>
            </div>

            <motion.div variants={itemVariants} className="space-y-8">
              {paragraph.map((p, i) => (
                <p key={i} className="text-xl text-gray-400 leading-relaxed font-medium">
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-10 pt-10 border-t border-white/5"
            >
              {stats.map((st) => (
                <motion.div
                  key={st.text}
                  whileHover={{ y: -5 }}
                  className="space-y-2"
                >
                  <div className="text-4xl font-black text-white tabular-nums tracking-tighter">{st.count}+</div>
                  <div className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] leading-tight">{st.text}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

interface FloatingStatProps {
  icon: React.ReactNode;
  count: number;
  label: string;
  bgColor: string;
  hoverColor: string;
  position: string;
}

const FloatingStat: React.FC<FloatingStatProps> = ({ icon, count, label, bgColor, position }) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`${position} bg-[#121212]/90 backdrop-blur-xl border border-white/10 px-8 py-5 rounded-3xl shadow-2xl z-20`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-3 ${bgColor} rounded-2xl`}>
          {icon}
        </div>
        <div>
          <span className="block text-2xl font-black text-white leading-none tracking-tighter">{count}+</span>
          <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</span>
        </div>
      </div>
    </motion.div>
  );
}
