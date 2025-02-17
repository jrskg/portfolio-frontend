import { motion } from 'framer-motion';
import { Code2, Coffee, Heart, Rocket } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

export default function About() {
  return (
    <section className="py-10 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600">
            Passionate about turning ideas into reality through code
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* About Me Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Who is jr_skg?</h3>
            <p className="text-gray-600 leading-relaxed text-justify">
              Hi! I'm Suraj Gupta, a passionate Full Stack Developer with a love for creating elegant solutions to
              complex problems. I specialize in building scalable web and mobile applications using modern technologies.
              I thrive on learning new things to continuously expand my knowledge and skills.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              When I'm not coding, you can find me spending quality time with friends, playing video games, or exploring
              the latest trends in technology. I strongly believe in continuous learning and actively sharing knowledge
              with the developer community.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md text-center"
            >
              <Code2 className="w-8 h-8 text-blue-500 mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Clean Code</h4>
              <p className="text-gray-600">Writing maintainable and efficient code</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md text-center"
            >
              <Rocket className="w-8 h-8 text-purple-500 mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Innovation</h4>
              <p className="text-gray-600">Exploring new technologies</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md text-center"
            >
              <Heart className="w-8 h-8 text-red-500 mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Passion</h4>
              <p className="text-gray-600">Love for problem solving</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md text-center"
            >
              <Coffee className="w-8 h-8 text-yellow-500 mb-4 mx-auto" />
              <h4 className="font-semibold mb-2">Dedication</h4>
              <p className="text-gray-600">Committed to excellence</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
