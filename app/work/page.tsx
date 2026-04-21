"use client"

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const categories = [
  { 
    name: "Blender", 
    path: "/work/blender", 
    image: "/blender.png", // Your file in /public
    hoverColor: "group-hover:text-[#EA8024]" 
  },
  { 
    name: "Unreal Engine", 
    path: "/work/unreal", 
    image: "/unreal engine .png", 
    hoverColor: "group-hover:text-red-600",
    isUnreal: true // Special flag for the filter
  },
  { 
    name: "Figma", 
    path: "/work/figma", 
    image: "/figma.png", 
    hoverColor: "group-hover:text-[#F24E1E]" 
  },
  { 
    name: "Photoshop", 
    path: "/work/photoshop", 
    image: "/photoshop.png", 
    hoverColor: "group-hover:text-[#31A8FF]" 
  },
]

export default function WorkPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <h1 className="text-6xl font-bold tracking-tighter mb-4">Selected Work</h1>
        <p className="text-zinc-500 text-lg">Categorized by tool and medium.</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={cat.path}>
              <div className="group relative p-12 rounded-3xl border border-zinc-900 bg-zinc-900/20 flex flex-col items-center justify-center gap-6 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/40">
                
                {/* Image Icon Container */}
                <div className={`relative w-16 h-16 transition-all duration-500 grayscale group-hover:grayscale-0 
                  ${cat.isUnreal ? 'invert brightness-200 group-hover:invert-[.2] group-hover:sepia group-hover:saturate-[10000%] group-hover:hue-rotate-[0deg]' : ''}`}
                >
                  <Image 
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center">
                  <h2 className={`text-xl font-bold tracking-widest uppercase mb-2 transition-colors ${cat.hoverColor}`}>
                    {cat.name}
                  </h2>
                  <p className="text-zinc-600 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    View Projects —&gt;
                  </p>
                </div>

                {/* Subtle Background Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}