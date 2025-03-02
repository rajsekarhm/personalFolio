import React from 'react';
import { X } from 'lucide-react';

interface MediaBannerProps {
  mediaUrl: string;
  mediaType: 'image' | 'video';
  isOpen: boolean;
  onClose: () => void;
}
import Image from "next/image";

export function MediaBanner({ mediaUrl, mediaType, isOpen, onClose }: MediaBannerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-w-7xl w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="aspect-video w-full flex items-center justify-center">
          {mediaType === 'image' ? (
             <Image
              src={require(`../content/${mediaUrl}`)}
              alt="Media content"
              className="w-full h-full object-contain"
              loading="eager"
            />
          ) : (
            <video
              className="w-full h-full object-contain"
              controls
              autoPlay
              playsInline
            >
               <source src={require(`../content/${mediaUrl}`)} type='video/mp4' >
               </source>
            </video>
          )}
        </div>
      </div>
    </div>
  );
}