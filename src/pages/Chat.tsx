import { ChevronDown, XIcon, ArrowLeft, Cpu, ShieldCheck, Activity } from 'lucide-react';
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
    <div className="relative w-screen h-screen bg-[#0b0f19] text-white overflow-hidden flex flex-col font-mono">
      <Particles />
      <div className="scanline" />

      {/* Header */}
      <header className="relative z-20 p-6 border-b border-white/5 bg-black/20 backdrop-blur-xl flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            onClick={() => navigate('/')}
            className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-all shadow-2xl"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <div className="flex flex-col">
            <h1 className="text-xl font-black text-white uppercase italic tracking-tighter flex items-center gap-3">
              <Cpu className="w-5 h-5 neon-text-blue" />
              System Neural Link
            </h1>
            <span className="text-[8px] font-mono text-gray-500 uppercase tracking-[0.3em]">Encrypted_Comm_Session::v4.0.2</span>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex flex-col items-end">
            <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Connection</span>
            <span className="text-[10px] font-black text-green-500 uppercase italic">Secure</span>
          </div>
          <div className="flex flex-col items-end border-l border-white/10 pl-8">
            <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Link Stability</span>
            <div className="flex items-center space-x-2">
              <Activity className="w-3 h-3 text-blue-500 animate-pulse" />
              <span className="text-[10px] font-black text-blue-400 uppercase italic">98.4%</span>
            </div>
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
                  className="absolute top-4 left-1/2 -translate-x-1/2 z-40 px-6 py-2 rounded-full bg-blue-500 text-white font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.3)] flex items-center gap-2"
                >
                  Visualizing Data <ChevronDown className="w-3 h-3" />
                </motion.button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer Info */}
      <footer className="p-4 bg-black/40 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-gray-600 uppercase tracking-widest">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <ShieldCheck className="w-3 h-3" />
            <span>End-to-End Verified</span>
          </div>
          <div className="flex items-center space-x-1">
            <span>Core::Suraj_Gupta</span>
          </div>
        </div>
        <div>
          Session_Time: {new Date().toLocaleDateString()}
        </div>
      </footer>
    </div>
  );
}

export default Chat;
