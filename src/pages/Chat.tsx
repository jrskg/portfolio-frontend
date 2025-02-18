import { ChevronDown, XIcon } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import ChatBox from '../components/chats/ChatBox';
import InteractiveSection from '../components/chats/InteractiveSection';
import { cn } from '../lib/utils';
import { SERVER_DATA_KEYS } from '../type';

const Chat = () => {
  const [interactiveTab, setInteractiveTab] = useState<SERVER_DATA_KEYS | null>(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [toggleDetails, setToggleDetails] = useState(false);

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

  const getXIcon = (handleClick: (e: React.MouseEvent) => void) => {
    return (
      <XIcon
        className='absolute top-3 right-2 w-6 h-6 cursor-pointer'
        onClick={handleClick}
      />
    )
  }

  return (
    <div className="relative w-screen flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white md:p-4 ">
      {/* {screenWidth > 768 && <>
        <FloatingDots />
        <FloatingIcon className='right-28' />
      </>} */}
      <div className={cn("relative w-[99%] flex items-center transition-all duration-300 ")}>
        {screenWidth > 768 ? <>
          <div
            className={cn(
              "absolute w-[50%] transition-all h-[90%] p-1 duration-500",
              interactiveTab ? "left-0" : "left-1/2 -translate-x-1/2"
            )}
          >
            <ChatBox onAIResponse={handleAIResponse} />
          </div>
          <div
            className={cn(
              "absolute transition-all right-0 p-1 duration-500 ",
              interactiveTab ? "w-[50%] h-[90%] opacity-100" : "w-0 h-0 opacity-0"
            )}
          >
            <InteractiveSection 
              interactiveTab={interactiveTab!}
              handleCloseSection={hideInteractive}
            />
          </div>
        </> : <>
          <div
            className={cn(
              "w-full h-full",
            )}
          >
            <ChatBox onAIResponse={handleAIResponse} />
          </div>
          <div className={cn('z-40 absolute left-1/2 -translate-x-1/2 p-3 bg-gray-600 rounded-lg shadow-lg shadow-gray-800 transition-all duration-300 ',
            interactiveTab ?
              "top-14 w-[90%] opacity-100" :
              "-top-10 w-0 opacity-0")}
            onClick={() => setToggleDetails(!toggleDetails)}
          >
            {getXIcon(hideInteractive)}
            <div className='flex items-center gap-2'>
              <p>See More</p>
              <ChevronDown
                className='w-6 h-6 cursor-pointer'
              />
            </div>
          </div>
          <div
            className={cn(
              "z-50 absolute transition-all duration-300 top-0 w-full",
              (interactiveTab && toggleDetails) ? "h-full opacity-100" : "h-0 opacity-0"
            )}
          >
            <InteractiveSection
              interactiveTab={interactiveTab!}
              handleCloseSection={() => setToggleDetails(false)}
            />
          </div>
        </>}
      </div>

    </div>
  );
}

export default Chat