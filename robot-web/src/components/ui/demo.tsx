'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight as MouseSpotlight } from "@/components/ui/spotlight-mouse"
import { motion } from "framer-motion"
import { Sparkles, Globe, Zap, Shield } from "lucide-react"

export function SplineSceneBasic() {
  return (
    <div className="w-full h-screen bg-black text-white relative overflow-hidden font-sans flex flex-col items-center justify-center">

      {/* 1. Underlying Dot Grid & Vignette Mask */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] opacity-30" />

      {/* 2. Interactive Spotlight over the whole screen */}
      <MouseSpotlight size={500} className="from-indigo-500/10 via-fuchsia-500/10 to-transparent z-0 pointer-events-none" />

      {/* 3. Deep ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Typography: Centered and positioned BEHIND the 3D model */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none text-center px-4 -mt-20">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl mb-8"
        >
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-indigo-500/20">
            <Sparkles className="w-3 h-3 text-indigo-400" />
          </span>
          <span className="text-xs sm:text-sm font-medium text-zinc-300 tracking-wide pr-2">
            Announcing Robot OS 2.0
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl sm:text-8xl md:text-[10rem] font-bold tracking-tighter text-white leading-[0.85] text-center"
        >
          FUTURE<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 via-fuchsia-400 to-rose-400 text-6xl sm:text-7xl md:text-[8rem]">
            IS NOW
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-400 max-w-xl font-light leading-relaxed tracking-wide mt-8"
        >
          Design, build, and scale immersive 3D robotics experiences seamlessly in your browser.
        </motion.p>
      </div>

      {/* 3D Scene: Placed perfectly in center, with z-index above the text! */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="w-full h-full max-w-5xl pointer-events-auto flex items-center justify-center"
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full object-contain pointer-events-auto mix-blend-screen drop-shadow-[0_0_60px_rgba(99,102,241,0.2)]"
          />
        </motion.div>
      </div>


    </div>
  )
}
