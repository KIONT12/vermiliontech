export interface Service {
  id: string;
  name: string;
  tagline: string;
  price: string;
  features: string[];
  benefits: string[];
  highlighted?: boolean;
}

export const services: Service[] = [
  {
    id: "starter",
    name: "Starter Website",
    tagline: "Perfect for getting your business online fast",
    price: "Starting at $499",
    features: [
      "Up to 3 pages",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "Social media links",
      "1 round of revisions",
    ],
    benefits: [
      "Launch in as little as 1 week",
      "Professional online presence",
      "Easy to update content",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    tagline: "Full-featured site built to grow your business",
    price: "Starting at $1,299",
    highlighted: true,
    features: [
      "Up to 8 pages",
      "Custom design & branding",
      "Advanced SEO optimization",
      "Analytics integration",
      "Blog or news section",
      "Booking or scheduling tools",
      "3 rounds of revisions",
    ],
    benefits: [
      "Generate more leads",
      "Build trust with customers",
      "Stand out from competitors",
    ],
  },
  {
    id: "custom",
    name: "Custom Website Solution",
    tagline: "Tailored solutions for unique business needs",
    price: "Custom Quote",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce integration",
      "AI-powered features",
      "Third-party API integrations",
      "Ongoing support options",
      "Unlimited revisions during build",
    ],
    benefits: [
      "Built exactly to your specs",
      "Scalable architecture",
      "Competitive advantage",
    ],
  },
];

export const servicePreviews = [
  {
    title: "Business Websites",
    description: "Professional sites that establish credibility and drive growth.",
    icon: "building",
  },
  {
    title: "Landing Pages",
    description: "High-converting pages designed to capture leads and sales.",
    icon: "rocket",
  },
  {
    title: "Portfolio Websites",
    description: "Showcase your work with stunning, personalized designs.",
    icon: "briefcase",
  },
  {
    title: "AI-Powered Solutions",
    description: "Smart features that automate tasks and enhance user experience.",
    icon: "sparkles",
  },
  {
    title: "Website Redesigns",
    description: "Modernize outdated sites with fresh design and better performance.",
    icon: "refresh",
  },
];

export const whyWorkWithMe = [
  {
    title: "Mobile Responsive",
    description: "Every site looks and works perfectly on all devices.",
    icon: "device",
  },
  {
    title: "Modern Design",
    description: "Clean, contemporary aesthetics that make a lasting impression.",
    icon: "palette",
  },
  {
    title: "Fast Turnaround",
    description: "Efficient workflow delivers quality results on schedule.",
    icon: "clock",
  },
  {
    title: "User Friendly",
    description: "Intuitive navigation and experiences visitors love.",
    icon: "heart",
  },
  {
    title: "SEO Ready",
    description: "Built with search engine optimization from the ground up.",
    icon: "search",
  },
];
