import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const AITyping = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex w-full items-start gap-4 mb-6"
    >
      <div className="flex-shrink-0 p-2.5 rounded-xl border bg-blue-500/10 text-blue-400 border-blue-500/20">
        <Cpu size={18} className="animate-pulse" />
      </div>
      <div className="glass-card border border-white/5 rounded-[1.5rem] rounded-tl-none px-5 py-4 flex items-center gap-1.5">
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-smoothBounce" />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-smoothBounce [animation-delay:0.15s]" />
        <span className="w-2 h-2 bg-gray-400 rounded-full animate-smoothBounce [animation-delay:0.3s]" />
      </div>
    </motion.div>
  );
};

export default AITyping;
