'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import {
  HiOutlineArrowRight, HiOutlineVideoCamera, HiOutlineOfficeBuilding,
  HiOutlineChartBar, HiOutlineCode, HiOutlineCheck, HiOutlineClock,
  HiOutlineGlobeAlt, HiOutlineUserGroup, HiOutlineLightningBolt,
  HiOutlinePhotograph, HiOutlineRefresh, HiOutlineX,
} from 'react-icons/hi'
import { FiCheck, FiInstagram, FiFacebook, FiYoutube, FiCheckCircle } from 'react-icons/fi'
import { SiTiktok, SiThreads } from 'react-icons/si'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'

// ─── Mockup components ────────────────────────────────────────────────────────

function CreatorMockup() {
  const platforms = [
    { icon: FiInstagram, name: 'Instagram', followers: '12.4K', bg: 'from-pink-500 to-rose-600',   delay: 0.5  },
    { icon: SiTiktok,    name: 'TikTok',    followers: '8.2K',  bg: 'from-slate-600 to-slate-800', delay: 0.72 },
    { icon: FiYoutube,   name: 'YouTube',   followers: '3.1K',  bg: 'from-red-500 to-red-700',     delay: 0.94 },
    { icon: SiThreads,   name: 'Threads',   followers: '5.7K',  bg: 'from-slate-500 to-slate-700', delay: 1.16 },
  ]
  return (
    <div className="p-5 h-full flex flex-col gap-3">
      {/* Window chrome */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
        </div>
        <span className="text-[10px] text-slate-600 font-mono">new-post.draft</span>
        <div className="w-16" />
      </div>

      {/* Post composer card */}
      <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
        {/* Thumbnail — looks like real video content */}
        <div className="relative h-32 bg-gradient-to-br from-violet-700 via-purple-800 to-pink-900">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-9 h-9 rounded-full bg-white/15 border border-white/25 flex items-center justify-center">
              <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-t-transparent border-b-transparent border-l-white ml-0.5" />
            </div>
          </div>
          {/* File info bottom-right */}
          <div className="absolute bottom-2 right-2.5 flex items-center gap-1.5 bg-black/50 rounded-lg px-2 py-0.5">
            <span className="text-[9px] text-white font-mono">beach.mp4</span>
            <span className="text-[9px] text-slate-400">0:34</span>
          </div>
          {/* Status top-right */}
          <div className="absolute top-2.5 right-2.5">
            <span className="text-[9px] font-bold text-white bg-violet-600 px-2 py-0.5 rounded-full">
              Scheduled
            </span>
          </div>
        </div>

        {/* Caption + meta */}
        <div className="px-3.5 py-3">
          <p className="text-[11px] text-slate-200 leading-relaxed mb-2">
            Golden hour ✨{' '}
            <span className="text-violet-400">#travel</span>{' '}
            <span className="text-violet-400">#beach</span>{' '}
            <span className="text-violet-400">#sunset</span>
          </p>
          <div className="flex items-center gap-2 text-[10px] text-slate-600">
            <span>4 platforms</span>
            <span>·</span>
            <span>Thu, 6:00 PM</span>
            <span className="ml-auto text-emerald-400 font-semibold">Ready</span>
          </div>
        </div>
      </div>

      {/* Platform list */}
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex items-center justify-between px-0.5">
          <p className="text-[10px] text-slate-600 font-semibold uppercase tracking-widest">Publishing to</p>
          <p className="text-[10px] text-emerald-400 font-semibold">4 / 4</p>
        </div>
        {platforms.map((p) => (
          <motion.div key={p.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 px-3 py-2 bg-slate-800 rounded-xl border border-slate-700"
          >
            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${p.bg} flex items-center justify-center flex-shrink-0`}>
              <p.icon size={11} color="#fff" />
            </div>
            <span className="text-xs text-slate-300 flex-1">{p.name}</span>
            <span className="text-[10px] text-slate-600 tabular-nums">{p.followers}</span>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: p.delay + 0.18, type: 'spring', stiffness: 400, damping: 15 }}
            >
              <FiCheckCircle size={13} className="text-emerald-400" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function AgencyMockup() {
  const clients = [
    { initials: 'AP', name: 'Apex Studios',  posts: 18, max: 20, color: 'from-violet-500 to-purple-600', active: true  },
    { initials: 'BD', name: 'Brand Delta',   posts: 9,  max: 20, color: 'from-blue-500 to-indigo-600',   active: true  },
    { initials: 'NR', name: 'Nova Retail',   posts: 20, max: 20, color: 'from-emerald-500 to-teal-600',  active: true  },
    { initials: 'CR', name: 'Crest Agency',  posts: 6,  max: 20, color: 'from-slate-500 to-slate-700',   active: false },
  ]
  return (
    <div className="p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold text-slate-400">Workspaces</p>
        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-semibold">
          3 active
        </span>
      </div>
      <div className="space-y-2.5 flex-1">
        {clients.map((c, i) => (
          <motion.div key={c.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 p-3 bg-slate-800 rounded-xl border border-slate-700"
          >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[10px] font-bold text-white">{c.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-semibold text-white truncate">{c.name}</p>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${c.active ? 'bg-emerald-400' : 'bg-slate-600'}`} />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(c.posts / c.max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${c.color}`}
                  />
                </div>
                <span className="text-[9px] text-slate-600 flex-shrink-0">{c.posts}/{c.max}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function BrandsMockup() {
  const team = [
    { initials: 'SK', color: 'from-amber-500 to-orange-600',  delay: 0.35 },
    { initials: 'LM', color: 'from-blue-500 to-indigo-600',   delay: 0.48 },
    { initials: 'JT', color: 'from-pink-500 to-rose-600',     delay: 0.61 },
    { initials: 'AK', color: 'from-slate-500 to-slate-700',   delay: 0.74 },
  ]
  const stats = [
    { label: 'Impressions', value: '284K', change: '+18%' },
    { label: 'Engagement',  value: '12.4K', change: '+24%' },
    { label: 'Posts live',  value: '47',    change: null },
  ]
  const upcoming = [
    { icon: FiInstagram, bg: 'from-pink-500 to-rose-600',   day: 'Mon', time: '9am',  status: 'live',      statusColor: 'text-emerald-400 bg-emerald-500/10' },
    { icon: FiYoutube,   bg: 'from-red-500 to-red-700',     day: 'Tue', time: '3pm',  status: 'scheduled', statusColor: 'text-amber-400 bg-amber-500/10' },
    { icon: SiTiktok,    bg: 'from-slate-600 to-slate-800', day: 'Wed', time: '6pm',  status: 'draft',     statusColor: 'text-slate-400 bg-slate-700' },
  ]
  return (
    <div className="p-5 h-full flex flex-col gap-3">
      {/* Campaign card */}
      <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Active Campaign</p>
            <p className="text-sm font-bold text-white leading-tight">Q2 — Summer Collection</p>
          </div>
          <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex-shrink-0">Active</span>
        </div>

        {/* Progress */}
        <div className="mb-3.5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-slate-500">Campaign progress</span>
            <span className="text-[10px] text-slate-400 font-semibold tabular-nums">47 / 60</span>
          </div>
          <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '78%' }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
            />
          </div>
        </div>

        {/* Team avatars */}
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            {team.map((m) => (
              <motion.div key={m.initials}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: m.delay, type: 'spring', stiffness: 320 }}
                className={`w-6 h-6 rounded-full bg-gradient-to-br ${m.color} border-2 border-slate-800 flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-[8px] font-bold text-white">{m.initials}</span>
              </motion.div>
            ))}
          </div>
          <span className="text-[10px] text-slate-500">4 team members</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + i * 0.08 }}
            className="bg-slate-800 rounded-xl p-2.5 border border-slate-700 text-center"
          >
            <p className="text-sm font-bold text-white">{s.value}</p>
            <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">{s.label}</p>
            {s.change && <p className="text-[9px] text-emerald-400 font-semibold mt-0.5">{s.change}</p>}
          </motion.div>
        ))}
      </div>

      {/* Upcoming */}
      <div className="flex-1 space-y-1.5">
        <p className="text-[10px] text-slate-600 font-semibold uppercase tracking-widest">Upcoming Posts</p>
        {upcoming.map((u, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 px-3 py-2 bg-slate-800 rounded-xl border border-slate-700"
          >
            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${u.bg} flex items-center justify-center flex-shrink-0`}>
              <u.icon size={10} color="#fff" />
            </div>
            <span className="text-xs text-slate-300 flex-1">{u.day} · {u.time}</span>
            <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md ${u.statusColor}`}>{u.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DevMockup() {
  const platforms = [
    { icon: FiInstagram, bg: 'from-pink-500 to-rose-600',   name: 'Instagram', ms: '124ms', delay: 0.6  },
    { icon: SiTiktok,    bg: 'from-slate-600 to-slate-800', name: 'TikTok',    ms: '89ms',  delay: 0.85 },
    { icon: FiYoutube,   bg: 'from-red-500 to-red-700',     name: 'YouTube',   ms: '—',     delay: 1.1  },
  ]
  return (
    <div className="p-5 h-full flex flex-col gap-3">
      {/* Code block */}
      <div className="bg-slate-950 rounded-2xl border border-slate-800 p-4 font-mono text-[11px]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">POST</span>
          <span className="text-slate-500">/api/posts</span>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="ml-auto text-emerald-400 font-semibold text-[10px]"
          >
            200 OK
          </motion.span>
        </div>
        <div className="pl-3 border-l border-slate-800 space-y-1">
          <p><span className="text-violet-400">platforms</span><span className="text-slate-600">: </span><span className="text-amber-300">&quot;ig,tt,yt&quot;</span></p>
          <p><span className="text-violet-400">caption</span><span className="text-slate-600">: </span><span className="text-amber-300">&quot;Golden hour ✨&quot;</span></p>
          <p><span className="text-violet-400">media</span><span className="text-slate-600">: </span><span className="text-slate-400">beach.mp4</span></p>
        </div>
      </div>

      {/* Platform responses */}
      <div className="space-y-2 flex-1">
        <p className="text-[10px] text-slate-600 font-semibold uppercase tracking-widest">Platform responses</p>
        {platforms.map((p) => (
          <motion.div key={p.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 p-3 bg-slate-800 rounded-xl border border-slate-700"
          >
            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${p.bg} flex items-center justify-center flex-shrink-0`}>
              <p.icon size={11} color="#fff" />
            </div>
            <span className="text-xs text-slate-300 flex-1 font-mono">{p.name}</span>
            {p.ms === '—'
              ? <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1.2, ease: 'linear' }}
                  className="w-3 h-3 rounded-full border border-t-transparent border-amber-400 flex-shrink-0" />
              : <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: p.delay + 0.2 }}
                  className="text-[10px] font-mono font-semibold text-emerald-400"
                >
                  {p.ms}
                </motion.span>
            }
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const caseStudies = [
  {
    id: 'creators',
    icon: HiOutlineVideoCamera,
    label: 'Creators',
    title: 'Post once.\nReach every platform.',
    subtitle: 'Stop re-uploading. Let KabonShare publish to all your platforms at the exact same time — with captions formatted for each one.',
    gradient: 'from-violet-500 to-purple-600',
    glowColor: 'bg-violet-600/10',
    textGradient: 'from-violet-400 to-purple-400',
    stats: [
      { value: '5+',  label: 'Platforms at once' },
      { value: '80%', label: 'Less time uploading' },
      { value: '3×',  label: 'More reach' },
    ],
    before: [
      'Manually uploading the same video to 5 platforms',
      'Reformatting captions for each network',
      'Missing optimal posting times',
      '3+ hours a day on distribution alone',
    ],
    after: [
      'Upload once, publish everywhere simultaneously',
      'Auto-formatted captions and hashtags per platform',
      'Smart scheduling for peak engagement',
      'Distribution takes minutes, not hours',
    ],
    workflow: [
      { step: '1', text: 'Upload your Reel, Short, or TikTok',  icon: HiOutlinePhotograph },
      { step: '2', text: 'Select platforms and schedule time',   icon: HiOutlineClock },
      { step: '3', text: 'KabonShare publishes everywhere',      icon: HiOutlineGlobeAlt },
    ],
    Mockup: CreatorMockup,
  },
  {
    id: 'agencies',
    icon: HiOutlineOfficeBuilding,
    label: 'Agencies',
    title: 'Every client.\nOne dashboard.',
    subtitle: 'Manage unlimited client workspaces from a single login. Assign roles, set approvals, and deliver results — without the chaos.',
    gradient: 'from-blue-500 to-indigo-600',
    glowColor: 'bg-blue-600/10',
    textGradient: 'from-blue-400 to-indigo-400',
    stats: [
      { value: '85%', label: 'Time saved' },
      { value: '50+', label: 'Accounts managed' },
      { value: '10×', label: 'Faster campaigns' },
    ],
    before: [
      'Dozens of separate platform logins per client',
      'No centralized view of what went live',
      'Team members clashing with no role separation',
      'Billable hours lost to manual publishing',
    ],
    after: [
      'One login for all client workspaces',
      'Unified calendar across all accounts',
      'Role-based access with approval workflows',
      'Automated publishing frees up billable hours',
    ],
    workflow: [
      { step: '1', text: 'Create an isolated workspace per client', icon: HiOutlineUserGroup },
      { step: '2', text: 'Connect and manage their social accounts', icon: HiOutlineGlobeAlt },
      { step: '3', text: 'Schedule, approve, and publish at scale',  icon: HiOutlineCheck },
    ],
    Mockup: AgencyMockup,
  },
  {
    id: 'brands',
    icon: HiOutlineChartBar,
    label: 'Brands',
    title: 'Run campaigns.\nNot spreadsheets.',
    subtitle: 'Plan, schedule, and track every campaign in one workspace. Your whole team aligned — from content strategy to publish.',
    gradient: 'from-amber-500 to-orange-600',
    glowColor: 'bg-amber-600/10',
    textGradient: 'from-amber-400 to-orange-400',
    stats: [
      { value: '3×',  label: 'Campaigns shipped' },
      { value: '60%', label: 'Less back-and-forth' },
      { value: '30%', label: 'Higher engagement' },
    ],
    before: [
      'Content scattered across Notion, Slack, and email',
      'No single view of what is scheduled or live',
      'Brand voice inconsistent across channels',
      'Approvals done through endless message threads',
    ],
    after: [
      'Unified campaign calendar across all platforms',
      'Real-time visibility of every scheduled and live post',
      'Media library keeps brand assets consistent',
      'Role-based approval flows built in',
    ],
    workflow: [
      { step: '1', text: 'Plan your campaign in the content calendar', icon: HiOutlineClock },
      { step: '2', text: 'Assign posts to team members for review',    icon: HiOutlineUserGroup },
      { step: '3', text: 'Approve and publish with one click',         icon: HiOutlineCheck },
    ],
    Mockup: BrandsMockup,
  },
  {
    id: 'saas',
    icon: HiOutlineCode,
    label: 'SaaS & Developers',
    title: 'Ship social publishing\nin days, not months.',
    subtitle: 'One REST API across all platforms. We handle OAuth, token refresh, rate limits, and API changes. Your engineers stay focused on your product.',
    gradient: 'from-emerald-500 to-teal-600',
    glowColor: 'bg-emerald-600/10',
    textGradient: 'from-emerald-400 to-teal-400',
    stats: [
      { value: '< 1hr', label: 'To first live post' },
      { value: '3+ mo', label: 'Dev time saved' },
      { value: '99.9%', label: 'Uptime SLA' },
    ],
    before: [
      'Months of engineering building platform integrations',
      'Constant maintenance as social APIs change',
      'OAuth token bugs causing silent publish failures',
      'Core product roadmap blocked by social features',
    ],
    after: [
      'One REST API for all platforms, ready in hours',
      'We handle all API changes and token refreshes',
      'Automatic retry logic and webhook notifications',
      'Your team ships product features, not plumbing',
    ],
    workflow: [
      { step: '1', text: 'Grab your API key from the dashboard',  icon: HiOutlineLightningBolt },
      { step: '2', text: 'POST media to /api/posts',              icon: HiOutlineCode },
      { step: '3', text: 'We publish and fire a webhook',         icon: HiOutlineRefresh },
    ],
    Mockup: DevMockup,
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Use Cases — KabonShare</title>
        <meta name="description" content="See how creators, agencies, e-commerce brands, and SaaS products use KabonShare to publish smarter." />
        <link rel="canonical" href="https://kabonshare.com/case-studies/" />
        <meta property="og:title" content="Use Cases — KabonShare" />
        <meta property="og:description" content="See how creators, agencies, e-commerce brands, and SaaS products use KabonShare to publish smarter." />
        <meta property="og:url" content="https://kabonshare.com/case-studies/" />
      </Head>

      <div className="min-h-screen bg-slate-950 overflow-x-hidden">
        <Navbar />

        {/* ── Hero ── */}
        <section className="pt-36 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/6 rounded-full blur-[140px]" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-semibold text-violet-300 tracking-wider uppercase">Use Cases</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.05]">
              Built for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                every workflow.
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
              Whether you&apos;re a solo creator, an agency managing 50 clients, or a developer building social features — KabonShare fits your workflow.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2">
              {caseStudies.map((s, i) => (
                <motion.a key={s.id} href={`#${s.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + i * 0.07 }}
                  className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm font-semibold text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200">
                  <span className={`w-5 h-5 rounded-lg bg-gradient-to-br ${s.gradient} flex items-center justify-center flex-shrink-0`}>
                    <s.icon className="text-white" style={{ fontSize: 10 }} />
                  </span>
                  {s.label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Case study sections ── */}
        {caseStudies.map((study, index) => {
          const isEven = index % 2 === 0
          return (
            <section key={study.id} id={study.id}
              className="relative py-28 border-t border-slate-800 overflow-hidden">

              {/* Colored glow */}
              <div className={`absolute pointer-events-none ${isEven ? 'right-0 top-1/2 -translate-y-1/2' : 'left-0 top-1/2 -translate-y-1/2'} w-[500px] h-[500px] ${study.glowColor} rounded-full blur-[120px]`} />

              {/* Large faded section number */}
              <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? '-right-8' : '-left-8'} text-[180px] md:text-[220px] font-black text-slate-900 select-none pointer-events-none leading-none`}>
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Top row: content + mockup */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-16 ${isEven ? '' : 'lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1'}`}>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${study.gradient} mb-6`}>
                      <study.icon className="text-white" style={{ fontSize: 13 }} />
                      <span className="text-xs font-bold text-white tracking-wide">{study.label}</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 leading-[1.1] whitespace-pre-line">
                      {study.title}
                    </h2>

                    <p className="text-base text-slate-400 leading-relaxed mb-8 max-w-md">
                      {study.subtitle}
                    </p>

                    {/* Stats */}
                    <div className="flex items-start gap-8">
                      {study.stats.map((stat, i) => (
                        <motion.div key={i}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.1 }}
                        >
                          <p className={`text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${study.textGradient}`}>
                            {stat.value}
                          </p>
                          <p className="text-xs text-slate-500 mt-1">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mockup */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-10 blur-[60px] rounded-full scale-110`} />
                    <div className="relative bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl shadow-black/40 min-h-[340px]">
                      <study.Mockup />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom row: Before/After + Workflow */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-4"
                >
                  {/* Before/After — spans 2 cols */}
                  <div className="lg:col-span-2 rounded-2xl border border-slate-800 overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
                      {/* Before */}
                      <div className="p-6 sm:border-r border-slate-800 border-b sm:border-b-0">
                        <div className="flex items-center gap-2.5 mb-5">
                          <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                            <HiOutlineX className="text-red-400" style={{ fontSize: 10 }} />
                          </div>
                          <span className="text-[11px] font-semibold text-red-400 uppercase tracking-widest">Without KabonShare</span>
                        </div>
                        <div className="space-y-3.5">
                          {study.before.map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm text-slate-500 leading-relaxed">
                              <span className="text-slate-700 mt-0.5 flex-shrink-0 select-none">—</span>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* After */}
                      <div className="p-6 bg-slate-900">
                        <div className="flex items-center gap-2.5 mb-5">
                          <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                            <FiCheck className="text-emerald-400" size={10} />
                          </div>
                          <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest">With KabonShare</span>
                        </div>
                        <div className="space-y-3.5">
                          {study.after.map((item, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed">
                              <FiCheck className="text-emerald-400 mt-0.5 flex-shrink-0" size={13} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Workflow — 1 col */}
                  <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                    <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-6">How it works</p>
                    <div className="space-y-0">
                      {study.workflow.map((w, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${study.gradient} flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0`}>
                              {w.step}
                            </div>
                            {i < study.workflow.length - 1 && (
                              <div className="w-px flex-1 my-1.5 bg-slate-800" />
                            )}
                          </div>
                          <div className={`${i < study.workflow.length - 1 ? 'pb-5' : ''}`}>
                            <p className="text-sm text-slate-300 leading-snug pt-1.5">{w.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

              </div>
            </section>
          )
        })}

        {/* ── CTA ── */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
                Ready to publish smarter?
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-md mx-auto">
                Free tier available. No credit card required. Set up in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={siteConfig.dashboard + '/signup'}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-colors shadow-lg shadow-indigo-500/20"
                >
                  Start for Free
                  <HiOutlineArrowRight />
                </a>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-slate-300 px-8 py-4 rounded-xl font-semibold text-base hover:border-slate-700 hover:text-white transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
