import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import { visit } from 'unist-util-visit'
import { siteConfig } from '../config/siteConfig'

/**
 * Build-time blog data layer. Used only inside getStaticProps/getStaticPaths —
 * nothing here ships to the client. Fetches published posts from the backend's
 * public /api/blog routes and renders markdown to HTML.
 *
 * A build MUST fail loudly if the API is unreachable (a silently empty blog
 * deployed to production is worse than a failed deploy). Zero published posts
 * is fine — pages render their empty states.
 */

const API = siteConfig.api.baseUrl

async function fetchJson(path) {
  const res = await fetch(`${API}${path}`)
  if (!res.ok) {
    throw new Error(`Blog build fetch failed: ${API}${path} → HTTP ${res.status}`)
  }
  const payload = await res.json()
  return payload?.data || payload
}

export async function getAllPosts() {
  const posts = []
  let page = 1
  // paginate defensively; the API caps limit at 100
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const data = await fetchJson(`/api/blog/posts?limit=100&page=${page}`)
    posts.push(...(data.posts || []))
    if (page >= (data.pages || 1)) break
    page++
  }
  return posts
}

export async function getPostBySlug(slug) {
  const data = await fetchJson(`/api/blog/posts/${encodeURIComponent(slug)}`)
  return data.post
}

export async function getCategories() {
  const data = await fetchJson('/api/blog/categories')
  return data.categories || []
}

/**
 * Markdown → HTML (+ heading list for the TOC). rehype-slug puts the same ids
 * on the rendered headings that we return here, so TOC anchors always match.
 */
export async function renderMarkdown(markdown) {
  const headings = []

  const collectHeadings = () => (tree) => {
    visit(tree, 'element', (node) => {
      if (['h2', 'h3'].includes(node.tagName) && node.properties?.id) {
        const text = extractText(node)
        headings.push({ id: node.properties.id, text, depth: node.tagName === 'h2' ? 2 : 3 })
      }
    })
  }

  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(collectHeadings)
    .use(rehypeStringify)
    .process(markdown || '')

  return { html: String(file), headings }
}

function extractText(node) {
  if (node.type === 'text') return node.value
  if (node.children) return node.children.map(extractText).join('')
  return ''
}

/**
 * Related posts: shared category counts double, each shared tag counts once.
 * Falls back to the latest posts so the rail is never empty.
 */
export function getRelatedPosts(post, allPosts, count = 3) {
  const scored = allPosts
    .filter(p => p.slug !== post.slug)
    .map(p => {
      let score = 0
      if (p.category && p.category === post.category) score += 2
      const shared = (p.tags || []).filter(t => (post.tags || []).includes(t))
      score += shared.length
      return { post: p, score }
    })
    .sort((a, b) => b.score - a.score || new Date(b.post.publishedAt) - new Date(a.post.publishedAt))

  return scored.slice(0, count).map(s => s.post)
}

export function formatPostDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
