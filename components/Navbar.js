'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '../config/siteConfig'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = useCallback(() => setMobileOpen(false), [])

  const links = [
    { label: 'Features',  href: '/#features' },
    { label: 'Platforms', href: '/#platforms' },
    { label: 'Pricing',   href: '/pricing' },
    { label: 'Use Cases', href: '/case-studies' },
    { label: 'Contact',   href: '/contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white border-b border-gray-200 shadow-sm'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image src="/logo.png" alt={siteConfig.name} width={32} height={32} className="rounded-lg object-contain" />
              <span className={`font-bold text-lg tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    scrolled
                      ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={siteConfig.dashboard}
                className={`text-sm font-medium transition-colors duration-200 ${
                  scrolled
                    ? 'text-gray-600 hover:text-gray-900'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                Log in
              </a>
              <a
                href={siteConfig.dashboard}
                className={`px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  scrolled
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                Get started for free
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className={`md:hidden p-2 -mr-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
            mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="block px-3 py-2.5 text-[15px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-gray-100 space-y-2">
              <a
                href={siteConfig.dashboard}
                className="block text-center py-2.5 text-sm font-medium text-gray-700 hover:text-gray-900 rounded-lg transition-colors"
              >
                Log in
              </a>
              <a
                href={siteConfig.dashboard}
                className="block text-center py-2.5 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-lg transition-colors"
              >
                Get started for free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={close} />
      )}
    </>
  )
}