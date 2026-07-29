'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  HiOutlineArrowRight, HiOutlineVideoCamera, HiOutlineOfficeBuilding,
  HiOutlineChartBar, HiOutlineCode, HiOutlineCheck, HiOutlineClock,
  HiOutlineGlobeAlt, HiOutlineUserGroup, HiOutlineLightningBolt,
  HiOutlinePhotograph, HiOutlineRefresh, HiOutlineX, HiOutlineAcademicCap,
} from 'react-icons/hi'
import { FiCheck, FiInstagram, FiFacebook, FiYoutube, FiCheckCircle } from 'react-icons/fi'
import { SiTiktok, SiThreads } from 'react-icons/si'
import { siteConfig } from '../config/siteConfig'
import { USE_CASES } from '../config/useCases'

// Rich per-audience content + mockups for the /case-studies pages. Shared by the
// hub and every /case-studies/<slug> page, keyed by the same id as USE_CASES.

// ─── Mockup components ────────────────────────────────────────────────────────

function CreatorMockup() {
  const platforms = [
    { icon: FiInstagram, name: 'Instagram', tag: 'Reel',  followers: '12.4K', bg: 'from-pink-500 to-rose-600',   delay: 0.45 },
    { icon: SiTiktok,    name: 'TikTok',    tag: 'Video', followers: '8.2K',  bg: 'from-slate-700 to-slate-900', delay: 0.58 },
    { icon: FiYoutube,   name: 'YouTube',   tag: 'Short', followers: '3.1K',  bg: 'from-red-500 to-red-700',     delay: 0.71 },
    { icon: SiThreads,   name: 'Threads',   tag: 'Post',  followers: '5.7K',  bg: 'from-slate-600 to-slate-800', delay: 0.84 },
    { icon: FiFacebook,  name: 'Facebook',  tag: 'Reel',  followers: '9.8K',  bg: 'from-blue-500 to-indigo-600', delay: 0.97 },
  ]
  return (
    <div className="p-5 h-full flex flex-col gap-3">
      {/* Window chrome */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-line" />
          <div className="w-2.5 h-2.5 rounded-full bg-line" />
          <div className="w-2.5 h-2.5 rounded-full bg-line" />
        </div>
        <span className="text-[10px] text-muted font-mono">new-post.draft</span>
        <span className="text-[9px] font-semibold text-violet-500 bg-violet-500/12 px-2 py-0.5 rounded-full">Draft</span>
      </div>

      {/* Post composer card */}
      <div className="bg-surface rounded-2xl border border-line overflow-hidden">
        {/* Thumbnail */}
        <div className="relative h-32 bg-gradient-to-br from-violet-600 via-fuchsia-700 to-pink-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-11 h-11 rounded-full bg-white/95 flex items-center justify-center shadow-lg">
              <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-violet-600 ml-1" />
            </div>
          </div>
          {/* Format + duration bottom-left */}
          <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1.5">
            <span className="text-[9px] font-semibold text-white bg-black/55 backdrop-blur-sm rounded-md px-2 py-0.5">Reel · 9:16</span>
            <span className="text-[9px] font-mono text-white/90 bg-black/55 backdrop-blur-sm rounded-md px-1.5 py-0.5">0:34</span>
          </div>
          {/* Status top-right */}
          <div className="absolute top-2.5 right-2.5">
            <span className="text-[9px] font-bold text-white bg-violet-600 px-2 py-0.5 rounded-full shadow-md shadow-violet-900/30">Scheduled</span>
          </div>
        </div>

        {/* Caption + meta */}
        <div className="px-3.5 py-3">
          <div className="flex items-start gap-2 mb-2.5">
            <span className="flex-shrink-0 mt-px text-[8px] font-bold text-violet-500 bg-violet-500/12 px-1.5 py-1 rounded leading-none">✨ AI</span>
            <p className="text-[11px] text-body leading-relaxed">
              Golden hour ✨ chasing the last light before the weekend.{' '}
              <span className="text-violet-500 dark:text-violet-400">#travel</span>{' '}
              <span className="text-violet-500 dark:text-violet-400">#beach</span>{' '}
              <span className="text-violet-500 dark:text-violet-400">#sunset</span>
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-muted flex-wrap">
            <span className="font-medium text-body">5 platforms</span>
            <span>·</span>
            <span>Thu, 6:00 PM</span>
            <span className="inline-flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded font-semibold">Best time</span>
          </div>
        </div>
      </div>

      {/* Publishing list */}
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex items-center justify-between px-0.5">
          <p className="text-[10px] text-muted font-semibold uppercase tracking-widest">Publishing to</p>
          <p className="text-[10px] text-emerald-500 font-semibold">5 / 5 ready</p>
        </div>
        {platforms.map((p) => (
          <motion.div key={p.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 px-3 py-2 bg-surface rounded-xl border border-line"
          >
            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${p.bg} flex items-center justify-center flex-shrink-0`}>
              <p.icon size={13} color="#fff" />
            </div>
            <span className="text-xs text-body font-medium flex-1">{p.name}</span>
            <span className="text-[9px] font-medium text-muted border border-line rounded px-1.5 py-0.5">{p.tag}</span>
            <span className="text-[10px] text-muted tabular-nums w-11 text-right">{p.followers}</span>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: p.delay + 0.15, type: 'spring', stiffness: 400, damping: 15 }}
            >
              <FiCheckCircle size={14} className="text-emerald-500" />
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
        <p className="text-xs font-semibold text-muted">Workspaces</p>
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
            className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-line"
          >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[10px] font-bold text-white">{c.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1.5">
                <p className="text-xs font-semibold text-body truncate">{c.name}</p>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${c.active ? 'bg-emerald-400' : 'bg-line'}`} />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 bg-line rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(c.posts / c.max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.7, ease: 'easeOut' }}
                    className={`h-full rounded-full bg-gradient-to-r ${c.color}`}
                  />
                </div>
                <span className="text-[9px] text-muted flex-shrink-0">{c.posts}/{c.max}</span>
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
    { icon: SiTiktok,    bg: 'from-slate-600 to-slate-800', day: 'Wed', time: '6pm',  status: 'draft',     statusColor: 'text-muted bg-line' },
  ]
  return (
    <div className="p-5 h-full flex flex-col gap-3">
      {/* Campaign card */}
      <div className="bg-surface rounded-2xl p-4 border border-line">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-[10px] text-subtle uppercase tracking-wider mb-1">Active Campaign</p>
            <p className="text-sm font-bold text-body leading-tight">Q2 — Summer Collection</p>
          </div>
          <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full flex-shrink-0">Active</span>
        </div>

        {/* Progress */}
        <div className="mb-3.5">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] text-subtle">Campaign progress</span>
            <span className="text-[10px] text-muted font-semibold tabular-nums">47 / 60</span>
          </div>
          <div className="h-1.5 bg-line rounded-full overflow-hidden">
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
                className={`w-6 h-6 rounded-full bg-gradient-to-br ${m.color} border-2 border-line flex items-center justify-center flex-shrink-0`}
              >
                <span className="text-[8px] font-bold text-white">{m.initials}</span>
              </motion.div>
            ))}
          </div>
          <span className="text-[10px] text-subtle">4 team members</span>
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
            className="bg-surface rounded-xl p-2.5 border border-line text-center"
          >
            <p className="text-sm font-bold text-body">{s.value}</p>
            <p className="text-[9px] text-subtle mt-0.5 leading-tight">{s.label}</p>
            {s.change && <p className="text-[9px] text-emerald-400 font-semibold mt-0.5">{s.change}</p>}
          </motion.div>
        ))}
      </div>

      {/* Upcoming */}
      <div className="flex-1 space-y-1.5">
        <p className="text-[10px] text-muted font-semibold uppercase tracking-widest">Upcoming Posts</p>
        {upcoming.map((u, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-2.5 px-3 py-2 bg-surface rounded-xl border border-line"
          >
            <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${u.bg} flex items-center justify-center flex-shrink-0`}>
              <u.icon size={10} color="#fff" />
            </div>
            <span className="text-xs text-muted flex-1">{u.day} · {u.time}</span>
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
      <div className="bg-page rounded-2xl border border-line p-4 font-mono text-[11px]">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-md">POST</span>
          <span className="text-subtle">/api/posts</span>
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
        <div className="pl-3 border-l border-line space-y-1">
          <p><span className="text-violet-400">platforms</span><span className="text-muted">: </span><span className="text-amber-300">&quot;ig,tt,yt&quot;</span></p>
          <p><span className="text-violet-400">caption</span><span className="text-muted">: </span><span className="text-amber-300">&quot;Golden hour ✨&quot;</span></p>
          <p><span className="text-violet-400">media</span><span className="text-muted">: </span><span className="text-muted">beach.mp4</span></p>
        </div>
      </div>

      {/* Platform responses */}
      <div className="space-y-2 flex-1">
        <p className="text-[10px] text-muted font-semibold uppercase tracking-widest">Platform responses</p>
        {platforms.map((p) => (
          <motion.div key={p.name}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: p.delay, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-line"
          >
            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${p.bg} flex items-center justify-center flex-shrink-0`}>
              <p.icon size={11} color="#fff" />
            </div>
            <span className="text-xs text-muted flex-1 font-mono">{p.name}</span>
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

function SchoolsMockup() {
  const posts = [
    { dept: 'Athletics',  initials: 'AT', color: 'from-sky-500 to-blue-600',      text: 'Game day! Tip-off 7 PM 🏀',        status: 'Approved',  tone: 'text-emerald-500 bg-emerald-500/10' },
    { dept: 'Admissions', initials: 'AD', color: 'from-violet-500 to-purple-600', text: 'Open house this Saturday',          status: 'Pending',   tone: 'text-amber-500 bg-amber-500/10' },
    { dept: 'Alumni',     initials: 'AL', color: 'from-amber-500 to-orange-600',  text: 'Homecoming registration is live',   status: 'Scheduled', tone: 'text-sky-500 bg-sky-500/10' },
    { dept: 'Library',    initials: 'LB', color: 'from-emerald-500 to-teal-600',  text: 'Extended hours for finals week',    status: 'Approved',  tone: 'text-emerald-500 bg-emerald-500/10' },
  ]
  return (
    <div className="p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-semibold text-body">Approval queue</p>
        <span className="text-[10px] text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full font-semibold">1 awaiting</span>
      </div>
      <div className="space-y-2.5 flex-1">
        {posts.map((p, i) => (
          <motion.div key={p.dept}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 p-3 bg-surface rounded-xl border border-line"
          >
            <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[10px] font-bold text-white">{p.initials}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-body">{p.dept}</p>
              <p className="text-[11px] text-muted truncate">{p.text}</p>
            </div>
            <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${p.tone}`}>{p.status}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-9 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-600 flex items-center justify-center text-white text-xs font-semibold">Approve &amp; publish</div>
        <div className="w-9 h-9 rounded-xl border border-line flex items-center justify-center flex-shrink-0"><HiOutlineCheck className="text-muted" /></div>
      </div>
    </div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const CASE_STUDIES = [
  {
    id: 'creators',
    icon: HiOutlineVideoCamera,
    label: 'Creators',
    title: 'Grow everywhere.\nPost once.',
    subtitle: 'Upload one video and KabonShare turns it into a Reel, Short, TikTok, Thread and post — each captioned by AI and scheduled for when your fans are online. Reach all 9 networks in the time it used to take for one. Free to start.',
    gradient: 'from-violet-500 to-purple-600',
    glowColor: 'bg-violet-600/10',
    textGradient: 'from-violet-400 to-purple-400',
    stats: [
      { value: '9',     label: 'Networks, one upload' },
      { value: '3×',    label: 'The reach, same effort' },
      { value: '5 hrs', label: 'Saved every week' },
    ],
    pitch: 'A whole creator studio, not just a scheduler.',
    benefits: [
      { icon: HiOutlineLightningBolt, title: 'AI captions from your footage', desc: 'Titles, captions and hashtags written from the video itself — ready in seconds.' },
      { icon: HiOutlineGlobeAlt,      title: 'Publish to 9 networks',         desc: 'Instagram, TikTok, YouTube, Threads, Bluesky, Pinterest and more — from one composer.' },
      { icon: HiOutlineClock,         title: 'Best-time scheduling',          desc: 'Post when your audience is actually online, picked from your own data.' },
      { icon: HiOutlineRefresh,       title: 'Bulk-schedule a month',         desc: 'Queue weeks of content in one sitting with the bulk scheduler.' },
      { icon: HiOutlineChartBar,      title: 'Analytics that guide you',      desc: 'See what’s growing across every platform — and do more of it.' },
      { icon: HiOutlineVideoCamera,   title: 'Go live everywhere',            desc: 'Stream to all your platforms at once, right from KabonShare.' },
    ],
    before: [
      'Exporting and re-uploading the same clip to five apps',
      'Rewriting the caption and hashtags for every one',
      'Guessing when to post — and missing the window',
      'Hours gone before you’ve made anything new',
    ],
    after: [
      'Upload once, publish to every network in a click',
      'Captions and hashtags auto-tuned per platform',
      'Best-time slots picked from your own data',
      'Distribution done in minutes, not an afternoon',
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
    title: 'Every client.\nOne login.',
    subtitle: 'Run unlimited client workspaces from a single account — separate calendars, roles and approvals per brand. Bill the hours you used to lose to manual posting.',
    gradient: 'from-blue-500 to-indigo-600',
    glowColor: 'bg-blue-600/10',
    textGradient: 'from-blue-400 to-indigo-400',
    stats: [
      { value: '∞',   label: 'Client workspaces' },
      { value: '1',   label: 'Login for all of them' },
      { value: '85%', label: 'Less busywork' },
    ],
    pitch: 'One command centre for every client.',
    benefits: [
      { icon: HiOutlineUserGroup,  title: 'A workspace per client',   desc: 'Isolated accounts, assets and calendars — no cross-wires between brands.' },
      { icon: HiOutlineCheck,      title: 'Roles & approvals',        desc: 'Right access per teammate; route posts through client sign-off.' },
      { icon: HiOutlineClock,      title: 'One calendar, every brand', desc: 'Everything scheduled and live across all clients, at a glance.' },
      { icon: HiOutlineChartBar,   title: 'Reporting per client',     desc: 'Pull performance for each brand to prove the work you did.' },
      { icon: HiOutlineRefresh,    title: 'Bulk-schedule at scale',   desc: 'Queue a month of posts across every account in one go.' },
      { icon: HiOutlinePhotograph, title: 'Shared media libraries',   desc: 'Keep each client’s assets organised and on-brand.' },
    ],
    before: [
      'Juggling dozens of platform logins per client',
      'No single view of what actually went live',
      'Teammates stepping on each other with shared access',
      'Billable hours quietly lost to manual publishing',
    ],
    after: [
      'One account for every client workspace',
      'A unified calendar across all their accounts',
      'Role-based access with approval workflows built in',
      'Automated publishing hands the hours back to you',
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
    subtitle: 'Plan, assign, approve and publish every campaign in one place — your whole team, from strategy to publish, aligned on a single content calendar.',
    gradient: 'from-amber-500 to-orange-600',
    glowColor: 'bg-amber-600/10',
    textGradient: 'from-amber-400 to-orange-400',
    stats: [
      { value: '1',   label: 'Source of truth' },
      { value: '60%', label: 'Less back-and-forth' },
      { value: '3×',  label: 'More shipped' },
    ],
    pitch: 'Your whole team, on the same page.',
    benefits: [
      { icon: HiOutlineClock,         title: 'One shared calendar',  desc: 'Every post and campaign visible to the whole team in real time.' },
      { icon: HiOutlineCheck,         title: 'Built-in approvals',   desc: 'Route drafts for review and publish the second they’re signed off.' },
      { icon: HiOutlineUserGroup,     title: 'Team collaboration',   desc: 'Comments, roles and assignments keep everyone aligned.' },
      { icon: HiOutlinePhotograph,    title: 'Brand media library',  desc: 'Logos, colours and assets stay consistent across channels.' },
      { icon: HiOutlineLightningBolt, title: 'On-brand AI captions', desc: 'Draft captions in your brand voice in seconds.' },
      { icon: HiOutlineChartBar,      title: 'Campaign analytics',   desc: 'Track what each campaign actually drove.' },
    ],
    before: [
      'Content scattered across Notion, Slack and email',
      'No single view of what’s scheduled or already live',
      'Brand voice drifting from channel to channel',
      'Approvals buried in endless message threads',
    ],
    after: [
      'One campaign calendar across every platform',
      'Real-time visibility of every scheduled and live post',
      'A media library that keeps brand assets consistent',
      'Role-based approval flows built right in',
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
    title: 'Ship social publishing\nin an afternoon.',
    subtitle: 'One REST API for all 9 networks. We own OAuth, token refresh, rate limits and every platform change — so your engineers ship product, not plumbing.',
    gradient: 'from-emerald-500 to-teal-600',
    glowColor: 'bg-emerald-600/10',
    textGradient: 'from-emerald-400 to-teal-400',
    stats: [
      { value: '< 1 hr', label: 'To first live post' },
      { value: '9',      label: 'Networks, one API' },
      { value: '99.9%',  label: 'Uptime SLA' },
    ],
    pitch: 'A publishing backend you didn’t have to build.',
    benefits: [
      { icon: HiOutlineCode,          title: 'One REST API',         desc: 'A single consistent endpoint for all 9 networks.' },
      { icon: HiOutlineRefresh,       title: 'Webhooks & retries',   desc: 'Event webhooks and automatic retries — nothing fails silently.' },
      { icon: HiOutlineCheck,         title: 'OAuth handled for you', desc: 'We own tokens, refreshes, rate limits and API changes.' },
      { icon: HiOutlineLightningBolt, title: 'MCP server',           desc: 'Drive KabonShare from Claude, Cursor or your own agents.' },
      { icon: HiOutlineGlobeAlt,      title: '9 networks, one call', desc: 'Post everywhere without nine fragile integrations.' },
      { icon: HiOutlineChartBar,      title: 'Analytics endpoints',  desc: 'Pull performance data straight into your product.' },
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
  {
    id: 'schools',
    icon: HiOutlineAcademicCap,
    label: 'Schools',
    title: 'One voice.\nEvery department.',
    subtitle: 'Athletics, admissions, alumni, the library — every department publishing on-brand and on-schedule, with the comms team approving what goes out. All from one account.',
    gradient: 'from-sky-500 to-cyan-600',
    glowColor: 'bg-sky-600/10',
    textGradient: 'from-sky-400 to-cyan-400',
    stats: [
      { value: '1',    label: 'Account, every dept' },
      { value: '100%', label: 'On-brand & approved' },
      { value: '0',    label: 'Rogue posts' },
    ],
    pitch: 'A comms desk for the whole campus.',
    benefits: [
      { icon: HiOutlineUserGroup,  title: 'A space per department', desc: 'Athletics, admissions, alumni and more — organised, never tangled.' },
      { icon: HiOutlineCheck,      title: 'Comms approves first',   desc: 'Nothing goes live until the comms team signs it off.' },
      { icon: HiOutlineClock,      title: 'One campus calendar',    desc: 'Every announcement and event across departments in one view.' },
      { icon: HiOutlinePhotograph, title: 'On-brand assets',        desc: 'A shared library keeps logos, colours and crest consistent.' },
      { icon: HiOutlineGlobeAlt,   title: 'Every network students use', desc: 'Instagram, TikTok, YouTube, Threads and more — from one place.' },
      { icon: HiOutlineChartBar,   title: 'See what reaches students', desc: 'Analytics show which posts and channels actually land.' },
    ],
    before: [
      'A dozen department logins nobody can keep track of',
      'Off-brand posts going out with no oversight',
      'Announcements clashing or missed entirely',
      'Comms chasing everyone over email to review posts',
    ],
    after: [
      'Every department in one approval-first workspace',
      'Comms signs off before anything reaches students',
      'A single campus calendar keeps timing clean',
      'On-brand assets and voice, every single post',
    ],
    workflow: [
      { step: '1', text: 'Give each department its own space', icon: HiOutlineUserGroup },
      { step: '2', text: 'Staff draft; comms reviews and approves', icon: HiOutlineCheck },
      { step: '3', text: 'Publish on schedule, on every channel', icon: HiOutlineGlobeAlt },
    ],
    Mockup: SchoolsMockup,
  },
]

export const CASE_STUDY_BY_ID = Object.fromEntries(CASE_STUDIES.map((c) => [c.id, c]))

export const ACCENT = { creators: '#8b5cf6', agencies: '#3b82f6', brands: '#f59e0b', saas: '#10b981', schools: '#0ea5e9' }

// ─── Render pieces ────────────────────────────────────────────────────────────

// Sticky sub-nav: every audience as a link to its own page.
export function CaseStudyTabs({ activeId }) {
  return (
    <div className="sticky top-[68px] z-30 bg-[var(--nav-scrolled)] backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex gap-1 overflow-x-auto py-2.5 sm:justify-center [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {USE_CASES.map((t) => {
            const on = t.id === activeId
            const TabIcon = t.icon
            return (
              <Link key={t.id} href={`/case-studies/${t.slug}/`}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${on ? 'text-body' : 'text-muted hover:text-body'}`}
                style={on ? { background: `color-mix(in srgb, ${t.color} 14%, transparent)` } : undefined}>
                <TabIcon style={{ color: on ? t.color : 'currentColor', fontSize: 16 }} />
                {t.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// The full body for one audience: hero + mockup → toolkit → before/after + workflow.
export function CaseStudyBody({ id }) {
  const study = CASE_STUDY_BY_ID[id]
  const accent = ACCENT[id]
  if (!study) return null

  return (
    <div className="relative overflow-hidden">
      {/* Ambient accent glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-10 right-0 w-[600px] h-[500px] rounded-full blur-[130px] opacity-[0.12]" style={{ background: accent }} />
      </div>

      {/* Audience hero — content + mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 lg:pt-16 pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 mb-5">
              <span className="flex items-center justify-center w-9 h-9 rounded-xl" style={{ background: `color-mix(in srgb, ${accent} 15%, transparent)` }}>
                <study.icon style={{ color: accent, fontSize: 18 }} />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: accent }}>{study.label}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-[-0.03em] leading-[1.02] mb-5 whitespace-pre-line">
              {study.title}
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-md">{study.subtitle}</p>

            <div className="flex items-start gap-8 mb-9">
              {study.stats.map((stat, i) => (
                <div key={i}>
                  <p className={`font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${study.textGradient}`}>{stat.value}</p>
                  <p className="text-xs text-subtle mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <a href={`${siteConfig.dashboard}/signup`}
                className="group inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: accent, boxShadow: `0 12px 30px -12px ${accent}` }}>
                Get Started Free
                <HiOutlineArrowRight className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <Link href="/pricing" className="text-body font-semibold hover:text-primary transition-colors">View pricing →</Link>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-subtle">
              <FiCheck className="text-emerald-500" size={13} />
              Free forever plan · No card required · Set up in minutes
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 opacity-10 blur-[60px] rounded-full scale-110" style={{ background: accent }} />
            <div className="relative bg-surface rounded-3xl border border-line shadow-2xl shadow-black/20 min-h-[340px] overflow-hidden">
              <study.Mockup />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full toolkit — more than a scheduler */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-14 relative z-10">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: accent }}>More than a scheduler</span>
          <h2 className="font-display text-2xl md:text-3xl font-extrabold text-body tracking-[-0.02em] leading-[1.1] mt-2">{study.pitch}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {study.benefits.map((b) => {
            const BIcon = b.icon
            return (
              <div key={b.title} className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-line-strong">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl mb-3.5" style={{ background: `color-mix(in srgb, ${accent} 14%, transparent)` }}>
                  <BIcon style={{ color: accent, fontSize: 19 }} />
                </span>
                <h3 className="font-display font-bold text-body text-[15px] mb-1.5">{b.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Before / After + Workflow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 lg:pb-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Before/After — spans 2 cols */}
          <div className="lg:col-span-2 rounded-2xl border border-line overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
              <div className="p-6 sm:border-r border-line border-b sm:border-b-0">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center flex-shrink-0">
                    <HiOutlineX className="text-red-400" style={{ fontSize: 10 }} />
                  </div>
                  <span className="text-[11px] font-semibold text-red-400 uppercase tracking-widest">Without KabonShare</span>
                </div>
                <div className="space-y-3.5">
                  {study.before.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-subtle leading-relaxed">
                      <span className="text-subtle mt-0.5 flex-shrink-0 select-none">—</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-surface">
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                    <FiCheck className="text-emerald-400" size={10} />
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-widest">With KabonShare</span>
                </div>
                <div className="space-y-3.5">
                  {study.after.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-muted leading-relaxed">
                      <FiCheck className="text-emerald-400 mt-0.5 flex-shrink-0" size={13} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Workflow */}
          <div className="rounded-2xl border border-line bg-surface p-6">
            <p className="text-[10px] font-semibold text-muted uppercase tracking-widest mb-6">How it works</p>
            <div className="space-y-0">
              {study.workflow.map((w, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: accent }}>
                      {w.step}
                    </div>
                    {i < study.workflow.length - 1 && (
                      <div className="w-px flex-1 my-1.5 bg-line" />
                    )}
                  </div>
                  <div className={`${i < study.workflow.length - 1 ? 'pb-5' : ''}`}>
                    <p className="text-sm text-muted leading-snug pt-1.5">{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export function CaseStudyCTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-line">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-body tracking-[-0.025em] mb-5">
            Ready to publish smarter?
          </h2>
          <p className="text-base sm:text-lg text-muted mb-10 max-w-md mx-auto">
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
              className="inline-flex items-center justify-center gap-2 bg-surface border border-line text-muted px-8 py-4 rounded-xl font-semibold text-base hover:border-line hover:text-body transition-all"
            >
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
