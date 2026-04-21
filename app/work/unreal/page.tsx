// app/work/blender/page.tsx (Repeat this for Unreal, Figma, etc.)
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SkillPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* BACK BUTTON */}
        <Link href="/work" className="text-zinc-500 hover:text-white transition-colors text-xs uppercase tracking-widest mb-12 inline-block">
          ← Back to Work
        </Link>

        {/* TITLE SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Unreal <span className="text-red-600">Stories</span>.
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
            A collection of high-fidelity 3D models and architectural visualizations 
            created using Unreal. Focused on lighting, texturing, and realistic geometry.
          </p>
        </motion.div>

        {/* MAIN FEATURE IMAGE */}
        <section className="mb-20">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-zinc-900">
            <Image 
              src="/unreal1.png" // CHANGE THIS per page (e.g., /blender-hero.jpg)
              alt="Main Render"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* PROJECT DETAILS GRID */}
        <section className="grid md:grid-cols-2 gap-12 border-t border-zinc-900 pt-12">
          <div>
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">The Process</h2>
            <p className="text-zinc-400">
              I utilize a non-destructive workflow in Blender, focusing on high-poly 
              sculpting followed by optimized retopology for game-ready assets.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4">Tools Used</h2>
            <ul className="text-zinc-400 space-y-2">
              <li>• Cycles / Eevee Rendering</li>
              <li>• Geometry Nodes</li>
              <li>• Hard Surface Modeling</li>
            </ul>
          </div>
        </section>

      </div>
    </main>
  );
}