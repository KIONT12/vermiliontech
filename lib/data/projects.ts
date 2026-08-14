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
    previewImage: "/projects/gsoundz-home.png",
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
    id: "new-force-basketball",
    title: "New Force Basketball Club",
    category: "Business Websites",
    industry: "Sports & Basketball",
    description:
      "A FIBA basketball club site for New Force — with roster pages, 3x3 tournament info, athlete development messaging, and contact flows for tryouts, partnerships, and sponsorships.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
    liveUrl: "https://print-off.vercel.app/",
    featured: true,
    spotlight: true,
    gradient: "from-zinc-950 via-red-950 to-black",
    previewVariant: "dark",
    livePreview: true,
    previewMute: true,
  },
];

export const projectCategories: ProjectCategory[] = [
  "Business Websites",
  "Landing Pages",
  "Custom Projects",
];

export function sortProjects(list: Project[]): Project[] {
  return [...list].sort(
    (a, b) => Number(b.spotlight ?? false) - Number(a.spotlight ?? false),
  );
}

export const featuredProjects = sortProjects(projects.filter((p) => p.featured));
