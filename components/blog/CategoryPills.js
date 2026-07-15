import Link from 'next/link'

export default function CategoryPills({ categories, active = null }) {
  if (!categories?.length) return null
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Link
        href="/blog/"
        className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors ${
          !active
            ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300'
            : 'border-white/10 text-slate-400 hover:text-white hover:border-white/25'
        }`}
      >
        All posts
      </Link>
      {categories.map(c => (
        <Link
          key={c.category}
          href={`/blog/category/${c.category}/`}
          className={`px-3.5 py-1.5 rounded-full text-sm font-medium border capitalize transition-colors ${
            active === c.category
              ? 'bg-indigo-500/15 border-indigo-500/40 text-indigo-300'
              : 'border-white/10 text-slate-400 hover:text-white hover:border-white/25'
          }`}
        >
          {c.category}
          <span className="ml-1.5 text-xs text-slate-500">{c.count}</span>
        </Link>
      ))}
    </div>
  )
}
