'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiCalendar, FiUsers, FiCode, FiCheckCircle,
  FiInstagram, FiYoutube, FiFacebook, FiCheck, FiArrowRight,
} from 'react-icons/fi'
import { SiTiktok } from 'react-icons/si'
import { HiOutlineSparkles } from 'react-icons/hi'

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
}

const calData = [
  { day: 'Mon', posts: [{ icon: FiInstagram, bg: 'from-pink-500 to-rose-600',    time: '9am' }] },
  { day: 'Tue', posts: [{ icon: FiInstagram, bg: 'from-pink-500 to-rose-600',    time: '12pm' }, { icon: SiTiktok, bg: 'from-slate-600 to-slate-800', time: '6pm' }] },
  { day: 'Wed', posts: [{ icon: FiYoutube,   bg: 'from-red-500 to-red-700',      time: '3pm' }] },
  { day: 'Thu', posts: [{ icon: FiInstagram, bg: 'from-pink-500 to-rose-600',    time: '9am' }, { icon: SiTiktok, bg: 'from-slate-600 to-slate-800', time: '6pm' }] },
  { day: 'Fri', posts: [{ icon: FiInstagram, bg: 'from-pink-500 to-rose-600',    time: '12pm' }, { icon: FiYoutube, bg: 'from-red-500 to-red-700', time: '4pm' }] },
  { day: 'Sat', posts: [] },
  { day: 'Sun', posts: [{ icon: SiTiktok,    bg: 'from-slate-600 to-slate-800',  time: '7pm' }, { icon: FiInstagram, bg: 'from-pink-500 to-rose-600', time: '8pm' }] },
]

const clients = [
  { initials: 'AP', name: 'Apex Studios',  posts: 18, max: 20, platforms: [FiInstagram, SiTiktok, FiYoutube],           color: 'from-violet-500 to-purple-600', active: true  },
  { initials: 'BD', name: 'Brand Delta',   posts: 9,  max: 20, platforms: [FiInstagram, FiFacebook],                    color: 'from-blue-500 to-indigo-600',   active: true  },
  { initials: 'NR', name: 'Nova Retail',   posts: 20, max: 20, platforms: [FiInstagram, SiTiktok, FiFacebook],          color: 'from-emerald-500 to-teal-600',  active: true  },
  { initials: 'CR', name: 'Crest Agency',  posts: 6,  max: 20, platforms: [FiInstagram],                                color: 'from-slate-500 to-slate-700',   active: false },
]

const apiPlatforms = [
  { icon: FiInstagram, bg: 'from-pink-500 to-rose-600',   name: 'Instagram', ms: '124ms', done: true  },
  { icon: SiTiktok,    bg: 'from-slate-600 to-slate-800', name: 'TikTok',    ms: '89ms',  done: true  },
  { icon: FiYoutube,   bg: 'from-red-500 to-red-700',     name: 'YouTube',   ms: '—',     done: false },
]

function CalendarMockup() {
  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-slate-400">This week</span>
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20">
          <FiCheckCircle size={9} className="text-violet-400" />
          <span className="text-[10px] text-violet-300 font-semibold">10 scheduled</span>
        </div>
      </div>
      <div className="flex gap-2 flex-1">
        {calData.map((col, di) => (
          <div key={col.day} className="flex-1 flex flex-col gap-1.5">
            <span className="text-[9px] text-slate-600 text-center block font-medium">{col.day}</span>
            {col.posts.length > 0 ? col.posts.map((p, pi) => (
              <motion.div
                key={pi}
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + di * 0.06 + pi * 0.04 }}
                className={`w-full h-10 rounded-xl bg-gradient-to-b ${p.bg} flex flex-col items-center justify-center gap-0.5 origin-top`}
              >
                <p.icon size={11} color="#fff" />
                <span className="text-[7px] text-white/70 leading-none">{p.time}</span>
              </motion.div>
            )) : (
              <div className="w-full h-10 rounded-xl border border-dashed border-slate-800" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function AgencyMockup() {
  return (
    <div className="h-full flex flex-col p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold text-slate-400">Client Workspaces</span>
        <span className="text-[10px] text-slate-500 bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700">4 active</span>
      </div>
      <div className="space-y-2.5 flex-1">
        {clients.map((c, i) => (
          <motion.div key={c.name}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/50"
          >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[10px] font-bold text-white">{c.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-semibold text-white truncate">{c.name}</p>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${c.active ? 'bg-emerald-400' : 'bg-slate-600'}`} />
              </div>
              <div className="flex items-center gap-1.5">
                {c.platforms.map((Icon, pi) => <Icon key={pi} size={9} className="text-slate-500" />)}
                <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden ml-1">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(c.posts / c.max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                    className={`h-full rounded-full bg-gradient-to-r ${c.color}`}
                  />
                </div>
                <span className="text-[9px] text-slate-600">{c.posts}/{c.max}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DevMockup() {
  return (
    <div className="h-full flex flex-col p-6">
      <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/50 mb-3 font-mono">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">POST</span>
          <span className="text-xs text-slate-400">/api/posts</span>
          <span className="ml-auto text-[10px] text-emerald-400 font-semibold">200 OK</span>
        </div>
        <div className="pl-3 border-l border-slate-700 space-y-1">
          <p className="text-xs"><span className="text-violet-400">platforms</span><span className="text-slate-600">: </span><span className="text-amber-300">&quot;ig,tt,yt&quot;</span></p>
          <p className="text-xs"><span className="text-violet-400">caption</span><span className="text-slate-600">: </span><span className="text-amber-300">&quot;Golden hour ✨&quot;</span></p>
          <p className="text-xs"><span className="text-violet-400">media</span><span className="text-slate-600">: </span><span className="text-slate-400">beach.mp4</span></p>
        </div>
      </div>
      <div className="space-y-2 flex-1">
        {apiPlatforms.map((p, i) => (
          <motion.div key={p.name}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 + i * 0.12 }}
            className="flex items-center gap-3 p-3 bg-slate-800/40 rounded-xl border border-slate-700/40"
          >
            {p.done
              ? <FiCheckCircle className="text-emerald-400 flex-shrink-0" size={13} />
              : <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                  className="w-3.5 h-3.5 rounded-full border border-t-transparent border-amber-400 flex-shrink-0" />
            }
            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${p.bg} flex items-center justify-center flex-shrink-0`}>
              <p.icon size={11} color="#fff" />
            </div>
            <span className="text-sm text-slate-300 flex-1 font-mono">{p.name}</span>
            <span className={`text-xs font-mono font-semibold ${p.done ? 'text-emerald-400' : 'text-amber-400'}`}>{p.ms}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const CASES = [
  {
    id: 'creators',
    label: 'Content Creators',
    icon: FiCalendar,
    gradient: 'from-violet-500 to-purple-600',
    tabActive: 'bg-violet-500/15 border-violet-500/30 text-violet-300',
    ring: 'border-violet-500/25',
    headline: 'Schedule a week in 10 minutes',
    desc: 'Drop your media, let Kabon AI write the captions, and auto-publish across every platform. Spend time creating, not copy-pasting.',
    bullets: [
      'AI-generated captions, titles & hashtags',
      'Bulk-schedule up to 30 posts at once',
      'Unified calendar across all platforms',
      'Best-time recommendations per platform',
    ],
    stat: { value: '10×', label: 'faster publishing' },
    Mockup: CalendarMockup,
  },
  {
    id: 'agencies',
    label: 'Agencies',
    icon: FiUsers,
    gradient: 'from-blue-500 to-indigo-600',
    tabActive: 'bg-blue-500/15 border-blue-500/30 text-blue-300',
    ring: 'border-blue-500/25',
    headline: 'Manage 50+ clients at once',
    desc: 'Switch workspaces, collaborate with your team, and deliver white-label reports to every client. Scale without the chaos.',
    bullets: [
      'Unlimited client workspaces',
      'Role-based team access',
      'White-label dashboard & reports',
      'Centralized billing across accounts',
    ],
    stat: { value: '50+', label: 'clients, one dashboard' },
    Mockup: AgencyMockup,
  },
  {
    id: 'developers',
    label: 'SaaS & Developers',
    icon: FiCode,
    gradient: 'from-emerald-500 to-teal-600',
    tabActive: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    ring: 'border-emerald-500/25',
    headline: 'Add publishing in days, not months',
    desc: 'One REST API across all platforms. OAuth, webhooks, and MCP support included. Ship social features without the infrastructure headache.',
    bullets: [
      'Single REST API for all platforms',
      'OAuth 2.0 & webhook callbacks',
      'MCP integration for AI agents',
      'Comprehensive docs & SDKs',
    ],
    stat: { value: '<200ms', label: 'average API response' },
    Mockup: DevMockup,
  },
]

export default function UseCases() {
  const [active, setActive] = useState(0)
  const c = CASES[active]

  return (
    <section id="use-cases" className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-violet-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div variants={fade} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
            <HiOutlineSparkles className="text-violet-400" size={13} />
            <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">Built for Everyone</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Who uses{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">KabonShare?</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            From solo creators to enterprise agencies — built to scale with your needs.
          </p>
        </motion.div>

        {/* Tab selector */}
        <motion.div variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="flex justify-center mb-6">
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-2xl gap-1">
            {CASES.map((cas, i) => (
              <button
                key={cas.id}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border
                  ${active === i ? cas.tabActive : 'text-slate-500 hover:text-slate-300 border-transparent'}`}
              >
                <cas.icon size={14} />
                <span className="hidden sm:inline">{cas.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active card */}
        <motion.div variants={fade} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`bg-slate-900 rounded-3xl border ${c.ring} overflow-hidden`}
            >
              <div className={`h-1 w-full bg-gradient-to-r ${c.gradient}`} />

              <div className="grid grid-cols-1 lg:grid-cols-2">

                {/* Left: mockup */}
                <div className="border-b lg:border-b-0 lg:border-r border-slate-800 min-h-[300px]">
                  <c.Mockup />
                </div>

                {/* Right: content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className={`inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-lg bg-gradient-to-r ${c.gradient} mb-5`}>
                    <c.icon size={13} color="#fff" />
                    <span className="text-xs font-bold text-white">{c.label}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 leading-snug">{c.headline}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">{c.desc}</p>

                  <ul className="space-y-2.5 mb-8">
                    {c.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                        <span className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                          <FiCheck size={10} className="text-emerald-400" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-5">
                    <div>
                      <p className={`text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${c.gradient}`}>{c.stat.value}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{c.stat.label}</p>
                    </div>
                    <a
                      href="https://dashboard.kabonshare.com/signup"
                      className={`ml-auto flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${c.gradient} hover:opacity-90 transition-opacity shadow-lg`}
                    >
                      Get started
                      <FiArrowRight size={13} />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
