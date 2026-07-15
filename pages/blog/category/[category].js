import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import PostCard from '../../../components/blog/PostCard'
import CategoryPills from '../../../components/blog/CategoryPills'
import { PlatformScatter } from '../../../components/blog/PlatformBackdrop'
import { getAllPosts, getCategories } from '../../../lib/blog'

export async function getStaticPaths() {
  const categories = await getCategories()
  return {
    paths: categories.map(c => ({ params: { category: c.category } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const [posts, categories] = await Promise.all([getAllPosts(), getCategories()])
  const filtered = posts.filter(p => p.category === params.category)
  if (!filtered.length) return { notFound: true }
  return { props: { posts: filtered, categories, category: params.category } }
}

export default function BlogCategory({ posts, categories, category }) {
  const pretty = category.replace(/-/g, ' ')
  const title = `${pretty.charAt(0).toUpperCase() + pretty.slice(1)} - KabonShare Blog`
  const description = `Articles about ${pretty} from the KabonShare team.`
  const canonical = `https://kabonshare.com/blog/category/${category}/`

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
      </Head>

      <Navbar />

      <div className="relative min-h-screen bg-slate-950">
        {/* Faint platform-logo scatter across the whole page background */}
        <PlatformScatter />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <header className="max-w-3xl mb-10">
            <Link href="/blog/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">← All posts</Link>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight capitalize mb-3">{pretty}</h1>
            <p className="text-lg text-slate-400">{posts.length} article{posts.length !== 1 ? 's' : ''}</p>
          </header>

          <div className="mb-10">
            <CategoryPills categories={categories} active={category} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => <PostCard key={post.slug} post={post} />)}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
