import React, { createContext, useState } from "react";

export interface Message{
  id: string;
  text: string;
  isUser: boolean;
}

interface MessageContextType{
  messages: Message[];
  addMessage: (message: Message) => void;
}
export const MessageContext = createContext<MessageContextType | null>(null);

export const MessageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const addMessage = (message: Message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  }
  return(
    <MessageContext.Provider value={{messages, addMessage}}>
      {children}
    </MessageContext.Provider>
  )
}

