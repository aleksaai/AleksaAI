import { ChatMessage } from '../types/chat';

const WEBHOOK_URL = 'https://hook.eu2.make.com/5xn6oyyb32i4aw7m40q0ksq6dudptdtt';

interface WebhookResponse {
  response: string;
  error?: string;
}

export async function sendToWebhook(messages: ChatMessage[]): Promise<WebhookResponse> {
  try {
    // Format messages for the webhook
    const formattedContent = messages
      .map(msg => `${msg.sender.toUpperCase()}: ${msg.content}`)
      .join('\n');

    console.log('Sending to webhook:', formattedContent);

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
      throw new Error(`Webhook error: ${response.statusText}`);
    }

    const data = await response.text();
    console.log('Raw webhook response:', data);

    try {
      // Try to parse as JSON first
      const jsonData = JSON.parse(data);
      const webhookResponse = jsonData.response || jsonData.message || jsonData;
      console.log('Processed webhook response:', webhookResponse);

      if (typeof webhookResponse === 'string') {
        return { response: webhookResponse };
      }
    } catch (e) {
      // If not JSON, use the raw text response
      if (typeof data === 'string' && data.trim()) {
        return { response: data.trim() };
      }
    }

    throw new Error('Invalid response format from webhook');
  } catch (error) {
    console.error('Webhook error:', error);
    return {
      response: "I apologize, but I'm having trouble connecting right now. Please try again in a moment.",
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}