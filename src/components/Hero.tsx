"use client";


import Image from "next/image";

const stats = [
  { value: "10+",       label: "Projects Delivered" },
  { value: "100%",      label: "Client Satisfaction" },
  { value: "5+",        label: "Core Experts" },
  { value: "Kenya",     label: "Based In" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-transparent">

      {/* ── Blue accent stripe (top-right) ── */}
      <div
        className="absolute top-0 right-0 w-1 h-full bg-blue-600 opacity-60"
        aria-hidden="true"
      />

      {/* ── Main content ── */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto w-full px-5 lg:px-10 pt-20 pb-10 lg:pt-0 lg:pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full lg:min-h-[calc(100vh-4rem)]">

          {/* LEFT — text */}
          <div className="flex flex-col justify-center order-2 lg:order-1 pb-4 lg:pb-0">

            <span className="anim-fade-up inline-flex items-center gap-2 text-[0.62rem] sm:text-[0.68rem] tracking-[0.3em] uppercase text-blue-600 font-bold mb-4 sm:mb-5">
              <span className="w-5 h-px bg-blue-600" />
              Expert Developers Group
            </span>

            <h1 className="anim-fade-up-d1 font-black tracking-tight text-stone-900 dark:text-white leading-[0.88] mb-4 sm:mb-5
              text-5xl xs:text-[4rem] sm:text-7xl lg:text-[7.5rem] xl:text-[8.5rem]">
              ION<br />
              <span className="text-blue-600">COD</span>ERS
            </h1>

            <p className="anim-fade-up-d2 text-[0.7rem] sm:text-[0.8rem] tracking-[0.28em] uppercase text-stone-500 dark:text-stone-400 font-medium mb-6 sm:mb-7 border-l-2 border-blue-600 pl-4">
              Code.&nbsp; Connect.&nbsp; Create.
            </p>

            <p className="anim-fade-up-d3 text-sm lg:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-[420px] mb-8">
              A specialized group of software engineers and designers building high-performance web, mobile and custom software solutions for businesses and startups.
            </p>

            <div className="anim-fade-up-d4 flex flex-col sm:flex-row gap-3 mb-8 sm:mb-10">
              <a
                href="#work"
                className="px-6 py-3.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900
                  text-[0.76rem] tracking-[0.15em] uppercase font-semibold
                  hover:bg-blue-600 dark:hover:bg-stone-100
                  active:scale-[.97] transition-all duration-200 text-center touch-manipulation"
              >
                View Our Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3.5 border border-stone-300 dark:border-stone-700
                  text-stone-700 dark:text-stone-300
                  text-[0.76rem] tracking-[0.15em] uppercase font-semibold
                  hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400
                  active:scale-[.97] transition-all duration-200 text-center touch-manipulation"
              >
                Work With Us
              </a>
            </div>

            {/* Stats */}
            <div className="anim-fade-up-d5 grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5 border-t border-stone-200 dark:border-stone-800 pt-6 sm:pt-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="text-[0.62rem] tracking-[0.16em] uppercase text-stone-500 dark:text-stone-400">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="anim-fade-up-d2 order-1 lg:order-2 relative h-56 sm:h-72 lg:h-auto lg:min-h-[560px] lg:self-stretch w-full mt-4 lg:mt-0">
            <div className="absolute inset-0 lg:inset-y-16 overflow-hidden bg-stone-200 dark:bg-stone-800">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                alt="IONCODERS developers collaborating"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-stone-900/10" />
            </div>

            {/* Floating tag — bottom left */}
            <div className="absolute bottom-4 left-4 lg:bottom-20 lg:left-4 bg-white dark:bg-stone-900 px-3 py-2 lg:px-4 lg:py-3 border-l-2 border-blue-600 shadow-sm">
              <p className="text-[0.55rem] lg:text-[0.6rem] tracking-[0.2em] uppercase text-stone-500 dark:text-stone-400 mb-0.5">
                Quality
              </p>
              <p className="text-base lg:text-lg font-black text-stone-900 dark:text-white leading-none">
                Software
              </p>
            </div>

            {/* Floating tag — top right */}
            <div className="absolute top-4 right-4 lg:top-20 bg-blue-600 px-2 py-1.5 lg:px-3 lg:py-2 shadow-sm">
              <p className="text-[0.55rem] lg:text-[0.6rem] tracking-[0.2em] uppercase text-white font-bold">
                Available for Hire
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
