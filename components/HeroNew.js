'use client'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { SiTiktok, SiThreads } from 'react-icons/si'
import { BsTwitterX } from 'react-icons/bs'
import Navbar from './Navbar'
import { siteConfig } from '../config/siteConfig'

export default function Hero() {
  const platforms = [
    { name: 'Instagram', icon: FiInstagram, color: '#E1306C', bg: 'from-pink-500 to-rose-600' },
    { name: 'TikTok', icon: SiTiktok, color: '#ffffff', bg: 'from-slate-800 to-slate-900' },
    { name: 'YouTube', icon: FiYoutube, color: '#FF0000', bg: 'from-red-500 to-red-600' },
    { name: 'Facebook', icon: FiFacebook, color: '#1877F2', bg: 'from-blue-500 to-blue-600' },
    { name: 'Threads', icon: SiThreads, color: '#ffffff', bg: 'from-slate-700 to-slate-800' },
    { name: 'X', icon: BsTwitterX, color: '#ffffff', bg: 'from-slate-800 to-slate-900' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      <Navbar />

      {/* Animated Mesh Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 150, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full filter blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 120, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/30 to-cyan-600/30 rounded-full filter blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-full filter blur-[100px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-8"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-medium">Cross-platform publishing made simple</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
              >
                <span className="inline-block">Post Once.</span>
                <span className="block mt-2 relative">
                  <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-violet-400 to-secondary opacity-40" />
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-400 to-fuchsia-400">
                    Reach Everyone.
                  </span>
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed max-w-xl"
              >
                Publish to <span className="text-white font-semibold">Instagram, Facebook, Threads, TikTok, and YouTube</span> from one platform. Mobile app, web dashboard, or developer API.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <a
                  href={siteConfig.dashboard}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-primary to-violet-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get Started Free
                  <FaArrowRight className="text-sm group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  View Pricing
                </a>
              </motion.div>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {['5 Platforms Live', 'Posts, Stories & Reels', 'Asset Library', 'Workspaces'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/[0.04] backdrop-blur-sm px-4 py-2 rounded-lg border border-white/[0.06]">
                    <FaCheck className="text-emerald-400 text-xs" />
                    <span className="text-white/80 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Platform Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-violet-500/15 to-secondary/15 rounded-3xl blur-3xl" />
              
              <div className="relative grid grid-cols-3 gap-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.08), type: "spring", stiffness: 120 }}
                    whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.3, type: "spring", stiffness: 300 } }}
                    className="group relative bg-gradient-to-br from-white/[0.1] to-white/[0.03] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.1] hover:border-white/20 transition-all duration-300 cursor-pointer overflow-hidden aspect-square flex items-center justify-center"
                    style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.06)' }}
                  >
                    {/* Hover gradient */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute inset-0 bg-gradient-to-br ${platform.bg} opacity-20 rounded-2xl`} />
                    </div>

                    {/* Top shine */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    
                    <div className="relative flex flex-col items-center gap-3 z-10">
                      <motion.div
                        className="relative"
                        whileHover={{ rotate: [0, -6, 6, -6, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div 
                          className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"
                          style={{ backgroundColor: platform.color === '#ffffff' ? '#888' : platform.color }}
                        />
                        <platform.icon 
                          className="text-5xl transition-all duration-300 relative z-10 drop-shadow-lg" 
                          style={{ color: platform.color }}
                        />
                      </motion.div>
                      <span className="text-white font-semibold text-sm tracking-wide text-center opacity-80 group-hover:opacity-100 transition-opacity">
                        {platform.name}
                      </span>
                    </div>

                    {/* Bottom glow */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${platform.color === '#ffffff' ? '#888' : platform.color}60, transparent)` }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-20 pt-12 border-t border-white/[0.06]"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 text-center lg:text-left">
              {[
                { value: '5+', label: 'Social Platforms' },
                { value: '99.9%', label: 'Uptime' },
                { value: '<200ms', label: 'API Response' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="group"
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
