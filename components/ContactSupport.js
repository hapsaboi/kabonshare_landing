'use client'
import { motion } from 'framer-motion'
import { FaBook, FaDiscord, FaEnvelope, FaPhone, FaRocket, FaCode } from 'react-icons/fa'

const supportChannels = [
  {
    icon: FaBook,
    title: 'Documentation',
    description: 'Complete API reference & guides',
    link: 'https://docs.media-share.io',
    linkText: 'Browse Docs',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: FaDiscord,
    title: 'Discord Community',
    description: '5,000+ active developers',
    link: 'https://discord.gg/kabonshare',
    linkText: 'Join Discord',
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: FaEnvelope,
    title: 'Email Support',
    description: '24-hour response time',
    link: 'mailto:support@media-share.io',
    linkText: 'Email Us',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: FaPhone,
    title: 'Enterprise Support',
    description: 'Priority phone support',
    link: 'mailto:sales@media-share.io',
    linkText: 'Contact Sales',
    gradient: 'from-orange-500 to-red-500'
  }
]

const resources = [
  { title: 'API Reference', link: 'https://docs.media-share.io/api', badge: 'Docs' },
  { title: 'Quick Start Guide', link: 'https://docs.media-share.io/quickstart', badge: 'Guide' },
  { title: 'Code Examples', link: 'https://github.com/media-share', badge: 'GitHub' },
  { title: 'Video Tutorials', link: 'https://docs.media-share.io/guides', badge: 'Learn' },
  { title: 'Changelog', link: 'https://docs.media-share.io/changelog', badge: 'Updates' },
  { title: 'API Status', link: 'https://status.media-share.io', badge: 'Live' }
]

export default function ContactSupport() {
  return (
    <section id="contact-support" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 text-primary dark:text-blue-400 rounded-full text-sm font-semibold border border-blue-500/20">
              Support
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            We're Here to Help
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose how you want to connect with us
          </p>
        </motion.div>

        {/* Main Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {supportChannels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${channel.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <channel.icon className="text-xl text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {channel.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {channel.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary group-hover:text-secondary font-semibold transition-colors">
                {channel.linkText} →
              </span>
            </motion.a>
          ))}
        </div>

        {/* Quick Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Quick Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {resources.map((resource, index) => (
              <motion.a
                key={index}
                href={resource.link}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (index * 0.05) }}
                whileHover={{ x: 4 }}
                className="group flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-900 hover:bg-primary/5 dark:hover:bg-primary/10 transition-all border border-gray-200 dark:border-gray-700"
              >
                <span className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">{resource.title}</span>
                <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">{resource.badge}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA - Simplified */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white shadow-xl"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaRocket className="text-3xl" />
            <h3 className="text-3xl md:text-4xl font-bold">
              Need Custom Integration?
            </h3>
          </div>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Talk to our team about custom implementations and enterprise solutions
          </p>
          <motion.a
            href="mailto:sales@media-share.io"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all shadow-lg"
          >
            Contact Sales Team
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
