import { Code, Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface FloatingIconProps { 
  className?: string
}
const FloatingIcon: React.FC<FloatingIconProps> = ({className}) => {
  const floatingIcons = [
    { icon: Code, color: "text-blue-400", delay: 0 },
    { icon: Sparkles, color: "text-purple-400", delay: 0.2 },
    { icon: Rocket, color: "text-pink-400", delay: 0.4 },
  ];
  return (
    <div className={cn("absolute inset-0 pointer-events-none")}>
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className={cn(`absolute`, item.color, className)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              x: ['0%', '100%', '0%'],
              y: ['0%', '50%', '0%']
            }}
            transition={{
              duration: 15,
              delay: item.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Icon className="w-12 h-12" />
          </motion.div>
        );
      })}
    </div>
  )
}

export default FloatingIcon