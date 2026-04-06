'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight as MouseSpotlight } from "@/components/ui/spotlight-mouse"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function SplineSceneBasic() {
  return (
    <div className="w-full min-h-[85vh] relative overflow-hidden flex shadow-2xl border border-white/5 bg-gradient-to-tr from-black via-zinc-950 to-zinc-900 group">
      {/* Background Interactive Spotlight */}
      <MouseSpotlight size={400} className="from-indigo-500/20 via-purple-500/20 to-transparent" />

      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none opacity-50" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none opacity-50" />

      <div className="flex w-full h-full relative z-10 flex-col md:flex-row">
        {/* Left Content / Copy */}
        <div className="flex-1 p-8 md:p-16 lg:p-24 relative z-10 flex flex-col justify-center gap-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] w-fit backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-zinc-300 tracking-wide">Next Generation Web</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Immersive <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                3D Experiences
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-lg font-light leading-relaxed">
              Elevate your digital presence. Seamlessly integrate interactive 3D elements into your web applications to captivate users and boost engagement.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <button className="h-12 px-8 rounded-full bg-white text-black font-semibold tracking-wide hover:bg-zinc-200 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-12 px-8 rounded-full bg-white/5 text-white font-medium tracking-wide hover:bg-white/10 hover:border-white/20 border border-white/10 transition-all duration-300 backdrop-blur-md">
              View Showcase
            </button>
          </motion.div>
        </div>

        {/* Right Content / 3D Canvas */}
        <div className="flex-1 relative min-h-[400px] md:min-h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full object-cover mix-blend-screen opacity-90 drop-shadow-[0_0_30px_rgba(168,85,247,0.2)]"
          />
        </div>
      </div>
    </div>
  )
}
