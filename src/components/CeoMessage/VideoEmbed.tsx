import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoEmbedProps {
  videoId: string;
  thumbnailUrl?: string;
}

export function VideoEmbed({ videoId, thumbnailUrl = "https://i.postimg.cc/8sgFvSXn/U-Own-Destiny-Web-24.png" }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isPlaying) {
    return (
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer" onClick={() => setIsPlaying(true)}>
        <img 
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center
            transform transition-all duration-300 group-hover:scale-110">
            <Play className="w-8 h-8 text-white fill-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}