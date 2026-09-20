

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const focuses = [
  "Web Development",
  "Software Dev",
  "AI & Data",
  "UI/UX Design",
  "Mobile Apps",
  "Cloud & DevOps",
];

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-stone-200 dark:border-stone-900 mt-10 lg:mt-0">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">

        {/* Main footer body */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 py-12 lg:py-14 border-b border-stone-200 dark:border-stone-900">

          {/* Brand */}
          <div className="md:col-span-4">
            <p className="text-[0.85rem] font-bold tracking-[0.22em] text-stone-900 dark:text-white uppercase mb-2">
              IONCODERS
            </p>
            <p className="text-[0.65rem] sm:text-[0.7rem] tracking-[0.2em] uppercase text-stone-500 mb-4 sm:mb-5">
              Code. Connect. Create.
            </p>
            <p className="text-stone-600 dark:text-stone-500 text-xs sm:text-sm leading-relaxed max-w-xs">
              A specialized group of software engineers and designers building high-performance solutions for businesses and startups.
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-[0.62rem] tracking-[0.28em] uppercase text-stone-900 dark:text-stone-600 font-bold mb-4">
              Navigate
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[0.78rem] tracking-[0.08em] text-stone-500 dark:text-stone-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 w-max touch-manipulation pb-1"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Focus Areas */}
          <div className="md:col-span-3">
            <p className="text-[0.62rem] tracking-[0.28em] uppercase text-stone-900 dark:text-stone-600 font-bold mb-4">
              Our Expertise
            </p>
            <div className="flex flex-wrap gap-2">
              {focuses.map((f) => (
                <span
                  key={f}
                  className="text-[0.6rem] sm:text-[0.62rem] tracking-[0.08em] uppercase text-stone-600 dark:text-stone-500 border border-stone-200 dark:border-stone-800 bg-white/50 dark:bg-stone-950/50 px-2.5 py-1"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <p className="text-[0.62rem] tracking-[0.28em] uppercase text-stone-900 dark:text-stone-600 font-bold mb-4">
              Connect
            </p>
            <p className="text-[0.75rem] text-stone-500 italic mb-2">
              — Add real social links here —
            </p>
            <p className="text-[0.65rem] text-stone-500 leading-relaxed max-w-xs">
              GitHub, Twitter/X, LinkedIn.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 sm:py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2">
          <p className="text-[0.68rem] tracking-[0.1em] text-stone-500 dark:text-stone-600">
            © 2026 IONCODERS. All rights reserved.
          </p>
          <p className="text-[0.6rem] sm:text-[0.68rem] tracking-[0.12em] text-stone-600 dark:text-stone-700 uppercase">
            Built by IONCODERS
          </p>
        </div>
      </div>
    </footer>
  );
}
