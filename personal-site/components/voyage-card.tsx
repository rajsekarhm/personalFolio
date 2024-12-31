"use client";

import { Memory } from "@/app/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Calendar } from "lucide-react";
import { format } from "date-fns";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface VoyageCardProps {
  memory: Memory;
}

function CarouselDemo({ images }: any) {
  return (
    <Carousel className="w-full max-w-screen w-96 h-96">
      <CarouselContent>
        {images.map((image, index) => {
          return(
          <CarouselItem key={index}>
            <div className="p-8">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-8">
                {image.mediaType == "image" ? 
                  <img
                    src={
                      image.mediaUrl
                    }
                    alt={       image.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />: <video
                  src={image.mediaUrl}
                  controls
                  className="w-full h-full object-contain"
                />}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        )})}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function VoyageCard({ memory }: VoyageCardProps) {
  return (
    <Drawer>
      <Card className="w-full max-w-3xl hover:shadow-lg transition-shadow duration-200">
        <CardHeader className="space-y-1">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl font-bold">{memory.title}</CardTitle>
            <div className="flex items-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">
                  {format(new Date(memory.date), "MMM d, yyyy")}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{memory.location}</span>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <DrawerTrigger asChild>
            <AspectRatio ratio={12 / 5} className="overflow-hidden rounded-md">
              {memory.mediaType === "image" ? (
                <img
                  src={memory.mediaUrl}
                  alt={memory.title}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video
                  src={memory.mediaUrl}
                  controls
                  className="w-full h-full object-contain"
                />
              )}
            </AspectRatio>
          </DrawerTrigger>
          <ScrollArea className="h-24">
            <p className="text-muted-foreground leading-relaxed">
              {memory.description}
            </p>
          </ScrollArea>
        </CardContent>
        <DrawerContent className="flex items-center max-w-screen">
        <DrawerHeader>
            <CarouselDemo
              images={memory.memories}
            />
          </DrawerHeader>
        </DrawerContent>
      </Card>
    </Drawer>
  );
}
