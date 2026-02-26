'use client'
import { Timeline } from "../../components/Timeline";
import { Memory } from "../types";
// import getAllContent from "@/api/getContent";

const sampleMemories:Memory[] = [
  {
    id: "1",
    date: new Date("2025-01-11"),
    title: "Kedarkantha Peak",
    description:"Conquered kedarkantha trek. this is my first trek. it so good :)",
    location: "Sankiri, Uttarkhand",
    mediaType: "image",
    mediaUrl: '1bCy5c5zJPHMFj5EWOxPxtEvP0sLxM9Fg',
    memories:[{
      title: "image",
      mediaType: "image",
      mediaUrl:"1It3Kvc997t3oK866WziY_vdxMlXZ3YAb",
    }, {
      title: "image",
      mediaType: "image",
      mediaUrl:"1giNRYatgitf1wdhDb2wtSapCa3rPBSv8",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "1_Bje1ZsAQPNEQEN8HsA4OssXOqzDOGmM",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "1XxOA67EEgrsx-EnghNyOZ471HUemtOij",
    }
  ]
  },
  {
    id: "2",
    date: new Date("2024-02-28"),
    title: "Malaysia Diaries",
    description:"Leisure trip and my first international trip :)",
    location: "KL, Malaysia",
    mediaType: "image",
    mediaUrl: "1Ff3DfkPJEC2LL0PXy_SomW-8qX-SIW1u",
    memories:[{
      title: "image",
      mediaType: "image",
      mediaUrl:"1SHSwritvdqhK0-xWEhKWwwxPQlX6KyWt",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:"1xjjxY1G9ryiWORwq5-v_WCBtp_nYqzlK",
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



