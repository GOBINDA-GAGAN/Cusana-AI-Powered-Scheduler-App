const testimonials = [
  {
    name: "@alexbuilds",
    text: "Built my first viral thread in under 30 days",
  },
  {
    name: "@marcusgrowth",
    text: "Best AI writing tool for X, nothing comes close",
  },
  {
    name: "@zoedesigns",
    text: "ConvoWise turned my rough notes into viral posts",
  },
  {
    name: "@samwriter",
    text: "Started at 800 followers. Hit 10K in 3 months",
  },
  {
    name: "@buildwithtom",
    text: "My content workflow is now 10x faster",
  },
];

export default function Testimonials() {
  const items = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-4">

      {/* Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-background to-transparent" />

      <div className="flex w-max animate-marquee gap-16">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm"
          >
            <span className="text-neutral-500">"</span>

            <span className="text-neutral-500">
              {item.text}
            </span>

            <span className="font-semibold text-black">
              {item.name}
            </span>

            <span className="text-neutral-500">"</span>
          </div>
        ))}
      </div>
    </section>
  );
}