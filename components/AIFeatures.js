'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiZap, FiImage, FiFilm, FiMic, FiHash } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
}

const capabilities = [
  {
    icon: HiOutlineSparkles,
    label: 'Learns your voice',
    sub: 'Scans your connected accounts to match your tone, style, and hashtag patterns before writing a single word.',
    highlight: true,
  },
  { icon: FiImage, label: 'Images', sub: 'JPG, PNG, WebP — drop any photo' },
  { icon: FiFilm,  label: 'Videos', sub: 'MP4, MOV — AI reads the footage' },
  { icon: FiMic,   label: 'Audio files', sub: 'MP3, WAV — transcribes & writes' },
  { icon: FiHash,  label: 'Hashtag packs', sub: 'Platform-optimised tag sets' },
]

export default function AIFeatures() {
  return (
    <section id="ai-features" className="py-12 md:py-16 bg-page relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* ── Left ── */}
          <div>
            <motion.div variants={fade} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
                <HiOutlineSparkles className="text-violet-500 dark:text-violet-400" size={14} />
                <span className="text-xs font-semibold text-violet-600 dark:text-violet-300 tracking-wider uppercase">AI-Powered</span>
              </div>
            </motion.div>

            <motion.h2
              variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-display text-3xl md:text-4xl font-extrabold text-body tracking-[-0.02em] leading-tight mb-4"
            >
              Captions that sound{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                exactly like you
              </span>
            </motion.h2>

            <motion.p
              variants={fade} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-muted text-base leading-relaxed mb-6"
            >
              Kabon AI doesn&apos;t just write generic captions. It first reads your existing posts to learn your tone, vocabulary, and hashtag style — then generates content that sounds authentically <em className="text-muted not-italic">you</em>.
            </motion.p>

            <div className="space-y-2 mb-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  variants={fade} custom={3 + i * 0.4} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${cap.highlight ? 'bg-violet-500/8 border border-violet-500/15' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                    ${cap.highlight ? 'bg-violet-500/20 border border-violet-500/30' : 'bg-surface border border-line'}`}>
                    <cap.icon className={cap.highlight ? 'text-violet-500 dark:text-violet-400' : 'text-muted'} size={16} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${cap.highlight ? 'text-violet-700 dark:text-violet-200' : 'text-body'}`}>{cap.label}</p>
                    <p className="text-xs text-subtle leading-relaxed">{cap.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fade} custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Link href="https://dashboard.kabonshare.com">
                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-sm font-semibold transition-all duration-200 cursor-pointer shadow-lg shadow-violet-500/20">
                  <FiZap size={15} />
                  Try Kabon AI free
                </span>
              </Link>
              <p className="text-xs text-muted mt-3">AI credits included on Pro &amp; Business plans</p>
            </motion.div>
          </div>

          {/* ── Right: real Kabon AI caption screenshot ── */}
          <motion.div
            variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-3xl blur-2xl scale-105" />

            <div className="relative rounded-3xl border border-line bg-surface overflow-hidden shadow-2xl shadow-violet-900/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/features/ai-caption-light.webp" alt="Kabon AI caption generator" className="only-light w-full" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/features/ai-caption-dark.webp" alt="Kabon AI caption generator" className="only-dark w-full" />
            </div>

            {/* Floating speed badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 bg-surface border border-line rounded-2xl shadow-xl"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <FiZap className="text-white" size={13} />
              </div>
              <div>
                <p className="text-xs font-bold text-body">Generated in 2.1s</p>
                <p className="text-[10px] text-subtle">1 AI credit used</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
