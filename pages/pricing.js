'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiZap, FiUsers, FiHardDrive, FiStar, FiChevronDown, FiMessageCircle, FiPlus, FiMinus } from 'react-icons/fi'
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
  { q: 'Can I connect more accounts than my plan includes?', a: 'Yes. Every paid plan lets you add extra connected-account slots as a recurring add-on — the per-account price is shown on each plan above. Add or remove slots anytime from your billing dashboard; the cost is prorated for the current cycle and folds into your renewal.' },
  { q: 'How does storage work?', a: 'Upload media to your Asset Library and reuse across posts. Thumbnails don\'t count towards your quota. Plans range from 1 GB (Free) to 100 GB (Business).' },
  { q: 'Can I upgrade or downgrade?', a: 'Yes — changes take effect immediately and we prorate the charges based on your billing cycle.' },
  { q: 'What happens if I run out of credits?', a: 'Buy extra credits anytime inside your dashboard. Purchased credits never expire; subscription credits reset monthly.' },
]

// Which plan carries the "Most Popular" badge + highlight. Keyed by plan name
// (lowercase) so it doesn't drift when marketing labels change.
const RECOMMENDED_PLAN = 'growth'
const RECOMMENDED_LABEL = 'Most Popular'

// Accent colours per plan (badge is handled separately via RECOMMENDED_PLAN).
const PLAN_COLORS = {
  free:     { accent: 'from-slate-400 to-slate-500',    ring: 'border-line' },
  starter:  { accent: 'from-indigo-400 to-violet-500',  ring: 'border-indigo-500/40' },
  growth:   { accent: 'from-violet-500 to-purple-600',  ring: 'border-violet-500/60' },
  pro:      { accent: 'from-fuchsia-500 to-pink-600',   ring: 'border-fuchsia-500/50' },
  business: { accent: 'from-emerald-400 to-teal-500',   ring: 'border-emerald-500/40' },
}
const DEFAULT_COLORS = { accent: 'from-indigo-400 to-violet-500', ring: 'border-line' }

function FAQItem({ q, a, num }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      onClick={() => setOpen(o => !o)}
      className={`rounded-2xl border cursor-pointer transition-all duration-200 overflow-hidden
        ${open ? 'bg-surface/80 border-line' : 'bg-surface border-line hover:border-line hover:bg-surface/40'}`}
    >
      <div className="flex items-center gap-4 px-5 py-4">
        <span className="w-7 h-7 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[11px] font-bold flex items-center justify-center flex-shrink-0">
          {String(num).padStart(2, '0')}
        </span>
        <span className="text-sm font-semibold text-body flex-1 leading-snug">{q}</span>
        <FiChevronDown
          size={15}
          className={`text-muted flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-indigo-400' : ''}`}
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
            <div className="px-5 pb-5 pl-16 text-sm text-muted leading-relaxed">
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
  const [billingCycle, setBillingCycle] = useState('year')
  const [accountsWanted, setAccountsWanted] = useState(1) // seeded to the cheapest paid plan's included accounts once plans load
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

      // Seed the account count from the cheapest PAID plan's included accounts,
      // so the selector starts where paid pricing begins (not the free tier).
      const paid = fetchedPlans
        .map(p => ({ p, amt: (p.prices?.find(pr => pr.interval === 'month' && pr.currency === 'USD') || p.prices?.find(pr => pr.interval === 'month'))?.amount ?? 0 }))
        .filter(x => x.amt > 0)
        .sort((a, b) => a.amt - b.amt)
      const inc = paid[0]?.p?.limits?.maxAccounts
      if (typeof inc === 'number' && inc > 0) setAccountsWanted(inc)

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

  const fmt = (amount, curr) => new Intl.NumberFormat('en-US', {
    style: 'currency', currency: curr || 'USD',
    currencyDisplay: 'narrowSymbol', // ₦ / $ instead of "NGN" / "US$" — keeps big prices from overflowing
    minimumFractionDigits: amount % 1 !== 0 ? 2 : 0,
    maximumFractionDigits: amount % 1 !== 0 ? 2 : 0,
  }).format(amount)

  // Channel-driven pricing: base plan + paid extra-account slots for accounts
  // beyond what the plan includes, for the selected count + currency.
  const computePricing = (plan) => {
    const monthly = plan.prices?.find(p => p.currency === currency && p.interval === 'month')
      || plan.prices?.find(p => p.interval === 'month' && p.currency === 'USD')
    const base = monthly?.amount || 0
    const unit = monthly?.pricePerExtraAccount || 0
    const curr = monthly?.currency || currency
    const included = plan.limits?.maxAccounts ?? 0
    const unlimited = included === -1
    const maxExtra = plan.limits?.maxExtraAccounts
    const extraCap = (maxExtra === -1 || maxExtra == null) ? Infinity : maxExtra
    const maxAccounts = unlimited ? Infinity : included + (unit > 0 ? extraCap : 0)
    const capped = !unlimited && accountsWanted > maxAccounts
    const billedAccounts = unlimited ? accountsWanted : Math.min(accountsWanted, maxAccounts)
    const extraNeeded = unlimited ? 0 : Math.max(0, billedAccounts - included)
    const monthlyTotal = base + extraNeeded * unit
    const isFree = monthlyTotal === 0
    const m = 1 - (yearlyDiscount.percent || 0) / 100
    const yearlyTotal = Math.round(monthlyTotal * 12 * m / 10) * 10
    const yearlyMonthly = Math.round(monthlyTotal * m * 10) / 10
    const accountsLabel = unlimited
      ? 'Unlimited accounts'
      : capped
      ? `Up to ${maxAccounts} accounts`
      : `${accountsWanted} account${accountsWanted > 1 ? 's' : ''}`
    return { base, unit, curr, included, unlimited, maxAccounts, capped, billedAccounts, extraNeeded, monthlyTotal, isFree, yearlyTotal, yearlyMonthly, accountsLabel }
  }

  const getFeatures = (plan) => {
    const f = []
    const l = plan.limits || {}
    const ft = plan.features || {}
    if (l.creditsPerMonth !== undefined) f.push({ key: 'credits', icon: FiZap,       text: l.creditsPerMonth === -1 ? 'Unlimited credits/mo' : `${l.creditsPerMonth} credits/mo` })
    if (l.maxAccounts !== undefined)     f.push({ key: 'accounts', icon: FiCheck,     text: l.maxAccounts === -1 ? 'Unlimited accounts included' : `${l.maxAccounts} account${l.maxAccounts > 1 ? 's' : ''} included` })
    if (l.maxWorkspaces !== undefined)   f.push({ key: 'workspaces', icon: FiUsers,     text: l.maxWorkspaces === -1 ? 'Unlimited workspaces' : `${l.maxWorkspaces} workspace${l.maxWorkspaces > 1 ? 's' : ''}` })
    if (l.storageQuotaMB !== undefined)  f.push({ key: 'storage', icon: FiHardDrive, text: l.storageQuotaMB === -1 ? 'Unlimited storage' : l.storageQuotaMB >= 1024 ? `${Math.round(l.storageQuotaMB/1024)}GB storage` : `${l.storageQuotaMB}MB storage` })
    if (l.aiGenerationsPerMonth !== undefined) f.push({ key: 'ai', icon: FiZap, text: l.aiGenerationsPerMonth === -1 ? 'Unlimited AI generations' : l.aiGenerationsPerMonth > 0 ? `${l.aiGenerationsPerMonth} AI generations/mo` : 'No AI generations', dim: l.aiGenerationsPerMonth === 0 })
    if (l.maxTeamMembers > 1 || l.maxTeamMembers === -1) f.push({ key: 'team', icon: FiUsers, text: l.maxTeamMembers === -1 ? 'Unlimited team members' : `Up to ${l.maxTeamMembers} team members` })
    if (ft.allowVideo)      f.push({ key: 'video', icon: FiCheck, text: 'Video publishing' })
    if (ft.allowScheduling) f.push({ key: 'scheduling', icon: FiCheck, text: 'Post scheduling' })
    f.push({ key: 'analytics', icon: FiCheck, text: 'Analytics dashboard' })
    if (ft.allowReportBuilder) f.push({ key: 'reports', icon: FiCheck, text: 'Exportable report builder' })
    f.push({ key: 'api', icon: FiCheck, text: 'API access' })
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

      <div className="min-h-screen bg-page relative overflow-hidden">
        {/* background glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-600/6 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 relative z-10">

          {/* ── Header ── */}
          <motion.div variants={fade} custom={0} initial="hidden" animate="visible" className="text-center max-w-2xl mx-auto mb-9">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 tracking-wider uppercase">Pricing</span>
            </div>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-body tracking-[-0.035em] leading-[1.0] mb-5">
              Simple pricing that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">scales with you.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted">
              Start free and upgrade only when you grow. No hidden fees, cancel anytime.
            </p>
          </motion.div>

          {/* ── Controls: how many accounts + billing ── */}
          <motion.div variants={fade} custom={1} initial="hidden" animate="visible"
            className="rounded-2xl border border-line bg-surface p-5 sm:p-6 mb-3 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            {/* Accounts stepper */}
            <div className="flex items-center justify-between md:justify-start gap-5">
              <div>
                <div className="text-base font-bold text-body">Accounts</div>
                <div className="text-xs sm:text-sm text-muted">How many accounts you want to connect</div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <button
                  onClick={() => setAccountsWanted(n => Math.max(1, n - 1))}
                  disabled={accountsWanted <= 1}
                  aria-label="Fewer accounts"
                  className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-body hover:border-line-strong disabled:opacity-40 transition-colors"
                >
                  <FiMinus size={16} />
                </button>
                <span className="w-7 text-center text-lg font-extrabold text-body tabular-nums">{accountsWanted}</span>
                <button
                  onClick={() => setAccountsWanted(n => Math.min(50, n + 1))}
                  disabled={accountsWanted >= 50}
                  aria-label="More accounts"
                  className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-body hover:border-line-strong disabled:opacity-40 transition-colors"
                >
                  <FiPlus size={16} />
                </button>
              </div>
            </div>

            {/* Billing + currency */}
            <div className="flex items-center justify-between md:justify-end gap-3 flex-wrap">
              <div className="flex items-center p-1 bg-inset border border-line rounded-full gap-1">
                <button
                  onClick={() => setBillingCycle('month')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${billingCycle === 'month' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-body'}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setBillingCycle('year')}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${billingCycle === 'year' ? 'bg-primary text-white shadow-md' : 'text-muted hover:text-body'}`}
                >
                  Yearly
                  <span className={`text-[11px] px-2 py-0.5 rounded-full font-bold ${billingCycle === 'year' ? 'bg-white/20 text-white' : 'bg-emerald-500/15 text-emerald-500'}`}>
                    Save {yearlyDiscount.percent}%
                  </span>
                </button>
              </div>

              {availableCurrencies.length > 1 && (
                <div className="flex items-center p-1 bg-inset border border-line rounded-full gap-1">
                  {availableCurrencies.map(curr => (
                    <button
                      key={curr}
                      onClick={() => setCurrency(curr)}
                      className={`px-3.5 py-2 rounded-full text-sm font-semibold transition-all ${currency === curr ? 'bg-surface text-body shadow-sm' : 'text-subtle hover:text-muted'}`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
          <p className="text-center text-xs text-subtle mb-12 flex items-center justify-center gap-1.5">
            <FiCheck className="text-emerald-500" size={12} /> No credit card required · Cancel anytime
          </p>

          {/* ── Plan cards ── */}
          {loading ? (
            <div className="text-center py-20">
              <div className="w-10 h-10 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin mx-auto mb-4" />
              <p className="text-subtle text-sm">Loading plans…</p>
            </div>
          ) : (
            <motion.div variants={fade} custom={2} initial="hidden" animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch pt-3"
            >
              {plans.map((plan, i) => {
                const pricing = computePricing(plan)
                const features = getFeatures(plan)
                const isFree = pricing.isFree
                const colors = PLAN_COLORS[plan.name?.toLowerCase()] || DEFAULT_COLORS
                const isPopular = plan.name?.toLowerCase() === RECOMMENDED_PLAN
                // "Everything in X, plus" — higher tiers list only what changed vs the plan to their left.
                const prevPlan = i > 0 ? plans[i - 1] : null
                const prevMap = prevPlan ? Object.fromEntries(getFeatures(prevPlan).map((pf) => [pf.key, pf.text])) : {}
                const shown = prevPlan ? features.filter((f) => prevMap[f.key] !== f.text) : features

                return (
                  <motion.div
                    key={plan._id}
                    variants={fade} custom={2 + i * 0.15}
                    initial="hidden" animate="visible"
                    className={`group relative flex flex-col rounded-3xl border bg-surface p-6 transition-all duration-300 hover:-translate-y-1.5
                      ${isPopular
                        ? 'border-violet-500/60 shadow-2xl shadow-violet-500/15 ring-1 ring-violet-500/20'
                        : 'border-line hover:border-line-strong'}`}
                  >
                    {/* Badge */}
                    {isPopular && (
                      <span className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-[10px] font-bold px-3 py-1 rounded-full text-white shadow-md bg-gradient-to-r ${colors.accent}`}>
                        <FiStar size={9} /> {RECOMMENDED_LABEL}
                      </span>
                    )}

                    {/* Name */}
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className={`w-2.5 h-2.5 rounded-full bg-gradient-to-br ${colors.accent}`} />
                      <h3 className="font-display text-lg font-extrabold text-body capitalize">{plan.name}</h3>
                    </div>

                    {/* Price — reflects the selected number of accounts */}
                    <div className="mb-6">
                      {isFree ? (
                        <>
                          <span className="font-display text-4xl font-extrabold text-body">Free</span>
                          <p className="text-xs text-subtle mt-2">
                            {pricing.unlimited ? 'Unlimited accounts' : `Connect up to ${pricing.included} account${pricing.included > 1 ? 's' : ''}`}
                          </p>
                        </>
                      ) : billingCycle === 'year' ? (
                        <>
                          <div className="flex items-baseline gap-1">
                            <span className="font-display text-3xl xl:text-4xl font-extrabold text-body tracking-tight tabular-nums whitespace-nowrap">{fmt(pricing.yearlyMonthly, pricing.curr)}</span>
                            <span className="text-sm text-subtle">/mo</span>
                          </div>
                          <p className="text-xs text-subtle mt-1.5">
                            {pricing.accountsLabel} · {fmt(pricing.yearlyTotal, pricing.curr)} billed yearly <span className="text-emerald-500 font-medium">(save {yearlyDiscount.percent}%)</span>
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1">
                            <span className="font-display text-3xl xl:text-4xl font-extrabold text-body tracking-tight tabular-nums whitespace-nowrap">{fmt(pricing.monthlyTotal, pricing.curr)}</span>
                            <span className="text-sm text-subtle">/mo</span>
                          </div>
                          <p className="text-xs text-subtle mt-1.5">
                            {pricing.accountsLabel}
                            {pricing.extraNeeded > 0 && !pricing.capped && <span className="text-muted"> · incl. {pricing.extraNeeded} extra</span>}
                          </p>
                        </>
                      )}
                    </div>

                    {/* CTA */}
                    <a
                      href="https://dashboard.kabonshare.com/signup"
                      className={`block w-full text-center py-3 rounded-xl text-sm font-bold transition-all duration-200
                        ${isPopular
                          ? `text-white bg-gradient-to-r ${colors.accent} shadow-lg shadow-violet-500/25 hover:-translate-y-0.5`
                          : isFree
                          ? 'bg-inset border border-line text-body hover:border-line-strong'
                          : 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20 hover:-translate-y-0.5'}`}
                    >
                      {isFree ? 'Start for Free' : 'Get Started'}
                    </a>

                    {/* Features */}
                    <div className="h-px bg-line my-6" />
                    {prevPlan && (
                      <p className="text-[13px] font-semibold text-body mb-3.5">
                        Everything in <span className="capitalize">{prevPlan.name}</span>, plus
                      </p>
                    )}
                    <ul className="space-y-3 flex-1">
                      {shown.map((f, fi) => (
                        <li key={f.key || fi} className={`flex items-start gap-2.5 text-[13px] ${f.dim ? 'opacity-45' : ''}`}>
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-px ${f.dim ? 'bg-line' : 'bg-emerald-500/15'}`}>
                            <FiCheck size={9} className={f.dim ? 'text-subtle' : 'text-emerald-500'} />
                          </span>
                          <span className="text-muted leading-snug">{f.text}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* ── FAQ ── */}
          <motion.div variants={fade} custom={6} initial="hidden" animate="visible" className="mt-28 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
                <FiMessageCircle size={12} className="text-indigo-500 dark:text-indigo-400" />
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-300 tracking-wider uppercase">FAQ</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-body tracking-[-0.025em] mb-3">
                Questions? Answered.
              </h2>
              <p className="text-muted text-sm max-w-md mx-auto">
                Everything you need to know about KabonShare plans and billing.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              {FAQS.map((faq, i) => <FAQItem key={i} num={i + 1} {...faq} />)}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-subtle mb-3">Still have questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border border-line text-muted text-sm font-medium hover:border-indigo-500/50 hover:text-body transition-all duration-200"
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
