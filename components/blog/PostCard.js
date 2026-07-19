import Link from 'next/link'
import { formatPostDate } from '../../lib/blog'
import PlatformBackdrop from './PlatformBackdrop'

/**
 * Blog card — `featured` renders the large split layout used for the latest
 * post on the index; default renders the grid card.
 */
export default function PostCard({ post, featured = false }) {
  const href = `/blog/${post.slug}/`

  if (featured) {
    return (
      <Link
        href={href}
        className="group grid md:grid-cols-2 gap-0 rounded-3xl border border-line bg-surface overflow-hidden hover:border-line-strong transition-colors"
      >
        <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[320px] bg-surface">
          {post.coverImage?.url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.coverImage.url}
              alt={post.coverImage.alt || post.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-violet-600/30 flex items-center justify-center overflow-hidden">
              <PlatformBackdrop size={64} gap={26} className="opacity-[0.12]" />
            </div>
          )}
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-3 text-xs mb-4">
            {post.category && (
              <span className="px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 font-medium capitalize">{post.category}</span>
            )}
            <span className="text-subtle">{formatPostDate(post.publishedAt)}</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-body tracking-tight leading-snug group-hover:text-indigo-300 transition-colors">
            {post.title}
          </h2>
          {post.excerpt && (
            <p className="mt-3 text-muted leading-relaxed line-clamp-3">{post.excerpt}</p>
          )}
          <div className="mt-5 flex items-center gap-2 text-sm text-subtle">
            {post.authorName && <span className="text-muted">{post.authorName}</span>}
            {post.authorName && <span>·</span>}
            <span>{post.readingTimeMinutes} min read</span>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="group flex flex-col rounded-2xl border border-line bg-surface overflow-hidden hover:border-line-strong hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative aspect-[16/9] bg-surface">
        {post.coverImage?.url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage.url}
            alt={post.coverImage.alt || post.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/25 to-violet-600/25 flex items-center justify-center overflow-hidden">
            <PlatformBackdrop size={44} gap={20} count={5} className="opacity-[0.12]" />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2.5 text-xs mb-3">
          {post.category && (
            <span className="px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 font-medium capitalize">{post.category}</span>
          )}
          <span className="text-subtle">{formatPostDate(post.publishedAt)}</span>
        </div>
        <h3 className="font-display text-lg font-semibold text-body leading-snug group-hover:text-indigo-300 transition-colors line-clamp-2">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
        )}
        <div className="mt-auto pt-4 flex items-center gap-2 text-xs text-subtle">
          {post.authorName && <span className="text-muted">{post.authorName}</span>}
          {post.authorName && <span>·</span>}
          <span>{post.readingTimeMinutes} min read</span>
        </div>
      </div>
    </Link>
  )
}
