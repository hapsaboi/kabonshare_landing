import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  HiOutlineMail, HiOutlineLocationMarker, HiOutlineClock,
  HiOutlineBookOpen, HiOutlineLightningBolt, HiOutlinePhone,
} from 'react-icons/hi'
import { FaArrowRight } from 'react-icons/fa'
import { FiInstagram, FiYoutube } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'

const channels = [
  {
    icon: HiOutlineMail,
    title: 'Email Support',
    description: 'Bug reports, account questions, or anything technical. A real human replies — usually within a few hours.',
    action: `mailto:${siteConfig.contact.support}`,
    actionText: siteConfig.contact.support,
    color: '#8B5CF6',
  },
  {
    icon: HiOutlineBookOpen,
    title: 'Documentation',
    description: 'Full API reference, quick-start guides and integration tutorials — self-serve answers, 24/7.',
    action: siteConfig.api.docs,
    actionText: 'Browse the docs',
    color: '#3B82F6',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Partnerships & Enterprise',
    description: 'Custom integrations, white-label solutions and dedicated support for teams and agencies.',
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
    value: 'Mon – Fri · 9 AM – 6 PM WAT',
    sub: 'Email support available 24/7',
  },
]

const socials = [
  { icon: FiYoutube, href: siteConfig.social.youtube, label: 'YouTube' },
  { icon: FiInstagram, href: siteConfig.social.instagram, label: 'Instagram' },
  { icon: BsTwitterX, href: siteConfig.social.twitter, label: 'X (Twitter)' },
]

const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
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

      <div className="min-h-screen bg-page text-body relative overflow-hidden">
        {/* Ambient brand glow — a single deliberate light source up top */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] overflow-hidden">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[620px] rounded-full blur-[140px] opacity-25 bg-gradient-to-br from-primary via-violet-500 to-fuchsia-500" />
        </div>

        <Navbar />

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative px-6 lg:px-8 pt-36 pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              custom={0} variants={rise} initial="hidden" animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 backdrop-blur-sm px-4 py-1.5 mb-9"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-muted">We typically reply within a few hours</span>
            </motion.div>

            <motion.h1
              custom={1} variants={rise} initial="hidden" animate="visible"
              className="font-display text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-[-0.045em] leading-[0.92]"
            >
              Let&apos;s{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-fuchsia-400">talk.</span>
            </motion.h1>

            <motion.p
              custom={2} variants={rise} initial="hidden" animate="visible"
              className="mt-7 text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
            >
              Questions, feedback, or a partnership in mind? Pick a channel — a real person is on the other end.
            </motion.p>
          </div>
        </section>

        {/* ── Channels — one row of tappable cards ─────────────── */}
        <section className="relative px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto grid gap-4 sm:gap-5 md:grid-cols-3">
            {channels.map((ch, i) => (
              <motion.a
                key={ch.title}
                href={ch.action}
                target={ch.action.startsWith('http') ? '_blank' : undefined}
                rel={ch.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                custom={i} variants={rise} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
                className="group relative flex flex-col rounded-2xl border border-line bg-surface/40 p-7 overflow-hidden transition-colors duration-300 hover:border-line-strong"
              >
                {/* Washed brand-icon watermark */}
                <ch.icon
                  className="pointer-events-none absolute -right-5 -bottom-6 text-[9rem] opacity-[0.06] group-hover:opacity-[0.1] transition-opacity duration-500"
                  style={{ color: ch.color, transform: 'rotate(-12deg)' }}
                />
                {/* Accent wash on hover */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `radial-gradient(120% 90% at 50% 0%, ${ch.color}24, transparent 62%)` }}
                />
                <div
                  className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: `${ch.color}1f`, boxShadow: `inset 0 0 0 1px ${ch.color}33` }}
                >
                  <ch.icon className="text-2xl" style={{ color: ch.color }} />
                </div>

                <h3 className="relative font-display text-xl font-bold text-body tracking-[-0.01em]">{ch.title}</h3>
                <p className="relative text-muted text-sm mt-2 leading-relaxed">{ch.description}</p>

                <span
                  className="relative mt-auto pt-6 inline-flex items-center gap-2 text-sm font-semibold break-words"
                  style={{ color: ch.color }}
                >
                  {ch.actionText}
                  <FaArrowRight className="text-xs shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* ── Details + Socials ────────────────────────────────── */}
        <section className="relative px-6 lg:px-8 pb-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={rise} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
              className="rounded-2xl border border-line bg-surface/30 p-7 md:p-9"
            >
              <div className="grid sm:grid-cols-3 gap-8">
                {details.map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl border border-line bg-surface flex items-center justify-center">
                      <d.icon className={`${d.iconColor} text-lg`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-subtle mb-1.5">{d.label}</p>
                      {d.href ? (
                        <a href={d.href} className="text-sm font-medium text-body hover:text-primary transition-colors">{d.value}</a>
                      ) : (
                        <p className="text-sm font-medium text-body">{d.value}</p>
                      )}
                      {d.sub && <p className="text-xs text-muted mt-1">{d.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-7 border-t border-line flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium text-muted">Follow along</span>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      className="group w-11 h-11 rounded-xl border border-line bg-surface/40 flex items-center justify-center hover:border-line-strong transition-colors"
                    >
                      <s.icon className="text-lg text-muted group-hover:text-body transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA — the one deliberate gradient moment ─────────── */}
        <section className="relative px-6 lg:px-8 pb-28">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={rise} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
              className="relative overflow-hidden rounded-3xl px-8 py-12 md:px-14 md:py-16"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary" />
              <div
                className="absolute inset-0 opacity-[0.14]"
                style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '22px 22px' }}
              />
              <div className="absolute -right-16 -bottom-24 w-72 h-72 rounded-full bg-white/10 blur-3xl" />

              <div className="relative max-w-2xl">
                <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-[-0.035em] leading-[1.02] mb-4">
                  Ready to start publishing?
                </h2>
                <p className="text-white/85 text-base md:text-lg mb-9 max-w-lg">
                  Create a free account and push content to all nine networks in minutes.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`${siteConfig.dashboard}/signup`}
                    className="group inline-flex items-center gap-2 bg-white text-primary px-7 py-3.5 rounded-xl font-bold text-sm hover:-translate-y-0.5 transition-transform duration-300 shadow-xl shadow-black/10"
                  >
                    Get started free
                    <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a
                    href={siteConfig.api.docs}
                    className="inline-flex items-center gap-2 text-white px-7 py-3.5 rounded-xl font-semibold text-sm border border-white/30 hover:bg-white/10 transition-colors"
                  >
                    View docs
                  </a>
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
