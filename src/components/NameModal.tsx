import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';
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
    }else{
      if (!name || name.trim() === "") {
        toast(getRandomAlert(), {type:"error"})
        return;
      }
    }
    if(closedOnce) return;
    try {
      setLoading(true);
      await instance.post("/system/get-visitor", {name: name ? name.trim() : ""});
      if(name) toast(`Thank you ${name}`, {type:"success"});
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false);
      setVisible(false);
      setClosedOnce(true);
    }
  }
  return (
    <AnimatePresence>
      {visible && <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4"
      >
        <div
          className='relative w-[100%] lg:w-[30%] h-52 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 flex items-center justify-evenly py-5 px-2 font-bold text-gray-300 rounded-md shadow-md shadow-black flex-col'
        >
            <XIcon
              onClick={() => handleSaveInfo(true)} 
              className='absolute -top-2 -right-2 bg-pink-500 rounded-full w-6 h-6 cursor-pointer'/>
          <p
            className='text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center'
          >{randomStr}</p>
          <input
            type="text"
            placeholder='Your name...'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={cn('w-[80%] px-4 py-1 text-lg text-gray-900 focus:outline-none rounded-sm bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent border-2 border-transparent border-solid disabled:opacity-60 disabled:cursor-not-allowed')}
            style={{
              borderImage: 'linear-gradient(to right, #3b82f6, #9333ea, #ec4899) 1'
            }}
            disabled={loading}
          />
          <button
            onClick={() => handleSaveInfo()}
            className={cn('w-[80%] px-4 py-1 text-lg text-slate-900 rounded-sm focus:outline-none bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500', loading && 'cursor-not-allowed opacity-60 transition-all duration-300')}
          >Done</button>
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default NameModal;