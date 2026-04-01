import { EyeIcon, Send, Terminal } from 'lucide-react';
import React, { memo, useContext, useState } from 'react';
import { MessageContext } from '../../context/messages';
import MessageContainer from './MessageContainer';
import {v4 as uuid} from "uuid";
import instance from '../../utils/axiosInstance';
import { SERVER_DATA_KEYS, type AIResponse } from '../../type';
import { GithubReposContext } from '../../context/githubRepos';
import { GithubEventsContext } from '../../context/githubEvent';
import ToolTip from '../ToolTip';
import { cn } from '../../lib/utils';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

interface ChatBoxProps {
  onAIResponse: (tabKey: SERVER_DATA_KEYS) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onAIResponse }) => {
  const {messages, addMessage} = useContext(MessageContext)!;
  const [input, setInput] = useState('');
  const [aiTyping, setAiTyping] = useState(false);
  const {repos, setRepos} = useContext(GithubReposContext)!;
  const {events, setEvents} = useContext(GithubEventsContext)!;

  const getAIResponse = async(query: string): Promise<AIResponse | null> => {
    try {
      setAiTyping(true);
      const {data} = await instance.post<AIResponse>("/bot/ask", {
        query
      });
      return data;
    } catch (error) {
      if(error instanceof AxiosError && error.response){
        toast(error.response.data.message);
      }
      console.error(error);
      return null;
    }finally{setAiTyping(false)}
  }

  const onSuggestionClick = async(text: string) => {
    setInput(text);
    await handleSend(text);
  }

  const handleSend = async(text: string) => {
    if (text.trim()) {
      addMessage({
        id: uuid(),
        isUser: true,
        text: text
      });
      const response = await getAIResponse(text);
      if(response){
        addMessage({
          id: uuid(),
          isUser: false,
          text: response.message
        });
      }
      if(response && "dataFrom" in response){
        switch(response.dataFrom){
          case SERVER_DATA_KEYS.GITHUB_REPOS:
            setRepos(response.data);
            break;
          case SERVER_DATA_KEYS.GITHUB_EVENTS:
            setEvents(response.data);
            break;
          default:
            console.error("Invalid dataFrom");
            break;
        }
        onAIResponse(response.dataFrom);
      }
      setInput('');
    }
  };

  return (
    <div className="flex w-full flex-col h-full glass-card rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="p-4 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <Terminal className="w-4 h-4 neon-text-blue" />
          </div>
          <div>
            <span className="text-xs font-mono font-black text-white uppercase tracking-widest italic">Comms_Link::Secure</span>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">AI Core Active</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-1.5">
          <div className="w-2 h-2 rounded-full bg-white/5" />
          <div className="w-2 h-2 rounded-full bg-white/5" />
          <div className="w-2 h-2 rounded-full bg-white/5" />
        </div>
      </div>

      <div className="flex-1 overflow-hidden bg-black/40">
        <MessageContainer
          onSuggestionsClick={onSuggestionClick}
          aiTyping={aiTyping}
          messages={messages}
        />      
      </div>

      {/* Input Area */}
      <div className="p-6 border-t border-white/5 bg-white/[0.01]">
        <div className="relative flex items-center gap-4">
          {(repos.length > 0 || events.length > 0) && (
            <ToolTip text='Visualize Response Data'>
              <button 
                onClick={() => onAIResponse(SERVER_DATA_KEYS.GITHUB_REPOS)} 
                className='p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 hover:bg-blue-500/20 transition-all shadow-[0_0_15px_rgba(0,240,255,0.05)]'
              >
                <EyeIcon className='w-5 h-5' />
              </button>
            </ToolTip>
          )}
          
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500/50 font-mono text-xs italic">{">"}</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              className="w-full pl-8 pr-4 py-4 bg-white/[0.03] border border-white/10 rounded-2xl text-white font-mono text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.05] transition-all placeholder:text-gray-600 italic"
              placeholder="Query the system archives..."
              disabled={aiTyping}
            />
          </div>

          <button
            disabled={aiTyping || !input.trim()}
            onClick={() => handleSend(input)}
            className={cn(
              "p-4 bg-white text-black rounded-2xl transition-all duration-300 shadow-xl",
              (aiTyping || !input.trim()) ? "opacity-20 grayscale cursor-not-allowed" : "hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            )}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <div className="mt-3 flex justify-between px-2">
          <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest italic">Input: Terminal_Standard_v4</span>
          <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest italic">Encryption: Active</span>
        </div>
      </div>
    </div>
  );
};

export default memo(ChatBox);