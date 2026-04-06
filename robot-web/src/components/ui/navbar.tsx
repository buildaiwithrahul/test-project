'use client'

import { motion } from "framer-motion"
import { Bot, ChevronDown, Menu } from "lucide-react"

export function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center w-full px-4 pt-6 pointer-events-none"
    >
      <div className="w-full max-w-6xl flex items-center justify-between px-6 py-3 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)] pointer-events-auto">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:scale-105 transition-transform duration-300">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400">
            RobotOS
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">Products</span>
            <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          </div>
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">Solutions</span>
            <ChevronDown className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          </div>
          <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Documentation</a>
          <a href="#" className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">Pricing</a>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center text-sm font-semibold text-white px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md">
            Sign In
          </button>
          <button className="hidden md:flex items-center justify-center text-sm font-semibold text-black px-5 py-2.5 rounded-full bg-white hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)]">
            Start Free
          </button>
          
          <button className="md:hidden text-zinc-300 hover:text-white">
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>
    </motion.header>
  )
}
