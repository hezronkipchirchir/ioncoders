"use client";

import { useState, useEffect } from "react";

import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 dark:bg-stone-950/85 backdrop-blur-md border-b border-stone-200 dark:border-stone-800 py-3"
            : "bg-white dark:bg-stone-950 md:bg-transparent md:dark:bg-transparent border-b border-stone-200 dark:border-stone-800 md:border-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-10 flex items-center justify-between">
          
          <a href="/" className="flex items-center gap-2 group touch-manipulation z-50">
            <span className="text-[1.1rem] font-black tracking-[0.15em] text-stone-900 dark:text-white uppercase transition-colors group-hover:text-blue-600">
              IONCODERS
            </span>
            <span className="w-1.5 h-1.5 bg-blue-600 hidden sm:block" />
          </a>

          <div className="flex items-center gap-2 md:gap-8">
            <nav className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[0.72rem] tracking-[0.15em] font-bold uppercase text-stone-500 dark:text-stone-400
                    hover:text-stone-900 dark:hover:text-white transition-colors duration-200 pb-1 border-b-2 border-transparent hover:border-blue-600"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 lg:gap-5 z-50">
              <ThemeToggle />

              <a
                href="#contact"
                className="hidden md:flex px-5 py-2.5 bg-stone-900 dark:bg-white text-white dark:text-stone-900 
                  text-[0.7rem] tracking-[0.15em] uppercase font-bold hover:bg-blue-600 dark:hover:bg-stone-100 
                  active:scale-95 transition-all duration-200"
              >
                Hire Us
              </a>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden flex flex-col items-center justify-center w-11 h-11 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 touch-manipulation"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <div className={`w-5 h-px bg-stone-900 dark:bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-1"}`} />
                <div className={`w-5 h-px bg-stone-900 dark:bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[2px]" : "translate-y-1"}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-30 bg-stone-900/40 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-y-0 right-0 z-30 w-full sm:w-80 bg-white dark:bg-stone-950 border-l border-stone-200 dark:border-stone-800 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col pt-24 pb-8 px-6 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 mb-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[0.85rem] tracking-[0.2em] font-bold uppercase text-stone-900 dark:text-white
                border-b border-stone-100 dark:border-stone-900 pb-4 flex items-center justify-between"
            >
              {link.label}
              <span className="text-blue-600">→</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="px-6 py-4 bg-blue-600 text-white 
            text-[0.76rem] tracking-[0.15em] uppercase font-bold text-center touch-manipulation
            active:bg-blue-700 transition-colors"
        >
          Hire Us
        </a>
        
        <div className="mt-auto">
          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600">
            Code. Connect. Create.
          </p>
        </div>
      </div>
    </>
  );
}
