import React from 'react';

interface ProfileImageProps {
  image: string;
  name: string;
}

export function ProfileImage({ image, name }: ProfileImageProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-xl opacity-50 scale-110" />
      <img 
        src={image} 
        alt={name}
        className="relative z-10 w-24 h-24 rounded-full object-cover"
      />
      <div className="absolute -top-2 right-0 z-20">
        <div className="flex items-center gap-1.5 bg-emerald-500 px-2 py-1 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span className="text-[10px] font-medium text-white uppercase tracking-wider">Live</span>
        </div>
      </div>
    </div>
  );
}