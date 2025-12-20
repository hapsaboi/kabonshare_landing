'use client'
import { motion } from 'framer-motion'
import { FaBuilding, FaLaptopCode, FaShoppingCart, FaVideo } from 'react-icons/fa'

const useCases = [
  {
    icon: FaBuilding,
    title: 'For Agencies',
    description: 'Manage 50+ client accounts across all platforms from one dashboard',
    gradient: 'from-blue-600 to-indigo-600',
    benefits: [
      'Multi-client management',
      'White-label capabilities',
      'Team collaboration tools',
      'Client reporting'
    ]
  },
  {
    icon: FaLaptopCode,
    title: 'For SaaS Products',
    description: 'Add social publishing to your app in days, not months',
    gradient: 'from-purple-600 to-pink-600',
    benefits: [
      'Quick integration',
      'Scalable infrastructure',
      'Developer-friendly API',
      'Comprehensive documentation'
    ]
  },
  {
    icon: FaShoppingCart,
    title: 'For E-commerce',
    description: 'Auto-publish products to Instagram Shop, TikTok Shop, and Facebook Marketplace',
    gradient: 'from-green-600 to-emerald-600',
    benefits: [
      'Product catalog sync',
      'Automated posting',
      'Multi-platform reach',
      'Sales tracking'
    ]
  },
  {
    icon: FaVideo,
    title: 'For Content Creators',
    description: 'Schedule a week of content in 10 minutes',
    gradient: 'from-orange-600 to-red-600',
    benefits: [
      'Bulk scheduling',
      'Content calendar',
      'Analytics insights',
      'Cross-platform posting'
    ]
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with badge (like Platforms) */}
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 px-6 py-3 rounded-full mb-6 border border-indigo-200 dark:border-indigo-800"
          >
            <span className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm uppercase tracking-wide">
              4 Use Cases • Built for Scale
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Who Uses Media Share?
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From solo creators to enterprise agencies, we built features that scale with your needs.
            <span className="block mt-2 font-semibold text-primary">One API. Unlimited possibilities.</span>
          </p>
        </motion.div>

        {/* Grid matching Platforms style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Icon & Title (like Platforms layout) */}
              <div className="flex items-center gap-3 mb-4">
                <motion.div
                  whileHover={{ rotate: [0, -12, 12, -8, 0], scale: 1.1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  className={`w-14 h-14 bg-gradient-to-br ${useCase.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all`}
                >
                  <useCase.icon className="text-2xl text-white" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    Use Case
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {useCase.description}
              </p>

              {/* Features section (like Platforms) */}
              <div className="space-y-1.5">
                <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                  Key Benefits:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {useCase.benefits.map((benefit, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-xs font-medium"
                    >
                      <span className="text-primary">•</span>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border effect (like Platforms) */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
