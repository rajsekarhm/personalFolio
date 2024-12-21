"use client";

import { Memory } from "@/app/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Calendar } from "lucide-react";
import { format } from "date-fns";

interface VoyageCardProps {
  memory: Memory;
}

export function VoyageCard({ memory }: VoyageCardProps) {
  return (
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
        <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-md">
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
              className="w-full h-full object-cover"
            />
          )}
        </AspectRatio>
        <ScrollArea className="h-24">
          <p className="text-muted-foreground leading-relaxed">
            {memory.description}
          </p>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}