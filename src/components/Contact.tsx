"use client";

import { useInView } from "@/hooks/useInView";
import React, { useState } from "react";

export default function Contact() {
  const { ref: leftRef,  inView: leftIn  } = useInView({ fallbackMs: 600 });
  const { ref: rightRef, inView: rightIn } = useInView({ fallbackMs: 700 });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    
    // Add your Web3Forms Access Key here (via environment variable)
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");
    
    // Optional: Add a subject line for the email
    formData.append("subject", "New Project Inquiry from IONCODERS Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-transparent py-12 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* CTA */}
          <div
            ref={leftRef as React.RefObject<HTMLDivElement>}
            className={`section-hidden ${leftIn ? "section-visible" : ""}`}
          >
            <span className="text-[0.62rem] sm:text-[0.68rem] tracking-[0.3em] uppercase text-blue-600 font-bold block mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-stone-900 dark:text-white tracking-tight leading-[0.9] mb-5 sm:mb-6">
              LET'S BUILD<br />
              <span className="text-blue-600 dark:text-blue-500">SOMETHING.</span>
            </h2>
            <p className="text-stone-700 dark:text-stone-300 text-sm lg:text-base leading-relaxed mb-8 max-w-md">
              Ready to turn your idea into a digital reality? Reach out to us to discuss your project requirements, request a quote, or simply say hello.
            </p>
            
            <div className="space-y-4 text-sm text-stone-600 dark:text-stone-400">
              <p>
                <strong className="text-stone-900 dark:text-white uppercase tracking-wider text-[0.65rem]">Email:</strong><br />
                hello@ioncoders.tech
              </p>
              <p>
                <strong className="text-stone-900 dark:text-white uppercase tracking-wider text-[0.65rem]">Location:</strong><br />
                Nairobi, Kenya
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            ref={rightRef as React.RefObject<HTMLDivElement>}
            className={`section-hidden ${rightIn ? "section-visible" : ""}`}
          >
            <div className="border border-stone-200 dark:border-stone-800 p-6 sm:p-7 lg:p-9 bg-white/50 dark:bg-stone-950/50 backdrop-blur-sm">
              <p className="text-[0.62rem] sm:text-[0.65rem] tracking-[0.28em] uppercase text-stone-500 mb-5 sm:mb-6">
                Project Inquiry
              </p>

              {status === "success" ? (
                <div className="bg-stone-100 dark:bg-stone-900 border-l-4 border-blue-600 p-6">
                  <h3 className="text-lg font-bold text-stone-900 dark:text-white mb-2">Message Sent</h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400">Thank you for reaching out. A member of our team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[0.65rem] tracking-[0.1em] uppercase text-stone-500 font-bold">Name</label>
                      <input id="name" name="name" type="text" className="bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 p-3 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors text-stone-900 dark:text-white" placeholder="Jane Doe" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[0.65rem] tracking-[0.1em] uppercase text-stone-500 font-bold">Email</label>
                      <input id="email" name="email" type="email" className="bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 p-3 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors text-stone-900 dark:text-white" placeholder="jane@example.com" required />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-[0.65rem] tracking-[0.1em] uppercase text-stone-500 font-bold">Service Needed</label>
                    <select id="service" name="service" className="bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 p-3 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors text-stone-900 dark:text-white appearance-none">
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>UI/UX Design</option>
                      <option>Custom Software</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-[0.65rem] tracking-[0.1em] uppercase text-stone-500 font-bold">Project Details</label>
                    <textarea id="message" name="message" rows={4} className="bg-stone-50 dark:bg-stone-900/50 border border-stone-200 dark:border-stone-800 p-3 text-sm focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors text-stone-900 dark:text-white" placeholder="Tell us about your project goals and timeline..." required />
                  </div>
                  
                  {/* Honeypot field to prevent spam bots */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  {status === "error" && (
                    <p className="text-red-500 text-xs font-bold">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="mt-2 px-6 py-4 bg-blue-600 text-white text-[0.76rem] tracking-[0.14em] uppercase font-bold hover:bg-blue-500 active:scale-[.98] transition-all duration-200 w-full sm:w-auto self-start disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
