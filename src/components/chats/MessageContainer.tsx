import React, { memo, useEffect, useRef } from 'react'
import ChatMessage from './ChatMessage'
import AITyping from './AITyping'
import { Message } from '../../context/messages'

interface Props{
  messages: Message[];
  aiTyping: boolean
}
const MessageContainer:React.FC<Props> = ({aiTyping, messages}) => {
  console.log("Rendering MessageContainer");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto py-4 space-y-1">
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