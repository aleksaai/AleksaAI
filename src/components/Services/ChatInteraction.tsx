import React, { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { TypingIndicator } from './TypingIndicator';
import { useChat } from '../../hooks/useChat';

export function ChatInteraction() {
  const { messages, isTyping, sendMessage } = useChat();
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <div className="h-full flex flex-col">
      <div 
        ref={chatContainerRef}
        className="flex-1 space-y-4 overflow-y-auto mb-4 pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
      >
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            sender={message.sender}
            content={message.content}
          />
        ))}
        {isTyping && <TypingIndicator sender={isTyping} />}
      </div>

      <ChatInput onSend={sendMessage} />
    </div>
  );
}