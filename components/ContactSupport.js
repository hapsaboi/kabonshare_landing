'use client'
import { motion } from 'framer-motion'
import { HiOutlineBookOpen, HiOutlineMail, HiOutlineChatAlt2 } from 'react-icons/hi'
import { siteConfig } from '../config/siteConfig'

const supportChannels = [
  {
    icon: HiOutlineBookOpen,
    title: 'Documentation',
    description: 'Complete API reference & guides',
    link: siteConfig.api.docs,
    linkText: 'Browse Docs',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: HiOutlineMail,
    title: 'Email Support',
    description: '24-hour response time',
    link: `mailto:${siteConfig.contact.support}`,
    linkText: 'Email Us',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: HiOutlineChatAlt2,
    title: 'Community',
    description: 'Join the conversation',
    link: `mailto:${siteConfig.contact.info}`,
    linkText: 'Get in Touch',
    gradient: 'from-orange-500 to-red-500'
  }
]

export default function ContactSupport() {
  return (
    <section id="contact-support" className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #667eea 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-indigo-700">Support</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            We&apos;re Here to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Help
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Choose how you want to connect with us
          </p>
        </motion.div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {supportChannels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-indigo-100 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${channel.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <channel.icon className="text-xl text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{channel.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{channel.description}</p>
              <span className="inline-flex items-center gap-1 text-sm text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                {channel.linkText} <span>→</span>
              </span>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-10 text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Need a Custom Solution?
          </h3>
          <p className="text-lg mb-6 text-white/80 max-w-xl mx-auto">
            Talk to our team about custom integrations and enterprise implementations.
          </p>
          <a
            href={`mailto:${siteConfig.contact.info}`}
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
          >
            Contact Us
            <span className="text-lg">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
