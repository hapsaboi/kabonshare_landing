'use client'
import { motion } from 'framer-motion'
import { HiOutlineBookOpen, HiOutlineMail, HiOutlineChatAlt2 } from 'react-icons/hi'
import { FiArrowRight } from 'react-icons/fi'
import { siteConfig } from '../config/siteConfig'

const supportChannels = [
  {
    icon: HiOutlineBookOpen,
    title: 'Documentation',
    description: 'Full API reference, guides and quick-starts — answers on demand, 24/7.',
    link: siteConfig.api.docs,
    linkText: 'Browse docs',
    gradient: 'from-blue-500 to-cyan-500',
    accent: '#3b82f6',
  },
  {
    icon: HiOutlineMail,
    title: 'Email support',
    description: 'Bug reports or account questions — a real human replies within a few hours.',
    link: `mailto:${siteConfig.contact.support}`,
    linkText: 'Email us',
    gradient: 'from-emerald-500 to-teal-500',
    accent: '#10b981',
  },
  {
    icon: HiOutlineChatAlt2,
    title: 'Partnerships',
    description: 'Custom integrations, white-label and enterprise — let’s talk about your setup.',
    link: `mailto:${siteConfig.contact.info}`,
    linkText: 'Get in touch',
    gradient: 'from-orange-500 to-rose-500',
    accent: '#f97316',
  }
]

export default function ContactSupport() {
  return (
    <section id="contact-support" className="py-14 md:py-24 bg-page relative overflow-hidden">
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 tracking-wider uppercase">Support</span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-body mb-5 tracking-[-0.02em]">
            We&apos;re here to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              help.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-subtle max-w-2xl mx-auto">
            Choose how you want to connect with us
          </p>
        </motion.div>

        {/* Support Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {supportChannels.map((channel, index) => (
            <motion.a
              key={index}
              href={channel.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative flex flex-col rounded-2xl border border-line bg-surface p-6 overflow-hidden transition-all duration-300 hover:border-line-strong"
            >
              {/* accent wash on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(120% 90% at 100% 0%, color-mix(in srgb, ${channel.accent} 12%, transparent), transparent 60%)` }}
              />
              <div className="relative flex items-start justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${channel.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}>
                  <channel.icon className="text-xl text-white" />
                </div>
                <FiArrowRight className="w-4 h-4 text-subtle mt-1 transition-all duration-300 group-hover:text-body group-hover:translate-x-0.5" />
              </div>
              <h3 className="relative font-display text-lg font-extrabold text-body">{channel.title}</h3>
              <p className="relative text-[13px] text-subtle mt-1.5 leading-snug flex-1">{channel.description}</p>
              <span className="relative inline-flex items-center gap-1.5 text-sm font-semibold mt-4" style={{ color: channel.accent }}>
                {channel.linkText} <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
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
          <h3 className="font-display text-2xl md:text-3xl font-extrabold mb-3">
            Need a custom solution?
          </h3>
          <p className="text-lg mb-6 text-white/85 max-w-xl mx-auto">
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
