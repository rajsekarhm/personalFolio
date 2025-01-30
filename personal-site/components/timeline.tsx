"use client";
import { VoyageCard } from "@/components/voyage-card";
import { Separator } from "@/components/ui/separator";
import { Memory } from "@/app/types";

export function Timeline({ memories }: {memories:Memory[]}) {
  return (
    <div className="space-y-8 relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
      {memories.map((memory, index) => (
        <div key={memory.id} className="relative">
          <div className="flex items-center justify-center">
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary" />
          </div>
          <div
             className="flex top-50 left-0 pr-6   w-[calc(50%-1rem)]"
          >
            <VoyageCard memory={memory} />
          </div>
          {index < memories.length - 1 && <Separator className="my-8" />}
        </div>
      ))}
    </div>
  );
}
