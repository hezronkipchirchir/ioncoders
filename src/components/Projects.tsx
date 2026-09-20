"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import React from "react";

const projects = [
  {
    title: "Trading Bot Live",
    category: "FinTech / SaaS",
    description: "An automated cryptocurrency trading dashboard featuring real-time PnL analytics, active position monitoring, and historical win rate tracking. Built for high-frequency execution and live system status monitoring.",
    image: "/projects/trading-bot.png",
    link: "https://trading-bot.live",
    tech: ["Next.js", "WebSockets", "Tailwind CSS", "Node.js"],
  },
  {
    title: "CashFlowHubs",
    category: "Web Platform",
    description: "A comprehensive digital earning platform connecting users with remote jobs, paid surveys, and microtasks. Features a built-in token wallet, daily streak rewards, and a scalable referral network.",
    image: "/projects/cashflowhubs.png",
    link: "https://cashflowhubs.com",
    tech: ["React", "TypeScript", "Tailwind CSS", "API Integrations"],
  },
  {
    title: "TechSwiftTrix",
    category: "Corporate Website",
    description: "A high-performance corporate landing page for a software development firm. Designed to effectively communicate business-ready execution, transparent collaboration, and end-to-end service delivery models.",
    image: "/projects/techswifttrix.png",
    link: "https://techswifttrix.com",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
  }
];

export default function Projects() {
  const { ref: headerRef, inView: headerIn } = useInView({ fallbackMs: 200 });

  return (
    <section id="work" className="bg-transparent py-12 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div 
          ref={headerRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 md:mb-24 section-hidden ${headerIn ? "section-visible" : ""}`}
        >
          <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.3em] uppercase text-blue-600 font-bold block mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 dark:text-white tracking-tight leading-[0.9]">
            RECENT <br className="hidden sm:block" />
            <span className="text-stone-400 dark:text-stone-600">PROJECTS.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, index) => {
            // Use hooks individually inside a component, or just map without scroll animations for simplicity.
            // We'll use a simple CSS class approach for the list items to avoid hook rule violations.
            return (
              <ProjectCard key={index} project={project} index={index} />
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Extracted to avoid rule of hooks violation inside map
function ProjectCard({ project, index }: { project: any, index: number }) {
  const { ref, inView } = useInView({ fallbackMs: 300 + index * 100 });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`group flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center section-hidden ${inView ? "section-visible" : ""}`}
    >
      <div className="w-full lg:w-3/5 relative aspect-video overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900">
        <Image 
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-stone-900/5 dark:bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
      </div>

      <div className="w-full lg:w-2/5 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-stone-500 font-bold">
            0{index + 1}
          </span>
          <div className="h-[1px] w-8 bg-blue-600"></div>
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-blue-600 font-bold">
            {project.category}
          </span>
        </div>

        <h3 className="text-3xl sm:text-4xl font-black text-stone-900 dark:text-white tracking-tight mb-5">
          {project.title}
        </h3>
        
        <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[0.65rem] tracking-[0.1em] uppercase font-bold text-stone-500 dark:text-stone-400 border border-stone-200 dark:border-stone-800 px-3 py-1.5">
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-[0.7rem] tracking-[0.2em] uppercase font-bold text-stone-900 dark:text-white flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-500 transition-colors w-max"
          >
            View Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}
