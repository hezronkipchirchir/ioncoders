"use client";

import Image from "next/image";

import { useInView } from "@/hooks/useInView";

const areas = [
  "Web Development", "Mobile Apps", "UI/UX Design",
  "Custom Software", "API Development", "Cloud Infrastructure",
  "E-commerce", "Consulting",
];

const values = [
  { title: "Frontend",     desc: "Fast, accessible, and responsive user interfaces using React, Next.js, and modern CSS." },
  { title: "Backend",      desc: "Robust APIs and scalable server architectures handling complex business logic and data." },
  { title: "Design",       desc: "Intuitive user experiences and beautiful interfaces that align with your brand identity." },
  { title: "Cloud",        desc: "Secure and scalable deployments using AWS, Google Cloud, and modern CI/CD pipelines." },
];

export default function Services() {
  const { ref: headRef, inView: headIn } = useInView({ fallbackMs: 600 });
  const { ref: bodyRef, inView: bodyIn } = useInView({ threshold: 0.04, fallbackMs: 900 });
  const { ref: valRef,  inView: valIn  } = useInView({ threshold: 0.04, fallbackMs: 1100 });

  return (
    <section id="services" className="bg-transparent py-12 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-10 lg:mb-16 section-hidden ${headIn ? "section-visible" : ""}`}
        >
          <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.3em] uppercase text-blue-600 font-bold block mb-3 sm:mb-4">
            Services
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 dark:text-white tracking-tight leading-[0.92]">
            OUR<br />EXPERTISE
          </h2>
        </div>

        {/* Image + text */}
        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 lg:mb-24 section-hidden ${bodyIn ? "section-visible" : ""}`}
        >
          {/* Image */}
          <div className="relative h-64 sm:h-[360px] lg:h-[460px] overflow-hidden bg-stone-100 dark:bg-stone-800 w-full">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=85"
              alt="IONCODERS team working on design"
              fill className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 bg-stone-900/85">
              <p className="text-white text-xs sm:text-sm font-medium leading-relaxed italic mb-1.5">
                "We bridge the gap between complex technical challenges and elegant, user-centric solutions."
              </p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-stone-700 dark:text-stone-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-5">
              We provide end-to-end software development services. By keeping our team highly specialized, we ensure that every product we touch is built to the highest industry standards.
            </p>
            <p className="text-stone-500 dark:text-stone-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              From the initial wireframes to the final server deployment, our experts handle the heavy lifting so you can focus on growing your business.
            </p>

            <p className="text-[0.6rem] sm:text-[0.66rem] tracking-[0.25em] uppercase text-stone-500 dark:text-stone-500 font-medium mb-3">
              Capabilities
            </p>
            <div className="h-px bg-stone-200 dark:bg-stone-800 mb-4 sm:mb-5" />
            <div className="flex flex-wrap gap-2 mb-8">
              {areas.map((area) => (
                <span key={area}
                  className="text-[0.62rem] sm:text-[0.7rem] tracking-[0.08em] uppercase text-stone-600 dark:text-stone-300
                    border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-900/50 backdrop-blur-sm px-3 py-1.5
                    hover:border-blue-600 dark:hover:border-blue-500
                    hover:text-blue-600 dark:hover:text-blue-400
                    transition-colors duration-200 cursor-default">
                  {area}
                </span>
              ))}
            </div>

            <a href="#contact"
              className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.15em] uppercase text-blue-600 font-bold hover:gap-4 transition-all duration-200 touch-manipulation py-2">
              Discuss your project <span>→</span>
            </a>
          </div>
        </div>

        {/* Values grid */}
        <div
          ref={valRef as React.RefObject<HTMLDivElement>}
          className={`section-hidden ${valIn ? "section-visible" : ""}`}
        >
          <p className="text-[0.6rem] sm:text-[0.66rem] tracking-[0.25em] uppercase text-stone-500 dark:text-stone-500 mb-4 sm:mb-6">
            Core Disciplines
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-800">
            {values.map((v) => (
              <div key={v.title}
                className="bg-white/70 dark:bg-stone-950/70 backdrop-blur-md p-5 sm:p-6 hover:bg-white dark:hover:bg-stone-900 transition-colors duration-200 group">
                <h4 className="text-base font-black text-stone-900 dark:text-white tracking-tight mb-2
                  group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {v.title}
                </h4>
                <div className="h-0.5 w-5 bg-blue-600 mb-3" />
                <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
