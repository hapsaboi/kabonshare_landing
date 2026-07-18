import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PostCard from '../../components/blog/PostCard'
import BlogCTA from '../../components/blog/BlogCTA'
import AuthorBox from '../../components/blog/AuthorBox'
import PlatformBackdrop, { PlatformScatter } from '../../components/blog/PlatformBackdrop'
import { getAllPosts, renderMarkdown, getRelatedPosts, formatPostDate } from '../../lib/blog'

export async function getStaticPaths() {
  const posts = await getAllPosts()
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const posts = await getAllPosts()
  const post = posts.find(p => p.slug === params.slug)
  if (!post) return { notFound: true }

  const { html, headings } = await renderMarkdown(post.content)
  const related = getRelatedPosts(post, posts)

  return { props: { post, html, headings, related } }
}

export default function BlogArticle({ post, html, headings, related }) {
  const canonical = post.seo?.canonicalUrl || `https://kabonshare.com/blog/${post.slug}/`
  const metaTitle = post.seo?.metaTitle || post.title
  const metaDescription = post.seo?.metaDescription || post.excerpt || ''

  // Scroll-spy for the TOC — same rule as LegalPage: the active section is the
  // last heading that has scrolled past the fixed-navbar offset.
  const [activeId, setActiveId] = useState(headings[0]?.id)
  useEffect(() => {
    if (!headings.length) return
    const onScroll = () => {
      let current = headings[0]?.id
      for (const h of headings) {
        const el = document.getElementById(h.id)
        if (el && el.getBoundingClientRect().top <= 140) current = h.id
      }
      setActiveId(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [headings])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: metaDescription,
    ...(post.coverImage?.url ? { image: [post.coverImage.url] } : {}),
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: { '@type': 'Person', name: post.authorName || 'KabonShare Team' },
    publisher: {
      '@type': 'Organization',
      name: 'KabonShare',
      logo: { '@type': 'ImageObject', url: 'https://kabonshare.com/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  }

  return (
    <>
      <Head>
        <title>{`${metaTitle} - KabonShare Blog`}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonical} />
        {post.coverImage?.url && <meta property="og:image" content={post.coverImage.url} />}
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.updatedAt || post.publishedAt} />
        {(post.tags || []).map(t => <meta key={t} property="article:tag" content={t} />)}
        <meta name="twitter:card" content={post.coverImage?.url ? 'summary_large_image' : 'summary'} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <Navbar />

      <div className="relative min-h-screen bg-page">
        {/* Faint platform-logo scatter across the whole page background */}
        <PlatformScatter />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          {/* Split hero — text left, cover right (Buffer-style) */}
          <header className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">
            <div>
              <div className="flex items-center gap-2 text-sm mb-6">
                <Link href="/blog/" className="text-subtle hover:text-muted transition-colors">Blog</Link>
                {post.category && (
                  <>
                    <span className="text-muted">›</span>
                    <Link
                      href={`/blog/category/${post.category}/`}
                      className="text-muted capitalize hover:text-slate-200 transition-colors"
                    >
                      {post.category}
                    </Link>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 mb-5">
                {post.category ? (
                  <Link
                    href={`/blog/category/${post.category}/`}
                    className="px-3 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 text-sm font-medium capitalize hover:bg-indigo-500/25 transition-colors"
                  >
                    {post.category}
                  </Link>
                ) : <span />}
                <span className="text-sm text-subtle">{formatPostDate(post.publishedAt)}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-body tracking-tight leading-[1.1] mb-5">
                {post.title}
              </h1>

              {post.excerpt && (
                <p className="text-lg text-muted leading-relaxed mb-5">{post.excerpt}</p>
              )}

              <p className="text-sm text-subtle mb-8">{post.readingTimeMinutes} minute read</p>

              {post.authorName && (
                <div className="flex items-center gap-3">
                  {post.authorAvatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.authorAvatar}
                      alt={post.authorName}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10 flex-shrink-0"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {post.authorName.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase()}
                    </div>
                  )}
                  <span className="text-sm font-semibold text-body">{post.authorName}</span>
                </div>
              )}
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-line bg-surface">
              {post.coverImage?.url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.coverImage.url}
                  alt={post.coverImage.alt || post.title}
                  className="w-full aspect-[16/10] object-cover"
                />
              ) : (
                <div className="w-full aspect-[16/10] bg-gradient-to-br from-indigo-500/20 to-violet-600/20 flex items-center justify-center overflow-hidden">
                  <PlatformBackdrop size={72} gap={28} className="opacity-[0.14]" />
                </div>
              )}
            </div>
          </header>

          <div className="lg:grid lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
            {/* TOC rail */}
            <nav aria-label="Table of contents" className="hidden lg:block">
              {headings.length > 1 && (
                <div className="sticky top-28">
                  <p className="text-xs font-semibold uppercase tracking-wider text-subtle mb-4">On this page</p>
                  <ol className="space-y-2.5 border-l border-line">
                    {headings.map(h => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          aria-current={activeId === h.id ? 'true' : undefined}
                          className={`block text-sm leading-snug -ml-px border-l pl-3.5 transition-colors ${
                            h.depth === 3 ? 'pl-7' : ''
                          } ${
                            activeId === h.id
                              ? 'border-indigo-400 text-body font-medium'
                              : 'border-transparent text-muted hover:text-body'
                          }`}
                        >
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </nav>

            {/* Body */}
            <main className="max-w-3xl min-w-0">
              <article
                className="prose prose-invert prose-slate max-w-none
                  prose-headings:text-body prose-headings:tracking-tight prose-headings:scroll-mt-28
                  prose-p:text-muted prose-li:text-muted
                  prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-body prose-blockquote:border-indigo-500/50 prose-blockquote:text-muted
                  prose-code:text-indigo-300 prose-pre:bg-surface prose-pre:border prose-pre:border-line
                  prose-img:rounded-2xl prose-hr:border-line"
                dangerouslySetInnerHTML={{ __html: html }}
              />

              <div className="mt-12 space-y-10">
                <AuthorBox post={post} />
                <BlogCTA />

                {related.length > 0 && (
                  <section>
                    <h2 className="text-xl font-semibold text-body mb-6">Keep reading</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {related.map(p => <PostCard key={p.slug} post={p} />)}
                    </div>
                  </section>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
