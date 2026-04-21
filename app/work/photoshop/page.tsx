"use client"

import { motion } from "framer-motion"
import Link from "next/link"

// This is where you will add your real project details later
const projects = [
  {
    title: "Project One Name",
    description: "A short description of what you made in Blender.",
    link: "https://www.behance.net/yourprofile", // Link to your Behance
    image: "bg-zinc-800" // Placeholder for now
  },
  {
    title: "Project Two Name",
    description: "Another cool 3D render or environment design.",
    link: "https://www.behance.net/yourprofile",
    image: "bg-zinc-900"
  },
  // Add as many projects as you want here
]

export default function BlenderPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      
      {/* HEADER & BACK BUTTON */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-16"
      >
        <Link href="/work" className="text-zinc-500 hover:text-red-600 text-xs font-bold tracking-widest uppercase transition-colors">
          ← Back to Selection
        </Link>
        <h1 className="text-5xl font-bold tracking-tighter mt-6">
          Photoshop <span className="text-zinc-500">Projects</span>
        </h1>
      </motion.div>

      {/* PROJECTS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            {/* THE CARD */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="space-y-4">
                {/* Image Placeholder */}
                <div className={`aspect-video w-full rounded-2xl ${item.image} border border-zinc-900 overflow-hidden relative`}>
                  <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs font-bold tracking-widest uppercase bg-black px-4 py-2 rounded-full border border-zinc-800">
                      View on Behance
                    </span>
                  </div>
                </div>

                {/* Text Details */}
                <div>
                  <h2 className="text-xl font-bold tracking-tight group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-zinc-500 text-sm leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}