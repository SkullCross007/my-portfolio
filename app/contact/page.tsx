"use client";

import { motion } from "framer-motion";
import { url } from "inspector";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 mb-20"
      >
        <h1 className="text-6xl font-bold tracking-tighter">Let's connect.</h1>
        <p className="text-zinc-500 text-lg max-w-md mx-auto">
          Currently accepting new projects and collaborations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Side: Email & Resume (Takes up 7/12 of the space) */}
        <div className="md:col-span-7 space-y-16">
          <div className="group">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600 mb-6">
              Email Me
            </h2>
            <a 
              href="mailto:sahoo15subham@gmail.com" 
              className="relative z-50 flex items-center gap-3 group w-fit cursor-pointer no-underline"
            >
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-zinc-300 group-hover:text-red-600 transition-all duration-300">
                sahoo15subham@gmail.com
              </span>
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                className="text-red-600 flex-shrink-0 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <div>
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600 mb-6">
              Resume
            </h2>
            <a
              href="/Subham_Sahoo.pdf" // FIXED: Removed spaces. Rename your file in 'public' to match!
              download
              className="px-8 py-4 bg-red-600 text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 w-fit"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Side: Socials (Takes up 5/12 of the space) */}
        <div className="md:col-span-5 bg-zinc-900/30 border border-zinc-900 p-10 rounded-3xl space-y-8 h-fit">
  <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600">
    Socials
  </h2>
  <div className="grid grid-cols-1 gap-4">
    {[
      { name: "Behance", url: "https://www.behance.net/subhamsahoo2", src: "/behance.png" },
      { name: "Instagram", url: "https://www.instagram.com/yourprofile" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/subham-sahoo-426915202/", src: "/linkedin.png" },
      { name: "Youtube", url: "https://www.youtube.com/channel/UCWpi8UIuwQjYqsw86If5Ppw/videos", src: "/youtube.png" }
    ].map((social) => (
      <a
        key={social.name}
        href={social.url}
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice
        className="text-zinc-400 hover:text-white transition-colors text-lg font-medium flex items-center justify-between group"
      >
        {social.name}
        {/* Subtle arrow that appears on hover */}
        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600 text-sm">
          ↗
        </span>
      </a>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}