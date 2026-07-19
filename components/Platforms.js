'use client'
import { motion } from 'framer-motion'
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { SiTiktok, SiThreads, SiLinkedin, SiPinterest, SiBluesky } from 'react-icons/si'
import { BsTwitterX } from 'react-icons/bs'
import { HiOutlineCheck } from 'react-icons/hi'
import { siteConfig } from '../config/siteConfig'

const platforms = [
  {
    name: 'Instagram',
    features: ['Feed Posts', 'Carousels', 'Reels', 'Stories'],
    status: 'live',
    icon: FiInstagram,
    gradient: 'from-purple-500 via-pink-500 to-orange-500'
  },
  {
    name: 'Facebook',
    features: ['Page Posts', 'Stories', 'Reels', 'Albums'],
    status: 'live',
    icon: FiFacebook,
    gradient: 'from-blue-600 to-blue-500'
  },
  {
    name: 'Threads',
    features: ['Text Posts', 'Images', 'Videos', 'Carousels'],
    status: 'live',
    icon: SiThreads,
    gradient: 'from-gray-800 to-gray-700'
  },
  {
    name: 'TikTok',
    features: ['Videos', 'Photo Carousels'],
    status: 'live',
    icon: SiTiktok,
    gradient: 'from-gray-900 via-gray-800 to-pink-600'
  },
  {
    name: 'YouTube',
    features: ['Videos', 'Shorts'],
    status: 'live',
    icon: FiYoutube,
    gradient: 'from-red-600 to-red-500'
  },
  {
    name: 'X (Twitter)',
    features: ['Posts', 'Threads', 'Media'],
    status: 'live',
    icon: BsTwitterX,
    gradient: 'from-slate-700 to-slate-900'
  },
  {
    name: 'LinkedIn',
    features: ['Posts', 'Multi-Image', 'Videos', 'Articles'],
    status: 'live',
    icon: SiLinkedin,
    gradient: 'from-blue-700 to-blue-900'
  },
  {
    name: 'Bluesky',
    features: ['Posts', 'Images', 'Videos', 'Threads'],
    status: 'live',
    icon: SiBluesky,
    gradient: 'from-sky-400 to-blue-500'
  },
  {
    name: 'Pinterest',
    features: ['Pins', 'Image Carousels', 'Video Pins'],
    status: 'live',
    icon: SiPinterest,
    gradient: 'from-red-500 to-rose-600'
  }
]

export default function Platforms() {
  const liveCount = platforms.filter(p => p.status === 'live').length
  const comingSoonCount = platforms.filter(p => p.status === 'coming').length

  return (
    <section id="platforms" className="py-14 md:py-24 bg-page relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #667eea 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 tracking-wider uppercase">
              All {liveCount} platforms live
            </span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-body mb-6 tracking-[-0.02em]">
            One API,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Every Platform
            </span>
          </h2>
          <p className="text-base sm:text-lg text-subtle max-w-2xl mx-auto">
            Publish to all major social networks with a single API call.
            No platform-specific code needed.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden bg-surface rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-line"
            >
              {/* Washed platform-logo watermark */}
              <platform.icon
                className="pointer-events-none absolute -right-3 -bottom-4 text-[5.5rem] text-body opacity-[0.04] transition-opacity duration-300 group-hover:opacity-[0.07]"
                style={{ transform: 'rotate(-8deg)' }}
              />

              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {platform.status === 'live' ? (
                  <span className="flex items-center gap-1.5 bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 bg-amber-500/15 text-amber-600 dark:text-amber-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    <span className="w-2 h-2 bg-amber-500 rounded-full" />
                    Soon
                  </span>
                )}
              </div>

              {/* Platform Icon & Name */}
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, -8, 0], scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className={`w-14 h-14 bg-gradient-to-br ${platform.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all`}
                >
                  <platform.icon className="text-2xl text-white" />
                </motion.div>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-body">{platform.name}</h3>
                  <p className="text-xs text-subtle mt-0.5">Social Network</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-muted mb-1.5">
                  Supported Features:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {platform.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-inset text-muted px-2 py-0.5 rounded text-xs font-medium"
                    >
                      <span className="text-primary">•</span>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
