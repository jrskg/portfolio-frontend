import React, { memo, useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import AITyping from './AITyping'
import { Message } from '../../context/messages';

const messageSuggestions = [
  "Who are you?",
  "What is your name?",
  "Show me your projects",
  "What are your recent activities?",
  "What are your skills?",
  "I want to connect with suraj gupta",
  "What are your hobbies?",
  "What are your qualifications?",
  "What are your interests?",
  "What are your strengths?",
];

interface Props {
  messages: Message[];
  aiTyping: boolean;
  onSuggestionsClick: (msg: string) => void;
}
const MessageContainer: React.FC<Props> = ({ aiTyping, messages, onSuggestionsClick }) => {
  console.log("Rendering MessageContainer");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto py-4 space-y-1">
      {messages.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center mt-5 gap-3 px-4">
          <h2 className="text-lg font-semibold text-slate-300">Try one of these messages:</h2>

          {messageSuggestions.map((msg, index) => (
            <div
              onClick={() => onSuggestionsClick(msg)}
              key={index}
              className="w-full max-w-md text-center px-2 py-1 rounded-md shadow-md bg-gray-900 
                       transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <p className="text-transparent bg-clip-text text-lg bg-gradient-to-r from-blue-500 to-purple-500 font-medium">
                {msg}
              </p>
            </div>
          ))}
        </div>
      )
      }
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          id={msg.id}
          isUser={msg.isUser}
          text={msg.text}
        />
      ))}
      {aiTyping && <AITyping />}
      <div ref={bottomRef} />
    </div>
  )
}

export default memo(MessageContainer);
// export default MessageContainer;