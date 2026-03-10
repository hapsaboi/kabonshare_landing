'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import {
  HiOutlineArrowRight, HiOutlineVideoCamera, HiOutlineOfficeBuilding,
  HiOutlineShoppingCart, HiOutlineCode, HiOutlineCheck, HiOutlineClock,
  HiOutlineGlobeAlt, HiOutlineUserGroup, HiOutlineChartBar,
  HiOutlineLightningBolt, HiOutlinePhotograph, HiOutlineRefresh,
  HiOutlineTemplate, HiOutlineSparkles
} from 'react-icons/hi'
import { FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'
import { SiTiktok, SiThreads } from 'react-icons/si'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'

const caseStudies = [
  {
    id: 'creators',
    icon: HiOutlineVideoCamera,
    label: 'Creators',
    title: 'Post once, reach every platform',
    subtitle: 'For content creators, influencers, and media networks',
    gradient: 'from-violet-500 to-purple-600',
    bgAccent: 'violet',
    before: [
      'Manually uploading the same video to 5 platforms',
      'Formatting captions differently for each one',
      'Missing optimal posting times across time zones',
      'Spending 3+ hours a day just on distribution',
    ],
    after: [
      'Upload once, publish to all platforms simultaneously',
      'Auto-format captions, hashtags, and media per platform',
      'Smart scheduling hits peak engagement times',
      'Distribution takes minutes, not hours',
    ],
    stats: [
      { value: '5+', label: 'Platforms at once' },
      { value: '80%', label: 'Less time uploading' },
      { value: '3x', label: 'More reach' },
    ],
    workflow: [
      { step: '1', text: 'Upload your Reel, Short, or TikTok', icon: HiOutlinePhotograph },
      { step: '2', text: 'Select platforms and schedule time', icon: HiOutlineClock },
      { step: '3', text: 'KabonShare publishes everywhere', icon: HiOutlineGlobeAlt },
    ],
    testimonial: {
      text: 'I used to spend half my day re-uploading content. Now I batch a week of posts in 30 minutes.',
      name: 'Daniella K.',
      role: 'Lifestyle Creator, 120K followers',
    },
  },
  {
    id: 'agencies',
    icon: HiOutlineOfficeBuilding,
    label: 'Agencies',
    title: 'Every client, one dashboard',
    subtitle: 'For digital marketing and social media agencies',
    gradient: 'from-blue-500 to-indigo-600',
    bgAccent: 'blue',
    before: [
      'Dozens of separate platform logins per client',
      'No centralized view of what went live and when',
      'Team members stepping on each other with no roles',
      'Billing hours lost to manual publishing busywork',
    ],
    after: [
      'Isolated workspaces per client, one login',
      'Unified content calendar across all accounts',
      'Role-based access with approval workflows',
      'Automated publishing frees up billable hours',
    ],
    stats: [
      { value: '85%', label: 'Time saved' },
      { value: '50+', label: 'Accounts managed' },
      { value: '10x', label: 'Faster campaigns' },
    ],
    workflow: [
      { step: '1', text: 'Create a workspace for each client', icon: HiOutlineUserGroup },
      { step: '2', text: 'Connect their social accounts', icon: HiOutlineGlobeAlt },
      { step: '3', text: 'Schedule and approve from one place', icon: HiOutlineCheck },
    ],
    testimonial: {
      text: 'We manage 40+ client accounts through KabonShare. The workspace isolation is a game-changer for agencies.',
      name: 'Lisa M.',
      role: 'Agency Owner, CreativeEdge Media',
    },
  },
  {
    id: 'ecommerce',
    icon: HiOutlineShoppingCart,
    label: 'E-commerce',
    title: 'Turn products into posts automatically',
    subtitle: 'For online stores, DTC brands, and marketplaces',
    gradient: 'from-emerald-500 to-green-600',
    bgAccent: 'emerald',
    before: [
      'Manually creating posts for every product launch',
      'Inconsistent timing across platforms for drops',
      'No way to track which products were promoted where',
      'Brand visuals look different on every channel',
    ],
    after: [
      'Auto-generate posts from product data',
      'Coordinated launches across all channels at once',
      'Track performance per product per platform',
      'Consistent brand assets with the media library',
    ],
    stats: [
      { value: '3x', label: 'Product launches' },
      { value: '100%', label: 'Brand consistency' },
      { value: '45%', label: 'Higher conversions' },
    ],
    workflow: [
      { step: '1', text: 'Connect your product catalog via API', icon: HiOutlineRefresh },
      { step: '2', text: 'Auto-create posts with product media', icon: HiOutlinePhotograph },
      { step: '3', text: 'Schedule launches for peak times', icon: HiOutlineClock },
    ],
    testimonial: {
      text: 'Every new product drop now reaches all 5 platforms within seconds. Our engagement tripled in the first month.',
      name: 'James O.',
      role: 'Head of Marketing, FreshGoods',
    },
  },
  {
    id: 'saas',
    icon: HiOutlineCode,
    label: 'SaaS & Apps',
    title: 'Ship social features in days, not months',
    subtitle: 'For software products and developer teams',
    gradient: 'from-amber-500 to-orange-600',
    bgAccent: 'amber',
    before: [
      'Months of engineering time building platform integrations',
      'Constant maintenance as APIs change',
      'OAuth token refresh bugs causing silent failures',
      'Core product roadmap delayed by social features',
    ],
    after: [
      'One REST API for all platforms',
      'We handle API changes and maintenance',
      'Automatic token refresh and retry logic',
      'Your engineers stay focused on core product',
    ],
    stats: [
      { value: '< 1hr', label: 'To first post' },
      { value: '3+ mo', label: 'Dev time saved' },
      { value: '99.9%', label: 'Uptime SLA' },
    ],
    workflow: [
      { step: '1', text: 'Get your API key from the dashboard', icon: HiOutlineLightningBolt },
      { step: '2', text: 'Make a POST request with media', icon: HiOutlineCode },
      { step: '3', text: 'We publish and send a webhook', icon: HiOutlineRefresh },
    ],
    testimonial: {
      text: 'We launched social publishing in our app in 2 days. Would have taken our team 3+ months to build from scratch.',
      name: 'Sarah J.',
      role: 'CTO, SaaS Company',
    },
  },
]

const platformIcons = [
  { icon: FiInstagram, name: 'Instagram', color: 'text-pink-400' },
  { icon: FiFacebook, name: 'Facebook', color: 'text-blue-400' },
  { icon: SiTiktok, name: 'TikTok', color: 'text-white' },
  { icon: FiYoutube, name: 'YouTube', color: 'text-red-400' },
  { icon: SiThreads, name: 'Threads', color: 'text-white' },
]

export default function CaseStudies() {
  const [expanded, setExpanded] = useState(null)

  return (
    <>
      <Head>
        <title>Use Cases - KabonShare</title>
        <meta name="description" content="Explore how KabonShare transforms social media workflows for creators, agencies, e-commerce brands, and SaaS products." />
        <link rel="canonical" href="https://kabonshare.com/case-studies/" />
        <meta property="og:title" content="Use Cases - KabonShare" />
        <meta property="og:description" content="Explore how KabonShare transforms social media workflows for creators, agencies, e-commerce brands, and SaaS products." />
        <meta property="og:url" content="https://kabonshare.com/case-studies/" />
      </Head>

      <div className="min-h-screen bg-slate-950">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-3xl" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
              <span className="text-xs font-medium text-violet-300 uppercase tracking-wide">Use Cases</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-5 tracking-tight"
            >
              One platform,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                every workflow
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto mb-10"
            >
              See how creators, agencies, e-commerce brands, and SaaS products use KabonShare to publish smarter.
            </motion.p>

            {/* Platform icons row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center gap-4"
            >
              {platformIcons.map((p, i) => (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center"
                  title={p.name}
                >
                  <p.icon className={`text-base ${p.color}`} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Case Studies - Full sections */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-20">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5 }}
              >
                {/* Section header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-10 h-10 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center`}>
                    <study.icon className="text-lg text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                      {study.title}
                    </h2>
                    <p className="text-sm text-slate-500">{study.subtitle}</p>
                  </div>
                </div>

                {/* Before / After */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {/* Before */}
                  <div className="bg-slate-900/60 rounded-2xl border border-white/5 p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center">
                        <span className="text-red-400 text-xs font-bold">&times;</span>
                      </div>
                      <span className="text-xs font-semibold text-red-400/80 uppercase tracking-wider">Without KabonShare</span>
                    </div>
                    <div className="space-y-3">
                      {study.before.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05, duration: 0.3 }}
                          className="flex items-start gap-2.5 text-sm text-slate-400"
                        >
                          <span className="text-slate-600 mt-0.5">&mdash;</span>
                          {item}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* After */}
                  <div className="bg-slate-900/60 rounded-2xl border border-white/5 p-6 relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-[0.03]`} />
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center">
                          <HiOutlineCheck className="text-green-400 text-[10px]" />
                        </div>
                        <span className="text-xs font-semibold text-green-400/80 uppercase tracking-wider">With KabonShare</span>
                      </div>
                      <div className="space-y-3">
                        {study.after.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                            className="flex items-start gap-2.5 text-sm text-slate-300"
                          >
                            <HiOutlineCheck className="text-green-400 text-xs mt-1 flex-shrink-0" />
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats + Workflow row */}
                <div className="grid md:grid-cols-5 gap-4 mb-8">
                  {/* Stats */}
                  <div className="md:col-span-2 flex gap-3">
                    {study.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-slate-900/60 rounded-xl border border-white/5 p-4 text-center"
                      >
                        <div className={`text-xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                          {stat.value}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Workflow */}
                  <div className="md:col-span-3 bg-slate-900/60 rounded-xl border border-white/5 p-4">
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-3">How it works</div>
                    <div className="flex items-center gap-2">
                      {study.workflow.map((w, i) => (
                        <div key={i} className="flex items-center gap-2 flex-1">
                          <div className="flex items-center gap-2 flex-1">
                            <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                              <w.icon className="text-xs text-slate-300" />
                            </div>
                            <span className="text-xs text-slate-400 leading-tight">{w.text}</span>
                          </div>
                          {i < study.workflow.length - 1 && (
                            <HiOutlineArrowRight className="text-slate-700 text-xs flex-shrink-0 mx-1" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-slate-900/40 rounded-xl border border-white/5 px-6 py-5">
                  <p className="text-sm text-slate-300 italic leading-relaxed mb-3">
                    {`"${study.testimonial.text}"`}
                  </p>
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${study.gradient} flex items-center justify-center text-white text-xs font-bold`}>
                      {study.testimonial.name[0]}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">{study.testimonial.name}</div>
                      <div className="text-[11px] text-slate-500">{study.testimonial.role}</div>
                    </div>
                  </div>
                </div>

                {/* Divider between sections (except last) */}
                {index < caseStudies.length - 1 && (
                  <div className="mt-20 border-t border-white/[0.04]" />
                )}
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-10 md:p-14 text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                  Ready to simplify your workflow?
                </h2>
                <p className="text-lg text-white/70 mb-8 max-w-lg mx-auto">
                  Start publishing to every platform from one place. Free tier available.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={siteConfig.dashboard + '/signup'}
                    className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-7 py-3.5 rounded-xl font-semibold hover:bg-gray-50 transition-all"
                  >
                    Get Started Free
                    <HiOutlineArrowRight className="text-lg" />
                  </a>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-7 py-3.5 rounded-xl font-semibold border border-white/20 hover:bg-white/15 transition-all"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
