"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/lib/data/projects";

const statusColors: Record<string, string> = {
  Active:           "bg-stone-900 dark:bg-white text-white dark:text-stone-900",
  Beta:             "bg-blue-600 text-white",
  "In Development": "bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300",
};

export default function Projects() {
  const { ref: headRef, inView: headIn } = useInView({ fallbackMs: 600 });
  const { ref: gridRef, inView: gridIn } = useInView({ threshold: 0.04, fallbackMs: 900 });

  return (
    <section id="work" className="bg-transparent py-12 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-8 lg:mb-16 section-hidden ${headIn ? "section-visible" : ""}`}
        >
          <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.3em] uppercase text-blue-600 font-bold block mb-3 sm:mb-4">
            Our Work
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 dark:text-white tracking-tight leading-[0.92]">
              WHAT WE<br />BUILD
            </h2>
            <div className="sm:text-right">
              <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed max-w-xs">
                Featured projects developed by our engineering team. Built for scale and impact.
              </p>
              <p className="text-[0.62rem] tracking-[0.1em] uppercase text-stone-400 dark:text-stone-600 mt-1.5">
                Placeholder — waiting for actual portfolio data
              </p>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 dark:bg-stone-800 border border-stone-200 dark:border-stone-800 section-hidden ${gridIn ? "section-visible" : ""}`}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white/70 dark:bg-stone-950/70 backdrop-blur-md flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-stone-100 dark:bg-stone-800 shrink-0">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                {project.status && (
                  <span className={`absolute top-3 left-3 text-[0.55rem] sm:text-[0.58rem] tracking-[0.14em] uppercase px-2 py-1 font-bold ${statusColors[project.status]}`}>
                    {project.status}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 lg:p-6">
                <h3 className="text-lg font-black text-stone-900 dark:text-white tracking-tight mb-2
                  group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 text-[0.83rem] leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech}
                      className="text-[0.58rem] tracking-[0.08em] uppercase text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 px-2 py-0.5">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link href={project.projectUrl ?? "#"}
                  className="inline-flex items-center gap-2 text-[0.72rem] tracking-[0.14em] uppercase text-stone-800 dark:text-stone-200 font-semibold
                    hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group/link touch-manipulation pb-1">
                  <span>View Project</span>
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1.5">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
