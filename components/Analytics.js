'use client'
import { motion } from 'framer-motion'
import {
  HiOutlineChartBar, HiOutlineClock, HiOutlineTrendingUp,
  HiOutlineUsers, HiOutlineEye, HiOutlineStar
} from 'react-icons/hi'

const analyticsFeatures = [
  {
    icon: HiOutlineChartBar,
    title: 'Cross-Platform Analytics',
    description: 'See likes, comments, shares, and views for every post across all platforms in one unified dashboard. No more switching between apps.',
    color: '#3B82F6',
  },
  {
    icon: HiOutlineClock,
    title: 'Best Time to Post',
    description: 'AI analyses your past performance to recommend the best days and times to publish — broken down per platform with engagement scoring.',
    color: '#8B5CF6',
  },
  {
    icon: HiOutlineTrendingUp,
    title: 'Engagement Insights',
    description: 'Visual breakdowns of your engagement: donut charts for Instagram, bar charts for reach, views, saves, and shares across every platform.',
    color: '#10B981',
  },
  {
    icon: HiOutlineUsers,
    title: 'Audience Demographics',
    description: 'Know exactly who your audience is — age, gender, location, and when they\'re most active — pulled directly from each platform.',
    color: '#F59E0B',
  },
  {
    icon: HiOutlineEye,
    title: 'Live Follower Tracking',
    description: 'Real-time animated follower counters for all your accounts. Beautiful fullscreen mode perfect for streams or office dashboards.',
    color: '#EF4444',
  },
  {
    icon: HiOutlineStar,
    title: 'Top Performing Content',
    description: 'Instantly see your top 5 posts ranked by engagement. Understand what works and replicate your success across platforms.',
    color: '#EC4899',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

// Mini heatmap data for the demo (7 days x 6 time slots)
const heatmapData = [
  [0.2, 0.4, 0.8, 0.6, 0.3, 0.1],
  [0.1, 0.3, 0.9, 0.7, 0.5, 0.2],
  [0.3, 0.6, 0.7, 0.9, 0.4, 0.1],
  [0.2, 0.5, 0.6, 0.8, 0.6, 0.3],
  [0.4, 0.7, 0.9, 0.5, 0.3, 0.1],
  [0.1, 0.3, 0.5, 0.4, 0.2, 0.1],
  [0.2, 0.4, 0.6, 0.3, 0.2, 0.1],
]
const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const timeLabels = ['6am', '9am', '12pm', '3pm', '6pm', '9pm']

export default function Analytics() {
  return (
    <section id="analytics" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm mb-6"
          >
            <HiOutlineChartBar className="text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">Analytics & Insights</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Know Exactly{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              What Works
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Deep analytics across every platform, smart scheduling suggestions, and audience insights — all in one place.
          </p>
        </motion.div>

        {/* Best Times Demo + Features side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Best Times Heatmap Demo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
              <HiOutlineClock className="text-violet-400 text-sm" />
              <span className="text-xs font-medium text-slate-400">Best Time to Post — Instagram</span>
              <div className="ml-auto flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="p-5">
              {/* Heatmap */}
              <div className="space-y-1.5">
                {/* Time labels */}
                <div className="flex gap-1.5 ml-10">
                  {timeLabels.map((t, i) => (
                    <span key={i} className="flex-1 text-[10px] text-slate-500 text-center">{t}</span>
                  ))}
                </div>
                {/* Rows */}
                {heatmapData.map((row, dayIdx) => (
                  <div key={dayIdx} className="flex items-center gap-1.5">
                    <span className="w-8 text-[10px] text-slate-500 text-right">{dayLabels[dayIdx]}</span>
                    {row.map((val, hourIdx) => (
                      <motion.div
                        key={hourIdx}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: dayIdx * 0.05 + hourIdx * 0.03 }}
                        className="flex-1 h-7 rounded-md cursor-default transition-transform hover:scale-110"
                        style={{
                          backgroundColor: val > 0.7
                            ? `rgba(139, 92, 246, ${0.5 + val * 0.5})`
                            : val > 0.4
                              ? `rgba(99, 102, 241, ${0.3 + val * 0.4})`
                              : `rgba(100, 116, 139, ${0.1 + val * 0.2})`,
                        }}
                        title={`${dayLabels[dayIdx]} ${timeLabels[hourIdx]} — ${Math.round(val * 100)}% engagement`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              {/* Legend */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'rgba(100, 116, 139, 0.2)' }} />
                  <span className="text-[10px] text-slate-500">Low</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'rgba(99, 102, 241, 0.5)' }} />
                  <span className="text-[10px] text-slate-500">Medium</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'rgba(139, 92, 246, 0.9)' }} />
                  <span className="text-[10px] text-slate-500">High</span>
                </div>
              </div>
              {/* Suggested Times */}
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-wider text-violet-400 mb-2">Recommended Slots</p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    { day: 'Wed', time: '12pm', score: 'high' },
                    { day: 'Fri', time: '12pm', score: 'high' },
                    { day: 'Tue', time: '12pm', score: 'high' },
                    { day: 'Thu', time: '3pm', score: 'high' },
                    { day: 'Mon', time: '12pm', score: 'medium' },
                  ].map((slot, i) => (
                    <div
                      key={i}
                      className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-violet-500/20 text-xs text-slate-300"
                    >
                      {slot.day} {slot.time}
                      <span className={`ml-1 inline-block w-1.5 h-1.5 rounded-full ${
                        slot.score === 'high' ? 'bg-green-500' : 'bg-amber-400'
                      }`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Engagement Stats Demo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-white/5 flex items-center gap-2">
              <HiOutlineTrendingUp className="text-cyan-400 text-sm" />
              <span className="text-xs font-medium text-slate-400">Performance Overview</span>
              <div className="ml-auto flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="p-5 space-y-5">
              {/* Stats Row */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Total Reach', value: '284.5K', change: '+12.3%', color: 'text-cyan-400' },
                  { label: 'Engagement', value: '18.7K', change: '+8.1%', color: 'text-violet-400' },
                  { label: 'Followers', value: '42.1K', change: '+2.4%', color: 'text-emerald-400' },
                  { label: 'Avg. Views', value: '12.3K', change: '+15.7%', color: 'text-amber-400' },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="p-3 rounded-xl bg-white/5 border border-white/5"
                  >
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</p>
                    <p className={`text-xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                    <p className="text-xs text-emerald-400 mt-0.5">↑ {stat.change}</p>
                  </motion.div>
                ))}
              </div>

              {/* Mini Bar Chart */}
              <div>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mb-3">Engagement by Platform</p>
                <div className="space-y-2.5">
                  {[
                    { platform: 'Instagram', pct: 85, color: 'from-pink-500 to-violet-500' },
                    { platform: 'TikTok', pct: 72, color: 'from-cyan-400 to-blue-500' },
                    { platform: 'YouTube', pct: 58, color: 'from-red-500 to-red-600' },
                    { platform: 'Facebook', pct: 45, color: 'from-blue-500 to-blue-600' },
                    { platform: 'Threads', pct: 34, color: 'from-slate-400 to-slate-500' },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 w-20 text-right">{p.platform}</span>
                      <div className="flex-1 h-2.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${p.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                        />
                      </div>
                      <span className="text-xs text-slate-500 w-8">{p.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Post */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20">
                <div className="flex items-center gap-2 mb-1">
                  <HiOutlineStar className="text-amber-400 text-sm" />
                  <span className="text-[10px] uppercase tracking-wider text-amber-400">Top Performing Post</span>
                </div>
                <p className="text-sm text-white font-medium">&quot;Behind the scenes of our latest shoot 🎬&quot;</p>
                <div className="flex gap-4 mt-2">
                  <span className="text-xs text-slate-400">❤️ 4.2K</span>
                  <span className="text-xs text-slate-400">💬 389</span>
                  <span className="text-xs text-slate-400">🔄 1.1K</span>
                  <span className="text-xs text-slate-400">👁 28.5K</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {analyticsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top right, ${feature.color}, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div className="mb-5 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-2xl" style={{ color: feature.color }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
