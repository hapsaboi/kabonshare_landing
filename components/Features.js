'use client'
import { motion } from 'framer-motion'
import { FaMobileAlt, FaLock, FaImage, FaClock, FaBell, FaChartLine } from 'react-icons/fa'
import { HiCheckCircle, HiLightningBolt, HiCode, HiServer, HiShieldCheck } from 'react-icons/hi'

const features = [
  {
    icon: FaMobileAlt,
    title: 'Multi-Platform Publishing',
    description: 'Post to Instagram (Feed, Stories, Reels), Facebook Pages, Threads, TikTok, and YouTube with one unified API endpoint',
    code: `{
  "platforms": ["instagram", "tiktok", "youtube"],
  "contentType": "reel",
  "text": "Hello World! 🚀",
  "media": ["video.mp4"]
}`,
    color: '#3B82F6' // Blue
  },
  {
    icon: FaLock,
    title: 'OAuth Management',
    description: 'Complete OAuth flow handling with secure token storage, automatic refresh, and session management. Users connect once, we handle everything.',
    benefit: 'Save 100+ hours of implementation',
    color: '#8B5CF6' // Purple
  },
  {
    icon: FaImage,
    title: 'Asset Library & Storage',
    description: 'Upload media once to your asset library, reuse across multiple posts. Includes smart storage quota management with 5GB to 100GB based on plan',
    specs: 'Up to 4GB video files, organized folders',
    color: '#10B981' // Emerald
  },
  {
    icon: FaClock,
    title: 'Smart Scheduling & Queue',
    description: 'Schedule posts with Redis-backed job queue. Automatic retries with exponential backoff ensure guaranteed delivery even if platforms are temporarily unavailable',
    features: ['Bull/Redis queue system', 'Future scheduling', 'Automatic retries', 'Webhook notifications'],
    color: '#F59E0B' // Amber
  },
  {
    icon: FaBell,
    title: 'Workspaces & Multi-Account',
    description: 'Organize social accounts into separate workspaces. Perfect for agencies managing multiple clients or users with multiple brands',
    features: ['Unlimited workspaces on Pro+', 'Per-workspace account limits', 'Isolated environments'],
    color: '#EF4444' // Red
  },
  {
    icon: FaChartLine,
    title: 'Credit-Based Billing',
    description: 'Flexible credit system with subscription and purchased credits. 1 credit per post regardless of media type or platform count. Track usage in real-time',
    metrics: ['Monthly subscription credits', 'One-time purchased credits', 'Real-time tracking', 'Automatic renewals'],
    color: '#6366F1' // Indigo
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span className="text-sm font-medium text-indigo-300">Powerful Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Publish Everywhere</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Build powerful social media integrations with our comprehensive suite of tools designed for developers.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
            >
              {/* Hover Gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)` }}
              ></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon 
                    className="text-3xl" 
                    style={{ color: feature.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Dynamic Content Area */}
                <div className="mt-auto">
                  {feature.code && (
                    <div className="bg-slate-950 rounded-xl p-4 border border-white/5 font-mono text-xs text-slate-300 overflow-hidden relative group-hover:border-white/10 transition-colors">
                      <div className="absolute top-0 right-0 p-2 opacity-50">
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                          <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                        </div>
                      </div>
                      <pre className="language-json">
                        <code dangerouslySetInnerHTML={{ 
                          __html: feature.code.replace(/"(.*?)":/g, '<span class="text-indigo-400">"$1"</span>:').replace(/: "(.*?)"/g, ': <span class="text-emerald-400">"$1"</span>') 
                        }} />
                      </pre>
                    </div>
                  )}

                  {feature.benefit && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                      <HiLightningBolt className="text-indigo-400 text-xl flex-shrink-0" />
                      <span className="text-sm font-medium text-indigo-200">{feature.benefit}</span>
                    </div>
                  )}

                  {feature.specs && (
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <HiServer className="text-emerald-400 text-xl flex-shrink-0" />
                      <span className="text-sm font-medium text-emerald-200">{feature.specs}</span>
                    </div>
                  )}

                  {feature.features && (
                    <div className="space-y-2">
                      {feature.features.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <HiCheckCircle className="text-emerald-500 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {feature.webhookEvents && (
                    <div className="flex flex-wrap gap-2">
                      {feature.webhookEvents.map((event, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                          {event}
                        </span>
                      ))}
                    </div>
                  )}

                  {feature.metrics && (
                    <div className="space-y-2">
                      {feature.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
