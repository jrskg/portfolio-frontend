import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../utils/animations';
import { timelineData } from '../data/timeline';

export default function Timeline() {
  return (
    <section className="py-10 bg-gray-50" id="timeline">
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
            My Journey
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600">
            The path that led me here
          </motion.p>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: false }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200"
          />

          {timelineData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
                className={`relative flex items-center justify-between mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <motion.div
                  variants={itemVariants}
                  className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <span className="text-sm font-medium text-gray-500">{item.date}</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className={`${item.color} p-3 rounded-full shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                </motion.div>

                <div className="w-5/12" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}