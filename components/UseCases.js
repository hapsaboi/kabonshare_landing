'use client'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { USE_CASES } from '../config/useCases'

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] } }),
}

// A concise overview that teases each audience and links straight to its tab on
// /case-studies — the full stories live there, so we don't re-tell them here.
export default function UseCases() {
  return (
    <section id="use-cases" className="py-16 md:py-28 bg-page relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-violet-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-line mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 tracking-wider uppercase">Built for everyone</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-[-0.02em] leading-[1.04] mb-4">
              Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">how you work.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Creators, agencies, brands, developers and schools — see exactly how KabonShare fits your world.
            </p>
          </motion.div>

          <motion.a
            variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            href="/case-studies"
            className="group shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-line text-body font-semibold hover:border-line-strong transition-colors"
          >
            See all use cases
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Audience grid — one source of truth with the nav + /case-studies page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USE_CASES.map((u, i) => {
            const Icon = u.icon
            return (
              <motion.a
                key={u.id}
                variants={fade} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
                href={`/case-studies?tab=${u.id}`}
                className="group relative flex flex-col rounded-2xl border border-line bg-surface p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(120% 90% at 0% 0%, color-mix(in srgb, ${u.color} 12%, transparent), transparent 60%)` }}
                />
                <div className="relative flex items-center justify-between mb-4">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ background: `color-mix(in srgb, ${u.color} 14%, transparent)` }}>
                    <Icon style={{ color: u.color, fontSize: 22 }} />
                  </span>
                  <FiArrowRight className="w-4 h-4 text-subtle transition-all duration-300 group-hover:text-body group-hover:translate-x-0.5" />
                </div>

                <h3 className="relative font-display font-extrabold text-body text-lg tracking-[-0.01em]">{u.label}</h3>
                <p className="relative text-[13px] text-muted mt-1.5 leading-snug">{u.menuDesc}</p>

                <div className="relative mt-4 pt-4 border-t border-line flex flex-wrap gap-1.5">
                  {u.highlights.map((h) => (
                    <span key={h} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted">
                      <span className="w-1 h-1 rounded-full" style={{ backgroundColor: u.color }} />
                      {h}
                    </span>
                  ))}
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
