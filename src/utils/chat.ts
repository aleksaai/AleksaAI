import type { ChatMessage } from '../types/chat';

const WEBHOOK_URL = 'https://hook.eu2.make.com/5xn6oyyb32i4aw7m40q0ksq6dudptdtt';

export async function sendChatToWebhook(messages: ChatMessage[]): Promise<string | null> {
  try {
    // Format all messages into a single string
    const formattedContent = messages
      .map(msg => `${msg.sender.toUpperCase()}: ${msg.content}`)
      .join('\n');

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: formattedContent,
        timestamp: new Date().toISOString()
      })
    });

    if (!response.ok) {
      console.error('Failed to send chat to webhook:', await response.text());
      return null;
    }

    const data = await response.json();
    return data.response || null;
  } catch (error) {
    console.error('Error sending chat to webhook:', error);
    return null;
  }
}