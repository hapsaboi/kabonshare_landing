import { formatPostDate } from '../../lib/blog'

export default function AuthorBox({ post }) {
  if (!post.authorName) return null
  const initials = post.authorName.split(/\s+/).map(w => w[0]).slice(0, 2).join('').toUpperCase()
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
      {post.authorAvatar ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={post.authorAvatar} alt={post.authorName} className="w-12 h-12 rounded-full object-cover ring-2 ring-white/10 flex-shrink-0" />
      ) : (
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold flex-shrink-0">
          {initials}
        </div>
      )}
      <div className="min-w-0">
        <p className="text-sm font-semibold text-body">{post.authorName}</p>
        <p className="text-xs text-muted mt-0.5">
          Published {formatPostDate(post.publishedAt)}
          {post.updatedAt && new Date(post.updatedAt) - new Date(post.publishedAt) > 24 * 3600 * 1000 && (
            <> · Updated {formatPostDate(post.updatedAt)}</>
          )}
        </p>
      </div>
    </div>
  )
}
