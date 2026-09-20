"use client";

import Link from "next/link";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="contact"
      className="bg-stone-900 text-white py-32 lg:py-48"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-[0.7rem] tracking-[0.3em] uppercase text-blue-400 font-semibold block mb-6">
            Get In Touch
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8">
            LET&apos;S BUILD
            <br />
            <span className="text-blue-500">SOMETHING.</span>
          </h2>

          <p className="text-stone-400 text-lg leading-relaxed max-w-xl mb-12">
            Interested in technology, collaboration, or building something
            meaningful? Connect with IONCODERS — we&apos;d love to have you as
            part of the community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="mailto:hello@ioncoders.com"
              className="px-8 py-4 bg-blue-600 text-white text-[0.8rem] tracking-[0.15em] uppercase font-medium hover:bg-blue-500 transition-colors duration-200 text-center"
            >
              Get In Touch
            </Link>
            <Link
              href="#about"
              className="px-8 py-4 border border-stone-600 text-stone-300 text-[0.8rem] tracking-[0.15em] uppercase font-medium hover:border-stone-400 hover:text-white transition-colors duration-200 text-center"
            >
              Learn More
            </Link>
          </div>

          {/* Contact note */}
          <p className="text-stone-600 text-xs tracking-wide">
            * Contact details above are placeholders. Add your actual email,
            social profiles, and other channels here.
          </p>
        </div>
      </div>
    </section>
  );
}
