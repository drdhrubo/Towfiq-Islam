export interface Project {
  id: string;
  title: string;
  category: 'ovc' | 'architecture' | 'edtech' | 'podcast' | 'event' | 'wedding';
  categoryLabel: string;
  thumbnailUrl: string;
  videoUrl?: string; // YouTube/Vimeo embed URL or similar
  embedId: string; // YouTube video ID or similar placeholder
  description: string;
  duration?: string;
  year?: string;
  role?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  features: string[];
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  isCurrent?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  quote: string;
  avatarUrl?: string;
  isPlaceholder?: boolean;
}

export interface PricingPackage {
  id: string;
  name: string;
  price: string;
  priceUnit?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
