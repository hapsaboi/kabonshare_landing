'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaCopy, FaCheck } from 'react-icons/fa'
import { HiOutlineBookOpen, HiOutlineLightningBolt, HiOutlineSearch, HiOutlineRefresh, HiOutlineShieldCheck, HiOutlineCreditCard } from 'react-icons/hi'
import { SiNodedotjs, SiPython, SiCurl } from 'react-icons/si'
import { siteConfig } from '../config/siteConfig'

const codeExamples = [
  {
    language: 'cURL',
    icon: SiCurl,
    color: 'text-gray-400',
    code: `curl -X POST https://api.kabonshare.com/api/posts \\
  -H "X-API-Key: sk_your_api_key" \\
  -F "platforms=instagram,tiktok,youtube" \\
  -F "contentType=reel" \\
  -F "text=Check out my new reel! 🎥" \\
  -F "hashtags=viral,reels,trending" \\
  -F "media=@video.mp4"`
  },
  {
    language: 'Node.js',
    icon: SiNodedotjs,
    color: 'text-green-500',
    code: `const FormData = require('form-data');
const fs = require('fs');

const form = new FormData();
form.append('platforms', 'instagram,facebook,threads');
form.append('text', 'Hello from Node.js! 👋');
form.append('media', fs.createReadStream('photo.jpg'));

const response = await fetch('https://api.kabonshare.com/api/posts', {
  method: 'POST',
  headers: { 
    'X-API-Key': 'sk_your_api_key',
    ...form.getHeaders()
  },
  body: form
});

const data = await response.json();
console.log(data);`
  },
  {
    language: 'Python',
    icon: SiPython,
    color: 'text-blue-500',
    code: `import requests

files = {'media': open('photo.jpg', 'rb')}
data = {
    'platforms': 'instagram,facebook',
    'text': 'Hello from Python! 🐍',
    'hashtags': 'python,api,automation'
}

response = requests.post(
    'https://api.kabonshare.com/api/posts',
    headers={'X-API-Key': 'sk_your_api_key'},
    data=data,
    files=files
)

print(response.json())`
  }
]

const devFeatures = [
  {
    icon: HiOutlineBookOpen,
    title: 'Comprehensive Docs',
    description: 'Clear guides, API reference, and examples for every use case',
    color: 'text-blue-400'
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Fast Response Times',
    description: 'Average API response time under 200ms globally',
    color: 'text-amber-400'
  },
  {
    icon: HiOutlineSearch,
    title: 'Detailed Error Messages',
    description: 'Clear error codes and messages so you can debug quickly',
    color: 'text-rose-400'
  },
  {
    icon: HiOutlineRefresh,
    title: 'RESTful API',
    description: 'Simple REST API that works with any programming language',
    color: 'text-emerald-400'
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Reliable Delivery',
    description: 'Automatic retries and queue system ensure posts are published',
    color: 'text-violet-400'
  },
  {
    icon: HiOutlineCreditCard,
    title: 'Flexible Billing',
    description: 'Credit-based system with clear pricing, real-time tracking',
    color: 'text-cyan-400'
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
    <section id="developer-experience" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium text-emerald-300">Developer Experience</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Developers
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Clean, intuitive API that feels natural in any language. Ship social publishing in hours, not months.
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
            <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5">
              {/* Language Tabs */}
              <div className="flex border-b border-white/5 bg-slate-900/50">
                {codeExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-all ${
                      activeTab === index
                        ? 'bg-white/5 text-white border-b-2 border-indigo-500'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <example.icon className={activeTab === index ? example.color : ''} />
                    {example.language}
                  </button>
                ))}
              </div>

              {/* Code Display */}
              <div className="relative">
                <pre className="bg-slate-950 text-slate-300 p-5 overflow-x-auto h-80 text-sm leading-relaxed font-mono">
                  <code>{codeExamples[activeTab].code}</code>
                </pre>

                <button
                  onClick={copyToClipboard}
                  className="absolute top-3 right-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white p-2 rounded-lg transition-all duration-200 flex items-center gap-2 border border-white/5"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-400 text-xs" />
                      <span className="text-xs">Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy className="text-xs" />
                      <span className="text-xs">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Start */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 bg-slate-900/50 backdrop-blur-sm rounded-xl p-5 border border-white/5"
            >
              <h4 className="font-bold text-white mb-3 flex items-center gap-2 text-sm">
                <HiOutlineLightningBolt className="text-amber-400" />
                Quick Start — 3 Steps
              </h4>
              <div className="space-y-2 text-sm text-slate-400">
                <p className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center font-bold">1</span> Sign up and get your API key</p>
                <p className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center font-bold">2</span> Connect your social accounts</p>
                <p className="flex items-center gap-2"><span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs flex items-center justify-center font-bold">3</span> Start publishing in minutes</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {devFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ x: 4 }}
                className="flex gap-4 bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-white/5 hover:border-white/10 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <feature.icon className={`text-xl ${feature.color}`} />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-0.5 text-sm">{feature.title}</h4>
                  <p className="text-sm text-slate-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <a
                href={siteConfig.api.docs}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-7 py-3.5 rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                <HiOutlineBookOpen className="text-lg" />
                Explore API Docs
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
