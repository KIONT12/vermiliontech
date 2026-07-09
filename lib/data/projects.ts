export type ProjectCategory =
  | "Business Websites"
  | "Landing Pages"
  | "E-Commerce"
  | "Custom Projects";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  technologies: string[];
  liveUrl: string;
  featured: boolean;
  spotlight?: boolean;
  gradient: string;
  industry: string;
  previewVariant?: "dark" | "light";
  previewImage?: string;
  previewVideo?: string;
  previewPoster?: string;
  livePreview?: boolean;
  previewMute?: boolean;
  /** Live iframe scale (0–1). Lower = smaller site, more content visible. */
  previewScale?: number;
  previewViewportWidth?: number;
  previewViewportHeight?: number;
}

export const projects: Project[] = [
  {
    id: "white-bkk-new-location",
    title: "WhiteAsh BKK – New Location",
    category: "Landing Pages",
    industry: "Retail & Lifestyle",
    description:
      "A location-focused landing page for WhiteAsh BKK's Ekkamai store — featuring interactive navigation, product menu, store details, and a premium brand experience optimized for desktop and mobile.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://whitebkk.vercel.app/new-location",
    featured: true,
    spotlight: true,
    gradient: "from-zinc-100 via-white to-zinc-300",
    previewVariant: "light",
    previewVideo: "/projects/whiteash-bkk.mp4",
    previewPoster: "/projects/whiteash-bkk.png",
  },
  {
    id: "gsoundz",
    title: "GSoundz Beatz",
    category: "Custom Projects",
    industry: "Music Production",
    description:
      "A music production platform for exclusive beats — featuring a beat catalog with audio previews, session booking, mix & master services, and a bold studio-inspired design across desktop and mobile.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Web Audio"],
    liveUrl: "https://gsoundz.vercel.app/",
    featured: true,
    spotlight: true,
    gradient: "from-purple-950 via-violet-900 to-indigo-950",
    previewVariant: "dark",
    livePreview: true,
    previewMute: true,
  },
  {
    id: "jd-mobile-detailing",
    title: "JD Mobile Detailing",
    category: "Business Websites",
    industry: "Automotive Services",
    description:
      "A mobile car detailing site for Columbia, TN — with service packages, before & after galleries, online booking, customer reviews, and click-to-call.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://jd-mobile-detailing.vercel.app/",
    featured: true,
    spotlight: true,
    gradient: "from-slate-900 via-blue-950 to-slate-800",
    previewVariant: "dark",
    previewImage: "/projects/jd-mobile-detailing.png",
  },
  {
    id: "jp-olive",
    title: "J. Parker Sports Agency",
    category: "Business Websites",
    industry: "Sports & Athlete Management",
    description:
      "A sports agency website for WNBA and international athlete representation — featuring roster, apparel, leadership profiles, and contact flows for elite women's basketball talent.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://jp-olive.vercel.app/",
    featured: true,
    spotlight: true,
    gradient: "from-amber-950 via-orange-900 to-zinc-900",
    previewVariant: "dark",
    previewImage: "/projects/jp-olive.png",
  },
  {
    id: "apex-fitness",
    title: "Apex Fitness Studio",
    category: "Business Websites",
    industry: "Health & Fitness",
    description:
      "A modern fitness studio website with class schedules, membership plans, and online booking integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    featured: false,
    gradient: "from-red-700 via-red-500 to-orange-400",
  },
  {
    id: "bloom-landing",
    title: "Bloom Marketing",
    category: "Landing Pages",
    industry: "Marketing Agency",
    description:
      "High-converting landing page for a digital marketing agency with lead capture and analytics.",
    technologies: ["React", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://example.com",
    featured: false,
    gradient: "from-red-800 via-red-600 to-red-400",
  },
  {
    id: "urban-eats",
    title: "Urban Eats",
    category: "E-Commerce",
    industry: "Food & Beverage",
    description:
      "Full-featured online ordering platform for a local restaurant chain with menu management.",
    technologies: ["Next.js", "Shopify", "TypeScript", "Sanity CMS"],
    liveUrl: "https://example.com",
    featured: false,
    gradient: "from-red-900 via-red-700 to-orange-500",
  },
  {
    id: "summit-realty",
    title: "Summit Realty Group",
    category: "Business Websites",
    industry: "Real Estate",
    description:
      "Professional real estate website with property listings, agent profiles, and contact forms.",
    technologies: ["Next.js", "TypeScript", "Mapbox", "Tailwind CSS"],
    liveUrl: "https://example.com",
    featured: false,
    gradient: "from-zinc-800 via-red-800 to-red-600",
  },
  {
    id: "launchpad-saas",
    title: "LaunchPad SaaS",
    category: "Landing Pages",
    industry: "Technology",
    description:
      "SaaS product landing page with pricing tiers, feature highlights, and demo request flow.",
    technologies: ["React", "TypeScript", "Framer Motion"],
    liveUrl: "https://example.com",
    featured: false,
    gradient: "from-red-900 via-red-700 to-red-500",
  },
  {
    id: "artisan-craft",
    title: "Artisan Craft Co.",
    category: "E-Commerce",
    industry: "Handmade Goods",
    description:
      "E-commerce storefront for handmade goods with custom product pages and secure checkout.",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "Prisma"],
    liveUrl: "https://example.com",
    featured: false,
    gradient: "from-orange-700 via-red-600 to-red-400",
  },
  {
    id: "coach-connect",
    title: "Coach Connect Platform",
    category: "Custom Projects",
    industry: "Sports & Coaching",
    description:
      "Custom athlete coaching platform with session scheduling, progress tracking, and client dashboards.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "AI Integration"],
    liveUrl: "https://example.com",
    featured: false,
    gradient: "from-red-800 via-red-600 to-orange-400",
  },
  {
    id: "legal-edge",
    title: "Legal Edge Partners",
    category: "Business Websites",
    industry: "Legal Services",
    description:
      "Corporate law firm website with practice area pages, attorney bios, and consultation booking.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Calendly"],
    liveUrl: "https://example.com",
    featured: false,
    gradient: "from-zinc-700 via-red-900 to-red-700",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Business Websites",
  "Landing Pages",
  "E-Commerce",
  "Custom Projects",
];

export function sortProjects(list: Project[]): Project[] {
  return [...list].sort(
    (a, b) => Number(b.spotlight ?? false) - Number(a.spotlight ?? false),
  );
}

export const featuredProjects = sortProjects(projects.filter((p) => p.featured));
