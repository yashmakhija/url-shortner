import { FiZap, FiBarChart2, FiLock, FiGlobe, FiSmartphone, FiPieChart } from "react-icons/fi";
import type { Feature, SocialProof } from "@/types";

export const FEATURES: Feature[] = [
  {
    icon: FiZap,
    title: "Lightning Fast",
    description: "Create short links instantly with our optimized infrastructure.",
  },
  {
    icon: FiBarChart2,
    title: "Detailed Analytics",
    description: "Track clicks, locations, devices, and more in real-time.",
  },
  {
    icon: FiLock,
    title: "Secure & Reliable",
    description: "Enterprise-grade security with 99.9% uptime guarantee.",
  },
  {
    icon: FiGlobe,
    title: "Custom Domains",
    description: "Use your own domain for branded short links.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile Friendly",
    description: "Perfect experience across all devices and platforms.",
  },
  {
    icon: FiPieChart,
    title: "Rich Insights",
    description: "Make data-driven decisions with comprehensive analytics.",
  },
];

export const SOCIAL_PROOF: SocialProof = {
  stats: [
    { number: "2B+", label: "Links Created", icon: "🔗" },
    { number: "150M+", label: "Monthly Clicks", icon: "📈" },
    { number: "190+", label: "Countries Served", icon: "🌍" },
    { number: "99.9%", label: "Uptime", icon: "⚡" },
  ],
  testimonials: [
    {
      quote: "The analytics and insights have been game-changing for our marketing strategy.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "TechCorp",
      avatar: "SJ",
    },
    {
      quote: "Best URL shortener we've used. The QR code feature is a fantastic bonus.",
      author: "Michael Chen",
      role: "Product Manager",
      company: "StartupX",
      avatar: "MC",
    },
    {
      quote: "Enterprise-grade features with a simple, intuitive interface.",
      author: "Alex Rivera",
      role: "CTO",
      company: "GrowthCo",
      avatar: "AR",
    },
  ],
  trustLogos: [
    {
      name: "Forbes",
      src: "https://static-00.iconduck.com/assets.00/brand-forbes-icon-2048x532-fvsol7zd.png",
    },
    {
      name: "amazon",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
    },
    {
      name: "Google",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/97/Google_Adsense_logo.png",
    },
    {
      name: "Flipkart",
      src: "https://cdn.worldvectorlogo.com/logos/flipkart.svg",
    },
  ],
}; 