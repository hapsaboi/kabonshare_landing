'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiStar, FiChevronDown, FiMessageCircle, FiPlus, FiMinus, FiX } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { detectCurrency, rememberCurrency } from '../lib/currency'
import { computeSlotsMonthly, hasVolumePricing, describeSlotPricing } from '../lib/billing/slotPricing'

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
const MAX_ACCOUNTS = 1000

/**
 * Currencies offered on the pricing page, in display order.
 *
 * Plans can hold price rows in currencies we don't want to advertise — this is
 * the shop window, not the full catalogue. A plan with no row in either of
 * these falls back to its USD pricing via computePricing.
 */
const SUPPORTED_CURRENCIES = ['USD', 'NGN']

/**
 * Colours and the "Most Popular" badge now come from the plan itself
 * (`presentation` and `isRecommended`), set in the admin panel.
 *
 * The map below is a fallback for plans that have no presentation set yet. It
 * used to be the only source, keyed by plan name — which failed silently twice:
 * the badge pointed at 'growth', a plan that doesn't exist, and 'team' was
 * missing entirely so it rendered in Starter's colours.
 */

/**
 * Accent colours per plan, keyed by lowercase plan name.
 *
 * `badge` defaults to `accent` and only needs setting when the badge should
 * differ from the card's own accent — a gradient that reads well as a 2.5px dot
 * is not always the one that reads well as a filled pill.
 *
 * A plan missing from here falls back to DEFAULT_COLORS, which is why `team`
 * previously looked identical to `starter`.
 */
const PLAN_COLORS = {
  free:     { accent: 'from-slate-400 to-slate-500',    ring: 'border-line' },
  starter:  { accent: 'from-indigo-400 to-violet-500',  ring: 'border-indigo-500/40' },
  team:     { accent: 'from-violet-500 to-purple-600',  ring: 'border-violet-500/60', badge: 'from-violet-600 to-purple-700' },
  growth:   { accent: 'from-violet-500 to-purple-600',  ring: 'border-violet-500/60' },
  pro:      { accent: 'from-fuchsia-500 to-pink-600',   ring: 'border-fuchsia-500/50' },
  business: { accent: 'from-emerald-400 to-teal-500',   ring: 'border-emerald-500/40' },
}
const DEFAULT_COLORS = { accent: 'from-indigo-400 to-violet-500', ring: 'border-line' }

/**
 * Extra-account pricing, one row per BAND.
 *
 * Rows are the brackets themselves rather than sample totals: the bands are the
 * thing being explained, and a reader who sees "$53.50 at 11 accounts" still
 * has to work backwards to find where the rate changed. Showing the structure
 * removes that step.
 *
 * Bands are unioned across plans so every plan is a column against a shared set
 * of rows — plans with different boundaries still line up, and a plan that
 * doesn't reach a band shows a dash rather than a misleading price.
 *
 * Renders nothing unless at least one plan has brackets configured.
 */
function VolumeTable({ plans, currency, fmt, computePricing }) {
  const priced = (plans || [])
    .map((plan) => ({ plan, pricing: computePricing(plan) }))
    .filter(({ pricing }) => (pricing.tiers || []).length > 0)

  if (priced.length === 0) return null

  // Every boundary any plan defines, so the rows are shared across columns.
  const edges = new Set()
  priced.forEach(({ pricing }) => pricing.tiers.forEach((t) => t.upTo && edges.add(t.upTo)))
  const sorted = [...edges].sort((a, b) => a - b)

  const raw = []
  let from = 1
  for (const upTo of sorted) {
    raw.push({ from, upTo })
    from = upTo + 1
  }
  raw.push({ from, upTo: null })   // the open-ended top band

  // Rate a given plan charges for slots inside a band. A plan whose table stops
  // below this band charges its flat fallback; null means it has no rate at all.
  const rateFor = (pricing, band) => {
    const tiers = [...pricing.tiers].sort((a, b) => (a.upTo ?? Infinity) - (b.upTo ?? Infinity))
    const hit = tiers.find((t) => (t.upTo ?? Infinity) >= band.from)
    if (hit) return hit.price
    return pricing.unit > 0 ? pricing.unit : null
  }

  // Merge adjacent bands where no plan's rate actually changes. Unioning
  // boundaries can split a range that is uniform for every column — two
  // identical rows reading "1–5" and "6–10" invite the reader to hunt for a
  // difference that isn't there.
  const bands = raw.reduce((acc, band) => {
    const prev = acc[acc.length - 1]
    const same = prev && priced.every(({ pricing }) => rateFor(pricing, prev) === rateFor(pricing, band))
    if (same) prev.upTo = band.upTo
    else acc.push({ ...band })
    return acc
  }, [])

  const label = (b) => b.upTo == null
    ? `Accounts ${b.from}+`
    : b.from === b.upTo ? `Account ${b.from}` : `Accounts ${b.from}–${b.upTo}`

  return (
    <motion.div variants={fade} custom={5.5} initial="hidden" animate="visible" className="mt-24 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-body tracking-tight">
          Adding more accounts
        </h2>
        <p className="text-muted mt-2 text-sm max-w-xl mx-auto">
          Each band applies only to the accounts inside it — the first ones stay at
          the first rate, so adding more never reprices what you already have.
        </p>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-line">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-surface/50">
              <th className="text-left font-semibold text-body px-4 py-3 whitespace-nowrap">
                Social accounts
                <span className="ml-2 font-normal text-subtle text-xs">· per account, per month</span>
              </th>
              {priced.map(({ plan }) => (
                <th key={plan._id} className="text-right font-semibold text-body px-4 py-3 capitalize whitespace-nowrap">
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* What the plan already includes. Stated because "extra accounts"
                is only meaningful relative to a starting number. */}
            <tr className="border-t border-line">
              <td className="px-4 py-3">
                <span className="text-body">Included with the plan</span>
                <span className="block text-xs text-subtle mt-0.5">No extra charge</span>
              </td>
              {priced.map(({ plan, pricing }) => (
                <td key={plan._id} className="px-4 py-3 text-right text-body tabular-nums whitespace-nowrap">
                  {pricing.unlimited ? 'Unlimited' : `${pricing.included} free`}
                </td>
              ))}
            </tr>

            {bands.map((band, i) => (
              <tr key={i} className="border-t border-line">
                <td className="px-4 py-3 text-body whitespace-nowrap">{label(band)}</td>
                {priced.map(({ plan, pricing }) => {
                  const rate = rateFor(pricing, band)
                  return (
                    <td key={plan._id} className="px-4 py-3 text-right text-body tabular-nums whitespace-nowrap">
                      {rate == null
                        ? <span className="text-subtle">—</span>
                        : <>{fmt(rate, pricing.curr)}<span className="text-subtle text-xs">/mo</span></>}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-subtle mt-3 text-center">
        Added mid-cycle, you only pay for the time remaining. Remove them anytime.
      </p>
    </motion.div>
  )
}

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
      // Only the currencies we actually want to sell in. Plans may carry EUR
      // and GBP rows for other purposes; showing a picker for a currency
      // nobody supports is a promise we don't keep.
      //
      // Filtered here rather than at render so currency detection and the
      // fallback below both see the same narrowed list — filtering only the
      // buttons would let detectCurrency select a hidden currency and leave the
      // picker with nothing highlighted.
      const currencyArray = Array.from(currencies)
        .filter(c => SUPPORTED_CURRENCIES.includes(c))
        .sort((a, b) => SUPPORTED_CURRENCIES.indexOf(a) - SUPPORTED_CURRENCIES.indexOf(b))
      setAvailableCurrencies(currencyArray.length > 0 ? currencyArray : ['USD'])

      // Show local pricing where we can. Someone arriving from a naira-budget ad
      // and meeting a dollar figure has to do mental arithmetic before they can
      // judge whether it's affordable, and most won't bother.
      const detected = detectCurrency(currencyArray)
      if (detected) {
        setCurrency(detected)
      } else if (currencyArray.length > 0 && !currencyArray.includes('USD')) {
        setCurrency(currencyArray[0])
      }
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
    const tiers = monthly?.extraAccountTiers || []
    // "Does this plan sell slots at all" — true if either a flat rate or a
    // bracket table is set. A plan priced purely by brackets has unit === 0.
    const sellsSlots = unit > 0 || tiers.length > 0
    const curr = monthly?.currency || currency
    const included = plan.limits?.maxAccounts ?? 0
    const unlimited = included === -1
    const maxExtra = plan.limits?.maxExtraAccounts
    const extraCap = (maxExtra === -1 || maxExtra == null) ? Infinity : maxExtra
    const maxAccounts = unlimited ? Infinity : included + (sellsSlots ? extraCap : 0)
    const capped = !unlimited && accountsWanted > maxAccounts
    const billedAccounts = unlimited ? accountsWanted : Math.min(accountsWanted, maxAccounts)
    const extraNeeded = unlimited ? 0 : Math.max(0, billedAccounts - included)
    // Priced through the bracket table, not `extraNeeded * unit`. Multiplying a
    // flat rate here would quote a total the checkout doesn't charge — the
    // stepper is the first number a customer sees, so it has to be the real one.
    const extrasMonthly = computeSlotsMonthly(monthly, extraNeeded)
    const monthlyTotal = base + extrasMonthly
    const isFree = monthlyTotal === 0
    const m = 1 - (yearlyDiscount.percent || 0) / 100
    const yearlyTotal = Math.round(monthlyTotal * 12 * m / 10) * 10
    const yearlyMonthly = Math.round(monthlyTotal * m * 10) / 10
    const accountsLabel = unlimited
      ? 'Unlimited accounts'
      : capped
      ? `Up to ${maxAccounts} accounts`
      : `${accountsWanted} account${accountsWanted > 1 ? 's' : ''}`
    return { base, unit, tiers, sellsSlots, extrasMonthly, curr, included, unlimited, maxAccounts, capped, billedAccounts, extraNeeded, monthlyTotal, isFree, yearlyTotal, yearlyMonthly, accountsLabel }
  }

  /**
   * Feature groups for a plan.
   *
   * Grouped rather than a flat list because the list is now long enough that a
   * single column of ticks is unreadable — the group headers let the eye skip
   * whole blocks, and they double as the upgrade story ("Collaboration: just
   * you" vs five lines).
   *
   * Every plan renders every group. The previous version diffed each tier
   * against the one to its left, which made the best plan look like the
   * thinnest — Team showed five bullets where Free showed eight. People scan
   * one column, the one they think they want, so a column that only makes
   * sense relative to its neighbour fails the reader who never looks left.
   */
  const getFeatureGroups = (plan) => {
    const l = plan.limits || {}
    const ft = plan.features || {}
    const collaborative = l.maxTeamMembers > 1 || l.maxTeamMembers === -1
    const fmtStorage = (mb) => mb === -1 ? 'Unlimited storage'
      : mb >= 1024 ? `${Math.round(mb / 1024)}GB storage` : `${mb}MB storage`

    return [
      {
        title: 'Publishing',
        items: [
          { text: l.maxAccounts === -1 ? 'Unlimited accounts' : `${l.maxAccounts} account${l.maxAccounts === 1 ? '' : 's'} included`, sub: l.maxExtraAccounts !== 0 ? 'Add more anytime, prorated' : null },
          { text: l.maxWorkspaces === -1 ? 'Unlimited workspaces' : `${l.maxWorkspaces} workspace${l.maxWorkspaces === 1 ? '' : 's'}` },
          { text: 'Post scheduling' },
          { text: 'Video publishing' },
        ],
      },
      {
        title: 'Content',
        items: [
          { text: l.creditsPerMonth === -1 ? 'Unlimited credits' : `${l.creditsPerMonth} credits/mo`, sub: '1 credit per post, any number of platforms' },
          { text: ft.allowAI
              ? (l.aiGenerationsPerMonth === -1 ? 'Unlimited AI generations' : `${l.aiGenerationsPerMonth} AI generations/mo`)
              : 'AI captions', off: !ft.allowAI },
          { text: fmtStorage(l.storageQuotaMB) },
          { text: 'Ideas boards', off: !ft.allowIdeas },
        ],
      },
      // Omitted entirely on single-seat plans. A "Collaboration: Just you"
      // block is a section header spent saying nothing, and it reads as a
      // downgrade notice on the plans people start with.
      ...(collaborative ? [{
        title: 'Collaboration',
        items: [
          { text: l.maxTeamMembers === -1 ? 'Unlimited team members' : `Up to ${l.maxTeamMembers} team members` },
          { text: 'Approval workflows', off: !ft.allowApprovals },
          { text: 'Post comments', off: !ft.allowComments },
          { text: 'Team chat', off: !ft.allowTeamChat },
          { text: 'Access levels', off: !ft.allowAccessLevels },
        ],
      }] : []),
      {
        title: 'Insights',
        items: [
          { text: 'Analytics dashboard' },
          { text: 'Exportable report builder', off: !ft.allowReportBuilder },
          { text: 'API access' },
        ],
      },
    ]
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
                {/* Typeable — stepping one-by-one to 1000 isn't usable */}
                <input
                  type="number" min={1} max={MAX_ACCOUNTS} value={accountsWanted}
                  onChange={(e) => {
                    const n = parseInt(e.target.value, 10)
                    setAccountsWanted(Number.isNaN(n) ? 1 : Math.max(1, Math.min(MAX_ACCOUNTS, n)))
                  }}
                  aria-label="Number of accounts"
                  className="w-16 text-center text-lg font-extrabold text-body tabular-nums bg-transparent border border-line rounded-lg py-1 outline-none focus:border-primary transition-colors [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button
                  onClick={() => setAccountsWanted(n => Math.min(MAX_ACCOUNTS, n + 1))}
                  disabled={accountsWanted >= MAX_ACCOUNTS}
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
                      onClick={() => { setCurrency(curr); rememberCurrency(curr) }}
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
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch pt-3"
            >
              {plans.map((plan, i) => {
                const pricing = computePricing(plan)
                const groups = getFeatureGroups(plan)
                const isFree = pricing.isFree
                const fallback = PLAN_COLORS[plan.name?.toLowerCase()] || DEFAULT_COLORS
                // Per-key fallback, not object-level: a plan with only `accent`
                // set should still get a sensible ring rather than losing it.
                const colors = {
                  accent: plan.presentation?.accent || fallback.accent,
                  badge: plan.presentation?.badge || plan.presentation?.accent || fallback.badge || fallback.accent,
                  ring: plan.presentation?.ring || fallback.ring,
                }
                const isPopular = !!plan.isRecommended

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
                      <span className={`absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 text-[10px] font-bold px-3 py-1 rounded-full text-white shadow-md bg-gradient-to-r ${colors.badge}`}>
                        <FiStar size={9} /> {plan.recommendedLabel || 'Most Popular'}
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
                          <p className="text-xs text-subtle mt-1.5 min-h-[2.25rem] [text-wrap:pretty]">
                            {pricing.accountsLabel} · {fmt(pricing.yearlyTotal, pricing.curr)} billed yearly <span className="text-emerald-500 font-medium">(save {yearlyDiscount.percent}%)</span>
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1">
                            <span className="font-display text-3xl xl:text-4xl font-extrabold text-body tracking-tight tabular-nums whitespace-nowrap">{fmt(pricing.monthlyTotal, pricing.curr)}</span>
                            <span className="text-sm text-subtle">/mo</span>
                          </div>
                          <p className="text-xs text-subtle mt-1.5 min-h-[2.25rem] [text-wrap:pretty]">
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
                    <div className="flex-1 space-y-5">
                      {groups.map((g) => (
                        <div key={g.title}>
                          <p className="text-[11px] font-bold uppercase tracking-wider text-subtle mb-2.5">{g.title}</p>
                          <ul className="space-y-2.5">
                            {g.items.map((f, fi) => (
                              <li key={fi} className={`flex items-start gap-2.5 text-[13px] ${f.off ? 'opacity-40' : ''}`}>
                                <span className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-px ${f.off ? 'bg-line' : 'bg-emerald-500/15'}`}>
                                  {f.off
                                    ? <FiX size={9} className="text-subtle" />
                                    : <FiCheck size={9} className="text-emerald-500" />}
                                </span>
                                <span className="min-w-0">
                                  <span className="text-muted leading-snug block">{f.text}</span>
                                  {f.sub && !f.off && (
                                    <span className="text-[11px] text-subtle leading-snug block mt-0.5">{f.sub}</span>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}

            </motion.div>
          )}

          {/* ── Enterprise ──
              A band rather than a fourth column. As a card it competed with
              three real prices and squeezed them all narrower; as a tab it
              would be hidden behind a click, and someone running 40 accounts
              has to DISCOVER that a custom plan exists. Full width, below the
              decision they came to make. */}
          <motion.div variants={fade} custom={5} initial="hidden" animate="visible" className="mt-8">
            <div className="rounded-3xl border border-line bg-surface/40 p-7 sm:p-9 flex flex-col md:flex-row md:items-center gap-7">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-slate-400 to-slate-600" />
                  <h3 className="font-display text-lg font-extrabold text-body">Enterprise</h3>
                </div>
                <p className="text-muted text-sm max-w-xl leading-relaxed">
                  Running dozens of accounts across multiple brands? We&apos;ll price around
                  what you actually need — unlimited accounts and workspaces, volume rates,
                  custom approval workflows, priority support and invoicing.
                </p>
              </div>

              <div className="flex-shrink-0">
                <Link
                  href="/enterprise"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-line text-body font-semibold text-sm hover:bg-surface transition-colors whitespace-nowrap">
                  Talk to us
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── Volume pricing table ──
              Only rendered for plans that actually price slots in brackets. A
              flat-rate plan already says "X/mo each" on the card, and a table
              restating one number is noise. */}
          <VolumeTable plans={plans} currency={currency} fmt={fmt} computePricing={computePricing} />

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
