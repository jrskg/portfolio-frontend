import { AnimatePresence, motion } from 'framer-motion';
import { XIcon, ShieldAlert, UserCheck } from 'lucide-react';
import { useContext, useEffect, useState } from 'react';
import { cn } from '../lib/utils';
import { getRandomHeading, getRandomAlert} from '../utils/utility';
import { toast } from 'react-toastify';
import instance from '../utils/axiosInstance';
import { NameModalContext } from '../context/nameModal';

const randomStr = getRandomHeading();

const NameModal = () => {
  const {closedOnce, setClosedOnce} = useContext(NameModalContext)!;
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if(closedOnce) return;
    const timeOut = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [closedOnce]);
  
  const handleSaveInfo = async (isCross = false) => {
    if (isCross) {
      setClosedOnce(true);
      setVisible(false);
      return;
    }

    if (!name || name.trim() === "") {
      toast(getRandomAlert(), {type:"error"});
      return;
    }

    try {
      setLoading(true);
      await instance.post("/system/get-visitor", {name: name.trim()});
      toast(`Access Granted. Welcome, ${name}`, {type:"success"});
    } catch (error: any) {
      console.error("Identity Verification Error:", error);
      // Even if it fails (like CORS or network), we proceed to let user see portfolio
      if (error.code === 'ERR_NETWORK') {
        console.warn("System Bridge Offline - Local Session Enabled");
      }
    } finally {
      setLoading(false);
      setVisible(false);
      setClosedOnce(true);
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className='relative w-full max-w-md glass-card rounded-[2rem] border border-white/10 p-10 shadow-2xl overflow-hidden'
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            
            <button
              onClick={() => handleSaveInfo(true)} 
              className='absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-all'
            >
              <XIcon size={18} />
            </button>

            <div className="flex flex-col items-center text-center space-y-8">
              <div className="p-5 rounded-3xl bg-blue-500/10 border border-blue-500/20">
                <ShieldAlert className="w-10 h-10 neon-text-blue" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter">
                  Identity Verification
                </h2>
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest leading-relaxed">
                  {randomStr}
                </p>
              </div>

              <div className="w-full space-y-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 font-mono text-xs italic">{">"}</span>
                  <input
                    type="text"
                    placeholder='Enter subject name...'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-8 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white font-mono text-sm focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-gray-700 italic"
                    disabled={loading}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleSaveInfo()}
                  disabled={loading}
                  className="w-full py-4 bg-white text-black font-black uppercase tracking-widest text-sm rounded-2xl shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:grayscale transition-all"
                >
                  <UserCheck size={18} />
                  <span>{loading ? "Authenticating..." : "Authorize Access"}</span>
                </motion.button>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[8px] font-mono text-gray-600 uppercase tracking-[0.3em]">Secure Terminal Protocol 7.0</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default NameModal;
