'use client'
import { motion } from 'framer-motion'
import { FaArrowRight, FaCheck } from 'react-icons/fa'
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { SiTiktok, SiThreads, SiLinkedin, SiPinterest, SiBluesky } from 'react-icons/si'
import { BsTwitterX } from 'react-icons/bs'
import Link from 'next/link'
import Navbar from './Navbar'
import { siteConfig } from '../config/siteConfig'

export default function Hero() {
  // color = the icon color (brand-black platforms use the body token so they're
  // white on dark / near-black on light). glow = the hover tint/glow — brand
  // color for colored platforms, accent indigo for black brands (a black glow
  // reads as a dirty grey smudge on light).
  const platforms = [
    { name: 'Instagram', icon: FiInstagram, color: '#E1306C', glow: '#E1306C' },
    { name: 'TikTok', icon: SiTiktok, color: 'var(--text-body)', glow: '#6366f1' },
    { name: 'YouTube', icon: FiYoutube, color: '#FF0000', glow: '#FF0000' },
    { name: 'Facebook', icon: FiFacebook, color: '#1877F2', glow: '#1877F2' },
    { name: 'Threads', icon: SiThreads, color: 'var(--text-body)', glow: '#6366f1' },
    { name: 'X', icon: BsTwitterX, color: 'var(--text-body)', glow: '#6366f1' },
    { name: 'LinkedIn', icon: SiLinkedin, color: '#0A66C2', glow: '#0A66C2' },
    { name: 'Bluesky', icon: SiBluesky, color: '#0285FF', glow: '#0285FF' },
    { name: 'Pinterest', icon: SiPinterest, color: '#E60023', glow: '#E60023' },
  ]

  // Washed platform-logo watermarks scattered behind the hero (like the Live
  // Followers page). Rendered at very low opacity via the theme-aware token.
  const bgLogos = [
    { Icon: FiInstagram, top: '14%', left: '5%',  size: 88, rotate: -12 },
    { Icon: SiTiktok,    top: '70%', left: '13%', size: 66, rotate: 9 },
    { Icon: SiPinterest, top: '46%', left: '27%', size: 60, rotate: 14 },
    { Icon: FiFacebook,  top: '20%', left: '45%', size: 74, rotate: 12 },
    { Icon: FiYoutube,   top: '84%', left: '42%', size: 96, rotate: -7 },
    { Icon: SiThreads,   top: '9%',  left: '66%', size: 78, rotate: 8 },
    { Icon: SiBluesky,   top: '86%', left: '70%', size: 90, rotate: -9 },
    { Icon: SiLinkedin,  top: '28%', left: '90%', size: 66, rotate: 6 },
    { Icon: BsTwitterX,  top: '60%', left: '86%', size: 80, rotate: -10 },
  ]

  return (
    <section className="relative min-h-screen flex flex-col bg-page overflow-hidden">
      <Navbar />

      {/* Animated Mesh Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 150, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full filter blur-[120px]"
          style={{ background: 'linear-gradient(to bottom right, var(--blob-1a), var(--blob-1b))' }}
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 120, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -left-40 w-[700px] h-[700px] rounded-full filter blur-[120px]"
          style={{ background: 'linear-gradient(to top right, var(--blob-2a), var(--blob-2b))' }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full filter blur-[100px]"
          style={{ background: 'linear-gradient(to bottom right, var(--blob-3a), var(--blob-3b))' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle, var(--dot-grid) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      {/* Washed platform-logo watermarks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ opacity: 0.06 }}>
        {bgLogos.map(({ Icon, top, left, size, rotate }, i) => (
          <Icon
            key={i}
            className="absolute"
            style={{ top, left, fontSize: size, color: 'var(--dot-grid)', transform: `rotate(${rotate}deg)` }}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 w-full">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Content */}
            <div className="text-left">
              
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-[var(--glass-bg)] backdrop-blur-sm px-4 py-2 rounded-full border border-[var(--glass-border)] mb-8"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-muted text-sm font-medium">Cross-platform publishing made simple</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-body mb-6 leading-[1.1] tracking-tight"
              >
                <span className="inline-block">Post Once.</span>
                <span className="block mt-2 relative">
                  <span className="absolute inset-0 blur-2xl hero-gradient-glow opacity-40" />
                  <span className="relative hero-gradient-text">
                    Reach Everyone.
                  </span>
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-muted mb-10 leading-relaxed max-w-xl"
              >
                Publish to <span className="text-body font-semibold">9 platforms</span> — Instagram, TikTok, YouTube, Facebook, X, Threads, LinkedIn, Bluesky & Pinterest — from one place.
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
                <Link
                  href="/pricing"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--glass-bg)] backdrop-blur-sm text-body font-semibold rounded-xl border border-[var(--glass-border)] hover:bg-surface transition-all duration-300"
                >
                  View Pricing
                </Link>
              </motion.div>

              {/* Feature pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {['9 Platforms Live', 'Posts, Stories & Reels', 'Team Collaboration', 'Asset Library'].map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 bg-[var(--glass-bg)] backdrop-blur-sm px-4 py-2 rounded-lg border border-[var(--glass-border)]">
                    <FaCheck className="text-emerald-400 text-xs" />
                    <span className="text-muted text-sm font-medium">{feature}</span>
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
                    className="group relative glass-card rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden aspect-square flex items-center justify-center"
                    style={{ boxShadow: 'var(--card-shadow)' }}
                  >
                    {/* Hover tint — a soft brand-colored wash centered on the icon
                        (not a dark overlay, so it stays clean on light mode) */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(circle at 50% 42%, color-mix(in srgb, ${platform.glow} 22%, transparent), transparent 72%)` }}
                    />

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
                          style={{ backgroundColor: platform.glow }}
                        />
                        <platform.icon 
                          className="text-5xl transition-all duration-300 relative z-10 drop-shadow-lg" 
                          style={{ color: platform.color }}
                        />
                      </motion.div>
                      <span className="text-body font-semibold text-sm tracking-wide text-center opacity-80 group-hover:opacity-100 transition-opacity">
                        {platform.name}
                      </span>
                    </div>

                    {/* Bottom glow */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, color-mix(in srgb, ${platform.glow} 55%, transparent), transparent)` }}
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
            className="mt-10 pt-8 border-t border-line"
          >
            <div className="flex flex-wrap justify-center lg:justify-start gap-12 text-center lg:text-left">
              {[
                { value: '9+', label: 'Social Platforms' },
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
                  <div className="text-3xl font-bold text-body mb-1">{stat.value}</div>
                  <div className="text-subtle text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
