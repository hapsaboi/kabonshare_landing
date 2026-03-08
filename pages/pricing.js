'use client'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiCheckCircle, HiSparkles, HiLightningBolt } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Pricing() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [billingCycle, setBillingCycle] = useState('month')
  const [currency, setCurrency] = useState('USD')
  const [availableCurrencies, setAvailableCurrencies] = useState(['USD'])
  const [yearlyDiscount, setYearlyDiscount] = useState({ percent: 20, minMonths: 12 })

  useEffect(() => {
    fetchPlans()
  }, [])

  const fetchPlans = async () => {
    try {
      // Public endpoint - no authentication required for viewing plans
      const response = await fetch('https://api.kabonshare.com/api/plans')
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      const fetchedPlans = data.plans || []
      setPlans(fetchedPlans)

      // Store yearly discount config from backend
      if (data.yearlyDiscount) {
        setYearlyDiscount(data.yearlyDiscount)
      }
      
      // Extract unique currencies from all plans
      const currencies = new Set()
      fetchedPlans.forEach(plan => {
        if (plan.prices && Array.isArray(plan.prices)) {
          plan.prices.forEach(price => {
            if (price.currency) {
              currencies.add(price.currency)
            }
          })
        }
      })
      
      const currencyArray = Array.from(currencies).sort()
      setAvailableCurrencies(currencyArray.length > 0 ? currencyArray : ['USD'])
      
      // Set default currency to first available if USD not available
      if (currencyArray.length > 0 && !currencyArray.includes('USD')) {
        setCurrency(currencyArray[0])
      }
    } catch (error) {
      console.error('Failed to fetch plans:', error)
      // Set empty plans array on error so the page still renders
      setPlans([])
    } finally {
      setLoading(false)
    }
  }

  const getPlanPrice = (plan) => {
    if (!plan.prices || plan.prices.length === 0) return null

    if (billingCycle === 'year') {
      // Look for an explicit yearly price first
      let yearlyPrice = plan.prices.find(
        p => p.currency === currency && p.interval === 'year'
      )
      if (!yearlyPrice) {
        yearlyPrice = plan.prices.find(p => p.interval === 'year' && p.currency === 'USD')
      }
      if (yearlyPrice) return yearlyPrice

      // Calculate yearly from monthly price with discount
      let monthlyPrice = plan.prices.find(
        p => p.currency === currency && p.interval === 'month'
      )
      if (!monthlyPrice) {
        monthlyPrice = plan.prices.find(p => p.interval === 'month' && p.currency === 'USD')
      }
      if (monthlyPrice) {
        const discountMultiplier = 1 - (yearlyDiscount.percent / 100)
        return {
          ...monthlyPrice,
          interval: 'year',
          amount: Math.round(monthlyPrice.amount * 12 * discountMultiplier * 100) / 100,
          _monthlyEquivalent: Math.round(monthlyPrice.amount * discountMultiplier * 100) / 100,
          _isCalculated: true,
        }
      }
      return null
    }

    // Monthly: find direct match
    let price = plan.prices.find(
      p => p.currency === currency && p.interval === 'month'
    )
    if (!price) {
      price = plan.prices.find(p => p.interval === 'month' && p.currency === 'USD')
    }
    return price
  }

  const formatPrice = (amount, curr) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: curr || 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount)
  }

  const getPlanFeatures = (plan) => {
    const features = []
    
    if (plan.limits) {
      if (plan.limits.maxAccounts) {
        features.push(`Up to ${plan.limits.maxAccounts} connected accounts`)
      }
      if (plan.limits.maxWorkspaces) {
        features.push(`${plan.limits.maxWorkspaces} workspace${plan.limits.maxWorkspaces > 1 ? 's' : ''}`)
      }
      if (plan.limits.creditsPerMonth) {
        features.push(`${plan.limits.creditsPerMonth} monthly credits`)
      }
      if (plan.limits.storageQuotaMB) {
        const storageMB = plan.limits.storageQuotaMB
        const storageDisplay = storageMB >= 1000 
          ? `${(storageMB / 1000).toFixed(1)}GB storage`
          : `${storageMB}MB storage`
        features.push(storageDisplay)
      }
      if (plan.limits.maxTeamMembers) {
        const tm = plan.limits.maxTeamMembers
        if (tm === -1) {
          features.push('Unlimited team members')
        } else if (tm > 1) {
          features.push(`Up to ${tm} team members per workspace`)
        }
      }
    }

    if (plan.features) {
      if (plan.features.allowVideo) {
        features.push('Video publishing')
      }
      if (plan.features.allowScheduling) {
        features.push('Post scheduling')
      }
    }

    features.push('Analytics dashboard')
    features.push('Priority support')
    features.push('API documentation')

    return features
  }

  const getBadgeForPlan = (planName) => {
    const name = planName.toLowerCase()
    if (name.includes('pro') || name.includes('premium')) {
      return { text: 'Most Popular', color: 'bg-gradient-to-r from-indigo-500 to-cyan-500' }
    }
    if (name.includes('enterprise') || name.includes('business')) {
      return { text: 'Best Value', color: 'bg-gradient-to-r from-purple-500 to-pink-500' }
    }
    return null
  }

  return (
    <>
      <Head>
        <title>Pricing - KabonShare</title>
        <meta name="description" content="Choose the perfect plan for your social media publishing needs" />
      </Head>

      <Navbar />

      <div className="min-h-screen bg-slate-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              <span className="text-sm font-medium text-indigo-300">Simple, Transparent Pricing</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Perfect Plan</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Start free, scale as you grow. No hidden fees, cancel anytime.
            </p>
          </motion.div>

          {/* Billing Toggle and Currency Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          >
            {/* Billing Cycle Toggle */}
            <div className="inline-flex items-center gap-1 p-1 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5">
              <button
                onClick={() => setBillingCycle('month')}
                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                  billingCycle === 'month'
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('year')}
                className={`px-8 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  billingCycle === 'year'
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Yearly
                <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                  billingCycle === 'year'
                    ? 'bg-white/20 text-white'
                    : 'bg-emerald-500/20 text-emerald-400'
                }`}>
                  Save {yearlyDiscount.percent}%
                </span>
              </button>
            </div>

            {/* Currency Selector */}
            {availableCurrencies.length > 1 && (
              <div className="inline-flex items-center gap-1 p-1 bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5">
                {availableCurrencies.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => setCurrency(curr)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all ${
                      currency === curr
                        ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-20">
              <div className="inline-block w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
              <p className="text-slate-400 mt-4">Loading plans...</p>
            </div>
          )}

          {/* Pricing Cards */}
          {!loading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {plans.map((plan, index) => {
                const price = getPlanPrice(plan)
                const features = getPlanFeatures(plan)
                const badge = getBadgeForPlan(plan.name)
                const isPopular = badge && badge.text === 'Most Popular'

                return (
                  <motion.div
                    key={plan._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -8 }}
                    className={`relative bg-slate-900/50 backdrop-blur-sm rounded-3xl p-6 border transition-all duration-300 ${
                      isPopular 
                        ? 'border-indigo-500/50 shadow-2xl shadow-indigo-500/20' 
                        : 'border-white/5 hover:border-white/10'
                    }`}
                  >
                    {/* Badge */}
                    {badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <div className={`${badge.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5`}>
                          <HiSparkles className="text-sm" />
                          {badge.text}
                        </div>
                      </div>
                    )}

                    {/* Plan Name */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white capitalize">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      {price && price.amount > 0 ? (
                        <>
                          {billingCycle === 'year' ? (
                            <>
                              <div className="flex items-baseline gap-1.5">
                                <span className="text-3xl font-bold text-white break-all">
                                  {formatPrice(price._monthlyEquivalent || (price.amount / 12), price.currency)}
                                </span>
                                <span className="text-slate-400 text-sm">
                                  /month
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mt-1.5">
                                {formatPrice(price.amount, price.currency)} billed yearly
                              </p>
                            </>
                          ) : (
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-3xl font-bold text-white break-all">
                                {formatPrice(price.amount, price.currency)}
                              </span>
                              <span className="text-slate-400 text-sm">
                                /month
                              </span>
                            </div>
                          )}
                          {price.pricePerCredit && (
                            <p className="text-xs text-slate-500 mt-1.5">
                              {formatPrice(price.pricePerCredit, price.currency)} per additional credit
                            </p>
                          )}
                        </>
                      ) : (
                        <div className="text-3xl font-bold text-white">Free</div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-slate-300">
                          <HiCheckCircle className="text-emerald-500 flex-shrink-0 text-lg mt-0.5" />
                          <span className="text-sm leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <a
                      href="https://dashboard.kabonshare.com/signup"
                      className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all text-sm ${
                        isPopular
                          ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-indigo-500/50'
                          : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {price && price.amount > 0 ? 'Get Started' : 'Start Free'}
                    </a>
                  </motion.div>
                )
              })}
            </motion.div>
          )}

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-24 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: 'What are credits?',
                  a: 'Credits are used to publish posts. Each post costs 1 credit regardless of media type (text, image, or video) and regardless of how many platforms you publish to simultaneously.'
                },
                {
                  q: 'What platforms are supported?',
                  a: 'Currently live: Instagram (Feed, Stories, Reels), Facebook Pages, Threads, TikTok (Videos & Photos), and YouTube (Videos & Shorts). Twitter/X and LinkedIn coming soon.'
                },
                {
                  q: 'How does storage work?',
                  a: 'Each plan includes storage quota: Free (5GB), Pro (20GB), Business (100GB). Upload media to your Asset Library and reuse across multiple posts. Thumbnails don\'t count towards your quota.'
                },
                {
                  q: 'Can I upgrade or downgrade my plan?',
                  a: 'Yes, you can change your plan at any time. Changes take effect immediately and we\'ll prorate the charges based on your billing cycle.'
                },
                {
                  q: 'What happens if I run out of credits?',
                  a: 'You can purchase additional credits at any time. Your price per credit is shown in your plan details. Purchased credits never expire, while subscription credits reset monthly.'
                },
                {
                  q: 'What are workspaces?',
                  a: 'Workspaces let you organize social accounts separately - perfect for agencies managing multiple clients or brands. Pro and Business plans support multiple workspaces.'
                },
                {
                  q: 'Is there a free plan?',
                  a: 'Yes! Our Free plan includes 100 monthly credits and 5GB storage. Perfect for testing and small-scale use. Upgrade anytime as you grow.'
                }
              ].map((faq, i) => (
                <details
                  key={i}
                  className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 overflow-hidden"
                >
                  <summary className="px-6 py-4 cursor-pointer text-white font-semibold hover:bg-white/5 transition-colors">
                    {faq.q}
                  </summary>
                  <div className="px-6 pb-4 text-slate-400 text-sm">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  )
}
