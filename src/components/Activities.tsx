"use client";

import { useInView } from "@/hooks/useInView";
import { activities } from "@/lib/data/activities";

export default function Activities() {
  const { ref: headRef, inView: headIn } = useInView();
  const { ref: listRef, inView: listIn } = useInView({ threshold: 0.05 });

  return (
    <section className="bg-stone-50 py-24 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headRef as React.RefObject<HTMLDivElement>}
          className={`mb-16 lg:mb-20 transition-all duration-700 ease-out ${
            headIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[0.7rem] tracking-[0.3em] uppercase text-blue-600 font-semibold block mb-4">
            Activities
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-stone-900 tracking-tight leading-[0.95]">
              WHAT WE
              <br />
              DO
            </h2>
            <p className="text-stone-400 text-sm max-w-xs sm:text-right">
              Regular events and activities that keep the community active,
              learning, and building.
            </p>
          </div>
        </div>

        {/* Activity list */}
        <div
          ref={listRef as React.RefObject<HTMLDivElement>}
          className={`divide-y divide-stone-200 transition-all duration-700 delay-100 ease-out ${
            listIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group grid grid-cols-12 items-center gap-4 py-7 hover:bg-white hover:px-6 hover:-mx-6 transition-all duration-200"
            >
              {/* Index */}
              <span className="col-span-2 sm:col-span-1 text-[0.7rem] tracking-[0.2em] text-stone-300 font-medium">
                {activity.index}
              </span>

              {/* Title */}
              <h3 className="col-span-10 sm:col-span-4 text-xl sm:text-2xl font-black text-stone-900 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
                {activity.title}
              </h3>

              {/* Divider — hidden on small */}
              <div className="hidden sm:block sm:col-span-1 h-px bg-stone-200" />

              {/* Description */}
              <p className="col-span-12 sm:col-span-6 text-stone-400 text-sm leading-relaxed pl-8 sm:pl-0">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
