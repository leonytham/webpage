export type ProjectCategory = 'Funnels' | 'Websites' | 'UGC Video';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  fullImage?: string;
  tagline: string;
  description: string;
  clientType: string;
  deliverables: string[];
  toolsUsed: string[];
  timeframe: string;
  metrics?: {
    label: string;
    value: string;
  }[];
  videoMeta?: {
    duration: string;
    seconds: number;
    caption: string;
    audioTrackName?: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  iconName: 'funnel' | 'website' | 'video';
  deliverables: string[];
}
