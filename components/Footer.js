'use client'
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord, FaHeart } from 'react-icons/fa'
import { siteConfig } from '../config/siteConfig'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Documentation', href: siteConfig.api.docs },
    { label: 'Changelog', href: '/changelog' }
  ],
  resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'API Guides', href: siteConfig.api.docs + '/guides' },
    { label: 'Video Tutorials', href: '/tutorials' },
    { label: 'Community Forum', href: 'https://community.media-share.io' }
  ],
  legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' }
  ]
}

const socialLinks = [
  { icon: FaTwitter, href: siteConfig.social.twitter, label: '@kabonshare', color: 'hover:text-blue-400' },
  { icon: FaLinkedin, href: siteConfig.social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-600' },
  { icon: FaGithub, href: siteConfig.social.github, label: 'GitHub', color: 'hover:text-gray-600' },
  { icon: FaDiscord, href: siteConfig.social.discord, label: 'Discord', color: 'hover:text-indigo-500' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Media Share API</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              One API to rule them all social networks. Publish to 7+ platforms with a single call.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-white font-bold mb-2">Stay Updated</h4>
            <p className="text-gray-400 mb-4 text-sm">
              Get the latest updates on new features and platform integrations
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Media Share API. All rights reserved.
            </p>

            {/* Built with love */}
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Built with <FaHeart className="text-red-500" /> for developers worldwide
            </p>

            {/* API Base URL */}
            <div className="text-sm">
              <span className="text-gray-500">API: </span>
              <code className="text-primary bg-gray-800 px-2 py-1 rounded">
                https://api.kabonshare.com
              </code>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-xs">
            Media Share API is not affiliated with Instagram, TikTok, YouTube, Facebook, Twitter/X, LinkedIn, or Threads.
            All trademarks are property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  )
}
