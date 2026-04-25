import React, { memo, useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import AITyping from './AITyping'
import { Message } from '../../context/messages';
import { Terminal } from 'lucide-react';

const messageSuggestions = [
  "How did you optimize the payroll system?",
  "Tell me about the Delta Input upload optimization",
  "Show me your backend technical stack",
  "What is the status of the Golang migration?",
  "Summarize your experience at Jellyfish Technology",
  "How can I contact you for a project?",
];

interface Props {
  messages: Message[];
  aiTyping: boolean;
  onSuggestionsClick: (msg: string) => void;
}
const MessageContainer: React.FC<Props> = ({ aiTyping, messages, onSuggestionsClick }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 min-h-0 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center min-h-full space-y-8 animate-in fade-in duration-700">
          <div className="flex flex-col items-center space-y-4">
            <div className="p-4 rounded-3xl bg-blue-500/5 border border-blue-500/10">
              <Terminal className="w-12 h-12 neon-text-blue" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-black text-white uppercase tracking-tighter italic">System Neural Link</h2>
              <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1">Ready for input queries</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
            {messageSuggestions.map((msg, index) => (
              <button
                onClick={() => onSuggestionsClick(msg)}
                key={index}
                className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-300 text-left group"
              >
                <p className="text-xs font-mono text-gray-400 group-hover:text-blue-400 transition-colors italic leading-relaxed">
                  {">"} {msg}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          id={msg.id}
          isUser={msg.isUser}
          text={msg.text}
        />
      ))}
      {aiTyping && <AITyping />}
      <div ref={bottomRef} className="h-4" />
    </div>
  )
}

export default memo(MessageContainer);
