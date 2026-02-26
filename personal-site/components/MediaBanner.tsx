import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface MediaBannerProps {
  mediaUrl: string;
  mediaType: 'image' | 'video';
  isOpen: boolean;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  currentIndex?: number;
  totalCount?: number;
}


export function MediaBanner({
  mediaUrl,
  mediaType,
  isOpen,
  onClose,
  onNext,
  onPrev,
  currentIndex = 0,
  totalCount = 0,
}: MediaBannerProps) {
  if (!isOpen) return null;

  const getMediaUrl = (url: string) => {
    // If it's already a full URL, return as is
    if (url.startsWith('http')) return url;
    
    // If it's just an ID, convert to Google Drive direct link
    return `https://drive.google.com/thumbnail?id=${url}&sz=w1920`;
  };

  const directUrl = getMediaUrl(mediaUrl);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative max-w-7xl w-full bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image counter */}
        {totalCount > 1 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
            {currentIndex + 1} / {totalCount}
          </div>
        )}

        {/* Previous button */}
        {onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next button */}
        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        <div className="aspect-video w-full flex items-center justify-center">
          {mediaType === 'image' ? (
             <img
             src={directUrl}
             alt="Media content"
             width={1920}
             height={1080}
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
               <source src={directUrl} type="video/mp4"/>
            </video>
          )}
        </div>
      </div>
    </div>
  );
}