import Head from 'next/head'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FeatureCTA } from '../components/featureSections'
import { FEATURES } from '../config/features'

// The features overview hub. Each capability now lives on its own indexable
// page (/features/<slug>) — this page introduces them and links out to each,
// so it's the internal-linking hub, not a single tabbed page.
export default function FeaturesPage() {
  return (
    <>
      <Head>
        <title>Features — Everything KabonShare Does | Social Media Management</title>
        <meta name="description" content="Publishing, scheduling, AI, analytics, collaboration, live streaming, a media library and a developer API — everything you need to publish across 9 networks from one place." />
        <link rel="canonical" href="https://kabonshare.com/features/" />
        <meta property="og:title" content="Features — KabonShare" />
        <meta property="og:description" content="Everything you need to publish, schedule and grow across 9 social networks from one place." />
        <meta property="og:url" content="https://kabonshare.com/features/" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-page pt-[68px]">
        {/* Intro */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 lg:pt-24 pb-8 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Features</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-body tracking-[-0.03em] leading-[1.04] mt-4 mb-5 max-w-3xl mx-auto">
            Everything you need to run social — in one place.
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto">
            Publish and schedule across nine networks, create with AI, measure what works,
            collaborate with your team, go live, and build on our API. Explore each capability below.
          </p>
        </section>

        {/* Feature grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon
              return (
                <Link
                  key={f.id}
                  href={`/features/${f.slug}/`}
                  className="group relative rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent"
                  style={{ boxShadow: 'var(--card-shadow)' }}
                >
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl mb-4" style={{ background: `color-mix(in srgb, ${f.color} 14%, transparent)` }}>
                    <Icon style={{ color: f.color, fontSize: 22 }} />
                  </span>
                  <div className="flex items-center gap-2 mb-1.5">
                    <h2 className="font-display font-bold text-body text-lg tracking-[-0.01em]">{f.label}</h2>
                    {f.badge && (
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-500">{f.badge}</span>
                    )}
                  </div>
                  <p className="text-sm text-muted leading-relaxed mb-4">{f.menuDesc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors" style={{ color: f.color }}>
                    Explore
                    <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>

        <FeatureCTA />
        <Footer />
      </main>
    </>
  )
}
