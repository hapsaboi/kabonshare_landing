'use client'
import { motion } from 'framer-motion'
import { FiTrendingUp, FiClock, FiUsers, FiStar, FiEye, FiBarChart2, FiHeart, FiMessageCircle, FiRepeat, FiInstagram, FiYoutube, FiFacebook, FiCheckCircle } from 'react-icons/fi'
import { SiTiktok, SiThreads } from 'react-icons/si'

const fade = {
  hidden: { opacity: 0, y: 18 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] } }),
}

/* ── chart math ── */
const reachData = [38, 52, 44, 67, 55, 78, 62, 85, 70, 91, 80, 100]
const months    = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
const W = 600, H = 110
const minD = Math.min(...reachData), maxD = Math.max(...reachData)
const px = i => (i / (reachData.length - 1)) * W
const py = v => (1 - (v - minD) / (maxD - minD)) * (H - 20) + 10
const linePath = reachData.map((v, i) => `${i === 0 ? 'M' : 'L'}${px(i)},${py(v)}`).join(' ')
const areaPath = `${linePath} L${W},${H} L0,${H} Z`

/* ── data ── */
const stats = [
  { icon: FiBarChart2,  label: 'Total Reach',  value: '284.5K', change: '+12.3%', color: 'text-cyan-400',    iconBg: 'bg-cyan-500/15 border-cyan-500/25'    },
  { icon: FiHeart,      label: 'Engagement',   value: '18.7K',  change: '+8.1%',  color: 'text-violet-400',  iconBg: 'bg-violet-500/15 border-violet-500/25'},
  { icon: FiUsers,      label: 'Followers',    value: '42.1K',  change: '+2.4%',  color: 'text-emerald-400', iconBg: 'bg-emerald-500/15 border-emerald-500/25'},
  { icon: FiEye,        label: 'Avg. Views',   value: '12.3K',  change: '+15.7%', color: 'text-amber-400',   iconBg: 'bg-amber-500/15 border-amber-500/25'  },
]

const features = [
  { icon: FiClock,      color: 'text-violet-400', bg: 'bg-violet-500/10 border border-violet-500/20', title: 'Best time to post',     desc: 'AI-driven posting time recommendations per platform based on your audience.' },
  { icon: FiUsers,      color: 'text-emerald-400',bg: 'bg-emerald-500/10 border border-emerald-500/20',title: 'Audience demographics', desc: 'Age, location, and interest breakdowns across every connected account.' },
  { icon: FiStar,       color: 'text-amber-400',  bg: 'bg-amber-500/10 border border-amber-500/20',  title: 'Top performing content', desc: 'Spot your highest reach and engagement posts across all platforms at a glance.' },
]

const engagementData = [
  { name: 'Instagram', icon: FiInstagram, pct: 85, color: 'from-pink-500 to-rose-500'  },
  { name: 'TikTok',    icon: SiTiktok,    pct: 72, color: 'from-slate-400 to-slate-500'},
  { name: 'YouTube',   icon: FiYoutube,   pct: 58, color: 'from-red-500 to-red-600'    },
  { name: 'Facebook',  icon: FiFacebook,  pct: 45, color: 'from-blue-500 to-blue-600'  },
  { name: 'Threads',   icon: SiThreads,   pct: 38, color: 'from-slate-500 to-slate-700'},
]

const liveFollowers = [
  { name: 'Instagram', count: '24,871', change: '+12', icon: FiInstagram, bg: 'from-pink-500 to-rose-600'  },
  { name: 'TikTok',    count: '11,204', change: '+34', icon: SiTiktok,    bg: 'from-slate-600 to-slate-900'},
  { name: 'YouTube',   count: '6,340',  change: '+5',  icon: FiYoutube,   bg: 'from-red-500 to-red-700'   },
]

export default function Analytics() {
  return (
    <section id="analytics" className="py-16 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-cyan-600/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-600/6 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <motion.div variants={fade} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
            <FiBarChart2 className="text-cyan-400" size={13} />
            <span className="text-xs font-semibold text-cyan-300 tracking-wider uppercase">Analytics & Insights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Know exactly{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">what works</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Deep analytics across every platform, smart scheduling suggestions, and audience insights — all in one place.
          </p>
        </motion.div>

        {/* ── Main 2-col ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-4">

          {/* Left — stats + features */}
          <div>
            {/* 2×2 stat grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {stats.map((s, i) => (
                <motion.div key={s.label}
                  variants={fade} custom={1 + i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="bg-slate-900 rounded-2xl p-4"
                >
                  <div className={`w-8 h-8 rounded-lg ${s.iconBg} border flex items-center justify-center mb-3`}>
                    <s.icon className={s.color} size={14} />
                  </div>
                  <p className={`text-xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                  <p className="text-[11px] text-emerald-400 mt-1">{s.change} this month</p>
                </motion.div>
              ))}
            </div>

            {/* Feature list */}
            <div className="space-y-1">
              {features.map((f, i) => (
                <motion.div key={f.title}
                  variants={fade} custom={3 + i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-900 transition-colors"
                >
                  <div className={`w-9 h-9 rounded-xl ${f.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <f.icon className={f.color} size={15} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{f.title}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — dashboard mockup */}
          <motion.div
            variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/15 to-blue-600/15 rounded-3xl blur-2xl scale-105" />

            <div className="relative bg-slate-900 rounded-3xl overflow-hidden">

              {/* Window bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-semibold text-slate-400">Analytics Dashboard</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700">
                  <FiClock size={10} className="text-slate-500" />
                  <span className="text-[10px] text-slate-400">Last 30 days</span>
                </div>
              </div>

              {/* Metric strip */}
              <div className="grid grid-cols-4 divide-x divide-slate-800 border-b border-slate-800">
                {stats.map(s => (
                  <div key={s.label} className="px-3 py-2.5">
                    <p className="text-[9px] text-slate-600 uppercase tracking-wide truncate">{s.label}</p>
                    <p className={`text-sm font-bold ${s.color}`}>{s.value}</p>
                    <p className="text-[9px] text-emerald-500">{s.change}</p>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div className="px-4 pt-3 pb-1">
                <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2">Reach over time</p>
                <div className="relative h-28">
                  <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="areaGradAlt" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    {[30, 60, 90].map(y => (
                      <line key={y} x1={0} x2={W} y1={y} y2={y} stroke="#1e293b" strokeWidth="1" />
                    ))}
                    <motion.path
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      d={areaPath} fill="url(#areaGradAlt)"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                      d={linePath}
                      fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                    <motion.circle
                      initial={{ opacity: 0, r: 0 }}
                      whileInView={{ opacity: 1, r: 6 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3 }}
                      cx={px(reachData.length - 1)} cy={py(reachData[reachData.length - 1])}
                      fill="#06b6d4"
                    />
                    {/* Tooltip on last point */}
                    <motion.g
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 }}
                    >
                      <rect x={W - 72} y={py(reachData[reachData.length - 1]) - 28} width={68} height={22} rx={6} fill="#0e7490" />
                      <text x={W - 38} y={py(reachData[reachData.length - 1]) - 13} textAnchor="middle" fill="#fff" fontSize={10} fontWeight="700">284.5K</text>
                    </motion.g>
                  </svg>
                  <div className="flex justify-between mt-1">
                    {months.map(m => <span key={m} className="text-[8px] text-slate-700">{m}</span>)}
                  </div>
                </div>
              </div>

              {/* Engagement bars */}
              <div className="px-4 pb-4 pt-1">
                <p className="text-[10px] font-semibold text-slate-600 uppercase tracking-widest mb-2.5">Engagement by platform</p>
                <div className="space-y-2">
                  {engagementData.map((p, i) => (
                    <div key={p.name} className="flex items-center gap-2.5">
                      <p.icon size={11} className="text-slate-500 flex-shrink-0" />
                      <span className="text-[10px] text-slate-500 w-14 flex-shrink-0">{p.name}</span>
                      <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                        />
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500 w-6 flex-shrink-0 text-right">{p.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* ── Bottom row: live followers + heatmap ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* Live followers */}
          <motion.div variants={fade} custom={5} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
              <p className="text-xs font-semibold text-slate-400">Live Followers</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {liveFollowers.map((acc, i) => (
                <motion.div key={acc.name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-slate-800 border border-slate-700 text-center"
                >
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${acc.bg} flex items-center justify-center`}>
                    <acc.icon size={15} color="#fff" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{acc.count}</p>
                    <p className="text-[10px] text-slate-500">{acc.name}</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">{acc.change} today</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Best time heatmap */}
          <motion.div variants={fade} custom={6} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <FiClock className="text-violet-400" size={14} />
              <p className="text-xs font-semibold text-slate-400">Best Time to Post</p>
              <div className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-800 border border-slate-700">
                <FiCheckCircle className="text-emerald-400" size={10} />
                <span className="text-[10px] text-slate-400">Wed 12pm optimal</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex gap-1 ml-7 mb-1">
                {['6am','9am','12pm','3pm','6pm','9pm'].map(t => (
                  <span key={t} className="flex-1 text-[8px] text-slate-600 text-center">{t}</span>
                ))}
              </div>
              {[
                [0.2,0.4,0.8,0.6,0.3,0.1],
                [0.1,0.3,0.9,0.7,0.5,0.2],
                [0.3,0.6,0.7,0.9,0.4,0.1],
                [0.2,0.5,0.6,0.8,0.6,0.3],
                [0.4,0.7,0.9,0.5,0.3,0.1],
                [0.1,0.3,0.5,0.4,0.2,0.1],
                [0.2,0.4,0.6,0.3,0.2,0.1],
              ].map((row, di) => (
                <div key={di} className="flex items-center gap-1">
                  <span className="w-6 text-[8px] text-slate-600 text-right flex-shrink-0">
                    {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][di]}
                  </span>
                  {row.map((val, hi) => (
                    <motion.div key={hi}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: di * 0.04 + hi * 0.02 }}
                      className="flex-1 h-5 rounded"
                      style={{
                        background: val > 0.7
                          ? `rgba(139,92,246,${0.5 + val * 0.5})`
                          : val > 0.4
                          ? `rgba(99,102,241,${0.3 + val * 0.4})`
                          : `rgba(71,85,105,${0.2 + val * 0.2})`,
                      }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
