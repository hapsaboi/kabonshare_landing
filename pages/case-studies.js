'use client'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { FaCheck, FaArrowRight, FaChartLine, FaClock, FaUsers, FaRocket } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const caseStudies = [
  {
    id: 1,
    company: 'Content Creators & Influencers',
    industry: 'Media & Entertainment',
    logo: '🎬',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
    challenge: 'Managing content across multiple platforms is overwhelming. Each platform has different requirements, formats, and optimal posting times. Manually posting the same content everywhere wastes valuable creative time that should be spent creating.',
    solution: 'Create your content once and publish everywhere with Kabon Share. Our platform handles the technical details - formats, aspect ratios, and platform requirements - so you can schedule your posts to go live simultaneously across Instagram, TikTok, YouTube, Facebook, and more with just a few clicks.',
    results: [
      { metric: '5+', label: 'Platforms in One Click' },
      { metric: '80%', label: 'More Time Creating' },
      { metric: '3x', label: 'More Reach' },
      { metric: '90%', label: 'Time Saved' }
    ],
    quote: 'Perfect for creators, influencers, and content networks who want to maximize their reach across all platforms without spending hours on manual posting and platform-specific formatting.',
    tags: ['Content Creation', 'Multi-Platform', 'Time Savings']
  },
  {
    id: 2,
    company: 'Digital Marketing Agencies',
    industry: 'Marketing & Advertising',
    logo: '🎯',
    gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    challenge: 'Managing social media for dozens of clients is time-consuming and error-prone. Each platform requires separate logins, different posting formats, and manual scheduling across hundreds of accounts. Team collaboration is difficult without proper tools.',
    solution: 'Centralize all social media publishing with Kabon Share. Create custom workspaces for each client, automate posting workflows, and manage unlimited accounts from a single interface. Your team can collaborate seamlessly with role-based access and approval workflows.',
    results: [
      { metric: '85%', label: 'Time Saved' },
      { metric: 'Unlimited', label: 'Client Accounts' },
      { metric: '10x', label: 'Faster Campaigns' },
      { metric: '$50K+', label: 'Annual Savings' }
    ],
    quote: 'Built for agencies managing multiple clients who need centralized control, automated workflows, team collaboration features, and white-label capabilities.',
    tags: ['Multi-Client', 'Team Collaboration', 'Automation']
  },
  {
    id: 3,
    company: 'E-commerce Brands',
    industry: 'Retail & E-commerce',
    logo: '🛍️',
    gradient: 'from-pink-500 via-rose-500 to-red-500',
    challenge: 'Product launches require perfectly coordinated posts across multiple platforms simultaneously. Manual posting leads to inconsistent timing, missed opportunities, and difficulty tracking which products were promoted where. Visual consistency is crucial for brand identity.',
    solution: 'Integrate Kabon Share with your product catalog or e-commerce platform. Automatically create stunning posts with product images and descriptions. Schedule launches across all platforms for peak engagement times, ensuring every product gets maximum visibility.',
    results: [
      { metric: '300%', label: 'More Engagement' },
      { metric: '3x', label: 'Product Launches' },
      { metric: '100%', label: 'Brand Consistency' },
      { metric: '45%', label: 'Higher Conversions' }
    ],
    quote: 'Ideal for e-commerce businesses that need to promote products across multiple platforms, coordinate launches perfectly, and maintain consistent brand messaging.',
    tags: ['E-commerce', 'Product Launches', 'Brand Consistency']
  },
  {
    id: 4,
    company: 'SaaS Products & Apps',
    industry: 'Software & Technology',
    logo: '⚡',
    gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    challenge: 'Building and maintaining social media integrations diverts valuable engineering resources from core product development. Custom implementations are costly, time-consuming, and require ongoing maintenance as platforms change their APIs.',
    solution: 'Replace months of development with Kabon Share API. Implement social sharing features for your users in days instead of months. We handle the complexity, platform updates, and maintenance - letting your engineers focus on building your core product.',
    results: [
      { metric: '3+ Months', label: 'Dev Time Saved' },
      { metric: '10x', label: 'Faster Launch' },
      { metric: '70%', label: 'User Adoption' },
      { metric: '$150K+', label: 'Cost Savings' }
    ],
    quote: 'Perfect for SaaS companies and app developers who want to add powerful social media publishing features without diverting engineering resources from their core product.',
    tags: ['API Integration', 'Developer Tools', 'Fast Deployment']
  }
]

export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Use Cases - Kabon Share</title>
        <meta name="description" content="Explore how Kabon Share can transform your social media workflow across different industries and use cases" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6">
                Use Cases
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Built for Every Industry
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              See how Kabon Share transforms social media management across different business models
            </motion.p>
          </div>
        </section>

        {/* Case Studies */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-6">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
              >
                <div className="p-6 md:p-8">
                    {/* Company Header */}
                    <div className="flex items-start gap-3 mb-5">
                      <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                        {study.logo}
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {study.company}
                        </h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{study.industry}</p>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-5 mb-5">
                      <div>
                        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                          Challenge
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                          Solution
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-4 gap-3 mb-5 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                      {study.results.map((result, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg font-bold text-primary mb-0.5">
                            {result.metric}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Perfect For */}
                    <div className="bg-primary/5 dark:bg-primary/10 p-3 rounded-lg border-l-3 border-primary">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <span className="font-semibold text-gray-900 dark:text-white">Perfect for:</span> {study.quote}
                      </p>
                    </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-center text-white shadow-2xl"
            >
              <FaRocket className="text-6xl mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-4">
                Ready to Transform Your Social Media Workflow?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Start publishing to multiple platforms with a single API call
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://dashboard.kabonshare.com"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
                >
                  Start Free Trial
                  <FaArrowRight />
                </a>
                <a
                  href="mailto:info@kabonshare.com"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
                >
                  Contact Sales
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
