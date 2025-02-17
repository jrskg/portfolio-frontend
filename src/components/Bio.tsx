import { motion } from 'framer-motion';
import { Code2, Rocket, Coffee } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';
import myImg from "../assets/my_image.jpeg";
import { BIO_INFO } from '../data/constantData';

export default function Bio() {
  const { commitCount, paragraph, projectCount, slogan, stats, devRole } = BIO_INFO;

  return (
    <section className="py-10 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="relative" variants={itemVariants}>
            <div className="relative">
              <motion.div
                variants={itemVariants}
                className="absolute -bottom-4 -right-4 w-full h-full bg-blue-500/10 rounded-2xl"
              />
              <motion.img
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                variants={itemVariants}
                src={myImg}
                loading='lazy'
                alt="A creative depiction of the developer."
                className="relative rounded-2xl shadow-2xl w-full max-w-md mx-auto cursor-pointer"
              />
            </div>

            <FloatingStat
              icon={<Code2 className="w-5 h-5 text-blue-500" />}
              count={projectCount}
              label="Projects"
              bgColor="bg-blue-50"
              hoverColor="text-blue-500"
              position="absolute -bottom-6 right-0 md:-right-6"
            />

            <FloatingStat
              icon={<Coffee className="w-5 h-5 text-yellow-500" />}
              count={commitCount}
              label="Commits"
              bgColor="bg-yellow-50"
              hoverColor="text-yellow-500"
              position="absolute -top-6 left-0 md:-left-6"
            />
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full"
            >
              <Rocket className="w-5 h-5" />
              <span className="font-medium">{devRole}</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold leading-tight"
            >
              {slogan[0]} <span className="text-blue-600">{slogan[1]}</span>
            </motion.h2>

            <motion.div variants={itemVariants} className="space-y-4">
              {paragraph.map((p, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-justify">
                  {p}
                </p>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-4"
            >
              {stats.map((st) => (
                <motion.div
                  key={st.text}
                  whileHover={{ y: -5 }}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-3xl font-bold text-blue-600">{st.count}+</div>
                  <div className="text-sm text-gray-600">{st.text}</div>
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
      whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
      className={`${position} bg-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-3 z-10 cursor-pointer`}
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.3 } }}
        className={`p-2 ${bgColor} rounded-lg`}
      >
        {icon}
      </motion.div>
      <div>
        <span className="block font-bold text-gray-900">{count}+</span>
        <span className="text-sm text-gray-600">{label}</span>
      </div>
    </motion.div>
  );
}
