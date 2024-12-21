export interface Memory {
  id: string;
  date: Date;
  title: string;
  description: string;
  location: string;
  mediaType: 'image' | 'video';
  mediaUrl: string;
}