'use client'
import Link from 'next/link'
import { FiCheck, FiArrowRight } from 'react-icons/fi'
import { FEATURES } from '../config/features'
import { siteConfig } from '../config/siteConfig'

// Shared building blocks for the features hub (/features) and every per-feature
// page (/features/<slug>). One render path for a feature's content, so the two
// routes can never drift apart.

// Browser-framed screenshot slot. `image` may be:
//   • a string  → same screenshot for both themes
//   • { light, dark } → swaps by theme (pure CSS, no flash)
//   • null/undefined → styled placeholder
// Drop files in /public/features/.
export function Shot({ image, color, Icon, label }) {
  const light = typeof image === 'string' ? image : image?.light || image?.dark || null
  const dark = typeof image === 'string' ? image : image?.dark || image?.light || null
  const dual = light && dark && light !== dark

  return (
    <div className="rounded-2xl border border-line bg-raised overflow-hidden" style={{ boxShadow: 'var(--card-shadow)' }}>
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-line bg-inset">
        <span className="w-3 h-3 rounded-full bg-rose-400/70" />
        <span className="w-3 h-3 rounded-full bg-amber-400/70" />
        <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[11px] text-subtle truncate">dashboard.kabonshare.com</span>
      </div>
      {light || dark ? (
        dual ? (
          <>
            {/* eslint-disable @next/next/no-img-element */}
            <img src={light} alt={label} className="only-light w-full" />
            <img src={dark} alt={label} className="only-dark w-full" />
            {/* eslint-enable @next/next/no-img-element */}
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={light || dark} alt={label} className="block w-full" />
        )
      ) : (
        <div className="aspect-[16/10] flex flex-col items-center justify-center gap-3"
          style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${color} 16%, transparent), transparent 70%)` }}>
          <span className="flex items-center justify-center w-14 h-14 rounded-2xl"
            style={{ background: `color-mix(in srgb, ${color} 18%, transparent)` }}>
            <Icon style={{ color, fontSize: 26 }} />
          </span>
          <span className="text-sm font-medium text-subtle">{label} screenshot</span>
        </div>
      )}
    </div>
  )
}

// Developer-native visual: a terminal/editor card for API & MCP snippets.
// `code` = { label, text }. Always dark — code reads well dark in both themes.
export function CodeCard({ code }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-[#0d1117]" style={{ boxShadow: 'var(--card-shadow)' }}>
      <div className="flex items-center gap-1.5 px-4 h-9 border-b border-slate-800 bg-[#161b22]">
        <span className="w-3 h-3 rounded-full bg-rose-400/70" />
        <span className="w-3 h-3 rounded-full bg-amber-400/70" />
        <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[11px] text-slate-400 truncate font-mono">{code.label}</span>
      </div>
      <pre className="p-5 text-[12.5px] leading-relaxed font-mono text-slate-200 overflow-x-auto whitespace-pre">
        <code>{code.text}</code>
      </pre>
    </div>
  )
}

// A slot renders code when provided, otherwise the screenshot Shot.
/**
 * A numbered flow, for features better explained as a sequence than shown as a
 * screenshot. `steps` = [{ title, desc }].
 *
 * Client invites is the case this exists for: the value is in what the CLIENT
 * does, which happens outside our UI, so a screenshot of our own form would
 * show the least interesting part of it.
 */
export function FlowCard({ steps, color }) {
  return (
    <div className="rounded-2xl border border-line bg-raised p-6 sm:p-7" style={{ boxShadow: 'var(--card-shadow)' }}>
      <ol className="space-y-5">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full text-[13px] font-bold shrink-0"
                style={{ background: `color-mix(in srgb, ${color} 16%, transparent)`, color }}
              >
                {i + 1}
              </span>
              {/* Connector, so the steps read as one sequence rather than three
                  unrelated cards. Not after the last one. */}
              {i < steps.length - 1 && (
                <span className="w-px flex-1 mt-2 -mb-3" style={{ background: `color-mix(in srgb, ${color} 22%, transparent)` }} />
              )}
            </div>
            <div className="pb-1">
              <p className="font-semibold text-body text-[15px] leading-snug">{s.title}</p>
              <p className="text-sm text-muted leading-relaxed mt-1">{s.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

export function Visual({ image, code, steps, color, Icon, label }) {
  if (code) return <CodeCard code={code} />
  if (steps) return <FlowCard steps={steps} color={color} />
  return <Shot image={image} color={color} Icon={Icon} label={label} />
}

export function Bullets({ items, color }) {
  return (
    <ul className="space-y-3">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span className="flex items-center justify-center w-5 h-5 rounded-full mt-0.5 shrink-0" style={{ background: `color-mix(in srgb, ${color} 16%, transparent)` }}>
            <FiCheck style={{ color }} className="w-3 h-3" />
          </span>
          <span className="text-body">{b}</span>
        </li>
      ))}
    </ul>
  )
}

// Sticky sub-nav: every feature as a link to its own page. `activeId` highlights
// the current one. Rendered on each per-feature page for sibling navigation.
export function FeatureTabs({ activeId }) {
  return (
    <div className="sticky top-[68px] z-30 bg-[var(--nav-scrolled)] backdrop-blur-md border-b border-line">
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex gap-1 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FEATURES.map((t) => {
            const on = t.id === activeId
            const TabIcon = t.icon
            return (
              <Link
                key={t.id}
                href={`/features/${t.slug}/`}
                className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-colors ${on ? 'text-body' : 'text-muted hover:text-body'}`}
                style={on ? { background: `color-mix(in srgb, ${t.color} 14%, transparent)` } : undefined}
              >
                <TabIcon style={{ color: on ? t.color : 'currentColor', fontSize: 16 }} />
                {t.label}
                {t.badge && (
                  <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-500">{t.badge}</span>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// The full body of a single feature: hero → benefits grid → alternating
// blocks → testimonial. Shared verbatim by every per-feature page.
export function FeatureBody({ f }) {
  const Icon = f.icon
  return (
    <>
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 lg:pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="flex items-center justify-center w-8 h-8 rounded-lg" style={{ background: `color-mix(in srgb, ${f.color} 14%, transparent)` }}>
                <Icon style={{ color: f.color, fontSize: 17 }} />
              </span>
              <span className="text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: f.color }}>{f.hero.eyebrow}</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-body tracking-[-0.03em] leading-[1.05] sm:leading-[1.02] mb-4 sm:mb-5">
              {f.hero.title}
            </h1>
            <p className="text-base sm:text-lg text-muted leading-relaxed mb-7 max-w-xl">{f.hero.desc}</p>
            <div className="mb-9"><Bullets items={f.hero.bullets} color={f.color} /></div>
            <div className="flex flex-wrap items-center gap-4">
              <a href={`${siteConfig.dashboard}/signup`}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-violet-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5">
                Get Started Free
                <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              {f.hero.link ? (
                <a href={f.hero.link.href} target="_blank" rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-body font-semibold hover:text-primary transition-colors">
                  {f.hero.link.label}
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ) : (
                <Link href="/pricing" className="inline-flex items-center gap-1.5 text-body font-semibold hover:text-primary transition-colors">View pricing</Link>
              )}
            </div>
          </div>
          <Visual image={f.hero.image} code={f.hero.code} color={f.color} Icon={Icon} label={f.label} />
        </div>
      </section>

      {/* BENEFITS grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {f.benefits.map((b) => {
            const BIcon = b.icon
            return (
              <div key={b.title} className="rounded-2xl border border-line bg-surface p-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl mb-3" style={{ background: `color-mix(in srgb, ${f.color} 13%, transparent)` }}>
                  <BIcon style={{ color: f.color, fontSize: 19 }} />
                </span>
                <h3 className="font-display font-bold text-body text-[15px] mb-1">{b.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* FEATURE BLOCKS — alternating */}
      {f.blocks.map((blk, i) => (
        <section key={i} className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className={blk.flip ? 'lg:order-2' : ''}>
              {blk.eyebrow && (
                <span className="text-xs font-semibold uppercase tracking-[0.12em] mb-3 block" style={{ color: f.color }}>{blk.eyebrow}</span>
              )}
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-body tracking-[-0.02em] leading-[1.08] mb-4">
                {blk.title}
              </h2>
              <p className="text-base sm:text-lg text-muted leading-relaxed mb-6 max-w-xl">{blk.desc}</p>
              {blk.bullets && <Bullets items={blk.bullets} color={f.color} />}
            </div>
            <div className={blk.flip ? 'lg:order-1' : ''}>
              <Visual image={blk.image} code={blk.code} steps={blk.steps} color={f.color} Icon={Icon} label={f.label} />
            </div>
          </div>
        </section>
      ))}

      {/* TESTIMONIAL */}
      {f.quote && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <figure className="rounded-3xl border border-line bg-surface p-8 sm:p-12 text-center">
            <div className="text-5xl leading-none mb-4" style={{ color: f.color }} aria-hidden>&ldquo;</div>
            <blockquote className="font-display text-xl sm:text-2xl font-semibold text-body leading-snug tracking-[-0.01em] max-w-2xl mx-auto">
              {f.quote.text}
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-semibold text-body">{f.quote.name}</span>
              <span className="text-subtle"> · {f.quote.role}</span>
            </figcaption>
          </figure>
        </section>
      )}
    </>
  )
}

export function FeatureCTA() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-violet-600 px-8 py-14 text-center">
        <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.02em] mb-3">
            Ready to publish everywhere?
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
            Start free — no credit card. Connect your networks and go live in under a minute.
          </p>
          <a href={`${siteConfig.dashboard}/signup`}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-primary text-lg font-bold rounded-2xl hover:-translate-y-0.5 transition-transform">
            Get Started Free
            <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
