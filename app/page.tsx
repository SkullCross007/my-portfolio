"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// 1. Unified Project Data (Only defined ONCE)
const projects = [
  {
    title: "Skull Island",
    category: "Blender 3D",
    image: "/blender1.png", 
  },
  {
    title: "Adiyogi",
    category: "UE5",
    image: "/unreal1.png",
  },
  {
    title: "House",
    category: "Blender 3d",
    image: "/blender2.png",
  }
];

// 2. Double the projects for the infinite loop
const doubleProjects = [...projects, ...projects];

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row items-center justify-center py-10 md:py-24 gap-12 md:gap-20">
          <div className="max-w-sm space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter leading-tight">
              I am <span className="text-red-600">Subham</span>
              <br /> Sahoo <span className="text-red-600">.</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed">
              a designer focused on 3D modeling in Blender, game environments in
              Unreal Engine, and sleek UI/UX design.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="w-64 h-80 bg-zinc-900 rounded-2xl border border-zinc-800 relative overflow-hidden">
              <Image
                src="/temp-image.jpg"
                alt="Subham's Portrait"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="pt-16 pb-8 md:py-16 border-t border-zinc-900">
          <div className="flex justify-between items-center px-4 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale opacity-60">
                <Image src="/blender.png" alt="Blender" fill className="object-contain" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Blender</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative w-8 h-8 md:w-10 md:h-10">
                <Image 
                  src="/unreal.png" 
                  alt="Unreal Engine" 
                  fill 
                  className="object-contain brightness-0 invert opacity-60" 
                />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Unreal</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale opacity-60">
                <Image src="/figma.png" alt="Figma" fill className="object-contain" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Figma</span>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="relative w-8 h-8 md:w-10 md:h-10 grayscale opacity-60">
                <Image src="/photoshop.png" alt="Photoshop" fill className="object-contain" />
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-500">Photoshop</span>
            </div>
          </div>
        </section>

        {/* CAROUSEL SECTION */}
        <section className="pt-12 pb-16 md:py-24 relative overflow-hidden">
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-600 mb-12">
            Featured Work
          </h2>

          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

          <div className="flex overflow-hidden group">
            <motion.div
              className="flex gap-6 pr-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 20,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {doubleProjects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[300px] h-[400px] rounded-3xl p-8 flex flex-col justify-end border border-zinc-900 bg-zinc-900/40 relative overflow-hidden"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                  <div className="z-20">
                    <p className="text-red-600 text-[10px] font-bold tracking-widest uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}