import { Timeline } from "@/components/timeline";

const sampleMemories = [
  {
    id: "1",
    date: new Date("2025-01-11"),
    title: "Kedarkantha",
    description:"Conquered kedarkantha trek. this is my first trek. it so good :)",
    location: "Sankiri, Uttarkhand",
    mediaType: "image",
    mediaUrl: "https://i.im.ge/2025/01/19/HMTb10.IMG-0770.jpeg",
    memories:[{
      title: "image",
      mediaType: "image",
      mediaUrl:"https://i.im.ge/2025/01/19/HMTRXL.IMG-8115.jpeg",
    }, {
      title: "image",
      mediaType: "image",
      mediaUrl:"https://i.im.ge/2025/01/19/HMTUY8.IMG-7803.jpeg",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://i.im.ge/2025/01/19/HMTb10.IMG-0770.jpeg",
    },
    {
      title: "image",
      mediaType: "image",
      mediaUrl:
        "https://i.im.ge/2025/01/19/HMTEam.IMG-3840.jpeg",
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


/**
 * https://drive.google.com/file/d/1eGar_kd5kWZ70ekmDdHhj-RYV_hxtFxR/view?usp=sharing
 * https://drive.google.com/file/d/1oxldK188txlhZKzHmpjPsAq2X7BcPfp-/view?usp=sharing
 * https://drive.google.com/file/d/1GPSCR3q_pznrtIq1S8EQHXce35oNLa2R/view?usp=sharing
 * https://drive.google.com/file/d/1hipQsArAMyL6Kc1kHNeXTckoqvaqDQkK/view?usp=sharing
 * https://drive.google.com/file/d/1TwydObhfJqfaCLkUIczLzHTKWVV1RLIh/view?usp=sharing
 * https://drive.google.com/file/d/1ofhrMKe5F47HBp-_UkVrc67kf680SWQ-/view?usp=sharing
 */