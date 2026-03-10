import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock,
  HiOutlineBookOpen, HiOutlineLightningBolt, HiOutlinePhone,
} from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'
import { SiTiktok } from 'react-icons/si'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'

const channels = [
  {
    icon: HiOutlineMail,
    title: 'Email Support',
    description: 'For bug reports, account questions, or anything technical. We aim to respond within a few hours.',
    action: `mailto:${siteConfig.contact.support}`,
    actionText: siteConfig.contact.support,
    color: '#8B5CF6',
  },
  {
    icon: HiOutlineBookOpen,
    title: 'Documentation',
    description: 'Full API reference, quick-start guides, and integration tutorials — self-serve answers 24/7.',
    action: siteConfig.api.docs,
    actionText: 'Browse Docs',
    color: '#3B82F6',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Partnerships & Enterprise',
    description: 'Custom integrations, white-label solutions, and dedicated support for teams and agencies.',
    action: `mailto:${siteConfig.contact.info}`,
    actionText: siteConfig.contact.info,
    color: '#F59E0B',
  },
]

const details = [
  {
    icon: HiOutlineLocationMarker,
    iconColor: 'text-emerald-400',
    label: 'Office',
    value: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    sub: `${siteConfig.address.city}, ${siteConfig.address.country}`,
  },
  {
    icon: HiOutlinePhone,
    iconColor: 'text-blue-400',
    label: 'Phone',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, '')}`,
  },
  {
    icon: HiOutlineClock,
    iconColor: 'text-amber-400',
    label: 'Hours',
    value: 'Mon – Fri: 9 AM – 6 PM WAT',
    sub: 'Email support available 24/7',
  },
]

const socials = [
  { icon: BsTwitterX, href: siteConfig.social.twitter, label: 'X (Twitter)' },
  { icon: FiInstagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: SiTiktok, href: siteConfig.social.tiktok, label: 'TikTok' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Contact() {
  return (
    <>
      <Head>
        <title>{`Contact Us - ${siteConfig.name}`}</title>
        <meta name="description" content={`Get in touch with ${siteConfig.name}. We're here to help with any questions about our social media publishing platform.`} />
        <link rel="canonical" href="https://kabonshare.com/contact/" />
        <meta property="og:title" content={`Contact Us - ${siteConfig.name}`} />
        <meta property="og:description" content={`Get in touch with ${siteConfig.name}. We're here to help.`} />
        <meta property="og:url" content="https://kabonshare.com/contact/" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background blobs — span entire page */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: [0, 150, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-violet-600/30 to-fuchsia-600/30 rounded-full filter blur-[120px]"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 120, 0], scale: [1, 1.3, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/30 to-cyan-600/30 rounded-full filter blur-[120px]"
          />
        </div>

        {/* Grid pattern — span entire page */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        <Navbar />

        {/* ── Hero ────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-8"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/80 text-sm font-medium">We typically reply within a few hours</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
              >
                <span className="inline-block">Let&apos;s</span>{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-primary via-violet-400 to-secondary opacity-40" />
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-400 to-fuchsia-400">
                    Talk.
                  </span>
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-xl"
              >
                Have a question, need support, or want to explore a partnership? Pick the channel that works for you — we&apos;re always happy to help.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Contact Channels ────────────────────────────────── */}
        <section className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid md:grid-cols-3 gap-6"
            >
              {channels.map((ch, i) => (
                <motion.a
                  key={i}
                  href={ch.action}
                  target={ch.action.startsWith('http') ? '_blank' : undefined}
                  rel={ch.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-7 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at top right, ${ch.color}, transparent 70%)` }}
                  />

                  <div className="relative z-10">
                    <div className="mb-5 inline-flex p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                      <ch.icon className="text-2xl" style={{ color: ch.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                      {ch.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {ch.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 group-hover:gap-2.5 transition-all">
                      {ch.actionText} <span>→</span>
                    </span>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Details + Socials ────────────────────────────────── */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-6"
            >
              {/* Left — Details */}
              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 p-8 md:p-10">
                <h2 className="text-xl font-bold text-white mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  {details.map((d, i) => {
                    const inner = (
                      <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                          <d.icon className={`${d.iconColor} text-lg`} />
                        </div>
                        <div>
                          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-1">{d.label}</p>
                          <p className="text-sm text-white font-medium">{d.value}</p>
                          {d.sub && <p className="text-xs text-slate-400 mt-0.5">{d.sub}</p>}
                        </div>
                      </div>
                    )
                    return d.href ? (
                      <a key={i} href={d.href} className="block hover:opacity-80 transition-opacity">{inner}</a>
                    ) : (
                      <div key={i}>{inner}</div>
                    )
                  })}
                </div>
              </div>

              {/* Right — Socials + Quick Links */}
              <div className="space-y-6">
                {/* Social cards */}
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-white/5 p-8 md:p-10">
                  <h2 className="text-xl font-bold text-white mb-6">Follow Us</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {socials.map((s, i) => (
                      <motion.a
                        key={i}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-2xl p-6 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col items-center gap-3 overflow-hidden"
                        style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.06)' }}
                      >
                        <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <s.icon className="text-2xl text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                        <span className="text-xs font-medium text-slate-400 group-hover:text-white/80 transition-colors">{s.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* CTA card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90" />
                  <div className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-3xl" />

                  <div className="relative p-8 md:p-10">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Ready to Start Publishing?
                    </h3>
                    <p className="text-white/70 text-sm mb-6 max-w-sm">
                      Create a free account and start pushing content to all your platforms in minutes.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={siteConfig.dashboard}
                        className="group inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                      >
                        Get Started Free
                        <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
                      </a>
                      <a
                        href={siteConfig.api.docs}
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white px-6 py-3 rounded-xl font-medium text-sm border border-white/20 hover:border-white/40 transition-all duration-300"
                      >
                        View Docs
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
