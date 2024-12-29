export interface ChatMessage {
  sender: 'ai' | 'user' | 'system' | 'aleksa';
  content: string;
}

export interface ChatHistory {
  conversation: ChatMessage[];
  timestamp: string;
  sessionId: string;
}