import { ChatMessage } from '../types/chat';

const WEBHOOK_URL = 'https://hook.eu2.make.com/5xn6oyyb32i4aw7m40q0ksq6dudptdtt';

export async function sendWebhookMessage(messages: ChatMessage[]) {
  try {
    const formattedContent = messages
      .map(msg => `${msg.sender.toUpperCase()}: ${msg.content}`)
      .join('\n');

    console.log('Sending to webhook:', formattedContent);

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: formattedContent,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    console.log('Raw webhook response:', text);
    
    // Try to parse as JSON first
    try {
      const data = JSON.parse(text);
      const webhookResponse = data.response || data.message || data;
      console.log('Processed webhook response:', webhookResponse);
      
      // Ensure we return a string
      return { 
        response: typeof webhookResponse === 'string' 
          ? webhookResponse 
          : JSON.stringify(webhookResponse)
      };
    } catch {
      // If not JSON, return the raw text if it's not empty
      if (text.trim()) {
        return { response: text.trim() };
      }
      throw new Error('Empty response from webhook');
    }
  } catch (error) {
    console.error('Webhook error:', error);
    return { 
      error: error instanceof Error ? error.message : 'Unknown error',
      response: null
    };
  }
}