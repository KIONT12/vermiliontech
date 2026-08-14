const deliverables = [
  {
    title: "Business Websites",
    description:
      "Professional sites with clear messaging, fast load times, and layouts built to turn visitors into leads and customers.",
  },
  {
    title: "Web Applications",
    description:
      "Custom dashboards, booking systems, client portals, and tools designed around how your business actually operates.",
  },
  {
    title: "Custom Software",
    description:
      "One-of-a-kind digital products when off-the-shelf tools are not enough—scoped, designed, and built to fit your workflow.",
  },
];

export default function BondFeatures() {
  return (
    <section className="pro-section border-t border-white/[0.06] bg-[#0d1117]">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="pro-deliver-layout">
          <div className="pro-deliver-intro">
            <p className="pro-label">What we do</p>
            <h2 className="pro-section-title mt-3">
              We design and build the digital products your business runs on
            </h2>
            <div className="pro-deliver-copy mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
              <p>
                VermilionTech builds{" "}
                <strong className="font-medium text-zinc-200">websites</strong>,{" "}
                <strong className="font-medium text-zinc-200">web apps</strong>, and{" "}
                <strong className="font-medium text-zinc-200">custom software</strong> for
                businesses that need more than a template. Every project is tailored to your
                brand, your customers, and the results you want—whether that means more
                inquiries, online sales, or a smoother internal process.
              </p>
              <p>
                You work directly with the people building your product: clear communication,
                creative problem-solving, and clean code that performs on every device. No
                handoffs, no cookie-cutter solutions—just focused work built to launch and
                last.
              </p>
            </div>
          </div>

          <div className="pro-deliver-list">
            {deliverables.map((item, index) => (
              <article key={item.title} className="pro-deliver-row">
                <span className="pro-deliver-index">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
