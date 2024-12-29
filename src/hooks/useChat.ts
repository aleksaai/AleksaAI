import { useState, useCallback } from 'react';
import { ChatMessage } from '../types/chat';
import { sendWebhookMessage } from '../services/webhookService';

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([{
    sender: 'ai',
    content: 'Hello! How can I assist you today?'
  }]);
  const [isTyping, setIsTyping] = useState<'ai' | 'aleksa' | null>(null);
  const [hasAleksaJoined, setHasAleksaJoined] = useState(false);

  const addMessage = useCallback((message: ChatMessage) => {
    setMessages(prev => [...prev, message]);
  }, []);

  const handleWebhookResponse = useCallback(async (currentMessages: ChatMessage[]) => {
    try {
      setIsTyping('aleksa');
      
      // Start the webhook request immediately
      const webhookPromise = sendWebhookMessage(currentMessages);
      
      // Always wait at least 3 seconds for a natural conversation flow
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const result = await webhookPromise;
      
      if (result.response) {
        addMessage({ 
          sender: 'aleksa', 
          content: result.response 
        });
      } else {
        console.error('Webhook error:', result.error);
        addMessage({ 
          sender: 'aleksa', 
          content: "I apologize, but I'm having trouble connecting right now. Please try again in a moment." 
        });
      }
    } finally {
      setIsTyping(null);
    }
  }, [addMessage]);

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: ChatMessage = { sender: 'user', content };
    addMessage(userMessage);
    
    if (!hasAleksaJoined) {
      // Initial flow when Aleksa joins
      setTimeout(() => {
        addMessage({ sender: 'system', content: 'Aleksa has joined the chat' });
        setIsTyping('aleksa');
        
        setTimeout(() => {
          setIsTyping(null);
          addMessage({
            sender: 'aleksa',
            content: 'Hey, nice to meet you. What is your name?'
          });
          setHasAleksaJoined(true);
        }, 3000);
      }, 1000);
    } else {
      // Handle subsequent messages with webhook
      const updatedMessages = [...messages, userMessage];
      await handleWebhookResponse(updatedMessages);
    }
  }, [messages, hasAleksaJoined, handleWebhookResponse, addMessage]);

  return { messages, isTyping, sendMessage };
}