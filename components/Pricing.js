'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiOutlineCheck, HiOutlineSparkles, HiOutlineLightningBolt } from 'react-icons/hi'
import { siteConfig } from '../config/siteConfig'

const highlights = [
  'Free tier available — no credit card needed',
  'Credit-based pricing — pay only for what you use',
  'AI credits included in Pro and Business plans',
  'Multi-currency support (USD, NGN, EUR, GBP)',
  'Monthly and yearly billing with savings',
  'Cancel or change plans anytime'
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <HiOutlineSparkles className="text-amber-400" />
            <span className="text-sm font-medium text-amber-300">Pricing</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Simple,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Start free, scale as you grow. Our pricing adapts to your needs — from solo creators to agencies managing hundreds of accounts.
          </p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/5 p-8 mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                  <HiOutlineCheck className="text-indigo-400 text-xs" />
                </div>
                <span className="text-slate-300 text-sm">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <HiOutlineLightningBolt className="text-xl" />
              View Plans & Pricing
            </Link>
            <a
              href={siteConfig.dashboard + '/signup'}
              className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              Start Free — No Card Required
            </a>
          </div>
          <p className="text-slate-500 text-sm mt-4">
            Plans start from free. See full pricing details with feature comparison.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
