export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  isPlaceholder?: boolean;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  index: string;
}

export interface CommunityArea {
  id: string;
  label: string;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
}
