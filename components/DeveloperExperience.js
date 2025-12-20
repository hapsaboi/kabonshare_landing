'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCode, FaCopy, FaCheck } from 'react-icons/fa'
import { SiNodedotjs, SiPython, SiCurl } from 'react-icons/si'

const codeExamples = [
  {
    language: 'Node.js',
    icon: SiNodedotjs,
    color: 'text-green-600',
    code: `const mediaShare = require('@media-share/sdk');

const client = new mediaShare.Client({ 
  apiKey: 'your_key' 
});

await client.posts.create({
  platforms: ['instagram', 'tiktok'],
  content: {
    text: 'Hello world!',
    media: ['photo.jpg']
  }
});`
  },
  {
    language: 'Python',
    icon: SiPython,
    color: 'text-blue-600',
    code: `from media_share import Client

client = Client(api_key='your_key')

client.posts.create(
  platforms=['instagram', 'tiktok'],
  content={
    'text': 'Hello world!',
    'media': ['photo.jpg']
  }
)`
  },
  {
    language: 'cURL',
    icon: SiCurl,
    color: 'text-gray-600',
    code: `curl -X POST https://api.media-share.io/v1/posts \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "platforms": ["instagram"],
    "content": {
      "text": "Hello!"
    }
  }'`
  }
]

export default function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExamples[activeTab].code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="developer-experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold border border-green-500/20">
              Developer Experience
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Built for Developers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Clean, intuitive API that feels natural in any language
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Code Examples */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
              {/* Language Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-750">
                {codeExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-6 py-4 font-semibold transition-all ${
                      activeTab === index
                        ? 'bg-white dark:bg-gray-800 text-primary border-b-2 border-primary'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <example.icon className={activeTab === index ? example.color : ''} />
                    {example.language}
                  </button>
                ))}
              </div>

              {/* Code Display */}
              <div className="relative">
                <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto h-80 text-sm leading-relaxed">
                  <code>{codeExamples[activeTab].code}</code>
                </pre>

                {/* Copy Button */}
                <button
                  onClick={copyToClipboard}
                  className="absolute top-4 right-4 bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-green-400" />
                      <span className="text-sm">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      <span className="text-sm">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Start Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <FaCode className="text-primary" />
                Quick Start
              </h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>1. Sign up for a free API key</p>
                <p>2. Install the SDK: <code className="bg-white dark:bg-gray-900 px-2 py-1 rounded">npm install @media-share/sdk</code></p>
                <p>3. Start publishing in minutes!</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Benefits & Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Built for Developers
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We obsess over developer experience so you can focus on building great products.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                {
                  icon: '📚',
                  title: 'Comprehensive Documentation',
                  description: 'Clear guides, API references, and examples for every use case'
                },
                {
                  icon: '🎯',
                  title: 'Type-Safe SDKs',
                  description: 'Official SDKs for JavaScript, Python, Ruby, Go, and PHP'
                },
                {
                  icon: '⚡',
                  title: 'Fast Response Times',
                  description: 'Average API response time under 200ms globally'
                },
                {
                  icon: '🔍',
                  title: 'Detailed Error Messages',
                  description: 'Clear error codes and messages to debug quickly'
                },
                {
                  icon: '🧪',
                  title: 'Sandbox Environment',
                  description: 'Test your integration without affecting production'
                },
                {
                  icon: '📡',
                  title: 'Real-time Webhooks',
                  description: 'Get notified instantly about post status changes'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-6"
            >
              <a
                href="https://docs.media-share.io"
                className="inline-flex items-center gap-2 bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <FaCode />
                Explore API Docs
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
