import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import Markdown from 'react-markdown';
import { memo } from 'react';
import { User, Cpu } from 'lucide-react';

interface Props {
  text: string;
  id: string;
  isUser: boolean;
}
const ChatMessage: React.FC<Props> = ({ isUser, text }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: isUser ? 20 : -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn(
        "flex w-full items-start gap-4 mb-6",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Icon */}
      <div className={cn(
        "flex-shrink-0 p-2.5 rounded-xl border transition-all duration-500 shadow-2xl",
        isUser 
          ? "bg-white text-black border-white/20" 
          : "bg-blue-500/10 text-blue-400 border-blue-500/20"
      )}>
        {isUser ? <User size={18} /> : <Cpu size={18} className="animate-pulse" />}
      </div>

      {/* Message Bubble */}
      <div className={cn(
        "relative max-w-[85%] md:max-w-[70%] p-5 rounded-[1.5rem] border transition-all duration-500",
        isUser 
          ? "bg-white/[0.05] border-white/10 text-white rounded-tr-none" 
          : "glass-card border-white/5 text-gray-300 rounded-tl-none shadow-blue-500/5 shadow-2xl"
      )}>
        {/* Technical Header */}
        <div className="flex items-center space-x-3 mb-2 opacity-40">
          <span className="text-[8px] font-mono font-black uppercase tracking-[0.2em]">
            {isUser ? "Authorized_User" : "System_Core_AI"}
          </span>
          <div className="h-px w-8 bg-current opacity-20" />
          <span className="text-[8px] font-mono uppercase tracking-[0.2em]">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
          </span>
        </div>

        {isUser ? (
          <p className="text-sm font-mono leading-relaxed italic">{">"} {text}</p>
        ) : (
          <div className='prose prose-invert prose-sm font-mono leading-relaxed italic max-w-none text-gray-400'>
            <Markdown
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neon-text-blue hover:underline decoration-blue-500/30 transition-all"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) =>
                  <strong className="neon-text-blue font-black">{children}</strong>,
                code: ({ children }) => 
                  <code className="bg-white/5 px-1.5 py-0.5 rounded text-blue-400 border border-white/5">{children}</code>,
                li: ({ children }) => 
                  <li className="list-none flex items-start space-x-2 mb-1">
                    <span className="text-blue-500/50 mt-1.5 text-[8px]">●</span>
                    <span>{children}</span>
                  </li>
              }}
            >{text}</Markdown>
          </div>
        )}

        {/* Decorative corner node */}
        <div className={cn(
          "absolute -bottom-1 w-2 h-2 rounded-full",
          isUser ? "right-4 bg-white/10" : "left-4 bg-blue-500/20 shadow-[0_0_8px_rgba(0,240,255,0.2)]"
        )} />
      </div>
    </motion.div>
  );
};

export default memo(ChatMessage);
