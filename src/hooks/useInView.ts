"use client";

import { useEffect, useRef, useState } from "react";

interface InViewOptions {
  threshold?: number;
  once?: boolean;
  /** ms before forcing visible as fallback */
  fallbackMs?: number;
}

/**
 * Reliable IntersectionObserver hook.
 * Always becomes visible within `fallbackMs` (default 800ms)
 * even if the observer never fires.
 */
export function useInView(options: InViewOptions = {}) {
  const { threshold = 0.08, once = true, fallbackMs = 800 } = options;
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Guarantee visibility after fallbackMs no matter what
    const fallback = setTimeout(() => setInView(true), fallbackMs);

    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return () => clearTimeout(fallback);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          clearTimeout(fallback);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold, once, fallbackMs]);

  return { ref, inView };
}
