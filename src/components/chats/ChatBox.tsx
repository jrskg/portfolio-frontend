import { EyeIcon, Send } from 'lucide-react';
import React, { memo, useContext, useState } from 'react';
import { MessageContext } from '../../context/messages';
import MessageContainer from './MessageContainer';
import {v4 as uuid} from "uuid";
import instance from '../../utils/axiosInstance';
import { SERVER_DATA_KEYS, type AIResponse } from '../../type';
import { GithubReposContext } from '../../context/githubRepos';
import { GithubEventsContext } from '../../context/githubEvent';
import ToolTip from '../ToolTip';

interface ChatBoxProps {
  onAIResponse: (tabKey: SERVER_DATA_KEYS) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ onAIResponse }) => {
  const {messages, addMessage} = useContext(MessageContext)!;
  const [input, setInput] = useState('');
  const [aiTyping, setAiTyping] = useState(false);
  const {repos, setRepos} = useContext(GithubReposContext)!;
  const {events, setEvents} = useContext(GithubEventsContext)!;

  const getAIResponse = async(): Promise<AIResponse | null> => {
    try {
      setAiTyping(true);
      const {data} = await instance.post<AIResponse>("/bot/ask", {
        query: input
      });
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }finally{setAiTyping(false)}
  }

  const handleSend = async() => {
    setInput('');
    if (input.trim()) {
      addMessage({
        id: uuid(),
        isUser: true,
        text: input
      });
      const response = await getAIResponse();
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
    }
  };

  return (
    <div className="flex w-full flex-col h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 shadow-md shadow-blue-900/40 rounded-lg">
      <MessageContainer
        aiTyping={aiTyping}
        messages={messages}
      />      

      {/* Input Area */}
      <div className="flex items-center gap-3 border-t border-gray-200 p-4">
        {(repos.length > 0 || events.length > 0) && <ToolTip text='Show data'>
          <button onClick={() => onAIResponse(SERVER_DATA_KEYS.GITHUB_REPOS)} className='p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors'>
            <EyeIcon className='w-6 h-6' />
          </button>
        </ToolTip>}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          className="flex-1 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask about me anything..."
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default memo(ChatBox);