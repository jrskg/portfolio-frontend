import React, { useState } from "react";

interface Props{
  children: React.ReactNode;
  text: string;
}

const ToolTip:React.FC<Props> = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative group flex justify-center">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        // className="w-fit"
      >
        {children}
      </div>

      <div className={`absolute bottom-full mb-2 transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-md shadow-lg whitespace-nowrap min-w-max">
          {text}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-3 h-3 bg-gray-900 transform rotate-45"></div>
        </div>
      </div>
    </div>
  );
};

export default ToolTip;