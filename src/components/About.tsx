import { motion } from 'framer-motion';
import { Code2, Coffee, Heart, Rocket } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

export default function About() {
  return (
    <section className="py-32 bg-[#050505]" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-32"
        >
          <motion.h2 variants={itemVariants} className="text-6xl md:text-8xl font-black mb-8 text-white uppercase italic tracking-tighter">
            About <span className="text-purple-500">Me</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-500 max-w-3xl mx-auto font-medium">
            Merging high-performance engineering with intentional digital architecture.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-10">
            <h3 className="text-4xl font-black text-white uppercase italic tracking-tight">Engineering with Purpose</h3>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              I'm Suraj Gupta, a Full Stack Developer specializing in high-performance enterprise systems. My focus is on reducing critical processing times from hours to minutes through radical optimization.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              Driven by technical challenges, I'm currently architecting high-throughput microservices in Golang while maintaining a deep mastery of the NestJS and React ecosystem.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Code2 className="w-8 h-8 text-blue-500" />}
              title="Architecture"
              desc="System Integrity"
            />
            <FeatureCard 
              icon={<Rocket className="w-8 h-8 text-purple-500" />}
              title="Velocity"
              desc="Radical Optimization"
            />
            <FeatureCard 
              icon={<Heart className="w-8 h-8 text-pink-500" />}
              title="Scalability"
              desc="Elastic Growth"
            />
            <FeatureCard 
              icon={<Coffee className="w-8 h-8 text-indigo-500" />}
              title="Precision"
              desc="Quality Centric"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const FeatureCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -10, scale: 1.02 }}
    className="p-10 bg-white/[0.02] rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-2xl relative overflow-hidden group"
  >
    <div className="mb-6 group-hover:scale-110 transition-transform duration-500">{icon}</div>
    <h4 className="text-xl font-black text-white mb-2 uppercase tracking-tight">{title}</h4>
    <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.2em]">{desc}</p>
  </motion.div>
)
