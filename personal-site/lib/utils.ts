"use client";

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import dynamic from "next/dynamic";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleDynamicImport(url:string){
  const image =   dynamic(() =>
    import(`${url}`)
  );
  return image
}