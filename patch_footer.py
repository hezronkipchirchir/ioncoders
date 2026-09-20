import re

with open("src/components/Footer.tsx", "r") as f:
    content = f.read()

target = """          {/* Social */}
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
          </div>"""

replacement = """          {/* Social */}
          <div className="md:col-span-3">
            <p className="text-[0.62rem] tracking-[0.28em] uppercase text-stone-900 dark:text-stone-600 font-bold mb-4">
              Connect
            </p>
            <nav className="flex flex-col gap-2.5">
              <a href="https://github.com/ioncoders" target="_blank" rel="noopener noreferrer" className="text-[0.78rem] tracking-[0.08em] text-stone-500 dark:text-stone-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 w-max touch-manipulation pb-1">
                GitHub
              </a>
              <a href="https://tiktok.com/@ioncoders" target="_blank" rel="noopener noreferrer" className="text-[0.78rem] tracking-[0.08em] text-stone-500 dark:text-stone-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 w-max touch-manipulation pb-1">
                TikTok
              </a>
              <a href="https://instagram.com/ioncoders" target="_blank" rel="noopener noreferrer" className="text-[0.78rem] tracking-[0.08em] text-stone-500 dark:text-stone-400 hover:text-blue-600 dark:hover:text-white transition-colors duration-200 w-max touch-manipulation pb-1">
                Instagram
              </a>
            </nav>
          </div>"""

new_content = content.replace(target, replacement)

with open("src/components/Footer.tsx", "w") as f:
    f.write(new_content)

print("Footer updated!")
