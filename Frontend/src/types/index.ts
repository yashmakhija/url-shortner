import { IconType } from "react-icons";

export interface Feature {
  icon: IconType;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export interface Stat {
  number: string;
  label: string;
  icon: string;
}

export interface TrustLogo {
  name: string;
  src: string;
  alt?: string;
}

export interface SocialProof {
  stats: Stat[];
  testimonials: Testimonial[];
  trustLogos: TrustLogo[];
}

export interface MotionConfig {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
  whileHover?: object;
  whileTap?: object;
} 