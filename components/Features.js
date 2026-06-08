'use client'
import { motion } from 'framer-motion'
import { FiInstagram, FiFacebook, FiYoutube, FiClock, FiUsers, FiHardDrive, FiCpu, FiBarChart2, FiCheckCircle, FiCalendar, FiZap, FiFilm, FiImage, FiMusic, FiFileText, FiMessageSquare } from 'react-icons/fi'
import { SiTiktok, SiThreads, SiLinkedin, SiPinterest, SiBluesky } from 'react-icons/si'
import { BsTwitterX } from 'react-icons/bs'

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
}

const platforms = [
  { name: 'Instagram', icon: FiInstagram, color: '#fff', bg: 'from-pink-500 to-rose-600' },
  { name: 'TikTok', icon: SiTiktok, color: '#fff', bg: 'from-slate-700 to-slate-900' },
  { name: 'YouTube', icon: FiYoutube, color: '#fff', bg: 'from-red-500 to-red-700' },
  { name: 'Facebook', icon: FiFacebook, color: '#fff', bg: 'from-blue-500 to-blue-700' },
  { name: 'Threads', icon: SiThreads, color: '#fff', bg: 'from-slate-600 to-slate-800' },
  { name: 'X', icon: BsTwitterX, color: '#fff', bg: 'from-slate-700 to-slate-900' },
  { name: 'LinkedIn', icon: SiLinkedin, color: '#fff', bg: 'from-blue-600 to-blue-800' },
  { name: 'Bluesky', icon: SiBluesky, color: '#fff', bg: 'from-sky-400 to-blue-500' },
  { name: 'Pinterest', icon: SiPinterest, color: '#fff', bg: 'from-red-500 to-rose-600' },
]

const weekDays = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const calendarPosts = {
  1: ['#818cf8'], 3: ['#34d399', '#f472b6'], 5: ['#818cf8'],
  7: ['#f472b6'], 9: ['#34d399'], 11: ['#818cf8', '#f472b6'],
  13: ['#f472b6'], 16: ['#34d399'], 18: ['#818cf8'],
  20: ['#f472b6', '#34d399'], 23: ['#818cf8'], 25: ['#34d399'],
  27: ['#f472b6'], 30: ['#818cf8', '#34d399'],
}

const chartBars = [40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100]

export default function Features() {
  return (
    <section id="features" className="py-28 bg-slate-950 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-violet-600/6 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-blue-600/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-300 tracking-wider uppercase">Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Everything in one place
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            From publishing to analytics, AI to video — built for creators who move fast.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

          {/* ── 1. Publish Everywhere (2-col hero card) ── */}
          <motion.div
            variants={fade} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 relative rounded-3xl bg-slate-900 overflow-hidden p-7 flex flex-col justify-between min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-indigo-500/8 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/25 mb-4">
                <FiZap className="text-indigo-400" size={18} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1.5">Publish Everywhere</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                One post, nine platforms. Instagram, TikTok, YouTube, Facebook, Threads, X, LinkedIn, Bluesky, and Pinterest — all from a single workflow.
              </p>
            </div>

            {/* Platform visual */}
            <div className="relative z-10 mt-6">
              {/* Central post card */}
              <div className="flex items-center gap-5 flex-wrap">
                <div className="flex-shrink-0 w-36 bg-slate-800 border border-slate-700 rounded-2xl p-3 shadow-xl">
                  <div className="w-full h-20 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-700 mb-2.5 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
                    <FiImage size={30} color="rgba(255,255,255,0.75)" />
                  </div>
                  <div className="space-y-1.5 mb-2.5">
                    <div className="h-2 bg-slate-600 rounded-full w-full" />
                    <div className="h-2 bg-slate-700 rounded-full w-3/5" />
                  </div>
                  <div className="h-6 rounded-lg bg-indigo-600 flex items-center justify-center">
                    <span className="text-[9px] font-semibold text-white">Publish Now</span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 hidden sm:flex flex-col items-center gap-1">
                  <div className="w-8 h-px bg-gradient-to-r from-indigo-500/60 to-indigo-500/20" />
                  <div className="w-2 h-2 rounded-full bg-indigo-400/60" />
                  <div className="w-8 h-px bg-gradient-to-r from-indigo-500/20 to-indigo-500/60" />
                </div>

                {/* Platform icons grid */}
                <div className="flex flex-wrap gap-2.5">
                  {platforms.map((p) => (
                    <div
                      key={p.name}
                      title={p.name}
                      className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.bg} flex items-center justify-center shadow-lg`}
                    >
                      <p.icon size={16} color={p.color} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── 2. Kabon AI ── */}
          <motion.div
            variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-3xl bg-slate-900 overflow-hidden p-7 flex flex-col min-h-[320px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 mb-4">
                <FiCpu className="text-violet-400" size={18} />
              </div>
              <h3 className="text-xl font-bold text-white mb-1.5">Kabon AI</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Generate captions, transcribe audio, and get content advice — all inside your workspace.
              </p>
            </div>

            {/* Mini chat mockup */}
            <div className="relative z-10 mt-5 flex-1 flex flex-col justify-end space-y-2.5">
              <div className="flex justify-end">
                <div className="bg-violet-600/30 border border-violet-500/25 rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[80%]">
                  <p className="text-xs text-violet-200">Write a caption for my reel 🎬</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-slate-800 border border-slate-700 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[90%]">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    ✨ <span className="text-white font-medium">The best moments...</span> don&apos;t wait for perfect conditions. Hit record, go live, and let the magic unfold. 🚀
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2">
                <div className="flex-1 h-2 bg-slate-700 rounded-full" />
                <div className="w-6 h-6 rounded-lg bg-violet-500/30 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-sm bg-violet-400/70" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── 3. Video Studio ── */}
          <motion.div
            variants={fade} custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-3xl bg-slate-900 overflow-hidden p-7 flex flex-col min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/8 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-pink-500/15 border border-pink-500/25 mb-4">
                <FiBarChart2 className="text-pink-400 rotate-90" size={18} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Video Studio</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Edit, trim, and add captions in the browser. Publish directly when done.
              </p>
            </div>

            {/* Mini timeline editor mockup */}
            <div className="relative z-10 mt-5 flex-1 flex flex-col justify-end space-y-1.5">
              {/* Preview */}
              <div className="w-full h-16 rounded-xl bg-gradient-to-br from-pink-950 to-slate-800 border border-slate-700 flex items-center justify-center mb-2">
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[9px] border-transparent border-l-white/80 ml-0.5" />
                </div>
              </div>
              {/* Timeline tracks */}
              {[
                { w: 'w-full', color: 'bg-pink-500/50', label: 'Video' },
                { w: 'w-4/5', color: 'bg-violet-500/50', label: 'Audio' },
                { w: 'w-2/3', color: 'bg-amber-500/50', label: 'Text' },
              ].map((track) => (
                <div key={track.label} className="flex items-center gap-2">
                  <span className="text-[9px] text-slate-500 w-7 text-right flex-shrink-0">{track.label}</span>
                  <div className="flex-1 h-3 rounded-sm bg-slate-800 overflow-hidden">
                    <div className={`h-full ${track.w} ${track.color} rounded-sm`} />
                  </div>
                </div>
              ))}
              {/* Playhead */}
              <div className="relative h-2 mt-0.5 ml-9">
                <div className="absolute left-[38%] top-0 w-px h-16 bg-white/25 -mt-16 pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* ── 4. Smart Scheduling ── */}
          <motion.div
            variants={fade} custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-3xl bg-slate-900 overflow-hidden p-7 flex flex-col min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/8 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/25 mb-4">
                <FiCalendar className="text-amber-400" size={18} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Smart Scheduling</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Redis-backed queue with automatic retries. Schedule once, delivered on time.
              </p>
            </div>

            {/* Mini calendar mockup */}
            <div className="relative z-10 mt-4 flex-1 flex flex-col justify-end">
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-3">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[10px] font-semibold text-white">May 2026</span>
                  <div className="flex gap-1">
                    <div className="w-4 h-4 rounded bg-slate-700 flex items-center justify-center text-[8px] text-slate-400">‹</div>
                    <div className="w-4 h-4 rounded bg-slate-700 flex items-center justify-center text-[8px] text-slate-400">›</div>
                  </div>
                </div>
                {/* Day headers */}
                <div className="grid grid-cols-7 mb-1">
                  {weekDays.map((d, i) => (
                    <div key={i} className="text-center text-[8px] text-slate-500 font-medium">{d}</div>
                  ))}
                </div>
                {/* Days grid */}
                <div className="grid grid-cols-7 gap-y-1">
                  {Array.from({ length: 31 }, (_, i) => {
                    const day = i + 1
                    const dots = calendarPosts[day]
                    const isToday = day === 22
                    return (
                      <div key={day} className="flex flex-col items-center gap-0.5">
                        <span className={`text-[9px] w-5 h-5 flex items-center justify-center rounded-full font-medium
                          ${isToday ? 'bg-indigo-500 text-white' : 'text-slate-400'}`}>
                          {day}
                        </span>
                        {dots && (
                          <div className="flex gap-px">
                            {dots.map((c, j) => (
                              <div key={j} className="w-1 h-1 rounded-full" style={{ backgroundColor: c }} />
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── 5. Analytics ── */}
          <motion.div
            variants={fade} custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-3xl bg-slate-900 overflow-hidden p-7 flex flex-col min-h-[280px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/8 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 mb-4">
                <FiBarChart2 className="text-emerald-400" size={18} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Deep Analytics</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Track reach, engagement, and follower growth — per platform, per post.
              </p>
            </div>

            {/* Mini bar chart */}
            <div className="relative z-10 mt-4 flex-1 flex flex-col justify-end">
              <div className="flex items-center gap-4 mb-3">
                <div>
                  <p className="text-lg font-bold text-white">+24.8%</p>
                  <p className="text-[10px] text-emerald-400">↑ engagement this month</p>
                </div>
              </div>
              <div className="flex items-end gap-1 h-16">
                {chartBars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t-sm"
                    style={{
                      background: i === 11
                        ? 'linear-gradient(to top, #10b981, #34d399)'
                        : i >= 9
                        ? 'rgba(52,211,153,0.5)'
                        : 'rgba(255,255,255,0.08)'
                    }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {['Jan', 'Mar', 'May'].map(m => (
                  <span key={m} className="text-[9px] text-slate-600">{m}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── 6. Team Collaboration ── */}
          <motion.div
            variants={fade} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-3xl bg-slate-900 overflow-hidden p-7 flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/8 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 mb-4">
                <FiUsers className="text-violet-400" size={18} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Team Collaboration</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Approval workflows, activity feeds, and real-time team chat — built right into your workspace.
              </p>
            </div>

            <div className="relative z-10 mt-4 flex-1 flex flex-col justify-between gap-2">
              <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5">
                <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                  <FiClock size={11} className="text-amber-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-white font-medium">Post pending approval</p>
                  <p className="text-[9px] text-slate-500">Submitted by Alex · 2m ago</p>
                </div>
                <div className="w-5 h-5 rounded-md bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <FiCheckCircle size={10} className="text-emerald-400" />
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2.5">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                  <FiBarChart2 size={11} className="text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] text-white font-medium">Activity feed</p>
                  <p className="text-[9px] text-slate-500">Sara published 3 posts · 5m ago</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-white shrink-0">S</div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl rounded-tl-sm px-3 py-2 flex-1">
                  <p className="text-[10px] text-slate-300">Looks great! Approve from me 👍</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 rounded-xl px-3 py-2">
                <div className="flex -space-x-1.5">
                  {['from-indigo-500 to-violet-600', 'from-pink-500 to-rose-600', 'from-amber-500 to-orange-600'].map((g, i) => (
                    <div key={i} className={`w-5 h-5 rounded-full bg-gradient-to-br ${g} border border-slate-900 flex items-center justify-center text-[7px] font-bold text-white`}>
                      {['S','A','J'][i]}
                    </div>
                  ))}
                </div>
                <span className="text-[9px] text-slate-400 ml-1">3 members active now</span>
              </div>
            </div>
          </motion.div>

          {/* ── 7. Team Chat (2-col card) ── */}
          <motion.div
            variants={fade} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 relative rounded-3xl bg-slate-900 overflow-hidden p-7 flex flex-col min-h-[240px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/8 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/15 border border-teal-500/25 mb-4">
                <FiMessageSquare className="text-teal-400" size={18} />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Team Chat</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Real-time channels per workspace. Discuss posts, share feedback, and keep your whole team in sync.
              </p>
            </div>

            {/* Chat window */}
            <div className="relative z-10 mt-4 flex-1 bg-slate-800 border border-slate-700 rounded-2xl flex flex-col overflow-hidden">
              <div className="flex items-center gap-2.5 px-4 py-3 border-b border-slate-700">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                <span className="text-[11px] font-semibold text-white"># brand-campaign</span>
                <span className="ml-auto text-[9px] text-slate-500">4 members online</span>
              </div>
              <div className="flex-1 px-4 py-3 space-y-3 overflow-hidden">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-slate-700" />
                  <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full px-2.5 py-1">
                    <FiClock size={9} className="text-amber-400 flex-shrink-0" />
                    <span className="text-[9px] text-amber-300">Post submitted for approval by Alex</span>
                  </div>
                  <div className="flex-1 h-px bg-slate-700" />
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-white mt-0.5">S</div>
                  <div>
                    <p className="text-[9px] text-slate-500 mb-0.5">Sara · just now</p>
                    <div className="bg-slate-700 rounded-xl rounded-tl-sm px-3 py-2">
                      <p className="text-[10px] text-slate-200">Looks great! Approve from me 👍</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2 justify-end">
                  <div className="text-right">
                    <p className="text-[9px] text-slate-500 mb-0.5">Alex · 1m ago</p>
                    <div className="bg-teal-600/25 border border-teal-500/20 rounded-xl rounded-tr-sm px-3 py-2">
                      <p className="text-[10px] text-teal-100">Caption needs a hashtag tweak 🏷️</p>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center flex-shrink-0 text-[9px] font-bold text-white mt-0.5">A</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-slate-700" />
                  <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2.5 py-1">
                    <FiCheckCircle size={9} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-[9px] text-emerald-300">Post approved · goes live in 3 hours</span>
                  </div>
                  <div className="flex-1 h-px bg-slate-700" />
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2.5 border-t border-slate-700">
                <div className="flex-1 h-7 bg-slate-700 rounded-lg px-3 flex items-center">
                  <span className="text-[10px] text-slate-500">Message #brand-campaign…</span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                  <FiMessageSquare size={12} className="text-teal-400" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── 8. Asset Library ── */}
          <motion.div
            variants={fade} custom={7} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative rounded-3xl bg-slate-900 overflow-hidden p-7 flex flex-col min-h-[240px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/8 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-start justify-between">
              <div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/25 mb-4">
                  <FiHardDrive className="text-cyan-400" size={18} />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Asset Library</h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[180px]">
                  Upload once, reuse everywhere. Up to 100GB with smart folder organisation.
                </p>
              </div>
              <div className="flex-shrink-0 grid grid-cols-2 gap-1.5 ml-4">
                {[
                  { bg: 'from-pink-600 to-rose-700', icon: FiFilm },
                  { bg: 'from-violet-600 to-indigo-700', icon: FiImage },
                  { bg: 'from-amber-600 to-orange-700', icon: FiMusic },
                  { bg: 'from-emerald-600 to-green-700', icon: FiFileText },
                ].map((item, i) => (
                  <div key={i} className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.bg} flex items-center justify-center`}>
                    <item.icon size={22} color="#fff" />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-4 flex items-center gap-2">
              <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
              </div>
              <span className="text-[10px] text-slate-500">67GB / 100GB</span>
            </div>
          </motion.div>

          {/* ── 9. Workspaces & Teams (original 2-col) ── */}
          <motion.div
            variants={fade} custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="md:col-span-2 relative rounded-3xl bg-slate-900 overflow-hidden p-7 flex flex-col min-h-[240px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rose-600/8 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-rose-500/6 rounded-full blur-[50px] pointer-events-none" />

            <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-between">
              <div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/25 mb-4">
                  <FiUsers className="text-rose-400" size={18} />
                </div>
                <h3 className="text-xl font-bold text-white mb-1.5">Workspaces & Teams</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                  Separate workspaces per brand or client. Invite team members, assign roles, keep everything isolated.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {['Unlimited workspaces on Pro+', 'Role-based access control', 'Per-workspace account limits'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <FiCheckCircle className="text-emerald-400 flex-shrink-0" size={13} />
                      <span className="text-xs text-slate-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workspace cards mockup */}
              <div className="flex-shrink-0 flex flex-col gap-2.5 min-w-[200px]">
                {[
                  { name: 'Brand Studio', desc: '4 accounts · 2 members', color: 'from-indigo-500 to-violet-600', dot: 'bg-emerald-400', initials: 'BS' },
                  { name: 'Client — Luxe', desc: '6 accounts · 5 members', color: 'from-pink-500 to-rose-600', dot: 'bg-emerald-400', initials: 'LX', active: true },
                  { name: 'Personal', desc: '2 accounts · 1 member', color: 'from-amber-500 to-orange-600', dot: 'bg-slate-500', initials: 'ME' },
                ].map((ws) => (
                  <div
                    key={ws.name}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all
                      ${ws.active
                        ? 'bg-slate-700 border-slate-600'
                        : 'bg-slate-800 border-slate-700'}`}
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${ws.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-xs font-bold text-white">{ws.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-white truncate">{ws.name}</p>
                      <p className="text-[10px] text-slate-500 truncate">{ws.desc}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${ws.dot}`} />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
