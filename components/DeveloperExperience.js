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

const tabs = [
  {
    language: 'Node.js', icon: SiNodedotjs, color: 'text-green-400',
    lines: [
      { type: 'comment', text: '// Publish to multiple platforms at once' },
      { type: 'blank' },
      { type: 'keyword', text: 'const', rest: ' form = new FormData();' },
      { type: 'plain',   text: "form.append(", str: "'platforms'", rest: ", 'instagram,tiktok,youtube');" },
      { type: 'plain',   text: "form.append(", str: "'caption'",   rest: ", 'Golden hour ✨ #travel');" },
      { type: 'plain',   text: "form.append(", str: "'media'",     rest: ', fs.createReadStream(', str2: "'beach.mp4'", end: '));' },
      { type: 'blank' },
      { type: 'keyword', text: 'const', rest: ' response = ', kw2: 'await', rest2: ' fetch(' },
      { type: 'indent',  str: "'https://api.kabonshare.com/api/posts'", rest: ', {' },
      { type: 'indent2', text: 'method:', str: " 'POST'", rest: ',' },
      { type: 'indent2', text: 'headers: { ', kw: "'X-API-Key'", rest: ': ', str: "'sk_••••••••'", end: ' },' },
      { type: 'indent2', text: 'body: form' },
      { type: 'indent',  text: '});' },
      { type: 'blank' },
      { type: 'plain',   text: 'console.log(', kw: 'await', rest: ' response.json());' },
    ]
  },
  {
    language: 'Python', icon: SiPython, color: 'text-blue-400',
    lines: [
      { type: 'comment', text: '# Publish to multiple platforms at once' },
      { type: 'blank' },
      { type: 'keyword', text: 'import', rest: ' requests' },
      { type: 'blank' },
      { type: 'plain',   text: 'files = {', str: "'media'", rest: ': open(', str2: "'beach.mp4'", end: ", 'rb')}," },
      { type: 'plain',   text: 'data  = {' },
      { type: 'indent',  str: "'platforms'", rest: ': ', str2: "'instagram,tiktok,youtube'", end: ',' },
      { type: 'indent',  str: "'caption'",   rest: ': ',  str2: "'Golden hour ✨ #travel'", end: ',' },
      { type: 'plain',   text: '}' },
      { type: 'blank' },
      { type: 'plain',   text: 'res = requests.post(' },
      { type: 'indent',  str: "'https://api.kabonshare.com/api/posts'", rest: ',' },
      { type: 'indent',  text: 'headers={', str: "'X-API-Key'", rest: ': ', str2: "'sk_••••••••'", end: '},' },
      { type: 'indent',  text: 'data=data, files=files' },
      { type: 'plain',   text: ')' },
      { type: 'plain',   text: 'print(res.json())' },
    ]
  },
  {
    language: 'cURL', icon: SiCurl, color: 'text-slate-400',
    lines: [
      { type: 'comment', text: '# Publish to multiple platforms at once' },
      { type: 'blank' },
      { type: 'plain',   text: 'curl -X POST ', str: 'https://api.kabonshare.com/api/posts' },
      { type: 'indent',  text: '-H ', str: '"X-API-Key: sk_••••••••"', rest: ' \\' },
      { type: 'indent',  text: '-F ', str: '"platforms=instagram,tiktok,youtube"', rest: ' \\' },
      { type: 'indent',  text: '-F ', str: '"caption=Golden hour ✨ #travel"', rest: ' \\' },
      { type: 'indent',  text: '-F ', str: '"media=@beach.mp4"' },
    ]
  },
]

const features = [
  { icon: FiBook,        color: 'text-blue-400',    bg: 'bg-blue-500/10 border-blue-500/20',     title: 'Comprehensive Docs',       desc: 'Full API reference, guides, and working examples for every endpoint.' },
  { icon: FiZap,         color: 'text-amber-400',   bg: 'bg-amber-500/10 border-amber-500/20',   title: 'Fast Response Times',      desc: 'Average API response time under 200ms globally with edge infrastructure.' },
  { icon: FiAlertCircle, color: 'text-rose-400',    bg: 'bg-rose-500/10 border-rose-500/20',     title: 'Clear Error Messages',     desc: 'Machine-readable codes and human-friendly descriptions for fast debugging.' },
  { icon: FiShield,      color: 'text-violet-400',  bg: 'bg-violet-500/10 border-violet-500/20', title: 'Reliable Delivery',        desc: 'Automatic retries and a queue system ensure every post goes out.' },
  { icon: FiGlobe,       color: 'text-cyan-400',    bg: 'bg-cyan-500/10 border-cyan-500/20',     title: 'Any Language',             desc: 'Plain REST — works with Node, Python, PHP, Ruby, Go, or anything else.' },
  { icon: FiCpu,         color: 'text-orange-400',  bg: 'bg-orange-500/10 border-orange-500/20', title: 'MCP Support',              desc: 'Connect Claude and other AI agents to your publishing workflow via the Model Context Protocol.' },
]

function CodeLine({ line }) {
  const s = 'text-amber-300'
  const k = 'text-violet-400'
  const c = 'text-slate-500 italic'
  const p = 'text-slate-300'
  const indent = 'pl-4'
  const indent2 = 'pl-8'

  if (line.type === 'blank') return <div className="h-3" />
  if (line.type === 'comment') return <p className={c}>{line.text}</p>

  const cls = line.type === 'indent2' ? indent2 : line.type === 'indent' ? indent : ''

  return (
    <p className={cls}>
      {line.type === 'keyword' && <span className={k}>{line.text}</span>}
      {line.kw2 && <><span className={p}>{line.rest} </span><span className={k}>{line.kw2}</span></>}
      {line.kw && <span className={k}>{line.kw}</span>}
      {line.text && line.type !== 'keyword' && <span className={p}>{line.text}</span>}
      {line.rest && line.type !== 'keyword' && !line.kw2 && <span className={p}>{line.rest}</span>}
      {line.str  && <span className={s}>{line.str}</span>}
      {line.rest2 && <span className={p}>{line.rest2}</span>}
      {line.str2 && <span className={s}>{line.str2}</span>}
      {line.end  && <span className={p}>{line.end}</span>}
    </p>
  )
}

export default function DeveloperExperience() {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const rawCode = tabs[activeTab].lines
    .map(l => l.text || l.str || '')
    .join('\n')

  const copy = () => {
    navigator.clipboard.writeText(rawCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="developer-experience" className="py-14 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div variants={fade} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-semibold text-emerald-300 tracking-wider uppercase">Developer Experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Developers</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Clean REST API that works in any language. Ship social publishing in hours, not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">

          {/* ── Left: Code editor ── */}
          <motion.div variants={fade} custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bg-slate-900 rounded-3xl overflow-hidden">

              {/* Editor title bar */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-800 bg-slate-900">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[11px] text-slate-500 font-mono ml-1">publish.{activeTab === 0 ? 'js' : activeTab === 1 ? 'py' : 'sh'}</span>
                <div className="ml-auto flex items-center gap-1">
                  {tabs.map((t, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveTab(i)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                        activeTab === i
                          ? 'bg-slate-700 text-white'
                          : 'text-slate-500 hover:text-slate-300'
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
                <pre className="px-5 py-4 text-[12px] leading-[1.8] font-mono bg-slate-950 overflow-x-auto min-h-[220px]">
                  {tabs[activeTab].lines.map((line, i) => (
                    <CodeLine key={i} line={line} />
                  ))}
                </pre>
                <button
                  onClick={copy}
                  className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors text-[11px] font-medium"
                >
                  {copied ? <FiCheck size={11} className="text-emerald-400" /> : <FiCopy size={11} />}
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>

              {/* Quick start strip */}
              <div className="px-5 py-3.5 border-t border-slate-800 flex items-center gap-6">
                {[
                  { n: '1', label: 'Get your API key' },
                  { n: '2', label: 'Connect accounts' },
                  { n: '3', label: 'Start publishing' },
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 text-[9px] font-bold flex items-center justify-center flex-shrink-0">{step.n}</span>
                    <span className="text-[11px] text-slate-500">{step.label}</span>
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
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-800 transition-colors"
              >
                <div className={`w-8 h-8 rounded-xl border flex items-center justify-center flex-shrink-0 ${f.bg}`}>
                  <f.icon className={f.color} size={14} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-0.5">{f.title}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
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
