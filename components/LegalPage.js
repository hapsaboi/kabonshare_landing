'use client'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { siteConfig } from '../config/siteConfig'

/**
 * Shared document shell for document-style pages (terms, privacy, about): left sticky table
 * of contents with scroll-spy highlighting, numbered sections, contact box.
 * Section list items may contain HTML (links, <strong>) — trusted, static,
 * authored in this repo.
 */
export default function LegalPage({ title, description, lastUpdated, intro, sections, contactPrompt, eyebrow = 'Legal' }) {
  const [activeId, setActiveId] = useState(sections[0]?.id)

  // Scroll-spy: the active section is the last one whose heading has scrolled
  // past the fixed-navbar offset (matches the sections' scroll-mt-28 ≈ 112px).
  useEffect(() => {
    const ids = sections.map(s => s.id)
    const onScroll = () => {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActiveId(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-page">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          {/* Document header */}
          <header className="max-w-3xl border-b border-line pb-10 mb-10">
            <p className="text-sm font-medium text-indigo-400 mb-3">{eyebrow}</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-body tracking-tight mb-4">{title}</h1>
            <p className="text-lg text-muted leading-relaxed">{description}</p>
            <p className="mt-4 text-sm text-subtle">Last updated {lastUpdated}</p>
          </header>

          <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            {/* Table of contents — sticky rail on desktop, inline list on mobile */}
            <nav aria-label="Table of contents" className="mb-10 lg:mb-0">
              <div className="lg:sticky lg:top-28">
                <p className="text-xs font-semibold uppercase tracking-wider text-subtle mb-4">On this page</p>
                <ol className="space-y-2.5">
                  {sections.map((s, i) => {
                    const active = s.id === activeId
                    return (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          aria-current={active ? 'true' : undefined}
                          className={`group flex items-baseline gap-2.5 text-sm transition-colors ${
                            active ? 'text-body font-medium' : 'text-muted hover:text-body'
                          }`}
                        >
                          <span className={`font-mono text-xs transition-colors ${
                            active ? 'text-indigo-400' : 'text-muted group-hover:text-indigo-400'
                          }`}>{String(i + 1).padStart(2, '0')}</span>
                          {s.title}
                        </a>
                      </li>
                    )
                  })}
                </ol>
              </div>
            </nav>

            {/* Document body */}
            <main className="max-w-3xl">
              {intro && (
                <p className="text-muted leading-relaxed pb-12 mb-12 border-b border-line">{intro}</p>
              )}

              {sections.map((section, index) => (
                <section key={section.id} id={section.id} className="scroll-mt-28 pb-12 mb-12 border-b border-line last:border-0 last:mb-0 last:pb-0">
                  <h2 className="flex items-baseline gap-3 text-2xl font-semibold text-body mb-6">
                    <span className="font-mono text-sm text-indigo-400">{String(index + 1).padStart(2, '0')}</span>
                    {section.title}
                  </h2>

                  <div className="space-y-7">
                    {section.content.map((block, blockIndex) => (
                      <div key={blockIndex}>
                        {block.text && (
                          <p className="text-muted leading-relaxed mb-4">{block.text}</p>
                        )}
                        {block.subtitle && (
                          <h3 className="text-base font-semibold text-body mb-3">{block.subtitle}</h3>
                        )}
                        {block.items && (
                          <ul className="space-y-2.5">
                            {block.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="relative pl-5 text-[15px] leading-relaxed text-muted [&_strong]:text-slate-200 [&_strong]:font-medium [&_a]:text-indigo-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-indigo-300">
                                <span className="absolute left-0 top-[0.7em] w-1.5 h-px bg-slate-600" aria-hidden="true"></span>
                                <span dangerouslySetInnerHTML={{ __html: item }} />
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              ))}

              {/* Contact */}
              <div className="mt-4 rounded-xl border border-line bg-surface px-6 py-5">
                <p className="text-sm text-muted leading-relaxed">
                  {contactPrompt}{' '}
                  <a href={`mailto:${siteConfig.contact.support}`} className="text-indigo-400 hover:text-indigo-300 font-medium">
                    {siteConfig.contact.support}
                  </a>
                </p>
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
