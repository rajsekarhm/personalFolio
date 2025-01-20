
export type memory = {
    title:string
    mediaType: string
    mediaUrl:string
}
export interface Memory {
  id: string;
  date: Date;
  title: string;
  description: string;
  location: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
  memories : memory[]
}