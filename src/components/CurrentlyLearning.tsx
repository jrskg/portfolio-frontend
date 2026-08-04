import { motion } from 'framer-motion';
import { Terminal, MessagesSquare, ArrowDown } from 'lucide-react';

const experiments = [
  {
    icon: Terminal,
    title: 'RAG CLI Chatbot',
    description: 'A command-line chatbot that retrieves relevant context before answering — my first hands-on pass at RAG.',
    tag: 'Personal script · Python',
  },
  {
    icon: MessagesSquare,
    title: 'Streaming Chat CLI',
    description: 'A terminal chatbot that streams responses token-by-token and keeps conversation history across turns.',
    tag: 'Personal script · Python',
  },
];

export default function CurrentlyLearning() {
  return (
    <section className="py-20 relative border-y border-white/5" id="learning">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">Right Now</span>
            <h2 className="text-3xl font-bold text-white mt-3 mb-4">Learning GenAI &amp; agentic AI</h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Outside of work I've been getting hands-on with retrieval-augmented generation and agentic
              AI patterns — reading, experimenting, and writing small scripts to see how the pieces
              actually fit together. Still early days.
            </p>
            <p className="text-gray-500 leading-relaxed">
              I also use Claude Code every day, at work and for fun — enough that I've shipped two real
              side projects with it.
            </p>
            <a
              href="#ai-builds"
              className="inline-flex items-center gap-2 mt-4 text-sm text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>See them below</span>
              <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {experiments.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/5"
              >
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 w-fit mb-4">
                  <exp.icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{exp.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{exp.description}</p>
                <span className="text-[10px] font-mono uppercase tracking-widest text-gray-600">{exp.tag}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
