"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { projects } from "@/lib/data/projects";

export default function Projects() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: gridRef, inView: gridIn } = useInView({ threshold: 0.05 });

  return (
    <section id="work" className="bg-stone-50 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 lg:mb-20 transition-all duration-700 ease-out ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[0.7rem] tracking-[0.3em] uppercase text-blue-600 font-semibold block mb-4">
            Our Work
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[0.95]">
              WHAT WE
              <br />
              BUILD
            </h2>
            <p className="text-stone-400 text-sm max-w-xs sm:text-right">
              Projects created by and for the IONCODERS community.
            </p>
          </div>
        </div>

        {/* Project grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 transition-all duration-700 delay-100 ease-out ${
            gridIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-white flex flex-col overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-stone-100">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                {project.isPlaceholder && (
                  <div className="absolute top-3 left-3 bg-stone-900 text-white text-[0.6rem] tracking-[0.15em] uppercase px-2 py-1">
                    Placeholder
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-xl font-black text-stone-900 tracking-tight mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[0.65rem] tracking-[0.1em] uppercase text-stone-400 border border-stone-200 px-2 py-0.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={project.projectUrl ?? "#"}
                  className="flex items-center gap-2 text-[0.75rem] tracking-[0.15em] uppercase text-stone-900 font-medium hover:text-blue-600 transition-colors duration-200 group/link"
                >
                  <span>View Project</span>
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
