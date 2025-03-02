"use client";
import { Memory } from "@/app/types";
import { MediaBanner } from "./MediaBanner";
import { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

export function Timeline({ memories }: {memories:Memory[]}) {
  const [selectedMedia, setSelectedMedia] = useState<{ url: string; type: 'image' | 'video' | any } | null>(null);

  return (
    <div className="relative container">
    <MediaBanner
      isOpen={!!selectedMedia}
      mediaUrl={selectedMedia?.url || ''}
      mediaType={selectedMedia?.type || 'image'}
      onClose={() => setSelectedMedia(null)}
    />

    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
    
    {memories.map((memory, index) => {
      return(
      <div key={memory.id} className="relative mb-16">
        {/* Date indicator */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 bg-white px-4 py-1 rounded-full border border-gray-200 shadow-sm">
          <time className="text-sm font-medium text-gray-600">
            {memory.date.toLocaleDateString('en-US', { 
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </time>
        </div>

        {/* Content card - alternating sides */}
        <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center gap-8`}>
          <div className="w-5/12" /> {/* Spacer */}
          <div className="w-7/12">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{memory.title}</h3>
              
              {memory.location && (
                <div className="flex items-center text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{memory.location}</span>
                </div>
              )}

              <p className="text-gray-700 mb-4">{memory.description}</p>

              {/* Main media */}
              {memory.mediaUrl && (
                <div 
                  className="mb-4 cursor-pointer"
                  onClick={() => setSelectedMedia({ url: memory.mediaUrl, type: memory.mediaType })}
                >
                  <Image
                  src={require(`../content/${memory.mediaUrl}`)}    
                  alt={memory.title}
                  className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
                  />
                 </div>
              )}
              
              {memory.memories && memory.memories.length > 0 && (
                <div className="grid grid-cols-3 gap-2">
                  {memory.memories.map((subMemory, idx) => {
                    return (
                    <div 
                      key={idx} 
                      className="aspect-square cursor-pointer"
                      onClick={() => setSelectedMedia({ url: subMemory.mediaUrl, type: subMemory.mediaType })}
                    >
                      <Image
                        src={require(`../content/${subMemory.mediaUrl}`)}
                        alt={subMemory.title}
                        className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
                      />
                    </div>
                  )})}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )})}
  </div>
  );
}
