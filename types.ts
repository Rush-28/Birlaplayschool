
export interface CurriculumItem {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
}

export interface Activity {
  id: string;
  title: string;
  image: string;
  category: string;
  link?: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  alt: string;
}

export interface AvatarConfig {
  base: string;
  hairColor: string;
  shirtColor: string;
  accessory: string;
}
