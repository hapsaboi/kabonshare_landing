/**
 * Post-build SEO artifacts: writes out/sitemap.xml and out/rss.xml from the
 * backend's public blog API. Runs after `next build` (static export), so it
 * overwrites the copy of anything that came from public/.
 *
 * This script is the single source of truth for the sitemap — when a new
 * static page ships, add it to STATIC_PAGES below.
 */
const fs = require('fs')
const path = require('path')

const SITE = 'https://kabonshare.com'
const API = process.env.NEXT_PUBLIC_API_URL || 'https://api.kabonshare.com'
const OUT = path.join(__dirname, '..', 'out')

// Keep the /features/<slug>/ list in sync with config/features.js (that file
// imports react-icons, so it can't be required from this CJS script directly).
const FEATURE_SLUGS = [
  'social-media-publishing',
  'social-media-scheduling',
  'ai-social-media-manager',
  'social-media-analytics',
  'live-follower-count',
  'team-collaboration',
  'live-streaming-multistream',
  'media-library',
  'social-media-api',
]

// Keep in sync with config/useCases.js (same reason as FEATURE_SLUGS).
const USE_CASE_SLUGS = [
  'social-media-for-creators',
  'social-media-for-agencies',
  'social-media-for-brands',
  'social-media-for-saas',
  'social-media-for-schools',
]

const STATIC_PAGES = [
  '/',
  '/features/',
  ...FEATURE_SLUGS.map((s) => `/features/${s}/`),
  '/pricing/',
  '/case-studies/',
  ...USE_CASE_SLUGS.map((s) => `/case-studies/${s}/`),
  '/contact/',
  '/get-our-apps/',
  '/privacy/',
  '/terms/',
  '/blog/',
]

const esc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

async function fetchAllPosts() {
  const posts = []
  let page = 1
  while (true) {
    const res = await fetch(`${API}/api/blog/posts?limit=100&page=${page}`)
    if (!res.ok) throw new Error(`SEO script: blog API returned HTTP ${res.status}`)
    const payload = await res.json()
    const data = payload?.data || payload
    posts.push(...(data.posts || []))
    if (page >= (data.pages || 1)) break
    page++
  }
  return posts
}

function buildSitemap(posts) {
  const today = new Date().toISOString().slice(0, 10)
  const urls = []

  for (const p of STATIC_PAGES) {
    urls.push(`  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod></url>`)
  }
  for (const post of posts) {
    const lastmod = (post.updatedAt || post.publishedAt || '').slice(0, 10) || today
    urls.push(`  <url><loc>${SITE}/blog/${post.slug}/</loc><lastmod>${lastmod}</lastmod></url>`)
  }
  const categories = [...new Set(posts.map(p => p.category).filter(Boolean))]
  for (const c of categories) {
    urls.push(`  <url><loc>${SITE}/blog/category/${c}/</loc><lastmod>${today}</lastmod></url>`)
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

function buildRss(posts) {
  const items = posts.slice(0, 30).map(post => `    <item>
      <title>${esc(post.title)}</title>
      <link>${SITE}/blog/${post.slug}/</link>
      <guid isPermaLink="true">${SITE}/blog/${post.slug}/</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      ${post.category ? `<category>${esc(post.category)}</category>` : ''}
      <description>${esc(post.excerpt || '')}</description>
    </item>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>KabonShare Blog</title>
    <link>${SITE}/blog/</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
    <description>Social media strategy, scheduling tips, and product updates from the KabonShare team.</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>
`
}

async function main() {
  if (!fs.existsSync(OUT)) {
    throw new Error(`SEO script: ${OUT} does not exist — run after \`next build\``)
  }
  const posts = await fetchAllPosts()
  fs.writeFileSync(path.join(OUT, 'sitemap.xml'), buildSitemap(posts))
  fs.writeFileSync(path.join(OUT, 'rss.xml'), buildRss(posts))
  console.log(`✓ sitemap.xml (${STATIC_PAGES.length} static + ${posts.length} posts) and rss.xml written to out/`)
}

main().catch(err => {
  console.error(err.message)
  process.exit(1)
})
