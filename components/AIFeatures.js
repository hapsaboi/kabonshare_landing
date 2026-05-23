'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiZap, FiImage, FiFilm, FiMic, FiHash, FiCopy, FiCheckCircle, FiInstagram, FiYoutube } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { SiTiktok } from 'react-icons/si'

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

const connectedAccounts = [
  { handle: '@yourhandle', platform: 'Instagram', icon: FiInstagram,  color: '#fff',    bg: 'from-pink-500 to-rose-600',  posts: 142, analyzed: true  },
  { handle: '@yourhandle', platform: 'TikTok',    icon: SiTiktok,     color: '#fff',    bg: 'from-slate-700 to-slate-900', posts: 89,  analyzed: true  },
  { handle: '@yourhandle', platform: 'YouTube',   icon: FiYoutube,    color: '#fff',    bg: 'from-red-500 to-red-700',    posts: 34,  analyzed: false },
]

const outputLines = [
  { label: 'Title',         color: 'text-violet-400', value: '"Golden Hour at the Beach"' },
  { label: 'Short caption', color: 'text-indigo-400', value: 'Chasing sunsets and making memories. Nothing beats the golden hour glow. ✨' },
  { label: 'Hashtags',      color: 'text-fuchsia-400', value: '#GoldenHour #BeachVibes #SunsetLovers #NaturePhotography #TravelGram' },
]

export default function AIFeatures() {
  return (
    <section id="ai-features" className="py-16 bg-slate-950 relative overflow-hidden">
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
                <HiOutlineSparkles className="text-violet-400" size={14} />
                <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">AI-Powered</span>
              </div>
            </motion.div>

            <motion.h2
              variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4"
            >
              Captions that sound{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                exactly like you
              </span>
            </motion.h2>

            <motion.p
              variants={fade} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-slate-400 text-base leading-relaxed mb-6"
            >
              Kabon AI doesn&apos;t just write generic captions. It first reads your existing posts to learn your tone, vocabulary, and hashtag style — then generates content that sounds authentically <em className="text-slate-300 not-italic">you</em>.
            </motion.p>

            <div className="space-y-2 mb-6">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.label}
                  variants={fade} custom={3 + i * 0.4} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${cap.highlight ? 'bg-violet-500/8 border border-violet-500/15' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                    ${cap.highlight ? 'bg-violet-500/20 border border-violet-500/30' : 'bg-slate-800 border border-slate-700'}`}>
                    <cap.icon className={cap.highlight ? 'text-violet-400' : 'text-slate-400'} size={16} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${cap.highlight ? 'text-violet-200' : 'text-white'}`}>{cap.label}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{cap.sub}</p>
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
              <p className="text-xs text-slate-600 mt-3">AI credits included on Pro & Business plans</p>
            </motion.div>
          </div>

          {/* ── Right: mockup ── */}
          <motion.div
            variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-indigo-600/20 rounded-3xl blur-2xl scale-105" />

            <div className="relative bg-slate-900 rounded-3xl overflow-hidden">

              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-400">Kabon AI</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                </div>
              </div>

              {/* Step 1 — Style analysis */}
              <div className="px-4 py-3 border-b border-slate-800">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-bold text-violet-400">1</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-300">Analyzing your style</p>
                </div>

                <div className="space-y-1.5">
                  {connectedAccounts.map((acc, i) => (
                    <motion.div
                      key={acc.platform}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15 }}
                      className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-800 border border-slate-700"
                    >
                      <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${acc.bg} flex items-center justify-center flex-shrink-0`}>
                        <acc.icon size={12} color={acc.color} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-white">{acc.platform}</p>
                        <p className="text-[10px] text-slate-500">{acc.posts} posts scanned</p>
                      </div>
                      {acc.analyzed ? (
                        <div className="flex items-center gap-1">
                          <FiCheckCircle className="text-emerald-400" size={13} />
                          <span className="text-[10px] text-emerald-400 font-medium">Done</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1.5">
                          <div className="flex gap-0.5">
                            {[0,1,2].map(j => (
                              <motion.div
                                key={j}
                                className="w-1 h-1 rounded-full bg-violet-400"
                                animate={{ opacity: [0.3, 1, 0.3] }}
                                transition={{ duration: 1.2, repeat: Infinity, delay: j * 0.2 }}
                              />
                            ))}
                          </div>
                          <span className="text-[10px] text-slate-500">Scanning</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-2 px-3 py-1.5 rounded-lg bg-violet-500/8 border border-violet-500/15">
                  <p className="text-[11px] text-violet-300 leading-relaxed">
                    <span className="font-semibold">Style learned:</span> Casual tone · emoji-forward · 5–8 hashtags · storytelling captions
                  </p>
                </div>
              </div>

              {/* Step 2 — Media input */}
              <div className="px-4 py-2.5 border-b border-slate-800 flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-[9px] font-bold text-violet-400">2</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                  <FiImage className="text-white" size={14} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-white truncate">golden_hour_beach.jpg</p>
                  <p className="text-[10px] text-slate-500">3.2 MB · Image</p>
                </div>
                <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                  <FiCheckCircle className="text-emerald-400" size={11} />
                  <span className="text-[10px] font-semibold text-emerald-400">Analyzed</span>
                </div>
              </div>

              {/* Step 3 — Output */}
              <div className="px-4 pt-3 pb-2">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-[9px] font-bold text-violet-400">3</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-300">Generated in your style</p>
                </div>

                <div className="space-y-2">
                  {outputLines.map((line, i) => (
                    <motion.div
                      key={line.label}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + i * 0.15 }}
                    >
                      <p className={`text-[10px] font-bold uppercase tracking-widest mb-0.5 ${line.color}`}>{line.label}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{line.value}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 border-t border-slate-800 flex items-center justify-between">
                <div className="flex gap-1.5">
                  {['Instagram', 'TikTok'].map(p => (
                    <span key={p} className="text-[10px] font-medium text-slate-500 px-2 py-1 rounded-md bg-slate-800">
                      {p}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors">
                  <FiCopy size={12} />
                  Copy all
                </button>
              </div>
            </div>

            {/* Floating speed badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 flex items-center gap-2 px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-2xl shadow-xl"
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                <FiZap className="text-white" size={13} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Generated in 2.1s</p>
                <p className="text-[10px] text-slate-500">1 AI credit used</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
