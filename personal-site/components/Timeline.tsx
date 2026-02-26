"use client";
import { Memory } from "@/app/types";
import { MediaBanner } from "./MediaBanner";
import { useState, useMemo, useCallback } from "react";
import { MapPin } from "lucide-react";

interface GalleryItem {
  url: string;
  type: 'image' | 'video' | string;
  title: string;
}

export function Timeline({ memories }: { memories: Memory[] }) {
  // Track which gallery is open: memoryId + current index
  const [galleryState, setGalleryState] = useState<{
    memoryId: string;
    currentIndex: number;
  } | null>(null);

  // Track how many images are loaded per memory (key = memory.id)
  const [loadedCounts, setLoadedCounts] = useState<Record<string, number>>(() => {
    // Initially only the first image (main) is loaded for each memory
    const initial: Record<string, number> = {};
    memories.forEach((m) => { initial[m.id] = 1; });
    return initial;
  });

  const getMediaUrl = (url: string) => {
    if (url.startsWith('http')) return url;
    return `https://drive.google.com/thumbnail?id=${url}&sz=w1920`;
  };

  // Build a flat gallery array for each memory (main image + sub-memories)
  const galleries = useMemo(() => {
    const map: Record<string, GalleryItem[]> = {};
    memories.forEach((memory) => {
      const items: GalleryItem[] = [];
      if (memory.mediaUrl) {
        items.push({ url: memory.mediaUrl, type: memory.mediaType, title: memory.title });
      }
      if (memory.memories) {
        memory.memories.forEach((sub) => {
          items.push({ url: sub.mediaUrl, type: sub.mediaType, title: sub.title });
        });
      }
      map[memory.id] = items;
    });
    return map;
  }, [memories]);

  // Unlock the next image for a memory
  const unlockNext = useCallback((memoryId: string) => {
    setLoadedCounts((prev) => {
      const gallery = galleries[memoryId];
      if (!gallery) return prev;
      const current = prev[memoryId] ?? 1;
      if (current >= gallery.length) return prev; // all loaded
      return { ...prev, [memoryId]: current + 1 };
    });
  }, [galleries]);

  // Open gallery at a specific index, and preload the next image
  const openGallery = useCallback((memoryId: string, index: number) => {
    setGalleryState({ memoryId, currentIndex: index });
    // Unlock the image after the one being viewed
    setLoadedCounts((prev) => {
      const gallery = galleries[memoryId];
      if (!gallery) return prev;
      const needed = index + 2; // current + next
      const current = prev[memoryId] ?? 1;
      return needed > current ? { ...prev, [memoryId]: Math.min(needed, gallery.length) } : prev;
    });
  }, [galleries]);

  // Navigate within the open gallery
  const navigateGallery = useCallback((direction: 'prev' | 'next') => {
    if (!galleryState) return;
    const { memoryId, currentIndex } = galleryState;
    const gallery = galleries[memoryId];
    if (!gallery) return;

    const newIndex = direction === 'next'
      ? Math.min(currentIndex + 1, gallery.length - 1)
      : Math.max(currentIndex - 1, 0);

    setGalleryState({ memoryId, currentIndex: newIndex });

    // Preload the image after the new one
    setLoadedCounts((prev) => {
      const needed = newIndex + 2;
      const current = prev[memoryId] ?? 1;
      return needed > current ? { ...prev, [memoryId]: Math.min(needed, gallery.length) } : prev;
    });
  }, [galleryState, galleries]);

  const closeGallery = useCallback(() => setGalleryState(null), []);

  // Current gallery data for MediaBanner
  const currentGallery = galleryState ? galleries[galleryState.memoryId] : null;
  const currentItem = currentGallery && galleryState ? currentGallery[galleryState.currentIndex] : null;

  return (
    <div className="relative container">
      <MediaBanner
        isOpen={!!galleryState}
        mediaUrl={currentItem?.url || ''}
        mediaType={(currentItem?.type as 'image' | 'video') || 'image'}
        onClose={closeGallery}
        onNext={currentGallery && galleryState && galleryState.currentIndex < currentGallery.length - 1
          ? () => navigateGallery('next') : undefined}
        onPrev={galleryState && galleryState.currentIndex > 0
          ? () => navigateGallery('prev') : undefined}
        currentIndex={galleryState?.currentIndex ?? 0}
        totalCount={currentGallery?.length ?? 0}
      />

      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />

      {memories.map((memory, index) => {
        const gallery = galleries[memory.id] || [];
        const loaded = loadedCounts[memory.id] ?? 1;

        return (
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

                  {/* Main media - always loaded (index 0) */}
                  {memory.mediaUrl && (
                    <div
                      className="mb-4 cursor-pointer"
                      onClick={() => openGallery(memory.id, 0)}
                    >
                      <img
                        src={getMediaUrl(memory.mediaUrl)}
                        alt={memory.title}
                        className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
                      />
                    </div>
                  )}

                  {/* Sub-memory thumbnails - only render src if unlocked */}
                  {memory.memories && memory.memories.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {memory.memories.map((subMemory, idx) => {
                        const galleryIndex = idx + 1; // offset by 1 (main image is 0)
                        const isLoaded = galleryIndex < loaded;

                        return (
                          <div
                            key={idx}
                            className="aspect-square cursor-pointer"
                            onClick={() => openGallery(memory.id, galleryIndex)}
                          >
                            {isLoaded ? (
                              <img
                                src={getMediaUrl(subMemory.mediaUrl)}
                                alt={subMemory.title}
                                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
                              />
                            ) : (
                              <div className="w-full h-full rounded-lg bg-gray-200 animate-pulse flex items-center justify-center">
                                <span className="text-gray-400 text-xs">Click to load</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
