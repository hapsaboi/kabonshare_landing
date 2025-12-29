'use client'
import { motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaTiktok, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { SiThreads } from 'react-icons/si'

const platforms = [
  {
    name: 'Instagram',
    features: 'Feed Posts, Stories, Reels with cover photos',
    status: 'live',
    icon: FaInstagram,
    color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
    iconColor: 'text-white'
  },
  {
    name: 'Facebook Pages',
    features: 'Feed Posts, Stories, Reels, Albums',
    status: 'live',
    icon: FaFacebook,
    color: 'bg-blue-600',
    iconColor: 'text-white'
  },
  {
    name: 'Threads',
    features: 'Text, Images, Videos, Carousels',
    status: 'live',
    icon: SiThreads,
    color: 'bg-black',
    iconColor: 'text-white'
  },
  {
    name: 'TikTok',
    features: 'Videos, Photo Carousels with custom covers',
    status: 'live',
    icon: FaTiktok,
    color: 'bg-black',
    iconColor: 'text-white'
  },
  {
    name: 'YouTube',
    features: 'Videos, Shorts with custom thumbnails',
    status: 'live',
    icon: FaYoutube,
    color: 'bg-red-600',
    iconColor: 'text-white'
  },
  {
    name: 'X (Twitter)',
    features: 'Posts, Threads, Media',
    status: 'coming',
    icon: FaTwitter,
    color: 'bg-black',
    iconColor: 'text-white'
  },
  {
    name: 'LinkedIn',
    features: 'Posts, Company Pages, Articles',
    status: 'coming',
    icon: FaLinkedin,
    color: 'bg-blue-700',
    iconColor: 'text-white'
  }
]

export default function Platforms() {
  const liveCount = platforms.filter(p => p.status === 'live').length
  const comingSoonCount = platforms.filter(p => p.status === 'coming').length

  return (
    <section id="platforms" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 px-6 py-3 rounded-full mb-6 border border-green-200 dark:border-green-800"
          >
            <span className="text-green-600 dark:text-green-400 font-semibold text-sm uppercase tracking-wide">
              {liveCount} Platforms Live • {comingSoonCount} Coming Soon
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Supported Platforms
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Publish to the world&apos;s most popular social networks with one unified API. 
            <span className="block mt-2 font-semibold text-primary">No platform-specific integration needed.</span>
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                {platform.status === 'live' ? (
                  <span className="flex items-center gap-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Live
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Soon
                  </span>
                )}
              </div>

              {/* Platform Icon & Name */}
              <div className="flex items-center gap-3 mb-3">
                <motion.div 
                  whileHover={{ rotate: [0, -12, 12, -8, 0], scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className={`w-14 h-14 ${platform.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all`}
                >
                  <platform.icon className={`text-2xl ${platform.iconColor}`} />
                </motion.div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {platform.name}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Social Network
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Supported Features:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {platform.features.split(', ').map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-xs font-medium"
                    >
                      <span className="text-primary">•</span>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>

        {/* Integration Code Example */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 shadow-xl mb-12"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <span className="ml-4 text-gray-400 text-sm font-mono">multi-platform.js</span>
          </div>
          <pre className="text-green-400 font-mono text-sm leading-relaxed">
            <code>{`// Post to multiple platforms with one API call
const response = await mediaShare.posts.create({
  platforms: ["instagram", "facebook", "threads"],
  content: {
    text: "Exciting news! 🎉",
    media: ["announcement.jpg"]
  }
});

// ✅ Published to 3 platforms in seconds!
// Response: { success: true, published: 3 }`}</code>
          </pre>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-xl p-6 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Need a Different Platform?
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            We&apos;re constantly adding new integrations. Request a platform and we&apos;ll prioritize it for our roadmap.
          </p>
          <a
            href="mailto:info@kabonshare.com?subject=Platform Request"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span>Request Platform Integration</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
