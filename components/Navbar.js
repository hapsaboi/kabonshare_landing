'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '../config/siteConfig'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = useCallback(() => setMobileOpen(false), [])

  const links = [
    { label: 'Features',     href: '/#features' },
    { label: 'Platforms',    href: '/#platforms' },
    { label: 'Pricing',      href: '/pricing' },
    { label: 'Use Cases',    href: '/case-studies' },
    { label: 'Blog',         href: '/blog' },
    { label: 'Get Our Apps', href: '/get-our-apps' },
    { label: 'Contact',      href: '/contact' },
  ]

  return (
    <>
      {/* Floating pill container */}
      <div className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-4">
        <nav className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 border border-slate-800 shadow-xl shadow-black/30 backdrop-blur-md'
            : 'bg-slate-950/30 border border-slate-800/0 backdrop-blur-sm'
        }`}>
          <div className="flex items-center justify-between h-14 px-5">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image src="/logo.png" alt={siteConfig.name} width={28} height={28} className="rounded-lg object-contain" />
              <span className="font-bold text-base tracking-tight text-white">
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {links.map((l) => (
                <a key={l.href} href={l.href}
                  className="px-3.5 py-2 text-[13px] font-medium text-slate-400 hover:text-white rounded-xl transition-colors duration-150">
                  {l.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={siteConfig.dashboard}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-150">
                Log in
              </a>
              <a href={`${siteConfig.dashboard}/signup`}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/20">
                Get started
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 -mr-1 rounded-xl text-slate-400 hover:text-white transition-colors"
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
        </nav>
      </div>

      {/* Mobile drawer */}
      <div className={`fixed inset-x-0 top-0 z-40 lg:hidden pt-[76px] px-4 transition-all duration-300 ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
          <div className="px-3 py-3 space-y-0.5">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={close}
                className="flex items-center px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <div className="px-3 pb-3 pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a href={siteConfig.dashboard}
              className="block text-center py-2.5 text-sm font-medium text-slate-400 hover:text-white rounded-xl transition-colors">
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
