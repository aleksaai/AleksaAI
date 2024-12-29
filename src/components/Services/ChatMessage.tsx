import React from 'react';

interface ChatMessageProps {
  sender: 'ai' | 'user' | 'system' | 'aleksa';
  content: string;
}

export function ChatMessage({ sender, content }: ChatMessageProps) {
  // For system messages (like "Aleksa has joined the chat")
  if (sender === 'system') {
    return (
      <div className="text-center">
        <span className="text-xs text-gray-400">{content}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-start gap-3 ${sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* Profile Picture */}
      <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
        <img 
          src={
            sender === 'user' 
              ? "https://i.postimg.cc/QCs01RL7/DALL-E-2024-12-29-00-49-04-A-3-D-rendered-headshot-of-a-realistic-human-character-with-soft-detail.webp"
              : sender === 'aleksa'
                ? "https://i.postimg.cc/qqXDFpcQ/U-Own-Destiny-Web-20.png"
                : "https://i.postimg.cc/Bnv7h9jc/DALL-E-2024-12-29-00-46-07-A-headshot-of-a-human-like-AI-bot-designed-to-look-highly-personable-an.webp"
          } 
          alt={sender === 'user' ? "You" : sender === 'aleksa' ? "Aleksa" : "AI Assistant"}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Message Content */}
      <div className="flex flex-col gap-1">
        <span className="text-xs text-gray-400">
          {sender === 'user' ? 'You' : sender === 'aleksa' ? 'Aleksa' : 'AI Assistant'}
        </span>
        <div className={`
          max-w-[240px] rounded-2xl p-3
          ${sender === 'user' || sender === 'aleksa'
            ? 'bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-white' 
            : 'bg-white/[0.03] border border-white/[0.05] text-gray-400'}
        `}>
          <p className="text-sm whitespace-pre-wrap">{typeof content === 'string' ? content : 'Invalid message format'}</p>
        </div>
      </div>
    </div>
  );
}