"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const activities = [
  {
    id: "p1",
    index: "01",
    title: "Discovery & Strategy",
    description: "We map out the requirements, define the target audience, and set clear milestones. A strong foundation prevents costly changes later.",
    detail: "Wireframes, Architecture Planning, Roadmapping"
  },
  {
    id: "p2",
    index: "02",
    title: "Design & Prototyping",
    description: "Our designers craft intuitive, accessible, and brand-aligned interfaces, creating interactive prototypes for your approval.",
    detail: "UI/UX, Figma Prototypes, Design Systems"
  },
  {
    id: "p3",
    index: "03",
    title: "Engineering & Development",
    description: "Our engineers build the product in agile sprints, ensuring clean code, robust testing, and regular updates.",
    detail: "Frontend & Backend Dev, API Integration, QA"
  },
  {
    id: "p4",
    index: "04",
    title: "Launch & Scale",
    description: "We handle the deployment, monitor performance, and provide ongoing support to help the software scale flawlessly.",
    detail: "CI/CD, Cloud Deployment, Maintenance"
  }
];

export default function Process() {
  const { ref: headRef, inView: headIn } = useInView({ fallbackMs: 600 });
  const { ref: listRef, inView: listIn } = useInView({ threshold: 0.04, fallbackMs: 900 });

  return (
    <section id="process" className="bg-transparent py-12 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-10 lg:mb-16 section-hidden ${headIn ? "section-visible" : ""}`}
        >
          <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.3em] uppercase text-blue-600 font-bold block mb-3 sm:mb-4">
            Our Process
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 dark:text-white tracking-tight leading-[0.92]">
              HOW WE<br />WORK
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed max-w-xs">
              A transparent, agile workflow designed to deliver results on time and within budget.
            </p>
          </div>
        </div>

        {/* Two-column: list + images */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">

          {/* Activity list — 2/3 */}
          <div
            ref={listRef as React.RefObject<HTMLDivElement>}
            className={`lg:col-span-2 divide-y divide-stone-200 dark:divide-stone-800 section-hidden ${listIn ? "section-visible" : ""}`}
          >
            {activities.map((activity) => (
              <div key={activity.id}
                className="group py-5 sm:py-6 hover:pl-2 transition-all duration-200">
                <div className="flex items-start gap-4 sm:gap-5">
                  <span className="text-[0.6rem] sm:text-[0.62rem] tracking-[0.2em] text-stone-400 dark:text-stone-600 font-bold pt-1 shrink-0 w-5">
                    {activity.index}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <h3 className="text-lg sm:text-xl font-black text-stone-900 dark:text-white tracking-tight
                        group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {activity.title}
                      </h3>
                      <span className="hidden sm:block h-px w-6 bg-stone-200 dark:bg-stone-700 mt-3 shrink-0
                        group-hover:w-10 group-hover:bg-blue-600 transition-all duration-300" />
                    </div>
                    <p className="text-stone-600 dark:text-stone-400 text-[0.82rem] sm:text-sm leading-relaxed mb-2">
                      {activity.description}
                    </p>
                    <p className="text-stone-500 dark:text-stone-500 text-[0.7rem] sm:text-xs leading-relaxed italic">
                      {activity.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar — 1/3 — hidden on mobile to save space */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="relative flex-1 min-h-[220px] overflow-hidden bg-stone-100 dark:bg-stone-800">
              <Image
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80"
                alt="Strategy session"
                fill className="object-cover"
                sizes="25vw"
              />
            </div>
            <div className="relative h-40 overflow-hidden bg-stone-100 dark:bg-stone-800">
              <Image
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
                alt="Development in progress"
                fill className="object-cover"
                sizes="25vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
