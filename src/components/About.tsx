"use client";

import { useInView } from "@/hooks/useInView";
import { Principle } from "@/lib/types";

const principles: Principle[] = [
  {
    id: "learn",
    title: "LEARN",
    description: "Grow through knowledge and experience. We embrace curiosity, share what we know, and push each other to go deeper.",
  },
  {
    id: "build",
    title: "BUILD",
    description: "Turn ideas into practical projects. We believe in creating things — products, tools, and solutions that make a difference.",
  },
  {
    id: "connect",
    title: "CONNECT",
    description: "Grow through collaboration and community. We are stronger together — supporting, motivating, and learning from each other.",
  },
];

export default function About() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: bodyRef, inView: bodyIn } = useInView();

  return (
    <section id="about" className="bg-white py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 lg:mb-24 transition-all duration-700 ease-out ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[0.7rem] tracking-[0.3em] uppercase text-blue-600 font-semibold block mb-4">
            About
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-end">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[0.95]">
              WHO
              <br />
              WE ARE
            </h2>
            <p className="text-stone-500 text-lg leading-relaxed max-w-lg">
              IONCODERS is a community built around technology, collaboration,
              and continuous learning. We bring together people who are
              passionate about coding and creating solutions through technology —
              from beginners taking their first steps to experienced engineers
              pushing boundaries.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-stone-100 mb-16 lg:mb-24" />

        {/* Principles */}
        <div
          ref={bodyRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-stone-100 transition-all duration-700 delay-150 ease-out ${
            bodyIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {principles.map((p, i) => (
            <div key={p.id} className="px-0 md:px-10 py-10 md:py-0 first:pl-0 last:pr-0">
              <span className="text-[0.65rem] tracking-[0.25em] text-stone-300 font-medium block mb-4">
                0{i + 1}
              </span>
              <h3 className="text-2xl font-black text-stone-900 tracking-tight mb-3">
                {p.title}
              </h3>
              <div className="h-0.5 w-8 bg-blue-600 mb-4" />
              <p className="text-stone-500 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
