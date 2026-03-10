'use client'
import { motion } from 'framer-motion'
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { SiTiktok, SiThreads } from 'react-icons/si'
import { BsTwitterX } from 'react-icons/bs'
import { HiOutlineCheck } from 'react-icons/hi'
import { siteConfig } from '../config/siteConfig'

const platforms = [
  {
    name: 'Instagram',
    features: ['Feed Posts', 'Stories', 'Reels', 'Cover Photos'],
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
    features: ['Videos', 'Photo Carousels', 'Custom Covers'],
    status: 'live',
    icon: SiTiktok,
    gradient: 'from-gray-900 via-gray-800 to-pink-600'
  },
  {
    name: 'YouTube',
    features: ['Videos', 'Shorts', 'Custom Thumbnails'],
    status: 'live',
    icon: FiYoutube,
    gradient: 'from-red-600 to-red-500'
  },
  {
    name: 'X (Twitter)',
    features: ['Posts', 'Threads', 'Media'],
    status: 'coming',
    icon: BsTwitterX,
    gradient: 'from-gray-900 to-gray-800'
  }
]

export default function Platforms() {
  const liveCount = platforms.filter(p => p.status === 'live').length
  const comingSoonCount = platforms.filter(p => p.status === 'coming').length

  return (
    <section id="platforms" className="py-24 bg-white relative overflow-hidden">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-indigo-700">
              {liveCount} Platforms Live &bull; {comingSoonCount} Coming Soon
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            One API,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Every Platform
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
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
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {platform.status === 'live' ? (
                  <span className="flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Live
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    <span className="w-2 h-2 bg-orange-500 rounded-full" />
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
                  <h3 className="text-lg font-bold text-gray-900">{platform.name}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Social Network</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-gray-700 mb-1.5">
                  Supported Features:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {platform.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs font-medium"
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

        {/* Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-slate-950 rounded-2xl overflow-hidden border border-white/5 mb-16"
        >
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/5 bg-slate-900/50">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
            <span className="ml-3 text-slate-500 text-xs font-mono">publish.js</span>
          </div>
          <pre className="p-5 overflow-x-auto text-sm leading-relaxed font-mono">
            <code className="text-slate-300">{`// Publish to multiple platforms with one request
const response = await fetch('https://api.kabonshare.com/api/posts', {
  method: 'POST',
  headers: { 'X-API-Key': 'sk_your_api_key' },
  body: formData  // platforms: "instagram,facebook,threads"
});

// ✅ Published to 3 platforms simultaneously
console.log(response.json());
// { success: true, results: [{ platform: "instagram", status: "published" }, ...] }`}</code>
          </pre>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-10 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Need a Different Platform?
          </h3>
          <p className="text-lg mb-6 text-white/80 max-w-xl mx-auto">
            We&apos;re constantly adding new platforms. Let us know which one you need most.
          </p>
          <a
            href={`mailto:${siteConfig.contact.info}?subject=Platform Request`}
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
          >
            Request Platform Integration
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
