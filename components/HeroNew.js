'use client'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { SiTiktok, SiThreads, SiLinkedin, SiPinterest, SiBluesky, SiGoogledrive, SiDropbox, SiGooglephotos, SiCanva, SiUnsplash, SiPexels, SiGiphy } from 'react-icons/si'
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

  // Media integrations — second marquee row (import sources).
  const integrations = [
    { name: 'Google Drive', icon: SiGoogledrive, color: '#0066DA', glow: '#0066DA' },
    { name: 'Dropbox', icon: SiDropbox, color: '#0061FF', glow: '#0061FF' },
    { name: 'Google Photos', icon: SiGooglephotos, color: '#4285F4', glow: '#4285F4' },
    { name: 'Canva', icon: SiCanva, color: '#00C4CC', glow: '#00C4CC' },
    { name: 'Unsplash', icon: SiUnsplash, color: 'var(--text-body)', glow: '#6366f1' },
    { name: 'Pexels', icon: SiPexels, color: '#05A081', glow: '#05A081' },
    { name: 'Giphy', icon: SiGiphy, color: '#9B5DE5', glow: '#9B5DE5' },
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

      <div className="relative z-10 flex-1 flex flex-col justify-center pt-28 pb-12">

        {/* Centered oversized statement */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--glass-bg)] border border-line backdrop-blur-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-muted text-xs sm:text-sm font-semibold tracking-wide">9 networks · 1 composer · 0 copy-paste</span>
          </motion.div>

          {/* Massive headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold text-body leading-[0.92] tracking-[-0.035em] mb-6"
          >
            Post once.<br />
            <span className="text-primary">Reach </span>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px var(--text-body)' }}>everyone.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted max-w-3xl mx-auto mb-9 leading-relaxed"
          >
            All your social accounts, one dashboard. Compose a post once and we&apos;ll publish it to Instagram, TikTok, YouTube, X and five more — with scheduling, AI captions, live streaming and analytics built in.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={siteConfig.dashboard}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-violet-500 text-white text-lg font-semibold rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Started Free
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--glass-bg)] backdrop-blur-sm text-body text-lg font-semibold rounded-2xl border border-line-strong hover:border-primary/50 transition-all duration-300"
            >
              View pricing
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-sm text-subtle"
          >
            Free to start · No credit card · Live in under a minute
          </motion.p>
        </div>

        {/* Kinetic marquee — row 1: social networks · row 2: integrations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 sm:mt-20 flex flex-col gap-4"
        >
          {[
            { list: platforms, reverse: false },
            // integrations doubled so the shorter list still fills the row width
            { list: [...integrations, ...integrations], reverse: true },
          ].map(({ list, reverse }, row) => (
            <div key={row} className="marquee-row marquee-mask overflow-hidden">
              <div className={`marquee-track ${reverse ? 'reverse' : ''}`}>
                {[...list, ...list].map((p, i) => (
                  <div
                    key={i}
                    className="mx-2 inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-[var(--glass-bg)] border border-line backdrop-blur-sm shrink-0"
                  >
                    <span
                      className="flex items-center justify-center w-9 h-9 rounded-xl shrink-0"
                      style={{ background: `color-mix(in srgb, ${p.glow} 14%, transparent)` }}
                    >
                      <p.icon style={{ color: p.color, fontSize: 20 }} />
                    </span>
                    <span className="text-body font-semibold text-base sm:text-lg whitespace-nowrap">{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
