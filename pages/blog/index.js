import { useState, useMemo, useRef } from 'react'
import Head from 'next/head'
import { FiSearch, FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PostCard from '../../components/blog/PostCard'
import CategoryPills from '../../components/blog/CategoryPills'
import { PlatformScatter } from '../../components/blog/PlatformBackdrop'
import { getAllPosts, getCategories } from '../../lib/blog'

const PAGE_SIZE = 9

export async function getStaticProps() {
  const [posts, categories] = await Promise.all([getAllPosts(), getCategories()])
  return { props: { posts, categories } }
}

export default function BlogIndex({ posts, categories }) {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const gridRef = useRef(null)

  const searching = query.trim().length > 0

  // Client-side search across everything the reader can see on a card.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return posts
    return posts.filter(p =>
      p.title?.toLowerCase().includes(q) ||
      p.excerpt?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q) ||
      p.authorName?.toLowerCase().includes(q) ||
      (p.tags || []).some(t => t.toLowerCase().includes(q))
    )
  }, [posts, query])

  // Featured post only on the unfiltered first view; search results are a plain grid.
  const featured = !searching ? filtered[0] : null
  const gridPosts = !searching ? filtered.slice(1) : filtered

  const totalPages = Math.max(1, Math.ceil(gridPosts.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)
  const pagePosts = gridPosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  const goToPage = (n) => {
    setPage(n)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const onSearch = (v) => {
    setQuery(v)
    setPage(1)
  }

  // Compact page-number list: 1 … around-current … last
  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1)
    const nums = new Set([1, 2, currentPage - 1, currentPage, currentPage + 1, totalPages - 1, totalPages])
    const list = [...nums].filter(n => n >= 1 && n <= totalPages).sort((a, b) => a - b)
    const out = []
    for (let i = 0; i < list.length; i++) {
      if (i > 0 && list[i] - list[i - 1] > 1) out.push('…')
      out.push(list[i])
    }
    return out
  }, [totalPages, currentPage])

  return (
    <>
      <Head>
        <title>Blog - KabonShare</title>
        <meta name="description" content="Social media strategy, scheduling tips, and product updates from the KabonShare team." />
        <link rel="canonical" href="https://kabonshare.com/blog/" />
        <meta property="og:title" content="Blog - KabonShare" />
        <meta property="og:description" content="Social media strategy, scheduling tips, and product updates from the KabonShare team." />
        <meta property="og:url" content="https://kabonshare.com/blog/" />
      </Head>

      <Navbar />

      <div className="relative min-h-screen bg-page">
        {/* Faint platform-logo scatter across the whole page background */}
        <PlatformScatter />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          {/* Hero */}
          <header className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">KabonShare Blog</p>
            <h1 className="text-4xl sm:text-6xl font-bold text-body tracking-tight mb-5">
              Grow your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">social presence</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Strategy, scheduling tips, platform know-how, and product updates from the KabonShare team.
            </p>

            {/* Search */}
            <div className="relative max-w-lg mx-auto">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-subtle" />
              <input
                value={query}
                onChange={e => onSearch(e.target.value)}
                placeholder="Search articles…"
                className="w-full pl-13 pr-12 py-4 rounded-2xl bg-surface border border-line text-body placeholder-slate-400 focus:outline-none focus:border-indigo-500/60 focus:bg-surface transition-all"
                style={{ paddingLeft: '3.25rem' }}
              />
              {query && (
                <button
                  onClick={() => onSearch('')}
                  aria-label="Clear search"
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full text-subtle hover:text-body hover:bg-surface transition-colors"
                >
                  <FiX className="w-4 h-4" />
                </button>
              )}
            </div>
          </header>

          {/* Categories */}
          {!searching && (
            <div className="flex justify-center mb-12">
              <CategoryPills categories={categories} />
            </div>
          )}

          {/* Search summary */}
          {searching && (
            <p className="text-sm text-muted mb-8">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''} for <span className="text-body font-medium">&ldquo;{query.trim()}&rdquo;</span>
            </p>
          )}

          {posts.length === 0 ? (
            <div className="rounded-2xl border border-line bg-surface p-16 text-center">
              <p className="text-muted">No posts yet — check back soon.</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl border border-line bg-surface p-16 text-center">
              <p className="text-muted font-medium mb-1">Nothing found for &ldquo;{query.trim()}&rdquo;</p>
              <p className="text-sm text-subtle">Try a different keyword, or browse a category above.</p>
            </div>
          ) : (
            <div className="space-y-12" ref={gridRef} style={{ scrollMarginTop: '110px' }}>
              {featured && <PostCard post={featured} featured />}

              {pagePosts.length > 0 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pagePosts.map(post => <PostCard key={post.slug} post={post} />)}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5 pt-2">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage <= 1}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-line text-sm text-muted hover:text-body hover:border-line-strong disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <FiArrowLeft className="w-4 h-4" /> <span className="hidden sm:inline">Previous</span>
                  </button>
                  {pageNumbers.map((n, i) => n === '…' ? (
                    <span key={`e${i}`} className="px-2 text-muted">…</span>
                  ) : (
                    <button
                      key={n}
                      onClick={() => goToPage(n)}
                      aria-current={n === currentPage ? 'page' : undefined}
                      className={`w-10 h-10 rounded-xl text-sm font-medium transition-colors ${
                        n === currentPage
                          ? 'bg-indigo-600 text-white'
                          : 'border border-line text-muted hover:text-body hover:border-line-strong'
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage >= totalPages}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-line text-sm text-muted hover:text-body hover:border-line-strong disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  >
                    <span className="hidden sm:inline">Next</span> <FiArrowRight className="w-4 h-4" />
                  </button>
                </nav>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  )
}
