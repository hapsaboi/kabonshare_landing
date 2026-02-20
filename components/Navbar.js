'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { siteConfig } from '../config/siteConfig'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Features', href: '/#features' },
    { label: 'Platforms', href: '/#platforms' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Use Cases', href: '/case-studies' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <img src="/logo.png" alt={siteConfig.name} className="w-8 h-8 rounded-lg object-contain" />
            <span className={`font-bold text-lg tracking-tight transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              {siteConfig.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isScrolled 
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100' 
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={siteConfig.dashboard}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-600 hover:text-gray-900' 
                  : 'text-white/80 hover:text-white'
              }`}
            >
              Sign In
            </a>
            <a
              href={siteConfig.dashboard}
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-5 pt-2 animate-in slide-in-from-top">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-gray-100 space-y-2">
                <a
                  href={siteConfig.dashboard}
                  className="block text-center px-4 py-2.5 text-sm text-gray-600 hover:text-gray-900 font-medium rounded-lg"
                >
                  Sign In
                </a>
                <a
                  href={siteConfig.dashboard}
                  className="block text-center px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg"
                >
                  Get Started Free
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
