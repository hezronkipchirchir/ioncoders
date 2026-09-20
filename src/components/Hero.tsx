"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function Hero() {
  const { ref: leftRef, inView: leftIn } = useInView({ threshold: 0.1 });
  const { ref: rightRef, inView: rightIn } = useInView({ threshold: 0.1 });

  return (
    <section className="min-h-screen bg-stone-50 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-4rem)]">
          {/* Left — text */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`flex flex-col justify-center transition-all duration-700 ease-out ${
              leftIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="text-[0.7rem] tracking-[0.3em] uppercase text-blue-600 font-semibold mb-6">
              Technology Community
            </span>

            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tight text-stone-900 leading-[0.9] mb-6">
              ION
              <br />
              <span className="text-blue-600">COD</span>
              ERS
            </h1>

            <p className="text-[0.85rem] tracking-[0.25em] uppercase text-stone-400 font-medium mb-8 border-l-2 border-blue-600 pl-4">
              Code.&nbsp;&nbsp;Connect.&nbsp;&nbsp;Create.
            </p>

            <p className="text-base lg:text-lg text-stone-500 leading-relaxed max-w-md mb-10">
              A community of developers, creators, and technology enthusiasts
              learning, building, and growing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#work"
                className="px-7 py-3.5 bg-stone-900 text-white text-[0.8rem] tracking-[0.15em] uppercase font-medium hover:bg-stone-700 transition-colors duration-200 text-center"
              >
                Explore Our Work
              </Link>
              <Link
                href="#contact"
                className="px-7 py-3.5 border border-stone-900 text-stone-900 text-[0.8rem] tracking-[0.15em] uppercase font-medium hover:bg-stone-900 hover:text-white transition-colors duration-200 text-center"
              >
                Join IONCODERS
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`relative h-[55vw] max-h-[600px] lg:h-full lg:min-h-[600px] transition-all duration-700 delay-200 ease-out ${
              rightIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden bg-stone-200">
              <Image
                src="https://images.unsplash.com/photo-1531498860502-7c67cf519b9e?w=900&q=85"
                alt="Developers collaborating and building together"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Subtle overlay to enhance text readability if needed */}
              <div className="absolute inset-0 bg-stone-900 opacity-10" />
            </div>

            {/* Floating label */}
            <div className="absolute bottom-6 left-6 bg-white px-4 py-3 border-l-2 border-blue-600">
              <p className="text-[0.7rem] tracking-[0.2em] uppercase text-stone-400">
                Since
              </p>
              <p className="text-lg font-black text-stone-900 leading-none">
                2024
              </p>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="hidden lg:flex items-center gap-3 pb-8 absolute bottom-0 left-10">
          <div className="h-px w-12 bg-stone-300" />
          <span className="text-[0.65rem] tracking-[0.2em] uppercase text-stone-400">
            Scroll to explore
          </span>
        </div>
      </div>
    </section>
  );
}
