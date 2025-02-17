import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const AITyping = () => {
  const dots = () => (
    <div className=' flex space-x-2 px-3'>
      <span className="w-[10px] h-[10px] bg-slate-300 rounded-full animate-smoothBounce"></span>
      <span className="w-[10px] h-[10px] bg-slate-300 rounded-full animate-smoothBounce [animation-delay:0.15s]"></span>
      <span className="w-[10px] h-[10px] bg-slate-300 rounded-full animate-smoothBounce [animation-delay:0.3s]"></span>
      <span className="w-[10px] h-[10px] bg-slate-300 rounded-full animate-smoothBounce [animation-delay:0.4s]"></span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex relative justify-start`}
    >
      <div className={
        cn("absolute h-0 w-0 border-l-[20px] border-t-[20px] border-r-[20px] border-l-transparent border-r-transparent border-t-slate-900",
        )
      } />
      <div
        className={cn("z-10 py-3 min-w-[15%] flex justify-center rounded-md bg-slate-900 ml-3"
        )}
      >
        {dots()}
      </div>
    </motion.div>
  );
};

export default AITyping;