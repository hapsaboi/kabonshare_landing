'use client'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import { FEATURES } from '../config/features'

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] } }),
}

// A concise overview that teases each feature and links straight to its tab on
// /features — the deep dives live there, so we don't re-explain them here.
export default function Features() {
  return (
    <section id="features" className="py-28 bg-page relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface border border-line mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 tracking-wider uppercase">Everything you need</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-body tracking-[-0.02em] leading-[1.04] mb-4">
              One platform.<br className="hidden sm:block" /> Every tool to grow.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Publishing, scheduling, AI, analytics, collaboration and a developer API — tap any one to see it in action.
            </p>
          </motion.div>

          <motion.a
            variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            href="/features"
            className="group shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-line text-body font-semibold hover:border-line-strong transition-colors"
          >
            See all features
            <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </motion.a>
        </div>

        {/* Feature grid — one source of truth with the nav + /features page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.a
                key={f.id}
                variants={fade} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-40px' }}
                href={`/features?tab=${f.id}`}
                className="group relative rounded-2xl border border-line bg-surface p-5 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
              >
                {/* accent wash on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(120% 90% at 0% 0%, color-mix(in srgb, ${f.color} 12%, transparent), transparent 60%)` }}
                />
                <div className="relative flex items-start gap-3.5">
                  <span className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: `color-mix(in srgb, ${f.color} 14%, transparent)` }}>
                    <Icon style={{ color: f.color, fontSize: 20 }} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-extrabold text-body text-[16px] leading-none">{f.label}</h3>
                      {f.badge && (
                        <span className="text-[9px] font-bold leading-none px-1.5 py-1 rounded bg-emerald-500/15 text-emerald-500">{f.badge}</span>
                      )}
                    </div>
                    <p className="text-[13px] text-muted mt-2 leading-snug">{f.menuDesc}</p>
                  </div>
                  <FiArrowRight className="w-4 h-4 text-subtle shrink-0 mt-0.5 transition-all duration-300 group-hover:text-body group-hover:translate-x-0.5" />
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
