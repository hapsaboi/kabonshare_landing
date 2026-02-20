'use client'
import { motion } from 'framer-motion'
import { HiOutlineOfficeBuilding, HiOutlineCode, HiOutlineShoppingCart, HiOutlineVideoCamera, HiOutlineCheck } from 'react-icons/hi'

const useCases = [
  {
    icon: HiOutlineOfficeBuilding,
    title: 'For Agencies',
    description: 'Manage dozens of client accounts across all platforms from one dashboard.',
    gradient: 'from-blue-600 to-indigo-600',
    benefits: [
      'Multi-client management',
      'Team collaboration',
      'Client reporting',
      'Bulk scheduling'
    ]
  },
  {
    icon: HiOutlineCode,
    title: 'For SaaS Products',
    description: 'Add social publishing to your app in days, not months.',
    gradient: 'from-purple-600 to-pink-600',
    benefits: [
      'Simple REST API',
      'Scalable infra',
      'Comprehensive docs',
      'Quick integration'
    ]
  },
  {
    icon: HiOutlineShoppingCart,
    title: 'For E-commerce',
    description: 'Auto-publish products to Instagram, TikTok, and Facebook.',
    gradient: 'from-green-600 to-emerald-600',
    benefits: [
      'Product catalog sync',
      'Automated posting',
      'Multi-platform reach',
      'Sales tracking'
    ]
  },
  {
    icon: HiOutlineVideoCamera,
    title: 'For Creators',
    description: 'Schedule a week of content across every platform in minutes.',
    gradient: 'from-orange-600 to-red-600',
    benefits: [
      'Cross-posting',
      'Content calendar',
      'Analytics insights',
      'Reels & Shorts'
    ]
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-sm font-medium text-violet-300">Use Cases</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Who Uses{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              KabonShare?
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From solo creators to enterprise agencies — built for anyone who publishes to social media.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${useCase.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <useCase.icon className="text-xl text-white" />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-2">{useCase.title}</h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">{useCase.description}</p>

              {/* Benefits */}
              <div className="space-y-2">
                {useCase.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                    <HiOutlineCheck className="text-green-400 text-xs flex-shrink-0" />
                    {benefit}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
