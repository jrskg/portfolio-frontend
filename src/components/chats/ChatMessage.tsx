import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import Markdown from 'react-markdown';
import { memo } from 'react';

interface Props {
  text: string;
  id: string;
  isUser: boolean;
}
const ChatMessage: React.FC<Props> = ({ isUser, text }) => {
  console.log("Rendering ChatMessage");
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex relative ${isUser ? 'justify-end' : 'justify-start'
        }`}
    >
      <div className={
        cn("absolute h-0 w-0 border-l-[20px] border-t-[20px] border-r-[20px] border-l-transparent border-r-transparent",
          isUser ? 'border-t-slate-800 right-0' : 'border-t-gray-900'
        )
      } />
      <div
        className={cn("z-10 py-2 px-4 min-w-[20%] flex justify-center rounded-md max-w-[90%] md:max-w-[80%]", isUser ?
          'bg-slate-800 text-slate-100 mr-2' :
          'bg-gray-900 ml-2'
        )}
      >
        {isUser ? <p className="text-[16px]">{text}</p> :
          <div className='prose prose-a:break-words px-3 text-slate-200 list-disc marker:text-slate-200'>
            <Markdown
              components={{
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 underline cursor-pointer"
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) =>
                  <strong className="text-[#00d9ff]">{children}</strong>,
                code: ({ children }) => 
                  <code className="text-[#00d9ff]">{children}</code>,
              }}
            >{text}</Markdown>
          </div>}
      </div>
    </motion.div>
  );
};

export default memo(ChatMessage);
// export default ChatMessage