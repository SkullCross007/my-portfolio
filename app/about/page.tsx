"use client"

import Image from "next/image";
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row gap-16 items-start pt-4">
        
        {/* Left Side: Large Title & Image Placeholder */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-8"
        >
          <h1 className="text-7xl font-bold tracking-tighter leading-none">
            subha<span className="text-red-600">m</span><br />
            <span className="text-zinc-800 text-5xl">Designer</span>
          </h1>
          
          <div className="aspect-[3/4] w-full bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden relative group">
  {/* The Image replaces the old placeholder div */}
  <Image
    src="/profile.jpg" // 1. Change this to your filename in the public folder
    alt="Subham Sahoo"
    fill
    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
        </motion.div>

        {/* Right Side: Your Story */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 space-y-10"
        >
          <section className="space-y-4">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-red-600">The Journey</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
             I’m a creative technologist focused on 3D visualization, UI/UX design, and interactive digital experiences. I work with tools like Blender, Unreal Engine, and modern web technologies to bring ideas to life. I enjoy combining design and technology to build visually engaging and user-friendly projects. <br /> I’m always learning and exploring new tools to improve my work and stay ahead.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600">What I Do</h2>
            <ul className="space-y-3 text-zinc-400 border-l border-zinc-900 pl-6">
              <li><strong className="text-white">3D Modeling:</strong> Hard surface and environmental assets in Blender.</li>
              <li><strong className="text-white">Game Dev:</strong> Building immersive scenes in Unreal Engine.</li>
              <li><strong className="text-white">UI/UX:</strong> Creating sleek, intuitive systems in Figma.</li>
              <li><strong className="text-white">Visuals:</strong> High-end post-processing in Photoshop.</li>
            </ul>
          </section>

          <section className="space-y-4 pt-10">
            <p className="text-zinc-500 italic text-sm">
              "Good design is not just what it looks like and feels like. Design is how it works."
            </p>
          </section>
        </motion.div>

      </div>
    </div>
  )
}