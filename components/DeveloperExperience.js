'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiCopy, FiCheck, FiBook, FiZap, FiShield, FiAlertCircle, FiGlobe, FiCpu } from 'react-icons/fi'
import { SiNodedotjs, SiPython, SiCurl } from 'react-icons/si'
import { siteConfig } from '../config/siteConfig'

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
}

// Token colours. Each code line is an ordered array of [type, text] pairs, so
// tokens render left-to-right exactly as written — no more scrambled output.
const COL = {
  k: 'text-violet-600 dark:text-violet-400',
  s: 'text-amber-700 dark:text-amber-400',
  c: 'text-subtle italic',
  p: 'text-body',
}
const B = null // blank line marker

const tabs = [
  {
    language: 'Node.js', icon: SiNodedotjs, color: 'text-green-500', ext: 'js',
    raw: `// Publish to multiple platforms at once

const form = new FormData();
form.append('platforms', 'instagram,tiktok,youtube');
form.append('caption', 'Golden hour ✨ #travel');
form.append('media', fs.createReadStream('beach.mp4'));

const response = await fetch('https://api.kabonshare.com/api/posts', {
  method: 'POST',
  headers: { 'X-API-Key': 'sk_********' },
  body: form,
});

console.log(await response.json());`,
    lines: [
      [['c', '// Publish to multiple platforms at once']],
      B,
      [['k', 'const'], ['p', ' form = new FormData();']],
      [['p', 'form.append('], ['s', "'platforms'"], ['p', ', '], ['s', "'instagram,tiktok,youtube'"], ['p', ');']],
      [['p', 'form.append('], ['s', "'caption'"], ['p', ', '], ['s', "'Golden hour ✨ #travel'"], ['p', ');']],
      [['p', 'form.append('], ['s', "'media'"], ['p', ', fs.createReadStream('], ['s', "'beach.mp4'"], ['p', '));']],
      B,
      [['k', 'const'], ['p', ' response = '], ['k', 'await'], ['p', ' fetch('], ['s', "'https://api.kabonshare.com/api/posts'"], ['p', ', {']],
      [['p', '  method: '], ['s', "'POST'"], ['p', ',']],
      [['p', '  headers: { '], ['s', "'X-API-Key'"], ['p', ': '], ['s', "'sk_********'"], ['p', ' },']],
      [['p', '  body: form,']],
      [['p', '});']],
      B,
      [['p', 'console.log('], ['k', 'await'], ['p', ' response.json());']],
    ],
  },
  {
    language: 'Python', icon: SiPython, color: 'text-blue-500', ext: 'py',
    raw: `# Publish to multiple platforms at once

import requests

files = {'media': open('beach.mp4', 'rb')}
data = {
    'platforms': 'instagram,tiktok,youtube',
    'caption': 'Golden hour ✨ #travel',
}

res = requests.post(
    'https://api.kabonshare.com/api/posts',
    headers={'X-API-Key': 'sk_********'},
    data=data, files=files,
)
print(res.json())`,
    lines: [
      [['c', '# Publish to multiple platforms at once']],
      B,
      [['k', 'import'], ['p', ' requests']],
      B,
      [['p', 'files = { '], ['s', "'media'"], ['p', ': open('], ['s', "'beach.mp4'"], ['p', ', '], ['s', "'rb'"], ['p', ') }']],
      [['p', 'data = {']],
      [['p', '    '], ['s', "'platforms'"], ['p', ': '], ['s', "'instagram,tiktok,youtube'"], ['p', ',']],
      [['p', '    '], ['s', "'caption'"], ['p', ': '], ['s', "'Golden hour ✨ #travel'"], ['p', ',']],
      [['p', '}']],
      B,
      [['p', 'res = requests.post(']],
      [['p', '    '], ['s', "'https://api.kabonshare.com/api/posts'"], ['p', ',']],
      [['p', '    headers={ '], ['s', "'X-API-Key'"], ['p', ': '], ['s', "'sk_********'"], ['p', ' },']],
      [['p', '    data=data, files=files,']],
      [['p', ')']],
      [['p', 'print(res.json())']],
    ],
  },
  {
    language: 'cURL', icon: SiCurl, color: 'text-muted', ext: 'sh',
    raw: `# Publish to multiple platforms at once

curl -X POST https://api.kabonshare.com/api/posts \\
  -H "X-API-Key: sk_********" \\
  -F "platforms=instagram,tiktok,youtube" \\
  -F "caption=Golden hour ✨ #travel" \\
  -F "media=@beach.mp4"`,
    lines: [
      [['c', '# Publish to multiple platforms at once']],
      B,
      [['p', 'curl -X POST '], ['s', 'https://api.kabonshare.com/api/posts'], ['p', ' \\']],
      [['p', '  -H '], ['s', '"X-API-Key: sk_********"'], ['p', ' \\']],
      [['p', '  -F '], ['s', '"platforms=instagram,tiktok,youtube"'], ['p', ' \\']],
      [['p', '  -F '], ['s', '"caption=Golden hour ✨ #travel"'], ['p', ' \\']],
      [['p', '  -F '], ['s', '"media=@beach.mp4"']],
    ],
  },
]

const features = [
  { icon: FiBook,        color: 'text-blue-400',    bg: 'bg-blue-500/10 border-blue-500/20',     title: 'Comprehensive Docs',   desc: 'Full API reference, guides, and working examples for every endpoint.' },
  { icon: FiZap,         color: 'text-amber-400',   bg: 'bg-amber-500/10 border-amber-500/20',   title: 'Fast Response Times',  desc: 'Average API response time under 200ms globally with edge infrastructure.' },
  { icon: FiAlertCircle, color: 'text-rose-400',    bg: 'bg-rose-500/10 border-rose-500/20',     title: 'Clear Error Messages', desc: 'Machine-readable codes and human-friendly descriptions for fast debugging.' },
  { icon: FiShield,      color: 'text-violet-400',  bg: 'bg-violet-500/10 border-violet-500/20', title: 'Reliable Delivery',    desc: 'Automatic retries and a queue system ensure every post goes out.' },
  { icon: FiGlobe,       color: 'text-cyan-400',    bg: 'bg-cyan-500/10 border-cyan-500/20',     title: 'Any Language',         desc: 'Plain REST — works with Node, Python, PHP, Ruby, Go, or anything else.' },
  { icon: FiCpu,         color: 'text-orange-400',  bg: 'bg-orange-500/10 border-orange-500/20', title: 'MCP Support',          desc: 'Connect Claude and other AI agents to your publishing workflow via the Model Context Protocol.' },
]

function CodeLine({ tokens }) {
  if (!tokens) return <div className="h-[1.1em]" />
  return (
    <div>
      {tokens.map(([t, v], i) => <span key={i} className={COL[t]}>{v}</span>)}
    </div>
  )
}

export default function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(tabs[activeTab].raw)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="developer-experience" className="py-10 md:py-14 bg-page relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div variants={fade} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-300 tracking-wider uppercase">Developer Experience</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-body tracking-[-0.02em] mb-3">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">developers.</span>
          </h2>
          <p className="text-muted text-sm max-w-lg mx-auto">
            A clean REST API that works in any language. Ship social publishing in hours, not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* ── Left: Code editor ── */}
          <motion.div variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="rounded-3xl border border-line bg-surface overflow-hidden shadow-2xl shadow-emerald-900/5">

              {/* Editor title bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-line">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[11px] text-subtle font-mono ml-1">publish.{tabs[activeTab].ext}</span>
                <div className="ml-auto flex items-center gap-1">
                  {tabs.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                        activeTab === i ? 'bg-inset text-body' : 'text-subtle hover:text-muted'
                      }`}
                    >
                      <t.icon size={11} className={activeTab === i ? t.color : ''} />
                      {t.language}
                    </button>
                  ))}
                </div>
              </div>

              {/* Code */}
              <div className="relative">
                <pre className="px-5 py-4 text-[12.5px] leading-[1.75] font-mono bg-page overflow-x-auto min-h-[300px]">
                  <code>
                    {tabs[activeTab].lines.map((tokens, i) => (
                      <CodeLine key={i} tokens={tokens} />
                    ))}
                  </code>
                </pre>
                <button
                  onClick={copy}
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-surface border border-line text-muted hover:text-body hover:border-line-strong transition-colors text-[11px] font-medium"
                >
                  {copied ? <FiCheck size={11} className="text-emerald-500" /> : <FiCopy size={11} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Quick start strip */}
              <div className="px-5 py-3.5 border-t border-line flex flex-wrap items-center gap-x-6 gap-y-2">
                {[
                  { n: '1', label: 'Get your API key' },
                  { n: '2', label: 'Connect accounts' },
                  { n: '3', label: 'Start publishing' },
                ].map((step) => (
                  <div key={step.n} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 text-[9px] font-bold flex items-center justify-center flex-shrink-0">{step.n}</span>
                    <span className="text-[11px] text-muted">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Features + CTA ── */}
          <div className="space-y-2">
            {features.map((f, i) => (
              <motion.div key={f.title}
                variants={fade} custom={2 + i * 0.1} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl border border-line bg-surface hover:border-line-strong transition-colors"
              >
                <div className={`w-8 h-8 rounded-xl border flex items-center justify-center flex-shrink-0 ${f.bg}`}>
                  <f.icon className={f.color} size={14} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-body mb-0.5">{f.title}</p>
                  <p className="text-xs text-subtle leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}

            <motion.div variants={fade} custom={8} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="pt-2">
              <a
                href={siteConfig.api.docs}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                <FiBook size={14} />
                Explore API Docs
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
