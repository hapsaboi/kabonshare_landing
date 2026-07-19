'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiChevronDown, FiArrowRight } from 'react-icons/fi'
import { siteConfig } from '../config/siteConfig'
import { FEATURES } from '../config/features'
import { USE_CASES } from '../config/useCases'
import ThemeToggle from './ThemeToggle'

// Derived from the shared features config so the dropdown and /features stay in sync.
const featureMenu = FEATURES.map((f) => ({
  title: f.label,
  desc: f.menuDesc,
  icon: f.icon,
  color: f.color,
  badge: f.badge,
  href: `/features?tab=${f.id}`,
}))

// Same idea for Use Cases — kept in sync with /case-studies.
const useCaseMenu = USE_CASES.map((u) => ({
  title: u.label,
  desc: u.menuDesc,
  icon: u.icon,
  color: u.color,
  href: `/case-studies?tab=${u.id}`,
}))

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [featuresExpanded, setFeaturesExpanded] = useState(false)
  const [useCasesExpanded, setUseCasesExpanded] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = useCallback(() => { setMobileOpen(false); setFeaturesExpanded(false); setUseCasesExpanded(false) }, [])

  const links = [
    { label: 'Features',     href: '/features' },
    { label: 'Platforms',    href: '/#platforms' },
    { label: 'Pricing',      href: '/pricing' },
    { label: 'Use Cases',    href: '/case-studies' },
    { label: 'Blog',         href: '/blog' },
    { label: 'Get Our Apps', href: '/get-our-apps' },
    { label: 'Contact',      href: '/contact' },
  ]

  return (
    <>
      {/* Fixed top bar — transparent at top, frosts + border on scroll */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[var(--nav-scrolled)] border-b border-line shadow-sm backdrop-blur-md'
          : 'bg-transparent border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* Left group: logo + links (Buffer-style left alignment) */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-2.5 shrink-0">
                <Image src="/logo.png" alt={siteConfig.name} width={28} height={28} className="rounded-lg object-contain" />
                <span className="font-display font-extrabold text-lg tracking-[-0.02em] text-body">
                  {siteConfig.name}
                </span>
              </Link>

              {/* Desktop nav */}
              <div className="hidden lg:flex items-center gap-0.5">

                {/* Features mega-menu */}
                <div className="relative group/feat">
                  <Link href="/features"
                    className="inline-flex items-center gap-1 px-3 py-2 text-[15px] font-display font-semibold text-muted group-hover/feat:text-body rounded-lg transition-colors">
                    Features
                    <FiChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/feat:rotate-180" />
                  </Link>

                  {/* Panel (pt-3 = invisible hover bridge to the trigger) */}
                  <div className="invisible opacity-0 translate-y-1 group-hover/feat:visible group-hover/feat:opacity-100 group-hover/feat:translate-y-0 absolute left-0 top-full pt-3 transition-all duration-200">
                    <div className="w-[600px] rounded-2xl bg-raised border border-line shadow-2xl p-3">
                      <div className="grid grid-cols-2 gap-1">
                        {featureMenu.map((f) => (
                          <Link key={f.href} href={f.href}
                            className="flex gap-3 p-3 rounded-xl hover:bg-inset transition-colors">
                            <span className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                              style={{ background: `color-mix(in srgb, ${f.color} 13%, transparent)` }}>
                              <f.icon style={{ color: f.color, fontSize: 18 }} />
                            </span>
                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-display font-bold text-body text-[15px] leading-none">{f.title}</span>
                                {f.badge && (
                                  <span className="text-[10px] font-bold leading-none px-1.5 py-1 rounded bg-emerald-500/15 text-emerald-500">{f.badge}</span>
                                )}
                              </div>
                              <p className="text-[13px] text-muted mt-1.5 leading-snug">{f.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link href="/features"
                        className="mt-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-primary hover:bg-inset transition-colors">
                        Explore all features
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Use Cases mega-menu */}
                <div className="relative group/uc">
                  <Link href="/case-studies"
                    className="inline-flex items-center gap-1 px-3 py-2 text-[15px] font-display font-semibold text-muted group-hover/uc:text-body rounded-lg transition-colors">
                    Use Cases
                    <FiChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/uc:rotate-180" />
                  </Link>

                  <div className="invisible opacity-0 translate-y-1 group-hover/uc:visible group-hover/uc:opacity-100 group-hover/uc:translate-y-0 absolute left-0 top-full pt-3 transition-all duration-200">
                    <div className="w-[560px] rounded-2xl bg-raised border border-line shadow-2xl p-3">
                      <div className="grid grid-cols-2 gap-1">
                        {useCaseMenu.map((u) => (
                          <Link key={u.href} href={u.href}
                            className="flex gap-3 p-3 rounded-xl hover:bg-inset transition-colors">
                            <span className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                              style={{ background: `color-mix(in srgb, ${u.color} 13%, transparent)` }}>
                              <u.icon style={{ color: u.color, fontSize: 18 }} />
                            </span>
                            <div className="min-w-0">
                              <span className="font-display font-bold text-body text-[15px] leading-none">{u.title}</span>
                              <p className="text-[13px] text-muted mt-1.5 leading-snug">{u.desc}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <Link href="/case-studies"
                        className="mt-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-semibold text-primary hover:bg-inset transition-colors">
                        See all use cases
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Remaining links */}
                {links.filter((l) => l.label !== 'Features' && l.label !== 'Use Cases').map((l) => (
                  <Link key={l.href} href={l.href}
                    className="px-3 py-2 text-[15px] font-display font-semibold text-muted hover:text-body rounded-lg transition-colors duration-150">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <a href={siteConfig.dashboard}
                className="px-5 py-2 rounded-full border border-line-strong text-body text-sm font-semibold hover:bg-inset transition-colors duration-150">
                Log in
              </a>
              <a href={`${siteConfig.dashboard}/signup`}
                className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20">
                Get started
              </a>
            </div>

            {/* Mobile actions */}
            <div className="lg:hidden flex items-center gap-1">
              <ThemeToggle />
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="p-2 -mr-1 rounded-xl text-muted hover:text-body transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`fixed inset-x-0 top-0 z-40 lg:hidden pt-[72px] px-4 transition-all duration-300 ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="bg-surface border border-line rounded-2xl shadow-2xl overflow-y-auto max-h-[calc(100vh-88px)]">
          <div className="px-3 py-3 space-y-0.5">
            {links.map((l) => (
              l.label === 'Features' ? (
                <div key="features">
                  <button
                    onClick={() => setFeaturesExpanded(v => !v)}
                    aria-expanded={featuresExpanded}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-muted hover:text-body hover:bg-inset rounded-xl transition-colors"
                  >
                    Features
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${featuresExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Accordion body */}
                  <div className={`overflow-hidden transition-all duration-300 ${featuresExpanded ? 'max-h-[760px]' : 'max-h-0'}`}>
                    <div className="pl-2.5 pr-1 py-1 space-y-0.5">
                      {featureMenu.map((f) => (
                        <Link key={f.href} href={f.href} onClick={close}
                          className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-inset transition-colors">
                          <span className="flex items-center justify-center w-8 h-8 rounded-md shrink-0 mt-0.5"
                            style={{ background: `color-mix(in srgb, ${f.color} 13%, transparent)` }}>
                            <f.icon style={{ color: f.color, fontSize: 16 }} />
                          </span>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-body">{f.title}</span>
                              {f.badge && (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-500">{f.badge}</span>
                              )}
                            </div>
                            <p className="text-[12px] text-muted mt-0.5 leading-snug">{f.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : l.label === 'Use Cases' ? (
                <div key="use-cases">
                  <button
                    onClick={() => setUseCasesExpanded(v => !v)}
                    aria-expanded={useCasesExpanded}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium text-muted hover:text-body hover:bg-inset rounded-xl transition-colors"
                  >
                    Use Cases
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${useCasesExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  {/* Accordion body */}
                  <div className={`overflow-hidden transition-all duration-300 ${useCasesExpanded ? 'max-h-[760px]' : 'max-h-0'}`}>
                    <div className="pl-2.5 pr-1 py-1 space-y-0.5">
                      {useCaseMenu.map((u) => (
                        <Link key={u.href} href={u.href} onClick={close}
                          className="flex items-start gap-3 px-3 py-2 rounded-lg hover:bg-inset transition-colors">
                          <span className="flex items-center justify-center w-8 h-8 rounded-md shrink-0 mt-0.5"
                            style={{ background: `color-mix(in srgb, ${u.color} 13%, transparent)` }}>
                            <u.icon style={{ color: u.color, fontSize: 16 }} />
                          </span>
                          <div className="min-w-0">
                            <span className="text-sm font-semibold text-body">{u.title}</span>
                            <p className="text-[12px] text-muted mt-0.5 leading-snug">{u.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={l.href} href={l.href} onClick={close}
                  className="flex items-center px-4 py-2.5 text-sm font-medium text-muted hover:text-body hover:bg-inset rounded-xl transition-colors">
                  {l.label}
                </Link>
              )
            ))}
          </div>
          <div className="px-3 pb-3 pt-2 border-t border-line flex flex-col gap-2">
            <a href={siteConfig.dashboard}
              className="block text-center py-2.5 text-sm font-medium text-muted hover:text-body rounded-xl transition-colors">
              Log in
            </a>
            <a href={`${siteConfig.dashboard}/signup`}
              className="block text-center py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-600 rounded-xl">
              Get started
            </a>
          </div>
        </div>
      </div>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 lg:hidden" onClick={close} />
      )}
    </>
  )
}
