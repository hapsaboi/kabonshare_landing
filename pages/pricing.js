'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiZap, FiUsers, FiHardDrive, FiStar, FiChevronDown, FiMessageCircle } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
}

const FAQS = [
  { q: 'What are credits?', a: 'Credits are used to publish posts. Each post costs 1 credit regardless of media type or how many platforms you publish to simultaneously.' },
  { q: 'What are AI credits?', a: 'AI credits power the caption generator. Upload an image, video, or audio file and get a title, captions, and hashtags instantly. Each generation costs 1 AI credit.' },
  { q: 'What platforms are supported?', a: 'Currently live: Instagram (Feed, Stories, Reels), Facebook Pages, Threads, TikTok (Videos & Photos), YouTube (Videos & Shorts), and X (Twitter). LinkedIn coming soon.' },
  { q: 'How does storage work?', a: 'Upload media to your Asset Library and reuse across posts. Thumbnails don\'t count towards your quota. Plans range from 1 GB (Free) to 100 GB (Business).' },
  { q: 'Can I upgrade or downgrade?', a: 'Yes — changes take effect immediately and we prorate the charges based on your billing cycle.' },
  { q: 'What happens if I run out of credits?', a: 'Buy extra credits anytime inside your dashboard. Purchased credits never expire; subscription credits reset monthly.' },
]

const PLAN_COLORS = {
  free:     { accent: 'from-slate-400 to-slate-500',    badge: null,              ring: 'border-slate-700' },
  creator:  { accent: 'from-indigo-400 to-violet-500',  badge: null,              ring: 'border-indigo-500/40' },
  pro:      { accent: 'from-violet-500 to-purple-600',  badge: 'Most Popular',    ring: 'border-violet-500/60' },
  busines:  { accent: 'from-emerald-400 to-teal-500',   badge: 'Best Value',      ring: 'border-emerald-500/40' },
  business: { accent: 'from-emerald-400 to-teal-500',   badge: 'Best Value',      ring: 'border-emerald-500/40' },
}

function FAQItem({ q, a, num }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(o => !o)}
      className={`rounded-2xl border cursor-pointer transition-all duration-200 overflow-hidden
        ${open ? 'bg-slate-800/80 border-slate-700' : 'bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'}`}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <span className="w-7 h-7 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold flex items-center justify-center flex-shrink-0">
          {String(num).padStart(2, '0')}
        </span>
        <span className="text-sm font-semibold text-white flex-1 leading-snug">{q}</span>
        <FiChevronDown
          size={15}
          className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-indigo-400' : ''}`}
        />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div className="px-5 pb-5 pl-16 text-sm text-slate-400 leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Pricing() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [billingCycle, setBillingCycle] = useState('month')
  const [currency, setCurrency] = useState('USD')
  const [availableCurrencies, setAvailableCurrencies] = useState(['USD'])
  const [yearlyDiscount, setYearlyDiscount] = useState({ percent: 20, minMonths: 12 })

  useEffect(() => { fetchPlans() }, [])

  const fetchPlans = async () => {
    try {
      const response = await fetch('https://api.kabonshare.com/api/plans')
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const json = await response.json()
      const payload = json?.data ?? json
      const fetchedPlans = payload?.plans || []
      setPlans(fetchedPlans)
      if (payload?.yearlyDiscount) setYearlyDiscount(payload.yearlyDiscount)

      const currencies = new Set()
      fetchedPlans.forEach(plan => plan.prices?.forEach(p => { if (p.currency) currencies.add(p.currency) }))
      const currencyArray = Array.from(currencies).sort()
      setAvailableCurrencies(currencyArray.length > 0 ? currencyArray : ['USD'])
      if (currencyArray.length > 0 && !currencyArray.includes('USD')) setCurrency(currencyArray[0])
    } catch (err) {
      console.error('Failed to fetch plans:', err)
      setPlans([])
    } finally {
      setLoading(false)
    }
  }

  const getPlanPrice = (plan) => {
    if (!plan.prices?.length) return null
    if (billingCycle === 'year') {
      let yp = plan.prices.find(p => p.currency === currency && p.interval === 'year')
        || plan.prices.find(p => p.interval === 'year' && p.currency === 'USD')
      if (yp) return yp
      let mp = plan.prices.find(p => p.currency === currency && p.interval === 'month')
        || plan.prices.find(p => p.interval === 'month' && p.currency === 'USD')
      if (mp) {
        const m = 1 - yearlyDiscount.percent / 100
        return { ...mp, interval: 'year', amount: Math.round(mp.amount * 12 * m / 10) * 10, _monthly: Math.round(mp.amount * m * 10) / 10, _calc: true }
      }
      return null
    }
    return plan.prices.find(p => p.currency === currency && p.interval === 'month')
        || plan.prices.find(p => p.interval === 'month' && p.currency === 'USD')
        || null
  }

  const fmt = (amount, curr) => new Intl.NumberFormat('en-US', {
    style: 'currency', currency: curr || 'USD',
    minimumFractionDigits: amount % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: amount % 1 !== 0 ? 2 : 0,
  }).format(amount)

  const getFeatures = (plan) => {
    const f = []
    const l = plan.limits || {}
    const ft = plan.features || {}
    if (l.creditsPerMonth !== undefined) f.push({ icon: FiZap,       text: l.creditsPerMonth === -1 ? 'Unlimited credits/mo' : `${l.creditsPerMonth} credits/mo` })
    if (l.maxAccounts !== undefined)     f.push({ icon: FiCheck,     text: l.maxAccounts === -1 ? 'Unlimited accounts' : `${l.maxAccounts} social accounts` })
    if (l.maxWorkspaces !== undefined)   f.push({ icon: FiUsers,     text: l.maxWorkspaces === -1 ? 'Unlimited workspaces' : `${l.maxWorkspaces} workspace${l.maxWorkspaces > 1 ? 's' : ''}` })
    if (l.storageQuotaMB !== undefined)  f.push({ icon: FiHardDrive, text: l.storageQuotaMB === -1 ? 'Unlimited storage' : l.storageQuotaMB >= 1000 ? `${(l.storageQuotaMB/1000).toFixed(0)}GB storage` : `${l.storageQuotaMB}MB storage` })
    if (l.aiGenerationsPerMonth !== undefined) f.push({ icon: FiZap, text: l.aiGenerationsPerMonth === -1 ? 'Unlimited AI generations' : l.aiGenerationsPerMonth > 0 ? `${l.aiGenerationsPerMonth} AI generations/mo` : 'No AI generations', dim: l.aiGenerationsPerMonth === 0 })
    if (l.maxTeamMembers > 1 || l.maxTeamMembers === -1) f.push({ icon: FiUsers, text: l.maxTeamMembers === -1 ? 'Unlimited team members' : `Up to ${l.maxTeamMembers} team members` })
    if (ft.allowVideo)      f.push({ icon: FiCheck, text: 'Video publishing' })
    if (ft.allowScheduling) f.push({ icon: FiCheck, text: 'Post scheduling' })
    f.push({ icon: FiCheck, text: 'Analytics dashboard' })
    f.push({ icon: FiCheck, text: 'API access' })
    return f
  }

  return (
    <>
      <Head>
        <title>Pricing — KabonShare</title>
        <meta name="description" content="Start free, scale as you grow. Flexible plans for creators, agencies, and developers. No hidden fees, cancel anytime." />
        <link rel="canonical" href="https://kabonshare.com/pricing/" />
        <meta property="og:title" content="Pricing — KabonShare" />
        <meta property="og:description" content="Start free, scale as you grow. Flexible plans for creators, agencies, and developers. No hidden fees, cancel anytime." />
        <meta property="og:url" content="https://kabonshare.com/pricing/" />
      </Head>

      <Navbar />

      <div className="min-h-screen bg-slate-950 relative overflow-hidden">
        {/* background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/6 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">

          {/* ── Header ── */}
          <motion.div variants={fade} custom={0} initial="hidden" animate="visible" className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-300 tracking-wider uppercase">Simple, Transparent Pricing</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
              Choose Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Perfect Plan</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">
              Start free, scale as you grow. No hidden fees, cancel anytime.
            </p>
          </motion.div>

          {/* ── Billing toggle + currency ── */}
          <motion.div variants={fade} custom={1} initial="hidden" animate="visible" className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12">
            <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-2xl gap-1">
              <button
                onClick={() => setBillingCycle('month')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all ${billingCycle === 'month' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('year')}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${billingCycle === 'year' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 hover:text-white'}`}
              >
                Yearly
                <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${billingCycle === 'year' ? 'bg-white/20 text-white' : 'bg-emerald-500/20 text-emerald-400'}`}>
                  Save {yearlyDiscount.percent}%
                </span>
              </button>
            </div>

            {availableCurrencies.length > 1 && (
              <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-2xl gap-1">
                {availableCurrencies.map(curr => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${currency === curr ? 'bg-slate-700 text-white' : 'text-slate-500 hover:text-slate-300'}`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* ── Plan cards ── */}
          {loading ? (
            <div className="text-center py-20">
              <div className="w-10 h-10 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin mx-auto mb-4" />
              <p className="text-slate-500 text-sm">Loading plans…</p>
            </div>
          ) : (
            <motion.div variants={fade} custom={2} initial="hidden" animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {plans.map((plan, i) => {
                const price = getPlanPrice(plan)
                const features = getFeatures(plan)
                const isFree = !price || price.amount === 0
                const colors = PLAN_COLORS[plan.name?.toLowerCase()] || PLAN_COLORS.creator
                const isPopular = colors.badge === 'Most Popular'

                return (
                  <motion.div
                    key={plan._id}
                    variants={fade} custom={2 + i * 0.15}
                    initial="hidden" animate="visible"
                    className={`relative flex flex-col rounded-3xl overflow-hidden border bg-slate-900 transition-all duration-300 hover:-translate-y-1
                      ${isPopular ? 'border-violet-500/60 shadow-xl shadow-violet-500/10' : colors.ring ? `border ${colors.ring}` : 'border-slate-800'}
                    `}
                  >
                    {/* Top accent */}
                    <div className={`h-1 w-full bg-gradient-to-r ${colors.accent}`} />

                    {/* Badge */}
                    {colors.badge && (
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full text-white bg-gradient-to-r ${colors.accent}`}>
                          <FiStar size={9} /> {colors.badge}
                        </span>
                      </div>
                    )}

                    <div className="flex flex-col flex-1 p-6">
                      {/* Name */}
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Plan</p>
                      <h3 className="text-xl font-bold text-white capitalize mb-4">{plan.name}</h3>

                      {/* Price */}
                      <div className="mb-6">
                        {isFree ? (
                          <div className="text-4xl font-extrabold text-white">Free</div>
                        ) : billingCycle === 'year' ? (
                          <>
                            <div className="flex items-baseline gap-1">
                              <span className="text-4xl font-extrabold text-white">
                                {fmt(price._monthly || price.amount / 12, price.currency)}
                              </span>
                              <span className="text-sm text-slate-500">/mo</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1">{fmt(price.amount, price.currency)} billed yearly</p>
                          </>
                        ) : (
                          <div className="flex items-baseline gap-1">
                            <span className="text-4xl font-extrabold text-white">{fmt(price.amount, price.currency)}</span>
                            <span className="text-sm text-slate-500">/mo</span>
                          </div>
                        )}
                      </div>

                      {/* Divider */}
                      <div className="h-px bg-slate-800 mb-5" />

                      {/* Features */}
                      <ul className="space-y-2.5 mb-8 flex-1">
                        {features.map((f, fi) => (
                          <li key={fi} className={`flex items-start gap-2.5 text-xs ${f.dim ? 'opacity-40' : ''}`}>
                            <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${f.dim ? 'bg-slate-700' : 'bg-emerald-500/15'}`}>
                              <FiCheck size={9} className={f.dim ? 'text-slate-500' : 'text-emerald-400'} />
                            </span>
                            <span className="text-slate-300 leading-tight">{f.text}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <a
                        href="https://dashboard.kabonshare.com/signup"
                        className={`block w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200
                          ${isPopular
                            ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white hover:from-violet-400 hover:to-purple-500 shadow-lg shadow-violet-500/20'
                            : isFree
                            ? 'bg-slate-800 border border-slate-700 text-white hover:bg-slate-700'
                            : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/20'
                          }
                        `}
                      >
                        {isFree ? 'Start for Free' : 'Get Started'}
                      </a>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* ── FAQ ── */}
          <motion.div variants={fade} custom={6} initial="hidden" animate="visible" className="mt-28 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
                <FiMessageCircle size={12} className="text-indigo-400" />
                <span className="text-xs font-semibold text-indigo-300 tracking-wider uppercase">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
                Frequently Asked{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Questions</span>
              </h2>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Everything you need to know about KabonShare plans and billing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {FAQS.map((faq, i) => <FAQItem key={i} num={i + 1} {...faq} />)}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-slate-500 mb-3">Still have questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-medium hover:border-indigo-500/50 hover:text-white transition-all duration-200"
              >
                <FiMessageCircle size={14} />
                Contact Support
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </>
  )
}
