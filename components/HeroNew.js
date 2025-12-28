'use client'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheck, FaInstagram, FaTiktok, FaYoutube, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import Navbar from './Navbar'

export default function Hero() {
  const platforms = [
    { name: 'Instagram', icon: FaInstagram, color: '#E1306C' },
    { name: 'TikTok', icon: FaTiktok, color: '#000000' },
    { name: 'YouTube', icon: FaYoutube, color: '#FF0000' },
    { name: 'Facebook', icon: FaFacebook, color: '#1877F2' },
    { name: 'X', icon: FaTwitter, color: '#000000' },
    { name: 'LinkedIn', icon: FaLinkedin, color: '#0A66C2' },
  ]

  return (
    <section className="relative min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Animated Mesh Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            x: [0, 150, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-600/40 to-pink-600/40 rounded-full filter blur-[120px]"
        ></motion.div>

        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 120, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/40 to-cyan-600/40 rounded-full filter blur-[120px]"
        ></motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/30 to-purple-600/30 rounded-full filter blur-[100px]"
        ></motion.div>
      </div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
           }}
      ></div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <div className="text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-8"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="text-white/80 text-sm font-medium">Cross-platform publishing made simple</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
              >
                <span className="inline-block">Post Once.</span>
                <span className="block mt-3 relative">
                  <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-purple-400 to-secondary opacity-50"></span>
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-secondary">
                    Reach Everyone.
                  </span>
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl text-gray-400 mb-8 leading-relaxed max-w-xl"
              >
                Publish to <span className="text-white font-semibold">Instagram, Facebook, Threads, TikTok, and YouTube</span> from one unified platform. Mobile app, web dashboard, or developer API.
              </motion.p>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {['5 Platforms Live', 'Posts, Stories & Reels', 'Asset Library', 'Workspaces'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/10">
                    <FaCheck className="text-green-400 text-sm" />
                    <span className="text-white/90 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#pricing"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="https://docs.kabonshare.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg border border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  View Documentation
                </a>
              </motion.div>
            </div>

            {/* Right Column - Platform Grid */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Decorative glow behind cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              
              <div className="relative grid grid-cols-3 gap-5">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + (index * 0.08),
                      type: "spring",
                      stiffness: 120
                    }}
                    whileHover={{ 
                      y: -16, 
                      scale: 1.05,
                      transition: { duration: 0.3, type: "spring", stiffness: 300 }
                    }}
                    className="group relative bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-xl rounded-3xl p-8 border border-white/[0.15] hover:border-white/30 transition-all duration-300 cursor-pointer overflow-hidden aspect-square flex items-center justify-center"
                    style={{
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {/* Animated gradient background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div 
                        className="absolute inset-0 rounded-3xl" 
                        style={{ 
                          background: `radial-gradient(circle at 50% 50%, ${platform.color}20, transparent 70%)`,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      ></motion.div>
                    </div>

                    {/* Shimmer sweep */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-3xl">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{
                          x: '200%',
                          transition: { duration: 0.8, ease: "easeInOut" }
                        }}
                      ></motion.div>
                    </div>

                    {/* Top shine effect */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    
                    <div className="relative flex flex-col items-center gap-4 z-10">
                      <motion.div
                        className="relative"
                        whileHover={{ 
                          rotate: [0, -8, 8, -8, 0],
                          scale: 1.15
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* Icon glow */}
                        <div 
                          className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                          style={{ backgroundColor: platform.color }}
                        ></div>
                        <platform.icon 
                          className="text-6xl transition-all duration-300 relative z-10 drop-shadow-2xl" 
                          style={{ color: platform.color === '#000000' ? 'white' : platform.color }}
                        />
                      </motion.div>
                      <span className="text-white font-bold text-base tracking-wide text-center opacity-90 group-hover:opacity-100 transition-opacity">
                        {platform.name}
                      </span>
                    </div>

                    {/* Corner shine accent */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/[0.15] to-transparent rounded-bl-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Bottom glow */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${platform.color}60, transparent)`
                      }}
                    ></div>
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
            className="mt-20 pt-12 border-t border-white/10"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 text-center lg:text-left">
              {[
                { value: '10K+', label: 'Active Users' },
                { value: '7+', label: 'Platforms' },
                { value: '99.9%', label: 'Uptime' },
                { value: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + (index * 0.1) }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="text-4xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
