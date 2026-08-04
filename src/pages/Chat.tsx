import { ChevronDown, ArrowLeft, MessageSquare } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import ChatBox from '../components/chats/ChatBox';
import InteractiveSection from '../components/chats/InteractiveSection';
import { cn } from '../lib/utils';
import { SERVER_DATA_KEYS } from '../type';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Particles from '../components/sub_components/Particles';

const Chat = () => {
  const [interactiveTab, setInteractiveTab] = useState<SERVER_DATA_KEYS | null>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleDetails, setToggleDetails] = useState(false);
  const navigate = useNavigate();

  const hideInteractive = (e: React.MouseEvent) => {
    e.stopPropagation();
    setInteractiveTab(null);
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleAIResponse = useCallback(
    (tabKey: SERVER_DATA_KEYS) => {
      setInteractiveTab(tabKey);
    },
    [setInteractiveTab],
  )

  return (
    <div className="relative w-screen h-screen bg-[#0b0f19] text-white overflow-hidden flex flex-col">
      <Particles />

      {/* Header */}
      <header className="relative z-20 p-6 border-b border-white/5 bg-black/20 backdrop-blur-xl flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <motion.button
            whileHover={{ scale: 1.05, x: -3 }}
            onClick={() => navigate('/')}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-400" />
              Ask AI about me
            </h1>
            <span className="text-xs text-gray-500">Trained on my real experience and projects</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 p-4 md:p-8 flex items-center justify-center min-h-0">
        <div className={cn("relative w-full max-w-7xl h-full flex transition-all duration-500 gap-6 items-center min-h-0")}>
          {screenWidth > 768 ? (
            <>
              <motion.div
                layout
                className={cn(
                  "transition-all duration-500 h-full",
                  interactiveTab ? "w-1/2" : "w-full max-w-5xl mx-auto"
                )}
              >
                <ChatBox onAIResponse={handleAIResponse} />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: interactiveTab ? 1 : 0,
                  x: interactiveTab ? 0 : 50,
                  width: interactiveTab ? "50%" : "0%"
                }}
                className="h-full"
              >
                {interactiveTab && (
                  <InteractiveSection 
                    interactiveTab={interactiveTab}
                    handleCloseSection={hideInteractive}
                  />
                )}
              </motion.div>
            </>
          ) : (
            <div className="w-full h-full relative">
              <ChatBox onAIResponse={handleAIResponse} />
              
              {/* Mobile Interactive Layer */}
              {interactiveTab && (
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: toggleDetails ? "0%" : "100%" }}
                  className="absolute inset-0 z-50 bg-[#0b0f19]"
                >
                  <InteractiveSection 
                    interactiveTab={interactiveTab}
                    handleCloseSection={() => setToggleDetails(false)}
                  />
                </motion.div>
              )}

              {interactiveTab && !toggleDetails && (
                <motion.button
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  onClick={() => setToggleDetails(true)}
                  className="absolute top-4 left-1/2 -translate-x-1/2 z-40 px-5 py-2 rounded-full bg-blue-500 text-white font-medium text-xs shadow-xl flex items-center gap-2"
                >
                  View data <ChevronDown className="w-3 h-3" />
                </motion.button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer Info */}
      <footer className="p-4 bg-black/40 border-t border-white/5 flex justify-center items-center text-xs text-gray-600">
        Responses are AI-generated based on my real profile — for anything important, use the contact form.
      </footer>
    </div>
  );
}

export default Chat;
