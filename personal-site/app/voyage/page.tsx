'use client'

import { Timeline } from "@/components/Timeline";
import { Memory } from "../types";

// import getAllContent from "@/api/getContent";

/**
 * /Users/raja-17710/portfolioXClient/personal-site/content/Kedarkantha-1.jpg
 * /Users/raja-17710/portfolioXClient/personal-site/content/Kedarkantha-2.jpg
 * /Users/raja-17710/portfolioXClient/personal-site/content/Kedarkantha-3.jpg
 * /Users/raja-17710/portfolioXClient/personal-site/content/Kedarkantha-4.jpg
 */

const sampleMemories:Memory[] = [
  {
    id: "1",
    date: new Date("2025-01-11"),
    title: "Kedarkantha",
    description:"Conquered kedarkantha trek. this is my first trek. it so good :)",
    location: "Sankiri, Uttarkhand",
    mediaType: "image",
    mediaUrl: 'Kedarkantha-1.jpg',
    memories:[{
      title: "image",
      mediaType: "image",
      mediaUrl:"Kedarkantha-2.jpg",
    }, {
      title: "image",
      mediaType: "image",
      mediaUrl:"Kedarkantha-3.jpg",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "Kedarkantha-4.jpg",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "Kedarkantha-4.jpg",
    }
  ]
  }
];

export default function Voyage() {
  // getAllContent()
  return (
    <main className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            My Travel Voyage
          </h3>
          <p className="mt-3 text-xl text-muted-foreground">
            Capturing memories, one adventure at a time
          </p>
        </div>
        <Timeline memories={sampleMemories} />
      </div>
    </main>
  )
}

