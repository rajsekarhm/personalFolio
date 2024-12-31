import { Timeline } from "@/components/timeline";

const sampleMemories = [
  {
    id: "1",
    date: new Date("2024-03-15"),
    title: "Malaysia",
    description: "Watching the most beautiful sunset I've ever seen from Oia. The white-washed buildings created the perfect backdrop as the sky turned into a canvas of orange and pink hues. The Mediterranean breeze carried the scent of local cuisine while church bells chimed in the distance.",
    location: "Oia, Santorini",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    memories:[ {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    }]
  },
  {
    id: "2",
    date: new Date("2024-03-10"),
    title: "Kedarkantha",
    description: "Gliding through the historic canals of Venice in a gondola, passing under ancient bridges and beside centuries-old palazzos. The water gently lapped against the buildings while our gondolier shared stories of the city's rich history.",
    location: "Venice, Italy",
    mediaType: "image",
    mediaUrl:  "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    memories:[ {
      title: "video",
      mediaType: "video",
      mediaUrl:
        "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    }]
  },
  {
    id: "3",
    date: new Date("2024-03-15"),
    title: "Malaysia",
    description: "Watching the most beautiful sunset I've ever seen from Oia. The white-washed buildings created the perfect backdrop as the sky turned into a canvas of orange and pink hues. The Mediterranean breeze carried the scent of local cuisine while church bells chimed in the distance.",
    location: "Oia, Santorini",
    mediaType: "image" as "image" | "video",
    mediaUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    memories:[ {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    },
    {
      title: "video",
      mediaType: "video",
      mediaUrl:
        "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    }]
  },
  {
    id: "4",
    date: new Date("2024-03-15"),
    title: "Malaysia",
    description: "Watching the most beautiful sunset I've ever seen from Oia. The white-washed buildings created the perfect backdrop as the sky turned into a canvas of orange and pink hues. The Mediterranean breeze carried the scent of local cuisine while church bells chimed in the distance.",
    location: "Oia, Santorini",
    mediaType: "video" as "image" | "video",
    mediaUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    memories:[ {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000",
    }]
  }
];

export default function Voyage() {
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