import { motion } from "framer-motion";
import React from "react";
import { testimonials } from "../data/testimonials";
import { containerVariants, itemVariants } from "../utils/animations";

const Testimonials: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50">
      <div className="w-[90%] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-10"
        >
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4">
            Testimonials
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600">
            What others say about me
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="flex items-center h-[400px] overflow-x-auto w-full space-x-5"
        >
          <div
            className="flex space-x-5 h-full w-full"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[calc(100%/1)] md:min-w-[calc(95%/2)] lg:min-w-[calc(95%/3)] xl:min-w-[calc(95%/4)] h-full"
              >
                <TestimonialCard
                  name={testimonial.name}
                  post={testimonial.post}
                  feedback={testimonial.feedback}
                  profile={testimonial.profilePic}
                />
              </div>
            ))}
          </div>
        </motion.div>
        {/* <motion.div className="flex gap-32 justify-center mt-5">
          <ChevronLeft className="w-10 h-10 text-black bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-400"/>
          <ChevronRight className="w-10 h-10 text-black bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-400"/>
        </motion.div> */}
      </div>
    </section>
  );
};

export default Testimonials;

export const TestimonialCard: React.FC<{
  name: string;
  post: string;
  feedback: string;
  profile?: string
}> = ({ name, post, feedback, profile }) => {
  return (
    <div
      className="flex flex-col justify-between bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-md border border-gray-200 h-full w-full">
      <div className="relative flex flex-col justify-center items-center h-[78%]">

        <div className="absolute opacity-40 top-0 left-2 text-[120px] text-gray-900 font-serif leading-none">
          &ldquo;
        </div>

        <div className="z-10 text-center">
          <p className="text-lg italic text-gray-950 leading-relaxed text-pretty font-serif px-6">
            {feedback}
          </p>
        </div>

        <div className="absolute opacity-40 -bottom-10 right-2 text-[120px] text-gray-900 font-serif leading-none">
          &rdquo;
        </div>
      </div>

      <div className="h-[22%] flex gap-2 items-center px-4 py-2">
        <img
          className="w-16 h-16 rounded-full"
          src={profile} alt="PR"
        />
        <div>
          <h3 className="text-2xl font-semibold text-slate-300">{name}</h3>
          <p className="text-sm text-gray-200">{post}</p>
        </div>
      </div>
    </div>
  );
};
