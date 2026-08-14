import { getIcon } from "@/components/ui/Icons";

const highlights = [
  {
    title: "Custom Development",
    description:
      "Every project is built to your specifications — no templates, no shortcuts.",
    icon: "palette",
  },
  {
    title: "Web Applications",
    description:
      "Scalable apps and platforms using modern frameworks and best practices.",
    icon: "rocket",
  },
  {
    title: "Business Websites",
    description:
      "Professional sites optimized for speed, search visibility, and lead generation.",
    icon: "sparkles",
  },
  {
    title: "Reliable Delivery",
    description:
      "Clear timelines, consistent communication, and production-ready code.",
    icon: "device",
  },
];

export default function BondFeatures() {
  return (
    <section className="pro-section border-t border-white/[0.06] bg-[#0d1117]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="pro-section-header max-w-2xl">
          <p className="pro-label">Capabilities</p>
          <h2 className="pro-section-title mt-3">What we deliver</h2>
          <p className="pro-section-desc mt-3">
            Full-service development for businesses that need a dependable partner —
            not a one-size-fits-all solution.
          </p>
        </div>

        <div className="pro-capability-grid mt-12">
          {highlights.map((item) => (
            <article key={item.title} className="pro-capability-item">
              <div className="pro-capability-icon text-red-500">
                {getIcon(item.icon, "h-5 w-5")}
              </div>
              <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
