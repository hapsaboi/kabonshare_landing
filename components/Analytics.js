'use client'
import { motion } from 'framer-motion'
import { FiClock, FiBarChart2, FiActivity, FiRadio, FiArrowRight } from 'react-icons/fi'

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] } }),
}

const shots = [
  { light: '/features/analytics-hero-light.png',     dark: '/features/analytics-hero-dark.png',     alt: 'KabonShare analytics dashboard' },
  { light: '/features/analytics-audience-light.png', dark: '/features/analytics-audience-dark.png', alt: 'Audience insights' },
]

const capabilities = [
  { icon: FiBarChart2, title: 'All your accounts',  desc: 'Every connected account’s insights in one place — pick one and dive in.' },
  { icon: FiActivity,  title: 'Post-level detail',  desc: 'Drill into any post to see exactly how it performed.' },
  { icon: FiClock,     title: 'Best-time analysis', desc: 'Heatmaps of the windows when your audience is most active.' },
  { icon: FiRadio,     title: 'Live Followers',     desc: 'Real-time follower counters live in their own dedicated view.' },
]

export default function Analytics() {
  return (
    <section id="analytics" className="py-16 bg-page relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div variants={fade} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <FiBarChart2 className="text-cyan-600 dark:text-cyan-400" size={13} />
            <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-300 tracking-wider uppercase">Analytics &amp; Insights</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-body tracking-[-0.02em] mb-3">
            Know exactly{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">what works.</span>
          </h2>
          <p className="text-muted text-sm max-w-lg mx-auto">
            Deep analytics across every platform, smart scheduling suggestions, and audience insights — all in one place.
          </p>
        </motion.div>

        {/* ── Two dashboard screenshots ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-8">
          {shots.map((img, i) => (
            <motion.div key={i}
              variants={fade} custom={1 + i * 0.15} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 to-blue-600/15 rounded-3xl blur-2xl scale-105" />
              <div className="relative rounded-3xl border border-line bg-surface overflow-hidden shadow-2xl shadow-cyan-900/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.light} alt={img.alt} className="only-light w-full" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.dark} alt={img.alt} className="only-dark w-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <a href="/features?tab=analytics"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 transition-colors">
            Explore analytics
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* ── Capability cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((c, i) => (
            <motion.div key={c.title}
              variants={fade} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
              className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
            >
              <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-500/10 mb-4 transition-transform duration-300 group-hover:scale-105">
                <c.icon className="text-cyan-600 dark:text-cyan-400" size={20} />
              </span>
              <h3 className="font-display font-extrabold text-body text-[16px] mb-1.5">{c.title}</h3>
              <p className="text-[13px] text-muted leading-snug">{c.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
