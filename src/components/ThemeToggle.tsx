"use client";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  // Pure CSS-driven icon toggle to prevent hydration mismatches and React mounting bugs on mobile.
  // The icons' visibility is controlled strictly by `[data-theme='dark']` in globals.css.
  function toggle() {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    const next = isDark ? "light" : "dark";
    localStorage.setItem("ioncoders-theme", next);
    document.documentElement.setAttribute("data-theme", next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle theme"
      className={`relative inline-flex items-center justify-center w-11 h-11 rounded-sm
        text-stone-600 dark:text-stone-400
        hover:text-stone-900 dark:hover:text-white
        hover:bg-stone-100 dark:hover:bg-stone-800
        active:scale-95
        transition-all duration-150 select-none touch-manipulation
        ${className}`}
    >
      {/* Sun icon — visible in dark mode (handled by CSS) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-sun absolute w-[18px] h-[18px] transition-all duration-300"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>

      {/* Moon icon — visible in light mode (handled by CSS) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon-moon absolute w-[17px] h-[17px] transition-all duration-300"
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
