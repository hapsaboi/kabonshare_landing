'use client'
import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
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
    { label: 'Features',  href: '/#features'   },
    { label: 'Platforms', href: '/#platforms'  },
    { label: 'Pricing',   href: '/pricing'      },
    { label: 'Use Cases', href: '/case-studies' },
    { label: 'Contact',   href: '/contact'      },
  ]

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px) saturate(1.8)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px) saturate(1.8)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.05)' : 'none',
          transition: 'background .3s ease, border-color .3s ease, box-shadow .3s ease',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <img src="/logo.png" alt={siteConfig.name} className="w-8 h-8 rounded-xl object-contain" />
              <span
                className="font-bold text-[1.05rem] tracking-tight transition-colors duration-300"
                style={{ color: scrolled ? '#0f172a' : '#ffffff' }}
              >
                {siteConfig.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-0.5">
              {links.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
                  style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.75)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = scrolled ? '#111827' : '#ffffff'
                    e.currentTarget.style.background = scrolled ? '#f3f4f6' : 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = scrolled ? '#374151' : 'rgba(255,255,255,0.75)'
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={siteConfig.dashboard}
                className="text-sm font-medium transition-colors duration-200"
                style={{ color: scrolled ? '#374151' : 'rgba(255,255,255,0.8)' }}
                onMouseEnter={e => { e.currentTarget.style.color = scrolled ? '#111827' : '#ffffff' }}
                onMouseLeave={e => { e.currentTarget.style.color = scrolled ? '#374151' : 'rgba(255,255,255,0.8)' }}
              >
                Sign In
              </a>
              <a
                href={siteConfig.dashboard}
                className="px-5 py-2.5 text-sm font-semibold text-white rounded-lg transition-all duration-200"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 1px 6px rgba(102,126,234,0.35)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(102,126,234,0.45)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = '0 1px 6px rgba(102,126,234,0.35)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Get Started Free
              </a>
            </div>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 -mr-1 rounded-lg transition-colors duration-200"
              style={{ color: scrolled ? '#111827' : '#ffffff' }}
              aria-label="Menu"
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className="md:hidden overflow-hidden"
          style={{
            maxHeight: mobileOpen ? '480px' : '0',
            transition: 'max-height .35s cubic-bezier(.4,0,.2,1)',
            background: 'rgba(255,255,255,0.97)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderTop: mobileOpen ? '1px solid rgba(0,0,0,0.06)' : '1px solid transparent',
          }}
        >
          <div className="max-w-6xl mx-auto px-5 sm:px-8 py-4 space-y-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="flex items-center px-3 py-3 text-[15px] font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 pb-1 flex flex-col gap-2.5 border-t border-gray-100 mt-2">
              <a
                href={siteConfig.dashboard}
                className="block text-center py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 border border-gray-200 hover:border-gray-300 rounded-xl transition-colors"
              >
                Sign In
              </a>
              <a
                href={siteConfig.dashboard}
                className="block text-center py-3 text-sm font-semibold text-white rounded-xl"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              >
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={close}
        />
      )}
    </>
  )
}