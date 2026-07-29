import Head from 'next/head'
import Link from 'next/link'
import { HiOutlineArrowRight, HiOutlineCheck } from 'react-icons/hi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { CaseStudyCTA } from '../components/caseStudySections'
import { USE_CASES } from '../config/useCases'

// Use Cases overview hub. Each audience now lives on its own indexable page
// (/case-studies/<slug>) — this page introduces them and links out to each.
export default function CaseStudies() {
  return (
    <>
      <Head>
        <title>Use Cases — Social Media Management for Every Team | KabonShare</title>
        <meta name="description" content="See how creators, agencies, brands, SaaS developers and schools use KabonShare to publish smarter across 9 networks — each with a workflow built for them." />
        <link rel="canonical" href="https://kabonshare.com/case-studies/" />
        <meta property="og:title" content="Use Cases — KabonShare" />
        <meta property="og:description" content="How creators, agencies, brands, developers and schools publish smarter with KabonShare." />
        <meta property="og:url" content="https://kabonshare.com/case-studies/" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-page pt-[68px]">
        {/* Compact hero */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center pt-14 lg:pt-20 pb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-xs font-semibold text-violet-400 tracking-wider uppercase">Use Cases</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-body tracking-[-0.035em] leading-[1.0] mb-5">
            Built for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">every workflow.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-xl mx-auto leading-relaxed">
            Whether you&apos;re a solo creator, an agency managing 50 clients, or a developer building social features — KabonShare fits. Pick your world.
          </p>
        </section>

        {/* Audience grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {USE_CASES.map((u) => {
              const Icon = u.icon
              return (
                <Link
                  key={u.id}
                  href={`/case-studies/${u.slug}/`}
                  className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent"
                  style={{ boxShadow: 'var(--card-shadow)' }}
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl mb-4" style={{ background: `color-mix(in srgb, ${u.color} 14%, transparent)` }}>
                    <Icon style={{ color: u.color, fontSize: 22 }} />
                  </span>
                  <h2 className="font-display font-bold text-body text-lg tracking-[-0.01em] mb-1.5">{u.label}</h2>
                  <p className="text-sm text-muted leading-relaxed mb-4">{u.menuDesc}</p>
                  <ul className="space-y-1.5 mb-5">
                    {u.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-[13px] text-muted">
                        <HiOutlineCheck style={{ color: u.color }} className="w-3.5 h-3.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: u.color }}>
                    Explore
                    <HiOutlineArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        <CaseStudyCTA />
        <Footer />
      </main>
    </>
  )
}
