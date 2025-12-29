'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

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
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${
      isScrolled 
        ? 'bg-white shadow-sm' 
        : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-lg">K</span>
            </div>
            <span className="font-semibold text-gray-900">
              Kabon Share
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://dashboard.kabonshare.com"
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 font-medium"
            >
              Sign In
            </a>
            <a
              href="https://dashboard.kabonshare.com"
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary/90"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-900"
          >
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 border-t">
            <div className="py-2 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 px-3 space-y-2">
              <a
                href="https://dashboard.kabonshare.com"
                className="block text-center px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
              >
                Sign In
              </a>
              <a
                href="https://dashboard.kabonshare.com"
                className="block text-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-md"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
