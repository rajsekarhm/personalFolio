"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "./ui/Separater";
export function VoyageCard({ memory }: any) {
  return (
    <>
      <Timeline memories={[{id:"memories",name:"memories"}]}/>
    </>
  );
}

interface TimelineProps {
  memories: any;
}

function Timeline({ memories }: TimelineProps) {
  return (
    <div className="space-y-8 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
      {memories.map((memory, index) => (
        <div key={memory.id} className="relative">
          <div className="flex items-center justify-center">
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
          </div>
          <div
            className={`flex ${
              index % 2 === 0 ? "justify-end" : "justify-start"
            } w-1/2 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
          >
            ok
          </div>
          {index < memories.length - 1 && <Separator className="my-8" />}
        </div>
      ))}
    </div>
  );
}
