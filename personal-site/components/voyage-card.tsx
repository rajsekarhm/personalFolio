// "use client";

// import { Memory, memory } from "@/app/types";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { AspectRatio } from "@/components/ui/aspect-ratio";
// import { MapPin, Calendar } from "lucide-react";
// import { format } from "date-fns";
// import {
//   Drawer,
//   DrawerTrigger,
//   DrawerContent,
//   DrawerHeader,
// } from "@/components/ui/drawer";

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// export interface VoyageCardProps {
//   memory: Memory;
// }
// import Image from "next/image";
// import { useState } from "react";
// import { MediaBanner } from "./MediaBanner";



// // eslint-disable-next-line   @typescript-eslint/no-require-imports


// function CarouselDemo({ content }: { content: memory[] }) {
//   return (
//     <Carousel className="w-full max-w-screen w-96 h-96">
//       <CarouselContent>
//         {content.map((image, index) => {
//           return (
//             <CarouselItem key={index}>
//               <div className="p-8">
//                 <Card>
//                   <CardContent className="flex aspect-square items-center justify-center p-8">
//                     {image.mediaType == "image" ? (
//                        <Image
//                        height={1200}
//                        width={300}
//                          src={require(`../content/${image.mediaUrl}`)}
//                          alt={image.title}
//                          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
//                          />
//                     ) : (
//                       <video
//                         src={image.mediaUrl}
//                         controls
//                         className="w-full h-full object-contain"
//                       />
//                     )}
//                   </CardContent>
//                 </Card>
//               </div>
//             </CarouselItem>
//           );
//         })}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

// export async function VoyageCard({ memory }: VoyageCardProps) {
//   const [selectedMedia, setSelectedMedia] = useState<{ url: string; type: 'image' | 'video' } | null>(null);
//   return (
//     <Drawer>
//       <Card className="w-full max-w-3xl hover:shadow-lg transition-shadow duration-200">
//         <CardHeader className="space-y-1">
//           <div className="flex items-center justify-between">
//             <CardTitle className="text-2xl font-bold">{memory.title}</CardTitle>
//             <div className="flex items-center space-x-4 text-muted-foreground">
//               <div className="flex items-center space-x-1">
//                 <Calendar className="h-4 w-4" />
//                 <span className="text-sm">
//                   {format(new Date(memory.date), "MMM d, yyyy")}
//                 </span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <MapPin className="h-4 w-4" />
//                 <span className="text-sm">{memory.location}</span>
//               </div>
//             </div>
//           </div>
//         </CardHeader>
//         <div className="relative container">
//       {/* Media Banner */}
//       <MediaBanner
//         isOpen={!!selectedMedia}
//         mediaUrl={selectedMedia?.url || ''}
//         mediaType={selectedMedia?.type || 'image'}
//         onClose={() => setSelectedMedia(null)}
//       />

//       {/* Vertical line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
      
//       {memories.map((memory, index) => (
//         <div key={memory.id} className="relative mb-16">
//           {/* Date indicator */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 -top-4 bg-white px-4 py-1 rounded-full border border-gray-200 shadow-sm">
//             <time className="text-sm font-medium text-gray-600">
//               {memory.date.toLocaleDateString('en-US', { 
//                 month: 'long',
//                 day: 'numeric',
//                 year: 'numeric'
//               })}
//             </time>
//           </div>

//           {/* Content card - alternating sides */}
//           <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center justify-center gap-8`}>
//             <div className="w-5/12" /> {/* Spacer */}
//             <div className="w-7/12">
//               <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-semibold mb-2">{memory.title}</h3>
                
//                 {memory.location && (
//                   <div className="flex items-center text-gray-600 mb-3">
//                     <MapPin className="w-4 h-4 mr-1" />
//                     <span className="text-sm">{memory.location}</span>
//                   </div>
//                 )}

//                 <p className="text-gray-700 mb-4">{memory.description}</p>

//                 {/* Main media */}
//                 {memory.mediaUrl && (
//                   <div 
//                     className="mb-4 cursor-pointer"
//                     onClick={() => setSelectedMedia({ url: memory.mediaUrl, type: memory.mediaType })}
//                   >
//                     <img
//                       src={memory.mediaUrl}
//                       alt={memory.title}
//                       className="w-full h-64 object-cover rounded-lg hover:opacity-90 transition-opacity"
//                     />
//                   </div>
//                 )}

//                 {/* Additional memories grid */}
//                 {memory.memories && memory.memories.length > 0 && (
//                   <div className="grid grid-cols-3 gap-2">
//                     {memory.memories.map((subMemory, idx) => (
//                       <div 
//                         key={idx} 
//                         className="aspect-square cursor-pointer"
//                         onClick={() => setSelectedMedia({ url: subMemory.mediaUrl, type: subMemory.mediaType })}
//                       >
//                         <img
//                           src={subMemory.mediaUrl}
//                           alt={subMemory.title}
//                           className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//         {/* <CardContent className="space-y-5">
//           <DrawerTrigger asChild>
//             <AspectRatio ratio={12 / 5} className="overflow-hidden rounded-md">
//               {memory.mediaType === "image" ? (
//                 <div key={memory.id} className="flex justify-center items-center h-auto py-4" >
//                   <Image
//                   height={1200}
//                   width={300}
//                   src={require(`../content/${memory.mediaUrl}`)}
//                   alt={memory.title}
//                   className="w-full h-full object-cover  hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//               ) : (
//                 <video
//                   src={memory.mediaUrl}
//                   controls
//                   className="w-full h-full object-contain"
//                 />
//               )}
//             </AspectRatio>
//           </DrawerTrigger>
//           <ScrollArea className="h-24">
//             <p className="text-muted-foreground leading-relaxed">
//               {memory.description}
//             </p>
//           </ScrollArea>
//         </CardContent> */}
//         {/* <DrawerContent className="flex items-center max-w-screen">
//           <DrawerHeader>
//             <CarouselDemo content={memory.memories} />
//           </DrawerHeader>
//         </DrawerContent> */}
//       </Card>
//     </Drawer>
//   );
// }
