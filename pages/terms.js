'use client'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HiDocumentText, HiUserCircle, HiCreditCard, HiShieldCheck, HiExclamation, HiScale } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { siteConfig } from '../config/siteConfig'

export default function Terms() {
  const sections = [
    {
      icon: HiDocumentText,
      title: '1. Acceptance of Terms',
      content: [
        {
          text: 'By accessing and using the KabonShare service ("Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this Service.'
        }
      ]
    },
    {
      icon: HiShieldCheck,
      title: '2. Description of Service',
      content: [
        {
          text: 'KabonShare provides a unified API and application for publishing content to multiple social media platforms including Instagram, TikTok, YouTube, Facebook, Twitter/X, LinkedIn, and Threads. The Service includes:',
          items: [
            'API access for content publishing',
            'OAuth management and authentication',
            'Media upload and processing',
            'Scheduling and queuing features',
            'Analytics and reporting',
            'Webhook notifications'
          ]
        }
      ]
    },
    {
      icon: HiUserCircle,
      title: '3. Account Registration',
      content: [
        {
          text: 'To use the Service, you must:',
          items: [
            'Provide accurate, current, and complete information during registration',
            'Maintain and promptly update your account information',
            'Maintain the security of your API keys and credentials',
            'Accept responsibility for all activities under your account',
            'Notify us immediately of any unauthorized use'
          ]
        }
      ]
    },
    {
      icon: HiCreditCard,
      title: '4. Billing and Credits',
      content: [
        {
          subtitle: 'Credit System',
          items: [
            'Each post costs 1 credit, regardless of media type (text, image, or video)',
            'Each post costs 1 credit, regardless of how many platforms it publishes to',
            'Monthly credits are allocated based on your subscription plan',
            'Unused credits do not roll over to the next billing period',
            'Additional credits can be purchased at the rate specified in your plan'
          ]
        },
        {
          subtitle: 'Billing',
          items: [
            'Subscription fees are billed in advance on a monthly or annual basis',
            'All fees are non-refundable except as required by law',
            'You authorize us to charge your payment method for all fees incurred',
            'Failure to pay may result in suspension or termination of service'
          ]
        }
      ]
    },
    {
      icon: HiExclamation,
      title: '5. Acceptable Use Policy',
      content: [
        {
          text: 'You agree not to use the Service to:',
          items: [
            'Violate any laws or regulations',
            'Infringe on intellectual property rights',
            'Transmit spam, malware, or malicious content',
            'Engage in abusive or harassing behavior',
            'Impersonate others or misrepresent your identity',
            'Attempt to gain unauthorized access to our systems',
            'Reverse engineer or attempt to extract source code',
            'Resell or redistribute the Service without permission'
          ]
        }
      ]
    },
    {
      icon: HiScale,
      title: '6. Content and Liability',
      content: [
        {
          subtitle: 'Your Content',
          items: [
            'You retain all rights to content you publish through the Service',
            'You grant us a license to process and transmit your content to social media platforms',
            'You are solely responsible for the content you publish',
            'You must have all necessary rights and permissions for the content you publish'
          ]
        },
        {
          subtitle: 'Our Liability',
          items: [
            'The Service is provided "as is" without warranties of any kind',
            'We are not responsible for content published through the Service',
            'We are not liable for platform-specific errors or limitations',
            'Our total liability is limited to the amount you paid in the last 12 months',
            'We are not liable for indirect, incidental, or consequential damages'
          ]
        }
      ]
    },
    {
      icon: HiDocumentText,
      title: '7. Termination',
      content: [
        {
          items: [
            'You may cancel your subscription at any time through your account settings',
            'We may suspend or terminate your account for violations of these terms',
            'Upon termination, your access to the Service will cease immediately',
            'We may retain certain data as required by law or for legitimate business purposes'
          ]
        }
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Terms of Service - KabonShare</title>
        <meta name="description" content="Terms of Service for KabonShare - Rules and guidelines for using our service" />
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
                <HiScale className="text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">Legal Agreement</span>
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Service</span>
              </h1>
              <p className="text-xl text-slate-400 mb-6 leading-relaxed max-w-2xl mx-auto">
                Please read these terms carefully before using our service.
              </p>
              <p className="text-sm text-slate-500">
                Last Updated: November 24, 2025
              </p>
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                      {block.text && (
                        <p className="text-slate-300 leading-relaxed mb-4">{block.text}</p>
                      )}
                      {block.subtitle && (
                        <h3 className="text-lg font-semibold text-white mb-4">{block.subtitle}</h3>
                      )}
                      {block.items && (
                        <ul className="space-y-3">
                          {block.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3 text-slate-300">
                              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2"></span>
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
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
            <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-400">
                <strong className="text-white">Email:</strong> {siteConfig.contact.legal}
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
