'use client'
import Image from 'next/image'
import { FiInstagram, FiYoutube } from 'react-icons/fi'
import { BsTwitterX } from 'react-icons/bs'
import { siteConfig } from '../config/siteConfig'
import { FEATURES } from '../config/features'

const footerLinks = {
  // Feature tabs, kept in sync with the shared features config.
  features: FEATURES.map((f) => ({ label: f.label, href: `/features?tab=${f.id}` })),
  product: [
    { label: 'Platforms', href: '/#platforms' },
    { label: 'Use Cases', href: '/#use-cases' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Get Our Apps', href: '/get-our-apps' }
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'API Documentation', href: siteConfig.api.docs },
    { label: 'API Reference', href: siteConfig.api.docs + '/api' },
    { label: 'Quick Start Guide', href: siteConfig.api.docs + '/quickstart' }
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Refund Policy', href: '/refund-policy' }
  ]
}

const socialLinks = [
  { icon: FiYoutube, href: siteConfig.social.youtube, label: 'YouTube', color: 'hover:text-red-400' },
  { icon: FiInstagram, href: siteConfig.social.instagram, label: 'Instagram', color: 'hover:text-pink-400' },
  { icon: BsTwitterX, href: siteConfig.social.twitter, label: 'X (Twitter)', color: 'hover:text-body' }
]

export default function Footer() {
  return (
    <footer className="bg-page text-muted border-t border-line">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-6 gap-y-10 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt={siteConfig.name} width={36} height={36} className="w-9 h-9" />
              <span className="text-xl font-bold text-body">{siteConfig.name}</span>
            </div>
            <p className="text-muted mb-6 leading-relaxed text-sm max-w-sm">
              {siteConfig.description.slice(0, 120)}...
            </p>
            
            {/* Contact */}
            <div className="space-y-1.5 mb-6 text-sm">
              <p>
                <a href={`mailto:${siteConfig.contact.info}`} className="hover:text-body transition-colors">
                  {siteConfig.contact.info}
                </a>
              </p>

            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 bg-surface rounded-lg flex items-center justify-center transition-all duration-200 ${social.color} hover:bg-surface`}
                  aria-label={social.label}
                >
                  <social.icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-body font-semibold mb-4 text-sm">Features</h4>
            <ul className="space-y-2.5">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-body transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-body font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-body transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-body font-semibold mb-4 text-sm">Resources</h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-body transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-body font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-body transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-line pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-subtle text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-muted text-xs">
              Kabon Share Limited &middot; RC 9478291
            </p>
            <p className="text-muted text-xs">
              {siteConfig.name} is not affiliated with Instagram, TikTok, YouTube, Facebook, X, or Threads.
              All trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
