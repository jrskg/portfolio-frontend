import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#080808] relative" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-400">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">What people say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-2xl border border-white/5 p-8 flex flex-col"
            >
              <Quote className="w-6 h-6 text-gray-700 mb-4" />
              <p className="text-sm text-gray-300 leading-relaxed flex-grow mb-6">{testimonial.feedback}</p>
              <div className="flex items-center gap-3 pt-6 border-t border-white/5">
                {testimonial.profilePic && (
                  <img
                    src={testimonial.profilePic}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.post}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
