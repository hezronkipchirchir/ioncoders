"use client";

import { useInView } from "@/hooks/useInView";

const principles = [
  {
    id: "plan", index: "01", title: "DISCOVER", tagline: "Understand the problem.",
    description:
      "We don't just write code; we solve problems. We start by understanding your business, your users, and your goals to architect the right solution from day one.",
  },
  {
    id: "engineer", index: "02", title: "ENGINEER", tagline: "Robust architecture.",
    description:
      "Our team builds scalable, high-performance software using modern, reliable technology stacks. We prioritize clean code, security, and exceptional user experiences.",
  },
  {
    id: "deliver", index: "03", title: "DELIVER", tagline: "Ship and scale.",
    description:
      "We deliver functional, polished products on time. Post-launch, we provide the support and iteration needed to help your software scale gracefully alongside your business.",
  },
];

export default function About() {
  const { ref: secRef, inView } = useInView({ fallbackMs: 600 });

  return (
    <section id="about" className="bg-transparent py-12 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Heading + intro */}
        <div
          ref={secRef as React.RefObject<HTMLDivElement>}
          className={`mb-10 lg:mb-20 section-hidden ${inView ? "section-visible" : ""}`}
        >
          <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.3em] uppercase text-blue-600 font-bold block mb-4">
            About Us
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 dark:text-white tracking-tight leading-[0.92]">
              WHO<br />WE ARE
            </h2>
            <div className="space-y-4">
              <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                IONCODERS is a professional collective of technology experts based in Kenya. 
                We bring together specialized engineering and design talent to build digital 
                products that drive results.
              </p>
              <p className="text-stone-500 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
                Whether you are a startup looking to build your MVP, or an established enterprise 
                needing to scale your infrastructure, our team has the technical depth and creative 
                vision to bring your ideas to life.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-200 dark:bg-stone-800 mb-10 lg:mb-20" />

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:divide-x divide-stone-200 dark:divide-stone-800">
          {principles.map((p) => (
            <div key={p.id} className="md:px-8 lg:px-10 first:pl-0 last:pr-0">
              <span className="text-[0.62rem] tracking-[0.3em] text-stone-400 dark:text-stone-600 font-bold block mb-3">
                {p.index}
              </span>
              <h3 className="text-2xl lg:text-3xl font-black text-stone-900 dark:text-white tracking-tight mb-1">
                {p.title}
              </h3>
              <p className="text-[0.72rem] tracking-[0.12em] uppercase text-blue-600 font-bold mb-3">
                {p.tagline}
              </p>
              <div className="h-0.5 w-8 bg-blue-600 mb-3" />
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
