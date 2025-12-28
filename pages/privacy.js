'use client'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiShieldCheck, HiLockClosed, HiEye, HiDatabase, HiUserGroup, HiGlobe } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'

export default function Privacy() {
  const sections = [
    {
      icon: HiDatabase,
      title: '1. Information We Collect',
      content: [
        {
          subtitle: '1.1 Information You Provide',
          items: [
            '<strong>Account Information:</strong> Name, email address, company name, billing information',
            '<strong>Social Media Credentials:</strong> OAuth tokens for connected social media accounts',
            '<strong>Content Data:</strong> Posts, images, videos, and other content you publish through our platform',
            '<strong>Communication Data:</strong> Messages you send to our support team'
          ]
        },
        {
          subtitle: '1.2 Automatically Collected Information',
          items: [
            '<strong>API Usage Data:</strong> API calls, endpoints accessed, request/response data, timestamps',
            '<strong>Device Information:</strong> IP address, browser type, operating system',
            '<strong>Cookies and Tracking:</strong> Session cookies, analytics cookies'
          ]
        }
      ]
    },
    {
      icon: HiEye,
      title: '2. How We Use Your Information',
      content: [
        {
          items: [
            'Provide, operate, and maintain our Service',
            'Process and complete transactions',
            'Authenticate social media accounts and publish content on your behalf',
            'Send you technical notices, updates, security alerts',
            'Respond to your comments, questions, and customer service requests',
            'Analyze usage patterns to improve our Service',
            'Detect, prevent, and address technical issues and fraudulent activity'
          ]
        }
      ]
    },
    {
      icon: HiUserGroup,
      title: '3. Information Sharing',
      content: [
        {
          subtitle: 'We may share your information with:',
          items: [
            '<strong>Social Media Platforms:</strong> We share content with platforms you\'ve connected (Instagram, TikTok, YouTube, etc.)',
            '<strong>Service Providers:</strong> Cloud hosting, payment processors, analytics providers',
            '<strong>Legal Requirements:</strong> When required by law or to protect our rights',
            '<strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets'
          ]
        },
        {
          subtitle: 'We do NOT:',
          items: [
            'Sell your personal information to third parties',
            'Share your OAuth tokens with anyone',
            'Use your content for our own marketing without permission'
          ]
        }
      ]
    },
    {
      icon: HiLockClosed,
      title: '4. Data Security',
      content: [
        {
          items: [
            '<strong>Encryption:</strong> All data in transit is encrypted using TLS 1.3',
            '<strong>OAuth Security:</strong> Social media tokens are encrypted at rest and rotated regularly',
            '<strong>Access Controls:</strong> Strict access controls and authentication for our systems',
            '<strong>Regular Audits:</strong> Security assessments and penetration testing',
            '<strong>Compliance:</strong> SOC 2 Type II certified, GDPR compliant'
          ]
        }
      ]
    },
    {
      icon: HiShieldCheck,
      title: '5. Your Rights',
      content: [
        {
          subtitle: 'You have the right to:',
          items: [
            '<strong>Access:</strong> Request a copy of your personal data',
            '<strong>Correction:</strong> Update or correct inaccurate information',
            '<strong>Deletion:</strong> Request deletion of your account and associated data',
            '<strong>Export:</strong> Download your content and data in a portable format',
            '<strong>Opt-out:</strong> Unsubscribe from marketing communications',
            '<strong>Revoke Access:</strong> Disconnect social media accounts at any time'
          ]
        }
      ]
    },
    {
      icon: HiGlobe,
      title: '6. Data Retention',
      content: [
        {
          items: [
            '<strong>Active Accounts:</strong> Data retained as long as your account is active',
            '<strong>Deleted Accounts:</strong> Most data deleted within 30 days; some logs retained for 90 days for security',
            '<strong>Backups:</strong> Backup data may persist for up to 180 days',
            '<strong>Legal Obligations:</strong> Some data may be retained longer to comply with legal requirements'
          ]
        }
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Privacy Policy - Media Share</title>
        <meta name="description" content="Privacy Policy for Media Share - How we collect, use, and protect your data" />
      </Head>

      <Navbar />

      <div className="min-h-screen bg-slate-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Header */}
        <div className="relative z-10 pt-24 pb-12 bg-gradient-to-b from-slate-900/50 to-transparent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
              >
                <HiShieldCheck className="text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">Your Privacy Matters</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Policy</span>
              </h1>
              <p className="text-xl text-slate-400 mb-6 leading-relaxed max-w-2xl mx-auto">
                We take your privacy seriously. This policy explains how we collect, use, and protect your information.
              </p>
              <p className="text-sm text-slate-500">
                Last Updated: November 24, 2025
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 mb-8"
          >
            <p className="text-slate-300 leading-relaxed">
              At Media Share ("we", "our", or "us"), we take your privacy seriously. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you use our Service.
            </p>
          </motion.div>

          {/* Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 rounded-2xl border border-indigo-500/20">
                    <section.icon className="text-3xl text-indigo-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white pt-2">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((block, blockIndex) => (
                    <div key={blockIndex}>
                      {block.subtitle && (
                        <h3 className="text-lg font-semibold text-white mb-4">{block.subtitle}</h3>
                      )}
                      <ul className="space-y-3">
                        {block.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-slate-300">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></span>
                            <span 
                              className="text-sm leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: item }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-indigo-500/20"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have questions about this Privacy Policy or how we handle your data, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">
                <strong className="text-white">Email:</strong> {siteConfig.contact.privacy}
              </p>
              {/* <p className="text-slate-400">
                <strong className="text-white">Address:</strong> {siteConfig.address.line1}, {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}, {siteConfig.address.country}
              </p> */}
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </>
  )
}
