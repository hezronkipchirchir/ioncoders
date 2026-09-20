"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";
import { CommunityArea } from "@/lib/types";

const areas: CommunityArea[] = [
  { id: "web", label: "Web Development" },
  { id: "software", label: "Software Development" },
  { id: "ai", label: "AI & Data" },
  { id: "security", label: "Cybersecurity" },
  { id: "design", label: "Design" },
  { id: "innovation", label: "Innovation" },
];

export default function Community() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: bodyRef, inView: bodyIn } = useInView({ threshold: 0.1 });

  return (
    <section id="community" className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 lg:mb-20 transition-all duration-700 ease-out ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[0.7rem] tracking-[0.3em] uppercase text-blue-600 font-semibold block mb-4">
            Community
          </span>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[0.95]">
            BUILT
            <br />
            TOGETHER
          </h2>
        </div>

        {/* Body */}
        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start transition-all duration-700 delay-100 ease-out ${
            bodyIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Image */}
          <div className="relative h-[400px] lg:h-[520px] overflow-hidden bg-stone-100">
            <Image
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=85"
              alt="IONCODERS community members collaborating"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Right content */}
          <div className="flex flex-col justify-center">
            <p className="text-stone-500 text-lg leading-relaxed mb-10 max-w-md">
              IONCODERS is more than a study group — it&apos;s a place where
              diverse backgrounds, skill levels, and ideas come together. Whether
              you&apos;re a seasoned developer or just starting out, there&apos;s
              a place for you here. We learn from each other, push each other
              further, and build things that matter.
            </p>

            <div className="mb-3">
              <span className="text-[0.7rem] tracking-[0.25em] uppercase text-stone-400 font-medium">
                Areas of Focus
              </span>
            </div>
            <div className="h-px bg-stone-100 mb-6" />

            <div className="flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area.id}
                  className="text-[0.75rem] tracking-[0.1em] uppercase text-stone-700 border border-stone-200 px-4 py-2 hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 cursor-default"
                >
                  {area.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
