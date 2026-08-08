export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface TechItem {
  name: string;
  category: string;
  iconName: string;
  color?: string;
}

export interface TimelineItem {
  role: string;
  company: string;
  type: string;
  period: string;
  description?: string;
}

export interface Certification {
  degree: string;
  institution: string;
  year: string;
  badgeText: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  stars: number;
}
