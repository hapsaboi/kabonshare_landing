'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineOfficeBuilding, HiOutlineCode, HiOutlineShoppingCart,
  HiOutlineVideoCamera, HiOutlineCheck, HiOutlineArrowRight,
  HiOutlineUserGroup, HiOutlineGlobeAlt, HiOutlineClock,
  HiOutlineChartBar, HiOutlinePhotograph, HiOutlineLightningBolt,
  HiOutlineRefresh, HiOutlineTemplate
} from 'react-icons/hi'

const useCases = [
  {
    id: 'agencies',
    icon: HiOutlineOfficeBuilding,
    label: 'Agencies',
    title: 'Run every client from one place',
    description: 'Stop juggling logins. Manage 50+ client accounts across Instagram, TikTok, Facebook, Threads, and YouTube — all from a single dashboard with isolated workspaces.',
    gradient: 'from-blue-500 to-indigo-600',
    accentColor: 'blue',
    stats: [
      { value: '10x', label: 'faster workflow' },
      { value: '50+', label: 'accounts per workspace' },
      { value: '5', label: 'platforms supported' },
    ],
    features: [
      { icon: HiOutlineUserGroup, text: 'Isolated workspaces per client' },
      { icon: HiOutlineClock, text: 'Bulk schedule weeks of content' },
      { icon: HiOutlineChartBar, text: 'Per-client analytics & reporting' },
      { icon: HiOutlineGlobeAlt, text: 'All platforms, one dashboard' },
    ],
    mockUI: 'agency',
  },
  {
    id: 'saas',
    icon: HiOutlineCode,
    label: 'SaaS Products',
    title: 'Ship social publishing in days, not months',
    description: 'Integrate social media posting into your product with a clean REST API. Upload media, schedule posts, track delivery — we handle OAuth, rate limits, and retries.',
    gradient: 'from-violet-500 to-purple-600',
    accentColor: 'violet',
    stats: [
      { value: '1', label: 'API call to publish' },
      { value: '< 1hr', label: 'to first post' },
      { value: '99.9%', label: 'uptime SLA' },
    ],
    features: [
      { icon: HiOutlineLightningBolt, text: 'Simple REST API with webhooks' },
      { icon: HiOutlineRefresh, text: 'Auto token refresh & retry logic' },
      { icon: HiOutlinePhotograph, text: 'Signed URL uploads for large media' },
      { icon: HiOutlineTemplate, text: 'SDKs for Node.js, Python, cURL' },
    ],
    mockUI: 'saas',
  },
  {
    id: 'ecommerce',
    icon: HiOutlineShoppingCart,
    label: 'E-commerce',
    title: 'Turn products into posts automatically',
    description: 'Sync your product catalog and auto-publish to Instagram Shopping, TikTok, and Facebook. Every new product launch reaches every channel instantly.',
    gradient: 'from-emerald-500 to-green-600',
    accentColor: 'emerald',
    stats: [
      { value: '3x', label: 'more product visibility' },
      { value: '0', label: 'manual posting needed' },
      { value: '24/7', label: 'automated publishing' },
    ],
    features: [
      { icon: HiOutlinePhotograph, text: 'Auto-format media per platform' },
      { icon: HiOutlineRefresh, text: 'Scheduled product launches' },
      { icon: HiOutlineGlobeAlt, text: 'Multi-platform product reach' },
      { icon: HiOutlineChartBar, text: 'Track engagement per product' },
    ],
    mockUI: 'ecommerce',
  },
  {
    id: 'creators',
    icon: HiOutlineVideoCamera,
    label: 'Creators',
    title: 'Post once, reach every platform',
    description: 'Record one Reel, Short, or TikTok — and push it everywhere in seconds. Spend less time re-uploading and more time creating.',
    gradient: 'from-amber-500 to-orange-600',
    accentColor: 'amber',
    stats: [
      { value: '80%', label: 'less time uploading' },
      { value: '5', label: 'platforms at once' },
      { value: '∞', label: 'creative time saved' },
    ],
    features: [
      { icon: HiOutlinePhotograph, text: 'Reels, Shorts, TikToks — all at once' },
      { icon: HiOutlineClock, text: 'Smart scheduling & content queue' },
      { icon: HiOutlineChartBar, text: 'Cross-platform analytics' },
      { icon: HiOutlineGlobeAlt, text: 'Threads, Stories, Feed posts too' },
    ],
    mockUI: 'creator',
  },
]

// Mini mock UIs for each use case
function AgencyMock() {
  const clients = [
    { name: 'Acme Corp', platforms: 4, color: 'bg-blue-500' },
    { name: 'Nova Studio', platforms: 3, color: 'bg-violet-500' },
    { name: 'Peak Fitness', platforms: 5, color: 'bg-emerald-500' },
  ]
  return (
    <div className="space-y-2.5">
      {clients.map((c, i) => (
        <motion.div
          key={c.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="flex items-center gap-3 bg-white/5 rounded-lg px-3.5 py-2.5 border border-white/5"
        >
          <div className={`w-8 h-8 ${c.color} rounded-lg flex items-center justify-center text-white text-xs font-bold`}>
            {c.name[0]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">{c.name}</div>
            <div className="text-xs text-slate-500">{c.platforms} platforms connected</div>
          </div>
          <div className="flex -space-x-1">
            {[...Array(Math.min(c.platforms, 3))].map((_, j) => (
              <div key={j} className="w-5 h-5 rounded-full bg-white/10 border border-slate-800" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function SaaSMock() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="font-mono text-xs"
    >
      <div className="bg-white/5 rounded-lg border border-white/5 overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="ml-2 text-slate-500 text-[10px]">POST /api/posts</span>
        </div>
        <div className="p-3 space-y-1 text-[11px] leading-relaxed">
          <div><span className="text-slate-500">{'{'}  </span></div>
          <div className="pl-3"><span className="text-violet-400">{'"platforms"'}</span><span className="text-slate-500">:</span> <span className="text-emerald-400">{'["instagram", "tiktok"]'}</span><span className="text-slate-500">,</span></div>
          <div className="pl-3"><span className="text-violet-400">{'"text"'}</span><span className="text-slate-500">:</span> <span className="text-amber-400">{"\"New drop! 🔥\""}</span><span className="text-slate-500">,</span></div>
          <div className="pl-3"><span className="text-violet-400">{'"media"'}</span><span className="text-slate-500">:</span> <span className="text-emerald-400">{"[\"reel.mp4\"]"}</span></div>
          <div><span className="text-slate-500">{'}'}</span></div>
          <div className="mt-2 pt-2 border-t border-white/5">
            <span className="text-green-400">✓ 201</span> <span className="text-slate-500">— Published to 2 platforms</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function EcommerceMock() {
  const products = [
    { name: 'Summer Dress', status: 'Published', platforms: 3 },
    { name: 'Running Shoes', status: 'Scheduled', platforms: 2 },
    { name: 'Watch Pro X', status: 'Publishing...', platforms: 4 },
  ]
  return (
    <div className="space-y-2.5">
      {products.map((p, i) => (
        <motion.div
          key={p.name}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="flex items-center gap-3 bg-white/5 rounded-lg px-3.5 py-2.5 border border-white/5"
        >
          <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <HiOutlineShoppingCart className="text-emerald-400 text-sm" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-white truncate">{p.name}</div>
            <div className="text-xs text-slate-500">{p.platforms} platforms</div>
          </div>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${
            p.status === 'Published' ? 'bg-green-500/10 text-green-400' :
            p.status === 'Scheduled' ? 'bg-blue-500/10 text-blue-400' :
            'bg-amber-500/10 text-amber-400'
          }`}>{p.status}</span>
        </motion.div>
      ))}
    </div>
  )
}

function CreatorMock() {
  const platforms = [
    { name: 'Instagram Reel', status: true },
    { name: 'TikTok', status: true },
    { name: 'YouTube Short', status: true },
    { name: 'Facebook Reel', status: 'sending' },
  ]
  return (
    <div className="space-y-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/5 rounded-lg px-3.5 py-2.5 border border-white/5 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center">
          <HiOutlineVideoCamera className="text-amber-400" />
        </div>
        <div>
          <div className="text-sm font-medium text-white">morning_routine.mp4</div>
          <div className="text-xs text-slate-500">1080×1920 • 28s • 12.4 MB</div>
        </div>
      </motion.div>
      <div className="space-y-1.5 pl-1">
        {platforms.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.12, duration: 0.3 }}
            className="flex items-center gap-2.5 text-xs"
          >
            {p.status === true ? (
              <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                <HiOutlineCheck className="text-green-400 text-[9px]" />
              </div>
            ) : (
              <div className="w-4 h-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              </div>
            )}
            <span className="text-slate-300">{p.name}</span>
            <span className={`ml-auto text-[10px] ${p.status === true ? 'text-green-400' : 'text-amber-400'}`}>
              {p.status === true ? 'Done' : 'Sending...'}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const mockComponents = {
  agency: AgencyMock,
  saas: SaaSMock,
  ecommerce: EcommerceMock,
  creator: CreatorMock,
}

export default function UseCases() {
  const [active, setActive] = useState(0)
  const current = useCases[active]
  const MockUI = mockComponents[current.mockUI]

  return (
    <section id="use-cases" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-xs font-medium text-violet-300 tracking-wide uppercase">Use Cases</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Built for how{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
              you work
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Whether you{"'"}re a solo creator or an enterprise team, KabonShare adapts to your workflow.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex bg-white/[0.03] rounded-xl p-1 border border-white/5 gap-1">
            {useCases.map((uc, i) => (
              <button
                key={uc.id}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  active === i
                    ? 'bg-white/10 text-white shadow-lg'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                }`}
              >
                <uc.icon className="text-base" />
                <span className="hidden sm:inline">{uc.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Active Use Case - Two Column */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            {/* Left - Content */}
            <div className="space-y-6">
              {/* Title area */}
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${current.gradient} bg-opacity-10 mb-4`}
                  style={{ background: `linear-gradient(to right, var(--tw-gradient-from) / 0.1, var(--tw-gradient-to) / 0.1)` }}
                >
                  <current.icon className="text-sm text-white/70" />
                  <span className="text-xs font-medium text-white/70">{current.label}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight leading-tight">
                  {current.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {current.description}
                </p>
              </div>

              {/* Stats row */}
              <div className="flex gap-6">
                {current.stats.map((stat, i) => (
                  <div key={i}>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${current.gradient} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Feature list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    className="flex items-start gap-2.5 text-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon className="text-slate-300 text-xs" />
                    </div>
                    <span className="text-slate-300">{f.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right - Mock UI */}
            <div className="relative">
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-white/[0.06] p-5 shadow-2xl shadow-black/20">
                {/* Window chrome */}
                <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="ml-3 h-5 bg-white/5 rounded-md flex-1 max-w-[180px]" />
                </div>
                {/* Mock content */}
                <MockUI />
              </div>
              {/* Glow effect behind card */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${current.gradient} opacity-[0.04] blur-2xl rounded-3xl scale-105`} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
